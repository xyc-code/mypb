var i = parseInt($(this).val()) + 6;
var str = "#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(" + i + ")";

if ($(this).is(':checked')) {
	console.log(document.getElementById('eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G'));
	$(str).show();
	switch (parseInt($(this).val())) {
		case 1: // 文体活动支出1
			$("#DYN_GUILD_XXZL_control").show();
			$('#DYN_GUILD_XXZL').jqGrid('resizeGrid');
			break;
		case 2: // 职工慰问支出2
			$("#DYN_ZGWW2_control").show();
			$('#DYN_ZGWW2').jqGrid('resizeGrid');
			break;
		case 3: // 劳模工作室建设支出3
			$("#DYN_GUILD_GB_control").show();
			$('#DYN_GUILD_GB').jqGrid('resizeGrid');
			break;
		case 4: // 劳动竞赛支出4
			$("#DYN_GUILD_SB_control").show();
			$('#DYN_GUILD_SB').jqGrid('resizeGrid');
			break;
		case 5: // 春、秋游活动支出5
			$("#DYN_GUILD_DHDQ_control").show();
			$('#DYN_GUILD_DHDQ').jqGrid('resizeGrid');
			break;
		case 6: // 观影活动支出6
			$("#DYN_GUILD_MPJJ_control").show();
			$('#DYN_GUILD_MPJJ').jqGrid('resizeGrid');
			break;
		case 7: // 职工小家建设支出7
			$("#DYN_GUILD_KNDY_control").show();
			$('#DYN_GUILD_KNDY').jqGrid('resizeGrid');
			break;
		case 8: // 其他支出8
			$("#DYN_GUILD_BZ_control").show();
			$('#DYN_GUILD_BZ').jqGrid('resizeGrid');
			break;
	}
} else {
	$(str).hide();
	switch (parseInt($(this).val())) {
		case 1: // 文体活动支出1
			$('#DYN_GUILD_XXZL').jqGrid('clearGridData');
			break;
		case 2: // 职工慰问支出2
			$('#DYN_ZGWW2').jqGrid('clearGridData');
			break;
		case 3: // 劳模工作室建设支出3
			$('#DYN_GUILD_GB').jqGrid('clearGridData');
			break;
		case 4: // 劳动竞赛支出4
			$('#DYN_GUILD_SB').jqGrid('clearGridData');
			break;
		case 5: // 春、秋游活动支出5
			$('#DYN_GUILD_DHDQ').jqGrid('clearGridData');
			break;
		case 6: // 观影活动支出6
			$('#DYN_GUILD_MPJJ').jqGrid('clearGridData');
			break;
		case 7: // 职工小家建设支出7
			$('#DYN_GUILD_KNDY').jqGrid('clearGridData');
			break;
		case 8: // 其他支出8
			$('#DYN_GUILD_BZ').jqGrid('clearGridData');
			break;
	}

}



























var i = parseInt($(this).val()) + 6;
var str = "#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(" + i + ")";

if ($(this).is(':checked')) {
	$(str).show();
	switch (parseInt($(this).val())) {
		case 1: // 文体活动支出1
			$("#DYN_GUILD_XXZL_control").show();
			$('#DYN_GUILD_XXZL').jqGrid('resizeGrid');
			break;
		case 2: // 职工慰问支出2
			$("#DYN_ZGWW2_control").show();
			$('#DYN_ZGWW2').jqGrid('resizeGrid');
			break;
		case 3: // 劳模工作室建设支出3
			$("#DYN_GUILD_GB_control").show();
			$('#DYN_GUILD_GB').jqGrid('resizeGrid');
			break;
		case 4: // 劳动竞赛支出4
			$("#DYN_GUILD_SB_control").show();
			$('#DYN_GUILD_SB').jqGrid('resizeGrid');
			break;
		case 5: // 春、秋游活动支出5
			$("#DYN_GUILD_DHDQ_control").show();
			$('#DYN_GUILD_DHDQ').jqGrid('resizeGrid');
			break;
		case 6: // 观影活动支出6
			$("#DYN_GUILD_MPJJ_control").show();
			$('#DYN_GUILD_MPJJ').jqGrid('resizeGrid');
			break;
		case 7: // 职工小家建设支出7
			$("#DYN_GUILD_KNDY_control").show();
			$('#DYN_GUILD_KNDY').jqGrid('resizeGrid');
			break;
		case 8: // 其他支出8
			$("#DYN_GUILD_BZ_control").show();
			$('#DYN_GUILD_BZ').jqGrid('resizeGrid');
			break;
	}
} else {
	switch (parseInt($(this).val())) {
		case 1: // 文体活动支出1
			delSubAllData('DYN_GUILD_XXZL');
			break;
		case 2: // 职工慰问支出2
			delSubAllData('DYN_ZGWW2');
			$('#DYN_ZGWW2').jqGrid('clearGridData');
			break;
		case 3: // 劳模工作室建设支出3
			delSubAllData('DYN_GUILD_GB');
			break;
		case 4: // 劳动竞赛支出4
			delSubAllData('DYN_GUILD_SB');
			break;
		case 5: // 春、秋游活动支出5
			delSubAllData('DYN_GUILD_DHDQ');
			break;
		case 6: // 观影活动支出6
			delSubAllData('DYN_GUILD_MPJJ');
			break;
		case 7: // 职工小家建设支出7
			delSubAllData('DYN_GUILD_KNDY');
			break;
		case 8: // 其他支出8
			delSubAllData('DYN_GUILD_BZ');
			break;
	}
}

function delSubAllData(tableName){
	var rows = $('#' + tableName).jqGrid('getRowData');
	$('#' + tableName).jqGrid('endEditCell');
	var _self = this;
	var ids = [];
	var l = rows.length;
	if(l > 0){
		for(;l--;){
			if (rows[l].ID.indexOf("new_row")!=-1){
				$('#' + tableName).jqGrid("delRowData", rows[l].ID);  
			}else{
				ids.push(rows[l].ID);
			}
		}
		if (ids.length>0){
			avicAjax.ajax({
				url: 'eform/bpmsCRUDClient/deleteByIds.json?subTableName=' + tableName,
				data: {ids : ids.join(','),formInfoId:'948e83e38e3c3079018e50b0b4877c03',version:pageParams.version,deleteclass:''},
				type : 'post',
				dataType : 'json',
				success : function(result){
					if (result.flag == 'success'){
						$('#' + tableName).jqGrid('setGridParam',{datatype:'json'}).trigger("reloadGrid");
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
		$(str).hide();
	}else{
		$(str).hide();
	}
}



var checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (var i = 0; i < checkboxes.length; i++) {
	/* (function (checkbox) {
	checkbox.addEventListener('change', function () {*/
	var selectedValues = [];
	var checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
	for (var j = 0; j < checkBoxes.length; j++) {
		selectedValues.push(checkBoxes[j].value);
	}
	var containsDesiredValue = selectedValues.indexOf('1') !== -1 || selectedValues.indexOf('4') !== -1 
		|| selectedValues.indexOf('5') !== -1 || selectedValues.indexOf('6') !== -1 || selectedValues.indexOf('8') !== -1;
	console.log('是否包含值：', containsDesiredValue);
	var spanElement = document.getElementById('eEnZwEHUTrJXVoHzCdnrBfvYfVz79T8G');
	
	if (containsDesiredValue) {
		spanElement.setAttribute('required', true);
		spanElement.setAttribute('aria-required', true);
	} else {
		spanElement.removeAttribute('required');
		spanElement.removeAttribute('aria-required');
	}
	/* });
	})(checkboxes[i]);*/
}


