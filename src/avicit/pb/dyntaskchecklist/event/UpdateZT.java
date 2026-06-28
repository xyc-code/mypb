package avicit.pb.dyntaskchecklist.event;


import avicit.pb.dyntaskchecklist.dto.DynInspectionDTO;
import avicit.pb.dyntaskchecklist.dto.DynTaskChecklistDTO;
import avicit.pb.dyntaskchecklist.service.DynTaskChecklistService;
import avicit.platform6.api.sysuser.SysUserRoleAPI;
import avicit.platform6.api.sysuser.dto.SysRole;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.core.spring.SpringFactory;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Map;


@SuppressWarnings("serial")
public class UpdateZT implements EventListener {
    //修改清单状态为完成
    @Override
    public void notify(EventListenerExecution arg0) throws Exception {
        String id = (String) arg0.getVariable("id");
        DynTaskChecklistService serve = SpringFactory.getBean(DynTaskChecklistService.class);
        DynInspectionDTO dto = serve.findByIdDTO(id);
        DynTaskChecklistDTO dtos = serve.queryDynTaskChecklistByPrimaryKey(dto.getAttribute03());
        dtos.setAttribute01("2");
        serve.updateDynTaskChecklistSensitive(dtos);

    }

    //配置巡查整改汇总页行数据权限
    public String getSql(Map<String, String> paramMap) {
        String tableName = paramMap.get("tableName"); // 配置的表名
        String loginUserId = paramMap.get("loginUserId"); // 登录人ID
        String loginOrgId = paramMap.get("loginOrgId"); // 登录组织ID
        String loginDeptId = paramMap.get("loginDeptId"); // 登录人部门ID
        JdbcTemplate jdbc = SpringFactory.getBean(JdbcTemplate.class);

        //ComUtil.getHashInt();

        if (loginUserId.equals("1")) {
            return "1=1";
        }
        List<Map<String, Object>> arr = jdbc.queryForList("select * from sys_role where id in (select sys_role_id from sys_user_role where sys_user_id = '" + loginUserId + "') and role_code = 'xczghzqxjs'");
        if (arr.size() != 0 && arr != null) {
            return "1=1";
        } else {
            String sql = "";
			/*sql += "MANIFEST_POSEN = '"+loginUserId +"'";//当前登录人是否是 责任人
			sql += " OR MANIFEST_LEADERSHIP = '"+loginUserId+"' ";//当前登录人是否是 责任领导
			//  查询 责任人部门 id 等于 当前登录人是否是 部长 岗位 （948e83e381cd46b90181d640f0a06f33） 岗位表id，取部门id
			sql+="OR (select dept_id from sys_user_dept_position where user_id = t1.MANIFEST_POSEN) = (select dept_id from sys_user_dept_position where user_id = '"+loginUserId+"' and position_id = '948e83e381cd46b90181d640f0a06f33')";
			*/
            sql += " manifest_posen = '" + loginUserId + "' and attribute_05 = '" + loginDeptId + "'";//当前登录人是否是 责任人
            sql += "or (MANIFEST_LEADERSHIP = '" + loginUserId + "' and attribute_06 = '" + loginDeptId + "')";//当前登录人是否是 责任领导
            SysUserRoleAPI sysUserRoleAPI = SpringFactory.getBean(SysUserRoleAPI.class);
            List<SysRole> sysRoleList = sysUserRoleAPI.getSysRoleListBySysUserId(loginUserId);
            boolean isRole = false;
            for (SysRole sysRole : sysRoleList) {
                if ("xczgdeptrole".equals(sysRole.getRoleCode())) {
                    isRole = true;
                    break;
                }
            }
            if (isRole) {
                sql += " or attribute_05='" + loginDeptId + "'";
            }
            sql += "OR attribute_05 =(select dept_id from sys_user_dept_position where user_id = '" + loginUserId + "' and position_id in ('948e83e381cd46b90181d640f0a06f33','948e83e381cd46b90181d640f0ee6f35') )";//部长 ,副部长 岗位id 写死
            return sql;
        }


    }


}
