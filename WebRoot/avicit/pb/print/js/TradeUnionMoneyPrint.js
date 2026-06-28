function TradeUnionMoneyPrint() {
    window.open("platform/avicit/pb/print/TradeUnionMoneyPrint/view?id=" + pageParams.id + "&entryid=" + pageParams.entryId, "导出");
}
var html = '<li id="tradeunionmoneyprint" class="bpmhide _attribute" _function="TradeUnionMoneyPrint"  label-template="打印"> <a href="javascript:void(0)" title="打印"><em class="fa fa-floppy-o"></em><span>打印</span></a></li>'
$(document).ready(function () {
        console.log("准备延迟加载....")
        window.onload = function () {
            setTimeout(function () {
                var model = _flow_editor.flowModel;
                console.log(model.activitylabel);
                if (model.activitylabel === '经办人阅知') {
                    $("#top-tool .top-btns ul:eq(0)").append(html)
                    $("#tradeunionmoneyprint").on('click', TradeUnionMoneyPrint);
                }
            }, 2000)
        }
})


