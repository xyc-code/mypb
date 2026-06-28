/**
 * 自定义类
 */
function EformClassConfig() {
    this.init.call(this);
}

/**
 * 初始化操作
 */
EformClassConfig.prototype.init = function () {
};

EformClassConfig.prototype.toEformClassConfig = function () {
    layer.open({
        type: 2,
        title: '表单事件管理',
        closeBtn : 1,
        skin: 'bs-modal',
        area: ['100%', '100%'],
        maxmin: false,
        content: "platform/eform/bpmsManageController/toEformClassConfig"
    });
};