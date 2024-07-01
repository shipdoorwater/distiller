<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="Head.jsp"%>
<main class="main-container" id="main-content" role="main" tabindex="-1">
	<div class="scroller">
		<div class="generic-page sign-in access-page">
			<div class="center-column">
				<h1 class="lightweight">Sign In</h1>
				<div class="columns">
					<div class="left">
						<div class="sign-in-form">
							<div class="content">
								<h2 class="mini-headline">Sign in with email</h2>
								<div class="error"></div>
								<form class="new_user" id="new_user"
									data-behavior="internalForm"
									data-analytics-event="Submit Sign In" action="/users/sign_in"
									accept-charset="UTF-8" method="post">
									<input name="utf8" type="hidden" value="✓"><input
										type="hidden" name="authenticity_token"
										value="co2vT/k86mywxO8dE6KdhR+wqQmUQnXimdGzIUrS1kIT9wELNFXslF9NoTEE5GMYGrz4grXWqA18TRRwHz+9UQ==">
									<div class="field">
										<input autofocus="autofocus"
											placeholder="Enter your username or email..."
											aria-label="Enter your Username or Email" type="text"
											value="" name="user[login]" id="user_login">
									</div>
									<div class="field password-field">
										<input placeholder="Enter your password..."
											aria-label="Enter your password" type="password"
											name="user[password]" id="user_password"> <i
											aria-hidden="true"
											class="icon fa fa-eye toggle-password-visibility"
											toggle="#user_password"></i>
									</div>
									<div class="buttons">
										<div class="submit">
											<input type="submit" name="commit" value="Sign in"
												class="button small" data-analytics-event="LogIn"
												data-analytics-properties="{&quot;source&quot;:&quot;Email&quot;}"
												data-disable-with="Sign in">
										</div>
										<p class="forgot-password">
											<a href="/users/password/new">Forgot password?</a>
										</p>
									</div>
								</form>
								<div class="connect">
									<h2 class="mini-headline">Or sign in with</h2>
									<div class="social-login-btn">
										<a rel="nofollow" class="apple-auth button small"
											aria-label="Apple" data-analytics-event="SignUp"
											data-analytics-properties="{&quot;source&quot;:&quot;Apple&quot;}"
											href="/users/auth/apple"><i aria-hidden="true"
											class="fa fa-apple"></i> <span class="offscreen"> </span> </a>
									</div>

									<div class="social-login-btn">
										<a rel="nofollow" class="google-auth" aria-label="Google"
											data-analytics-event="SignUp"
											data-analytics-properties="{&quot;source&quot;:&quot;Google&quot;}"
											href="/users/auth/google_oauth2"><img
											alt="Sign In with Google" aria-hidden="true"
											class="google-button"
											src="/assets/btn_google_normal-db4a793882c704ccf92535a3342a620f587447f29b00178ce6598155ca916ddc.png">
											<span class="offscreen"> </span> </a>
									</div>

								</div>
							</div>
						</div>

					</div>
					<div class="right">
						<div class="sign-in-info">
							<div class="full">
								<h2 class="mini-headline">Not a member yet?</h2>
								<div class="signin-info">
									<h2 class="tertiary-headline">
										Join now - it's <u>free</u> !
									</h2>
									<div class="info-list">
										<div class="info">
											<i aria-hidden="true" class="fa fa-check"></i>
											<div class="description">Create unlimited spirit lists
											</div>
										</div>
										<div class="info">
											<i aria-hidden="true" class="fa fa-check"></i>
											<div class="description">Rate bottles and track your
												reviews</div>
										</div>
										<div class="info">
											<i aria-hidden="true" class="fa fa-check"></i>
											<div class="description">Connect with other spirit
												enthusiasts</div>
										</div>
										<div class="info">
											<i aria-hidden="true" class="fa fa-check"></i>
											<div class="description">Get personalized
												recommendations</div>
										</div>
									</div>
									<div class="register">
										<a class="button small" href="/users/sign_up">Sign up <i
											aria-hidden="true" class="fa fa-arrow-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

	</div>
</main>

<%@ include file="footer.jsp"%>