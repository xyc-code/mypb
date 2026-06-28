package avicit.pb.partyorgplan.controller;


import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.SysUserDeptPositionAPI;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmclient.dto.org.Membership;
import avicit.platform6.bpmclient.dto.sys.WorkHandUsers;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eform.EformConstant;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import avicit.platform6.eformbpms.utils.BpmsEditorUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.*;


/**
 * 党委工作计划，更新状态
 */
@Controller
@Scope("prototype")
@RequestMapping("/avicit/pb/partyorgplan/updateStatusController")
public class UpdateStatusController implements LoaderConstant {
    private static final Logger LOGGER = LoggerFactory.getLogger(UpdateStatusController.class);
    @Autowired
    public BpmsEditorUtils bpmsEditorUtils;
    @Autowired
    private BusinessService businessService;
    @Autowired
    private BpmOperateService bpmOperateService;
    @Autowired
    private SysUserDeptPositionAPI sysUserDeptPositionAPI;
    /* *//**
     * 更新状态,只能更新一个字符串的字段
     *
     * @param request
     * @return
     *//*
    @RequestMapping(value = "/operation/updateJcFkStatus", method = RequestMethod.POST)
    public ModelAndView toUpdateJcFkStatus(HttpServletRequest request) {
        JdbcTemplate jdbcTemplate = SpringMVCFactory.getBean(JdbcTemplate.class);
        ModelAndView mav = new ModelAndView();

        String formId = ServletRequestUtils.getStringParameter(request, "formId", "");

        //结束流程
        String sql = "select dbid_ from bpm_hist_task_v t1 WHERE 1=1 and t1.task_b_id_ ='" + formId + "' order by t1.create_ desc";
        String taskId = jdbcTemplate.queryForObject(sql, String.class);

        String excutionSql = "select execution_ from bpm_hist_task_v t1 WHERE 1=1 and t1.task_b_id_ ='" + formId + "' order by t1.create_ desc";
        String excutionId = jdbcTemplate.queryForObject(excutionSql, String.class);

        String instanceSql = "select instance_ from bpm_execution where id_='" + excutionId + "'";
        String instanceId = jdbcTemplate.queryForObject(instanceSql, String.class);


       *//* Map<String, String> header = new HashMap<>();

        String url = "http://localhost:8080/V6R343/bpm/business/dosubmit";

        header.put("taskId", taskId);
        // header.put("instanceId",);
        header.put("userJson", "{users:[],idea:同意,compelManner:,outcome:to end1}");
        header.put("outcome", "to end1");
        header.put("formJson", "");
        header.put("uflowDealType", "");
        header.put("isUflow", "false");
        header.put("instanceId", instanceId);

        HttpUtil.httpGet(url, "", header, "UTF-8");*//*
        doSubmit(instanceId,taskId,"{users:[],idea:同意,compelManner:,outcome:to end1}","to end1","","",false,request);

        boolean isTrue = true;
        String fckId = "";
        List<Map<String, Object>> dzbList = jdbcTemplate.queryForList("select * from DYN_SUB_DWGZJHFJ_1  t where t.id='" + formId + "'");//查询基层党组织任务表
        for (Map<String, Object> dzbDTO : dzbList) {
            fckId = MapUtils.getString(dzbDTO, "FK_SUB_COL_ID");//得到公司计划id
            List<Map<String, Object>> dzbAllList = jdbcTemplate.queryForList("select * from DYN_SUB_DWGZJHFJ_1  t where t.FK_SUB_COL_ID='" + fckId + "' and t.id<> '" + formId + "'");//查询基层党组织任务表
            for (Map<String, Object> otherDTO : dzbAllList) {
                String status = MapUtils.getString(otherDTO, "STATUS");//得到基层党组织落实的状态
                if ("进行中".equals(status) || StringUtils.isEmpty(status)) {//如果其他党组织支部没有完成，标记状态
                    isTrue = false;
                }
            }

        }


        try {

            BpmsControlUtils bpmsControlUtils = SpringMVCFactory.getBean(BpmsControlUtils.class);

            TableData td = new TableData();
            td.setTableName("DYN_SUB_DWGZJHFJ_1");
            td.setPrimaryKeyValue(formId);
            List<TableColData> tableColDataList = new ArrayList<>();

            TableColData tcd = new TableColData();
            tcd.setColName("STATUS");
            tcd.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
            tcd.setColValue("已完成");
            tableColDataList.add(tcd);

            //反馈时间
            TableColData tcd2 = new TableColData();
            tcd2.setColName("FK_DATE_TIME");
            tcd2.setColJdbcType(EformConstant.ColJdbcTypeEnum.TIMESTAMP);
            tcd2.setColValue(new Date());
            tableColDataList.add(tcd2);


            td.setTableColDataList(tableColDataList);
            int rows = bpmsControlUtils.updateData(td);
            LOGGER.info("更新表DYN_SUB_DWGZJHFJ_1列STATUS值已完成成功", rows);
            mav.addObject("flag", PlatformConstant.OpResult.success);
        } catch (Exception ex) {

            mav.addObject("flag", PlatformConstant.OpResult.failure);
            return mav;
        }

        if (isTrue) {
            if (StringUtils.isNotEmpty(fckId)) {
                jdbcTemplate.execute("update DYN_SUB_DWGZJH_1 t set t.STATUS='基层反馈已完成'  where t.id='" + fckId + "'");//更新公司计划状态为已完成
            }

        }


        return mav;

    }*/

    /**
     * 更新状态,只能更新一个字符串的字段
     *
     * @param request
     * @return
     */
    @RequestMapping(value = "/operation/updateJcFkStatus", method = RequestMethod.POST)
    public void toUpdateJcFkStatus(HttpServletRequest request) {
        JdbcTemplate jdbcTemplate = SpringMVCFactory.getBean(JdbcTemplate.class);
        String formId = ServletRequestUtils.getStringParameter(request, "formId", "");
        if (!StringUtils.isEmpty(formId)) {
            String sql = "select status from DYN_SUB_DWGZJHFJ_1 where id='" + formId + "'";
            String status = jdbcTemplate.queryForObject(sql, String.class);
            if (StringUtils.isEmpty(status) || "已接收".equals(status)) {
                String updateSql = "update DYN_SUB_DWGZJHFJ_1 set status='进行中' where id='" + formId + "'";
                jdbcTemplate.execute(updateSql);
            }
        }

    }


    public void doSubmit(String instanceId, String taskId, String userJson, String outcome, String formJson, String uflowDealType, Boolean isUflow, HttpServletRequest request) {
        ObjectMapper objectMapper = new ObjectMapper();
        String message = this.bpmOperateService.getMessage(userJson, objectMapper);
        String compelManner = this.bpmOperateService.getCompelManner(userJson, objectMapper);
        Map<String, List<Membership>> membershipMap = this.bpmOperateService.getMembershipMap2(userJson, objectMapper);
        Map<String, List<WorkHandUsers>> workHandUserMap = this.bpmOperateService.getWorkhandMap(userJson, objectMapper);
        Map<String, Object> variables = new HashMap();
        if (!ComUtil.EMPTY.equals(ComUtil.replaceNull2Space(formJson))) {
            variables = this.bpmOperateService.getFormJson(formJson, objectMapper);
        }

        String userId = SessionHelper.getLoginSysUserId(request);
        String deptId = this.bpmOperateService.getCurrentDeptId(request);
        if (deptId == null || "".equals(deptId)) {
            deptId = this.sysUserDeptPositionAPI.getChiefDeptIdBySysUserId(userId);
        }

        if (isUflow && !StringUtils.isEmpty(uflowDealType)) {
            try {
                this.businessService.doSetUflowDealType(instanceId, uflowDealType);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        this.bpmOperateService.completeTask(instanceId, taskId, userId, deptId, outcome, membershipMap, workHandUserMap, (Map) variables, message, compelManner);
    }


    /**
     * 更新状态,只能更新一个字符串的字段
     *
     * @param request
     * @return
     */
    @RequestMapping(value = "/operation/updateGsFkStatus", method = RequestMethod.POST)
    public ModelAndView toUpdateGsFkStatus(HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();

        String formId = ServletRequestUtils.getStringParameter(request, "formId", "");

        boolean isTrue = true;
        String fckId = "";
        JdbcTemplate jdbcTemplate = SpringMVCFactory.getBean(JdbcTemplate.class);
        List<Map<String, Object>> gsbList = jdbcTemplate.queryForList("select * from DYN_SUB_DWGZJH_1  t where t.id='" + formId + "'");//查询公司计划
        for (Map<String, Object> gsbDTO : gsbList) {
            fckId = MapUtils.getString(gsbDTO, "FK_SUB_COL_ID");//得到党组织计划id
            List<Map<String, Object>> gsAllList = jdbcTemplate.queryForList("select * from  DYN_SUB_DWGZJH_1 t where t.FK_SUB_COL_ID='" + fckId + "' and t.id<> '" + formId + "'");//查询基层党组织任务表
            for (Map<String, Object> otherDTO : gsAllList) {
                String status = MapUtils.getString(otherDTO, "STATUS");//得到其他公司计划id
                if ("进行中".equals(status)) {//如果其他公司计划全部完成，标记状态
                    isTrue = false;
                }
            }

        }


        try {

            BpmsControlUtils bpmsControlUtils = SpringMVCFactory.getBean(BpmsControlUtils.class);

            TableData td = new TableData();
            td.setTableName("DYN_SUB_DWGZJH_1");
            td.setPrimaryKeyValue(formId);
            List<TableColData> tableColDataList = new ArrayList<>();

            TableColData tcd = new TableColData();
            tcd.setColName("STATUS");
            tcd.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
            tcd.setColValue("已完成");
            tableColDataList.add(tcd);
            //反馈时间
            TableColData tcd2 = new TableColData();
            tcd2.setColName("FK_DATE_TIME");
            tcd2.setColJdbcType(EformConstant.ColJdbcTypeEnum.TIMESTAMP);
            tcd2.setColValue(new Date());
            tableColDataList.add(tcd2);

            td.setTableColDataList(tableColDataList);
            int rows = bpmsControlUtils.updateData(td);
            LOGGER.info("更新表DYN_SUB_DWGZJH_1列STATUS值已完成成功", rows);
            mav.addObject("flag", PlatformConstant.OpResult.success);
        } catch (Exception ex) {

            mav.addObject("flag", PlatformConstant.OpResult.failure);
            return mav;
        }

        if (isTrue) {
            if (StringUtils.isNotEmpty(fckId)) {
                jdbcTemplate.execute("update DYN_WORK_PLAN t set t.STATUS='已完成'  where t.id='" + fckId + "'");//更新公司计划状态为已完成
            }

        }


        return mav;

    }


}
