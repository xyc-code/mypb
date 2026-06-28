<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>请选择数据表</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body>
	<div class="toolbar-left">
		<div class="input-group form-tool-search">
			<input type="text" name="searchTable_keyWord" id="searchTable_keyWord" style="width: 240px;" class="form-control input-sm" placeholder="请输入表名" />
			<label id="searchTable_searchPart" class="icon icon-search form-tool-searchicon"></label>
		</div>
	</div>
	<table id="tableNameJqGrid"></table>
	<div id="jqGridPager"></div>
</body>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script type="text/javascript">
	var selectRowdata="";

	$(document) .ready(function() {
		var dataGridColModel = [
			{
				label : 'id',
				name : 'tableName',
				align : "center",
				width : 150,
				sortable : false,
				hidden: true
			}, {
				label : '表名称',
				name : 'tableName',
				align : "center",
				key: true,
				width : 150,
				sortable : false
			}, {
				label : '表描述',
				name : 'tableComment',
				width : 150,
				align : "center",
				sortable : false
			}];

		$('#tableNameJqGrid').jqGrid({
			// 带分页
			url : "platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/getTables",
			// url : "platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/operation/getTableDatasBypage2",
			mtype : 'POST',
			datatype : "json",
			colModel : dataGridColModel,
			height : $(window).height() - 110,
			scrollOffset : 20, //设置垂直滚动条宽度
			styleUI : 'Bootstrap',
			viewrecords : true,
			pager: "#jqGridPager",
			// multiselect : true,
			autowidth : true,
			shrinkToFit : true,
			responsive : true,//开启自适应
			rowNum: 20	,
			rowList:[200,100,50,30,20,10],
			altRows:true,
			userDataOnFooter: true,
			pagerpos:'left',
			hasColSet:false,//设置显隐属性
			hasTabExport:false,
			onSelectRow:function (rowid) {
				selectRowdata = $("#tableNameJqGrid").jqGrid('getRowData',rowid);
			},
			//双击选择行并回填数据
            ondblClickRow:function (rowid,iRow,iCol,e) {
                var rowData = $("#tableNameJqGrid").jqGrid('getRowData',rowid);
                $(window.parent.document).find("#tableName").val(rowData.tableName);
                $(window.parent.document).find("#tableRemarks").val(rowData.tableComment);
                $(window.parent.document).find("#mapperRemarks").val(rowData.tableComment);
                //mapper
                avicAjax.ajax({
                    url:"platform6/sysdatapermissionsmethod/sysDataPermissionsMethodController/getMapperName",
                    data : {tableName : rowData.tableName},
                    type : 'get',
                    dataType : 'json',
                    async : false,
                    success : function(r){
                        var _parent_ = parent;
                        if(r.mapperName == ""){
                            layer.alert("未匹配出mapper，请手动选择!",{icon:0,yes:function() {
                                    _parent_.layer.close(_parent_.layer.index)
									layer.close(layer.index)
                                }});
                        } else {
                            if (r.flag == "success"){
                                $(window.parent.document).find("#mapperName").val(r.mapperName);
                                var methodHtml = "";
                                var checkedOption = "";
                                $.each(r.method,function(i,d){
                                    var str = d.substr(d.lastIndexOf(".")+1);
                                    methodHtml+="<option value='"+str+"'>"+str+"</option>";
                                    if(str.indexOf("ByPage") != -1){
                                        checkedOption += str+",";
                                    }
                                });
                                $(window.parent.document).find("#method").html(methodHtml);
                                $(window.parent.document).find('#method').val(checkedOption.split(','));
                                $(window.parent.document).find('#method').trigger('change.select2');

                                $(window.parent.document).find("#showOldSqlSelect").html(r.selectHtml);
                                $(window.parent.document).find("#textareaHtmlTd").html(r.textareaHtml);
                            }
							_parent_.layer.close(_parent_.layer.index)
                        }
                    }
                });
            }
		});
		$("#searchTable_searchPart").bind('click', function() {
			var keyWord = $("#searchTable_keyWord").val();

               if(keyWord=="请输入表名"){
                   keyWord='';
               }
			$('#tableNameJqGrid').jqGrid('setGridParam', {
				datatype : 'json',
				postData : {
					'tableName' : keyWord
				}
			}).trigger("reloadGrid");

		});
		$("#searchTable_keyWord").bind('keyup',function(e) {
			if (e.keyCode == 13) {
				var keyWord = $("#searchTable_keyWord").val();
				$('#tableNameJqGrid').jqGrid('setGridParam', {
					datatype : 'json',
					postData : {
						'tableName' : keyWord
					}
				}).trigger("reloadGrid");
			}
		});
	});
</script>
</html>