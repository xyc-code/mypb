<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%
    String importlibs = "common,table,form";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>添加</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<style>
	.shownorth .layout-panel-north {
		overflow:visible!important;
	}
</style>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<input type="hidden" id="tableId" name="tableId" value="${tableId}">
		<form id='addForm'>
			<div class="toolbar" style="height:38px;">
				<div class="toolbar-left" style="width: 500px;">
						<label>请选择要参与索引的字段:</label>
						<label for="indexTypeName" style="margin-left: 100px;">索引类型:</label>
						<select class="form-control" style="display: inline-block; width: 100px;" name="indexTypeName" id="indexTypeName" title="" isNull="true">
							<option value="Normal">Normal</option>
							<option value="Unique">Unique</option>
						</select>
				</div>
				<div class="toolbar-right">
					<div class="input-group form-tool-search" style="width:200px;">
						<input type="text"
							   style="width:150px;"
							   id="keyWordQuery"
							   class="form-control input-sm"
							   placeholder="请输入列英文名称">
						<label class="icon icon-guanbi1 clear" style="position: absolute;right: 27px;top: 4px;font-size: 14px; display: none;color: #888888;" id="searchClear"></label>
						<label class="icon icon-search form-tool-searchicon"></label>
					</div>
				</div>
			</div>
			<table id="indexColjqGrid"></table>
			<div id="jqGridPager" style="DISPLAY: none;"></div>
			
		</form>
	</div>
	<div data-options="region:'south',border:false" style="height: 40px;">
    <div id="toolbar" class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
        <table class="tableForm" style="border:0;cellspacing:1;width:100%">
            <tr>
                <td width="50%" align="right">
                    <a href="javascript:void(0)" class="btn btn-default typeb form-tool-btn btn-sm" role="button" title="保存" id="saveForm">保存</a>
                    <a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="closeForm">返回</a>
                </td>
            </tr>
        </table>
    </div>
</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
   		<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script src="avicit/platform6/eform/bpmsformmanage/js/common.js"></script>
	<script type="text/javascript">
	$(document).ready(function () {
		var indexColModel = [
			{
				label : 'id',
				name : 'id',
				key : true,
				width : 75,
				hidden : true
			}, {
				label : '表外键',
				name : 'tableId',
				width : 150,
				editable : true,
				hidden : true
			}, {
				label : '列英文名称',
				name : 'colName',
				width : 150,
				editable : false,
				sortable : false
			},{
				label : '列中文名称',
				name : 'colComments',
				width : 150,
				editable : false,
				sortable : false
			}, {
				label : '应用ID',
				name : 'sysApplicationId',
				width : 150,
				editable : true,
				hidden:true
			}, {
				label : '是否系统字段',
				name : 'colIsSys',
				width : 150,
				editable : true,
				hidden:true
			}];
		var param = {tableId:'${tableId}'};
		$("#indexColjqGrid").jqGrid({
			url : 'platform/platform6/db/dbtablecol/dbTableColController/operation/getDbTableNotIndexColByPage',
			mtype : 'POST',
			datatype : "json",
			postData : param,
			toolbar : [ false, 'top' ],//启用toolbar
			colModel : indexColModel,//表格列的属性
			height : $(window).height()-130,//初始化表格高度
			scrollOffset : 10, //设置垂直滚动条宽度
			rowNum : '2000',//每页条数
			rowList : [ 200, 100, 50, 30, 20, 10 ],//每页条数可选列表
			altRows : true,//斑马线
			pagerpos : 'left',//分页栏位置
			loadComplete : function() {
				$(this).jqGrid('getColumnByUserIdAndTableName');
			},
			styleUI : 'Bootstrap', //Bootstrap风格
			viewrecords : true, //是否要显示总记录数
			multiselect : true,//可多选
			autowidth : true,//列宽度自适应
			responsive:true,//开启自适应
			hasTabExport:false,
	        hasColSet:false,
			pager : "#jqGridPager"
		});
		var timestamp = (new Date()).valueOf();
		$("#saveForm").on("click",function(){
			save();
		});
		$("#closeForm").on("click",function(){
    		parent.dbTableIndex.closeDialog("add");
    	});

		//处理谷歌中文输入法不触发keyup的问题
		var bind_name = 'input';
		if (navigator.userAgent.indexOf("MSIE") != -1){
			bind_name = 'propertychange';
		}

		//查询
		$('#keyWordQuery').bind(bind_name,function(e){
			var search = $("#keyWordQuery").val();
			if (search!='') {
				$("#searchClear").show();
			} else {
				$("#searchClear").hide();
			}
			searchWord($(e.target).val());
		});

		$('#searchClear').bind('click',function(event){
			$("#searchClear").hide();
			$("#keyWordQuery").val(null);
			searchWord("");
		});
	});

    function RndNum(n){
        var rnd="";
        for(var i=0;i<n;i++)
            rnd+=Math.floor(Math.random()*10);
        return rnd;
    }

	function save(){
		var rowIds = $("#indexColjqGrid").jqGrid('getGridParam', 'selarrrow');
		var rows = [];
		var l = rowIds.length;
		var json = [];
		var rowJson;
		if(l<1){
			layer.alert('请选择列！', {
				title:"提示",
				icon : 7,
				area : [ '400px', '' ], //宽高
				closeBtn : 0
			});
		}else{
			for(var i=0;i<l;i++){
				var rowData = $("#indexColjqGrid").jqGrid('getRowData',rowIds[i]);
				rowJson = {'indexCol':rowData.colName,
						   'indexName':'${tableName}'+'_'+'index_'+RndNum(4),
						   'indexType':$('#indexTypeName option:selected') .val(),
						   'indexTypeName':$('#indexTypeName option:selected') .val(),
						   'tableId':'${tableId}'};
				json.push(rowJson);
			}
			avicAjax.ajax({
				url : 'platform/platform6/db/dbtableindex/dbTableIndexController/operation/save/'+'${tableId}',
				data : {
					data : JSON.stringify(json)
				},
				type : 'post',
				dataType : 'json',
				success : function(r) {
					if (r.flag == "success") {
						parent.dbTableIndex.reLoad();
						layer.msg('保存成功！');
						parent.dbTableIndex.closeDialog("add");
					} else {
						layer.alert('保存失败！' + r.e, {
							icon : 7,
							area : [ '400px', '' ], // 宽高
							closeBtn : 0
						});
					}
				}
			});
		}
	}

	function searchWord(val){
		var search_param = new Array(); //用于保存筛选规则
		var a = new GridSearch($("#indexColjqGrid")); //创建实例-传入JqGrid的对象
		search_param.push({
			rule_name: 'vague', //筛选方式
			str: val, //筛选值
			column: 'colName' //列名
		});
		a.set_search_param(search_param); //提交设置规则
		a.search();
	}

	/*
    jqGrid 前端筛选功能
*/
	var GridSearch = function (grid) {

		this.grid = grid;
		this.search_param = null;
		this.r = [];
		this.data = this.grid.jqGrid('getRowData');

		//根据键值删除指定的元素
		this.delete_val_by_key = function (keys, arr) {
			for (var j = 0, i = 0; i < keys.length; i++) {
				arr.splice(keys[i - j], 1);
				j++;
			}
			return arr;
		}

		/**
		 * 隐藏行
		 */
		this.hideRow = function(rowId) {
			this.grid.setRowData(rowId, null, {
				display : 'none'
			});
		}
		/**
		 * 显示行
		 */
		this.showRow = function(rowId) {
			this.grid.setRowData(rowId, null, {
				display : ''
			});
		}
		/**
		 * 显示全部行
		 */
		this.showAllRow = function() {
			for (var i = 0; i < this.data.length; i++) {
				this.showRow(i+1)
			}
		}

		//设置筛选参数
		this.set_search_param = function (search_param) {
			this.search_param = search_param;
		}

		//筛选规则
		/*模糊筛选*/
		this.vagueSearch = function (str, column) {
			var columns = column.split(",");
			var re = new RegExp(str, "i");
			// var is = [];
			for (var i = 0; i < this.data.length; i++) {
				for(var j = 0; j < columns.length; j++){
					var columnName = columns[j];
					var colValue = this.data[i][columnName];
					if (re.test(colValue)) {
						this.showRow(this.data[i]["id"]);
						break;
					}else{
						this.hideRow(this.data[i]["id"]);
					}
				}

			}
		}

		/*区间查找*/
		this.betweenSearch = function (start, end, column) {
			// var is = [];
			for (var i = 0; i < this.data.length; i++) {
				if (this.data[i][column] >= start && this.data[i][column] <= end) {
					this.showRow(i+1)
				}else{
					this.hideRow(i+1);
				}
			}
		}

		/*根据参数选择规则筛选*/
		this.select = function (params) {
			//var rule_name = params.rule_name;
			switch (params.rule_name) {
				case 'between':
					//console.log(this.result);
					this.betweenSearch(params.start, params.end, params.column);
					break;
				case 'vague':
					this.vagueSearch(params.str, params.column);
					break;
			}
		}

		/*清空 result */
		this.clearData = function () {
			this.data = [];
		}

		//执行筛选
		this.search = function () {
			if (this.search_param) {
				if ($.type(this.search_param) == 'array') {
					for (var i = 0; i < this.search_param.length; i++) {
						if (this.search_param[i]) {
							this.select(this.search_param[i]);
						}else{
							this.showAllRow();
						}
					}
				} else {
					this.select(this.search_param);
				}
			}else{
				this.showAllRow();
			}
		}
	}
	</script>
</body>
</html>