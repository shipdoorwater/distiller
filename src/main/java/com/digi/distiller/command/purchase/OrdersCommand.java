package com.digi.distiller.command.purchase;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.purchase.PurchaseDao;
import com.digi.distiller.dto.purchase.OrdersDto;

@Component
public class OrdersCommand implements Command {


    private final PurchaseDao purchaseDao;
    
    @Autowired
    public OrdersCommand(PurchaseDao purchaseDao) {
        this.purchaseDao = purchaseDao;
    }
    
	@Override
	public void execute(Model model) {
		// TODO Auto-generated method stub		
		Map<String, Object> map = model.asMap();
//		HttpServletRequest request = (HttpServletRequest) map.get("request");
		HttpSession session = (HttpSession) map.get("session");
		

		String email = //(String) map.get("email");
				(String) session.getAttribute("loginedEmail");
		
//		String email = request.getParameter("email");

        System.out.println(email);

        if (email == null) {
            model.addAttribute("error", "Email is missing");
            return;
        }

        List<OrdersDto> orders = purchaseDao.orderView(email);
        model.addAttribute("ordersDto", orders);
        System.out.println("ordersCommand ¿Ï·á");
		
	}

	
}
