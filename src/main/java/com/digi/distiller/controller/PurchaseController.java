package com.digi.distiller.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.digi.distiller.command.purchase.CartAddCommand;
import com.digi.distiller.command.purchase.CartCommand;
import com.digi.distiller.command.purchase.CartDeleteCommand;
import com.digi.distiller.command.purchase.OrderCommand;
import com.digi.distiller.command.purchase.PaymentCommand;


@Controller
@RequestMapping("/purchase")
public class PurchaseController {

	 private final CartAddCommand cartAddCommand;
	    private final CartCommand cartCommand;
	    private final CartDeleteCommand cartDeleteCommand;
	    private final OrderCommand orderCommand;
	    private final PaymentCommand paymentCommand;

	    @Autowired
	    public PurchaseController(CartAddCommand cartAddCommand, 
	                              CartCommand cartCommand, 
	                              CartDeleteCommand cartDeleteCommand,
	                              OrderCommand orderCommand,
	                              PaymentCommand paymentCommand) {
	        this.cartAddCommand = cartAddCommand;
	        this.cartCommand = cartCommand;
	        this.cartDeleteCommand = cartDeleteCommand;
	        this.orderCommand = orderCommand;
	        this.paymentCommand = paymentCommand;
	    }	
	
	@RequestMapping(value = "/cartAdd", method = RequestMethod.GET)
	public String cartAdd(@RequestParam("drinkId") String drinkId, 
	            		@RequestParam("email") String email, 
	            		Model model,
	            		RedirectAttributes redirectAttributes) {
		model.addAttribute("drinkId", drinkId);
		model.addAttribute("email", email);
//	    model.addAttribute("request", request);  // HttpServletRequest 객체를 Model에 추가

		cartAddCommand.execute(model);
		
		if (model.containsAttribute("error")) {
			// 에러가 있다면 에러 페이지로 리다이렉트
			return "errorPage";
		}
		
	    // 성공 메시지를 플래시 속성으로 추가
	    if (model.containsAttribute("message")) {
	        redirectAttributes.addFlashAttribute("message", model.asMap().get("message"));
	    }
	    redirectAttributes.addFlashAttribute("email", email);
		
		return "redirect:/purchase/cart";
	}
	
	 // cartCommand를 사용하는 메서드
    @RequestMapping(value = "/cart")
    public String cart(@ModelAttribute("email") String email, 
            @RequestParam(value = "email", required = false) String paramEmail, 
            Model model,
    		RedirectAttributes redirectAttributes) {
        System.out.println("cart()");
     // 플래시 속성의 email이 없으면 파라미터의 email 사용
        if (email == null || email.isEmpty()) {
            email = paramEmail;
        }
        
		model.addAttribute("email", email);
        
        cartCommand.execute(model);
        return "purchase/cart";
    }

    
    @RequestMapping(value = "/cartDelete", method = RequestMethod.POST)
    public String cartDelete(@ModelAttribute("email") String email, 
            @RequestParam(value = "email", required = false) String paramEmail,
            @RequestParam("drinkId") String drinkId, 
            Model model,
    		RedirectAttributes redirectAttributes) {
        System.out.println("cartDelete()");
        if (email == null || email.isEmpty()) {
            email = paramEmail;
        }
		model.addAttribute("email", email);
		model.addAttribute("drinkId", drinkId);
        cartDeleteCommand.execute(model);
        return "redirect:/purchase/cart?email=" + email;
    }

    @RequestMapping(value = "/order", method = RequestMethod.POST)
    public String order(Model model, HttpServletRequest request) {
        System.out.println("order()");
        model.addAttribute("request", request);
        orderCommand.execute(model);
        return "order";  // 주문 확인 페이지로 이동
    }

    @RequestMapping(value = "/payment", method = RequestMethod.POST)
    public String payment(Model model, HttpServletRequest request) {
        System.out.println("payment()");
        model.addAttribute("request", request);
        paymentCommand.execute(model);
        return "orderComplete";  // 결제 결과 페이지로 이동
    }
}
