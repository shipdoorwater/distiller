package com.digi.distiller.command.purchase;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.purchase.PurchaseDao;
import com.digi.distiller.dao.user.UserDao;

@Component
public class CartAddCommand implements Command {


    private final PurchaseDao purchaseDao;
    
    @Autowired
    public CartAddCommand(PurchaseDao purchaseDao) {
        this.purchaseDao = purchaseDao;
    }
    
    @Override
    public void execute(Model model) {
    	
        Map<String, Object> map = model.asMap();
//		HttpServletRequest request = (HttpServletRequest) map.get("request");
		
		
		
//		String email = request.getParameter("email");

        String email = (String) map.get("email");
        String drinkId = (String) map.get("drinkId");
        System.out.println(email + " and " + drinkId);

        if (drinkId == null || email == null) {
            model.addAttribute("error", "DrinkId or Email is missing");
            return;
        }

        try {
            purchaseDao.cartAddFromDetail(email, drinkId);
            model.addAttribute("message", "Item added to cart successfully");
        } catch (Exception e) {
            model.addAttribute("error", "Error adding item to cart: " + e.getMessage());
        }
    }

	
}
