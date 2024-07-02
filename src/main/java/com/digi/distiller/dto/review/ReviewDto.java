package com.digi.distiller.dto.review;

public class ReviewDto {

	private String reviewId;
	private String drinkId;
	private String email;
	private String rating;
	private String tagId;
	private String reviewDate;
	private String reviewContent;
	private String reviewStatus;
	

	public ReviewDto(String email, String reviewDate, String rating, String reviewContent) {
		this.email = email;
		this.reviewDate = reviewDate;
		this.rating = rating;
		this.reviewContent = reviewContent;
	}
	public ReviewDto() {
		// TODO Auto-generated constructor stub
	}
	public String getReviewId() {
		return reviewId;
	}
	public void setReviewId(String reviewId) {
		this.reviewId = reviewId;
	}
	public String getDrinkId() {
		return drinkId;
	}
	public void setDrinkId(String drinkId) {
		this.drinkId = drinkId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public String getTagId() {
		return tagId;
	}
	public void setTagId(String tagId) {
		this.tagId = tagId;
	}
	public String getReviewDate() {
		return reviewDate;
	}
	public void setReviewDate(String reviewDate) {
		this.reviewDate = reviewDate;
	}
	public String getReviewContent() {
		return reviewContent;
	}
	public void setReviewContent(String reviewContent) {
		this.reviewContent = reviewContent;
	}
	public String getReviewStatus() {
		return reviewStatus;
	}
	public void setReviewStatus(String reviewStatus) {
		this.reviewStatus = reviewStatus;
	}
	
	

}
