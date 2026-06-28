<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>前端集成说明</title>
</head>
<body>
<p style="font-size:14px;">
        1.在需要导入的页面引入公共JS：
        <pre>
        包含公共jsp页面
        &lt;jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp"&gt;&lt;/jsp:include&gt;
        或者直接引入指定js
        &lt;script src="/avicit/platform6/console/excel/common/js/SysExcel.js" type="text/javascript"&gt;&lt;/script&gt;
        </pre>
        2.调用对应JS方法：
        <pre>
        this.sysExcelImport(options);
        json对象参数，options：
                {
                        "templateCode":templateCode,
                        "callBackFunc": function(){}
                }
                templateCode：Excel配置编码，必填
                callBackFunc: 回调函数，一般用于导入完成后刷新列表数据，非必填
        </pre>
</p>
</body>
</html>