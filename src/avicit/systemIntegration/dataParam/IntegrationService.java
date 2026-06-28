//package avicit.systemIntegration.dataParam;
//
//import avicit.platform6.api.session.SessionHelper;
//import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
//import avicit.platform6.api.sysuser.dto.SysUser;
//import avicit.platform6.bpm.pvm.internal.history.model.HistoryTaskImpl;
//import avicit.platform6.commons.utils.ComUtil;
//import avicit.platform6.commons.utils.DateUtil;
//import avicit.platform6.todoTransaction.util.IntegrationInterface;
//
//import org.apache.cxf.endpoint.Client;
//import org.apache.cxf.endpoint.ClientImpl;
//import org.apache.cxf.endpoint.Endpoint;
//import org.apache.cxf.jaxws.endpoint.dynamic.JaxWsDynamicClientFactory;
//import org.apache.cxf.transport.http.HTTPConduit;
//import org.apache.cxf.transports.http.configuration.HTTPClientPolicy;
//import org.dom4j.Document;
//import org.dom4j.DocumentHelper;
//import org.dom4j.Element;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.stereotype.Service;
//import org.springframework.util.StringUtils;
//
//
//import java.text.SimpleDateFormat;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//import java.util.concurrent.ConcurrentHashMap;
//
//
///**
// * 20240425 add 张国庆  增加待办向门户系统推送
// */
//
//@Service
//public class IntegrationService implements IntegrationInterface,LoaderConstant {
//
//    private static final Logger LOGGER =  LoggerFactory.getLogger(IntegrationService.class);
//    public static final String appID = "PB";
//    private String applicationId = SessionHelper.getApplicationId();
//    private String portalURL = sysProfileAPI.getProfileValueByCodeByAppId("portalURL", applicationId);
//    //final String portalWsURL = sysProfileAPI.getProfileValueByCodeByAppId("portalWsURL", applicationId);
//    //private static String wsNameSpace = "http://com/meritit/portal/uniontask/webservice/";
//
//    public String getPortalWebServiceUrl() {
//       return  sysProfileAPI.getProfileValueByCodeByAppId("portalWsURL", applicationId);
//        //return "http://daportal.da.net/UnionTask/services/TaskMgrControl?wsdl";//sysProfileAPI.getProfileValueByCode("portalWsURL");
//    }
//
//    // 定义缓存，加快创建效率
//    public static Map<String, Endpoint> factoryMap = new ConcurrentHashMap<String, Endpoint>();
//    public static Map<String, Client> clientMap = new ConcurrentHashMap<String, Client>();
//
//    public String callByCxf(String wsUrl, String wsNameSpace, String method,
//                            Object[] parameterObj) {
//
//        try {
//            // 临时增加缓存，增加创建速度
//            if (!factoryMap.containsKey(method)) {
//                // 创建动态客户端
//                JaxWsDynamicClientFactory dcf = JaxWsDynamicClientFactory.newInstance();
//                // 创建客户端连接
//                Client client = dcf.createClient(wsUrl);
//                HTTPConduit http = (HTTPConduit) client.getConduit();
//                HTTPClientPolicy httpClientPolicy = new HTTPClientPolicy();
//                httpClientPolicy.setConnectionTimeout(60000); // PDM要求设置1分钟 设置TCP握手时间 5秒 默认30秒
//                httpClientPolicy.setAllowChunking(false); // 取消块编码
//                httpClientPolicy.setReceiveTimeout(600000); // PDM处理大数据慢，暂定10分钟  发送WebService请求后所等待响应的时间 30秒 默认60秒
//                http.setClient(httpClientPolicy);
//                ClientImpl clientImpl = (ClientImpl) client;
//                Endpoint endpoint = clientImpl.getEndpoint();
//                factoryMap.put(method, endpoint);
//                clientMap.put(method, client);
//            }
//            // 从缓存中换取 endpoint、client
//            //Endpoint endpoint = factoryMap.get(method);
//            Client client = clientMap.get(method);
//            //QName name = new QName(wsNameSpace, method);
//
//            Object[] res = client.invoke(method, parameterObj);
//
//            return "1";
//
//
//        } catch (Exception e) {
//        	LOGGER.error("插入待办失败：{}",e.getMessage());
//            e.printStackTrace();
//        }
//        return "0";
//    }
//
//    /**
//     * 解析 消息 XML
//     * @param xml
//     * @return
//     */
//    private Map<String, Object> resolveMessage(String xml) {
//        Map<String, Object> map = new HashMap<String, Object>();
//        try {
//            Document document = DocumentHelper.parseText(xml);
//            Element root = document.getRootElement();
//            List<Element> childElements = root.elements();
//            for (Element e : childElements) {
//                map.put(e.getName(), e.getText());
//            }
//        } catch (Exception e) {
//            // TODO Auto-generated catch block
//            LOGGER.info("解析xml失败!"+e.getMessage());
//            //e.printStackTrace();
//        }
//        return map;
//    }
//
//    /**
//     * 向第三方系统推送数据
//     * 返回值为String类型，0表示失败，1表示成功，2表示超时
//     * @param historyTask
//     * @return
//     */
//    @Override
//    public String insertOtherSystemData(HistoryTaskImpl historyTask){
//        //调用第三方webservice
//       // String result = "0";
//
//        //Object[] objParameter = {};
//        String taskName = historyTask.getTaskTitle();
//		String appTaskID = historyTask.getDbid();// 待办id
//		String appSendUID = historyTask.getTaskSendUser();
//		//String fromCodeName = historyTask.getFormCode();
//		String assignee = historyTask.getAssignee();// 处理人，必需
//		SysUser sysUser = sysUserLoader.getSysUserById(assignee);
//		String appReceiveUID = sysUser.getLoginName();
//		String endTime = "";
//		String taskDesc = "";
//		String sourceURI = "sourceURI=/"+appID.toLowerCase()+"/";
//		String sourceQueryString = "sourceQueryString=";
//		String retUrl = "";
//		String sendTime = DateUtil.getCurDateStr("yyyy-MM-dd HH:mm:ss");
//		//String sendTime = DateUtil.format(historyTask.getCreateTime(), "yyyy-MM-dd HH:mm:ss");
//		String taskType = "";
//        String priority=historyTask.getPriority();
//        if(org.apache.commons.lang3.StringUtils.isEmpty(ComUtil.replaceNull2Space(priority))){
//             priority = "2";
//        }
//		if (historyTask.getProcessDefName() != null
//				&& !historyTask.getProcessDefName().equals("")) {
//			taskType = historyTask.getProcessDefName();
//		}
//		String url = historyTask.getFormResourceName();// 待办事项处理链接，能够通过该链接直接定位到待办事项的处理界面
//		if (url.indexOf("?") > 0) {
//			int endIndex = url.indexOf("?");
//			sourceURI += url.substring(0, endIndex);
//			if (!StringUtils.isEmpty(url.substring(endIndex + 1))) {
//				sourceQueryString += url.substring(endIndex + 1);
//
//			}
//
//		} else {
//			sourceURI += url;
//		}
//		if (!StringUtils.isEmpty(historyTask.getProcessInstance())) {
//			sourceQueryString += "&entryId=" + historyTask.getProcessInstance();
//		}
//		if (!StringUtils.isEmpty(historyTask.getBusinessId())) {
//			sourceQueryString += "&id=" + historyTask.getBusinessId();
//		}
//		if (!StringUtils.isEmpty(historyTask.getExecutionId())) {
//			sourceQueryString += "&executionId=" + historyTask.getExecutionId();
//		}
//		if (!StringUtils.isEmpty(historyTask.getDbid())) {
//			sourceQueryString += "&taskId=" + historyTask.getDbid();
//		}
//		sourceQueryString = sourceQueryString.replaceAll("&", ";;;;");
//
//		//拼接完整的url
//		retUrl = portalURL+ sourceURI + "&" + sourceQueryString;
//
//		Object objParameter[] = new Object[] { appID, taskName, appTaskID, taskType,
//				appSendUID, appReceiveUID, sendTime, endTime, retUrl,
//				taskDesc, priority };
//
//
//        String resultMess = this.callByCxf(this.getPortalWebServiceUrl(),null, "addTask", objParameter);
//       /* Map<String,Object> map = this.resolveMessage(resultMess);
//        result = map.get("flag")+"";*/
//        return resultMess;
//    }
//
//
//    /**
//     * 向第三方系统修改数据
//     * 返回值为String类型，0表示失败，1表示成功，2表示超时
//     * @param historyTask
//     * @return
//     */
//    @Override
//    public String updateOtherSystemData(HistoryTaskImpl historyTask){
//        //调用第三方webservice修改数据
//        //String result = "0";
//
//        String appTaskID = historyTask.getDbid();//
//		//String workHandType=historyTask.getWorkhandType();
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//		//String todoowner = historyTask.getAssignee();
//		String handleTime = sdf.format(new Date());
//		//String state = historyTask.getState();
//		 Object[] objParameter = {appTaskID, appID,
//					handleTime};
//
//        String resultMess = this.callByCxf(this.getPortalWebServiceUrl(), null,"completeTask", objParameter);
//       /* Map<String,Object> map = this.resolveMessage(resultMess);
//        result = map.get("flag")+"";*/
//        return resultMess;
//    }
//
//    /**
//     * 删除第三方系统数据
//     * 返回值为String类型，0表示失败，1表示成功，2表示超时
//     * @param id
//     * @return
//     */
//    @Override
//    public String deleteOtherSystemData(String id){
//        //调用第三方webservice删除数据
//        //String result = "0";
//
//        Object[] objParameter = {id, appID, ""};
//        String resultMess = this.callByCxf(this.getPortalWebServiceUrl(),null, "cancelTask", objParameter);
//       /* Map<String,Object> map = this.resolveMessage(resultMess);
//        result = map.get("flag")+"";*/
//        return resultMess;
//    }
//
//}
