<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="Head.jsp"%>


<main aria-hidden="false" class="main-container" id="main-content"
	tabindex="-1">
	<div class="scroller">
		<div class="search-page-container">
			<h1 class="offscreen">Search For Spirits</h1>
			
			<div class="search-form">
				<div class="center-column">
					<div class="form-container search">
						<form class="form" action="${pageContext.request.contextPath}/searchLiquorView">
							<input aria-label="Search" autocomplete="off"
								class="search-form__term" data-run-search-helper="true"
								id="term" name="keyword" placeholder="search..." type="text">
							<button class="clear-search-box js-clear-query-form">
								<i class="fa fa-times" aria-hidden="true"></i>
							</button>
							<input class="hidden" type="submit">
							<button aria-label="Submit Search"
								class="js-submit-query-form search__submit">
								<i class="fa fa-search" aria-hidden="true"></i>
							</button>
						</form>
					</div>
				</div>
			</div>

		

			
<!-- 				<div class="results-container">
					<div class="spirit-filtered-results">
						<ol class="spirits">
							<li class="spirit gin-content"><a
								href="/spirits/monkey-47-schwarzwald-dry-gin">
									<div class="desktop">
										<div class="secondary-headline ratings">
											<div class="plain-content">
												<div class="distiller-score">99</div>
											</div>
											<div class="community-rating">
												4.59 <i aria-hidden="true" class="icomoon-review-star star"></i>
											</div>
										</div>
									</div>
									<div class="image"
										style="background-image: url(https://ip-distiller.imgix.net/images/spirits/22c95ea0-6baf-0134-c69b-5ab98231182e/monkey_47_schwarzwald_dry_gin_original.jpg?w=120&amp;h=120&amp;mark-w=35&amp;mark-h=35&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
									<div class="details">
										<h5 aria-level="2" class="name-content" role="heading">
											<div class="name">Monkey 47 Dry Gin</div>
										</h5>
										<p class="origin">
											<span class="accented-text"> Modern Gin, </span> <span
												class="location"> Germany </span>
										</p>
										<div class="mobile">
											<div class="secondary-headline ratings">
												<div class="plain-content">
													<div class="distiller-score">99</div>
												</div>
												<div class="community-rating">
													4.59 <i aria-hidden="true" class="icomoon-review-star star"></i>
												</div>
											</div>
										</div>
									</div>
							</a></li>

							

						</ol>
					</div>
				</div>

				<div class="pagination-control-container">
					<div class="pagination-control">
						<span class="pagination-control__description"> Results 1-10
							of 49576 Spirits </span>
						<nav class="pagination" role="navigation" aria-label="pager">


							<span class="page current"> 1 </span> <span class="page">
								<a rel="next" href="/search?page=2">2</a>
							</span> <span class="page"> <a href="/search?page=3">3</a>
							</span> <span class="page gap">…</span> <span class="next"> <a
								rel="next" href="/search?page=2">Next ›</a>
							</span> <span class="last"> <a href="/search?page=4958">Last
									»</a>
							</span>

						</nav>

					</div>

				</div> -->
			<div class="center-column">
				<div class="results-container">
				    <div class="spirit-filtered-results">
				        <ol class="spirits">
				            <c:forEach var="drink" items="${drinkList}">
				                <li class="spirit ${drink.drinkName}-content">
				                    <a href="${pageContext.request.contextPath}/drinkdetail?drinkId=${drink.drinkId}">
				                        <div class="desktop">
				                            <div class="secondary-headline ratings">
				                                <div class="plain-content">
				                                    <div class="distiller-score">99</div> 
				                                </div>
				                                <div class="community-rating">
				                                    ${drink.avgRating} <i aria-hidden="true" class="icomoon-review-star star"></i>
				                                </div>
				                            </div>
				                        </div>
				                        <div>
				                        	<img role="image" class="image" src="${pageContext.request.contextPath}/assets/images/${drink.photo}"/>
				                        </div>
				                        <div class="details">
				                            <h5 aria-level="2" class="name-content" role="heading">
				                                <div class="name">${drink.drinkName}</div>
				                            </h5>
				                            <p class="origin">
				                                <span class="accented-text"> ${drink.type}, </span> <span class="location"> ${drink.nation} </span>
				                            </p>
				                            <div class="mobile">
				                                <div class="secondary-headline ratings">
				                                    <div class="plain-content">
				                                        <%-- <div class="distiller-score">${drink.avgRating}</div> --%>
				                                    </div>
				                                    <div class="community-rating">
				                                        ${drink.avgRating} <i aria-hidden="true" class="icomoon-review-star star"></i>
				                                    </div>
				                                </div>
				                            </div>
				                        </div>
				                    </a>
				                </li>
				            </c:forEach>
				        </ol>
				    </div>
				</div>
				
			<div class="pagination-control-container">
			    <div class="pagination-control">
			        <span class="pagination-control__description">
			            Results ${startResult}-${endResult} of ${totalCount} Spirits
			        </span>
			        <nav class="pagination" role="navigation" aria-label="pager">
			            <c:if test="${currentPage > 1}">
			                <a class="page prev" href="/searchLiquorView?page=${currentPage - 1}&type=${type}&keyword=${keyword}">Previous</a>
			            </c:if>
			            <c:forEach begin="1" end="${totalPages}" var="page">
			                <c:choose>
			                    <c:when test="${page == currentPage}">
			                        <span class="page current"> ${page} </span>
			                    </c:when>
			                    <c:otherwise>
			                        <a class="page" href="/searchLiquorView?page=${page}&type=${type}&keyword=${keyword}">${page}</a>
			                    </c:otherwise>
			                </c:choose>
			            </c:forEach>
			            <c:if test="${currentPage < totalPages}">
			                <a class="page next" href="/searchLiquorView?page=${currentPage + 1}&type=${type}&keyword=${keyword}">Next</a>
			            </c:if>
			        </nav>
			    </div>
			</div>
			

			</div>

		</div>

		
	</div>
</main>

<%@ include file="footer.jsp"%>