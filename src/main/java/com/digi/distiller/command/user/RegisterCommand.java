package com.digi.distiller.command.user;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.user.UserDao;
import com.digi.distiller.dto.user.UserDto;

public class RegisterCommand implements Command {

	@Override
	public void execute(Model model) {
		// TODO Auto-generated method stub
		
		UserDao dao = new UserDao();

		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");

		HttpSession session = request.getSession();

		String email = request.getParameter("register_email");
		String name = request.getParameter("register_name");
		String password = request.getParameter("register_password");
		
		System.out.println("email" + email);
		System.out.println("name" + name);
		System.out.println("password" + password);
		
		boolean result = dao.register(email, name, password);
		if (result)
			session.setAttribute("loginedEmail", email);
		model.addAttribute("result", result);
		System.out.println("resister check4");
	}

	
}
