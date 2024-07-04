package com.digi.distiller.dao.drink;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.digi.distiller.dto.drink.DrinkDto;

@Repository
public class DrinkDao {

    private final JdbcTemplate template;

    @Autowired
    public DrinkDao(JdbcTemplate template) {
        this.template = template;
    }
    
    
    // 술id 관련 drink테이블 정보 리스트 불러오기
    public DrinkDto getDrinkDetail(String drinkId) {
    	System.out.println("getDrinkDetail 진입");
        if (template == null) {
            System.err.println("JdbcTemplate is null");
            throw new IllegalStateException("JdbcTemplate is not initialized");
        }
    	String query = "SELECT * FROM DRINK WHERE drinkId = ?";
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
    
    
    public List<DrinkDto> getRecommendations(String type, String price, int adventure, int abv) {
    	String sql = "SELECT d.*, review_counts.reviewCount " +
                "FROM DRINK d " +
                "LEFT JOIN (SELECT drinkId, COUNT(reviewId) as reviewCount " +
                "FROM REVIEW " +
                "GROUP BY drinkId) review_counts " +
                "ON d.drinkId = review_counts.drinkId " +
                "WHERE d.type = ? ";

        List<Object> params = new ArrayList<>();
        params.add(type);

        if ("p1".equals(price)) {
            sql += "AND d.price BETWEEN 0 AND 10 ";
        } else if ("p2".equals(price)) {
            sql += "AND d.price BETWEEN 10 AND 30 ";
        } else if ("p3".equals(price)) {
            sql += "AND d.price BETWEEN 30 AND 40 ";
        } else if ("p4".equals(price)) {
            sql += "AND d.price > 40 ";
        }

        if (abv == 1) {
            sql += "AND d.abv < 10 ";
        } else if (abv == 2) {
            sql += "AND d.abv BETWEEN 10 AND 30 ";
        } else if (abv == 3) {
            sql += "AND d.abv BETWEEN 30 AND 40 ";
        } else if (abv == 4) {
            sql += "AND d.abv > 40 ";
        }

        sql += "GROUP BY d.drinkId ";

//        if (adventure == 1) {
//            sql += "HAVING reviewCount >= 20 ";
//        } else if (adventure == 2) {
//            sql += "HAVING reviewCount BETWEEN 10 AND 19 ";
//        } else if (adventure == 3) {
//            sql += "HAVING reviewCount BETWEEN 5 AND 9 ";
//        } else if (adventure == 4) {
//            sql += "HAVING reviewCount < 5 ";
//        }

        if (adventure == 1) {
            sql += "HAVING COALESCE(reviewCount, 0) >= 11 ";
        } else if (adventure == 2) {
            sql += "HAVING COALESCE(reviewCount, 0) BETWEEN 6 AND 10 ";
        } else if (adventure == 3) {
            sql += "HAVING COALESCE(reviewCount, 0) BETWEEN 1 AND 5 ";
        } else if (adventure == 4) {
            sql += "HAVING reviewCount IS NULL ";
        }

        System.out.println("DrinkDao 에서 조합한 최종 recommend query : " + sql);
        
        return template.query(sql, params.toArray(), new BeanPropertyRowMapper<>(DrinkDto.class));
    }
    
    
}