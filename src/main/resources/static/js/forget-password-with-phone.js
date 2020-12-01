$(document).ready(function () {
    // For countdown time available OTP
    // *****Begin
    var numberCount = $('#countdown').html();
    countdown(numberCount);
    // *****End

    // For resend OTP resetpassword
    // *****Begin
    $("#resend_otp").click(function () {
        let remainingAttemptsTimes = $("#remaining_attempts").html();
        if(remainingAttemptsTimes == 0) {
            window.location.href = '/notification/send-otp-attempts-reach-limited';
        }
        let searchParams = new URLSearchParams(window.location.search);
        var value = searchParams.get('value');
        $("#resend_otp").addClass("text-resend-otp-disable");
        $("#div_resend_otp_forget_password").addClass( "d-none" );
        $("#loader_resend_otp_forget_password").show();

        $.when(
            $.ajax({
                type: 'POST',
                url: '/account/resend-otp-reset-password',
                dataType:"json",
                data : {
                    value: value
                },
                error: function (jqXHR, textStatus) {
                    console.log(textStatus+":"+jqXHR.responseText);
                    window.location.href = '/notification/send-otp-attempts-reach-limited';
                }
            })
        ).then(function(results){
            setTimeout(function(){
                $.ajax({
                    type: 'POST',
                    url: '/account/get-remaining-otp-reset-password',
                    dataType:"text",
                    data : {
                        value: value
                    },
                    success : function (result){
                        $("#loader_resend_otp_forget_password").hide();
                        $("#div_resend_otp_forget_password").removeClass( "d-none" );
                        var obj = JSON.parse(result);
                        $("#countdown").html(obj.remain_time);
                        $("#remaining_attempts").html(obj.remain_times_to_resend);
                        $("#id").val(obj.id);
                        countdown(obj.remain_time);
                    },
                    error: function (jqXHR, textStatus) {
                        console.log(textStatus+":"+jqXHR.responseText);
                        window.location.href = '/notification/send-otp-attempts-reach-limited';
                    }
                });
            }, 1000);
        });
    });
    // *****End
});

// Function countdow time input
function countdown(numberCount) {
    var downloadTimer = setInterval(function(){
        if(numberCount <= 0){
            clearInterval(downloadTimer);
            $("#countdown").html('0');
            $("#resend_otp").removeClass("text-resend-otp-disable");
        } else {
            $("#countdown").html(numberCount);
        }
        numberCount -= 1;
    }, 1000);
}
// *****End


