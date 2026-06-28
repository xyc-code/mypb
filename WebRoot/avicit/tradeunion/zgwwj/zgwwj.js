

if(typeof   EformFlow=="function"){

    /*重写 刷新表单元素权限成功后事件*/
    EformFlow.prototype.afterControlFormInput=function (){
        if (_flow_editor.bpmSave.isEnable()) {

            checked();
        }


        /*根据需求，流程审核完毕后打印按钮才能显示*/
        if($("#DATA_2").val()==1){
            $("#formBut").show();
            $("#948e83e38e845c93018e9c4d70b656bd").show();
        }



    }

}else{
    checked();
}

function checked(){
    /*
* 具体信息中的住院原因、住院时间、住院地点可保持现有模式（慰问种类选择后三种的此三项不可编辑）
* */
    var saluteType = $("input[name='SALUTE_TYPE']:checked").val();

    if(saluteType == '0'){//职工因病住院慰问

        $("#IN_HSP_REASON").removeAttr("disabled");
        $('#IN_HSP_REASON').attr('required','true');

        $("#IN_HSP_DATE").removeAttr("disabled");
        $('#IN_HSP_DATE').attr('required','true');

        $("#IN_HSP_PLACE").removeAttr("disabled");
        $('#IN_HSP_PLACE').attr('required','true');

    }else{
        $("#IN_HSP_REASON").attr("disabled","disabled");
        //$('#IN_HSP_REASON').removeAttr('required');

        $("#IN_HSP_DATE").attr("disabled","disabled");
        //$('#IN_HSP_DATE').removeAttr('required');

        $("#IN_HSP_PLACE").attr("disabled","disabled");
        //$('#IN_HSP_PLACE').removeAttr('required');
    }
}


/*职工慰问金对比，在流程设计器中组织民管室主管节点设置
* */
function wwjContrast(){

var userId=$("#DATA_1").val();
    layer.open({
        type: 2,
        area: ['80%', '80%'],
        title: '职工慰问金对比',
        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
        content: 'platform/eform/bpmsCRUDClient/toViewJsp/zgwwjdb?userId='+userId
    });


}
/*更新打印状态*/
    function updatePrintStatus(){

    $.ajax({
        cache : false,
        type : "post",
        url : "platform/avicit/tradeunion/zgwwj/zgwwjcontroller/operation/updatePrint",
        dataType : "json",
        data : {
            id : id,

        },
        async : false,
        error : function(request) {
        },
        success : function(data) {

            avicAjax.ajax({
                url: "bpm/monitor/doend",
                data: "executionId=" + _bpm_executionId,
                type: "post",
                dataType: "json",
                success: function (backData) {

                }
            });

        }
    });

}

