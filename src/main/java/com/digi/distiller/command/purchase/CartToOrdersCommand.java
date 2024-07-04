package com.digi.distiller.command.purchase;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.purchase.PurchaseDao;

@Component
public class CartToOrdersCommand implements Command {


    private final PurchaseDao purchaseDao;
    
    @Autowired
    public CartToOrdersCommand(PurchaseDao purchaseDao) {
        this.purchaseDao = purchaseDao;
    }
    
	@Override
	public void execute(Model model) {
		// TODO Auto-generated method stub		
		Map<String, Object> map = model.asMap();
//		HttpServletRequest request = (HttpServletRequest) map.get("request");
		HttpSession session = (HttpSession) map.get("session");
        String selectedDrinkIdsString = (String) map.get("selectedDrinkIds");

		String email = //(String) map.get("email");
				(String) session.getAttribute("loginedEmail");
		
        List<String> selectedDrinkIds = Arrays.asList(selectedDrinkIdsString.split(","));

        System.out.println(email);

        if (email == null) {
            model.addAttribute("error", "Email is missing");
            return;
        }

        try {
            purchaseDao.cartToOrders(email, selectedDrinkIds);
            model.addAttribute("message", "주문이 성공적으로 처리되었습니다.");
        } catch (Exception e) {
            model.addAttribute("error", "주문 처리 중 오류가 발생했습니다: " + e.getMessage());
        }
	}

	
}
