<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>

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
