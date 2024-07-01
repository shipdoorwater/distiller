package com.digi.distiller.dao.review;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.digi.distiller.dto.review.ReviewDto;

public class ReviewDao {

	JdbcTemplate template;

	@Autowired
	public void setTemplate(JdbcTemplate template) {
		this.template = template;
	}

	// 리뷰 리스트 불러오기
	public List<ReviewDto> reviewListDao(String drinkId) {
		String query = "SELECT * FROM review WHERE drinkId = ? ORDER BY reviewId DESC";

		try {
			return template.query(query, new BeanPropertyRowMapper<>(ReviewDto.class), drinkId);
		} catch (Exception e) {

			throw new RuntimeException("Error retrieving reviews"+ drinkId, e);
		}
	}

	// 페이지 생성
	public List<ReviewDto> getReviewsByDrinkIdPaginated(String drinkId, int page, int pageSize) {
        String query = "SELECT * FROM review WHERE drinkId = ? ORDER BY reviewId DESC LIMIT ? OFFSET ?";
        int offset = (page - 1) * pageSize;
        
        try {
            return template.query(query, new BeanPropertyRowMapper<>(ReviewDto.class), drinkId, pageSize, offset);
        } catch (Exception e) {
            // 로그 기록
            throw new RuntimeException("Error retrieving paginated reviews for drink ID: " + drinkId, e);
        }
    }
}
