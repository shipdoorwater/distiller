package com.digi.distiller.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.digi.distiller.Command;
import com.digi.distiller.command.drink.DrinkCommand;
import com.digi.distiller.dao.drink.DrinkDao;
import com.digi.distiller.dto.drink.DrinkDto;

@Controller
public class DrinkController {

	Command command = null;

	private final DrinkCommand drinkCommand;
	
	@Autowired
	private DrinkDao drinkDao;

	/*
	 * private DrinkDao drinkDao; private ReviewDao reviewDao;
	 * 
	 * @Autowired public DrinkController(DrinkDao drinkDao, ReviewDao reviewDao) {
	 * this.drinkDao = drinkDao; this.reviewDao = reviewDao; }
	 */

	@Autowired
	public DrinkController(DrinkCommand drinkCommand) {
		this.drinkCommand = drinkCommand;
	}

	@RequestMapping(value = "/drinkdetail", method = RequestMethod.GET)
	public String drinkdetail// (@RequestParam("drinkId") String drinkId, Model model) {
	(Model model, HttpServletRequest request) {

		model.addAttribute("request", request);
		drinkCommand.execute(model);
		return "drinkdetail";

	}
	
	@RequestMapping(value = "/recommend/step1", method = RequestMethod.GET)
	public String showStep1() {       
		return "recommend/recommend_01";
	}
	
	@RequestMapping(value = "/recommend/step2", method = RequestMethod.GET)
    public String showStep2(@RequestParam String type, Model model) {
        model.addAttribute("type", type);
        return "recommend/recommend_02";
    }
	
	@RequestMapping(value = "/recommend/step3", method = RequestMethod.GET)
	public String showStep3(@RequestParam String type, @RequestParam String price, Model model) {
	    model.addAttribute("type", type);
	    model.addAttribute("price", price);
	    return "recommend/recommend_03";
	}
	
	@RequestMapping(value = "/recommend/step4", method = RequestMethod.GET)
	public String showStep4(@RequestParam String type, @RequestParam String price, @RequestParam int adventure, Model model) {
	    model.addAttribute("type", type);
	    model.addAttribute("price", price);
	    model.addAttribute("adventure", adventure);
	    return "recommend/recommend_04";
	}
	
	@RequestMapping(value = "/recommend/result", method = RequestMethod.GET)
	public String showResult(@RequestParam String type, @RequestParam String price, 
			@RequestParam int adventure, @RequestParam int abv, Model model) {
		List<DrinkDto> recommendations = drinkDao.getRecommendations(type, price, adventure, abv);
        
        model.addAttribute("recommendations", recommendations);
		model.addAttribute("type", type);
		model.addAttribute("price", price);
		model.addAttribute("adventure", adventure);
		model.addAttribute("abv", abv);

		return "recommend/recommend_result";
	}
}
