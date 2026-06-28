/**
 * 流程设计器流转事件、前后置事件、路由条件、流程启动条件弹框选择
 * @param option
 * @constructor
 */
function EventSelect (option) {
    this.callback = option.callback
    this.type = option.type;
    this.template = "avicit/platform6/bpmreform/bpmdesigner/editors/js/template/EventSelect/EventSelect.jsp?type="+this.type;
    this.init();
}

EventSelect.prototype.init = function() {
    var _self = this;
    layer.config({
        extend: 'skin/layer-bootstrap.css' // boostraps风格modal外框
    });
    var box = layer.open({
        type:  2,
        area: [ "650px",  "450px"],
        title: "流程事件选择",
        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        shade:   0.3,
        maxmin: false, //开启最大化最小化按钮
        content: _self.template ,
        btn: ['确定', '关闭'],
        yes: function(index, layero){

            var iframeWin = layero.find('iframe')[0].contentWindow;
            var eventData = iframeWin.getSelectEvent();
            _self.callback(eventData);
            layer.close(index);
        },
        cancel: function(index){
            layer.close(index);
            $('html').addClass('fix-ie-font-face');
            setTimeout(function() {
                $('html').removeClass('fix-ie-font-face');
            }, 10);
        },
        success: function(layero, index){
        }
    });
}
