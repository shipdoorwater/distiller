<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ include file="../Head.jsp"%>
<%
System.out.println("recommand_result.jsp 진입성공함.");
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

 <style>
        .recommendation-list {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        .recommendation {
            width: 30%;
            margin: 10px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .no-result {
            text-align: center;
            font-size: 1.2em;
            color: #666;
        }
    </style>

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
			<<!-- div class='content-container'>
		
				<div aria-live='assertive' class='flash-message-alert' role='alert'></div>
				<main aria-hidden='false' class='main-container' id='main-content'
					tabIndex='-1'>
					<div class='scroller'>
						<div class='recommendations js-carousel'
							data-carousel-title='Recommendation' data-max-items='3'
							data-pagination='true'>
							<div class='center-column'>
								<div class='recommendations-container list-container carousel'>
									<ul data-behavior='carousel-slides'>
										<li class='recommendation-list-item bottle whiskey-content'>
											<a href='/spirits/glengoyne-21-year'>
												<div aria-label='Glengoyne 21 Year Bottle' class='thumbnail'
													role='img'
													style='background-image: url(https://ip-distiller.imgix.net/images/spirits/2df9c790-d1a2-0132-6b42-12eb1333ebc5/glengoyne-21_original.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)'></div>
										</a>
											<div class='details'>
												<a href='/spirits/glengoyne-21-year'>
													<h3 class='mini-headline name' data-behavior='truncatable'>Glengoyne
														21 Year</h3>
												</a>
												<h4 class='tertiary-headline distiller-score'>
													<span class='offscreen'>Distiller Score</span> 90
												</h4>
												<div class='notes-container'>
													<p data-behavior='truncatable'>The initial impressions
														are those of a classic sherry-cask-aged whisky, with
														plenty of fruits, like red dried plums in this instance,
														and toasted barley. As it reaches your palate, it feels
														very smooth and has no prickly, burning effect. The aromas
														are very well integrated, leaving an overall seamless
														experience. This Glengoyne is mostly fruity, floral and
														gently spicy. The finish could have been longer, but at
														the end of the day, this is a very successful whisky.</p>
												</div>
												<div class='expert-review-container'>
													<a class='image-wrap' href='/tasting_table#expert_11'
														itemprop='author'>
														<div aria-label='Julien Le Doaré Profile'
															class='reviewer-thumbnail' role='img'
															style='background-image: url(https://ip-distiller.imgix.net/images/experts/000/000/011/original.jpg)'></div>
													</a>
													<div class='reviewed-by-container'>
														<h5 class='ultra-mini-headline'>
															Reviewed by <a class='accented reviewers-table-link'
																href='/tasting_table#expert_11' itemprop='author'>
																Julien Le Doaré </a>
														</h5>
													</div>
												</div>
											</div>
										</li>
										<li class='recommendation-list-item bottle whiskey-content'>
											<a href='/spirits/johnnie-walker-platinum'>
												<div aria-label='Johnnie Walker Platinum Bottle'
													class='thumbnail' role='img'
													style='background-image: url(https://ip-distiller.imgix.net/images/spirits/461ae4bc-b76f-4d67-aceb-2ec604be4e47/johnnie_walker_platinum_original.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)'></div>
										</a>
											<div class='details'>
												<a href='/spirits/johnnie-walker-platinum'>
													<h3 class='mini-headline name' data-behavior='truncatable'>Johnnie
														Walker Platinum</h3>
												</a>
												<h4 class='tertiary-headline distiller-score'>
													<span class='offscreen'>Distiller Score</span> 94
												</h4>
												<div class='notes-container'>
													<p data-behavior='truncatable'>The whisky is
														fashionably late to show up, but what an impression it
														makes when it finally does. There&#39;s not much on the
														nose, initially, except raisins and a wisp of smoke. You
														taste it and the whisky is still playing coy, and then
														BAM! The flavors completely flood your palate. Dried
														fruits, nuts, cereal, dark chocolate, dark honey, violets,
														dried herbs--the list seems endless. The pleasant
														aftertaste lingers with lightly charred smoke and fruity
														sherry notes.</p>
												</div>
												<div class='expert-review-container'>
													<a class='image-wrap' href='/tasting_table#expert_1'
														itemprop='author'>
														<div aria-label='Stephanie Moreno Profile'
															class='reviewer-thumbnail' role='img'
															style='background-image: url(https://ip-distiller.imgix.net/images/experts/000/000/001/original.jpg)'></div>
													</a>
													<div class='reviewed-by-container'>
														<h5 class='ultra-mini-headline'>
															Reviewed by <a class='accented reviewers-table-link'
																href='/tasting_table#expert_1' itemprop='author'>
																Stephanie Moreno </a>
														</h5>
													</div>
												</div>
											</div>
										</li>
										<li class='recommendation-list-item bottle whiskey-content'>
											<a href='/spirits/johnnie-walker-18-year'>
												<div aria-label='Johnnie Walker 18 Year Bottle'
													class='thumbnail' role='img'
													style='background-image: url(https://ip-distiller.imgix.net/images/spirits/162951f0-ecac-0134-15d6-5e2a004e4bca/johnnie_walker_18_year_original.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)'></div>
										</a>
											<div class='details'>
												<a href='/spirits/johnnie-walker-18-year'>
													<h3 class='mini-headline name' data-behavior='truncatable'>Johnnie
														Walker 18 Year</h3>
												</a>
												<h4 class='tertiary-headline distiller-score'>
													<span class='offscreen'>Distiller Score</span> 94
												</h4>
												<div class='notes-container'>
													<p data-behavior='truncatable'>The whisky is
														fashionably late to show up, but what an impression it
														makes when it finally does. There&#39;s not much on the
														nose, initially, except raisins and a wisp of smoke. You
														taste it and the whisky is still playing coy, and then
														BAM! The flavors completely flood your palate. Dried
														fruits, nuts, cereal, dark chocolate, dark honey, violets,
														dried herbs--the list seems endless. The pleasant
														aftertaste lingers with lightly charred smoke and fruity
														sherry notes.</p>
												</div>
												<div class='expert-review-container'>
													<a class='image-wrap' href='/tasting_table#expert_1'
														itemprop='author'>
														<div aria-label='Stephanie Moreno Profile'
															class='reviewer-thumbnail' role='img'
															style='background-image: url(https://ip-distiller.imgix.net/images/experts/000/000/001/original.jpg)'></div>
													</a>
													<div class='reviewed-by-container'>
														<h5 class='ultra-mini-headline'>
															Reviewed by <a class='accented reviewers-table-link'
																href='/tasting_table#expert_1' itemprop='author'>
																Stephanie Moreno </a>
														</h5>
													</div>
												</div>
											</div>
										</li>
										<li class='recommendation-list-item bottle whiskey-content'>
											<a href='/spirits/glenmorangie-18'>
												<div aria-label='Glenmorangie 18 Year Bottle'
													class='thumbnail' role='img'
													style='background-image: url(https://ip-distiller.imgix.net/images/spirits/25c5b550-594b-0131-f813-4ee0f0391393/glenmorangie_18_original.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)'></div>
										</a>
											<div class='details'>
												<a href='/spirits/glenmorangie-18'>
													<h3 class='mini-headline name' data-behavior='truncatable'>Glenmorangie
														18 Year</h3>
												</a>
												<h4 class='tertiary-headline distiller-score'>
													<span class='offscreen'>Distiller Score</span> 93
												</h4>
												<div class='notes-container'>
													<p data-behavior='truncatable'>Desserts galore come to
														mind with this whisky. The aroma is bursting of fresh
														lemon hand pies with the taste profile moving towards
														cherry pie with a rich, buttery crust. As you continue
														down the dessert list, crème brûlée with its just torched
														sugar crust is paired with a cinnamon honey and citrus hot
														toddy. Even with all of these sweet, heavy descriptors,
														there is a zing to this whisky that keeps it fresh and
														alive.</p>
												</div>
												<div class='expert-review-container'>
													<a class='image-wrap' href='/tasting_table#expert_1'
														itemprop='author'>
														<div aria-label='Stephanie Moreno Profile'
															class='reviewer-thumbnail' role='img'
															style='background-image: url(https://ip-distiller.imgix.net/images/experts/000/000/001/original.jpg)'></div>
													</a>
													<div class='reviewed-by-container'>
														<h5 class='ultra-mini-headline'>
															Reviewed by <a class='accented reviewers-table-link'
																href='/tasting_table#expert_1' itemprop='author'>
																Stephanie Moreno </a>
														</h5>
													</div>
												</div>
											</div>
										</li>
										<li class='recommendation-list-item bottle whiskey-content'>
											<a href='/spirits/compass-box-hedonism'>
												<div aria-label='Compass Box Hedonism Bottle'
													class='thumbnail' role='img'
													style='background-image: url(https://ip-distiller.imgix.net/images/spirits/bcc2521f-d4dc-49a5-a9bf-ec94ba2faa14/compass_box_headonism_blended_grain_scotch_whisky_new_bottle_original.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)'></div>
										</a>
											<div class='details'>
												<a href='/spirits/compass-box-hedonism'>
													<h3 class='mini-headline name' data-behavior='truncatable'>Compass
														Box Hedonism</h3>
												</a>
												<h4 class='tertiary-headline distiller-score'>
													<span class='offscreen'>Distiller Score</span> 97
												</h4>
												<div class='notes-container'>
													<p data-behavior='truncatable'>Having aged in only 1st
														fill ex-Bourbon barrels, the whisky definitely shows
														aromas from the wood such as coconut cream and vanilla,
														but there are more layers to explore. The creaminess of
														the whisky is very sensual and as it sits in your mouth
														baking spices are revealed. The name &quot;Hedonism&quot;
														suits this whisky just fine.</p>
												</div>
												<div class='expert-review-container'>
													<a class='image-wrap' href='/tasting_table#expert_1'
														itemprop='author'>
														<div aria-label='Stephanie Moreno Profile'
															class='reviewer-thumbnail' role='img'
															style='background-image: url(https://ip-distiller.imgix.net/images/experts/000/000/001/original.jpg)'></div>
													</a>
													<div class='reviewed-by-container'>
														<h5 class='ultra-mini-headline'>
															Reviewed by <a class='accented reviewers-table-link'
																href='/tasting_table#expert_1' itemprop='author'>
																Stephanie Moreno </a>
														</h5>
													</div>
												</div>
											</div>
										</li>
										<li class='recommendation-list-item bottle whiskey-content'>
											<a
											href='/spirits/edradour-straight-from-the-cask-port-finish-12-year'>
												<div
													aria-label='Edradour Straight From The Cask Port Wood Finish 12 Year Bottle'
													class='thumbnail' role='img'
													style='background-image: url(https://ip-distiller.imgix.net/images/spirits/695743a0-8bb2-0132-ad03-3e18f3efae4e/edradour-straight-from-the-cask-port-wood-finish-12-year_original.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)'></div>
										</a>
											<div class='details'>
												<a
													href='/spirits/edradour-straight-from-the-cask-port-finish-12-year'>
													<h3 class='mini-headline name' data-behavior='truncatable'>Edradour
														Straight From The Cask Port Wood Finish 12 Year</h3>
												</a>
												<h4 class='tertiary-headline distiller-score'>
													<span class='offscreen'>Distiller Score</span> 95
												</h4>
												<div class='notes-container'>
													<p data-behavior='truncatable'>At cask strength it is
														slow to open but rounds out beautifully after about 10
														minutes. Take time to savor the quality and richness of
														this distillation. A robust aroma of marzipan and baked
														dark fruits leads to a rich and oily palate with a touch
														of cocoa and coffee. The fruity finish is lengthy with
														just a touch of pepper.</p>
												</div>
												<div class='expert-review-container'>
													<a class='image-wrap' href='/tasting_table#expert_7'
														itemprop='author'>
														<div aria-label='Brock Schulte Profile'
															class='reviewer-thumbnail' role='img'
															style='background-image: url(https://ip-distiller.imgix.net/images/experts/000/000/007/original.jpg)'></div>
													</a>
													<div class='reviewed-by-container'>
														<h5 class='ultra-mini-headline'>
															Reviewed by <a class='accented reviewers-table-link'
																href='/tasting_table#expert_7' itemprop='author'>
																Brock Schulte </a>
														</h5>
													</div>
												</div>
											</div>
										</li>
										<li class='recommendation-list-item bottle whiskey-content'>
											<a href='/spirits/glenmorangie-duthac'>
												<div aria-label='Glenmorangie Duthac Bottle'
													class='thumbnail' role='img'
													style='background-image: url(https://ip-distiller.imgix.net/images/spirits/4f24b140-9a04-0133-7dde-76435b5b6a3a/glenmorangie_duthac_original.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)'></div>
										</a>
											<div class='details'>
												<a href='/spirits/glenmorangie-duthac'>
													<h3 class='mini-headline name' data-behavior='truncatable'>Glenmorangie
														Duthac</h3>
												</a>
												<h4 class='tertiary-headline distiller-score'>
													<span class='offscreen'>Distiller Score</span> 91
												</h4>
												<div class='notes-container'>
													<p data-behavior='truncatable'>The aroma is big and
														bold with a nose dominated by pear, toffee, candied nuts,
														and baking spices--very much a dessert dram. The palate
														follows suit with milk chocolate, nuts, cloves, and
														butterscotch. The finish brings raisins, leather, and
														orange peel.</p>
												</div>
												<div class='expert-review-container'>
													<a class='image-wrap' href='/tasting_table#expert_10'
														itemprop='author'>
														<div aria-label='Keith Allison Profile'
															class='reviewer-thumbnail' role='img'
															style='background-image: url(https://ip-distiller.imgix.net/images/experts/000/000/010/original.jpg)'></div>
													</a>
													<div class='reviewed-by-container'>
														<h5 class='ultra-mini-headline'>
															Reviewed by <a class='accented reviewers-table-link'
																href='/tasting_table#expert_10' itemprop='author'>
																Keith Allison </a>
														</h5>
													</div>
												</div>
											</div>
										</li>
										<li class='recommendation-list-item bottle whiskey-content'>
											<a href='/spirits/glenfiddich-18'>
												<div aria-label='Glenfiddich 18 Year Bottle'
													class='thumbnail' role='img'
													style='background-image: url(https://ip-distiller.imgix.net/images/spirits/241d3ea5-588c-4d5d-bbdc-f89517554599/glenfiddich_18_original.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)'></div>
										</a>
											<div class='details'>
												<a href='/spirits/glenfiddich-18'>
													<h3 class='mini-headline name' data-behavior='truncatable'>Glenfiddich
														18 Year</h3>
												</a>
												<h4 class='tertiary-headline distiller-score'>
													<span class='offscreen'>Distiller Score</span> 90
												</h4>
												<div class='notes-container'>
													<p data-behavior='truncatable'>If ever there was a
														whisky that brings to mind &quot;liquid fruitcake&quot;,
														this is it. The dried candied fruits, ginger, vanilla,
														baking spices and toffee just screams
														&quot;fruitcake&quot; from the top of the highest
														mountain. In fact, if you happen to get one for the
														holidays, do yourself and family a favor and pour a glass
														or two on top of the cake for a lovely treat.</p>
												</div>
												<div class='expert-review-container'>
													<a class='image-wrap' href='/tasting_table#expert_1'
														itemprop='author'>
														<div aria-label='Stephanie Moreno Profile'
															class='reviewer-thumbnail' role='img'
															style='background-image: url(https://ip-distiller.imgix.net/images/experts/000/000/001/original.jpg)'></div>
													</a>
													<div class='reviewed-by-container'>
														<h5 class='ultra-mini-headline'>
															Reviewed by <a class='accented reviewers-table-link'
																href='/tasting_table#expert_1' itemprop='author'>
																Stephanie Moreno </a>
														</h5>
													</div>
												</div>
											</div>
										</li>
										<li class='recommendation-list-item bottle whiskey-content'>
											<a href='/spirits/aberlour-16-year-old'>
												<div
													aria-label='Aberlour 16 Year Double Cask Matured Bottle'
													class='thumbnail' role='img'
													style='background-image: url(https://ip-distiller.imgix.net/images/spirits/5d9e3d30-27e9-0132-e3d8-06a717c603f0/aberlour_16_original.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)'></div>
										</a>
											<div class='details'>
												<a href='/spirits/aberlour-16-year-old'>
													<h3 class='mini-headline name' data-behavior='truncatable'>Aberlour
														16 Year Double Cask Matured</h3>
												</a>
												<h4 class='tertiary-headline distiller-score'>
													<span class='offscreen'>Distiller Score</span> 90
												</h4>
												<div class='notes-container'>
													<p data-behavior='truncatable'>The aromas pour forth
														with a rich and creamy nose of sweet juicy raisins, bold
														spice, mild oak and a prominent nuttiness. The mouth
														speaks of balance between the two finishes, first of ripe
														plum and a delicate nuttiness, the second of vanilla,
														toasted oak and delicate baking spices. This whisky draws
														a seductively long finish of honey, spice, vanilla and
														dried dark fruits, which will keep you longing for another
														sip.</p>
												</div>
												<div class='expert-review-container'>
													<a class='image-wrap' href='/tasting_table#expert_12'
														itemprop='author'>
														<div aria-label='Ryan Conklin Profile'
															class='reviewer-thumbnail' role='img'
															style='background-image: url(https://ip-distiller.imgix.net/images/experts/000/000/012/original.jpg)'></div>
													</a>
													<div class='reviewed-by-container'>
														<h5 class='ultra-mini-headline'>
															Reviewed by <a class='accented reviewers-table-link'
																href='/tasting_table#expert_12' itemprop='author'>
																Ryan Conklin </a>
														</h5>
													</div>
												</div>
											</div>
										</li>
										<li class='recommendation-list-item bottle whiskey-content'>
											<a href='/spirits/the-macallan-edition-no-4'>
												<div aria-label='Macallan Edition No. 4 Bottle'
													class='thumbnail' role='img'
													style='background-image: url(https://ip-distiller.imgix.net/images/spirits/1f768910-6daa-0136-ee25-32fa6b7704e7/the_macallan_edition_4_original.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)'></div>
										</a>
											<div class='details'>
												<a href='/spirits/the-macallan-edition-no-4'>
													<h3 class='mini-headline name' data-behavior='truncatable'>Macallan
														Edition No. 4</h3>
												</a>
												<h4 class='tertiary-headline distiller-score'>
													<span class='offscreen'>Distiller Score</span> 90
												</h4>
												<div class='notes-container'>
													<p data-behavior='truncatable'>The Macallan Edition No.
														4&#39;s loaded sherry heritage is revealed instantly with
														walnuts and prunes, citrus peels, apple slices dripping
														with clover honey, and a dose of rancio funk on the nose.
														The palate is all rich, sweet sherry upfront, followed by
														orange zest, spicy oak, and milk chocolate. The finish is
														drier, with tingly black pepper, astringent oak, and dark
														chocolate, and finally more citrus, sherry, and fruit in
														the background. One big sherry bomb all the way through.</p>
												</div>
												<div class='expert-review-container'>
													<a class='image-wrap' href='/tasting_table#expert_20'
														itemprop='author'>
														<div aria-label='Jake Emen Profile'
															class='reviewer-thumbnail' role='img'
															style='background-image: url(https://ip-distiller.imgix.net/images/experts/000/000/020/original.jpg)'></div>
													</a>
													<div class='reviewed-by-container'>
														<h5 class='ultra-mini-headline'>
															Reviewed by <a class='accented reviewers-table-link'
																href='/tasting_table#expert_20' itemprop='author'>
																Jake Emen </a>
														</h5>
													</div>
												</div>
											</div>
										</li>
										<li class='recommendation-list-item bottle whiskey-content'>
											<a href='/spirits/the-glenrothes-1995'>
												<div aria-label='The Glenrothes 1995 Bottle'
													class='thumbnail' role='img'
													style='background-image: url(https://ip-distiller.imgix.net/images/spirits/4d09bbd0-42df-0131-9980-4a71e3d970ae/glenrothes-95_original.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)'></div>
										</a>
											<div class='details'>
												<a href='/spirits/the-glenrothes-1995'>
													<h3 class='mini-headline name' data-behavior='truncatable'>The
														Glenrothes 1995</h3>
												</a>
												<h4 class='tertiary-headline distiller-score'>
													<span class='offscreen'>Distiller Score</span> 91
												</h4>
												<div class='notes-container'>
													<p data-behavior='truncatable'>For those that like
														their whiskies on the sweet side, step right up. This is a
														creamy and rich whisky with notes of almond covered
														toffee. Ripe apple fruits covered with cinnamon syrup and
														hints of orange zest round out the flavor profile.</p>
												</div>
												<div class='expert-review-container'>
													<a class='image-wrap' href='/tasting_table#expert_1'
														itemprop='author'>
														<div aria-label='Stephanie Moreno Profile'
															class='reviewer-thumbnail' role='img'
															style='background-image: url(https://ip-distiller.imgix.net/images/experts/000/000/001/original.jpg)'></div>
													</a>
													<div class='reviewed-by-container'>
														<h5 class='ultra-mini-headline'>
															Reviewed by <a class='accented reviewers-table-link'
																href='/tasting_table#expert_1' itemprop='author'>
																Stephanie Moreno </a>
														</h5>
													</div>
												</div>
											</div>
										</li>
										<li class='recommendation-list-item bottle whiskey-content'>
											<a
											href='/spirits/laphroaig-cairdeas-feis-ile-2013-port-wood-edition'>
												<div
													aria-label='Laphroaig Cairdeas 2013 Port Wood Edition Bottle'
													class='thumbnail' role='img'
													style='background-image: url(https://ip-distiller.imgix.net/images/spirits/1fd8a827-344b-468a-a04c-6641296491e9/laphroaig_cairdeas_port_wood_edition_2013_original.jpg?w=640&amp;h=280&amp;mark-w=70&amp;mark-h=70&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)'></div>
										</a>
											<div class='details'>
												<a
													href='/spirits/laphroaig-cairdeas-feis-ile-2013-port-wood-edition'>
													<h3 class='mini-headline name' data-behavior='truncatable'>Laphroaig
														Cairdeas 2013 Port Wood Edition</h3>
												</a>
												<h4 class='tertiary-headline distiller-score'>
													<span class='offscreen'>Distiller Score</span> 97
												</h4>
												<div class='notes-container'>
													<p data-behavior='truncatable'>The whisky begins with a
														jammy plum nose and hints of black currant and spice
														reminiscent of clove infused iodine. On the palate, savory
														pepper and peat. At 102.6 proof, the rich flavored ethanol
														sticks to your lips and burns ever so good. A
														crescendo-like smoky cigar box finish is firm and
														luxurious.</p>
												</div>
												<div class='expert-review-container'>
													<a class='image-wrap' href='/tasting_table#expert_7'
														itemprop='author'>
														<div aria-label='Brock Schulte Profile'
															class='reviewer-thumbnail' role='img'
															style='background-image: url(https://ip-distiller.imgix.net/images/experts/000/000/007/original.jpg)'></div>
													</a>
													<div class='reviewed-by-container'>
														<h5 class='ultra-mini-headline'>
															Reviewed by <a class='accented reviewers-table-link'
																href='/tasting_table#expert_7' itemprop='author'>
																Brock Schulte </a>
														</h5>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
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
										value="WfO6iujRuNDBaihJmyoAfn/ObsTkDWeyPkvzCZX/QbZN9M7hVIpqOfrxTiyas8qYVfJ7zZYl0CLt/jZKiRcaew==" />
									<div data-behavior='message'></div>
									<input placeholder="Your Email" aria-labelledby="sign_up_label"
										required="required" autocomplete="email"
										oninvalid="this.setCustomValidity(&quot;Email is either empty or invalid!&quot;)"
										oninput="this.setCustomValidity(&quot;&quot;)" type="email"
										name="email_signup[email]" /> <input type="hidden"
										name="newsletter_recaptcha_token"
										id="newsletter_recaptcha_token" value=""
										class="js-newsletter-recaptcha-token-field" />
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
									href="/cdn-cgi/l/email-protection#0d65686161624d69647e79646161687f236e6260">Contact
										Us</a></li>
								<li><a
									href="/cdn-cgi/l/email-protection#a2d2c3d0d6ccc7d0d1e2c6cbd1d6cbcecec7d08cc1cdcf">Advertise</a></li>
								<li><a href="/pages/submitting-for-review">Submit For
										Review</a></li>
								<li><a href="/jobs">Jobs</a></li>
								<li><a href="/faq">Frequently Asked Questions</a></li>
							</ul>
						</div>

						<div class='fixed-mobile-footer'></div>
					</div>
				</main>
				

			</div> -->
			
			
			 <h1>Your Drink Recommendations</h1>
    
    <c:choose>
        <c:when test="${empty recommendations}">
            <p class="no-result">We apologize, but there are no results matching your criteria at this time.</p>
        </c:when>
        <c:otherwise>
            <div class="recommendation-list">
                <c:forEach items="${recommendations}" var="drink">
                    <div class="recommendation">
                    	<div class="drink-image"><img src = '${pageContext.request.contextPath}/assets/images/${drink.photo}' style="width: 300px; height: 300px; overflow: hidden;"></div>
                    	<p>${drink.drinkName}</p>
                        <p>Type: ${drink.type}</p>
                        <p>Price: $${drink.price}</p>
                        <p>ABV: ${drink.abv}%</p>
                        <p>Review Count: ${drink.reviewCount}</p>
                    </div>
                </c:forEach>
            </div>
        </c:otherwise>
    </c:choose>
			
			
		</div>
	</div>
	<script defer
		src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"
		integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ=="
		data-cf-beacon='{"rayId":"89dd2f19eb05f6b5","version":"2024.4.1","token":"0ee8b19124ad4a8ab1320cedb1148c5d"}'
		crossorigin="anonymous"></script>
</body>



</html>


<%@ include file="../footer.jsp"%>