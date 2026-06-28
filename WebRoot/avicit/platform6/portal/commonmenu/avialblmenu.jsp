<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form,fileupload";
%>
<!DOCTYPE html>
<HTML>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<head>
<!-- ControllerPath = "demo/demoreception/demoReceptionController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
	<style>
		.subMenu ul{
			list-style:none;
			padding-left: 0px;
		}
		.subMenu li{
			float:left;
		}

	</style>
</head>
<body class="easyui-layout">
	<div data-options="region:'center',split:true,border:false">
		${html}
	</div>
	<jsp:include
		page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<script type="text/javascript">
		$(function(){
            $("ul li").hover(
                function() {
                    var value = $(this).attr("id");
                    var html = $('#em_'+value).html();
                    if(html.indexOf('fill') == -1){
                        $('#em_'+value).html("<i class='icon iconfont icon-star1'></i>");
                    }
                },
                function() {
                    var value = $(this).attr("id");
                    var html = $('#em_'+value).html();
                    if(html.indexOf('fill') == -1){
                        $('#em_'+value).html("");
                    }
                }
            );
            $('ul li').bind('click',function(){
                var value = $(this).attr("id");
                var html = $('#em_'+value).html();
                if(html.indexOf("fill") != -1){
                    delPersonalMenu(value);
                    $('#em_'+value).html("");
                    return ;
				}else{
                    var menuList = [];
                    menuList.push(value);
                    addMenu(menuList);
                    $('#em_'+value).html("<i class='icon iconfont icon-star-fill'></i>");
                }
			})
		})

        //取消收藏
        function delPersonalMenu(menuId) {
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

        function addMenu(toAddArray){
            avicAjax.ajax({
                url: "portal/saveMenu",
                type: 'post',
                data:{
                    menuIds:toAddArray.join(";")
                },
                dataType: 'json',
                success: function (r) {
                    if(r.flag=='success'){
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
	</script>
</body>
</html>