
package avicit.test.test3.controller;

import avicit.platform6.api.commonselect.ZTreeNode;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.sysautocode.SysAutoCodeAPI;
import avicit.platform6.api.syspermissionresource.SysPermissionResourceAPI;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.FileUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.rest.client.RestClient;
import avicit.platform6.core.rest.client.RestClientConfig;
import avicit.platform6.core.rest.msg.*;
import org.apache.commons.lang3.StringUtils;
import avicit.platform6.core.rest.msg.ResponseStatus;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.expression.ExpressionParser;
import avicit.platform6.core.dao.dynamicdatasource.Dbs;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import avicit.test.test3.dto.DynTestDto;
import avicit.test.test3.service.Test3TestService;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.GenericType;
import java.io.IOException;
import java.sql.Clob;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.Map.Entry;

@Controller
@RequestMapping(value = "/avicit/test/Test3TestController")
public class Test3TestController {
	private static Logger logger = LoggerFactory.getLogger(Test3TestController.class);

	@Autowired
	private Test3TestService service;

	@Autowired
	private BpmOperateService bpmOperateService;

	@Autowired
	private BusinessService businessService;

	//流程跳转
	
	@RequestMapping(value = "/toTest3Test", method = RequestMethod.GET)
	public ModelAndView toTest3Test(
			HttpServletRequest request,
			String id,
			String formInfoId,
			@CookieValue(value = PlatformConstant.COOKIE_CURRENT_LANGUAGE_CODE, defaultValue = PlatformConstant.D_LANGUAGE) String langcode)
			throws Exception {
		ModelAndView mv = new ModelAndView();
		Map<String,Object> session = getSessionParam(request);
		String sessionString = JsonHelper.getInstance().writeValueAsString(session);

		String addPath = "avicit/test/test3/test";
		mv.setViewName(addPath);
		String theString = "";
		if (org.springframework.util.StringUtils.isEmpty(id)){
			id = ComUtil.getId();
			//isInsert = "true";
		}else{
			DynTestDto dto = this.service.queryDynTestByPrimaryKey(id);
			this.service.getDynTestDtoResult(dto,request,langcode);
			mv.addObject("map",dto);
		}
		sessionString = sessionString.replaceAll("\\\\", "\\\\\\\\");
        sessionString = sessionString.replaceAll("\"", "\\\\\"");
        sessionString = sessionString.replaceAll("\'", "\\\\\'");

		mv.addObject("comId", id);
		mv.addObject("idmap", "{}");
		mv.addObject("datasourceId","dataSource");
		mv.addObject("maintableId","402811817e51063f017e53db6feb0307");
		mv.addObject("session",sessionString );
		mv.addObject("entryId", request.getParameter("entryId"));
		return mv;
	}
	



@RequestMapping(value = "/toTest3TestPrint", method = RequestMethod.GET)
public ModelAndView toTest3TestPrint(
HttpServletRequest request,
String id,
String formInfoId,
@CookieValue(value = PlatformConstant.COOKIE_CURRENT_LANGUAGE_CODE, defaultValue = PlatformConstant.D_LANGUAGE) String langcode)
throws Exception {
ModelAndView mv = new ModelAndView();

String grid = request.getParameter("grid");
if (StringUtils.isEmpty(grid)) {
grid = "";
}

String fkcol = request.getParameter("fkcol");
if (StringUtils.isEmpty(fkcol)) {
fkcol = "";
}

String fkvalue = request.getParameter("fkvalue");
if (StringUtils.isEmpty(fkvalue)) {
fkvalue = "";
}

String isViewForm = request.getParameter("isviewform");
if (StringUtils.isEmpty(isViewForm)) {
isViewForm = "";
}

String type = request.getParameter("type");
if (StringUtils.isEmpty(type)) {
type = "";
}

String parentNodeId = request.getParameter("parentNodeId");
if (StringUtils.isEmpty(parentNodeId)) {
parentNodeId = "";
}

String pNodeIdValue = request.getParameter("pNodeIdValue");
if (StringUtils.isEmpty(pNodeIdValue)) {
pNodeIdValue = "";
}
Map<String,Object> session = getSessionParam(request);
String sessionString = JsonHelper.getInstance().writeValueAsString(session);

String addPath = "avicit/test/test3/testPrint";
mv.setViewName(addPath);
String theString = "";
if (org.springframework.util.StringUtils.isEmpty(id)){
id = ComUtil.getId();
//isInsert = "true";
}else{
DynTestDto dto = this.service.queryDynTestByPrimaryKey(id);
this.service.getDynTestDtoResult(dto,request,langcode);
mv.addObject("map",dto);
}
sessionString = sessionString.replaceAll("\\\\", "\\\\\\\\");
sessionString = sessionString.replaceAll("\"", "\\\\\"");
sessionString = sessionString.replaceAll("\'", "\\\\\'");

mv.addObject("comId", id);
mv.addObject("idmap", "{}");
mv.addObject("datasourceId","dataSource");
mv.addObject("maintableId","402811817e51063f017e53db6feb0307");
mv.addObject("session",sessionString );
mv.addObject("grid", grid);
mv.addObject("fkcol", fkcol);
mv.addObject("fkvalue", fkvalue);
mv.addObject("isviewform", isViewForm);
mv.addObject("type", type);
mv.addObject("parentNodeId", parentNodeId);
mv.addObject("pNodeIdValue", pNodeIdValue);
return mv;
}



@RequestMapping(value = "/toTest3TestAdd", method = RequestMethod.GET)
public ModelAndView toTest3TestAdd(
HttpServletRequest request,
String id,
String formInfoId,
@CookieValue(value = PlatformConstant.COOKIE_CURRENT_LANGUAGE_CODE, defaultValue = PlatformConstant.D_LANGUAGE) String langcode)
throws Exception {
ModelAndView mv = new ModelAndView();

String grid = request.getParameter("grid");
if (StringUtils.isEmpty(grid)) {
grid = "";
}

String fkcol = request.getParameter("fkcol");
if (StringUtils.isEmpty(fkcol)) {
fkcol = "";
}

String fkvalue = request.getParameter("fkvalue");
if (StringUtils.isEmpty(fkvalue)) {
fkvalue = "";
}

String isViewForm = request.getParameter("isviewform");
if (StringUtils.isEmpty(isViewForm)) {
isViewForm = "";
}

String type = request.getParameter("type");
if (StringUtils.isEmpty(type)) {
type = "";
}

String parentNodeId = request.getParameter("parentNodeId");
if (StringUtils.isEmpty(parentNodeId)) {
parentNodeId = "";
}

String pNodeIdValue = request.getParameter("pNodeIdValue");
if (StringUtils.isEmpty(pNodeIdValue)) {
pNodeIdValue = "";
}
Map<String,Object> session = getSessionParam(request);
String sessionString = JsonHelper.getInstance().writeValueAsString(session);

String addPath = "avicit/test/test3/testAdd";
mv.setViewName(addPath);
String theString = "";
if (org.springframework.util.StringUtils.isEmpty(id)){
id = ComUtil.getId();
//isInsert = "true";
}else{
DynTestDto dto = this.service.queryDynTestByPrimaryKey(id);
this.service.getDynTestDtoResult(dto,request,langcode);
mv.addObject("map",dto);
}
sessionString = sessionString.replaceAll("\\\\", "\\\\\\\\");
sessionString = sessionString.replaceAll("\"", "\\\\\"");
sessionString = sessionString.replaceAll("\'", "\\\\\'");

mv.addObject("comId", id);
mv.addObject("idmap", "{}");
mv.addObject("datasourceId","dataSource");
mv.addObject("maintableId","402811817e51063f017e53db6feb0307");
mv.addObject("session",sessionString );
mv.addObject("grid", grid);
mv.addObject("fkcol", fkcol);
mv.addObject("fkvalue", fkvalue);
mv.addObject("isviewform", isViewForm);
mv.addObject("type", type);
mv.addObject("parentNodeId", parentNodeId);
mv.addObject("pNodeIdValue", pNodeIdValue);
return mv;
}


	private static Map<String,String> getUrlParaMap(String urlparam){
	   Map<String,String> map = new HashMap<String,String>();
	   String[] param =  urlparam.split("&");
	   for(String keyvalue:param){
	      String[] pair = keyvalue.split("=");
	      if(pair.length==2){
	         map.put(pair[0], pair[1]);
	      }
	   }
	   return map;
	}

	//流程首次保存
	
	@ResponseBody
	@RequestMapping(value = "/insertBpmTest3Test", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
	public String insertBpmTest3Test(
			HttpServletRequest request,
			String tableId,
			String formInfoId,
			@CookieValue(value = PlatformConstant.COOKIE_CURRENT_LANGUAGE_CODE, defaultValue = PlatformConstant.D_LANGUAGE) String langcode) {
		String comId = request.getParameter("comId");
		String defineId = ServletRequestUtils.getStringParameter(request, "defineId", "");
		String formcode = ServletRequestUtils.getStringParameter(request, "formcode", "");
		StartResultBean startResultBean = null;
		Map<String,String> idMap = new HashMap<String,String>();
		Map<String,Object> result = new HashMap<String,Object>();
		try {
			Map tableDataMap = request.getParameterMap();
			if (tableDataMap != null) {
                tableDataMap = this.mapConvert(tableDataMap);
            }
			String json = JsonHelper.getInstance().writeValueAsString(tableDataMap);
			String orgIdentity = SessionHelper.getCurrentOrgIdentity(request);
			DynTestDto dto = JsonHelper.getInstance().readValue(json, new TypeReference<DynTestDto>(){});
			dto.setID(comId);
            			dto.setORG_IDENTITY(orgIdentity);
            
            Map<String, Object> variables = new HashMap<String,Object>();
																																																																								variables.put("id", comId);

            String processInstanceId = bpmOperateService
						.startProcessInstanceById(defineId, formcode,
								SessionHelper.getLoginSysUserId(request),
								SessionHelper.getCurrentDeptId(request), variables);
			startResultBean = businessService.getStartResultBean(processInstanceId, comId, SessionHelper.getLoginSysUserId(request));

            String msg ="";
            try{
				msg = this.service.doSaveForm(tableDataMap,dto,orgIdentity);
			}catch(Exception e){
				e.printStackTrace();
				String flowId = this.bpmOperateService.getInstanceIdByFormid(comId);
				this.bpmOperateService.deleteProcessInstanceCascade(flowId);
				result.put("success", false);
				result.put("msg",e.toString());
				result.put("id", "");
				return JsonHelper.getInstance().writeValueAsString(result);
			}
			if(msg != null && !"".equals(msg)){
				String flowId = this.bpmOperateService.getInstanceIdByFormid(comId);
				this.bpmOperateService.deleteProcessInstanceCascade(flowId);
				result.put("success", false);
				result.put("msg", msg);
				result.put("id", "");
				return JsonHelper.getInstance().writeValueAsString(result);
			}

		} catch (Exception e) {
			e.printStackTrace();
			result.put("success", false);
			result.put("msg", e.getMessage());
			result.put("id", "");
			return JsonHelper.getInstance().writeValueAsString(result);
		}
		result.put("success", true);
		result.put("msg", "");
		result.put("id", comId);
		result.put("startResult",startResultBean);
		return JsonHelper.getInstance().writeValueAsString(result);
	}
    

	//非首次保存流程
	
	@ResponseBody
	@RequestMapping(value = "/updateBpmTest3Test", method = RequestMethod.POST)
	public String updateBpmTest3Test(HttpServletRequest request, String version, String id, String tableId, String pdId,
			String formInfoId,
			@CookieValue(value = PlatformConstant.COOKIE_CURRENT_LANGUAGE_CODE, defaultValue = PlatformConstant.D_LANGUAGE) String langcode) {
		Map<String,Object> result = new HashMap<String,Object>();
		try {
			Map tableDataMap = request.getParameterMap();

            if (tableDataMap != null) {
                tableDataMap = this.mapConvert(tableDataMap);
            }
    		String orgIdentity = SessionHelper.getCurrentOrgIdentity(request);
			String json = JsonHelper.getInstance().writeValueAsString(tableDataMap);
			DynTestDto dto = JsonHelper.getInstance().readValue(json, new TypeReference<DynTestDto>(){});
			dto.setID(id);
            			dto.setORG_IDENTITY(orgIdentity);
            			String msg = this.service.doSaveForm(tableDataMap,dto,orgIdentity);
			if(msg != null && !"".equals(msg)){
				result.put("success", false);
				result.put("msg", msg);
				result.put("id", "");
				return JsonHelper.getInstance().writeValueAsString(result);
			}
			String executionId = bpmOperateService.getInstanceIdByFormid(id);
			if (executionId != null && !"".equals(executionId)) {
				Map<String, Object> variables = new HashMap<String,Object>();
																																																																																																businessService.setVariables(executionId, variables);
			}
		} catch (Exception e) {
			e.printStackTrace();
			result.put("success", false);
			result.put("msg", e.getMessage());
			result.put("id", "");
			return JsonHelper.getInstance().writeValueAsString(result);
		}
		result.put("success", true);
		result.put("msg", "");
		result.put("id", id);
		return JsonHelper.getInstance().writeValueAsString(result);
	}
	

	private Map<String,Object> getSessionParam(HttpServletRequest request){
    	Map<String,Object> session = new HashMap<String,Object>();
		String orgIndentity = SessionHelper.getCurrentOrgIdentity(request);
		session.put("orgIndentity", orgIndentity);
		String userId = SessionHelper.getLoginSysUserId(request);
		session.put("userId", userId);
		String deptName = SessionHelper.getCurrentDeptName(request);
		session.put("deptName", deptName);
		String deptId = SessionHelper.getCurrentDeptId(request);
		session.put("deptId", deptId);
		SysUser loginuser = SessionHelper.getLoginSysUser(request);
		session.put("user", loginuser);
		String userName = loginuser.getName();
		session.put("userName", userName);
		String loginName = loginuser.getLoginName();
		session.put("loginName", loginName);
		String appId = RestClientConfig.systemid();
		session.put("appId", appId);
		return session;
    }

	public static Map<String,Object> mapConvert(Map map) {
    	Map<String,Object> dataMap= new HashMap<String, Object>(0);
        if(map!=null){
	        Iterator it=map.entrySet().iterator();
	        while(it.hasNext()){
		        Map.Entry entry=(Map.Entry)it.next();
		        Object ok=entry.getKey();
		        Object ov=entry.getValue()==null?"":entry.getValue();
		        String key=ok.toString();
		        String keyval="";
		        String[] value=new String[1];
                if(ov instanceof String[]){
                    value=(String[])ov;
                }else{
                    value[0]=ov.toString();
                }
                keyval+=value[0];
                for(int k=1;k<value.length;k++){
                    keyval+=","+value[k];
                }
                dataMap.put(key, keyval);
	        }
        }
        return dataMap;
    }
}
