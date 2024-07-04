package com.digi.distiller.dao.purchase;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.digi.distiller.dto.purchase.CartDto;

@Repository
public class PurchaseDao {
	
    private final JdbcTemplate template;

    @Autowired
    public PurchaseDao(JdbcTemplate template) {
        this.template = template;
    }
    
    public void cartAddFromDetail(String email, String drinkId) {
        System.out.println("cartAdd 진입");
        
        String checksql = "SELECT COALESCE(SUM(count), 0) as count FROM CART WHERE email = ? AND drinkid = ?";
        
        try {
            Integer currentCount = template.queryForObject(checksql, Integer.class, email, drinkId);
            
            if (currentCount == 0) {
                // 카트에 해당 상품이 없으면 새로 추가
                String insertSql = "INSERT INTO CART (email, drinkid, count) VALUES (?, ?, 1)";
                // template.update 는 sql에 영향을 받은 행의 수를 반환
                int insertResult = template.update(insertSql, email, drinkId);
                System.out.println("새 상품 추가 결과: " + (insertResult == 1 ? "성공" : "실패"));
            } else {
                // 카트에 해당 상품이 이미 있으면 count를 1 증가
                String updateSql = "UPDATE CART SET count = count + 1 WHERE email = ? AND drinkid = ?";
                int updateResult = template.update(updateSql, email, drinkId);
                System.out.println("기존 상품 수량 증가 결과: " + (updateResult == 1 ? "성공" : "실패"));
            }
        } catch (DataAccessException e) {
            System.out.println("데이터베이스 작업 중 오류 발생: " + e.getMessage());
            // 여기에 추가적인 예외 처리 로직을 넣을 수 있습니다.
        }
    }
    
    public List<CartDto> cartView(String email) {
        System.out.println("cartView 진입");
        
        if (template == null) {
            System.err.println("JdbcTemplate is null");
            throw new IllegalStateException("JdbcTemplate is not initialized");
        }
    	String query = "SELECT c.*, u.name, d.drinkname, d.photo, d.price, d.type, d.nation     FROM CART c left join USER u on c.email = u.email left join DRINK d on c.drinkid = d.drinkid WHERE c.email = ?";
    	System.out.println("CARTquery");
        try {
            return template.query(query, new Object[]{email}, new BeanPropertyRowMapper<>(CartDto.class));
        } catch (Exception e) {
            System.err.println("getDrinkDetail 에러: " + email);
            e.printStackTrace();
         // 런타임 예외로 감싸서 다시 던짐
            throw new RuntimeException("getDrinkDetail 에러: " + email, e);
        }
        
    }
    
    public boolean cartDelete(String email, String drinkId) {
        System.out.println("cartDelete 진입");
        
        if (template == null) {
            System.err.println("JdbcTemplate is null");
            throw new IllegalStateException("JdbcTemplate is not initialized");
        }
    	String query = "DELETE FROM CART WHERE email = ? AND drinkid = ?;";
    	System.out.println("cartDeleteQuery");
        
    	try {
    		int deleteResult = template.update(query, email, drinkId);
            System.out.println("상품 삭제 결과: " + (deleteResult == 1 ? "성공" : "실패"));
            return deleteResult == 1;

        } catch (DataAccessException e) {
            System.out.println("데이터베이스 작업 중 오류 발생: " + e.getMessage());
            throw new RuntimeException("상품 삭제 중 오류 발생", e);
        }
    	
        
    }
    
}
