package com.digi.distiller.command.purchase;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.purchase.PurchaseDao;

@Component
public class OrderCommand implements Command {


    private final PurchaseDao purchaseDao;
    
    @Autowired
    public OrderCommand(PurchaseDao purchaseDao) {
        this.purchaseDao = purchaseDao;
    }
    
	@Override
	public void execute(Model model) {
		// TODO Auto-generated method stub		
		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		HttpSession session = request.getSession();
		
		String email = request.getParameter("user[login]");
		
		
		
	}

	
}
