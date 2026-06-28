package avicit.weekly.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.Serializable;
import java.net.URL;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.shiro.web.session.HttpServletSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import avicit.platform6.commons.utils.ComUtil;
import avicit.pb.milepost.dynfiveof.service.DynFiveOfService;
import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.spring.SpringFactory;
import avicit.weekly.dao.WeeklyDao;
import avicit.weekly.dto.DynDistributeDTO;
import avicit.weekly.dto.DynMeeklyDTO;
import avicit.weekly.dto.DynTypeDTO;
import avicit.weekly.dto.ReadExcel;
import avicit.weekly.dto.RollingPlanDTO;
import avicit.weekly.dto.WeeklyDTO;
import avicit.weekly.service.WeeklyService;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：avicitdev@avicit.com @创建时间： 2023-03-28 12:57
 * @类说明：请填写 @修改记录：
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/weekly/weeklyController")
public class WeeklyController implements LoaderConstant, Serializable, EventListener {
	private static final Logger LOGGER = LoggerFactory.getLogger(WeeklyController.class);

	// 该属性值可以由设计器设置
	String msg;
	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private WeeklyService weeklyService;
	@Autowired
	private WeeklyDao weeklyDao;
	@Autowired
	private SysLookupAPI sysLookupAPI;

	/**
	 * 跳转到管理页面
	 * 
	 * @param request
	 *            请求
	 * @param reponse
	 *            响应
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toWeeklyManage")
	public ModelAndView toWeeklyManage(HttpServletRequest request, HttpServletResponse reponse, HttpSession session) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/weekly/WeeklyManage");
		request.setAttribute("url", "platform/avicit/weekly/weeklyController/");
		/*request.setAttribute("sysid", SessionHelper.getLoginSysUserId(request));*/
		request.setAttribute("Type", weeklyDao.getType());
		return mav;
	}

	public WeeklyController() {
	}

	@RequestMapping("/toWeeklySManage")
	public ModelAndView toWeeklySManage(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/weekly/WeeklyManageS");
		request.setAttribute("url", "platform/avicit/weekly/weeklyController/");
		request.setAttribute("sysid", SessionHelper.getLoginSysUserId(request));
		request.setAttribute("Type", weeklyDao.getType());
		return mav;
	}

	@RequestMapping("/toDynDistributeManage")
	public ModelAndView toDynDistributeManage(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/weekly/DynDistributeManage");
		request.setAttribute("url", "platform/avicit/weekly/weeklyController/");
		return mav;
	}
	@RequestMapping("/toException")
	public ModelAndView toException(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/weekly/commonImport");
		request.setAttribute("url", "platform/avicit/weekly/weeklyController/");
		return mav;
	}

	@RequestMapping(value = "toWeeklyManageSelect")
	public ModelAndView toWeeklyManageSelect(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/weekly/select/WeeklyManage");
		request.setAttribute("url", "platform/avicit/weekly/weeklyController/operation/");
		return mav;
	}

	@RequestMapping(value = "toRollingPlanManage")
	public ModelAndView toRollingPlanManage(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/weekly/select/RollingPlanManage");
		request.setAttribute("url", "platform/avicit/weekly/weeklyController/operation/");
		return mav;
	}
	@RequestMapping(value = "toDyntype")
	public ModelAndView toDyntype(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/weekly/DynTypeEdit");
		request.setAttribute("url", "platform/avicit/weekly/weeklyController/");
		request.setAttribute("Type", weeklyDao.getType());
		return mav;
	}
	
	@RequestMapping("/weeklyPage")
	public ModelAndView weeklyPage(String xian, HttpServletRequest request) {
		ModelAndView mvc = new ModelAndView();
		try {
			if (xian != null) {
				xian = SessionHelper.getCurrentDeptId(request);
			}
			List<WeeklyDTO> list = weeklyService.weeklyPage(xian);
			Map<String, Object> map = weeklyService.getTime();
			mvc.addObject("row", list);
			mvc.addObject("time", map);
		} catch (Exception ex) {
			mvc.addObject("error", ex.getMessage());
		}
		return mvc;
	}

	@RequestMapping("/weeklySPage")
	public ModelAndView weeklySPage(HttpSession session, String xian, HttpServletRequest request) {
		ModelAndView mvc = new ModelAndView();
		try {
			if (xian != null) {
				xian = SessionHelper.getCurrentDeptId(request);
			}
			List<WeeklyDTO> list = weeklyService.weeklySPage(xian, session);
			Map<String, Object> map = weeklyService.getTime();
			mvc.addObject("row", list);
			mvc.addObject("time", map);
		} catch (Exception ex) {
			mvc.addObject("error", ex.getMessage());
		}
		return mvc;
	}

	@RequestMapping("/RollingPlan")
	public ModelAndView RollingPlan(String xian, HttpServletRequest request) {
		ModelAndView mvc = new ModelAndView();
		try {
			if (xian != null) {
				xian = SessionHelper.getCurrentDeptId(request);
			}
			List<RollingPlanDTO> list = weeklyService.RollingPlan(xian);
			Map<String, Object> map = weeklyService.getTime();
			mvc.addObject("row", list);
			mvc.addObject("time", map);
		} catch (Exception ex) {
			mvc.addObject("error", ex.getMessage());
		}
		return mvc;
	}

	@RequestMapping("/RollingSPlan")
	public ModelAndView RollingSPlan(HttpSession session, String xian, HttpServletRequest request) {
		ModelAndView mvc = new ModelAndView();
		try {
			if (xian != null) {
				xian = SessionHelper.getCurrentDeptId(request);
			}
			List<RollingPlanDTO> list = weeklyService.RollingSPlan(xian, request, session);
			Map<String, Object> map = weeklyService.getTime();
			mvc.addObject("row", list);
			mvc.addObject("time", map);
		} catch (Exception ex) {
			mvc.addObject("error", ex.getMessage());
		}
		return mvc;
	}

	@RequestMapping("/Weedata")
	public ModelAndView Weedata(HttpSession session, String lcid, HttpServletRequest request, String week,
			String rool) {
		ModelAndView mvc = new ModelAndView();
		try {
			List<WeeklyDTO> list = (List<WeeklyDTO>) session.getAttribute("weekly");
			List<RollingPlanDTO> arr = (List<RollingPlanDTO>) session.getAttribute("RollingSPlan");
			return weeklyService.Weedata(list, arr, lcid, week, rool);
		} catch (Exception ex) {
			mvc.addObject("error", ex.getMessage());
		}

		return mvc;
	}

	@RequestMapping("/lastWeekly")
	@ResponseBody
	public ModelAndView lastWeekly(String ltid,String type) {
		ModelAndView mvc = new ModelAndView();
		try {
			return weeklyService.lastWeekly(ltid,type);
		} catch (Exception ex) {
			mvc.addObject("error", ex.getMessage());
			return mvc;
		}

	}

	@RequestMapping(value = "/ryonMessage")
	@ResponseBody
	public Map<String, Object> togetDynMeeklyByPage(PageParameter pageParameter, HttpServletRequest request,
			String xian, String is) {
		QueryReqBean<DynMeeklyDTO> queryReqBean = new QueryReqBean<DynMeeklyDTO>();
		queryReqBean.setPageParameter(pageParameter);
		HashMap<String, Object> map = new HashMap<String, Object>();
		String json = ServletRequestUtils.getStringParameter(request, "param", "");
		String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");// 字段查询条件
		String sord = ServletRequestUtils.getStringParameter(request, "sord", "");// 排序方式
		String sidx = ServletRequestUtils.getStringParameter(request, "sidx", "");// 排序字段
		if (!"".equals(keyWord)) {
			json = keyWord;
		}
		String oderby = "";
		if (sidx != null && sord != null && !"".equals(sord) && !"".equals(sidx)) {
			String cloumnName = ComUtil.getColumn(DynMeeklyDTO.class, sidx);
			if (cloumnName != null) {
				oderby = " " + cloumnName + " " + sord;
			}
		}

		DynMeeklyDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynMeeklyDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynMeeklyDTO>() {
			});
			queryReqBean.setSearchParams(param);
		}
		try {
			String sysid = "";
			if (xian != null) {
				xian = SessionHelper.getCurrentDeptId(request);
				sysid = SessionHelper.getLoginSysUserId(request);
			}

			result = weeklyService.searchDynMeeklyByPage(queryReqBean, SessionHelper.getCurrentOrgIdentity(request),
					oderby, xian, is, sysid);

		} catch (Exception ex) {
			return map;
		}

		for (DynMeeklyDTO dto : result.getResult()) {
			if (dto.getBusinessstate() != null) {
				if (dto.getBusinessstate().equals("ended")) {
					dto.setBusinessstate("已结束");
				} else {
					dto.setBusinessstate("流转中");
				}
			}

		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynMeeklyDTO分页数据");
		return map;
	}

	@RequestMapping(value = "/insertDynDistributeList")
	@ResponseBody
	public Map<String, Object> insertDynDistributeList(String rows, String userid, HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		try {
			String user = SessionHelper.getLoginSysUserId(request);
			String bol = weeklyService.insertDynDistributeList(rows, userid, user);
			map.put("bol", bol);
		} catch (Exception ex) {
			map.put("error", ex.getMessage());
		}
		return map;

	}

	@RequestMapping(value = "/operation/getDynDistributesByPage")
	@ResponseBody
	public Map<String, Object> togetDynDistributeByPage(PageParameter pageParameter, HttpServletRequest request)
			throws Exception {
		QueryReqBean<DynDistributeDTO> queryReqBean = new QueryReqBean<DynDistributeDTO>();
		queryReqBean.setPageParameter(pageParameter);
		HashMap<String, Object> map = new HashMap<String, Object>();
		String json = ServletRequestUtils.getStringParameter(request, "param", "");
		String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");// 字段查询条件
		String sord = ServletRequestUtils.getStringParameter(request, "sord", "");// 排序方式
		String sidx = ServletRequestUtils.getStringParameter(request, "sidx", "");// 排序字段
		if (!"".equals(keyWord)) {
			json = keyWord;
		}
		String oderby = "";
		if (sidx != null && sord != null && !"".equals(sord) && !"".equals(sidx)) {
			String cloumnName = ComUtil.getColumn(DynDistributeDTO.class, sidx);
			if (cloumnName != null) {
				oderby = " " + cloumnName + " " + sord;
			}
		}

		DynDistributeDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynDistributeDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynDistributeDTO>() {
			});
			queryReqBean.setSearchParams(param);
		}
		String user = SessionHelper.getLoginSysUserId(request);

		result = weeklyService.searchDynDistributeByPage(queryReqBean, SessionHelper.getCurrentOrgIdentity(request),
				oderby, user);

		for (DynDistributeDTO dto : result.getResult()) {

		}

		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynDistributeDTO分页数据");
		return map;
	}

	@RequestMapping(value = "/delete/{type}")
	@ResponseBody
	public ModelAndView delete(@PathVariable("type") String type, @RequestBody String[] ids,
			HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		try {
			weeklyService.deleteWeeklyByIds(ids, type, request);
			mav.addObject("flag", OpResult.success);
			mav.addObject("type", type);
		} catch (Exception ex) {
			mav.addObject("error", ex.getMessage());
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;
	}

	@RequestMapping(value = "/operation/getWeeklysByPage")
	@ResponseBody
	public Map<String, Object> togetWeeklyByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<WeeklyDTO> queryReqBean = new QueryReqBean<WeeklyDTO>();
		queryReqBean.setPageParameter(pageParameter);
		HashMap<String, Object> map = new HashMap<String, Object>();
		String json = ServletRequestUtils.getStringParameter(request, "param", "");
		String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");// 字段查询条件
		String sord = ServletRequestUtils.getStringParameter(request, "sord", "");// 排序方式
		String sidx = ServletRequestUtils.getStringParameter(request, "sidx", "");// 排序字段
		if (!"".equals(keyWord)) {
			json = keyWord;
		}
		String oderby = "";
		if (sidx != null && sord != null && !"".equals(sord) && !"".equals(sidx)) {
			String cloumnName = ComUtil.getColumn(WeeklyDTO.class, sidx);
			if (cloumnName != null) {
				oderby = " " + cloumnName + " " + sord;
			}
		}

		WeeklyDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<WeeklyDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<WeeklyDTO>() {
			});
			queryReqBean.setSearchParams(param);
		}
		try {
			if (!"".equals(keyWord)) {
				result = weeklyService.searchWeeklyByPageOr(queryReqBean, SessionHelper.getCurrentOrgIdentity(request),
						oderby);
			} else {
				result = weeklyService.searchWeeklyByPage(queryReqBean, SessionHelper.getCurrentOrgIdentity(request),
						oderby);
			}
		} catch (Exception ex) {
			return map;
		}

		for (WeeklyDTO dto : result.getResult()) {
			dto.setWorkClass(sysLookupAPI.getNameByLooupTypeCodeAndLooupCode("WORK_CLASS", dto.getWorkClass()));
			if(dto.getIsCompletion().equals("Y")){
				dto.setIsCompletion("是");
			}else{
				dto.setIsCompletion("否");
			}
			String[] ss = dto.getPersonLiable().split(";");
			String ee = "";
			for (int j = 0; j < ss.length; j++) {
				ee += weeklyDao.getname(ss[j]);
				ee += ",";
			}
			dto.setPersonLiable(ee);
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取WeeklyDTO分页数据");
		return map;
	}

	/**
	 * 分页查询方法
	 * 
	 * @param pageParameter
	 *            查询条件
	 * @param request
	 *            请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getRollingPlansByPage")
	@ResponseBody
	public Map<String, Object> togetRollingPlanByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<RollingPlanDTO> queryReqBean = new QueryReqBean<RollingPlanDTO>();
		queryReqBean.setPageParameter(pageParameter);
		HashMap<String, Object> map = new HashMap<String, Object>();
		String json = ServletRequestUtils.getStringParameter(request, "param", "");
		String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");// 字段查询条件
		String sord = ServletRequestUtils.getStringParameter(request, "sord", "");// 排序方式
		String sidx = ServletRequestUtils.getStringParameter(request, "sidx", "");// 排序字段
		if (!"".equals(keyWord)) {
			json = keyWord;
		}
		String oderby = "";
		if (sidx != null && sord != null && !"".equals(sord) && !"".equals(sidx)) {
			String cloumnName = ComUtil.getColumn(RollingPlanDTO.class, sidx);
			if (cloumnName != null) {
				oderby = " " + cloumnName + " " + sord;
			}
		}

		RollingPlanDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<RollingPlanDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<RollingPlanDTO>() {
			});
			queryReqBean.setSearchParams(param);
		}
		try {
			if (!"".equals(keyWord)) {
				result = weeklyService.searchRollingPlanByPageOr(queryReqBean,
						SessionHelper.getCurrentOrgIdentity(request), oderby);
			} else {
				result = weeklyService.searchRollingPlanByPage(queryReqBean,
						SessionHelper.getCurrentOrgIdentity(request), oderby);
			}
		} catch (Exception ex) {
			return map;
		}

		for (RollingPlanDTO dto : result.getResult()) {

		}
		int length = weeklyDao.searchRollingPlanByPage(param, SessionHelper.getCurrentOrgIdentity(request), oderby).size();
		/*map.put("records", result.getPageParameter().getTotalCount());*/
		map.put("records", length);
		map.put("page", result.getPageParameter().getPage());
//		map.put("total", result.getPageParameter().getTotalPage());
		map.put("total", Math.round((length*1.00)/pageParameter.getRows()));
		map.put("rows", result.getResult());
		LOGGER.info("成功获取RollingPlanDTO分页数据");
		return map;
	}

	public void notify(EventListenerExecution execution) {
		// 从流程变量中取值
		String week = (String) execution.getVariable("week");
		if (week == null) {
			String id =(String)execution.getVariable("id");
			WeeklyService WeeklyService = SpringFactory.getBean(WeeklyService.class);
			DynFiveOfService dynfiveService = SpringFactory.getBean(DynFiveOfService.class);
			ModelAndView mcv = WeeklyService.lastWeekly(id,"1");
			Map<String,Object> map = mcv.getModel();
			// 设置流程变量
			String weekly =(String)map.get("LAST_WEEKLY");			
			execution.setVariable("week",weekly );
			dynfiveService.updatebpmHistProcinstTitle(weekly, id);
		}
	}

	// 弃用方法
	@RequestMapping("/getuser")
	@ResponseBody
	public String getuser(String username) {
		return weeklyService.getuser(username);
	}

	// 弃用方法
	@RequestMapping("/weklydyn/{type}")
	@ResponseBody
	public ModelAndView weklydyn(String json, String lcid, @PathVariable("type") String type) {
		ModelAndView mvc = new ModelAndView();
		try {
			// 直接解析为对象list
			List<WeeklyDTO> studentsList = JSONObject.parseArray(json, WeeklyDTO.class);
			if (type.equals("1")) {
				return weeklyService.Weedata(studentsList, null, lcid, "1", "0");
			} else if (type.equals("2")) {
				return weeklyService.dynSonWeekly(studentsList, lcid);
			}

		} catch (Exception ex) {
			mvc.addObject("error", ex.getMessage());
		}
		return mvc;
	}

	// 下载模板
	@RequestMapping("/filexsl")
	@ResponseBody
	public ModelAndView filexsl(HttpServletResponse response) {
		ModelAndView mvc = new ModelAndView();
		URL resource = WeeklyController.class.getResource("");
		String path = (resource + "/WEEKLY.xlsx").replace("file:", "");
		weeklyService.download(path, response);
		mvc.addObject("src", path);
		return mvc;
	}

//上传文件
	@RequestMapping(value={"/uploadExcel/{excelFileId}"})
	public void upLoadExcel(MultipartFile mulFile,HttpServletRequest request, HttpServletResponse res, @PathVariable("excelFileId") String fileId)throws Exception {
	    Workbook wb = null;
	    InputStream ios = null;{	      
	        //创建缓冲输入流
	        ios = new BufferedInputStream(mulFile.getInputStream());	   
	    try {
	         wb = new HSSFWorkbook(ios);	        
	        //获取到excel的第一个sheet页
	        Sheet sheet =  wb.getSheetAt(0);
	        weeklyService.upLoadExcel(sheet,fileId);
	    } catch (IOException e) {
	        e.printStackTrace();
	    }
	}
	}
	//子表导入
	@RequestMapping(value={"/uploadExcels/{excelFileId}"})
	public ModelAndView upLoadExcels(MultipartFile mulFile,HttpServletRequest request, HttpServletResponse res, @PathVariable("excelFileId") String fileId)throws Exception {
	    Workbook wb = null;
        ModelAndView mav = new ModelAndView();
	    InputStream ios = null;{	      
	        //创建缓冲输入流
	        ios = new BufferedInputStream(mulFile.getInputStream());	   
	    try {
	         wb = new HSSFWorkbook(ios);	        
	        //获取到excel的第一个sheet页
	        Sheet sheet =  wb.getSheetAt(0);
	        List<WeeklyDTO> list = weeklyService.upLoadExcels(sheet,fileId);
	        request.setAttribute("row", list);
	        mav.setViewName("avicit/weekly/commonImport");;
	      return mav ;       
	    } catch (IOException e) {
	        e.printStackTrace();
	        return null;
	    }
	}
	}
	@RequestMapping("/update/type")
	@ResponseBody
	public ModelAndView updatemo(String json){
		ModelAndView mav = new ModelAndView();
		DynTypeDTO dyn = JSONObject.parseObject(json, DynTypeDTO.class);
		boolean  bol =  weeklyService.updatemo(dyn);
		mav.addObject("f",bol);
		mav.addObject("obj",dyn);
		return mav;
	}
	@RequestMapping("/getLastWeekly")
	@ResponseBody
	public ModelAndView getLastWeekly(String xian,HttpServletRequest request){
		if(xian == null){
			xian = SessionHelper.getCurrentDeptId(request);
		}
		String sysid= SessionHelper.getLoginSysUserId(request);
		ModelAndView mav = new ModelAndView();
		List list =  weeklyService.getLastWeekly(xian,sysid);
		mav.addObject("weekly",list); 
		return mav;
	}
	@RequestMapping("/setLastWeekly")
	@ResponseBody
	public ModelAndView setLastWeekly(String ltid,String laskweekly){
		ModelAndView mav = new ModelAndView();
		try{
		DynMeeklyDTO week = weeklyDao.lastWeekly(ltid,"1");
		Calendar calendar = Calendar.getInstance();
		int year = calendar.get(Calendar.YEAR);// 本年
		week.setLastWeekly(year+"年第"+laskweekly+"期工作周报");						
		weeklyDao.updateDynMeeklySensitive(week);
		mav.addObject("success","成功");		
		mav.addObject("flag",OpResult.success);
		}catch(Exception ex){
			mav.addObject("success","失败");	
			mav.addObject("flag",ex.getMessage());
		}
		return mav;
	}

	@RequestMapping("/download")
	public void download(HttpServletRequest request,HttpServletResponse response) throws Exception{
		HSSFWorkbook workbook = new HSSFWorkbook();
		String fileName="";
		String [] headers = {"工作内容","上周进展","本周计划","完成节点","备注"};
		weeklyService.downloadExcel(workbook,0,headers);
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		workbook.write(out);
		byte[] content = out.toByteArray();
		InputStream ins = new ByteArrayInputStream(content);
		fileName = URLEncoder.encode(("周报下载模版"),"UTF-8").replace("+","%20");
		response.reset();
		response.setContentType("application/vnd.ms-excel;charset=utf-8");
		response.setHeader("Content-Disposition","attachment;filename="+fileName);
		ServletOutputStream outputStrem = response.getOutputStream();
		BufferedInputStream bins = new BufferedInputStream(ins);
		BufferedOutputStream bouts = new BufferedOutputStream(outputStrem);
		byte[] buff = new byte[2048];
		int bytesRead;
		while (-1 != (bytesRead = bins.read(buff,0,buff.length))){
			bouts.write(buff,0,bytesRead);
		}
		bins.close();
		bouts.close();
	}
	
	@RequestMapping("/uoload")
	public void upload(@RequestParam("filename")MultipartFile file,HttpServletRequest request,HttpServletResponse response)throws Exception{
		response.reset();
		response.setContentType("text/plain;charset=UTF-8");
		PrintWriter out = response.getWriter();
		boolean b = false;
		Map<String,Object> model = new HashMap<String,Object>();
		if(file == null){
			model.put("error","空文件");
			model.put("flag",OpResult.failure);
		}
		String name = file.getOriginalFilename();
		long size = file.getSize();
		if(name == null || !("").equals(name) && size!=0 && !weeklyService.validateExcel(name)){
			model.put("error","文件格式不正确！请使用.xls或.xlsx后缀文档。");
			model.put("flag",OpResult.failure);
		}
		int sheetNum =1;
		ReadExcel readExcel = new ReadExcel();
		List<WeeklyDTO> dtoList = readExcel.getExcelInfo(file, sheetNum);
		int indexUp = 0;
		int indexDown = 0;
		if(dtoList !=null && dtoList.toString().equals("[]")&& dtoList.size()>=1){
			WeeklyDTO dtoQuery = null;
			for(WeeklyDTO dto : dtoList ){
				indexUp++;
			}
			b = true;
		}
		model.put("dtoList",dtoList);
		if(b){
			model.put("success","成功导入"+indexUp + "条,失败"+indexDown+"条");
			model.put("flag",OpResult.success);
		}else{
			model.put("success","无匹配数据导入EXCEL失败");
			model.put("flag",OpResult.failure);
		}
		out.write(JSONObject.toJSONString(model));
		out.flush();
		out.close();
	}
		@RequestMapping("/sonWeekly")
		public void sonWeekly(String json, String lcid) {
			ModelAndView mvc = new ModelAndView();
				// 直接解析为对象list
				List<WeeklyDTO> studentsList = JSONObject.parseArray(json, WeeklyDTO.class);
				weeklyService.sonWeekly(studentsList,lcid);
		}
}
