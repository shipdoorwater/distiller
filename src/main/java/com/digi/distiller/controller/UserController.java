package com.digi.distiller.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.digi.distiller.Command;
import com.digi.distiller.command.user.*;
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
		System.out.println("main()");
		return "redirect:main";
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

	// 회원가입
	@RequestMapping("/register")
	public String register(Model model) {
		System.out.println("register()");
		return "user/register";
	}
	@RequestMapping("/registerAction")
	public String registerAction(Model model, HttpServletRequest request) {
		System.out.println("registerAction()");
		
		model.addAttribute("request",request);
		command = new RegisterCommand();
		command.execute(model);
		
		boolean result = (boolean) model.getAttribute("result");
		if (result)
			return "redirect:main";
		else return "redirect:register";
	}
	
	
	// 로그인 
	@RequestMapping("/signIn")
	public String signIn(Model model) {
		System.out.println("signIn()");
		return "user/signIn";
	}
	@RequestMapping("/signInAction")
	public String signInAction(Model model, HttpServletRequest request) {
		System.out.println("signInAction()");
		
		model.addAttribute("request",request);
		command = new SignInCommand();
		command.execute(model);
		
		boolean result = (boolean) model.getAttribute("result");
		if (result)
			return "redirect:main";
		else return "redirect:signIn";
	}
	
	
	@RequestMapping("/myProfile")
	public String myProfile(Model model) {
		System.out.println("myProfile()");
		return "myProfile";
	}
}
