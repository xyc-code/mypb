package avicit.tradeunion.dacaremedicine.controller;

import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.bpmbusiness.vo.Idea;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpmclient.bpm.service.BpmIdeaService;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.tradeunion.dacaremedicine.dto.DaCareMedicineDTO;
import avicit.tradeunion.dacaremedicine.service.DaCareMedicineService;
import avicit.tradeunion.dacaremedicineitem.dto.DaCareMedicineItemDTO;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2021-03-28 13:08
 * @类说明：
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/tradeunion/daCareMedicine/daCareMedicineController")
public class DaCareMedicineController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DaCareMedicineController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DaCareMedicineService daCareMedicineService;
	@Autowired
	private BpmIdeaService bpmIdeaService;

	@Autowired
	private BeanValidatorUtil beanValidatorUtil;
	
	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDaCareMedicineManage")
	public ModelAndView toDaCareMedicineManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/tradeunion/dacaremedicine/DaCareMedicineManage");
		mav.addObject("url", "platform/avicit/tradeunion/daCareMedicine/daCareMedicineController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDaCareMedicinesByPage")
	@ResponseBody
	public Map<String, Object> togetDaCareMedicineByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DaCareMedicineDTO> queryReqBean = new QueryReqBean<DaCareMedicineDTO>();
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
			cloumnName = ComUtil.getColumn(DaCareMedicineDTO.class, sidx);
			if (cloumnName != null) {
				//这里先进行判断是否有对应的数据库字段
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(DaCareMedicineDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(DaCareMedicineDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		DaCareMedicineDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DaCareMedicineDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DaCareMedicineDTO>() {
			});
		}else{
			param = new DaCareMedicineDTO();
		}
		queryReqBean.setSearchParams(param);
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setBpmType("my");
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			result = daCareMedicineService.searchDaCareMedicineByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		for (DaCareMedicineDTO dto : result.getResult()) {
			dto.setPatienterIdAlias(sysUserLoader.getSysUserNameById(dto.getPatienterId()));
			dto.setPatientSexName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PLATFORM_SEX", dto.getPatientSex(),sysApplicationAPI.getCurrentAppId()));
			dto.setDepositBankName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("DEPOSIT_BANK", dto.getDepositBank(),sysApplicationAPI.getCurrentAppId()));
			dto.setDiseaseTypeName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("DISEASE_TYPE", dto.getDiseaseType(),sysApplicationAPI.getCurrentAppId()));
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DaCareMedicineDTO分页数据");
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
			DaCareMedicineDTO dto = daCareMedicineService.queryDaCareMedicineByPrimaryKey(id);
			dto.setPatienterIdAlias(sysUserLoader.getSysUserLoginNameById(dto.getPatienterId()));
			mav.addObject("daCareMedicineDTO", dto);
		}
		mav.setViewName("avicit/tradeunion/dacaremedicine/DaCareMedicine" + type);
		return mav;
	}

	/**
	 * 保存数据

	 * @param request 请求
	 * @return ModelAndView
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	public ModelAndView toSaveDaCareMedicine(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		String updateSubData = ServletRequestUtils.getStringParameter(request, "updateSubData", "");
		String removeSubIds = ServletRequestUtils.getStringParameter(request, "removeSubIds", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DaCareMedicineDTO daCareMedicineDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DaCareMedicineDTO>() {
					});


			List<DaCareMedicineItemDTO> updateSubList = new ArrayList<DaCareMedicineItemDTO>();
			if (StringUtils.isNotEmpty(updateSubData)) {
				updateSubList = JsonHelper.getInstance().readValue(updateSubData, dateFormat, new TypeReference<List<DaCareMedicineItemDTO>>() {
				});
			}
			String[] removeSubList = null;
			if (StringUtils.isNotEmpty(removeSubIds)) {
				removeSubList = JsonHelper.getInstance().readValue(removeSubIds, String[].class);
			}
			//调用校验工具类，校验数据
			beanValidatorUtil.validateObject(daCareMedicineDTO);


			if (StringUtils.isEmpty(daCareMedicineDTO.getId())) {
				//新增
				daCareMedicineDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = daCareMedicineService.insertDaCareMedicine(daCareMedicineDTO,updateSubList);
				mav.addObject("id", id);
			} else {
				//修改
				daCareMedicineService.updateDaCareMedicineSensitive(daCareMedicineDTO,updateSubList,removeSubList);
				mav.addObject("id", daCareMedicineDTO.getId());
			}
			mav.addObject("flag", OpResult.success);
		} catch (Exception ex) {
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;

	}

	/**
	 * 按照id批量删除数据
	 * @param ids id数组
	 * @return ModelAndView
	 */
	@RequestMapping(value = "/operation/delete", method = RequestMethod.POST)
	public ModelAndView toDeleteDaCareMedicine(@RequestBody String[] ids) {
		ModelAndView mav = new ModelAndView();
		try {
			daCareMedicineService.deleteDaCareMedicineByIds(ids);
			mav.addObject("flag", OpResult.success);
		} catch (Exception ex) {
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;
	}
	
	/**
  	 * 新增并启动流程
  	 * @param request 请求
  	 * @return ModelAndView
  	 */
  	@RequestMapping(value="/operation/saveAndStartProcess",method=RequestMethod.POST)
  	public ModelAndView saveAndStartProcess(HttpServletRequest request){
  		ModelAndView mav= new ModelAndView();
		String processDefId = ServletRequestUtils.getStringParameter(request, "processDefId", "");
		String formCode = ServletRequestUtils.getStringParameter(request, "formCode", "");
		String jsonString = ServletRequestUtils.getStringParameter(request, "jsonString", "");
		String data = ServletRequestUtils.getStringParameter(request, "data", "");
		String updateSubData = ServletRequestUtils.getStringParameter(request, "updateSubData", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DaCareMedicineDTO daCareMedicineDTO = JsonHelper.getInstance().readValue(data, dateFormat, new TypeReference<DaCareMedicineDTO>(){});
			String userId = SessionHelper.getLoginSysUserId(request);
			String deptId = SessionHelper.getCurrentDeptId(request);
			//调用校验工具类，校验数据
			beanValidatorUtil.validateObject(daCareMedicineDTO);
			List<DaCareMedicineItemDTO> updateSubList = new ArrayList<DaCareMedicineItemDTO>();
			if (StringUtils.isNotEmpty(updateSubData)) {
				updateSubList = JsonHelper.getInstance().readValue(updateSubData, dateFormat, new TypeReference<List<DaCareMedicineItemDTO>>() {});
				for(int i=0; updateSubList != null && i < updateSubList.size(); i++){
					//调用校验工具类，校验数据
					beanValidatorUtil.validateObject(updateSubList.get(i));
				}
			}


			//封装启动流程所需的参数
			Map<String, Object> parameter = new HashMap<String,Object>();
			parameter.put("processDefId", processDefId);
			parameter.put("formCode", formCode);
			parameter.put("jsonString", jsonString);
			parameter.put("userId", userId);
			parameter.put("deptId", deptId);
			daCareMedicineDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
			StartResultBean result = daCareMedicineService.insertDaCareMedicineAndStartProcess(daCareMedicineDTO,updateSubList, parameter);
			mav.addObject("flag",OpResult.success);
			mav.addObject("startResult", result);
		} catch (Exception ex) {
			mav.addObject("flag",OpResult.failure);
		}
  		return mav;
  	}
  	
  	/**
	 * 初始化detail页面form表单数据
	 * @param request 求情
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/initDetailFormData")
	public ModelAndView initDetailFormData(HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView();
		String id = request.getParameter("id");
		DaCareMedicineDTO dto = daCareMedicineService.queryDaCareMedicineByPrimaryKey(id);
			dto.setPatienterIdAlias(sysUserLoader.getSysUserNameById(dto.getPatienterId()));

			dto.setDepositBankName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("DEPOSIT_BANK", dto.getDepositBank(),sysApplicationAPI.getCurrentAppId()));
        mav.addObject("flag", OpResult.success);
        mav.addObject("daCareMedicineDTO", dto);
		return mav;
	}


	/**
	 * 疾病类型
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/caltulateJbType")
	public ModelAndView caltulateJbType(HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView();
		Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00"));
		String curYear = String.valueOf(calendar.get(Calendar.YEAR));
		try {
			String id = request.getParameter("id");//id
			String patienterId = request.getParameter("patienterId");//报销人
			String diseaseType = request.getParameter("diseaseType");//类型
			Map<String, String> retMap = daCareMedicineService.fidJblx(id,patienterId, curYear, diseaseType);
			mav.addObject("flag", OpResult.success);
			mav.addObject("isSubmit", retMap.get("isSubmit"));
			mav.addObject("retMessage", retMap.get("retMessage"));

		}catch (Exception e){
			LOGGER.error("{}",e.getMessage());
			mav.addObject("flag", OpResult.failure);
			mav.addObject("isSubmit", "no");
			mav.addObject("retMessage", "处理错误");
		}


		return mav;

	}

 	/**
	 * 提交前计算验证
	 * @param request 请求
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/caltulateMoney")
	public ModelAndView caltulateMoney(HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView();
		try {
			Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00"));
			String curYear = String.valueOf(calendar.get(Calendar.YEAR));


			String patienterId = request.getParameter("patienterId");//报销人
			String diseaseType = request.getParameter("diseaseType");//类型
			String submitExpensess = ServletRequestUtils.getStringParameter(request,"submitExpensess","0.00");//申请金额
			String id = request.getParameter("id");
			Map<String,String> submitExpenses = daCareMedicineService.getSubmitExpenses(id,patienterId,diseaseType,submitExpensess,curYear);
			String retValue  = submitExpenses.get("retValue");
			String retMessage  = submitExpenses.get("retMessage");
			String isSubmit  = submitExpenses.get("isSubmit");

			mav.addObject("flag", OpResult.success);
			mav.addObject("retValue", retValue);
			mav.addObject("isSubmit", isSubmit);
			mav.addObject("retMessage", retMessage);
		}catch (Exception e){
			mav.addObject("flag", OpResult.failure);
			mav.addObject("isSubmit", "no");
			mav.addObject("retValue", "0.00");
			mav.addObject("retMessage", "处理错误");
		}




		/*if(!StringUtils.equals(retValue, "0.0")){
			 mav.addObject("flag", OpResult.success);
			 mav.addObject("retValue", retValue);
			 mav.addObject("retMessage", retMessage);
		}else{
			 mav.addObject("flag", OpResult.failure);
			 mav.addObject("retValue", retValue);
			 mav.addObject("retMessage", retMessage);
		} */
		return mav;
	}
	/**
	 * 打印
	 * @param request 请求
	 * @return ModelAndView
	 * @throws Exception
	 */
	@RequestMapping("/careMedicinePrint/{formId}/{entryId}")
	public ModelAndView careMedicinePrint(HttpServletRequest request,@PathVariable String formId,@PathVariable String entryId) throws Exception {
	
		Map<String,Object> retMap = new HashMap<>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		ModelAndView mav = new ModelAndView();

		//String processInstanceId = request.getParameter("processInstanceId");
		DaCareMedicineDTO daCareMedicineDTO = daCareMedicineService.queryDaCareMedicineByPrimaryKey(formId);
		if(daCareMedicineDTO != null){
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getAutoCode())){
				retMap.put("AutoCode",daCareMedicineDTO.getAutoCode());
			}else{
				retMap.put("AutoCode","");
			}
			
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getPatienterId())){
				retMap.put("PatienterIdAlias",sysUserLoader.getSysUserNameById(daCareMedicineDTO.getPatienterId()));
			}else{
				retMap.put("PatienterIdAlias","");
			}
		
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getPatientSex())){
				retMap.put("PatientSex",sysLookupLoader.getNameByLooupTypeCodeAndLooupCode("PLATFORM_SEX",daCareMedicineDTO.getPatientSex()));
			}else{
				retMap.put("PatientSex","");
			}
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getPatientAge())){
				retMap.put("PatientAge",daCareMedicineDTO.getPatientAge());
			}else{
				retMap.put("PatientAge","");
			}
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getPatientTel())){
				retMap.put("PatientTel",daCareMedicineDTO.getPatientTel());
			}else{
				retMap.put("PatientTel","");
			}
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getDisease())){
				retMap.put("Disease",daCareMedicineDTO.getDisease());
			}else{
				retMap.put("Disease","");
			}
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getHospital())){
				retMap.put("Hospital",daCareMedicineDTO.getHospital());
			}else{
				retMap.put("Hospital","");
			}
			if(daCareMedicineDTO.getInhospDate() != null){
				retMap.put("InhospDate",sdf.format(daCareMedicineDTO.getInhospDate()));
			}else{
				retMap.put("InhospDate","");
			}
			if(daCareMedicineDTO.getOuthospDate() != null){
				retMap.put("OuthospDate",sdf.format(daCareMedicineDTO.getOuthospDate()));
			}else{
				retMap.put("OuthospDate","");
			}
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getEmployeeCard())){
				retMap.put("EmployeeCard",daCareMedicineDTO.getEmployeeCard());
			}else{
				retMap.put("EmployeeCard","");
			}
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getDepositBank())){
				retMap.put("DepositBank",sysLookupLoader.getNameByLooupTypeCodeAndLooupCode("DEPOSIT_BANK",daCareMedicineDTO.getDepositBank()));
			}else{
				retMap.put("DepositBank","");
			}
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getDiseaseType())){
				retMap.put("DiseaseType",sysLookupLoader.getNameByLooupTypeCodeAndLooupCode("DISEASE_TYPE",daCareMedicineDTO.getDiseaseType()));
			}else{
				retMap.put("DiseaseType","");
			}
			//if(StringUtils.isNotEmpty(daCareMedicineDTO.getHealthExpenses())){
				retMap.put("HealthExpenses",daCareMedicineDTO.getHealthExpenses());
			//}else{
			//	retMap.put("HealthExpenses","");
		//	}
			//if(StringUtils.isNotEmpty(daCareMedicineDTO.getOverallExpenses())){
				retMap.put("OverallExpenses",daCareMedicineDTO.getOverallExpenses());
			//}else{
				//retMap.put("OverallExpenses","");
			//}
			//if(StringUtils.isNotEmpty(daCareMedicineDTO.getPersonExpenses())){
				retMap.put("PersonExpenses",daCareMedicineDTO.getPersonExpenses());
			//}else{
				//retMap.put("PersonExpenses","");
			//}
			//if(StringUtils.isNotEmpty(daCareMedicineDTO.getSubmitExpenses())){
				retMap.put("SubmitExpenses",daCareMedicineDTO.getSubmitExpenses());
			//}else{
			//	retMap.put("SubmitExpenses","");
		//	}
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getAttribute02())){
				retMap.put("RequestDate",daCareMedicineDTO.getAttribute02());
			}else{
				retMap.put("RequestDate","");
			}
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getAttribute03())){
				retMap.put("RequestName",daCareMedicineDTO.getAttribute03());
			}else{
				retMap.put("RequestName","");
			}
			if(StringUtils.isNotEmpty(daCareMedicineDTO.getAttribute04())){
				retMap.put("RequestDept",daCareMedicineDTO.getAttribute04());
			}else{
				retMap.put("RequestDept","");
			}
			String userId = (String) request.getSession().getAttribute("userId");
			List<String> listIdeaSytleCode = bpmIdeaService.getIdeaSytleCode(entryId, userId);
			if(listIdeaSytleCode != null && listIdeaSytleCode.size() > 0){
				for(String ideaSytleCode : listIdeaSytleCode){
					if(StringUtils.equals(ideaSytleCode, "GHZX") || StringUtils.equals(ideaSytleCode, "JJHSC")){
						List <Idea> listBpmIdea = bpmIdeaService.getIdeaListByProcessInstIdeaAndCode(entryId,ideaSytleCode, userId);
						List <Idea> listBpmIdeaOrderByFinishTime = bpmIdeaService.orderIdeaByFinishTime(listBpmIdea);
						if(listBpmIdeaOrderByFinishTime != null && listBpmIdeaOrderByFinishTime.size() > 0){
							Idea idea = listBpmIdeaOrderByFinishTime.get(listBpmIdeaOrderByFinishTime.size() - 1);
							StringBuilder sb =  new StringBuilder();
							if(StringUtils.isNotEmpty(idea.getDept())){
								sb.append(idea.getDept());
								sb.append(" ");
							}
							if(StringUtils.isNotEmpty(idea.getUser())){
								sb.append(sysUserLoader.getSysUserNameById(idea.getUser()));
								sb.append(" ");
							}
							if(StringUtils.isNotEmpty(idea.getDay())){
								sb.append(idea.getDay());
								sb.append(" ");
							}
							if(StringUtils.isNotEmpty(idea.getIdea())){
								sb.append(idea.getIdea());
							
							}
							retMap.put(ideaSytleCode,sb.toString());
						}
						
					}
					
				}
			}
	
		}	
		//mav.addObject("daCareMedicineDTO",daCareMedicineDTO);
		mav.addObject("map",retMap);
		mav.setViewName("avicit/tradeunion/dacaremedicine/printDaCareMedicine");
	
		return mav;
	}
}

