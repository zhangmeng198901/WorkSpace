// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
//
//调用： var time1 = new Date().Format("yyyy-MM-dd");
//var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");
Date.prototype.format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o){
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }

    return fmt;
};

$(function(){
    //checkAllTextArea();//截掉多行文本框超出长度的文本

    //截取最大长度的文本内容
    hideOverFlowText();
});
/**
 * close window
 * @param reloadParent true 刷新
 */
function closeWindow(reloadParent){
    if(reloadParent===true && window.opener!=null){
        window.opener.location.reload();
    }
    //window.opener=null;
    //window.open('', '_self', '');
    //window.close();

    window.open('','_top');
    window.top.close();
    window.close();
}

/**
 * 返回上一个页面
 * @param callBack 回调函数
 * @param data 传入参数
 */
function historyBack(callBack,data){
    if(history.length <= 1){
        //window.opener=null;
        //window.open('', '_self', '');
        //window.close();

        window.open('','_top');
        window.top.close();
        window.close();
    }
    else{
        history.back();
    }

    //回调
    if($.isFunction(callBack)){
        callBack(data);
    }
}

function back(){
	history.back();
}

/**
 * 限制多行文本框超过输入长度+字数提示
 */
function checkAllTextArea(){
    //初始化
    $("form textarea[name][maxlength]").each(function(){
        var maxLength = Number($(this).attr("maxlength"));
        var text = $(this).val();
        var name = $(this).attr("name");
        if(maxLength >0 && text.length > maxLength){
            $(this).val(text.substring(0,maxLength));
        }
        $(this).parent().find("span.marked[for='"+name+"']").html("提示：还可输入"+(maxLength-text.length >0 ? maxLength-text.length:0)+"字。");
    });

    //输入统计
    $("form textarea[name][maxlength]").on("keyup",function(){
        var maxLength = Number($(this).attr("maxlength"));
        var text = $(this).val();
        var name = $(this).attr("name");
        if(maxLength >0 && text.length > maxLength){
            $(this).val(text.substring(0,maxLength));
        }
        $(this).parent().find("span.marked[for='"+name+"']").html("提示：还可输入"+(maxLength-text.length >0 ? maxLength-text.length:0)+"字。");
    });
}

/**
 * 处理超出长度的文本
 */
function hideOverFlowText(){
    $(".text-overflow-hide").each(function(i,n){
        var innerHtml = $(n).html();
        var maxLength = Number($(n).attr("maxlength"));
        if(innerHtml.length > maxLength){
            $(n).attr("title",innerHtml);
            $(n).html(innerHtml.substring(0,maxLength)+'...');
        }
    });
}

function showAndHideContent(btn){
	var infoDiv = $(btn).next();
	if($(infoDiv).css("display")=='none'){
		$(infoDiv).show();
	}else{
		$(infoDiv).hide();
	}
}

function setHintMsg(selector,hintMsg){
    var textColor = $(selector).css('color');
    if($(selector).val() == ''){
        $(selector).val(hintMsg);
        $(selector).css('color','#aaa');
    }

    $(selector).on('focus',function(){
        if($(this).val() == hintMsg){
            $(this).val('');
        }
        $(this).css('color',textColor);
    });

    $(selector).on('blur',function(){
        if($(this).val() == ''){
            $(this).val(hintMsg);
            $(selector).css('color','#aaa');
        }
    });
}