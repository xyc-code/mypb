function TransferJs(){

}
/*
*导出
 */
TransferJs.prototype.showExport = function (){
    var _self = this;
    layerIndex = layer.confirm('确认要导出选中的数据吗?',
        {icon: 7, title: "提示", area: ['400px', '']},
        function (index) {
        //空校验
        if (selectedFlowArr.length ==0 && selectedFormArr.length ==0 &&
            selectedViewArr.length ==0 && selectedDbArr.length ==0 &&
            selectedFormDbArr.length ==0 && selectedViewDbArr.length ==0) {
            layer.msg("请选择要导出的数据！",{icon: 2});
            return false;
        }
        //导出
        avicAjax.ajax({
            url: "sysDataTransfer/sysDataTransferController/toTransferExport",
            data: {
                selectedFlowArr: JSON.stringify(selectedFlowArr),
                selectedFormArr: JSON.stringify(selectedFormArr),
                selectedViewArr: JSON.stringify(selectedViewArr),
                selectedFormDbArr: JSON.stringify(selectedFormDbArr),
                selectedViewDbArr: JSON.stringify(selectedViewDbArr),
                selectedDbArr: JSON.stringify(selectedDbArr)
            },
            type: 'post',
            dataType: 'json',
            success: function (res) {
                if(res.msg == 'success'){
                    //下载
                    var fileName = res.fileName;
                    window.location.href = path + "sysDataTransfer/sysDataTransferController/toTransferDownLoad/" + fileName;

                }else {
                    layer.msg("导出失败，请查看日志！", {icon: 1 ,title: "提示",area: ['400px', '']});
                }
            }
        });
        layer.close(layerIndex);
    });
}
/*
*导入
 */
TransferJs.prototype.showImport = function (){
    var _self = this;

    window.importLayer = layer.open({
        type: 2,
        area: ['450px', '200px'],
        title: '导入',
        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
        /*btn: ['导入', '取消'],*/
        content: 'avicit/platform6/console/sysdatatransfer/transferImport.jsp',
        /*yes : function(index, layero) {
            var iframeWin = layero.find('iframe')[0].contentWindow;
            iframeWin.fileUpLoad();
        }*/
        end: function () {
            // 刷新页面
            if (window.isImportFile) {
                quickStart_refresh();
            }
        }
    });
}

/*
查看结果
 */
TransferJs.prototype.showResult = function (){
    var _self = this;

    showIndex = layer.open({
        type: 2,
        area: ['100%', '100%'],
        title: '查看导入结果',
        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin: false, //开启最大化最小化按钮
        content: 'sysDataTransfer/sysDataTransferController/toTransferLog'
    });
}

/*
    判断是否初始化
 */
TransferJs.prototype.isInited = function (obj){
    var _self = this;
    //未初始化
    var f = 0;
    if(obj != null && obj != [] && obj != undefined){
        //已初始化
        f = 1;
    }
    return f;
}