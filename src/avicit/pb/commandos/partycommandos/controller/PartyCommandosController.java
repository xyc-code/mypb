package avicit.pb.commandos.partycommandos.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.cglib.beans.BeanMap;

import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.commons.utils.SysExcelFileWriteUtil;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;

import avicit.pb.commandos.partymilepost.dto.PartyMilepostDTO;
import avicit.pb.commandos.partymilepost.service.PartyMilepostService;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.pb.commandos.partycommandos.dto.PartyCommandosDTO;
import avicit.pb.commandos.partycommandos.service.PartyCommandosService;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-11 09:57
 * @类说明：
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/commandos/partyCommandos/partyCommandosController")
public class PartyCommandosController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(PartyCommandosController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private PartyCommandosService partyCommandosService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;
    @Autowired
	private PartyOrganizationService partyOrganizationService;

	/**
	 * 跳转到列表页面
	 * @param request 请求
	 * @param reponse 响应
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toPartyCommandosManage")
	public ModelAndView toPartyCommandosManage(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/commandos/partycommandos/PartyCommandosManage");
		mav.addObject("url", "platform/avicit/pb/commandos/partyCommandos/partyCommandosController/operation/");
		mav.addObject("partyMilepostUrl", "platform/avicit/pb/commandos/partyMilepost/partyMilepostController/operation/");
		return mav;
	}
	
	
	
	/**
	 * 跳转到列表页面
	 * @param request 请求
	 * @param reponse 响应
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toPartyCommandosProcessManage")
	public ModelAndView toPartyCommandosProcessManage(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/commandos/partycommandos/PartyCommandosProcessManage");
		mav.addObject("url", "platform/avicit/pb/commandos/partyCommandos/partyCommandosController/operation/");
		mav.addObject("partyMilepostUrl", "platform/avicit/pb/commandos/partyMilepost/partyMilepostController/operation/");
		return mav;
	}
	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getPartyCommandossByPage")
	@ResponseBody
	public Map<String, Object> togetPartyCommandosByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<PartyCommandosDTO> queryReqBean = new QueryReqBean<PartyCommandosDTO>();
		queryReqBean.setPageParameter(pageParameter);
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
			cloumnName = ComUtil.getColumn(PartyCommandosDTO.class, sidx);
			if (cloumnName != null) {
				//这里先进行判断是否有对应的数据库字段
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(PartyCommandosDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(PartyCommandosDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		PartyCommandosDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<PartyCommandosDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<PartyCommandosDTO>() {
			});
		}else{
            param = new PartyCommandosDTO();
        }
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setBpmType("my");
        queryReqBean.setSearchParams(param);
		try {
			result = partyCommandosService.searchPartyCommandosByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		for (PartyCommandosDTO dto : result.getResult()) {
			convertDto(dto);
			dto.setPcSecretLevel(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PC_SECRET_LEVEL", dto.getPcSecretLevel(),sysApplicationAPI.getCurrentAppId()));
			dto.setChargerPost(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PC_CHARGER_POST", dto.getChargerPost(),sysApplicationAPI.getCurrentAppId()));
			PartyOrganizationDTO partyOrganizationDTO;
			try {
				partyOrganizationDTO = partyOrganizationService.queryPartyOrganizationByPrimaryKey(dto.getInPartyorg());
				if(partyOrganizationDTO != null){
					dto.setInPartyOrgAlias(partyOrganizationDTO.getPartyName());
				}
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取PartyCommandosDTO分页数据");
		return map;
	}
	/**
	 * 列表页面分页查询Process
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getPartyProcessCommandossByPage")
	@ResponseBody
	public Map<String, Object> togetPartyProcessCommandossByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<PartyCommandosDTO> queryReqBean = new QueryReqBean<PartyCommandosDTO>();
		queryReqBean.setPageParameter(pageParameter);
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
			cloumnName = ComUtil.getColumn(PartyCommandosDTO.class, sidx);
			if (cloumnName != null) {
				//这里先进行判断是否有对应的数据库字段
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(PartyCommandosDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(PartyCommandosDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		PartyCommandosDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<PartyCommandosDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<PartyCommandosDTO>() {
			});
		}else{
            param = new PartyCommandosDTO();
        }
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setBpmType("my");
		//param.setBpmState("ended");
        queryReqBean.setSearchParams(param);
		try {
			result = partyCommandosService.searchPartyCommandosByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		for (PartyCommandosDTO dto : result.getResult()) {
			convertDto(dto);
			dto.setPcSecretLevel(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PC_SECRET_LEVEL", dto.getPcSecretLevel(),sysApplicationAPI.getCurrentAppId()));
			dto.setChargerPost(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PC_CHARGER_POST", dto.getChargerPost(),sysApplicationAPI.getCurrentAppId()));
			PartyOrganizationDTO partyOrganizationDTO;
			try {
				partyOrganizationDTO = partyOrganizationService.queryPartyOrganizationByPrimaryKey(dto.getInPartyorg());
				if(partyOrganizationDTO != null){
					dto.setInPartyOrgAlias(partyOrganizationDTO.getPartyName());
				}
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取PartyCommandosDTO分页数据");
		return map;
	}
	/**
	* 根据传入的的类型跳转到对应页面
	* @param type，包括三个值，分别是Add:新建；Edit：编辑；Detail：详情
	* @param id 数据的id
	* @param request 请求
	* @return ModelAndView
	* @throws Exception
	*/
	@RequestMapping(value = "/operation/{type}/{id}")
	public ModelAndView toOpertionPage(@PathVariable String type, @PathVariable String id, HttpServletRequest request)
			throws Exception {
		ModelAndView mav = new ModelAndView();
		if (!"Add".equals(type)) {
			//编辑窗口或者详细页窗口
			PartyCommandosDTO dto = partyCommandosService.queryPartyCommandosByPrimaryKey(id);
			convertDto(dto);
			mav.addObject("partyCommandosDTO", dto);
		}
		String appId = sysApplicationAPI.getCurrentAppId();
		Collection<SysLookupSimpleVo> taskStatusList = sysLookupLoader.getLookUpListByTypeByAppId("PC_M_COMPLETE_STATUS",appId);
		HashMap<String, String> taskStatusMap = new LinkedHashMap<String, String>();
		for (SysLookupSimpleVo vo : taskStatusList) {
			taskStatusMap.put(vo.getLookupCode(), vo.getLookupName());
		}
		mav.addObject("taskStatusData", JsonHelper.getInstance().writeValueAsString(taskStatusMap));
		mav.addObject("partyMilepostEditUrl", "platform/avicit/pb/commandos/partyMilepost/partyMilepostController/operation/");
		mav.setViewName("avicit/pb/commandos/partycommandos/PartyCommandos" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String, Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> toSavePartyCommandos(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		String updateSubData = ServletRequestUtils.getStringParameter(request, "updateSubData", "");
		String removeSubIds = ServletRequestUtils.getStringParameter(request, "removeSubIds", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			PartyCommandosDTO partyCommandosDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<PartyCommandosDTO>() {
					});
			List<PartyMilepostDTO> updateSubList = new ArrayList<PartyMilepostDTO>();
			if (StringUtils.isNotEmpty(updateSubData)) {
				updateSubList = JsonHelper.getInstance().readValue(updateSubData, dateFormat, new TypeReference<List<PartyMilepostDTO>>() {
				});
			}
			String[] removeSubList = null;
			if (StringUtils.isNotEmpty(removeSubIds)) {
				removeSubList = JsonHelper.getInstance().readValue(removeSubIds, String[].class);
			}
            //调用校验工具类，校验数据
            beanValidatorUtil.validateObject(partyCommandosDTO);
			if (StringUtils.isEmpty(partyCommandosDTO.getId())) {
				//新增
				partyCommandosDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = partyCommandosService.insertPartyCommandos(partyCommandosDTO,updateSubList);
				map.put("id", id);
			} else {
				//修改
				partyCommandosService.updatePartyCommandosSensitive(partyCommandosDTO,updateSubList,removeSubList);
				map.put("id", partyCommandosDTO.getId());
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
	 * @param ids id数组
	 * @param request 请求
	 * @return Map<String, Object>
	 */
	@RequestMapping(value = "/operation/delete", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> toDeletePartyCommandos(@RequestBody String[] ids, HttpServletRequest request) {
		Map<String, Object> map = new HashMap<>();
		try {
			partyCommandosService.deletePartyCommandosByIds(ids);
			map.put("flag", OpResult.success);
		} catch (Exception ex) {
			map.put("flag", OpResult.failure);
			return map;
		}
		return map;
	}
    /**
    * 新增并启动流程
    * @param request 请求
    * @return Map<String, Object>
    */
    @RequestMapping(value="/operation/saveAndStartProcess",method=RequestMethod.POST)
    public Map<String, Object> saveAndStartProcess(HttpServletRequest request){
		Map<String, Object> map = new HashMap<>();
		String processDefId = ServletRequestUtils.getStringParameter(request, "processDefId", "");
		String formCode = ServletRequestUtils.getStringParameter(request, "formCode", "");
		String jsonString = ServletRequestUtils.getStringParameter(request, "jsonString", "");
		String data = ServletRequestUtils.getStringParameter(request, "data", "");
    	String updateSubData = ServletRequestUtils.getStringParameter(request, "updateSubData", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
   	 	try {
			PartyCommandosDTO partyCommandosDTO = JsonHelper.getInstance().readValue(data, dateFormat, new TypeReference<PartyCommandosDTO>(){});
			//调用校验工具类，校验数据
			beanValidatorUtil.validateObject(partyCommandosDTO);
			List<PartyMilepostDTO> updateSubList = new ArrayList<PartyMilepostDTO>();
			if (StringUtils.isNotEmpty(updateSubData)) {
				updateSubList = JsonHelper.getInstance().readValue(updateSubData, dateFormat, new TypeReference<List<PartyMilepostDTO>>() {});
				for(int i=0; updateSubList != null && i < updateSubList.size(); i++){
					//调用校验工具类，校验数据
					beanValidatorUtil.validateObject(updateSubList.get(i));
				}
			}
			String userId = SessionHelper.getLoginSysUserId(request);
			String deptId = SessionHelper.getCurrentDeptId(request);
			//封装启动流程所需的参数
			Map<String, Object> parameter = new HashMap<String,Object>();
			parameter.put("processDefId", processDefId);
			parameter.put("formCode", formCode);
			parameter.put("jsonString", jsonString);
			parameter.put("userId", userId);
			parameter.put("deptId", deptId);
			partyCommandosDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
    		StartResultBean result = partyCommandosService.insertPartyCommandosAndStartProcess(partyCommandosDTO,updateSubList, parameter);
			map.put("flag",OpResult.success);
			map.put("startResult", result);
    	} catch (Exception ex) {
			map.put("errorMsg", ex.getMessage());
			map.put("flag",OpResult.failure);
    	}
    	return map;
    }

    /**
    * 初始化detail页面form表单数据
    * @param request 求情
    * @return Map<String, Object>
    * @throws Exception
    */
    @RequestMapping("/initDetailFormData")
    public Map<String, Object> initDetailFormData(HttpServletRequest request) throws Exception {
		Map<String, Object> map = new HashMap<>();
		String id = request.getParameter("id");
		PartyCommandosDTO dto = partyCommandosService.queryPartyCommandosByPrimaryKey(id);
		convertDto(dto);
		PartyOrganizationDTO partyOrganizationDTO = partyOrganizationService.queryPartyOrganizationByPrimaryKey(dto.getInPartyorg());
		if(partyOrganizationDTO != null){
			dto.setInPartyOrgAlias(partyOrganizationDTO.getPartyName());
		}
		map.put("flag", OpResult.success);
		map.put("partyCommandosDTO", dto);

		map.put("partyMilepostUrl", "platform/avicit/pb/commandos/partyMilepost/partyMilepostController/operation/");
		return map;
    }

    /**
     * 导出数据
     * @param request 请求
     * @param response 响应
     * @return Map<String,Object>
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
        PartyCommandosDTO param = null;
        if (selectConditions != null && !"".equals(selectConditions)) {
            param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
                    new TypeReference<PartyCommandosDTO>() {
                    });
        } else {
            param = new PartyCommandosDTO();
        }
        param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
        try {
            List<PartyCommandosDTO> dtoList = partyCommandosService.searchPartyCommandosForExport(param, idsList);
			for (int i = 0; dtoList != null && i < dtoList.size(); i++) {
				convertDto(dtoList.get(i));
			}
            List<Map<String,Object>> dataList = objectsToMaps(dtoList);
            byte[] bytes = partyCommandosService.exportExcel(templateCode, colsList, dataList);
            String excelFileName = param.getLogTitle() + "_" + System.currentTimeMillis() + ".xlsx";
            SysExcelFileWriteUtil.writeExcel(excelFileName, bytes, request, response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 将List转换为List<Map<String, Object>>
     * @param objList
     * @return List<Map<String, Object>>
     */
    private List<Map<String, Object>> objectsToMaps(List<PartyCommandosDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			PartyCommandosDTO bean = objList.get(i);
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
	private void convertDto(PartyCommandosDTO dto){
		if (dto == null){
			return;
		}
		//dto.set
		dto.setUserIdAlias(sysUserLoader.getSysUserNameById(dto.getUserId()));
		dto.setDeptIdAlias(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(), SessionHelper.getCurrentLanguageCode()));
		dto.setCommandosTypeName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PC_TYPE", dto.getCommandosType(),sysApplicationAPI.getCurrentAppId()));
		dto.setCommandosChargerAlias(sysUserLoader.getSysUserNameById(dto.getCommandosCharger()));
		dto.setUniondeptsYnName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PC_DPET_UNION", dto.getUniondeptsYn(),sysApplicationAPI.getCurrentAppId()));
		if(StringUtils.isNotEmpty(dto.getUnionDepts())){
			dto.setUnionDeptsAlias(sysDeptLoader.getSysDeptNamesBySysDeptIds(dto.getUnionDepts(),  ";",SessionHelper.getCurrentLanguageCode()));
		}
		
		dto.setAttribute01Alias(sysUserLoader.getSysUserNameById(dto.getAttribute01()));
		dto.setAttribute04Alias(sysUserLoader.getSysUserNameById(dto.getAttribute04()));
		//dto.setPcSecretLevel(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PC_SECRET_LEVEL", dto.getPcSecretLevel(),sysApplicationAPI.getCurrentAppId()));
	}


	// 查询基础信息管理统计
	@RequestMapping("/operation/threeView")
	@ResponseBody
	public Map<String, Object> threeView(HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> map = new HashMap<>();
		//查询所有党组织
		Map<String, Object> commandosType = partyCommandosService.getByCommandosType();
		map.put("rows",commandosType);
		return map;
	}
}

