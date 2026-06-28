<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>

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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>