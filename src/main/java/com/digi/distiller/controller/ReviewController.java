package com.digi.distiller.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.digi.distiller.Command;
import com.digi.distiller.dao.review.ReviewDao;
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
	
	   @RequestMapping(value = "/reviews", method = RequestMethod.GET)
	    public String getReviews(@RequestParam String drinkId, Model model) {
	        System.out.print("컨트롤러 - 리뷰페이지보기");
	        System.out.println("전달된 parameter(drinkId): " + drinkId);
	        
	        try {
	            List<ReviewDto> reviews = reviewDao.reviewListDao(drinkId);
	            int totalReviews = reviewDao.getTotalReviewCount(drinkId); // 리뷰 수 계산

	            model.addAttribute("drinkId", drinkId);
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
	}