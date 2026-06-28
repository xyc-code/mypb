//更新自动编码
function updateAutoCode(id, code){
	$.ajax({
		url : 'platform/avicit/tu/fixedassets/dynFixedAssetsLedger/dynFixedAssetsLedgerController/operation/createAutoCode',
		data : {
			id : id,
			code : code
		},
		type : 'POST',
		dataType : 'JSON',
		async : false,
		success : function(result) {
			
		}
	});
}