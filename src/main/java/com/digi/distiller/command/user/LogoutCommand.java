package com.digi.distiller.command.user;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.digi.distiller.Command;

public class LogoutCommand implements Command {

	@Override
	public void execute(Model model) {
		

		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		HttpSession session = request.getSession();
		
		session.invalidate();
		
	}

	
}
