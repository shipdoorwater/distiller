<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="Head.jsp"%>
<div class="canvas-wrapper">
	<div class="content-container">


		<div aria-live="assertive" class="flash-message-alert" role="alert"></div>
		<main class="main-container" id="main-content" role="main"
			tabindex="-1">
			<div class="scroller">
				<div class="generic-page register access-page">
					<div class="center-column">
						<h1 class="lightweight">Sign up</h1>
						<div class="content desktop">
							<div class="left-column">
								<div class="register-form">
									<div aria-atomic="true" aria-live="assertive"
										aria-relevant="additions" class="error"></div>
									<!-- <div class="field">
										 <div class="connect">
											<h2 class="mini-headline social-account">Sign up with</h2>
											<div class="social-icons" role="list">
												<span role="listitem">
													<div class="social-login-btn">
														<a rel="nofollow" class="apple-auth button small"
															aria-label="Apple" data-analytics-event="SignUp"
															data-analytics-properties="{&quot;source&quot;:&quot;Apple&quot;}"
															href="/users/auth/apple"><i aria-hidden="true"
															class="fa fa-apple"></i> <span class="offscreen">
																Sign Up with Apple </span> </a>
													</div>

												</span> <span role="listitem">
													<div class="social-login-btn">
														<a rel="nofollow" class="google-auth" aria-label="Google"
															data-analytics-event="SignUp"
															data-analytics-properties="{&quot;source&quot;:&quot;Google&quot;}"
															href="/users/auth/google_oauth2"><img
															alt="Sign In with Google" aria-hidden="true"
															class="google-button"
															src="/assets/btn_google_normal-db4a793882c704ccf92535a3342a620f587447f29b00178ce6598155ca916ddc.png">
															<span class="offscreen"> Sign Up with Google </span> </a>
													</div>

												</span>
											</div>
										</div> 
									</div>
									<div class="ultra-mini-headline splitter">
										<span> OR </span>
									</div> -->
									<h2 class="mini-headline email-account">SIGN UP WITH YOUR
										EMAIL ADDRESS</h2>
									<div aria-atomic="true" aria-live="assertive"
										aria-relevant="additions" class="error"></div>
									
									<div>Fields marked with * are required</div>
									<br/>
									<form class="new_sign_up" id="new_sign_up"
										data-behavior="internalForm"
										data-analytics-event="Submit Registration"
										data-analytics-opts="{&quot;criticalEvent&quot;: true}"
										action="/users" accept-charset="UTF-8" method="post">
										<input name="utf8" type="hidden" value="✓"><input
											type="hidden" name="authenticity_token"
											value="bwN4ZaACS/CrDZrm/tW6jm+FgzJXb3wZgt6+jiuS5OgOedYhbWtNCESE1Mrpk0QTaonSuXb7ofZnQhnffn+P+w==">
										<div class="field">
											<input autofocus="autofocus" placeholder="EMAIL *"
												aria-required="true" autocomplete="email"
												aria-label="EMAIL *" type="email" value=""
												name="sign_up[email]" id="sign_up_email">
										</div>
										<div class="field">
											<input placeholder="USERNAME *" aria-required="true"
												autocomplete="username" aria-label="USERNAME *" type="text"
												name="sign_up[username]" id="sign_up_username">
										</div>
										<div class="field password-field">
											<input placeholder="PASSWORD *" aria-required="true"
												autocomplete="new-password" aria-label="PASSWORD *"
												type="password" name="sign_up[password]"
												id="sign_up_password"> <span
												aria-label="Show Password" role="button" tabindex="0">
												<i class="icon fa fa-eye toggle-password-visibility"
												toggle="#sign_up_password" aria-hidden="true"></i>
											</span>
										</div>
										<div class="field pretty-checkbox-field">
											<div class="pretty p-default">
												<input name="sign_up[subscribe_to_mailing_list]"
													type="hidden" value="0"><input
													aria-labelledby="subscribe-news-label" type="checkbox"
													value="1" checked="checked"
													name="sign_up[subscribe_to_mailing_list]"
													id="sign_up_subscribe_to_mailing_list">
												<div class="state">
													<label></label>
													<div class="description" id="subscribe-news-label">
														Send me exclusive, weekly news from Distiller. I can opt
														out anytime.</div>
												</div>
											</div>
										</div>
										<div class="field terms">
											<p>
												By registering I agree to Distiller's <a target="_blank"
													href="/terms-of-service">Terms of Service</a> and <a
													target="_blank" href="/privacy-policy">Privacy Policy</a>
											</p>
										</div>

										<div class="submit">
											<input type="hidden" name="registration_recaptcha_token"
												id="registration_recaptcha_token"
												value="03AFcWeA4MI9VW4UcqvmdwtTqSMr8JSFtsNOWMv96Ib49acOqtcjypfQJF93SgS0mVWdWo7snjrA0uKIAXGgl7LynW1kBPpctzcN6RFZAWuP8Pws7wG12cPa4YjEztZw4DOtJ73-SlgS1MJIBU4TsExX6yjlMQukttI1ZshJ2_RSzav_T_8JItZUG8L3ZBDdzgNAPWtAgBMqtbXatYc5YIh5q6lElVhe9Z5jjvcSvvIbSGj8ila8_set4UoosfFU4-pn9RZeEFaTM-f-oxwwebUb_2JifHUG4gH40CJFymyEGIeGd9U79GIAwqBY1e0zJvrx-F9dzhcYqdlDagWWhH4ax8t4oOC3vsM7x-SA5WPTLaMLw0lBMWShJq3vO9fu3Spd-Bfu98d22GjLfZmZijED1N61VjFsVKYErL27O98d4_knQpB1-ZpDuP72AgE0QKrkBW216gHxCGauN0YeGULka_o4Jb0kfNfSJJRnN4jb4zF6JpLzvbSrGmru57W-a0Tsjx3XI_1P5FNWheKZxV4INYkxRCDKo8hsgn0qFysWxVEco25CWCLru3XMfd1R-oOVgbJsF3hifJ8c1O-g_e1u-m3JwNZ4xtEU4T1g6x_YElDcX1Fvaz8QubV9PxxnNujL_xMDan2v3eqodksRoKpIKUIGMGsmppofHhUuOBZyFccnKpd9vO290"
												class="js-registration-recaptcha-token-field">
											<script
												src="https://www.google.com/recaptcha/api.js?render=6LcnJJMUAAAAAG0QN9grwzsGfQMg5Mht09pzkK_g"></script>
											<script>
												grecaptcha
														.ready(function() {

															var field = $(".js-registration-recaptcha-token-field")
															var submitButton = field
																	.closest(
																			'form')
																	.find(
																			'input[type=submit]')

															submitButton.attr(
																	'disabled',
																	'disabled');
															grecaptcha
																	.execute(
																			"6LcnJJMUAAAAAG0QN9grwzsGfQMg5Mht09pzkK_g",
																			{
																				action : 'registration'
																			})
																	.then(
																			function(
																					token) {
																				field
																						.val(token);
																				submitButton
																						.attr(
																								'disabled',
																								false);
																			});
														});
											</script>

											<input type="submit" name="commit" value="Sign up"
												class="button small js-submit" data-analytics-event="SignUp"
												data-analytics-properties="{&quot;source&quot;:&quot;Email&quot;}"
												data-disable-with="Sign up">
										</div>
									</form>
									<p class="sign-in">
										Already registered? <a class="accented" href="/users/sign_in">Sign
											in</a> <i aria-hidden="true" class="fa fa-arrow-right accented"></i>
									</p>
								</div>

							</div>
							<div class="right-column">
								<div class="register-info">
									<h2 class="secondary-headline">Why register?</h2>
									<div class="info-list" role="list">
										<div class="info" role="listitem">
											<i aria-hidden="true" class="fa fa-check"></i>
											<div class="description">
												Membership is <span class="membership-free"> free </span> !
											</div>
										</div>
										<div class="info" role="listitem">
											<i aria-hidden="true" class="fa fa-check"></i>
											<div class="description">Create unlimited spirit lists
											</div>
										</div>
										<div class="info" role="listitem">
											<i aria-hidden="true" class="fa fa-check"></i>
											<div class="description">Rate bottles and track your
												reviews</div>
										</div>
										<div class="info" role="listitem">
											<i aria-hidden="true" class="fa fa-check"></i>
											<div class="description">Connect with other spirit
												enthusiasts</div>
										</div>
									</div>
								</div>

							</div>
						</div>
						<div class="content mobile">
							<div class="register-form">
								<div aria-atomic="true" aria-live="assertive"
									aria-relevant="additions" class="error"></div>
								<div class="field">
									<div class="connect">
										<h2 class="mini-headline social-account">Sign up with</h2>
										<div class="social-icons" role="list">
											<span role="listitem">
												<div class="social-login-btn">
													<a rel="nofollow" class="apple-auth button small"
														aria-label="Apple" data-analytics-event="SignUp"
														data-analytics-properties="{&quot;source&quot;:&quot;Apple&quot;}"
														href="/users/auth/apple"><i aria-hidden="true"
														class="fa fa-apple"></i> <span class="offscreen">
															Sign Up with Apple </span> </a>
												</div>

											</span> <span role="listitem">
												<div class="social-login-btn">
													<a rel="nofollow" class="google-auth" aria-label="Google"
														data-analytics-event="SignUp"
														data-analytics-properties="{&quot;source&quot;:&quot;Google&quot;}"
														href="/users/auth/google_oauth2"><img
														alt="Sign In with Google" aria-hidden="true"
														class="google-button"
														src="/assets/btn_google_normal-db4a793882c704ccf92535a3342a620f587447f29b00178ce6598155ca916ddc.png">
														<span class="offscreen"> Sign Up with Google </span> </a>
												</div>

											</span>
										</div>
									</div>
								</div>
								<div class="ultra-mini-headline splitter">
									<span> OR </span>
								</div>
								<h2 class="mini-headline email-account">SIGN UP WITH YOUR
									EMAIL ADDRESS</h2>
								<div aria-atomic="true" aria-live="assertive"
									aria-relevant="additions" class="error"></div>
								<div>Fields marked with * are required</div>
								<form class="new_sign_up" id="new_sign_up"
									data-behavior="internalForm"
									data-analytics-event="Submit Registration"
									data-analytics-opts="{&quot;criticalEvent&quot;: true}"
									action="/users" accept-charset="UTF-8" method="post">
									<input name="utf8" type="hidden" value="✓"><input
										type="hidden" name="authenticity_token"
										value="bwN4ZaACS/CrDZrm/tW6jm+FgzJXb3wZgt6+jiuS5OgOedYhbWtNCESE1Mrpk0QTaonSuXb7ofZnQhnffn+P+w==">
									<div class="field">
										<input autofocus="autofocus" placeholder="EMAIL *"
											aria-required="true" autocomplete="email"
											aria-label="EMAIL *" type="email" value=""
											name="sign_up[email]" id="sign_up_email">
									</div>
									<div class="field">
										<input placeholder="USERNAME *" aria-required="true"
											autocomplete="username" aria-label="USERNAME *" type="text"
											name="sign_up[username]" id="sign_up_username">
									</div>
									<div class="field password-field">
										<input placeholder="PASSWORD *" aria-required="true"
											autocomplete="new-password" aria-label="PASSWORD *"
											type="password" name="sign_up[password]"
											id="sign_up_password"> <span
											aria-label="Show Password" role="button" tabindex="0">
											<i class="icon fa fa-eye toggle-password-visibility"
											toggle="#sign_up_password" aria-hidden="true"></i>
										</span>
									</div>
									<div class="field pretty-checkbox-field">
										<div class="pretty p-default">
											<input name="sign_up[subscribe_to_mailing_list]"
												type="hidden" value="0"><input
												aria-labelledby="subscribe-news-label" type="checkbox"
												value="1" checked="checked"
												name="sign_up[subscribe_to_mailing_list]"
												id="sign_up_subscribe_to_mailing_list">
											<div class="state">
												<label></label>
												<div class="description" id="subscribe-news-label">
													Send me exclusive, weekly news from Distiller. I can opt
													out anytime.</div>
											</div>
										</div>
									</div>
									<div class="field terms">
										<p>
											By registering I agree to Distiller's <a target="_blank"
												href="/terms-of-service">Terms of Service</a> and <a
												target="_blank" href="/privacy-policy">Privacy Policy</a>
										</p>
									</div>

									<div class="submit">
										<input type="hidden" name="registration_recaptcha_token"
											id="registration_recaptcha_token"
											value="03AFcWeA4MI9VW4UcqvmdwtTqSMr8JSFtsNOWMv96Ib49acOqtcjypfQJF93SgS0mVWdWo7snjrA0uKIAXGgl7LynW1kBPpctzcN6RFZAWuP8Pws7wG12cPa4YjEztZw4DOtJ73-SlgS1MJIBU4TsExX6yjlMQukttI1ZshJ2_RSzav_T_8JItZUG8L3ZBDdzgNAPWtAgBMqtbXatYc5YIh5q6lElVhe9Z5jjvcSvvIbSGj8ila8_set4UoosfFU4-pn9RZeEFaTM-f-oxwwebUb_2JifHUG4gH40CJFymyEGIeGd9U79GIAwqBY1e0zJvrx-F9dzhcYqdlDagWWhH4ax8t4oOC3vsM7x-SA5WPTLaMLw0lBMWShJq3vO9fu3Spd-Bfu98d22GjLfZmZijED1N61VjFsVKYErL27O98d4_knQpB1-ZpDuP72AgE0QKrkBW216gHxCGauN0YeGULka_o4Jb0kfNfSJJRnN4jb4zF6JpLzvbSrGmru57W-a0Tsjx3XI_1P5FNWheKZxV4INYkxRCDKo8hsgn0qFysWxVEco25CWCLru3XMfd1R-oOVgbJsF3hifJ8c1O-g_e1u-m3JwNZ4xtEU4T1g6x_YElDcX1Fvaz8QubV9PxxnNujL_xMDan2v3eqodksRoKpIKUIGMGsmppofHhUuOBZyFccnKpd9vO290"
											class="js-registration-recaptcha-token-field">
										<script
											src="https://www.google.com/recaptcha/api.js?render=6LcnJJMUAAAAAG0QN9grwzsGfQMg5Mht09pzkK_g"></script>
										<script>
											grecaptcha
													.ready(function() {

														var field = $(".js-registration-recaptcha-token-field")
														var submitButton = field
																.closest('form')
																.find(
																		'input[type=submit]')

														submitButton.attr(
																'disabled',
																'disabled');
														grecaptcha
																.execute(
																		"6LcnJJMUAAAAAG0QN9grwzsGfQMg5Mht09pzkK_g",
																		{
																			action : 'registration'
																		})
																.then(
																		function(
																				token) {
																			field
																					.val(token);
																			submitButton
																					.attr(
																							'disabled',
																							false);
																		});
													});
										</script>

										<input type="submit" name="commit" value="Sign up"
											class="button small js-submit" data-analytics-event="SignUp"
											data-analytics-properties="{&quot;source&quot;:&quot;Email&quot;}"
											data-disable-with="Sign up">
									</div>
								</form>
								<p class="sign-in">
									Already registered? <a class="accented" href="/users/sign_in">Sign
										in</a> <i aria-hidden="true" class="fa fa-arrow-right accented"></i>
								</p>
							</div>

							<hr>
							<div class="register-info">
								<h2 class="secondary-headline">Why register?</h2>
								<div class="info-list" role="list">
									<div class="info" role="listitem">
										<i aria-hidden="true" class="fa fa-check"></i>
										<div class="description">
											Membership is <span class="membership-free"> free </span> !
										</div>
									</div>
									<div class="info" role="listitem">
										<i aria-hidden="true" class="fa fa-check"></i>
										<div class="description">Create unlimited spirit lists</div>
									</div>
									<div class="info" role="listitem">
										<i aria-hidden="true" class="fa fa-check"></i>
										<div class="description">Rate bottles and track your
											reviews</div>
									</div>
									<div class="info" role="listitem">
										<i aria-hidden="true" class="fa fa-check"></i>
										<div class="description">Connect with other spirit
											enthusiasts</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
		</main>


	</div>
</div>

<%@ include file="footer.jsp"%>