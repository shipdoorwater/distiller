<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Review List</title>
</head>
<body>
	<div class="review-container">
		<c:forEach items="${reviews}" var="review">
			<div class="review">
				<div class="user-info">
					<div class="user-avatar"></div>
					<div>
						<div class="userId">${review.userId}</div>
						<div class="review-date">
							Reviewed
							<fmt:formatDate value="${review.reviewDate}"
								pattern="MMMM d, yyyy" />
						</div>
					</div>
				</div>
				<div class="rating">
					${review.rating}
					<c:forEach begin="1" end="5" var="i">
						<c:choose>
							<c:when test="${i <= review.rating}">
								<span class="star">★</span>
							</c:when>
							<c:otherwise>
								<span class="star-empty">★</span>
							</c:otherwise>
						</c:choose>
					</c:forEach>
				</div>
				<c:if test="${not empty review.tagId}">
					<div class="tags">
						<c:forEach items="${review.tagId}" var="tag">
							<span class="tag">${tag}</span>
						</c:forEach>
					</div>
				</c:if>
				<c:if test="${not empty review.likes}">
					<div>${review.likes}
						Like
						<c:if test="${review.likes > 1}">s</c:if>
					</div>
				</c:if>
				<div class="actions">
					<button class="action-button">COMMENT</button>
					<button class="action-button">LIKE</button>
					<%-- <span class="show-comments">SHOW COMMENTS
						(${review.commentCount})</span> --%>
				</div>
			</div>
		</c:forEach>
	</div>
</body>
</html>