<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="Head.jsp"%>

<main aria-hidden="false" class="main-container" id="main-content"
	tabindex="-1">
	<div class="scroller">
		<div class="home-page" tabindex="-1">
			<h1 aria-hidden="true" class="offscreen">distiller_headline</h1>
			<div class="spirit-family-select js-spirit-family-select">
				<div class="center-column">
					<ul class="spirit-family-select__options">
						<li class="spirit-family-select__option">
							<button onclick="location.href='main';"
								class="spirit-family-select__button js-select-spirit-family all selected">
								<span class="spirit-family-select__label ultra-mini-headline">
									All Spirits <i aria-hidden="true"
									class="fa fa-chevron-down spirit-family-select__chevron"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option whiskey">
							<button onclick="location.href='main?type=위스키';"
								class="spirit-family-select__button js-select-spirit-family"
								data-value="whiskey">
								<span class="spirit-family-select__label ultra-mini-headline">
									Whiskey <i
									class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option agave">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="agave">
								<span class="spirit-family-select__label ultra-mini-headline">
									Tequila/Mezcal <i
									class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option sugarcane">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="sugarcane">
								<span class="spirit-family-select__label ultra-mini-headline">
									Rum <i class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option brandy">
							<button onclick="location.href='main?type=브랜디';"
								class="spirit-family-select__button js-select-spirit-family"
								data-value="brandy">
								<span class="spirit-family-select__label ultra-mini-headline">
									Brandy <i
									class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option gin">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="gin">
								<span class="spirit-family-select__label ultra-mini-headline">
									Gin <i class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option vodka">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="vodka">
								<span class="spirit-family-select__label ultra-mini-headline">
									Vodka <i
									class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option liqueur">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="liqueur">
								<span class="spirit-family-select__label ultra-mini-headline">
									Liqueurs/Bitters <i
									class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option other">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="other">
								<span class="spirit-family-select__label ultra-mini-headline">
									Other <i
									class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
					</ul>
				</div>
			</div>

			<div class="homepage-hero">
				<div
					class="center-column hero-slide center-content image-background"
					data-action-text="Show Me!">
					<div class="content-container">
						<h3 aria-level="1" class="secondary-headline" role="heading">New
							Spirit Releases - June 28, 2024</h3>
						<p>Check out the latest releases hitting shelves soon.</p>
						<a class="button small accented"
							href="https://distiller.com/lists/new-spirit-releases-june-28-2024">Show
							Me!</a>
					</div>
					<div aria-label="New Spirit Releases - June 28, 2024" class="image"
						role="img"
						style="background-image: url(https://ip-distiller.imgix.net/homepage_panels/images/000/001/671/original/Flasky%20Homepage%20Discount_20240628_011000_0000-1719562682.png)"></div>
				</div>
			</div>

			 <div class="content-block home-page-list bottles-list trending-bottles js-carousel"
                data-carousel-title="Trending Bottles" data-max-items="4" data-pagination="true">
                <div class="center-column">
                    <h2 class="secondary-headline carousel-title">Recent Reviews</h2>
                    <div class="list-container carousel">
                        <ul class="bottles owl-carousel owl-theme" data-behavior="carousel-slides" role="none"
                            style="opacity: 1; display: block;">
                            <div class="owl-wrapper-outer">
							    <div class="owl-wrapper" role="list" style="width: 2424px; left: 0px; display: flex; transition: all 0ms ease 0s; transform: translate3d(0px, 0px, 0px);">
							        <!-- 시작 forEach 루프 -->
							        <c:forEach var="item" items="${reviewList}">
							            <li class="homepage-list-item bottle whiskey-content" role="none" style="width: 303px;">
							                <a aria-hidden="true" href="${pageContext.request.contextPath}/drinkdetail?drinkId=${item.drinkId}" tabindex="-1">
							                    <div aria-label="${item.drinkName} Bottle" <%-- class="thumbnail" role="img"
							                        style="background-image: url('${pageContext.request.contextPath}/assets/images/${item.photo})" --%>>
							                    	<img class="thumbnail" role="img" style="object-fit: cover;"src="${pageContext.request.contextPath}/assets/images/${item.photo}">
							                    </div>
							                </a>
							                <div class="details">
							                    <a href="${pageContext.request.contextPath}/drinkdetail?drinkId=${item.drinkId}">
							                        <h3 class="mini-headline name" data-behavior="truncatable">${item.drinkName}</h3>
							                        <p class="origin trending-bottles__origin" data-behavior="truncatable">${item.sub1} — ${item.nation}</p>
							                    </a>
							                    <div class="last-tasted-by">
							                        Last reviewed by <a href="/profile/${item.drinkId}/tastes">
							                            <div class="last-tasted-by-link">User</div>
							                        </a>
							                    </div>
							                    <div class="user-rating-container">
							                        <div class="rating-display average-user-rating" itemprop="aggregateRating" itemscope=""
							                            itemtype="http://schema.org/AggregateRating">
							                            <div class="rating-display__value average-rating">
							                                <span itemprop="ratingValue">${item.avgRating}</span>
							                                <!-- <meta content="5" itemprop="bestRating">
							                                <meta content="0" itemprop="worstRating"> -->
							                            </div>
							                            <div class="rating-stars stars-${fn:substring(item.avgRating,0,1)}">
							                                <span class="rate">
							                                    <i aria-hidden="true" class="icomoon-review-star"></i>
							                                </span>
							                                <span class="rate">
							                                    <i aria-hidden="true" class="icomoon-review-star"></i>
							                                </span>
							                                <span class="rate">
							                                    <i aria-hidden="true" class="icomoon-review-star"></i>
							                                </span>
							                                <span class="rate">
							                                    <i aria-hidden="true" class="icomoon-review-star"></i>
							                                </span>
							                                <span class="rate">
							                                    <i aria-hidden="true" class="icomoon-review-star"></i>
							                                </span>
							                                <span class="offscreen">${item.avgRating} out of 5 stars</span>
							                            </div>
							                            <div class="total-ratings">
							                                (<a href="${pageContext.request.contextPath}/drinkdetail/reviews?drinkId=${item.drinkId}">
							                                    <span class="offscreen">Total review count:</span>
							                                    <span itemprop="ratingCount">${item.reviewCount}</span>
							                                </a>)
							                            </div>
							                        </div>
							                    </div>
							                    <div class="add-taste-container">
							                        <a href="/tastes/new?spirit=${item.drinkId}">
							                            <span class="add-taste-link"> Add your review
							                                <span class="offscreen"> for ${item.drinkName} </span>
							                            </span>
							                        </a>
							                    </div>
							                </div>
							            </li>
							        </c:forEach>
							        <!-- 종료 forEach 루프 -->
							    </div>
							</div>
                        </ul>
                    </div>
                </div>
            </div>					
									

			
			<!-- <div class="ad-warning">
			</div> -->
	<!-- 		<a class="pro-ad" href="/join-pro">
				<div class="pro-ad__content">
					<div class="pro-ad__text-content">
						<h3 class="pro-ad--headline" role="none">
							Remove ads, get access to premium features, and more with
							<div class="pro-ad__false-button button accented tiny">
								Distiller Pro <i class="icomoon-crown"></i>
							</div>
						</h3>
					</div>
				</div>
			</a> -->


			<div class="content-block new-bottles home-page-list js-carousel"
				data-carousel-title="Recently Added" data-max-items="3"
				data-pagination="true">
				<div class="center-column">
					<h2 class="secondary-headline carousel-title">Recently Added</h2>
					<div class="new-bottles-container list-container carousel">
						<ul data-behavior="carousel-slides" class="owl-carousel owl-theme"
							role="none" style="opacity: 1; display: block;">
							<div class="owl-wrapper-outer">
								<div class="owl-wrapper" role="list"
									style="width: 2424px; left: 0px; display: block;">
									<div class="owl-item active" aria-hidden="false"
										role="listitem" style="width: 404px;">
										<li class="homepage-list-item bottle agave-content"
											role="none"><a aria-hidden="true"
											href="/distiller/drinkdetail?drinkId=W01"
											tabindex="-1">
											<!-- href="/spirits/mayenda-reposado-double-cask" --> 
											
												<div aria-label="Mayenda Reposado Double Cask Bottle"
													class="thumbnail" role="img"
													style="background-image: url(https://ip-distiller.imgix.net/images/spirits/473e4e00-f8f3-013c-25c8-2e72b001f775/mayenda-reposado-double-cask_original-1716234115.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
										</a>
											<div class="details">
												<a href="/spirits/mayenda-reposado-double-cask">
													<h3 class="mini-headline name" data-behavior="truncatable">Mayenda
														Reposado Double Cask</h3>
												</a>
												<div class="notes-container">
													<p data-behavior="truncatable">Mayenda is an additive
														free 100% blue Weber agave tequila brand that is part of
														the Campari Group portfolio. Maestro Tequilero Jesus
														Susunaga and his team at Casa San Nicolás in Jalisco use 2
														production techniques that are unique to this brand. The
														base distillate...</p>
												</div>
												<div class="user-rating-container">
													<div class="rating-display average-user-rating"
														itemprop="aggregateRating" itemscope=""
														itemtype="http://schema.org/AggregateRating">
														<div class="rating-display__value no-rating">
															<span> No one has reviewed this yet. <a
																class="add-taste-link"
																href="/tastes/new?spirit=mayenda-reposado-double-cask"><span>
																		Be the first </span> </a></span>
														</div>
													</div>

												</div>
											</div></li>
									</div>
									<div class="owl-item active" aria-hidden="false"
										role="listitem" style="width: 404px;">
										<li class="homepage-list-item bottle whiskey-content"
											role="none"><a aria-hidden="true"
											href="/spirits/oak-eden-bourbon-amburana-reserve-series"
											tabindex="-1">
												<div
													aria-label="Oak &amp; Eden Bourbon &amp; Amburana - Reserve Series Bottle"
													class="thumbnail" role="img"
													style="background-image: url(https://ip-distiller.imgix.net/images/spirits/99b87170-f624-013c-7f30-16443468af04/oak-eden-reserve-series-bourbon-amburana_original-1715913584.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
										</a>
											<div class="details">
												<a href="/spirits/oak-eden-bourbon-amburana-reserve-series">
													<h3 class="mini-headline name" data-behavior="truncatable">Oak
														&amp; Eden Bourbon &amp; Amburana - Reserve Series</h3>
												</a>
												<div class="notes-container">
													<p data-behavior="truncatable">Oak &amp; Eden is a
														whiskey brand based in Texas which specializes in
														"in-bottle finishing" — a method of finishing a whiskey by
														inserting a spire, a 5-inch spiral-cut piece of wood, into
														a fully-matured bottle of whiskey. Bourbon &amp; Amburana
														is part of...</p>
												</div>
												<div class="user-rating-container">
													<div class="rating-display average-user-rating"
														itemprop="aggregateRating" itemscope=""
														itemtype="http://schema.org/AggregateRating">
														<div class="rating-display__value no-rating">
															<span> No one has reviewed this yet. <a
																class="add-taste-link"
																href="/tastes/new?spirit=oak-eden-bourbon-amburana-reserve-series"><span>
																		Be the first </span> </a></span>
														</div>
													</div>

												</div>
											</div></li>
									</div>
									<div class="owl-item active" aria-hidden="false"
										role="listitem" style="width: 404px;">
										<li class="homepage-list-item bottle whiskey-content" role="none">
											<a aria-hidden="true"
												href="/spirits/old-fitzgerald-bottled-in-bond-10-year-spring-2024"
												tabindex="-1">
												<div aria-label="Old Fitzgerald Bottled in Bond 10 Year (Spring 2024) Bottle"
													class="thumbnail" role="img"
													style="background-image: url(https://ip-distiller.imgix.net/images/spirits/ff789230-f565-013c-9c11-46a2827f8ac9/old-fitz-bib-10-year-spring-2024_original-1715886723.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
											</a>
											<div class="details">
												<a href="/spirits/old-fitzgerald-bottled-in-bond-10-year-spring-2024">
													<h3 class="mini-headline name" data-behavior="truncatable">Old Fitzgerald Bottled in Bond 10 Year (Spring 2024)</h3>
												</a>
												<div class="notes-container">
													<p data-behavior="truncatable">Old Fitzgerald Bottled
														in Bond 10 Year is the thirteenth nationwide release in
														the bottled in bond decanter series. Produced by Heaven
														Hill, Old Fitzgerald is a wheated bourbon brand. This
														bottled in bond version was distilled in one distillation
														season (spring...</p>
												</div>
												<div class="user-rating-container">
													<div class="rating-display average-user-rating"
														itemprop="aggregateRating" itemscope=""
														itemtype="http://schema.org/AggregateRating">
														<div class="rating-display__value no-rating">
															<span> No one has reviewed this yet. <a
																class="add-taste-link"
																href="/tastes/new?spirit=old-fitzgerald-bottled-in-bond-10-year-spring-2024"><span>
																		Be the first </span> </a></span>
														</div>
													</div>
												</div>
											</div>
										</li>
									</div>
								</div>
							</div>


							<!-- <div class="owl-controls clickable" style="display: none;" >
								<div class="owl-pagination">
									<div class="owl-page active"
										data-behavior="carousel-slide-controls">
										<span class="" aria-current="true" role="button" tabindex="0"
											data-page-index="0" aria-label="Page 1 of 1"></span>
									</div>
								</div>
							</div> -->
						</ul>
					</div>
				</div>
			</div>

			<div class="content-block download-app">
				<div class="center-column">
					<h3 aria-level="2" class="secondary-headline" role="heading">Download
						the App</h3>
					<div class="content">
						<a class="logo download-logo"
							href="https://itunes.apple.com/us/app/distiller-your-whiskey-companion/id784925833?mt=8&amp;uo=4"
							target="_blank" title="Link opens in a new window">
							<!-- <div aria-label="Download on the App Store."
								class="img logo-img apple-store" id="apple-store-home"
								role="img"></div> --><img src="<%=contextPath%>/assets/download_app/google-play-badge.png"/>
						</a> <a class="logo download-logo"
							href="https://play.google.com/store/apps/details?id=com.distiller.distiller"
							target="_blank" title="Link opens in a new window">
							<!-- <div aria-label="Distiller Android App on Google Play."
								class="img logo-img google-store" id="google-store-home"
								role="img"></div> --><img src="<%=contextPath%>/assets/download_app/apple-appstore-badge.png" />
						</a>
					</div>
				</div>
			</div>

		</div>

		
	</div>
</main>




<%@ include file="footer.jsp"%>
