/**
 * @function Excel导入导出
 * @author hp
 * @since 2021-4-29
 */
(function($) {
    $(function() {
        SysExcel.init();
    });
})(jQuery);
var SysExcel = function () {
    return {
        init: function() {
            /**
             * 通用Excel导入
             * @param  options：对象参数，{"templateCode":templateCode, --Excel配置编码，必填
             *                           "callBackFunc":function(){} --回调函数，一般用于导入完成后刷新列表数据，非必填
             *                          }
             */
            $.fn.sysExcelImport = function(options) {
                if(!options || !options.templateCode){
                    layer.alert('Excel配置编码templateCode不能为空！', {
                        icon : 7,
                        area : [ '400px', '' ],
                        closeBtn : 0,
                        btn : [ '关闭' ],
                        title : "提示"
                    });
                    return false;
                }
                var _options = {
                    "templateCode": "", //Excel配置编码
                    "callBackFunc": function(){} //回调函数
                };
                if(!options){
                    options = {};
                }
                $.extend(true, _options, options);
                layer.open({
                    type : 2,
                    area : [ '100%', '100%' ],
                    title : '导入',
                    skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
                    // maxmin : true, // 开启最大化最小化按钮
                    data : _options,
                    content : "platform6/msystem/excel/imp/sysExcelImpController/toExcelImportPage/"+_options.templateCode,
                    end:function(){
                        if(typeof(_options.callBackFunc) == 'function'){
                            _options.callBackFunc();
                        }
                    }
                });
            };

            /**
             * 生成模板
             * @param templateCode Excel配置编码，必填
             */
            $.fn.sysExcelCreateTemplate = function(templateCode) {
                if(!templateCode){
                    layer.alert('配置编码【templateCode】不能为空！', {
                        icon : 7,
                        area : [ '400px', '' ],
                        closeBtn : 0,
                        btn : [ '关闭' ],
                        title : "提示"
                    });
                    return false;
                }
                var handle = sysShowLoading();
                $.ajax({
                    url: "platform6/msystem/excel/imp/sysExcelImpController/createTemplate/" + templateCode,
                    contentType: 'application/json',
                    type: 'post',
                    dataType: 'json',
                    success: function (r) {
                        sysHideLoading(handle);
                        if (r.flag == "success") {
                            $("#sysImpTemplatejqGrid").trigger("reloadGrid");
                            layer.msg('生成模板成功！', { icon: 6, time: 3000});
                        } else {
                            layer.alert(r.error, {
                                icon : 7,
                                area : [ '400px', '' ],
                                closeBtn : 0,
                                btn : [ '关闭' ],
                                title : "提示"
                            });
                        }
                    }
                });
            };

            /**
             * 下载模板
             * @param templateCode Excel配置编码，必填
             */
            $.fn.sysExcelDownloadTemplate = function(templateCode) {
                if(!templateCode){
                    layer.alert('配置编码【templateCode】不能为空！', {
                        icon : 7,
                        area : [ '400px', '' ],
                        closeBtn : 0,
                        btn : [ '关闭' ],
                        title : "提示"
                    });
                    return false;
                }
                var url = 'platform6/msystem/excel/imp/sysExcelImpController/download/template/'+templateCode;
                if($("#downloadIframe").length == 0){
                    $(document.body).append("<iframe id='downloadIframe' name='downloadIframe' style='width: 10px;height: 10px;display: none;'></iframe>");
                }
                $("#downloadIframe").attr("src", url);
            };
        }
};
}();

/**
 * 启用遮罩
 */
function sysShowLoading(){
    return top.layer.msg('正在生成模板……', {icon: 16,shade: [0.3, '#000000'],scrollbar: false, time:100000}) ;//弹出遮罩
}

/**
 * 隐藏遮罩
 */
function sysHideLoading(handle){
    top.layer.close(handle);
}


/**
 *  系统Excel操作类
 * @param templateCode
 * @constructor
 */
function SysExcelExport(templateCode,flag,exportUrl,selectIds,selectConditions) {
    this._templateCode = templateCode;
    this._flag = flag;
    this._exportUrl = exportUrl;
    this._selectIds = selectIds;
    this._selectConditions = selectConditions;
    this._selectCols = "";
    this.init.call(this);
};
// 初始化操作
SysExcelExport.prototype.init = function() {
    var _self = this;
    if(_self._flag){
        _self.getSelectCols();
    }else{
        _self.exportExcel();
    }
};

//获取导出列数据
SysExcelExport.prototype.getSelectCols = function() {
    var _self = this;
    this.excelIndex = layer.open({
        type : 2,
        area : [ '70%', '70%' ],
        title : '选择导出列',
        skin : 'bs-modal', // bootstrap 风格皮肤 需加载skin
        maxmin : false, // 开启最大化最小化按钮
        content : 'platform6/msystem/excel/template/sysExpExcelTempalteController/toSelectCols?templateCode='+_self._templateCode,
        btn: ['确定', '取消'],
        yes: function(index, layero){
            _self.selectCols =  JSON.stringify(window["layui-layer-iframe"+index].getSelectRows());
            _self.exportExcel();
            layer.close(index);
        },
        btn2: function(index, layero){
            layer.close(index);//查询框关闭
        }
    });
};
// 导出excel
SysExcelExport.prototype.exportExcel = function() {
    var _self = this;
    var excelForm = "<form id='exportExcelForm' name='exportExcelForm' method='post' action='"+_self._exportUrl+"' style='display:none' >" +
        "    <input type='hidden' name='templateCode' value='"+_self._templateCode+"'/>"+
        "    <input type='hidden' name='selectIds' value='"+_self._selectIds+"'/>" +
        "    <input type='hidden' name='selectConditions' value='"+_self._selectConditions+"'/>";
    if(_self._flag){
        excelForm += "<input type='hidden' name='selectCols' value='"+_self.selectCols+"'/>"
    }
    excelForm += "</form>";
    if (document.getElementById("exportExcelForm")) {
        document.body.removeChild(document.getElementById("exportExcelForm"));
    }
    $("body").append(excelForm);
    $("#exportExcelForm").submit();
};
