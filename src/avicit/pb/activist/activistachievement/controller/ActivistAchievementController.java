package avicit.pb.activist.activistachievement.controller;

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

import avicit.pb.activist.activistachievement.dto.ActivistAchievementDTO;
import avicit.pb.activist.activistachievement.service.ActivistAchievementService;
import avicit.pb.activist.activistmerits.dto.ActivistMeritsDTO;

import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-25 09:20
 * @类说明：
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/activist/activistAchievement/activistAchievementController")
public class ActivistAchievementController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(ActivistAchievementController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private ActivistAchievementService activistAchievementService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;



	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getActivistAchievementsByPage")
	@ResponseBody
	@RequiresPermissions("activist:activistAchievement:view")
	public Map<String, Object> getActivistAchievementByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<ActivistAchievementDTO> queryReqBean = new QueryReqBean<ActivistAchievementDTO>();
		queryReqBean.setPageParameter(pageParameter);
		String json = ServletRequestUtils.getStringParameter(request, "param", "");
		//字段查询条件
		String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");
		//关联查询条件
		String pid = ServletRequestUtils.getStringParameter(request, "pid", "");
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
			cloumnName = ComUtil.getColumn(ActivistAchievementDTO.class, sidx);
			if (cloumnName != null) {
				//这里先进行判断是否有对应的数据库字段
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(ActivistAchievementDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(ActivistAchievementDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		ActivistAchievementDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<ActivistAchievementDTO> result = null;
		if(pid == null || "".equals(pid)){
			pid = "-1";
		}
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<ActivistAchievementDTO>() {
			});
		}else{
            param = new ActivistAchievementDTO();
        }
		param.setPaId(pid);
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		queryReqBean.setSearchParams(param);
		try {
			result = activistAchievementService.searchActivistAchievementByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		for (ActivistAchievementDTO dto : result.getResult()) {
			convertDto(dto);
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取ActivistAchievementDTO分页数据");
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
			//编辑或详细页
			ActivistAchievementDTO dto = activistAchievementService.queryActivistAchievementByPrimaryKey(id);
			mav.addObject("activistAchievementDTO", dto);
		}
		
		mav.setViewName("avicit/pb/activist/activistachievement/ActivistAchievement" + type);
		return mav;
	}


	/**
	 * 通用代码  radio checkbox
	 * @param request请求
	 * @return Map<String, Object>
	 */
	@RequestMapping(value = "/getLookUpCode")
	@ResponseBody
	public Map<String, Object> getLookUpCode(HttpServletRequest request) throws Exception {
		Map<String, Object> map = new HashMap<>();
		try {
			String appId = sysApplicationAPI.getCurrentAppId();
			map.put("flag", OpResult.success);
		} catch (Exception ex) {
			map.put("flag", OpResult.failure);
		}
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
        ActivistAchievementDTO param = null;
        if (selectConditions != null && !"".equals(selectConditions)) {
            param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
                    new TypeReference<ActivistAchievementDTO>() {
                    });
        } else {
            param = new ActivistAchievementDTO();
        }
        param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
        try {
            List<ActivistAchievementDTO> dtoList = activistAchievementService.searchActivistAchievementForExport(param, idsList);
            List<Map<String,Object>> dataList = objectsToMaps(dtoList);
            byte[] bytes = activistAchievementService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<ActivistAchievementDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			ActivistAchievementDTO bean = objList.get(i);
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
	private void convertDto(ActivistAchievementDTO dto){
		if (dto == null){
			return;
		}
		
		//dto.setAttribute01Name(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PA_YEAR", dto.getAttribute01(),sysApplicationAPI.getCurrentAppId()));
	}

}

