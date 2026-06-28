//常用菜单栏菜单点击事件
function openPersonalItem(obj) {
    var title = $(obj).attr("title");
    var url = $(obj).attr("rel");
    var _id_ = $(obj).attr("id");
    var openType = $(obj).attr("name");//打开方式
    if(openType == '_blank'){
        openBlank(title,url);
    } else if(openType == '_top'){
        openTop(title,url);
    } else if(openType == '_self'){
        openSelf(title,url);
    } else {// default mainframe
        _id_ = _id_.split("-")[1];
        openMainFrame(title,url,_id_);
    }
}

/**
 * 自定义
 */
function mycustomize(obj) {
    var count = obj;
    top.layer.open({
        title: '添加常用',
        skin: 'index-model',
        area: ['720px', '500px'],
        content: 'portal/getAvailableRootMenu?selectMenuCount=' + count,
        type : 2,
//        btn: ['关闭'],
        yes: function(index, layero) {
            //关闭方法
            top.layer.close(index);
            // 刷新页面
            quickStart_refresh();
        },
        end: function () {
            // 刷新页面
            quickStart_refresh();
        }
    });

}
/**
 * 清空个人菜单
 */
function trunkPersonalMenu() {
    try{
        event.stopPropagation();
    } catch(e){

    }
    layer.confirm('确认清空吗？',{
        title: '提示',
        icon : 3,
        area: ['400px', ''],
        btn: ['确定','取消'], //按钮
        closeBtn : 0
    }, function(){
        avicAjax.ajax({
            url: "portal/trunkMenu",
            type: 'post',
            dataType: 'json',
            quiet:true,
            success: function (r) {
                if(r.flag=='success'){
                    // $('#personalMenuUl').html('');//清空内容
                    selectedCount = 0;
                    $("#selectedMenu_a").text("已选 (0)")
                    getAllChildMenu('selectedMenu');
                    layer.msg("清空成功");
                } else{
                    layer.alert('清空失败！' + r.data, {
                            icon: 7,
                            area: ['400px', ''], //宽高
                            closeBtn: 0
                        }
                    );
                }
            }
        });
    }, function(){
    });
}
