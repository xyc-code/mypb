$(document).ready(function(){
	setTimeout(function(){
		var rowData = $('#tablea7176ddefcb4544ee5e837dc7992477fa5c3').jqGrid('getRowData');
		//合并列
		var rowSpanWorkTypeCount = 1;
		var rowSpanWorkTypeTempId = '';
		var rowSpanMainContentCount = 1;
		var rowSpanMainContentTempId = '';
		
		//查询季度信息
		var ids = "";
		for(var i = 0; i < rowData.length; i++){
			ids = ids + "'" + rowData[i].ID + "',";
			if((i+1) != rowData.length){
				//合并工作分类
				if(rowData[i].WORK_TYPE == rowData[i+1].WORK_TYPE){
					rowSpanWorkTypeCount++;
					$('#tablea7176ddefcb4544ee5e837dc7992477fa5c3').setCell(rowData[i+1].ID, 'WORK_TYPE', '', {display: 'none'});
					if(rowSpanWorkTypeTempId == ''){
						rowSpanWorkTypeTempId = rowData[i].ID;
					}
					var tempTd = $('#' + rowSpanWorkTypeTempId + ' td');
					tempTd[3].setAttribute('rowspan', rowSpanWorkTypeCount);
				}else{
					rowSpanWorkTypeCount = 1;
					rowSpanWorkTypeTempId = '';
				}
				//合并主要内容
				if(rowData[i].MAIN_CONTENT == rowData[i+1].MAIN_CONTENT){
					rowSpanMainContentCount++;
					$('#tablea7176ddefcb4544ee5e837dc7992477fa5c3').setCell(rowData[i+1].ID, 'MAIN_CONTENT', '', {display: 'none'});
					if(rowSpanMainContentTempId == ''){
						rowSpanMainContentTempId = rowData[i].ID;
					}
					var tempTd = $('#' + rowSpanMainContentTempId + ' td');
					tempTd[4].setAttribute('rowspan', rowSpanMainContentCount);
				}else{
					rowSpanMainContentCount = 1;
					rowSpanMainContentTempId = '';
				}
			}else{//最后一行暂不处理
				
			}
		}
		ids = ids.substring(0, ids.length-1);
		avicAjax.ajax({
			url : 'platform/avicit/jwutils/jwutilsController/getYearWorkStatus',
			data : {
				histId : ids
			},
			type : 'POST',
			sync : false,
			dataType : 'JSON',
			success : function(result) {
				if(result.list.length > 0){
					for(var i = 0; i < result.list.length; i++){
						$('#tablea7176ddefcb4544ee5e837dc7992477fa5c3').jqGrid('setRowData', result.list[i].ID, result.list[i]);
					}
				}				
			}
		});
	}, 1000);
});