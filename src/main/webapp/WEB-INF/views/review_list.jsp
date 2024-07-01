<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html>
<head>
    <title>Reviews</title>
    <style>
        .review { border-bottom: 1px solid #eee; padding: 15px 0; }
        .user-info { display: flex; align-items: center; }
        .user-avatar { width: 40px; height: 40px; border-radius: 50%; background-color: #ddd; margin-right: 10px; }
        .username { font-weight: bold; color: #ff6b6b; }
        .review-date { color: #888; font-size: 0.9em; }
        .rating { font-size: 1.2em; font-weight: bold; margin: 5px 0; }
        .review-content { margin: 10px 0; }
        .tags { margin-top: 5px; }
        .tag { background-color: #ff9f43; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em; margin-right: 5px; }
        .likes { margin-top: 5px; color: #666; }
        .actions { margin-top: 10px; }
        .actions button { background: none; border: 1px solid #ccc; padding: 5px 10px; margin-right: 10px; cursor: pointer; }
        .show-comments { float: right; color: #888; font-size: 0.9em; }
    </style>
</head>
<body>
    <c:forEach items="${reviews}" var="review">
        <div class="review">
            <div class="user-info">
                <div class="user-avatar"></div>
                <div>
                    <div class="username">${review.userId}</div>
                    <div class="review-date">Reviewed <fmt:formatDate value="${review.reviewDate}" pattern="MMMM d, yyyy"/></div>
                </div>
            </div>
            <div class="rating">
                ${review.rating}
                <!-- 별점 표시 로직 추가 -->
            </div>
            <div class="review-content">${review.reviewContent}</div>
            <c:if test="${not empty review.tags}">
                <div class="tags">
                    <c:forEach items="${review.tags}" var="tag">
                        <span class="tag">${tag}</span>
                    </c:forEach>
                </div>
            </c:if>
            <c:if test="${review.likes > 0}">
                <div class="likes">${review.likes} Like<c:if test="${review.likes > 1}">s</c:if></div>
            </c:if>
            <div class="actions">
                <button class="comment">COMMENT</button>
                <button class="like">LIKE</button>
                <span class="show-comments">SHOW COMMENTS (${review.commentCount})</span>
            </div>
        </div>
    </c:forEach>
        
    <!-- 페이지네이션 -->
    <div class="pagination">
        <c:if test="${currentPage > 1}">
            <a href="?page=${currentPage - 1}">Previous</a>
        </c:if>
        
        <c:forEach begin="1" end="${totalPages}" var="i">
            <c:choose>
                <c:when test="${currentPage eq i}">
                    <span>${i}</span>
                </c:when>
                <c:otherwise>
                    <a href="?page=${i}">${i}</a>
                </c:otherwise>
            </c:choose>
        </c:forEach>
        
        <c:if test="${currentPage < totalPages}">
            <a href="?page=${currentPage + 1}">Next</a>
        </c:if>
    </div>
</body>
</html>