package com.digi.distiller.controller;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.digi.distiller.Command;
import com.digi.distiller.command.drink.DrinkCommand;


@Controller
public class DrinkController {

	Command command = null;
	
    private final DrinkCommand drinkCommand;
	
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
	public String drinkdetail//(@RequestParam("drinkId") String drinkId, Model model) {
								(Model model, HttpServletRequest request) {
		
		model.addAttribute("request",request);
        drinkCommand.execute(model);
		return "drinkdetail";

			
        
	}
	
	
}
