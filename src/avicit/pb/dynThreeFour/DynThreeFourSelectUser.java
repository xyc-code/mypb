package avicit.pb.dynThreeFour;

import avicit.pb.activist.partyactivist.dto.PartyActivistDTO;
import avicit.pb.activist.partyactivist.service.PartyActivistService;
import avicit.pb.member.partymember.dto.PartyMemberDTO;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/avicit/pb/dynThreeFour/DynThreeFourSelectUser")
public class DynThreeFourSelectUser implements LoaderConstant {
    private static final Logger LOGGER = LoggerFactory.getLogger(DynThreeFourSelectUser.class);
    @Autowired
    private PartyMemberService partyMemberService;
    @Autowired
    private PartyOrganizationService partyOrganizationService;
    @Autowired
    private PartyActivistService partyActivistService;
    @Autowired
    private SysApplicationAPI sysApplicationAPI;

    /**
     * 跳转到列表页面
     *
     * @return ModelAndView
     */
    @RequestMapping(value = "toDynThreeSelectUserManage")
    public ModelAndView toPartyMemberManage() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("avicit/pb/dynThreeFour/DynThreeSelectUser");
        mav.addObject("url", "platform/avicit/pb/dynThreeFour/DynThreeFourSelectUser/operation/");
        return mav;
    }


    /**
     * 列表页面分页查询
     *
     * @param pageParameter 查询条件
     * @param request       请求
     * @return Map<String, Object>
     */
    @RequestMapping(value = "/operation/getPartyMembersByPage")
    @ResponseBody
    @RequiresPermissions("member:partyMember:view")
    public Map<String, Object> togetPartyMemberByPage(PageParameter pageParameter, HttpServletRequest request) {
        QueryReqBean<PartyMemberDTO> queryReqBean = new QueryReqBean<PartyMemberDTO>();
        queryReqBean.setPageParameter(pageParameter);
        // 表单数据
        String json = ServletRequestUtils.getStringParameter(request, "param", "");
        // 字段查询条件
        String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");
        // 排序方式
        String sord = ServletRequestUtils.getStringParameter(request, "sord", "");
        // 排序字段
        String sidx = ServletRequestUtils.getStringParameter(request, "sidx", "");
        if (StringUtils.isNotEmpty(keyWord)) {
            json = keyWord;
        }
        String orderBy = "";
        String cloumnName = "";
        if (sidx != null && sord != null && !"".equals(sord) && !"".equals(sidx)) {
            cloumnName = ComUtil.getColumn(PartyMemberDTO.class, sidx);
            // 这里先进行判断是否有对应的数据库字段
            if (cloumnName != null) {
                orderBy = " " + cloumnName + " " + sord;
            } else {
                // 判断是否为特殊控件导致字段无法匹配
                if (sidx.indexOf("Alias") != -1) {
                    cloumnName = ComUtil.getColumn(PartyMemberDTO.class, sidx.substring(0, sidx.lastIndexOf("Alias")));
                } else if (sidx.indexOf("Name") != -1) {
                    cloumnName = ComUtil.getColumn(PartyMemberDTO.class, sidx.substring(0, sidx.lastIndexOf("Name")));
                }
                if (cloumnName != null) {
                    orderBy = " " + cloumnName + " " + sord;
                }
            }
        }
        HashMap<String, Object> map = new HashMap<String, Object>();
        PartyMemberDTO param = null;
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        QueryRespBean<PartyMemberDTO> result = null;
        if (json != null && !"".equals(json)) {
            param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<PartyMemberDTO>() {
            });
        } else {
            param = new PartyMemberDTO();
        }
        param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
        queryReqBean.setSearchParams(param);
        if (param.getAttribute14() != null && param.getAttribute14().equals("1")) {
            PartyMemberDTO searchParams = queryReqBean.getSearchParams();
            searchParams.setAttribute14(null);
            queryReqBean.setSearchParams(searchParams);
            try {
                result = partyMemberService.searchPartyMemberByPage(queryReqBean, orderBy, keyWord);
                // result为空查询党小组支部
                if (result.getResult().size() == 0) {
                    SysUser loginSysUser = SessionHelper.getLoginSysUser(request);
                    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
                    List<Map<String,Object>> list = jdbcTemplate.queryForList("select t.party_id from PARTY_ORGAN_MEMBER t where t.user_id = '"+loginSysUser.getId() +"'");
                    searchParams.setAttribute01(list.get(0).get("party_id").toString());
                    queryReqBean.setSearchParams(searchParams);
                    result = partyMemberService.searchPartyMemberByDXZPage(queryReqBean, orderBy, keyWord);
                }
            } catch (Exception ex) {
                return map;
            }
            for (PartyMemberDTO dto : result.getResult()) {
                if (StringUtils.isNotEmpty(dto.getPartyId())) {
                    PartyOrganizationDTO partyOrganizationDTO;
                    try {
                        partyOrganizationDTO = partyOrganizationService
                                .queryPartyOrganizationByPrimaryKey(dto.getPartyId());
                        if (partyOrganizationDTO != null) {
                            dto.setPartyIdAlias(partyOrganizationDTO.getPartyName());
                        } else {
                            dto.setPartyIdAlias(dto.getPartyId());
                        }
                    } catch (Exception e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    }

                }
                dto.setAttribute14("1");
                convertDto(dto);
            }
            map.put("records", result.getPageParameter().getTotalCount());
            map.put("page", result.getPageParameter().getPage());
            map.put("total", result.getPageParameter().getTotalPage());
            map.put("rows", result.getResult());
            LOGGER.info("成功获取PartyMemberDTO分页数据");
            return map;
        } else if (param.getAttribute14() != null && param.getAttribute14().equals("2")) {
            //查询积极分子
            QueryReqBean<PartyActivistDTO> activistDTOQueryReqBean = new QueryReqBean<PartyActivistDTO>();
            activistDTOQueryReqBean.setPageParameter(pageParameter);
            PartyActivistDTO activistDTOparam = null;
            QueryRespBean<PartyActivistDTO> activistDTOresult = null;
            if (json != null && !"".equals(json)) {
                activistDTOparam = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<PartyActivistDTO>() {
                });
            } else {
                activistDTOparam = new PartyActivistDTO();
            }
//            activistDTOparam.setAttribute14(param.getAttribute14());
            activistDTOparam.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
            activistDTOQueryReqBean.setSearchParams(activistDTOparam);
            PartyActivistDTO searchParams = activistDTOQueryReqBean.getSearchParams();
            searchParams.setAttribute14(null);
            activistDTOQueryReqBean.setSearchParams(searchParams);
            try {
                SysUser loginSysUser = SessionHelper.getLoginSysUser(request);
                SysUser user = sysUserLoader.getSysUserById(loginSysUser.getId());
                activistDTOresult = partyActivistService.searchPartyActivistByPage(activistDTOQueryReqBean, orderBy, keyWord);
                if (activistDTOresult.getResult().size() == 0) {
                    activistDTOQueryReqBean.getSearchParams().setDeptId(user.getLastLoginDeptId());
                    activistDTOresult = partyActivistService.searchPartyActivistDXByPage(activistDTOQueryReqBean, orderBy, keyWord);
                }
            } catch (Exception ex) {
                return map;
            }
            for (PartyActivistDTO dto : activistDTOresult.getResult()) {
                if (StringUtils.isNotEmpty(dto.getPartyId())) {
                    PartyOrganizationDTO partyOrganizationDTO;
                    try {
                        partyOrganizationDTO = partyOrganizationService
                                .queryPartyOrganizationByPrimaryKey(dto.getPartyId());
                        if (partyOrganizationDTO != null) {
                            dto.setPartyIdAlias(partyOrganizationDTO.getPartyName());
                        } else {
                            dto.setPartyIdAlias(dto.getPartyId());
                        }
                    } catch (Exception e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    }

                }
                dto.setUserIdAlias(sysUserLoader.getSysUserNameById(dto.getUserId()));
                ;
                dto.setAttribute14("2");
            }
            map.put("records", activistDTOresult.getPageParameter().getTotalCount());
            map.put("page", activistDTOresult.getPageParameter().getPage());
            map.put("total", activistDTOresult.getPageParameter().getTotalPage());
            map.put("rows", activistDTOresult.getResult());
            return map;
        }

        return map;
    }

    private void convertDto(PartyMemberDTO dto) {
        if (dto == null) {
            return;
        }
        dto.setUserIdAlias(sysUserLoader.getSysUserNameById(dto.getUserId()));
        ;
    }
}
