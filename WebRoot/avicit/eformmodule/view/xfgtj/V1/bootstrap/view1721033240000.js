function bpmFormatter(cellvalue, options, rowObject){
   var bussinesid =  rowObject.ID;                                                 
   if(rowObject.PROCESSINSTANCEID !=null && rowObject.PROCESSINSTANCEID!=undefined && rowObject.PROCESSINSTANCEID !=''){ 
   	bussinesid = rowObject.PROCESSINSTANCEID;
   }
   if(rowObject.BUSINESSSTATE_!=null&&rowObject.BUSINESSSTATE_!=""&&rowObject.BUSINESSSTATE_!='undefined'){
	  return "<span class='glyphicon glyphicon-pencil' onclick='javascript: flowUtils.detail(\""+ bussinesid +"\",2);'></span>";
	}else{return '';}
}
function bpmStatusFormatter(cellvalue, options, rowObject){
	  if(cellvalue=='start')return '拟稿中'; if(cellvalue=='active')return '流转中'; if(cellvalue=='ended')return '已完成';return '';
	}

function redraw948e83e390a0fe270190a147e30d15a8(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e390a0fe270190a147e30d15a8").width();
		var win_height = $("#948e83e390a0fe270190a147e30d15a8").height();
		$('#948e83e390a0fe270190a147e30d15a8').layout('panel', 'center').panel('resize',{width:win_width*0.8,height:win_height*1.0});
		$('#948e83e390a0fe270190a147e30d15a8').layout('panel', 'west').panel('resize',{width:win_width*0.2,height:win_height*1.0});
		$('#948e83e390a0fe270190a147e30d15a8').layout('resize');
		$('#948e83e390ba1eca0190bea87a2474c3').layout('panel', 'center').panel('resize',{width:win_width*0.8,height:win_height*1.0});
		$('#948e83e390ba1eca0190bea87a2474c3').layout('resize');
		$('#948e83e390ba1eca0190bea87a2474c2').layout('panel', 'center').panel('resize',{width:win_width*0.8,height:win_height*1.0});
		$('#948e83e390ba1eca0190bea87a2474c2').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e390a0fe270190a147e30d15a8").width();
	setTimeout(function(){redraw948e83e390a0fe270190a147e30d15a8(win_width);},500);
});
$(document).ready(function(){ 
window.eformtab320c01970fa3eb44eb0a6c9e5be6e2449251Shown = function(forceFlag){
    tablee29a463e62d6854d475838a6e135a2f0bddeTabReload(forceFlag);
}
$('a[aria-controls="320c01970fa3eb44eb0a6c9e5be6e2449251"]').on('shown.bs.tab', function (e) {
	eformtab320c01970fa3eb44eb0a6c9e5be6e2449251Shown();
});
$('a[aria-controls="320c01970fa3eb44eb0a6c9e5be6e2449251"]').parents(".tab-pane").each(function(){
	var id = $(this).attr("id");
	$('a[aria-controls="'+id+'"]').on('shown.bs.tab', function (e) {
		$('a[aria-controls="320c01970fa3eb44eb0a6c9e5be6e2449251"]').trigger('shown.bs.tab');
	});
});
window.eformtabf95d6edda6207d4e55dbf7ab60ecd5a702aaShown = function(forceFlag){
    table1ed0d20aa6fada47f8a8b6e1c5804862fac2TabReload(forceFlag);
}
$('a[aria-controls="f95d6edda6207d4e55dbf7ab60ecd5a702aa"]').on('shown.bs.tab', function (e) {
	eformtabf95d6edda6207d4e55dbf7ab60ecd5a702aaShown();
});
$('a[aria-controls="f95d6edda6207d4e55dbf7ab60ecd5a702aa"]').parents(".tab-pane").each(function(){
	var id = $(this).attr("id");
	$('a[aria-controls="'+id+'"]').on('shown.bs.tab', function (e) {
		$('a[aria-controls="f95d6edda6207d4e55dbf7ab60ecd5a702aa"]').trigger('shown.bs.tab');
	});
});
});	 
$('.nav-tabs li').contextMenu('eform-tab-menu', {
        menuStyle: {
            border: '1px solid #ddd',
            backgroundColor:'#fafafa',
            color:'#444',
            width: '100px',
            height: '26px',
            margin: '0',
            padding: '2px'
        },
        itemStyle: {
            margin: '0px',
            color: '#444',
            display: 'block',
            cursor: 'pointer',
            padding: '0',
            border: '0px solid',
            backgroundColor: 'transparent',
            fontSize: '12px',
            height:'20px',
            paddingLeft : '20px',
            lineHeight:'20px',
            fontFamily: 'Microsoft YaHei'
        },
        itemHoverStyle: {
            borderColor: '#b7d2ff',
            backgroundColor: '#eaf2ff',
            borderRadius:'5px 5px 5px 5px'
        },
        bindings: {
            'eform-refresh': function(t) {
					var tabid = $(t).find('a').attr("aria-controls");
		           	if (typeof window['eformtab'+tabid+'Shown'] == 'function'){
                		window['eformtab'+tabid+'Shown'].call(this,true);
            		}
            }
        }
})
var compRef2a4bd6c39ffe904bb18865f660a47e78d7f0='';
var compRef4712aff9c06625420a3812c2b483997bf08b='';
var tablee29a463e62d6854d475838a6e135a2f0bddeKeyWordIn = "";    
var tablee29a463e62d6854d475838a6e135a2f0bddeParamIn = "";    
var tablee29a463e62d6854d475838a6e135a2f0bddeSelectRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,status){
					oldFunc(rowid,status);
					fun(rowid,status);
				}
			}
		},
		exec:function(rowid,status){
			if (typeof this.func == 'function')
               this.func(rowid,status);
		}
};
var tablee29a463e62d6854d475838a6e135a2f0bddeLoadComplete = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(data){
					oldFunc(data);
					fun(data);
				}
			}
		},
		exec:function(data){
			if (typeof this.func == 'function')
               this.func(data);
		}
};
var tablee29a463e62d6854d475838a6e135a2f0bddeBeforeEditCell = {        
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid, cellname, value, iRow, iCol){
					oldFunc(rowid, cellname, value, iRow, iCol);
					fun(rowid, cellname, value, iRow, iCol);
				}
			}
		},
		exec:function(rowid, cellname, value, iRow, iCol){
			if (typeof this.func == 'function')
               if(this.func(rowid, cellname, value, iRow, iCol) == false)
               		return false;
         return true;
		}
};
var tablee29a463e62d6854d475838a6e135a2f0bddeOndblClickRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iRow,iCol,e){
					oldFunc(rowid,iRow,iCol,e);
					fun(rowid,iRow,iCol,e);
				}
			}
		},
		exec:function(rowid,iRow,iCol,e){
			if (typeof this.func == 'function')
               this.func(rowid,iRow,iCol,e);
		}
};
var tablee29a463e62d6854d475838a6e135a2f0bddeOnRightClickRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iRow,iCol,e){
					oldFunc(rowid,iRow,iCol,e);
					fun(rowid,iRow,iCol,e);
				}
			}
		},
		exec:function(rowid,iRow,iCol,e){
			if (typeof this.func == 'function')
               this.func(rowid,iRow,iCol,e);
		}
};
var tablee29a463e62d6854d475838a6e135a2f0bddeGridComplete = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(){
					oldFunc();
					fun();
				}
			}
		},
		exec:function(){
			if (typeof this.func == 'function')
               this.func();
		}
};
var tablee29a463e62d6854d475838a6e135a2f0bddeOnCellSelect = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iCol,cellcontent,e){
					oldFunc(rowid,iCol,cellcontent,e);
					fun(rowid,iCol,cellcontent,e);
				}
			}
		},
		exec:function(rowid,iCol,cellcontent,e){
			if (typeof this.func == 'function')
               this.func(rowid,iCol,cellcontent,e);
		}
};
var tablee29a463e62d6854d475838a6e135a2f0bddeLoadBeforeSend = {        
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(xhr, settings){
					oldFunc(xhr, settings);
					fun(xhr, settings);
				}
			}
		},
		exec:function(xhr, settings){
			if (typeof this.func == 'function')
               if(this.func(xhr, settings) == false)
               		return false;
         return true;
		}
};
function tablee29a463e62d6854d475838a6e135a2f0bddeReload(pid){
	var _isInvalid = true;
	$("#tablee29a463e62d6854d475838a6e135a2f0bdde").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tablee29a463e62d6854d475838a6e135a2f0bddePid = pid;
		}
		return false;
	}
	window.tablee29a463e62d6854d475838a6e135a2f0bddePid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tablee29a463e62d6854d475838a6e135a2f0bdde').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tablee29a463e62d6854d475838a6e135a2f0bddeTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tablee29a463e62d6854d475838a6e135a2f0bddePid == 'undefined' || window.tablee29a463e62d6854d475838a6e135a2f0bddePid!=null){
tablee29a463e62d6854d475838a6e135a2f0bddeReload(window.tablee29a463e62d6854d475838a6e135a2f0bddePid);
}
}
var tablecmtablee29a463e62d6854d475838a6e135a2f0bdde = [];
var uniqueColtablee29a463e62d6854d475838a6e135a2f0bdde = [];
var uniqueColTitletablee29a463e62d6854d475838a6e135a2f0bdde = [];
var defaultValuetablee29a463e62d6854d475838a6e135a2f0bdde = {};
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({label: '党组织名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({label: '姓名',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({ label: '申报党员先锋岗名称',hidden:true, name: 'GW_NAME',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({ label: '申报党员先锋岗名称',hidden:false, name: 'GW_NAMEName',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({label: '性别',hidden:false, name: 'USER_SEX',align:'left',  width: '60px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({label: '年龄',hidden:false, name: 'USER_AGE',align:'left',  width: '60px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({label: '职务',hidden:false, name: 'USER_POST',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({ label: '部门类别',hidden:true, name: 'USER_DEPT_TYPE',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({ label: '部门类别',hidden:false, name: 'USER_DEPT_TYPEName',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({label: '年度绩效',hidden:false, name: 'USER_JX',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({label: '先进事迹',hidden:false, name: 'USER_SJ',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({ label: '干部级别',hidden:true, name: 'USER_GBJB',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({ label: '干部级别',hidden:false, name: 'USER_GBJBName',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({label: '党员积分',hidden:false, name: 'USER_JF',align:'right',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({label: '民主评议结果',hidden:false, name: 'USER_JG',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({ label: '上年度党员先锋岗评选情况',hidden:true, name: 'ATTR2',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({ label: '上年度党员先锋岗评选情况',hidden:false, name: 'ATTR2Name',align:'left',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({label: '申报党员先锋岗名称',hidden:true, name: 'GW_NAME2',align:'right',  width: '150px'});
tablecmtablee29a463e62d6854d475838a6e135a2f0bdde.push({label: '发起主键id',hidden:true, name: 'ATTR3',align:'left',  width: '150px'});
	var searchNamestablee29a463e62d6854d475838a6e135a2f0bdde = []; 
searchNamestablee29a463e62d6854d475838a6e135a2f0bdde.push('PARTY_NAME');
$('#keyWordtablee29a463e62d6854d475838a6e135a2f0bdde').attr('placeholder', '请输入党组织名称查询');
function searchDataKeyWordtablee29a463e62d6854d475838a6e135a2f0bdde(){
	var keyWord = $.trim($("#keyWordtablee29a463e62d6854d475838a6e135a2f0bdde").val()); 
 if($('#keyWordtablee29a463e62d6854d475838a6e135a2f0bdde').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestablee29a463e62d6854d475838a6e135a2f0bdde.length;i++){ 
		var name = searchNamestablee29a463e62d6854d475838a6e135a2f0bdde[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
tablee29a463e62d6854d475838a6e135a2f0bddeKeyWordIn=JSON.stringify(param);
tablee29a463e62d6854d475838a6e135a2f0bddeParamIn="";
	$('#tablee29a463e62d6854d475838a6e135a2f0bdde').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtablee29a463e62d6854d475838a6e135a2f0bdde').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtablee29a463e62d6854d475838a6e135a2f0bdde();
	}
});
$('#keyWordBttablee29a463e62d6854d475838a6e135a2f0bdde').bind('click', function() {
		searchDataKeyWordtablee29a463e62d6854d475838a6e135a2f0bdde();
});
var table1ed0d20aa6fada47f8a8b6e1c5804862fac2KeyWordIn = "";    
var table1ed0d20aa6fada47f8a8b6e1c5804862fac2ParamIn = "";    
var table1ed0d20aa6fada47f8a8b6e1c5804862fac2SelectRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,status){
					oldFunc(rowid,status);
					fun(rowid,status);
				}
			}
		},
		exec:function(rowid,status){
			if (typeof this.func == 'function')
               this.func(rowid,status);
		}
};
var table1ed0d20aa6fada47f8a8b6e1c5804862fac2LoadComplete = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(data){
					oldFunc(data);
					fun(data);
				}
			}
		},
		exec:function(data){
			if (typeof this.func == 'function')
               this.func(data);
		}
};
var table1ed0d20aa6fada47f8a8b6e1c5804862fac2BeforeEditCell = {        
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid, cellname, value, iRow, iCol){
					oldFunc(rowid, cellname, value, iRow, iCol);
					fun(rowid, cellname, value, iRow, iCol);
				}
			}
		},
		exec:function(rowid, cellname, value, iRow, iCol){
			if (typeof this.func == 'function')
               if(this.func(rowid, cellname, value, iRow, iCol) == false)
               		return false;
         return true;
		}
};
var table1ed0d20aa6fada47f8a8b6e1c5804862fac2OndblClickRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iRow,iCol,e){
					oldFunc(rowid,iRow,iCol,e);
					fun(rowid,iRow,iCol,e);
				}
			}
		},
		exec:function(rowid,iRow,iCol,e){
			if (typeof this.func == 'function')
               this.func(rowid,iRow,iCol,e);
		}
};
var table1ed0d20aa6fada47f8a8b6e1c5804862fac2OnRightClickRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iRow,iCol,e){
					oldFunc(rowid,iRow,iCol,e);
					fun(rowid,iRow,iCol,e);
				}
			}
		},
		exec:function(rowid,iRow,iCol,e){
			if (typeof this.func == 'function')
               this.func(rowid,iRow,iCol,e);
		}
};
var table1ed0d20aa6fada47f8a8b6e1c5804862fac2GridComplete = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(){
					oldFunc();
					fun();
				}
			}
		},
		exec:function(){
			if (typeof this.func == 'function')
               this.func();
		}
};
var table1ed0d20aa6fada47f8a8b6e1c5804862fac2OnCellSelect = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iCol,cellcontent,e){
					oldFunc(rowid,iCol,cellcontent,e);
					fun(rowid,iCol,cellcontent,e);
				}
			}
		},
		exec:function(rowid,iCol,cellcontent,e){
			if (typeof this.func == 'function')
               this.func(rowid,iCol,cellcontent,e);
		}
};
var table1ed0d20aa6fada47f8a8b6e1c5804862fac2LoadBeforeSend = {        
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(xhr, settings){
					oldFunc(xhr, settings);
					fun(xhr, settings);
				}
			}
		},
		exec:function(xhr, settings){
			if (typeof this.func == 'function')
               if(this.func(xhr, settings) == false)
               		return false;
         return true;
		}
};
function table1ed0d20aa6fada47f8a8b6e1c5804862fac2Reload(pid){
	var _isInvalid = true;
	$("#table1ed0d20aa6fada47f8a8b6e1c5804862fac2").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table1ed0d20aa6fada47f8a8b6e1c5804862fac2Pid = pid;
		}
		return false;
	}
	window.table1ed0d20aa6fada47f8a8b6e1c5804862fac2Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table1ed0d20aa6fada47f8a8b6e1c5804862fac2').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table1ed0d20aa6fada47f8a8b6e1c5804862fac2TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table1ed0d20aa6fada47f8a8b6e1c5804862fac2Pid == 'undefined' || window.table1ed0d20aa6fada47f8a8b6e1c5804862fac2Pid!=null){
table1ed0d20aa6fada47f8a8b6e1c5804862fac2Reload(window.table1ed0d20aa6fada47f8a8b6e1c5804862fac2Pid);
}
}
var tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2 = [];
var uniqueColtable1ed0d20aa6fada47f8a8b6e1c5804862fac2 = [];
var uniqueColTitletable1ed0d20aa6fada47f8a8b6e1c5804862fac2 = [];
var defaultValuetable1ed0d20aa6fada47f8a8b6e1c5804862fac2 = {};
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({label: '党组织名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({label: '姓名',hidden:false, name: 'USER_NAME',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({ label: '申报党员先锋岗名称',hidden:true, name: 'GW_NAME',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({ label: '申报党员先锋岗名称',hidden:false, name: 'GW_NAMEName',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({label: '性别',hidden:false, name: 'USER_SEX',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({label: '年龄',hidden:false, name: 'USER_AGE',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({label: '职务',hidden:false, name: 'USER_POST',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({ label: '部门类别',hidden:true, name: 'USER_DEPT_TYPE',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({ label: '部门类别',hidden:false, name: 'USER_DEPT_TYPEName',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({label: '年度绩效',hidden:false, name: 'USER_JX',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({label: '先进事迹',hidden:false, name: 'USER_SJ',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({ label: '干部级别',hidden:true, name: 'USER_GBJB',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({ label: '干部级别',hidden:false, name: 'USER_GBJBName',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({label: '党员积分',hidden:false, name: 'USER_JF',align:'right',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({label: '民主评议结果',hidden:false, name: 'USER_JG',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({ label: '上年度党员先锋岗评选情况',hidden:true, name: 'ATTR2',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({ label: '上年度党员先锋岗评选情况',hidden:false, name: 'ATTR2Name',align:'left',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({label: '申报党员先锋岗名称',hidden:true, name: 'GW_NAME2',align:'right',  width: '150px'});
tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2.push({label: 'ATTR3',hidden:true, name: 'ATTR3',align:'left',  width: '150px'});
var table22076c1858a895430889b63b5f580836086bKeyWordIn = "";    
var table22076c1858a895430889b63b5f580836086bParamIn = "";    
var table22076c1858a895430889b63b5f580836086bSelectRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,status){
					oldFunc(rowid,status);
					fun(rowid,status);
				}
			}
		},
		exec:function(rowid,status){
			if (typeof this.func == 'function')
               this.func(rowid,status);
		}
};
var table22076c1858a895430889b63b5f580836086bLoadComplete = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(data){
					oldFunc(data);
					fun(data);
				}
			}
		},
		exec:function(data){
			if (typeof this.func == 'function')
               this.func(data);
		}
};
var table22076c1858a895430889b63b5f580836086bBeforeEditCell = {        
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid, cellname, value, iRow, iCol){
					oldFunc(rowid, cellname, value, iRow, iCol);
					fun(rowid, cellname, value, iRow, iCol);
				}
			}
		},
		exec:function(rowid, cellname, value, iRow, iCol){
			if (typeof this.func == 'function')
               if(this.func(rowid, cellname, value, iRow, iCol) == false)
               		return false;
         return true;
		}
};
var table22076c1858a895430889b63b5f580836086bOndblClickRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iRow,iCol,e){
					oldFunc(rowid,iRow,iCol,e);
					fun(rowid,iRow,iCol,e);
				}
			}
		},
		exec:function(rowid,iRow,iCol,e){
			if (typeof this.func == 'function')
               this.func(rowid,iRow,iCol,e);
		}
};
var table22076c1858a895430889b63b5f580836086bOnRightClickRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iRow,iCol,e){
					oldFunc(rowid,iRow,iCol,e);
					fun(rowid,iRow,iCol,e);
				}
			}
		},
		exec:function(rowid,iRow,iCol,e){
			if (typeof this.func == 'function')
               this.func(rowid,iRow,iCol,e);
		}
};
var table22076c1858a895430889b63b5f580836086bGridComplete = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(){
					oldFunc();
					fun();
				}
			}
		},
		exec:function(){
			if (typeof this.func == 'function')
               this.func();
		}
};
var table22076c1858a895430889b63b5f580836086bOnCellSelect = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iCol,cellcontent,e){
					oldFunc(rowid,iCol,cellcontent,e);
					fun(rowid,iCol,cellcontent,e);
				}
			}
		},
		exec:function(rowid,iCol,cellcontent,e){
			if (typeof this.func == 'function')
               this.func(rowid,iCol,cellcontent,e);
		}
};
var table22076c1858a895430889b63b5f580836086bLoadBeforeSend = {        
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(xhr, settings){
					oldFunc(xhr, settings);
					fun(xhr, settings);
				}
			}
		},
		exec:function(xhr, settings){
			if (typeof this.func == 'function')
               if(this.func(xhr, settings) == false)
               		return false;
         return true;
		}
};
function table22076c1858a895430889b63b5f580836086bReload(pid){
	var _isInvalid = true;
	$("#table22076c1858a895430889b63b5f580836086b").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table22076c1858a895430889b63b5f580836086bPid = pid;
		}
		return false;
	}
	window.table22076c1858a895430889b63b5f580836086bPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table22076c1858a895430889b63b5f580836086b').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table22076c1858a895430889b63b5f580836086bTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table22076c1858a895430889b63b5f580836086bPid == 'undefined' || window.table22076c1858a895430889b63b5f580836086bPid!=null){
table22076c1858a895430889b63b5f580836086bReload(window.table22076c1858a895430889b63b5f580836086bPid);
}
}
var tablecmtable22076c1858a895430889b63b5f580836086b = [];
var uniqueColtable22076c1858a895430889b63b5f580836086b = [];
var uniqueColTitletable22076c1858a895430889b63b5f580836086b = [];
var defaultValuetable22076c1858a895430889b63b5f580836086b = {};
tablecmtable22076c1858a895430889b63b5f580836086b.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable22076c1858a895430889b63b5f580836086b.push({label: '年度',hidden:false, name: 'FQ_PXSJ',align:'left',  width: '150px'});
tablecmtable22076c1858a895430889b63b5f580836086b.push({label: '编号',hidden:false, name: 'FQ_FROM_NO',align:'left',  width: '150px'});
tablecmtable22076c1858a895430889b63b5f580836086b.push({label: '标题',hidden:false, name: 'FQ_TITLE',align:'left',  width: '150px'});
tablecmtable22076c1858a895430889b63b5f580836086b.push({label: 'IDS',hidden:true, name: 'IDS',align:'left',  width: '150px'});
	var searchNamestable22076c1858a895430889b63b5f580836086b = []; 
searchNamestable22076c1858a895430889b63b5f580836086b.push('FQ_TITLE');
searchNamestable22076c1858a895430889b63b5f580836086b.push('FQ_FROM_NO');
$('#keyWordtable22076c1858a895430889b63b5f580836086b').attr('placeholder', '请输入标题、编号查询');
function searchDataKeyWordtable22076c1858a895430889b63b5f580836086b(){
	var keyWord = $.trim($("#keyWordtable22076c1858a895430889b63b5f580836086b").val()); 
 if($('#keyWordtable22076c1858a895430889b63b5f580836086b').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable22076c1858a895430889b63b5f580836086b.length;i++){ 
		var name = searchNamestable22076c1858a895430889b63b5f580836086b[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table22076c1858a895430889b63b5f580836086bKeyWordIn=JSON.stringify(param);
table22076c1858a895430889b63b5f580836086bParamIn="";
	$('#table22076c1858a895430889b63b5f580836086b').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable22076c1858a895430889b63b5f580836086b').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable22076c1858a895430889b63b5f580836086b();
	}
});
$('#keyWordBttable22076c1858a895430889b63b5f580836086b').bind('click', function() {
		searchDataKeyWordtable22076c1858a895430889b63b5f580836086b();
});
;$(document).ready(function(){ 

table22076c1858a895430889b63b5f580836086bSelectRow.addEvent(function(rowid,status){
var rowdata = $('#table22076c1858a895430889b63b5f580836086b').jqGrid('getRowData',rowid);if (status) {
compRef2a4bd6c39ffe904bb18865f660a47e78d7f0 = rowid;operaButtonName = null;
tablee29a463e62d6854d475838a6e135a2f0bddeReload(rowid,rowdata,'');}
});
table22076c1858a895430889b63b5f580836086bLoadComplete.addEvent(function(data){
var rowdata = $('#table22076c1858a895430889b63b5f580836086b').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
tablee29a463e62d6854d475838a6e135a2f0bddeReload('null',rowdata,'');
}
});
tablee29a463e62d6854d475838a6e135a2f0bddeLoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
table22076c1858a895430889b63b5f580836086bSelectRow.addEvent(function(rowid,status){
var rowdata = $('#table22076c1858a895430889b63b5f580836086b').jqGrid('getRowData',rowid);if (status) {
compRef4712aff9c06625420a3812c2b483997bf08b = rowid;operaButtonName = null;
table1ed0d20aa6fada47f8a8b6e1c5804862fac2Reload(rowid,rowdata,'');}
});
table22076c1858a895430889b63b5f580836086bLoadComplete.addEvent(function(data){
var rowdata = $('#table22076c1858a895430889b63b5f580836086b').jqGrid('getRowData');
if(rowdata != null && rowdata.length > 0){
}else{
table1ed0d20aa6fada47f8a8b6e1c5804862fac2Reload('null',rowdata,'');
}
});
table1ed0d20aa6fada47f8a8b6e1c5804862fac2LoadBeforeSend.addEvent(function(xhr, settings){
if(settings.data&&settings.data.indexOf('pid')==-1){return false;}
});
$("#tablee29a463e62d6854d475838a6e135a2f0bdde").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390a0fe270190a147e30d15a8/tablee29a463e62d6854d475838a6e135a2f0bdde/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtablee29a463e62d6854d475838a6e135a2f0bdde,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tablee29a463e62d6854d475838a6e135a2f0bddeSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tablee29a463e62d6854d475838a6e135a2f0bddeLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tablee29a463e62d6854d475838a6e135a2f0bddeOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tablee29a463e62d6854d475838a6e135a2f0bddeOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tablee29a463e62d6854d475838a6e135a2f0bddeGridComplete.exec();
				    setTimeout(function(){var height = $("#tablee29a463e62d6854d475838a6e135a2f0bdde").closest('.ui-jqgrid-bdiv').height();
					$("#tablee29a463e62d6854d475838a6e135a2f0bddenorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tablee29a463e62d6854d475838a6e135a2f0bddenorecords img").css("width","120px");
                 }else{
					    $("#tablee29a463e62d6854d475838a6e135a2f0bddenorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tablee29a463e62d6854d475838a6e135a2f0bddeBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tablee29a463e62d6854d475838a6e135a2f0bddeOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tablee29a463e62d6854d475838a6e135a2f0bddenorecords").hide();
		   	    $("#Pagertablee29a463e62d6854d475838a6e135a2f0bdde_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tablee29a463e62d6854d475838a6e135a2f0bdde").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tablee29a463e62d6854d475838a6e135a2f0bdde").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tablee29a463e62d6854d475838a6e135a2f0bddenorecords").html() == null) {
						$("#tablee29a463e62d6854d475838a6e135a2f0bdde").parent().append("<div class='no_data' id='tablee29a463e62d6854d475838a6e135a2f0bddenorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tablee29a463e62d6854d475838a6e135a2f0bddenorecords").show();
					$("#Pagertablee29a463e62d6854d475838a6e135a2f0bdde_left").css("display", "none");
				}
tablee29a463e62d6854d475838a6e135a2f0bddeLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertablee29a463e62d6854d475838a6e135a2f0bdde"
    });
$("#t_tablee29a463e62d6854d475838a6e135a2f0bdde").append($("#tableToolbartablee29a463e62d6854d475838a6e135a2f0bdde"));function searchDatatablee29a463e62d6854d475838a6e135a2f0bdde(){
 var para = serializeObjectForEform($("#searchformtablee29a463e62d6854d475838a6e135a2f0bdde"));
	var searchdata = {
		keyWord: null,
		param:JSON.stringify(para)
	};
tablee29a463e62d6854d475838a6e135a2f0bddeKeyWordIn="";
tablee29a463e62d6854d475838a6e135a2f0bddeParamIn=JSON.stringify(para);
	$('#tablee29a463e62d6854d475838a6e135a2f0bdde').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$("#searchformtablee29a463e62d6854d475838a6e135a2f0bdde").on('keydown', function (e) {
		if (e.keyCode == '13') {
			return false;
		}
	});
$('#searchAlltablee29a463e62d6854d475838a6e135a2f0bdde').bind('click',function(){
var contentWidth = 650;
var top =  $(this).offset().top + $(this).outerHeight(true);
var left = $(this).offset().left + $(this).outerWidth() - contentWidth;
if (left < 0){contentWidth = contentWidth + left; left = 0}
var text = $(this).text();
var width = $(this).innerWidth();
layer.config({
	  extend: 'skin/layer-bootstrap.css'
});
layer.open({
	type: 1,
	shift: 5,
	title: false,
	scrollbar: false,
	move : false,
 area:[
contentWidth + 'px',
'200px'],
	offset: [top + 'px', left + 'px'],
	closeBtn: 0,
	shadeClose: true,
	btn: ['查询', '清空', '取消'],
	content: $('#searchDialogtablee29a463e62d6854d475838a6e135a2f0bdde'),
	success : function(layero, index) {
		var serachLabel = $('<div class="serachLabel"><span>'+ text +'</span><span class="caret"></span></div>').appendTo(layero);
		serachLabel.bind('click', function(){
			layer.close(index);
		});
		serachLabel.css('width', width + 'px');
	},
	yes: function(index, layero){
		searchDatatablee29a463e62d6854d475838a6e135a2f0bdde(); layer.close(index);
	},
	btn2: function(index, layero){
		clearFormData($("#searchformtablee29a463e62d6854d475838a6e135a2f0bdde")); searchDatatablee29a463e62d6854d475838a6e135a2f0bdde(); layer.close(index); return false;
	},
	btn3: function(index, layero){	
	layer.close(index);}
});
});
 $('.date-picker').datepicker({ 
	beforeShow: function () {
		setTimeout(function () {
			$('#ui-datepicker-div').css('z-index', 99999999);
		}, 100);
	}
});
 $('.time-picker').datetimepicker({
  	oneLine:true, 
  	closeText:'确定', 
  	showButtonPanel:true, 
  	showSecond:true,
  	beforeShow: function(selectedDate) {
  		if($('#'+selectedDate.id).val()==""){
  			$(this).datetimepicker("setDate", new Date());
  			$('#'+selectedDate.id).val('');
 		}
 		setTimeout(function () {
 			$('#ui-datepicker-div').css("z-index", 99999999);
 		}, 100);
  	}
 });

$('#tableToolbarButtonc23771e0f9e0a44c07a85a2d49caa237e9f7').bind('click',function() {                           
	layer.open({                         
	    type : 2,                        
	    area : ['400px', '300px'],       
	    title: '导出',                   
	    skin: 'bs-modal',                
	    maxmin: false,                   
	    btn: ['导出', '取消'],            
	    content: 'avicit/platform6/eform/bmpsformdatatool/exportFileType.jsp',       
	    yes:function(index, layero){                                                 
	        var iframeWin = layero.find('iframe')[0].contentWindow;                  
	        var fileType = iframeWin.$("input[name='exportType']:checked").val();  
	        var layout = iframeWin.$('#direction :selected').val();                  
	        var showColModels = new Array();                                         
	        var blockFields = new Array();                                           
	        var colModels =$('#tablee29a463e62d6854d475838a6e135a2f0bdde').jqGrid('getGridParam','colModel');   
	        for(var i = 0; i < colModels.length; i++){                               
	            if(colModels[i].hidden == false && colModels[i].name != 'cb'){       
	                showColModels.push(colModels[i]);                                
	            }else{                                                               
	                blockFields.push(colModels[i].name);                             
	            }                                                                    
	        }                                                                        
	        var dataGridFields = JSON.stringify(colModels);                          
	        expSearchParams = {};                                                    
	        expSearchParams.fileType = fileType;                                     
	        expSearchParams.dataGridFields = dataGridFields;                         
	        expSearchParams.keyWord = tablee29a463e62d6854d475838a6e135a2f0bddeKeyWordIn;                          
	        expSearchParams.param = tablee29a463e62d6854d475838a6e135a2f0bddeParamIn;                              
	        expSearchParams.hasRowNum = false;                                       
	        expSearchParams.sheetName = 'sheet1';                                    
	        expSearchParams.unContainFields = blockFields.toString();                
	        expSearchParams.fileName='先锋岗申请子表视图统计用';                             
	        expSearchParams.viewid='948e83e390a0fe270190a147e30d15a8';                                   
	        expSearchParams.pid=compRef2a4bd6c39ffe904bb18865f660a47e78d7f0;                                   
	        expSearchParams.tableid='tablee29a463e62d6854d475838a6e135a2f0bdde';                                 
	        expSearchParams.isbpm='N';                                     
	        expSearchParams.comparameter=JSON.stringify(filterParams);               
	        var showCols = JSON.stringify(showColModels);                            
	        expSearchParams.layout = layout;                                         
	        expSearchParams.showCols = showCols;                                     
	        var url = 'platform/eform/bpmsEformDataOptionsController/dataOperating/exportServerData/V1'; 
	        var ep = new exportData('export', 'export', expSearchParams, url);       
	        ep.excuteExport();                                                       
	        layer.close(index);                                                      
	    },                                               
	    cancel: function(index, layero){                 
	        layer.close(index);                          
	    }                                                
	});                                                  
}                                                        );
$("#table1ed0d20aa6fada47f8a8b6e1c5804862fac2").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390a0fe270190a147e30d15a8/table1ed0d20aa6fada47f8a8b6e1c5804862fac2/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        toolbar: [true,'top'], 
        colModel: tablecmtable1ed0d20aa6fada47f8a8b6e1c5804862fac2,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table1ed0d20aa6fada47f8a8b6e1c5804862fac2SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table1ed0d20aa6fada47f8a8b6e1c5804862fac2LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table1ed0d20aa6fada47f8a8b6e1c5804862fac2OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table1ed0d20aa6fada47f8a8b6e1c5804862fac2OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table1ed0d20aa6fada47f8a8b6e1c5804862fac2GridComplete.exec();
				    setTimeout(function(){var height = $("#table1ed0d20aa6fada47f8a8b6e1c5804862fac2").closest('.ui-jqgrid-bdiv').height();
					$("#table1ed0d20aa6fada47f8a8b6e1c5804862fac2norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table1ed0d20aa6fada47f8a8b6e1c5804862fac2norecords img").css("width","120px");
                 }else{
					    $("#table1ed0d20aa6fada47f8a8b6e1c5804862fac2norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table1ed0d20aa6fada47f8a8b6e1c5804862fac2BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table1ed0d20aa6fada47f8a8b6e1c5804862fac2OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table1ed0d20aa6fada47f8a8b6e1c5804862fac2norecords").hide();
		   	    $("#Pagertable1ed0d20aa6fada47f8a8b6e1c5804862fac2_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table1ed0d20aa6fada47f8a8b6e1c5804862fac2").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table1ed0d20aa6fada47f8a8b6e1c5804862fac2").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table1ed0d20aa6fada47f8a8b6e1c5804862fac2norecords").html() == null) {
						$("#table1ed0d20aa6fada47f8a8b6e1c5804862fac2").parent().append("<div class='no_data' id='table1ed0d20aa6fada47f8a8b6e1c5804862fac2norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table1ed0d20aa6fada47f8a8b6e1c5804862fac2norecords").show();
					$("#Pagertable1ed0d20aa6fada47f8a8b6e1c5804862fac2_left").css("display", "none");
				}
table1ed0d20aa6fada47f8a8b6e1c5804862fac2LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable1ed0d20aa6fada47f8a8b6e1c5804862fac2"
    });
$("#t_table1ed0d20aa6fada47f8a8b6e1c5804862fac2").append($("#tableToolbartable1ed0d20aa6fada47f8a8b6e1c5804862fac2"));$("#table22076c1858a895430889b63b5f580836086b").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e390a0fe270190a147e30d15a8/table22076c1858a895430889b63b5f580836086b/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable22076c1858a895430889b63b5f580836086b,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table22076c1858a895430889b63b5f580836086bSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table22076c1858a895430889b63b5f580836086bLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table22076c1858a895430889b63b5f580836086bOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table22076c1858a895430889b63b5f580836086bOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table22076c1858a895430889b63b5f580836086bGridComplete.exec();
				    setTimeout(function(){var height = $("#table22076c1858a895430889b63b5f580836086b").closest('.ui-jqgrid-bdiv').height();
					$("#table22076c1858a895430889b63b5f580836086bnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table22076c1858a895430889b63b5f580836086bnorecords img").css("width","120px");
                 }else{
					    $("#table22076c1858a895430889b63b5f580836086bnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table22076c1858a895430889b63b5f580836086bBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table22076c1858a895430889b63b5f580836086bOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table22076c1858a895430889b63b5f580836086bnorecords").hide();
		   	    $("#Pagertable22076c1858a895430889b63b5f580836086b_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table22076c1858a895430889b63b5f580836086b").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table22076c1858a895430889b63b5f580836086b").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table22076c1858a895430889b63b5f580836086bnorecords").html() == null) {
						$("#table22076c1858a895430889b63b5f580836086b").parent().append("<div class='no_data' id='table22076c1858a895430889b63b5f580836086bnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table22076c1858a895430889b63b5f580836086bnorecords").show();
					$("#Pagertable22076c1858a895430889b63b5f580836086b_left").css("display", "none");
				}
table22076c1858a895430889b63b5f580836086bLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable22076c1858a895430889b63b5f580836086b"
    });
table22076c1858a895430889b63b5f580836086bReload();
$("#t_table22076c1858a895430889b63b5f580836086b").append($("#tableToolbartable22076c1858a895430889b63b5f580836086b"));;});	 
