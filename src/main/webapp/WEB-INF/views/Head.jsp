<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" media="all" href="${pageContext.request.contextPath}/resources/application.css">

<link rel="stylesheet" media="screen" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
<script type="text/javascript" src="https://beacon-v2.helpscout.net/static/js/vendor.ec06f8ec.js"></script>
<script type="text/javascript" src="https://beacon-v2.helpscout.net/static/js/main.898b28f0.js"></script>
<script type="text/javascript" async="" src="https://beacon-v2.helpscout.net"></script>
<script type="text/javascript" async="" src="https://collector.brandmetrics.com/c.js?siteid=f9816ecc-b51b-4747-bc3e-1ea86a0677a2&amp;toploc=distiller.com&amp;rnd=8027902"></script>
<script async="" defer="" src="https://launchpad.privacymanager.io/latest/launchpad.bundle.js"></script>
<script async="" src="//cdn.confiant-integrations.net/gptprebidnative/202402121010/wrap.js"></script>
<script type="text/javascript" src="https://cdn.brandmetrics.com/tag/aa466d868b2742ffa2cc31bb6341dc12/cafemedia.js"></script>
<script type="text/javascript" src="https://launchpad-wrapper.privacymanager.io/69e75073-3763-483e-a64c-0d281bfd9225/launchpad-liveramp.js"></script>
<script type="text/javascript" src="https://cdn.confiant-integrations.net/mOinGM9MTu5v-Lto835XLhlrSPY/gpt_and_prebid/config.js"></script>
<script type="text/javascript" src="https://sb.scorecardresearch.com/cs/6035453/beacon.js"></script>
<!-- <script src="https://ads.adthrive.com/builds/core/64de950/es2018/js/adthrive.min.js?deployment=2024-06-28-01:64de950:5:con&amp;bucket=flex-03&amp;deliveryFeatures=recencyFrequency,reissuingSticky,manualCookieSync,raptiveFloors,switzerlandGdpr,consentManagerCMP,amazonBetaApstag,prebidLoad,gptLoad,amazonLoad,ttdSync&amp;siteid=606c5a9360a4830c06758746"></script> -->
<!-- <script src="https://ads.adthrive.com/builds/core/64de950/vendor/prebid/es2018/prebid.min.js"></script> -->
<script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script src="https://c.aps.amazon-adsystem.com/apstag.js"></script>
<!-- <script src="https://ads.adthrive.com/sites/606c5a9360a4830c06758746/ads.min.js?stickyDeployment=2024-06-28-01:64de950:5:con&amp;stickyBucket=flex-03&amp;stickyBranch=64de950"></script> -->
<script type="text/javascript" async="" charset="utf-8" src="https://www.gstatic.com/recaptcha/releases/rKbTvxTxwcw5VqzrtN-ICwWt/recaptcha__ko.js" crossorigin="anonymous" integrity="sha384-VrROgno6Y3KrKOu/xCxSGiGKiCRAzFUdNlmK4G9apVAJ5ZmIr5FcTVyaV5RmqCr1"></script>
<!-- <script async="" src="https://ads.adthrive.com/sites/606c5a9360a4830c06758746/ads.min.js?referrer=https%3A%2F%2Fdistiller.com%2F"></script> -->
<script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-TC434R8"></script>
<script type="text/vbscript">
Function IEBinary_getByteAt(strBinary, iOffset)
	IEBinary_getByteAt = AscB(MidB(strBinary, iOffset + 1, 1))
End Function
Function IEBinary_getBytesAt(strBinary, iOffset, iLength)
  Dim aBytes()
  ReDim aBytes(iLength - 1)
  For i = 0 To iLength - 1
   aBytes(i) = IEBinary_getByteAt(strBinary, iOffset + i)
  Next
  IEBinary_getBytesAt = aBytes
End Function
Function IEBinary_getLength(strBinary)
	IEBinary_getLength = LenB(strBinary)
End Function
</script>
<script src="https://js.stripe.com/v3/"></script>
<script src="https://kit.fontawesome.com/f646f9e9b5.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async="" src="https://www.googletagmanager.com/gtag/js?id=G-8K2RFRHH4Q"></script>

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', location.hostname == "distiller.com" ? "G-8K2RFRHH4Q" : "G-YPDT3WKNSR");
  
  /******************** ECOMMERCE TRACKING **********************/
  if (location.href.includes('welcome_pro')) {
    gtag('event', 'purchase', {
      transaction_id: "-2024-07-01 01:14:35 UTC",
      value: 10.00,
      currency: 'USD',
      items: [{
        item_id: "plan_GBDF29WWuegJJk",
        item_name: 'Pro Annual Plan',
        item_category: 'Pro',
        quantity: 1,
        price: 10.00,
      }]
    });
  }
</script>
<script>
  $(document).ready(function(){
    Distiller.googleTagTracker.setUserTag({
      id: "",
      slug: "",
      current_sign_in_ip: ""
    })
  });
</script>
<style>
	#main-logo {
		display: flex;
        align-items: center;
	}
</style>
<title>Distiller</title>
</head>
<div class="header">
	<div class="center-column">
		<header class="app-header">
			<div class="header-content">
				<button class="back" data-behavior="back">
					<i aria-hidden="true" class="fa fa-angle-left"></i> <span
						class="offscreen">Back</span>
				</button>
				<div class="menu-toggle">
					<button aria-expanded="false">
						<i aria-hidden="true" class="fa fa-reorder"></i> <i
							aria-hidden="true" class="icomoon-x"></i> <span class="offscreen">Show
							Menu</span>
					</button>
				</div>
				<a class="search-menu" href="/search"> <span class="search-a11y">Search</span>
					<i aria-hidden="true" class="fa fa-search"></i>
				</a>
				<div class="false-status-bar"></div>
				<a class="logo" href="/" id="main-logo" >
					<img src="${pageContext.request.contextPath}/assets/logo_black_trans_agave.png" alt="Distiller Home">
					<span class="offscreen">Distiller Home</span>
				</a>
				<div class="menu">
					<nav aria-hidden="false" class="global-menu"
						data-behavior="globalMenu" role="navigation">
						<ul class="primary">
							<li class="mobile search-menu-item"><a href="/search"> <span
									class="search">Search</span> <i aria-hidden="true"
									class="fa fa-search"></i>
							</a></li>
							<li class="mobile user-search-menu-item"><a
								href="/user_search"> <span class="search">Find People</span>
									<i aria-hidden="true" class="fa fa-user-plus"></i>
							</a></li>
							<li class="special-menu-item"><a href="/join-pro"> <i
									class="icomoon-crown"></i> Join Pro
							</a></li>
							<li><a href="/recommend" id="global-menu"> Recommend </a></li>
							</a></li>
							<li><a href="/users/sign_in"> Sign In </a></li>
							<li><a class="nav-accent" href="/users/sign_up">
									Register </a></li>
							<li class="desktop"><a href="/search"> <span
									class="search">Search</span> <i aria-hidden="true"
									class="fa fa-search"></i>
							</a></li>
							<li class="desktop"><a href="/user_search"> <span
									class="search">Find People</span> <i aria-hidden="true"
									class="fa fa-user-plus"></i>
							</a></li>
						</ul>
						<ul class="secondary mobile">
							<li><a href="/about">About Distiller</a></li>
							<li><a href="/tasting_table">The Tasting Table</a></li>
							<li><a href="mailto:hello@distiller.com">Contact Us</a></li>
							<li><a href="mailto:partners@distiller.com">Advertise</a></li>
							<li><a href="/jobs">Jobs</a></li>
							<li><a href="/faq">Frequently Asked Questions</a></li>
							<li><a href="/"> Home </a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	</div>
</div>
<script src="${pageContext.request.contextPath}/resources/application.js"></script>
<script src="${pageContext.request.contextPath}/resources/main.js"></script>
<script src="${pageContext.request.contextPath}/resources/distiller_api.js"></script>

</body>
</html>