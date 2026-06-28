$(function() {
    // 单选LI例子
    $('#test1').avicselect({
        type: 1, // 默认1为页面层 2位iframe层
        ipt: $('#test1').find(">input:eq(0)"), // 回填框对象
        action: '.avicselect-act', // 按钮框对象
        height: 'auto', // 自定义高度
        listen: '.av-child', // 目标子选项
        content: $('#test1').find('.avicselect-list'), // 内容区
        multi: false //多选
    });

    // 多选LI例子
    $('#test2').avicselect({
        multi: true,
        height: "150px"
    });

    // checkbox、radio混合例子
    $('#test3').avicselect({
        listen: 'input[type="checkbox"],input[type="radio"]'
    });

    // iframe单选例子
    $('#test4').avicselect({
        type: 2,
        content: 'iframe.html'
    });

    // iframe多选例子
    $('#test5').avicselect({
        type: 2,
        content: 'iframe-multi.html'
    });

    // data List例子 - 此例子预设了对应input，默认使用hidden的input
    $('#test6').avicselect({
        type: 1,
        findDom:$('#demoDom'), // 指定 回填ipt的搜索区域，默认是注册对象本身 本demo默认是$('#test6')内寻找，先改为 $('#demoDom')内寻找
        dataBind:{'id':'pid'},// 按格式转换后回填所填项，默认全回填 object格式{'原始数据key1':'转换key1','原始数据key2':'转换key2'}, string格式 '原始数据key1,原始数据key2'
        // dataBind:'id',// 测试string格式
        data: [{ 'id': '1', 'name': '张三', 'age': '20', 'work': '工程师' }, { 'id': '2', 'name': '李四', 'age': '22', 'work': '老师' }, { 'id': '3', 'name': '王五', 'age': '23', 'work': '演员' }],
        tpl: '<ul>' +
            '<%for ( var index in this ) {%>' +
            '<li class="av-child" data-val=\'<% JSON.stringify(this[index])%>\'><% this[index].name%></li>' +
            '<%}%>' +
            '</ul>',
        success:function(data){
        	$('#demoDom').append('回调参数为='+JSON.stringify(data)+"<br/>");
        	$('#demoDom').append('隐藏输入框在这个dom里，参数为='+JSON.stringify(data.data));
        }
    });

    // data List例子 使用格式化的输出 单选
    $('#test7').avicselect({
        type: 1,
        format:'id,name,age,work',
        data: [{ 'id': '1', 'name': '张三', 'age': '20', 'work': '工程师' }, { 'id': '2', 'name': '李四', 'age': '22', 'work': '老师' }, { 'id': '3', 'name': '王五', 'age': '23', 'work': '演员' }],
        tpl: '<ul>' +
            '<%for ( var index in this ) {%>' +
            '<li class="av-child" data-val=\'<% JSON.stringify(this[index])%>\'><% this[index].name%></li>' +
            '<%}%>' +
            '</ul>'
    });

    // data List例子 使用格式化的输出 多选
    $('#test8').avicselect({
        type: 1,
        format:'id-name-age-work',
        multi:true,
        delimit:',',// 指定分隔符 默认,
        data: [{ 'id': '1', 'name': '张三', 'age': '20', 'work': '工程师' }, { 'id': '2', 'name': '李四', 'age': '22', 'work': '老师' }, { 'id': '3', 'name': '王五', 'age': '23', 'work': '演员' }],
        tpl: '<ul>' +
            '<%for ( var index in this ) {%>' +
            '<li class="av-child" data-val=\'<% JSON.stringify(this[index])%>\'><% this[index].name%></li>' +
            '<%}%>' +
            '</ul>'
    });

    // data List例子 隐藏传值框  多选
    $('#test9').avicselect({
        type: 1,
        multi:true,
        data: [{ 'id': '1', 'name': '张三', 'age': '20', 'work': '工程师' }, { 'id': '2', 'name': '李四', 'age': '22', 'work': '老师' }, { 'id': '3', 'name': '王五', 'age': '23', 'work': '演员' }],
        tpl: '<ul>' +
            '<%for ( var index in this ) {%>' +
            '<li class="av-child" data-val=\'<% JSON.stringify(this[index])%>\'><% this[index].name%></li>' +
            '<%}%>' +
            '</ul>'
    });
});