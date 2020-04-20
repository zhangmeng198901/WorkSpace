// JavaScript Document
var winW = $(window).width();
var winH = $(window).height()-90;
var westxs = winW-170;
var westyc = winW;

function open1(url, menuId){
	//无需跳转
	if(url.substring(1)=='#'){
		return;
	}else if(url.substring(4)==('http')){
	}
	else if(url.substring(1)!=('/')){
		url = '/'+url;
	}

	location.href=CONTEXT_PATH+url+'?menuId='+menuId;
}

function tGuide(tId){
	$(".leftCon").show();
	$("#ulaid").children("li").each(function(i){
		var lId = $(this).attr("lid");
		if(lId == tId){
			$(this).show();
			$(this).children(".liTit").click();
			$(this).find(".shuErji p").removeClass("erjiFocus");
			$(this).find(".shuErji div").hide();
			$(this).find(".shuErji p:first").addClass("erjiFocus");
			$(this).find(".shuErji p:first").next("div").show();
			iframeReHeight();
			return true;
		}else{
			$(this).css("display","none");
		}
	});
}

//树形结构
$(function(){
	var activeMenuItem = $("#activeMenuItem").val();
	var menuObj = $("#menuItem_"+activeMenuItem);
	$("ul.left-menu").find("div").removeClass("open");
	menuObj.children("div").addClass('open');
	menuObj.children("ul").show();
	menuObj.parents("ul").show();
	menuObj.parents("li").children("div").addClass('open');

	$("ul.left-menu").on("click","li>div",function () {
		var menuItemId = $(this).attr("id");
		menuItemId = menuItemId.substring(0,menuItemId.length-4);
		var liObj = $(this).parents("li#"+menuItemId);

		//判断是否有子菜单
		if(liObj.find("ul").length >0){
			//有子菜单
			if(liObj.children("div").hasClass("open")){
				//子菜单全部收缩
				liObj.find("ul").hide();
				liObj.find("div").removeClass('open');
			}else{
				//其他兄弟菜单收缩
				liObj.parent().find("li div").removeClass("open");
				liObj.parent().find("li ul").hide();

				//展开下一级菜单
				liObj.children("div").addClass('open');
				liObj.children("ul").show();
			}
		}else {
			//无子菜单则打开链接
			var url = liObj.attr("url");
			var menuId = liObj.attr("id").substring(9);
			open1(url,menuId);
		}

		return false;//阻止继续冒泡
	});

	/*$(".shu > ul > li").each(function(index) {
		$(this).children(".liTit").click(function(){
			$(this).next(".shuErji").show();
		})
    });

	//树形结构点击
	$(".shu .shuErji p").click(function(){
		if($(this).hasClass("erjiFocus")){
		}else{
			$(this).parent().find("p").removeClass("erjiFocus");
			$(this).parent().find("div").hide();
		}
		$(this).toggleClass("erjiFocus");
		$(this).next(".shuSanji").toggle();
	})
	
	$(".shu .shuSanji li").click(function(){
		if($(this).hasClass("")){
			$(".shu .shuSanji li").removeClass("sanjiFocus");
			$(this).addClass("sanjiFocus");
			//$(this).siblings().removeClass("sanjiFocus");
		}
	})*/
})

//左侧导航隐藏显示
$(function(){
	$("#leftyincang").bind("click",function(){
		if($(".leftCon").is(":visible")){//隐藏
			$(".leftCon").hide(100);
		} else {//显示
			$(".leftCon").show();
		}
		iframeReHeight();
	});
})

//调整框架高度(菜单/center)
var _topHeight = 90;//76;
var _footerHeight = 0;
function resizeHeight(){
	$(".leftCon").height(winH);
	$("#center").height(winH);
}
window.onresize = resizeHeight;
$(function(){
	resizeHeight();
})

function resizeYC(){
	$("#tt").css("width",westyc);
    $(".tabs-panels").css({width:westyc});
	$("#tt > div,#tt .panel,#tt .panel-body,div[class$='-body-noborder'],#tt div[class^='tabs']").css("width","auto");
}

function resizeXS(){
	$("#tt").css("width",westxs);
	$(".tabs-panels").css({width:westxs});
	$("#tt > div,#tt .panel,#tt .panel-body,div[class$='-body-noborder'],#tt div[class^='tabs']").css("width","auto");
}

function iframeReHeight(){
	/*var selObj =  $('#tt').tabs('getSelected').find("iframe");
	var height = selObj.contents().find("body").height()+30;
	var wHeight = document.body.clientHeight-121-52; 
	if(height<wHeight) height = wHeight;
	selObj.height(height);*/
	var ifm= $("#scheduleIframe");
	if(ifm.length >0){
		ifm.height(ifm.contents().find("#scheduleIfm").height());
	}
}
