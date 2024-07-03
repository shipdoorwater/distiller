package com.digi.distiller.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.digi.distiller.Command;
import com.digi.distiller.dao.review.ReviewDao;
import com.digi.distiller.dto.drink.DrinkDto;
import com.digi.distiller.dto.review.ReviewDto;

@Controller
public class ReviewController {

	Command command = null;

	private JdbcTemplate template;
	private final ReviewDao reviewDao;

	@Autowired
	public ReviewController(ReviewDao reviewDao) {
		this.reviewDao = reviewDao;
	}

	@RequestMapping(value = "/drinkdetail/reviews", method = RequestMethod.GET)
	public String getReviews(@RequestParam String drinkId, String drinkName, Model model, HttpSession session) {
		System.out.print("컨트롤러 - 리뷰페이지보기");
		System.out.println("전달된 parameter(drinkId): " + drinkId);
		
		
		// 세션에서 로그인 정보 확인
        String loggedInUser = (String) session.getAttribute("loginedEmail");
        System.out.println("loggedInUser: "+loggedInUser);
        
        boolean isLoggedIn = loggedInUser != null;
        DrinkDto dto = reviewDao.getDrinkInfo(drinkId);
        
        try {
			List<ReviewDto> reviews = reviewDao.reviewListDao(drinkId);
			int totalReviews = reviewDao.getTotalReviewCount(drinkId); // 리뷰 수 계산	
			System.out.println("컨트롤러에서 말아주는 drinkId: " + drinkId + " drinkName: "+ drinkName +  " totalReviews: " + totalReviews);
			model.addAttribute("dto", dto);
			model.addAttribute("drinkId", drinkId);
			model.addAttribute("drinkName", drinkName); 
			model.addAttribute("reviews", reviews);
			model.addAttribute("totalReviews", totalReviews); // 모델에 리뷰 수 추가

			return "review_list";

		} catch (Exception e) {
			// 예외 처리 로직 추가
			model.addAttribute("error", "리뷰 조회 중 에러 발생");
			System.err.println("리뷰 조회 중 오류 발생: " + e.getMessage());
			return "error"; // 에러 페이지로 리다이렉트 또는 에러 메시지를 보여줄 수 있는 뷰로 변경
		}
	}
	

	
    @RequestMapping(value = "/like", method = RequestMethod.POST)
    public String addLike(@RequestParam String reviewId, String email, Model model, HttpSession session) {
        boolean added = reviewDao.addLike(reviewId, email);
        String loginEmail = (String)session.getAttribute("loginedEmail");
        System.out.println("addLike()");
        System.out.println("session에 들어온 이메일: "+ loginEmail);
        // 좋아요가 추가되었는지 여부를 모델에 추가
        model.addAttribute("addedLike", added);

        // 다시 리뷰 페이지로 리다이렉트
        return "redirect:/drinkdetail/reviews?drinkId=" + reviewDao.getDrinkIdFromReviewId(reviewId);
    }

    
    @RequestMapping(value = "/likeCount", method = RequestMethod.GET)
    public String getLikeCount(@RequestParam String reviewId, Model model) {
        int likeCount = reviewDao.getLikeCount(reviewId);

        // 좋아요 수를 모델에 추가
        model.addAttribute("likeCount", likeCount);

        // 다시 리뷰 페이지로 리다이렉트
        return "redirect:/drinkdetail/reviews?drinkId=" + reviewDao.getDrinkIdFromReviewId(reviewId);
    }
    
    
	@RequestMapping(value = "/review_write", method = RequestMethod.GET)
	public String reviewWriteView(@RequestParam String drinkId, String drinkName, Model model, HttpSession session) {
		System.out.print("컨트롤러 - 리뷰작성화면연결");
		System.out.println("전달된 parameter(drinkId): " + drinkId);

		DrinkDto dto = reviewDao.getDrinkInfo(drinkId);
		model.addAttribute("dto", dto);
		model.addAttribute("drinkId", drinkId);
		model.addAttribute("drinkName", drinkName);

		return "review_write";
	}
	
	@RequestMapping(value = "/reviewWriteDone", method = RequestMethod.POST)
	public String insertReview(
            @RequestParam String drinkId,
            @RequestParam String rating,
            @RequestParam String reviewcontent,
            HttpSession session,
            Model model) {
		// 세션에서 이메일 가져오기
        String email = (String) session.getAttribute("loginedEmail");
        
		System.out.println("컨트롤러 - 리뷰작성완료");
		System.out.println("세션에 저장된 이메일: " + email);
		
		if (email == null) {
            // 로그인 안된 경우
            return "redirect:/login";
        }

        // 리뷰 삽입
        boolean isInserted = reviewDao.insertReview(drinkId, email, rating, reviewcontent);

        if (isInserted) {
        	return "redirect:/drinkdetail/reviews?drinkId=" + drinkId;
        }
        else {
        	 model.addAttribute("error", "리뷰 작성 중 에러가 발생했습니다.");
             return "review_write"; // 에러 발생 시 다시 리뷰 작성 폼으로 돌아감
        }
		
		
	}
}