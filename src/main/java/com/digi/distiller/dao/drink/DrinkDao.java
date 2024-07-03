package com.digi.distiller.dao.drink;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.digi.distiller.dto.drink.DrinkDto;
import com.digi.distiller.util.Constant;

public class DrinkDao {

    private final JdbcTemplate template;

    @Autowired
    public DrinkDao() {
        this.template = Constant.template;
    }
    
    
    // 술id 관련 drink테이블 정보 리스트 불러오기
    public DrinkDto getDrinkDetail(String drinkId) {
    	System.out.println("getDrinkDetail 진입");
    	String query = "SELECT * FROM drink WHERE drinkId = ?";
    	System.out.println("drinkId");
        try {
            return template.queryForObject(query, new Object[]{drinkId}, new BeanPropertyRowMapper<>(DrinkDto.class));
        } catch (Exception e) {
            System.err.println("getDrinkDetail 에러: " + drinkId);
            e.printStackTrace();
         // 런타임 예외로 감싸서 다시 던짐
            throw new RuntimeException("getDrinkDetail 에러: " + drinkId, e);
        }
        
    }
}
