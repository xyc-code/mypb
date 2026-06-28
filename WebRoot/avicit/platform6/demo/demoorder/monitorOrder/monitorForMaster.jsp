<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%
	String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "demoorder/dyndemoproduct/dynDemoProductController/toDynDemoProductManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
	<style>
		.countSpan{
			color:red;
			font-size:48px;
			position: absolute;
			top:200px;
			left: 500px;
		}
	</style>
</head>
<body>
	<span id="countSpan" class="countSpan">0</span>
	<div  class="myContainer" style="overflow-y: auto;background-color: #FFFFFF;">
		<%--<div id="proc-echart1_0" title="" style="height:400px;text-align:center"></div>--%>
		<div id="proc-echart1_1" title="" style="height:400px;text-align:centerr"></div>
		<%--<div id="proc-echart1_2" title="" style="height:400px;text-align:centerr"></div>--%>
	</div>
</body>

<script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js"></script>
<script type="text/javascript" src="static/h5/echarts/dist/echarts-all.js" ></script>
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script src="avicit/platform6/demo/demoorder/dyndemoproduct/js/DynDemoProduct.js"
	type="text/javascript"></script>
<script type="text/javascript">

	//当前月有几天
    function mGetDate(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var d = new Date(year, month, 0);
        return d.getDate();
    };

    //按日度统计订单量
    /*avicAjax.ajax({
        url: "monitorOrder/SellNumControllerForMaster/QueryByDay",
        type: "post",
        /!*data:JSON.stringify({procIds:procArray,startTime:startMillis,endTime:endMillis}),*!/
        contentType : 'application/json',
        dataType: "json",
        success: function (data) {
            var listA = data.productDayList;

            var monthDay = mGetDate();//获取当前月的天数

            var dataX = new Array();
            var dataY = new Array(0);

            if(listA.length==0 ){
                dataX = ["暂无数据"]; dataY = ["暂无数据"];
            }

            for(var i=0; i<monthDay; i++){
                dataX.push(i+1);
                dataY.push(0);
            }

            for(var i=0; i<listA.length; i++){
                var temp = listA[i].productPrice;
                dataY[parseInt(temp)-1] =  listA[i].productNum;
            }

            /!*  for(var i=0; i<listA.length; i++){
                  var j=0;
                  for(j=0; j<dataX.length; j++){
                      if(procNames[i]==dataX[j] && procArray[i]==dataID[j]){ break; }
                  }  //  用于判断没有返回指定的值时，设为0
                  if(j==dataID.length) { dataID.push(procArray[i]); dataX.push(procNames[i]); dataY.push(0); }
              }*!/
            // 绘制统计分析图
            optionProc = {
                title : { text:'按日统计商品销量（当前月）' ,
                    x:'center',
                    y:'top',
                    textAlign:'center' },
                tooltip: { show: true , trigger: 'axis'},
                toolbox: {
                    show : true,
                    feature : {
                        myTool1:{//自定义按钮 danielinbiti,这里增加，selfbuttons可以随便取名字
                            show:true,//是否显示
                            readOnly: false,
                            title:'图标详情', //鼠标移动上去显示的文字
                            icon:'avicit/platform6/flowMonitoring/bpaDataAnalyze/css/question.png', //图标
                            onclick:function() {//点击事件,这里的option1是chart的option信息
                                layer.open({
                                    type: 2,
                                    skin: 'layui-layer-rim', //加上边框
                                    title : '按月度统计订单量',
                                    area: ['80%', '80%'], //宽高
                                    content: 'avicit/platform6/flowMonitoring/bpaDataAnalyze/rankingHtml/processTime.jsp'
                                })
                            }
                        },
                        mark : {show: false},
                        dataView : {show: false, readOnly: false},
                        /!*magicType : {show: true, type: ['line', 'bar']},*!/
                        restore : {show: true}//,
                        /!*saveAsImage : {show: true}*!/
                    },
                    padding:[5,80]
                },
                grid : {
                    top : 40,    //距离容器上边界40像素
                    bottom: 30,   //距离容器下边界30像素
                    borderWidth : 5,
                    borderColor : "#FFFFFF"
                },
                xAxis : {
                    axisLabel : {
                        interval:0,
                        rotate : 0,
                        textStyle:{ fontSize:12 }  // 让字体变大
                    },
                    // type : 'category',// 坐标轴类型，横轴默认为类目型'category'，纵轴默认为数值型'value'
                    data : dataX
                } ,
                yAxis : {
                    name:'销量:个',
                    min : 0,
                    type : 'value'
                },
                series : [
                    {
                        type : 'line',
                        symbolSize: 5,   // 设置标记大小
                        itemStyle: {     // 给不同柱子上不同颜色
                            normal: {
                                // 随机颜色显示（默认不应随机）
                                // color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
                                color: function(params) {
                                    var colorList = ['#C33531', '#B74AE5','#0AAF9F','#EE9201','#29AAE3','#4A235A','#C39BD3','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#E89589','#16A085','#EFE42A','#64BD3D','#4A235A','#3498DB'];
                                    return colorList[params.dataIndex];
                                },
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        color: '#615a5a'
                                    },
                                    formatter:function(params){
                                        if(params.value==0){
                                            return '0.0';
                                        }else
                                        {
                                            return params.value;
                                        }
                                    }
                                }
                            }
                        },
                        data : dataY
                    }
                ]
            };
            // 显示图形
            var myChart = echarts.init(document.getElementById("proc-echart1_0"));
            myChart.setOption(optionProc,true);
        }
    });*/

    var timeCount = 1;
    var timer = setTimeout(doTime,1000);
    function doTime() {
        $("#countSpan").html(timeCount);
        timeCount ++;
        timer = setTimeout(doTime,1000);
    }

	//按月度统计订单量
    avicAjax.ajax({
        url: "monitorOrder/SellNumControllerForMaster/QueryByMonth",
        type: "post",
        /*data:JSON.stringify({procIds:procArray,startTime:startMillis,endTime:endMillis}),*/
        contentType : 'application/json',
        dataType: "json",
        success: function (data) {
            clearTimeout(timer);
            $("#countSpan").hide();
            layer.msg("查询大概耗时"+timeCount+"秒");
            var listA = data.productMonthList;

            var dataX = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
            var dataY = ["0","0","0","0","0","0","0","0","0","0","0","0"];

            if(listA.length==0 ){
                dataX = ["暂无数据"]; dataY = ["暂无数据"];
            }

            for(var i=0; i<listA.length; i++){
                var temp = listA[i].productPrice;
                dataY[parseInt(temp)-1] =  listA[i].productNum;
            }

          /*  for(var i=0; i<listA.length; i++){
                var j=0;
                for(j=0; j<dataX.length; j++){
                    if(procNames[i]==dataX[j] && procArray[i]==dataID[j]){ break; }
                }  //  用于判断没有返回指定的值时，设为0
                if(j==dataID.length) { dataID.push(procArray[i]); dataX.push(procNames[i]); dataY.push(0); }
            }*/
            // 绘制统计分析图
            optionProc = {
                title : { text:'按月统计商品销量（当前年）' ,
                    x:'center',
                    y:'top',
                    textAlign:'center' },
                tooltip: { show: true , trigger: 'axis'},
                toolbox: {
                    show : true,
                    feature : {
                        myTool1:{//自定义按钮 danielinbiti,这里增加，selfbuttons可以随便取名字
                            show:true,//是否显示
                            readOnly: false,
                            title:'图标详情', //鼠标移动上去显示的文字
                            icon:'avicit/platform6/flowMonitoring/bpaDataAnalyze/css/question.png', //图标
                            onclick:function() {//点击事件,这里的option1是chart的option信息
                                layer.open({
                                    type: 2,
                                    skin: 'layui-layer-rim', //加上边框
                                    title : '按月度统计订单量',
                                    area: ['80%', '80%'], //宽高
                                    content: 'avicit/platform6/flowMonitoring/bpaDataAnalyze/rankingHtml/processTime.jsp'
                                })
                            }
                        },
                        mark : {show: false},
                        dataView : {show: false, readOnly: false},
                        /*magicType : {show: true, type: ['line', 'bar']},*/
                        restore : {show: true}//,
                        /*saveAsImage : {show: true}*/
                    },
                    padding:[5,80]
                },
                grid : {
                    top : 40,    //距离容器上边界40像素
                    bottom: 30,   //距离容器下边界30像素
                    borderWidth : 5,
                    borderColor : "#FFFFFF"
                },
                xAxis : {
                    axisLabel : {
                        interval:0,
                        rotate : 0,
                        textStyle:{ fontSize:12 }  // 让字体变大
                    },
                    // type : 'category',// 坐标轴类型，横轴默认为类目型'category'，纵轴默认为数值型'value'
                    data : dataX
                } ,
                yAxis : {
                    name:'销量:个',
                    min : 0,
                    type : 'value'
                },
                series : [
                    {
                        type : 'line',
                        symbolSize: 5,   // 设置标记大小
                        itemStyle: {     // 给不同柱子上不同颜色
                            normal: {
                                // 随机颜色显示（默认不应随机）
                                // color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
                                color: function(params) {
                                    var colorList = ['#C33531', '#B74AE5','#0AAF9F','#EE9201','#29AAE3','#4A235A','#C39BD3','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#E89589','#16A085','#EFE42A','#64BD3D','#4A235A','#3498DB'];
                                    return colorList[params.dataIndex];
                                },
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        color: '#615a5a'
                                    },
                                    formatter:function(params){
                                        if(params.value==0){
                                            return '0.0';
                                        }else
                                        {
                                            return params.value;
                                        }
                                    }
                                }
                            }
                        },
                        data : dataY
                    }
                ]
            };
            // 显示图形
            var myChart = echarts.init(document.getElementById("proc-echart1_1"));
            myChart.setOption(optionProc,true);
        }
    });


    //按日统计订单量
    /*avicAjax.ajax({
        url: "monitorOrder/SellNumControllerForMaster/QueryByNum",
        type: "post",
        /!*data:JSON.stringify({procIds:procArray,startTime:startMillis,endTime:endMillis}),*!/
        contentType : 'application/json',
        dataType: "json",
        success: function (data) {
            var listB = data.productSellList;

            var dataX = new Array();
            var dataY = new Array();

            if(listB.length==0 ){
                dataX = ["暂无数据"]; dataY = ["暂无数据"];
            }

            for(var i=0; i<listB.length; i++){
                dataX.push(listB[i].productName);
                dataY.push(listB[i].productPrice);
            }

            /!*  for(var i=0; i<listA.length; i++){
                  var j=0;
                  for(j=0; j<dataX.length; j++){
                      if(procNames[i]==dataX[j] && procArray[i]==dataID[j]){ break; }
                  }  //  用于判断没有返回指定的值时，设为0
                  if(j==dataID.length) { dataID.push(procArray[i]); dataX.push(procNames[i]); dataY.push(0); }
              }*!/
            // 绘制统计分析图
            optionProc = {
                title : { text:'今年商品销量排名' ,
                    x:'center',
                    y:'top',
                    textAlign:'center' },
                tooltip: { show: true , trigger: 'axis'},
                toolbox: {
                    show : true,
                    feature : {
                        myTool1:{//自定义按钮 danielinbiti,这里增加，selfbuttons可以随便取名字
                            show:true,//是否显示
                            readOnly: false,
                            title:'图标详情', //鼠标移动上去显示的文字
                            icon:'avicit/platform6/flowMonitoring/bpaDataAnalyze/css/question.png', //图标
                            onclick:function() {//点击事件,这里的option1是chart的option信息
                                layer.open({
                                    type: 2,
                                    skin: 'layui-layer-rim', //加上边框
                                    title : '按月度统计订单量',
                                    area: ['80%', '80%'], //宽高
                                    content: 'avicit/platform6/flowMonitoring/bpaDataAnalyze/rankingHtml/processTime.jsp'
                                })
                            }
                        },
                        mark : {show: false},
                        dataView : {show: false, readOnly: false},
                        /!*magicType : {show: true, type: ['line', 'bar']},*!/
                        restore : {show: true}//,
                        /!*saveAsImage : {show: true}*!/
                    },
                    padding:[5,80]
                },
                grid : {
                    top : 40,    //距离容器上边界40像素
                    bottom: 30,   //距离容器下边界30像素
                    borderWidth : 5,
                    borderColor : "#FFFFFF"
                },
                xAxis : {
                    axisLabel : {
                        interval:0,
                        rotate : 0,
                        textStyle:{ fontSize:12 }  // 让字体变大
                    },
                    // type : 'category',// 坐标轴类型，横轴默认为类目型'category'，纵轴默认为数值型'value'
                    data : dataX
                } ,
                yAxis : {
                    name:'销量:个',
                    min : 0,
                    type : 'value'
                },
                series : [
                    {
                        type : 'bar',
                        symbolSize: 5,   // 设置标记大小
                        barWidth : 30,//柱图宽度
                        itemStyle: {     // 给不同柱子上不同颜色
                            normal: {
                                // 随机颜色显示（默认不应随机）
                                // color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
                                color: function(params) {
                                    var colorList = ['#C33531', '#B74AE5','#0AAF9F','#EE9201','#29AAE3','#4A235A','#C39BD3','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#E89589','#16A085','#EFE42A','#64BD3D','#4A235A','#3498DB'];
                                    return colorList[params.dataIndex];
                                },
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        color: '#615a5a'
                                    },
                                    formatter:function(params){  // 在顶上显示数据
                                        if(params.value==0){
                                            return '0';
                                        }else
                                        {
                                            return params.value;
                                        }
                                    }
                                }
                            }
                        },
                        data : dataY
                    }
                ]
            };
            // 显示图形
            var myChart = echarts.init(document.getElementById("proc-echart1_2"));
            myChart.setOption(optionProc,true);
        }
    });*/

</script>
</html>