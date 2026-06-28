<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8"/>
    <title>平台常用组件示例代码</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <link rel="stylesheet" type="text/css" href="avicit/platform6/console/demostorage/css/style.css"/>
    <link rel="stylesheet" type="text/css" href="static/h5/skin/iconfont/iconfont.css"/>
    <script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js"></script>

</head>
<script type="text/javascript">
    var consoleFlag = "_console";//定义全局变量用于区分前后台
    //当前正在操作的API
    var currentAPI = 'sysUserAPI';
    //当前操作的二级菜单
    var currentTag = '';
    $(document).ready(function () {
        //选中状态
        $(".firstMenu li").click(function () {
            $(this).siblings().find('.secondMenu').hide();
            $('.secondMenu li').removeClass("active");
            $(this).addClass("active").siblings().removeClass("active");
        });

        //选中子集清除父级active
        $(".secondMenu li").click(function (e) {
            e.stopPropagation();
            $(this).parent().parent().removeClass("active");
        });
        $(".thirdMenu li").click(function (e) {
            e.stopPropagation();
            $(this).parent().parent().removeClass("active");
        });

        //二级导航展开收起
        /*$(".next-layer,.nonext-layer").click(function () {*/
        $(".firstMenu li").click(function () {
            $(this).children(".secondMenu").find('.thirdMenu').hide();
            $(this).children(".secondMenu").toggle();
            $(this).toggleClass("arrow").siblings().removeClass("arrow");
            // 处理只有一级菜单的情况
            if ($(this).children(".secondMenu").length != 0) {
                //选中一级菜单并且为展开状态时，一级菜单取消高亮显示，第一个二级菜单高亮显示
                $(this).removeClass('active')
                if ($(this).hasClass('arrow')) {//向下
                    $(this).children("ul.secondMenu").find('li:first').addClass('active')
                } else {
                    $(this).addClass('active')
                }
            }
        });
        
        //三级导航展开收起
        $(".secondMenu li").click(function () {
            $(this).children(".thirdMenu").toggle();
            $(this).siblings().removeClass("arrow").find('.thirdMenu').hide();
            if ($(this).children(".thirdMenu").length != 0) {
                //选中一级菜单并且为展开状态时，一级菜单取消高亮显示，第一个二级菜单高亮显示
                $(this).removeClass('active');
                if ($(this).hasClass('arrow')) {//向下
                    $(this).children("ul.thirdMenu").find('li:first').addClass('active');
                } else {
                    $(this).addClass('active');
                }
            }
        });
        
        

        $('.firstMenu li.next-layer a').on('click', function (e) {
            //获取当前操作的一级菜单
            currentTag = $(this).attr('id');
            currentTag = (currentTag == undefined || currentTag == '') ? 'formDemo' : currentTag;
            //根据前操作的一级菜单切换子页面
            if (currentTag == 'portalDemo') {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/portal/oa/operation/index/index.html');
            } else {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/'+currentTag + '.jsp');
                //默认显示每个1级菜单下的第一个二级菜单
                if (currentTag == 'formDemo') {
                    currentAPI = 'sysUserAPI';
                } else if (currentTag == 'tableDemoManage') {
                    currentAPI = 'basicTableDemo';
                } else if (currentTag == 'layerDemoManage') {
                    currentAPI = 'layerDemo';
                }
            }
        });

        //左侧二级菜单绑定事件
        $('.secondMenu li').on('click', function (e) {
            //获取当前操作的二级菜单
            currentAPI = $(this).attr('id');
            if (currentAPI == "OA") {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/portal/oa/operation/index/index.html');
            } else if (currentAPI == "Finance") {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/portal/financemanage/operation/index/index.html');
            } else if (currentAPI == "product_management") {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/portal/producemanage/index/index.html');
            } else if (currentAPI == "customerService") {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/portal/customeservice/index/index.html');
            } else if (currentAPI == "project_management") {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/portal/projectmanage/index/index.html');
            } else if (currentAPI == "loginPage") {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/loginpage.jsp');
            } else {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/'+currentTag + '.jsp');
                $("#contentBody").contents().find('.codeGenerator').hide();
                $("#contentBody").contents().find('#' + currentAPI).parent().show();
            }
        });
        
        $('.thirdMenu li').on('click', function (e) {
            currentAPI = $(this).attr('id');
            if (currentAPI == "operation_OA") {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/portal/oa/operation/index/index.html');
            } else if (currentAPI == "operation2_OA") {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/portal/oa/operation2/index/index.html');
            } else if (currentAPI == "statisticalBoard") {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/portal/oa/showresult/index/index.html');
            } else if (currentAPI == "operation_Finance") {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/portal/financemanage/operation/index/index.html');
            } else if (currentAPI == "statisticalView") {
                $('#contentBody').attr('src', 'avicit/platform6/console/demostorage/portal/financemanage/statisticalboard/index/index.html');
            }
            
        });
        $(".firstMenu li:first").click();
    })


</script>

<body>
<div class="head-wrap clearfix">
    <img src="avicit/platform6/console/demostorage/images/logo.png" alt=""/>
    <h1>平台常用组件示例代码</h1>
</div>
<div class="pageIndex">
    <ul class="firstMenu">
        <li class="menuPic1 next-layer" title="表单">
            <a id="formDemo"><i class="icon iconfont icon-desktop"></i>表单</a>
            <ul class="secondMenu">
                <li id="sysUserAPI"><span>表单示例</span></li>
            </ul>
        </li>
        <li class="menuPic2 next-layer" title="表格">
            <a id="tableDemoManage"><i class="icon iconfont icon-index"></i>表格</a>
            <ul class="secondMenu">
                <li id="basicTableDemo"><span>基础表格</span></li>
                <li id="editTableDemo"><span>行编辑表格</span></li>
            </ul>
        </li>
        <li class="menuPic3 next-layer" title="门户">
            <a id="portalDemo"><i class="icon iconfont icon-iconfontbiaoge"></i>门户</a>
            <ul class="secondMenu">
                <li id="OA" class="next-layer"><span>OA办公</span>
                    <ul class="thirdMenu">
                        <li id="operation_OA"><span>工作台</span></li>
                        <li id="operation2_OA"><span>工作台2</span></li>
                        <li id="statisticalBoard"><span>统计看板</span></li>
                    </ul>
                </li>
                <li id="Finance" class="next-layer"><span>财务管理</span>
                    <ul class="thirdMenu">
                        <li id="operation_Finance"><span>工作台</span></li> 
                        <li id="statisticalView"><span>统计视图</span></li>
                    </ul>
                </li>
                <li id="product_management" ><span>生产管理</span></li>
                <li id="customerService"><span>客户服务</span></li>
                <li id="project_management"><span>项目管理</span></li>
                <li id="loginPage"><span>登录页</span></li>
            </ul>
        </li>
        <li class="menuPic4 next-layer" title="其他">
            <a id="layerDemoManage"><i class="icon iconfont icon-changyong"></i>其他</a>
            <ul class="secondMenu">
                <li id="layerDemo"><span>弹窗示例</span></li>
            </ul>
        </li>
    </ul>
</div>
<div class="wapper" id="title" name="title">
    <iframe src="avicit/platform6/console/demostorage/formDemo.jsp" name="contentBody" id="contentBody" width="100%" height="100%"
            frameBorder="0" scrolling="auto"></iframe>
</div>
<div id="backToTop" onmouseover="backToTopMouseOver()" onmouseout="backToTopMouseOut()" class="backToTop"
     onclick="backToTop()">
    <img src="avicit/platform6/console/demostorage/images/backToTop.png" alt="" id="backToTopImg"/>
    <p>回到顶部</p>
</div>
</body>
<script type="text/javascript">
    function backToTopMouseOut() {
        document.getElementById("backToTopImg").src = "avicit/platform6/console/demostorage/images/backToTop.png";
    }

    function backToTopMouseOver() {
        document.getElementById("backToTopImg").src = "avicit/platform6/console/demostorage/images/backToTop-hover.png";
    }

    function backToTop() {
        $("#" + currentAPI).click();
    }

</script>

</html>