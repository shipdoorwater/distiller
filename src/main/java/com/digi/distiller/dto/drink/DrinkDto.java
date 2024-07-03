package com.digi.distiller.dto.drink;

public class DrinkDto {

	private String drinkId;
	private String drinkName;
	private String nation;
	private String photo;
	private String drinkExplain;
	private String price;
	private String type;
	private String sub1;
	private String sub2;
	private String maturity;
	private String abv;
	
	public DrinkDto() {
		
	}
	
	public DrinkDto(String drinkId, String drinkName, String nation, String photo,
			String drinkExplain, String price, String type, String sub1, String sub2, String maturity, String abv) {
		this.drinkId = drinkId;
		this.drinkName = drinkName;
		this.nation = nation;
		this.drinkExplain = drinkExplain;
		this.price = price;
		this.type = type;
		this.sub1 = sub1;
		this.sub2 = sub2;
		this.maturity = maturity;
		this.abv = abv;
	}
	
	public String getDrinkId() {
		return drinkId;
	}
	public void setDrinkId(String drinkId) {
		this.drinkId = drinkId;
	}
	public String getDrinkName() {
		return drinkName;
	}
	public void setDrinkName(String drinkName) {
		this.drinkName = drinkName;
	}
	public String getNation() {
		return nation;
	}
	public void setNation(String nation) {
		this.nation = nation;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public String getDrinkExplain() {
		return drinkExplain;
	}
	public void setDrinkExplain(String drinkExplain) {
		this.drinkExplain = drinkExplain;
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
	public String getSub1() {
		return sub1;
	}
	public void setSub1(String sub1) {
		this.sub1 = sub1;
	}
	public String getSub2() {
		return sub2;
	}
	public void setSub2(String sub2) {
		this.sub2 = sub2;
	}
	public String getMaturity() {
		return maturity;
	}
	public void setMaturity(String maturity) {
		this.maturity = maturity;
	}
	public String getAbv() {
		return abv;
	}
	public void setAbv(String abv) {
		this.abv = abv;
	}	
	
	

}
