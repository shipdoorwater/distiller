package com.digi.distiller.dao.review;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.digi.distiller.dto.review.ReviewDto;

@Repository
public class ReviewDao {

    private final JdbcTemplate template;

    @Autowired
    public ReviewDao(JdbcTemplate template) {
        this.template = template;
    }

	// 리뷰 리스트 불러오기
    public List<ReviewDto> reviewListDao(String drinkId) {
        String query = "SELECT drinkId, email, rating, reviewDate, reviewContent FROM review WHERE drinkId = ? ORDER BY reviewId DESC";

        try {
            return template.query(query, new Object[]{drinkId}, new BeanPropertyRowMapper<>(ReviewDto.class));
        } catch (Exception e) {
            // 예외 발생 시 로그 출력
            System.err.println("리뷰 읽어오기 에러: " + drinkId);
            e.printStackTrace(); // 로그에 예외 스택 트레이스 출력

            // 런타임 예외로 감싸서 다시 던짐
            throw new RuntimeException("리뷰 읽어오기 에러: " + drinkId, e);
        }
    }
    
    
    public int getTotalReviewCount(String drinkId) {
        String query = "SELECT COUNT(*) FROM review WHERE drinkId = ?";
        try {
            return template.queryForObject(query, Integer.class, drinkId);
        } catch (Exception e) {
            // 로그 기록 (로그 시스템 사용 권장)
            throw new RuntimeException("drink ID 기준으로 DB에서 리뷰 수 count(*) 가져오기 에러: " + drinkId, e);
        }
    }
    
    public boolean addLike(String reviewId, String email) {
        // 이미 좋아요를 눌렀는지 확인
        String checkSql = "SELECT COUNT(*) FROM likes WHERE reviewId = ? AND email = ?";

        int count = template.queryForObject(checkSql, Integer.class, reviewId, email);
        
        // email, reviewid 로 기존에 좋아요 했는지
        if (count == 0) {
            // 좋아요 추가
            String sql = "INSERT INTO likes (reviewId, email) VALUES (?, ?)";
            template.update(sql, reviewId, email);
            return true;
        }
        return false;
    }

    public int getLikeCount(String reviewId) {
        String sql = "SELECT COUNT(*) FROM likes WHERE reviewId = ?";
        return template.queryForObject(sql, Integer.class, reviewId);
    }

    public String getDrinkIdFromReviewId(String reviewId) {
        String query = "SELECT drinkId FROM review WHERE reviewId = ?";
        try {
            return template.queryForObject(query, String.class, reviewId);
        } catch (Exception e) {
            throw new RuntimeException("리뷰 ID로 drink ID 조회 중 에러 발생: " + reviewId, e);
        }
    }
}
