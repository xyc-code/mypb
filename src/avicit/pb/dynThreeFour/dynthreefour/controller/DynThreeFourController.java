package avicit.pb.dynThreeFour.dynthreefour.controller;
import avicit.pb.dynThreeFour.dynthreefour.dto.DynThreeFourDTO;
import avicit.pb.dynThreeFour.dynthreefour.dto.DynThreeFourTjDTO;
import avicit.pb.dynThreeFour.dynthreefour.service.DynThreeFourService;
import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.commons.utils.SysExcelFileWriteUtil;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanMap;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-14 09:04
 * @类说明：DYN_THREE_FOURController
 * @修改记录：
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/dyntaskchecklist/dynThreeFour/dynThreeFourController")
public class DynThreeFourController implements LoaderConstant {
    private static final Logger LOGGER = LoggerFactory.getLogger(DynThreeFourController.class);

    @Autowired
    private SysApplicationAPI sysApplicationAPI;
    @Autowired
    private DynThreeFourService dynThreeFourService;
    @Autowired
    private BeanValidatorUtil beanValidatorUtil;
    @Autowired
    private JdbcTemplate jdbcTemplate;


    /**
     * 跳转到列表页面
     *
     * @return ModelAndView
     */
    @RequestMapping(value = "toDynThreeFourManage")
    public ModelAndView toDynThreeFourManage() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("avicit/pb/dynThreeFour/dynthreefour/DynThreeFourManage");
        mav.addObject("url", "platform/avicit/pb/dyntaskchecklist/dynThreeFour/dynThreeFourController/");
        return mav;
    }
    /**
     * 跳转到统计图页面
     *
     * @return ModelAndView
     */
    @RequestMapping(value = "toDynThreeFourManageView")
    public ModelAndView toDynThreeFourManageView(HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("avicit/pb/dynThreeFour/dynthreefour/DynThreeFourEdit");
        return mav;
    }

    /**
     * 列表页面分页查询
     *
     * @param pageParameter 查询条件
     * @param request       请求
     * @return Map<String, Object>
     */
    @RequestMapping(value = "/operation/getDynThreeFoursByPage")
    @ResponseBody
    @RequiresPermissions("dyntaskchecklist:dynThreeFour:view")
    public Map<String, Object> togetDynThreeFourByPage(PageParameter pageParameter, HttpServletRequest request) {
        QueryReqBean<DynThreeFourDTO> queryReqBean = new QueryReqBean<DynThreeFourDTO>();
        queryReqBean.setPageParameter(pageParameter);
        //表单数据
        String json = ServletRequestUtils.getStringParameter(request, "param", "");
        //字段查询条件
        String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");
        //排序方式
        String sord = ServletRequestUtils.getStringParameter(request, "sord", "");
        //排序字段
        String sidx = ServletRequestUtils.getStringParameter(request, "sidx", "");
        if (StringUtils.isNotEmpty(keyWord)) {
            json = keyWord;
        }
        String orderBy = "";
        String cloumnName = "";
        if (sidx != null && sord != null && !"".equals(sord) && !"".equals(sidx)) {
            cloumnName = ComUtil.getColumn(DynThreeFourDTO.class, sidx);
            //这里先进行判断是否有对应的数据库字段
            if (cloumnName != null) {
                orderBy = " " + cloumnName + " " + sord;
            } else {
                //判断是否为特殊控件导致字段无法匹配
                if (sidx.indexOf("Alias") != -1) {
                    cloumnName = ComUtil.getColumn(DynThreeFourDTO.class,
                            sidx.substring(0, sidx.lastIndexOf("Alias")));
                } else if (sidx.indexOf("Name") != -1) {
                    cloumnName = ComUtil.getColumn(DynThreeFourDTO.class,
                            sidx.substring(0, sidx.lastIndexOf("Name")));
                }
                if (cloumnName != null) {
                    orderBy = " " + cloumnName + " " + sord;
                }
            }
        }
        HashMap<String, Object> map = new HashMap<String, Object>();
        DynThreeFourDTO param = null;
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        QueryRespBean<DynThreeFourDTO> result = null;
        if (json != null && !"".equals(json)) {
            param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynThreeFourDTO>() {
            });
        } else {
            param = new DynThreeFourDTO();
        }
        param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
        queryReqBean.setSearchParams(param);
        try {
            result = dynThreeFourService.searchDynThreeFourByPage(queryReqBean, orderBy, keyWord);
        } catch (Exception ex) {
            return map;
        }
        for (DynThreeFourDTO dto : result.getResult()) {
            convertDto(dto);
        }
        map.put("records", result.getPageParameter().getTotalCount());
        map.put("page", result.getPageParameter().getPage());
        map.put("total", result.getPageParameter().getTotalPage());
        map.put("rows", result.getResult());
        LOGGER.info("成功获取DynThreeFourDTO分页数据");
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
    @RequestMapping(value = "/operation/{type}")
    public ModelAndView toOpertionPage(@PathVariable String type, String id)
            throws Exception {
        ModelAndView mav = new ModelAndView();
        mav.addObject("PARTY_NAME",id);
        mav.setViewName("avicit/pb/dynThreeFour/dynthreefour/DynThreeFour" + type);
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
    @RequiresPermissions("dyntaskchecklist:dynThreeFour:edit")
    public Map<String, Object> toSaveDynThreeFour(HttpServletRequest request) {
        Map<String, Object> map = new HashMap<String, Object>();
        String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        try {
            DynThreeFourDTO dynThreeFourDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
                    new TypeReference<DynThreeFourDTO>() {
                    });
            //调用校验工具类，校验数据
            beanValidatorUtil.validateObject(dynThreeFourDTO);
            if (StringUtils.isEmpty(dynThreeFourDTO.getId())) {
                //新增
                dynThreeFourDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
                String id = dynThreeFourService.insertDynThreeFour(dynThreeFourDTO);
                map.put("id", id);
            } else {
                //修改
                dynThreeFourService.updateDynThreeFourSensitive(dynThreeFourDTO);
                map.put("id", dynThreeFourDTO.getId());
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
    @RequiresPermissions("dyntaskchecklist:dynThreeFour:delete")
    public Map<String, Object> toDeleteDynThreeFour(@RequestBody String[] ids) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            dynThreeFourService.deleteDynThreeFourByIds(ids);
            map.put("flag", OpResult.success);
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
        DynThreeFourDTO param = null;
        if (selectConditions != null && !"".equals(selectConditions)) {
            param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
                    new TypeReference<DynThreeFourDTO>() {
                    });
        } else {
            param = new DynThreeFourDTO();
        }
        param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
        try {
            List<DynThreeFourDTO> dtoList = dynThreeFourService.searchDynThreeFourForExport(param, idsList);
            for (int i = 0; dtoList != null && i < dtoList.size(); i++) {
                convertDto(dtoList.get(i));
            }
            List<Map<String, Object>> dataList = objectsToMaps(dtoList);
            byte[] bytes = dynThreeFourService.exportExcel(templateCode, colsList, dataList);
            String excelFileName = param.getLogTitle() + "_" + System.currentTimeMillis() + ".xlsx";
            SysExcelFileWriteUtil.writeExcel(excelFileName, bytes, request, response);
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
    private List<Map<String, Object>> objectsToMaps(List<DynThreeFourDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
        for (int i = 0; objList != null && i < objList.size(); i++) {
            DynThreeFourDTO bean = objList.get(i);
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
    private void convertDto(DynThreeFourDTO dto) {
        if (dto == null) {
            return;
        }
        dto.setSecretLevelName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PLATFORM_FILE_SECRET_LEVEL", dto.getSecretLevel(), sysApplicationAPI.getCurrentAppId()));
    }

    //统计三会一课
    @RequestMapping("/threeView")
    @ResponseBody
    public Map<String, Object> threeView(HttpServletRequest request, HttpServletResponse response) {
        Map<String, Object> map = new HashMap<>();
        List<Map<String, Object>> partyOrganMemberDTOS = null;
        String year = request.getParameter("year");
        String partyName = request.getParameter("partyName");

        //0704
        SysUser sysUser = SessionHelper.getLoginSysUser(request);

        List<Map<String,Object>> listMap = jdbcTemplate.queryForList("select * from sys_user_role_tyqx_v t where t.no = '"+ sysUser.getNo() +"'  ");

        for (Map<String, Object> mapdr : listMap) {
            if (mapdr.get("ROLE_ID").toString().equals("402811817e9a2f1e017e9a5e2bd1023b")) {
                Map<String, Object> map1 = jdbcTemplate.queryForMap("select * from party_member p  where p.user_id = '" + sysUser.getId() + "'");
                Map<String, Object> map2 = jdbcTemplate.queryForMap("select * from party_organization pp where pp.id = '" + map1.get("PARTY_ID").toString() + "'");
                Map<String, Object> mapdzz = jdbcTemplate.queryForMap("select * from sys_user_role_tyqx_v t where t.no = '" + sysUser.getNo() + "'  and t.ROLE_ID = '402811817e9a2f1e017e9a5e2bd1023b' ");
                if(mapdzz.get("ROLE_ID").toString().equals("402811817e9a2f1e017e9a5e2bd1023b")) {
                    String loginUserId = sysUser.getId();
                    String tableName = "DYN_THREE_FOUR";
                    Map<String,String> paramMap = new HashMap<>();
                    paramMap.put("loginUserId",loginUserId);
                    paramMap.put("tableName",tableName);
                   String sql = this.getSql(paramMap);
                    partyOrganMemberDTOS = this.dynThreeFourService.queryPartyOrgByparty(sql);
                }
            } else if (mapdr.get("ROLE_ID").toString().equals("402811817e9a98d5017e9e063c6a0236")) {
                partyOrganMemberDTOS = this.dynThreeFourService.queryPartyOrg(partyName);
            }
        }
        try {
            if (partyOrganMemberDTOS != null) {
                this.dynThreeFourService.setDynThreeFourView(partyOrganMemberDTOS,year);
            }
        } catch (Exception e) {
            e.printStackTrace();
            LOGGER.error("统计三会一课失败，错误信息" + e.getMessage());
        }


        map.put("rows", partyOrganMemberDTOS);
        return map;
    }
    //三会一课指定党支部统计
    @RequestMapping("/threeContent")
    @ResponseBody
    public Map<String,Object> threeContent(HttpServletRequest request, HttpServletResponse response){
        Map<String, Object> map = new HashMap<>();
        String party_name = request.getParameter("PARTY_NAME");
        String year = request.getParameter("year");
        //查询党支部
        List<Map<String,Object>> mapList = null;
        List<Map<String, Object>> partyOrganMemberDTOS = this.dynThreeFourService.queryPartyOrg(party_name);
        try {
            if (partyOrganMemberDTOS != null) {
                mapList = this.dynThreeFourService.threeContent(partyOrganMemberDTOS,year);
            }
        } catch (Exception e) {
            e.printStackTrace();
            LOGGER.error("统计三会一课失败，错误信息" + e.getMessage());
        }
        map.put("rows",mapList);
        return map;
    }

    public String getSql(Map<String, String> paramMap) {
        String tableName = paramMap.get("tableName"); // 配置的表名
        String loginUserId = paramMap.get("loginUserId"); // 登录人ID
//		String loginOrgId = paramMap.get("loginOrgId"); // 登录组织ID
//		String loginDeptId = paramMap.get("loginDeptId"); // 登录人部门ID
        //党支部权限查询
        String paListId = "";
        //查找用户是否存在于组织结构表的子表中
        List<Map<String,Object>> list = jdbcTemplate.queryForList("select t.party_id from PARTY_ORGAN_MEMBER t where t.user_id = '"+loginUserId+"'");
        if(list!=null && list.size()!=0){
            paListId = "ID in (";
            //如果存在则去组织结构表寻找他所关联的组织
            for(int i=0;i<list.size();i++){
                Map<String, Object> mapList = list.get(i);
                String partyId  = (String)mapList.get("party_id");
                if(i!=0){
                    //如果i不等于0则已经走过一次循环了 需要增加一个，
                    paListId += ",";
                }
                paListId += "'";
                paListId += partyId;
                paListId +="'";
                paListId = sqlFunction(partyId,paListId);
            }
        }else{
            //如果表名为党员表 则将查询字段改为attribute01
            if(tableName.equals("PARTY_MEMBER")){
                paListId = "attribute_01 in (";
            }else if(tableName.equals("PARTY_ACTIVIST")){
                //如果表名为积极分子 则将查询字段改为attribute08
                paListId = "attribute_08 in (";
            }else{
                //非党员与积极分子功能查询通过PARTY_ID查询
                paListId = "PARTY_ID in (";
                List<Map<String,Object>> list3 = jdbcTemplate.queryForList("select t.party_id from PARTY_MEMBER t where t.user_id = '"+loginUserId+"'");
                for(int i=0;i<list3.size();i++){
                    Map<String, Object> mapList = list3.get(i);
                    String partyId  = (String)mapList.get("party_id");
                    if(i!=0){
                        //如果i不等于0则已经走过一次循环了 需要增加一个，
                        paListId += ",";
                    }
                    paListId += "'";
                    //这里放开的话 会导致能看见当前支部所有信息
                    //paListId += partyId;
                    paListId +="'";
                    paListId = sqlFunction(partyId,paListId);
                }
                paListId += ")";
                return paListId;
            }
            //如果不存在就去党员表查询 当来到党员表去查询时说明党组织结构里并没有维护这个党员 而只有小组才不会维护 所以认定为要查询该党员小组下的党员
            List<Map<String,Object>> list2 = jdbcTemplate.queryForList("select t.attribute_01,t.attribute_06 from PARTY_MEMBER t where t.user_id = '"+loginUserId+"'");
            if(list2 !=null && list2.size() != 0){
                if("0".equals(list2.get(0).get("ATTRIBUTE_06"))){
                    //判断党员是否为党小组长  如果是成员则不能查看全小组数据
                    paListId+="''";
                }else{
                    paListId += "'";
                    paListId += list2.get(0).get("ATTRIBUTE_01");
                    paListId += "'";
                }
            }else{
                paListId+=")";
            }

        }
        paListId+=")";


        return paListId;
    }

    public String sqlFunction(String partyId,String paListId){
        List<Map<String,Object>> list = jdbcTemplate.queryForList("select t.id from PARTY_ORGANIZATION t where t.parent_id = '"+partyId+"'");
        if(list != null && list.size() !=0){
            for(int i =0;i<list.size();i++){
                Map<String, Object> mapList = list.get(i);
                String id = (String)mapList.get("ID");
                paListId+=",'"+id+"'";
                sqlFunction(id,paListId);
            }
        }
        return paListId;
    }


    /**
     * 导出数据
     * @return Map<String,Object>
     */
    @RequestMapping(value = "/exportExcels", method = RequestMethod.POST)
    public void exportExcels(HttpServletRequest request, HttpServletResponse response) {
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
        DynThreeFourTjDTO param = null;
        if (selectConditions != null && !"".equals(selectConditions)) {
            param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
                    new TypeReference<DynThreeFourTjDTO>() {
                    });
        } else {
            param = new DynThreeFourTjDTO();
        }
        param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
        try {
            Map<String, Object> dtoList = this.threeView(request,response);
            Object rows = dtoList.get("rows");
            List<Map<String,Object>> dynThreeFourTjDTOList = new ArrayList<>();
            List<Map<String,Object>> dynThreeFourTjDTOLists = (List<Map<String, Object>>) rows;

            if(idsList.size() == 0){
                dynThreeFourTjDTOList = (List<Map<String, Object>>) rows;
            } else {
                for (Map<String, Object> threeFourTjDTOList : dynThreeFourTjDTOLists) {
                    for (String s : idsList) {
                        if(threeFourTjDTOList.get("ID").toString().equals(s)){
                            dynThreeFourTjDTOList.add(threeFourTjDTOList);

                        }
                    }
                }
            }
            byte[] bytes = dynThreeFourService.exportExcel(templateCode, colsList, dynThreeFourTjDTOList);
            String excelFileName = "三会一课统计" + "_" + System.currentTimeMillis() + ".xlsx";
            SysExcelFileWriteUtil.writeExcel(excelFileName, bytes, request, response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }



}
