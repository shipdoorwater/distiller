<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../Head.jsp"%>

<main aria-hidden="false" class="main-container" id="main-content"
	tabindex="-1">
	<div class="scroller">
		<div class="center-column">
			<h1 class="offscreen">My Feed</h1>
			<div class="profile feed">
				<div class="desktop-profile-nav">
					<div class="profile-nav">
						<div class="summary">
							<a href="${pageContext.request.contextPath}/myProfile">
								<div class="user-avatar">
									<div aria-label=${userDto.name }>
										<img class="pic" role="img"
											src="${pageContext.request.contextPath}/assets/images/plaaceholders/placeholder_2.png" />
									</div>

								</div>
							</a>
							<p class="tertiary-headline name">${userDto.name }</p>
						</div>
						<!-- <div class="user-statistics">
							<div class="statistic reviews-link">
								<a href="/profile/munsu-bae/tastes"> <span class="link-wrap">
										0
										<div>Reviews</div>
								</span>
								</a>
							</div>

							 <div class="statistic followers-link">
								<a href="/profile/munsu-bae/followers"> <span
									class="link-wrap"> 0
										<div>Followers</div>
								</span>
								</a>
							</div>

							<div class="statistic following-link">
								<a href="/profile/munsu-bae/following"> <span
									class="link-wrap"> 0
										<div>Following</div>
								</span>
								</a>
							</div> 

						</div> -->

						<div class="menu">
							<div class="menu-content">
								<ul>
									<!-- 		<li class="profile-menu__item" id="active"><a
										href="/profile/munsu-bae/feed"> <i aria-hidden="true"
											class="icomoon-activity-feed"></i> <span
											class="mini-headline">My Feed</span> <span class="offscreen">Current
												Page</span>
									</a></li> -->

									<li class="profile-menu__item"><a
										href="${pageContext.request.contextPath}/myReview"> <i
											aria-hidden="true" class="fa fa-list-ul"></i> <span
											class="mini-headline">Reviews</span>
									</a></li>

									<li class="profile-menu__item"><a
										href="${pageContext.request.contextPath}/purchase/cart"> <i
											aria-hidden="true" class="fa fa-list-ul"></i> <span
											class="mini-headline">My Carts</span>
									</a></li>
									<li class="profile-menu__item"><a
										href="${pageContext.request.contextPath}/purchase/order">
											<i aria-hidden="true" class="far fa-bookmark"></i> <span
											class="mini-headline">My Orders</span>
									</a></li>
									<li class="profile-menu__item"><a
										href="${pageContext.request.contextPath}/settings"> <i
											aria-hidden="true" class="icomoon-cog"></i> <span
											class="mini-headline">Settings</span>
									</a></li>
									<!-- <li><a
										href="mailto:hello@distiller.com?subject=Distiller.com%20Feedback&amp;body=%0A%0ASent%20from:%20{{userAgent}}">
											<i aria-hidden="true" class="fa fa-envelope"></i> <span
											class="mini-headline"> Contact Us </span>
									</a></li> -->
									<li><a data-method="delete" href="/logout" rel="nofollow">
											<i aria-hidden="true" class="icomoon-x"></i> <span
											class="mini-headline"> LogOut </span>
									</a></li>
								</ul>
							</div>
						</div>

					</div>

				</div>

				<div class="personal-content">
					
					<div class="edit-panel-container">
						<div class="error"></div>
						<form class="edit-profile" id="edit_user_400356"
							action="${pageContext.request.contextPath}/changeSetting"
							accept-charset="UTF-8" method="post">
						<!-- 	<input name="utf8" type="hidden" value="✓"><input
								type="hidden" name="_method" value="patch"><input
								type="hidden" name="authenticity_token"
								value="27sUS1QHdlRM2P3uxg9e0oq2F6noEoV3K5GXRecgNShOx90TfzNkthL5T8q7p5gHk04DOg8pys5MwVf46NCUig=="> -->
							<div class="form-fields">
								
								<div class="text-fields">
									<div class="field">
										<label for="user[username]">User name</label>
										<input id="userName" maxlength="30" name="userName" type="text" value="${userDto.name}">
									</div>
									<div class="field">
										<label for="user[tagline]">Phone Number</label>
										<input id="userPhone" maxlength="30" name="userPhone" value="${userDto.phone }"	 type="text">
									</div>
									<div class="field">
										<label for="user[tagline]">Address</label>
										<input id="userAddress" maxlength="100" name="userAddress" value="${userDto.address }" type="text">
									</div>
									
								
									<input class="button submit small accented" type="submit"
										value="Save Changes">
								</div>
							</div>
						</form>
						<div class="additional-links">
							<a class="button small export-tastes" href="${pageContext.request.contextPath}/changePasswordView"> Change Password</a>
							<a class="button small export-tastes" href="${pageContext.request.contextPath}/deleteAccountView">Delete Account</a>
						</div>
					</div>

				</div>


			</div>
		</div>

	</div>
</main>

<%@ include file="../footer.jsp"%>
<script>
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".profile-menu__item");

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            // 모든 li 요소에서 id="active" 제거
            menuItems.forEach(menuItem => {
                menuItem.removeAttribute("id");
            });

            // 클릭된 li 요소에 id="active" 추가
            this.setAttribute("id", "active");
        });
    });
});
</script>