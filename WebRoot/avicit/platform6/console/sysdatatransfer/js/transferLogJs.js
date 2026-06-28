/**
 * 数据迁移日志
 */
function TransferLog(gridId,dataColModel){
    /*
    * 容器id
     */
    this.gridId = gridId;
    /*
    * 数据模型
     */
    this.dataColModel = dataColModel;
    //初始化
    this.init.call(this)
}
/*
初始化
 */
TransferLog.prototype.init = function (){
    var _self = this;

    $('#' + _self.gridId).jqGrid({
        url: 'platform/excelImportResult/allImportResultsjq.json',
        mtype: 'POST',
        datatype: "json",
        postData: {
            param: JSON.stringify({
                'filter-like-SYS_LOOKUP_NAME': $('#syslookUpName').val(),
            })
        },
        colModel: _self.dataColModel,
        height: document.documentElement.clientHeight - 125,
        scrollOffset: 20, //设置垂直滚动条宽度
        rowNum: 10,
        rowList: [200, 100, 50, 30, 20, 10],
        altRows: true,
        pagerpos: 'left',
        styleUI: 'Bootstrap',
        viewrecords: true, //
        multiselect: true,
        autowidth: true,
        hasColSet: false,
        hasTabExport: false,
        responsive: true,//开启自适应
        pager: "#transferLogPager"
    });

    //初始化日期控件
    $('#importDateBegain').datepicker({
        oneLine:true,//单行显示时分秒
        closeText:'确定',//关闭按钮文案
        showButtonPanel:true,//是否展示功能按钮面板
        showSecond:false,//是否可以选择秒，默认否
        // timeFormat: 'hh:mm:ss',
        // minDate: new Date(),
        beforeShow: function(selectedDate) {
            if($('#'+selectedDate.id).val()==""){
                $(this).datetimepicker("setDate", new Date());
                $('#'+selectedDate.id).val('');
            }
            setTimeout(function () {
                $('#ui-datepicker-div').css("z-index", 99999999);
            }, 100);
        }

    });
    //初始化日期控件
    $('#importDateEnd').datepicker({
        oneLine:true,//单行显示时分秒
        closeText:'确定',//关闭按钮文案
        showButtonPanel:true,//是否展示功能按钮面板
        showSecond:false,//是否可以选择秒，默认否
        // timeFormat: 'hh:mm:ss',
        // minDate: new Date(),
        beforeShow: function(selectedDate) {
            if($('#'+selectedDate.id).val()==""){
                $(this).datetimepicker("setDate", new Date());
                $('#'+selectedDate.id).val('');
            }
            setTimeout(function () {
                $('#ui-datepicker-div').css("z-index", 99999999);
            }, 100);
        }

    });
    //禁止时间和日期格式手输
    $('.date-picker').on('keydown',nullInput);
    $('.time-picker').on('keydown',nullInput);
    //回车查询
    $(_self._keyWordId).on('keydown',function(e){
        if(e.keyCode == '13'){
            _self.searchByKeyWord();
        }
    });
}
/*
查看结果
 */
TransferLog.prototype.showResult = function (){
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