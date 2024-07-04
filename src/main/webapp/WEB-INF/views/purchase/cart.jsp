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
    font-size: 1.2em;
    margin-top: 20px;
    padding: 10px;
    background-color: #333;
    border-radius: 5px;
}
    </style>

    <div class="container">
  <h1>장바구니</h1>

  <ul class="profile-list">
    <c:set var="totalCartAmount" value="0" />
    <c:forEach var="item" items="${cartDto}">
      <c:set var="itemTotal" value="${item.price * item.count}" />
      <c:set var="totalCartAmount" value="${totalCartAmount + itemTotal}" />
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
      <p>수량: ${item.count}</p>
      <p>
        가격:
        <fmt:formatNumber
          value="${item.price}"
          type="currency"
          currencySymbol="$"
        />
      </p>
      <p>
        소계:
        <fmt:formatNumber
          value="${itemTotal}"
          type="currency"
          currencySymbol="$"
        />
      </p>
    </div>
  </div>
  <form action="${pageContext.request.contextPath}/purchase/cartDelete" method="POST">
  <input type="hidden" name="email" value="${email}">
  <input type="hidden" name="drinkId" value="${item.drinkId}">
  <button type="submit" class="remove-btn js-class-changer"
    data-add-class="confirm-removal"
    data-target-parent="true"
    data-target=".user-spirit-list-item">
    삭제
  </button>
	</form>
</li>
    </c:forEach>
  </ul>

  <div class="total-amount">
    총 금액:
    <fmt:formatNumber
      value="${totalCartAmount}"
      type="currency"
      currencySymbol="$"
    />
  </div>

  <div class="button-container">
    <button class="order-button">주문하기</button>
    <button class="add-more-button">더 담으러 가기</button>
  </div>
</div>

    <script>
      // 간단한 JavaScript로 삭제 확인 기능 구현
      document.querySelectorAll(".js-class-changer").forEach((button) => {
        button.addEventListener("click", function () {
          const target = this.closest(".user-spirit-list-item");
          const confirmation = target.querySelector(".removal-confirmation");
          confirmation.style.display =
            confirmation.style.display === "none" ? "block" : "none";
        });
      });
    </script>

<%@ include file="../footer.jsp" %>