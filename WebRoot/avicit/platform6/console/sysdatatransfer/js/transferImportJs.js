/*构造函数*/
function TransferImport(id){
    this.id = id;
}

/*修改文件选择框默认样式*/
TransferImport.prototype.inputChange = function (){
    var _self = this;

    $("#" + _self.id).on("change",function(){
        var filePath=$(this).val();
        if(filePath != null && filePath != undefined && filePath != ''){
            $("#transferImport").html("");
            var arr=filePath.split('\\');
            var fileName=arr[arr.length-1];
            $("#transferImport").val(fileName);
        }else{
            $("#transferImport").html("");
            $("#transferImport").val("您未上传文件！");
            return false
        }
    })

}

/*上传文件*/
function fileUpLoad(){
    var _self = this;
    //获取该input的所有元素、属性
    var file = document.getElementById("transferImport");
    if(!(file.value)){
        layer.msg('请选择要上传的zip文件！',{time: 2000})
        return false;
    }
    //提交
    $('#transferImportForm').submit();
}

function getIEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if (isEdge) {
        return 'edge';//edge
    } else if (isIE11) {
        return 11; //IE11
    } else {
        return -1;//不是ie浏览器
    }
}