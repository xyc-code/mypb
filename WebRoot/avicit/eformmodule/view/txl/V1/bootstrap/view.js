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

function redraw948e83e38ec23597018ec5f682d43225(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#948e83e38ec23597018ec5f682d43225").width();
		var win_height = $("#948e83e38ec23597018ec5f682d43225").height();
		$('#948e83e38ec23597018ec5f682d43225').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38ec23597018ec5f682d43225').layout('resize');
		$('#948e83e38ec23597018ec6116583345f').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38ec23597018ec6116583345f').layout('resize');
		$('#948e83e38ec23597018ec6116583345e').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#948e83e38ec23597018ec6116583345e').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#948e83e38ec23597018ec5f682d43225").width();
	setTimeout(function(){redraw948e83e38ec23597018ec5f682d43225(win_width);},500);
});
$(document).ready(function(){ 
window.eformtabdcaf145e7575b0429829e6dbdae80f89d4f7Shown = function(forceFlag){
    iframe14c907981c85684fe458fa24c7543ba953fdTabReload(forceFlag);
}
$('a[aria-controls="dcaf145e7575b0429829e6dbdae80f89d4f7"]').on('shown.bs.tab', function (e) {
	eformtabdcaf145e7575b0429829e6dbdae80f89d4f7Shown();
});
$('a[aria-controls="dcaf145e7575b0429829e6dbdae80f89d4f7"]').parents(".tab-pane").each(function(){
	var id = $(this).attr("id");
	$('a[aria-controls="'+id+'"]').on('shown.bs.tab', function (e) {
		$('a[aria-controls="dcaf145e7575b0429829e6dbdae80f89d4f7"]').trigger('shown.bs.tab');
	});
});
window.eformtab5e6829e2442fff478f6a506489cecec93afeShown = function(forceFlag){
    iframecff14127a75f7b4186e8326dd1f3e1956793TabReload(forceFlag);
}
$('a[aria-controls="5e6829e2442fff478f6a506489cecec93afe"]').on('shown.bs.tab', function (e) {
	eformtab5e6829e2442fff478f6a506489cecec93afeShown();
});
$('a[aria-controls="5e6829e2442fff478f6a506489cecec93afe"]').parents(".tab-pane").each(function(){
	var id = $(this).attr("id");
	$('a[aria-controls="'+id+'"]').on('shown.bs.tab', function (e) {
		$('a[aria-controls="5e6829e2442fff478f6a506489cecec93afe"]').trigger('shown.bs.tab');
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
function iframe14c907981c85684fe458fa24c7543ba953fdReload(pid,type,tablepara) {
	var _isInvalid = true;
	$("#iframeiframe14c907981c85684fe458fa24c7543ba953fd").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.iframe14c907981c85684fe458fa24c7543ba953fdPid = pid;
		}
		return false;
	}
	window.iframe14c907981c85684fe458fa24c7543ba953fdPid = null;
	if (pid != undefined && pid != null && pid != '' && pid != '-1') {
		var tableparaString = '';
		if (tablepara != null && tablepara != '') {
			var temps = tablepara.split(',');
			for (var i = 0; i < temps.length; i++) {
				if (type.hasOwnProperty('attributes')) {
					tableparaString += '&' + temps[i] + '=' + encodeURI(type.attributes[temps[i]]);
				} else {
					tableparaString += '&' + temps[i] + '=' + encodeURI(type[temps[i]]);
				}
			}
		}
		document.getElementById('iframeiframe14c907981c85684fe458fa24c7543ba953fd').src='avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationTelManage?id='+pid+tableparaString;
	} else {
		var url = document.getElementById('iframeiframe14c907981c85684fe458fa24c7543ba953fd').src;
     document.getElementById('iframeiframe14c907981c85684fe458fa24c7543ba953fd').src = ''; 
		if (url == _eform_base_url){
   setTimeout(function(){ 
document.getElementById('iframeiframe14c907981c85684fe458fa24c7543ba953fd').src='avicit/pb/organize/partyOrganization/partyOrganizationController/toPartyOrganizationTelManage';
    },300); 
		}else{
		document.getElementById('iframeiframe14c907981c85684fe458fa24c7543ba953fd').contentWindow.location.reload(true);
	}
	}
}
function iframe14c907981c85684fe458fa24c7543ba953fdTabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.iframe14c907981c85684fe458fa24c7543ba953fdPid == 'undefined' || window.iframe14c907981c85684fe458fa24c7543ba953fdPid!=null){
iframe14c907981c85684fe458fa24c7543ba953fdReload(window.iframe14c907981c85684fe458fa24c7543ba953fdPid);
}
}
function iframecff14127a75f7b4186e8326dd1f3e1956793Reload(pid,type,tablepara) {
	var _isInvalid = true;
	$("#iframeiframecff14127a75f7b4186e8326dd1f3e1956793").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.iframecff14127a75f7b4186e8326dd1f3e1956793Pid = pid;
		}
		return false;
	}
	window.iframecff14127a75f7b4186e8326dd1f3e1956793Pid = null;
	if (pid != undefined && pid != null && pid != '' && pid != '-1') {
		var tableparaString = '';
		if (tablepara != null && tablepara != '') {
			var temps = tablepara.split(',');
			for (var i = 0; i < temps.length; i++) {
				if (type.hasOwnProperty('attributes')) {
					tableparaString += '&' + temps[i] + '=' + encodeURI(type.attributes[temps[i]]);
				} else {
					tableparaString += '&' + temps[i] + '=' + encodeURI(type[temps[i]]);
				}
			}
		}
		document.getElementById('iframeiframecff14127a75f7b4186e8326dd1f3e1956793').src='avicit/tu/tuorganization/TradeUnionOrganizationTelController/toLeagueOrganizationTelManage?id='+pid+tableparaString;
	} else {
		var url = document.getElementById('iframeiframecff14127a75f7b4186e8326dd1f3e1956793').src;
     document.getElementById('iframeiframecff14127a75f7b4186e8326dd1f3e1956793').src = ''; 
		if (url == _eform_base_url){
   setTimeout(function(){ 
document.getElementById('iframeiframecff14127a75f7b4186e8326dd1f3e1956793').src='avicit/tu/tuorganization/TradeUnionOrganizationTelController/toLeagueOrganizationTelManage';
    },300); 
		}else{
		document.getElementById('iframeiframecff14127a75f7b4186e8326dd1f3e1956793').contentWindow.location.reload(true);
	}
	}
}
function iframecff14127a75f7b4186e8326dd1f3e1956793TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.iframecff14127a75f7b4186e8326dd1f3e1956793Pid == 'undefined' || window.iframecff14127a75f7b4186e8326dd1f3e1956793Pid!=null){
iframecff14127a75f7b4186e8326dd1f3e1956793Reload(window.iframecff14127a75f7b4186e8326dd1f3e1956793Pid);
}
}
;$(document).ready(function(){ 

iframe14c907981c85684fe458fa24c7543ba953fdReload();
iframecff14127a75f7b4186e8326dd1f3e1956793Reload();
;});	 
