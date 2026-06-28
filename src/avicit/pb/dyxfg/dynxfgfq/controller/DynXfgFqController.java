package avicit.pb.dyxfg.dynxfgfq.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.commons.utils.DateUtil;
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

import avicit.pb.dyxfg.dynxfgfq.dto.DynXfgFqDTO;
import avicit.pb.dyxfg.dynxfgfq.service.DynXfgFqService;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-25 14:42
 * @类说明：DYN_XFG_FQController
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/dyxfg/dynXfgFq/dynXfgFqController")
public class DynXfgFqController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynXfgFqController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynXfgFqService dynXfgFqService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;
    @Autowired
	private PartyOrganMemberService organMemberService;
    @Autowired
	private PartyOrganizationService organizationService;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDynXfgFqManage")
	public ModelAndView toDynXfgFqManage() {
		ModelAndView mav = new ModelAndView();
//		mav.setViewName("avicit/pb/dyxfg/dynxfgfq/DynXfgFqManage");
//		mav.addObject("url", "platform/avicit/pb/dyxfg/dynXfgFq/dynXfgFqController/operation/");
		mav.setViewName("avicit/pb/dyxfg/dynxfgfq/PartyOrganizationSelectS");
		mav.addObject("url", "platform/avicit/pb/organize/partyOrganization/partyOrganizationController");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDynXfgFqsByPage")
	@ResponseBody
	public Map<String, Object> togetDynXfgFqByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DynXfgFqDTO> queryReqBean = new QueryReqBean<DynXfgFqDTO>();
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
			cloumnName = ComUtil.getColumn(DynXfgFqDTO.class, sidx);
			//这里先进行判断是否有对应的数据库字段
			if (cloumnName != null) {
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(DynXfgFqDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(DynXfgFqDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		DynXfgFqDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynXfgFqDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynXfgFqDTO>() {
			});
		}else{
			param = new DynXfgFqDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		queryReqBean.setSearchParams(param);
		try {
			result = dynXfgFqService.searchDynXfgFqByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynXfgFqDTO分页数据");
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
	public ModelAndView toOpertionPage(@PathVariable String type, @PathVariable String id,HttpServletRequest request)
			throws Exception {
		ModelAndView mav = new ModelAndView();
		//编辑窗口或者详细页窗口
		if ("Edit".equals(type)) {
			DynXfgFqDTO dto = dynXfgFqService.queryDynXfgFqByPrimaryKey(id);
			mav.addObject("dynXfgFqDTO", dto);
		}else if("Add".equals(type)){
			mav.addObject("fqCreaTime",DateUtil.format(new Date(), "yyyy-MM-dd"));
			String loginSysUserId = SessionHelper.getLoginSysUserId(request);
			SysUser sysUserById = sysUserLoader.getSysUserById(loginSysUserId);
			mav.addObject("fqUser",sysUserById.getName());
			//获取党组织信息
			PartyOrganMemberDTO partyOrganMemberDTO = new PartyOrganMemberDTO();
			partyOrganMemberDTO.setUserId(loginSysUserId);
			List<PartyOrganMemberDTO> partyOrganMemberDTOS = organMemberService.searchPartyOrganMember(partyOrganMemberDTO, "", "");
			if(partyOrganMemberDTOS!=null&&partyOrganMemberDTOS.size()!=0){
				mav.addObject("fqTel",partyOrganMemberDTOS.get(0).getAttribute10());
				PartyOrganizationDTO partyOrganizationDTO = organizationService.queryPartyOrganizationByPrimaryKey(partyOrganMemberDTOS.get(0).getPartyId());
				mav.addObject("fqPartyName",partyOrganizationDTO.getPartyName());
				mav.addObject("fqPartyType",partyOrganizationDTO.getAttribute01());
			}
			//计算编号
			DynXfgFqDTO dto = new DynXfgFqDTO();
			String fqfromNo = DateUtil.format(new Date(), "yyyyMMdd");
			dto.setFqFromNo(fqfromNo);
			List<DynXfgFqDTO> dynXfgFqDTOS = this.dynXfgFqService.searchDynXfgFq(dto, "fq_from_no", "");
			if(dynXfgFqDTOS!=null&&dynXfgFqDTOS.size()!=0){
				DynXfgFqDTO dto1 = dynXfgFqDTOS.get(dynXfgFqDTOS.size() - 1);
				if(dto1!=null){
					String fqFromNo = dto1.getFqFromNo();
					int i = Integer.parseInt(fqFromNo.substring(8)) + 1;
					mav.addObject("fqFromNo",i);
				}
			}else {
				mav.addObject("fqFromNo",fqfromNo+"0001");
			}
			//获取年度
			LocalDate now = LocalDate.now();
			int year1 = now.getYear();
			int year = now.minusYears(1).getYear();
			mav.addObject("fqPxsj",year+"-"+year1+"年度");
		}
		mav.setViewName("avicit/pb/dyxfg/dynxfgfq/DynXfgFq" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
    @ResponseBody
	public Map<String,Object> toSaveDynXfgFq(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynXfgFqDTO dynXfgFqDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynXfgFqDTO>() {
					});
		    //调用校验工具类，校验数据
        	beanValidatorUtil.validateObject(dynXfgFqDTO);
			if (StringUtils.isEmpty(dynXfgFqDTO.getId())) {
				//新增
				dynXfgFqDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = dynXfgFqService.insertDynXfgFq(dynXfgFqDTO);
				map.put("id", id);
			} else {
				//修改
				dynXfgFqService.updateDynXfgFqSensitive(dynXfgFqDTO);
				map.put("id", dynXfgFqDTO.getId());
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
	public Map<String,Object> toDeleteDynXfgFq(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			dynXfgFqService.deleteDynXfgFqByIds(ids);
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
		DynXfgFqDTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<DynXfgFqDTO>() {
					});
		} else {
			param = new DynXfgFqDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<DynXfgFqDTO> dtoList = dynXfgFqService.searchDynXfgFqForExport(param, idsList);
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = dynXfgFqService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<DynXfgFqDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			DynXfgFqDTO bean = objList.get(i);
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
	 * 新增并启动流程
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value="/operation/saveAndStartProcess",method=RequestMethod.POST)
	public Map<String,Object> saveAndStartProcess(HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		String processDefId = ServletRequestUtils.getStringParameter(request, "processDefId", "");
		String formCode = ServletRequestUtils.getStringParameter(request, "formCode", "");
		String jsonString = ServletRequestUtils.getStringParameter(request, "jsonString", "");
		String data = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynXfgFqDTO dynXfgFqDTO = JsonHelper.getInstance().readValue(data, dateFormat, new TypeReference<DynXfgFqDTO>(){});
			//调用校验工具类，校验数据
			beanValidatorUtil.validateObject(dynXfgFqDTO);
			String userId = SessionHelper.getLoginSysUserId(request);
			String deptId = SessionHelper.getCurrentDeptId(request);
			//封装启动流程所需的参数
			Map<String, Object> parameter = new HashMap<String,Object>();
			parameter.put("processDefId", processDefId);
			parameter.put("formCode", formCode);
			parameter.put("jsonString", jsonString);
			parameter.put("userId", userId);
			parameter.put("deptId", deptId);
			dynXfgFqDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
			StartResultBean result = dynXfgFqService.insertDynXfgFqAndStartProcess(dynXfgFqDTO, parameter);
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
		DynXfgFqDTO dto = dynXfgFqService.queryDynXfgFqByPrimaryKey(id);
		map.put("flag", OpResult.success);
		map.put("dynXfgFqDTO", dto);
		return map;
	}
}
