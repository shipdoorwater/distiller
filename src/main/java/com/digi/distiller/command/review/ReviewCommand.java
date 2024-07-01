package com.digi.distiller.command.review;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.review.ReviewDao;
import com.digi.distiller.dto.review.ReviewDto;

public class ReviewCommand implements Command {
	
	@Override
	public void execute(Model model) {
		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		
		ReviewDao dao = new ReviewDao();
		ReviewDto dto = new ReviewDto();
		
		dto.setReviewId(request.getParameter("REVIEWID"));
		dto.setDrinkId(request.getParameter("DRINKID"));
		dto.setUserId(request.getParameter("USERID"));
		dto.setRating(request.getParameter("RATING"));
		dto.setTagId(request.getParameter("TAGID"));
		dto.setReviewDate(request.getParameter("REVIEWDATE"));
		dto.setReviewContent(request.getParameter("REVIEWCONTENT"));
		dto.setReviewStatus(request.getParameter("REVIEWSTATUS"));
		
		
		
	}

	
}
