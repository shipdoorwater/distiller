<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ include file="../Head.jsp" %>

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
        padding: 20px 20px 40px; /* 상하좌우 패딩 추가, 하단 패딩 더 크게 */
      }
      h1{
        margin-top: 40px; /* 상단 여백 추가 */
        /*margin-bottom: 30px;  하단 여백 추가 */
      }
      h1 {
        color: #fff;        
      }
      h2 {
  		color: #fff;
  		margin-bottom: 20px; /* 하단 여백 추가 */
	  }
      .order-summary,
      .order-form {
        background-color: #222;
        margin-bottom: 40px;
        padding: 20px;
        border-radius: 5px;
      }
      .order-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      .order-details {
        flex: 1;
      }
      .order-image {
        width: 150px;
        height: 150px;
        object-fit: cover;
        margin-left: 20px;
        border-radius: 5px;
      }
      .order-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      .total-amount {
        font-size: 1.2em;
        margin-top: 20px;
        padding: 10px;
        background-color: #333;
        border-radius: 5px;
        text-align: right;
      }
      .form-group {
        margin-bottom: 15px;
      }
      label {
        display: block;
        margin-bottom: 5px;
      }
      input[type="text"],
      input[type="tel"] {
        width: calc(100% - 16px); /* 패딩을 고려한 너비 조정 */
        padding: 8px;
        border: 1px solid #444;
        border-radius: 3px;
        background-color: #333;
        color: #fff;
      }
	 .submit-button {
		  background-color: rgb(240, 90, 65);
		  color: white;
		  padding: 12px 20px;
		  border: none;
		  border-radius: 3px;
		  cursor: pointer;
		  font-size: 16px;
		  font-weight: 600;
		  text-transform: uppercase;
		  margin-top: 20px;
		  width: 100%; /* 버튼을 폼의 전체 너비로 설정 */
		  transition: background-color 0.3s ease; /* 부드러운 호버 효과를 위한 전환 */
	  }
      .submit-button:hover {
        background-color: rgb(220, 70, 45);
      }
    </style>
  
    <div class="container">
      <h1>주문 페이지</h1>

      <div class="order-summary">
        <h2>주문 내역</h2>
        <div class="order-content">
          <div class="order-details">
            <c:set var="totalAmount" value="0" />
            <c:set var="itemCount" value="0" />
            <c:forEach var="item" items="${cartItems}" varStatus="status">
              <c:set var="itemTotal" value="${item.price * item.quantity}" />
              <c:set var="totalAmount" value="${totalAmount + itemTotal}" />
              <c:set var="itemCount" value="${itemCount + 1}" />
              <div class="order-item">
                <span>${item.name} x ${item.quantity}</span>
                <span
                  ><fmt:formatNumber
                    value="${itemTotal}"
                    type="currency"
                    currencySymbol="₩"
                /></span>
              </div>
            </c:forEach>
            <c:if test="${itemCount > 1}">
              <p>${cartItems[0].name} 등 ${itemCount}품목</p>
            </c:if>
            <div class="total-amount">
              총 주문금액:
              <fmt:formatNumber
                value="${totalAmount}"
                type="currency"
                currencySymbol="₩"
              />
            </div>
          </div>
          <img
            src="${cartItems[0].image}"
            alt="주문 상품 이미지"
            class="order-image"
          />
        </div>
      </div>

      <div class="order-form">
        <h2>주문자 정보</h2>
        <form action="processOrder" method="post">
          <div class="form-group">
            <label for="ordererName">주문자 이름</label>
            <input type="text" id="ordererName" name="ordererName" required />
          </div>
          <div class="form-group">
            <label for="recipientName">수령자 이름</label>
            <input
              type="text"
              id="recipientName"
              name="recipientName"
              required
            />
          </div>
          <div class="form-group">
            <label for="address">수령자 주소</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div class="form-group">
            <label for="phone">수령자 전화번호</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <button type="submit" class="submit-button">주문 완료</button>
        </form>
      </div>
    </div>


<%@ include file="../footer.jsp" %>