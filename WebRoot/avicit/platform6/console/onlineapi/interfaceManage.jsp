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
        <div id="eventListener" class="secondMenuStatus">
            <div class="contentTitle">
                <h2>流程常用事件接口</h2>
                <div class="custom-block tip">
                    <p class="custom-block-title">说明</p>
                    <p>
                        全局和人工节点的前置事件、后置事件及启动后事件，流转线上的流转事件<br/>
                        全局和人工节点权限中各个操作的预处理、后处理事件<br/>
                        路由条件及启动条件<br/>
                        流程自定义选人接口<br/>
                    </p>
                </div>
            </div>
            <div class="tableStructure">
                <div class="singlyCode" id = "flowEventListener">
                    <h3>流程事件监听</h3>
                    <ul>
                        <li>EventListener：包括全局和人工节点的前置事件、后置事件及启动后事件，流转线上的流转事件，需要实现接口"EventListener"</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#allEventCopy"></a>
                        <div id="allEventCopy">
                            package avicit.platform6study.bpmdemo.event;<br/>
                            import java.util.ArrayList;<br/>
                            import java.util.List;<br/>
                            import org.slf4j.Logger;<br/>
                            import org.slf4j.LoggerFactory;<br/>
                            import avicit.platform6.bpm.api.listener.EventListener;<br/>
                            import avicit.platform6.bpm.api.listener.EventListenerExecution;<br/>
                            /**<br/>
                            * bmp事件类demo,该类演示了如何获取流程实例Id，formId,流程变量的读写， 以及类属性的赋值<br/>
                            * @author<br/>
                            *<br/>
                            */<br/>
                            public class BpmLogListener implements EventListener{<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;Logger log = LoggerFactory.getLogger(BpmLogListener.class);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;//该属性值可以由设计器设置<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;String msg;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void notify(EventListenerExecution execution) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//流程执行Id<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String executionId = execution.getId();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//流程实例Id<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;long processInstanceId = execution.getProcessInstanceId();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//业务表单Id，可能是大写，这是由开发模块的方式决定的，jdbc addon保存的是ID<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String formId = (String) execution.getVariable("ID");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//业务表单Id,可能是小写，这是由开发模块的方式决定的<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String formId2 = (String) execution.getVariable("id");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//流程节点名称<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//String ActivityName = execution.getActivity().getName();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//从流程变量中取值<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List logs = (List)execution.getVariable("logs");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (logs==null) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logs = new ArrayList();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//设置流程变量<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;execution.setVariable("logs", logs);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logs.add(msg);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;execution.setVariable("logs", logs);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;log.info("===执行自定义事件BpmLogEvent:"+msg);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//进行业务操作，请通过SpringFactory获得bean，比如：<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SysApplicationService sysApplicationService = SpringFactory.getBean(SysApplicationService.class);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List list = sysApplicationService.getAllList();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;log.info("=======BpmDBListener取得SysApplication个数="+list.size());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>
                </div>
                <div class="singlyCode" id = "processConditionInterface">
                    <h3>流程启动条件</h3>
                    <ul>
                        <li>ProcessConditionInterface：指全局流程启动条件，需要实现接口"ProcessConditionInterface"</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#processConditionCopy"></a>
                        <div id="processConditionCopy">
                            package avicit.platform6study.bpmdemo.conditon;<br/><br/>

                            import java.util.Map;<br/>

                            import org.slf4j.Logger;<br/>
                            import org.slf4j.LoggerFactory;<br/>

                            import avicit.platform6.bpm.pvm.internal.model.ProcessConditionInterface;<br/>

                            /**<br/>
                            * 流程启动条件类demo<br/>
                            */<br/>
                            public class ProcessConditionClasses implements ProcessConditionInterface{<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;private Logger logger = LoggerFactory.getLogger(this.getClass());<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;/**<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;* 读取TRAFFIC流程变量，判断是否是"飞机"出差的<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;*/<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public boolean evaluate(Map tempVariables) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(tempVariables==null){<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String traffic = (String)tempVariables.get("TRAFFIC");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(traffic!=null&&traffic.equals("飞机")){<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}else{<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>
                </div>
                <div class="singlyCode" id = "routeConditionInterface">
                    <h3>流程路由条件</h3>
                    <ul>
                        <li>RouteConditionInterface：包括流转线上的路由条件，需要实现接口"RouteConditionInterface"</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#routeConditionCopy"></a>
                        <div id="routeConditionCopy">
                            package avicit.platform6study.bpmdemo.conditon;<br/>
                            import org.slf4j.Logger;<br/>
                            import org.slf4j.LoggerFactory;<br/>
                            import avicit.platform6.bpm.api.model.OpenExecution;<br/>
                            import avicit.platform6.bpm.pvm.internal.model.RouteConditionInterface;<br/><br/>

                            /**<br/>
                            * 流程条件类demo<br/>
                            */<br/>
                            public class ConditionClasses implements RouteConditionInterface{<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;private Logger logger = LoggerFactory.getLogger(this.getClass());<br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;/**<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;* 读取TRAFFIC流程变量，判断是否是"飞机"出差的<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;*/<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public boolean evaluate(OpenExecution execution) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String traffic = (String)execution.getVariable("TRAFFIC");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(traffic!=null&&traffic.equals("飞机")){<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}else{<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>
                </div>
                <div class="singlyCode" id = "precessingInterface">
                    <h3>流程动作监听</h3>
                    <ul>
                        <li>PrecessingInterface：包括全局和人工节点的各个动作的预处理、后处理事件，需要实现接口"PrecessingInterface"</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#precessingInterfaceCopy"></a>
                        <div id="precessingInterfaceCopy">
                            public class RejectToFistActPreProcessing implements PrecessingInterface{<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;private Logger logger = LoggerFactory.getLogger(this.getClass());<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void execute(ExecutionImpl execution, Map args) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 流程执行Id<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String executionId = execution.getId();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 流程实例Id<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;long processInstanceId = execution.getProcessInstanceId();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 流程节点名称<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;execution.getActivityAlias();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 流程定义id<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;execution.getProcessDefinitionId();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//如果大写ID取不到 formId 的值，请将 ID 改写成小写 id<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String formId = (String) execution.getVariable("ID");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//如果需要操作数据库，请通过SpringFactory获得bean，比如：<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SysApplicationService sysApplicationService = SpringFactory.getBean(SysApplicationService.class);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List list = sysApplicationService.getAllList();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;log.info("=======BpmDBListener取得SysApplication个数="+list.size());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("根据上面提供的变量进行业务操作");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>
                </div>
                <div class="singlyCode" id = "userSelect">
                    <h3>流程自定义选人</h3>
                    <ul>
                        <li>UserSelect：包括候选人自定义选人以及特殊权限操作人自定义选人，需要继承抽象类"UserSelect"</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#userSelectCopy"></a>
                        <div id="userSelectCopy">
                            package avicit.platform6study.bpmdemo.task;<br/><br/>

                            import java.util.ArrayList;<br/>
                            import java.util.List;<br/>

                            import avicit.platform6.bpm.api.identity.Actor;<br/>
                            import avicit.platform6.bpm.api.identity.Actors;<br/>
                            import avicit.platform6.bpm.api.identity.UserSelect;<br/>
                            import avicit.platform6.bpm.pvm.internal.task.actor.DeptLevelPositonActor;<br/>
                            import avicit.platform6.bpm.pvm.internal.task.actor.GroupActor;<br/>
                            import avicit.platform6.bpm.pvm.internal.task.actor.PositionActor;<br/>
                            import avicit.platform6.bpm.pvm.internal.task.actor.RoleActor;<br/>
                            import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;<br/>
                            import avicit.platform6.commons.utils.ComUtil;<br/>

                            /**<br/>
                            * 类说明：节点选人关系中的自定义函数<br/>
                            */<br/>
                            public class UserDefineFunction extends UserSelect {<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public Actors getActors(String processInstanceId, String executionId, String activityName,String startFormId,String loginUserId) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List actorlist = new ArrayList();<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//以下示例可根据自身需求返回一个或多个类型的用户，同一类型也可以返回多个<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//返回用户[石学远]<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actor actor = new UserActor();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setId("40288af938989073013898b81e77000c");//用户ID<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setName("石学远");//用户<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setType("user");//类别<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actorlist.add(actor);<br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//返回部门[研发中心]<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor = new DeptLevelPositonActor();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setId("40288af5382c969e01382c9b830c000c");//部门ID<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setName("研发中心");//部门<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setType("dept");//类别<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actorlist.add(actor);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//返回角色[系统管理员]<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor = new RoleActor();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setId("40288a46384feb2101384fee0bd60004");//角色ID<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setName("系统管理员");//角色<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setType("role");//类别<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actorlist.add(actor);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//返回群组[系统管理]<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor = new GroupActor();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setId("40288afb38c276fb0138c2d3ffa30010");//群组ID<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setName("系统管理");//群组<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setType("group");//类别<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actorlist.add(actor);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//返回岗位[普通员工a]<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor = new PositionActor();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setId("40288af9386fe46a0138703716690006");//岗位ID<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setName("普通员工a");//岗位<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actor.setType("position");//类别<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actorlist.add(actor);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actors actors = new Actors();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actors.setActorlist(actorlist);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actors.setId(ComUtil.getId());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return actors;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="codeGenerator">
        <div id="todoInterceptor" class="secondMenuStatus">
            <div class="contentTitle">
                <h2>待办拦截器</h2>
                <div class="custom-block tip">
                    <p class="custom-block-title">说明</p>
                    <p>
                        待办拦截器接口
                    </p>
                </div>
            </div>
            <div class="tableStructure">
                <div class="singlyCode" id = "todoInterceptorImpl">
                    <h3>TodoInterceptorImpl</h3>
                    <ul>
                        <li>待办拦截器接口</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#todoInterceptorCopy"></a>
                        <%--<a class="iconDownload" href="javascript:void(0)" onclick="downloadFile('<%=ViewUtil.getRequestPath(request)%>/console/onlineapi/download', 'TodoInterceptorImpl', 'txt')"></a>--%>
                        <div id="todoInterceptorCopy">
                           <%-- public class TodoInterceptorImpl implements TodoInterceptor {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;private static final Logger logger = LoggerFactory.getLogger(TodoInterceptorImpl.class);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public boolean deleteTodo(List<HistoryTaskImpl> list) { }<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public boolean insertTodo(HistoryTaskImpl historyTask) { }<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public boolean updateTodo(HistoryTaskImpl historyTask) { }<br/>
                            }<br/>
                            --%>
                            package avicit.sf.todointerceptor;<br/>
                            import java.text.DateFormat;<br/>
                            import java.text.SimpleDateFormat;<br/>
                            import java.util.Calendar;<br/>
                            import java.util.Date;<br/>
                            import java.util.List;<br/>
                            import javax.xml.namespace.QName;<br/>
                            import org.apache.cxf.endpoint.Client;<br/>
                            import org.apache.cxf.jaxws.endpoint.dynamic.JaxWsDynamicClientFactory;<br/>
                            import org.slf4j.Logger;<br/>
                            import org.slf4j.LoggerFactory;<br/>
                            import avicit.platform6.bpm.pvm.internal.history.model.HistoryTaskImpl;<br/>
                            import avicit.platform6.bpm.pvm.internal.util.TodoInterceptor;<br/>
                            import avicit.platform6.commons.utils.web.WsUtil;<br/>
                            import avicit.platform6.core.properties.PlatformProperties;<br/>
                            import avicit.platform6.core.spring.SpringFactory;<br/>
                            import avicit.sf.unitcode.service.SysUserUnitCodeService;<br/>

                            /**<br/>
                             * 待办拦截器<br/>
                             * @author Administrator<br/>
                             * date 2016-10-10<br/>
                             * V6平台使用代码拦截器，需要在平台的系统配置参数功能中添加配置项，代码为PLATFORM_V6_TODO_INTER，类型选择地点<br/>
                             * 在配置项的明细中添加子项，配置待办拦截器的实现类的全路径avicit.sf.todointerceptor.TodoInterceptorImpl<br/>
                             */<br/>
                            <br/>
                            public class TodoInterceptorImpl implements TodoInterceptor {<br/>

                            &#x0009;&#x0009;private static final Logger logger = LoggerFactory.getLogger(TodoInterceptorImpl.class);<br/>
                            
                            &nbsp;&nbsp;&nbsp;&nbsp;//wsdlUrl，todoUrl，appId三个参数建议在平台platform6_ext.properties文件中维护，不要直接写在java文件中<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;//例如，在项目中增加配置文件platform6_ext.properties，在配置文件中做如下定义：<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;//todointerceptor.wsdlUrl=http://192.168.3.5:9080/UnionTask/services/TaskMgrControl?wsdl<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;//todointerceptor.todoUrl=http://192.168.6.58/MES/MES/login/login_koal.jsp?sourceURI=<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;//todointerceptor.appId=MES<br/>
                            
                            &nbsp;&nbsp;&nbsp;&nbsp;//门户待办WebService服务<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;private static final String wsdlUrl = PlatformProperties.getProperty("todointerceptor.wsdlUrl");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;//待办处理链接<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;private static final String todoUrl = PlatformProperties.getProperty("todointerceptor.todoUrl");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;//应用系统编号<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;private static final String appId = PlatformProperties.getProperty("todointerceptor.appId");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;//获取集团统一编码service,如果不需要使用统一编码，可以省略，直接使用代码发送人和接收人<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;private static SysUserUnitCodeService sysUserUnitCodeService = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SpringFactory.getBean(SysUserUnitCodeService.class);<br/>
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public boolean deleteTodo(List<HistoryTaskImpl> list) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("删除待办开始!");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(list.size() > 0) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JaxWsDynamicClientFactory clientFactory = JaxWsDynamicClientFactory.newInstance();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Client client = clientFactory.createClient(wsdlUrl);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QName opName = WsUtil.getOperationName(client.getEndpoint(), "cancelTask");<br/>
                                        
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 0; i < list.size(); i++) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HistoryTaskImpl historyTaskImpl = list.get(i);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String appTaskID = String.valueOf(historyTaskImpl.getDbid());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String handleTime = String.valueOf(historyTaskImpl.getDuration());<br/>
                                
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object[] result = client.invoke(opName, appTaskID, appId, handleTime);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (result != null && result[0] != null && !"".equals(result[0])) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if ("1".equals(result[0])){<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("删除待办成功!");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}else {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("删除待办失败!");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} catch (Exception e) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.debug("给门户推送待办失败，异常为：" + e.getMessage());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.printStackTrace();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public boolean insertTodo(HistoryTaskImpl historyTask) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("新增待办开始！");	<br/>	
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JaxWsDynamicClientFactory clientFactory = JaxWsDynamicClientFactory.newInstance();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Client client = clientFactory.createClient(wsdlUrl);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QName opName = WsUtil.getOperationName(client.getEndpoint(), "addTask");<br/>
                                    
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");<br/>
                                    
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 待办标题<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String taskName = historyTask.getTaskTitle();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 本地系统待办ID<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String appTaskID = String.valueOf(historyTask.getDbid());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 所属待办类型<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/*String taskType = historyTask.getTaskType();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (taskType != null && !"".equals(taskType)) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if ("1".equals(taskType)){<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;taskType = "待阅";<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;taskType = "待办";<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}*/<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String appSendUID = sysUserUnitCodeService.getUnitCodeByUserName(historyTask.getTaskSendUser());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 待办接收人的登录号<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String appReceiveUID = sysUserUnitCodeService.getUnitCodeByUserId(historyTask.getAssignee());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 发送时间<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String sendTime = "";<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date sendTimeDate = historyTask.getCreateTime();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (sendTimeDate != null)<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendTime = df.format(historyTask.getCreateTime());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendTime = df.format(Calendar.getInstance().getTime());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 完成时间<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String endTime = "";<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date endTimeDate = historyTask.getEndTime();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (endTimeDate != null) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endTime = df.format(historyTask.getEndTime());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 待办链接地址<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String entryId = String.valueOf(historyTask.getProcessInstance());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String formId = historyTask.getBusinessId();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String executionId = historyTask.getExecutionId();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String taskId = String.valueOf(historyTask.getDbid());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String url = todoUrl;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String sourceURI = historyTask.getFormResourceName();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (sourceURI.indexOf("?") > 0)<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sourceURI = sourceURI + "&entryId=" + entryId;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sourceURI = sourceURI + "?entryId=" + entryId;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sourceURI = sourceURI + "&id=" + formId;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sourceURI = sourceURI + "&executionId=" + executionId;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sourceURI = sourceURI + "&taskId=" + taskId;<br/>
                                    
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sourceURI = java.net.URLEncoder.encode(sourceURI,"UTF-8");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url += sourceURI;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 待办描述<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String taskDesc = historyTask.getDescription();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (taskDesc == null || "".equals(taskDesc)) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;taskDesc = taskName;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 待办事项信息紧急程度，越小越紧急,0:特急 1:紧急 2:一般,缺省2<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String priorityID = "2";<br/>
                                    
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object[] result = client.invoke(opName, appId, taskName, appTaskID, taskType, appSendUID,<br/> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;appReceiveUID, sendTime, endTime, url, taskDesc, priorityID);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (result != null && result[0] != null && !"".equals(result[0])) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if ("1".equals(result[0])){<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("新增待办成功!");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}else {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("新增待办失败!");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} catch (Exception e) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.debug("给门户推送待办失败，异常为：" + e.getMessage());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.printStackTrace();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public boolean updateTodo(HistoryTaskImpl historyTask) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("修改待办开始!");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//判断待办是否是完成状态<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if("1".equals(historyTask.getTaskFinished())){<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JaxWsDynamicClientFactory clientFactory = JaxWsDynamicClientFactory.newInstance();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Client client = clientFactory.createClient(wsdlUrl);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QName opName = WsUtil.getOperationName(client.getEndpoint(), "completeTask");<br/>
                                        
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String appTaskID = String.valueOf(historyTask.getDbid());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String handleTime = String.valueOf(historyTask.getDuration());<br/>
                                    
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object[] result = client.invoke(opName, appTaskID, appId, handleTime);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (result != null && result[0] != null && !"".equals(result[0])) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if ("1".equals(result[0])){<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("修改待办成功!");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}else {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("修改待办失败!");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} catch (Exception e) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.debug("给门户推送待办失败，异常为：" + e.getMessage());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.printStackTrace();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>
                </div>
               <%-- <div class="singlyCode">
                    <h3>常见问题</h3>
                    <ul>
                        <li style="color: red;">使用待办拦截器，向其他系统推送待办，由于是异构系统，不在同一事务，出现数据不一致的情况。
                            <a href="javascript:void(0)" onclick="downloadFile('<%=ViewUtil.getRequestPath(request)%>/console/onlineapi/download', '待办推送事务不一致处理方案', 'rar')">
                                下载解决方案
                            </a>
                        </li>
                    </ul>
                </div>--%>
            </div>
        </div>
    </div>
    <div class="codeGenerator">
        <div id="swfUploadEvent" class="secondMenuStatus">
            <div class="contentTitle">
                <h2>SwfUploadEvent</h2>
                <div class="custom-block tip">
                    <p class="custom-block-title">说明</p>
                    <p>
                        附件根据存储介质增、删、改、查接口
                    </p>
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
                        <td>void</td>
                        <td>afterSaveFileByDB</td>
                        <td>存到数据库之后的后处理</td>
                    </tr>
                    <tr>
                        <td>void</td>
                        <td>afterSaveFileByDisk</td>
                        <td>存到服务器磁盘目录的后处理</td>
                    </tr>
                    <tr>
                        <td>void</td>
                        <td>afterSaveFileByOther</td>
                        <td>存到其它服务器的后处理</td>
                    </tr>
                    <tr>
                        <td>void</td>
                        <td>afterDelFileByDB</td>
                        <td>删除数据库附件之后的后处理</td>
                    </tr>
                    <tr>
                        <td>void</td>
                        <td>afterDelFileByDisk</td>
                        <td>删除服务器磁盘目录附件的后处理</td>
                    </tr>
                    <tr>
                        <td>void</td>
                        <td>afterDelFileByFastDfs</td>
                        <td>删除服务器磁盘目录附件的后处理</td>
                    </tr>
                    <tr>
                        <td>void</td>
                        <td>afterDelFileByOther</td>
                        <td>删除其它服务器中附件的后处理</td>
                    </tr>
                    <tr>
                        <td>void</td>
                        <td>downloadOneFileByOther</td>
                        <td>使用其他数据库下载单个附件</td>
                    </tr>
                    <tr>
                        <td>void</td>
                        <td>downloadAllFileByOther</td>
                        <td>使用其他数据库下载全部附件</td>
                    </tr>
                    </tbody>
                </table>
                <div class="singlyCode" id="afterSaveFileByDB">
                    <h3>afterSaveFileByDB</h3>
                    <ul>
                        <li>存到数据库之后的后处理。</li>
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
                            <td style="text-align: left;">sysFileUpload</td>
                            <td>文件上传对象</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">void</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="afterSaveFileByDisk">
                    <h3>afterSaveFileByDisk</h3>
                    <ul>
                        <li>存到服务器磁盘目录的后处理。</li>
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
                            <td style="text-align: left;">sysFileUpload</td>
                            <td>文件上传对象</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">inputStream</td>
                            <td>文件流</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">void</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="afterSaveFileByOther">
                    <h3>afterSaveFileByOther</h3>
                    <ul>
                        <li>存到其它服务器的后处理。</li>
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
                            <td style="text-align: left;">sysFileUpload</td>
                            <td>文件上传对象</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">inputStream</td>
                            <td>文件流</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">void</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="afterDelFileByDB">
                    <h3>afterDelFileByDB</h3>
                    <ul>
                        <li>删除数据库附件之后的后处理。</li>
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
                            <td style="text-align: left;">sysFileUpload</td>
                            <td>文件上传对象</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">void</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="afterDelFileByDisk">
                    <h3>afterDelFileByDisk</h3>
                    <ul>
                        <li>删除服务器磁盘目录附件的后处理。</li>
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
                            <td style="text-align: left;">sysFileUpload</td>
                            <td>文件上传对象</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">void</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="afterDelFileByFastDfs">
                    <h3>afterDelFileByFastDfs</h3>
                    <ul>
                        <li>删除服务器DFS附件的后处理。</li>
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
                            <td style="text-align: left;">sysFileUpload</td>
                            <td>文件上传对象</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">void</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="afterDelFileByOther">
                    <h3>afterDelFileByOther</h3>
                    <ul>
                        <li>删除其它服务器中附件的后处理。</li>
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
                            <td style="text-align: left;">sysFileUpload</td>
                            <td>文件上传对象</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">void</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="downloadOneFileByOther">
                    <h3>downloadOneFileByOther</h3>
                    <ul>
                        <li>使用其他数据库下载单个附件。</li>
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
                            <td style="text-align: left;">request</td>
                            <td>请求对象</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">response</td>
                            <td>响应对象</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">void</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="downloadAllFileByOther">
                    <h3>downloadAllFileByOther</h3>
                    <ul>
                        <li>使用其他数据库下载全部附件。</li>
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
                            <td style="text-align: left;">request</td>
                            <td>请求对象</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">response</td>
                            <td>响应对象</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">void</td>
                            <td>--</td>
                        </tr>
                        </tbody>
                    </table>

                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#swfUploadEventCopy"></a>
                        <div id="swfUploadEventCopy">
                            package avicit.test.test;<br/><br/>

                            import avicit.platform6.modules.system.sysfileupload.domain.SysFileUpload;<br/>
                            import avicit.platform6.modules.system.sysfileupload.service.SwfUploadEvent;<br/>
                            import javax.servlet.http.HttpServletRequest;<br/>
                            import javax.servlet.http.HttpServletResponse;<br/>
                            import java.io.InputStream;<br/>

                            public class SwfUploadEventDemo implements SwfUploadEvent {<br/><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override
                            &nbsp;&nbsp;&nbsp;&nbsp;public void afterSaveFileByDB(SysFileUpload sysFileUpload) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("存到数据库之后的后处理");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void afterSaveFileByDisk(SysFileUpload sysFileUpload, InputStream inputStream) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("存到服务器磁盘目录的后处理");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void afterSaveFileByOther(SysFileUpload sysFileUpload, InputStream inputStream) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("存到其它服务器的后处理");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void afterDelFileByDB(SysFileUpload sysFileUpload) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("删除数据库附件之后的后处理");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void afterDelFileByDisk(SysFileUpload sysFileUpload) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("删除服务器磁盘目录附件的后处理");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void afterDelFileByFastDfs(SysFileUpload sysFileUpload) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("删除DFS附件的后处理");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void afterDelFileByOther(SysFileUpload sysFileUpload) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("删除其它服务器中附件的后处理");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void downloadOneFileByOther(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("使用其他数据库下载单个附件");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void downloadAllFileByOther(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("使用其他数据库下载全部附件");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="codeGenerator">
        <div id="loginCallback" class="secondMenuStatus">
            <div class="contentTitle">
                <h2>系统登录前后接口</h2>
                <div class="custom-block tip">
                    <p class="custom-block-title">说明</p>
                    <p>
                        系统登录前后接口
                    </p>
                </div>
            </div>
            <div class="tableStructure">
                <div class="singlyCode" id="preparedLoginCallback">
                    <h3>PreparedLoginCallback</h3>
                    <ul>
                        <li>登录前接口</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#beforeLoginCopy"></a>
                        <div id="beforeLoginCopy">
                            package avicit.demo.train.event;<br/><br/>

                            import org.springframework.stereotype.Component;<br/>
                            import avicit.platform6.api.sysshirolog.impl.AvicitSubject;<br/>
                            import avicit.platform6.api.sysshirolog.impl.PreparedLoginCallback;<br/>
                            @Component<br/>
                            public class BeforeLogin implements PreparedLoginCallback {<br/><br/>
                            
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void dobeforeValidate() {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("登录前置接口,不带参数");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void dobeforeValidate(AvicitSubject paramAvicitSubject) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // 根据token获取用户名<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String userName = paramAvicitSubject.token.getUsername();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//获取当前用户登录名<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String loginName = (String) paramAvicitSubject.request.getSession().getAttribute("LOGIN");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//获取当前请求ip地址<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String currentIp = paramAvicitSubject.request.getRemoteAddr();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//添加登录前逻辑校验<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("登录前置接口，带参数");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>
                </div>
                <div class="singlyCode" id="compledLoginCallback">
                    <h3>CompledLoginCallback</h3>
                    <ul>
                        <li>登录后接口</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#afterLoginCopy"></a>
                        <div id="afterLoginCopy">
                            package avicit.demo.train.event;<br/>
                            import org.springframework.stereotype.Component;<br/>
                            import avicit.platform6.api.sysshirolog.impl.AvicitSubject;<br/>
                            import avicit.platform6.api.sysshirolog.impl.CompledLoginCallback;<br/>
                            @Component<br/>
                            public class AfterLogin implements CompledLoginCallback {<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void doAfterValidate() {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("登录后置接口,不带参数");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void doAfterValidate(AvicitSubject paramAvicitSubject) {<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//获取当前登录用户<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object obj = paramAvicitSubject.currentUser;<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 根据token获取用户名<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String userName = paramAvicitSubject.token.getUsername();<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//获取当前用户登录名<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String loginName = (String) paramAvicitSubject.request.getSession().getAttribute("LOGIN");<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//获取当前请求ip地址<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String removeIp = paramAvicitSubject.request.getRemoteAddr();<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//可添加登录后处理逻辑<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("登录后置接口，带参数");<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("==================================");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="codeGenerator">
        <div id="commonSelect" class="secondMenuStatus">
            <div class="contentTitle">
                <h2>公共选择组件</h2>
                <div class="custom-block tip">
                    <p class="custom-block-title">说明</p>
                    <p>
                        公共选择组件，包含选人，选部门，选岗位，选角色，选组织，选群组。
                    </p>
                </div>
            </div>
            <div class="tableStructure">
                <h3>公共参数：</h3>
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th width="20%">参数名称</th>
                            <th width="40%">参数类型</th>
                            <th width="40%">参数说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>viewScope</td>
                            <td>String</td>
                            <td>组织范围三种类型 currentOrg,allowAcross,all</td>
                        </tr>
                        <tr>
                            <td>defaultOrgId</td>
                            <td>String</td>
                            <td>默认组织id</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>String</td>
                            <td>组件类型，选用户:userSelect，选部门:deptSelect，选岗位:positionSelect，选角色:roleSelect，选群组:groupSelect
                                ，选组织:orgSelect</td>
                        </tr>
                        <tr>
                            <td>selectModel</td>
                            <td>String</td>
                            <td>单选还是多选，可选multi，single</td>
                        </tr>
                        <tr>
                            <td>idFiled</td>
                            <td>String</td>
                            <td>id字段</td>
                        </tr>
                        <tr>
                            <td>textFiled</td>
                            <td>String</td>
                            <td>名称字段</td>
                        </tr>
                        <tr>
                            <td>beferOpen</td>
                            <td>Function</td>
                            <td>打开前置事件</td>
                        </tr>
                        <tr>
                            <td>beferClose</td>
                            <td>Function</td>
                            <td>关闭前置事件</td>
                        </tr>
                        <tr>
                            <td>callBack</td>
                            <td>Function</td>
                            <td>回调事件</td>
                        </tr>

                    </tbody>
                </table>
                <h3>选人框对应参数：</h3>
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th width="20%">参数名称</th>
                        <th width="40%">参数类型</th>
                        <th width="40%">参数说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>deptidFiled</td>
                        <td>String</td>
                        <td>部门id</td>
                    </tr>
                    <tr>
                        <td>deptNameFiled</td>
                        <td>String</td>
                        <td>部门名称</td>
                    </tr>
                    <tr>
                        <td>defaultDept</td>
                        <td>String</td>
                        <td>部门范围，多个以“,”分隔</td>
                    </tr>
                    <tr>
                        <td>secretLevel</td>
                        <td>String</td>
                        <td>密级等级</td>
                    </tr>
                    <tr>
                        <td>isShowVoid</td>
                        <td>Boolean</td>
                        <td>是否显示无效复选框控制:true,false</td>
                    </tr>
                    <tr>
                        <td>hidTab</td>
                        <td>Object</td>
                        <td>选择要隐藏的标签：["role","dept","position","user","group"]</td>
                    </tr>
                    <tr>
                        <td>defaultLoadDeptId</td>
                        <td>String</td>
                        <td>默认部门id</td>
                    </tr>
                    <tr>
                        <td>defaultLoadGroupId</td>
                        <td>String</td>
                        <td>默认组id</td>
                    </tr>
                    <tr>
                        <td>defaultLoadRoleId</td>
                        <td>String</td>
                        <td>默认角色id</td>
                    </tr>
                    <tr>
                        <td>defaultLoadPositionId</td>
                        <td>String</td>
                        <td>默认岗位id</td>
                    </tr>
                    <tr>
                        <td>defaultLoadOrgId</td>
                        <td>String</td>
                        <td>默认组织id</td>
                    </tr>
                    <tr>
                        <td>numLimit</td>
                        <td>int</td>
                        <td>关键字查询用户数限制，默认值：200</td>
                    </tr>

                    </tbody>
                </table>
                <h3>选部门框对应参数：</h3>
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th width="20%">参数名称</th>
                        <th width="40%">参数类型</th>
                        <th width="40%">参数说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>isShowVoid</td>
                        <td>Boolean</td>
                        <td>是否显示无效复选框控制:true,false</td>
                    </tr>
                    <tr>
                        <td>defaultLoadDeptId</td>
                        <td>String</td>
                        <td>默认部门id</td>
                    </tr>
                    <tr>
                        <td>deptLevel</td>
                        <td>Long</td>
                        <td>部门等级</td>
                    </tr>
                    </tbody>
                </table>
                <div class="singlyCode" id="commonSelectExample">
                    <h5>示例代码：</h5>
                    <span>1.在页面上定义公共选择框</span>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#commonSelectCopy"></a>
                        <div id="commonSelectCopy">
                            &lt;th width="15%"&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;label for="applyUserAlias"&gt;申请人:&lt;/label&gt;<br/>
                            &lt;/th&gt;<br/>
                            &lt;td width="34%"&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="input-group  input-group-sm"&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="hidden" id="applyUser" name="applyUser"&gt; <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input class="form-control" placeholder="请选择用户" type="text" id="applyUserAlias" name="applyUserAlias"&gt;<br/> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="input-group-addon"&gt; <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;i class="glyphicon glyphicon-user"&gt;&lt;/i&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/span&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                            &lt;/td&gt;<br/>
                            &lt;th&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;label for="applyDeptAlias"&gt;申请部门:&lt;/label&gt;<br/>
                            &lt;/th&gt;<br/>
                            &lt;td<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="input-group  input-group-sm"&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="hidden" id="applyDept" name="applyDept"&gt; <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input class="form-control" placeholder="请选择部门" type="text" id="applyDeptAlias" name="applyDeptAlias"&gt; <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="input-group-addon"&gt; <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;i class="glyphicon glyphicon-equalizer"&gt;&lt;/i&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/span&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                            &lt;/td&gt;<br/>
                        </div>
                    </div>
                    <span>2.初始化用户选择框和部门选择框<br/></span>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#commonSelectCopy2"></a>
                        <div id="commonSelectCopy2">
                                     //用户选择框<br/>
                                    $('#applyUserAlias').on('focus', function (e) {<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;    new H5CommonSelect({<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;    type: 'userSelect', //选用户:userSelect，选部门:deptSelect，选岗位:positionSelect，选角色:roleSelect，选群组:groupSelect
                                    ，选组织:orgSelect<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;   idFiled: 'applyUserid', <br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;    textFiled: 'applyUseridAlias'<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;   });<br/>
                                    this.blur();<br/>
                                    nullInput(e);<br/>
                                    });<br/>
        
                                    //部门选择框<br/>
                                    $('#applyDeptAlias').on('focus', function(e) {<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;    new H5CommonSelect({<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;    type : 'deptSelect',<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;   idFiled : 'applyDept',<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;    textFiled : 'applyDeptAlias'<br/>
                                    });<br/>
                                    this.blur();<br/>
                                    nullInput(e);<br/>
                                    });
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="codeGenerator">
        <div id="orgUserSync" class="secondMenuStatus">
            <div class="contentTitle">
                <h2>组织机构同步代码示例</h2>
                <div class="custom-block tip">
                    <p class="custom-block-title">说明</p>
                    <p>
                        项目在部署实施时，系统中的人员组织机构数据同步，是实施过程中的重要一环，本方案提供了两种方式进行人员组织机构数据的同步：<br/>
                        （1）服务端：平台作为服务端，向第三方系统暴露webService接口，第三方系统通过调用接口将相应的数据传入到方法中，即可实现数据同步。<br/>
                        （2）客户端：平台作为客户端，调用第三方系统暴露的webService接口。获取数据后，进行数据同步。<br/>
                        本方案提供的是示例代码，适用于V6R3.2.3及以上版本，各项目现场可根据实际情况对代码进行修改。<br/>
                        <br/>
                        <a class="iconDownload" href="javascript:void(0)" onclick="downloadFile('<%=ViewUtil.getRequestPath(request)%>/console/onlineapi/download', 'demowebservice', 'zip')">点击此处下载示例代码</a>
                    </p>
                </div>
            </div>
            <%--<div class="tableStructure">
                <div class="singlyCode">
                    &lt;%&ndash;<h5>示例代码下载：</h5>&ndash;%&gt;
                    <a class="iconDownload" href="javascript:void(0)" onclick="downloadFile('<%=ViewUtil.getRequestPath(request)%>/console/onlineapi/download', 'demowebservice', 'zip')">点击此处下载示例代码</a>
                </div>
            </div>--%>
        </div>
    </div>
    <div class="codeGenerator">
        <div id="flowWebEvent" class="secondMenuStatus">
            <div class="contentTitle">
                <h2>流程前端常用接口</h2>
                <div class="custom-block tip">
                    <p class="custom-block-title">说明</p>
                    <p>流程详细页，业务操作父类，包括如提交、退回、拿回等操作前、后事件，流程页面初始化事件等</p>
                    <p>电子表单的所有流程详细页使用统一操作类：EformFlow</p>
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
                        <td>-</td>
                        <td>start</td>
                        <td>启动流程</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>afterCreateButtons</td>
                        <td>刷新权限按钮后事件</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>afterControlFormInput</td>
                        <td>刷新表单元素权限成功后事件</td>
                    </tr>
                    <tr>
                        <td>secretLevelList</td>
                        <td>filterSecretLevel</td>
                        <td>密级下拉框再过滤事件</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>setAttachMagic</td>
                        <td>设置附件是否可增删</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>setAttachCanAddOrDel</td>
                        <td>设置多附件是否可增删</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>setAttachRequired</td>
                        <td>设置多附件是否必填</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>setAttachSecretLevelModify</td>
                        <td>设置多附件密级是否可修改</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>controlSelfElement</td>
                        <td>自定义元素的权限控制</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>controlSelfElementForAccess</td>
                        <td>自定义元素的权限控制</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>controlSelfElementForRequired</td>
                        <td>自定义元素的必填控制</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>controlSubTableButtonForAccess</td>
                        <td>子表按钮元素的权限控制</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>controlCustomSubTableForAccess</td>
                        <td>非电子表单子表字段的显隐控制</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>controlCustomSubTableForOperability</td>
                        <td>非电子表单子表字段的可编辑控制</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>controlCustomSubTableForRequired</td>
                        <td>非电子表单子表字段的必填控制</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>afterInit</td>
                        <td>流程页面初始化事件</td>
                    </tr>
                    <tr>
                        <td>Boolean</td>
                        <td>beforeSubmit</td>
                        <td>提交前事件</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>afterSubmit</td>
                        <td>提交后事件</td>
                    </tr>
                    <tr>
                        <td>Boolean</td>
                        <td>beforeRetreat</td>
                        <td>退回前事件</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>afterRetreat</td>
                        <td>退回后事件</td>
                    </tr>
                    <tr>
                        <td>Boolean</td>
                        <td>beforeGlobalend</td>
                        <td>流程结束前事件</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>afterGlobalend</td>
                        <td>流程结束后事件</td>
                    </tr>
                    </tbody>
                </table>
                <div class="singlyCode" id="start">
                    <h3>DefaultForm.prototype.start</h3>
                    <ul>
                        <li>启动流程</li>
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
                            <td>流程模板id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">callback</td>
                            <td>流程启动后的回调事件</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="singlyCode" id="afterCreateButtons">
                    <h3>DefaultForm.prototype.afterCreateButtons</h3>
                    <ul>
                        <li>刷新权限按钮后事件</li>
                    </ul>
                </div>
                <div class="singlyCode" id="afterControlFormInput">
                    <h3>DefaultForm.prototype.afterControlFormInput</h3>
                    <ul>
                        <li>刷新表单元素权限成功后事件</li>
                    </ul>
                </div>
                <div class="singlyCode" id="filterSecretLevel">
                    <h3>DefaultForm.prototype.filterSecretLevel</h3>
                    <ul>
                        <li>密级下拉框再过滤事件</li>
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
                            <td style="text-align: left;">secretLevelList</td>
                            <td>密级列表</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">secretLevelList</td>
                            <td>密级列表</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="setAttachMagic">
                    <h3>DefaultForm.prototype.setAttachMagic</h3>
                    <ul>
                        <li>设置附件是否可增删</li>
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
                            <td style="text-align: left;">magic</td>
                            <td>magic</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="setAttachCanAddOrDel">
                    <h3>DefaultForm.prototype.setAttachCanAddOrDel</h3>
                    <ul>
                        <li>设置多附件是否可增删</li>
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
                            <td style="text-align: left;">tagId</td>
                            <td>元素Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">operability</td>
                            <td>流程设计器中流程附件增删权限值</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">obj</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="setAttachRequired">
                    <h3>DefaultForm.prototype.setAttachRequired</h3>
                    <ul>
                        <li>设置多附件是否必填</li>
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
                            <td style="text-align: left;">tagId</td>
                            <td>元素Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">required</td>
                            <td>流程设计器中流程附件是否必填值</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">obj</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="setAttachSecretLevelModify">
                    <h3>DefaultForm.prototype.setAttachSecretLevelModify</h3>
                    <ul>
                        <li>设置多附件密级是否可修改</li>
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
                            <td style="text-align: left;">tagId</td>
                            <td>元素Id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">modify</td>
                            <td>流程设计器中流程附件是否可修改的值</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">obj</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="controlSelfElement">
                    <h3>DefaultForm.prototype.controlSelfElement</h3>
                    <ul>
                        <li>自定义元素的权限控制，自定义元素定义通过".bpm_self_class"来实现</li>
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
                            <td style="text-align: left;">tagId</td>
                            <td>元素id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">operability</td>
                            <td>是否可编辑</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">obj</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="controlSelfElementForAccess">
                    <h3>DefaultForm.prototype.controlSelfElementForAccess</h3>
                    <ul>
                        <li>自定义元素的权限控制，自定义元素定义通过".bpm_self_class"来实现</li>
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
                            <td style="text-align: left;">tagId</td>
                            <td>tagId</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">accessibility</td>
                            <td>是否可显示</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">obj</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="controlSelfElementForRequired">
                    <h3>DefaultForm.prototype.controlSelfElementForRequired</h3>
                    <ul>
                        <li>自定义元素的必填控制，自定义元素定义通过".bpm_self_class"来实现</li>
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
                            <td style="text-align: left;">tagId</td>
                            <td>元素id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">required</td>
                            <td>是否必填</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">obj</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="controlSubTableButtonForAccess">
                    <h3>DefaultForm.prototype.controlSubTableButtonForAccess</h3>
                    <ul>
                        <li>子表按钮元素的权限控制，子表按钮元素定义通过".eform_subtable_bpm_button_auth"来实现</li>
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
                            <td style="text-align: left;">tagId</td>
                            <td>元素id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">accessibility</td>
                            <td>是否可显示</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">obj</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="controlCustomSubTableForAccess">
                    <h3>DefaultForm.prototype.controlCustomSubTableForAccess</h3>
                    <ul>
                        <li>非电子表单子表字段的显隐控制，子表字段元素定义通过".customform_subtable_bpm_auth"来实现</li>
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
                            <td style="text-align: left;">tagId</td>
                            <td>元素id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">accessibility</td>
                            <td>是否可显示</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">obj</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="controlCustomSubTableForOperability">
                    <h3>DefaultForm.prototype.controlCustomSubTableForOperability</h3>
                    <ul>
                        <li>非电子表单子表字段的可编辑控制，子表字段元素定义通过".customform_subtable_bpm_auth"来实现</li>
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
                            <td style="text-align: left;">tagId</td>
                            <td>元素id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">operability</td>
                            <td>是否可编辑</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">obj</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="controlCustomSubTableForRequired">
                    <h3>DefaultForm.prototype.controlCustomSubTableForRequired</h3>
                    <ul>
                        <li>非电子表单子表字段的必填控制，子表字段元素定义通过".customform_subtable_bpm_auth"来实现</li>
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
                            <td style="text-align: left;">tagId</td>
                            <td>元素id</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">required</td>
                            <td>是否必填</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">obj</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="afterInit">
                    <h3>DefaultForm.prototype.afterInit</h3>
                    <ul>
                        <li>流程页面初始化事件，在按钮第一次加载后被执行</li>
                    </ul>
                </div>
                <div class="singlyCode" id="beforeSubmit">
                    <h3>DefaultForm.prototype.beforeSubmit</h3>
                    <ul>
                        <li>提交前事件</li>
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
                            <td style="text-align: left;">data</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">Boolean</td>
                            <td>Boolean型变量</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="afterSubmit">
                    <h3>DefaultForm.prototype.afterSubmit</h3>
                    <ul>
                        <li>提交后事件</li>
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
                            <td style="text-align: left;">data</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="beforeRetreat">
                    <h3>DefaultForm.prototype.beforeRetreat</h3>
                    <ul>
                        <li>退回前事件</li>
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
                            <td style="text-align: left;">data</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">Boolean</td>
                            <td>Boolean型变量</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="afterRetreat">
                    <h3>DefaultForm.prototype.afterRetreat</h3>
                    <ul>
                        <li>退回后事件</li>
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
                            <td style="text-align: left;">data</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="beforeGlobalend">
                    <h3>DefaultForm.prototype.beforeGlobalend</h3>
                    <ul>
                        <li>流程结束前事件</li>
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
                            <td style="text-align: left;">data</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">Boolean</td>
                            <td>Boolean型变量</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div class="singlyCode" id="afterGlobalend">
                    <h3>DefaultForm.prototype.afterGlobalend</h3>
                    <ul>
                        <li>流程结束后事件</li>
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
                            <td style="text-align: left;">data</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                
            </div>
        </div>
    </div>
    <div class="codeGenerator">
        <div id="eformEvent" class="secondMenuStatus">
            <div class="contentTitle">
                <h2>电子表单常用事件接口</h2>
                <div class="custom-block tip">
                    <p class="custom-block-title">说明</p>
                    <p>
                        电子表单部分控件的扩展接口</br>
                        新增和更新页面保存操作的前、后处理事件</br>
                        视图的列模型中字段自定义转换接口</br>
                    </p>
                </div>
            </div>
            <div class="tableStructure">
                <div class="singlyCode" id = "bpmOpinion">
                    <h3>流程意见（流程意见自定义类）</h3>
                    <ul>
                        <li>BpmOpinion：表单中流程意见控件，用于展示自定义意见。需要继承类"Bpmopinion"，实现其中的"getReturnValue"方法</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#bpmOpinionCopy"></a>
                        <div id="bpmOpinionCopy">
                            package avicit.platform6.eformclient.demo;</br>

                            import avicit.platform6.commons.utils.JsonHelper;</br>
                            import avicit.platform6.eformbpms.bpmopinion.Bpmopinion;</br>
            
                            import java.util.List;</br>
                            import java.util.Map;</br>
            
                            public class TestOpinion extends Bpmopinion {</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;public Object getReturnValue(String data) {</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//单个流程意见</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//List&lt;Map&lt;String, String>> singleOpinion = JsonHelper.getInstance().readValue(data, List.class);</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//所有流程意见</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Map allOpinion = JsonHelper.getInstance().readValue(data, Map.class);</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List rs = (List) allOpinion.get("result");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StringBuilder sb = new StringBuilder("&lt;table class='table table-bordered' style=''>");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 0; i < rs.size(); i++) {</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List idealist = (List) rs.get(i);</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Map idea = (Map) idealist.get(0);</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sb.append("&lt;tr>&lt;tr>&lt;td style='border: 1px solid black;'>").append(idea.get("title"))</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.append("&lt;/td>&lt;td style='border: 1px solid black;word-break:break-word'>")</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.append(idea.get("idea")).append("&nbsp;&nbsp;").append(idea.get("day"))</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.append("&nbsp;&nbsp;").append(idea.get("user")).append("&nbsp;&nbsp;&lt;br>&lt;/td>&lt;/tr>");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sb.append("&lt;/table>");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return sb.toString();</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;}</br>
                            }</br>
                        </div>
                    </div>
                </div>
                <div class="singlyCode" id = "calculated">
                    <h3>虚拟控件（虚拟字段计算类）</h3>
                    <ul>
                        <li>Calculated：表单中虚拟字段控件，用于对目标值进行转换。需要实现接口"CalculateValue"中的方法</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#calculatedCopy"></a>
                        <div id="calculatedCopy">
                            package avicit.platform6.eformclient.demo;</br>

                            import avicit.platform6.core.spring.SpringFactory;</br>
                            import avicit.platform6.eform.tutorial.demoequip.service.DemoEquipService;</br>
                            import avicit.platform6.eformbpms.service.CalculateValue;</br>
            
                            import java.util.Map;</br>
            
                            public class TestCalculateValue implements CalculateValue {</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;//注入业务Service</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;private DemoEquipService service = (DemoEquipService) SpringFactory.getBean("demoEquipService");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;public String doCalculate(String domId, Map pageParams) {</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//获取当前表单数据</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Map formData = (Map)pageParams.get("formData");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//获取设备id</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String equipId = (String)formData.get("EQUIP_ID");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//返回设备编号</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return service.findCodeByValue(equipId);</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;}</br>
                            }</br>
                        </div>
                    </div>
                </div>
                <div class="singlyCode" id = "dataTableCol">
                    <h3>子表虚拟列转换（子表列转换）</h3>
                    <ul>
                        <li>DataTableCol：表单子表控件虚拟列自定义转换调用此方法。需要实现接口"EformDatatableColTransform"中的方法</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#dataTableColCopy"></a>
                        <div id="dataTableColCopy">
                            package avicit.platform6.eform.tutorial;</br>

                            import avicit.platform6.core.spring.SpringFactory;</br>
                            import avicit.platform6.eform.service.EformDatatableColTransform;</br>
                            import avicit.platform6.eform.tutorial.demoequip.service.DemoEquipService;</br>
            
                            import java.util.Map;</br>
            
                            public class TransEformColEquip implements EformDatatableColTransform {</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;private DemoEquipService service = (DemoEquipService)SpringFactory.getBean("demoEquipService");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;public Map&lt;String, Object> transform(Map&lt;String, Object> colMap) {</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String equipId = (String)colMap.get("EQUIP_ID");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String code = service.findCodeByValue(equipId);</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colMap.put("EQUIP_CODE",code);</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return colMap;</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;}</br>
                            }</br>
                        </div>
                    </div>
                </div>
                <div class="singlyCode" id = "handleEvnet">
                    <h3>前后处理类</h3>
                    <ul>
                        <li>HandleEvnet：表单执行更新数据操作前后会调用此方法，包含前处理和后处理。需要实现接口"EformHandlerEvent"中的方法</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#handleEvnetCopy"></a>
                        <div id="handleEvnetCopy">
                            package avicit.platform6.eform.tutorial;</br>

                            import avicit.platform6.core.exception.DaoException;</br>
                            import avicit.platform6.core.spring.SpringFactory;</br>
                            import avicit.platform6.eform.service.EformHandlerEvent;</br>
                            import avicit.platform6.eform.tutorial.demoequip.service.DemoEquipService;</br>
                            import org.slf4j.Logger;</br>
                            import org.slf4j.LoggerFactory;</br>
            
                            import java.util.Map;</br>
            
                            public class EventEformTutorial implements EformHandlerEvent {</br>
            
            
                            &nbsp;&nbsp;&nbsp;&nbsp;//注入业务service</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;private DemoEquipService service = (DemoEquipService) SpringFactory.getBean("demoEquipService");</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;/**</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;* 前置事件</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;* @param oldEntity 原数据（添加操作时为null）</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;* @param newEntity 新数据（删除操作时为null）</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;*/</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void beforeEvent(Map<String, Object> oldEntity, Map<String, Object> newEntity) {</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String code = (String)newEntity.get("CODE");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (code.startsWith("undefined")){</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw new RuntimeException("编码不能以undefined开头");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;}</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;/**</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;* 后置事件</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;* @param oldEntity 原数据（添加操作时为null）</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;* @param newEntity 新数据（删除操作时为null）</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;*/</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;public void afterEvent(Map<String, Object> oldEntity, Map<String, Object> newEntity) {</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String id = (String)oldEntity.get("EQUIP_ID");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try {</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;service.deleteDemoEquipById(id);</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}catch (Exception e) {</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.printStackTrace();</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw new RuntimeException("删除出错请检查");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;}</br>
            
                            }</br>
                        </div>
                    </div>
                </div>
                <div class="singlyCode" id = "linkAge">
                    <h3>联动控件（联动控件自定义类）</h3>
                    <ul>
                        <li>LinkAge：表单、视图中联动控件勾选自定义实现属性后调用此方法，用于对目标值进行转换。需要继承类"EformLinkage"，并实现其中的"getReturnValue"方法</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#linkAgeCopy"></a>
                        <div id="linkAgeCopy">
                            package avicit.platform6.eformclient.demo;</br>

                            import avicit.platform6.eformclient.service.EformLinkage;</br>
            
                            import java.util.ArrayList;</br>
                            import java.util.HashMap;</br>
                            import java.util.List;</br>
                            import java.util.Map;</br>
            
                            public class TestList extends EformLinkage {</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;public Object getReturnValue(String value) {</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//创建下拉列表List</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List&lt;Map&lt;String, String>> backList = new ArrayList&lt;Map&lt;String, String>>();</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//添加北京选项</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;String, String> backMap1 = new HashMap<String, String>();</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backMap1.put("key", "1");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backMap1.put("value", "北京" + value);</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//添加上海选项</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;String, String> backMap2 = new HashMap<String, String>();</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backMap2.put("key", "2");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backMap2.put("value", "上海" + value);</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//添加广州选项</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;String, String> backMap3 = new HashMap<String, String>();</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backMap3.put("key", "3");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backMap3.put("value", "广州" + value);</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//添加深圳选项</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Map&lt;String, String> backMap4 = new HashMap<String, String>();</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backMap4.put("key", "4");</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backMap4.put("value", "深圳" + value);</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backList.add(backMap1);</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backList.add(backMap2);</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backList.add(backMap3);</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backList.add(backMap4);</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return backList;</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;}</br>
                            }</br>
                        </div>
                    </div>
                </div>
                <div class="singlyCode" id = "transferCol">
                    <h3>自定义列转换</h3>
                    <ul>
                        <li>TransferCol：视图表格控件、树列表控件、表单中地址选择控件获取数据之后会调用此方法，用于对目标值进行转换。需要实现接口"TransferColInterface"中的方法</li>
                    </ul>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#transferColCopy"></a>
                        <div id="transferColCopy">
                            package avicit.platform6.eform.tutorial;</br>

                            import avicit.platform6.core.spring.SpringFactory;</br>
                            import avicit.platform6.eform.tutorial.demoequip.service.DemoEquipService;</br>
                            import avicit.platform6.eformbpms.view.service.TransferColInterface;</br>
                            import org.slf4j.Logger;</br>
                            import org.slf4j.LoggerFactory;</br>
            
                            public class TransEformEquip implements TransferColInterface {</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;private static Logger logger =LoggerFactory.getLogger(TransEformEquip.class);</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;//注入业务service</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;private DemoEquipService service = (DemoEquipService)SpringFactory.getBean("demoEquipService");</br>
            
                            &nbsp;&nbsp;&nbsp;&nbsp;@Override</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;public String transfer(String value) {</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//调用业务中的转换方法，将值转为code</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return service.findCodeByValue(value);</br>
                            &nbsp;&nbsp;&nbsp;&nbsp;}</br>
                            }</br>
                        </div>
                    </div>
                </div>
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