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
										href="${pageContext.request.contextPath}/settings"> <i aria-hidden="true"
											class="icomoon-cog"></i> <span class="mini-headline">Settings</span>
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
				<div class="personal-content profile-list">
					
					<!-- <a class="button mini notifications-only"
						href="/profile/munsu-bae/feed?notifications_only=true"> Show
						Only My Activity </a> -->
					<div class="clear"></div>
					
					
					<div class="profile-list">
					    <div class="results results-container" data-behavior="results-container">
					        <ul class="user-tastes">
					            <c:forEach var="review" items="${reviewList}">
					                <li class="taste user-taste js-carousel whiskey-content" data-max-items="1" data-pagination="true">
					                    <div class="taste-content">
					                        <div class="taste__meta-content">
					                            <div class="taste-content__edit-buttons">
					                                <a class="taste-content__edit-button" href="/">
					                                    <i class="fa fa-pencil" aria-hidden="true"></i>
					                                </a>
					                                <a class="taste-content__edit-button" data-confirm="Are you sure?" data-method="delete" href="/">
					                                    <i class="fa fa-times" aria-hidden="true"></i>
					                                </a>
					                            </div>
					                        </div>
					
					                        <div class="high-level-info">
					                            <a class="image-wrap" href="/">
					                                <div aria-label="${review.drinkName} bottle">
					                                	<img class="image" role="img" style="object-fit: cover;" src="${pageContext.request.contextPath}/assets/images/${review.photo}"/>    
					                                </div>
					                            </a>
					                            <div class="name-details">
					                                <a href="/">
					                                    <h3 class="mini-headline name truncate-line">${review.drinkName}</h3>
					                                </a>
					                                <p class="origin truncate-line">${review.type} — ${review.nation}</p>
					                                <div class="date">
					                                    <span class="tasted">Reviewed</span> ${review.reviewDate}
					                                </div>
					                                <div class="rating detail">
					                                    <div class="rating-display">
					                                        <div class="rating-display__value">${review.rating}</div>
					                                        <div class="rating-stars">
					                                            <div class="rating-stars stars-${review.rating}">
					                                                <c:forEach begin="1" end="5" var="i">
					                                                    <span class="rate">
					                                                        <i aria-hidden="true" class="icomoon-review-star <c:if test="${i <= review.rating}">filled</c:if>"></i>
					                                                    </span>
					                                                </c:forEach>
					                                                <span class="offscreen">${review.rating} out of 5 stars</span>
					                                            </div>
					                                        </div>
					                                    </div>
					                                </div>
					                            </div>
					                        </div>
					
					                        <div class="taste-images">
					                            <div class="carousel">
					                                <ul data-behavior="carousel-slides" class="owl-carousel" role="none" style="opacity: 0;">
					                                </ul>
					                            </div>
					                        </div>
					
					                        <div class="taste-actions">
					                            <div class="like-container js-like-button-container" data-taste-id="${review.reviewId}">
					                                <div class="modal js-hideable-modal hidden js-taste-likes-${review.reviewId}">
					                                    <div class="modal-window">
					                                        <button class="js-modal-close close">
					                                            <i aria-hidden="true" class="icomoon-x"></i>
					                                            <span class="offscreen">Close Modal</span>
					                                        </button>
					                                        <ul class="liking-users">
					                                        </ul>
					                                    </div>
					                                </div>
					                                <div class="like-buttons">
					                                    <a class="button mini" href="/tastes/${review.reviewId}">Comment</a>
					                                </div>
					                            </div>
					                            <a class="show-hide-comments" href="/tastes/${review.reviewId}">
					                                <div class="ultra-mini-headline">
					                                    <div class="show-comment-link">
					                                        Show Comments ( <span>11</span> )
					                                        <span class="offscreen">&nbsp; for ${sessionScope.loginedEmail}'s review of ${review.drinkName}</span>
					                                    </div>
					                                </div>
					                            </a>
					                        </div>
					                    </div>
					                </li>
					            </c:forEach>
					        </ul>
					    </div>
					</div>
					
					
					
					<!-- <div class="profile-list">
						
						<div class="results results-container"
							data-behavior="results-container">
							<ul class="user-tastes">
								<li class="taste user-taste js-carousel whiskey-content"
									data-max-items="1" data-pagination="true">
									<div class="taste-content">
										<div class="taste__meta-content">
											<div class="taste-content__edit-buttons">
												<a class="taste-content__edit-button"
													href="/tastes/1478593/edit"> <i class="fa fa-pencil"
													aria-hidden="true"></i>
												</a> <a class="taste-content__edit-button"
													data-confirm="Are you sure?" data-method="delete"
													href="/tastes/1478593"> <i class="fa fa-times"
													aria-hidden="true"></i>
												</a>
											</div>
										</div>


										<div class="high-level-info">
											<a class="image-wrap" href="/spirits/lismore-15-year">
												<div aria-label="Lismore 15 Year bottle" class="image"
													role="img"
													style="background-image: url(https://ip-distiller.imgix.net/images/spirits/b9e70460-7923-0137-492c-765bda5edd8a/lismore_15_year_original.jpg?w=120&amp;h=120&amp;mark-w=35&amp;mark-h=35&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
											</a>

											<div class="name-details">
												<a href="/spirits/lismore-15-year">
													<h3 class="mini-headline name truncate-line">Lismore
														15 Year</h3>
												</a>
												<p class="origin truncate-line">Single Malt — Speyside,
													Scotland</p>

												<div class="date">
													<span class="tasted">Reviewed</span> July 2, 2024
												</div>

												<div class="rating detail">
													<div class="rating-display">
														<div class="rating-display__value">2.0</div>
														<div class="rating-stars">
															<div class="rating-stars stars-2">
																<span class="rate"> <i aria-hidden="true"
																	class="icomoon-review-star"></i>
																</span> <span class="rate"> <i aria-hidden="true"
																	class="icomoon-review-star"></i>
																</span> <span class="rate"> <i aria-hidden="true"
																	class="icomoon-review-star"></i>
																</span> <span class="rate"> <i aria-hidden="true"
																	class="icomoon-review-star"></i>
																</span> <span class="rate"> <i aria-hidden="true"
																	class="icomoon-review-star"></i>
																</span> <span class="offscreen">2.0 out of 5 stars</span>
															</div>

														</div>
													</div>

												</div>

											</div>
										</div>



										<div class="taste-images">
											<div class="carousel">
												<ul data-behavior="carousel-slides" class="owl-carousel"
													role="none" style="opacity: 0;">
												</ul>
											</div>
										</div>

										<div class="taste-actions">
											<div class="like-container js-like-button-container"
												data-taste-id="1478593">
												<div
													class="modal js-hideable-modal hidden js-taste-likes-1478593">
													<div class="modal-window">
														<button class="js-modal-close close">
															<i aria-hidden="true" class="icomoon-x"></i> <span
																class="offscreen">Close Modal</span>
														</button>
														<ul class="liking-users">
														</ul>

													</div>
												</div>
												<div class="like-buttons">
													<a class="button mini" href="/tastes/1478593">Comment</a>
												</div>
											</div>

											<a class="show-hide-comments" href="/tastes/1478593">
												<div class="ultra-mini-headline">
													<div class="show-comment-link">
														Show Comments ( <span>0</span> ) <span class="offscreen">
															&nbsp; for Munsu-Bae's review of Lismore 15 Year </span>
													</div>
												</div>
											</a>

										</div>
									</div>
								</li>

							</ul>
						</div> -->
						
						
						<!-- <div class="pagination-control-container">
							<div class="pagination-control">
								<span class="pagination-control__description"> Results
									1-1 of 1 Reviews </span>

							</div>

						</div> -->
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