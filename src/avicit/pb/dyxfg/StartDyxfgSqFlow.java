package avicit.pb.dyxfg;

import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.sysautocode.SysAutoCodeAPI;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.SysUserDeptPositionAPI;
import avicit.platform6.bpm.api.BpmVariableKey;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.cmd.S;
import avicit.platform6.bpm.pvm.internal.identity.impl.UserImpl;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.DateUtil;
import avicit.platform6.commons.utils.JsonUtil;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.collections.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.util.Assert;
import org.springframework.util.CollectionUtils;

import java.util.*;

public class StartDyxfgSqFlow  implements EventListener {

    Logger log = LoggerFactory.getLogger(StartDyxfgSqFlow.class);

    //该属性值可以由设计器设置
    String msg;
    public void notify(EventListenerExecution execution) throws Exception {
        JdbcTemplate jdbcTemplate=SpringMVCFactory.getBean(JdbcTemplate.class);

         SysAutoCodeAPI autoCodeApi=SpringMVCFactory.getBean(SysAutoCodeAPI.class);
        String xfgsqId=ComUtil.getId();
        //流程执行Id
        String executionId = execution.getId();
        //流程实例Id
        String processInstanceId = execution.getProcessInstanceId();
        //业务表单Id，可能是大写，这是由开发模块的方式决定的，jdbc addon保存的是ID
        //业务表单Id,可能是小写，这是由开发模块的方式决定的
        String formId = (String) execution.getVariable("id");

        BpmsControlUtils bpmsControlUtils=SpringMVCFactory.getBean(BpmsControlUtils.class);
        TableData td=new TableData();
        td.setTableName("DYN_XFG_FQ");
        td.setPrimaryKeyValue(formId);
        Map<String,Object> xfgfqMap=bpmsControlUtils.getData(td);

        //流程节点名称
        UserImpl user=(UserImpl)execution.getVariable(BpmVariableKey.USER);

        //获取当前处理人所在党支部，
        PartyOrganMemberService partyOrganMemberService=SpringMVCFactory.getBean(PartyOrganMemberService.class);
        PartyOrganizationService partyOrganizationService=SpringMVCFactory.getBean(PartyOrganizationService.class);
        SysUserAPI sysUserAPI=SpringMVCFactory.getBean(SysUserAPI.class);
        PartyOrganMemberDTO searchParams=new PartyOrganMemberDTO();
        searchParams.setUserId(user.getId());
        searchParams.setUserPost("4");//组织委员

        //SpringMVCFactory.getBean();

        try {
            List<PartyOrganMemberDTO> partyOrganMemberList=partyOrganMemberService.searchPartyOrganMember(searchParams,null,null);
            if(!CollectionUtils.isEmpty(partyOrganMemberList)){
                PartyOrganMemberDTO dto = partyOrganMemberList.get(0);
                    //当前处理人所在党支部，

                    StringBuffer partyIds=new StringBuffer();
                    String partyId=dto.getPartyId();//组织id

                    partyIds.append(partyId);

                    PartyOrganizationDTO partyOrganizationDTOpart=partyOrganizationService.queryPartyOrganizationByPrimaryKey(partyId);
                    /*如果是党委、党总支 特殊处理，将 下面的党支部id 都拿到，作为先锋岗申请党员推荐记录过滤条件使用*/
                    if(partyOrganizationDTOpart.getPartyName().contains("党委")||partyOrganizationDTOpart.getPartyName().contains("党总支")){
                        List<PartyOrganizationDTO> partyOrganizationDTOpart1=partyOrganizationService.findChildrenPartyOrganizationById(partyId);

                        if(partyOrganizationDTOpart1.size()>0){

                            for(PartyOrganizationDTO partyOrganizationDTO:partyOrganizationDTOpart1){
                                partyIds.append("'',''").append(partyOrganizationDTO.getId());
                            }

                        }



                    }

                    String userId=dto.getUserId();//组织委员id
                    //searchParams.setUserPost("4");//组织委员
                    //searchParams.setPartyId(partyId);
                    //searchParams.setUserId("");//
                    // List<PartyOrganMemberDTO> partyOrganMemberDTOS= partyOrganMemberService.searchPartyOrganMember(searchParams,null,null);

                    //for(PartyOrganMemberDTO partyOrganMemberDTO:partyOrganMemberDTOS){//组织委员





                    StringBuffer sql=new StringBuffer();
                    sql.append("INSERT INTO DYN_PARTY_XFG(");
                    sql.append("FK_SUB_QF_NAME,");
                    sql.append("FK_SUB_QF_ID,");
                    sql.append("FILE_TYPE,");
                    sql.append("XFG_CREA_DATE,");
                    sql.append("XFG_USER,");
                    sql.append("XFG_PARTY_NAME,");
                    sql.append("LAST_UPDATE_DATE,");
                    sql.append("CREATION_DATE,");
                    sql.append("ID,");
                    sql.append("CREATED_DEPT,");
                    sql.append(" LAST_UPDATE_IP, ");
                    sql.append("CREATED_BY,");
                    sql.append("LAST_UPDATED_BY,");
                    sql.append("VERSION,");
                    sql.append("ORG_IDENTITY,");
                    sql.append("PARTY_ID,");
                    sql.append("ATTR1)");//申请人联系电话
                    sql.append("VALUES(");
                    sql.append("'").append(MapUtils.getString(xfgfqMap,"FQ_TITLE")).append("'").append(",");//先锋岗发起标题
                    sql.append("'").append(formId).append("'").append(",");
                    sql.append("'").append("2").append("'").append(",");
                    sql.append(" to_date('").append(DateUtil.getDateStr(new Date())).append("','yyyy-MM-dd')").append(",");
                    sql.append("'").append(sysUserAPI.getSysUserNameById(userId)).append("'").append(",");
                    sql.append("'").append(partyOrganizationDTOpart.getPartyName()).append("'").append(",");
                    sql.append(" to_date('").append(DateUtil.getDateStr(new Date())).append("','yyyy-MM-dd')").append(",");
                    sql.append(" to_date('").append(DateUtil.getDateStr(new Date())).append("','yyyy-MM-dd')").append(",");
                    sql.append("'").append(xfgsqId).append("'").append(",");
                    sql.append("'").append(user.getDeptId()).append("'").append(",");
                    sql.append("'").append("system").append("'").append(",");
                    sql.append("'").append(user.getId()).append("'").append(",");
                    sql.append("'").append(user.getId()).append("'").append(",");
                    sql.append(0).append(",");
                    sql.append("'").append("ORG_ROOT").append("'").append(",");
                    sql.append("'").append(partyIds.toString()).append("',");
                    sql.append("'").append(dto.getAttribute10()).append("'");//申请人联系电话
                    sql.append(")");

                    jdbcTemplate.execute(sql.toString());

                    //XFG_FROM_NO 表单编号  dyxfgsb

                 /*  Map<String, String> map = autoCodeApi.generateAutoCodeValue("", "partyCommandosCode", dto.getAutoCodeValue(),
                           dto.getId(), false);
                   String code = "";
                   if (map.get("result").equals("success")) {
                       code = map.get("autoCodeValue");
                   }
                   dto.setAutoCode(code);*/

                    //ATTR1 申请人电话
                   /*
                   TableColData tcd2=new TableColData();
                   tcd2.setColName("ATTR1");
                   tcd2.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
                   tcd2.setColValue();
                   tableColDataList.add(tcd2);*/



            }





        } catch (Exception e) {
            log.error("{}",e.getMessage());
            throw e;
        }



        java.util.List<java.util.Map<String, Object>> xfgsqMap=jdbcTemplate.queryForList("select * from DYN_PARTY_XFG t where t.id='"+xfgsqId+"'");

        for(Map<String, Object> dto:xfgsqMap) {
            String id = MapUtils.getString(dto, "ID");


            Map<String, Object> map = new HashMap<String, Object>();
            String processDefId = "948e83e38e9e1069018eb61e9d1b44b0-1";//流程定义id
            String formCode = "gsndldgbmzshhSAD";
            String jsonString = "";//表单之外的参数
            try {

                //调用校验工具类，校验数据
                SysUserDeptPositionAPI sysUserDeptPositionAPI=SpringMVCFactory.getBean(SysUserDeptPositionAPI.class);
                String userId = user.getId();
                String deptId =sysUserDeptPositionAPI.getChiefDeptIdBySysUserId(user.getId());;
                //封装启动流程所需的参数
                Map<String, Object> parameter = new HashMap<String, Object>();
                parameter.put("processDefId", processDefId);
                parameter.put("formCode", formCode);
                parameter.put("jsonString", jsonString);
                parameter.put("userId", userId);
                parameter.put("deptId", deptId);
                //  dynXfgFqDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
                StartResultBean result = insertDynXfgSqAndStartProcess(dto, parameter, id);
                //map.put("flag", PlatformConstant.OpResult.success);
                //map.put("startResult", result);
            } catch (Exception ex) {
                ex.printStackTrace();
                //map.put("errorMsg", ex.getMessage());
                // map.put("flag", PlatformConstant.OpResult.failure);
            }
        }

    }
    public StartResultBean insertDynXfgSqAndStartProcess(Map<String, Object>  bean, Map<String, Object> parameter,String id) throws Exception{
        try {
            Assert.notNull(parameter, "启动流程失败，请传递流程启动参数！");
            String processDefId = (String)parameter.get("processDefId");
            String formCode = (String)parameter.get("formCode");
            String jsonString = (String)parameter.get("jsonString");
            String userId = (String)parameter.get("userId");
            String deptId = (String)parameter.get("deptId");
            Assert.hasText(processDefId, "启动流程失败，请传递流程启动参数！");
            //保存业务数据
           // this.insertDynXfgFq(bean);
            //声明流程变量
            Map<String, Object> variables = new HashMap<String, Object>();
            //将表单之外的参数转换成map存入流程变量
            if(jsonString != null && !"".equals(jsonString)){
                Map<String, Object> extVariables = JsonUtil.parseJSON2Map((String)jsonString);
                variables.putAll(extVariables);
            }
            //将表单对象转换成map存入流程变量
           // Map<String, Object> pojoMap = (Map<String, Object>) PojoUtil.toMap(bean);
            variables.putAll(bean);

            BpmOperateService bpmOperateService =SpringMVCFactory.getBean(BpmOperateService.class);
            BusinessService businessService =SpringMVCFactory.getBean(BusinessService.class);
            String processInstanceId = bpmOperateService.startProcessInstanceById(processDefId, formCode, userId, deptId, variables);
            return businessService.getStartResultBean(processInstanceId, id, userId);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("insertDynXfgFqDTOAndStartProcess出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }
}
