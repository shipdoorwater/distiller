package com.digi.distiller.command.user;

import java.util.ArrayList;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.ui.Model;

import com.digi.distiller.Command;
import com.digi.distiller.dao.user.MainDao;
import com.digi.distiller.dto.user.MainDrinkDto;

public class SearchCommand implements Command {

	@Override
	public void execute(Model model) {
		// TODO Auto-generated method stub
			
		MainDao dao = new MainDao();
		Map<String, Object> map = model.asMap();
		HttpServletRequest request = (HttpServletRequest) map.get("request");
		
		int page = 1;
		int pageSize = 10;

		if (request.getParameter("page") != null)
			page = Integer.parseInt(request.getParameter("page"));
		String keyword = request.getParameter("keyword");
		System.out.println("keyword: " + keyword);
		ArrayList<MainDrinkDto> drinkList = new ArrayList<MainDrinkDto>();
		
		// 등록된 총 술정보 개수
		int count;
		if (keyword != null) {
			count = dao.getSearchCount(keyword);
			drinkList = dao.searchDrinkList(keyword, page, pageSize);
		} else {
			count = dao.getAllDrinkCount();
			drinkList = dao.showDrinkList(page, pageSize);
		}
		
		// 총 페이지수
		int totalPages = (int) Math.ceil((double) count / pageSize);
		
		System.out.println("count: " + count);
		System.out.println("pageSize: " + pageSize);
		System.out.println("totlaPages: " + totalPages);
		System.out.println("currentPage: " + page);
		if (drinkList == null)
			System.out.println("drinkList is null");
		System.out.println("drinkList is not null");
		
		
		model.addAttribute("drinkList", drinkList);
		model.addAttribute("totalCount", count);
		model.addAttribute("totalPages", totalPages);
		model.addAttribute("currentPage", page);
		model.addAttribute("pageSize", pageSize);
	}

	
}
