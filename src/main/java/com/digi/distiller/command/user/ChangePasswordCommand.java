package com.digi.distiller.command.user;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.user.UserDao;
import com.digi.distiller.dto.user.UserDto;

public class ChangePasswordCommand implements Command {

	@Override
	public void execute(Model model) {
		// TODO Auto-generated method stub
		UserDao userDao = new UserDao();
		
		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		HttpSession session = (HttpSession) map.get("session");
		
		String email = (String) session.getAttribute("loginedEmail");
		String currentPassword = request.getParameter("currentPassword");
		String newPassword = request.getParameter("newPassword");
		
		UserDto userDto = userDao.getUserInfo(email);
		boolean result = userDao.changePassword(email, currentPassword, newPassword);
		
		model.addAttribute("userDto", userDto);
		model.addAttribute("result", result);
	}	
}
