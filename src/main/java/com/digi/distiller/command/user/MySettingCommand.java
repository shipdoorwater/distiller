package com.digi.distiller.command.user;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.user.UserDao;
import com.digi.distiller.dto.user.UserDto;

public class MySettingCommand implements Command {

	@Override
	public void execute(Model model) {
		// TODO Auto-generated method stub
		UserDao userDao = new UserDao();
		
		Map<String, Object> map = model.asMap();
		HttpSession session = (HttpSession) map.get("session");
		
		String email = (String) session.getAttribute("loginedEmail");

		UserDto userDto = userDao.getUserInfo(email);
		
		model.addAttribute("userDto", userDto);
	}

	
}
