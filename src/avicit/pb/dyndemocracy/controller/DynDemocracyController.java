package avicit.pb.dyndemocracy.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import avicit.platform6.eformbpms.dto.EformViewInfo;
import avicit.platform6.eformbpms.utils.BpmsCacheUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.cglib.beans.BeanMap;

import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.SysExcelFileWriteUtil;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.pb.dyndemocracy.dto.DynDemocracyDTO;
import avicit.pb.dyndemocracy.service.DynDemocracyService;
import avicit.pb.milepost.dynfiveof.dto.DynFiveOfDTO;
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


/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-11-07 16:43
 * @类说明：民主生活会
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/lc/youth/dynDemocracy/dynDemocracyController")
public class DynDemocracyController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynDemocracyController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynDemocracyService dynDemocracyService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;
	@Autowired
	private BpmsCacheUtils catchUtils;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDynDemocracyManage")
	public ModelAndView toDynDemocracyManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/lc/youth/dyndemocracy/DynDemocracyManage");
		mav.addObject("url", "platform/avicit/lc/youth/dynDemocracy/dynDemocracyController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDynDemocracysByPage")
	@ResponseBody
	@RequiresPermissions("youth:dynDemocracy:view")
	public Map<String, Object> togetDynDemocracyByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DynDemocracyDTO> queryReqBean = new QueryReqBean<DynDemocracyDTO>();
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
			cloumnName = ComUtil.getColumn(DynDemocracyDTO.class, sidx);
			if (cloumnName != null) {
				//这里先进行判断是否有对应的数据库字段
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(DynDemocracyDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(DynDemocracyDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		DynDemocracyDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynDemocracyDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynDemocracyDTO>() {
			});
		}else{
			param = new DynDemocracyDTO();
		}
		queryReqBean.setSearchParams(param);
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setBpmType("my");
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			result = dynDemocracyService.searchDynDemocracyByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynDemocracyDTO分页数据");
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
			DynDemocracyDTO dto = dynDemocracyService.queryDynDemocracyByPrimaryKey(id);
			mav.addObject("dynDemocracyDTO", dto);
		}
		mav.setViewName("avicit/lc/youth/dyndemocracy/DynDemocracy" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("youth:dynDemocracy:edit")
	public Map<String,Object> toSaveDynDemocracy(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynDemocracyDTO dynDemocracyDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynDemocracyDTO>() {
					});
			//调用校验工具类，校验数据
            beanValidatorUtil.validateObject(dynDemocracyDTO);
			if (StringUtils.isEmpty(dynDemocracyDTO.getId())) {
				//新增
				dynDemocracyDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = dynDemocracyService.insertDynDemocracy(dynDemocracyDTO);
				map.put("id", id);
			} else {
				//修改
				dynDemocracyService.updateDynDemocracySensitive(dynDemocracyDTO);
				map.put("id", dynDemocracyDTO.getId());
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
    @RequiresPermissions("youth:dynDemocracy:delete")
	public Map<String,Object> toDeleteDynDemocracy(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			dynDemocracyService.deleteDynDemocracyByIds(ids);
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
  	@RequiresPermissions("youth:dynDemocracy:edit")
  	public Map<String,Object> saveAndStartProcess(HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		String processDefId = ServletRequestUtils.getStringParameter(request, "processDefId", "");
		String formCode = ServletRequestUtils.getStringParameter(request, "formCode", "");
		String jsonString = ServletRequestUtils.getStringParameter(request, "jsonString", "");
		String data = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynDemocracyDTO dynDemocracyDTO = JsonHelper.getInstance().readValue(data, dateFormat, new TypeReference<DynDemocracyDTO>(){});
			//调用校验工具类，校验数据
			beanValidatorUtil.validateObject(dynDemocracyDTO);
			String userId = SessionHelper.getLoginSysUserId(request);
			String deptId = SessionHelper.getCurrentDeptId(request);
			//封装启动流程所需的参数
			Map<String, Object> parameter = new HashMap<String,Object>();
			parameter.put("processDefId", processDefId);
			parameter.put("formCode", formCode);
			parameter.put("jsonString", jsonString);
			parameter.put("userId", userId);
			parameter.put("deptId", deptId);
			dynDemocracyDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
			StartResultBean result = dynDemocracyService.insertDynDemocracyAndStartProcess(dynDemocracyDTO, parameter);
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
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/initDetailFormData")
	public Map<String,Object> initDetailFormData(HttpServletRequest request) throws Exception {
		Map<String,Object> map = new HashMap<String,Object>();
		String id = request.getParameter("id");
		DynDemocracyDTO dto = dynDemocracyService.queryDynDemocracyByPrimaryKey(id);
        map.put("flag", OpResult.success);
        map.put("dynDemocracyDTO", dto);
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
		DynDemocracyDTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<DynDemocracyDTO>() {
					});
		} else {
			param = new DynDemocracyDTO();
		}
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<DynDemocracyDTO> dtoList = dynDemocracyService.searchDynDemocracyForExport(param, idsList);
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = dynDemocracyService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<DynDemocracyDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			DynDemocracyDTO bean = objList.get(i);
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
    /*民主大会导出列表*/
    @RequestMapping("/dataOperating/exportServerData/createWord")
    public String createWord(HttpServletRequest request, ModelMap map, HttpServletResponse response, @CookieValue(value = "P_L_CODE",defaultValue = "zh_CN") String langcode){
			String viewid = ServletRequestUtils.getStringParameter(request, "viewid", "");
			EformViewInfo viewInfo = this.catchUtils.getViewInfoById(viewid);
			String version = "V1";
		    return dynDemocracyService.downloadExcel(version, request, map, response, langcode);
    }
    
    
}

