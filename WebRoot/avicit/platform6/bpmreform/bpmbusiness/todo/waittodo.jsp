<%@page import="avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess"%>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<%
String skinsValue =  (String)session.getAttribute(AfterLoginSessionProcess.SESSION_CURRENT_USER_SKIN_TYPE);
if(StringUtils.isEmpty(skinsValue)){
	skinsValue = "blue";
}
//换肤样式
String skinsStyle = (String)session.getAttribute(AfterLoginSessionProcess.SESSION_CURRENT_USER_SKIN);
if(skinsStyle == null){
	skinsStyle="static/h5/skin/default.css";
}
%>
<html>
<head>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>门户待办小页</title>
<link rel="stylesheet" type="text/css" href="static/h5/skin/iconfont/iconfont.css" />
<link rel="stylesheet" type="text/css" href="avicit/platform6/bpmreform/bpmbusiness/todo/todo.css" />
<link id="portlet-skin" rel="stylesheet" href="avicit/platform6/portal/portlet/skin/dj-portlet.css">
<link  rel="stylesheet" href="<%=skinsStyle %>">
<script type="text/javascript">
var _bpm_baseurl = "<%=ViewUtil.getRequestPath(request)%>";
var todototal=${todoTotal};
var readtotal=${readTotal};
var pageSize=${pageSize};

</script>
<link type="text/css" rel="stylesheet"  href="avicit/platform6/bpmreform/bpmbusiness/todo/xtodo.css" >
</head>
<body style="background: #fff;overflow: hidden;height:320px;">
  <div class="content">
        <!-- <div class="bt">
             <p>我的工作</p>
             <span id="more" style="cursor:pointer;">更多</span>
         </div> -->
         <div class="counter1" style="height:320px;">
          <div class="titleTabel" style="min-height:50px;">
          <p style="top:0;left:12px;"><img src="avicit/platform6/portal/themes/dasimple/img/wdgz1.png"></p>
          <span style="cursor:pointer;position:absolute;top:0;right:0;"><a  id="more">查看更多<i style="margin-left: 8px;"><img src="avicit/platform6/portal/themes/dasimple/img/icon_04gd.png"></i></a></span></div>
<%-- 	 <div class="title-box clearfix">
		<div class="title-text float-l">
			<!-- <i class="icon iconfont icon-daiban"></i>  -->
			<a href="javascript:void(0);" _target="todo" <c:if test="${tabType == 'todo' }">class="active"</c:if>>我的待办 <c:if test="${todoTotal>0}">
				<em class="figure">(${todoTotal})</em>
				</c:if></a>
				<!--<a href="javascript:void(0);" _target="message">通知公告</a>
		 <a href="javascript:void(0);" _target="read" <c:if test="${tabType == 'read' }">class="active"</c:if>>我的待阅 <c:if test="${readTotal>0}">
				<em class="figure">(${readTotal })</em>
			</c:if></a>-->		
		 <a href="javascript:void(0);" _target="read" style="display:none" id="weeklyread" >周报待阅
				<em class="figure" id="figureweekly" style="color:red"></em>
			</a>
		</div>
		<!-- <div class="operation float-r">
			<a class="refresh-a" href="javascript:void(0);" data-src="40283f81729d2e2c01729d31946a01dd" id="refresh"><i title="刷新" class="icon iconfont icon-shuaxin"></i></a>
			 <a class="more-a" href="javascript:void(0);" id="more" ><i title="更多" class="icon iconfont icon-ziyuan"></i></a>
		</div> -->
	</div> --%>
	<div class="content-body" style="overflow:hidden" <c:if test="${tabType == 'read' }">style="display:none"</c:if> id="todo">
		 <div class="clearfix title-text float-l" >
		  <div class="work_left">
          <div class="strip"><b>${todoTotal}</b></div>
          <div class="name" style="background:#C82E2A ;"><p>
          <a href="javascript:void(0);" _target="todo" <c:if test="${tabType == 'todo' }">class="active"</c:if>>待办工作</a></p></div>
        </div>
      <div class="work_cantre">
          <div class="strip"><b>${readTotal}</b></div>
          <div class="name" style="background:#16903C ;"><p>
          <a href="javascript:void(0);" id="readTodo" _target="read"  <c:if test="${tabType == 'read' }">class="active"</c:if>>已办工作</a>	 
          </p></div>
        </div>
        <div class="work_right">
          <div class="strip"><b id="figureweekly">4</b></div>
          <div class="name" style="background:#FEA50C ;"><p> <a href="javascript:void(0);" _target="weekly"  id="weeklyread" >周报待阅</a></p></div>
        </div>
      </div>
		<div class="">
			<!-- <i class="icon iconfont icon-daiban"></i>  -->
			
				<%-- <a href="javascript:void(0);" _target="message">通知公告</a>--%>
		 
		
		</div>
		<!-- <div class="operation float-r">
			<a class="refresh-a" href="javascript:void(0);" data-src="40283f81729d2e2c01729d31946a01dd" id="refresh"><i title="刷新" class="icon iconfont icon-shuaxin"></i></a>
			 <a class="more-a" href="javascript:void(0);" id="more" ><i title="更多" class="icon iconfont icon-ziyuan"></i></a>
		</div> -->
	</div>
		<c:if test="${todoTotal == 0 }">
			<table class="db-table" border="0" cellpadding="0" cellspacing="0">
				<td class="title" align="center">
					<div class="no_data">
						<img style="width: 100px; margin-top: 50px;" src="avicit/platform6/console/dashboard/images/no-data.png">
						<p>暂无待办任务</p>
					</div>
				</td>
			</table>
		</c:if>
		<c:if test="${todoTotal > 0 }">
			<table class="db-table" border="0" cellpadding="0" cellspacing="0">
				<c:forEach items="${todoRows}" var="todo" varStatus="vs">
					<tr>
						<td class="title">
						<a href="javascript:void(0);" class="link-title <c:if test="${todo.priority==2 || todo.priority==1}"> red-text</c:if>"
							onclick="flowUtils.executeTask('${todo.processInstance }','${todo.executionId }','${todo.dbid }','${todo.businessId }','${todo.formResourceName }','<c:out value="${todo.taskTitle }" escapeXml="true"/>','${todo.taskType}')">

								${fn:startsWith(todo.sendType,"doretreatto") ? "<span class='retreat'>退回：</span>" : ""}
								${fn:startsWith(todo.sendType,"dowithdraw") ? "<span class='withdraw'>拿回：</span>" : ""}

							<span>${todo.processDefName }</span><c:if test='${todo.processDefName != null && !"".equals(todo.processDefName) }'>----</c:if>

							<span>${todo.originalTaskTitle}</span>

						</a>
						</td>
						<!-- <td>
						</td> -->
						<td width="100px">${todo.taskSendUser }</td>
						<td width="80px" nowrap="nowrap">${fn:substring(todo.cTime, 0, 10)}</td>
						<c:if test="${hideQuickDo != 'true'}">
							<td width="60px;"  nowrap="nowrap"><a class="link-text" href="javascript:void(0);"
								onclick="flowUtils.quickDoTask('${todo.processInstance }','${todo.executionId }','${todo.dbid }','${todo.businessId }','${todo.formResourceName }','<c:out value="${todo.taskTitle }" escapeXml="true"/>','${todo.taskType}','${todo.taskName}')">办理</a>
							</td>
						</c:if>

					</tr>
				</c:forEach>
			</table>
			<div class="rmain">
				<a href="javascript:void(0);" onclick="window.todoGo('${todoPageNo-1}')"><i class="icon iconfont icon-xiangshangjiantou-mianxing"></i></a> <a href="javascript:void(0);"
					onclick="window.todoGo('${todoPageNo+1}')"><i class="icon iconfont icon-xiangxiajiantou-mianxing"></i></a>
			</div>
		</c:if>
		<div id="weekly" style="display:none">
	<div class="no_data" style="display:none; text-align: center;" id="weeklyno">
							<img style="width: 100px; margin-top: 50px;" src="avicit/platform6/console/dashboard/images/no-data.png">
							<p>暂无待阅任务</p>
	</div>
	<table class="db-table" border="0" cellpadding="0" cellspacing="0">
	<tbody id="tb">

	</tbody>
	
	</table>
	</div>
	 <div class="content-body" id="redy" <c:if test="${tabType == 'todo' }">style="display:none"</c:if> id="read">
		<c:if test="${readTotal == 0 }">
			<table class="db-table" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td class="title" align="center">
						<div class="no_data">
							<img style="width: 100px; margin-top: 50px;" src="avicit/platform6/console/dashboard/images/no-data.png">
							<!-- <p>暂无待阅任务</p> -->
						</div>
					</td>
				</tr>
			</table>
		</c:if>
		<c:if test="${readTotal > 0 }">
			<table class="db-table" border="0" cellpadding="0" cellspacing="0">
				<c:forEach items="${readRows}" var="todo" varStatus="vs">
					<tr>
						<td class="title">

							<a href="javascript:void(0);" class="link-title <c:if test="${todo.priority==2 || todo.priority==1}"> red-text</c:if>"
							onclick="flowUtils.executeTask('${todo.processInstance }','${todo.executionId }','${todo.dbid }','${todo.businessId }','${todo.formResourceName }','<c:out value="${todo.taskTitle }" escapeXml="true"/>','${todo.taskType}')">

							<span>${todo.processDefName }</span><c:if test='${todo.processDefName != null && !"".equals(todo.processDefName) }'>----</c:if>

							<span>${todo.originalTaskTitle}</span>
							</a>

						</td>
					
						<td  width="100px">${todo.taskSendUser }</td>
						<td  width="80px">${fn:substring(todo.cTime, 0, 10)}</td>
						<td  width="60px;" nowrap="nowrap"><a class="link-text" href="javascript:void(0);"
							onclick="flowUtils.quickDoTask('${todo.processInstance }','${todo.executionId }','${todo.dbid }','${todo.businessId }','${todo.formResourceName }','<c:out value="${todo.taskTitle }" escapeXml="true"/>','${todo.taskType}','${todo.taskName}')">已阅</a>
						</td>
					</tr>
				</c:forEach>
			</table>
			<div class="rmain">
				 				<a href="javascript:void(0);" onclick="window.readGo('${readPageNo-1}')" class="fjpages"></a> 
				 				<a href="javascript:void(0);" onclick="window.readGo('${readPageNo+1}')" class="fjpagex"></a> 
				<a href="javascript:void(0);" onclick="window.readGo('${readPageNo-1}')"><i class="icon iconfont icon-xiangshangjiantou-mianxing"></i></a> <a href="javascript:void(0);"
					onclick="window.readGo('${readPageNo+1}')"><i class="icon iconfont icon-xiangxiajiantou-mianxing"></i></a>
			</div>
		</c:if>
	</div>	
	</div>
	
	 
         </div>
     </div>


	<!-- 解决IE图标重绘问题公共js -->
	<script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js"></script>
	<script type="text/javascript" src="static/h5/common-ext/avic.ajax.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowButtons.js"></script>
	<script src="avicit/platform6/portal/js/redrawpseudoel.js"></script>
	<script type="text/javascript">
		//刷新本页面
		window.bpm_operator_refresh = function() {			
			location.reload()
		};
		function del(row){
			var rows =row;
			var _self = this;
			var ids = [];
			var l =rows.length;
			if(l > 0){
				layer.confirm('确定已经阅读完毕?',  {icon: 3, title:"提示", area: ['400px', '']}, function(index){
						for(;l--;){
							 ids.push(rows[l]);
						 }
						 avicAjax.ajax({
							 url:'platform/avicit/weekly/weeklyController/delete/3',
							 data:	JSON.stringify(ids),
							 contentType : 'application/json',
							 type : 'post',
							 dataType : 'json',
							 success : function(r){
								 if (r.flag == "success") {
									 location.reload()
								}else{
									layer.alert('网络异常！' + r.error, {
										  icon: 7,
										  area: ['400px', ''],
										  closeBtn: 0,
										  btn: ['关闭'],
					                      title:"提示"
										}
									);
								}
							 }
						 });
						 layer.close(index);
					});   
			}
		};
		function jumpweekluy(id){
			var arr = []
    		arr.push($(id).attr("ref"));
    		 del(arr); 
    		 flowUtils.detail($(id).attr("ref"),'2') 
		}
		$(function(){
			var weeklybol = true;
			 $.ajax({
				   url:"platform/avicit/weekly/weeklyController/operation/getDynDistributesByPage",
				   type:"POST",
				   dataType:"JSON",
				   async:false,
				   success : function(r){
						 $("#figureweekly").text(r.rows.length)	
						 if(r.rows.length==0){
							 $(".work_right").hide();
							 $(".work_left").css("width","49%");
							 $(".work_cantre").css("width","48%")
						 } 
				   }
				   
				}) 
			
			redrawPseudoEl();
			if(todototal<pageSize){
				$(".rmain").hide();
			}else{
				$(".rmain").show();
			}

			$("#refresh").on("click", function(){
				bpm_operator_refresh();
			});
			$(".float-l a").on("click", function(){
				var target = $(this).attr("_target");				
				if(!weeklybol){
					$(".db-table:eq(0)").css("display","")
					$("#weekly").css("display","none")
					weeklybol = true;
				}
				$(".db-table:eq(0)").css("display","")
				if(target=="read"){
					if(readtotal<pageSize){
						$(".rmain").hide();
					}else{
						$(".rmain").show();
					 }
					$(".db-table:eq(0)").hide();
					$("#weekly").hide();
					$("#redy").show();
					$("#redy .db-table").show();
					}else if(target == "todo"){						
						if(todototal<pageSize){
							$(".rmain").hide();
						}else{
							$(".rmain").show();
						}
						$(".db-table").show();
						$("#weekly").hide();
						$("#weekly .db-table").hide();
						$("#redy db-table").hide();
						$("#redy").hide();
					}else{
						weeklybol = false;
						$.ajax({
						   url:"platform/avicit/weekly/weeklyController/operation/getDynDistributesByPage",
						   type:"POST",
						   async:false,
						   dataType:"JSON",
						   success : function(r){
							   
							   if(r.rows.length==0){
								   $("#weeklyno").css("display","")
							   }else{
								   $("#tb").children().filter("tr").remove();
								   var data = r.rows;
								   for(var i =0;i<data.length;i++){
									   $("#tb").append('<tr><td class="title "><a href="javascript:void(0)" onclick="jumpweekluy(this)" class="link-title" ref="'+data[i].flowPathId+'" ><span>'+data[i].lastWeekly+'</span></a></td><td width="100px">'+data[i].applicant+'</td><td width="80px" nowrap="nowrap">'+data[i].applicationDate.substr(0,data[i].applicationDate.indexOf(":")-2)+'</td><td width="60px;" nowrap="nowrap"><a href="javascript:void(0)" onclick="jumpweekluy(this)" class="link-text" ref="'+data[i].flowPathId+'" >已阅</a></td></tr>')
								   }
								   
							   }	
						   }
						   
						})
						$(".db-table").hide();
						$("#weekly").show();
						$("#redy").hide();
						$("#redy db-table").hide();
						$(".rmain").hide();
						$("#weekly .db-table").show();
						
					}
				var targetDom = $("#" + target);
				$(".float-l a").removeClass("active")
				$(this).addClass('active');
				targetDom.show();
				/* targetDom.siblings('.content-body').hide(); */
			});
			
			$("#more").on("click", function(){
				if(top && top.addTab){
					top.addTab("全部任务", "avicit/platform6/bpmreform/bpmbusiness/todo/taskTab.jsp");
				}
			});
		});

		function todoGo(num) {
			num  = parseInt(num);
			if (num <= 0) {
				layer.msg('当前已是第一页');
				return;
			}
			var maxPage = parseInt('${todoMaxPage}');
	 		if (num > maxPage) {
	 			layer.msg('当前已是最后一页');
				return;
			}
	 		var tabType = $(".float-l .active").attr("_target");
			var url = window.location.href;
			if(url.indexOf("tabType") != -1){
				url = url.replace(/tabType=(.)*/g, "tabType=" + tabType);
			}else{
			    if(url.indexOf("?") != -1){
                    url = url + "&tabType=" + tabType;
				}else{
                    url = url + "?tabType=" + tabType;
				}
			}
			var pos = url.indexOf("todoPageNo"); //查看是否存在pageNum页数参数
			if (pos == "-1") {
				window.location.replace(url + '&todoPageNo=' + num); //不存在则添加,值为所点击的页数
			} else {
				var ui = String(url).substring(0, pos);
				window.location.replace(ui + 'todoPageNo=' + num); //存在,则刷新pageNum参数值
			}
		}
		function readGo(num) {
			if (num <= 0) {
				layer.msg('当前已是第一页');
				return;
			}
			var maxPage = '${readMaxPage}';
	 		if (num > maxPage) {
	 			layer.msg('当前已是最后一页');
				return;
			}
	 		var tabType = $(".float-l .active").attr("_target");
			var url = window.location.href;
			if(url.indexOf("tabType") != -1){
				url = url.replace(/tabType=(.)*/g, "tabType=" + tabType);
			}else{
			    if(url.indexOf("?") != -1){
                    url = url + "&tabType=" + tabType;
				}else{
                    url = url + "?tabType=" + tabType;
				}
			}
			var pos = url.indexOf("readPageNo"); //查看是否存在pageNum页数参数
			if (pos == "-1") {
				window.location.replace(url + '&readPageNo=' + num); //不存在则添加,值为所点击的页数
			} else {
				var ui = String(url).substring(0, pos);
				window.location.replace(ui + 'readPageNo=' + num); //存在,则刷新pageNum参数值
			}
			
		}	
	</script>
</body>
</html>
