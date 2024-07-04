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
public class CartDeleteCommand implements Command {


    private final PurchaseDao purchaseDao;
    
    @Autowired
    public CartDeleteCommand(PurchaseDao purchaseDao) {
        this.purchaseDao = purchaseDao;
    }
    
	@Override
	public void execute(Model model) {
	    	
	        Map<String, Object> map = model.asMap();
	
	        String email = (String) map.get("email");
	        String drinkId = (String) map.get("drinkId");
	        System.out.println(email + " and " + drinkId);
	
	        if (drinkId == null || email == null) {
	            model.addAttribute("error", "DrinkId or Email is missing");
	            return;
	        }
	
	        try {
	            purchaseDao.cartDelete(email, drinkId);
	            model.addAttribute("message", "Item delete from cart successfully");
	        } catch (Exception e) {
	            model.addAttribute("error", "Error adding item to cart: " + e.getMessage());
	        }
	    }

	
}
