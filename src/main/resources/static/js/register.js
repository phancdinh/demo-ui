const IN_VALID_CLASS_NAME = 'is-invalid';
$(document).ready(function () {
    // For eye password
    // *****Begin
    const toggleTypeInputPassword = function (id_selector, id_input_password) {
        $(id_selector).toggleClass("fa-eye fa-eye-slash");
        var input = $(id_input_password);
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    };

    $('#eye_pass_register').on('click', function () {
        toggleTypeInputPassword("#eye_pass_register", "#id_register_pass")
    });

    $('#eye_reset_pass').on('click', function () {
        toggleTypeInputPassword("#eye_reset_pass", "#id_new_pass")
    });

    $('#eye_reset_repass').on('click', function () {
        toggleTypeInputPassword("#eye_reset_repass", "#id_repass")
    });
    // *****End

    // *****End

    // For input login name
    // *****Begin
    $("#id_register_login_name").focusout(function () {
        const $input = $("#id_register_login_name");
        const valueInput = $input.val();
        if (validateEmail(valueInput) || validateAndSetCorrectPhone(valueInput, "id_register_login_name")) {
            $input.removeClass(IN_VALID_CLASS_NAME);
        } else {
            $input.addClass(IN_VALID_CLASS_NAME);
        }
    })
    // *****End
    // For input password
    // *****Begin
    $("#id_register_pass").focusout(function () {
        const $input = $("#id_register_pass");
        const valuePasswordInput = $("#id_register_pass").val();
        if (checkPolicyPassword(valuePasswordInput)) {
            $input.removeClass(IN_VALID_CLASS_NAME);
        } else {
            $input.addClass(IN_VALID_CLASS_NAME);
        }
    });
    // *****End

    // For submit form register
    // *****Begin
    $("#id_register_form").submit(function () {
        const $username = $('#id_register_login_name');
        if ($.trim($username.val()) === '') {
            $username.addClass(IN_VALID_CLASS_NAME);
            return false;
        }
        const $password = $('#id_register_pass');
        if ($.trim($password.val()) === '' || !checkPolicyPassword($.trim($password.val()))) {
            $password.addClass(IN_VALID_CLASS_NAME);
            return false;
        }
        return true;
    });
    // *****End
});

// For language
// *****Begin
function setLinkAddParams(a, name, value) {
    let url = new URL(location.href);
    url.searchParams.set(name, value);
    a.href = url;
}

// *****End