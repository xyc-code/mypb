<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css"
          href="css/style.css" />
    <link rel="stylesheet" type="text/css"
          href="../../../../static/h5/layer-v2.3/layer/skin/layer.css">
    <script type="text/javascript"
            src="../../../../static/h5/jquery/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="./js/onlineapi.js"></script>
    <script type="text/javascript"
            src="js/clipboard.min.js"></script>

</head>

<body>
    <div class="codeGenerator">
        <div id="businessService" class="secondMenuStatus">
            <div class="contentTitle">
                <h2>BusinessService</h2>
                <div class="custom-block tip">
                    <p class="custom-block-title">说明</p>
                    <p>流程操作API常用方法</p>
                </div>
            </div>
            <div class="tableStructure">
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th width="20%">返回值</th>
                            <th width="40%">方法名称</th>
                            <th width="40%">方法描述</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Map&lt;String, Object&gt;</td>
                            <td>doGettracks</td>
                            <td>获取流程文字跟踪信息</td>
                        </tr>
                        <tr>
                            <td>void</td>
                            <td>dosubmitTransmit</td>
                            <td>完成传阅任务</td>
                        </tr>
                        <tr>
                            <td>void</td>
                            <td>finishreader</td>
                            <td>标识读者完成任务</td>
                        </tr>
                        <tr>
                            <td>String</td>
                            <td>getDefineIdByEntryId</td>
                            <td>通过流程实例获取流程定义id</td>
                        </tr>
                        <tr>
                            <td>List&lt;FormSecurity&gt;</td>
                            <td>getFormSecuritys</td>
                            <td>获取表单权限</td>
                        </tr>
                        <tr>
                            <td>Muti2Bean&lt;BpmContent, List&lt;ButtonVo&gt;&gt;</td>
                            <td>getOperateRights</td>
                            <td>获取流程按钮操作权限</td>
                        </tr>
                        <tr>
                            <td>List&lt;ProcessInfo&gt;</td>
                            <td>getProcessStartList</td>
                            <td>根据用户ID获取流程启动列表</td>
                        </tr>
                        <tr>
                            <td>StartResultBean</td>
                            <td>getStartResultBean</td>
                            <td>获取流程启动结果，如url和当前节点信息等</td>
                        </tr>
                        <tr>
                            <td>String</td>
                            <td>getSubprocess</td>
                            <td>获取子流程实例id</td>
                        </tr>
                        <tr>
                            <td>String</td>
                            <td>getTaskRemark</td>
                            <td>获取流程节点的描述信息</td>
                        </tr>
                        <tr>
                            <td>void</td>
                            <td>saveGettracks</td>
                            <td>保存流程跟踪信息</td>
                        </tr>
                        <tr>
                            <td>void</td>
                            <td>setVariables</td>
                            <td>更新流程变量</td>
                        </tr>
                        <tr>
                            <td>void</td>
                            <td>transmit</td>
                            <td>后台流程转发接口</td>
                        </tr>
                    </tbody>
                </table>
                <div class="singlyCode" id="doGettracks">
                    <h3>doGettracks</h3>
                    <ul>
                        <li>获取流程文字跟踪信息。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">entryId</td>
                                <td>流程实例Id</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">Map&lt;String, Object&gt;</td>
                                <td>流程文字跟踪信息</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="dosubmitTransmit">
                    <h3>dosubmitTransmit</h3>
                    <ul>
                        <li>完成传阅任务。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">entryId</td>
                                <td>流程实例Id</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">taskId</td>
                                <td>任务Id</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">userId</td>
                                <td>用户Id</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">deptId</td>
                                <td>部门ID</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">message</td>
                                <td>意见</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">void</td>
                                <td>--</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="finishreader">
                    <h3>finishreader</h3>
                    <ul>
                        <li>标识读者完成任务。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">taskId</td>
                                <td>任务Id</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">entryId</td>
                                <td>流程实例Id</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">doTask</td>
                                <td>类型</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">void</td>
                                <td>--</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="getDefineIdByEntryId">
                    <h3>getDefineIdByEntryId</h3>
                    <ul>
                        <li>通过流程实例获取流程定义id。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">entryId</td>
                                <td>流程实例Id</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">String</td>
                                <td>流程定义id</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="getFormSecuritys">
                    <h3>getFormSecuritys</h3>
                    <ul>
                        <li>获取表单权限。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">defineId</td>
                                <td>流程定义Id</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">activityname</td>
                                <td>流程节点名称</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">List&lt;FormSecurity&gt;</td>
                                <td>节点权限列表</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="getOperateRights">
                    <h3>getOperateRights</h3>
                    <ul>
                        <li>获取流程按钮操作权限。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">processInstanceId</td>
                                <td>流程实例ID</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">executionId</td>
                                <td>执行ID</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">taskId</td>
                                <td>任务ID</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">userId</td>
                                <td>用户ID</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">Muti2Bean&lt;BpmContent, List&lt;ButtonVo&gt;&gt;</td>
                                <td>按钮操作权限列表</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="getProcessStartList">
                    <h3>getProcessStartList</h3>
                    <ul>
                        <li>根据用户ID获取流程启动列表。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">userId</td>
                            <td>用户Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">orgIdentity</td>
                            <td>组织标识</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">List&lt;ProcessInfo&gt;</td>
                            <td>流程启动列表</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="getStartResultBean">
                    <h3>getStartResultBean</h3>
                    <ul>
                        <li>获取流程启动结果，如url和当前节点信息等。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">entryId</td>
                            <td>流程实例Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">formId</td>
                            <td>表单Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">userId</td>
                            <td>用户Id</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">StartResultBean</td>
                            <td>节点信息</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="getSubprocess">
                    <h3>getSubprocess</h3>
                    <ul>
                        <li>获取子流程实例id。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">entryId</td>
                            <td>流程实例Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">subprocess</td>
                            <td>子流程节点标识</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">String</td>
                            <td>流程实例id</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="getTaskRemark">
                    <h3>getTaskRemark</h3>
                    <ul>
                        <li>获取流程节点的描述信息。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">defineId</td>
                            <td>流程定义Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">activityname</td>
                            <td>节点名称</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">String</td>
                            <td>流程节点描述信息</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="saveGettracks">
                    <h3>saveGettracks</h3>
                    <ul>
                        <li>保存流程跟踪信息。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">trackVos</td>
                            <td>流程跟踪对象</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">processInstanceId</td>
                            <td>流程实例Id</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">void</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="setVariables">
                    <h3>setVariables</h3>
                    <ul>
                        <li>更新流程变量。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">executionId</td>
                            <td>流程执行Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">variables</td>
                            <td>流程变量map集合</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">void</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="transmit">
                    <h3>transmit</h3>
                    <ul>
                        <li>获取流程节点的描述信息。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">procinstDbid</td>
                            <td>流程定义Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">taskId</td>
                            <td>任务Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">to</td>
                            <td>下节点流转目标</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">message</td>
                            <td>意见信息</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">userId</td>
                            <td>用户Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">deptId</td>
                            <td>部门Id</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">void</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
    <!-- 流程查询API接口 -->
    <div class="codeGenerator">
        <div id="bpmDisplayService" class="secondMenuStatus">
            <div class="contentTitle">
                <h2>BpmDisplayService</h2>
                <div class="custom-block tip">
                    <p class="custom-block-title">说明</p>
                    <p>流程查询API常用方法</p>
                </div>
            </div>
            <div class="tableStructure">
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th width="20%">返回值</th>
                            <th width="40%">方法名称</th>
                            <th width="40%">方法描述</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>List&lt;HistoryTaskVo&gt;</td>
                            <td>getAllTaskByUserId</td>
                            <td>获取用户所有待办</td>
                        </tr>
                        <tr>
                            <td>List&lt;HistoryTaskVo&gt;</td>
                            <td>getTaskByUserId</td>
                            <td>获取用户待办</td>
                        </tr>
                        <tr>
                            <td>Map&lt;String, Object&gt;</td>
                            <td>getFocusedTask</td>
                            <td>获取关注工作集合</td>
                        </tr>
                        <tr>
                            <td>void</td>
                            <td>TrackIdeaUpdate</td>
                            <td>通过传入流程意见列表tracks来修改流程意见</td>
                        </tr>
                        <tr>
                            <td>String</td>
                            <td>finishTodo</td>
                            <td>通过待办主键dbid标志完成待办</td>
                        </tr>
                        <tr>
                            <td>List&lt;TrackVo&gt;</td>
                            <td>getCharacterTracks</td>
                            <td>通过流程实例Id来获取流程的文字跟踪</td>
                        </tr>
                        <tr>
                            <td>TrackVo</td>
                            <td>getTaskById</td>
                            <td>通过任务id获取任务对象</td>
                        </tr>
                    </tbody>
                </table>
                <div class="singlyCode" id="getAllTaskByUserId">
                    <h3>getAllTaskByUserId</h3>
                    <ul>
                        <li>获取用户所有待办。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">userId</td>
                                <td>用户ID</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">List&lt;HistoryTaskVo&gt;</td>
                                <td>待办列表</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="getTaskByUserId">
                    <h3>getTaskByUserId</h3>
                    <ul>
                        <li>获取用户待办。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">userId</td>
                                <td>用户ID</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">taskType</td>
                                <td>待办类型</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">List&lt;HistoryTaskVo&gt;</td>
                                <td>用户待办列表</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="getFocusedTask">
                    <h3>getFocusedTask</h3>
                    <ul>
                        <li>获取关注工作集合。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">pageNo</td>
                                <td>当前页码</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">pageSize</td>
                                <td>每页记录数</td>
                            </tr>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">map</td>
                                <td>查询条件</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">Map&lt;String, Object&gt;</td>
                                <td>关注工作集合</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="TrackIdeaUpdate">
                    <h3>TrackIdeaUpdate</h3>
                    <ul>
                        <li>通过传入流程意见列表tracks来修改流程意见。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">tracks</td>
                                <td>流程意见</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">void</td>
                                <td>--</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="singlyCode" id="finishTodo">
                    <h3>finishTodo</h3>
                    <ul>
                        <li>通过待办主键dbid标志完成待办。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">dbid</td>
                            <td>待办主键</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">String</td>
                            <td>待办id</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="singlyCode" id="getCharacterTracks">
                    <h3>getCharacterTracks</h3>
                    <ul>
                        <li>通过流程实例Id来获取流程的文字跟踪。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">processInstanceId</td>
                            <td>流程实例ID</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">List&lt;TrackVo&gt;</td>
                            <td>流程跟踪列表</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="singlyCode" id="getTaskById">
                    <h3>getTaskById</h3>
                    <ul>
                        <li>通过传入流程意见列表tracks来修改流程意见。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">processInstanceId</td>
                            <td>流程实例id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">taskId</td>
                            <td>任务id</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">TrackVo</td>
                            <td>流程任务对象</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- 流程意见API接口 -->
    <div class="codeGenerator">
        <div id="bpmIdeaService" class="secondMenuStatus">
            <div class="contentTitle">
                <h2>BpmIdeaService</h2>
                <div class="custom-block tip">
                    <p class="custom-block-title">说明</p>
                    <p>流程意见API常用方法</p>
                </div>
            </div>
            <div class="tableStructure">
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th width="20%">返回值</th>
                        <th width="40%">方法名称</th>
                        <th width="40%">方法描述</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>List&lt;Idea&gt;</td>
                        <td>getIdeaListByProcessInstIdeaAndCode</td>
                        <td>通过流程实例id、流程意见代码获和用户id取流程意见对象集合</td>
                    </tr>
                    <tr>
                        <td>Map&lt;String, List&lt;Idea&gt;&gt;</td>
                        <td>getIdeaMapByProcessInstanceId</td>
                        <td>通过流程实例id和用户id获取流程意见</td>
                    </tr>
                    <tr>
                        <td>List&lt;String&gt;</td>
                        <td>getIdeaStrByList</td>
                        <td>通过意见列表ideaList获取流程意见</td>
                    </tr>
                    <tr>
                        <td>List&lt;String&gt;</td>
                        <td>getIdeaSytleCode</td>
                        <td>通过流程实例Id和用户Id返回样式对应code列表</td>
                    </tr>
                    </tbody>
                </table>
                <div class="singlyCode" id="getIdeaListByProcessInstIdeaAndCode">
                    <h3>getIdeaListByProcessInstIdeaAndCode</h3>
                    <ul>
                        <li>通过流程实例id、流程意见代码获和用户id取流程意见对象集合。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">processInstanceId</td>
                            <td>流程实例Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">code</td>
                            <td>流程意见代码</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">userId</td>
                            <td>用户Id</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">List&lt;Idea&gt;</td>
                            <td>流程意见对象集合</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="getIdeaMapByProcessInstanceId">
                    <h3>getIdeaMapByProcessInstanceId</h3>
                    <ul>
                        <li>通过流程实例id和用户id获取流程意见。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">processInstanceId</td>
                            <td>流程实例Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">code</td>
                            <td>流程意见代码</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">userId</td>
                            <td>用户Id</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">Map&lt;String, List&lt;Idea&gt;&gt;</td>
                            <td>流程意见</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="getIdeaStrByList">
                    <h3>getIdeaStrByList</h3>
                    <ul>
                        <li>通过意见列表ideaList获取流程意见。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">ideaList</td>
                            <td>意见列表</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">List&lt;String&gt;</td>
                            <td>流程意见</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="getIdeaSytleCode">
                    <h3>getIdeaSytleCode</h3>
                    <ul>
                        <li>通过流程实例Id和用户Id返回样式对应code列表。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">processInstanceId</td>
                            <td>流程实例Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">userId</td>
                            <td>userId</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">List&lt;String&gt;</td>
                            <td>样式对应code列表</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


</body>
<script>
    $(document).ready(function() {
        //点击复制
        textCopy("btn");
        //初始化父页面高度
        initParentHeight();
    })
</script>

</html>