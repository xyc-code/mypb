<%@page import="avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess"%>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>



<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<%
String skinsValue =  (String)session.getAttribute(AfterLoginSessionProcess.SESSION_CURRENT_USER_SKIN_TYPE);
if(StringUtils.isEmpty(skinsValue)){
	 skinsValue = "blue";
}
%>
<html>
<head>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">



<title>demo3</title>
        <!-- 不支持ie8 -->
         <!-- <script type="text/javascript" src="static/h5/echarts5.3.1/dist/echarts.min.js"></script>  -->
         <!-- 支持ie8 -->
        <script type="text/javascript" src="static/h5/echarts/dist/echarts-4.1.2.js"></script> 
        <script type="text/javascript" src="static/h5/common-ext/avic.ajax.js?v=1"></script>
        <script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js?v=1"></script>
        <script type="text/javascript" src="static/h5/layer-v2.3/layer/layer.js?v=1"></script>
   
     
</head>


  <body>
	  <div>&nbsp;</div>
	  <!-- 
	  <div>
		  <select name="" onchange="javascript:window.open(this.options[this.selectedIndex].value)">
		  <option value="#">请选择</option>
		  <option value="avicit/tu/dyntumodelworkerf/ModelWorkerFTb.jsp">层级</option>
		   <option value="avicit/tu/dyntumodelworkerf/ModelWorkerFTb2.jsp">层级2</option>
		  </select>
	  </div> 
	  -->
	  	  <div style="padding-left:30px;">
		  <select  class="inputcss" name="" onchange="selectfun(this.options[this.selectedIndex].value);">
		  		<option class="input-option" value="#">请选择</option>
		  		<option class="input-option"  value="1">层级</option>
		   		<option class="input-option"  value="2">年龄</option>
		   	    <option class="input-option"  value="3">学历</option>		   	   
		   	    <option class="input-option"  value="4">职称</option>
		   	    <option class="input-option"  value="5">分类</option>
		   	    <option class="input-option"  value="6">性别</option>
		  </select>
	  </div>
	  
      <div class="content_inner" >
        <div id="container" style="width: 95%;height: 284px; padding-left:80px;"></div>
      </div>



<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
</head>
<script
		src=" avicit/phoneproject/programauthoritymanage/portalprogram/js/PortalProgram.js"
		type="text/javascript"></script>




        <script type="text/javascript">
 
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
var data1 = new Array();

var option;


function modelLevel(){
	myChart.showLoading();
	$.ajax({
			 url:"platform/avicit/tu/dynTuModelWorker/dynTuModelWorkerController/operation/getLevel",
			 type : 'post',
			 dataType : 'json',
				data: {
					key: {
						id: "id",
						name: "text",
						children: "children"
					},
					simpleData: {
						enable: true,
						idKey: "id",
						pIdKey: "parentId",
						rootPId: -1
					}
				},
			 success : function(r){
				 if (r.flag == "success"){
					 myChart.hideLoading();
					if(r.levelCount!=null){
						var data2=r.levelCount;
						var data3=r.countlever;
					    myChart.setOption(
					    		{
					    	        title: {
					    	            text: "荣誉总数",
					    	            top: "38%",
					    	            left: "33%",
					    	            textStyle: {
					    	              color: "#333",
					    	              fontSize: "18px",
					    	              fontWeight: "normal"
					    	            },
					    	            subtext: data3,
					    	            subtextStyle: {
					    	              color: "#52A0E9",
					    	              fontSize: "32px",
					    	              align: "center"
					    	            },
					    	            textAlign: "center"
					    	          },
	
					    	          tooltip: {
					    	            trigger: "item"
					    	          },
					    	          color: ["#52A0E9", "#46BF92", "#9D81DB", "#FCC233"],
					    	          legend: {
					    	            orient: "vertical",
					    	            right: "10%",
					    	            top: "30%",
					    	            itemWidth: 16,
					    	            itemHeight: 16,
					    	            textStyle: {
					    	              color: "#999",
					    	              fontSize: "14px"
					    	            }
					    	          },
	
					    	          series: [
					    	            {
					    	              name: "荣誉数量",
					    	              type: "pie",
					    	              center: ["34%", "50%"],
					    	              radius: ["46%", "90%"],
					    	              avoidLabelOverlap: false,
					    	              itemStyle: {
					    	                borderRadius: 4,
					    	                borderColor: "#fff",
					    	                borderWidth: 4
					    	              },
					    	              label: {
					    	                show: false,
					    	                position: "center"
					    	              },
					    	              emphasis: {
					    	                label: {
					    	                  show: false,
					    	                  fontSize: "40",
					    	                  fontWeight: "bold"
					    	                }
					    	              },
					    	              grid: {
					    	                left: "1%",
					    	                top: "3%"
					    	              },
					    	              labelLine: {
					    	                show: false
					    	              },
					    	              data: data2
					    	            }
					    	          ]
					    		    } 
		
					    );
	    
					   myChart.off('click');
					   myChart.on('click',function(param){
						   var name = param.name;
						   if(name=="国家级荣誉"){
							   this.insertIndex = layer.open({
								    type: 2,
								    area: ['100%', '100%'],
								    title: '详细表格',
								    skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
							        maxmin: true, //开启最大化最小化按钮
									content :"platform/eform/bpmsCRUDClient/toViewJsp/modelinfoflowview?name=1"
								});
							}
						   if(name=="省部级荣誉"){
						  	this.insertIndex = layer.open({
							    type: 2,
							    area: ['100%', '100%'],
							    title: '详细表格',
							    skin: 'bs-modal', 
						        maxmin: true, 
								content :"platform/eform/bpmsCRUDClient/toViewJsp/modelinfoflowview?name=2"
							});
						   }
						   if(name=="地市级荣誉"){
							   this.insertIndex = layer.open({
								    type: 2,
								    area: ['100%', '100%'],
								    title: '详细表格',
								    skin: 'bs-modal', 
							        maxmin: true, 
									content :"platform/eform/bpmsCRUDClient/toViewJsp/modelinfoflowview?name=3"
								});
						   }
						   if(name=="公司级荣誉"){
							   this.insertIndex = layer.open({
								    type: 2,
								    area: ['100%', '100%'],
								    title: '详细表格',
								    skin: 'bs-modal', 
							        maxmin: true, 
									content :"platform/eform/bpmsCRUDClient/toViewJsp/modelinfoflowview?name=4"
								});							  	
						   }
						   
					   });
					    
		
					    
					}
		 
				 }else{}
			 }
		 });

}

modelLevel();



function selectfun(value){
	if(value=="1"){
		modelLevel();
	}
	if(value=="2"){
		modelAge();
	}
	if(value=="3"){
		modelEducation();
	}
	if(value=="4"){
		modelPr();
	}
	if(value=="5"){
		modelType();
	}
	if(value=="6"){
		modelSex();
	}
	
};



function modelAge(){
	myChart.showLoading();
	$.ajax({
			 url:"platform/avicit/tu/dynTuModelWorker/dynTuModelWorkerController/operation/getAge",
			 type : 'post',
			 dataType : 'json',
				data: {
					key: {
						id: "id",
						name: "text",
						children: "children"
					},
					simpleData: {
						enable: true,
						idKey: "id",
						pIdKey: "parentId",
						rootPId: -1
					}
				},
			 success : function(r){
				 if (r.flag == "success"){
					 myChart.hideLoading();
					if(r.levelCount!=null){
						var data2=r.levelCount;
						var data3=r.countlever;
					    myChart.setOption(
					    		{
					    	        title: {
					    	            text: "人员总数",
					    	            top: "38%",
					    	            left: "33%",
					    	            textStyle: {
					    	              color: "#333",
					    	              fontSize: "18px",
					    	              fontWeight: "normal"
					    	            },
					    	            subtext: data3,
					    	            subtextStyle: {
					    	              color: "#52A0E9",
					    	              fontSize: "32px",
					    	              align: "center"
					    	            },
					    	            textAlign: "center"
					    	          },
	
					    	          tooltip: {
					    	            trigger: "item"
					    	          },
					    	          color: ["#52A0E9", "#46BF92", "#9D81DB", "#FCC233"],
					    	          legend: {
					    	            orient: "vertical",
					    	            right: "10%",
					    	            top: "30%",
					    	            itemWidth: 16,
					    	            itemHeight: 16,
					    	            textStyle: {
					    	              color: "#999",
					    	              fontSize: "14px"
					    	            }
					    	          },
	
					    	          series: [
					    	            {
					    	              name: "人员数量",
					    	              type: "pie",
					    	              center: ["34%", "50%"],
					    	              radius: ["46%", "90%"],
					    	              avoidLabelOverlap: false,
					    	              itemStyle: {
					    	                borderRadius: 4,
					    	                borderColor: "#fff",
					    	                borderWidth: 4
					    	              },
					    	              label: {
					    	                show: false,
					    	                position: "center"
					    	              },
					    	              emphasis: {
					    	                label: {
					    	                  show: false,
					    	                  fontSize: "40",
					    	                  fontWeight: "bold"
					    	                }
					    	              },
					    	              grid: {
					    	                left: "1%",
					    	                top: "3%"
					    	              },
					    	              labelLine: {
					    	                show: false
					    	              },
					    	              data: data2
					    	            }
					    	          ]
					    		    } 
		
					    );
	    
					   myChart.off('click');
					   myChart.on('click',function(param){
						   var name = param.name;
						   if(name=="小等于35"){
							   var date = new Date();
							   var year = date.getFullYear();
							   var pdate = year-35;
							   this.insertIndex = layer.open({
								    type: 2,
								    area: ['100%', '100%'],
								    title: '详细表格',
								    skin: 'bs-modal', 
							        maxmin: true, 
									content :" ?age="+pdate+"-01-01&ageend=9998-01-01"
								});	
							}
							  	
						   if(name=="35-50"){
							   var date = new Date();
							   var year = date.getFullYear();
							   var pdate1 = year-35;
							   var pdate2 = year-50;
							   this.insertIndex = layer.open({
								    type: 2,
								    area: ['100%', '100%'],
								    title: '详细表格',
								    skin: 'bs-modal', 
							        maxmin: true, 
									content :"platform/eform/bpmsCRUDClient/toViewJsp/modelmemberinfofind?age="+pdate2+"-01-01&ageend="+pdate1+"-01-01"
								});	
							}
						   if(name=="大于50"){
							   var date = new Date();
							   var year = date.getFullYear();
							   var pdate = year-50;
							   this.insertIndex = layer.open({
								    type: 2,
								    area: ['100%', '100%'],
								    title: '详细表格',
								    skin: 'bs-modal', 
							        maxmin: true, 
									content :"platform/eform/bpmsCRUDClient/toViewJsp/modelmemberinfofind?age=1000-01-01&ageend="+pdate+"-01-01"
								});	
							}
						   
					   });
					    
		
					    
					}
		 
				 }else{}
			 }
		 });

}




function modelEducation(){
	myChart.showLoading();
	$.ajax({
			 url:"platform/avicit/tu/dynTuModelWorker/dynTuModelWorkerController/operation/getEducation",
			 type : 'post',
			 dataType : 'json',
				data: {
					key: {
						id: "id",
						name: "text",
						children: "children"
					},
					simpleData: {
						enable: true,
						idKey: "id",
						pIdKey: "parentId",
						rootPId: -1
					}
				},
			 success : function(r){
				 if (r.flag == "success"){
					 myChart.hideLoading();
					if(r.levelCount!=null){
						var data2=r.levelCount;
						var data3=r.countlever;
					    myChart.setOption(
					    		{
					    	        title: {
					    	            text: "人员总数",
					    	            top: "38%",
					    	            left: "33%",
					    	            textStyle: {
					    	              color: "#333",
					    	              fontSize: "18px",
					    	              fontWeight: "normal"
					    	            },
					    	            subtext: data3,
					    	            subtextStyle: {
					    	              color: "#52A0E9",
					    	              fontSize: "32px",
					    	              align: "center"
					    	            },
					    	            textAlign: "center"
					    	          },
	
					    	          tooltip: {
					    	            trigger: "item"
					    	          },
					    	          color: ["#52A0E9", "#46BF92", "#9D81DB", "#FCC233"],
					    	          legend: {
					    	            orient: "vertical",
					    	            right: "10%",
					    	            top: "30%",
					    	            itemWidth: 16,
					    	            itemHeight: 16,
					    	            textStyle: {
					    	              color: "#999",
					    	              fontSize: "14px"
					    	            }
					    	          },
	
					    	          series: [
					    	            {
					    	              name: "人员数量",
					    	              type: "pie",
					    	              center: ["34%", "50%"],
					    	              radius: ["46%", "90%"],
					    	              avoidLabelOverlap: false,
					    	              itemStyle: {
					    	                borderRadius: 4,
					    	                borderColor: "#fff",
					    	                borderWidth: 4
					    	              },
					    	              label: {
					    	                show: false,
					    	                position: "center"
					    	              },
					    	              emphasis: {
					    	                label: {
					    	                  show: false,
					    	                  fontSize: "40",
					    	                  fontWeight: "bold"
					    	                }
					    	              },
					    	              grid: {
					    	                left: "1%",
					    	                top: "3%"
					    	              },
					    	              labelLine: {
					    	                show: false
					    	              },
					    	              data: data2
					    	            }
					    	          ]
					    		    } 
		
					    );
	    
					   myChart.off('click');
					   myChart.on('click',function(param){
						   var name = "";
							  	 /* window.open(encodeURI("http://portal.da.net/pb/avicit/tu/dyntumodelworkerf/ModelWorkerFTbEd.jsp?name="+name), "详细表格"); */
							  	 Platform6.fn.lookup.getLookupType("TRADE_UNION_EDUCATION",function(res){
									  for(var i=0;i<res.length;i++){
										 if(param.name==res[i].lookupName){
											 name=res[i].lookupCode;
											 this.insertIndex = layer.open({
												    type: 2,
												    area: ['100%', '100%'],
												    title: '详细表格',
												    skin: 'bs-modal', 
											        maxmin: true, 
													content :"platform/eform/bpmsCRUDClient/toViewJsp/modelmemberinfofind?UNION="+name
												});	
		 
										 }
										 }
								  })
						   
					   });
		    
					}
		 
				 }else{}
			 }
		 });

}




function modelPr(){
	myChart.showLoading();
	$.ajax({
			 url:"platform/avicit/tu/dynTuModelWorker/dynTuModelWorkerController/operation/getPr",
			 type : 'post',
			 dataType : 'json',
				data: {
					key: {
						id: "id",
						name: "text",
						children: "children"
					},
					simpleData: {
						enable: true,
						idKey: "id",
						pIdKey: "parentId",
						rootPId: -1
					}
				},
			 success : function(r){
				 if (r.flag == "success"){
					 myChart.hideLoading();
					if(r.levelCount!=null){
						var data2=r.levelCount;
						var data3=r.countlever;
					    myChart.setOption(
					    		{
					    	        title: {
					    	            text: "人员总数",
					    	            top: "38%",
					    	            left: "33%",
					    	            textStyle: {
					    	              color: "#333",
					    	              fontSize: "18px",
					    	              fontWeight: "normal"
					    	            },
					    	            subtext: data3,
					    	            subtextStyle: {
					    	              color: "#52A0E9",
					    	              fontSize: "32px",
					    	              align: "center"
					    	            },
					    	            textAlign: "center"
					    	          },
	
					    	          tooltip: {
					    	            trigger: "item"
					    	          },
					    	          color: ["#52A0E9", "#46BF92", "#9D81DB", "#FCC233"],
					    	          legend: {
					    	            orient: "vertical",
					    	            right: "10%",
					    	            top: "30%",
					    	            itemWidth: 16,
					    	            itemHeight: 16,
					    	            textStyle: {
					    	              color: "#999",
					    	              fontSize: "14px"
					    	            }
					    	          },
	
					    	          series: [
					    	            {
					    	              name: "人员数量",
					    	              type: "pie",
					    	              center: ["34%", "50%"],
					    	              radius: ["46%", "90%"],
					    	              avoidLabelOverlap: false,
					    	              itemStyle: {
					    	                borderRadius: 4,
					    	                borderColor: "#fff",
					    	                borderWidth: 4
					    	              },
					    	              label: {
					    	                show: false,
					    	                position: "center"
					    	              },
					    	              emphasis: {
					    	                label: {
					    	                  show: false,
					    	                  fontSize: "40",
					    	                  fontWeight: "bold"
					    	                }
					    	              },
					    	              grid: {
					    	                left: "1%",
					    	                top: "3%"
					    	              },
					    	              labelLine: {
					    	                show: false
					    	              },
					    	              data: data2
					    	            }
					    	          ]
					    		    } 
		
					    );
	    
					   myChart.off('click');
					   myChart.on('click',function(param){
						   var name = "";
						  	 /* window.open(encodeURI("http://portal.da.net/pb/avicit/tu/dyntumodelworkerf/ModelWorkerPr.jsp?name="+name), "详细表格"); */
						  	 Platform6.fn.lookup.getLookupType("PLATFORM_USER_TITLE",function(res){
								  for(var i=0;i<res.length;i++){
									 if(param.name==res[i].lookupName){
										 name=res[i].lookupCode;
										 this.insertIndex = layer.open({
											    type: 2,
											    area: ['100%', '100%'],
											    title: '详细表格',
											    skin: 'bs-modal', 
										        maxmin: true, 
												content :"platform/eform/bpmsCRUDClient/toViewJsp/modelmemberinfofind?rank="+name
											});
	 
									 }
									 }
							  })
						   
						   
					   });
					    
		
					    
					}
		 
				 }else{}
			 }
		 });

}









function modelType(){
	myChart.showLoading();
	$.ajax({
			 url:"platform/avicit/tu/dynTuModelWorker/dynTuModelWorkerController/operation/getType",
			 type : 'post',
			 dataType : 'json',
				data: {
					key: {
						id: "id",
						name: "text",
						children: "children"
					},
					simpleData: {
						enable: true,
						idKey: "id",
						pIdKey: "parentId",
						rootPId: -1
					}
				},
			 success : function(r){
				 if (r.flag == "success"){
					 myChart.hideLoading();
					if(r.levelCount!=null){
						var data2=r.levelCount;
						var data3=r.countlever;
					    myChart.setOption(
					    		{
					    	        title: {
					    	            text: "人员总数",
					    	            top: "38%",
					    	            left: "33%",
					    	            textStyle: {
					    	              color: "#333",
					    	              fontSize: "18px",
					    	              fontWeight: "normal"
					    	            },
					    	            subtext: data3,
					    	            subtextStyle: {
					    	              color: "#52A0E9",
					    	              fontSize: "32px",
					    	              align: "center"
					    	            },
					    	            textAlign: "center"
					    	          },
	
					    	          tooltip: {
					    	            trigger: "item"
					    	          },
					    	          color: ["#52A0E9", "#46BF92", "#9D81DB", "#FCC233"],
					    	          legend: {
					    	            orient: "vertical",
					    	            right: "10%",
					    	            top: "30%",
					    	            itemWidth: 16,
					    	            itemHeight: 16,
					    	            textStyle: {
					    	              color: "#999",
					    	              fontSize: "14px"
					    	            }
					    	          },
	
					    	          series: [
					    	            {
					    	              name: "人员数量",
					    	              type: "pie",
					    	              center: ["34%", "50%"],
					    	              radius: ["46%", "90%"],
					    	              avoidLabelOverlap: false,
					    	              itemStyle: {
					    	                borderRadius: 4,
					    	                borderColor: "#fff",
					    	                borderWidth: 4
					    	              },
					    	              label: {
					    	                show: false,
					    	                position: "center"
					    	              },
					    	              emphasis: {
					    	                label: {
					    	                  show: false,
					    	                  fontSize: "40",
					    	                  fontWeight: "bold"
					    	                }
					    	              },
					    	              grid: {
					    	                left: "1%",
					    	                top: "3%"
					    	              },
					    	              labelLine: {
					    	                show: false
					    	              },
					    	              data: data2
					    	            }
					    	          ]
					    		    } 
		
					    );
	    
					   myChart.off('click');
					   myChart.on('click',function(param){
						   var name = "";
						   Platform6.fn.lookup.getLookupType("PA_CATEGORY",function(res){
								  for(var i=0;i<res.length;i++){
									 if(param.name==res[i].lookupName){
										 name=res[i].lookupCode;
										 this.insertIndex = layer.open({
											    type: 2,
											    area: ['100%', '100%'],
											    title: '详细表格',
											    skin: 'bs-modal', 
										        maxmin: true, 
												content :"platform/eform/bpmsCRUDClient/toViewJsp/modelmemberinfofind?eclass="+name
											});
	 
									 }
									 }
							  })
						   
						  	 /* window.open(encodeURI("http://portal.da.net/pb/avicit/tu/dyntumodelworkerf/ModelWorkerType.jsp?name="+name), "详细表格"); */							
						   
					   });
					    
		
					    
					}
		 
				 }else{}
			 }
		 });

}







function modelSex(){
	myChart.showLoading();
	$.ajax({
			 url:"platform/avicit/tu/dynTuModelWorker/dynTuModelWorkerController/operation/getSex",
			 type : 'post',
			 dataType : 'json',
				data: {
					key: {
						id: "id",
						name: "text",
						children: "children"
					},
					simpleData: {
						enable: true,
						idKey: "id",
						pIdKey: "parentId",
						rootPId: -1
					}
				},
			 success : function(r){
				 if (r.flag == "success"){
					 myChart.hideLoading();
					if(r.levelCount!=null){
						var data2=r.levelCount;
						var data3=r.countlever;
					    myChart.setOption(
					    		{
					    	        title: {
					    	            text: "人员总数",
					    	            top: "38%",
					    	            left: "33%",
					    	            textStyle: {
					    	              color: "#333",
					    	              fontSize: "18px",
					    	              fontWeight: "normal"
					    	            },
					    	            subtext: data3,
					    	            subtextStyle: {
					    	              color: "#52A0E9",
					    	              fontSize: "32px",
					    	              align: "center"
					    	            },
					    	            textAlign: "center"
					    	          },
	
					    	          tooltip: {
					    	            trigger: "item"
					    	          },
					    	          color: ["#52A0E9", "#46BF92", "#9D81DB", "#FCC233"],
					    	          legend: {
					    	            orient: "vertical",
					    	            right: "10%",
					    	            top: "30%",
					    	            itemWidth: 16,
					    	            itemHeight: 16,
					    	            textStyle: {
					    	              color: "#999",
					    	              fontSize: "14px"
					    	            }
					    	          },
	
					    	          series: [
					    	            {
					    	              name: "人员数量",
					    	              type: "pie",
					    	              center: ["34%", "50%"],
					    	              radius: ["46%", "90%"],
					    	              avoidLabelOverlap: false,
					    	              itemStyle: {
					    	                borderRadius: 4,
					    	                borderColor: "#fff",
					    	                borderWidth: 4
					    	              },
					    	              label: {
					    	                show: false,
					    	                position: "center"
					    	              },
					    	              emphasis: {
					    	                label: {
					    	                  show: false,
					    	                  fontSize: "40",
					    	                  fontWeight: "bold"
					    	                }
					    	              },
					    	              grid: {
					    	                left: "1%",
					    	                top: "3%"
					    	              },
					    	              labelLine: {
					    	                show: false
					    	              },
					    	              data: data2
					    	            }
					    	          ]
					    		    } 
		
					    );
	    
					   myChart.off('click');
					   myChart.on('click',function(param){
						   var name = "";
						  Platform6.fn.lookup.getLookupType("PLATFORM_SEX",function(res){
							  for(var i=0;i<res.length;i++){
								 if(param.name==res[i].lookupName){
									 name=res[i].lookupCode;
									 this.insertIndex = layer.open({
										    type: 2,
										    area: ['100%', '100%'],
										    title: '详细表格',
										    skin: 'bs-modal', 
									        maxmin: true, 
											content :"platform/eform/bpmsCRUDClient/toViewJsp/modelmemberinfofind?sex="+name
										});
 
								 }
								 }
						  })
						   //http://portal.da.net/pb/avicit/tu/dyntumodelworkerf/ModelWorkerSex.jsp
						  	 
								
						   
					   });
					    
		
					    
					}
		 
				 }else{}
			 }
		 });

}
















/**layer.open({
type:2,
area:['100%','100%'],
title:'表格',
skin:'bs-modal',
maxmin:true,
content:'avicit/tu/dyntumodelworker/ModelInfoTb.jsp'
})**/

//data:[
// { value: 1, name: "国家级荣誉" },
// { value: 2, name: "省部级荣誉" },
// { value: 3, name: "地市级荣誉" },
// { value: 4, name: "公司级荣誉" }
//]

</script>
        
 
        
    </body>
    
    
    
    
    <style>
  	*{
  		box-sizing: border-box;
  	}
    .bt-tab {
      position: absolute;
      top: 13px;
      right:70px;
    }
    .tabs {
      display: inline-block;
      margin: 0 15px 0 0;
      cursor: pointer;
      color: #999999;
      font-size: 14px;
      font-family: "Arial Normal", "Arial";
      font-weight: 400;
      font-style: normal;
    }
    .tabsf {
      color: #1593f5;
      padding: 0 0 10px 0;
      border-bottom: 3px solid #1593f5;
    }
    
    
    
/* input 相关样式 */
.input-control{
	border:1px solid #e8e8e8;
	height: 32px;
}

.inputcss {
      color: #1593f5;
      padding: 5px 10px 5px 15px;
      border: 1px solid #1593f5;
    }   
.input-option{
      	height: 42px;
}
  </style>
</html>