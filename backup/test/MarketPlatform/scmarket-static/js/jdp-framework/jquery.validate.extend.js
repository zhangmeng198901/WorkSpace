/**
 * Created by jatsou on 2016-12-09.
 */
jQuery.validator.addMethod("isMobile", function (value, element) {
    var mobile = /^0?1[0-9]{10}$/;
    return this.optional(element) || (mobile.test(value));
}, "请填写正确的手机号码");
jQuery.validator.addMethod("isTel", function (value, element) {
    var tel = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
    return this.optional(element) || (tel.test(value));
}, "请填写正确的电话号码");

jQuery.validator.addMethod("notEqualTo", function (value, element, selector) {
	return this.optional(element) || $.trim(value) != $.trim($(selector).val());
}, "请填写不一样的值");

jQuery.validator.addMethod("isIdentity", function (value, element,isIdentity) {
	if(isIdentity===true){
		var idNoPattern = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		return this.optional(element) || (idNoPattern.test(value));
	}else {
		return true;
	}

}, "请填写正确的身份证号码");

jQuery.validator.addMethod("isCertificate", function (value, element,isCertificate) {
	if(isCertificate===true){
		var certificate = /^[\d|a-zA-Z]{6,}$/;
		return this.optional(element) || (certificate.test(value));
	}else{
		return true;
	}

}, "请填写正确的证件号码");


jQuery.extend(jQuery.validator.defaults, {
	errorPlacement :function(error, element) { 
		if (element.is(":radio")){
			var radioGroup = element.parents('.radio-group');
			if(radioGroup.length>0){
				radioGroup.parent().css("position","relative");
				var left = radioGroup.position().left;
				left += radioGroup.width();
				left += parseInt(radioGroup.css('padding-left'));
				left += parseInt(radioGroup.css('padding-right'));

				var top = '3px';
				error.css("top",top);
				error.css("left",left);
				error.appendTo(radioGroup.parent());

				return;
			}

			var name = $(element).attr("name");
			var errObj = $("label.errorMsg[forName='"+name+"']");
			if(errObj.length > 0){
				errObj.css("position","relative");
				error.appendTo(errObj);

				return;
			}
		}
		else if (element.is(":checkbox")) {
			var checkboxGroup = element.parents('.checkbox-group');
			if(checkboxGroup.length > 0){
				checkboxGroup.parent().css("position","relative");
				var left = checkboxGroup.position().left;
				left += checkboxGroup.width();
				left += parseInt(checkboxGroup.css('padding-left'));
				left += parseInt(checkboxGroup.css('padding-right'));

				var top = '3px';
				error.css("top",top);
				error.css("left",left);
				error.appendTo(checkboxGroup.parent());

				return;
			}

			var name = $(element).attr("name");
			var errObj = $("label.errorMsg[forName='"+name+"']");
			if(errObj.length > 0){
				errObj.css("position","relative");
				error.appendTo(errObj);

				return;
			}
		}

		//默认方法
		element.parent().css("position","relative");
		var left = element.position().left;
		left += element.width();
		left += parseInt(element.css('padding-left'));
		left += parseInt(element.css('padding-right'));

		var top = '3px';
		error.css("top",top);
		error.css("left",left);
		error.appendTo(element.parent());
	}
});