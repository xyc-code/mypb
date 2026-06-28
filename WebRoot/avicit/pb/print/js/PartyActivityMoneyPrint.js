
function PartyActivityMoneyPrint(){
	window.open("platform/avicit/pb/print/PartyActivityMoneyPrint/view?id="+pageParams.id+"&entryid="+pageParams.entryId,"导出");
}
var html = '<li id="partyactivitymoneyprint" class="bpmhide _attribute" _function="PartyActivityMoneyPrint"  label-template="打印"> <a href="javascript:void(0)" title="打印"><em class="fa fa-floppy-o"></em><span>打印</span></a></li>' 
$(document).ready(function(){
	$("#top-tool .top-btns ul:eq(0)").append(html)
	$("#partyactivitymoneyprint").on('click',PartyActivityMoneyPrint);
})


