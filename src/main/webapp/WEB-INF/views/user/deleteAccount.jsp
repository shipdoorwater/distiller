<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../Head.jsp"%>

<main class="main-container" id="main-content" role="main" tabindex="-1">
	<div class="scroller">
		<div class="generic-page">
			<div class="center-column">
				<h3 class="secondary-headline">Confirm Delete Account</h3>
				<div class="form">
					<div class="field">
						<p>Are you sure that you want to delete your Distiller
							account? All of your reviews, ratings, lists, comments, and your
							profile will be permanently deleted. This cannot be undone.</p>
					</div>
					<form action="${pageContext.request.contextPath}/deleteAccount" accept-charset="UTF-8"
						method="post">					
						<div class="field">
							<input type="submit" class ="button accented js-class-changer" value="Delete My Account"/>
						<!-- 
							<div class="button accented js-class-changer"
								data-remove-class="hidden" data-target=".confirm-deletion">
								Delete My Account
							</div>
							<div class="modal confirm-deletion hidden">
								<div class="modal-window">
									<div class="close js-class-changer" data-add-class="hidden"
										data-target=".confirm-deletion">
										<i aria-hidden="true" class="icomoon-x"></i>
									</div>
									<div class="secondary-headline">Confirm</div>
									<input type="submit" name="commit" value="Delete My Account"
										class="button accented" data-disable-with="Delete My Account">
								</div>
							</div> -->
						</div>
					</form>

				</div>
			</div>
		</div>

	</div>
</main>

<%@ include file="../footer.jsp"%>
