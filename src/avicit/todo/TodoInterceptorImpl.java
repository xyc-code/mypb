package avicit.todo;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.namespace.QName;

import org.apache.cxf.endpoint.Client;
import org.apache.cxf.jaxws.endpoint.dynamic.JaxWsDynamicClientFactory;
import org.drools.lang.DRLExpressions.neg_operator_key_return;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;

import com.alibaba.fastjson.JSONObject;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
//import avicit.lanfei.lanfeinoticetask.dto.LanfeiNoticeTaskDTO;
//import avicit.lanfei.lanfeinoticetask.service.LanfeiNoticeTaskService;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.bpmreform.service.BpmReformService;
import avicit.platform6.bpm.pvm.internal.history.model.HistoryTaskImpl;
import avicit.platform6.bpm.pvm.internal.util.TodoInterceptor;
import avicit.platform6.commons.utils.web.WsUtil;
import avicit.platform6.core.spring.SpringFactory;

public class TodoInterceptorImpl implements TodoInterceptor, LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(TodoInterceptorImpl.class);
	JaxWsDynamicClientFactory clientFactory = JaxWsDynamicClientFactory.newInstance();

	public static final String appID = "PB";



	SysUserAPI userLoader = SpringFactory.getBean("sysUserAPI");
	String applicationId = SessionHelper.getApplicationId();
	final String portalURL = sysProfileAPI.getProfileValueByCodeByAppId("portalURL", applicationId);
	final String portalWsURL = sysProfileAPI.getProfileValueByCodeByAppId("portalWsURL", applicationId);
	// LanfeiNoticeTaskService lanfeiNoticeTaskService =
	// SpringFactory.getBean(LanfeiNoticeTaskService.class);

	/*
	 * 说明：需在系统参数配置中增加下面配置PLATFORM_V6_TODO_INTERavicit.common.TodoInterceptorImpl
	 * 待办推送接口
	 */

	@Override
	public boolean insertTodo(HistoryTaskImpl arg0) {
		boolean result = false;
		String appTaskID = arg0.getDbid();// 待办id
		try {

			// http://portal.da.net/pf/login/login_da_cas.jsp?sourceURI=/pf/eform/bpmsCRUDClient/tobpm&sourceQueryString=formInfoId=40281181772cb45a01772e65ab2e018b;;;;tableName=DYN_VEHICLE_REQ;;;;version=V4;;;;entryId=948e834577fc2f310177fc4597ae015d;;;;id=948e834577fc2f310177fc454ea10159;;;;executionId=4028118177373de70177388368d30755.948e834577fc2f310177fc4597ae015d;;;;taskId=948e834577fc2f310177fc45c11c0181
			String taskName = arg0.getTaskTitle();
		
			String appSendUID = arg0.getTaskSendUser();
			String fromCodeName = arg0.getFormCode();
			String assignee = arg0.getAssignee();// 处理人，必需
			SysUser sysUser = sysUserLoader.getSysUserById(assignee);
			String appReceiveUID = sysUser.getLoginName();
			String endTime = "";
			String taskDesc = "";
			String sourceURI = "sourceURI=/pb/";
			String sourceQueryString = "sourceQueryString=";
			String retUrl = "";
			// String todoAppId = "OA";// 应用名称
			// String id = arg0.getBusinessId();
			// dtos =
			// lanfeiNoticeTaskService.queryLanfeiNoticeTaskByPrimaryKey(id);

			String url = arg0.getFormResourceName();// 待办事项处理链接，能够通过该链接直接定位到待办事项的处理界面
			if (url.indexOf("?") > 0) {
				int endIndex = url.indexOf("?");
				sourceURI += url.substring(0, endIndex);
				if (!StringUtils.isEmpty(url.substring(endIndex + 1))) {
					sourceQueryString += url.substring(endIndex + 1);

				}

			} else {
				sourceURI += url;
			}
			if (!StringUtils.isEmpty(arg0.getProcessInstance())) {
				sourceQueryString += "&entryId=" + arg0.getProcessInstance();
			}
			if (!StringUtils.isEmpty(arg0.getBusinessId())) {
				sourceQueryString += "&id=" + arg0.getBusinessId();
			}
			if (!StringUtils.isEmpty(arg0.getExecutionId())) {
				sourceQueryString += "&executionId=" + arg0.getExecutionId();
			}
			if (!StringUtils.isEmpty(arg0.getDbid())) {
				sourceQueryString += "&taskId=" + arg0.getDbid();
			}
			sourceQueryString = sourceQueryString.replaceAll("&", ";;;;");

			retUrl = portalURL + sourceURI + "&" + sourceQueryString;
			/*
			 * SysUser su = new SysUser(); su =
			 * userLoader.getSysUserById(todoownerId); String todoownerCode =
			 * su.getLoginName();
			 * 
			 * Map session = new HashMap(); String sessionId =
			 * ContextCommonHolder.getCookeMid(); if
			 * (StringUtils.hasText(sessionId)) { session =
			 * RedisSessionService.getInstance().getSessionById(sessionId); }
			 * String userId = (String) session.get("userId"); SysUser su2 = new
			 * SysUser(); su2 = userLoader.getSysUserById(userId); String
			 * todoSendUserCode = su2.getLoginName();
			 */
			String sendTime = avicit.platform6.commons.utils.DateUtil.format(arg0.getCreateTime(),
					"yyyy-MM-dd HH:mm:ss");
			String taskType = "";
			/*
			 * if (arg0.getTaskType() != null && arg0.getTaskType().equals("0"))
			 * {// 类型，0 待办 1待阅 可选 1-----1待办 2待阅 taskType = "1"; } else if
			 * (arg0.getTaskType() != null && arg0.getTaskType().equals("1")) {
			 * taskType = "2"; }
			 */
			if (arg0.getProcessDefName() != null && !arg0.getProcessDefName().equals("")) {
				taskType = arg0.getProcessDefName();
			}
			// String secondclassify = arg0.getProcessDefName();
			// String secondclassify =
			// bpmReformServiceImpl.getBpmFormViewByFormCodeInBpm(arg0.getFormCode()).getFormName();
			// BpmFormView
			// bfv=this.bpmReformServiceImpl.getBpmFormViewByFormCodeInBpm(arg0.getFormCode());
			// bpmReformServiceImpl.getb
			// if (bfv!=null){
			// secondclassify=bfv.getFormName();
			// }

			// dto.setIpriority((long) 1); // 0紧急 1急
			// 门户：0紧急 1急
			// 新OA：2紧急 1急 0一般
			// String priorityID=arg0.getPriority();
			String priorityID = "2";
			/*
			 * long ipr=9; if (priorityID==null || "".equals(priorityID) ||
			 * "0".equals(priorityID)){ ipr=9;//一般时同步过去为空，long不能设置null }else if
			 * ("1".equals(priorityID)){ ipr=1; }else if
			 * ("2".equals(priorityID)){ ipr=0; }
			 * 
			 * if(ipr==1 || ipr==0){ //dto.setIpriority(ipr); // 0紧急 1急 }
			 */

			Object obj[] = new Object[] { appID, taskName, appTaskID, taskType, appSendUID, appReceiveUID, sendTime,
					endTime, retUrl, taskDesc, priorityID };

			// String str = JSONObject.toJSON(list).toString();
			// WebServiceClient webServiceClient =
			// WebServiceClient.getSingletonInstance();
			// System.out.println("---------------load ... insertTodo.." );
			// webServiceClient.addTask(obj);
			// String portalWsURL =
			// sysProfileAPI.getProfileValueByCodeByAppId("portalURL",
			// applicationId);
			LOGGER.info(obj.toString());
			
			Client client = clientFactory.createClient(portalWsURL);
			QName opName = WsUtil.getOperationName(client.getEndpoint(), "addTask");
			Object[] res = client.invoke(opName, obj);
			// LOGGER.info("insertTodo:" + str);
		} catch (Exception e) {

			e.printStackTrace();
			result = false;
		}

		LOGGER.info("insertTodo appTaskID:" + appTaskID + " result:" + result);
		return result;
	}

	@Override
	public boolean updateTodo(HistoryTaskImpl arg0) {
		boolean result = false;
		String appTaskID = arg0.getDbid();// 待办id
		try {
			// List<Map<String, String>> list = new ArrayList<Map<String,
			// String>>();
			// Map<String, String> map = new HashMap<String, String>();

			// String todoAppId = "OA";// 应用名称

			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String todoowner = arg0.getAssignee();
			String handleTime = sdf.format(new Date());

			// String str = JSONObject.toJSON(list).toString();

			// System.out.println("---------------load ... updateTodo.." );

			String state = arg0.getState();
			// System.out.println("state:" + state );
			// 如果仅是更新内容，则把原来的待办完成，重新同步一条；否则视为完成
			// 解决工作移交拿回时委托人待办未同步问题
			// String portalWsURL =
			// sysProfileAPI.getProfileValueByCodeByAppId("portalURL",
			// applicationId);
			Client client = clientFactory.createClient(portalWsURL);
			QName opName = WsUtil.getOperationName(client.getEndpoint(), "completeTask");

			client.invoke(opName, new Object[] { appTaskID, appID, handleTime });

			if (!"completed".equals(state)) {

			}
			// System.out.println("---------------load ... updateTodo..over" );
			result = true;
			// LOGGER.info("updateTodo:" + str);
		} catch (Exception e) {
			e.printStackTrace();
			result = false;
		}
		LOGGER.info("updateTodo appTaskID:" + appTaskID + " result:" + result);
		return result;
	}

	@Override
	public boolean deleteTodo(List<HistoryTaskImpl> arg0) {
		boolean result = false;
		StringBuffer sb = new StringBuffer();
		try {
			// List<Map<String, String>> list = new ArrayList<Map<String,
			// String>>();
			// String todoAppId = "OA";// 应用名称
			// String portalWsURL =
			// sysProfileAPI.getProfileValueByCodeByAppId("portalURL",
			// applicationId);
			Client client = clientFactory.createClient(portalWsURL);

			for (int i = 0; i < arg0.size(); i++) {
				// Map<String, String> map = new HashMap<String, String>();
				String appTaskID = arg0.get(i).getDbid();// 待办id
				sb.append(appTaskID);
				// map.put("appTaskID", todoId);
				// map.put("appID", todoAppId);
				// list.add(map);
				// System.out.println("---------------load ... updateTodo..");

				QName opName = WsUtil.getOperationName(client.getEndpoint(), "cancelTask");
				try {
					client.invoke(opName, new Object[] { appTaskID, appID, "" });
				} catch (Exception e) {
					e.printStackTrace();
				}
				// System.out.println("调用webservice取消待办成功！");
				// System.out.println("---------------load ... deleteTodo..over"
				// );
			}
			result = true;
			// LOGGER.info("deleteTodo:" + str);
		} catch (Exception e) {
			e.printStackTrace();
			result = false;
		}
		LOGGER.info("deleteTodo appTaskID:" + sb.toString() + " result:" + result);
		return result;
	}
}
