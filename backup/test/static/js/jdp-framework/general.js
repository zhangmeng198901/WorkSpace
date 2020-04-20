var CONTEXT_PATH = $.trim($("#contextPath").val());
var jdp = {
    getContextPath: function () {
        // var pathName = document.location.pathname;
        // var index = pathName.substring(1).indexOf("/");
        // var result = pathName.substring(0, index + 1);
        return $.trim($("#contextPath").val());
    },
    openValidate: function (beforeOpen) {
        if (beforeOpen) {
            if (!$.isFunction(beforeOpen)) {
                //fixme
                return false;
            }
            if (!beforeOpen()) {
                return false;
            }
        }
        return true;
    },
    select: function (control, url, callback, beforeOpen) {

        control.click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' " +
                "id='select-fancybox-iframe' name='select-fancybox-iframe' height='100%' width='100%' " +
                "src='" + url + "' />",
                fitToView: false,
                width: '30%',
                height: '50%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    //firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
                    if ($.isFunction(window.frames["select-fancybox-iframe"].getValue)) {
                        var data = window.frames["select-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }
                    }
                }
            });
        });

    },
    openFancybox: function (control, url, callback, beforeOpen,settings) {
        //调整参数
        if(beforeOpen && !$.isFunction(beforeOpen) && settings==undefined){
            settings = beforeOpen;
            beforeOpen = null;
        }

        var fancyboxSettings = $.extend(true,{},{
            type: "html",
            content: "<iframe scrolling='auto' class='fancybox-iframe' " +
            "id='select-fancybox-iframe' name='select-fancybox-iframe' height='100%' width='100%' " +
            "src='" + url + "' />",
            fitToView: false,
            width: '30%',
            height: '50%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none',
            beforeClose: function () {
                //firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
                if ($.isFunction(window.frames["select-fancybox-iframe"].getValue)) {
                    var data = window.frames["select-fancybox-iframe"].getValue();
                    if (data) {
                        if ($.isFunction(callback)) {
                            callback(data);
                        }
                    }
                }
            }
        },settings);

        control.click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open(fancyboxSettings);
        });

    },

    selectSingleUser: function (divClass, callback, beforeOpen) {
        $("." + divClass).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' " +
                "id='selectSingleUser-fancybox-iframe' name='selectSingleUser-fancybox-iframe' height='100%' width='100%' " +
                "src='" + jdp.getContextPath() + "/admin/sec/user/user/single' />",
                fitToView: false,
                width: '30%',
                height: '50%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    //firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
                    if ($.isFunction(window.frames["selectSingleUser-fancybox-iframe"].getValue)) {
                        var data =
                            window.frames["selectSingleUser-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }
                    }
                }
            });
        });
    },

    selectMultiUsers: function (divClass, callback, beforeOpen) {
        $("." + divClass).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' frameborder='0'" +
                "id='selectMultiUsers-fancybox-iframe' name='selectMultiUsers-fancybox-iframe' height='100%' width='100%' " +
                "src='" + jdp.getContextPath() + "/admin/sec/user/user/multi' />",
                fitToView: false,
                width: '80%',
                height: '80%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    //firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
                    if ($.isFunction(window.frames["selectMultiUsers-fancybox-iframe"].getValue)) {
                        var data =
                            window.frames["selectMultiUsers-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }
                    }
                }
            });
        });
    },

    selectSingleOrg: function (divClass, callback, beforeOpen) {

        $("." + divClass).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                // href		: CONTEXT_PATH + "/org/party/org/select-single",
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' " +
                "id='selectSingleOrg-fancybox-iframe' name='selectSingleOrg-fancybox-iframe' height='100%' width='100%' " +
                "src='"+CONTEXT_PATH+"/org/party/org/select-single' />",
                fitToView: false,
                width: '30%',
                height: '50%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    //firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
                    if ($.isFunction(window.frames["selectSingleOrg-fancybox-iframe"].getValue)) {
                        var data =
                            window.frames["selectSingleOrg-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }
                    }
                }
            });
        });

    },

    selectMultiOrgs: function (divClass, callback, beforeOpen) {
        $("." + divClass).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' frameborder='0'" +
                "id='selectMultiOrgs-fancybox-iframe' name='selectMultiOrgs-fancybox-iframe' height='100%' width='100%' " +
                "src='"+CONTEXT_PATH+"/org/party/org/select-multi' />",
                fitToView: false,
                width: '30%',
                height: '50%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    //firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
                    if ($.isFunction(window.frames["selectMultiOrgs-fancybox-iframe"].getValue)) {
                        var data =
                            window.frames["selectMultiOrgs-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }
                    }

                }
            });
        });

    },

    selectSinglePost: function (divClass, callback, beforeOpen) {
        $("." + divClass).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' " +
                "id='selectSinglePost-fancybox-iframe' name='selectSinglePost-fancybox-iframe' " +
                "height='100%' width='100%' " +
                "src='" + jdp.getContextPath() + "/admin/party/post/post/single' />",
                fitToView: false,
                width: '30%',
                height: '50%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    //firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
                    if ($.isFunction(window.frames["selectSinglePost-fancybox-iframe"].getValue)) {
                        var data =
                            window.frames["selectSinglePost-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }
                    }

                }
            });
        });

    },

    selectMultiPosts: function (divClass, callback, beforeOpen) {

        $("." + divClass).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' " +
                "id='selectMultiPosts-fancybox-iframe' height='100%' width='100%' " +
                "src='" + jdp.getContextPath() + "/admin/party/post/post/multi' />",
                fitToView: false,
                width: '80%',
                height: '80%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    if ($.isFunction(window.frames["selectMultiPosts-fancybox-iframe"].getValue)) {
                        var data =
                            window.frames["selectMultiPosts-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }
                    }
                }
            });
        });
    },
    selectSinglePostOfOrg: function (divClass, callback, beforeOpen) {
			$("."+divClass).click(function(){
				if(!jdp.openValidate(beforeOpen)){
					return;
				}
				$.fancybox.open({
					type		: "html",
					content 	: "<iframe scrolling='auto' class='fancybox-iframe' " +
									"id='selectMultiPersonsOfOrg-fancybox-iframe' name='selectMultiPersonsOfOrg-fancybox-iframe' " +
									"height='100%' width='100%' " +
									"src='"+jdp.getContextPath()+"/admin/party/person/org/person/multi' />",
					fitToView	: false,
					width		: '80%',
					height		: '80%',
					autoSize	: false,
					closeClick	: false,
					openEffect	: 'none',
					closeEffect	: 'none',
					beforeClose  : function(){
						//firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
						if($.isFunction(window.frames["selectMultiPersonsOfOrg-fancybox-iframe"].getValue)){
							var data = 
								window.frames["selectMultiPersonsOfOrg-fancybox-iframe"].getValue();
							if(data){
								if($.isFunction(callback)){
									callback(data);
								}
							}
							
						}
						
					}
				});
			});
		},
		
		selectSingleCategory: function(divClass,callback,beforeOpen){
			
			$("."+divClass).click(function(){
				if(!jdp.openValidate(beforeOpen)){
					return;
				}
				$.fancybox.open({
					// href		: CONTEXT_PATH + "/org/party/org/select-single",
					type		: "html",
					content 	: "<iframe scrolling='auto' class='fancybox-iframe' " +
									"id='selectSingleCategory-fancybox-iframe' name='selectSingleCategory-fancybox-iframe' height='100%' width='100%' " +
									"src='"+CONTEXT_PATH+"/basic/expert/specialty/select-single-category' />",
					fitToView	: false,
					width		: '80%',
					height		: '100%',
					autoSize	: false,
					closeClick	: false,
					openEffect	: 'none',
					closeEffect	: 'none',
					beforeClose  : function(){
						//firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
						if($.isFunction(window.frames["selectSingleCategory-fancybox-iframe"].getValue)){
							var data = 
								window.frames["selectSingleCategory-fancybox-iframe"].getValue();
							if(data){
								if($.isFunction(callback)){
									callback(data);
								}
							}
						}
					}
				});
			});
			
		},

    selectMultiPostsOfOrg: function (divClass, callback, beforeOpen) {

        $("." + divClass).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' " +
                "id='selectMultiPostsOfOrg-fancybox-iframe' name='selectMultiPostsOfOrg-fancybox-iframe' " +
                "height='100%' width='100%' " +
                "src='" + jdp.getContextPath() + "/admin/party/post/org/post/multi' />",
                fitToView: false,
                width: '80%',
                height: '80%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    //firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
                    if ($.isFunction(window.frames["selectMultiPostsOfOrg-fancybox-iframe"].getValue)) {
                        var data =
                            window.frames["selectMultiPostsOfOrg-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }
                    }

                }
            });
        });
    },

    selectSinglePerson: function (divClass, callback, beforeOpen) {

        $("." + divClass).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' " +
                "id='selectSinglePerson-fancybox-iframe' name='selectSinglePerson-fancybox-iframe' " +
                "height='100%' width='100%' " +
                "src='" + jdp.getContextPath() + "/admin/party/person/person/single' />",
                fitToView: false,
                width: '30%',
                height: '50%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    //firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
                    if ($.isFunction(window.frames["selectSinglePerson-fancybox-iframe"].getValue)) {
                        var data =
                            window.frames["selectSinglePerson-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }
                    }

                }
            });
        });
    },

    selectMultiPersons: function (divClass, callback, beforeOpen) {

        $("." + divClass).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' " +
                "id='selectMultiPersons-fancybox-iframe' name='selectMultiPersons-fancybox-iframe' " +
                "height='100%' width='100%' " +
                "src='" + jdp.getContextPath() + "/admin/party/person/person/multi' />",
                fitToView: false,
                width: '80%',
                height: '80%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    if ($.isFunction(window.frames["selectMultiPersons-fancybox-iframe"].getValue)) {
                        var data =
                            window.frames["selectMultiPersons-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }
                    }
                }
            });
        });
    },
    selectSingleDict: function (divClass, callback, beforeOpen) {

        $("." + divClass).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' " +
                "id='selectSingleDict-fancybox-iframe' name='selectSingleDict-fancybox-iframe' " +
                "height='100%' width='100%' " +
                "src='" + jdp.getContextPath() + "/admin/preference/def/single' />",
                fitToView: false,
                width: '40%',
                height: '80%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    if ($.isFunction(window.frames["selectSingleDict-fancybox-iframe"].getValue)) {
                        var data =
                            window.frames["selectSingleDict-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }
                    }
                }
            });
        });
    },
    selectSinglePersonOfOrg: function (divClass, callback, beforeOpen) {

        $("." + divClass).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' " +
                "id='selectSinglePersonOfOrg-fancybox-iframe' name='selectSinglePersonOfOrg-fancybox-iframe' " +
                "height='100%' width='100%' " +
                "src='" + jdp.getContextPath() + "/admin/party/person/org/person/single' />",
                fitToView: false,
                width: '80%',
                height: '80%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    //firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
                    if ($.isFunction(window.frames["selectSinglePersonOfOrg-fancybox-iframe"].getValue)) {
                        var data =
                            window.frames["selectSinglePersonOfOrg-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }
                    }
                }
            });
        });
    },

    selectMultiPersonsOfOrg: function (divClass, callback, beforeOpen) {

        $("." + divClass).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            $.fancybox.open({
                type: "html",
                content: "<iframe scrolling='auto' class='fancybox-iframe' " +
                "id='selectMultiPersonsOfOrg-fancybox-iframe' name='selectMultiPersonsOfOrg-fancybox-iframe' " +
                "height='100%' width='100%' " +
                "src='" + jdp.getContextPath() + "/admin/party/person/org/person/multi' />",
                fitToView: false,
                width: '80%',
                height: '80%',
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none',
                beforeClose: function () {
                    //firefox中使用iframe的name获得iframe，而ie、chrome根据id获得iframe
                    if ($.isFunction(window.frames["selectMultiPersonsOfOrg-fancybox-iframe"].getValue)) {
                        var data =
                            window.frames["selectMultiPersonsOfOrg-fancybox-iframe"].getValue();
                        if (data) {
                            if ($.isFunction(callback)) {
                                callback(data);
                            }
                        }

                    }

                }
            });
        });
    },

    /**
     * 上传文件
     * @param selector 选择器字符串或对象
     * @param relationId 业务关联id(不可为空）
     * @param quoteType 附件类型
     * @param directoryCode 目录代码
     * @param callback 回调事件
     * @param beforeOpen 打开校验事件，若返回false,则不打开文件上传工具
     */
    uploadAttachmentQuote:function (selector, relationId, quoteType, directoryCode, callback, beforeOpen) {
        $(selector).click(function () {
            if (!jdp.openValidate(beforeOpen)) {
                return;
            }
            if($.trim(relationId)==''){
                alert('未指定附件使用对象，请先保存数据后尝试或联系客服。');
                return;
            }
            $.fancybox.open({
                type		: 'html',
                content		: '<div id="upload-container" style="float:none;"><p>您的浏览器不支持Flash，Silverlight或HTML5</p></div>',
                fitToView :false,
                width : '720',
                height : '400',
                autoSize : false,
                closeClick : false,
                openEffect : 'none',
                closeEffect : 'none',
                afterShow	: function(){
                    $("#upload-container").pluploadQueue({
                        runtimes : 'html5,flash,silverlight,html4',
                        url : CONTEXT_PATH+'/file-system/attachment-quote/upload',
                        chunk_size: 0,
                        rename : true,
                        dragdrop: false,
                        autoSize : false,
                        closeClick : false,
                        openEffect : 'none',
                        closeEffect : 'none',
                        multipart_params:{
                            relationId:relationId,//设置关联id
                            dirCode:directoryCode,//存储目录路径
                            types:quoteType
                        },
                        filters : {
                            max_file_size : '10mb',
                            // Specify what files to browse for
                            mime_types: [
                                {title : "*", extensions : "*"}  //支持文件后缀名
                            ]
                        },
                        flash_swf_url : CONTEXT_PATH+'/static/lib/jdp/plupload/Moxie.swf',
                        silverlight_xap_url : CONTEXT_PATH+'/static/lib/jdp/plupload/Moxie.xap'
                    });
                },
                beforeClose	:function(){
                    if(callback && $.isFunction(callback)){
                        $.ajax({
                            url:CONTEXT_PATH+'/file-system/attachment-quote/queryFile/'+relationId,
                            type:'post',
                            data:'&types='+quoteType,
                            dataType:'json',
                            success:function (data) {
                                callback(data);
                            }
                        });
                    }
                }
            });
        })
    },

    removeAttachmentQuote:function (id,fileObj,callback) {
        $.ajax({
            url:CONTEXT_PATH+"/file-system/attachment-quote/removeFile/"+id,
            data:{},
            type:"post",
            dataType:"json",
            success:function(msg){
                if(msg.success == true){
                    if($.isFunction(fileObj) && callback == undefined){
                        callback = fileObj;
                        fileObj = null;
                    }

                    if(fileObj){
                        fileObj.remove();
                    }

                    if(callback && $.isFunction(callback)){
                        callback(msg);
                    }
                    alert("文件删除成功！");
                }else{
                    alert("文件删除失败！");
                }
            },
            error:function(msg){
                alert("文件删除失败！");
            }
        });
    },

    assignMultiAccount:function (userEntityId,userType,detailType) {
        function getUserEntityId() {
            if($.isFunction(userEntityId)){
                return userEntityId();
            }else{
                return userEntityId;
            }
        };
        function getUserType() {
            if($.isFunction(userType)){
                return userType();
            }else{
                return userType;
            }
        };

        function getDetailType() {
            if($.isFunction(detailType)){
                return detailType();
            }else{
                return detailType;
            }
        };

        if($.trim(getUserEntityId())==''){
            alert('请选择帐号的拥有者！');
            return;
        }

        if($.trim(getUserType())==''){
            alert('请选择帐号的拥有者类型！');
            return;
        }

        $.fancybox({
            type		: 'iframe',
            href:CONTEXT_PATH+'/admin/party/account/assignMulti?userEntityId='+getUserEntityId()
            +'&userType='+getUserType()+'&detailType='+getDetailType(),
            fitToView :false,
            width : '90%',
            height : '90%',
            autoSize : false,
            closeClick : false,
            openEffect : 'none',
            closeEffect : 'none'
        });
    },

    assignOneAccount:function (userEntityId,userType,detailType) {
        function getUserEntityId() {
            if($.isFunction(userEntityId)){
                return userEntityId();
            }else{
                return userEntityId;
            }
        };
        function getUserType() {
            if($.isFunction(userType)){
                return userType();
            }else{
                return userType;
            }
        };

        function getDetailType() {
            if($.isFunction(detailType)){
                return detailType();
            }else{
                return detailType;
            }
        };

        if($.trim(getUserEntityId())==''){
            alert('请选择帐号的拥有者！');
            return;
        }

        if($.trim(getUserType())==''){
            alert('请选择帐号的拥有者类型！');
            return;
        }

        $.fancybox({
            type: 'iframe',
            href:CONTEXT_PATH+'/admin/party/account/assignOne?userEntityId='+getUserEntityId()
            +'&userType='+getUserType()+'&detailType='+getDetailType(),
            fitToView :false,
            width : '90%',
            height : '90%',
            autoSize : false,
            closeClick : false,
            openEffect : 'none',
            closeEffect : 'none'
        });
    }
};

var floatTool = {
    add: function (num1, num2) {
        var r1, r2, m;
        try {
            r1 = num1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = num2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return Math.round(num1 * m + num2 * m) / m;
    },
    sub: function (num1, num2) {
        var r1, r2, m;
        try {
            r1 = num1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = num2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return Math.round(num1 * m - num2 * m) / m;
    },
    div: function (num1, num2) {
        var t1, t2, r1, r2;
        try {
            t1 = num1.toString().split('.')[1].length;
        } catch (e) {
            t1 = 0;
        }
        try {
            t2 = num2.toString().split(".")[1].length;
        } catch (e) {
            t2 = 0;
        }
        r1 = Number(num1.toString().replace(".", ""));
        r2 = Number(num2.toString().replace(".", ""));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    },
    mul: function (num1, num2) {
        var m = 0, s1 = num1.toString(), s2 = num2.toString();
        try {
            m += s1.split(".")[1].length
        } catch (e) {
        }
        try {
            m += s2.split(".")[1].length
        } catch (e) {
        }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }
};

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

function goDesktop() {
    location.href = CONTEXT_PATH+'/biz/desktop';
}
function goHome() {
    location.href = CONTEXT_PATH+'/biz/home';
}
function goLoginPage() {
    location.href = CONTEXT_PATH+'/biz/login';
}

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

function limitInput(elemt) {
    if(elemt){
        var text = $(elemt).val();
        text = text.replace(/[\\'\\"\\<\\>\\&\\(\\)\\;,]+/g,"");
        $(elemt).val(text);
    }
}