$(function(){
	

if ($("input[name='APPLICATION_DATE']").val()==''||$("input[name='APPLICATION_DATE']").val()==null||$("input[name='APPLICATION_DATE']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{datetime}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#APPLICATION_DATE").val(macoValue);
}



if ($("input[name='APPLICATION_DEPARTMENT']").val()==''||$("input[name='APPLICATION_DEPARTMENT']").val()==null||$("input[name='APPLICATION_DEPARTMENT']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{departmentName}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#APPLICATION_DEPARTMENT").val(macoValue);
}



if ($("input[name='APPLICANT']").val()==''||$("input[name='APPLICANT']").val()==null||$("input[name='APPLICANT']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{userName}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#APPLICANT").val(macoValue);
}

if ($('#IS_SON').val() == null||$('#IS_SON').val()==''||$('#IS_SON').val()==undefined)
$('#IS_SON').val("2");
if ($("input[name='FORM_NO']").val()==''||$("input[name='FORM_NO']").val()==null||$("input[name='FORM_NO']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{uuid}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#FORM_NO").val(macoValue);
}




workflowControlForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "lastweekly"){
		return;
	}
	if(operability){
		$("#lastweekly").show();
	}else{
		$("#lastweekly").hide();
	}
});

    $("#lastweekly").css('text-align','center');
$("#anniu").on('click',function(){
$.ajax({
url:'platform/avicit/weekly/weeklyController/setLastWeekly',
dataType:"json",
type:"GET",
async:false,
data:{
ltid:pageParams.id,
laskweekly:$("#shu").val()
},
 success:function(data){
 if(data.success == '成功'){
 
 $.ajax({
url:'platform/avicit/weekly/weeklyController/lastWeekly',
dataType:"json",
type:"GET",
async:false,
data:{
ltid:pageParams.id,
 type:'1'
},
 success:function(data){;
$("#ZZJH").text(data.LAST_WEEKLY);
 }
})
 }else{
 layer.alert('修改失败，请先启动流程再修改！', {
								 icon: 7,
								 area: ['400px', ''],
								 closeBtn: 0,
								 btn: ['关闭'],
			 title:"提示"
								}
							);
 }
 }
})
 
 
 
})

var DYN_SON_WEEKLYTabInitFlag = false;

					var DYN_SON_WEEKLYWORK_CLASSSelect = {"0":"监督检查","1":"执纪问责","2":"巡视巡察","3":"廉洁文化","4":"廉政共建","6":"制度建设","5":"综合事务"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "none"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			DYN_SON_WEEKLYWORK_CLASSSelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
														var DYN_SON_WEEKLYIS_COMPLETIONSelect = {"Y":"是","N":"否"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "none"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			DYN_SON_WEEKLYIS_COMPLETIONSelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
								var DYN_SON_WEEKLYIS_KEYNOSelect = {"Y":"是","N":"否"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "none"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			DYN_SON_WEEKLYIS_KEYNOSelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
					
var dataGridColModel_DYN_SON_WEEKLY =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
               	 ,{ label:'类别Id', name:'WORK_CLASS', width:75, hidden:true}
   	     ,{ label:'类别', name:'WORK_CLASSName', width: 15,
		            editable : true,
		                      align:'center',
		       	 edittype:"custom",
   	     		  		  sortable:false,
		     	     formatter: formatForDYN_SON_WEEKLYWORK_CLASS
	  						  	     , editoptions: {	  custom_element:selectElem, custom_value:selectValue, forId:'WORK_CLASS',
   	     value: function(){return DYN_SON_WEEKLYWORK_CLASSSelect;}}
	  }
                       ,{ label:'工作任务', name: 'WORK_TASKS', width:45,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'上周进展', name: 'TOP_DATE_EVOLVE', width:80,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'本周计划', name: 'DATE_EVOLVE', width:80,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'责任人Id', name: 'PERSON_LIABLE', width: 75, hidden:true}
		            ,{ label:'责任人', name:'PERSON_LIABLEName', width:20,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
	     			  			  sortable:false,
			  		  		  	     editoptions:{	  	  selectModel:'multi',
		  	     custom_element:userElem, custom_value:userValue, forId:'PERSON_LIABLE',viewScope:'currentOrg',defaultDeptCol:''}}
		                         ,{ label:'外键', name: 'FK_SUB_COL_ID', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'完成节点', name:'COMPLETION_NODE', width:20,
		            editable : true,
		                  align:'center',
		        edittype:'custom',
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d', newformat: 'Y-m-d'},
			          editoptions:{custom_element:dateElem,custom_value:dateValue
			 		 }}
                              	 ,{ label:'是否完成Id', name:'IS_COMPLETION', width:75, hidden:true}
   	     ,{ label:'是否完成', name:'IS_COMPLETIONName', width: 50,
		            editable : true,
		                      align:'left',
		       	 edittype:"custom",
   	                hidden:true,
         		  		  sortable:false,
		     	     formatter: formatForDYN_SON_WEEKLYIS_COMPLETION
	  						  	     , editoptions: {      callBack:function(e){if(this.value=="Y"){
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="DYN_SON_WEEKLY_IS_COMPLETIONName"]');
elementsByName.style.background="yellow"
elementsByName.style.color="black"
}else{
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="DYN_SON_WEEKLY_IS_COMPLETIONName"]');
elementsByName.style.background=""
elementsByName.style.color=""
}},
      	  custom_element:selectElem, custom_value:selectValue, forId:'IS_COMPLETION',
   	     value: function(){return DYN_SON_WEEKLYIS_COMPLETIONSelect;}}
	  }
                     	 ,{ label:'是否重要Id', name:'IS_KEYNO', width:75, hidden:true}
   	     ,{ label:'是否重要', name:'IS_KEYNOName', width: 50,
		            editable : false,
		                      align:'left',
		       	 edittype:"custom",
   	                hidden:true,
         		  		  sortable:false,
		     	     formatter:  formatDYN_SON_WEEKLYIS_KEYNO
	  						  	     , editoptions: {      callBack:function(e){if(this.value=="Y"){
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="DYN_SON_WEEKLY_IS_KEYNOName"]');
elementsByName.style.background="green"
elementsByName.style.color="white"
}else{
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="DYN_SON_WEEKLY_IS_KEYNOName"]');
elementsByName.style.background=""
elementsByName.style.color=""
}},
      	  custom_element:selectElem, custom_value:selectValue, forId:'IS_KEYNO',
   	     value: function(){return DYN_SON_WEEKLYIS_KEYNOSelect;}}
	  }
                       ,{ label:'部门IDId', name: 'DEPT_ID', width: 75, hidden:true}
		            ,{ label:'部门ID', name:'DEPT_IDName', width:50,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
	                hidden:true,
         		  		  sortable:false,
		                      	     editoptions:{		  		  selectModel:'single',
		  	     custom_element:deptElem, custom_value:deptValue, forId:'DEPT_ID',viewScope:'currentOrg'}}
	  
                       ,{ label:'备注', name: 'CONTENT', width:30,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  ,formatter:formatForDYN_SON_WEEKLYCONTENT		  
	  	}
         ]

var extraParamDYN_SON_WEEKLY = '{}';


DYN_SON_WEEKLYUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                                            };

if (window.DYN_SON_WEEKLY_comid == null || window.DYN_SON_WEEKLY_comid == undefined || window.DYN_SON_WEEKLY_comid == '') {
	window.DYN_SON_WEEKLY_comid = id;
}

$('#DYN_SON_WEEKLY').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_SON_WEEKLY',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_SON_WEEKLY_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"40288199873000540187300f12a80282",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_SON_WEEKLY,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
		required:"required",
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	rownumbers: true,
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"auto",
	pager:DYN_SON_WEEKLYPager,
	hasColSet:false,
	hasTabExport:false,
    rowNum: 50,
    rowList:[50, 100, 200, 500],

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_SON_WEEKLYnorecords").hide();//隐藏提示信息
    $("#DYN_SON_WEEKLYPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_SON_WEEKLY').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_SON_WEEKLYnorecords").html() == null) {
            $('#DYN_SON_WEEKLY').parent().append("<div class='no_data' style='display: none' id='DYN_SON_WEEKLYnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_SON_WEEKLY').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_SON_WEEKLYnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_SON_WEEKLYnorecords img").css("width","120px");
        }else{
            $("#DYN_SON_WEEKLYnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_SON_WEEKLYnorecords").show();//显示提示信息
        $("#DYN_SON_WEEKLYPager_left").css("display", "none");//显示分页信息
    }
    if ($('#DYN_SON_WEEKLY').getGridParam('datatype')!= 'local'){
		function getTime(timestamp) {
var date = new Date(timestamp );
Y = date.getFullYear() + '-';
M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
D = date.getDate() + ' ';
h = date.getHours() + ':';
m = date.getMinutes() + ':';
s = date.getSeconds();
return Y+M+D+h+m+s;
}
$.ajax({
url:'platform/avicit/weekly/weeklyController/getLastWeekly',
dataType:"json",
type:"GET",
async:false,
success:function (data) {
 ajData = data;
 var dat = $('#DYN_SON_WEEKLY').jqGrid('getRowData');
if(dat.length<=0){
for(var i=0;i<data.weekly.length;i++) {
	 $('#DYN_SON_WEEKLY').jqGrid('endEditCell');
	$("#DYN_SON_WEEKLYnorecords").hide();//隐藏提示信息
	$("#DYN_SON_WEEKLYPager_left").css("display", "block");//隐藏分页信息
	 var newRowId =newRowStart_DYN_SON_WEEKLY + newRowIndex_DYN_SON_WEEKLY;
	var parameters = {
			rowID : newRowId,
			initdata : {
				WORK_CLASS:data.weekly[i].workClass,
				WORK_TASKS:data.weekly[i].workTasks,
				TOP_DATE_EVOLVE:data.weekly[i].topDateEvolve,
				DATE_EVOLVE:data.weekly[i].dateEvolve,
				PERSON_LIABLE:data.weekly[i].personLiable,
				PERSON_LIABLEName:data.weekly[i].personLiableName,
				COMPLETION_NODE:getTime(data.weekly[i].completionNode),
				IS_KEYNO:data.weekly[i].isKeyno,
				IS_COMPLETION:data.weekly[i].isCompletion,
				DEPT_ID:pageParams.session.deptId,
				DEPT_IDName:pageParams.session.deptName,
CONTENT:data.weekly[i].content
				},
			position :"first",
			useDefValues : true,
			useFormatter : true,
			addRowParams : {extraparam:{}}
		}

	$('#DYN_SON_WEEKLY').jqGrid('addRow', parameters);
 	
	newRowIndex_DYN_SON_WEEKLY++;

}
}
}
});
$("#page_saveButton").on("click",function(){
// var dat = $('#DYN_SON_WEEKLY').jqGrid('getRowData');
$.ajax({
url:'platform/avicit/weekly/weeklyController/sonWeekly',
type:"POST",
async:false,
data:{
json:JSON.stringify(ajData),
 lcid:pageParams.id,
}
})
})

	}
},

	    onCellSelect:function(rowid,iCol,cellcontent,e){
		zzfrowid=rowid
    },
	gridComplete: function(){
	var height = $('#DYN_SON_WEEKLY').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_SON_WEEKLYnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_SON_WEEKLYnorecords img").css("width","120px");
	}else{
		$("#DYN_SON_WEEKLYnorecords img").css("width",(height/1.9)+"px");
	}
											},


beforeEditCell:function(){
	$(".datatable").not("#DYN_SON_WEEKLY").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_SON_WEEKLYReload = function(){
	var _isInvalid = true;
	$("#DYN_SON_WEEKLY").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_SON_WEEKLYTabInitFlag = true;
	$('#DYN_SON_WEEKLY').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_SON_WEEKLYTabReload = function(forceFlag){
	if(!DYN_SON_WEEKLYTabInitFlag  || forceFlag){
		DYN_SON_WEEKLYReload();
	}

}


$('#DYN_SON_WEEKLY').parents('div.ui-jqgrid-bdiv').css("max-height","2000px");

//放入表格toolbar中
$('#t_DYN_SON_WEEKLY').append($('#DYN_SON_WEEKLYToolbar'));

            function formatForDYN_SON_WEEKLYWORK_CLASS(cellvalue, options, rowObject){if(cellvalue!=undefined&&cellvalue!=""){
return cellvalue;
}

 var re=/[^\u4E00-\u9FA5]/;
if (!re.test(rowObject.WORK_CLASS)){
return rowObject.WORK_CLASS;

}
return formatDYN_SON_WEEKLYWORK_CLASS(cellvalue,options,rowObject)}
    
function formatDYN_SON_WEEKLYWORK_CLASS(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
    
    
    
    
    
            function formatForDYN_SON_WEEKLYIS_COMPLETION(cellvalue, options, rowObject){if(cellvalue!=undefined&&cellvalue!=""){
return cellvalue;
}
if(rowObject.IS_COMPLETION=="Y"){
 return "是"
}else if(rowObject.IS_COMPLETION=='N'){
return "否"
}else{
return rowObject.IS_COMPLETION
}}
    
function formatDYN_SON_WEEKLYIS_COMPLETION(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
function formatDYN_SON_WEEKLYIS_KEYNO(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
            function formatForDYN_SON_WEEKLYCONTENT(cellvalue, options, rowObject){if(rowObject.CONTENT !=null && rowObject.CONTENT != undefined && rowObject.CONTENT != "" ){
return rowObject.CONTENT ;

}
if(cellvalue!=undefined&&cellvalue!=""){
return cellvalue+=" --"+pageParams.session.userName + "<br>";
}
return "";
}
    


                    
DYN_SON_WEEKLYReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_SON_WEEKLY = 0;
var newRowStart_DYN_SON_WEEKLY = "new_row";


/**
 * 添加页面
 */
insertTableDYN_SON_WEEKLY = function(){
	$('#DYN_SON_WEEKLY').jqGrid('endEditCell');
	$("#DYN_SON_WEEKLYnorecords").hide();//隐藏提示信息
	$("#DYN_SON_WEEKLYPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_SON_WEEKLY + newRowIndex_DYN_SON_WEEKLY;
	var parameters = {
		rowID : newRowId,
		initdata : {
																											PERSON_LIABLE:pageParams.session.userId,
							PERSON_LIABLEName:pageParams.session.userName,
																		COMPLETION_NODE:new Date(),
										IS_COMPLETION:  typeof (N) !== 'undefined'? N : 'N',
										IS_KEYNO:  typeof (N) !== 'undefined'? N : 'N',
																DEPT_ID:pageParams.session.deptId,
							DEPT_IDName:pageParams.session.deptName,
														},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_SON_WEEKLY').jqGrid('addRow', parameters);
	newRowIndex_DYN_SON_WEEKLY++;  
};



/**
 * 删除
 */
deleteTableDYN_SON_WEEKLY = function(){
	var rows = [];
	rows = $('#DYN_SON_WEEKLY').jqGrid('getGridParam','selarrrow');


	$('#DYN_SON_WEEKLY').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_SON_WEEKLY').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_SON_WEEKLY',
					data: {ids : ids.join(','),formInfoId:'40288199873000540187300f12a80282',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_SON_WEEKLY').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_SON_WEEKLY').setGridWidth(700);
$('#DYN_SON_WEEKLY').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_SON_WEEKLY_insertBtn').bind('click',function(){
	insertTableDYN_SON_WEEKLY();
});

//按钮绑定事件
$('#DYN_SON_WEEKLY_deleteBtn').bind('click',function(){
	deleteTableDYN_SON_WEEKLY();
});

//自定义按钮绑定事件
																				$('#btn_6').bind('click',function(){
			var selectDialog = openDialog({
		type : 'selectWindow',
		title : "导入",
		url : "platform/avicit/weekly/weeklyController/toException",
		width : "50%",
		height : "50%",
		opentype : 2,
		shade : true,
		submit : function(index, layer) {
			var iframeWin = layer.find('iframe')[0].contentWindow;
			var objData = iframeWin.rowObjData;
		}
	});
 
 
		});
							$('#btn_7').bind('click',function(){
			location.href="platform/avicit/weekly/weeklyController/filexsl"
		});
			//列onchange事件
										DYN_SON_WEEKLYIS_COMPLETIONChange = function(_this,e){
		if(this.value=="Y"){
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="DYN_SON_WEEKLY_IS_COMPLETIONName"]');
elementsByName.style.background="yellow"
elementsByName.style.color="black"
}else{
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="DYN_SON_WEEKLY_IS_COMPLETIONName"]');
elementsByName.style.background=""
elementsByName.style.color=""
}
    }
				DYN_SON_WEEKLYIS_KEYNOChange = function(_this,e){
		if(this.value=="Y"){
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="DYN_SON_WEEKLY_IS_KEYNOName"]');
elementsByName.style.background="green"
elementsByName.style.color="white"
}else{
var elementById = document.getElementById(zzfrowid); 
var elementsByName = elementById.querySelector('[aria-describedby="DYN_SON_WEEKLY_IS_KEYNOName"]');
elementsByName.style.background=""
elementsByName.style.color=""
}
    }
			

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SON_WEEKLY_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_SON_WEEKLY_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_SON_WEEKLY_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_SON_WEEKLY_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_SON_WEEKLY_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SON_WEEKLY_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_SON_WEEKLY_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_SON_WEEKLY_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_SON_WEEKLY_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_SON_WEEKLY_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_SON_WEEKLY_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_SON_WEEKLY_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																									        workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
			if (tagId != "btn_6"){
				return;
			}
			if(operability){
				$("#btn_6").css("display","inline-block");
				$("#"+tagId).parents(".ui-userdata").show();
			}else{
				$("#btn_6").css("display","none");
			}
        });
						        workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
			if (tagId != "btn_7"){
				return;
			}
			if(operability){
				$("#btn_7").css("display","inline-block");
				$("#"+tagId).parents(".ui-userdata").show();
			}else{
				$("#btn_7").css("display","none");
			}
        });
					
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_SON_WEEKLY').validateJqGrid("validate");
});

$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","WORK_CLASS","required");
		$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","WORK_CLASS","maxlength",{maxlength:255});
		$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","WORK_TASKS","required");
		$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","WORK_TASKS","maxlength",{maxlength:255});
		$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","TOP_DATE_EVOLVE","required");
		$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","TOP_DATE_EVOLVE","maxlength",{maxlength:255});
		$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","DATE_EVOLVE","required");
		$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","DATE_EVOLVE","maxlength",{maxlength:255});
		$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","PERSON_LIABLE","required");
		$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","PERSON_LIABLE","maxlength",{maxlength:255});
				$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","COMPLETION_NODE","required");
				$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","IS_COMPLETION","maxlength",{maxlength:255});
				$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","IS_KEYNO","maxlength",{maxlength:255});
				$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","DEPT_ID","maxlength",{maxlength:255});
				$('#DYN_SON_WEEKLY').validateJqGrid("addValidate","CONTENT","maxlength",{maxlength:50});
		



var DYN_ROLLING_SONTabInitFlag = false;

					var DYN_ROLLING_SONROLLING_PLANDATESelect = {"1":"1","2":"2","3":"3"};
		$.ajax({
		url : 'platform/eform/bpmsClient/getSysLookup.json',
		data: {lookupCode : "none"},
		type : 'post',
		dataType : 'json',
		success : function(r) {
			for(var i=0;i<r.rows.length;i++){
			DYN_ROLLING_SONROLLING_PLANDATESelect[r.rows[i].lookupCode] = r.rows[i].lookupName;
			}
		}
		});
									
var dataGridColModel_DYN_ROLLING_SON =  [
   { label: 'ID', name: 'ID', key: true, width: 75, hidden:true }
               	 ,{ label:'月份Id', name:'ROLLING_PLANDATE', width:75, hidden:true}
   	     ,{ label:'月份', name:'ROLLING_PLANDATEName', width: 5,
		            editable : true,
		                      align:'center',
		       	 edittype:"custom",
   	     		  		  sortable:false,
		     	     formatter: formatForDYN_ROLLING_SONROLLING_PLANDATE
	  						  	     , editoptions: {      callBack:function(e){ var elementById = document.getElementById('#'+Plan);















var el=elementById.querySelector('[aria-describedby="DYN_ROLLING_SON_ROLLING_PLANDATEName"]');















el.innerText=this.value;















el.title=this.value;















var ROLLING_PLAN_ROLLING_PLAN_DATE = elementById.querySelector('[aria-describedby="DYN_ROLLING_SON_ROLLING_PLAN_DATE"]');















 var endtime=new Date();















 ROLLING_PLAN_ROLLING_PLAN_DATE.title=this.value+'-'+endtime.getDate();















ROLLING_PLAN_ROLLING_PLAN_DATE.innerHTML=this.value+'-'+endtime.getDate()















},
      	  custom_element:selectElem, custom_value:selectValue, forId:'ROLLING_PLANDATE',
   	     value: function(){return DYN_ROLLING_SONROLLING_PLANDATESelect;}}
	  }
                       ,{ label:'外键', name: 'FK_SUB_COL_ID', width:50,
		            editable : true,
		                  align:'left',
		                      hidden:true,
         		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'完成目标', name: 'ROLLING_PLAN_TARGET', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'月份', name:'ROLLING_PLAN_DATE', width:50,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
                    hidden:true,
         		  		  sortable:false,
		           			  formatter: 'date', formatoptions: { srcformat: 'Y-m-d H:i', newformat: 'Y-m-d H:i'},
			 			            editoptions:{custom_element:timeElem,custom_value:timeValue
			 		 }}
                                ,{ label:'工作任务', name: 'ROLLING_PLAN_ASSIGNMENT', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'备注', name: 'ROLLING_PLAN_CONTENT', width:50,
		            editable : true,
		                  align:'left',
		           		  		  	sortable:false,
		           editoptions: {dataEvents:[
		  		  ]
		  		  			  		  			  		  			  		  			  		  			  		  			  		  			  		  	  }
		  		  		  
	  	}
                       ,{ label:'部门IDId', name: 'DEPT_ID', width: 75, hidden:true}
		            ,{ label:'部门ID', name:'DEPT_IDName', width:50,
		            editable : true,
		                  align:'left',
		        edittype:'custom',
	                hidden:true,
         		  		  sortable:false,
		                      	     editoptions:{		  		  selectModel:'single',
		  	     custom_element:deptElem, custom_value:deptValue, forId:'DEPT_ID',viewScope:'currentOrg'}}
	  
         ]

var extraParamDYN_ROLLING_SON = '{}';


DYN_ROLLING_SONUpdateColData = function(value,colname) {
    colname = colname || "";
	value = parseFloat(value) || 0;
                            };

if (window.DYN_ROLLING_SON_comid == null || window.DYN_ROLLING_SON_comid == undefined || window.DYN_ROLLING_SON_comid == '') {
	window.DYN_ROLLING_SON_comid = id;
}

$('#DYN_ROLLING_SON').jqGrid({
	url: 'eform/bpmsCRUDClient/getSubList.json?subTableName=DYN_ROLLING_SON',
    mtype: 'POST',
    datatype: "local",
    postData: {comId:window.DYN_ROLLING_SON_comid,fkColName:"FK_SUB_COL_ID",formInfoId:"40288199873000540187300f12a80282",version:pageParams.version,taskId:typeof(_taskName) != "undefined"?_taskName:"",pageParams:JSON.stringify(pageParams)},
    toolbar: [true,'top'],
    colModel:dataGridColModel_DYN_ROLLING_SON,
    scrollOffset: 20,
    altRows:true,
	jsonReader:{
		required:"required",
	},
    pagerpos:'left',
    styleUI : 'Bootstrap',
	rownumbers: true,
	viewrecords: true,
	multiselect: true,
	autowidth: true,
	responsive:true,
    cellEdit:true,
multiboxonly : true,
    cellsubmit: 'clientArray',
	height:"auto",
	pager:DYN_ROLLING_SONPager,
	hasColSet:false,
	hasTabExport:false,
    rowNum: 20,
    rowList:[20, 50, 100, 200, 500],

	shrinkToFit:true,

beforeRequest: function () {
    $("#DYN_ROLLING_SONnorecords").hide();//隐藏提示信息
    $("#DYN_ROLLING_SONPager_left").css("display", "block");//隐藏分页信息
},

loadComplete:function(xhr){

    var rowdata = $('#DYN_ROLLING_SON').jqGrid('getRowData');
    if (rowdata != null && rowdata.length > 0) {

    } else {
        if ($("#DYN_ROLLING_SONnorecords").html() == null) {
            $('#DYN_ROLLING_SON').parent().append("<div class='no_data' style='display: none' id='DYN_ROLLING_SONnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
        }
        var height = $('#DYN_ROLLING_SON').closest('.ui-jqgrid-bdiv').height();
        $("#DYN_ROLLING_SONnorecords").css('margin-top',(height/5)+'px');
        if ((height/1.9)>120){
            $("#DYN_ROLLING_SONnorecords img").css("width","120px");
        }else{
            $("#DYN_ROLLING_SONnorecords img").css("width",(height/1.9)+"px");
        }
        $("#DYN_ROLLING_SONnorecords").show();//显示提示信息
        $("#DYN_ROLLING_SONPager_left").css("display", "none");//显示分页信息
    }
    if ($('#DYN_ROLLING_SON').getGridParam('datatype')!= 'local'){
		$.ajax({
url:'platform/avicit/weekly/weeklyController/lastWeekly',
dataType:"json",
type:"GET",
async:false,
data:{
ltid:pageParams.id,
 type:'2'
},
 success:function(data){
if(data.LAST_WEEKLY == null || data.LAST_WEEKLY == undefined){
 $("#ZZJH").text("");
 $("#lastweekly").show();
 return;
 }
 $("#lastweekly").hide();
$("#ZZJH").text(data.LAST_WEEKLY);
// $("#LDJH").text(data.LAST_YEEK) ;
 $("#ZZJH").css("font-size","28px");
 $("#LDJH").css("font-size","28px");
 }
})
$("#anniu").css("display","");
	}
},

	    onCellSelect:function(rowid,iCol,cellcontent,e){
		Plan = rowid;
var time = setTimeout(function () {
 var inid= $('[name="ROLLING_PLANDATEName"]');
 if(inid.length==0){
 return;
 }
 var endtime=new Date();
 var moth= endtime.getMonth()+1;
 var year= endtime.getFullYear();
 var mothv="";
 var motho=1;
 var mothov="";
 var mos=2;
 var mosv="";
 mothv+=year;
 if(moth<10){
 mothv+="-";
 mothv+="0";
 mothv+=moth;
 }else {
 mothv+="-"
 mothv+=moth;
 }
 inid.children()[1].value=mothv;
 inid.children()[1].innerText=year+"年"+moth+"月";
 motho+=moth;
 if(motho>12){
 motho-=12;
 year++;
 }
 mothov+=year;
 if(motho<10){
 mothov+="-";
 mothov+="0";
 mothov+=motho;
 }else {
 mothov+="-"
 mothov+=motho;
 }
 inid.children()[2].value=mothov;
 inid.children()[2].innerText=year+"年"+motho+"月";
 mos+=moth;
 if(mos>12){
 mos-=12;
 }
 mosv+=year;
 if(mos<10){
 mosv+="-";
 mosv+="0";
 mosv+=mos;
 }else {
 mosv+="-"
 mosv+=mos;
 }
 inid.children()[3].value=mosv;
 inid.children()[3].innerText=year+"年"+mos+"月";
 clearTimeout(time);
},200);


    },
	gridComplete: function(){
	var height = $('#DYN_ROLLING_SON').closest('.ui-jqgrid-bdiv').height();
	$("#DYN_ROLLING_SONnorecords").css('margin-top',(height/5)+'px');
	if ((height/1.9)>120){
		$("#DYN_ROLLING_SONnorecords img").css("width","120px");
	}else{
		$("#DYN_ROLLING_SONnorecords img").css("width",(height/1.9)+"px");
	}
							},


beforeEditCell:function(){
	$(".datatable").not("#DYN_ROLLING_SON").each(function(){
	$(this).jqGrid('endEditCell');
	});
},
	forceFit:false
});




DYN_ROLLING_SONReload = function(){
	var _isInvalid = true;
	$("#DYN_ROLLING_SON").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	});
	if (!_isInvalid){
		return false;
	}
	DYN_ROLLING_SONTabInitFlag = true;
	$('#DYN_ROLLING_SON').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
}

DYN_ROLLING_SONTabReload = function(forceFlag){
	if(!DYN_ROLLING_SONTabInitFlag  || forceFlag){
		DYN_ROLLING_SONReload();
	}

}


$('#DYN_ROLLING_SON').parents('div.ui-jqgrid-bdiv').css("max-height","2000px");

//放入表格toolbar中
$('#t_DYN_ROLLING_SON').append($('#DYN_ROLLING_SONToolbar'));

            function formatForDYN_ROLLING_SONROLLING_PLANDATE(cellvalue, options, rowObject){if(cellvalue!=''&&cellvalue!=undefined){ return cellvalue } if(rowObject.ROLLING_PLANDATE==undefined){ return "请选择" } return rowObject.ROLLING_PLANDATE}
    
function formatDYN_ROLLING_SONROLLING_PLANDATE(cellvalue, options, rowObject){
   	if(cellvalue && cellvalue != ''){
		return cellvalue;
	}else{
		var rowId = options.rowId;
		var datas = options.colModel.editoptions.value;
		if (typeof options.colModel.editoptions.value === 'function'){
			datas = options.colModel.editoptions.value.call();
		}
		var forId = options.colModel.editoptions.forId;
		var code = rowObject[forId];
		return datas[code] ? datas[code] : '';
	}
}
    
    
    
    
    
    


                
DYN_ROLLING_SONReload();

/**
 * 表格编辑参数
 */
var newRowIndex_DYN_ROLLING_SON = 0;
var newRowStart_DYN_ROLLING_SON = "new_row";


/**
 * 添加页面
 */
insertTableDYN_ROLLING_SON = function(){
	$('#DYN_ROLLING_SON').jqGrid('endEditCell');
	$("#DYN_ROLLING_SONnorecords").hide();//隐藏提示信息
	$("#DYN_ROLLING_SONPager_left").css("display", "block");//隐藏分页信息
	var newRowId = newRowStart_DYN_ROLLING_SON + newRowIndex_DYN_ROLLING_SON;
	var parameters = {
		rowID : newRowId,
		initdata : {
																																											DEPT_ID:pageParams.session.deptId,
							DEPT_IDName:pageParams.session.deptName,
									},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$('#DYN_ROLLING_SON').jqGrid('addRow', parameters);
	newRowIndex_DYN_ROLLING_SON++;  
};



/**
 * 删除
 */
deleteTableDYN_ROLLING_SON = function(){
	var rows = [];
	rows = $('#DYN_ROLLING_SON').jqGrid('getGridParam','selarrrow');


	$('#DYN_ROLLING_SON').jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		layer.confirm('确定要删除该数据吗?', function(index){
			for(;l--;){
				if (rows[l].indexOf("new_row")!=-1){
					$('#DYN_ROLLING_SON').jqGrid("delRowData", rows[l]);  
				}else{
					ids.push(rows[l]);
				}
			}
			if (ids.length>0){
				avicAjax.ajax({
					url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=DYN_ROLLING_SON',
					data: {ids : ids.join(','),formInfoId:'40288199873000540187300f12a80282',version:pageParams.version,deleteclass:''},
					type : 'post',
					dataType : 'json',
					success : function(result){
						if (result.flag == 'success'){
							$('#DYN_ROLLING_SON').jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
						}else{
							layer.alert(result.msg, {
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							});
						} 
					}
				});
				
			}
			layer.close(index);
		});   
	}else{
		layer.msg('请选择要删除的记录！');
	}
};





$('#DYN_ROLLING_SON').setGridWidth(700);
$('#DYN_ROLLING_SON').jqGrid('resizeGrid');



//按钮绑定事件
$('#DYN_ROLLING_SON_insertBtn').bind('click',function(){
	insertTableDYN_ROLLING_SON();
});

//按钮绑定事件
$('#DYN_ROLLING_SON_deleteBtn').bind('click',function(){
	deleteTableDYN_ROLLING_SON();
});

//自定义按钮绑定事件
																//列onchange事件
			DYN_ROLLING_SONROLLING_PLANDATEChange = function(_this,e){
		 var elementById = document.getElementById('#'+Plan);















var el=elementById.querySelector('[aria-describedby="DYN_ROLLING_SON_ROLLING_PLANDATEName"]');















el.innerText=this.value;















el.title=this.value;















var ROLLING_PLAN_ROLLING_PLAN_DATE = elementById.querySelector('[aria-describedby="DYN_ROLLING_SON_ROLLING_PLAN_DATE"]');















 var endtime=new Date();















 ROLLING_PLAN_ROLLING_PLAN_DATE.title=this.value+'-'+endtime.getDate();















ROLLING_PLAN_ROLLING_PLAN_DATE.innerHTML=this.value+'-'+endtime.getDate()
















    }
							

//流程控制
workflowControl.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_ROLLING_SON_control"){
		return;
	}
	$("#"+tagId).find("input").removeAttr("disabled");
	var id = tagId.split("_control")[0];
	if(operability){
		jQuery("#t_"+id).find("#DYN_ROLLING_SON_insertBtn").css("display","inline-block");
		jQuery("#t_"+id).find("#DYN_ROLLING_SON_deleteBtn").css("display","inline-block");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':true});
	}else{
		jQuery("#t_"+id).find("#DYN_ROLLING_SON_insertBtn").css("display","none");
		jQuery("#t_"+id).find("#DYN_ROLLING_SON_deleteBtn").css("display","none");
		jQuery("#"+id).jqGrid('setGridParam',{'cellEdit':false,'multiselect':false,'altRows':false});
	}
});
//子表添加按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_ROLLING_SON_insertBtn"){
		return;
	}
	if(operability){
		$("#DYN_ROLLING_SON_insertBtn").css("display","inline-block");
	}else{
		$("#DYN_ROLLING_SON_insertBtn").css("display","none");
	}
});
//子表删除按钮流程控制
workflowControlSubTableButtonForAccess.addcontrolFunc(function(tagId, operability){
	if (tagId != "DYN_ROLLING_SON_deleteBtn"){
		return;
	}
	if(operability){
		$("#DYN_ROLLING_SON_deleteBtn").css("display","inline-block");
		var subTableName = "DYN_ROLLING_SON_deleteBtn".replace("deleteBtn","control");
		$("#"+subTableName).find(".checkbox").removeAttr("disabled");
	}else{
		$("#DYN_ROLLING_SON_deleteBtn").css("display","none");
		var flag = true;
		$("#"+tagId).siblings().each(function(){
			if ($(this).css("display") != "none"){
				flag = false;
				return;
			}
		});
		if (flag){
			$("#"+tagId).parents(".ui-userdata").hide();
		}
	}
});




//子表自定义按钮流程控制

																								
beforeSaveEvent.addBeforeSaveEvent(function(formData){
	return $('#DYN_ROLLING_SON').validateJqGrid("validate");
});

$('#DYN_ROLLING_SON').validateJqGrid("addValidate","ROLLING_PLANDATE","required");
		$('#DYN_ROLLING_SON').validateJqGrid("addValidate","ROLLING_PLANDATE","maxlength",{maxlength:255});
				$('#DYN_ROLLING_SON').validateJqGrid("addValidate","FK_SUB_COL_ID","maxlength",{maxlength:50});
		$('#DYN_ROLLING_SON').validateJqGrid("addValidate","ROLLING_PLAN_TARGET","required");
		$('#DYN_ROLLING_SON').validateJqGrid("addValidate","ROLLING_PLAN_TARGET","maxlength",{maxlength:255});
				$('#DYN_ROLLING_SON').validateJqGrid("addValidate","ROLLING_PLAN_ASSIGNMENT","required");
		$('#DYN_ROLLING_SON').validateJqGrid("addValidate","ROLLING_PLAN_ASSIGNMENT","maxlength",{maxlength:255});
				$('#DYN_ROLLING_SON').validateJqGrid("addValidate","ROLLING_PLAN_CONTENT","maxlength",{maxlength:255});
				$('#DYN_ROLLING_SON').validateJqGrid("addValidate","DEPT_ID","maxlength",{maxlength:255});
		
if ($("input[name='DEPT_ID']").val()==''||$("input[name='DEPT_ID']").val()==null||$("input[name='DEPT_ID']").val()==undefined ){
	var macoValue = "";
		$.ajax({
		url: 'platform/eform/bpmsCRUDClient/getMarcoValue',
		type: 'POST',
		async:false,
		data: {
			exp: "@{departmentId}"
		},
		dataType: 'json',
		success: function (backData, status) {
			if (backData.errorInfo){
				layer.alert(backData.errorInfo, {
						icon: 7
					});
			}else{
				macoValue = backData.value;
			}
		}
	});
	$("#DEPT_ID").val(macoValue);
}



	setTimeout(function(){
		$('.attachment_div').each(function (index, element) {
			var eventDiv =  $(element).find("div[id^='rt_rt_']");
        	eventDiv.css("width", "101px");
        	eventDiv.css("height", "32px");
    	});
	}, 1000);

	if(fkcol.length!=0 && fkvalue.length!=0){
     	if ($('#'+fkcol).length>0){
     		$('#'+fkcol).val(fkvalue);
     	}else{
     		$fk = $('<input type="hidden" name="'+fkcol+'" id="'+fkcol+'" value="'+fkvalue+'"/>');
     		$('#form').append($fk);
     	}
	}

	$('.date-picker').on('keydown',nullInput);
	$('.time-picker').on('keydown',nullInput);
	
		                 
    if(type === "tree") {
        $("#" + parentNodeId).attr("readonly", "readonly");

        if(pNodeIdValue != null && pNodeIdValue != "") {
            $("#" + parentNodeId).val(pNodeIdValue);
        }
    }

    $("input").attr("readonly","readonly");
    $("select").attr("disabled", "disabled");
    $(':checkbox').attr("disabled", "disabled");
    $(':radio').attr("disabled", "disabled");
    $(':text').attr("disabled", "disabled");
    $("textarea").attr("readonly", "readonly");

    jQuery(".eform_subtable_bpm_auth").find("[role='button']").css("display","none");
    jQuery(".datatable").jqGrid('setGridParam',{'cellEdit':false});

    $(".input-group-addon").css('cursor',"not-allowed");
    $(".input-group-addon").bind('click', function(){return false;});
    $(".input-group-addon").off('click');
    $("input").off("focus");

    setTimeout(function(){
        $(".uploader-ext").children('.uploader-panel-heading').each(function (index, element) {
            $(element).css("display", "none");
        });
        $(".uploader-ext").find('div.uploader-file-item').bind('mouseover',function(){
            $('div.uploader-file-infos').find(".uploader-file-infos-delete").css("display", "none");
        });
    }, 500);

    $('.spinner input').trigger("blur.spinner");

    $(".eform-form-tab").each(function(){
        eformTabReload(this);
        setTabMenu(this);
    });

});


function closeDialog(){
	if(type === "tree") {
		var hideRMenu = parent["hideRMenu" + pgrid];
		if(typeof(hideRMenu) == "function") {
			hideRMenu();
		}
    }else{
    	if (pgrid != ""){
			if (typeof parent[pgrid+'Reload'] == 'function')
			parent[pgrid+'Reload'].call();
		}
    }

	var index = parent.layer.getFrameIndex(window.name); //得到当前iframe层的索引
    parent.layer.close(index);
};



//全局上传状态
var globalUploadNum = 0;
var globalUploadNumTemp = 0;

//附件上传完后执行
function afterUploadEvent(){
    globalUploadNumTemp++;
}

//附件上传失败后执行
function uploadError(file, reason){
globalUploadNumTemp = globalUploadNumTemp - 10000;
layer.msg('附件上传失败！', {icon: 2});
}
