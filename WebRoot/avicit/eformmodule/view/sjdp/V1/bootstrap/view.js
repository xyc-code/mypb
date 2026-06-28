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

function redraw948e83e38b276182018b3b81be5c7970(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38b276182018b3b81be5c7970").width();
		var win_height = $("#948e83e38b276182018b3b81be5c7970").height();
		$('#948e83e38b276182018b3b81be5c7970').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38b276182018b3b81be5c7970').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38b276182018b3b81be5c7970").width();
	setTimeout(function(){redraw948e83e38b276182018b3b81be5c7970(win_width);},500);
});
var tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccKeyWordIn = "";    
var tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccParamIn = "";    
var tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccSelectRow = {     
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
var tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccLoadComplete = {     
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
var tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccBeforeEditCell = {        
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
var tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccOndblClickRow = {     
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
var tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccOnRightClickRow = {     
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
var tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccGridComplete = {     
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
var tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccOnCellSelect = {     
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
var tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccLoadBeforeSend = {        
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
function tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccReload(pid){
	var _isInvalid = true;
	$("#tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccPid = pid;
		}
		return false;
	}
	window.tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccPid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccPid == 'undefined' || window.tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccPid!=null){
tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccReload(window.tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccPid);
}
}
var tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc = [];
var uniqueColtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc = [];
var uniqueColTitletableaa9ba92d1d71d5432cf8d1560329bf0bc6cc = [];
var defaultValuetableaa9ba92d1d71d5432cf8d1560329bf0bc6cc = {};
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '干部人才总人数',hidden:false, name: 'DATA_5',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '干部在岗总数',hidden:false, name: 'DATA_6',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '在岗员工总数',hidden:false, name: 'DATA_7',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '技术人员总数',hidden:false, name: 'DATA_8',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '管理人员总数',hidden:false, name: 'DATA_9',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '技能人员总数',hidden:false, name: 'DATA_10',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织选举到期换届',hidden:false, name: 'DATA_1',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织选举到期换届已完成',hidden:false, name: 'DATA_2',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织选举到期换届进行中',hidden:false, name: 'DATA_3',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织选举到期换届未到期',hidden:false, name: 'DATA_4',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织设置党委',hidden:false, name: 'DATA_11',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '重点监督项数已完成',hidden:false, name: 'DATA_28',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '重点监督项数进行中',hidden:false, name: 'DATA_29',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织设置党总支部',hidden:false, name: 'DATA_12',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织设置直属党支部',hidden:false, name: 'DATA_13',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织设置下属党支部',hidden:false, name: 'DATA_14',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党员队伍发展党员人数',hidden:false, name: 'DATA_15',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党员队伍新发展党员35岁以下',hidden:false, name: 'DATA_16',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党员队伍新发展女党员',hidden:false, name: 'DATA_17',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党员队伍新发展大专以上党历',hidden:false, name: 'DATA_18',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '公司巡视整改巡视整改措施数',hidden:false, name: 'DATA_19',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '巡视整改措施数已完成',hidden:false, name: 'DATA_20',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '巡视整改措施数进行中',hidden:false, name: 'DATA_21',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '巡视整改措施数超期未完',hidden:false, name: 'DATA_22',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '被巡察单位巡察整改整改措施数',hidden:false, name: 'DATA_23',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '被巡察单位巡察整改整改措施数已完成',hidden:false, name: 'DATA_24',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '被巡察单位巡察整改整改措施数进行中',hidden:false, name: 'DATA_25',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '被巡察单位巡察整改整改措施数超期未完',hidden:false, name: 'DATA_26',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '重点监督工作重点监督项数',hidden:false, name: 'DATA_27',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '重点监督项数超期未完',hidden:false, name: 'DATA_30',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '廉洁文化建设工作廉洁文化建设项数量',hidden:false, name: 'DATA_31',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '廉洁文化建设工作廉洁文化建设项数量已完成',hidden:false, name: 'DATA_32',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '廉洁文化建设工作廉洁文化建设项数量进行中',hidden:false, name: 'DATA_33',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '廉洁文化建设工作廉洁文化建设项数量超期未完',hidden:false, name: 'DATA_34',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '劳模创新工作室国家级',hidden:false, name: 'DATA_35',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '劳模创新工作室省部级',hidden:false, name: 'DATA_36',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '劳模创新工作室地市级',hidden:false, name: 'DATA_37',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '劳模创新工作室工作室人数',hidden:false, name: 'DATA_38',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '劳模信息国家级',hidden:false, name: 'DATA_39',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '劳模信息省部级',hidden:false, name: 'DATA_40',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '劳模信息地市级',hidden:false, name: 'DATA_41',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '劳模信息公司级',hidden:false, name: 'DATA_42',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '会员队伍建设会员人数',hidden:false, name: 'DATA_43',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '会员队伍建设男性人数',hidden:false, name: 'DATA_44',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '会员队伍建设女性人数',hidden:false, name: 'DATA_45',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '会员队伍建设大专以上学历',hidden:false, name: 'DATA_46',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '工会组织设置工会分会',hidden:false, name: 'DATA_47',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '工会组织设置工会支会',hidden:false, name: 'DATA_48',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '工会组织设置工会小组',hidden:false, name: 'DATA_49',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '习近平指示批示计划',hidden:false, name: 'DATA_50',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '习近平指示批示已完成',hidden:false, name: 'DATA_51',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '习近平指示批示进行中',hidden:false, name: 'DATA_52',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党的二十大精神计划',hidden:false, name: 'DATA_53',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党的二十大精神进行中',hidden:false, name: 'DATA_54',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党的二十大精神已完成',hidden:false, name: 'DATA_55',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '年度质量视频数',hidden:false, name: 'DATA_56',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '年度先进人物视频数',hidden:false, name: 'DATA_57',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '年度视频数',hidden:false, name: 'DATA_58',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '年度党建视频数',hidden:false, name: 'DATA_59',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '中心组学习',hidden:false, name: 'DATA_60',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '新闻宣传发稿数',hidden:false, name: 'DATA_61',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '统战成员人数',hidden:false, name: 'DATA_62',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '文化载体数',hidden:false, name: 'DATA_63',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '青年创新大赛项目评选集团十强项目',hidden:false, name: 'DATA_78',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '青年创新大赛项目评选集团三十强项目',hidden:false, name: 'DATA_79',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '青年创新大赛项目评选集团百强项目',hidden:false, name: 'DATA_80',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '能手申报技术创新类',hidden:false, name: 'DATA_81',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '能手申报生产岗位类',hidden:false, name: 'DATA_82',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '能手申报管理服务类',hidden:false, name: 'DATA_83',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '能手评选技术创新类',hidden:false, name: 'DATA_84',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织选举到期换届',hidden:false, name: 'DATA_64',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织选举已完成',hidden:false, name: 'DATA_65',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织选举进行中',hidden:false, name: 'DATA_66',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织选举未到期',hidden:false, name: 'DATA_67',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织设置党委',hidden:false, name: 'DATA_68',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织设置党总支部',hidden:false, name: 'DATA_69',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党组织设置直属党支部',hidden:false, name: 'DATA_70',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党员队伍发展党员人数',hidden:false, name: 'DATA_71',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党员队伍发展新发展党员35岁以下',hidden:false, name: 'DATA_72',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党员队伍发展女党员',hidden:false, name: 'DATA_73',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '党员队伍发展大专以上学历',hidden:false, name: 'DATA_74',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '青年创新大赛项目申报设计成就类',hidden:false, name: 'DATA_75',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '青年创新大赛项目申报生产制造类',hidden:false, name: 'DATA_76',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '青年创新大赛项目申报管理类',hidden:false, name: 'DATA_77',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '能手评选生产岗位类',hidden:false, name: 'DATA_85',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '能手评选管理服务类',hidden:false, name: 'DATA_86',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '青年立功竞赛突击队创建',hidden:false, name: 'DATA_87',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '青年立功竞赛突击队参与青年',hidden:false, name: 'DATA_88',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '青年立功竞赛突击队评选',hidden:false, name: 'DATA_89',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '青年立功竞赛五小成果申报',hidden:false, name: 'DATA_90',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '青年立功竞赛五小成果参与青年',hidden:false, name: 'DATA_91',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '青年立功竞赛五小成果评选',hidden:false, name: 'DATA_92',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '团组织数量',hidden:false, name: 'DATA_93',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '团员青年数量',hidden:false, name: 'DATA_94',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '团员推优入党数量',hidden:false, name: 'DATA_95',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '最后更新时间', formatter:format, hidden:true, name: 'LAST_UPDATE_DATE',align:'center',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '最后更新人ID',hidden:true, name: 'LAST_UPDATED_BY',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '版本',hidden:true, name: 'VERSION',align:'center',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '创建时间', formatter:format, hidden:true, name: 'CREATION_DATE',align:'center',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '创建人ID',hidden:true, name: 'CREATED_BY',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '创建人IP',hidden:true, name: 'LAST_UPDATE_IP',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '组织ID',hidden:true, name: 'ORG_IDENTITY',align:'left',  width: '150px'});
tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc.push({label: '创建人部门',hidden:true, name: 'CREATED_DEPT',align:'left',  width: '150px'});
;$(document).ready(function(){ 

$("#tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/948e83e38b276182018b3b81be5c7970/tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtableaa9ba92d1d71d5432cf8d1560329bf0bc6cc,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccSelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccLoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccOndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccOnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccGridComplete.exec();
				    setTimeout(function(){var height = $("#tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc").closest('.ui-jqgrid-bdiv').height();
					$("#tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccnorecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccnorecords img").css("width","120px");
                 }else{
					    $("#tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccnorecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccBeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccOnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccnorecords").hide();
		   	    $("#Pagertableaa9ba92d1d71d5432cf8d1560329bf0bc6cc_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccnorecords").html() == null) {
						$("#tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc").parent().append("<div class='no_data' id='tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccnorecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccnorecords").show();
					$("#Pagertableaa9ba92d1d71d5432cf8d1560329bf0bc6cc_left").css("display", "none");
				}
tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccLoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: true,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertableaa9ba92d1d71d5432cf8d1560329bf0bc6cc"
    });
tableaa9ba92d1d71d5432cf8d1560329bf0bc6ccReload();
$("#t_tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc").append($("#tableToolbartableaa9ba92d1d71d5432cf8d1560329bf0bc6cc"));$("#tableToolbarButton0f61a791818b224b0bbab74feb8664d5e920").bind('click',function() {                                                                       
	if (pageParams.hasOwnProperty('isInsert') && pageParams.isInsert) {              
		layer.alert('请先保存表单！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		 });                                                                                         
	} else {                                                                                  
                                                                            
		layer.open({                                                                     
			type: 2,                                                                     
			area: ['100%', '100%'],                                                      
			title: '添加',                                                                
			skin: 'bs-modal',                                                            
			maxmin: false,                                                               
			content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38b276182018b3b8129a37899&grid=tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc',     
		    cancel: function (index, layero) {                                             
		    	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		    	iframeWin.closeDialog();                     
		 		return false;                     
		    }                                             
		});                                                                              
                                                                                 
	}                                                                                 
}                                                                                  
);
$("#tableToolbarButtoneb5a6180dc1ecb407c4adddfff31a2dc2aa4").bind('click',function() {                                                                                       
	var ids = $('#tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc').jqGrid('getGridParam', 'selarrrow');                            
	if (ids.length == 0) {                                                                          
		layer.alert('请选择数据！', {                                                               
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false;                                                                               
	} else if (ids.length > 1) {                                                                    
		layer.alert('请选择一条数据！', {                                                           
			icon: 7,                                                                                
			area: ['400px', ''],                                                                    
			closeBtn: 0                                                                             
		});                                                                                         
		return false; 																				
	}																								
                                                                                    
	var rowData = $('#tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc').jqGrid('getRowData', ids[0]);									
	layer.open({																					
        type: 2,																					
        area: ['100%', '100%'],																	
        title: '编辑',																				
        skin: 'bs-modal',																			
        maxmin: false,																				
        content: 'platform/eform/bpmsCRUDClient/toformJsp?formInfoId=948e83e38b276182018b3b8129a37899&id=' + rowData.ID+'&grid=tableaa9ba92d1d71d5432cf8d1560329bf0bc6cc',  
		 cancel: function (index, layero) {                                             
		 	var iframeWin = layero.find('iframe')[0].contentWindow;                     
		 	iframeWin.closeDialog();                     
		 	return false;                     
		 }                                             
    });																						    
                                                                                     
}                                                                                                  
);
;});	 
