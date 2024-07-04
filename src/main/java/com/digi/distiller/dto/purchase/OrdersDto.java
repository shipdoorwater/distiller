package com.digi.distiller.dto.purchase;

public class OrdersDto {

	private String email;
	private String drinkId;
	private int count;
	private String name;
	private String drinkname;
	private String photo;
	private String price;
	private String type;
	private String nation;
	
	public OrdersDto() {
		
	}
	
	public OrdersDto(String email, String drinkId, int count, String name, String drinkname, String photo, String price, String type, String nation) {
		this.drinkId = drinkId;
		this.email = email;
		this.count = count;
		this.drinkname = drinkname;
		this.photo = photo;
		this.name = name;
		this.price = price;
		this.type = type;
		this.nation = nation;
	}	
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDrinkname() {
		return drinkname;
	}

	public void setDrinkname(String drinkname) {
		this.drinkname = drinkname;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public String getNation() {
		return nation;
	}

	public void setNation(String nation) {
		this.nation = nation;
	}



}
