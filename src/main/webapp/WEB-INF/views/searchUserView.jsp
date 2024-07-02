<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="Head.jsp"%>

<main aria-hidden="false" class="main-container" id="main-content"
	tabindex="-1">
	<div class="scroller">
		<div class="search-page-container user-search">
			<h1 class="offscreen">Search For Users</h1>
			<div class="search-form">
				<div class="center-column">
					<div class="form-container search">
						<form class="form">
							<input aria-label="Search" autocomplete="off"
								class="search-form__term" data-run-search-helper="true"
								id="term" name="term" placeholder="search..." type="text">
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

			<div class="center-column">
				<div class="results">
					<div class="follow-suggestions">
						<h2 class="secondary-headline">
							You might want <br> to follow...
						</h2>
						<ul class="user-list">
							<li class="user-list-item power-user"><a
								href="/profile/cascode">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/059/675/avatar/original-1698579796.jpg?w=150&amp;h=150)"></div>
									</div>
									<div class="name-container">
										<div class="name">cascode</div>
										<ul class="stats">
											<li class="notes"><span class="count">1162</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">1911</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">For bourbon and single
											malt whisky a rating of 2.5 means “average”. Anything rated 3
											or more is worth a taste, anything rated 4 or more is
											recommended. For blended scotch the average is 1.5, and
											anything rated 3 or more is recommended.</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow cascode" data-remote="true" rel="nofollow"
										data-method="put"
										href="/api/v2/followees/cascode?user_slug=munsu-bae">Follow
									</a><a aria-label="following cascode" class="button mini following"
										href="/profile/cascode">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/soonershrink">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/105/610/avatar/original.?w=150&amp;h=150)"></div>
										<div class="pro-badge">
											<div class="crown white"></div>
										</div>
									</div>
									<div class="name-container">
										<div class="name">soonershrink</div>
										<ul class="stats">
											<li class="notes"><span class="count">395</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">342</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">Amateur palate, peat
											preferer, proof snob.</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow soonershrink" data-remote="true"
										rel="nofollow" data-method="put"
										href="/api/v2/followees/soonershrink?user_slug=munsu-bae">Follow
									</a><a aria-label="following soonershrink"
										class="button mini following" href="/profile/soonershrink">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/stephanie_moreno">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/000/045/avatar/original.jpg?w=150&amp;h=150)"></div>
										<div class="pro-badge">
											<div class="crown white"></div>
										</div>
									</div>
									<div class="name-container">
										<div class="name">Stephanie_Moreno</div>
										<ul class="stats">
											<li class="notes"><span class="count">190</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">1886</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">Editor for Distiller. My
											go-to dive bar whiskey: Bushmills Black Bush. Have a weakness
											for self-depreciating humor, queso, and shih tzus.</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow Stephanie_Moreno" data-remote="true"
										rel="nofollow" data-method="put"
										href="/api/v2/followees/stephanie_moreno?user_slug=munsu-bae">Follow
									</a><a aria-label="following Stephanie_Moreno"
										class="button mini following" href="/profile/stephanie_moreno">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/pbmichiganwolverine">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/020/518/avatar/original-1683586629.?w=150&amp;h=150)"></div>
									</div>
									<div class="name-container">
										<div class="name">PBMichiganWolverine</div>
										<ul class="stats">
											<li class="notes"><span class="count">926</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">2345</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">When I pass of this good
											earth, I’ll be taking my Brora with me. Not so I can share
											with god, but so I can bribe the devil.</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow PBMichiganWolverine" data-remote="true"
										rel="nofollow" data-method="put"
										href="/api/v2/followees/pbmichiganwolverine?user_slug=munsu-bae">Follow
									</a><a aria-label="following PBMichiganWolverine"
										class="button mini following"
										href="/profile/pbmichiganwolverine">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/richard-moderndrinking">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/000/917/avatar/original-1658348491.?w=150&amp;h=150)"></div>
									</div>
									<div class="name-container">
										<div class="name">Richard-ModernDrinking</div>
										<ul class="stats">
											<li class="notes"><span class="count">642</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">1573</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">All the booze that’s fit
											to drink</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow Richard-ModernDrinking" data-remote="true"
										rel="nofollow" data-method="put"
										href="/api/v2/followees/richard-moderndrinking?user_slug=munsu-bae">Follow
									</a><a aria-label="following Richard-ModernDrinking"
										class="button mini following"
										href="/profile/richard-moderndrinking">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/donlchi">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(/images/placeholders/placeholder_1.png)"></div>
									</div>
									<div class="name-container">
										<div class="name">donlchi</div>
										<ul class="stats">
											<li class="notes"><span class="count">1</span> <span
												class="label">review</span></li>
											<li class="followers"><span class="count">0</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented"></div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow donlchi" data-remote="true" rel="nofollow"
										data-method="put"
										href="/api/v2/followees/donlchi?user_slug=munsu-bae">Follow
									</a><a aria-label="following donlchi" class="button mini following"
										href="/profile/donlchi">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/doneeb">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/010/860/avatar/original.png?w=150&amp;h=150)"></div>
									</div>
									<div class="name-container">
										<div class="name">doneeb</div>
										<ul class="stats">
											<li class="notes"><span class="count">500</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">1000</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">I'm not here to wax poetic
											about the nose or the palate, there are much more qualified
											people to do that, I'm here to have fun with whiskey. And you
											should be too.</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow doneeb" data-remote="true" rel="nofollow"
										data-method="put"
										href="/api/v2/followees/doneeb?user_slug=munsu-bae">Follow
									</a><a aria-label="following doneeb" class="button mini following"
										href="/profile/doneeb">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/slainte-mhath">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/057/687/avatar/original.png?w=150&amp;h=150)"></div>
									</div>
									<div class="name-container">
										<div class="name">Slainte-Mhath</div>
										<ul class="stats">
											<li class="notes"><span class="count">243</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">788</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">There is no such thing as
											bad whisky - some are just better than others.</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow Slainte-Mhath" data-remote="true"
										rel="nofollow" data-method="put"
										href="/api/v2/followees/slainte-mhath?user_slug=munsu-bae">Follow
									</a><a aria-label="following Slainte-Mhath"
										class="button mini following" href="/profile/slainte-mhath">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/exelixi">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/051/010/avatar/original-1709069075.?w=150&amp;h=150)"></div>
									</div>
									<div class="name-container">
										<div class="name">Exelixi</div>
										<ul class="stats">
											<li class="notes"><span class="count">685</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">157</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented"></div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow Exelixi" data-remote="true" rel="nofollow"
										data-method="put"
										href="/api/v2/followees/exelixi?user_slug=munsu-bae">Follow
									</a><a aria-label="following Exelixi" class="button mini following"
										href="/profile/exelixi">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/thewhiskeyjug">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/008/267/avatar/original.jpg?w=150&amp;h=150)"></div>
									</div>
									<div class="name-container">
										<div class="name">TheWhiskeyJug</div>
										<ul class="stats">
											<li class="notes"><span class="count">422</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">366</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">Josh, I author
											thewhiskeyjug.com, check me out on instagram at
											@TheWhiskeyJug</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow TheWhiskeyJug" data-remote="true"
										rel="nofollow" data-method="put"
										href="/api/v2/followees/thewhiskeyjug?user_slug=munsu-bae">Follow
									</a><a aria-label="following TheWhiskeyJug"
										class="button mini following" href="/profile/thewhiskeyjug">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/scott_e">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/005/026/avatar/original.?w=150&amp;h=150)"></div>
										<div class="pro-badge">
											<div class="crown white"></div>
										</div>
									</div>
									<div class="name-container">
										<div class="name">Scott_E</div>
										<ul class="stats">
											<li class="notes"><span class="count">506</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">1604</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">Scotch appreciator
											exploring the whisky world to quench my spirit.</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow Scott_E" data-remote="true" rel="nofollow"
										data-method="put"
										href="/api/v2/followees/scott_e?user_slug=munsu-bae">Follow
									</a><a aria-label="following Scott_E" class="button mini following"
										href="/profile/scott_e">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/islay_emissary">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/063/189/avatar/original.?w=150&amp;h=150)"></div>
										<div class="pro-badge">
											<div class="crown white"></div>
										</div>
									</div>
									<div class="name-container">
										<div class="name">islay_emissary</div>
										<ul class="stats">
											<li class="notes"><span class="count">84</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">702</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">IG: islay_emissary</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow islay_emissary" data-remote="true"
										rel="nofollow" data-method="put"
										href="/api/v2/followees/islay_emissary?user_slug=munsu-bae">Follow
									</a><a aria-label="following islay_emissary"
										class="button mini following" href="/profile/islay_emissary">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/ctbeck11">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/195/562/avatar/original.?w=150&amp;h=150)"></div>
										<div class="pro-badge">
											<div class="crown white"></div>
										</div>
									</div>
									<div class="name-container">
										<div class="name">ctbeck11</div>
										<ul class="stats">
											<li class="notes"><span class="count">510</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">413</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">1.00 Horrid | 1.50 Poor |
											2.00 Below Average | 2.50 Average | 3.00 Above Average | 3.50
											Good | 4.00 Great | 4.50 Outstanding | 5.00 Sublime</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow ctbeck11" data-remote="true" rel="nofollow"
										data-method="put"
										href="/api/v2/followees/ctbeck11?user_slug=munsu-bae">Follow
									</a><a aria-label="following ctbeck11"
										class="button mini following" href="/profile/ctbeck11">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/washeewashee_reviews">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/029/577/avatar/original.png?w=150&amp;h=150)"></div>
									</div>
									<div class="name-container">
										<div class="name">washeewashee_reviews</div>
										<ul class="stats">
											<li class="notes"><span class="count">533</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">803</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">IG = @washeewashee_reviews</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow washeewashee_reviews" data-remote="true"
										rel="nofollow" data-method="put"
										href="/api/v2/followees/washeewashee_reviews?user_slug=munsu-bae">Follow
									</a><a aria-label="following washeewashee_reviews"
										class="button mini following"
										href="/profile/washeewashee_reviews">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/leeevolved">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/048/066/avatar/original.?w=150&amp;h=150)"></div>
									</div>
									<div class="name-container">
										<div class="name">LeeEvolved</div>
										<ul class="stats">
											<li class="notes"><span class="count">529</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">1536</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented">If it’s not Scottish, IT’S
											CRAP! - Mike Myers Saturday Night Live</div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow LeeEvolved" data-remote="true"
										rel="nofollow" data-method="put"
										href="/api/v2/followees/leeevolved?user_slug=munsu-bae">Follow
									</a><a aria-label="following LeeEvolved"
										class="button mini following" href="/profile/leeevolved">Following</a>
								</div></li>

							<li class="user-list-item power-user"><a
								href="/profile/joeparkerpoe">
									<div class="avatar-container">
										<div class="avatar"
											style="background-image: url(https://ip-distiller.imgix.net/images/users/000/206/153/avatar/original.jpg?w=150&amp;h=150)"></div>
									</div>
									<div class="name-container">
										<div class="name">joeparkerpoe</div>
										<ul class="stats">
											<li class="notes"><span class="count">125</span> <span
												class="label">reviews</span></li>
											<li class="followers"><span class="count">163</span> <span
												class="label">followers</span></li>
										</ul>
									</div>
									<div class="tagline-container">
										<div class="tagline accented"></div>
									</div>
							</a>
								<div class="user-follow-links can-follow">
									<a class="button mini follow js-class-changer"
										data-analytics-event="Follow_User"
										data-target=".user-follow-links" data-target-parent="true"
										data-add-class="following" data-remove-class="can-follow"
										aria-label="follow joeparkerpoe" data-remote="true"
										rel="nofollow" data-method="put"
										href="/api/v2/followees/joeparkerpoe?user_slug=munsu-bae">Follow
									</a><a aria-label="following joeparkerpoe"
										class="button mini following" href="/profile/joeparkerpoe">Following</a>
								</div></li>

						</ul>
					</div>

				</div>
			</div>
		</div>

		<div class="mobile-footer">
			<h2 class="sign_up_label_mobile" id="sign_up_label_mobile">Sign
				up for the Distiller Newsletter</h2>
			<div class="email-signup">
				<form data_behavior="email-signup" action="/email_signups"
					accept-charset="UTF-8" method="post">
					<input name="utf8" type="hidden" value="✓"><input
						type="hidden" name="authenticity_token"
						value="zjuBC8lu/vQWqr+LRajqMJcWbgbolsSCB0iARfh9+fEfkU0jbajjeN87OLaE7QlMk0sFNo46hu7IquBUzC3MNQ==">
					<div data-behavior="message"></div>
					<input placeholder="Your Email" aria-labelledby="sign_up_label"
						required="required" autocomplete="email"
						oninvalid="this.setCustomValidity(&quot;Email is either empty or invalid!&quot;)"
						oninput="this.setCustomValidity(&quot;&quot;)" type="email"
						name="email_signup[email]"> <input type="hidden"
						name="newsletter_recaptcha_token" id="newsletter_recaptcha_token"
						value="03AFcWeA5GgrXSFrSU5HU-QMDt7m2DY0EBN-a9Q5yupaWlOWE17_9KrnEYMTHmDXy-XK5wEhyWM2yyxyLz66QQNa-sadi5h6lg9VDJsHD-ZwqCIH0QokI4QMrM2sl_JKtcyuQoCpvuaOenbyLXuFnhOie1XEJXDh9pCQ5UuVXenVQLxMYBdASUacKeF5oqQ4EzOxytuSDTstLR9NcNl7WyPPyjyzTTREAzzVOjO1iuadPrDuokCywGFFVZDIDcUce7hrJLXy3H0tgCY6vLN5s8tJlk6LUvkLAVbyzpiXqgALs52KX5dRfhmqnXGRGUj0rathlbsXT4YmLU0Ws4WWwUqCvLwAU1450WKapepkTXopcJIf93emx89I8ny1l8CLgJb9UsdRd17IAlQH9Wr1zCeO5KpGjHATgI5Z0gR6uJOXTXRIt-TFP3V8hHwSRoesBpPW6rl_YbNTo0tmHxs00yP4UALd7DkMLYMgQJPJpygQ0pW0T7AxjuaadFz2vrzD5X-R_I34z8IF_B-G8sOp4dNAIlSMGcj7ZDy4_hgGX53DgG8-EU3jZvutcyjebfvTiQ2VtDZ7nE7d3z8aFqRNpReD74uoQnHugu_aOP699LEyNPF0d8-X27_1fLYmCydHNAw6kpfrhbECDk7SKKtHEodda3isTtMu7ZdvtFR8YOWcqpSoz28wkegqE"
						class="js-newsletter-recaptcha-token-field">
					<script
						src="https://www.google.com/recaptcha/api.js?render=6LcnJJMUAAAAAG0QN9grwzsGfQMg5Mht09pzkK_g"></script>
					<script>
						grecaptcha
								.ready(function() {

									var field = $(".js-newsletter-recaptcha-token-field")
									var submitButton = field.closest('form')
											.find('input[type=submit]')

									submitButton.attr('disabled', 'disabled');
									grecaptcha
											.execute(
													"6LcnJJMUAAAAAG0QN9grwzsGfQMg5Mht09pzkK_g",
													{
														action : 'newsletter'
													}).then(
													function(token) {
														field.val(token);
														submitButton.attr(
																'disabled',
																false);
													});
								});
					</script>

					<input type="submit" name="commit" value="sign up"
						data-disable-with="sign up">
					<script src="https://www.recaptcha.net/recaptcha/api.js" async=""
						defer=""></script>
					<div data-sitekey="6Ld1tO4oAAAAAI0-G63XMzqxtSbnFBpwOfIwxztQ"
						class="g-recaptcha ">
						<div style="width: 304px; height: 78px;">
							<div>
								<iframe title="reCAPTCHA" width="304" height="78"
									role="presentation" name="a-8epy31prfkxi" frameborder="0"
									scrolling="no"
									sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
									src="https://www.recaptcha.net/recaptcha/api2/anchor?ar=1&amp;k=6Ld1tO4oAAAAAI0-G63XMzqxtSbnFBpwOfIwxztQ&amp;co=aHR0cHM6Ly9kaXN0aWxsZXIuY29tOjQ0Mw..&amp;hl=ko&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;size=normal&amp;cb=w0hsw5xkdau0"></iframe>
							</div>
							<textarea id="g-recaptcha-response" name="g-recaptcha-response"
								class="g-recaptcha-response"
								style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
						</div>
					</div>
					<noscript>
						<div>
							<div style="width: 302px; height: 422px; position: relative;">
								<div style="width: 302px; height: 422px; position: absolute;">
									<iframe
										src="https://www.recaptcha.net/recaptcha/api/fallback?k=6Ld1tO4oAAAAAI0-G63XMzqxtSbnFBpwOfIwxztQ"
										name="ReCAPTCHA"
										style="width: 302px; height: 422px; border-style: none; border: 0; overflow: hidden;">
									</iframe>
								</div>
							</div>
							<div
								style="width: 300px; height: 60px; border-style: none; bottom: 12px; left: 25px; margin: 0px; padding: 0px; right: 25px; background: #f9f9f9; border: 1px solid #c1c1c1; border-radius: 3px;">
								<textarea id="g-recaptcha-response" name="g-recaptcha-response"
									class="g-recaptcha-response"
									style="width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;">
                </textarea>
							</div>
						</div>
					</noscript>

				</form>
			</div>

			<div class="social-actions">
				<h5 aria-level="2" role="heading">Follow Us</h5>
				<div role="list">
					<div role="listitem">
						<a class="twitter-follow"
							href="https://twitter.com/intent/follow?screen_name=drinkdistiller">
							<span class="offscreen">Twitter</span> <span class="fa fa-stack"
							aria-hidden="true"> <i aria-hidden="true"
								class="fa fa-circle fa-stack-2x"></i> <i aria-hidden="true"
								class="fa fa-twitter fa-light fa-stack-1x"></i>
						</span>
						</a>
					</div>
					<div role="listitem">
						<a class="facebook-like" data-behavior="facebook-share"
							data-share-path="/"
							href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fdrinkdistiller.com">
							<span class="offscreen">Facebook</span> <span class="fa fa-stack"
							aria-hidden="true"> <i aria-hidden="true"
								class="fa fa-circle fa-stack-2x"></i> <i aria-hidden="true"
								class="fa fa-facebook fa-light fa-stack-1x"></i>
						</span>
						</a>
					</div>
					<div role="listitem">
						<a class="instagram-like"
							href="http://instagram.com/drinkdistiller" target="_blank"> <span
							class="offscreen">Instagram</span> <span class="fa fa-stack"
							aria-hidden="true"> <i aria-hidden="true"
								class="fa fa-circle fa-stack-2x"></i> <i aria-hidden="true"
								class="fa fa-instagram fa-light fa-stack-1x"></i>
						</span>
						</a>
					</div>
				</div>
			</div>

			<div class="download-app">
				<h5 aria-level="2" role="heading">Download The App</h5>
				<a class="logo"
					href="https://itunes.apple.com/us/app/distiller-your-whiskey-companion/id784925833?mt=8&amp;uo=4"
					target="_blank" title="Link opens in a new window">
					<div aria-label="Install Distiller from Apple App Store."
						class="img apple-store" id="apple-store-mobile" role="img"></div>
				</a> <a class="logo"
					href="https://play.google.com/store/apps/details?id=com.distiller.distiller"
					target="_blank" title="Link opens in a new window">
					<div aria-label="Install from Google Play."
						class="img google-store" id="google-store-mobile" role="img"></div>
				</a>
			</div>
			<div class="responsibility">
				To learn more about responsible consumption, please visit <a
					href="http://responsibility.org" target="_blank"> Foundation
					For Advancing Alcohol Responsibility. </a>
			</div>

			<ul class="legal">
				<li><a href="/terms-of-service">Terms Of Service.</a> ™/© 2024
					Distiller</li>
				<li><a href="/privacy-policy">Privacy Policy</a></li>
				<li><a href="mailto:hello@distiller.com">Contact Us</a></li>
				<li><a href="mailto:partners@distiller.com">Advertise</a></li>
				<li><a href="/pages/submitting-for-review">Submit For
						Review</a></li>
				<li><a href="/jobs">Jobs</a></li>
				<li><a href="/faq">Frequently Asked Questions</a></li>
			</ul>
			<div class="adthrive-comscore adthrive-footer-message">
				<span>A Raptive Partner Site</span>
			</div>
		</div>

		<div class="fixed-mobile-footer"></div>
	</div>
</main>


<%@ include file="footer.jsp"%>