package com.digi.distiller.command.drink;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.drink.DrinkDao;
import com.digi.distiller.dao.review.ReviewDao;
import com.digi.distiller.dto.drink.DrinkDto;

public class DrinkCommand implements Command {

	@Override
	public void execute(Model model) {
		// TODO Auto-generated method stub

		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");

//		HttpSession session = request.getSession();
    	DrinkDao drinkDao = new DrinkDao();
    	String drinkId = request.getParameter("drinkId");
    	DrinkDto drink = drinkDao.getDrinkDetail(drinkId);
	        
    	ReviewDao reviewDao=new ReviewDao();
        int totalReviews = reviewDao.getTotalReviewCount(drinkId); // ¸®ºä ¼ö °è»ê
        double ratingAvg = reviewDao.getReviewRatingAverage(drinkId); // ¸®ºä ¼ö °è»ê
        System.out.println("reviewDao ·Îµå");
        model.addAttribute("drinkId", drinkId);
        model.addAttribute("drink", drink);
        model.addAttribute("totalReviews", totalReviews); // ¸ðµ¨¿¡ ¸®ºä ¼ö Ãß°¡
        model.addAttribute("ratingAvg", ratingAvg); // ¸ðµ¨¿¡ ÆòÁ¡Æò±Õ Ãß°¡
	  
	}
	
	

	
}
