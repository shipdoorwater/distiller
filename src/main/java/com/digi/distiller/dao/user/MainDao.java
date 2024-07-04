package com.digi.distiller.dao.user;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;

import com.digi.distiller.dto.user.MainDrinkDto;
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
	
	public ArrayList<MainDrinkDto> showAllDrinks() {
		ArrayList<MainDrinkDto> list = new ArrayList<>();
		String sql = "select drinkid, drinkname, drinkexplain, photo from DRINK limit 3";
		
		try {
			list = (ArrayList<MainDrinkDto>) template.query(sql,new BeanPropertyRowMapper<MainDrinkDto>(MainDrinkDto.class));		
		} catch (DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return null;
		}
		return list;
	}
	
	public ArrayList<MainDrinkDto> showSpecificDrinks(String type) {
		ArrayList<MainDrinkDto> list = new ArrayList<>();
		String sql = "select drinkid, drinkname, drinkexplain, photo from DRINK where type=? limit 3";
		
		try {
			list = (ArrayList<MainDrinkDto>) template.query(sql, new PreparedStatementSetter() {

				@Override
				public void setValues(PreparedStatement ps) throws SQLException {
					ps.setString(1, type);
				}
			}							
			, new BeanPropertyRowMapper<MainDrinkDto>(MainDrinkDto.class));		
		} catch (DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return null;
		}
		return list;
	}
	
	// 전체 등록된 술 정보 개수 조회
	public int getAllDrinkCount() {
		int count = 0;
		String sql = "select count(*) as count from DRINK";
		
		try {
			count = template.queryForObject(sql, Integer.class);
		} catch (DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return count;
		}
		return count;
	}
	
	
	public ArrayList<MainDrinkDto> showDrinkList(int page, int pageSize) {
		ArrayList<MainDrinkDto> list = new ArrayList<>();
		int offset = (page - 1) * pageSize;
		String sql = "SELECT A.DRINKID,\r\n"
				+ "	A.DRINKNAME,\r\n"
				+ "    A.NATION,\r\n"
				+ "    A.PHOTO,\r\n"
				+ "    A.drinkEXPLAIN,\r\n"
				+ "    A.PRICE,\r\n"
				+ "    A.TYPE,\r\n"
				+ "    A.SUB1,\r\n"
				+ "    A.SUB2,\r\n"
				+ "    A.MATURITY,\r\n"
				+ "	COUNT(B.REVIEWID) AS REVIEWCOUNT,\r\n"
				+ "    ROUND(AVG(B.RATING), 1) AS AVGRATING\r\n"
				+ "FROM DRINK A\r\n"
				+ "LEFT OUTER JOIN REVIEW B\r\n"
				+ "ON A.DRINKID = B.DRINKID\r\n"
				+ "GROUP BY A.DRINKID, A.DRINKNAME, A.NATION, A.PHOTO, A.drinkEXPLAIN, A.PRICE, A.TYPE, A.SUB1, A.SUB2, A.MATURITY \r\n"
				+ "order by AVGRATING DESC limit ?, ?";
		
		try {
			list = (ArrayList<MainDrinkDto>) template.query(sql, new Object[]{offset, pageSize},
					new BeanPropertyRowMapper<MainDrinkDto>(MainDrinkDto.class));
		} catch (DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return null;
		}
		return list;
	}
	
	// 특정 키워드 술 정보 등록 개수 조회
	public int getSearchCount(String keyword) {
		int count = 0;
		String sql = "select count(*) as count from DRINK where DRINKNAME LIKE ?";
		
		try {
			count = template.queryForObject(sql, new Object[]{"%" + keyword + "%"}, Integer.class);
		} catch (DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return count;
		}
		return count;
	}
	
	
	public ArrayList<MainDrinkDto> searchDrinkList(String keyword, int page, int pageSize ) {
		ArrayList<MainDrinkDto> list = new ArrayList<>();
		int offset = (page - 1) * pageSize;
		String sql = "SELECT A.DRINKID,\r\n"
				+ "	A.DRINKNAME,\r\n"
				+ "    A.NATION,\r\n"
				+ "    A.PHOTO,\r\n"
				+ "    A.drinkEXPLAIN,\r\n"
				+ "    A.PRICE,\r\n"
				+ "    A.TYPE,\r\n"
				+ "    A.SUB1,\r\n"
				+ "    A.SUB2,\r\n"
				+ "    A.MATURITY,\r\n"
				+ "	COUNT(B.REVIEWID) AS REVIEWCOUNT,\r\n"
				+ "    ROUND(AVG(B.RATING), 1) AS AVGRATING\r\n"
				+ "FROM DRINK A\r\n"
				+ "LEFT OUTER JOIN REVIEW B\r\n"
				+ "ON A.DRINKID = B.DRINKID\r\n"
				+ "WHERE DRINKNAME LIKE ? \r\n"
				+ "GROUP BY A.DRINKID,	A.DRINKNAME, A.NATION, A.PHOTO, A.drinkEXPLAIN, A.PRICE, A.TYPE, A.SUB1, A.SUB2, A.MATURITY \r\n"
				+ "ORDER BY AVGRATING DESC limit ?, ?";
		
		try {
			list = (ArrayList<MainDrinkDto>) template.query(sql, new PreparedStatementSetter() {
				@Override
				public void setValues(PreparedStatement ps) throws SQLException {
					ps.setString(1, "%" + keyword + "%");
					ps.setInt(2, offset);
					ps.setInt(3, pageSize);
				}
			}
			, new BeanPropertyRowMapper<MainDrinkDto>(MainDrinkDto.class));
		} catch (DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return null;
		}
		return list;
	}
	
}
