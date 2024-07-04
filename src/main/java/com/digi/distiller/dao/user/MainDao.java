package com.digi.distiller.dao.user;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;

import com.digi.distiller.dto.user.MainReviewDto;
import com.digi.distiller.util.Constant;


public class MainDao {

	JdbcTemplate template;
	
	public MainDao() {
		this.template = Constant.template;
	}
	
	public ArrayList<MainReviewDto> showAllRecentReview() {
		ArrayList<MainReviewDto> list = new ArrayList<MainReviewDto>();
		String sql = "SELECT A.DRINKID, A.DRINKNAME, A.PHOTO, A.TYPE, A.SUB1, A.NATION, COUNT(B.REVIEWID) AS REVIEWCOUNT, ROUND(AVG(B.RATING), 1) AS AVGRATING\r\n"
				+ "FROM DRINK A\r\n"
				+ "JOIN REVIEW B\r\n"
				+ "ON A.DRINKID = B.DRINKID\r\n"
				+ "WHERE B.REVIEWSTATUS='1'                    \r\n"
				+ "GROUP BY A.DRINKID,A.DRINKNAME, A.PHOTO, A.TYPE, A.SUB1, A.NATION\r\n"
				+ "ORDER BY MIN(B.REVIEWCONTENT) ASC\r\n"
				+ "LIMIT 4";
		
		try {
			list = (ArrayList<MainReviewDto>) template.query(sql,new BeanPropertyRowMapper<MainReviewDto>(MainReviewDto.class));
		} catch (DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return null;
		}
		return list;
	}
	
	public ArrayList<MainReviewDto> showSpecificRecentReview(String type) {
		ArrayList<MainReviewDto> list = new ArrayList<MainReviewDto>();
		String sql = "SELECT A.DRINKID, A.DRINKNAME, A.PHOTO, A.TYPE, A.SUB1, A.NATION, COUNT(B.REVIEWID) AS REVIEWCOUNT, ROUND(AVG(B.RATING), 1) AS AVGRATING\r\n"
				+ "FROM DRINK A\r\n"
				+ "JOIN REVIEW B\r\n"
				+ "ON A.DRINKID = B.DRINKID\r\n"
				+ "WHERE B.REVIEWSTATUS='1' and A.TYPE=?                   \r\n"
				+ "GROUP BY A.DRINKID,A.DRINKNAME, A.PHOTO, A.TYPE, A.SUB1, A.NATION\r\n"
				+ "ORDER BY MIN(B.REVIEWCONTENT) ASC\r\n"
				+ "LIMIT 4";
		
		try {
			list = (ArrayList<MainReviewDto>) template.query(sql, new PreparedStatementSetter() {

				@Override
				public void setValues(PreparedStatement ps) throws SQLException {
					ps.setString(1, type);
				}
			}, new BeanPropertyRowMapper<MainReviewDto>(MainReviewDto.class));
		} catch (DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return null;
		}
		return list;
	}
}
