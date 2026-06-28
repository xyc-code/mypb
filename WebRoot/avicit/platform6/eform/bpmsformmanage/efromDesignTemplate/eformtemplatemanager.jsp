<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common,tree,table";
%>

<html>

<head>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <title>电子表单模板管理</title>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs" />
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/treeViewStyle/treeview.css" />
    <link rel="stylesheet" href="avicit/platform6/eform/bpmsformmanage/css/style.css" />
    <link rel="stylesheet" href="avicit/platform6/eform/bpmsformmanage/css/tabs.css" />
</head>

<body>
    <style>
    .shownorth .layout-panel-north {
        overflow: visible!important;
    }
    .cicon{
		color: #cccccc;
	}
	
	.icon_active{
		color:#337ab7;
	}
    .content_box .toolbar{
        position: absolute;
        left: 0;
        right: 0;
        top:0;
    }
    .content_box{
        position: relative;
        padding-top: 40px;
        box-sizing: border-box;
    }

    </style>
    <div class="easyui-layout shownorth" fit=true>

        <div data-options="region:'west',split:true" style="width:250px;">
            <div id="tableToolbarGroup" class="toolbar">
                <div class="toolbar-left">
                    <div class="input-group form-tool-search">
                        <input type="text" name="txt" id="txt" style="width:210px;" class="form-control input-sm" placeholder="请输入分类名称或编码" />
                        <label id="searchtxtbtn" class="icon icon-search form-tool-searchicon"></label>
                    </div>
                </div>
            </div>
            <!-- 电子表单分类树 -->
            <ul id="eformTypeTreeUL" class="ztree">
            </ul>
        </div>
        <div data-options="region:'center'" class="content_box">
            <div class="toolbar" style="height:34px;">
                <div class="toolbar-left">
                    <div class="input-group form-tool-search" style="width:200px;float:right">
                        <input type="text" id="searchInput" class="form-control input-sm" placeholder="请输入模板名称">
                        <label id="searchBtn" class="icon icon-search form-tool-searchicon"></label>
                    </div>
                </div>
                <div class="toolbar-right" style="padding-right:10px;">
                    <a href="javascript:void(0)" onClick="changeShowType(1)" title="卡片展示" style="text-decoration:none;" class="cicon icon_active" id="kpicon">
                        <i class="iconfont icon-changyong" style="font-size:18px;"></i></a>&nbsp;
                    <a href="javascript:void(0)" onClick="changeShowType(2)" title="列表展示" style="text-decoration:none;" class="cicon" id="lbicon">
                        <i class="iconfont icon-menu" style="font-size:18px;"></i></a>
                </div>
            </div>
            <div id="kp" style="display: block;height:100%;">
                <div class="designTemplateArea" style="display: none;height:100%;">
                    <!-- 电子表单模块 -->
                    <div id="designTemplateDiv" style="height: 100%">
                    </div>
                </div>

            </div>
            <div id="lb" style="display:none;">
                <div style="height:100%;">
                    <table id="designTemplateModel"></table>
                    <div id="designTemplateModelPager"></div>
                </div>
            </div>
        </div>
    </div>


    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs" />
    </jsp:include>
    <script src="static/js/platform/pan/download.js"></script>
    <script src="avicit/platform6/eform/bpmsformmanage/js/common.js"></script>
    <script src="avicit/platform6/eform/bpmsformmanage/js/EformTypeTree.js"></script>
    <script src="avicit/platform6/eform/bpmsformmanage/js/EformDesignTemplate.js"></script>
    <script src="avicit/platform6/eform/bpmsformmanage/js/tabs.js"></script>
    <script src="avicit/platform6/eform/bpmsformmanage/js/EformDesignTemplateModel.js"></script>

    <script type="text/javascript">
    var showType = "${showType}";
    var eformTypeTree;
    var eformDesignTemplate;
    var eformDesignTemplateModel;
    var baseUrl = '<%=ViewUtil.getRequestPath(request)%>';

    function changeShowType(type) {
    	$(".cicon").removeClass("icon_active");
        //卡片方式
        if ("1" == type) {
            $("#kp").show();
            $("#lb").hide();
            showType = "1";
            $("#kpicon").addClass("icon_active");
        } else if ("2" == type) { //列表方式
            $("#kp").hide();
            $("#lb").show();
            showType = "2";
            $("#lbicon").addClass("icon_active");
        }
        eformTypeTree.clickNode();
    }

    $(document).ready(function() {
        eformDesignTemplate = new EformDesignTemplate("designTemplateArea", "designTemplateDiv");
        eformTypeTree = new EformTypeTree("eformTypeTreeUL");
        changeShowType(1);

        $("#searchtxtbtn").on('click',function(e){
            eformTypeTree.onseach(13,$("#txt").val());
        });
        $("#txt").on('keydown',function(e){
            eformTypeTree.onseach(e.keyCode,$("#txt").val());
        });

        $("#searchBtn").on('click',function(e){
            eformDesignTemplate.onseach(13,$("#searchInput").val());
        });
        $("#searchInput").on('keydown',function(e){
            eformDesignTemplate.onseach(e.keyCode,$("#searchInput").val());
        });
    });

    </script>
</body>

</html>