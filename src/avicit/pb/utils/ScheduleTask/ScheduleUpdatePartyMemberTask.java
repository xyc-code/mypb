package avicit.pb.utils.ScheduleTask;

import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.sysmsg.dto.SysMsgDTO;
import avicit.platform6.api.sysuser.SysUserDeptPositionAPI;
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.core.quartz.IBusinessJob;
import avicit.platform6.core.rest.client.RestClient;
import avicit.platform6.core.rest.client.RestClientConfig;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.msystem.sysmsg.controller.SysMsgConstant;
import org.springframework.stereotype.Component;

import javax.ws.rs.core.GenericType;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

@Component
public class ScheduleUpdatePartyMemberTask implements IBusinessJob {

    public void task(Map<String, Object> map) throws Exception {
        SysMsgDTO msgDTO = new SysMsgDTO();
        msgDTO.setSourceCode(SysMsgConstant.SOURCE_CODE_PERSONAL);
        msgDTO.setTitle(map.get("message").toString());//标题
        msgDTO.setUrlType("1");//URL类型，是URL就是1,是js方法，就是0。
        msgDTO.setMsgType("0");//范围 1是所有人，接收人为空，0 指定接收人
        msgDTO.setRecvUser(map.get("userid").toString());//多个用;分割
        msgDTO.setRecvUserAlias(map.get("username").toString());//多个用;分割
        Calendar c = Calendar.getInstance();
        msgDTO.setSendDate(new Date());//发送时间
        c.add(Calendar.DAY_OF_MONTH, 30);
        msgDTO.setDisappearDate(c.getTime());
        msgDTO.setRecvDate(msgDTO.getDisappearDate());//接收时间
        SysUserDeptPositionAPI sysUserDeptPositionLoader = SpringFactory.getBean(SysUserDeptPositionAPI.class);
        SysApplicationAPI sysApplicationAPI = SpringFactory.getBean(SysApplicationAPI.class);
        SysUser sendUser = new SysUser();
        sendUser.setId("1");
        SysDept sendDept = sysUserDeptPositionLoader.getChiefDeptBySysUserId(sendUser.getId());
        String sysApplicationId = sysApplicationAPI.getCurrentAppId();
        msgDTO.setSendUser(sendUser.getId());
        msgDTO.setSendDeptid(sendDept.getId());
        msgDTO.setOrgIdentity(sendDept.getOrgId());
        msgDTO.setSysApplicationId(sysApplicationId);
        msgDTO.setSourceCode(SysMsgConstant.SOURCE_CODE_PERSONAL);
        msgDTO.setSourceName(SysMsgConstant.SOURCE_NAME_PERSONAL);
        msgDTO.setSendType(SysMsgConstant.SEND_TYPE_PC);
        try {
            String urlx = RestClientConfig.getRestHost("sysmsg") + "/api/sysmsg/SysMsgRest" + "/save/v1";
            ResponseMsg<Boolean> responseMsg = RestClient.doPost(urlx, msgDTO, new GenericType<ResponseMsg<Boolean>>() {
            });
            if (!responseMsg.getRetCode().equals("200")) {
                throw new Exception(responseMsg.getErrorDesc());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
