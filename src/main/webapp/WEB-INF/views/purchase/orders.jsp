<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../Head.jsp" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

    <style>
      body {
    font-family: Arial, sans-serif;
    background-color: #000;
    color: #fff;
    line-height: 1.6;
    margin: 0;
    
}

.container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
            padding-top: 60px; /* 상단 여백 추가 */
    
}

.container h1 {
    color: #fff;
    margin-top: 40px;
    margin-bottom: 30px;
}

.profile-list {
    list-style-type: none;
    padding: 0;
}

.user-spirit-list-item {
    background-color: #222;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item-content {
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-right: 20px;
}

.remove-btn {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
    flex-shrink: 0;
}

.remove-btn:hover {
    background-color: #d32f2f;
}

.image-wrap {
    margin-right: 15px;
    flex-shrink: 0;
}

.image {
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
}

.item-details {
    flex-grow: 1;
    margin-right: 15px;
}

.price-details {
    text-align: right;
    min-width: 150px;
    font-size: 1em;  /* 기본 글씨 크기 증가 */
}
.price-details p {
    margin: 5px 0;  /* 각 항목 사이 간격 조정 */
}
.price-details .label {
    font-weight: bold;
    color: #aaa;  /* 라벨 색상 */
}

.price-details .value {
    font-size: 1.1em;  /* 값 부분 글씨 크기 추가 증가 */
    color: #f0f0f0;  /* 값 부분 색상 */
}
.price-details .subtotal {
    margin-top: 10px;  /* 소계 위 간격 추가 */
    padding-top: 5px;
    border-top: 1px solid #444;  /* 소계 위에 구분선 추가 */
}

.price-details .subtotal .value {
    font-size: 1.2em;  /* 소계 값 더 크게 */
    font-weight: bold;
    /* color: #4CAF50;  소계 색상 강조 (초록색 예시) */
}
.removal-confirmation {
    display: none;
    background-color: #333;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
}

.button-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
    margin-bottom: 40px;
}

.order-button, .add-more-button {
    padding: 12px 0;
    width: 180px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-transform: uppercase;
}

.order-button {
    background-color: rgb(240, 90, 65);
    color: white;
}

.add-more-button {
    background-color: #f0f0f0;
    color: rgb(240, 90, 65);
}

.order-button:hover {
    background-color: rgb(220, 70, 45);
}

.add-more-button:hover {
    background-color: #e0e0e0;
}

.total-amount {
    text-align: right;
    font-size: 2em;  /* 글씨 크기 증가 */
    margin-top: 20px;
    padding: 15px;  /* 패딩 약간 증가 */
    background-color: #333;
    border-radius: 5px;
    font-weight: bold;  /* 글씨 굵기 증가 */
}

.total-amount .amount {
    font-size: 1.2em;  /* 실제 금액 부분 더 크게 */
    color: #f0f0f0;  /* 밝은 색상으로 강조 */
}
    </style>

<div class="container">
  <h1>주문 완료</h1>
  
  <!-- 주문 정보 섹션 추가 -->
  <div class="order-info">
    <p><strong>주문 날짜:</strong> <fmt:formatDate value="${orderDate}" pattern="yyyy-MM-dd HH:mm:ss"/></p>
    <c:if test="${not empty orderNumber}">
      <p><strong>주문 번호:</strong> ${orderNumber}</p>
    </c:if>
  </div>

  <ul class="profile-list">
    <c:set var="totalOrderAmount" value="0" />
    <c:forEach var="item" items="${ordersDto}">
      <c:set var="itemTotal" value="${item.price * item.count}" />
      <c:set var="totalOrderAmount" value="${totalOrderAmount + itemTotal}" />
      <li class="user-spirit-list-item profile-list-item whiskey-content">
        <div class="item-content">
          <a class="image-wrap" href="#">
            <div
              aria-label="${item.drinkname} bottle"
              class="image"
              role="img"
              style="background-image: url('${pageContext.request.contextPath}/assets/images/${item.photo}')"
            ></div>
          </a>
          <div class="item-details">
            <h3 class="mini-headline name truncate-line">${item.drinkname}</h3>
            <p class="origin list-item__origin truncate-line">
              ${item.type} &mdash; ${item.nation}
            </p>
          </div>
          <div class="price-details">
            <p>
              <span class="label">수량:</span>
              <span class="value">${item.count}</span>
            </p>
            <p>
              <span class="label">가격:</span>
              <span class="value">
                <fmt:formatNumber
                  value="${item.price}"
                  type="currency"
                  currencySymbol="$"
                />
              </span>
            </p>
            <p class="subtotal">
              <span class="label">소계:</span>
              <span class="value">
                <fmt:formatNumber
                  value="${itemTotal}"
                  type="currency"
                  currencySymbol="$"
                />
              </span>
            </p>
          </div>
        </div>
      </li>
    </c:forEach>
  </ul>

  <div class="total-amount">
    총 주문 금액:
    <span class="amount">
      <fmt:formatNumber
        value="${totalOrderAmount}"
        type="currency"
        currencySymbol="$"
      />
    </span>
  </div>

  <div class="button-container">
    <button class="add-more-button" onclick="location.href='${pageContext.request.contextPath}/searchLiquorView'">쇼핑 계속하기</button>
  </div>
</div>

<%@ include file="../footer.jsp" %>