$(function() {
	memoryData();
	echartData();
	hardwareData();

	window.onload=function(){
			(function(obj){
				obj.win={
					/**
					 * 环形进度条
					 * @param el：DOM对象
					 * @param val:数值
					 * @param bg:背景颜色
					 * @param color:环颜色
					 * @param textColor：数字颜色
					 * @param fontSize：数字字体大小
					 * @param size:环宽度
					 * @param r:环内半径
					 * @param time:动画时间
					 * @param easing:动画类型:
					 *  'linear'
					 *  '<' or 'easeIn' or 'ease-in'
					 *  '>' or 'easeOut' or 'ease-out'
					 *  '<>' or 'easeInOut' or 'ease-in-out'
					 *  'backIn'or 'back-in'
					 *  'backOut' or 'back-out'
					 *  'elastic'
					 *  'bounce'
					 */
					loopFun:function(el,val,bg,color,textColor,fontSize,size,r,time,easing){
						var si =r+size/2;
						var xy=r+size;
						if(val<0||val>100){
							//return alert('请输入0~100之间的数')
						}
						var paper = Raphael(el,(r+size)*2,(r+size)*2);
						paper.circle(xy,xy,r).attr({
							'stroke-width': size,
							stroke:bg
						});
						paper.customAttributes.arc=function(val){
							var v = 360*val/100,
								s = -180,
								e = s+v,
								x = xy,
								y = xy,
								rad = Math.PI/180,
								x1 = x+r*Math.sin(-s*rad),
								y1 = y+r*Math.cos(-s*rad),
								x2 = x+r*Math.sin(-e*rad),
								y2 = y+r*Math.cos(-e*rad),
								path=[
									['M',x1,y1],
									['A',r,r,0,+(e-s>180),1,x2,y2]
								];
							return {
								path:path
							};
						};
						var an = paper.path().attr({
							'stroke-width': size,
							stroke:color,
							arc: 0.01
						});
						an.animate({
							stroke:color,
							arc:val
						},time,easing);
						setTimeout(function(){
							if(val==100){
								paper.circle(xy,xy,r).attr({
									'stroke-width': size,
									stroke:color
								});
							}
						},time);
						paper.customAttributes.txt=function(val){
							return {
								text:Math.floor(val*100)/100+'%'
							}
						};
						var l = paper.text(xy,xy).attr({
							txt:0,
							'fill':textColor,
							'font-size':fontSize,
							'font-weight':700
						});
						l.animate({
							txt:val
						},time);
					},
					myLoopFun:function(el,val,color){
						win.loopFun(el,val,'#ccc',color,color,'16px',7,60,0,'easeIn');
					}
				};
			})(window);

			$("#mychart div").each(function (index) {
				win.myLoopFun($(this).get(0),0.1,'rgb(32, 165, 58)');
			});

			var refreshTime = 10000;
			$.ajax({
				type : "get",
				url : "platform/modules/system/monitor/refreshTime",
				async : false,
				dataType : 'json',
				success : function(json) {
					refreshTime = json;
				}
			});

			clearInterval(timeTicket);
			var timeTicket = setInterval(function() {
				memoryData();
				echartData();
			}, refreshTime);
	}

});

function memoryData() {
	$.ajax({
		type : "GET",
		url : "platform/modules/system/monitor/memoryData",
		success : function(data) {
			$("#memoryData").empty().append(data);
		}
	});
}
function hardwareData() {
	$.ajax({
		type : "GET",
		url : "platform/modules/system/monitor/hardwareData",
		success : function(data) {
			$("#hardwareData").empty().append(data);
		}
	});
}

function echartData() {
	$.ajax({
		type : "GET",
		url : "platform/modules/system/monitor/echartData",
		success : function(data) {
			$("#mychart .choose").each(function (index) {
				$(this).empty();
				if(index == 0) {
					if (data.cpuLoadThreshold < data.cpuLoad) {
						win.myLoopFun($(this).get(0),parseFloat(data.cpuLoad),'#ff9900');
					} else {
						win.myLoopFun($(this).get(0),parseFloat(data.cpuLoad),'rgb(32, 165, 58)');
					}
				} else if(index == 1) {
					if (data.memoryUsedRateThreshold < data.memoryUsedRate) {
						win.myLoopFun($(this).get(0),parseFloat(data.memoryUsedRate),'#ff9900');
					} else {
						win.myLoopFun($(this).get(0),parseFloat(data.memoryUsedRate),'rgb(32, 165, 58)');
					}
				} else {
					if (parseInt(data.diskInfoList[index-2].osFileUsedRateThreshold) < parseInt(data.diskInfoList[index-2].osFileUsedRate)) {
						win.myLoopFun($(this).get(0),parseFloat(data.diskInfoList[index-2].osFileUsedRate),'#ff9900');
					} else {
						win.myLoopFun($(this).get(0),parseFloat(data.diskInfoList[index-2].osFileUsedRate),'rgb(32, 165, 58)');
					}
				}
			});
		}
	});
};