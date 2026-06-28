package avicit.pb.pojo.partyRestPojo.dynjwdydhzb.controller;

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

import avicit.pb.pojo.partyRestPojo.dynjwdydhzb.dto.DynJwDydhzbDTO;
import avicit.pb.pojo.partyRestPojo.dynjwdydhzb.service.DynJwDydhzbService;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-18 11:50
 * @类说明：DYN_JW_DYDHZBController
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/pojo/partyRestPojo/dynJwDydhzb/dynJwDydhzbController")
public class DynJwDydhzbController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynJwDydhzbController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynJwDydhzbService dynJwDydhzbService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDynJwDydhzbManage")
	public ModelAndView toDynJwDydhzbManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/pojo/partyRestPojo/dynjwdydhzb/DynJwDydhzbManage");
		mav.addObject("url", "platform/avicit/pb/pojo/partyRestPojo/dynJwDydhzb/dynJwDydhzbController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDynJwDydhzbsByPage")
	@ResponseBody
	@RequiresPermissions("partyrestpojo:dynJwDydhzb:view")
	public Map<String, Object> togetDynJwDydhzbByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DynJwDydhzbDTO> queryReqBean = new QueryReqBean<DynJwDydhzbDTO>();
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
			cloumnName = ComUtil.getColumn(DynJwDydhzbDTO.class, sidx);
			//这里先进行判断是否有对应的数据库字段
			if (cloumnName != null) {
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(DynJwDydhzbDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(DynJwDydhzbDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		DynJwDydhzbDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynJwDydhzbDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynJwDydhzbDTO>() {
			});
		}else{
			param = new DynJwDydhzbDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		queryReqBean.setSearchParams(param);
		try {
			result = dynJwDydhzbService.searchDynJwDydhzbByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynJwDydhzbDTO分页数据");
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
			DynJwDydhzbDTO dto = dynJwDydhzbService.queryDynJwDydhzbByPrimaryKey(id);
			mav.addObject("dynJwDydhzbDTO", dto);
		}
		mav.setViewName("avicit/pb/pojo/partyRestPojo/dynjwdydhzb/DynJwDydhzb" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
    @ResponseBody
	@RequiresPermissions("partyrestpojo:dynJwDydhzb:edit")
	public Map<String,Object> toSaveDynJwDydhzb(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynJwDydhzbDTO dynJwDydhzbDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynJwDydhzbDTO>() {
					});
		    //调用校验工具类，校验数据
        	beanValidatorUtil.validateObject(dynJwDydhzbDTO);
			if (StringUtils.isEmpty(dynJwDydhzbDTO.getId())) {
				//新增
				dynJwDydhzbDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = dynJwDydhzbService.insertDynJwDydhzb(dynJwDydhzbDTO);
				map.put("id", id);
			} else {
				//修改
				dynJwDydhzbService.updateDynJwDydhzbSensitive(dynJwDydhzbDTO);
				map.put("id", dynJwDydhzbDTO.getId());
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
	@RequiresPermissions("partyrestpojo:dynJwDydhzb:delete")
	public Map<String,Object> toDeleteDynJwDydhzb(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			dynJwDydhzbService.deleteDynJwDydhzbByIds(ids);
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
		DynJwDydhzbDTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<DynJwDydhzbDTO>() {
					});
		} else {
			param = new DynJwDydhzbDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<DynJwDydhzbDTO> dtoList = dynJwDydhzbService.searchDynJwDydhzbForExport(param, idsList);
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = dynJwDydhzbService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<DynJwDydhzbDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			DynJwDydhzbDTO bean = objList.get(i);
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
