package avicit.pb.member.partymember.controller;

import avicit.pb.member.partymember.dto.PartyMemberDTO;
import avicit.pb.member.partymember.dto.ReadExcel;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.DateUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.commons.utils.SysExcelFileWriteUtil;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.core.component.GrantMethod;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.eformbpms.dto.EformViewInfo;
import avicit.platform6.eformbpms.utils.BpmsCacheUtils;
import avicit.platform6.eformclient.controller.BpmsEformDataOptionsController;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.*;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanMap;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.Map.Entry;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com @创建时间： 2022-01-21 08:46
 * @类说明：党员信息表Controller @修改记录：
 */
@Controller
//因查询过慢，取消@scope('prototype')注解 从原型模式改为单例模型 提升查询速度 
//@Scope("prototype")
@RequestMapping("avicit/pb/member/partyMember/partyMemberController")
public class PartyMemberController implements LoaderConstant {
    private static final Logger LOGGER = LoggerFactory.getLogger(PartyMemberController.class);
    private static Collection<SysLookupSimpleVo> platformSex = null;
    private static Collection<SysLookupSimpleVo> platformEducationType = null;
    private static Collection<SysLookupSimpleVo> platformEducationLevel = null;
    private static Collection<SysLookupSimpleVo> platformPartyType = null;
    private static Collection<SysLookupSimpleVo> platformCategory = null;
    private static Collection<SysLookupSimpleVo> platformJoinzgType = null;
    private static Collection<SysLookupSimpleVo> platformRegularType = null;
    private static Collection<SysLookupSimpleVo> platformjoinbranchType = null;
    private static Collection<SysLookupSimpleVo> platformOnoffJob = null;
    private static Collection<SysLookupSimpleVo> platformvalidFlag = null;
    private static Collection<SysLookupSimpleVo> platformPostType = null;

    @Autowired
    private SysApplicationAPI sysApplicationAPI;
    @Autowired
    private PartyMemberService partyMemberService;
    @Autowired
    private BeanValidatorUtil beanValidatorUtil;
    @Autowired
    private BpmsCacheUtils catchUtils;
    @Autowired
    private PartyOrganizationService partyOrganizationService;
    private String languageCode = SessionHelper.getSystemDefaultLanguageCode();

    /**
     * 改为单例模式 启动时直接读取所有通用代码 无需每次都去redis里读取
     */
    public PartyMemberController() {
        PartyMemberController.platformSex = sysLookupLoader.getLookUpListByTypeByAppId("PLATFORM_SEX", "1");
        PartyMemberController.platformEducationType = sysLookupLoader.getLookUpListByTypeByAppId("PM_EDUCATION_TYPE", "1");
        PartyMemberController.platformEducationLevel = sysLookupLoader.getLookUpListByTypeByAppId("PM_EDUCATION_LEVEL", "1");
        PartyMemberController.platformPartyType = sysLookupLoader.getLookUpListByTypeByAppId("PM_PARTY_TYPE", "1");
        PartyMemberController.platformCategory = sysLookupLoader.getLookUpListByTypeByAppId("PM_CATEGORY", "1");
        PartyMemberController.platformJoinzgType = sysLookupLoader.getLookUpListByTypeByAppId("PM_JOINZG_TYPE", "1");
        PartyMemberController.platformRegularType = sysLookupLoader.getLookUpListByTypeByAppId("PM_REGULAR_TYPE", "1");
        PartyMemberController.platformjoinbranchType = sysLookupLoader.getLookUpListByTypeByAppId("PM_JOINBRANCH_TYPE", "1");
        PartyMemberController.platformOnoffJob = sysLookupLoader.getLookUpListByTypeByAppId("PM_ONOFF_JOB", "1");
        PartyMemberController.platformvalidFlag = sysLookupLoader.getLookUpListByTypeByAppId("PLATFORM_VALID_FLAG", "1");
        PartyMemberController.platformPostType = sysLookupLoader.getLookUpListByTypeByAppId("PM_BRANCH_POST_TYPE", "1");
    }


    /**
     * 跳转到列表页面
     *
     * @return ModelAndView
     */
    @RequestMapping(value = "toPartyMemberManage")
    public ModelAndView toPartyMemberManage() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("avicit/pb/member/partymember/PartyMemberManage");
        mav.addObject("url", "platform/avicit/pb/member/partyMember/partyMemberController/operation/");
        return mav;
    }

    /**
     * 跳转到列表页面
     *
     * @return ModelAndView
     */
    @RequestMapping(value = "toPartyMemberSnyManage")
    public ModelAndView toPartyMemberSynManage() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("avicit/pb/member/partymember/PartyMemberSnyManage");
        mav.addObject("url", "platform/avicit/pb/member/partyMember/partyMemberController/operation/");
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
        try {
            result = partyMemberService.searchPartyMemberByPage(queryReqBean, orderBy, keyWord);
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
            if (StringUtils.isNotEmpty(dto.getAttribute01())) {
                PartyOrganizationDTO partyOrganizationDTO;
                try {
                    partyOrganizationDTO = partyOrganizationService
                            .queryPartyOrganizationByPrimaryKey(dto.getAttribute01());
                    if (partyOrganizationDTO != null) {
                        dto.setAttribute01Alias(partyOrganizationDTO.getPartyName());
                    } else {
                        dto.setPartyIdAlias(dto.getAttribute01());
                    }
                } catch (Exception e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }

            }
            convertDto(dto);
        }
        map.put("records", result.getPageParameter().getTotalCount());
        map.put("page", result.getPageParameter().getPage());
        map.put("total", result.getPageParameter().getTotalPage());
        map.put("rows", result.getResult());
        LOGGER.info("成功获取PartyMemberDTO分页数据");
        return map;
    }




    /**
     * 列表页面分页查询
     *
     * @param pageParameter 查询条件
     * @param request       请求
     * @return Map<String, Object>
     */
    @RequestMapping(value = "/operation/getPartyMembersSnyByPage")
    @ResponseBody
    @RequiresPermissions("member:partyMember:view")
    public Map<String, Object> togetPartyMemberSnyByPage(PageParameter pageParameter, HttpServletRequest request) {
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
        try {
            result = partyMemberService.searchPartyMemberSnyByPage(queryReqBean, orderBy, keyWord);
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
            if (StringUtils.isNotEmpty(dto.getAttribute01())) {
                PartyOrganizationDTO partyOrganizationDTO;
                try {
                    partyOrganizationDTO = partyOrganizationService
                            .queryPartyOrganizationByPrimaryKey(dto.getAttribute01());
                    if (partyOrganizationDTO != null) {
                        dto.setAttribute01Alias(partyOrganizationDTO.getPartyName());
                    } else {
                        dto.setPartyIdAlias(dto.getAttribute01());
                    }
                } catch (Exception e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }

            }
            convertDto(dto);
        }
        map.put("records", result.getPageParameter().getTotalCount());
        map.put("page", result.getPageParameter().getPage());
        map.put("total", result.getPageParameter().getTotalPage());
        map.put("rows", result.getResult());
        LOGGER.info("成功获取PartyMemberDTO分页数据");
        return map;
    }

    /**
     * 根据传入的的类型跳转到对应页面
     *
     * @param type，包括三个值，分别是Add:新建；Edit：编辑；Detail：详情
     * @param id                                     数据的id
     * @return ModelAndView
     * @throws Exception
     */
    @RequestMapping(value = "/operation/{type}/{id}")
    public ModelAndView toOpertionPage(@PathVariable String type, @PathVariable String id) throws Exception {

        ModelAndView mav = new ModelAndView();
        // 编辑窗口或者详细页窗口
        if (!"Add".equals(type)) {
            PartyMemberDTO dto = partyMemberService.queryPartyMemberByPrimaryKey(id);
            if (dto != null) {
                if (StringUtils.isNotEmpty(dto.getPartyId())) {
                    PartyOrganizationDTO partyOrganizationDTO = partyOrganizationService
                            .queryPartyOrganizationByPrimaryKey(dto.getPartyId());
                    if (partyOrganizationDTO != null) {
                        dto.setPartyIdAlias(partyOrganizationDTO.getPartyName());
                    }
                }
                if (StringUtils.isNotEmpty(dto.getAttribute01())) {
                    PartyOrganizationDTO partyOrganizationDTODXZ = partyOrganizationService
                            .queryPartyOrganizationByPrimaryKey(dto.getAttribute01());

                    if (partyOrganizationDTODXZ != null) {
                        dto.setAttribute01Alias(partyOrganizationDTODXZ.getPartyName());
                    }
                }

                convertDto(dto);
                mav.addObject("partyMemberDTO", dto);
            }

        }
        mav.setViewName("avicit/pb/member/partymember/PartyMember" + type);
        return mav;
    }

    /**
     * 保存数据
     *
     * @param request 请求
     * @return Map<String, Object>
     */
    @RequestMapping(value = "/operation/save", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("member:partyMember:edit")
    public Map<String, Object> toSavePartyMember(HttpServletRequest request) {
        Map<String, Object> map = new HashMap<String, Object>();
        String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        try {
            PartyMemberDTO partyMemberDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
                    new TypeReference<PartyMemberDTO>() {
                    });
            // 调用校验工具类，校验数据
            beanValidatorUtil.validateObject(partyMemberDTO);
            if (StringUtils.isEmpty(partyMemberDTO.getId())) {
                // 新增
                partyMemberDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
                //20241120 modby wenc 取消根据转正日期修改党员类型
                /*if (partyMemberDTO.getRegularDate() != null) {
                    partyMemberDTO.setPartyType("1");
                } else {
                    partyMemberDTO.setPartyType("0");
                }*/
                if (partyMemberDTO.getBirthday() != null) {
                    String age = getAge(partyMemberDTO.getBirthday());
                    if (StringUtils.isNotEmpty(age)) {
                        partyMemberDTO.setAttribute02(age);
                    }
                }
                if (partyMemberDTO.getRegularDate() != null) {
                    String partyAge = getPartyAge(partyMemberDTO.getRegularDate());
                    if (StringUtils.isNotEmpty(partyAge)) {
                        partyMemberDTO.setAttribute05(partyAge);
                    }
                }
                String id = partyMemberService.insertPartyMember(partyMemberDTO);
                map.put("id", id);
            } else {
                //20241120 modby wenc 取消根据转正日期修改党员类型
                /*if (partyMemberDTO.getRegularDate() != null) {
                    partyMemberDTO.setPartyType("1");
                } else {
                    partyMemberDTO.setPartyType("0");
                }*/
                if (partyMemberDTO.getBirthday() != null) {
                    String age = getAge(partyMemberDTO.getBirthday());
                    if (StringUtils.isNotEmpty(age)) {
                        partyMemberDTO.setAttribute02(age);
                    }
                }
                if (partyMemberDTO.getRegularDate() != null) {
                    String partyAge = getPartyAge(partyMemberDTO.getRegularDate());
                    if (StringUtils.isNotEmpty(partyAge)) {
                        partyMemberDTO.setAttribute05(partyAge);
                    }
                }
                partyMemberService.updatePartyMemberSensitive(partyMemberDTO);
                map.put("id", partyMemberDTO.getId());
            }
            map.put("flag", OpResult.success);
        } catch (Exception ex) {
            map.put("errorMsg", ex.getMessage());
            map.put("flag", OpResult.failure);
            return map;
        }
        return map;

    }

    /**
     * 按照id批量删除数据
     *
     * @param ids id数组
     * @return Map<String, Object>
     */
    @RequestMapping(value = "/operation/delete", method = RequestMethod.POST)
    @ResponseBody
    @RequiresPermissions("member:partyMember:delete")
    public Map<String, Object> toDeletePartyMember(@RequestBody String[] ids) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            partyMemberService.deletePartyMemberByIds(ids);
            map.put("flag", OpResult.success);
        } catch (Exception ex) {
            map.put("flag", OpResult.failure);
            return map;
        }
        return map;
    }

    /**
     * 按照id批量删除数据
     *
     * @param
     * @return Map<String, Object>
     */
    @RequestMapping(value = "/operation/getAllPartyMembersByPartyOrg", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> toGetAllPartyMembersByPartyOrg() {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            List<Map<String, String>> retListMap = partyMemberService.getAllPartyMembersByPartyOrg();
            map.put("flag", OpResult.success);
            map.put("records", retListMap);
        } catch (Exception ex) {
            map.put("flag", OpResult.failure);
            return map;
        }
        return map;
    }

    /**
     * 按照id批量删除数据
     * <p>
     * id数组
     *
     * @return Map<String, Object>
     */
    @RequestMapping(value = "/operation/getPartyMemberOrganization", method = RequestMethod.POST)
    @ResponseBody

    public Map<String, Object> getPartyMemberOrganization(HttpServletRequest request) {
        // JsonHelper.getInstance().readValue(arg0, arg1);
        Map<String, Object> map = new HashMap<String, Object>();
        String userId = ServletRequestUtils.getStringParameter(request, "userId", "");
        try {
            if (StringUtils.isNotEmpty(userId)) {
                Map<String, String> retMap = partyMemberService.getPartyMemberOrganizationByUserId(userId);
                if (!retMap.isEmpty()) {
                    Iterator<Entry<String, String>> it = retMap.entrySet().iterator();
                    while (it.hasNext()) {
                        Entry<String, String> entry = it.next();
                        map.put(entry.getKey(), entry.getValue());

                    }

                }
                map.put("flag", OpResult.success);
            } else {
                map.put("flag", OpResult.failure);
            }

        } catch (Exception ex) {
            map.put("flag", OpResult.failure);
            return map;
        }
        return map;
    }

    /**
     * 按照id批量删除数据
     * <p>
     * id数组
     *
     * @return Map<String, Object>
     */
    @RequestMapping(value = "/operation/getPartyGroupByPartyId", method = RequestMethod.POST)
    @ResponseBody

    public Map<String, Object> getPartyGroupByPartyId(HttpServletRequest request) {
        // JsonHelper.getInstance().readValue(arg0, arg1);
        Map<String, Object> map = new HashMap<String, Object>();
        String partyId = ServletRequestUtils.getStringParameter(request, "partyId", "");
        try {
            if (StringUtils.isNotEmpty(partyId)) {
                Map<String, String> retMap = partyMemberService.getPartyGroupByPartyId(partyId);
                if (!retMap.isEmpty()) {
                    Iterator<Entry<String, String>> it = retMap.entrySet().iterator();
                    while (it.hasNext()) {
                        Entry<String, String> entry = it.next();
                        map.put(entry.getKey(), entry.getValue());

                    }

                }
                map.put("flag", OpResult.success);
            } else {
                map.put("flag", OpResult.failure);
            }

        } catch (Exception ex) {
            map.put("flag", OpResult.failure);
            return map;
        }
        return map;
    }

    /**
     * 导出数据
     *
     * @return Map<String, Object>
     */
    @RequestMapping(value = "/operation/exportExcel", method = RequestMethod.POST)
    public void exportExcel(HttpServletRequest request, HttpServletResponse response) {
        // 导出模板code
        String templateCode = ServletRequestUtils.getStringParameter(request, "templateCode", "");
        // 选择导出列
        String selectCols = ServletRequestUtils.getStringParameter(request, "selectCols", "");
        // 选择导出数据
        String selectIds = ServletRequestUtils.getStringParameter(request, "selectIds", "");
        // 查询条件
        String selectConditions = ServletRequestUtils.getStringParameter(request, "selectConditions", "");
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        List<SysExcelColumnDTO> colsList = null;
        if (selectCols != null && !"".equals(selectCols)) {
            colsList = JsonHelper.getInstance().readValue(selectCols, dateFormat,
                    new TypeReference<List<SysExcelColumnDTO>>() {
                    });
        }
        List<String> idsList = null;
        if (selectIds != null && !"".equals(selectIds)) {
            idsList = JsonHelper.getInstance().readValue(selectIds, dateFormat, new TypeReference<List<String>>() {
            });
        }
        PartyMemberDTO param = null;
        if (selectConditions != null && !"".equals(selectConditions)) {
            param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
                    new TypeReference<PartyMemberDTO>() {
                    });
        } else {
            param = new PartyMemberDTO();
        }
        param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
        try {
            List<PartyMemberDTO> dtoList = partyMemberService.searchPartyMemberForExport(param, idsList);
            for (int i = 0; dtoList != null && i < dtoList.size(); i++) {
                PartyMemberDTO dto = dtoList.get(i);
                if (StringUtils.isNotEmpty(dto.getPartyId())) {
                    PartyOrganizationDTO partyOrganizationDTO;
                    try {
                        partyOrganizationDTO = partyOrganizationService
                                .queryPartyOrganizationByPrimaryKey(dto.getPartyId());
                        if (partyOrganizationDTO != null) {
                            // dto.setPartyIdAlias(partyOrganizationDTO.getPartyName());
                            dto.setPartyId(partyOrganizationDTO.getPartyName());
                            // dto.setDeptId(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(),
                            // languageCode));
                        }
                        partyOrganizationDTO = partyOrganizationService
                                .queryPartyOrganizationByPrimaryKey(dto.getAttribute01());
                        if (partyOrganizationDTO != null) {
                            // dto.setPartyIdAlias(partyOrganizationDTO.getPartyName());
                            dto.setAttribute01(partyOrganizationDTO.getPartyName());
                            // dto.setDeptId(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(),
                            // languageCode));
                        }
                    } catch (Exception e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    }

                }
                dto.setUserIdAlias(sysUserLoader.getSysUserNameById(dto.getUserId()));
                dto.setDeptIdAlias(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(),
                        SessionHelper.getCurrentLanguageCode()));
                this.convertDto(dto);
				/*dto.setSexName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PLATFORM_SEX", dto.getSex(),
						sysApplicationAPI.getCurrentAppId()));
				dto.setEducationSectorName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId(
						"PM_EDUCATION_TYPE", dto.getEducationSector(), sysApplicationAPI.getCurrentAppId()));
				dto.setEducationLevelName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId(
						"PM_EDUCATION_LEVEL", dto.getEducationLevel(), sysApplicationAPI.getCurrentAppId()));
				dto.setPartyTypeName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_PARTY_TYPE",
						dto.getPartyType(), sysApplicationAPI.getCurrentAppId()));
				dto.setCategoryName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_CATEGORY",
						dto.getCategory(), sysApplicationAPI.getCurrentAppId()));
				dto.setJoinzgTypeName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_JOINZG_TYPE",
						dto.getJoinzgType(), sysApplicationAPI.getCurrentAppId()));
				dto.setRegularTypeName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_REGULAR_TYPE",
						dto.getRegularType(), sysApplicationAPI.getCurrentAppId()));
				dto.setJoinbranchTypeName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId(
						"PM_JOINBRANCH_TYPE", dto.getJoinbranchType(), sysApplicationAPI.getCurrentAppId()));
				dto.setOnoffJobName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_ONOFF_JOB",
						dto.getOnoffJob(), sysApplicationAPI.getCurrentAppId()));
				dto.setStatusName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PLATFORM_VALID_FLAG",
						dto.getStatus(), sysApplicationAPI.getCurrentAppId()));
				dto.setBranchPostName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_BRANCH_POST_TYPE",
						dto.getBranchPost(), sysApplicationAPI.getCurrentAppId()));
				dto.setAttribute03(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId(
						"PM_PROFESSIONAL_RANK_LEVEL", dto.getAttribute03(), sysApplicationAPI.getCurrentAppId()));
				dto.setAttribute04(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_SKILL_LEVEL",
						dto.getAttribute04(), sysApplicationAPI.getCurrentAppId()));
				dto.setAttribute06(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_GROUP_LEADER_YN",
						dto.getAttribute06(), sysApplicationAPI.getCurrentAppId()));*/
                // dto.setAttribute07(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_REPRESENT_LEVEL",
                // dto.getAttribute07(),sysApplicationAPI.getCurrentAppId()));
            }
            List<Map<String, Object>> dataList = objectsToMaps(dtoList);
            byte[] bytes = partyMemberService.exportExcel(templateCode, colsList, dataList);
            String excelFileName = param.getLogTitle() + "_" + System.currentTimeMillis() + ".xlsx";
            SysExcelFileWriteUtil.writeExcel(excelFileName, bytes, request, response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 导入党费下载模版
     *
     * @param request  请求参数
     * @param response 请求参数
     */
    @GetMapping("/doDownload")
    public void doDownload(HttpServletRequest request, HttpServletResponse response) {
        try {
            ReadExcel readExcel = new ReadExcel();
            HSSFWorkbook workbook = new HSSFWorkbook();
            String fileName = "";
            String[] headers = {"姓名", "党支部名称", "证件号码", "缴费金额"};
            readExcel.downloadExcel(workbook, 0, headers, "党费导入模版");
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            InputStream ins = null;
            BufferedInputStream bins = null;
            BufferedOutputStream bouts = null;
            try {
                workbook.write(out);
                byte[] content = out.toByteArray();
                ins = new ByteArrayInputStream(content);
                fileName = URLEncoder.encode(("党费导入模版.xlsx"), "UTF-8").replace("+", "%20");
                response.reset();
                response.setContentType("application/vnd.ms-excel;charset=utf-8");
                response.setHeader("Content-Disposition", "attachment;filename=" + fileName);
                ServletOutputStream outputStrem = response.getOutputStream();
                bins = new BufferedInputStream(ins);
                bouts = new BufferedOutputStream(outputStrem);
                byte[] buff = new byte[2048];
                int bytesRead;
                while (-1 != (bytesRead = bins.read(buff, 0, buff.length))) {
                    bouts.write(buff, 0, bytesRead);
                }
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                assert ins != null;
                out.close();
                ins.close();
                assert bins != null;
                assert bouts != null;
                bins.close();
                bouts.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 党费导入
     *
     * @param request  请求参数
     * @param response 请求参数
     * @param file     文件实例
     */
    @RequestMapping("/uploadExcels")
    public void uploadExcels(@RequestParam("mulFile") MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
        ReadExcel readExcel = new ReadExcel();
        try {
            response.reset();
            response.setContentType("text/plain;charset=UTF-8");
            if (file == null) {
                return;
            }
            int sheetNum = 0;
            List<Map<String, Object>> excelInfo = readExcel.getExcelInfo(file, sheetNum);
            int indexDown = 0;
            int indexUp = 0;
            List<Map<String, Object>> errorMaps = new ArrayList<>();
            if (excelInfo != null && excelInfo.size() >= 1) {
                for (Map<String, Object> dto : excelInfo) {
                    String name = (String) dto.get("姓名");
                    if (dto.get("证件号码") == null) {
                        indexDown++;
                        dto.put("msg", "未获取到证件号码");
                        errorMaps.add(dto);
                        continue;
                    }
                    if (dto.get("缴费金额") == null) {
                        indexDown++;
                        dto.put("msg", "未获取到缴费金额");
                        errorMaps.add(dto);
                        continue;
                    }
                    String idcard = (String) dto.get("证件号码");
                    String party_money = (String) dto.get("缴费金额");
                    JdbcTemplate bean = SpringFactory.getBean(JdbcTemplate.class);
                    String sql = "update Party_Member set party_money = '" + party_money + "' where idcard = '" + idcard + "'";
                    int update = bean.update(sql);
                    if (update != 1) {
                        indexDown++;
                        dto.put("msg", "修改失败,修改为0");
                        errorMaps.add(dto);
                    } else {
                        indexUp++;
                        dto.put("msg", "修改成功!");
                        errorMaps.add(dto);
                    }

                }
            }
            //将错误信息写回去
            try {
                HSSFWorkbook workbook = new HSSFWorkbook();
                String fileName = null;
                HSSFSheet sheet = null;
                String[] headers = {"姓名", "党支部名称", "证件号码", "缴费金额", "信息"};
                if (indexDown == 0) {
                    readExcel.downloadExcel(workbook, 0, headers, "党费导入成功条目");
                    sheet = workbook.getSheet("党费导入成功条目");
                    fileName = URLEncoder.encode(("党费导入成功条目.xlsx"), "UTF-8").replace("+", "%20");
                } else {
                    readExcel.downloadExcel(workbook, 0, headers, "党费导入失败条目");
                    sheet = workbook.getSheet("党费导入失败条目");
                    fileName = URLEncoder.encode(("党费导入失败条目.xlsx"), "UTF-8").replace("+", "%20");
                }
                for (int i = 0; i < errorMaps.size(); i++) {
                    int index = i + 1;
                    Map<String, Object> dto = errorMaps.get(i);
                    HSSFRow row = sheet.createRow(index);
                    String[] cells = {(String) dto.get("姓名"), (String) dto.get("党支部名称"), (String) dto.get("证件号码"), (String) dto.get("缴费金额"), (String) dto.get("msg")};
                    for (int j = 0; j < cells.length; j++) {
                        HSSFCell cell = row.createCell(j);
                        HSSFRichTextString text = new HSSFRichTextString(cells[j]);
                        cell.setCellValue(text.toString());
                    }
                }
                InputStream ins = null;
                BufferedInputStream bins = null;
                BufferedOutputStream bouts = null;
                ByteArrayOutputStream out = new ByteArrayOutputStream();
                try {
                    workbook.write(out);
                    byte[] content = out.toByteArray();
                    ins = new ByteArrayInputStream(content);
                    response.setContentType("application/vnd.ms-excel;charset=utf-8");
                    response.setHeader("Content-Disposition", "attachment;filename=" + fileName);
                    response.reset();
                    ServletOutputStream outputStrem = response.getOutputStream();
                    bins = new BufferedInputStream(ins);
                    bouts = new BufferedOutputStream(outputStrem);
                    byte[] buff = new byte[2048];
                    int bytesRead;
                    while (-1 != (bytesRead = bins.read(buff, 0, buff.length))) {
                        bouts.write(buff, 0, bytesRead);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    assert ins != null;
                    out.close();
                    ins.close();
                    assert bins != null;
                    assert bouts != null;
                    bins.close();
                    bouts.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 将List转换为List<Map<String, Object>>
     *
     * @param objList
     * @return List<Map < String, Object>>
     */
    private List<Map<String, Object>> objectsToMaps(List<PartyMemberDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (int i = 0; objList != null && i < objList.size(); i++) {
            PartyMemberDTO bean = objList.get(i);
            if (bean != null) {
                Map<String, Object> map = new LinkedHashMap<>();
                BeanMap beanMap = BeanMap.create(bean);
                for (Object key : beanMap.keySet()) {
                    map.put(key.toString(), beanMap.get(key));
                }
                list.add(map);
            }
        }
        return list;
    }

    /**
     * 转换dto中通用选择属性的名称
     */
    private void convertDto(PartyMemberDTO dto) {
        if (dto == null) {
            return;
        }
        dto.setUserIdAlias(sysUserLoader.getSysUserNameById(dto.getUserId()));

        String sysDeptName = sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(),
                SessionHelper.getCurrentLanguageCode());
        if (StringUtils.equals("该部门语言信息丢失", sysDeptName)) {
            dto.setDeptIdAlias(dto.getDeptId());
        } else {
            dto.setDeptIdAlias(
                    sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(), SessionHelper.getCurrentLanguageCode()));
        }
        dto.setSexName(lookCode(platformSex, dto.getSex()));
        dto.setEducationSectorName(lookCode(platformEducationType, dto.getEducationSector()));
        dto.setEducationLevelName(lookCode(platformEducationLevel, dto.getEducationLevel()));
        dto.setPartyTypeName(lookCode(platformPartyType, dto.getPartyType()));
        dto.setCategoryName(lookCode(platformCategory, dto.getCategory()));
        dto.setJoinzgTypeName(lookCode(platformJoinzgType, dto.getJoinzgType()));
        dto.setRegularTypeName(lookCode(platformRegularType, dto.getRegularType()));
        dto.setJoinbranchTypeName(lookCode(platformjoinbranchType, dto.getJoinbranchType()));
        dto.setOnoffJobName(lookCode(platformOnoffJob, dto.getOnoffJob()));
        dto.setStatusName(lookCode(platformvalidFlag, dto.getStatus()));
        dto.setBranchPostName(lookCode(platformPostType, dto.getBranchPost()));
		/*dto.setSexName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PLATFORM_SEX", dto.getSex(),
				sysApplicationAPI.getCurrentAppId()));
		dto.setEducationSectorName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_EDUCATION_TYPE",
				dto.getEducationSector(), sysApplicationAPI.getCurrentAppId()));
		dto.setEducationLevelName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_EDUCATION_LEVEL",
				dto.getEducationLevel(), sysApplicationAPI.getCurrentAppId()));
		dto.setPartyTypeName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_PARTY_TYPE",
				dto.getPartyType(), sysApplicationAPI.getCurrentAppId()));
		dto.setCategoryName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_CATEGORY", dto.getCategory(),
				sysApplicationAPI.getCurrentAppId()));
		dto.setJoinzgTypeName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_JOINZG_TYPE",
				dto.getJoinzgType(), sysApplicationAPI.getCurrentAppId()));
		dto.setRegularTypeName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_REGULAR_TYPE",
				dto.getRegularType(), sysApplicationAPI.getCurrentAppId()));
		dto.setJoinbranchTypeName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_JOINBRANCH_TYPE",
				dto.getJoinbranchType(), sysApplicationAPI.getCurrentAppId()));
		dto.setOnoffJobName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_ONOFF_JOB", dto.getOnoffJob(),
				sysApplicationAPI.getCurrentAppId()));
		dto.setStatusName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PLATFORM_VALID_FLAG",
				dto.getStatus(), sysApplicationAPI.getCurrentAppId()));
		dto.setBranchPostName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PM_BRANCH_POST_TYPE",
				dto.getBranchPost(), sysApplicationAPI.getCurrentAppId()));*/

        // dto.setStatusName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PLATFORM_VALID_FLAG",
        // dto.getStatus(),sysApplicationAPI.getCurrentAppId()));
    }

    private String lookCode(Collection<SysLookupSimpleVo> records, String looupCode) {
        String lookupName = "";
        if ((records != null) && (records.size() > 0)) {
            for (SysLookupSimpleVo sysLookupSimpleVo : records) {
                if (sysLookupSimpleVo.getLookupCode().equals(looupCode)) {
                    lookupName = sysLookupSimpleVo.getLookupName();
                    break;
                }
            }
        }
        return lookupName;
    }

    private String getAge(Date birthDay) throws Exception {

        String retDate = "";

        Calendar calendar = Calendar.getInstance();

        Date today = DateUtil.getToday();

        calendar.setTime(today);

        int todayYear = calendar.get(Calendar.YEAR);

        int todayMonth = calendar.get(Calendar.MONTH) + 1;

        int todayDay = calendar.get(Calendar.DATE);

        calendar.setTime(birthDay);

        // Date today = DateUtil.getToday();

        int birthDayYear = calendar.get(Calendar.YEAR);

        int birthDayMonth = calendar.get(Calendar.MONTH) + 1;

        int birthDayDay = calendar.get(Calendar.DATE);

        if (todayYear >= birthDayYear) {

            if (todayMonth - birthDayMonth > 0) {

                retDate = String.valueOf(todayYear - birthDayYear);

            } else if (todayMonth - birthDayMonth == 0) {

                if (todayDay - birthDayDay >= 0) {

                    retDate = String.valueOf(todayYear - birthDayYear);

                } else {
                    retDate = String.valueOf(todayYear - birthDayYear - 1);
                }

            } else {

                retDate = String.valueOf(todayYear - birthDayYear - 1);
            }
        } else {

            throw new Exception(birthDayYear + "-" + birthDayMonth + "-" + birthDayDay + ":日期输入错误！！！");
        }
        return retDate;
    }

    private String getPartyAge(Date regularDate) throws Exception {

        String retDate = "";

        Calendar calendar = Calendar.getInstance();

        Date today = DateUtil.getToday();

        calendar.setTime(today);

        int todayYear = calendar.get(Calendar.YEAR);

        int todayMonth = calendar.get(Calendar.MONTH) + 1;

        int todayDay = calendar.get(Calendar.DATE);

        calendar.setTime(regularDate);

        // Date today = DateUtil.getToday();

        int regularDayYear = calendar.get(Calendar.YEAR);

        int regularDayMonth = calendar.get(Calendar.MONTH) + 1;

        int regularDayDay = calendar.get(Calendar.DATE);

        if (todayYear >= regularDayYear) {

            if (todayMonth - regularDayMonth > 0) {

                retDate = String.valueOf(todayYear - regularDayYear);

            } else if (todayMonth - regularDayMonth == 0) {

                if (todayDay - regularDayDay >= 0) {

                    retDate = String.valueOf(todayYear - regularDayYear);

                } else {
                    retDate = String.valueOf(todayYear - regularDayYear - 1);
                }

            } else {

                retDate = String.valueOf(todayYear - regularDayYear - 1);
            }
        } else {

            throw new Exception(regularDayYear + "-" + regularDayMonth + "-" + regularDayDay + ":日期输入错误！！！");
        }
        return retDate;
    }
}
