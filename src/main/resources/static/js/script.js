$(document).ready(function () {
    // For input login_name to forget password
    // *****Begin
    $("#id_forget_password_login_name").focusout(function () {
        var valueInput = $("#id_forget_password_login_name").val();
        if (validateEmail(valueInput) || validateAndSetCorrectPhone(valueInput, "id_forget_password_login_name")) {
            $("#id_message_forget_password_login_name").addClass("d-none");
            $("#id_forget_password_login_name").removeClass("border-danger");
        } else {
            $("#id_message_forget_password_login_name").removeClass("d-none");
            $("#id_forget_password_login_name").addClass("border-danger");
        }
    })
    // *****End

    // For OTP input
    // *****Begin
    $(".otp-inputs").keyup(function () {
        if (this.value.length == this.maxLength) {
            $(this).next('.otp-inputs').focus();
        }
    });
    // *****End

    // For input new password for reset pass
    // *****Begin
    $("#id_new_pass").focusout(function () {
        var valuePasswordInput = $("#id_new_pass").val();
        if (checkPolicyPassword(valuePasswordInput)) {
            $("#id_message_password").addClass("d-none");
            $("#id_new_pass").removeClass("border-danger");
        } else {
            $("#id_message_password").removeClass("d-none");
            $("#id_new_pass").addClass("border-danger");
        }
    });
    // *****End

    // For submit form update new pass
    // *****Begin
    $("#id_update_pass_form").submit(function () {
        if ($.trim($('#id_new_pass').val()) === '' || !checkPolicyPassword($.trim($('#id_new_pass').val()))) {
            $("#id_message_password").removeClass("d-none");
            $("#id_new_pass").addClass("border-danger");
            return false;
        }
        if ($.trim($('#id_new_pass').val()) != $.trim($('#id_repass').val())) {
            $("#id_message_retype_password").removeClass("d-none");
            $("#id_repass").addClass("border-danger");
            return false;
        }
        return true;
    });
    // *****End

    // For resend link activation to email
    // *****Begin
    $("#button_resend").click(function () {
        let searchParams = new URLSearchParams(window.location.search);
        let ht_id = searchParams.get('ht_id');
        let contact = searchParams.get('contact');
        $("#notication_resend_activation_link").addClass("d-none");
        $("#loader_resend_activation_link").show();
        setTimeout(function () {
            $.ajax({
                type: 'POST',
                url: '/account/resend-activation-link',
                dataType: "text",
                data: {
                    ht_id: ht_id, contact: contact
                },
                success: function (result) {
                    $("#loader_resend_activation_link").hide();
                    $("#notication_resend_activation_link").removeClass("d-none");
                    $("#remaining_attempts").html(result);
                    if (result === 0) {
                        $("#button_resend_activation_link").html("");
                    }
                },
                error: function (jqXHR, textStatus) {
                    console.log(textStatus + ":" + jqXHR.responseText);
                }
            });
        }, 2000);
    });
    $('body').on('focusin', '.form-floating>.form-control', function (e){
        $(e.currentTarget).addClass('focusin');
    });
    $('body').on('focusout', '.form-floating>.form-control', function (e){
        $(e.currentTarget).removeClass('focusin');
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

// For input validation
// *****Begin
function checkPolicyPassword(password) {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
    if (password.match(decimal)) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(val) {
    var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(val);
}

function validateAndSetCorrectPhone(val, id_login_name) {
    // clear space between String
    var valueClearSpace = val.replace(/\s/g, "");
    if (valueClearSpace.length > 9) {
        var newphone = "";
        // check all chars is number add to String phone
        for (var i = 0; i < valueClearSpace.length; i++) {
            if (!(valueClearSpace.charAt(i) && isNaN(valueClearSpace.charAt(i))))
                newphone = newphone + valueClearSpace.charAt(i);
        }
        // check newphone = 11 chars & 2 chars first is 84 replace by 0
        if (newphone.length == 11 && newphone.substring(0, 2) == "84") {
            newphone = "0" + newphone.slice(2, 11);
            // new phone lenght is 10
        }
        //check again new phone = 10 chars & set value input login_name
        if (newphone.length == 10) {
            $("#"+id_login_name).val(newphone);
            // to here newphone is correct
            return true;
        }
    }
    return false;
}
// *****End

// Function redirecting-to-a-relative-url
function redirectTimeDelay(url, time_delay=1000) {
    setTimeout(function() {
        window.location.href = url
    }, time_delay);
}
// *****End
