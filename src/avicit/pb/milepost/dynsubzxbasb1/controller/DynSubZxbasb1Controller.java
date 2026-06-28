package avicit.pb.milepost.dynsubzxbasb1.controller;

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
import avicit.pb.milepost.dynsubzxbasb1.dto.DynSubZxbasb1DTO;
import avicit.pb.milepost.dynsubzxbasb1.service.DynSubZxbasb1Service;

import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-14 13:08
 * @类说明：DYN_SUB_ZXBASB_1Controller 突击队类
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/milepost/dynSubZxbasb1/dynSubZxbasb1Controller")
public class DynSubZxbasb1Controller implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynSubZxbasb1Controller.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynSubZxbasb1Service dynSubZxbasb1Service;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDynSubZxbasb1Manage")
	public ModelAndView toDynSubZxbasb1Manage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/milepost/dynsubzxbasb1/DynSubZxbasb1Manage");
		mav.addObject("url", "platform/avicit/pb/milepost/dynSubZxbasb1/dynSubZxbasb1Controller/operation/");
		return mav;
	}
	/**
	 * 跳转到柱状图页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toPartyMemberBar")
	public ModelAndView toPartyMemberBar() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/milepost/dynsubzxbasb1/partyMemberBar");
		mav.addObject("url", "platform/avicit/pb/milepost/dynSubZxbasb1/dynSubZxbasb1Controller/operation/");
		return mav;
	}
	@RequestMapping(value = "/operation/getPartyData")
	@ResponseBody
	public ModelAndView getPartyData(String data){
		ModelAndView mav = new ModelAndView();
		mav.addObject("data",dynSubZxbasb1Service.getPartyData(data));
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDynSubZxbasb1sByPage")
	@ResponseBody
	@RequiresPermissions("milepost:dynSubZxbasb1:view")
	public Map<String, Object> togetDynSubZxbasb1ByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DynSubZxbasb1DTO> queryReqBean = new QueryReqBean<DynSubZxbasb1DTO>();
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
			cloumnName = ComUtil.getColumn(DynSubZxbasb1DTO.class, sidx);
			//这里先进行判断是否有对应的数据库字段
			if (cloumnName != null) {
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(DynSubZxbasb1DTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(DynSubZxbasb1DTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		DynSubZxbasb1DTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynSubZxbasb1DTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynSubZxbasb1DTO>() {
			});
		}else{
			param = new DynSubZxbasb1DTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		queryReqBean.setSearchParams(param);
		try {
			result = dynSubZxbasb1Service.searchDynSubZxbasb1ByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynSubZxbasb1DTO分页数据");
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
			DynSubZxbasb1DTO dto = dynSubZxbasb1Service.queryDynSubZxbasb1ByPrimaryKey(id);
			mav.addObject("dynSubZxbasb1DTO", dto);
		}
		mav.setViewName("avicit/pb/milepost/dynsubzxbasb1/DynSubZxbasb1" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
    @ResponseBody
	@RequiresPermissions("milepost:dynSubZxbasb1:edit")
	public Map<String,Object> toSaveDynSubZxbasb1(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynSubZxbasb1DTO dynSubZxbasb1DTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynSubZxbasb1DTO>() {
					});
		    //调用校验工具类，校验数据
        	beanValidatorUtil.validateObject(dynSubZxbasb1DTO);
			if (StringUtils.isEmpty(dynSubZxbasb1DTO.getId())) {
				//新增
				dynSubZxbasb1DTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = dynSubZxbasb1Service.insertDynSubZxbasb1(dynSubZxbasb1DTO);
				map.put("id", id);
			} else {
				//修改
				dynSubZxbasb1Service.updateDynSubZxbasb1Sensitive(dynSubZxbasb1DTO);
				map.put("id", dynSubZxbasb1DTO.getId());
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
	@RequiresPermissions("milepost:dynSubZxbasb1:delete")
	public Map<String,Object> toDeleteDynSubZxbasb1(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			dynSubZxbasb1Service.deleteDynSubZxbasb1ByIds(ids);
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
		DynSubZxbasb1DTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<DynSubZxbasb1DTO>() {
					});
		} else {
			param = new DynSubZxbasb1DTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<DynSubZxbasb1DTO> dtoList = dynSubZxbasb1Service.searchDynSubZxbasb1ForExport(param, idsList);
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = dynSubZxbasb1Service.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<DynSubZxbasb1DTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			DynSubZxbasb1DTO bean = objList.get(i);
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
    @RequestMapping("/sonWeekly")
	public void sonWeekly(String json, String lcid) {
			dynSubZxbasb1Service.sonWeekly(json,lcid);
	}
}
