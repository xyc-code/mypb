//清空计算机设备、办公自动化设备填写内容
function clearWrite(){
	$('#TY_SB_CODE').val('');
	$('#TY_SB_TYPE').val('');
	$('#TY_SB_NAME').val('');
	$('#TY_SB_BRAND').val('');
	$('#TY_SB_XINGH').val('');
	$('#TY_SB_CC_CODE').val('');
	$('#TY_SB_CC_DATE').val('');
	$('#TY_SB_NET_TYPE').val('');
	$('#TY_SB_YONGT').val('');
	$('#TY_SB_SECRET_LEVEL').val('');
	$('#TY_SB_ZE_USER').val('');
	$('#TY_SB_ZE_USERName').val('');
	$('#TY_SB_DEPT').val('');
	$('#TY_SB_CLASS').val('');
	$('#TY_SB_QY_DATE').val('');
	$('#TY_SB_IP').val('');
	$('#TY_SB_ADDRESS').val('');
	$('#TY_SB_ROOM').val('');
	$('#TY_SB_STATUS').val('');
	$('#PC_WINDOWS_VERSION').val('');
	$('#PC_INSTALL_DATE').val('');
	$('#PC_DISK_NUMBER').val('');
	$('#PC_MAC_ADDRESS').val('');
	$('#OFFICE_USER_CODE').val('');
	$('#OFFICE_MAC_ADDRESS').val('');
	$('#OFFICE_REGIS_NUMBER').val('');
	$('#OFFICE_COMPUTER_NUMBER').val('');
}
//流程按钮加载后事件
EformFlow.prototype.afterCreateButtons = function() {
	setTimeout(function(){
		var assetDetails = $('#ASSET_DETAILS').val();
		//先隐藏
		$('#tongYongTr1').hide();
		$('#tongYongTr2').hide();
		$('#tongYongTr3').hide();
		$('#tongYongTr4').hide();
		$('#tongYongTr5').hide();
		$('#tongYongTr6').hide();
		$('#tongYongTr7').hide();
		$('#computerTr1').hide();
		$('#computerTr2').hide();
		$('#officeTr1').hide();
		$('#officeTr2').hide();
		if(assetDetails == '计算机设备' || assetDetails == '办公自动化设备'){ 
			$('#tongYongTr1').show();
			$('#tongYongTr2').show();
			$('#tongYongTr3').show();
			$('#tongYongTr4').show();
			$('#tongYongTr5').show();
			$('#tongYongTr6').show();
			$('#tongYongTr7').show();
			if(assetDetails == '计算机设备'){
				$('#computerTr1').show();
				$('#computerTr2').show();
			}
			if(assetDetails == '办公自动化设备'){
				$('#officeTr1').show();
				$('#officeTr2').show();
			}
		}
	}, 1500);
};

