package com.digi.distiller.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.digi.distiller.Command;
import com.digi.distiller.util.Constant;


@Controller
public class UserController {

	Command command = null;
	
	private JdbcTemplate template;
	
	@Autowired
	public void setTemplate(JdbcTemplate template) {
		this.template = template;
		Constant.template = this.template;
	}
	
	@RequestMapping("/")
	public String index(Model model) {
		return "main";
	}
	
	@RequestMapping("/register")
	public String register(Model model) {
		return "register";
	}
	
	@RequestMapping("/head")
	public String head(Model model) {
		return "Head";
	}
	
	@RequestMapping("/footer")
	public String footer(Model model) {
		return "footer";
	}
	@RequestMapping("/main")
	public String main(Model model) {
		System.out.println("main()");
		return "main";
	}
	@RequestMapping("/signIn")
	public String signIn(Model model) {
		System.out.println("signIn()");
		return "signIn";
	}
	@RequestMapping("/myProfile")
	public String myProfile(Model model) {
		System.out.println("myProfile()");
		return "myProfile";
	}
}
