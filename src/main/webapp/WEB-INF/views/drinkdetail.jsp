<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ include file="Head.jsp" %>



<!DOCTYPE html>

<html
  lang="en"
  class="js flexbox flexboxlegacy canvas canvastext rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent"
  style=""
>
  <head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />

    <style>
      html,
      body {
        background: black;
      }
    </style>
    <meta charset="utf-8" />
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
    <title>${drinkName}</title>
<!--  
    <link
      rel="stylesheet"
      media="all"
      href="../assets/application-28cb40c83874216760225644183dd932c69a94bfdedcd3d89ebe3271942e9180.css"
    />
    -->
  </head>
  <body
    class="screened ocean-mood whiskey-selected has-dialog adthrive-device-desktop"
    >
    <div class="screen background">
      <div class="canvas-wrapper display-privacy-banner">
        <div class="content-container">
          <main
            aria-hidden="false"
            class="main-container"
            id="main-content"
            tabindex="-1"
          >
            <div class="scroller">
              <div
                class="spirit-show center-column js-carousel whiskey-content"
                data-max-items="1"
                data-pagination="true"
              >
                <div class="top-image">
                  <div
                    class="main-image desktop official"
                    style="background-image: url (@술이미지db)"
                  ></div>
                  <div class="vitals">
                    <h1
                      class="secondary-headline name"
                      data-behavior="truncatable"
                    >
                      ${drinkName}
                    </h1>
                    <div class="secondary-details">
                      <p class="ultra-mini-headline type">${sub1}</p>
                      <p
                        class="ultra-mini-headline location middleweight"
                      >
                        ${nation }
                      </p>
                    </div>
                  </div>
                </div>

                <div class="primary-content">
                  <div class="tabs">
                    <ul class="tabs-header">
                      <li class="tab-overview-header ui-tabs-active">
                        <div class="tab-content">
                          <a aria-current="page" href="drinkdetail?id=@db"
                            >Details (@링크_탭)</a
                          >
                        </div>
                      </li>
                      <li class="tab-tastes-header">
                        <div class="tab-content">
                          <a href="drinkdetail/review?id=@db"
                            ><span class="count">{$reviewId.count}</span> Reviews
                            (@링크_탭)</a
                          >
                        </div>
                      </li>
                    </ul>
                    <div class="tabs-body">
                      <div class="overview">
                        <div class="stats-container">
                          <div class="stats">
                            <div class="stat avg-user-rating">
                              <h2 class="label mini-headline">
                                community rating
                              </h2>
                              <div class="value">
                                <div
                                  class="rating-display average-user-rating"
                                >
                                  <div
                                    class="rating-display__value average-rating"
                                  >
                                    <span itemprop="ratingValue"
                                      >{$rating.average}</span
                                    >
                                    <meta content="5" itemprop="bestRating" />
                                    <meta content="0" itemprop="worstRating" />
                                  </div>
                                  
                                  <div id="rating-container" class="rating-stars stars-3">
                                    <span class="rate">
                                      <i
                                        aria-hidden="true"
                                        class="icomoon-review-star"
                                      ></i>
                                    </span>
                                    <span class="rate">
                                      <i
                                        aria-hidden="true"
                                        class="icomoon-review-star"
                                      ></i>
                                    </span>
                                    <span class="rate">
                                      <i
                                        aria-hidden="true"
                                        class="icomoon-review-star"
                                      ></i>
                                    </span>
                                    <span class="rate">
                                      <i
                                        aria-hidden="true"
                                        class="icomoon-review-star"
                                      ></i>
                                    </span>
                                    <span class="rate">
                                      <i
                                        aria-hidden="true"
                                        class="icomoon-review-star"
                                      ></i>
                                    </span>
                                    <span class="offscreen"
                                      >{$rating.average} out of 5 stars</span
                                    >
                                  </div>

                                  <div class="total-ratings">
                                    (
                                    <a href="drinkdetail/review?id=@db"
                                      ><span class="offscreen">
                                        Total review count:
                                      </span>
                                      <span itemprop="ratingCount">
                                        {$reviewId.count}
                                      </span> </a
                                    >)
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="spirit-show__description-container">
                          <div class="only-big">
                            <p class="description" itemprop="description">
                              {$drinkExplain}
                            </p>
                          </div>
                          <div class="other-details-container">
                            <ul class="other-details">
                              <li class="row">
                                <ul>
                                  <li class="detail age">
                                    <div class="label">age</div>
                                    <div class="value">NAS {$drinkMaturity}</div>
                                  </li>
                                  <li class="detail cost">
                                    <div class="label">Cost</div>
                                    <div class="value">{$price}</div>
                                  </li>
                                  <li class="detail abv">
                                    <div class="label">abv</div>
                                    <div class="value">{$adv}</div>
                                  </li>
                                </ul>
                              </li>
                              <li class="detail whiskey-style">
                                <div class="label">{$sub1}</div>
                                <div class="value">
                                  {$tag}
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div
                          class="details-module spirit-show__tasting-notes screened"
                        >
                          <div class="screen"></div>
                          <div
                            class="content"
                            itemprop="review"
                          >
                            <h2 class="mini-headline">Tasting Notes</h2>
                            <blockquote itemprop="reviewBody">
                              "A sweet dalkom jjapzzarum (@db)"
                            </blockquote>
                            <div class="meet-experts">
                              Added by
                              <a href="profile/user?id=@db" itemprop="author">
                                유저 아이디 (@db) (하이퍼링크 넣기)
                              </a>
                            </div>
                            <div class="distiller-score">
                              Score <span>81 (@db)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sidebar" role="list">
                  <div
                    class="user-spirit-content details-module action-buttons js-carousel"
                    data-max-items="1"
                    data-pagination="true"
                    role="listitem"
                  >
                    <div class="action collection-toggle">
                      <button
                        class="toggle-link js-show-modal"
                        data-modal-selector=".js-registration-prompt-modal"
                      >
                        <a href="tastes/new?spirit=drinkfromdb">
                          <i aria-hidden="true" class="icon fa fa-check"></i>
                          <span class="label"> Review this (@링크) </span>
                        </a>
                      </button>
                    </div>
                  </div>
                  <div
                    class="actions spirit-show__actions action-buttons user-spirit-content"
                    role="listitem"
                  >
                    <div class="action collection-toggle">
                      <button
                        class="toggle-link js-show-modal"
                        data-modal-selector=".js-registration-prompt-modal"
                      >
					          <a href="tastes/new?spirit=drinkfromdb"></a>
                        <span class="double-icon">
                          <i aria-hidden="true" class="fa fa-bars"></i>
                          <i aria-hidden="true" class="fa fa-plus"></i>
                        </span>
                        <span class="label"> Add To My Cart (@링크) </span>
					</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </body>
</html>


<script>
  function setRatingStars(rating) {
      const ratingContainer = document.getElementById('rating-container');
      let starsClass = 'rating-stars ';

      if (rating >= 1 && rating < 2) {
          starsClass += 'stars-1';
      } else if (rating >= 2 && rating < 3) {
          starsClass += 'stars-2';
      } else if (rating >= 3 && rating < 4) {
          starsClass += 'stars-3';
      } else if (rating >= 4 && rating < 5) {
          starsClass += 'stars-4';
      } else if (rating === 5) {
          starsClass += 'stars-5';
      } else {
          starsClass += 'stars-0'; // Default case if rating is out of expected range
      }

      ratingContainer.className = starsClass;
  }

  // Example rating value
  const rating = {$rating.average};
  setRatingStars(rating);
</script>


<%@ include file="footer.jsp" %>