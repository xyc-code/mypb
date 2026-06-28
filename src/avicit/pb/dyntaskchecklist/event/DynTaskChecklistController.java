package avicit.pb.dyntaskchecklist.event;

import avicit.pb.dyntaskchecklist.dao.DynTaskChecklistDao;
import avicit.pb.dyntaskchecklist.dto.DynInspecIcDTO;
import avicit.pb.dyntaskchecklist.dto.DynInspectionDTO;
import avicit.pb.dyntaskchecklist.dto.DynTaskChecklistDTO;
import avicit.pb.dyntaskchecklist.service.DynTaskChecklistService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringFactory;
import oracle.sql.CLOB;
import oracle.sql.TIMESTAMP;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写 @创建时间： 2023-05-16 16:49
 * @类说明：请填写 @修改记录：
 */
public class DynTaskChecklistController implements LoaderConstant, EventListener {
    @Override
    public void notify(EventListenerExecution execution) throws Exception {
        String formId2 = (String) execution.getVariable("id");
        String entryid = execution.getProcessInstanceId();
        int Hash = ComUtil.getHashInt(entryid, 8);
        String HashId = "bpm_track_ext" + Hash;
        DynTaskChecklistService serve = SpringFactory.getBean(DynTaskChecklistService.class);
        DynTaskChecklistDao dao = SpringFactory.getBean(DynTaskChecklistDao.class);
        DynInspectionDTO dtos = serve.findByIdDTO(formId2);
        DynTaskChecklistDTO dto = serve.queryDynTaskChecklistByPrimaryKey(dtos.getAttribute03());
        DynInspecIcDTO dyo = new DynInspecIcDTO();
        //主表id
        dyo.setAttribute11(dtos.getId());
        //第几次循环
        dyo.setAttribute10(String.valueOf(serve.countFor(dtos.getId())));
        dyo.setInspectionMaterial(dtos.getInspectionMaterial());
        dyo.setInspectionOneAnd(dtos.getInspectionOneAnd());
        dyo.setInspectionOpinionS(dtos.getInspectionOpinionS());
        dyo.setInspectionOpinionEnd(dtos.getInspectionOpinionEnd());
        dyo.setInspectionOn(dtos.getInspectionOn());
        dyo.setInspectionFromPosenTel(dtos.getInspectionFromPosenTel());
        dyo.setAttribute04(dtos.getAttribute04());
        dyo.setInspectionOpinionEndDate(dtos.getInspectionOpinionEndDate());
        dyo.setInspectionOpinionEndDateBegin(dtos.getInspectionOpinionEndDateBegin());
        dyo.setInspectionOpinionEndDateEnd(dtos.getInspectionOpinionEndDateEnd());
        dyo.setAttribute03(dtos.getAttribute03());
        dyo.setInspectionPosen(dtos.getInspectionPosen());
        dyo.setAttribute01(dtos.getAttribute01());
        dyo.setInspectionEndIssueQk(dtos.getInspectionEndIssueQk());
        dyo.setInspectionFromPosenDept(dtos.getInspectionFromPosenDept());
        dyo.setInspectionFromDate(dtos.getInspectionFromDate());
        dyo.setInspectionMeasureIssue(dtos.getInspectionMeasureIssue());
        dyo.setAttribute05("0");
        dyo.setInspectionFromOn(dtos.getInspectionFromOn());
        dyo.setInspectionFromPosen(dtos.getInspectionFromPosen());
        dyo.setInspectionEndIssue(dtos.getInspectionEndIssue());
        dyo.setInspectionIssue(dtos.getInspectionIssue());
        dyo.setAttribute09(dtos.getAttribute03());
        dyo.setAttribute01(dtos.getAttribute01());
        dyo.setAttribute04(dtos.getAttribute04());
        //被巡查单位主管领导审核意见
        List<Map<String, Object>> entry = dao.getTask(entryid, HashId, "task3");
        for (Map<String, Object> enry : entry) {
            Map<String, Object> map = enry;
            SimpleDateFormat sr = new SimpleDateFormat("yyyy-MM-dd HH:mm:SS");
            String mesage = serve.ClobToString((CLOB) map.get("MESSAGE_"));
            TIMESTAMP end = (TIMESTAMP) map.get("END_");
            String date = sr.format(end.dateValue());
            dyo.setInspectionOpinion(mesage + ";");
            dyo.setInspectionOpinionDate(sr.parse(date));
        }
        //获取被巡察单位巡察整改领导小组审核意见
        entry = dao.getTask(entryid, HashId, "task6");
        for (Map<String, Object> enry : entry) {
            Map<String, Object> map = enry;
            SimpleDateFormat sr = new SimpleDateFormat("yyyy-MM-dd HH:mm:SS");
            String mesage = serve.ClobToString((CLOB) map.get("MESSAGE_"));
            TIMESTAMP end = (TIMESTAMP) map.get("END_");
            String date = sr.format(end.dateValue());
            dyo.setInspectionOpinionS(mesage + ";");
            dyo.setInspectionOpinionDateS(sr.parse(date));
        }
        entry = dao.getTask(entryid, HashId, "task4");
        for (Map<String, Object> enry : entry) {
            Map<String, Object> map = enry;
            SimpleDateFormat sr = new SimpleDateFormat("yyyy-MM-dd HH:mm:SS");
            String mesage = serve.ClobToString((CLOB) map.get("MESSAGE_"));
            TIMESTAMP end = (TIMESTAMP) map.get("END_");
            String date = sr.format(end.dateValue());
            dyo.setInspectionOpinionEnd(mesage + ";");
            dyo.setInspectionOpinionEndDate(sr.parse(date));
        }
        serve.insertDynInspecIc(dyo);
        dtos.setAttribute05("0");
        //dtos.setInspectionEndIssueQk(" ");
        //dtos.setInspectionOneAnd(" ");
        //dtos.setInspectionOpinionS(" ");
        //dtos.setInspectionOpinion(" ");
        //dtos.setInspectionOpinionEnd(" ");
        serve.updateDynInspectionSensitive(dtos);
    }


}
