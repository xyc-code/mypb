package avicit.pb.utils.controller;

import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysprofile.SysProfileAPI;
import avicit.platform6.api.sysuser.SysUserRoleAPI;
import avicit.platform6.api.sysuser.dto.SysRole;
import avicit.platform6.rljcRest.dto.DynAchievementsDTO;
import avicit.platform6.rljcRest.service.DynAchievementsService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * 20241118
 * 党建工具类
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/utils/pbUtilsController/")
public class PbUtilsController implements LoaderConstant {
    private static final Logger LOGGER = LoggerFactory.getLogger(PbUtilsController.class);

    @Autowired
    private SysProfileAPI sysProfileAPI;
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    private SysUserRoleAPI sysUserRoleAPI;
    @Autowired
	private SysApplicationAPI sysApplicationAPI;
    @Autowired
    private DynAchievementsService dynAchievementsService;


    /**
     * 查询当前登录人是否为当前党组织纪检委员
     * @return ModelAndView
     */
    @RequestMapping(value = "queryUserIsJjwy")
    @ResponseBody
    public Map<String,Object> toDynDemocracyManage(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<String,Object>();
        String userId = (String) request.getSession().getAttribute("userId");
        String startBpmPost = sysProfileAPI.getProfileValueByCodeByAppId("PB_JJBS_START_POSITION", "1");
        if(startBpmPost == null || "".equals(startBpmPost)){
            startBpmPost = "13";//纪检委员
        }
        String sql = "select * from PARTY_ORGAN_MEMBER t " +
                "where t.user_id = '" + userId + "' and t.user_post = '" + startBpmPost + "'";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        if (list != null && list.size() > 0) {
            map.put("userPost", "Y");
        }else{
            map.put("userPost", "N");
        }
        return map;
    }
    
    
    /**
     * 查询用户id查询人力绩效考核信息
     * @return ModelAndView
     * 20241203 修改为只有管理员hrjx_manager才能查看该人员绩效考核信息
     */
    @RequestMapping(value = "getDyAchievements")
    @ResponseBody
    public Map<String,Object> getDyAchievements(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<String,Object>();
        String loginId = (String) request.getSession().getAttribute("userId");
        String showRoleCode = ServletRequestUtils.getStringParameter(request, "showRoleCode", "hrjx_manager");
        String userId = ServletRequestUtils.getStringParameter(request, "userId", "");
        String queryYears = ServletRequestUtils.getStringParameter(request, "queryYears", "5");
        try {
        	List<SysRole> roleList = sysUserRoleAPI.getSysRoleListBySysUserId(loginId, sysApplicationAPI.getCurrentAppId());
        	if(roleList != null && roleList.size() > 0){
        		boolean flag = false;
        		for (SysRole sysRole : roleList) {
					if(showRoleCode.equals(sysRole.getRoleCode())){
						flag = true;
					}
				}
        		if(flag){
        			//暂时通过人力提供的中干数据，不显示起绩效考核信息
                	boolean isShowAchievements = true;
                	String loginName = sysUserLoader.getSysUserLoginNameById(userId);
                	String sql = "select t.user_name from dyn_achievements_filter t where t.login_name = '" + loginName + "'";
                	List<Map<String, Object>> userList = jdbcTemplate.queryForList(sql);
                	if(userList != null && userList.size() > 0){
                		isShowAchievements = false;
                	}
                	
                	if(isShowAchievements){
                		Calendar calendar = Calendar.getInstance();
                		int currentYear = calendar.get(Calendar.YEAR);
                		DynAchievementsDTO param = new DynAchievementsDTO();
                		param.setDjUserId(userId);
                		List<DynAchievementsDTO> list = dynAchievementsService.searchDynAchievements(param, " t1.achievements_period desc", "");
                		List<DynAchievementsDTO> newResult = new ArrayList<DynAchievementsDTO>();
                		if(list != null && list.size() > 0){
                			for(int i = 0; i < list.size(); i++){
                				String jxYear = list.get(i).getAchievementsPeriod();
                				int queryCount = Integer.parseInt(queryYears);
                				for (int j = 0; j < queryCount; j++) {
                					if(jxYear.contains((currentYear - j) + "")){
                						newResult.add(list.get(i));
                					}
        						}
                			}
                		}
                		map.put("list", newResult);
                	}else{
                		map.put("list", new ArrayList<DynAchievementsDTO>());
                	}
        		}else{
        			map.put("list", new ArrayList<DynAchievementsDTO>());
        		}
        	}else{
        		map.put("list", new ArrayList<DynAchievementsDTO>());
        	}
		} catch (Exception e) {
			map.put("list", new ArrayList<DynAchievementsDTO>());
			e.printStackTrace();
        }
        return map;
    }
}
