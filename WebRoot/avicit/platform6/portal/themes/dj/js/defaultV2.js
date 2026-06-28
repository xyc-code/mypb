$(function() {
    init();
   
});

function init() {
	   //$('.header').show();	
	  // $('.menubar').css('top','100px');
 
    setHeight();
    uiPath();
    setTimeout(function(){initHeadMenu();},300);
 
    $('#tabs-panel').tabs({
        onUpdate: function() {
            if (!$('#indexMenu').hasClass('menu')) {
                addSubMenu(0, 'index');
            }
        },
        /*onSelect:function(title,index){
           if(index==0){
        	   
        	  
              // var  _portlet_height = $(window.frames["mainFrame"].document).find(".container-fluid").height();
             
               $('.bodyCont').height(_portlet_height+100);
             
               // $("#tabs-panel").height(_portlet_height +55);
               // $("#tabs-panel").find(".panel-noscroll").height(_portlet_height +55);
               // $("#tabs-panel").find(".panel-body ").height(_portlet_height+55);
               $('.header').show();
               $('.menubar').css('top','100px');
               $('.bodyCont').css('top','100px');
               $('#tabs-panel').tabs('resize');
           }else {
               // $('.bodyCont').height(document.body.clientHeight-$('.header').height()-$('.menubar').height());


               //$('.header').hide();
              // $('.menubar').css('top','0px');
               //$('.bodyCont').css('top','0px');
               $('.bodyCont').height(document.body.clientHeight-$('.menubar').height());
               $('#tabs-panel').tabs('resize');

           }
        }*/
    });

    headSearch();


    addPmenu("#tabs-panel");
    initPersonalMenu();//初始化常用区
    $('.dropdown-menu').unbind('click');
	setTimeout(function() {
		 $('#tabs-panel').tabs('resize');
		
        $("#mainFrame").attr("scrolling","yes");
        //$("#mainFrame").attr("frameborder","0");
       
		
		
		//针对logo图片太大时菜单宽度计算时logo区域没有，logo加载完成后会将菜单整体向右挤出
		if ($(".logo").width() == 0) {
			initHeadMenuWidth(110);
			$('.square').hide();
		} else {
			initHeadMenuWidth(180);
			$('.square').hide();
		}
	}, 500);
}
/**
 * 初始化个人菜单
 */
function initPersonalMenu() {
    //绑定常用菜单按钮显示事件
    $('#personalMenu').on('show.bs.dropdown', function () {
        loadPersonalMenu();
    });
   
       //绑定个人收藏按钮显示事件
    $('#personalCollect').on('show.bs.dropdown', function () {
        loadPersonalCollect();
    });

    //绑定个人消息按钮显示事件
    $('#personalMessage').on('show.bs.dropdown', function () {
        loadPersonalMessage();
    });
    queryUnReadMessageAmount();//获取未读消息数量
    $('#addMessageDialog').sendMsg({ area: ['80%', '98%'] });
    
    loadUserDefined(0);
}
function loadPersonalCollect(){
    
}
/**
 * 独立添加tab标签
 * @param {string} title 标签名
 * @param {string} url   地址链接
 * @param {boolean} isRefresh   是否刷新页面
 */
function addTab(title, url, isRefresh) {
    var exist = $('#tabs-panel').tabs('exists', title); //判断是否存在tabs选项卡了，返回false或true
    if (!exist && url != undefined) {
        $('.bodyCont').height(document.body.clientHeight-$('.header').height()-$('.menubar').height());
       $('#tabs-panel').tabs('add', {
	            title: title,
	            content:  '<iframe scrolling="yes" frameborder="0"  src="' + url + '" style="width:100%;height:100%;"></iframe>',
	            closable: true
	        });
    } else {
        $('#tabs-panel').tabs('select', title); //匹配到title，就显示这个窗口

        //刷新
        if(url != undefined && isRefresh){
            $("#tabs-panel").tabs("getTab", title).find('iframe').attr('src', url);
        }
    }
}
//删除Tabs
function closeTab(id, menu, type) {
    var allTabs = $(id).tabs('tabs');
    var curTabIndex = $(menu).data("index");
    switch (type) {
        case 1: //刷新
            var nowurl = $(id).tabs("getTab", curTabIndex).find('iframe').attr('src');
            $(id).tabs("getTab", curTabIndex).find('iframe').attr('src', nowurl);
            break;
        case 2: //关闭
            $(id).tabs("close", curTabIndex);
            return false;
            break;
        case 3: //全部关闭
            for (var i = 0,len=allTabs.length; i < len; i++) {
                $(id).tabs('close', 1);
            }
            break;
        case 4: // 关闭其他全部
            for (var i = 0, len = allTabs.length; i < len; i++) {
                if (curTabIndex > i + 1 || curTabIndex == 0) {
                    $(id).tabs('close', 1);
                } else {
                    $(id).tabs('close', 2);
                }
            }
            $(id).tabs('select', 1);
            break;
    }
}

function addPmenu(id) {
    $('body').append('<div id="p-menu" class="easyui-menu" style="width:120px;">' +
        '<div id="pm-tabclosrefresh" data-options="name:1">刷新</div>' +
        '<div id="pm-tabclose" data-options="name:2">关闭</div>' +
        '<div id="pm-tabcloseall" data-options="name:3">全部关闭</div>' +
        '<div id="pm-tabcloseother" data-options="name:4">关闭其他全部</div>' +
        '</div>');

    $(id).tabs({
        onContextMenu: function(e, title, index) {
            e.preventDefault();
            if(!$(e.target).parents('li').hasClass('tabs-selected')){
                $("#pm-tabclosrefresh").hide();
            }else{
                $("#pm-tabclosrefresh").show();
            }
            $('#p-menu').menu('show', {
                left: e.pageX,
                top: e.pageY,
                onShow: function() {
                    //本标签不可关闭
                    if ($(e.target).hasClass('tabs-closable') || $(e.target).find('.tabs-title').hasClass('tabs-closable')) {
                        $("#pm-tabclose,#pm-tabcloseall").removeAttr("disabled").removeAttr("style");
                    } else {
                        $("#pm-tabclose,#pm-tabcloseall").attr({
                            disabled: "disabled"
                        }).css({
                            cursor: "default",
                            color: '#999'
                        });
                    }
                    //关闭令居
                    if ($(e.target).parents('li').siblings('li').find('.tabs-title').hasClass('tabs-closable')) {
                        $("#pm-tabcloseother").removeAttr("disabled").removeAttr("style");
                    } else {
                        $("#pm-tabcloseother").attr({
                            disabled: "disabled"
                        }).css({
                            cursor: "default",
                            color: '#999'
                        });
                    }
                }
            }).data("index", index);
        }
    });
    //右键菜单click
    $("#p-menu").menu({
        onClick: function(item) {
            if ($(item.target).attr('disabled')) return;
            closeTab("#tabs-panel", this, item.name);
        }
    });

}
var  _portlet_height = $('.bodyCont').innerHeight();
var mainFrame=document.getElementById("mainFrame");
/**
 * 设置主体高度
 */
function setHeight() {
	//$('.header').show();	
	  $('.menubar').css('top','100px');
	  var head = $('.header'),
      body = $('.bodyCont'),
      
  menubar = $('.menubar');
 // body.height($('body').innerHeight() - head.height());
  body.height($('body').innerHeight() - head.height() - menubar.height() - 10)  ;
  $(window).on('resize', function() {
      body.height($('body').innerHeight() - head.height() - menubar.height());
  });
 
    // var  _portlet_height = $(window.frames["mainFrame"].document).find("#_portlet_container").height();
      //1body.height(_portlet_height +255);

     //2 $("#tabs-panel").height(_portlet_height +255);
    // $("#tabs-panel").find(".panel-noscroll").height(_portlet_height +55);
    // $("#tabs-panel").find(".panel-body ").height(_portlet_height+55);
    //3$('#tabs-panel').tabs('resize');
    // $('#tabs-panel').tabs({height: _portlet_height});

    // var tab = $('#tabs-panel').tabs('getSelected');  // get selected panel
    // $('#tabs-panel').tabs('update', {
    //     tab: tab,
    //     options: {
    //         height: _portlet_height
    //     }
    // });
    // body.height($('body').innerHeight() - head.height());
    // $(window).on('resize', function() {
    //     // body.height($('body').innerHeight() - head.height());
    //     body.height(_portlet_height - head.height());
    // });
}

/**
 * 初始化皮肤选择按钮
 */
function uiPath() {
    $('.PathItem .item').changeui({
        linkDom: '#theme',
        childDom: '#tabs-panel'
    });
    $('#PathMenu>div').on('click', function() {
        PathRun();
    });
}

/**
 * 头部菜单下拉效果初始化
 */
var initHeadMenuTimer;
function initHeadMenu(update) {
    $('.mainBody .navbar .dropdown-menu').each(function() {
        var col = $(this).data('col') || $(this).find('>ul').length || 2,
            menuWidth = col * 190 + col * 1,
            bodyWidth = $('body').innerWidth(),
            parOffset = $(this).parents('.dropdown').offset();
        if (menuWidth + parOffset.left <= bodyWidth) {
            $(this).css({
                left: 0,
                right: 'inherit',
                width: menuWidth
            });
        } else if (menuWidth + parOffset.left > bodyWidth && menuWidth - (parOffset.left + $(this).parents('.dropdown').width()) <= 0 && menuWidth < bodyWidth) {
            $(this).css({
                left: 'inherit',
                right: 0,
                width: menuWidth
            });
        } else {
            $(this).css({
                left: 0 - parOffset.left,
                width: bodyWidth
            });
        }
        var eachCol = 190;
        if(bodyWidth < menuWidth){
            eachCol = (bodyWidth-col)/col;
        }
        var childMaxHeight = 0;

        $(this).find('>ul').removeAttr('style').each(function() {
            var marginLeft = ($(this).siblings("ul").length) ? -1 : 0;
            if ($(this).index() === 0) {
                $(this).css({
                    'width': eachCol
                });
            }
            if ($(this).index() !== 0) $(this).css({
                'borderRight': 0,
                'width': eachCol,
                'borderLeftWidth': 1,
                'marginLeft': marginLeft
            });
        });
        $(this).find('>ul').each(function() {
            var childHeight = $(this).parent().height();
            if (childHeight > childMaxHeight) {
                childMaxHeight = childHeight;
            }
            $(this).siblings('ul').css('height', childMaxHeight);
        });
    });
    clearTimeout(initHeadMenuTimer);
    $(window).on('resize',function(){
        clearTimeout(initHeadMenuTimer);
        initHeadMenuTimer = setTimeout(function(){
            initHeadMenu('update');
        },300);
    });
    if (!update && update!=='update') {
        //打开标签
        $('.dropdown').delegate(".taburl", 'click', function(e) {
            e.preventDefault();
            var title = $(this).text(),
                url = $(this).attr("rel"),
                exist = $('#tabs-panel').tabs('exists', title); //判断是否存在tabs选项卡了，返回false或true
            if (!exist && url != undefined) {
                var noclose = ($(this).data('noclose')) ? false : true;
                $('#tabs-panel').tabs({
                    onAdd:function(title,index){
                        var target = this;
                        var tab = $('#tabs-panel').tabs('getTab', title);
                        setTimeout(function(){
                            $(target).tabs('select', title).tabs('update',{
                                tab:tab,
                                options:{
                                    content: '<iframe scrolling="auto" frameborder="0"  src="' + url + '"style="width:100%;height:100%;"></iframe>'
                                }
                            });
                        },500);
                    }
                });
                $('#tabs-panel').tabs('add', {
                    title: title,
                    content: ' ',
                    closable: noclose
                });
            } else {
                $('#tabs-panel').tabs('select', title); //匹配到title，就显示这个窗口
            }
        });
    }

}

function headSearch(){
    $('.head-search').on('click',function(){
        $(this).parents('.search').addClass("open");
        $(this).parent().find('input[name="keyword"]').focus().on('blur',function(){
            $(this).parents('.search').removeClass("open");
        })
    });
}

// 给标签加菜单
function addSubMenu(index, id) {
    var p = $('#tabs-panel').tabs('getTab', index);
    var mb = p.panel('options').tab.find('a.tabs-inner');
    initSubMenu(id);
    mb.menubutton({
        menu: '#' + id + 'Menu'
    }).on('click', function(e) {
        $('#tabs-panel').tabs('select', index);
    });
}

//tab栏子菜单事件绑定
function initSubMenu(index) {
    $('#' + index + "Menu li").off().on('click', function() {
        var tagName = $(this).parents('.tabsSubMenu').data('for'),
            tab = $('#tabs-panel').tabs('getTab', tagName),
            url = $(this).attr('rel');
        if(url){
            $(this).addClass("checked").siblings("li").removeClass("checked");
            $('#tabs-panel').tabs('select', tagName).tabs('update', {
                    tab: tab,
                    options: {
                        title: tagName,
                        content: '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;"></iframe>',
                    }
            });
        }
    });
}
//ie9以上美化滚动条
function perfectScroll(dom,type) {
    var action = type||"";
    dom.perfectScrollbar(action);
}

// 头部菜单左右滚动
function initHeadMenuWidth(leftWidth) {
    var movex = 0;
    if(leftWidth == null || leftWidth == ''){
    	leftWidth = 0;
    }

    function renden() {
        var menu = $('.mainBody .navbar');
        // var lFixed = $('.header .logoDom').width();
        // var rFixed = $('.header .toolbar').offset().left+leftWidth;
        var menu_width=50;
        $('.mainBody .navbar ul a').each(function(){
            menu_width+=$(this).width();
        });
        var body_width=$('.mainBody').width();
        menu.removeAttr("style").find('.sbtn').remove();
        if (menu_width  > body_width) {
            var maxContent = 0;
            menu.find(">ul>a").each(function() {
                maxContent += $(this).outerWidth() + 4;
            });
            menu.css({
                width: body_width - 30,
                overflow: 'hidden'
            }).find(">ul").css({
                positon: 'relative',
                width: maxContent
            });

            var menufix = $('.mainBody .navbar'),
                eW = menufix.width() - 60,
                menuUl = $('.mainBody .navbar>ul');
            var leftBtn = $('<div class="sbtn icon icon-xiangzuojiantou"></div>')
                .css({
                    left: 0
                })
                .on('mouseup', function() {
                    movex += eW / 2;
                    if (movex >= 0) {
                        movex = 0;
                        $(this).hide();
                    } else {
                        $(this).show();
                    }
                    menuUl.animate({
                        "left": movex
                    }, 100);
                    $(this).parent().find('.icon-xiangyoujiantou').show();
                });
            if (movex >= 0) {
                leftBtn.hide();
            }
            var rightBtn = $('<div class="sbtn r icon icon-xiangyoujiantou"></div>')
                .css({
                    right: 0
                })
                .on('mouseup', function() {
                    if (menuUl.width() - Math.abs(movex - eW) < eW) {
                        movex -= (menuUl.width() - Math.abs(movex - eW));
                        $(this).hide();
                    } else {
                        movex -= eW / 2;
                        $(this).show();
                    }
                    menuUl.animate({
                        "left": movex
                    }, 100);
                    $(this).parent().find('.icon-xiangzuojiantou').show();
                    
                });
            menu.append(leftBtn);
            menu.append(rightBtn);
        }
        
        var headmenuClone, clonedom2;
		var navListClone, clonedom;
		//一级菜单可以打开
		menu.find('.firstclass').on('click', function(e) {

		            e.stopPropagation();
		            e.preventDefault();
//		            var title = $(this).text();
                    var _id_ = $(this).attr("id");
		            var title = $(this).attr("title");
		            var url = $(this).attr("rel");
		            if(typeof(url) == 'undefined' || url == '')return;
					if(url.indexOf("paraSource") != -1){
						url = url +"&currentSkins="+currentSkins+ "&orgId="+currentOrgIdentity + "&deptId="+deptId;
					}
		            var openType = $(this).attr("openType");//打开方式
		            if(openType == '_blank'){
		                openBlank(title,url);
		            } else if(openType == '_top'){
		                openTop(title,url);
		            } else if(openType == '_self'){
		                openSelf(title,url);
		            } else {// default mainframe
		                openMainFrame(title,url,_id_);
		            }

            });
        menu.find('.dropdown').each(function() {
            var that = $(this);
            $(this).off().on('mouseenter', function() {
            	
            	var ct = $(this).find(".subList");
            	os = $(this).offset(),
                // w = $(this).innerWidth(),
                w = os.left,
                that = $(this);
                var _menubar_top= $('.menubar').offset().top+$('.menubar').height();
                $(".navListClone1").remove();
		        clonedom = ct.clone(true);
		        $(this).addClass('on').siblings().removeClass('on');
		      
		        if (!ct.length) return;
		        $(document).off('mousemove.navclone');
		        clonedom.find('.taburl').on('click', function(e) {

		            e.stopPropagation();
		            e.preventDefault();
//		            var title = $(this).text();
                    var _id_ = $(this).attr("id");
		            var title = $(this).attr("title");
		            var url = $(this).attr("rel");
		            if(typeof(url) == 'undefined' || url == '')return;
					if(url.indexOf("paraSource") != -1){
						url = url +"&currentSkins="+currentSkins+ "&orgId="+currentOrgIdentity + "&deptId="+deptId;
					}
		            var openType = $(this).attr("openType");//打开方式
		            if(openType == '_blank'){
		                openBlank(title,url);
		            } else if(openType == '_top'){
		                openTop(title,url);
		            } else if(openType == '_self'){
		                openSelf(title,url);
		            } else {// default mainframe
		                openMainFrame(title,url,_id_);
		            }
		
		        });
		       /* var af  = $('<iframe src="about:blank" frameBorder=0 marginHeight=0 marginWidth=0'+
		                                    ' style="position:absolute; visibility:inherit;'+
		                                    'top:0px;left:0px;height:100%;width:100%;z-Index:-1;'+
		                                    'filter=\'progid:DXImageTransform.Microsoft.Alpha('+
		                                        'style=0,opacity=0)\';"></iframe>');
		        af.appendTo(clonedom);*/
		        $("body").append(clonedom.removeAttr('style'));
		        clonedom.wrap('<div class="navListClone1" id="navListClone1"></div>');
		        navListClone = $('.navListClone1');
                
                //判断与父级菜单平行向下时能否显示全
		        if (navListClone.length && os.top + navListClone.innerHeight() > ($('body').innerHeight()-50)) {
		        	//显示不全时判断与父级菜单平行向上时能否显示的全
		        	if(navListClone.length && os.top +  $(this).innerHeight()< navListClone.innerHeight()){
		        		//显示不全时判断上边框与浏览器齐平时能否显示全
		        		 if(navListClone.innerHeight() > $('body').innerHeight()){ 
		        			 //显示不全满屏显示
		        			 navListClone.css({
		    	                 left: w,
		    	                 zIndex:11,
		    	                 top: _menubar_top-$('html').scrollTop(),
		    	                 height:$('body').innerHeight()-50,
		    	                 'overflow-y':'auto'
		    	             });
		        		 }else{
		        			 navListClone.css({
		    	                 left: w,
		    	                 zIndex:11,
		    	                 top: _menubar_top-$('html').scrollTop()
		    	             });
		        		 }
		        	}else{
		                navListClone.css({
		                    left: w,
		                    zIndex:11,
		                    //top: os.top - navListClone.innerHeight() + $(this).innerHeight()
		                    top:_menubar_top-$('html').scrollTop()
		                });
		        	}
		        } else {
		            navListClone.css({
		                top: _menubar_top-$('html').scrollTop(),
		                left: w,
		                zIndex:11
                        // position:"relative"
		            });
		        }
                $('.navListClone1').on('mouseleave', function(e) {
		        	if(!isInOrOut(2)){
		        	      navListClone.remove();
		        	      $(".navListClone2").remove();
		                  clonedom = null;
		                  navListClone = null;
		                  that.removeClass('on');
		        	}
		        });
            	
            }).on('mouseleave', function() {
            	var ct = $(this).find('.subList');
                var that = $(this);
                if(!ct.length) return;
                $(document).on('mousemove.navclone', function(e) {
                    if (!$(e.target).parents().is('.navListClone1') && !$(e.target).is('.navListClone1') 
                    		&& !$(e.target).parents().is('.navListClone2') && !$(e.target).is('.navListClone2')
                    		&& !$(e.target).parents().is('.navListClone3') && !$(e.target).is('.navListClone3')
                    		&& !$(e.target).parents().is('.navListClone4') && !$(e.target).is('.navListClone4')) {
                        if (navListClone) {
                            navListClone.remove();
                            clonedom = null;
                            navListClone = null;
                            that.removeClass('on');
                            $(".navListClone2").remove();
                            $(".navListClone3").remove();
                            $(".navListClone4").remove();
                        }
                    }
                });
            });
            
        });
    }
    renden();
    $(window).on('resize.headmenu', function() {
        renden();
    });
    
    $('.navbar>ul>a>li>.subList>.subChild').mouseenter(function(){
    	
    	cloneChild(this,2);
    });

    $('.navbar>ul>a>li>.subList>.subChild>ul>.subChild').mouseenter(function(){
    	cloneChild(this,3);
    });
    $('.navbar>ul>a>li>.subList>.subChild>ul>.subChild>ul>.subChild').mouseenter(function(){
    	cloneChild(this,4);
    });
}


//复制三、四、五级菜单并显示
function cloneChild(current,level){
	var navListClone2,clonedom2;
    var ct = $(current).children('ul'),
        os = $(current).offset(),
        parentLeft = $(".navListClone1").css("left").substring(0,$(".navListClone1").css("left").length-2);
        w =  parseInt(parentLeft) + (level - 1) * 180,
    $(".navListClone"+level).remove();
    clonedom2 = ct.clone(current);
    $(current).addClass('on').siblings().removeClass('on');
    if (!ct.length) return;
    $("body").append(clonedom2.removeAttr('style'));
    clonedom2.wrap('<div class="navListClone'+level+'" id="navListClone'+level+'" ><div class="navList"></div></div>');
    $('.navListClone'+level+' li ul').hide();
    navListClone2 = $('.navListClone'+level);
    //判断与父级菜单平行向下时能否显示全
    if (navListClone2.length && os.top + navListClone2.innerHeight() > $('body').innerHeight()) {
    	//显示不全时判断与父级菜单平行向上时能否显示的全
    	if(navListClone2.length && os.top +  38 < navListClone2.innerHeight()){
    		 //显示不全时判断上边框与浏览器齐平时能否显示全
    		 if(navListClone2.innerHeight() > $('body').innerHeight()){
    			 //显示不全满屏显示
    			 navListClone2.css({
	                 left: w,
	                 zIndex:11,
	                 top: 0,
	                 height:$('body').innerHeight(),
	                 'overflow-y':'auto'
	             });
    		 }else{
    			 navListClone2.css({
	                 left: w,
	                 zIndex:11,
	                 top: 0
	             });
    		 }
    	}else{
            navListClone2.css({
                left: w,
                zIndex:11,
                top: os.top - navListClone2.innerHeight() + 38
            });
    	}
    } else {
        navListClone2.css({
            // top: os.top,
            top:os.top-$('html').scrollTop(),
            left: w,
            zIndex:11
//            ,
//            bottom: 'inherit'
        });
    }
    $('.navListClone'+level).on('mouseleave', function(e) {
    	if(!isInOrOut(level+1) && isInOrOut(level-1)){
  		  	$(".navListClone"+(level+1)).remove();
    	}
    	if(!isInOrOut(level+1) && !isInOrOut(level-1)){
            $(".navList>ul>li").removeClass('on');
    		for(var i = 1;i<=level+1;i++){
      		  	$(".navListClone"+i).remove();
    		}
    	}
    });
}
function isInOrOut(id){
	if(!$("#navListClone"+id).length) return false;
    var wx = window.event.clientX;
    var wy = window.event.clientY;
    var d_left = document.getElementById("navListClone"+id).offsetLeft;
    var d_top = document.getElementById("navListClone"+id).offsetTop;
    //var d_width = document.getElementById("navListClone"+id).clientWidth;
	var d_width = 180;
    var d_height = document.getElementById("navListClone"+id).clientHeight;
    if(wx < d_left || wy<d_top || wx > (d_left + d_width) || wy > (d_top + d_height)){
	    //不在内
	    return false;
	}else{
	    return true;
	}
}

