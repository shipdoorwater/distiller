package com.digi.distiller.command.user;

import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.user.UserDao;

public class MyProfileCommand implements Command {

	@Override
	public void execute(Model model) {
		// TODO Auto-generated method stub
		UserDao userDao = new UserDao();
		
		
		
	}

	
}
