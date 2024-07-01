package com.digi.distiller.dto.user;

public class UserDto {

	private String userId;
	private String password;
	private String name;
	private String email;
	private String birth;
	private String address;
	private String phone;
	private String admin;
	private String userStatus;
	
	public UserDto() {
		
	}
	
	public UserDto(String userId, String password, String name, String email, String birth, 
			String address, String phone) {
		this.userId = userId;
		this.password = password;
		this.name = name;
		this.email = email;
		this.birth = birth;
		this.address = address;
		this.phone = phone;
		
	}
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getBirth() {
		return birth;
	}
	public void setBirth(String birth) {
		this.birth = birth;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAdmin() {
		return admin;
	}
	public void setAdmin(String admin) {
		this.admin = admin;
	}
	public String getUserStatus() {
		return userStatus;
	}
	public void setUserStatus(String userStatus) {
		this.userStatus = userStatus;
	}
	
	
	

}
