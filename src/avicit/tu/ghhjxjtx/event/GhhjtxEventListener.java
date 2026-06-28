package avicit.tu.ghhjxjtx.event;

import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.sysmsg.dto.SysMsgDTO;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.SysUserDeptPositionAPI;
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.BpmVariableKey;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.identity.impl.UserImpl;
import avicit.platform6.commons.utils.DateUtil;
import avicit.platform6.core.rest.client.RestClient;
import avicit.platform6.core.rest.client.RestClientConfig;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import avicit.platform6.msystem.sysmsg.controller.SysMsgConstant;
import avicit.tu.tuorganmember.dto.TuOrganMemberDTO;
import avicit.tu.tuorganmember.service.TuOrganMemberService;
import org.apache.commons.collections.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.core.GenericType;
import java.util.*;

public class GhhjtxEventListener implements EventListener {

    private static final Logger LOGGER = LoggerFactory.getLogger(GhhjtxEventListener.class);

    @Override
    public void notify(EventListenerExecution eventListenerExecution) throws Exception {


        String formId=(String)eventListenerExecution.getVariable("id");

        BpmsControlUtils bpmsControlUtils= SpringMVCFactory.getBean(BpmsControlUtils.class);
        TableData var1=new TableData();
        var1.setTableName("DYN_GUILD_HJTX");//获取工会换届提醒表
        var1.setPrimaryKeyValue(formId);
       Map<String,Object> dataMap= bpmsControlUtils.getData(var1);

        UserImpl user=(UserImpl)eventListenerExecution.getVariable(BpmVariableKey.USER);
       if(dataMap!=null){

           String guildId=MapUtils.getString(dataMap,"GUILD_ID");//工会id
           TuOrganMemberService leagueOrganMemberService=SpringMVCFactory.getBean(TuOrganMemberService.class);
           TuOrganMemberDTO searchParams=new TuOrganMemberDTO();
           searchParams.setLeagueId(guildId);//传入工会组织id
           List<TuOrganMemberDTO> tuOrganMemberList=leagueOrganMemberService.searchLeagueOrganMember(searchParams,null,null);

        //查询到工会组织信息对应的人员
           StringBuffer recvUserIds=new StringBuffer();
           StringBuffer recvUserNames=new StringBuffer();
           SysUserAPI sysUserAPI=SpringMVCFactory.getBean(SysUserAPI.class);
           for(TuOrganMemberDTO tuOrganMemberDTO:tuOrganMemberList){
               String userPost=tuOrganMemberDTO.getUserPost();//工会职务。组织委员 2
               if("2".equals(userPost)){//只有是。组织委员的才满足条件
                   recvUserIds.append(tuOrganMemberDTO.getUserId()).append(";");
                   String userName=sysUserAPI.getSysUserNameById(tuOrganMemberDTO.getUserId());
                   recvUserNames.append(userName).append(";");
               }

           }

           if(recvUserIds.length()>0){//存在待发送的数据才进入
               SysUser sendUser =new SysUser();
               sendUser.setId(user.getId());
               sendUser.setOrgIdentity("ORG_ROOT");

               SysMsgDTO msgDTO = new SysMsgDTO();
               msgDTO.setId("");
               String personal = SysMsgConstant.SOURCE_CODE_PERSONAL;
               msgDTO.setSourceCode(personal);
               msgDTO.setTitle("您有工会组织换届提醒的通知");//标题
               msgDTO.setUrlAddress("msystem/sysmsg/sysMsgController/operation/Gh/");//巡察整改汇总页面 列表
              ////格式  用 @@分割 例：XX工会@@xx工会类型@@xxx年月@@xx年月@@xx年月@@xx年月@@xx年月@@xx年月@@联系人@@联系电话
               //具体说明 1 工会名称 2 工会类型 3 换届选举4 届满5提交选举请示6 提交候选人7完成换届 8 系统时间9联系人10联系电话
               String guildName=MapUtils.getString(dataMap,"GUILD_NAME");//工会名称
              // MapUtils.getString(dataMap,"USER_NAME");
               Long tjxjqs=MapUtils.getLong(dataMap,"TJYBRX_TIME");//提出换届请示时间
               String tjxjqsC= DateUtil.format(new Date(tjxjqs),"yyyy年MM月dd日");
               Long jm=MapUtils.getLong(dataMap,"DUE_TIME1");//本届换届时间
               String jmC=DateUtil.format(new Date(jm),"yyyy年MM月dd日");
               Long hxr=MapUtils.getLong(dataMap,"ZKDYDH_TIME");//提出预备人选请示时间
               String hxrC=DateUtil.format(new Date(hxr),"yyyy年MM月dd日");

               String userName=MapUtils.getString(dataMap,"USER_NAME");
               String guildType=MapUtils.getString(dataMap,"GUILD_TYPE");
               String tel=MapUtils.getString(dataMap,"TEL");
               StringBuffer sb=new StringBuffer();
               sb.append(guildName).append("@@");//工会名称1
               sb.append(guildType).append("@@");//工会类型2
               sb.append(jmC).append("@@");//换届选举3
               sb.append(jmC).append("@@");//届满4
               sb.append(tjxjqsC).append("@@");//提交选举请示5
               sb.append(hxrC).append("@@");//提交候选人6
               sb.append(jmC).append("@@");//完成换届7
               sb.append(userName).append("@@");//8联系人
               sb.append(tel).append("@@");//9联系电话
               sb.append(DateUtil.getDateStrC(new Date()));//系统时间10

               msgDTO.setContent(sb.toString());
               msgDTO.setUrlType("1");//URL类型，是URL就是1,是js方法，就是0。
               msgDTO.setMsgType("0");//范围 1是所有人，接收人为空，0 指定接收人
               msgDTO.setRecvUser(recvUserIds.toString());//多个用;分割
               msgDTO.setRecvUserAlias(recvUserNames.toString());//多个用;分割
               //msgDTO.setRecvUser("1");
               //msgDTO.setRecvUserAlias("平台管理员");
               Calendar c = Calendar.getInstance();
               //c.add(Calendar.DAY_OF_MONTH,7);
               msgDTO.setSendDate(new Date());//发送时间
               c.add(Calendar.DAY_OF_MONTH,30);
               msgDTO.setDisappearDate(c.getTime());
               msgDTO.setRecvDate(msgDTO.getDisappearDate());//接收时间

               if (SysMsgConstant.SOURCE_CODE_PERSONAL.equals(msgDTO.getSourceCode()) && "".equals(msgDTO.getId())) {
                   if (this.insertPersonalMsg(msgDTO, sendUser)) {
                       LOGGER.info("工会换届提醒流程，发送系统消息提醒成功");
                       //mav.put("flag", PlatformConstant.OpResult.success);
                   } else {
                       LOGGER.error("工会换届提醒流程，发送系统消息提醒失败");
                       //mav.put("flag", PlatformConstant.OpResult.failure);
                   }
               }
           }

       }


    }


    /**
     * 下发任务清单的时候，发送系统消息
     */
    private boolean insertPersonalMsg(SysMsgDTO msgDto, SysUser sendUser) throws Exception {
        SysUserDeptPositionAPI sysUserDeptPositionLoader =SpringMVCFactory.getBean(SysUserDeptPositionAPI.class);
        SysDept sendDept = sysUserDeptPositionLoader.getChiefDeptBySysUserId(sendUser.getId());
        SysApplicationAPI sysApplicationAPI =SpringMVCFactory.getBean(SysApplicationAPI.class);
        String sysApplicationId = sysApplicationAPI.getCurrentAppId();
        msgDto.setSendUser(sendUser.getId());
        msgDto.setSendDeptid(sendDept.getId());
        msgDto.setOrgIdentity(sendDept.getOrgId());
        msgDto.setSysApplicationId(sysApplicationId);
        msgDto.setSourceCode(SysMsgConstant.SOURCE_CODE_PERSONAL);
        msgDto.setSourceName(SysMsgConstant.SOURCE_NAME_PERSONAL);
        msgDto.setSendType(SysMsgConstant.SEND_TYPE_PC);
        boolean result = false;

        try {
            String urlx = RestClientConfig.getRestHost("sysmsg") + "/api/sysmsg/SysMsgRest" + "/save/v1";
            ResponseMsg<Boolean> responseMsg = RestClient.doPost(urlx, msgDto, new GenericType<ResponseMsg<Boolean>>() {
            });
            if (!responseMsg.getRetCode().equals("200")) {
                LOGGER.error("url:" + urlx + ",error:" + responseMsg.getErrorDesc());
                throw new Exception(responseMsg.getErrorDesc());
            }

            result = (Boolean)responseMsg.getResponseBody();
        } catch (Exception var8) {
            LOGGER.error(var8.getMessage());
        }

        return result;
    }



}
