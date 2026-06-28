package avicit.pb.partyorgplan;

import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.cmd.S;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.commons.utils.JsonUtil;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.mgate.util.HttpUtil;
import org.apache.http.client.HttpClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.util.Assert;
import org.springframework.util.CollectionUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CompanyPlan implements EventListener {
    Logger log = LoggerFactory.getLogger(StartPartyOrgPlanXfFlow.class);

    @Override
    public void notify(EventListenerExecution execution) throws Exception {
        //修改标题
        JdbcTemplate jdbcTemplate = SpringMVCFactory.getBean(JdbcTemplate.class);
        String formId = (String) execution.getVariable("ID");
        String sql = "select plan_name from DYN_SUB_DWGZJH_1 where id='" + formId + "'";
        String planName = jdbcTemplate.queryForObject(sql, String.class);
        String sqlN = "update  DYN_SUB_DWGZJHFJ_1 set plan_name='" + planName + "' where FK_SUB_COL_ID='" + formId + "'";
        jdbcTemplate.execute(sqlN);
        //为了领导能看到，启动流程
        String sqlQuery = "select * from DYN_SUB_DWGZJHFJ_1 where FK_SUB_COL_ID='" + formId + "'";
        List<Map<String, Object>> mapList = jdbcTemplate.queryForList(sqlQuery);
        if (!CollectionUtils.isEmpty(mapList)) {
            String processDefId = "948e83e3936c67150193703d44743581-1";//流程定义id
            String formCode = "jcdzbjh";
            String jsonString = "";//表单之外的参数
            for (Map<String, Object> map : mapList) {
                String id = map.get("id").toString();
                String userId = map.get("MAIN_FZR").toString();
                String deptSql = "select dept_id from  sys_user_dept_position where USER_ID='" + userId + "' and rownum=1";
                String deptId = jdbcTemplate.queryForObject(deptSql, String.class);
                //封装启动流程所需的参数
                Map<String, Object> parameter = new HashMap<String, Object>();
                parameter.put("processDefId", processDefId);
                parameter.put("formCode", formCode);
                parameter.put("jsonString", jsonString);
                parameter.put("userId", userId);
                parameter.put("deptId", deptId);
                StartResultBean result = insertPartyWorkPlanXfStartProcess(map, parameter, id);
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
