<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ include file="../Head.jsp"%>
<%

System.out.println("recommand_03.jsp 진입성공함.");
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
<link
	href='/assets/loading/Distiller_Load_Iphone-8c0b0cc4f1b3bdb02fdc7d61c8ba3965779df0517e571c824720d1b1fa773d13.jpg'
	media='(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)'
	rel='apple-touch-startup-image'>
<link
	href='/assets/loading/Distiller_Load_IphoneRetina-8f737aa4342d447420a12d454cb65f1f706029ed78a37f12b68f577c050917aa.jpg'
	media='(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)'
	rel='apple-touch-startup-image'>
<link
	href='/assets/loading/Distiller_Load_Iphone5-ffb683fc4e8ba1f5ca6e370f679de208d9572a10958da5a9b25365fd1d0373a4.jpg'
	media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
	rel='apple-touch-startup-image'>
<link
	href='/assets/loading/Distiller_Load_iPad_Portrait-eeea25cabad583f4d5ecae743021e2f0bebbb37d811c3ac77f5797651164fa76.jpg'
	media='(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)'
	rel='apple-touch-startup-image'>
<link
	href='/assets/loading/Distiller_Load_iPadRetina_Portrait-4b4cac021437dfb6c56799e73dbac3bfecb6eb02df8a58dddd452279f50d773b.jpg'
	media='(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)'
	rel='apple-touch-startup-image'>
<link
	href='/assets/loading/Distiller_Load_iPad_Landscape-65d4e90661dedfeda4b7e23bba97915912b4ad071db3edb6253d5390ced0c90a.jpg'
	media='(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)'
	rel='apple-touch-startup-image'>
<link
	href='/assets/loading/Distiller_Load_iPadRetina_Landscape-b94690f99f4251b31de0754ce8f6aa19610a48008a81914481908963a6427ccf.jpg'
	media='(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)'
	rel='apple-touch-startup-image'>

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

<title>Get a Recommendation</title>
<meta name="description"
	content="Distiller can help you find new flavors by giving you liquor recommendations based on your taste."></meta>
<meta property="fb:app_id" content="347622362043610"></meta>
<meta property="og:title" content="Get a Recommendation"></meta>
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
	content="Distiller can help you find new flavors by giving you liquor recommendations based on your taste."></meta>
<meta property="og:site_name" content="Distiller - The Liquor Expert"></meta>
<meta name="twitter:card" content="summary_large_image"></meta>
<meta name="twitter:site" content="@drinkdistiller"></meta>
<meta name="twitter:title" content="Get a Recommendation"></meta>
<meta name="twitter:description"
	content="Distiller can help you find new flavors by giving you liquor recommendations based on your taste."></meta>
<meta name="twitter:image"
	content="https://distiller.com/assets/share-banner-63c764ff422596da41c4c1b2b20cd89acd9761fd5d33a46bfc4a745082e44b22.png"></meta>
<meta name="propeller" content="5dccddb793c866930849e367b1ace8a0"></meta>
<meta name="hilltopads-site-verification"
	content="78c2afa53789ff649fa49297f79c1cd05ad5c8a6"></meta>
<link href='https://distiller.com/recommend' rel='canonical'>

<link rel="stylesheet" media="all"
	href="/assets/application-28cb40c83874216760225644183dd932c69a94bfdedcd3d89ebe3271942e9180.css" />


<link rel="stylesheet" media="screen"
	href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token"
	content="wW3M2vjseSA6x8y+/Yx2t5xpM2KdWTmmBHgRrArKDBHVarixRLeryQFcqtv8FbxRtlUma+9xjjbXzdTvFiJX3A==" />
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
  

</script>


<script>
  /************ Track initial page load ********************/
  $(document).ready(function(){
    Distiller.googleTagTracker.trackPageLoad("recommender#index");
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
<body class='screened whiskey-selected' ontouchstart=''>
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


				<div aria-live='assertive' class='flash-message-alert' role='alert'></div>
				<main aria-hidden='false' class='main-container' id='main-content'
					tabIndex='-1'>
					<div class='scroller'>
						 
						 
						 
						 <!-- <section class='site-content'>
							<h1 aria-hidden='true' class='offscreen'>Get a custom
								spirits recommendation</h1>
							<div id='question'>
								<div class='question'>
									<h1 class='secondary-headline question-text'>Know What
										Type of Spirit You&#39;re Looking For?</h1>
									<div class='progress step-0'></div>
									<ul class='choices'>
										<li><a class='choice'
											href='/recommend?answers%5Bwhich_spirit_family%5D=whiskey'>
												<div class='label-container'>
													<div class='label'>Whiskey</div>
												</div>
										</a></li>
										<li><a class='choice'
											href='/recommend?answers%5Bwhich_spirit_family%5D=agave'>
												<div class='label-container'>
													<div class='label'>Tequila/Mezcal</div>
												</div>
										</a></li>
										<li><a class='choice'
											href='/recommend?answers%5Bwhich_spirit_family%5D=brandy'>
												<div class='label-container'>
													<div class='label'>Brandy</div>
												</div>
										</a></li>
										<li><a class='choice'
											href='/recommend?answers%5Bwhich_spirit_family%5D=sugarcane'>
												<div class='label-container'>
													<div class='label'>Rum</div>
												</div>
										</a></li>
										<li><a class='choice'
											href='/recommend?answers%5Bwhich_spirit_family%5D=vodka'>
												<div class='label-container'>
													<div class='label'>Vodka</div>
												</div>
										</a></li>
										<li><a class='choice'
											href='/recommend?answers%5Bwhich_spirit_family%5D=gin'>
												<div class='label-container'>
													<div class='label'>Gin</div>
												</div>
										</a></li>
										<li><a class='choice'
											href='/recommend?answers%5Bwhich_spirit_family%5D=liqueur'>
												<div class='label-container'>
													<div class='label'>Liqueurs/Bitters</div>
												</div>
										</a></li>
										<li><a class='choice'
											href='/recommend?answers%5Bwhich_spirit_family%5D=other'>
												<div class='label-container'>
													<div class='label'>Other</div>
												</div>
										</a></li>
									</ul>
								</div>
							</div>
						</section>  -->



						<section class='site-content'>
    <h1 aria-hidden='true' class='offscreen'>Get a custom spirits recommendation</h1>
    <div id='question'>
        <div class='question'>
            <h1 class='secondary-headline question-text'>HOW ADVENTUROUS ARE YOU FEELING?</h1>
            <div class='progress step-3'></div>
            <ul class='choices'>
                <li><a class='choice' href='/recommend/step4?type=${param.type}&price=${param.price}&adventure=1'>
                    <div class='label-container'>
                        <div class='label'>Not very</div>
                    </div>
                </a></li>
                <li><a class='choice' href='/recommend/step4?type=${param.type}&price=${param.price}&adventure=2'>
                    <div class='label-container'>
                        <div class='label'>Mildly adventurous</div>
                    </div>
                </a></li>
                <li><a class='choice' href='/recommend/step4?type=${param.type}&price=${param.price}&adventure=3'>
                    <div class='label-container'>
                        <div class='label'>Pretty adventurous</div>
                    </div>
                </a></li>
                <li><a class='choice' href='/recommend/step4?type=${param.type}&price=${param.price}&adventure=4'>
                    <div class='label-container'>
                        <div class='label'>Off the charts</div>
                    </div>
                </a></li>
            </ul>
        </div>
    </div>
</section>







					</div>
				</main>
				
			</div>
		</div>
	</div>
	<script defer
		src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"
		integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ=="
		data-cf-beacon='{"rayId":"89dbbeaf7ec7f615","version":"2024.4.1","token":"0ee8b19124ad4a8ab1320cedb1148c5d"}'
		crossorigin="anonymous"></script>
</body>

</html>


<%@ include file="../footer.jsp"%>