<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../Head.jsp"%>

<main class="main-container" id="main-content" role="main" tabindex="-1">
	<div class="scroller">
		<div class="generic-page sign-in access-page forgot-password">
			<div class="center-column">
				<h3 class="secondary-headline lightweight">Forgot your
					password?</h3>
				<div class="content">
					<form class="new_user" id="new_user" action="/users/password"
						accept-charset="UTF-8" method="post">
						<input name="utf8" type="hidden" value="✓"><input
							type="hidden" name="authenticity_token"
							value="zFO8pECq5O8H6uDzfmUhLu1Mn00N1OfrQbRtoWrpJbO+GdKnI3rpbrqRH3BFJZjlf23f5KKL+Lyaab33+NX2uw==">
						<div class="field">
							<label for="user_login">Email</label> <input
								autofocus="autofocus" placeholder="Happens to the best of us"
								type="text" value="" name="user[login]" id="user_login">
						</div>
						<input type="submit" name="commit" value="Send"
							class="button submit" data-disable-with="Send">
					</form>
				</div>
			</div>
		</div>

	</div>
</main>

<%@ include file="../footer.jsp"%>