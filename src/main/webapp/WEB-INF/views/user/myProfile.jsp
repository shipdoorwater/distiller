<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="Head.jsp" %>
<% String test = request.getContextPath(); 
	System.out.println(test);
%>

<main aria-hidden="false" class="main-container" id="main-content" tabindex="-1">
<div class="scroller">
<div class="center-column">
<h1 class="offscreen">My Feed</h1>
<div class="profile feed">
<div class="desktop-profile-nav">
<div class="profile-nav">
<div class="summary">
<a href="/profile/munsu-bae/settings">
<div class="user-avatar">
<div aria-label="Munsu-Bae" class="pic" role="img" style="background-image: url(${pageContext.request.contextPath}/assets/images/placeholders/placeholder_2.png)"></div>

</div>
</a>
<p class="tertiary-headline name">
Munsu-Bae
</p>
</div>
<div class="user-statistics">
<div class="statistic reviews-link">
<a href="/profile/munsu-bae/tastes">
<span class="link-wrap">
0
<div>Reviews</div>
</span>
</a>
</div>

<div class="statistic followers-link">
<a href="/profile/munsu-bae/followers">
<span class="link-wrap">
0
<div>Followers</div>
</span>
</a>
</div>

<div class="statistic following-link">
<a href="/profile/munsu-bae/following">
<span class="link-wrap">
0
<div>Following</div>
</span>
</a>
</div>

</div>

<div class="menu">
<div class="menu-content">
<ul>
<li class="profile-menu__item" id="active">
<a href="/profile/munsu-bae/feed">
<i aria-hidden="true" class="icomoon-activity-feed"></i>
<span class="mini-headline">My Feed</span>
<span class="offscreen">Current Page</span>
</a>
</li>
<li class="profile-menu__item">
<a href="/profile/munsu-bae/lists">
<i aria-hidden="true" class="fa fa-list-ul"></i>
<span class="mini-headline">My Lists</span>
</a>
</li>
<li class="profile-menu__item">
<a href="/profile/munsu-bae/saved_articles">
<i aria-hidden="true" class="far fa-bookmark"></i>
<span class="mini-headline">My Saved Articles</span>
</a>
</li>
<li class="profile-menu__item">
<a href="/profile/munsu-bae/settings">
<i aria-hidden="true" class="icomoon-cog"></i>
<span class="mini-headline">Settings</span>
</a>
</li>
<li>
<a href="mailto:hello@distiller.com?subject=Distiller.com%20Feedback&amp;body=%0A%0ASent%20from:%20{{userAgent}}">
<i aria-hidden="true" class="fa fa-envelope"></i>
<span class="mini-headline">
Contact Us
</span>
</a>
</li>
<li>
<a data-method="delete" href="/users/sign_out" rel="nofollow">
<i aria-hidden="true" class="icomoon-x"></i>
<span class="mini-headline">
Sign Out
</span>
</a>
</li>
</ul>
</div>
</div>

</div>

</div>
<div class="personal-content profile-list">
<div class="profile-header">
<label class="tertiary-headline" for="navigation">
My Feed
<i class="fa fa-chevron-down spirit-family-select__chevron" aria-hidden="true"></i>
</label>
</div>
<div class="mobile-profile-nav">
<input id="navigation" type="checkbox">
<div class="navigation">
<div class="profile-nav">
<div class="summary">
<a href="/profile/munsu-bae/settings">
<div class="user-avatar">
<div aria-label="Munsu-Bae" class="pic" role="img" style="background-image: url(${pageContext.request.contextPath}/assets/placeholders/placeholder_2.png)"></div>

%>

</div>
</a>
<p class="tertiary-headline name">
Munsu-Bae
</p>
</div>
<div class="user-statistics">
<div class="statistic reviews-link">
<a href="/profile/munsu-bae/tastes">
<span class="link-wrap">
0
<div>Reviews</div>
</span>
</a>
</div>

<div class="statistic followers-link">
<a href="/profile/munsu-bae/followers">
<span class="link-wrap">
0
<div>Followers</div>
</span>
</a>
</div>

<div class="statistic following-link">
<a href="/profile/munsu-bae/following">
<span class="link-wrap">
0
<div>Following</div>
</span>
</a>
</div>

</div>

<div class="menu">
<div class="menu-content">
<ul>
<li class="profile-menu__item" id="active">
<a href="/profile/munsu-bae/feed">
<i aria-hidden="true" class="icomoon-activity-feed"></i>
<span class="mini-headline">My Feed</span>
<span class="offscreen">Current Page</span>
</a>
</li>
<li class="profile-menu__item">
<a href="/profile/munsu-bae/lists">
<i aria-hidden="true" class="fa fa-list-ul"></i>
<span class="mini-headline">My Lists</span>
</a>
</li>
<li class="profile-menu__item">
<a href="/profile/munsu-bae/saved_articles">
<i aria-hidden="true" class="far fa-bookmark"></i>
<span class="mini-headline">My Saved Articles</span>
</a>
</li>
<li class="profile-menu__item">
<a href="/profile/munsu-bae/settings">
<i aria-hidden="true" class="icomoon-cog"></i>
<span class="mini-headline">Settings</span>
</a>
</li>
<li>
<a href="mailto:hello@distiller.com?subject=Distiller.com%20Feedback&amp;body=%0A%0ASent%20from:%20{{userAgent}}">
<i aria-hidden="true" class="fa fa-envelope"></i>
<span class="mini-headline">
Contact Us
</span>
</a>
</li>
<li>
<a data-method="delete" href="/users/sign_out" rel="nofollow">
<i aria-hidden="true" class="icomoon-x"></i>
<span class="mini-headline">
Sign Out
</span>
</a>
</li>
</ul>
</div>
</div>

</div>

</div>
</div>
<a class="button mini notifications-only" href="/profile/munsu-bae/feed?notifications_only=true">
Show Only My Activity
</a>
<div class="clear"></div>
<div class="results">
<div class="empty-feed">
<h3 class="tertiary-headline">No Activity Yet</h3>
<ul>
<li>
<a class="button accented" href="/search">
Search Spirits
</a>
</li>
<li>
<a class="button inverted" href="/user_search">
Search For People
</a>
</li>
</ul>
</div>

</div>
<div class="pagination-control-container">
<div class="pagination-control">
<span class="pagination-control__description">
No Activities Found
</span>

</div>

</div>

</div>
</div>
</div>

<div class="mobile-footer">
<h2 class="sign_up_label_mobile" id="sign_up_label_mobile">Sign up for the Distiller Newsletter</h2>
<div class="email-signup">
<form data_behavior="email-signup" action="/email_signups" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="ONBE5WHhJhhl19BeY8yZ2BoYs48jrBmi89rDcaLAl/FZquqhrIgg4IpennJ0imdFHxTiBAI4xE0WRmQg9y384g=="><div data-behavior="message"></div>
<input placeholder="Your Email" aria-labelledby="sign_up_label" required="required" autocomplete="email" oninvalid="this.setCustomValidity(&quot;Email is either empty or invalid!&quot;)" oninput="this.setCustomValidity(&quot;&quot;)" type="email" name="email_signup[email]">
<input type="hidden" name="newsletter_recaptcha_token" id="newsletter_recaptcha_token" value="03AFcWeA6d8-hQwvZfced3SwNWJnM0-7Hxm5-G3p0CZ_nFtb_oZ2j00a3n2c1apiZ7vRfLOkYIWnNv7UKx1cecgNhnLe0mfNuriZBDXtKWlt30Tze1yaBGbUEbcBTlekd-_DGe9HfYLoUB0kCwwFaYJxuBDUtDgSsvvokN4IQZlb5MF1a-ErNvw4Jj_-H5-QRnOoc47Ay0gtl8WV2_0IVH6pm4rMQS9oOmYnUVVUE63f99KImDnmXnG-OsCItllEmyUhvA6sZH4OJ3UHwhDClP-GCF8GR3Hn-tcBAL5Lt6FYZ3CR7jVxk4Ucq-mRjXA9yYbJG1UxO7_S12dQE9R9zQZ3FHMl2o3A2li8WSWlHdubvWbifhSIajJ_kTsOlPmKzMV277QlIMgCvy-xMeSxzjmRM7YioeUSjALjX1W9S8lSXnGyzl_VBmv_GWsr7LOx1biE0eluwhd6FqkXyzoayTklnPBV7pCIMRGpcYkY13BuGtB_6M-ZMvtEmg69GzWcHAXXX-UyzBIDhVaLV_jgPJYrUEdHmuO02jIws3hkgyrsMRcIWroEGEnctKAqyxpmpPBzImgHrPKgWPX4VQRS6ssPcouDRgfvjwpqnKo51H9TYhllLGm8ya_QOa6S9NoK8WAzUmq6l7iVNBqkzHtkKIymhsb2N7ihyhwwRQeBHI2oWzxuAFGpI0Onc" class="js-newsletter-recaptcha-token-field">
<script src="https://www.google.com/recaptcha/api.js?render=6LcnJJMUAAAAAG0QN9grwzsGfQMg5Mht09pzkK_g"></script>
<script>
  grecaptcha.ready(function() {
  
    var field = $(".js-newsletter-recaptcha-token-field")
    var submitButton = field.closest('form').find('input[type=submit]')
  
    submitButton.attr('disabled', 'disabled');
    grecaptcha.execute("6LcnJJMUAAAAAG0QN9grwzsGfQMg5Mht09pzkK_g", {action: 'newsletter'}).then(function(token) {
      field.val(token);
      submitButton.attr('disabled', false);
    });
  });
</script>

<input type="submit" name="commit" value="sign up" data-disable-with="sign up">
<script src="https://www.recaptcha.net/recaptcha/api.js" async="" defer=""></script>
<div data-sitekey="6Ld1tO4oAAAAAI0-G63XMzqxtSbnFBpwOfIwxztQ" class="g-recaptcha "><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-7dglv9mzq4cm" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.recaptcha.net/recaptcha/api2/anchor?ar=1&amp;k=6Ld1tO4oAAAAAI0-G63XMzqxtSbnFBpwOfIwxztQ&amp;co=aHR0cHM6Ly9kaXN0aWxsZXIuY29tOjQ0Mw..&amp;hl=ko&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;size=normal&amp;cb=abg7i9c3edif"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div></div>
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
              <div style="width: 300px; height: 60px; border-style: none;
                bottom: 12px; left: 25px; margin: 0px; padding: 0px; right: 25px;
                background: #f9f9f9; border: 1px solid #c1c1c1; border-radius: 3px;">
                <textarea id="g-recaptcha-response" name="g-recaptcha-response"
                  class="g-recaptcha-response"
                  style="width: 250px; height: 40px; border: 1px solid #c1c1c1;
                  margin: 10px 25px; padding: 0px; resize: none;">
                </textarea>
              </div>
            </div>
          </noscript>

</form></div>

<div class="social-actions">
<h5 aria-level="2" role="heading">Follow Us</h5>
<div role="list">
<div role="listitem">
<a class="twitter-follow" href="https://twitter.com/intent/follow?screen_name=drinkdistiller">
<span class="offscreen">Twitter</span>
<span class="fa fa-stack" aria-hidden="true">
<i aria-hidden="true" class="fa fa-circle fa-stack-2x"></i>
<i aria-hidden="true" class="fa fa-twitter fa-light fa-stack-1x"></i>
</span>
</a>
</div>
<div role="listitem">
<a class="facebook-like" data-behavior="facebook-share" data-share-path="/" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fdrinkdistiller.com">
<span class="offscreen">Facebook</span>
<span class="fa fa-stack" aria-hidden="true">
<i aria-hidden="true" class="fa fa-circle fa-stack-2x"></i>
<i aria-hidden="true" class="fa fa-facebook fa-light fa-stack-1x"></i>
</span>
</a>
</div>
<div role="listitem">
<a class="instagram-like" href="http://instagram.com/drinkdistiller" target="_blank">
<span class="offscreen">Instagram</span>
<span class="fa fa-stack" aria-hidden="true">
<i aria-hidden="true" class="fa fa-circle fa-stack-2x"></i>
<i aria-hidden="true" class="fa fa-instagram fa-light fa-stack-1x"></i>
</span>
</a>
</div>
</div>
</div>

<div class="download-app">
<h5 aria-level="2" role="heading">Download The App</h5>
<a class="logo" href="https://itunes.apple.com/us/app/distiller-your-whiskey-companion/id784925833?mt=8&amp;uo=4" target="_blank" title="Link opens in a new window">
<div aria-label="Install Distiller from Apple App Store." class="img apple-store" id="apple-store-mobile" role="img"></div>
</a>
<a class="logo" href="https://play.google.com/store/apps/details?id=com.distiller.distiller" target="_blank" title="Link opens in a new window">
<div aria-label="Install from Google Play." class="img google-store" id="google-store-mobile" role="img"></div>
</a>
</div>
<div class="responsibility">
To learn more about responsible consumption, please visit
<a href="http://responsibility.org" target="_blank">
Foundation For Advancing Alcohol Responsibility.
</a>
</div>

<ul class="legal">
<li>
<a href="/terms-of-service">Terms Of Service.</a>
™/© 2024 Distiller
</li>
<li><a href="/privacy-policy">Privacy Policy</a></li>
<li><a href="mailto:hello@distiller.com">Contact Us</a></li>
<li><a href="mailto:partners@distiller.com">Advertise</a></li>
<li><a href="/pages/submitting-for-review">Submit For Review</a></li>
<li><a href="/jobs">Jobs</a></li>
<li><a href="/faq">Frequently Asked Questions</a></li>
</ul>
<div class="adthrive-comscore adthrive-footer-message"><span>A Raptive Partner Site</span></div></div>

<div class="fixed-mobile-footer">

</div>
</div>
</main>

<%@ include file="footer.jsp" %>