package com.digi.distiller.command.purchase;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.purchase.PurchaseDao;
import com.digi.distiller.dto.purchase.CartDto;

@Component
public class CartCommand implements Command {


    private final PurchaseDao purchaseDao;
    
    @Autowired
    public CartCommand(PurchaseDao purchaseDao) {
        this.purchaseDao = purchaseDao;
    }
    
	@Override
	public void execute(Model model) {
		// TODO Auto-generated method stub		
		

		Map<String, Object> map = model.asMap();
		System.out.println("cartcommand 맵 조회");
//		HttpSession session = request.getSession();
		String email = (String) map.get("email");
		System.out.println("cartcommand email 조회");
        List<CartDto> cart = purchaseDao.cartView(email);
        System.out.println("cartView 조회후 cartCommand로 돌아옴");
        System.out.println("purchaseDao.cartView 로드완료");
        model.addAttribute("cartDto", cart);

	}

	
}
