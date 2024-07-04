<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../Head.jsp"%>

<main class="main-container" id="main-content" role="main" tabindex="-1">
	<div class="scroller">
		<div class="password-edit-page">
			<div class="center-column">
				<h3 class="secondary-headline">Change your password</h3>
				<div class="error"></div>
				<div class="form">
					<form class="edit_user" id="edit_user" action="${pageContext.request.contextPath}/changePasswordAction"
						accept-charset="UTF-8" method="post" onsubmit="return validateForm()">
						<input name="utf8" type="hidden" value="✓"><input
							type="hidden" name="_method" value="put"><input
							type="hidden" name="authenticity_token"
							value="CCyPYBV1AnT8qasntVUYiM/YjqxBF6sRGUuDMNvpKKGdUEY4PkEQlqKIGQPI/d5d1iCaP6Ys5Kh+G0ON1BmJAw==">
						
						<div class="field password-field">
							<label for="user_current_password">Current</label> <input
								autocomplete="off" autofocus="autofocus" type="password"
								name="currentPassword" id="user_current_password">
							<span aria-label="Show Password" role="button" tabindex="0">
								<i aria-hidden="true"
								class="icon fa fa-eye toggle-password-visibility"
								toggle="#user_current_password"></i>
							</span>
						</div>
						
						<div class="field password-field">
							<label for="user_password">New</label> <input autocomplete="off"
								type="password" name="newPassword" id="user_password">
							<span aria-label="Show Password" role="button" tabindex="0">
								<i aria-hidden="true"
								class="icon fa fa-eye toggle-password-visibility"
								toggle="#user_password"></i>
							</span>
						</div>
						
						<div class="field password-field">
							<label for="user_password_confirmation">Confirm new</label> <input
								autocomplete="off" type="password"
								name="confirmationPassword"
								id="user_password_confirmation"> <span
								aria-label="Show Password" role="button" tabindex="0"> <i
								aria-hidden="true"
								class="icon fa fa-eye toggle-password-visibility"
								toggle="#user_password_confirmation"></i>
							</span>
						</div>
						<div>
							<input type="submit" name="commit" value="Change"
								class="button accented" data-disable-with="Change"> <a
								class="button" href="${pageContext.request.contextPath}/myProfile">Cancel</a>
						</div>
					</form>
				</div>
			</div>
		</div>

	</div>
</main>
<%@ include file="../footer.jsp"%>

<script>
	function validateForm() {
		const currentPassword = document.getElementById("user_current_password").value;
		const newPassword = document.getElementById("user_password").value;
		const confirmationPassword = document.getElementById("user_password_confirmation").value;
		
		if (!currentPassword || !newPassword || !confirmationPassword) {
			alert("모든 비밀번호 필드를 입력해 주세요.");
			return false;
		}

		if (newPassword !== confirmationPassword) {
			alert("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
			return false;
		}

		return true;
	}
</script>
