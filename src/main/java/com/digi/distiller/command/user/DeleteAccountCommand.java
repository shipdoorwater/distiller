package com.digi.distiller.command.user;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.user.UserDao;

public class DeleteAccountCommand implements Command {

	@Override
	public void execute(Model model) {
		
		UserDao userDao = new UserDao();

		Map<String, Object> map = model.asMap();
		HttpSession session = (HttpSession) map.get("session");

		String email = (String) session.getAttribute("loginedEmail");
		
		boolean result = userDao.deleteAccount(email);
		
		model.addAttribute("result", result);
		
		session.invalidate();
		
	}

	
}
