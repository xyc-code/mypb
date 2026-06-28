package avicit.pb.partyorgplan;

import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eform.EformConstant;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class UpdateStatus implements EventListener {
    Logger log = LoggerFactory.getLogger(StartPartyOrgPlanXfFlow.class);
    @Override
    public void notify(EventListenerExecution execution) throws Exception {
        JdbcTemplate jdbcTemplate = SpringMVCFactory.getBean(JdbcTemplate.class);
        ModelAndView mav = new ModelAndView();
        String formId = (String) execution.getVariable("ID");
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
            mav.addObject("flag", PlatformConstant.OpResult.success);

        if (isTrue) {
            if (StringUtils.isNotEmpty(fckId)) {
                jdbcTemplate.execute("update DYN_SUB_DWGZJH_1 t set t.STATUS='基层反馈已完成'  where t.id='" + fckId + "'");//更新公司计划状态为已完成
            }
        }
    }
}
