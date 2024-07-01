package com.digi.distiller.dto.review;

public class commentDto {
	
	private String commentId;
	private String reveiwId;
	private String userId;
	private String Content;
	private String commentDate;
	private String commentStatus;
	
	public String getCommentId() {
		return commentId;
	}
	public void setCommentId(String commentId) {
		this.commentId = commentId;
	}
	public String getReveiwId() {
		return reveiwId;
	}
	public void setReveiwId(String reveiwId) {
		this.reveiwId = reveiwId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getContent() {
		return Content;
	}
	public void setContent(String content) {
		Content = content;
	}
	public String getCommentDate() {
		return commentDate;
	}
	public void setCommentDate(String commentDate) {
		this.commentDate = commentDate;
	}
	public String getCommentStatus() {
		return commentStatus;
	}
	public void setCommentStatus(String commentStatus) {
		this.commentStatus = commentStatus;
	}
	
	

}
