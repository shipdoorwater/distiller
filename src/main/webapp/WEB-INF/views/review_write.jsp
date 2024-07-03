<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ include file="Head.jsp"%>
<%
System.out.println("review_write.jsp 진입성공함.");
%>

<!DOCTYPE html>
<html lang='en'>
<head>
<style>
html, body {
	background: black;
}
</style>
<meta content='max-image-preview:large' name='robots'>
<meta
	content='width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, minimal-ui'
	name='viewport'>
<meta charset='utf-8'>
<meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
<meta content='de082fc9d239f10ba2de53fa8eb89261' name='p:domain_verify'>
<meta content='45AtRa-_mocssQ3TvsrEK2IjXIz-5Afqz6xGweeBSEQ'
	name='google-site-verification'>
<meta content='yes' name='apple-mobile-web-app-capable'>
<meta content='Distiller' name='apple-mobile-web-app-title'>
<meta content='black' name='apple-mobile-web-app-status-bar-style'>
<link
	href='/assets/square_logo-b7451ae02f20ca4dadb0c1c71e27791c8aab79d600fe1a7a01c2d491ffefed11.png'
	rel='apple-touch-icon'>

<meta content='app' name='twitter:card'>
<meta content='@DrinkDistiller' name='twitter:site'>
<meta
	content='Distiller is filled with expert reviews of liquor from all over the world so your next purchase, bar order, or gift, will be the right one!'
	name='twitter:description'>
<meta content='us' name='twitter:app:country'>
<meta content='Distiller - The Liquor Expert'
	name='twitter:app:name:iphone'>
<meta content='id784925833' name='twitter:app:id:iphone'>
<meta content='distiller://' name='twitter:app:url:iphone'>
<meta content='Distiller - The Liquor Expert'
	name='twitter:app:name:ipad'>
<meta content='id784925833' name='twitter:app:id:ipad'>
<meta content='distiller://' name='twitter:app:url:ipad'>
<meta content='Distiller - The Liquor Expert'
	name='twitter:app:name:googleplay'>
<meta content='com.distiller.distiller' name='twitter:app:id:googleplay'>
<meta content='distiller://' name='twitter:app:url:googleplay'>

<title>World’s Largest Spirits Community. Reviews, Tasting
	Notes, Collection Tracking</title>
<meta name="description"
	content="Distiller is filled with expert reviews of liquor from all over the world so your next purchase, bar order, or gift, will be the right one!"></meta>
<meta property="fb:app_id" content="347622362043610"></meta>
<meta property="og:title"
	content="World’s Largest Spirits Community. Reviews, Tasting Notes, Collection Tracking"></meta>
<meta property="og:type" content="website"></meta>
<meta property="og:url" content="https://distiller.com/"></meta>
<meta property="og:image"
	content="https://distiller.com/assets/share-banner-63c764ff422596da41c4c1b2b20cd89acd9761fd5d33a46bfc4a745082e44b22.png"></meta>
<meta property="og:image:secure_url"
	content="https://distiller.com/assets/share-banner-63c764ff422596da41c4c1b2b20cd89acd9761fd5d33a46bfc4a745082e44b22.png"></meta>
<meta property="og:image:type" content="image/jpeg"></meta>
<meta property="og:image:width" content="1200"></meta>
<meta property="og:image:height" content="650"></meta>
<meta property="og:description"
	content="Distiller is filled with expert reviews of liquor from all over the world so your next purchase, bar order, or gift, will be the right one!"></meta>
<meta property="og:site_name" content="Distiller - The Liquor Expert"></meta>
<meta property="og:review" content=""></meta>
<meta property="og:brand" content=""></meta>
<meta property="og:gtin" content=""></meta>
<meta name="twitter:card" content="summary_large_image"></meta>
<meta name="twitter:site" content="@drinkdistiller"></meta>
<meta name="twitter:title" content="Distiller - The Liquor Expert"></meta>
<meta name="twitter:description"
	content="Distiller is filled with expert reviews of liquor from all over the world so your next purchase, bar order, or gift, will be the right one!"></meta>
<meta name="twitter:image"
	content="https://distiller.com/assets/share-banner-63c764ff422596da41c4c1b2b20cd89acd9761fd5d33a46bfc4a745082e44b22.png"></meta>
<meta name="propeller" content="5dccddb793c866930849e367b1ace8a0"></meta>
<meta name="hilltopads-site-verification"
	content="78c2afa53789ff649fa49297f79c1cd05ad5c8a6"></meta>
<link href='https://distiller.com/tastes/new?spirit=hibiki-21-year'
	rel='canonical'>

<link rel="stylesheet" media="all"
	href="/assets/application-28cb40c83874216760225644183dd932c69a94bfdedcd3d89ebe3271942e9180.css" />


<link rel="stylesheet" media="screen"
	href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token"
	content="ZNyKOjVGyupBl2JC3F4Psw1euYk3u5NjWrSS3ZYL3Blw2/5RiR0YA3oMBCfdx8VVJ2KsgEWTJPOJAVeeiuOH1A==" />
<script
	src="/assets/main-e3ef31261e3877cfda54e1c8890a8b5000b07b5b9b0f6dc7fcfadba8eff9a101.js"></script>
<script
	src="/assets/distiller_api-8ddc2f7de713a29f7d225c66560ad6377c4ad0f70f4f1a50781a0a7af48ab3f8.js"></script>
<script src="https://js.stripe.com/v3/"></script>
<script src="https://kit.fontawesome.com/f646f9e9b5.js"></script>
<script>
//<![CDATA[
window.gon={};gon.DISTILLER_WEB_API_KEY="8e01b58d-6bc8-407e-b7fb-5b989b5b23e9";gon.DISTILLER_API_HOST=null;gon.DISTILLER_AZURE_KEY="400d9823cb934c399a99e170ae85dcae";gon.GOOGLE_MAPS_API_KEY="AIzaSyBSirRWBLzdTQd98WEO3D5QRi6ra8kwu9A";gon.ENABLE_TASTE_OF_2018=null;
//]]>
</script>
<script>
  Distiller.distillerApiKey = gon.DISTILLER_WEB_API_KEY;
  Distiller.distillerApiHost = gon.DISTILLER_API_HOST;
  Distiller.distillerAzureKey = gon.DISTILLER_AZURE_KEY;
  Distiller.googleMapsApiKey = gon.GOOGLE_MAPS_API_KEY;
  Distiller.enableTasteOf2018 = gon.ENABLE_TASTE_OF_2018;
  
  /******************* DISTILLER PRO *********************/
  const stripe = Stripe("pk_live_TRqlFDrCYmkT6H5KrknDWCrR")
  const slug = 'bbakssang'
  const walletId = ''
  var promotionCode = ''
  var usePromotionCode = ('' === 'true')
  
  var isCurrentUser = true;
  var isProUser = false;
  
  if (location.hostname == "distiller.com")
  {
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TC434R8');
  }
  else
  {
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MR88FL8');
  }
  
  if(!isProUser) {
    (function(w, d) {
      w.adthrive = w.adthrive || {};
      w.adthrive.cmd = w.adthrive.cmd || [];
      w.adthrive.plugin = 'adthrive-ads-1.0.40-manual';
      w.adthrive.host = 'ads.adthrive.com';
      var s = d.createElement('script');
      s.async = true;
      s.referrerpolicy='no-referrer-when-downgrade';
      s.src = 'https://' + w.adthrive.host + '/sites/606c5a9360a4830c06758746/ads.min.js?referrer=' + w.encodeURIComponent(w.location.href);
      var n = d.getElementsByTagName('script')[0];
      n.parentNode.insertBefore(s, n);
    })(window, document);
  }
  
  function joinProYearly() {
    if (isCurrentUser) {
      findOrCreateWallet("yearly");
    } else {
      window.location = "https://distiller.com/users/sign_up?join_pro=true"
    }
  }
  
  function joinProMonthly(){
    if(isCurrentUser) {
      findOrCreateWallet("monthly");
    } else {
      window.location = "https://distiller.com/users/sign_up?join_pro=true"
    }
  }
  
  function findOrCreateWallet(plan_type) {
    $.ajax({
      method: 'PUT',
      url: `https://api.distiller.com/microlive/wallet/`,
      data: JSON.stringify({ system_id: slug}),
      success: function(wallet_id) {updateUser(wallet_id, plan_type)},
      error(xhr) { console.log('error', xhr) }
    });
  }
  
  function updateUser(wallet_id, plan_type) {
    $.ajax({
      method: 'PUT',
      url: '/users/' + slug,
      data: { user: { wallet_id }},
      success: function() { buildProPacket(wallet_id, plan_type) },
      error(xhr) { console.log('error', xhr)}
    });
  }
  
  function buildProPacket(wallet_id, plan_type){
    let plan = "yearly"
    if(plan_type){
      plan = plan_type
    }
  
    let createSessionData = {
      session_type: "buy_pro",
      success_url: `https://distiller.com/?welcome_pro=true`,
      cancel_url: `https://distiller.com/join-pro`,
      plan_style: plan
    };
  
    if (usePromotionCode && promotionCode != '') {
      createSessionData = Object.assign(createSessionData, { promotion_code: promotionCode })
    }
  
    $.ajax({
      method: 'PUT',
      url: "https://api.distiller.com/microlive/wallet/" + wallet_id + "/create_stripe_session",
      data: JSON.stringify(createSessionData),
      contentType: 'application/json; charset=utf-8',
      success: function(session_id) { redirectToStripe(wallet_id, session_id) },
      error(xhr) {console.log('error', xhr)}
    });
  }
  
  
  function redirectToStripe(wallet_id, session_id) {
    let params = {};
    if (session_id) {
      params = {sessionId: session_id};
    } else if (wallet_id) {
      console.log('no session given')
    }
    stripe.redirectToCheckout(params)
    .then(function (result) {
      if (result.error) {
        console.log('redirect to checkout error', result.error)
        window.location = "https://distiller.com/join-pro?registration_error=true"
      }
    })
    .catch(function(xhr) {
      console.log('redirect to checkout error', xhr)
      window.location = "https://distiller.com/join-pro?registration_error=true"
    });
  }
  function unsubscribeFromPro() {
    document.getElementById('spinner').style.display = "block";
    $.ajax({
      type: 'DELETE',
      url: `https://api.distiller.com/microlive/wallet/${walletId}/pro`,
      success: redirectToSubscriptionPage,
      error(xhr) {
        document.getElementById('spinner').style.display = "block";
        console.log('error', xhr)
        }
    });
  }
  
  function findSessionId() {
    $.ajax({
      method: 'PUT',
      url: "https://api.distiller.com/microlive/wallet/" + walletId + "/create_stripe_session",
      data: JSON.stringify({
        success_url: `https://distiller.com/profile/${slug}/subscription`,
        cancel_url: `https://distiller.com/profile/${slug}/subscription`,
        session_type: "pro_update"
      }),
      success: redirectToStripeForUpdateCard,
      error(xhr) { console.log('error', xhr) }
    });
  }
  
  function redirectToStripeForUpdateCard(sessionId) {
    stripe.redirectToCheckout({
      sessionId: sessionId,
    }).then(function (result) {
      if (result.error) {
        console.log('redirect to checkout error', result.error)
        redirectToSubscriptionPage
      }
    }).catch(function(xhr) {
      console.log('redirect to checkout error', xhr)
      redirectToSubscriptionPage
    })
  }
  
  function renewSubscription() {
    document.getElementById('spinner').style.display = "block";
    $.ajax({
      method: 'POST',
      url: `https://api.distiller.com/microlive/wallet/${walletId}/pro`,
      data: {},
      success: redirectToSubscriptionPage,
      error(xhr) {
        document.getElementById('spinner').style.display = "block";
        console.log('error', xhr)
      }
    });
  }
  
  function redirectToSubscriptionPage() {
    return window.location = `https://distiller.com/profile/${slug}/subscription`
  }
  
  function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function trackIpSpiritPage() {
    getIpInfo().then((data) => {
        properties = {
          spirit_slug: window.location.pathname.split('/')[2],
          ip: data.query
        }
  
        Distiller.googleTagTracker.track('Spirit Detail Page', properties)
    })
  }
  
  function getIpInfo() {
    return new Promise((resolve, reject) => {
      $.getJSON("https://pro.ip-api.com/json?key=rW3xPvv8AVlolE5&fields=countryCode,region,city,mobile,query,status", (data) => {
        if (data != null && data.status === "success") {
          resolve(data);
        } else {
          reject();
        }
      }).fail(() => {
        reject();
      });
    })
  }
  
  function trackWineSearcherBuy(event) {
    event.preventDefault();
    wsLink = $('.js-wine-searcher-buy-btn').attr('href');
  
    getIpInfo().then((data) => {
        properties = {
          spirit_slug: window.location.pathname.split('/')[2],
          wine_searcher_link: wsLink,
          ip: data.query
        }
  
        Distiller.googleTagTracker.track('Wine Searcher Buy', properties)
        window.open(
          wsLink,
          '_blank'
        );
    })
  }
  
  function getWineSearcherInfo(spiritSlug, onlyLink = false, needSlugAttach = false) {
    $.ajax({
      method: 'POST',
      url: `/spirits/${spiritSlug}/ws_info`,
      data: {},
      success: (data) => {
        if (data.ws_link) {
          const buyButtonClass = `.js-wine-searcher-buy-btn${needSlugAttach ? ('-' + spiritSlug) : ''}`
          const containerClass = needSlugAttach ? `.ws-container-${spiritSlug}` : '.ws-search-container'
          $(containerClass).removeClass('hide')
          $(buyButtonClass).attr('href', data.ws_link)
          if(!onlyLink) {
            $(`${buyButtonClass} .price`).html(data.price)
          }
        }
      },
      error(xhr) {
        console.log('error', xhr)
      }
    });
  }
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async=''
	src='https://www.googletagmanager.com/gtag/js?id=G-8K2RFRHH4Q'></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', location.hostname == "distiller.com" ? "G-8K2RFRHH4Q" : "G-YPDT3WKNSR");
  
  /******************** ECOMMERCE TRACKING **********************/
  if (location.href.includes('welcome_pro')) {
    gtag('event', 'purchase', {
      transaction_id: "bbakssang-2024-07-03 00:37:12 UTC",
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
      id: "400087",
      slug: "bbakssang",
      current_sign_in_ip: "183.98.203.84"
    })
  });
</script>
<script>
  /************ Track initial page load ********************/
  $(document).ready(function(){
    Distiller.googleTagTracker.trackPageLoad("New Taste");
  });
</script>
<script async='' await='' defer='defer'
	src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
<!-- *************** Chevron icon on profile header ******************/ -->
<script>
  $(document).ready(function(){
    $('.profile-header label').on('click', function(){
      if ($('#navigation').is(':checked') == false) {
        $('.profile-header .fa').removeClass('fa-chevron-down')
        $('.profile-header .fa').addClass('fa-chevron-up')
      } else {
        $('.profile-header .fa').removeClass('fa-chevron-up')
        $('.profile-header .fa').addClass('fa-chevron-down')
      }
    })
  })
</script>
<script>
  $(document).ready(function(){
    var _originalSize = $(window).width() + $(window).height()
  
    $(window).resize(function(){
      if($(window).width() + $(window).height() != _originalSize){
        if ($('.search-form__term').height() + 48 > $(window).height()) {
          $('.header').addClass('hide')
        }
      }else{
        $('.header').removeClass('hide')
      }
    });
  });
</script>
<!-- ********************* AdThrive Ad Block Recovery *********************************** -->
<script>!function(){"use strict";!function(e){if(-1===e.cookie.indexOf("__adblocker")){e.cookie="__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";var t=new XMLHttpRequest;t.open("GET","https://www.npttech.com/advertising.js",!0),t.onreadystatechange=function(){if(XMLHttpRequest.DONE===t.readyState)if(200===t.status){var n=e.createElement("script");n.innerHTML=t.responseText,e.getElementsByTagName("head")[0].appendChild(n)}else{var a=new Date;a.setTime(a.getTime()+3e5),e.cookie="__adblocker=true; expires="+a.toUTCString()+"; path=/"}},t.send()}}(document)}();
</script>
<script>!function(){"use strict";var e;e=document,function(){var t,n;function r(){var t=e.createElement("script");t.src="https://cafemedia-com.videoplayerhub.com/galleryplayer.js",e.head.appendChild(t)}function a(){var t=e.cookie.match("(^|[^;]+)\\s*__adblocker\\s*=\\s*([^;]+)");return t&&t.pop()}function c(){clearInterval(n)}return{init:function(){var e;"true"===(t=a())?r():(e=0,n=setInterval((function(){100!==e&&"false"!==t||c(),"true"===t&&(r(),c()),t=a(),e++}),50))}}}().init()}();
</script>
<!-- ********* Adthrive - Disable all ads ********* -->
<!-- ********* Google Sitelinks Searchbox ********* -->
<script type="application/ld+json">
{
"@context": "http://schema.org",
"@type": "WebSite",
"url": "https://distiller.com/",
"potentialAction": {
"@type": "SearchAction",
"target": "https://distiller.com/search?term={search_term_string}",
"query-input": "required name=search_term_string"
}
}
</script>
<script async='' src='https://cdn.onesignal.com/sdks/OneSignalSDK.js'></script>
<script>
  var username = "bbakssang"
  
  window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "9a4d5120-39da-44f6-ba88-f7b8c71c8849",
    });
    if (isCurrentUser) {
      OneSignal.setExternalUserId(slug);
      OneSignal.sendTag("username", username);
      if (isProUser) {
        OneSignal.sendTag("account_type", "pro");
      } else {
        OneSignal.sendTag("account_type", "free");
      }
    } else {
      OneSignal.removeExternalUserId();
      OneSignal.deleteTag("username");
      OneSignal.deleteTag("account_type");
    }
  });
</script>
<script>
  $(document).ready(function(){
    if($.cookie('DISMISS_DOWNLOAD_BANNER')) {
      if(document.getElementsByClassName("display-download-banner").length > 0) {
        document.getElementsByClassName("display-download-banner")[0].classList.remove('display-download-banner');
      }
      if(document.querySelector(".download-banner")) {
        document.querySelector(".download-banner").style.display = "none";
      }
    }
    $('.accept-privacy').click(function(e) {
      var bannerName = $(this).data('banner-name')
      $.cookie(`DISMISS_${bannerName.toUpperCase()}_BANNER`, true, {expires: 365, path: '/'})
    })
  })
</script>
<script>
  !function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});
</script>
<script>
  window.Beacon('init', '366afb20-8031-4800-b13e-2b229286e5c4')
</script>


</head>
<body class='screened' ontouchstart=''>
	<div class='modal error-modal js-hideable-modal hidden js-error-modal'>
		<div class='modal-window'>
			<button class='button close js-modal-close'>
				<i aria-hidden='true' class='icomoon-x'></i> <span class='offscreen'>Close
					Error Message</span>
			</button>
			<div class='error-content'>
				<div aria-level='1' class='secondary-headline' role='heading'>Hmmm...</div>
				<h2 class='primary-text'>
					It looks like we got out of sync. <br> Reload your page to
					freshen up and ensure that you get the best experience.
				</h2>
				<button class='button accented' onclick='location.reload();'>
					Refresh</button>
			</div>
		</div>
	</div>

	<script>
  $(document).ready(function(){
    new Distiller.EmailOptPrompt($('.js-email-opt'));
  });
</script>

	<ul id='skip-links'>
		<li><a href='#global-menu'>Skip to navigation</a></li>
		<li><a href='#main-content'>Skip to main content</a></li>
		<li><a href='#global-footer'>Skip to footer</a></li>
	</ul>

	<div class='modal js-hideable-modal hidden js-download-prompt-modal'>
		<div class='modal-window download-prompt-modal'>
			<button class='js-modal-close close'>
				<i aria-hidden='true' class='icomoon-x'></i> <span class='offscreen'>Close
					Modal</span>
			</button>
			<div class='download-prompt-modal__mobile-content'>
				<h4 class='download-prompt-modal__header'>
					Enjoy our full-featured list experience in the <br> <a
						class='app-link'
						href='https://itunes.apple.com/us/app/distiller-your-whiskey-companion/id784925833?mt=8&amp;uo=4'
						target='_blank'> free distiller app </a>
				</h4>
				<div class='download-prompt-modal__info'>
					<ul>
						<li><i class='icon fa fa-check'></i> <span> Create
								your own lists </span></li>
						<li><i class='icon fa fa-check'></i> <span> Find
								spirits on the go </span></li>
						<li><i class='icon fa fa-check'></i> <span> Easily
								search thousands of products </span></li>
						<li><i class='icon fa fa-check'></i> <span> Follow
								friends and see what they're drinking </span></li>
						<li><i class='icon fa fa-check'></i> <span> Track your
								collection with unlimited notes and bottle quantities <span
								class='pro-crown'> <i class='icomoon-crown'></i> PRO
							</span>
						</span></li>
					</ul>
				</div>
				<a class='button accented'
					href='https://itunes.apple.com/us/app/distiller-your-whiskey-companion/id784925833?mt=8&amp;uo=4'
					target='_blank'> Download Now </a> <a
					class='button js-modal-close close-btn' target='_blank'> No
					Thanks </a>
			</div>
			<div class='download-prompt-modal__desktop-content'>
				<h4 class='download-prompt-modal__header'>
					Enjoy our full-featured list experience in the <br> <a
						class='app-link'
						href='https://itunes.apple.com/us/app/distiller-your-whiskey-companion/id784925833?mt=8&amp;uo=4'
						target='_blank'> free distiller app </a>
				</h4>
				<div class='download-prompt-modal__screenshot'>
					<div aria-label='App screenshots' class='img center-img' role='img'></div>
				</div>
				<div class='download-prompt-modal__info'>
					<ul>
						<li><i class='icon fa fa-check'></i> <span> Create
								your own lists </span></li>
						<li><i class='icon fa fa-check'></i> <span> Find
								spirits on the go </span></li>
						<li><i class='icon fa fa-check'></i> <span> Easily
								search thousands of products </span></li>
						<li><i class='icon fa fa-check'></i> <span> Follow
								friends and see what they're drinking </span></li>
						<li><i class='icon fa fa-check'></i> <span> Track your
								collection with unlimited notes and bottle quantities
								<div class='pro-crown'>
									<i class='icomoon-crown'></i> PRO
								</div>
						</span></li>
					</ul>
					<div class='download-prompt-modal__store-links'>
						<p>GET IT NOW:</p>
						<a class='logo download-logo'
							href='https://itunes.apple.com/us/app/distiller-your-whiskey-companion/id784925833?mt=8&amp;uo=4'
							target='_blank' title='Link opens in a new window'>
							<div aria-label='Install Distiller from Apple App Store.'
								class='img logo-img apple-store' id='apple-store-prompt'
								role='img'></div>
						</a> <a class='logo download-logo'
							href='https://play.google.com/store/apps/details?id=com.distiller.distiller'
							target='_blank' title='Link opens in a new window'>
							<div aria-label='Install from Google Play.'
								class='img logo-img google-store' id='google-store-prompt'
								role='img'></div>
						</a>
					</div>
				</div>
			</div>

		</div>
	</div>

	<div class='modal js-hideable-modal hidden js-add-taste-images-modal'>
		<div class='modal-window add-taste-images-modal'>
			<button class='js-modal-close close'>
				<i aria-hidden='true' class='icomoon-x'></i> <span class='offscreen'>Close
					Modal</span>
			</button>
			<h4 class='download-prompt-modal__header'>If you want to add an
				image with your reviews install the app.</h4>
			<div class='download-prompt-modal__store-links'>
				<p>GET IT NOW:</p>
				<a class='logo download-logo'
					href='https://itunes.apple.com/us/app/distiller-your-whiskey-companion/id784925833?mt=8&amp;uo=4'
					target='_blank' title='Link opens in a new window'>
					<div aria-label='Install Distiller from Apple App Store.'
						class='img logo-img apple-store' id='apple-store-store' role='img'></div>
				</a> <a class='logo download-logo'
					href='https://play.google.com/store/apps/details?id=com.distiller.distiller'
					target='_blank' title='Link opens in a new window'>
					<div aria-label='Install from Google Play.'
						class='img logo-img google-store' id='google-store-store'
						role='img'></div>
				</a>
			</div>

		</div>
	</div>

	<div class='modal js-hideable-modal hidden js-taste-image-modal'>
		<div class='modal-window taste-image-modal'>
			<button class='js-modal-close close'>
				<i aria-hidden='true' class='icomoon-x'></i> <span class='offscreen'>Close
					Modal</span>
			</button>
			<div class='taste-image'></div>

		</div>
	</div>

	<div class='modal focus-background'
		data-behavior='focused-action-bar-background' style='display: none'></div>
	<div class='screen background'>
		<div class='canvas-wrapper'>
			<div class='content-container'>


				<div class='header'>
					<div class='center-column'>
						<header class='app-header'>
							<div class='header-content'>
								<button class='back' data-behavior='back'>
									<i aria-hidden='true' class='fa fa-angle-left'></i> <span
										class='offscreen'>Back</span>
								</button>
								<div class='menu-toggle'>
									<button aria-expanded='false'>
										<i aria-hidden='true' class='fa fa-reorder'></i> <i
											aria-hidden='true' class='icomoon-x'></i> <span
											class='offscreen'>Show Menu</span>
									</button>
								</div>
								<a class='search-menu' href='/search'> <span
									class='search-a11y'>Search</span> <i aria-hidden='true'
									class='fa fa-search'></i>
								</a>
								<div class='false-status-bar'></div>
								<a class='logo' href='/'> <span class='offscreen'>Distiller
										Home</span>
								</a>
								<div class='menu'>
									<nav aria-hidden='false' class='global-menu'
										data-behavior='globalMenu' role='navigation'>
										<ul class='primary'>
											<li class='mobile search-menu-item'><a href='/search'>
													<span class='search'>Search</span> <i aria-hidden='true'
													class='fa fa-search'></i>
											</a></li>
											<li class='mobile user-search-menu-item'><a
												href='/user_search'> <span class='search'>Find
														People</span> <i aria-hidden='true' class='fa fa-user-plus'></i>
											</a></li>
											<li class='special-menu-item'><a href='/join-pro'> <i
													class='icomoon-crown'></i> Join Pro
											</a></li>
											<li><a href='/recommend' id='global-menu'> Recommend
											</a></li>
											<li><a href='/articles'> <span>Articles</span>
											</a></li>
											<li><a class='js-global-my-profile-link'
												href='/profile/bbakssang'> My Profile </a></li>
											<li class='mobile sign-out-link'><a rel="nofollow"
												data-method="delete" href="/users/sign_out">Sign Out</a></li>
											<li class='desktop'><a href='/search'> <span
													class='search'>Search</span> <i aria-hidden='true'
													class='fa fa-search'></i>
											</a></li>
											<li class='desktop'><a href='/user_search'> <span
													class='search'>Find People</span> <i aria-hidden='true'
													class='fa fa-user-plus'></i>
											</a></li>
										</ul>
										<ul class='secondary mobile'>
											<li><a href='/about'>About Distiller</a></li>
											<li><a href='/tasting_table'>The Tasting Table</a></li>
											<li><a
												href="/cdn-cgi/l/email-protection#fb939e979794bb9f92888f9297979e89d5989496">Contact
													Us</a></li>
											<li><a
												href="/cdn-cgi/l/email-protection#5828392a2c363d2a2b183c312b2c3134343d2a763b3735">Advertise</a></li>
											<li><a href="/jobs">Jobs</a></li>
											<li><a href="/faq">Frequently Asked Questions</a></li>
											<li><a href='/'> Home </a></li>
										</ul>
									</nav>

								</div>
							</div>
						</header>
					</div>
				</div>

				<div aria-live='assertive' class='flash-message-alert' role='alert'></div>
				<main aria-hidden='false' class='main-container' id='main-content'
					tabIndex='-1'>
					<div class='scroller'>
						<div class='center-column taste-form-page'>
							<div class='taste-form whiskey'>
								<h2 class='taste-form__title'>You're Reviewing</h2>
								<h3 class='taste-form__spirit-name'>${drinkDto.drinkName }</h3>
								<form class="new_taste" id="new_taste" action="/tastes"
									accept-charset="UTF-8" method="post">
									<input name="utf8" type="hidden" value="&#x2713;" /><input
										type="hidden" name="authenticity_token"
										value="QBV3cSWGcHIBI4jFoEltcyuxXF/1bUdBpJLJfWwvEVpUEgMamd2imzq47qCh0KeVAY1JVodF8NF3Jww+cMdKlw==" /><input
										type="hidden" value="18348" name="taste[spirit_id]"
										id="taste_spirit_id" />
									<div class='taste-form__field taste-form__rating-field'>
										<h4 class='taste-form__field-label'>Your Rating</h4>
										<div class='taste-form__rating-slider'>
											<div class='js-star-selector star-selector'>
												<select name="taste[rating_attributes][stars]"
													id="taste_rating_attributes_stars"><option
														value=""></option>
													<option value="0.25">0.25</option>
													<option value="0.5">0.5</option>
													<option value="0.75">0.75</option>
													<option value="1.0">1.0</option>
													<option value="1.25">1.25</option>
													<option value="1.5">1.5</option>
													<option value="1.75">1.75</option>
													<option value="2.0">2.0</option>
													<option value="2.25">2.25</option>
													<option value="2.5">2.5</option>
													<option value="2.75">2.75</option>
													<option value="3.0">3.0</option>
													<option value="3.25">3.25</option>
													<option value="3.5">3.5</option>
													<option value="3.75">3.75</option>
													<option value="4.0">4.0</option>
													<option value="4.25">4.25</option>
													<option value="4.5">4.5</option>
													<option value="4.75">4.75</option>
													<option value="5.0">5.0</option></select>
											</div>
										</div>
									</div>

									<div class='taste-form__field'>
										<h4 class='taste-form__field-label'>Your Note</h4>
										<textarea
											placeholder="Start typing your tasting notes here..."
											class="js-mentionable-input"
											name="taste[user_spirit_note_attributes][body]"
											id="taste_user_spirit_note_attributes_body">
</textarea>
									</div>

									<div class='taste-form__field'>
										<h4 class='taste-form__field-label'>Cost</h4>
										<div class='taste-form__price-field-set'>
											<span class='taste-form__price-field-set__cost-fields'>
												<input min="0" step="0.01" class="taste-form__price-field"
												type="number" name="taste[price]" id="taste_price" /> <select
												name="taste[price_currency]" id="taste_price_currency"><option
														value="usd">usd</option>
													<option value="eur">eur</option>
													<option value="jpy">jpy</option>
													<option value="gbp">gbp</option>
													<option value="aud">aud</option>
													<option value="cad">cad</option>
													<option value="chf">chf</option>
													<option value="cny">cny</option>
													<option value="sek">sek</option>
													<option value="mxn">mxn</option></select>
											</span> <span>per</span> <select name="taste[price_per]"
												id="taste_price_per"><option value="bottle">bottle</option>
												<option value="pour">pour</option>
												<option value="shot">shot</option>
												<option value="cocktail">cocktail</option></select>
										</div>
									</div>

									<div class='taste-form__field field pretty-checkbox-field'>
										<div class='pretty p-default'>
											<input name="taste[private]" type="hidden" value="0" /><input
												type="checkbox" value="1" name="taste[private]"
												id="taste_private" />
											<div class='state'>
												<label for="taste_private">Private</label>
											</div>
										</div>
									</div>
									<input type="submit" name="commit" value="Save"
										class="button small accented" disabled="disabled"
										data-disable-with="Save" />
								</form>
							</div>
						</div>


						<div class='mobile-footer'>
							<h2 class='sign_up_label_mobile' id='sign_up_label_mobile'>Sign
								up for the Distiller Newsletter</h2>
							<div class='email-signup'>
								<form data_behavior="email-signup" action="/email_signups"
									accept-charset="UTF-8" method="post">
									<input name="utf8" type="hidden" value="&#x2713;" /><input
										type="hidden" name="authenticity_token"
										value="NkVAZYKM74CDPDfBEDoHulHDag5xvOBtjhtvn+xnX1IiQjQOPtc9abinUaQRo81ce/9/BwOUV/1drqrc8I8Enw==" />
									<div data-behavior='message'></div>
									<input placeholder="Your Email" aria-labelledby="sign_up_label"
										required="required" autocomplete="email"
										oninvalid="this.setCustomValidity(&quot;Email is either empty or invalid!&quot;)"
										oninput="this.setCustomValidity(&quot;&quot;)" type="email"
										name="email_signup[email]" />

									<script data-cfasync="false"
										src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>


									<input type="submit" name="commit" value="sign up"
										data-disable-with="sign up" />

								</form>
							</div>

							<div class='social-actions'>
								<h5 aria-level='2' role='heading'>Follow Us</h5>
								<div role='list'>
									<div role='listitem'>
										<a class='twitter-follow'
											href='https://twitter.com/intent/follow?screen_name=drinkdistiller'>
											<span class='offscreen'>Twitter</span> <span
											class='fa fa-stack'> <i aria-hidden='true'
												class='fa fa-circle fa-stack-2x'></i> <i aria-hidden='true'
												class='fa fa-twitter fa-light fa-stack-1x'></i>
										</span>
										</a>
									</div>
									<div role='listitem'>
										<a class='facebook-like' data-behavior='facebook-share'
											data-share-path='/'
											href='https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fdrinkdistiller.com'>
											<span class='offscreen'>Facebook</span> <span
											class='fa fa-stack'> <i aria-hidden='true'
												class='fa fa-circle fa-stack-2x'></i> <i aria-hidden='true'
												class='fa fa-facebook fa-light fa-stack-1x'></i>
										</span>
										</a>
									</div>
									<div role='listitem'>
										<a class='instagram-like'
											href='http://instagram.com/drinkdistiller' target='_blank'>
											<span class='offscreen'>Instagram</span> <span
											class='fa fa-stack'> <i aria-hidden='true'
												class='fa fa-circle fa-stack-2x'></i> <i aria-hidden='true'
												class='fa fa-instagram fa-light fa-stack-1x'></i>
										</span>
										</a>
									</div>
								</div>
							</div>

							<div class='download-app'>
								<h5 aria-level='2' role='heading'>Download The App</h5>
								<a class='logo'
									href='https://itunes.apple.com/us/app/distiller-your-whiskey-companion/id784925833?mt=8&amp;uo=4'
									target='_blank' title='Link opens in a new window'>
									<div aria-label='Install Distiller from Apple App Store.'
										class='img apple-store' id='apple-store-mobile' role='img'></div>
								</a> <a class='logo'
									href='https://play.google.com/store/apps/details?id=com.distiller.distiller'
									target='_blank' title='Link opens in a new window'>
									<div aria-label='Install from Google Play.'
										class='img google-store' id='google-store-mobile' role='img'></div>
								</a>
							</div>
							<div class='responsibility'>
								To learn more about responsible consumption, please visit <a
									href='http://responsibility.org' target='_blank'>
									Foundation For Advancing Alcohol Responsibility. </a>
							</div>

							<ul class='legal'>
								<li><a href="/terms-of-service">Terms Of Service.</a>
									&#8482/&copy 2024 Distiller</li>
								<li><a href="/privacy-policy">Privacy Policy</a></li>
								<li><a
									href="/cdn-cgi/l/email-protection#3c54595050537c58554f48555050594e125f5351">Contact
										Us</a></li>
								<li><a
									href="/cdn-cgi/l/email-protection#3f4f5e4d4b515a4d4c7f5b564c4b5653535a4d115c5052">Advertise</a></li>
								<li><a href="/pages/submitting-for-review">Submit For
										Review</a></li>
								<li><a href="/jobs">Jobs</a></li>
								<li><a href="/faq">Frequently Asked Questions</a></li>
							</ul>
						</div>

						<div class='fixed-mobile-footer'></div>
					</div>
				</main>
				<footer class='global-footer'>
					<div class='center-column'>
						<ul class='links primary-text'>
							<li><a id="global-footer" href="/about">About Distiller</a></li>
							<li><a href="/tasting_table">The Tasting Table</a></li>
							<li><a
								href="/cdn-cgi/l/email-protection#83ebe6efefecc3e7eaf0f7eaefefe6f1ade0eceebcf0f6e1e9e6e0f7bec7eaf0f7eaefefe6f1ade0eceea6b1b3c5e6e6e7e1e2e0e8a5e2eef3b8e1ece7fabea6b3c2a6b3c2d0e6edf7a6b1b3e5f1eceeb9a6b1b3ceecf9eaefefe2acb6adb3a3abd4eaede7ecf4f0a3cdd7a3b2b3adb3b8a3d4eaedb5b7b8a3fbb5b7aaa3c2f3f3efe6d4e6e1c8eaf7acb6b0b4adb0b5a3abc8cbd7cecfafa3efeae8e6a3c4e6e0e8ecaaa3c0ebf1eceee6acb2b1b5adb3adb3adb3a3d0e2e5e2f1eaacb6b0b4adb0b5">Contact
									Us</a></li>
							<li><a
								href="/cdn-cgi/l/email-protection#30405142445e5542437054594344595c5c55421e535f5d">Advertise</a></li>
							<li><a href="/pages/submitting-for-review">Submit For
									Review</a></li>
							<li><a href="/jobs">Jobs</a></li>
							<li><a href="https://help.distiller.com/">Help</a></li>
							<li><a href="/privacy-policy">Privacy Policy</a></li>
							<li><a rel="nofollow" data-method="delete"
								href="/users/sign_out">Sign Out</a></li>
							<li class='terms legal'><a href="/terms-of-service">Terms
									Of Service.</a> &#8482/&copy 2024 Distiller</li>
						</ul>
						<div class='social-actions'>
							<h5 aria-level='2' role='heading'>Follow Us</h5>
							<div role='list'>
								<div role='listitem'>
									<a class='twitter-follow'
										href='https://twitter.com/intent/follow?screen_name=drinkdistiller'>
										<span class='offscreen'>Twitter</span> <span
										class='fa fa-stack'> <i aria-hidden='true'
											class='fa fa-circle fa-stack-2x'></i> <i aria-hidden='true'
											class='fa fa-twitter fa-light fa-stack-1x'></i>
									</span>
									</a>
								</div>
								<div role='listitem'>
									<a class='facebook-like' data-behavior='facebook-share'
										data-share-path='/'
										href='https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fdrinkdistiller.com'>
										<span class='offscreen'>Facebook</span> <span
										class='fa fa-stack'> <i aria-hidden='true'
											class='fa fa-circle fa-stack-2x'></i> <i aria-hidden='true'
											class='fa fa-facebook fa-light fa-stack-1x'></i>
									</span>
									</a>
								</div>
								<div role='listitem'>
									<a class='instagram-like'
										href='http://instagram.com/drinkdistiller' target='_blank'>
										<span class='offscreen'>Instagram</span> <span
										class='fa fa-stack'> <i aria-hidden='true'
											class='fa fa-circle fa-stack-2x'></i> <i aria-hidden='true'
											class='fa fa-instagram fa-light fa-stack-1x'></i>
									</span>
									</a>
								</div>
							</div>
						</div>

						<div class='newsletter-column'>
							<h5 aria-level='2' role='heading'>Newsletter</h5>
							<span id='sign_up_label'>Sign up for the Distiller
								Newsletter for new bottle & feature updates</span>
							<div class='email-signup'>
								<form data_behavior="email-signup" action="/email_signups"
									accept-charset="UTF-8" method="post">
									<input name="utf8" type="hidden" value="&#x2713;" /><input
										type="hidden" name="authenticity_token"
										value="ff52/47BBe3pQ/Wc7z1YLHVsqPU6cWAlrzHsWATUcnFp+QKUMprXBNLYk/nupJLKX1C9/EhZ17V8hCkbGDwpvA==" />
									<div data-behavior='message'></div>
									<input placeholder="Your Email" aria-labelledby="sign_up_label"
										required="required" autocomplete="email"
										oninvalid="this.setCustomValidity(&quot;Email is either empty or invalid!&quot;)"
										oninput="this.setCustomValidity(&quot;&quot;)" type="email"
										name="email_signup[email]" />

									<script data-cfasync="false"
										src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>


									<input type="submit" name="commit" value="sign up"
										data-disable-with="sign up" />


								</form>
							</div>

							<div class='responsibility'>
								To learn more about responsible consumption, please visit <a
									href='http://responsibility.org' target='_blank'>
									Foundation For Advancing Alcohol Responsibility. </a>
							</div>

						</div>
					</div>
				</footer>

			</div>
		</div>
	</div>
	<script defer
		src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"
		integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ=="
		data-cf-beacon='{"rayId":"89d2ce386e0eaa69","version":"2024.4.1","token":"0ee8b19124ad4a8ab1320cedb1148c5d"}'
		crossorigin="anonymous"></script>
</body>
</html>

<%@ include file="footer.jsp"%>