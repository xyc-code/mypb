package avicit.pb.partyorgplan;

import avicit.platform6.api.sysautocode.SysAutoCodeAPI;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.SysUserDeptPositionAPI;
import avicit.platform6.bpm.api.BpmVariableKey;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.identity.impl.UserImpl;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.DateUtil;
import avicit.platform6.commons.utils.JsonUtil;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.collections.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.util.Assert;

import java.util.*;

/**
 * 党组织工作计划下发，到部门  承接
 */
public class StartPartyOrgPlanXfFlow implements EventListener {

    Logger log = LoggerFactory.getLogger(StartPartyOrgPlanXfFlow.class);

    //该属性值可以由设计器设置
    String msg;

    public void notify(EventListenerExecution execution) {
        JdbcTemplate jdbcTemplate = SpringMVCFactory.getBean(JdbcTemplate.class);

        SysAutoCodeAPI autoCodeApi = SpringMVCFactory.getBean(SysAutoCodeAPI.class);

        //流程执行Id
        String executionId = execution.getId();
        //流程实例Id
        String processInstanceId = execution.getProcessInstanceId();
        //业务表单Id，可能是大写，这是由开发模块的方式决定的，jdbc addon保存的是ID
        //业务表单Id,可能是小写，这是由开发模块的方式决定的
        String formId = (String) execution.getVariable("id");
        //流程节点名称
        UserImpl user = (UserImpl) execution.getVariable(BpmVariableKey.USER);
        BpmsControlUtils bpmsControlUtils = SpringMVCFactory.getBean(BpmsControlUtils.class);
        TableData td = new TableData();
        td.setTableName("DYN_WORK_PLAN");//党组织工作计划
        td.setPrimaryKeyValue(formId);
        Map<String, Object> workMap = bpmsControlUtils.getData(td);
        SysUserAPI sysUserAPI = SpringMVCFactory.getBean(SysUserAPI.class);
        SysUserDeptPositionAPI sysUserDeptPositionAPI = SpringMVCFactory.getBean(SysUserDeptPositionAPI.class);
        SysLookupAPI sysLookupAPI = SpringMVCFactory.getBean(SysLookupAPI.class);
        List<String> ids = new ArrayList<>();//流程启动id
        if (workMap != null) {
            String lookUpCodes = MapUtils.getString(workMap, "RESPONSIBLE_DEPA");//党群部门承接
            String title = MapUtils.getString(workMap, "NAME");//标题

            String lookUpCode[] = lookUpCodes.split(",");
            for (String code : lookUpCode) {

                //  String lookUpName=sysLookupAPI.getNameByLooupTypeCodeAndLooupCode("RESPONSIBLE_DEPA",code);


                List<Map<String, Object>> gxList = jdbcTemplate.queryForList("select * from DYN_PARTY_PLAN_GXB t where t.DEPT_NAME='" + code + "'");
                for (Map<String, Object> gxMap : gxList) {
                    String bzUserId = MapUtils.getString(gxMap, "BZ");//部长


                    String deptId = sysUserDeptPositionAPI.getChiefDeptIdBySysUserId(bzUserId);
                    String id = ComUtil.getId();
                    ids.add(id);
                    StringBuffer sql = new StringBuffer();
                    sql.append("INSERT INTO DYN_SUB_DWGZJH_1(");
                    sql.append("ID,");
                    sql.append("XF_PLAN_DATE,");//下发计划时间
                    //sql.append("WORK_MB,");//工作目标
                    // sql.append("PLAN_E_DATE,");//计划结束时间
                    // sql.append("PLAN_S_DATE,");//计划开始时间
                    // sql.append("DATA_5,");//工作内容
                    // sql.append("GZRW,");//工作任务
                    sql.append("STATUS,");//状态
                    sql.append("ZRDW,");//责任单位
                    sql.append("FK_SUB_COL_ID,");//外键
                    // sql.append("GZLB,");//工作类别
                    sql.append("LAST_UPDATE_DATE,");//
                    sql.append("CREATION_DATE,");//
                    sql.append("CREATED_DEPT,");//
                    sql.append(" LAST_UPDATE_IP, ");//
                    sql.append("CREATED_BY,");//
                    sql.append("LAST_UPDATED_BY,");//
                    sql.append("VERSION,");
                    sql.append("ORG_IDENTITY,");
                    sql.append("PLAN_NAME");
                    sql.append(")");//
                    sql.append("VALUES(");
                    sql.append("'").append(id).append("'").append(",");//
                    sql.append(" sysdate").append(",");//下发计划时间
                    sql.append("'").append("进行中").append("'").append(",");
                    sql.append("'").append(code).append("'").append(",");//责任单位
                    sql.append("'").append(formId).append("'").append(",");//外键
                    sql.append(" to_date('").append(DateUtil.getDateStr(new Date())).append("','yyyy-MM-dd')").append(",");
                    sql.append(" to_date('").append(DateUtil.getDateStr(new Date())).append("','yyyy-MM-dd')").append(",");

                    sql.append("'").append(deptId).append("'").append(",");
                    sql.append("'").append("system").append("'").append(",");
                    sql.append("'").append(bzUserId).append("'").append(",");
                    sql.append("'").append(bzUserId).append("'").append(",");
                    sql.append(0).append(",");
                    sql.append("'").append("ORG_ROOT").append("'").append(",");
                    sql.append("'").append(title).append("'");
                    sql.append(")");
                    jdbcTemplate.execute(sql.toString());


                }


            }

        }


        //下发到承接部门
        for (String id : ids) {
            List<Map<String, Object>> cjMap = jdbcTemplate.queryForList("select * from DYN_SUB_DWGZJH_1 t where t.id='" + id + "'");

            for (Map<String, Object> mapDTO : cjMap) {
                String pkId = MapUtils.getString(mapDTO, "ID");
                Map<String, Object> map = new HashMap<String, Object>();
                String processDefId = "2c908c5290b4c15f0190b54eeec00cad-1";//流程定义id
                String formCode = "dwgzjhfj";
                String jsonString = "";//表单之外的参数
                try {

                    //调用校验工具类，校验数据
                    String userId = MapUtils.getString(mapDTO, "CREATED_BY");
                    String deptId = MapUtils.getString(mapDTO, "CREATED_DEPT");
                    //封装启动流程所需的参数
                    Map<String, Object> parameter = new HashMap<String, Object>();
                    parameter.put("processDefId", processDefId);
                    parameter.put("formCode", formCode);
                    parameter.put("jsonString", jsonString);
                    parameter.put("userId", userId);
                    parameter.put("deptId", deptId);
                    //  dynXfgFqDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
                    StartResultBean result = insertPartyWorkPlanXfStartProcess(mapDTO, parameter, id);
                    //map.put("flag", PlatformConstant.OpResult.success);
                    //map.put("startResult", result);
                } catch (Exception ex) {
                    ex.printStackTrace();
                    //map.put("errorMsg", ex.getMessage());
                    // map.put("flag", PlatformConstant.OpResult.failure);
                }
            }

        }


    }

    public StartResultBean insertPartyWorkPlanXfStartProcess(Map<String, Object> bean, Map<String, Object> parameter, String id) throws Exception {
        try {
            Assert.notNull(parameter, "启动流程失败，请传递流程启动参数！");
            String processDefId = (String) parameter.get("processDefId");
            String formCode = (String) parameter.get("formCode");
            String jsonString = (String) parameter.get("jsonString");
            String userId = (String) parameter.get("userId");
            String deptId = (String) parameter.get("deptId");
            Assert.hasText(processDefId, "启动流程失败，请传递流程启动参数！");
            //保存业务数据
            // this.insertDynXfgFq(bean);
            //声明流程变量
            Map<String, Object> variables = new HashMap<String, Object>();
            //将表单之外的参数转换成map存入流程变量
            if (jsonString != null && !"".equals(jsonString)) {
                Map<String, Object> extVariables = JsonUtil.parseJSON2Map((String) jsonString);
                variables.putAll(extVariables);
            }
            //将表单对象转换成map存入流程变量
            // Map<String, Object> pojoMap = (Map<String, Object>) PojoUtil.toMap(bean);
            variables.putAll(bean);

            BpmOperateService bpmOperateService = SpringMVCFactory.getBean(BpmOperateService.class);
            BusinessService businessService = SpringMVCFactory.getBean(BusinessService.class);
            String processInstanceId = bpmOperateService.startProcessInstanceById(processDefId, formCode, userId, deptId, variables);
            return businessService.getStartResultBean(processInstanceId, id, userId);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("insertPartyWorkPlanXfStartProcess出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }
}
