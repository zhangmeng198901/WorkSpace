/**
 * Created by jatsou on 2017-06-22.
 */
$(function () {
//登录样式调整
var aaa = $('.login').height();
var bbb = ($('.login-bg').height()-aaa)/2;
$(".login").css("top",bbb);

//登录页
$(".login li").on("click",function(){
    var _index = $(this).index();
    $(this).addClass('login-click').siblings().removeClass('login-click');
    $(".loginShow").eq(_index).addClass('show').siblings().removeClass('show');
});

    /*var loginMethod = $("#loginMethod").val();
    if(loginMethod == '1'){
        $("#getDynamicPwd").show();
        $("#username").attr("placeholder","手机");
        $("#password").attr("placeholder","动态密码");
        $("a[loginMethod=1]").tab('show');
    }else{
        $("#getDynamicPwd").hide();
        $("#username").attr("placeholder","帐号/手机/邮箱");
        $("#password").attr("placeholder","密码");
        $("#loginMethod").val('0')
    }*/

    $("#loginForm0").validate({
        errorElement: "p",
        errorPlacement: function(error, element) {
            $("#messageBox0").append( error );
        },
        messages:{
            'username':{
                required:'请输入帐号名/认证手机/认证邮箱'
            },
            'password':{
                required:'请输入帐号密码'
            }
        }
    });
    $("#loginForm1").validate({
        errorElement: "p",
        errorPlacement: function(error, element) {
            $("#messageBox1").append( error );
        },
        messages:{
            'username':{
                required:'请输入认证手机号码'
            },
            'password':{
                required:'请输入动态密码'
            }
        }
    });

    /*$("a[loginMethod]").click(function () {
        $(this).parent().show();
        var loginMethod = $(this).attr("loginMethod");
        if(loginMethod == '1'){
            $("#getDynamicPwd").show();
            $("#username").attr("placeholder","手机");
            $("#password").attr("placeholder","动态密码");

        }else{
            $("#getDynamicPwd").hide();
            $("#username").attr("placeholder","帐号/手机/邮箱");
            $("#password").attr("placeholder","密码");
        }
        $("#loginMethod").val(loginMethod);
    });*/

    $("#getDynamicPwd").click(function () {
        var username = $.trim($("#mobileCertified").val());
        var tel = /^0?1[0-9]{10}$/;
        if(username == '' || !tel.test(username)){
            if($("#messageBox1 p#mobileCheck").length == 0){
                $("#messageBox1").append('<p class="error" for="mobileCertified" id="mobileCheck">请输入正确的手机号码</p>');
            }else{
                $("#messageBox1 p#mobileCheck").html("请输入正确的手机号码");
            }
            return false;
        }else{
            $("#messageBox1 p#mobileCheck[for=mobileCertified]").remove();
        }

        $.ajax({
            url: jdp.getContextPath()+'/biz/get-dynamic-password?phoneNumber=' + $("#mobileCertified").val(),
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if (data.success == "true") {
                    setTime();
                } else if (data.success == "false") {
                    if($("#messageBox1 p#mobileCheck").length == 0){
                        $("#messageBox1").append('<p class="error" for="mobileCertified" id="mobileCheck">'+data.msg+'</p>');
                    }else{
                        $("#messageBox1 p#mobileCheck").html(data.msg);
                    }
                } else {
                    $("#message").html(data.success);
                }
            }
        });
    });

    //验证码发送设置时间
    var countdown = 120;
    function setTime() {
        if (countdown == 0) {
            $("#getDynamicPwd").removeAttr("disabled");
            $("#getDynamicPwd").removeClass("btn-gray-b").addClass("btn-red-b");
            $("#getDynamicPwd").val("获取动态密码");
            countdown = 120;
            return;
        } else {
            $("#getDynamicPwd").attr("disabled", true);
            $("#getDynamicPwd").val("重新获取(" + countdown + ")");
            countdown--;
        }
        setTimeout(function () {
            setTime();
        }, 1000);
    }
});
function reloadValidateCode(btn) {
    $(btn).prev().attr("src", jdp.getContextPath()+"/admin/sec/captcha?data=" + new Date() + Math.floor(Math.random() * 24));
}
/**
 * 加密
 * @param word
 * @returns {*}
 */
function encrypt(obj){
	if ($(obj).val()!="") {
		var key = CryptoJS.enc.Utf8.parse($("#key").val());
		var srcs = CryptoJS.enc.Utf8.parse($(obj).val());
		var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
		$(obj).val(encrypted.toString());
	}
}
