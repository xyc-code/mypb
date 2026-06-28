var isFullScreenMode=false;

$(function(){

    fixPlaceHold();
    var flag = IFdLowerIE();
  //监听全屏状态，解决esc退出全屏时状态图标显示问题
    if(flag){
        window.attachEvent('keydown',
         handleKeydown);
    }else{
        window.addEventListener('keydown',
         handleKeydown);
    }

    watchFullScreen();
    //请求后台消息数量

    $.ajax({
        url: "portal/getUnReadMessageCount?o="+Math.random()+"&_notUpdateSession=true",
        async: false,
        success: function (r) {
            if(r.flag=='success' && r.isOpen == 'true'){
                var data = r.count;
                if(data > 99){
                    data = 99;
                }
                loadMessageLayer(data);
            }
        }
    });
    //平台登录后个人信息显示条目
    loadCustomPortalSetting();
    //切换头像后不能及时展示问题处理
    $('.userinfo').on('mouseenter',function(e){
        var tempSrc = $(parent.document.body).find(".haedimg").prop('src');
        var imagSrc = (tempSrc != undefined && tempSrc != '') ? tempSrc.split("&")[0] + "&o=" + Math.random() : '';
        $(parent.document.body).find(".haedimg").prop('src',imagSrc);
    });

});

function  handleKeydown(e){
       e = e || window.event;
      if (e.keyCode === 122) {
          e.preventDefault();
        if (!isFullScreenMode) {
              fullWindow();
            }
        }else{
          quiteFullWindowBtnFullWindow();
          }
}
// 修复ie9一下placeholer问题
function fixPlaceHold(){
    if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<=9){
        $('input[placeholder]').each(function(){
            var $this = $(this);
            $this.val($this.attr('placeholder'));
            $this.on('focus.placeholder',function(){
                if($this.val() == $this.attr('placeholder')){
                    $this.val('');
                }
            }).on('blur.placeholder',function(){
                if(!$this.val()){
                    $this.val($this.attr('placeholder'));
                }
            });
        });
    }
}

/**
 * 更换主题-事件
 */
function changeThemesSkinsEvent(){
    var url = "portal/toPersonPortalConfig";
    layer.open({
        type : 2,
        title: '切换主题',
        skin: 'index-model-noborder',
        move :'.simple-movetab',
        area: ['680px', '420px'],
        content : url,
        btn: ['确认', '取消'],
        yes: function(index, layero) {
            var iframeWin = layero.find('iframe')[0].contentWindow;
            iframeWin.save();
            return false;
        },btn2: function(index, layero) {
        	var iframeWin = layero.find('iframe')[0].contentWindow;
            iframeWin.restSkin();
        },
        success: function(dom) {
            changeThemeOrSkin(dom);
        },cancel: function (index, layero) {
        	var iframeWin = layero.find('iframe')[0].contentWindow;
            iframeWin.restSkin();
         }

    });
}

// 换主题或者换肤里的交互效果
function changeThemeOrSkin(dom){
    //皮肤选择效果初始化
    dom.find('.changui-skins .preview').css('color',dom.find('.changui-skins li.on').css('backgroundColor'));
    dom.find('.changui-skins li').on('mouseenter',function(){
        var color = $(this).css('backgroundColor');
        $(this).parents('.changui-skins').find('.preview').css('color',color);
    }).on('mouseout',function(){
        var color = $(this).parent().find('li.on').css('backgroundColor');
        $(this).parents('.changui-skins').find('.preview').css('color',color);
    }).on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
    }).changeui({
        linkDom:"#theme"
    });
}

//设置
function settings(){
    layer.open({
        type : 2,
        area: ['900px', '550px'],
        title : '个人设置',
        skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin : false, // 开启最大化最小化按钮
        content : "platform/console/customed/toSysCustomedEdit"
    });
}

// 注销
function logout() {
    layer.confirm('确认要离开系统吗？', {
        title: '提示',
        icon : 3,
        area: ['400px', ''],
        closeBtn : 0,
        btn: ['确定','取消'] //按钮
    }, function(){
        window.location ='login/console/logout.jsp';
    }, function(){
        //点击取消
    });
}
//返回控制台
function backConsole() {
	window.open('console/index','_console');
}
//用户多组织身份切换
function userSwich() {
//    $('.rightTool').delegate('.userhead .switch', 'click', function(e) {
//        e.stopPropagation();
//       
//    });
    openChangeMoreOrgDailog();
}
//打开用户多组织身份切换界面
function openChangeMoreOrgDailog(){
    layer.open({
        type : 2,
        area: ['430px', '200px'],
        title : '切换身份',
        skin : 'bs-modal',
        maxmin : false, 
        closeBtn : 0,
        content : "userChangeMultipleIdentity/getChangeUserLoginOrgWeb",
        btn: ['确定','取消'],
        yes: function(index, layero){
            var iframeWin = layero.find('iframe')[0].contentWindow;
            var orgId = iframeWin.getOrgId();
            var deptId = iframeWin.getDeptId();
            var currentOrgId = iframeWin.getCurrentOrgId();
//          if(orgId == currentOrgId){
//              layer.alert('当前身份已是【' + iframeWin.getCurrentOrgName() + '】', {
//                    title : '提示',
//                    icon : 7,
//                    area: ['400px', ''], //宽高
//                    closeBtn: 0
//                  }
//              );
//              return;
//          }
            layer.confirm('确认要切换当前身份吗？', {
                title: '提示',
                icon : 3,
                area: ['400px', ''],
                btn: ['确定','取消'], //按钮
                closeBtn : 0
            }, function(){
                changeUserLoginDeptEvent(deptId,orgId);
            }, function(){
                //点击取消
            });
        }
    });
}
//切换当前登陆用户身份
function changeUserLoginDeptEvent(deptId,orgId){
    $.ajax({
        url: "userChangeMultipleIdentity/changeUserLoginOrg",
        type: 'POST',
        dataType: 'text',
        data:{
          deptId : deptId,
          orgId : orgId
        },
        success: function (r) {
            if(r == 'success') {
                window.top.location = window.top.location;
            } else {
                layer.alert(r, {icon: 7});
            }
        },
        error : function(r){

        }
    });
}

/**
 * 打开更多消息页
 */
function moreMessage() {
    addTab('我的消息','msystem/sysmsg/sysMsgController/toSysMsgManage');
}
/**
 * 获取本人未读消息数量
 */
function queryUnReadMessageAmount() {
    $.ajax({
        url: "portal/getUnReadMessageCount?o="+Math.random()+"&_notUpdateSession=true",
        // type: 'post',
        success: function (r) {
            if(r.flag=='success'){
                var data = r.count;
                if(data > 99){
                    data = 99;
                }
                if(data > 0){
                    $('#unreadMessage').html('<div class="msg-tip"><span class="text">'+data+'</span></div>');
                } else {
                    $('#unreadMessage').html('');
                }
            } else {
                layer.alert('当前会话已失效，请重新登录系统.', {icon: 7,title : '提示',area: ['400px', ''], closeBtn: 0}, function(index){
                    top.location.href="login";
                    layer.close(index);
                });
            }
        }
    });
}

/**
 * 清空个人菜单
 */
function trunkPersonalMenu() {
    try{
         event.stopPropagation();
    } catch(e){
        
    }
    layer.confirm('确认清空吗？',{
        title: '提示',
        icon : 3,
        area: ['400px', ''],
        btn: ['确定','取消'], //按钮
        closeBtn : 0
    }, function(){
        avicAjax.ajax({
            url: "portal/trunkMenu",
            type: 'post',
            dataType: 'json',
            quiet:true,
            success: function (r) {
                if(r.flag=='success'){
                    $('#personalMenuUl').html('');//清空内容
                    layer.msg("清空成功");
                } else{
                    layer.alert('清空失败！' + r.data, {
                            icon: 7,
                            area: ['400px', ''], //宽高
                            closeBtn: 0
                        }
                    );
                }
            }
        });
    }, function(){
    });
}

/**
 * 加载候选的菜单
 */
function loadMenuNotAdded() {
    layer.open({
        title: '新增菜单',
        skin: 'index-model',
        area: ['770px', '490px'],
        content: 'portal/getAvailableMenu',
        type : 2,
        btn: ['关闭'],
        yes: function(index, layero) {
            //关闭方法
            layer.close(index);
            /*var iframeWin = layero.find('iframe')[0].contentWindow;
            var toAddArray = iframeWin.getSelected();
            savePersonalMenu(toAddArray);
            layer.close(index);*/
        }
    });

}

/**
 * 加载个人菜单并更新dom
 */
function loadPersonalMenu() {
    avicAjax.ajax({
        url: "portal/getPersonalMenu?o="+Math.random(),
        type: 'get',
        dataType: 'json',
        success: function (r) {
            if(r.flag=='success'){
                var html = '';
                var data = r.data;
                for(var i = 0 ; i < data.length ; i++){
                    if(data[i].menuIcon == null){
                        html+='<li style="cursor:default"><span style="cursor: pointer;" id="li-' + data[i].menuId + '"  title="' + data[i].menuName + '" onclick="openPersonalItem(this);return false;" rel="' + data[i].menuUrl + '">' + data[i].menuName + '</span><em style="cursor: pointer;" class="icon iconfont icon-star-fill" onclick="delPersonalMenu(this,\''+data[i].menuId+'\');return false;"></em></li>';
                    }else{
                        html+='<li style="cursor:default"><span style="cursor: pointer;" id="li-' + data[i].menuId + '"  title="' + data[i].menuName + '" onclick="openPersonalItem(this);return false;" rel="' + data[i].menuUrl + '"><i class="' + data[i].menuIcon + '"></i>' + data[i].menuName + '</span><em style="cursor: pointer;" class="icon iconfont icon-star-fill" onclick="delPersonalMenu(this,\''+data[i].menuId+'\');return false;"></em></li>';
                    }
                }
                $('#personalMenuUl').html(html);
                //添加点击事件，使鼠标在显示框内点击时，显示框不消失，在显示框外点击时隐藏
                $("em").click(function(event){
                    event=event||window.event;
                    event.stopPropagation();
                });
            } else{
                layer.alert('获取失败！' + r.data, {
                        icon: 7,
                        area: ['400px', ''], //宽高
                        closeBtn: 0
                    }
                );
            }
        }
    });
}



/**
 * 保存选中菜单
 */
function savePersonalMenu(toAddArray) {
    if(toAddArray.length <= 0){
        layer.alert('请至少勾选一项菜单！' + r.data, {
                icon: 7,
                area: ['400px', ''], //宽高
                closeBtn: 0
            }
        );
        return;
    }
    avicAjax.ajax({
        url: "portal/saveMenu",
        type: 'post',
        data:{
            menuIds:toAddArray.join(";")
        },
        dataType: 'json',
        success: function (r) {
            if(r.flag=='success'){
                layer.msg("添加成功");
            } else{
                layer.alert('添加失败！' + r.data, {
                        icon: 7,
                        area: ['400px', ''], //宽高
                        closeBtn: 0
                    }
                );
            }
        }
    });
}

/**
 * 根据menuId删除选中菜单
 * @param menuId
 */
function delPersonalMenu(e,menuId) {
    // var evt = e || window.event;
    // evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble=true);
    // var title = $('#li-'+menuId).text();
    avicAjax.ajax({
        url: "portal/deleteByMenuId",
        type: 'post',
        data:{
            menuIds:menuId
        },
        dataType: 'json',
        success: function (r) {
            if(r.flag=='success'){
                $('#li-' + menuId).remove();//移除菜单
            } else{
                layer.alert('删除失败！' + r.data, {
                        icon: 7,
                        area: ['400px', ''], //宽高
                        closeBtn: 0
                    }
                );
            }
        }
    });
}

function stopPropagation(e){
    e = window.event || e;
    if(document.all){
        e.cancelBubble=true;
    }else{
        e.stopPropagation();
    }
}


/**
 * 加载个人消息并更新dom
 */
function loadPersonalMessage() {
    avicAjax.ajax({
        url: "portal/getUnReadMessageList?o="+Math.random()+"&_notUpdateSession=true",
        type: 'get',
        dataType: 'json',
        quiet:true,
        success: function (r) {
            if(r.flag=='success'){
                var html = '';
                var data = r.list;
                for(var i=0;i<data.length;i++){

                    html+='<li style="border-top: #f2f3f4 0.5px solid;padding-top: 10px;width: 100%;" title="'+data[i].title+'" data-id="'+data[i].id+'" data-broadcastFlag="'+data[i].broadcastFlag+'" onclick="readPersonalMessage(this)" rel="'+data[i].urlAddress+'"><p class="p_up">'+data[i].title+'</p><p class="p_down">' + data[i].sendDate + '</p></li>';
                }

                $('#personalMessageUl').html(html);
            } else{
                layer.alert('获取失败！' + r.data, {
                        icon: 7,
                        area: ['400px', ''], //宽高
                        closeBtn: 0
                    }
                );
            }
        }
    });
}

/**
 * 读个人消息
 * @param obj
 */
function readPersonalMessage(obj) {
    var id = $(obj).attr('data-id');
    var broadcastFlag = $(obj).attr('data-broadcastFlag');
    var url = $(obj).attr('rel');
    if(url.substr(-1)=="/"){//判断最后一位是否是 斜杠
        url=url+id;
    }
    $(obj).detailMsg({formid:id,url:url,area: ['60%', '80%'],success: function(layero, index){
        avicAjax.ajax({
            url: "portal/readMessage",
            type: 'get',
            dataType: 'json',
            data:{
              id:id,
              broadcastFlag:broadcastFlag
            },
            quiet:true,
            success: function (r) {
                queryUnReadMessageAmount();//读消息后，刷新数量
            }
        });
    }});
}



//---------------------------个人消息:end----------------------------



//常用菜单栏菜单点击事件
function openPersonalItem(obj) {
    var evt = obj || window.event;
    evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble=true);
    var title = $(obj).text(),
        url = $(obj).attr("rel");
    addTab(title,url);
}
/**
 * 设置主体高度
 */
function setHeight() {
    var head = $('.header'),
        body = $('.mainBody'),
        main = $('.main');
    main.height($('body').innerHeight() - head.height());
    body.height($('body').innerHeight());
    $("#tabs-panel").height($('body').innerHeight() - head.height());
    $(window).on('resize', function() {
        main.height($('body').innerHeight() - head.height());
        body.height($('body').innerHeight());
    });
}

//授权信息
function showLicenseInfo(){
    $.ajax({
        cache: false,
        type: "GET",
        url:'platform/systemversion/getLicenseInfo',
        dataType:"html",
        error: function(data) {
            layer.alert('授权信息获取失败!',{iconType:3,title:'提示',area: ['400px', '']});
        },
        success: function(data) {
            layer.alert(data,{title:'授权信息',area: ['450px', '']});
            
        }
    });
}
//版本信息
function showVersionInfo(){
    $.ajax({
        cache: false,
        type: "GET",
        url:'platform/systemversion/getVersionInfo',
        dataType:"html",
        error: function(data) {
            layer.alert('授权信息获取失败!',{iconType:3,title:'提示',area: ['400px', '']});
        },
        success: function(data) {
            layer.alert(data,{title:'版本信息',area: ['400px', '']});
            
        }
    });
}



//全屏执行方法
function fullWindow() {
	$("#fullWindowBtn").hide();
	$("#quiteFullWindowBtn").show();
	isFullScreenMode=false;
	var content = document.getElementById('content');
	fullScreen(content);
};
//退出全屏执行方法
function quiteFullWindowBtnFullWindow() {
	$("#fullWindowBtn").show();
	$("#quiteFullWindowBtn").hide();
	isFullScreenMode=true;
	var content = document.getElementById('content');
	exitFullScreen();
};
function WALL_web() {
	var WshShell = new ActiveXObject('WScript.Shell')
	WshShell.SendKeys('{F11}');
}

function fullScreen(el) {
	var rfs = el.requestFullScreen || el.webkitRequestFullScreen
			|| el.mozRequestFullScreen || el.msRequestFullScreen, wscript;
	if (typeof rfs != "undefined" && rfs) {
		rfs.call(el);
		return;
	}
	if (typeof window.ActiveXObject != "undefined") {
		try{
			wscript = new ActiveXObject("WScript.Shell");
			if (wscript) {
				wscript.SendKeys("{F11}");
			}
		}catch(e){
			$("#fullWindowBtn").show();
			$("#quiteFullWindowBtn").hide();
			layer.alert("请设置IE浏览器允许加载ActiveX控件，否则无法支持全屏操作！",{title:'提示',area: ['450px', '']});
		}
	}

}
function exitFullScreen(el) {
	var el = document, cfs = el.cancelFullScreen || el.webkitCancelFullScreen
			|| el.mozCancelFullScreen || el.exitFullScreen, wscript;

	if (typeof cfs != "undefined" && cfs) {
		cfs.call(el);
		return;
	}

	if (typeof window.ActiveXObject != "undefined") {
		wscript = new ActiveXObject("WScript.Shell");
		if (wscript != null) {
			wscript.SendKeys("{F11}");
		}
	}

} 

function openMainFrame(title,url,id){
	//tab标题长度大于10个字符,截取前10个,后面的显示为...
    var preTitle = title;
    if(title != null && title != '' && title != undefined ){
        if(title.length > 10){
            title = title.substr(0,10) + "...";
        }
    }
    if(!url) return;
	 var exist=false;
	    var tabIndex=0;
	    var allTabs=$('#tabs-panel').tabs('tabs');
	    for(var i=0;i<allTabs.length;i++){
	        var tab=allTabs[i];
	        if(tab.attr("id")==id){
	            exist=true;
	            tabIndex=$('#tabs-panel').tabs('getTabIndex',tab);
	            break ;
	        };
	    }
	    if (!exist && url != undefined && url != "") {
	        $('#tabs-panel').tabs('add', {
	            title: title,
	            content:  '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;"></iframe>',
	            closable: true
	        });
	    } else {
	        $('#tabs-panel').tabs('select', tabIndex); //匹配到title，就显示这个窗口
	    }
	    //获取当前添加的tab并增加title属性
	                var currentTab = $('#tabs-panel').tabs('getSelected');
	                if(currentTab != null && currentTab != '' && currentTab != undefined){
	                    currentTab.attr("title",preTitle);
	                    currentTab.attr("id",id);
	                }
	                $('.tabs-icon').remove();
}
function selectTabs(){
	
}
//打开方式:top
function openTop(title,url){
    if(!url) return;
    window.open(url, '_top');
}
//打开方式:blank
function openBlank(title,url){
    if(!url) return;
    window.open(url, '_blank');
}
//打开方式:self
function openSelf(title,url){
    if(!url) return;
     window.open(url,'_self');
}
//显示消息弹框
function loadMessageLayer(dataSize){
    avicAjax.ajax({
        url: "portal/getUnReadMessageList?o="+Math.random()+"&_notUpdateSession=true",
        type: 'get',
        dataType: 'json',
        quiet:true,
        success: function (r) {
            if(r.flag=='success'){
                var massageSize = $('.msg-tip span').text();
                var data = r.list;
                if(data.length > 0){

                   // var html = '<div style="position:relative; height:auto; min-height:100%;overflow-y: hidden;">' +
                     //   '<div class="right-down-massage-list" style="height: 500px;width: 100%;">';

                    /*for(var i=0;i<data.length;i++){
                        html += '<div class="right-down-massage" style="width: 100%;height: 30px;font-size: 13px;padding: 10px;cursor:pointer;" title="' + data[i].title + '" rel="' + data[i].urlAddress + '" data-id="'+data[i].id+'" data-broadcastFlag="'+data[i].broadcastFlag+'" onclick="seachMassage(this)" >' +
                            '<div class="right-down-massage-left" style="width: 75%;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;float: left;">'+data[i].title+'</div>' +
                            '<div class="right-down-massage-right" style="width: 25%;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;float: right;text-align: center;">' + data[i].sendDate.substring(5,10) + '</div>' +
                            '</div>'
                    }*/
                    var htmlbody = ' <div style="margin: 2px 20px 10px;overflow: auto;height:330px;">' +
                    '  <div style="margin-top: 10px;">' +
                        '  <table width="100%" style="margin-top: 10px;">' +
                        ' <colgroup>' +
                        '    <col style="width: 65%;"/>' +
                        '   <col style="width: 18%;"/>' +
                        ' </colgroup>';

                    for(var i=0;i<data.length;i++){
                        htmlbody +=  '<tr style="cursor:pointer"  rel="' + data[i].urlAddress + '" data-id="'+data[i].id+'" data-broadcastFlag="'+data[i].broadcastFlag+'"  onclick="seachMassage(this)">' +
                   '  <td style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #333;height: 40px;line-height: 40px;padding: 0 0.5%;border-bottom: 1px solid #e9e9e9;"><img src="avicit/platform6/console/demostorage/portal/customeservice/index/images/backlog01.png" height="7" width="7" alt=""/>'+data[i].title+'</td>' +
                   ' <td style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #333;height: 40px;line-height: 40px;padding: 0 0.5%;border-bottom: 1px solid #e9e9e9;">'+data[i].sendUserAlias+'</td>' +
                   ' <td style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #333;height: 40px;line-height: 40px;padding: 0 0.5%;border-bottom: 1px solid #e9e9e9;">'+data[i].sendDate.substring(5,10)+'</td>' +
                   '</tr>';
                    }
                  /* ' <tr>' +
                   ' <td style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #333;height: 40px;line-height: 40px;padding: 0 0.5%;border-bottom: 1px solid #e9e9e9;"><img src="avicit/platform6/console/demostorage/portal/customeservice/index/images/backlog01.png" height="7" width="7" alt=""/>服务请求：1等待您的处理！</td>' +
                   '   <td style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #333;height: 40px;line-height: 40px;padding: 0 0.5%;border-bottom: 1px solid #e9e9e9;">平台管理员</td>' +
                   ' <td style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #333;height: 40px;line-height: 40px;padding: 0 0.5%;border-bottom: 1px solid #e9e9e9;">2021-05-12</td>' +
                   '  </tr>' +
                   ' <tr>' +
                   '<td style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #333;height: 40px;line-height: 40px;padding: 0 0.5%;border-bottom: 1px solid #e9e9e9;"><img src="avicit/platform6/console/demostorage/portal/customeservice/index/images/backlog02.png" height="7" width="7" alt=""/>服务请求：1等待您的处等待您的处等待您的处理！' +
                   '</td>' +
                   '<td style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #333;height: 40px;line-height: 40px;padding: 0 0.5%;border-bottom: 1px solid #e9e9e9;">平台管理员</td>' +
                   ' <td style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #333;height: 40px;line-height: 40px;padding: 0 0.5%;border-bottom: 1px solid #e9e9e9;">2021-05-12</td>' +
                   '  </tr>' +
                   ' <tr>' +
                   '     <td style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #333;height: 40px;line-height: 40px;padding: 0 0.5%;border-bottom: 1px solid #e9e9e9;"><img src="avicit/platform6/console/demostorage/portal/customeservice/index/images/backlog02.png" height="7" width="7" alt=""/>服务请求：1等待您的处理！</td>' +
                   '     <td style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #333;height: 40px;line-height: 40px;padding: 0 0.5%;border-bottom: 1px solid #e9e9e9;">平台管理员</td>' +
                   '    <td style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #333;height: 40px;line-height: 40px;padding: 0 0.5%;border-bottom: 1px solid #e9e9e9;">2021-05-12</td>' +
                   '</tr>' +*/
                    htmlbody+= '</table>'+
               '  </div>'+
               '  </div>';
               // html += '<div>'
                   // htmlbody += '</div>'
               htmlbody += '<footer  style="position:absolute; bottom:0;" data-position="fixed" data-tap-toggle="false"><div class="more-massage-btn" style="width: 520px;padding: 10px;font-size: 13px;cursor:pointer;border-top: 1px solid #eee;" onclick="rightDownMoreMessage();">查看全部消息</div></footer>';
                //    htmlbody +=  '<div>';

               var layerIndex=layer.open({
                   type: 1,
                   area: ['540px', '400px'],
                   title: ['<span style="color:red;">消息通知(' + dataSize + ')</span>', 'font-size:16px;padding-left: 10px;'],
                   shade: 0,
                   time: 0,
                   maxmin: true,
                   offset: 'rb',
                   content: htmlbody,
                   success:function(layero){
                       layero.find('.layui-layer-max').hide();

                   },
                   min:function(layero,index){

                     setTimeout(function(){
                       //console.log(document.documentElement.clientHeight);

                         layero.css({left:''+document.documentElement.clientWidth-540+'px',width:'540px',right:'20px',top:''+document.documentElement.clientHeight-40+'px'});
                         layero.find('.layui-layer-max').show();
                         $("footer").hide();
                     })


                   },
                   restore:function (layero){
                       layero.find('.layui-layer-max').hide();
                       $("footer").show();

                   }
               })



               $.ajax({
                   url: "platform/sysprofile/getProfile/PLATFORM_V6_MESSAGE_DIALOG_TIME.json",
                   type: "get",
                   datatype: "json",
                   success: function (a) {
                     setTimeout(function(){
                           $('.layui-layer-min').click();

                       },a);

                   }
               });
           }
       }
   }
});
}

//右下角消息弹框查看消息内容
function seachMassage(obj){
var index = window.layer.index;
layer.close(index);
readPersonalMessage(obj);
}

//监听全屏状态，解决esc退出全屏时状态图标显示问题
function watchFullScreen() {
var flag = IFdLowerIE()
if (flag) {
   document.attachEvent("fullscreenchange", function () {
     var   isFull = document.fullscreenElement ||

           document.msFullscreenElement ||

           document.mozFullScreenElement ||

           document.webkitFullscreenElement || false;
        isFullScreenMode = !!isFull;
            if(!isFullScreenMode){
                $("#fullWindowBtn").show();
               $("#quiteFullWindowBtn").hide();
            }else{
                 $("#fullWindowBtn").hide();
               $("#quiteFullWindowBtn").show();
            }
   }, false);

   document.attachEvent("mozfullscreenchange", function () {
      var  isFull = document.fullscreenElement ||

           document.msFullscreenElement ||

           document.mozFullScreenElement ||

           document.webkitFullscreenElement || false;
      isFullScreenMode = !!isFull;
            if(!isFullScreenMode){
                $("#fullWindowBtn").show();
               $("#quiteFullWindowBtn").hide();
            }else{
                 $("#fullWindowBtn").hide();
               $("#quiteFullWindowBtn").show();
            }

   }, false);

   document.attachEvent("webkitfullscreenchange", function () {
     var  isFull = document.fullscreenElement ||

           document.msFullscreenElement ||

           document.mozFullScreenElement ||

           document.webkitFullscreenElement || false;
     isFullScreenMode = !!isFull;
            if(!isFullScreenMode){
                $("#fullWindowBtn").show();
               $("#quiteFullWindowBtn").hide();
            }else{
                 $("#fullWindowBtn").hide();
               $("#quiteFullWindowBtn").show();
            }

   }, false);

   document.attachEvent("msfullscreenchange", function () {
        var isFull = document.fullscreenElement ||

           document.msFullscreenElement ||

           document.mozFullScreenElement ||

           document.webkitFullscreenElement || false;
           isFullScreenMode = !!isFull;
            if(!isFullScreenMode){
                $("#fullWindowBtn").show();
               $("#quiteFullWindowBtn").hide();
            }else{
                 $("#fullWindowBtn").hide();
               $("#quiteFullWindowBtn").show();
            }
   }, false);
} else {
   document.addEventListener("fullscreenchange", function () {
       var isFull = document.fullscreenElement ||

           document.msFullscreenElement ||

           document.mozFullScreenElement ||

           document.webkitFullscreenElement || false;
           isFullScreenMode = !!isFull;
            if(!isFullScreenMode){
                $("#fullWindowBtn").show();
               $("#quiteFullWindowBtn").hide();
            }else{
                 $("#fullWindowBtn").hide();
               $("#quiteFullWindowBtn").show();
            }
   }, false);

   document.addEventListener("mozfullscreenchange", function () {
       var isFull = document.fullscreenElement ||

           document.msFullscreenElement ||

           document.mozFullScreenElement ||

           document.webkitFullscreenElement || false;
       isFullScreenMode = !!isFull;
        if(!isFullScreenMode){
                $("#fullWindowBtn").show();
               $("#quiteFullWindowBtn").hide();
            }else{
                 $("#fullWindowBtn").hide();
               $("#quiteFullWindowBtn").show();
            }

   }, false);

   document.addEventListener("webkitfullscreenchange", function () {
      var isFull = document.fullscreenElement ||

           document.msFullscreenElement ||

           document.mozFullScreenElement ||

           document.webkitFullscreenElement || false;
      isFullScreenMode = !!isFull;
        if(!isFullScreenMode){
                $("#fullWindowBtn").show();
               $("#quiteFullWindowBtn").hide();
            }else{
                 $("#fullWindowBtn").hide();
               $("#quiteFullWindowBtn").show();
            }

   }, false);

   document.addEventListener("msfullscreenchange", function () {
      var  isFull = document.fullscreenElement ||

           document.msFullscreenElement ||

           document.mozFullScreenElement ||

           document.webkitFullscreenElement || false;
      isFullScreenMode = !!isFull;
       if(!isFullScreenMode){
                $("#fullWindowBtn").show();
               $("#quiteFullWindowBtn").hide();
            }else{
                 $("#fullWindowBtn").hide();
               $("#quiteFullWindowBtn").show();
            }

   }, false);
}

};
//判断浏览器是否为ie8及以下
function IFdLowerIE() {
var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
var IFIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE浏览器
if (IFIE) {//如果是IE浏览器 获取具体的版本
   var IE5 = IE55 = IE6 = IE7 = IE8 = false;
   var CurIEVer = new RegExp("MSIE (\\d+\\.\\d+);");
   CurIEVer.test(userAgent);
   var IEVer = parseFloat(RegExp["$1"]);
   IE55 = IEVer == 5.5;
   IE6 = IEVer == 6.0;
   IE7 = IEVer == 7.0;
   IE8 = IEVer == 8.0;
   if (IE55 || IE6 || IE7 || IE8) {
       return true;
   }
}
return false;
};
//右下角更多消息
function rightDownMoreMessage(){
var index = window.layer.index;
layer.close(index);
moreMessage();
};

//平台登录后个人信息显示条目
function loadCustomPortalSetting(){
$.ajax({
   url:"platform/syslookuptype/getLookUpCode/PLATFORM_PORTAL_SETTING.json",
   type:"get",
   datatype:"json",
   success: function (a) {
       if(a){
           $.each(a, function (i, n) {
               /*var b = $("<li class=\"userinfo-li\" ></li>");*/
                    var b;
                    var c = n.lookupCode;
                    var d;
                    if (c == "customSetting") {
                        b = $("<li class=\"userinfo-li\" onclick=\"settings();\"></li>");
                        d = $("<a> <i class=\"icon iconfont icon-yonghu\"></i>" + n.lookupName + "</a>");
                    } else if (c == "changePassWord") {
                        b = $("<li class=\"userinfo-li\" id=\"changePassWord\"></li>");
                        d = $("<a> <i class=\"icon iconfont icon-key\"></i>" + n.lookupName + "</a>");
                    } else if (c == "changeOrg") {
                        b = $("<li class=\"userinfo-li\" onclick=\"userSwich();\"></li>");
                        d = $("<a> <i class=\"icon iconfont icon-qiehuanzhanghaohei\"></i>" + n.lookupName + "</a>");
                    } else if (c == "logOut") {
                        b = $("<li class=\"userinfo-li\" onclick=\"logout();\"></li>");
                        d = $("<a> <i class=\"icon iconfont icon-tuichu\"></i>" + n.lookupName + "</a>");
                    }
                    d.appendTo(b);
                    
                    if(c == "logOut"){
                        b.appendTo($("ul.userinfo-list")[1]);
                    }else{
                        b.appendTo($("ul.userinfo-list")[0]);
                    }
                })
            }
        }
    })
}

