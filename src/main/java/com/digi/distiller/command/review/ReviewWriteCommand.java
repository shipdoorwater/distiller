package com.digi.distiller.command.review;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.review.ReviewDao;
import com.digi.distiller.dto.review.ReviewDto;

@Component
public class ReviewWriteCommand implements Command {
	
	private ReviewDao reviewDao;
	
	@Autowired
	public ReviewWriteCommand(ReviewDao reviewDao) {
		this.reviewDao = reviewDao;
	}
	
	@Override
	public void execute(Model model) {
		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		
		ReviewDto dto = new ReviewDto();
		
		dto.setReviewId(request.getParameter("REVIEWID"));
		dto.setDrinkId(request.getParameter("DRINKID"));
		dto.setEmail(request.getParameter("EMAIL"));
		dto.setRating(request.getParameter("RATING"));
		dto.setTagId(request.getParameter("TAGID"));
		dto.setReviewDate(request.getParameter("REVIEWDATE"));
		dto.setReviewContent(request.getParameter("REVIEWCONTENT"));
		dto.setReviewStatus(request.getParameter("REVIEWSTATUS"));
		
		model.addAttribute(dto);
		
		
		
	}

	
}
