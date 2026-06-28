<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
    String code_ = request.getParameter("code_");
%>
<!DOCTYPE html>
<HTML>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<HEAD>
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body>			
     <table class="form_commonTable">
		<tr>
		  <th width="10%">
				<label for="code_">自定义选择框:</label>
			  </th>
		  <td width="39%">
		  		<div id="test6" class="input-group input-group-sm avicselect" >
                    <input type="hidden" name="key" id="key">
                    <input type="text" class="form-control">
                    <span class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-triangle-bottom"></i></span>
                    <div class="avicselect-list"> </div>
                </div>
		   </td>
		    <th width="10%">
				
			  </th>
		  <td width="39%">
		  		
		   </td>
		 </tr>
		 <tr>
			 <th width="10%" valign="top">
				 <label for="example">代码示例:</label>
			 </th>
			 <td width="90%" colspan="10">
				 <p>&lt;div id="test" class="input-group input-group-sm avicselect"&gt;</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="hidden" name="key" id="key"&gt;&lt;input type="text" class="form-control"id="ipt"&gt;</p>
                 <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="input-group-addon avicselect-act"&gt;&lt;i class="glyphicon glyphicon-calendar"&gt;&lt;/i&gt;&lt;/span&gt;&lt;div class="avicselect-list"&gt; &lt;/div&gt;</p>
                 <p>&lt;/div&gt;</p>
				 <p>//控件初始化：</p>
				 <p>$('#test').avicselect({</p>
				<%-- <p>&nbsp;&nbsp;&nbsp;&nbsp;type:	'1',//默认1为页面层 2为iframe层,layer控件参数</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;shift:	'0',//下拉框动画，0：平滑放大，默认；1：从上掉落；2：从最底部往上滑入；3：从左滑入；4：从左翻滚；5：渐显；6：抖动。layer控件参数</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;listType:	'0',//子项的布局，1为竖向List，2位横向自适应块,只在data渲染时有效(不生效？tofu)</p>--%>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;code:	'',//自定义选择页中定义的编码</p>
				 <%--<p>&nbsp;&nbsp;&nbsp;&nbsp;format:	'VALUE',//data对象的数据回填字段，或为查询语句返回的字段</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;showkey:	'VALUE',//下拉框的展示字段</p>--%>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;dataBind:	{'KEY':'key'},//绑定回填字段与回填位置，格式：‘字段’：‘控件’，当控件不存在时，会自动生成</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;multi:	false,//是否开启多选</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;delimit:	',',// 多选时的分隔符</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;height:	'350px',//下拉列表的高度，未设置时默认为‘auto'，layer控件参数</p>
				 <%--<p>&nbsp;&nbsp;&nbsp;&nbsp;ipt:	$("#ipt"),//回填框对象，展示回填数据的input框</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;action:	'.avicselect-act',//按钮对象</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;listen:	'.av-child',//生成下拉框的目标子选项</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;content:	$('.avicselect-list'),//下拉框内容区</p>--%>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;afterSelect:	'',//选择后置事件</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;beferOpenPream:function(){ return {userType:'1'}},//带参数查询</p>
				 <%--<p>&nbsp;&nbsp;&nbsp;&nbsp;remote:	'true',//是否远程加载数据，默认为true，从url中加载;为false时加载data参数中的数据</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;shade:	'',//下拉选择框的外区域遮罩，默认为0.1，layer控件参数</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;shadeClose:	'true',//是否点击遮罩关闭 ，默认关闭，layer控件参数</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;data:	[{"CODE": "sysadmin","VALUE": "系统管理员","KEY": "2","ROW_ID": 1},{'CODE': 'admin',"VALUE": "平台管理员","KEY": "1","ROW_ID": 2}],<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //数据渲染的data,可为空，当remote为false时，data需给值</p>--%>
				 <%--<p>&nbsp;&nbsp;&nbsp;&nbsp;listStyle:	'font-size: 14px',//下拉列表的样式</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;findDom:	$('#test'),//下拉列表区域的对象</p>--%>
				 <%--<p>&nbsp;&nbsp;&nbsp;&nbsp;url:	"console/sysdefinedselect/operation/getInitCustomInfo/",//默认数据加载路径</p>
				 <p>&nbsp;&nbsp;&nbsp;&nbsp;tpl:	'&lt;ul&gt;'+ <br/>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'@for ( var index=0;index&lt;this.length;index++ ) {@>'+<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'&lt;li class="av-child" data-val=\'<@ JSON.stringify(this[index])@>\'><@ this[index].VALUE@>&lt;/li>'+ <br/>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'<@}@>' +<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'&lt;/ul&gt;'//自定义下拉列表html，本行的VALUE要和数据库字段对应(注意大小写) 它是打开下拉框的展示数据</p>--%>
			 	 <p>});</p>
			 </td>
		 </tr>
	</table>
	<jsp:include
		page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<script>
		$(function() {
			//取编码为'<%=code_%>'的列表;
			 $('#test6').avicselect({
		 		height:'170px',
		 		code:'<%=code_%>',
		        dataBind:{'KEY':'key'},
	            //,afterSelect: function(data){ //回填
	            //	alert(data);
	            //}
				//,
	            //beferOpenPream:function(){return {pjcode:'101'}}//带参数查询
			});
			
		});
	</script>
	</body>

</html>
