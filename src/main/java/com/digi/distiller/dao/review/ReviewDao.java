package com.digi.distiller.dao.review;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.stereotype.Repository;

import com.digi.distiller.dto.drink.DrinkDto;
import com.digi.distiller.dto.review.ReviewDto;
import com.digi.distiller.util.Constant;

@Repository
public class ReviewDao {

	private final JdbcTemplate template;

	@Autowired
	public ReviewDao() {
		this.template = Constant.template;
	}

	// 리뷰 리스트 불러오기
	public List<ReviewDto> reviewListDao(String drinkId) {
		String query = "SELECT drinkId, email, rating, reviewDate, reviewContent FROM REVIEW WHERE drinkId = ? ORDER BY reviewId DESC";
//        String query = "SELECT d.drinkId, d.drinkName, r.email, r.rating, r.reviewDate, r.reviewContent FROM review r, drink d WHERE d.drinkId = r.drinkId and r.drinkId = ? ORDER BY r.reviewId DESC";

		try {
			return template.query(query, new Object[] { drinkId }, new BeanPropertyRowMapper<>(ReviewDto.class));
		} catch (Exception e) {
			// 예외 발생 시 로그 출력
			System.err.println("리뷰 읽어오기 에러: " + drinkId);
			e.printStackTrace(); // 로그에 예외 스택 트레이스 출력

			// 런타임 예외로 감싸서 다시 던짐
			throw new RuntimeException("리뷰 읽어오기 에러: " + drinkId, e);
		}
	}

	public int getTotalReviewCount(String drinkId) {
		String query = "SELECT COALESCE(COUNT(*), 0) FROM REVIEW WHERE drinkId = ?";
		try {
			return template.queryForObject(query, Integer.class, drinkId);
		} catch (Exception e) {
			// 로그 기록 (로그 시스템 사용 권장)
			throw new RuntimeException("drink ID 기준으로 DB에서 리뷰 수 count(*) 가져오기 에러: " + drinkId, e);
		}
	}

	public boolean addLike(String reviewId, String email) {
		// 이미 좋아요를 눌렀는지 확인
		String checkSql = "SELECT COUNT(*) FROM LIKES WHERE reviewId = ? AND email = ?";

		int count = template.queryForObject(checkSql, Integer.class, reviewId, email);

		// email, reviewid 로 기존에 좋아요 했는지
		if (count == 0) {
			// 좋아요 추가
			String sql = "INSERT INTO LIKES (reviewId, email) VALUES (?, ?)";
			template.update(sql, reviewId, email);
			return true;
		}
		return false;
	}

	public int getLikeCount(String reviewId) {
		String sql = "SELECT COUNT(*)  FROM LIKES WHERE reviewId = ?";
		return template.queryForObject(sql, Integer.class, reviewId);
	}

	public double getReviewRatingAverage(String drinkId) {
		String sql = "SELECT COALESCE(AVG(RATING), 0) FROM REVIEW WHERE drinkId = ?";
		return template.queryForObject(sql, Double.class, drinkId);
	}

	public String getDrinkIdFromReviewId(String reviewId) {
		String query = "SELECT drinkId FROM REVIEW WHERE reviewId = ?";
		try {
			return template.queryForObject(query, String.class, reviewId);
		} catch (Exception e) {
			throw new RuntimeException("리뷰 ID로 drink ID 조회 중 에러 발생: " + reviewId, e);
		}
	}

	public DrinkDto getDrinkInfo(String drinkId) {

		String query = "SELECT * FROM DRINK WHERE drinkId = ?";
		return template.queryForObject(query, new Object[] { drinkId }, new BeanPropertyRowMapper<>(DrinkDto.class));
	}

	public boolean insertReview(String drinkId, String email, String rating, String reviewcontent) {
		boolean result = false;
		
		// 현재 날짜를 'YYYYMMDD' 형태로 포맷
        String reviewdate = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        String reviewstatus = "1";
        
        
		String query = "INSERT INTO REVIEW(DRINKID, EMAIL, RATING, REVIEWDATE, REVIEWCONTENT, REVIEWSTATUS) VALUES (?, ?, ?, ?, ?, ?)";
		
		try {
            int success = template.update(query, new PreparedStatementSetter() {
                @Override
                public void setValues(PreparedStatement ps) throws SQLException {
                    ps.setString(1, drinkId);
                    ps.setString(2, email);
                    ps.setString(3, rating);
                    ps.setString(4, reviewdate);
                    ps.setString(5, reviewcontent);
                    ps.setString(6, reviewstatus);
                }
            });
            result = success > 0;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}