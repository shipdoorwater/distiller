package com.digi.distiller.command.user;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.user.UserDao;

public class SignInCommand implements Command {

	@Override
	public void execute(Model model) {
		UserDao dao = new UserDao();
		
		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		HttpSession session = request.getSession();
		
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		boolean result = dao.signIn(email, password);
		
		if (result)
			session.setAttribute("loginedEmail", email);
		model.addAttribute("result", result);
	}	
}
