package com.digi.distiller.dao.user;

import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.web.bind.annotation.RequestParam;

import com.digi.distiller.util.Constant;

public class UserDao {

	JdbcTemplate template;
	
	public UserDao() {
		this.template = Constant.template;
	}
	
	public boolean register(String email, String name, String password) {
		boolean result = false;
		String sql = "insert into user(EMAIL, PASSWORD, NAME, BIRTH, ADDRESS, PHONE, ADMIN, USERSTATUS) VALUES(?,?,?,?,?,?,?,?)";
		try {
			int success = template.update(sql, new PreparedStatementSetter() {
				@Override
				public void setValues(PreparedStatement ps) throws SQLException {
					// TODO Auto-generated method stub
					ps.setString(1, email);
					ps.setString(2, password);
					ps.setString(3, name);
					ps.setString(4, "20000101");
					ps.setString(5, "DEFUALT");
					ps.setString(6, "01012345678");
					ps.setString(7, "0");
					ps.setString(8, "1");
				}
			});
			if (success > 0) {
				return result = true;
			}
		} catch (DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return result;
		}
		return result;
	}
	
	public boolean signIn(String email, String password) {
		boolean result = false;
		String sql = "select password from user where email = ?";
		try {
			String passwordData = template.queryForObject(sql,String.class,email);
			if (passwordData.equals(password)) {
				return result = true;
			}
			System.out.println("result :" + result);
		} catch (DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return result;
		}
		return result;
	}
	
	public int isAdmin(String email) {
		int isAdmin = 0;
		String sql = "select admin from user where email = ?";
		try {
			String adminData = template.queryForObject(sql,String.class,email);
			if (adminData.equals("1")) {
				return isAdmin = 1;
			}
			System.out.println("isAdmin :" + isAdmin);
		} catch (DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return isAdmin;
		}
		return isAdmin;
	}
}
