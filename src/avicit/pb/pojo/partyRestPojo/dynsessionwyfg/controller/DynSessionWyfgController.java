package avicit.pb.pojo.partyRestPojo.dynsessionwyfg.controller;

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
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.commons.utils.SysExcelFileWriteUtil;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;

import avicit.pb.pojo.partyRestPojo.dynsessionwyfg.dto.DynSessionWyfgDTO;
import avicit.pb.pojo.partyRestPojo.dynsessionwyfg.service.DynSessionWyfgService;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-02-23 15:33
 * @类说明：DYN_SESSION_WYFGController
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/pojo/partyRestPojo/dynSessionWyfg/dynSessionWyfgController")
public class DynSessionWyfgController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynSessionWyfgController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynSessionWyfgService dynSessionWyfgService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDynSessionWyfgManage")
	public ModelAndView toDynSessionWyfgManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/pojo/partyRestPojo/dynsessionwyfg/DynSessionWyfgManage");
		mav.addObject("url", "platform/avicit/pb/pojo/partyRestPojo/dynSessionWyfg/dynSessionWyfgController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDynSessionWyfgsByPage")
	@ResponseBody
	@RequiresPermissions("partyrestpojo:dynSessionWyfg:view")
	public Map<String, Object> togetDynSessionWyfgByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DynSessionWyfgDTO> queryReqBean = new QueryReqBean<DynSessionWyfgDTO>();
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
			cloumnName = ComUtil.getColumn(DynSessionWyfgDTO.class, sidx);
			//这里先进行判断是否有对应的数据库字段
			if (cloumnName != null) {
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(DynSessionWyfgDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(DynSessionWyfgDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		DynSessionWyfgDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynSessionWyfgDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynSessionWyfgDTO>() {
			});
		}else{
			param = new DynSessionWyfgDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		queryReqBean.setSearchParams(param);
		try {
			result = dynSessionWyfgService.searchDynSessionWyfgByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynSessionWyfgDTO分页数据");
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
			DynSessionWyfgDTO dto = dynSessionWyfgService.queryDynSessionWyfgByPrimaryKey(id);
			mav.addObject("dynSessionWyfgDTO", dto);
		}
		mav.setViewName("avicit/pb/pojo/partyRestPojo/dynsessionwyfg/DynSessionWyfg" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
    @ResponseBody
	@RequiresPermissions("partyrestpojo:dynSessionWyfg:edit")
	public Map<String,Object> toSaveDynSessionWyfg(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynSessionWyfgDTO dynSessionWyfgDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynSessionWyfgDTO>() {
					});
		    //调用校验工具类，校验数据
        	beanValidatorUtil.validateObject(dynSessionWyfgDTO);
			if (StringUtils.isEmpty(dynSessionWyfgDTO.getId())) {
				//新增
				dynSessionWyfgDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = dynSessionWyfgService.insertDynSessionWyfg(dynSessionWyfgDTO);
				map.put("id", id);
			} else {
				//修改
				dynSessionWyfgService.updateDynSessionWyfgSensitive(dynSessionWyfgDTO);
				map.put("id", dynSessionWyfgDTO.getId());
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
	@RequiresPermissions("partyrestpojo:dynSessionWyfg:delete")
	public Map<String,Object> toDeleteDynSessionWyfg(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			dynSessionWyfgService.deleteDynSessionWyfgByIds(ids);
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
		DynSessionWyfgDTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<DynSessionWyfgDTO>() {
					});
		} else {
			param = new DynSessionWyfgDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<DynSessionWyfgDTO> dtoList = dynSessionWyfgService.searchDynSessionWyfgForExport(param, idsList);
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = dynSessionWyfgService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<DynSessionWyfgDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			DynSessionWyfgDTO bean = objList.get(i);
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
}
