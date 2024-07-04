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
										<img class="pic" role="img" src="${pageContext.request.contextPath}/assets/images/plaaceholders/placeholder_2.png"/>
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
										href="${pageContext.request.contextPath}/myReview"> <i aria-hidden="true"
											class="fa fa-list-ul"></i> <span class="mini-headline">Reviews</span>
									</a></li>
				
									<li class="profile-menu__item"><a
										href="${pageContext.request.contextPath}/purchase/cart"> <i aria-hidden="true"
											class="fa fa-list-ul"></i> <span class="mini-headline">My Carts</span>
									</a></li>
			 						<li class="profile-menu__item"><a
										href="${pageContext.request.contextPath}/purchase/order"> <i
											aria-hidden="true" class="far fa-bookmark"></i> <span
											class="mini-headline">My Orders</span>
									</a></li> 
									<li class="profile-menu__item"><a
										href="${pageContext.request.contextPath}/mySetting"> <i aria-hidden="true"
											class="icomoon-cog"></i> <span class="mini-headline">Settings</span>
									</a></li>
									<!-- <li><a
										href="mailto:hello@distiller.com?subject=Distiller.com%20Feedback&amp;body=%0A%0ASent%20from:%20{{userAgent}}">
											<i aria-hidden="true" class="fa fa-envelope"></i> <span
											class="mini-headline"> Contact Us </span>
									</a></li> -->
									<li><a data-method="delete" href="/logout"
										rel="nofollow"> <i aria-hidden="true" class="icomoon-x"></i>
											<span class="mini-headline"> LogOut </span>
									</a></li>
								</ul>
							</div>
						</div>

					</div>

				</div>
				<div class="personal-content profile-list">
					
					<!-- <a class="button mini notifications-only"
						href="/profile/munsu-bae/feed?notifications_only=true"> Show
						Only My Activity </a> -->
					<div class="clear"></div>
					<div class="results">
						<div class="empty-feed">
							<!-- <h3 class="tertiary-headline">No Activity Yet</h3> -->
							<ul>
								<li><a class="button accented" href="/search"> Search
										Spirits </a></li>
								<li><a class="button inverted" href="/user_search">
										Search For People </a></li>
							</ul>
						</div>

					</div>
					<!-- <div class="pagination-control-container">
						<div class="pagination-control">
							<span class="pagination-control__description"> No
								Activities Found </span>

						</div>

					</div> -->

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