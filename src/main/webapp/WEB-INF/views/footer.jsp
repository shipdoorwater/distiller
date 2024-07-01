<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="global-footer">
	<div class="center-column">
		<ul class="links primary-text">
			<li><a id="global-footer" href="/about">About Distiller</a></li>
			<li><a href="/tasting_table">The Tasting Table</a></li>
			<li><a
				href="mailto:hello@distiller.com?subject=Distiller.com%20Feedback&amp;body=%0A%0ASent%20from:%20Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36">Contact
					Us</a></li>
			<li><a href="mailto:partners@distiller.com">Advertise</a></li>
			<li><a href="/pages/submitting-for-review">Submit For Review</a></li>
			<li><a href="/jobs">Jobs</a></li>
			<li><a href="https://help.distiller.com/">Help</a></li>
			<li><a href="/privacy-policy">Privacy Policy</a></li>
			<li class="terms legal"><a href="/terms-of-service">Terms Of
					Service.</a> ™/© 2024 Distiller</li>
		</ul>
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

		<div class="newsletter-column">
			<h5 aria-level="2" role="heading">Newsletter</h5>
			<span id="sign_up_label">Sign up for the Distiller Newsletter
				for new bottle &amp; feature updates</span>
			<div class="email-signup">
				<form data_behavior="email-signup" action="/email_signups"
					accept-charset="UTF-8" method="post">
					<input name="utf8" type="hidden" value="✓"><input
						type="hidden" name="authenticity_token"
						value="J7/rW2I5UQTE80r4OvUUa8BzmFOPqmMOIUbVD/CzdXRGxUUfr1BX/Ct6BNQts+r2xX/J2K4+vuHE2nJepV4eZw==">
					<div data-behavior="message"></div>
					<input placeholder="Your Email" aria-labelledby="sign_up_label"
						required="required" autocomplete="email"
						oninvalid="this.setCustomValidity(&quot;Email is either empty or invalid!&quot;)"
						oninput="this.setCustomValidity(&quot;&quot;)" type="email"
						name="email_signup[email]"> <input type="hidden"
						name="newsletter_recaptcha_token" id="newsletter_recaptcha_token"
						value="03AFcWeA7KENJrOvW8zSat5rBVl4NVWVRZfgSC2IOWksKH7slPzPXhnMsR-4bL_Bn71qHfkP4uiZ8OD49Z6x1F8dg5wUglnQNITqDPs6QQMa4uV_BK9RBP7OjD-nTqS-nRUgFnNoE04bsX3VTLtUJItoVU1gvokuj1AhcpAWH1QDfyuJKP35tBfy88wlVEVIHJtjK4XCddT5I5x6BzRPKuzdIrQI_94ZPTi4Gz3bSi3msadHfV1ornycGu3O6eTKHXX0cxBrjDD6-R6e98kciD62T92alAEeZ6Z7HjUEhqIYHuYvXtKlbrnluNP0Jz1Yh3W06o1j8G-bpPCeoleD-n3w3R7HBVJ4tf_Es-4xPMiOuZZ_Qly0RvHHdjZTX57zPMhbcLJaTu5hjidw9p-5HA6LEmDDLPLcn2NDYaWKzpFSetGOr9n9c30Y3Lo6l7kbcfEdNB64JF981TZpjfbP9rntuj1iostkNvsmKv1zHx5Ye44dEuWmYKcDWRjifidfb84igrgqvLKUlntOJHLaN03eAQAFcqavAJst7I8VvlJzA3JjLgUv4dZEOy4qS9rBf6mQpVeONwqY-O2sGhhcou46m_1BYERjCJ3UMn-0WXn30x8s7Fq9wOT2Er82oyd_zWpIaab5DRF_rDFVSN38a9Wg8BD7c8XTmFYVSZtQ6oFvZkfhS0UBR7XFo"
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
									role="presentation" name="a-k3xbydeglt3" frameborder="0"
									scrolling="no"
									sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
									src="https://www.recaptcha.net/recaptcha/api2/anchor?ar=2&amp;k=6Ld1tO4oAAAAAI0-G63XMzqxtSbnFBpwOfIwxztQ&amp;co=aHR0cHM6Ly9kaXN0aWxsZXIuY29tOjQ0Mw..&amp;hl=ko&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;size=normal&amp;cb=rdz5qmgmoavu"></iframe>
							</div>
							<textarea id="g-recaptcha-response-1" name="g-recaptcha-response"
								class="g-recaptcha-response"
								style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
						</div>
						<iframe style="display: none;"></iframe>
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

			<div class="responsibility">
				To learn more about responsible consumption, please visit <a
					href="http://responsibility.org" target="_blank"> Foundation
					For Advancing Alcohol Responsibility. </a>
			</div>

		</div>
	</div>
</div>
