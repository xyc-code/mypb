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
    <title>视频下载页面</title>
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
</head>

<body style="min-width: 300px;">

<div class="content_inner project" style="height: 280px;">
    <div class="codeGenerator">
        <div id="basicTableDemo" class="secondMenuStatus">
            <div id="tableToolbarBasic" class="toolbar">

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

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript">
    $(".box_title_right .filter").click(function(){
        if($(".box_title_right .filter").eq($(this).index()-1).hasClass('filter_block')){
            $(".box_title_right .filter").eq($(this).index()-1).removeClass('filter_block')
        }else{
            $(".box_title_right .filter").eq($(this).index()-1).addClass('filter_block')
        }
        $(".box_title_right .filter").not($(".box_title_right .filter").eq($(this).index()-1)).removeClass('filter_block')
    })

    /*获取视频信息*/
    function getFiles(formId){
        $.ajax({
            cache : false,
            type : "post",
            url : "platform/webuploader/getInfos.json",
            dataType : "json",
            data : {
                formId : formId,
                elementId : "video"
                //allowEncry: opts.allowEncry,
                //流程指针ID
                //流程任务ID
            },
            async : false,
            error : function(request) {
            },
            success : function(data) {
                // 当存在多个文件时才显示下载全部按钮
                var $downloadFrame = $('#uploaderDownloadFrame');
                if ($downloadFrame.length == 0) {
                    $downloadFrame = $('<iframe id="uploaderDownloadFrame" style="display: none;"></iframe>').appendTo('body');
                }
                if (data.fileList.length > 1) {

                    var fileIds = [];

                    var files = data.fileList;
                    for (var i = 0; i < files.length; i++) {
                        fileIds.push(files[i].fileId);
                    }
                    var fileId = encodeURIComponent(JSON.stringify(fileIds));
                    $downloadFrame.attr('src', 'platform/webuploader/multidownload?fileIds=' + fileId + '&allowEncry=false');
                }else{

                    var fileId=data.fileList[0].fileId;
                    console.log(fileId)
                    var $downStatusDiv = $('#downStatusDiv' + fileId);
                    if ($downStatusDiv.length == 0) {
                        $downStatusDiv = $('<div id="downStatusDiv' + fileId + '" style="display: none;"></div>').appendTo('body');
                        window.setTimeout(function() {
                            $("#downStatusDiv" + fileId).remove();
                        }, 20000);
                    } else {
                        layer.msg("服务端已接受下载请求，请勿重复下载！请在20秒后后重试！");
                        return false;
                    }

                    $downloadFrame.attr('src', 'platform/webuploader/download?fileId=' + fileId + '&allowEncry=false');
                }




            }
        });
    }




function doDownload(formId){
    getFiles(formId);


}

</script>
<script type="text/javascript">
    /*----------------------------------------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------------------------------------*/
    $(document).ready(function() {
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




        $(window).resize(function () {
            $(".codeGenerator").css('height', $(parent.window).height() - 240);
        });
        /*----------------------------------------editTableDemo End-------------------------------------*/

        avicAjax.ajax({
            url : 'avicit/video/videoPlayerController/operation/getVideoDownloadsByPage',
            data : {
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
            url : 'avicit/video/videoPlayerController/operation/getVideoDownloadsByPage',
            data : {
                keyWord: JSON.stringify(search_param)
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
    function drawHtml(videoList){
        for(var i=0;i<videoList.length;i++){
            var video=videoList[i];
            var li = $('<li></li>');
            var project_box = $('<div class="project_box">');
            var project_box_span = $('<span class="state normal"> <i  class="fa fa-cogs"></i> </span>');
            project_box.append(project_box_span);
            var project_box_div = $('<div class="project_right"> </div>');
            project_box_div.append("<h4 class='project_title'>"+video.VIDEO_NAME+"</h4>");
            var play_div = $("<div onclick=\"doDownload('"+video.ID+"');\" class=\"project_content\" style=\"height: 250px;width:300px\"> </div>");
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
