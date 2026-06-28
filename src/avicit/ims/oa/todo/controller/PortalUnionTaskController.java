package avicit.ims.oa.todo.controller;


import avicit.ims.oa.todo.service.PortalTaskService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.pvm.internal.util.StringUtil;
import avicit.platform6.bpm.web.service.BpmOperateService;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.properties.PlatformProperties;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;

import com.alibaba.fastjson.JSON;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Pattern;

//门户统一待办主动调用接口
@RestController
@RequestMapping("ims/oa/todo/uniontask")
public class PortalUnionTaskController implements LoaderConstant {
    private static final Logger LOGGER = LoggerFactory.getLogger(PortalUnionTaskController.class);
    String restTodoUrl = PlatformProperties.getProperty("platform.todo");
    String portalUrl = PlatformProperties.getProperty("platform.portal.url");
    String portalUsername = PlatformProperties.getProperty("platform.portal.todo.username");
    String portalPassword = PlatformProperties.getProperty("platform.portal.todo.password");
    String todoAppId = PlatformProperties.getProperty("platform.todo.appid");
    String  todoCasEnable =PlatformProperties.getProperty("platform.portal.todo.casenable");
    String  hiddenSecret =PlatformProperties.getProperty("platform.portal.todo.hidden.secret");

    @Autowired
    PortalTaskService portalTaskService;

  
    @Autowired
    BpmOperateService bpmOperateService;
/*
请求参数示例：
   {
    "username":"portal",
    "password":"202cb962ac59075b964b0",
    "userId":"1913001",
    "currPage":"1",
    "pageSize":"5",
    "toDoOrRead":"0",
    "title":"标题查询",
    "startTime":"2021-01-01",
    "endTime":"2021-12-12"
    }
*/
    @PostMapping("pendingWork")
    public String pendingWork(@RequestBody Map<String,String> params, HttpServletRequest request) {
        Map<String,Object> result = new HashMap<>();

        //门户提供的用户名 密码 参数校验
        String username = params.get("username");
        String password = params.get("password");
        String appID = params.get("appID");
        if(null==username||!username.equals(portalUsername)){
            result.put("success","false");
            result.put("message","失败，username参数错误!");
            return  JSON.toJSONString(result);
        }
        if(null==password||!password.equals(portalPassword)){
            result.put("success","false");
            result.put("message","失败，password参数错误!");
            return  JSON.toJSONString(result);
        }

        //用户校验
        String userLoginName = params.get("userId");
        SysUser user = null;
        if(userLoginName!=null&&!"".equals(userLoginName)){
            user=sysUserLoader.getSysUserByLoginName(userLoginName);
        }else{
            result.put("success","false");
            result.put("message","失败，userId参数错误!");
            return  JSON.toJSONString(result);
        }
        if(user==null){
            result.put("success","false");
            result.put("message","失败，用户["+userLoginName+"]不存在!");
            return  JSON.toJSONString(result);
        }

        //日期格式校验
        String patternDate ="^[1-9]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$";
        String patternDatetime ="^[1-9]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\\s+(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d$";
        String startTime = params.get("startTime");
        String endTime = params.get("endTime");
        if(startTime!=null&&!"".equals(startTime)){
            boolean stimeValid = Pattern.matches(patternDate,startTime);
            if(!stimeValid){
                result.put("success","false");
                result.put("message","失败，日期参数格式不正确!");
                return  JSON.toJSONString(result);
            }else {
                startTime+=" 00:00:00";
            }
        }

        if(endTime!=null&&!"".equals(endTime)){
            boolean etimeValid = Pattern.matches(patternDate,endTime);
            if(!etimeValid){
                result.put("success","false");
                result.put("message","失败，日期参数格式不正确!");
                return  JSON.toJSONString(result);
            }else {
                endTime+=" 23:59:59";
            }
        }
        //分页参数校验
        String currPage=params.get("currPage");
        String pageSize=params.get("pageSize");
        String patternInt = "^\\d+$";
        int currPageInt =1;
        int pageSizeInt=20;
        if(currPage!=null&&pageSize!=null){
            boolean curValid = Pattern.matches(patternInt,currPage);
            boolean pagValid = Pattern.matches(patternInt,pageSize);
            if(!curValid||!pagValid){
                result.put("success","false");
                result.put("message","失败，分页参数格式不正确!");
                return  JSON.toJSONString(result);
            }else {
                currPageInt=Integer.parseInt(currPage);
                pageSizeInt=Integer.parseInt(pageSize);
            }
        }else{
            result.put("success","false");
            result.put("message","失败，分页参数不正确!");
            return  JSON.toJSONString(result);
        }
        String taskType=params.get("toDoOrRead");
        String title= params.get("title");

        try {



            Page<Map<String, Object>> pageData= portalTaskService.searchPortalTaskByPage(user.getId(),taskType,startTime,endTime,
                    title,currPageInt,pageSizeInt);
            result.put("success","true");
            result.put("message","成功");
            result.put("totalnumber",pageData.getTotal());
            result.put("pagenumber",pageData.getPageNum());
            result.put("pages",pageData.getPages());
            result.put("pagesize",pageData.getPageSize());
            List<Map<String,Object>> dataList = pageData.getResult();
            List<Map<String,Object>> taskList = new ArrayList<>();
            if(dataList!=null&&dataList.size()>0){
                for (Map<String, Object> item : dataList) {
                    Map<String,Object> taskItem = new HashMap<>();
                    String workhand_user_name = String.valueOf(item.get("WORKHAND_USER_NAME"));
                    String prefix = "";
                    if (null!=item.get("WORKHAND_TYPE_")&&!"".equals(item.get("WORKHAND_TYPE_"))&&!"null".equals(item.get("WORKHAND_TYPE_"))) {
                        if ("s".equals(String.valueOf(item.get("WORKHAND_TYPE_")))) {
                            prefix = "(受"+workhand_user_name+"委托办理)";
                        } else if ("w".equals(String.valueOf(item.get("WORKHAND_TYPE_")))) {
                            prefix = "(委托给"+workhand_user_name+"办理)";
                        }
                    }

                    String taskName = "";
                    if(null==item.get("TASK_TITLE_")||"".equals(item.get("TASK_TITLE_"))||"null".equals(item.get("TASK_TITLE_"))){
                        taskItem.put("taskName",prefix + item.get("PROCESS_DEF_NAME_"));
                    }else {
                        taskName = String.valueOf(item.get("TASK_TITLE_"));
                        taskItem.put("taskName",prefix + taskName);
                    }
                    taskItem.put("appSendName",item.get("TASK_SENDUSER_"));
                    String utaskType = "";
                    if (item.get("PROCESS_DEF_NAME_") != null) {
                        utaskType = String.valueOf(item.get("PROCESS_DEF_NAME_"));
                    }
                    taskItem.put("taskType", utaskType);
                    taskItem.put("sendTime",item.get("SEND_TIME"));

                    String open_ = "";
                    if (item.get("OPEN_") == null) {
                        open_ = "unread";
                    }

                    taskItem.put("endTime",open_);
                    //紧急程度相反
                    String itemPriority = String.valueOf(item.get("PRIORITY_"));
                    if ("0".equals(itemPriority)){
                        taskItem.put("priority","2");
                    }else if ("2".equals(itemPriority)){
                        taskItem.put("priority","0");
                    }else {
                        taskItem.put("priority",String.valueOf(itemPriority));
                    }


                    if(null!=item.get("DESCR_")){
                        taskItem.put("taskDesc",item.get("DESCR_"));
                    }else {
                        taskItem.put("taskDesc","");
                    }


                    //url处理
                    String formUrl = (String) item.get("FORM_");//待办URL
                    // 待阅跳转jsp进入
                    if(null != item.get("STATE_") && "reader".equals(String.valueOf(item.get("STATE_")))){
                        formUrl = "avicit/platform6/bpmreform/bpmbusiness/todo/portal2Read.jsp?readerUrl=" + formUrl;
                    }

                    String url = "";
                    /*20240624 张国庆  增加 由原来的拼接改为一下地址*/
                    String formUrlWithParam="platform/bpm/business/detail?id=" + item.get("TASK_B_ID_")+ "&extType=0";
                   /* if(StringUtils.isNotEmpty(formUrl)){
                    	formUrl = formUrl.replace("?", "&sourceQueryString=").replace("&",";;;;").replaceFirst(";;;;","&");

                    	formUrlWithParam=formUrl+";;;;entryId="+item.get("PROCINST_")+";;;;id="+item.get("TASK_B_ID_")+";;;;executionId="+item.get("EXECUTION_")+";;;;taskId="+item.get("DBID_");
                    	
                    }
                   */
                    //url作为url参数需要encode
                    if("true".equals(todoCasEnable)){
                        url=portalUrl+ URLEncoder.encode(formUrlWithParam,"UTF-8");
                    }else{
                        url=portalUrl+formUrlWithParam;
                    }
                    //json传递url需要endcode
//                    taskItem.put("url",URLEncoder.encode(url,"UTF-8"));
                    System.out.println(url);
                    taskItem.put("url",url);

                    //涉密标题处理
                    if(hiddenSecret!=null&&!"".equals(hiddenSecret)){
                        if(null!=item.get("SECRET_LEVEL")&&!"".equals(item.get("SECRET_LEVEL"))){
                            String secretlevel = (String) item.get("SECRET_LEVEL");
                            if(hiddenSecret.contains(secretlevel)){
                                taskItem.put("taskName",sysProfileAPI.getProfileValueByCode("PORTAL_TODO_HID_TITLE"));
                            }
                        }
                    }


//                    taskItem.put("taskName",titleFmt);
                    taskList.add(taskItem);
                }

            }
            result.put("pendingwork",taskList);

            return  JSON.toJSONString(result);
        } catch (Exception e) {
            e.printStackTrace();
            result.put("success","false");
            result.put("message","失败，获取数据异常!");
            return  JSON.toJSONString(result);
        }


    }
}
