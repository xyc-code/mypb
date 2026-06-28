package avicit.pb.member.dynannounce.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.pvm.internal.cmd.B;
import avicit.platform6.bpm.pvm.internal.cmd.T;
import avicit.platform6.core.exception.DaoException;
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

import avicit.pb.member.dynannounce.dto.DynAnnounceDTO;
import avicit.pb.member.dynannounce.service.DynAnnounceService;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-30 15:02
 * @类说明：DYN_ANNOUNCEController
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/member/dynAnnounce/dynAnnounceController")
public class DynAnnounceController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynAnnounceController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynAnnounceService dynAnnounceService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDynAnnounceManage")
	public ModelAndView toDynAnnounceManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/member/dynannounce/DynAnnounceManage");
		mav.addObject("url", "platform/avicit/pb/member/dynAnnounce/dynAnnounceController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDynAnnouncesByPage")
	@ResponseBody
	@RequiresPermissions("member:dynAnnounce:view")
	public Map<String, Object> togetDynAnnounceByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DynAnnounceDTO> queryReqBean = new QueryReqBean<DynAnnounceDTO>();
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
			cloumnName = ComUtil.getColumn(DynAnnounceDTO.class, sidx);
			//这里先进行判断是否有对应的数据库字段
			if (cloumnName != null) {
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(DynAnnounceDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(DynAnnounceDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		DynAnnounceDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynAnnounceDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynAnnounceDTO>() {
			});
		}else{
			param = new DynAnnounceDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		queryReqBean.setSearchParams(param);
		try {
			result = dynAnnounceService.searchDynAnnounceByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynAnnounceDTO分页数据");
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
			DynAnnounceDTO dto = dynAnnounceService.queryDynAnnounceByPrimaryKey(id);
			mav.addObject("dynAnnounceDTO", dto);
		}
		mav.setViewName("avicit/pb/member/dynannounce/DynAnnounce" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
    @ResponseBody
	@RequiresPermissions("member:dynAnnounce:edit")
	public Map<String,Object> toSaveDynAnnounce(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynAnnounceDTO dynAnnounceDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynAnnounceDTO>() {
					});
		    //调用校验工具类，校验数据
        	beanValidatorUtil.validateObject(dynAnnounceDTO);

			if (StringUtils.isEmpty(dynAnnounceDTO.getId())) {
				//新增
				dynAnnounceDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = dynAnnounceService.insertDynAnnounce(dynAnnounceDTO);
				map.put("id", id);
			} else {
				//修改
				dynAnnounceService.updateDynAnnounceSensitive(dynAnnounceDTO);
				map.put("id", dynAnnounceDTO.getId());
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
	 * 揭榜挂帅-承接支部
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/party")
	@ResponseBody
	public Map<String,Object> toPartyDynAnnounce(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			String id = ServletRequestUtils.getStringParameter(request,"id");
			// 先查主数据
			DynAnnounceDTO data = dynAnnounceService.findById(id);
			LocalDateTime dateTime = LocalDateTime.now();
			LocalDateTime endDate = LocalDateTime.from(data.getEndDate().toInstant().atZone(ZoneId.systemDefault()));
			if (dateTime.isAfter(endDate)) {
				throw new DaoException("已经超期揭榜时间，无法再度揭榜");
			}
			// 获取党建登录人的信息
			SysUser loginuser = SessionHelper.getLoginSysUser(request);
			// 拼接数据
			StringBuffer str = new StringBuffer();
			// 判断承接党支部Id是否为空
			if(!StringUtils.isBlank(data.getUndertakePartyBranchId())) {
				// 不为空,判断是否包含当前登录人的部门
				if (loginuser.getDeptId().contains(data.getUndertakePartyBranchId())) {
					throw new DaoException("提示：已承接，无法继续承接同一个项目。");
				} else {
					str.append(","+loginuser.getDeptId());
					data.setUndertakePartyBranchId(str.toString());
				}
			} else {
				// 为空
				data.setUndertakePartyBranchId(loginuser.getDeptId());
			}
			//				修改
			dynAnnounceService.updateDynAnnounceSensitive(data);
			map.put("id", data.getId());
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
	@RequiresPermissions("member:dynAnnounce:delete")
	public Map<String,Object> toDeleteDynAnnounce(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			dynAnnounceService.deleteDynAnnounceByIds(ids);
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
		DynAnnounceDTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<DynAnnounceDTO>() {
					});
		} else {
			param = new DynAnnounceDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<DynAnnounceDTO> dtoList = dynAnnounceService.searchDynAnnounceForExport(param, idsList);
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = dynAnnounceService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<DynAnnounceDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			DynAnnounceDTO bean = objList.get(i);
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
