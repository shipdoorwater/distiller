package com.digi.distiller.dao.review;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.digi.distiller.dto.review.ReviewDto;

public class ReviewDao {

	JdbcTemplate template;
	
	public List<ReviewDto> getReviewsByDrinkId(String drinkId, int page, int pageSize) {
        int offset = (page - 1) * pageSize;
        String sql = "SELECT userId, reviewDate, rating, reviewContent " +
                     "FROM review WHERE drinkId = ? " +
                     "ORDER BY reviewDate DESC pageSize ? OFFSET ?";
        
        return template.query(sql, new Object[]{drinkId, pageSize, offset}, 
            (rs, rowNum) -> new ReviewDto(
                rs.getString("userId"),
                rs.getString("reviewDate"),
                rs.getString("rating"),
                rs.getString("reviewContent")
            ));
    }

    public int getTotalReviewCount(String drinkId) {
        String sql = "SELECT COUNT(*) FROM review WHERE drinkId = ?";
        return template.queryForObject(sql, Integer.class, drinkId);
    }
}

//	@Autowired
//	public void setTemplate(JdbcTemplate template) {
//		this.template = template;
//	}
//
//	// ���� ����Ʈ �ҷ�����
//	public List<ReviewDto> reviewListDao(String drinkId) {
//		System.out.println("DAO - reviewList ȣ��");
//		String query = "SELECT * FROM review WHERE drinkId = ? ORDER BY reviewId DESC";
//
//		try {
//			return template.query(query, new BeanPropertyRowMapper<>(ReviewDto.class), drinkId);
//		} catch (Exception e) {
//
//			throw new RuntimeException("Error retrieving reviews" + drinkId, e);
//		}
//	}
//
//	// ������ ����
//	public List<ReviewDto> getReviewsByDrinkIdPaginated(String drinkId, int page, int pageSize) {
//		System.out.println("DAO - review ������ ����");
//		String query = "SELECT * FROM review WHERE drinkId = ? ORDER BY reviewId DESC LIMIT ? OFFSET ?";
//		int offset = (page - 1) * pageSize;
//
//		try {
//			return template.query(query, new BeanPropertyRowMapper<>(ReviewDto.class), drinkId, pageSize, offset);
//		} catch (Exception e) {
//			// �α� ���
//			throw new RuntimeException("Error : " + drinkId, e);
//		}
//	}
//	
//	// Review �󼼺���
//	public ReviewDto reviewDetail(String reviewId) {
//		System.out.println("DAO - review �󼼺���");
//		String query = "SELECT * FROM REVIEW WHERE reviewId = "+ reviewId;	
//		return template.queryForObject(query, new BeanPropertyRowMapper<ReviewDto>(ReviewDto.class));
//	}
//}
