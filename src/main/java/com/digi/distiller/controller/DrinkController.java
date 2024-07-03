package com.digi.distiller.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.digi.distiller.Command;
import com.digi.distiller.dao.drink.DrinkDao;
import com.digi.distiller.dao.review.ReviewDao;
import com.digi.distiller.dto.drink.DrinkDto;
import com.digi.distiller.util.Constant;

@Controller
public class DrinkController {

	Command command = null;
	
	private JdbcTemplate template;
	
	/*
	 * private DrinkDao drinkDao; private ReviewDao reviewDao;
	 * 
	 * @Autowired public DrinkController(DrinkDao drinkDao, ReviewDao reviewDao) {
	 * this.drinkDao = drinkDao; this.reviewDao = reviewDao; }
	 */
	
	@Autowired
	public void setTemplate(JdbcTemplate template) {
		this.template = template;
		Constant.template = this.template;
	}
	
	
	@RequestMapping(value = "/drinkdetail", method = RequestMethod.GET)
	public String drinkdetail(@RequestParam("drinkId") String drinkId, Model model) {
        System.out.println("drinkId: " + drinkId);        

        try {
        	System.out.println("drinkDao 로드직전");
        	DrinkDao drinkDao = new DrinkDao();
        	DrinkDto drink = drinkDao.getDrinkDetail(drinkId);
        	System.out.println("drinkDao 로드");
	        
        	ReviewDao reviewDao=new ReviewDao();
	        int totalReviews = reviewDao.getTotalReviewCount(drinkId); // 리뷰 수 계산
	        System.out.println("reviewDao 로드");
	        model.addAttribute("drinkId", drinkId);
	        model.addAttribute("drink", drink);
	        model.addAttribute("totalReviews", totalReviews); // 모델에 리뷰 수 추가
	     	
			return "drinkdetail";
			
        }catch (Exception e) {
            // 예외 처리 로직 추가
            model.addAttribute("error", "drinkdetail 조회 중 에러 발생");
            System.err.println("drinkdetail 조회 중 오류 발생: " + e.getMessage());
            return "error"; // 에러 페이지로 리다이렉트 또는 에러 메시지를 보여줄 수 있는 뷰로 변경
        }
	}
	
	
}
