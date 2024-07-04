package com.digi.distiller.command.user;

import java.util.ArrayList;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.user.MainDao;
import com.digi.distiller.dto.user.MainReviewDto;

public class MainViewCommand implements Command {

	@Override
	public void execute(Model model) {
		
		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		String type = (String) request.getParameter("type");
		System.out.println(type);
		
		ArrayList<MainReviewDto> reviewList = new ArrayList<MainReviewDto>();
		MainDao mainDao = new MainDao();
		
		if (type == null) {
			reviewList = mainDao.showAllRecentReview();
		} else {
			reviewList = mainDao.showSpecificRecentReview(type);
		}
		
		model.addAttribute("reviewList", reviewList);
		model.addAttribute("type", type);
	}

	
}
