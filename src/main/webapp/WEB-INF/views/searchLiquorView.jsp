<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="Head.jsp"%>


<main aria-hidden="false" class="main-container" id="main-content"
	tabindex="-1">
	<div class="scroller">
		<div class="search-page-container">
			<h1 class="offscreen">Search For Spirits</h1>
			<div class="spirit-family-select js-spirit-family-select">
				<div class="center-column">
					<ul class="spirit-family-select__options">
						<li class="spirit-family-select__option">
							<button
								class="spirit-family-select__button js-select-spirit-family all selected">
								<span class="spirit-family-select__label ultra-mini-headline">
									All Spirits <i aria-hidden="true"
									class="fa fa-chevron-down spirit-family-select__chevron"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option whiskey">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="whiskey">
								<span class="spirit-family-select__label ultra-mini-headline">
									Whiskey <i
									class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option agave">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="agave">
								<span class="spirit-family-select__label ultra-mini-headline">
									Tequila/Mezcal <i
									class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option sugarcane">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="sugarcane">
								<span class="spirit-family-select__label ultra-mini-headline">
									Rum <i class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option brandy">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="brandy">
								<span class="spirit-family-select__label ultra-mini-headline">
									Brandy <i
									class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option gin">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="gin">
								<span class="spirit-family-select__label ultra-mini-headline">
									Gin <i class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option vodka">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="vodka">
								<span class="spirit-family-select__label ultra-mini-headline">
									Vodka <i
									class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option liqueur">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="liqueur">
								<span class="spirit-family-select__label ultra-mini-headline">
									Liqueurs/Bitters <i
									class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
						<li class="spirit-family-select__option other">
							<button
								class="spirit-family-select__button js-select-spirit-family"
								data-value="other">
								<span class="spirit-family-select__label ultra-mini-headline">
									Other <i
									class="fa fa-chevron-down spirit-family-select__chevron"
									aria-hidden="true"></i>
								</span>
							</button>
						</li>
					</ul>
				</div>
			</div>

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

			<div class="filter-container">
				<div class="spirit-filters">
					<div class="filter-bar">
						<div class="center-column">
							<div class="filter-banner">
								<h6 class="filter-show" role="none">
									<button class="show js-class-changer" data-add-class="show"
										data-target=".spirit-filters__modal-filters">
										Filtering By <i class="fa fa-chevron-down" aria-hidden="true"></i>
									</button>
								</h6>
								<form class="spirit-filters__sort js-query-form"
									data-autosubmit="true" data-clearable="page">
									<label class="spirit-filters__sort-label" name="sort">Sort
										By</label> <select aria-label="Sort By"
										class="spirit-filters__sort-field" name="sort">
										<option selected="selected" value="distiller_score">
											Distiller Score</option>
										<option value="total_num_of_ratings">Popularity</option>
										<option value="community_rating">Community Rating</option>
										<option value="name">Alphabetical</option>
									</select>
								</form>
							</div>
							<div class="filter-form-container">
								<div class="spirit-filters__modal-filters">
									<div class="modal-window">
										<button aria-label="Close"
											class="close hide-filters js-class-changer"
											data-remove-class="show"
											data-target=".spirit-filters__modal-filters">
											<i class="icomoon-x"></i>
										</button>
										<form class="filter js-query-form" data-clearable="page">
											<h5 aria-level="2" class="filter-label" role="heading">Filter
												By</h5>
											<select data-placeholder="All Styles" name="spirit_style_id">
												<option value="">All Styles</option>
												<option value="143">Absinthe</option>
												<option value="59">Aged Rum</option>
												<option value="68">Aguardiente</option>
												<option value="139">Amaro</option>
												<option value="54">American Brandy</option>
												<option value="33">American Single Malt</option>
												<option value="132">Anise Liqueurs</option>
												<option value="145">Aquavit</option>
												<option value="53">Arak</option>
												<option value="127">Armagnac</option>
												<option value="89">Bacanora</option>
												<option value="144">Baijiu</option>
												<option value="107">Barrel-Aged Gin</option>
												<option value="124">Barrel-Aged Vodka</option>
												<option value="140">Bitter Liqueurs</option>
												<option value="97">Blanche Armagnac</option>
												<option value="2">Blended</option>
												<option value="34">Blended American Whiskey</option>
												<option value="15">Blended Grain</option>
												<option value="3">Blended Malt</option>
												<option value="151">Botanical Spirit</option>
												<option value="11">Bourbon</option>
												<option value="63">Cachaça</option>
												<option value="128">Calvados</option>
												<option value="30">Canadian</option>
												<option value="150">Chocolate Liqueurs</option>
												<option value="137">Coffee Liqueurs</option>
												<option value="126">Cognac</option>
												<option value="119">Compound Gin</option>
												<option value="23">Corn</option>
												<option value="136">Dairy/Egg Liqueurs</option>
												<option value="58">Dark Rum</option>
												<option value="120">Distilled Gin</option>
												<option value="52">Eau-de-Vie</option>
												<option value="157">Flavored Brandy</option>
												<option value="118">Flavored Gin</option>
												<option value="62">Flavored Rum</option>
												<option value="152">Flavored Tequila</option>
												<option value="104">Flavored Vodka</option>
												<option value="101">Flavored Whiskey</option>
												<option value="135">Floral Liqueurs</option>
												<option value="156">Fortified Wine</option>
												<option value="116">Fruit Genever</option>
												<option value="129">Fruit Liqueurs</option>
												<option value="125">Genever</option>
												<option value="121">Genever-Style</option>
												<option value="158">Gift Sets</option>
												<option value="111">Gin de Mahón</option>
												<option value="57">Gold Rum</option>
												<option value="49">Grappa/Marc</option>
												<option value="134">Herbal/Spice Liqueurs</option>
												<option value="105">London Dry Gin</option>
												<option value="78">Mezcal Añejo</option>
												<option value="79">Mezcal Extra Añejo</option>
												<option value="77">Mezcal Gold</option>
												<option value="75">Mezcal Joven</option>
												<option value="76">Mezcal Reposado</option>
												<option value="108">Modern Gin</option>
												<option value="106">Navy-Strength Gin</option>
												<option value="61">Navy Rum</option>
												<option value="141">Non-Potable Bitters</option>
												<option value="138">Nut Liqueurs</option>
												<option value="110">Old Tom Gin</option>
												<option value="95">Other Agave</option>
												<option value="154">Other Aromatized Wine</option>
												<option value="55">Other Brandy</option>
												<option value="142">Other Liqueurs</option>
												<option value="147">Other Spirits</option>
												<option value="69">Other Sugarcane</option>
												<option value="96">Other Whiskey</option>
												<option value="47">Pisco</option>
												<option value="109">Plymouth Gin</option>
												<option value="155">Poitín</option>
												<option value="85">Raicilla</option>
												<option value="148">Ready to Drink</option>
												<option value="65">Rhum Agricole Blanc</option>
												<option value="66">Rhum Agricole Éléve Sous Bois</option>
												<option value="67">Rhum Agricole Vieux</option>
												<option value="10">Rye</option>
												<option value="146">Shochu/Soju</option>
												<option value="56">Silver Rum</option>
												<option value="14">Single Grain</option>
												<option value="1">Single Malt</option>
												<option value="26">Single Pot Still</option>
												<option value="130">Sloe Gin &amp; Variants</option>
												<option value="92">Sotol</option>
												<option value="51">Spanish</option>
												<option value="60">Spiced Rum</option>
												<option value="16">Spirit</option>
												<option value="21">Tennessee Whiskey</option>
												<option value="73">Tequila Añejo</option>
												<option value="70">Tequila Blanco</option>
												<option value="74">Tequila Extra Añejo</option>
												<option value="72">Tequila Joven</option>
												<option value="82">Tequila Mixto</option>
												<option value="71">Tequila Reposado</option>
												<option value="131">Triple Sec/Curaçao</option>
												<option value="123">Unflavored Vodka</option>
												<option value="153">Vermouth</option>
												<option value="32">Wheat Whiskey</option>
												<option value="22">White</option>
												<option value="149">Zero Proof</option>
											</select> <select data-placeholder="All Sub Categories"
												name="spirit_category_id">
												<option value="">All Sub Categories</option>
												<option value="38">Absinthe</option>
												<option value="29">Anise Liqueurs</option>
												<option value="40">Aquavit</option>
												<option value="7">Armagnac</option>
												<option value="44">Aromatized Wine</option>
												<option value="20">Bacanora</option>
												<option value="39">Baijiu</option>
												<option value="36">Bitter Liqueurs</option>
												<option value="2">Blended</option>
												<option value="3">Bourbon</option>
												<option value="13">Cachaça</option>
												<option value="8">Calvados</option>
												<option value="34">Coffee/Chocolate Liqueurs</option>
												<option value="6">Cognac</option>
												<option value="33">Dairy/Egg Liqueurs</option>
												<option value="27">Flavored Gin</option>
												<option value="24">Flavored Vodka</option>
												<option value="32">Floral Liqueurs</option>
												<option value="28">Fruit Liqueurs</option>
												<option value="26">Genever</option>
												<option value="25">Gin</option>
												<option value="10">Grappa/Marc</option>
												<option value="31">Herbal/Spice Liqueurs</option>
												<option value="17">Mezcal</option>
												<option value="35">Nut Liqueurs</option>
												<option value="5">Other</option>
												<option value="22">Other Agave</option>
												<option value="11">Other Brandy</option>
												<option value="37">Other Liqueurs</option>
												<option value="42">Other Spirits</option>
												<option value="15">Other Sugarcane</option>
												<option value="9">Pisco</option>
												<option value="19">Raicilla</option>
												<option value="14">Rhum Agricole</option>
												<option value="12">Rum</option>
												<option value="4">Rye</option>
												<option value="41">Shochu/Soju</option>
												<option value="1">Single Malt</option>
												<option value="21">Sotol</option>
												<option value="16">Tequila</option>
												<option value="18">Tequila Mixto</option>
												<option value="23">Unflavored Vodka</option>
											</select> <select data-placeholder="All Countries" name="country_id">
												<option value="">All Countries</option>
												<option value="122">Albania</option>
												<option value="123">Algeria</option>
												<option value="125">Angola</option>
												<option value="17">Anguilla</option>
												<option value="18">Antigua</option>
												<option value="101">Argentina</option>
												<option value="99">Armenia</option>
												<option value="7">Australia</option>
												<option value="20">Austria</option>
												<option value="126">Azerbaijan</option>
												<option value="70">Bahamas</option>
												<option value="57">Barbados</option>
												<option value="108">Belarus</option>
												<option value="13">Belgium</option>
												<option value="90">Belize</option>
												<option value="22">Bermuda</option>
												<option value="55">Bhutan</option>
												<option value="56">Bolivia</option>
												<option value="130">Bosnia Herzegovina</option>
												<option value="23">Brazil</option>
												<option value="24">British Virgin Islands</option>
												<option value="133">Bulgaria</option>
												<option value="136">Cambodia</option>
												<option value="137">Cameroon</option>
												<option value="4">Canada</option>
												<option value="138">Cape Verde</option>
												<option value="98">Cayman Islands</option>
												<option value="365">Channel Islands</option>
												<option value="52">Chile</option>
												<option value="116">China</option>
												<option value="25">Colombia</option>
												<option value="142">Congo</option>
												<option value="26">Costa Rica</option>
												<option value="85">Croatia</option>
												<option value="27">Cuba</option>
												<option value="143">Cyprus</option>
												<option value="93">Czech Republic</option>
												<option value="61">Denmark</option>
												<option value="144">Djibouti</option>
												<option value="145">Dominica</option>
												<option value="28">Dominican Republic</option>
												<option value="29">Ecuador</option>
												<option value="147">Egypt</option>
												<option value="91">El Salvador</option>
												<option value="12">England</option>
												<option value="109">Estonia</option>
												<option value="81">Fiji</option>
												<option value="96">Finland</option>
												<option value="8">France</option>
												<option value="112">Georgia</option>
												<option value="60">Germany</option>
												<option value="153">Ghana</option>
												<option value="100">Greece</option>
												<option value="30">Grenada</option>
												<option value="31">Guadeloupe</option>
												<option value="73">Guatemala</option>
												<option value="362">Guernsey</option>
												<option value="33">Guyana</option>
												<option value="34">Haiti</option>
												<option value="105">Honduras</option>
												<option value="156">Hungary</option>
												<option value="86">Iceland</option>
												<option value="6">India</option>
												<option value="120">Indonesia</option>
												<option value="157">Iran</option>
												<option value="158">Iraq</option>
												<option value="5">Ireland</option>
												<option value="118">Israel</option>
												<option value="51">Italy</option>
												<option value="35">Jamaica</option>
												<option value="2">Japan</option>
												<option value="160">Jordan</option>
												<option value="161">Kazakhstan</option>
												<option value="162">Kenya</option>
												<option value="164">Kosovo</option>
												<option value="166">Kyrgyzstan</option>
												<option value="113">Latvia</option>
												<option value="88">Lebanon</option>
												<option value="171">Liechtenstein</option>
												<option value="110">Lithuania</option>
												<option value="95">Luxembourg</option>
												<option value="172">Macedonia</option>
												<option value="173">Madagascar</option>
												<option value="174">Malawi</option>
												<option value="175">Malaysia</option>
												<option value="178">Malta</option>
												<option value="59">Marie-Galante</option>
												<option value="36">Martinique</option>
												<option value="180">Mauritania</option>
												<option value="37">Mauritius</option>
												<option value="38">Mexico</option>
												<option value="114">Moldova</option>
												<option value="182">Monaco</option>
												<option value="183">Mongolia</option>
												<option value="184">Montenegro</option>
												<option value="58">Multiple Countries</option>
												<option value="187">Myanmar</option>
												<option value="188">Namibia</option>
												<option value="97">Nepal</option>
												<option value="54">Netherlands</option>
												<option value="102">Netherlands Antilles</option>
												<option value="63">New Zealand</option>
												<option value="39">Nicaragua</option>
												<option value="192">North Korea</option>
												<option value="111">Norway</option>
												<option value="40">Panama</option>
												<option value="41">Paraguay</option>
												<option value="42">Peru</option>
												<option value="43">Philippines</option>
												<option value="103">Poland</option>
												<option value="44">Portugal</option>
												<option value="45">Puerto Rico</option>
												<option value="92">Réunion Island</option>
												<option value="117">Romania</option>
												<option value="107">Russia</option>
												<option value="89">Saint Kitts</option>
												<option value="46">Saint Lucia</option>
												<option value="200">San Marino</option>
												<option value="1">Scotland</option>
												<option value="203">Senegal</option>
												<option value="204">Serbia</option>
												<option value="205">Seychelles</option>
												<option value="207">Singapore</option>
												<option value="115">Slovak Republic</option>
												<option value="208">Slovenia</option>
												<option value="62">South Africa</option>
												<option value="119">South Korea</option>
												<option value="14">Spain</option>
												<option value="212">Sri Lanka</option>
												<option value="94">St. Vincent &amp; The Grenadines
												</option>
												<option value="104">Suriname</option>
												<option value="10">Sweden</option>
												<option value="16">Switzerland</option>
												<option value="215">Syria</option>
												<option value="9">Taiwan</option>
												<option value="217">Tanzania</option>
												<option value="47">Thailand</option>
												<option value="234">Trinidad</option>
												<option value="48">Trinidad &amp; Tobago</option>
												<option value="87">Turkey</option>
												<option value="221">Turkmenistan</option>
												<option value="223">Uganda</option>
												<option value="106">Ukraine</option>
												<option value="226">Uruguay</option>
												<option value="49">US Virgin Islands</option>
												<option value="3">USA</option>
												<option value="227">Uzbekistan</option>
												<option value="50">Venezuela</option>
												<option value="230">Vietnam</option>
												<option value="11">Wales</option>
												<option value="233">Zimbabwe</option>
											</select> <select data-placeholder="Any Price" name="cost_bracket">
												<option value="">Any Price</option>
												<option value="lowest">$ (&lt; 25)</option>
												<option value="low">$$ (26-50)</option>
												<option value="middle">$$$ (51-80)</option>
												<option value="high">$$$$ (81-150)</option>
												<option value="highest">$$$$$ (151+)</option>
											</select> <select data-placeholder="All Content"
												name="official_status">
												<option value="">All Content</option>
												<option value="official">Official Content</option>
												<option value="unofficial">User Content</option>
											</select> <input type="submit" name="commit" value="View Results"
												class="button muted" data-disable-with="View Results">
											<h6 class="filter-clear" role="none">
												<button class="js-clear-query-form">
													<span class="filter-clear__x"> X &nbsp; </span> Clear All
												</button>
											</h6>

										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="center-column">
				<div class="results-container">
					<div class="spirit-filtered-results">
						<ol class="spirits">
							<li class="spirit gin-content"><a
								href="/spirits/monkey-47-schwarzwald-dry-gin">
									<div class="desktop">
										<div class="secondary-headline ratings">
											<div class="plain-content">
												<div class="distiller-score">99</div>
											</div>
											<div class="community-rating">
												4.59 <i aria-hidden="true" class="icomoon-review-star star"></i>
											</div>
										</div>
									</div>
									<div class="image"
										style="background-image: url(https://ip-distiller.imgix.net/images/spirits/22c95ea0-6baf-0134-c69b-5ab98231182e/monkey_47_schwarzwald_dry_gin_original.jpg?w=120&amp;h=120&amp;mark-w=35&amp;mark-h=35&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
									<div class="details">
										<h5 aria-level="2" class="name-content" role="heading">
											<div class="name">Monkey 47 Dry Gin</div>
										</h5>
										<p class="origin">
											<span class="accented-text"> Modern Gin, </span> <span
												class="location"> Germany </span>
										</p>
										<div class="mobile">
											<div class="secondary-headline ratings">
												<div class="plain-content">
													<div class="distiller-score">99</div>
												</div>
												<div class="community-rating">
													4.59 <i aria-hidden="true" class="icomoon-review-star star"></i>
												</div>
											</div>
										</div>
									</div>
							</a></li>

							<li class="spirit brandy-content"><a
								href="/spirits/eric-bordelet-selection-henri-bernard-beudin-1997-single-cask-calvados">
									<div class="desktop">
										<div class="secondary-headline ratings">
											<div class="plain-content">
												<div class="distiller-score">99</div>
											</div>
											<div class="community-rating">
												4.47 <i aria-hidden="true" class="icomoon-review-star star"></i>
											</div>
										</div>
									</div>
									<div class="image"
										style="background-image: url(https://ip-distiller.imgix.net/images/spirits/72a1b540-867b-0133-ab7b-4e403cbf2cb9/eric_bordelet_selection_henri_bernard_beudin_1997_single_cask_calvados_original.jpg?w=120&amp;h=120&amp;mark-w=35&amp;mark-h=35&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
									<div class="details">
										<h5 aria-level="2" class="name-content" role="heading">
											<div class="name">Eric Bordelet Selection "Henri
												Bernard Beudin" 1997 Single Cask Calvados</div>
										</h5>
										<p class="origin">
											<span class="accented-text"> Calvados, </span> <span
												class="location"> Calvados, France </span>
										</p>
										<div class="mobile">
											<div class="secondary-headline ratings">
												<div class="plain-content">
													<div class="distiller-score">99</div>
												</div>
												<div class="community-rating">
													4.47 <i aria-hidden="true" class="icomoon-review-star star"></i>
												</div>
											</div>
										</div>
									</div>
							</a></li>

							<li class="spirit brandy-content"><a
								href="/spirits/remy-martin-louis-xiii-cognac">
									<div class="desktop">
										<div class="secondary-headline ratings">
											<div class="plain-content">
												<div class="distiller-score">99</div>
											</div>
											<div class="community-rating">
												4.74 <i aria-hidden="true" class="icomoon-review-star star"></i>
											</div>
										</div>
									</div>
									<div class="image"
										style="background-image: url(https://ip-distiller.imgix.net/images/spirits/d11a60b0-7544-0133-dedd-62b978720717/remy_martin_louis_xiii_cognac_original.jpg?w=120&amp;h=120&amp;mark-w=35&amp;mark-h=35&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
									<div class="details">
										<h5 aria-level="2" class="name-content" role="heading">
											<div class="name">Rémy Martin Louis XIII Cognac</div>
										</h5>
										<p class="origin">
											<span class="accented-text"> Cognac, </span> <span
												class="location"> Grande Champagne, France </span>
										</p>
										<div class="mobile">
											<div class="secondary-headline ratings">
												<div class="plain-content">
													<div class="distiller-score">99</div>
												</div>
												<div class="community-rating">
													4.74 <i aria-hidden="true" class="icomoon-review-star star"></i>
												</div>
											</div>
										</div>
									</div>
							</a></li>

							<li class="spirit brandy-content"><a
								href="/spirits/cognac-dudognon-heritage">
									<div class="desktop">
										<div class="secondary-headline ratings">
											<div class="plain-content">
												<div class="distiller-score">99</div>
											</div>
											<div class="community-rating">
												4.32 <i aria-hidden="true" class="icomoon-review-star star"></i>
											</div>
										</div>
									</div>
									<div class="image"
										style="background-image: url(https://ip-distiller.imgix.net/images/spirits/ce6fb5a0-6bd4-0133-13c4-16d3e9a61cc7/cognac_dudognon_heritage_original.jpg?w=120&amp;h=120&amp;mark-w=35&amp;mark-h=35&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
									<div class="details">
										<h5 aria-level="2" class="name-content" role="heading">
											<div class="name">Cognac Dudognon Heritage</div>
										</h5>
										<p class="origin">
											<span class="accented-text"> Cognac, </span> <span
												class="location"> Grande Champagne, France </span>
										</p>
										<div class="mobile">
											<div class="secondary-headline ratings">
												<div class="plain-content">
													<div class="distiller-score">99</div>
												</div>
												<div class="community-rating">
													4.32 <i aria-hidden="true" class="icomoon-review-star star"></i>
												</div>
											</div>
										</div>
									</div>
							</a></li>

							<li>
								<div class="inline-ad inline-ad--search-result">
									<div class="ad-warning">ADVERTISEMENT - CONTINUE READING
										BELOW</div>
									<a class="pro-ad" href="/join-pro">
										<div id="AdThrive_Content_1_desktop"
											class="adthrive-ad adthrive-content adthrive-content-1 adthrive-ad-cls"
											style="min-height: 250px;"
											data-google-query-id="CNWDpaKpiIcDFR-U6QUd1A4BAA">
											<div
												id="google_ads_iframe_/18190176,21920028902/AdThrive_Content_1/606c5a9360a4830c06758746_0__container__"
												style="border: 0pt none;">
												<iframe
													id="google_ads_iframe_/18190176,21920028902/AdThrive_Content_1/606c5a9360a4830c06758746_0"
													name="google_ads_iframe_/18190176,21920028902/AdThrive_Content_1/606c5a9360a4830c06758746_0"
													title="3rd party ad content" width="1" height="1"
													scrolling="no" marginwidth="0" marginheight="0"
													frameborder="0" aria-label="Advertisement" tabindex="0"
													allow="attribution-reporting" data-load-complete="true"
													data-google-container-id="2"
													style="border: 0px; vertical-align: bottom;"></iframe>
											</div>
										</div>
										<div class="pro-ad__content">
											<div class="pro-ad__text-content">
												<h3 class="pro-ad--headline" role="none">
													Remove ads, get access to premium features, and more with
													<div class="pro-ad__false-button button accented tiny">
														Distiller Pro <i class="icomoon-crown"></i>
													</div>
												</h3>
											</div>
										</div>
									</a>


								</div>
							</li>
							<li class="spirit whiskey-content"><a
								href="/spirits/hibiki-21-year">
									<div class="desktop">
										<div class="secondary-headline ratings">
											<div class="plain-content">
												<div class="distiller-score">99</div>
											</div>
											<div class="community-rating">
												4.52 <i aria-hidden="true" class="icomoon-review-star star"></i>
											</div>
										</div>
									</div>
									<div class="image"
										style="background-image: url(https://ip-distiller.imgix.net/images/spirits/42372d30-4dbf-0132-ff20-4a02559918a4/hibiki-21_original.jpg?w=120&amp;h=120&amp;mark-w=35&amp;mark-h=35&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
									<div class="details">
										<h5 aria-level="2" class="name-content" role="heading">
											<div class="name">Hibiki 21 Year</div>
										</h5>
										<p class="origin">
											<span class="accented-text"> Blended, </span> <span
												class="location"> Japan </span>
										</p>
										<div class="mobile">
											<div class="secondary-headline ratings">
												<div class="plain-content">
													<div class="distiller-score">99</div>
												</div>
												<div class="community-rating">
													4.52 <i aria-hidden="true" class="icomoon-review-star star"></i>
												</div>
											</div>
										</div>
									</div>
							</a></li>

							<li class="spirit whiskey-content"><a
								href="/spirits/highland-park-18">
									<div class="desktop">
										<div class="secondary-headline ratings">
											<div class="plain-content">
												<div class="distiller-score">99</div>
											</div>
											<div class="community-rating">
												4.47 <i aria-hidden="true" class="icomoon-review-star star"></i>
											</div>
										</div>
									</div>
									<div class="image"
										style="background-image: url(https://ip-distiller.imgix.net/images/spirits/0755d5c9-c3c7-41e2-9dbe-401070ab6f19/highland_park_18_new_original.jpg?w=120&amp;h=120&amp;mark-w=35&amp;mark-h=35&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
									<div class="details">
										<h5 aria-level="2" class="name-content" role="heading">
											<div class="name">Highland Park 18 Year</div>
										</h5>
										<p class="origin">
											<span class="accented-text"> Single Malt, </span> <span
												class="location"> Islands, Scotland </span>
										</p>
										<div class="mobile">
											<div class="secondary-headline ratings">
												<div class="plain-content">
													<div class="distiller-score">99</div>
												</div>
												<div class="community-rating">
													4.47 <i aria-hidden="true" class="icomoon-review-star star"></i>
												</div>
											</div>
										</div>
									</div>
							</a></li>

							<li class="spirit whiskey-content"><a
								href="/spirits/michter-s-20-year-kentucky-straight-bourbon-2021-release">
									<div class="desktop">
										<div class="secondary-headline ratings">
											<div class="plain-content">
												<div class="distiller-score">98</div>
											</div>
											<div class="community-rating">
												4.65 <i aria-hidden="true" class="icomoon-review-star star"></i>
											</div>
										</div>
									</div>
									<div class="image"
										style="background-image: url(https://ip-distiller.imgix.net/images/spirits/c03d5430-18a8-013a-6798-4637613bb8aa/michters_20_year_2018_original_original_original.jpg?w=120&amp;h=120&amp;mark-w=35&amp;mark-h=35&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
									<div class="details">
										<h5 aria-level="2" class="name-content" role="heading">
											<div class="name">Michter's 20 Year Kentucky Straight
												Bourbon (2021 Release)</div>
										</h5>
										<p class="origin">
											<span class="accented-text"> Bourbon, </span> <span
												class="location"> Kentucky, USA </span>
										</p>
										<div class="mobile">
											<div class="secondary-headline ratings">
												<div class="plain-content">
													<div class="distiller-score">98</div>
												</div>
												<div class="community-rating">
													4.65 <i aria-hidden="true" class="icomoon-review-star star"></i>
												</div>
											</div>
										</div>
									</div>
							</a></li>

							<li class="spirit whiskey-content"><a
								href="/spirits/george-t-stagg-bourbon-fall-2019">
									<div class="desktop">
										<div class="secondary-headline ratings">
											<div class="plain-content">
												<div class="distiller-score">98</div>
											</div>
											<div class="community-rating">
												4.6 <i aria-hidden="true" class="icomoon-review-star star"></i>
											</div>
										</div>
									</div>
									<div class="image"
										style="background-image: url(https://ip-distiller.imgix.net/images/spirits/96133fd0-b701-0137-c627-0a8f7e82b852/btac_gts_2019_original.jpg?w=120&amp;h=120&amp;mark-w=35&amp;mark-h=35&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
									<div class="details">
										<h5 aria-level="2" class="name-content" role="heading">
											<div class="name">George T. Stagg Bourbon (Fall 2019)</div>
										</h5>
										<p class="origin">
											<span class="accented-text"> Bourbon, </span> <span
												class="location"> Kentucky, USA </span>
										</p>
										<div class="mobile">
											<div class="secondary-headline ratings">
												<div class="plain-content">
													<div class="distiller-score">98</div>
												</div>
												<div class="community-rating">
													4.6 <i aria-hidden="true" class="icomoon-review-star star"></i>
												</div>
											</div>
										</div>
									</div>
							</a></li>

							<li class="spirit agave-content"><a
								href="/spirits/4-copas-tequila-blanco">
									<div class="desktop">
										<div class="secondary-headline ratings">
											<div class="plain-content">
												<div class="distiller-score">98</div>
											</div>
											<div class="community-rating">
												4.4 <i aria-hidden="true" class="icomoon-review-star star"></i>
											</div>
										</div>
									</div>
									<div class="image"
										style="background-image: url(https://ip-distiller.imgix.net/images/spirits/b1d28f50-d602-0134-3230-4e44c05d3226/4_copas_tequila_blanco_original.jpg?w=120&amp;h=120&amp;mark-w=35&amp;mark-h=35&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
									<div class="details">
										<h5 aria-level="2" class="name-content" role="heading">
											<div class="name">4 Copas Tequila Blanco</div>
										</h5>
										<p class="origin">
											<span class="accented-text"> Tequila Blanco, </span> <span
												class="location"> Jalisco, Mexico </span>
										</p>
										<div class="mobile">
											<div class="secondary-headline ratings">
												<div class="plain-content">
													<div class="distiller-score">98</div>
												</div>
												<div class="community-rating">
													4.4 <i aria-hidden="true" class="icomoon-review-star star"></i>
												</div>
											</div>
										</div>
									</div>
							</a></li>

							<li class="spirit agave-content"><a
								href="/spirits/mezcal-los-siete-misterios-pechuga">
									<div class="desktop">
										<div class="secondary-headline ratings">
											<div class="plain-content">
												<div class="distiller-score">98</div>
											</div>
											<div class="community-rating">
												4.41 <i aria-hidden="true" class="icomoon-review-star star"></i>
											</div>
										</div>
									</div>
									<div class="image"
										style="background-image: url(https://ip-distiller.imgix.net/images/spirits/753c6bd0-cded-0133-3294-426998793ac2/mezcal_los_siete_misterios_pechuga_original.jpg?w=120&amp;h=120&amp;mark-w=35&amp;mark-h=35&amp;fit=crop&amp;crop=right&amp;mark-align=top,left&amp;mark-pad=0&amp;mark=)"></div>
									<div class="details">
										<h5 aria-level="2" class="name-content" role="heading">
											<div class="name">Mezcal Los Siete Misterios Pechuga</div>
										</h5>
										<p class="origin">
											<span class="accented-text"> Mezcal Joven, </span> <span
												class="location"> Oaxaca, Mexico </span>
										</p>
										<div class="mobile">
											<div class="secondary-headline ratings">
												<div class="plain-content">
													<div class="distiller-score">98</div>
												</div>
												<div class="community-rating">
													4.41 <i aria-hidden="true" class="icomoon-review-star star"></i>
												</div>
											</div>
										</div>
									</div>
							</a></li>

						</ol>
					</div>
				</div>

				<div class="pagination-control-container">
					<div class="pagination-control">
						<span class="pagination-control__description"> Results 1-10
							of 49576 Spirits </span>
						<nav class="pagination" role="navigation" aria-label="pager">


							<span class="page current"> 1 </span> <span class="page">
								<a rel="next" href="/search?page=2">2</a>
							</span> <span class="page"> <a href="/search?page=3">3</a>
							</span> <span class="page gap">…</span> <span class="next"> <a
								rel="next" href="/search?page=2">Next ›</a>
							</span> <span class="last"> <a href="/search?page=4958">Last
									»</a>
							</span>

						</nav>

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
						value="eFeSW4ZNtIDCIF5rrCFP5r1gKQdbEB7rlUkEIslCV1Gp/V5zIoupDAux2VZtZKyauT1CNz28XIdaq2Qz/RJilQ==">
					<div data-behavior="message"></div>
					<input placeholder="Your Email" aria-labelledby="sign_up_label"
						required="required" autocomplete="email"
						oninvalid="this.setCustomValidity(&quot;Email is either empty or invalid!&quot;)"
						oninput="this.setCustomValidity(&quot;&quot;)" type="email"
						name="email_signup[email]"> <input type="hidden"
						name="newsletter_recaptcha_token" id="newsletter_recaptcha_token"
						value="03AFcWeA4R_WWZk9KzMubYUdbWcZXda8PLVQPoDCuRFP2n8OTGWmVVcW9K1QICCBqjy2Ho9wRxch11Mtos_AwXvCloB-wt1tfV1PB59taPOLspNuMGppc42nN057OkdPD5gFjTFENI21xHNgb_iXecEpXdRwfrKrKZMjir64hy_PyeAMMqYHiQOa5aZyZLeOEkd4CNDAxoC1T0DKjLy8bQ0Vehw27n0srpEKnyBrxQAz-Vb-Y77umqr-zzmkz-YtBJtOjKLggxTBXZtR1iex54SZ0Iv1hNxT8J-ReTj5NXJrHALx6lii-839MZSFZ_J07XiuuSp4mfCEJFKJdwFdhwfv_1jrgc7NvQhkvDfH2jUMTAfJlLI8Liugf3E6XBDkMAsXsXf0WuGaMxmSxuC5rTKe1zGr8rQ_N4Fkkk8e4FH9syWWO_0Ffu6ZslasUifpfnpzfhRZhjJBEBL2zl4O3YkacOGi7yTiz9LWOD2l0tb11DDmO1oGVMQh30SZVCDhUeaIibTU842j3MPpnruebmZ0d51fNkQvIjI_4GcvUYuDsezREuDpOPB2uLbk82IcKvnu68_8tE_ETTwzPPcufORj1ys9IP0RxFzqO1G2IxkfAEZf7m1sJ2rRmyJbq8Ll3WTxSAVhfg4thrTFATc2gU3F04LDE0eTZl0bDblX06eMse7oLmESBGyng"
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
									role="presentation" name="a-ux5nblwhcq84" frameborder="0"
									scrolling="no"
									sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
									src="https://www.recaptcha.net/recaptcha/api2/anchor?ar=1&amp;k=6Ld1tO4oAAAAAI0-G63XMzqxtSbnFBpwOfIwxztQ&amp;co=aHR0cHM6Ly9kaXN0aWxsZXIuY29tOjQ0Mw..&amp;hl=ko&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;size=normal&amp;cb=us4ff3inyctj"></iframe>
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