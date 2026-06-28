//文件下载
function downloadFile(url, fileName, fileType) {
    var encodeFileName = encodeURI(encodeURI(fileName));
    window.open(url + "?fileName=" + encodeFileName + "&fileType=" + fileType);
}
//文本复制
function textCopy(copyBtn) {
    if(navigator.userAgent.indexOf('MSIE 8') >= 0){
        $('.iconCopy').hide();
    }else {
        //1. 实例化clipboard
        var clipboard = new ClipboardJS('.' + copyBtn);
        //2. 复制成功的响应事件
        clipboard.on('success', function(e) {
            parent.layer.msg('复制成功', {
                time: 2000
            })
        });
    }
}
//初始化父页面高度
function initParentHeight() {
    var defaultAPI ;
    //点击一级菜单时默认显示
    if(parent.currentAPI == ''){
        if(parent.currentTab == 'sysManage'){
            defaultAPI = 'sysUserAPI';
        }else if(parent.currentTab == 'flowManage'){
            defaultAPI = 'businessService';
        }else if(parent.currentTab == 'interfaceManage'){
            defaultAPI = 'eventListener';
        }else {
            defaultAPI = 'sysUserAPI';
        }
    }
    var parentAPI = parent.currentAPI == '' ? defaultAPI : parent.currentAPI;
    //先隐藏所有标签
    $('.codeGenerator').hide();
    //再显示当前点击的二级菜单对应的内容
    $('#' + parentAPI).parent().show();
}
//初始化时间轴数据
function initTimerData(currentAPI) {
    //获取时间轴数据
    var timerDom = $('.ant-anchor');
    $.ajax({
        type: "GET",
        url: './data.json',
        dataType: "json",
        success: function(data) {
            $(timerDom).empty();
            var _currentAPI = (currentAPI == undefined || currentAPI == '') ? 'sysUserAPI' : currentAPI;
            var timerData = data[_currentAPI];
            currentTag = (currentTag == undefined || currentTag == '') ? 'sysManage' : currentTag;
            if(currentAPI != 'commonSelect'){
                var html = '<div class="ant-anchor-ink"><span class="ant-anchor-ink-ball visible" style="top: 12px;"></span></div>';
                if(currentAPI == 'eventListener' || currentAPI == 'eformEvent'){
                   for (var i = 0; i < timerData.length; i++) {
                        if (i == 0) {
                            html = html + '<div class="ant-anchor-link ant-anchor-link-active"><a' +
                                ' target="contentBody" href="' + currentTag + '.jsp#' + timerData[i].methodName + '" id="onlineApi'+ timerData[i].methodName + i + '" data-index="' + i + '" class="ant-anchor-link-title ant-anchor-link-title-active" title="' + timerData[i].methodChineseName +'">' + timerData[i].methodChineseName + '</a></div>';
                        } else {
                            html = html + '<div class="ant-anchor-link"><a target="contentBody" href="' + currentTag + '.jsp#' + timerData[i].methodName + '" id="onlineApi'+ timerData[i].methodName + i + '" data-index="' + i + '" class="ant-anchor-link-title" title="' + timerData[i].methodChineseName +'">' + timerData[i].methodChineseName + '</a></div>';
                        }
                    } 
                }else{
                    for (var i = 0; i < timerData.length; i++) {
                        if (i == 0) {
                            html = html + '<div class="ant-anchor-link ant-anchor-link-active"><a' +
                                ' target="contentBody" href="' + currentTag + '.jsp#' + timerData[i].methodName + '" id="onlineApi'+ timerData[i].methodName + i + '" data-index="' + i + '" class="ant-anchor-link-title ant-anchor-link-title-active" title="' + timerData[i].methodName +'">' + timerData[i].methodName + '</a></div>';
                        } else {
                            html = html + '<div class="ant-anchor-link"><a target="contentBody" href="' + currentTag + '.jsp#' + timerData[i].methodName + '" id="onlineApi'+ timerData[i].methodName + i + '" data-index="' + i + '" class="ant-anchor-link-title" title="' + timerData[i].methodName +'">' + timerData[i].methodName + '</a></div>';
                        }
                    }
                }
                $(timerDom).append(html);
                //绑定锚点
                $('a[id^=onlineApi]').on('click', function() {
                    $('.ant-anchor-link').removeClass('ant-anchor-link-active');
                    $('.ant-anchor-link-title').removeClass('ant-anchor-link-title-active');
                    $(this).addClass('ant-anchor-link-title-active');
                    $(this).parent('div').addClass('ant-anchor-link-active');
                    if ($(this).attr('data-index') == '0') {
                        $('.visible').css('top', 12)
                    } else {
                        $('.visible').css('top', ($(this).attr('data-index') * 32 + 12))
                    }
                })
            }
        }

    })

}