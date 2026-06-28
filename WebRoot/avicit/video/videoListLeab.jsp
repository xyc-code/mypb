<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
    String importlibs = "common";
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>视频列表页面查询标签</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" href="avicit/platform6/console/demostorage/portal/projectmanage/index/css/index.css" />
    <link rel="stylesheet" href="avicit/platform6/console/demostorage/portal/projectmanage/index/font-awesome-4.7.0/css/font-awesome.css" />
    <link rel="stylesheet" href="avicit/platform6/console/demostorage/portal/projectmanage/index/font-awesome-4.7.0/css/font-awesome.min.css" />

    <script src="avicit/platform6/console/demostorage/portal/projectmanage/index/js/jquery1.42.min.js"></script>
    <style>
        .searchBox {
            padding: 5px;
            left: 0;
            top: 90px;
            width: 599px;
            background: #fff
        }

        .searchBox input {
            color: #888888;
            font-size: 12px;
            padding-left: 14px;
            border-radius: 14px;
            background: #f3f4f9;
            border: 1px solid #EAECF2;
            height: 28px;
            line-height: 32px;
            width: 100%;
            padding: 0 46px 0 14px;
            outline: medium;
        }

        .searchBox i.clear {
            position: absolute;
            left: auto;
            right: 92px;
            font-size: 14px;
            width: 28px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            cursor: pointer;
            color: #888888;
            display: none;
        }

        .searchBox i.query {
            position: absolute;
            left: auto;
            right: 10px;
            font-size: 14px;
            width: 28px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            cursor: pointer;
            color: #888888;
        }
        .bootstrap-switch.bootstrap-switch-small {
            min-width: 60px;
        }
        .bootstrap-switch > div > span.bootstrap-switch-danger {
            background: #bdbdbd;
        }
        .bootstrap-switch > div > span.bootstrap-switch-success {
            background: #0066CC;
        }
        .project li{
            margin:7px;
            width:24%;
        }
        .project_content{

        }
    </style>
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

    </style>
</head>

<body style="min-width: 300px;">
<div class="easyui-layout shownorth" fit=true>
    <div data-options="region:'north',split:false" style="height:43px;overflow:visible">
        <div class="toolbar">
            <div class="toolbar-left">
            </div>
            <div class="toolbar-right" style="padding-right:10px;">
                <a href="javascript:void(0)" onClick="changeShowType(1)" title="卡片展示" style="text-decoration:none;" class="cicon icon_active" id="kpicon">
                    <i class="iconfont icon-changyong" style="font-size:18px;"></i></a>&nbsp;
                <a href="javascript:void(0)" onClick="changeShowType(2)" title="列表展示" style="text-decoration:none;" class="cicon" id="lbicon">
                    <i class="iconfont icon-menu" style="font-size:18px;"></i></a>
            </div>
        </div>
    </div>

    <div data-options="region:'center'">
        <div id="kp" style="display: block;height:100%;">

            <div class="content_inner project" style="height: 280px;">
                <div class="codeGenerator">
                    <div id="basicTableDemo" class="secondMenuStatus">
                        <div id="tableToolbarBasic" class="toolbar">
                            <div class="toolbar-left">
                            </div>
                            <div class="toolbar-right" style="position: relative;">
                                <div class="searchBox">
                                    <input type="text" id="searchBasic" placeholder="请输入关键字搜索">
                                    <i class="icon icon-guanbi1 clear" id="searchClearBasic"></i>
                                    <i class="icon icon-search_ query" id="searchQueryBasic"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul class="clearfix">
                            </ul>

                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div id="lb" style="display:none;">
            <div class="componentArea" style="height:100%;">
                <div class="layui-layer-title">列表</div>

                <div id="toolbar_componentModel" class="toolbar">
                    <div class="toolbar-left">
                    </div>
                    <div class="toolbar-right">
                        <div id="commonSearch" class="input-group form-tool-search">
                            <input type="text" name="componentModel_keyWord" id="componentModel_keyWord" class="form-control input-sm" placeholder="请输入关键字搜索">
                            <label id="componentModel_searchPart" class="icon icon-search form-tool-searchicon" style="cursor:hand"></label>

                        </div>
                    </div>
                </div>
                <table id="videoModel"></table>
                <div id="videoModelPager"></div>
            </div>
        </div>
    </div>
</div>


<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript">
    var showType = "2";

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
    }

    $(".box_title_right .filter").click(function(){
        if($(".box_title_right .filter").eq($(this).index()-1).hasClass('filter_block')){
            $(".box_title_right .filter").eq($(this).index()-1).removeClass('filter_block')
        }else{
            $(".box_title_right .filter").eq($(this).index()-1).addClass('filter_block')
        }
        $(".box_title_right .filter").not($(".box_title_right .filter").eq($(this).index()-1)).removeClass('filter_block')
    })
function doPlay(formId){
    layer.open({
        type: 2,
        area: ['100%', '100%'],
        title: '视频播放',
        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
        content: 'avicit/video/videoPlayerController/toPlayer?formId='+formId
    });
}

</script>
<script type="text/javascript">
    /*----------------------------------------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------------------------------------*/
    $(document).ready(function() {
        changeShowType(showType);
        //查询
        $('#searchBasic').bind('click', function (e) {
            var search = $("#searchBasic").val();
            if (search != '') {
                $("#searchClearBasic").show();
            } else {
                $("#searchClearBasic").hide();
            }
            searchWordBasic($(e.target).val());
        });
        $('#searchBasic').on('keydown', function (e) {
            if (e.keyCode == '13') {
                var search = $("#searchBasic").val();
                if (search != '') {
                    $("#searchClearBasic").show();
                } else {
                    $("#searchClearBasic").hide();
                }
                searchWordBasic($(e.target).val());
            }
        });
        $('#searchClearBasic').bind('click', function (event) {
            $("#searchClearBasic").hide();
            $("#searchBasic").val(null);
            searchWordBasic("");
        });
        /*----------------------------------------basicTableDemo End-------------------------------------*/

        //查询 列表查询
        $('#componentModel_keyWord').bind('click', function (e) {
            var search = $("#componentModel_keyWord").val();
            if (search != '') {
                $("#componentModel_searchPart").show();
            } else {
                $("#componentModel_searchPart").hide();
            }
            searchLb($(e.target).val());
        });
        $('#componentModel_keyWord').on('keydown', function (e) {

            if (e.keyCode == '13') {
                var search = $("#componentModel_keyWord").val();
                if (search != '') {
                    $("#componentModel_searchPart").show();
                } else {
                    $("#componentModel_searchPart").hide();
                }
                searchWordBasic($(e.target).val());
            }
        });



        $(window).resize(function () {
            $(".codeGenerator").css('height', $(parent.window).height() - 240);
        });
        /*----------------------------------------editTableDemo End-------------------------------------*/
        /*****************卡片***********************/
        avicAjax.ajax({
            url : 'avicit/video/videoPlayerController/operation/getVideoLeabPlaysByPage',
            data : {
                videoType: '${videoType}'
            },
            type : 'POST',
            dataType : 'JSON',
            async : false,
            success : function(result) {

                if(result.videoList.length>0){
                    drawHtml(result.videoList);
                }
                if(result.videoList.length==0){
                    var li = $('<li>暂无数据</li>');
                    $(".clearfix").append(li);
                }
            }
        });


/*****************列表***********************/


        var dataGridColModel = [];
        dataGridColModel.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
        dataGridColModel.push({label: '年度',hidden:false, name: 'CUR_YEAR',align:'left',  width: '50px'});
        dataGridColModel.push({label: '视频名称',hidden:false, name: 'VIDEO_NAME',align:'left',  width: '150px'});
        dataGridColModel.push({label: '视频封面', formatter:function(value){return '<img src="data:image/jpg;base64,'+value+'" style="max-width:300px;max-height:300px"/>';}, hidden:false, name: 'VIDEO_FM',align:'left',  width: '150px'});
        dataGridColModel.push({ label: '视频分类',hidden:true, name: 'VIDEO_TYPE',align:'left',  width: '80px'});
        dataGridColModel.push({ label: '视频分类',hidden:false, name: 'VIDEO_TYPEName',align:'left',  width: '80px'});
        dataGridColModel.push({label: '视频标签',hidden:false, name: 'VIDEO_LEAB',align:'left',  width: '150px'});
        dataGridColModel.push({label: '自定义标签',hidden:true, name: 'CUSTOM_LEAB',align:'left',  width: '150px'});
        dataGridColModel.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
        dataGridColModel.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
        dataGridColModel.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
        dataGridColModel.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
        dataGridColModel.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
        dataGridColModel.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
        dataGridColModel.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
        dataGridColModel.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
        dataGridColModel.push({label: '自定义标签code',hidden:true, name: 'CUSTOM_LEAB_CODE',align:'left',  width: '150px'});

        dataGridColModel.push({label: '上传人',hidden:false, name: 'DRAF_USER',align:'left',  width: '50px'});
        dataGridColModel.push({label: '上传时间',hidden:false, name: 'DRAF_DATE',align:'left',  width: '100px'});
        dataGridColModel.push({label: '上传单位',hidden:false, name: 'DRAF_DEPT',align:'left',  width: '80px'});
        
        $("#videoModel").jqGrid({
            url: 'avicit/video/videoPlayerController/operation/getVideoLeabPlaysByPage',
            mtype: 'POST',
            postData:{videoType: '${videoType}'},
            datatype: "json",

            toolbar: [true,'top'],
            colModel: dataGridColModel,
            height:$(window).height()-120,
            width:$(window).width(),
            scrollOffset: 5, //设置垂直滚动条宽度
            rowNum: 20	,
            rowList:[200,100,50,30,20,10],
            altRows:true,
            userDataOnFooter: true,
            pagerpos:'left',
            hasColSet: true,//设置显隐属性
            loadComplete:function(){
                $(this).jqGrid('getColumnByUserIdAndTableName');
                var rowNum = $("#videoModel").jqGrid('getGridParam', 'records');
                if (rowNum < 1) {
                    if ($("#emptyRecords").html() == null) {
                        $("#videoModel").parent().append('<div id="emptyRecords" style="width:100%; height:160px;text-align:center;">'
                            + '<div style="width:120px; height:140px; padding-top:10%; clear:both; margin:0 auto ;">'
                            + '<img src="static/images/platform/common/no-data.png" width="110" height="109">'
                            + '<div style="margin-top: 5px;font-size: 14px;color:#989898">暂无数据</div>'
                            + '</div></div>');
                    }
                    $("#emptyRecords").show();
                } else {
                    $("#emptyRecords").hide();
                }
            },
            styleUI : 'Bootstrap',
            viewrecords: true,
            multiselect: true,
            multiboxonly: true,
            autowidth: true,
            shrinkToFit: true,
            responsive:true,//开启自适应
            pager: "#videoModelPager"
        });
      $("#t_videoModel").append($("#toolbar_componentModel"));

    });

    function searchWordBasic(val) {
        var search_param = new Array(); //用于保存筛选规则

        search_param.push(
            {
                rule_name: 'vague', //筛选方式
                str: val, //筛选值
                column: 'VIDEO_NAME' //列名
            },
            {
                rule_name: 'vague',
                str: val, //筛选值
                column: 'VIDEO_LEAB'
            },
            {
                rule_name: 'vague',
                str: val, //筛选值
                column: 'CUSTOM_LEAB'
            }
        );

        avicAjax.ajax({
            url : 'avicit/video/videoPlayerController/operation/getVideoLeabPlaysByPage',
            data : {
                keyWord: JSON.stringify(search_param),
                videoType: '${videoType}'
            },
            type : 'POST',
            dataType : 'JSON',
            async : false,
            success : function(result) {
                $(".clearfix").html("");
                if(result.videoList.length>0){
                    drawHtml(result.videoList);
                }
                if(result.videoList.length==0){
                    var li = $('<li>暂无数据</li>');
                    $(".clearfix").append(li);
                }




            }
        });
    }

    function searchLb(val){
        var search_param = new Array(); //用于保存筛选规则

        search_param.push(
            {
                rule_name: 'vague', //筛选方式
                str: val, //筛选值
                column: 'VIDEO_NAME' //列名
            },
            {
                rule_name: 'vague',
                str: val, //筛选值
                column: 'VIDEO_LEAB'
            },
            {
                rule_name: 'vague',
                str: val, //筛选值
                column: 'CUSTOM_LEAB'
            }
        );
        var searchdata = {
            keyWord:  JSON.stringify(search_param),
            videoType: '${videoType}'
        };
        $("#videoModel").jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");

    }

    function drawHtml(videoList){
        for(var i=0;i<videoList.length;i++){
            var video=videoList[i];
            var li = $('<li></li>');
            var project_box = $('<div class="project_box">');
            var project_box_span = $('<span class="state normal"> <i  class="fa fa-cogs"></i> </span>');
            project_box.append(project_box_span);
            var project_box_div = $('<div class="project_right"> </div>');
            project_box_div.append("<h4 class='project_title'>"+video.VIDEO_NAME+"</h4>");
            var play_div = $("<div onclick=\"doPlay('"+video.ID+"');\" class=\"project_content\" style=\"height: 250px;width:300px\"> </div>");
            var play_img = $("<img src=\"data:image/jpg;base64,"+video.VIDEO_FM+"\" style=\"max-width:300px;min-height:200px\"/>");
            play_div.append(play_img);

            var play_dept = $("<span class=\"project_time\">"+video.DRAF_DEPT+"<i style=\"margin-left: 10px;\">"+video.DRAF_USER+"</i></span>");
            var play_time = $("<span class=\"project_time\"><i>"+video.DRAF_DATE+"</i></span>");
            project_box_div.append(play_div);
            project_box_div.append(play_dept);
            project_box_div.append(play_time);
            project_box.append(project_box_div);
            li.append(project_box);
            $(".clearfix").append(li);
        }
    }

</script>

</body>

</html>
