package avicit.pb.milepost.dynyouthrecord.event;

import avicit.lc.organize.leagueorganmember.dto.LeagueOrganMemberDTO;
import avicit.pb.milepost.dynyouthrecord.service.DynYouthRecordService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.model.OpenExecution;
import avicit.platform6.bpm.pvm.internal.model.RouteConditionInterface;
import avicit.platform6.core.spring.SpringFactory;
import org.springframework.util.CollectionUtils;

import java.util.List;

public class ConditionClasses implements RouteConditionInterface, LoaderConstant {
    // 自定义选人 如果是团书记返回false
    @Override
    public boolean evaluate(OpenExecution arg0) {
        String loginUserId = (String) arg0.getProcessInstance().getVariable("avicit_bpm_start_id");
        DynYouthRecordService sysApplicationService = SpringFactory.getBean(DynYouthRecordService.class);
        SysUser user = sysUserLoader.getSysUserById(loginUserId);
        String userDeptId = user.getDeptId();
        String userPost = "0";
        List<LeagueOrganMemberDTO> dto = sysApplicationService.getLeagueOrganizationDTO(userDeptId, userPost);
        return CollectionUtils.isEmpty(dto);
    }
}
