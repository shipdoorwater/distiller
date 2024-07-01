package com.digi.distiller.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.digi.distiller.Command;
import com.digi.distiller.dao.review.ReviewDao;
import com.digi.distiller.dto.review.ReviewDto;
import com.digi.distiller.util.Constant;

@Controller
public class ReviewController {

	Command command = null;

	private JdbcTemplate template;

	@Autowired
	public void setTemplate(JdbcTemplate template) {
		this.template = template;
		Constant.template = this.template;
	}

	@RequestMapping(value = "/reviews", method = RequestMethod.GET)
	public String getReviews(@RequestParam String drinkId, @RequestParam(defaultValue = "1") int page, Model model) {
		System.out.println("컨트롤러 - 리뷰페이지보기");
		int pageSize = 10;
		ReviewDao dao = new ReviewDao();
		List<ReviewDto> reviews = dao.getReviewsByDrinkId(drinkId, page, pageSize);
		int totalReviews = dao.getTotalReviewCount(drinkId);
		int totalPages = (int) Math.ceil((double) totalReviews / pageSize);

		model.addAttribute("reviews", reviews);
		model.addAttribute("currentPage", page);
		model.addAttribute("totalPages", totalPages);
		model.addAttribute("drinkId", drinkId);

		return "review_list";
	}
}