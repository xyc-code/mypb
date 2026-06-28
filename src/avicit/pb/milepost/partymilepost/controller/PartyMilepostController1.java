package avicit.pb.milepost.partymilepost.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

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

import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.SysExcelFileWriteUtil;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import com.fasterxml.jackson.core.type.TypeReference;
import avicit.pb.milepost.partymilepost.dto.PartyMilepostDTO1;
import avicit.pb.milepost.partymilepost.service.PartyMilepostService1;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-14 08:58
 * @类说明：
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/milepost/partyMilepost/partyMilepostController")
public class PartyMilepostController1 implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(PartyMilepostController1.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private PartyMilepostService1 partyMilepostService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;
    @Autowired
	private PartyOrganizationService partyOrganizationService;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toPartyMilepostManage")
	public ModelAndView toPartyMilepostManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/milepost/partymilepost/PartyMilepostManage");
		mav.addObject("url", "platform/avicit/pb/milepost/partyMilepost/partyMilepostController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getPartyMilepostsByPage")
	@ResponseBody
	//@RequiresPermissions("milepost:partyMilepost:view")
	public Map<String, Object> togetPartyMilepostByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<PartyMilepostDTO1> queryReqBean = new QueryReqBean<PartyMilepostDTO1>();
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
			cloumnName = ComUtil.getColumn(PartyMilepostDTO1.class, sidx);
			if (cloumnName != null) {
				//这里先进行判断是否有对应的数据库字段
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(PartyMilepostDTO1.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(PartyMilepostDTO1.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		PartyMilepostDTO1 param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<PartyMilepostDTO1> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<PartyMilepostDTO1>() {
			});
		}else{
			param = new PartyMilepostDTO1();
		}
		queryReqBean.setSearchParams(param);
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setBpmType("my");
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			result = partyMilepostService.searchPartyMilepostByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		for (PartyMilepostDTO1 dto : result.getResult()) {
		
		
			convertDto(dto);
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取PartyMilepostDTO分页数据");
		return map;
	}

	/**
	 * 根据传入的的类型跳转到对应页面
	 * @param type，包括三个值，分别是Add:新建；Edit：编辑；Detail：详情
	 * @param id 数据的id
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping(value = "/operation/{type}/{id}")
	public ModelAndView toOpertionPage(@PathVariable String type, @PathVariable String id)
			throws Exception {
		ModelAndView mav = new ModelAndView();
		if (!"Add".equals(type)) {
			//编辑窗口或者详细页窗口
			PartyMilepostDTO1 dto = partyMilepostService.queryPartyMilepostByPrimaryKey(id);
			convertDto(dto);
			mav.addObject("partyMilepostDTO", dto);
		}
		mav.setViewName("avicit/pb/milepost/partymilepost/PartyMilepost" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	@ResponseBody

	public Map<String,Object> toSavePartyMilepost(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			PartyMilepostDTO1 partyMilepostDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<PartyMilepostDTO1>() {
					});
			//调用校验工具类，校验数据
            beanValidatorUtil.validateObject(partyMilepostDTO);
			if (StringUtils.isEmpty(partyMilepostDTO.getId())) {
				//新增
				partyMilepostDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = partyMilepostService.insertPartyMilepost(partyMilepostDTO);
				map.put("id", id);
			} else {
				//修改
				partyMilepostService.updatePartyMilepostSensitive(partyMilepostDTO);
				map.put("id", partyMilepostDTO.getId());
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
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/delete", method = RequestMethod.POST)
	@ResponseBody
    @RequiresPermissions("milepost:partyMilepost:delete")
	public Map<String,Object> toDeletePartyMilepost(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			partyMilepostService.deletePartyMilepostByIds(ids);
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
  	 * @return Map<String,Object>
  	 */
  	@RequestMapping(value="/operation/saveAndStartProcess",method=RequestMethod.POST)
  	//@RequiresPermissions("milepost:partyMilepost:edit")
  	public Map<String,Object> saveAndStartProcess(HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		String processDefId = ServletRequestUtils.getStringParameter(request, "processDefId", "");
		String formCode = ServletRequestUtils.getStringParameter(request, "formCode", "");
		String jsonString = ServletRequestUtils.getStringParameter(request, "jsonString", "");
		String data = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			PartyMilepostDTO1 partyMilepostDTO = JsonHelper.getInstance().readValue(data, dateFormat, new TypeReference<PartyMilepostDTO1>(){});
			//调用校验工具类，校验数据
			beanValidatorUtil.validateObject(partyMilepostDTO);
			String userId = SessionHelper.getLoginSysUserId(request);
			String deptId = SessionHelper.getCurrentDeptId(request);
			//封装启动流程所需的参数
			Map<String, Object> parameter = new HashMap<String,Object>();
			parameter.put("processDefId", processDefId);
			parameter.put("formCode", formCode);
			parameter.put("jsonString", jsonString);
			parameter.put("userId", userId);
			parameter.put("deptId", deptId);
			partyMilepostDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
			StartResultBean result = partyMilepostService.insertPartyMilepostAndStartProcess(partyMilepostDTO, parameter);
			map.put("flag",OpResult.success);
			map.put("startResult", result);
		} catch (Exception ex) {
		    map.put("errorMsg", ex.getMessage());
			map.put("flag",OpResult.failure);
		}
  		return map;
  	}
  	
  	/**
	 * 始化页面form表单数据
	 * @param request 求情
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping(value = "/operation/initFormData", method = RequestMethod.POST)
	public Map<String,Object> initFormData(@RequestBody String businessId) throws Exception {
		Map<String,Object> map = new HashMap<String,Object>();
 		//String businessId = request.getParameter("businessId");
		PartyMilepostDTO1 dto = partyMilepostService.queryPartyMilepostByPrimaryKey(businessId);
		convertDto(dto);
		try {
			PartyOrganizationDTO partyOrganizationDTO = partyOrganizationService.queryPartyOrganizationByPrimaryKey(dto.getPartyId());
			if(partyOrganizationDTO != null){
				dto.setPartyIdAlias(partyOrganizationDTO.getPartyName());
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        map.put("flag", OpResult.success);
        map.put("partyMilepostDTO", dto);
		return map;
	}
	/**
	 * 初始化detail页面form表单数据初
	 * @param request 求情
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/initDetailFormData")
	public Map<String,Object> initDetailFormData(HttpServletRequest request) throws Exception {
		Map<String,Object> map = new HashMap<String,Object>();
 		String id = request.getParameter("id");
		PartyMilepostDTO1 dto = partyMilepostService.queryPartyMilepostByPrimaryKey(id);
		convertDto(dto);
		try {
			PartyOrganizationDTO partyOrganizationDTO = partyOrganizationService.queryPartyOrganizationByPrimaryKey(dto.getPartyId());
			if(partyOrganizationDTO != null){
				dto.setPartyIdAlias(partyOrganizationDTO.getPartyName());
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        map.put("flag", OpResult.success);
        map.put("partyMilepostDTO", dto);
		return map;
	}
	/**
	 * 导出数据
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
		PartyMilepostDTO1 param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<PartyMilepostDTO1>() {
					});
		} else {
			param = new PartyMilepostDTO1();
		}
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<PartyMilepostDTO1> dtoList = partyMilepostService.searchPartyMilepostForExport(param, idsList);
			for (int i = 0; dtoList != null && i < dtoList.size(); i++) {
				convertDto(dtoList.get(i));
			}
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = partyMilepostService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<PartyMilepostDTO1> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			PartyMilepostDTO1 bean = objList.get(i);
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
	private void convertDto(PartyMilepostDTO1 dto){
		if (dto == null){
			return;
		}
		dto.setUserIdAlias(sysUserLoader.getSysUserNameById(dto.getUserId()));
		dto.setDeptIdAlias(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(), SessionHelper.getCurrentLanguageCode()));
		dto.setTaskStatusName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PC_M_COMPLETE_STATUS", dto.getTaskStatus(),sysApplicationAPI.getCurrentAppId()));
	}
}

