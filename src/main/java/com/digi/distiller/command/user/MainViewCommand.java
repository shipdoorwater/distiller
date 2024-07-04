package com.digi.distiller.command.user;

import java.util.ArrayList;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.user.MainDao;
import com.digi.distiller.dto.user.MainDrinkDto;
import com.digi.distiller.dto.user.MainReviewDto;

public class MainViewCommand implements Command {

	@Override
	public void execute(Model model) {
		
		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		String type = (String) request.getParameter("type");
		
		
		ArrayList<MainReviewDto> reviewList = new ArrayList<MainReviewDto>();
		ArrayList<MainDrinkDto> drinkList = new ArrayList<>();
		MainDao mainDao = new MainDao();
		
		if (type == null) {
			reviewList = mainDao.showAllRecentReview();
			drinkList = mainDao.showAllDrinks();
		} else {
			reviewList = mainDao.showSpecificRecentReview(type);
			drinkList = mainDao.showSpecificDrinks(type);
		}
		
		model.addAttribute("drinkList", drinkList);
		model.addAttribute("reviewList", reviewList);
		model.addAttribute("type", type);
	}

	
}
