<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<!DOCTYPE html lang="en"
	class="app js no-touch no-android chrome no-firefox no-iemobile no-ie no-ie10 no-ie11 no-ios no-ios7 ipad">
<head>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<meta name="decorator" content="default"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>

<link rel="stylesheet" href="avicit/platform6/console/monitor/css/font-awesome.min.css"/>
<link rel="stylesheet" href="avicit/platform6/console/monitor/css/bootstrap.min.css"/>
<link rel="stylesheet" href="avicit/platform6/console/monitor/css/style.css"/>
<link rel="stylesheet" href="static/h5/skin/iconfont/iconfont.css"/>

<!--[if lt IE 9]>
<script type="text/javascript"  src="static/h5/bootstrap/html5shiv.js"></script>
<![endif]-->
<!--[if lt IE 9]>
<script type="text/javascript"  src="static/h5/bootstrap/respond.min.js"></script>
<![endif]-->

<script src="static/h5/echarts/dist/echarts.min.js" type="text/javascript"></script>
<script type="text/javascript" src="static/h5/jquery/jquery-1.9.1.js"></script>
<script type="text/javascript" src="avicit/platform6/console/monitor/js/raphael.min.js"></script>
<script type="text/javascript" src="avicit/platform6/console/monitor/js/systemInfo.js"></script>

</head>
<body class="" style="">
	<div class="wrapper wrapper-content">

				<div class="row animated fadeInRight">
					<div class="col-sm-12">
						<div class="panel panel-primary">
							<div class="panel-heading">
								<i class="icon icon-shishijiankong"></i> 实时监控
							</div>

							<div class="panel-body newsTable" id="mychart" style="height: 220px;" >
								<table style="width: 100%;">
									<tr>
										<td width="${100/(fn:length(monitor.diskInfoList)+2)}%"><h3>cpu使用率</h3><div class="choose"></div></td>
										<td width="${100/(fn:length(monitor.diskInfoList)+2)}%"><h3>内存使用率</h3><div class="choose"></div></td>
										<c:forEach var="diskInfo" items="${monitor.diskInfoList }" varStatus="id">
											<td width="${100/(fn:length(monitor.diskInfoList)+2)}%"><h3>${diskInfo.osFileName}</h3><div class="choose"></div></td>
										</c:forEach>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>

			<!--内存信息开始-->
			<div id="memoryData">
				<div class="row animated fadeInRight">
					<div style="padding-right: 10px;" class="col-xs-4">
						<div class="panel panel-info">
							<div class="panel-heading">
								<i class="icon icon-CPU"></i> CPU
							</div>
							<div class="panel-body">
								<div id="cpu" style="width:100%;">
									<table cellspacing="1" class="table" style="border-spacing:0;border-collapse:separate;">
										<thead>
										<tr>
											<th>属性</th>
											<th>值</th>
										</tr>
										</thead>
										<tbody>
										<tr class="odd">
											<td>核心个数</td>
											<td>${monitor.processorCount}</td>
										</tr>
										<tr class="even">
											<td>核心频率</td>
											<td>${monitor.vendorFreq}</td>
										</tr>
										<tr class="odd">
											<td>系统/用户</td>
											<td>${monitor.userSystem}</td>
										</tr>
										<tr class="even">
											<td>使用率</td>
											<td>${monitor.cpuLoad}</td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div style="padding: 0 10px;" class="col-xs-4">
						<div class="panel panel-danger">
							<div class="panel-heading">
								<i class="icon icon-neicunka"></i> 内存
							</div>
							<div class="panel-body">
								<div id="memory" style="width:100%;">
									<table cellspacing="1" class="table" style="border-spacing:0;border-collapse:separate;">
										<thead>
										<tr>
											<th>属性</th>
											<th>内存</th>
											<th>JVM</th>
										</tr>
										</thead>
										<tbody>
										<tr class="odd">
											<td>总内存</td>
											<td>${monitor.memoryTotal}</td>
											<td>${monitor.memoryJvmTotal}</td>
										</tr>
										<tr class="even">
											<td>已用内存</td>
											<td>${monitor.memoryUsed}</td>
											<td>${monitor.memoryJvmUsed}</td>
										</tr>
										<tr class="odd">
											<td>剩余内存</td>
											<td>${monitor.memoryAvailable}</td>
											<td>${monitor.memoryJvmAvailable}</td>
										</tr>
										<tr class="even">
											<td>使用率</td>
											<td>${monitor.memoryUsedRate}</td>
											<td>${monitor.memoryJvmUsedRate}</td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div style="padding-left: 10px;" class="col-xs-4">
						<div class="panel panel-danger">
							<div class="panel-heading">
								<i class="icon icon-duicunqu"></i> 堆/非堆
							</div>
							<div class="panel-body">
								<div id="heap" style="height: 200px;width:100%;">
									<table cellspacing="1" class="table" style="border-spacing:0;border-collapse:separate;">
										<thead>
										<tr>
											<th>属性</th>
											<th>堆</th>
											<th>非堆</th>
										</tr>
										</thead>
										<tbody>
										<tr class="odd">
											<td>初始大小</td>
											<td>${monitor.heapInit}</td>
											<td>${monitor.nonHeapInit}</td>
										</tr>
										<tr class="even">
											<td>最大内存</td>
											<td>${monitor.heapMax}</td>
											<td>${monitor.nonHeapMax}</td>
										</tr>
										<tr class="odd">
											<td>已用内存</td>
											<td>${monitor.heapUsed}</td>
											<td>${monitor.nonHeapUsed}</td>
										</tr>
										<tr class="even">
											<td>可用内存</td>
											<td>${monitor.heapAvailable}</td>
											<td>${monitor.nonHeapAvailable}</td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row animated fadeInRight">
					<div class="col-xs-12">
						<div class="panel panel-info">
							<div class="panel-heading">
								<i class="icon icon-drawer"></i> 磁盘状态
							</div>
							<div class="panel-body" style="padding: 0px">
								<div class="embed-responsive">
									<table cellspacing="1" class="table" style="border-spacing:0;border-collapse:separate;">
										<thead>
										<tr>
											<th>#</th>
											<th>盘符名称</th>
											<th>盘符路径</th>
											<th>文件系统</th>
											<th>总大小</th>
											<th>可用大小</th>
											<th>已用大小</th>
											<th>已用百分比</th>
										</tr>
										</thead>
										<tbody>
										<c:forEach var="diskInfo" items="${monitor.diskInfoList }" varStatus="id">
											<c:choose>
												<c:when test="${id.index % 2 == 0}">
													<tr class="odd">
												</c:when>
												<c:otherwise>
													<tr>
												</c:otherwise>
											</c:choose>
											<td>${id.index}</td>
											<td>${diskInfo.osFileName}</td>
											<td>${diskInfo.osFileMount}</td>
											<td>${diskInfo.osFileType}</td>
											<td>${diskInfo.osFileTotal}</td>
											<td>${diskInfo.osFileFree}</td>
											<td>${diskInfo.osFileUsed}</td>
											<c:choose>
												<c:when test="${diskInfo.osFileUsedRateThreshold+0 < diskInfo.osFileUsedRate+0}">
													<td style="color: #ff0000">${diskInfo.osFileUsedRate}%</td>
												</c:when>
												<c:otherwise>
													<td>${diskInfo.osFileUsedRate}%</td>
												</c:otherwise>
											</c:choose>
											</tr>
										</c:forEach>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--内存信息结束-->

			<!--硬件信息开始-->
			<div id = "hardwareData">
				<div class="row animated fadeInRight">
					<div class="col-xs-12">
						<div class="panel panel-info">
							<div class="panel-heading">
								<i class="icon icon-fuwuqi"></i> 服务器信息
							</div>
							<div class="panel-body" style="padding: 0px">
								<div class="embed-responsive">
									<table cellspacing="1" class="table" style="border-spacing:0;border-collapse:separate;">
										<tbody>
										<tr class="odd">
											<td width="15%">服务器名称</td>
											<td width="35%">${monitor.hostName}</td>
											<td width="15%">操作系统</td>
											<td>${monitor.osInfo}</td>
										</tr>
										<tr class="even">
											<td width="15%">服务器IP</td>
											<td width="35%" style="word-break:break-all;">${monitor.ipv4Addr}</td>
											<td width="15%">系统架构</td>
											<td>${monitor.osArch}</td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row animated fadeInRight">
					<div class="col-xs-12">
						<div class="panel panel-info">
							<div class="panel-heading">
								<i class="icon icon-cup"></i> Java虚拟机信息
							</div>
							<div class="panel-body" style="padding: 0px">
								<div class="embed-responsive">
									<table cellspacing="1" class="table" style="border-spacing:0;border-collapse:separate;">
										<tbody>
										<tr class="odd">
											<td width="15%">Java名称</td>
											<td width="35%">${monitor.javaVmName}</td>
											<td width="15%">Java版本</td>
											<td>${monitor.javaVersion}</td>
										</tr>
										<tr class="even">
											<td>启动时间</td>
											<td>${monitor.startTime}</td>
											<td>运行时长</td>
											<td>${monitor.runPeriodTime}</td>
										</tr>
										<tr class="odd">
											<td>安装路径</td>
											<td colspan="3">${monitor.javaHome}</td>
										</tr>
										<tr class="even">
											<td>启动参数</td>
											<td colspan="3">${monitor.startParameter}</td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row animated fadeInRight">
					<div class="col-xs-12">
						<div class="panel panel-info">
							<div class="panel-heading">
								<i class="icon icon-pingtaicanshu"></i> 平台参数
							</div>
							<div class="panel-body" style="padding: 0px">
								<div class="embed-responsive">
									<table cellspacing="1" class="table" style="border-spacing:0;border-collapse:separate;">
										<tbody>
										<tr class="odd">
											<td>当前工作路径</td>
											<td>${monitor.userDir}</td>
										</tr>
										<%--<tr class="even">
											<td>日志存放路径</td>
											<td>${monitor.logPath}</td>
										</tr>--%>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--硬件信息结束-->
	</div>
</body>
</html>
