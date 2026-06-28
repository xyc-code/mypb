package avicit.tu.dyntumodelworker.controller;

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

import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.commons.utils.SysExcelFileWriteUtil;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;

import avicit.tu.dyntumodelworker.dto.DynTuModelWorkerDTO;
import avicit.tu.dyntumodelworker.service.DynTuModelWorkerService;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：temp
 * @邮箱：temp@163.com
 * @创建时间： 2023-08-11 09:59
 * @类说明：DYN_TU_MODEL_WORKERController
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/tu/dynTuModelWorker/dynTuModelWorkerController")
public class DynTuModelWorkerController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynTuModelWorkerController.class);


	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynTuModelWorkerService dynTuModelWorkerService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;
	@Autowired
	private SysLookupAPI sysLookupAPI;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDynTuModelWorkerManage")
	public ModelAndView toDynTuModelWorkerManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/tu/dyntumodelworker/DynTuModelWorkerManage");
		mav.addObject("url", "platform/avicit/tu/dynTuModelWorker/dynTuModelWorkerController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDynTuModelWorkersByPage")
	@ResponseBody

	public Map<String, Object> togetDynTuModelWorkerByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DynTuModelWorkerDTO> queryReqBean = new QueryReqBean<DynTuModelWorkerDTO>();
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
			cloumnName = ComUtil.getColumn(DynTuModelWorkerDTO.class, sidx);
			//这里先进行判断是否有对应的数据库字段
			if (cloumnName != null) {
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(DynTuModelWorkerDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(DynTuModelWorkerDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		DynTuModelWorkerDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynTuModelWorkerDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynTuModelWorkerDTO>() {
			});
		}else{
			param = new DynTuModelWorkerDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		queryReqBean.setSearchParams(param);
		try {
			result = dynTuModelWorkerService.searchDynTuModelWorkerByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		for (DynTuModelWorkerDTO dto : result.getResult()) {
			convertDto(dto);
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynTuModelWorkerDTO分页数据");
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
		//编辑窗口或者详细页窗口
		if (!"Add".equals(type)) {
			DynTuModelWorkerDTO dto = dynTuModelWorkerService.queryDynTuModelWorkerByPrimaryKey(id);
			convertDto(dto);
			mav.addObject("dynTuModelWorkerDTO", dto);
		}
		mav.setViewName("avicit/tu/dyntumodelworker/DynTuModelWorker" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
    @ResponseBody

	public Map<String,Object> toSaveDynTuModelWorker(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynTuModelWorkerDTO dynTuModelWorkerDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynTuModelWorkerDTO>() {
					});
		    //调用校验工具类，校验数据
        	beanValidatorUtil.validateObject(dynTuModelWorkerDTO);
			if (StringUtils.isEmpty(dynTuModelWorkerDTO.getId())) {
				//新增
				dynTuModelWorkerDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = dynTuModelWorkerService.insertDynTuModelWorker(dynTuModelWorkerDTO);
				map.put("id", id);
			} else {
				//修改
				dynTuModelWorkerService.updateDynTuModelWorkerSensitive(dynTuModelWorkerDTO);
				map.put("id", dynTuModelWorkerDTO.getId());
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

	public Map<String,Object> toDeleteDynTuModelWorker(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			dynTuModelWorkerService.deleteDynTuModelWorkerByIds(ids);
			map.put("flag", OpResult.success);
		} catch (Exception ex) {
			map.put("flag", OpResult.failure);
			return map;
		}
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
		DynTuModelWorkerDTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<DynTuModelWorkerDTO>() {
					});
		} else {
			param = new DynTuModelWorkerDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<DynTuModelWorkerDTO> dtoList = dynTuModelWorkerService.searchDynTuModelWorkerForExport(param, idsList);
			for (int i = 0; dtoList != null && i < dtoList.size(); i++) {
				convertDto(dtoList.get(i));
			}
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = dynTuModelWorkerService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<DynTuModelWorkerDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			DynTuModelWorkerDTO bean = objList.get(i);
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
	private void convertDto(DynTuModelWorkerDTO dto){
		if (dto == null){
			return;
		}
		dto.setData1Name(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PLATFORM_SEX", dto.getData1(),sysApplicationAPI.getCurrentAppId()));
	}

	/**
	 * 统计分析图-层级
	 * psu
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getLevel", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getLevel(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();	
		try {

			List<Map<String,Object>> levelCount=null;
			levelCount = dynTuModelWorkerService.queryOne("psu");
			Integer countlever = 0;
			for(Map<String,Object> dto :  levelCount ){
				String x =dto.get("value").toString();
				countlever+=Integer.parseInt(x);
			}
			map.put("flag", OpResult.success);
			map.put("levelCount", levelCount);
			map.put("countlever", countlever);
		} catch (Exception ex) {
			map.put("flag", OpResult.failure);
			map.put("error",ex.getMessage());
			return map;
		}
		return map;
	}
    
	/**
	 * 统计分析图-年龄
	 *   <=35  <=50
	 * psu
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getAge", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getAge(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();	
		try {

			List<Map<String,Object>> levelCount=null;
			levelCount = dynTuModelWorkerService.queryAge("psu");
			String countlever = dynTuModelWorkerService.queryOne2("psu").get("count").toString();
			map.put("flag", OpResult.success);
			map.put("levelCount", levelCount);
			map.put("countlever", countlever);
		} catch (Exception ex) {
			
			map.put("flag", OpResult.failure);
			
			return map;
		}
		return map;
	}
    
	/**
	 * 统计分析图-年龄
	 *   <=35  <=50
	 * psu
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getEducation", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getEducation(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();	
		try {

			List<Map<String,Object>> levelCount=null;
			levelCount = dynTuModelWorkerService.queryEducation("psu");
			for(Map<String,Object> dto : levelCount){
				String name = sysLookupAPI.getNameByLooupTypeCodeAndLooupCode("TRADE_UNION_EDUCATION", dto.get("name").toString());
				dto.remove("name");
				dto.put("name",name);
			}
			String countlever = dynTuModelWorkerService.queryOne2("psu").get("count").toString();
			map.put("flag", OpResult.success);
			map.put("levelCount", levelCount);
			map.put("countlever", countlever);
		} catch (Exception ex) {
			map.put("flag", OpResult.failure);
			return map;
		}
		return map;
	}
 
		/**
		 * 统计分析图-职称
		 *   <=35  <=50
		 * psu
		 * @param pageParameter 查询条件
		 * @param request 请求
		 * @return Map<String,Object>
		 */
		@RequestMapping(value = "/operation/getPr", method = RequestMethod.POST)
		@ResponseBody
		public Map<String, Object> getPr(HttpServletRequest request) {
			Map<String,Object> map = new HashMap<String,Object>();	
			try {

				List<Map<String,Object>> levelCount=null;
				levelCount = dynTuModelWorkerService.queryPr("psu");
				for(Map<String,Object> dto : levelCount){
					String name = sysLookupAPI.getNameByLooupTypeCodeAndLooupCode("PLATFORM_USER_TITLE", dto.get("name").toString());
					dto.remove("name");
					dto.put("name",name);
				}
				String countlever = dynTuModelWorkerService.queryOne2("psu").get("count").toString();
				map.put("flag", OpResult.success);
				map.put("levelCount", levelCount);
				map.put("countlever", countlever);
			} catch (Exception ex) {
				map.put("flag", OpResult.failure);
				return map;
			}
			return map;
		}
	
		/**
		 * 统计分析图-分类
		 *   <=35  <=50
		 * psu
		 * @param pageParameter 查询条件
		 * @param request 请求
		 * @return Map<String,Object>
		 */
		@RequestMapping(value = "/operation/getType", method = RequestMethod.POST)
		@ResponseBody
		public Map<String, Object> getType(HttpServletRequest request) {
			Map<String,Object> map = new HashMap<String,Object>();	
			try {

				List<Map<String,Object>> levelCount=null;
				levelCount = dynTuModelWorkerService.queryType("psu");
				String countlever = dynTuModelWorkerService.queryOne2("psu").get("count").toString();
				for(Map<String,Object> dto : levelCount){
					String name = sysLookupAPI.getNameByLooupTypeCodeAndLooupCode("PA_CATEGORY", dto.get("name").toString());
					dto.remove("name");
					dto.put("name",name);
				}
				map.put("flag", OpResult.success);
				map.put("levelCount", levelCount);
				map.put("countlever", countlever);
			} catch (Exception ex) {
				map.put("flag", OpResult.failure);
				return map;
			}
			return map;
		}
		
		/**
		 * 统计分析图-性别
		 *   <=35  <=50
		 * psu
		 * @param pageParameter 查询条件
		 * @param request 请求
		 * @return Map<String,Object>
		 */
		@RequestMapping(value = "/operation/getSex", method = RequestMethod.POST)
		@ResponseBody
		public Map<String, Object> getSex(HttpServletRequest request) {
			Map<String,Object> map = new HashMap<String,Object>();	
			try {

				List<Map<String,Object>> levelCount=null;
				levelCount = dynTuModelWorkerService.querySex("psu");
				for(Map<String,Object> dto : levelCount){
					String name = sysLookupAPI.getNameByLooupTypeCodeAndLooupCode("PLATFORM_SEX", dto.get("name").toString());
					dto.remove("name");
					dto.put("name",name);
				}
				String countlever = dynTuModelWorkerService.queryOne2("psu").get("count").toString();
				map.put("flag", OpResult.success);
				map.put("levelCount", levelCount);
				map.put("countlever", countlever);
			} catch (Exception ex) {
				map.put("flag", OpResult.failure);
				return map;
			}
			return map;
		}
		
		
		
		
	
	
}
