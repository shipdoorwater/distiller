package com.digi.distiller.command.user;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.user.UserDao;
import com.digi.distiller.dto.user.UserDto;

public class ChangeSettingCommand implements Command {

	@Override
	public void execute(Model model) {
		// TODO Auto-generated method stub
		UserDao userDao = new UserDao();
		
		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		HttpSession session = (HttpSession) map.get("session");
		
		String email = (String) session.getAttribute("loginedEmail");
		String userName = request.getParameter("userName");
		String userPhone = request.getParameter("userPhone");
		String userAddress = request.getParameter("userAddress");
		
		UserDto userDto = userDao.getUserInfo(email);
		
		model.addAttribute("userDto", userDto);
	}

	
}
