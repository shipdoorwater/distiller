package com.digi.distiller.command.drink;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.drink.DrinkDao;
import com.digi.distiller.dao.review.ReviewDao;
import com.digi.distiller.dto.drink.DrinkDto;

@Component
public class DrinkCommand implements Command {

    private final ReviewDao reviewDao;
    private final DrinkDao drinkDao;
    
    @Autowired
    public DrinkCommand(ReviewDao reviewDao, DrinkDao drinkDao) {
        this.reviewDao = reviewDao;
        this.drinkDao = drinkDao;
    }
    
	@Override
	public void execute(Model model) {
		// TODO Auto-generated method stub

		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");

//		HttpSession session = request.getSession();
		
    	String drinkId = request.getParameter("drinkId");

        DrinkDto drink = drinkDao.getDrinkDetail(drinkId);
        int totalReviews = reviewDao.getTotalReviewCount(drinkId);
        double ratingAvg = reviewDao.getReviewRatingAverage(drinkId);
        
//    	DrinkDao drinkDao = new DrinkDao();
//    	DrinkDto drink = drinkDao.getDrinkDetail(drinkId);
	        
//    	ReviewDao reviewDao=new ReviewDao();
//        int totalReviews = reviewDao.getTotalReviewCount(drinkId); // ¸®ºä ¼ö °è»ê
//        double ratingAvg = reviewDao.getReviewRatingAverage(drinkId); // ¸®ºä ¼ö °è»ê
        System.out.println("reviewDao ·Îµå");
        model.addAttribute("drinkId", drinkId);
        model.addAttribute("drink", drink);
        model.addAttribute("totalReviews", totalReviews); // ¸ðµ¨¿¡ ¸®ºä ¼ö Ãß°¡
        model.addAttribute("ratingAvg", ratingAvg); // ¸ðµ¨¿¡ ÆòÁ¡Æò±Õ Ãß°¡
        System.out.println("drinkPhoto: "+drink.getPhoto());
	  
	}
	
	

	
}
