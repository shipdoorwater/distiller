package com.digi.distiller.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.digi.distiller.Command;
import com.digi.distiller.command.purchase.*;
import com.digi.distiller.util.Constant;


@Controller
public class PurchaseController {

	Command command = null;
	
	private JdbcTemplate template;
	
	@Autowired
	public void setTemplate(JdbcTemplate template) {
		this.template = template;
		Constant.template = this.template;
	}
	
	@RequestMapping(value = "/cartAdd", method = RequestMethod.POST)
	public void cartAdd(HttpServletRequest request, Model model) {
		System.out.println("cartAdd()");
		model.addAttribute("request", request);
		command = new CartAddCommand();
		command.execute(model);
	}
	
	@RequestMapping("/cart")
	public String cart(HttpServletRequest request, Model model) {
		System.out.println("cartGet()");

		model.addAttribute("request", request);
		command = new CartGetCommand();
		command.execute(model);

		return "purchase/cart";
	}
	
}
