<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<% 
String importlibs = "common,table,form";	
%>
<!DOCTYPE html>
<html>
<head>
<title>日志</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body>
	<div id="tableToolbar" class="toolbar">
		<div class="toolbar-left">
			<a id="logList_save" href="javascript:void(0)"
			   class="btn btn-primary form-tool-btn btn-sm btn-point" role="button"
			   title="保存"><i class="fa fa-floppy-o"></i> 保存</a>
			<a id="logList_del" href="javascript:void(0)"
			   class="btn btn-primary form-tool-btn btn-sm" role="button"
			   title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</div>
	</div>
	<div id="pagerlogJqGrid"></div>
	<table id="logJqGrid"></table>
</body>

<script tpye="text/javascript">

	var dataGridColModel=[{
		label: 'id',
		name: 'id',
		width: 75,
		key: true,
		hidden: true
	},{
		label:'操作人',
	    name:'createdByName',
	    width : 50,
	    editable : false ,
	    edittype : 'text',
		align : 'center',
		sortable : true
	    },
		{
			label:'更新时间',
			name:'creationDate',
			width : 70,
			editable : false ,
			edittype : 'text',
			align : 'center',
			sortable : true,
			formatter:formatDateTime
		},
		{
			label:'日志内容',
			name:'logContent',
			width : 200,
			editable : true ,
			edittype : 'text',
			align : 'left',
			sortable : true
		},  {
			label : '操作',
			name : 'opt',
			width : 60,
			align : 'center',
			sortable : false,
			formatter:getformOperButtons
		},{
			label:'表单内容',
			name:'formContentStr',
			width : 50,
			editable : false ,
			edittype : 'text',
			align : 'center',
			hidden: true
		},{
			label:'css',
			name:'tableJs',
			width : 50,
			editable : false ,
			edittype : 'text',
			align : 'center',
			hidden: true
		},{
			label:'js',
			name:'tableUrlCss',
			width : 50,
			editable : false ,
			edittype : 'text',
			align : 'center',
			hidden: true
		}

	];

	function getformOperButtons(cellvalue, options, rowObject) {
		return '  <a href="javascript:void(0)" class="glyphicon glyphicon-share-alt"'
				+ '   title="还原" onClick="clickBack(\'' + rowObject.id + '\')"></a>&nbsp;&nbsp;'
				+ '  <a href="javascript:void(0)" class="glyphicon glyphicon-eye-open"'
				+ '   title="预览" onClick="previewLog(\'' + rowObject.id + '\')"></a>';
	}

	//预览模板
	function previewLog(id){
		var data = $("#logJqGrid").jqGrid("getRowData",id);
		parent.formEditor.previewtemplate("bootstrap",data.formContentStr,data.tableCss);
	};

	function clickBack(id){
		var data = $("#logJqGrid").jqGrid("getRowData",id);
		backTo(id,data.formContentStr,data.tableJs,data.tableUrlCss);
	};

	function backTo(id,sourceContent,tableJs,tableUrlCss){
		parent.tinymce.activeEditor.setContent(sourceContent);
		parent.EformEditor.eformJs = tableJs;
		parent.EformEditor.eformUrlCss = tableUrlCss;
		parent.formEditor.setContentStyle(parent.formEditor.tinymceContentStyle);
		parent.layer.close(parent.formEditor.logDialog);
	}

	$(document).ready(function(){
		$("#logJqGrid").jqGrid({
	    	url: "platform/eform/bpmsClient/getEformLogByPage",
			postData : {
				eformFormInfoId : parent.EformEditor.eformFormInfoId,
				version: parent.version
			},
	        mtype: 'POST',
	        datatype: "json",
	        toolbar: [false,'top'],//启用toolbar
	        colModel: dataGridColModel,//表格列的属性
	        height:$(window).height() - 120,//初始化表格高度
	        scrollOffset: 20, //设置垂直滚动条宽度
	        altRows:true,//斑马线
			rowNum : 10,
			rowList : [ 200, 100, 50, 30, 20, 10 ],
			pagerpos : 'left',
	        styleUI : 'Bootstrap', //Bootstrap风格
			viewrecords: true, //是否要显示总记录数
			multiselect: true,//可多选
			autowidth: true,//列宽度自适应
			responsive:true,//开启自适应
	        cellEdit:true,
			hasColSet:false,
			hasTabExport:false,
	        cellsubmit: 'clientArray',
			pager: "#pagerlogJqGrid"
	    });


		$("#logList_del").bind('click',function(){
			del();
		});
		$("#logList_save").bind('click',function(){
			save();
		});
	}
	);

    /*
    *删除
    */
	function del(){
		$("#logJqGrid").jqGrid('endEditCell');
		var rows = $("#logJqGrid").jqGrid('getGridParam','selarrrow');
		var ids = [];
		var l =rows.length;
		if(l>0){
			layer.confirm('确定要删除该数据吗？',{icon:2,title:"请确认：",area:['400px','']},function(index){
				for(;l--;){
					ids.push(rows[l]);
				}
				avicAjax.ajax({
					url: 'platform/eform/bpmsClient/deleteEformFormLog',
					data: JSON.stringify(ids),
					contentType: 'application/json',
					type: 'post',
					dataType: 'json',
					success: function (r) {
						if (r.flag == "success") {
							// _self.reLoad();
							layer.msg('删除成功！', {icon: 1});
							$("#logJqGrid").trigger("reloadGrid");
						} else {
							layer.alert('删除失败！' + r.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						}
					}
				});
				layer.close(index);
			});
		}else{
			layer.alert('请选择要删除的记录！', {
				  icon: 7,
				  area: ['400px', ''], //宽高
				  closeBtn: 0
				}
			);
		}

	}
	//保存
	function save(){
		//取消行编辑
		$("#logJqGrid").jqGrid('endEditCell');
		var datas = $("#logJqGrid").jqGrid('getChangedCells');
		if(datas.length == 0){
			layer.alert('请先修改数据！', {
				  icon: 7,
				  area: ['400px', ''], //宽高
				  closeBtn: 0
				});
			return false;
		}

		var msg = nullvalid(datas);
		if(msg && msg.length>0){
			layer.alert(msg , {
    			  icon: 7,
    			  area: ['400px', ''], //宽高
    			  closeBtn: 0
    			 }
    		);
			return false;
		}

		avicAjax.ajax({
			url: "platform/eform/bpmsClient/saveEformLogList",
			data: {
				data: JSON.stringify(datas)
			},
			type: 'post',
			dataType: 'json',
			success: function (result) {
				if (result.flag == "success") {
					layer.msg('保存成功！', {icon: 1});
				}
			}
		});


	}
	//输入判断
	function nullvalid(data){
	var msg = "";
	var re = /[,]/im;
	var re2 = /[ ]/im;
	if(data && data.length > 0){
		$.each(data,function(i,dataitem){
			if(dataitem.jsFile == ""){
				msg = "不能保存空值";
				return msg;
		    }
			if(re.test(dataitem.jsFile)){
				msg = "不能含有“,”";
				return msg;
			}
            if(re2.test(dataitem.jsFile)){
                msg = "不能含有空格";
                return msg;
            }
		})
	}else{
		layer.alert('请先修改数据！', {
			  icon: 7,
			  area: ['400px', ''], //宽高
			  closeBtn: 0
			});
	}
	
	return msg;
}
</script>
</html>