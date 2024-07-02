package com.digi.distiller.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.digi.distiller.Command;
import com.digi.distiller.util.Constant;


@Controller
public class DrinkController {

	Command command = null;
	
	private JdbcTemplate template;
	
	@Autowired
	public void setTemplate(JdbcTemplate template) {
		this.template = template;
		Constant.template = this.template;
	}
	
	
	@RequestMapping("/drinkdetail")
	public String register(@RequestParam("drinkId") String drinkId, Model model) {
		
		model.addAttribute("drinkId", drinkId);
		
		return "drinkdetail";
	}
}
