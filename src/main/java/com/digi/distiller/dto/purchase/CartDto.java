package com.digi.distiller.dto.purchase;

public class CartDto {

	private String userId;
	private String drinkId;
	private int count;
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getDrinkId() {
		return drinkId;
	}
	public void setDrinkId(String drinkId) {
		this.drinkId = drinkId;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
	

}
