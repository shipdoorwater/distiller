package com.digi.distiller.dao.user;

import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;

import com.digi.distiller.util.Constant;

public class UserDao {

	JdbcTemplate template;
	
	public UserDao() {
		this.template = Constant.template;
	}
	
	public boolean register(String Email, String Password, String name) {
		boolean result = false;
		String sql= "insert into user(EMAIL, PASSWORD, NAME, ADMIN, USERSTATUS) values (?,?,?,0,1)";
		try {
			int success = template.update(sql, new PreparedStatementSetter() {

				@Override
				public void setValues(PreparedStatement ps) throws SQLException {
					// TODO Auto-generated method stub
					ps.setString(1, Email);
					ps.setString(2, Password);
					ps.setString(3, name);
				}}
			);
			if (success > 0)
				return result = true;
		 
		} catch (DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return result;
		}
		
		return result;		
	}
	
	public boolean login() {
		boolean result = false;
		String sql = "select password from user where email = ?";
		try {
			
		} catch(DataAccessException e) {
			System.out.println("error :" + e.getMessage());
			return result;
		}
		
		return result;		
	}
}
