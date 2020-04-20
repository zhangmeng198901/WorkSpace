//首页
$(function () {
    // var left_nav_height = $(window).height()-97;
    // $(".left-nav").css('height',left_nav_height+'px');
    // $(".left-nav li").on("click",function(){
    // 	var index = $(this).index();
    // 	$(this).addClass('left-nav-click').siblings().removeClass('left-nav-click');
    // 	$(".left-link-show").eq(index).addClass('show').siblings().removeClass('show');
    // });

    //绑定切换Tab页方法
    $(".linkNav").find('li').on("click", function () {
        var _index = $(this).index();
        $(this).addClass('linkNavClick').siblings().removeClass('linkNavClick');
        $(".homepageClickShow").eq(_index).addClass('show').siblings().removeClass('show');
    });

    /*$(".top-link-content li").on("click",function(){
     $(this).addClass('top-link-click').siblings().removeClass('top-link-click');
     })*/

    // $('.alter-click li').on("click",function(){
    // 	var index = $(this).index();
    // 	$(this).addClass('act').siblings().removeClass('act');
    // 	$(".popup-click-show").eq(index).addClass('show').siblings().removeClass('show');
    // });

    // $(".popup p i").on("click",function(){
    // 	$(".popup-show").hide();
    // });
    //
    // $(".userManage").on("click",function(){
    // 	$(".popup-show").show();
    // });

    //加载所有公告
    loadNewsIntoUl('','','allNews');
    //loadNewsIntoUlOld('xmgg','','allNews');

    //加载采购公告
    loadNewsIntoUl('xmgg','项目公告','purchaseNews');
    //loadNewsIntoUlOld('xmgg','项目公告','purchaseNews');
    //加载结果公示
    loadNewsIntoUl('xmgg','结果公示','resultNews');
    //loadNewsIntoUlOld('xmgg','结果公示','resultNews');

    //加载供应商须知
    loadNewsIntoUl('gysxz','','otherNews');
    //loadNewsIntoUlOld('gysxz','','otherNews');
});

/**
 * 加载公告
 */
function loadNewsIntoUl(newsType,newsTypeCn,ulId) {
    var url = "/SupplierPlatform";
    if('gysxz'==newsType){
        url += "/notice/api/toNoticeTipPageList"
    }else{
        url += "/notice/api/toNoticePageList"
    }
    var params = "&page=1&page.size=7&search_newsType="+newsType+"&search_newsTypeCn="+encodeURIComponent(newsTypeCn);
    $.ajax({
        url: url,
        data: params,
        type: "post",
        async:true,
        dataType:'JSON',
        success: function (page) {
            $("#"+ulId).empty();
            if(page && page.content){
                var list = page.content;
                if (list && list.length > 0) {
                    for (var i = 0; i < list.length && i < 7; i++) {
                        var notice = list[i];
						var createTime = notice.createTime.replace(/-/g,'/');
                        $("#"+ulId).append('<li><p><label>' + (new Date(createTime)).format('yyyy/MM/dd') +
                            '</label><a href="/SupplierPlatform/notice/api/notice_details?noticeId='+notice.id+'">' + notice.title + '</p></a></li>');
                    }
                }
            }
        },
        error:function () {

        }
    });
}

function loadNewsIntoUlOld(newsType,newsTypeCn,ulId) {
    var url = "/notice.action";
    var params = "&method=notice_search&currentPage=1&pageSize=7&newsType="+newsType+"&newsTypeCn="+newsTypeCn;
    $.ajax({
        url: url,
        data: params,
        type: "post",
        async:true,
        dataType:'JSON',
        success: function (list) {
            $("#"+ulId).empty();
            // list = eval('('+list+')');
            if (list && list.length > 0) {
                for (var i = 0; i < list.length && i < 7; i++) {
                    var notice = list[i];
                    $("#"+ulId).append('<li><p><label>' + (new Date(notice.createTime.time)).format('yyyy/MM/dd') +
                        '</label><a href="/notice.action?method=notice_details&noticeId='+notice.objId+'">' + notice.title + '</p></a></li>');
                }
            }
        },
        error:function () {

        }
    });
}
