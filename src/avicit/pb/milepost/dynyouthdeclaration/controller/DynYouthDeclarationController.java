package avicit.pb.milepost.dynyouthdeclaration.controller;

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

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
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

import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.SysExcelFileWriteUtil;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.type.TypeReference;
import avicit.pb.milepost.dynyouthdeclaration.dto.DynYouthDeclarationDTO;
import avicit.pb.milepost.dynyouthdeclaration.service.DynYouthDeclarationService;
import avicit.pb.milepost.dynyouthrecord.dto.DynYouthRecordDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-14 13:58
 * @类说明：铸心青年突击队申报
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/milepost/dynYouthDeclaration/dynYouthDeclarationController")
public class DynYouthDeclarationController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynYouthDeclarationController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynYouthDeclarationService dynYouthDeclarationService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDynYouthDeclarationManage")
	public ModelAndView toDynYouthDeclarationManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/milepost/dynyouthdeclaration/DynYouthDeclarationManage");
		mav.addObject("url", "platform/avicit/pb/milepost/dynYouthDeclaration/dynYouthDeclarationController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDynYouthDeclarationsByPage")
	@ResponseBody
	@RequiresPermissions("milepost:dynYouthDeclaration:view")
	public Map<String, Object> togetDynYouthDeclarationByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DynYouthDeclarationDTO> queryReqBean = new QueryReqBean<DynYouthDeclarationDTO>();
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
			cloumnName = ComUtil.getColumn(DynYouthDeclarationDTO.class, sidx);
			if (cloumnName != null) {
				//这里先进行判断是否有对应的数据库字段
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(DynYouthDeclarationDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(DynYouthDeclarationDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		DynYouthDeclarationDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynYouthDeclarationDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynYouthDeclarationDTO>() {
			});
		}else{
			param = new DynYouthDeclarationDTO();
		}
		queryReqBean.setSearchParams(param);
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setBpmType("my");
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			result = dynYouthDeclarationService.searchDynYouthDeclarationByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynYouthDeclarationDTO分页数据");
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
			DynYouthDeclarationDTO dto = dynYouthDeclarationService.queryDynYouthDeclarationByPrimaryKey(id);
			mav.addObject("dynYouthDeclarationDTO", dto);
		}
		mav.setViewName("avicit/pb/milepost/dynyouthdeclaration/DynYouthDeclaration" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("milepost:dynYouthDeclaration:edit")
	public Map<String,Object> toSaveDynYouthDeclaration(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynYouthDeclarationDTO dynYouthDeclarationDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynYouthDeclarationDTO>() {
					});
			//调用校验工具类，校验数据
            beanValidatorUtil.validateObject(dynYouthDeclarationDTO);
			if (StringUtils.isEmpty(dynYouthDeclarationDTO.getId())) {
				//新增
				dynYouthDeclarationDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = dynYouthDeclarationService.insertDynYouthDeclaration(dynYouthDeclarationDTO);
				map.put("id", id);
			} else {
				//修改
				dynYouthDeclarationService.updateDynYouthDeclarationSensitive(dynYouthDeclarationDTO);
				map.put("id", dynYouthDeclarationDTO.getId());
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
    @RequiresPermissions("milepost:dynYouthDeclaration:delete")
	public Map<String,Object> toDeleteDynYouthDeclaration(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			dynYouthDeclarationService.deleteDynYouthDeclarationByIds(ids);
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
  	@RequiresPermissions("milepost:dynYouthDeclaration:edit")
  	public Map<String,Object> saveAndStartProcess(HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		String processDefId = ServletRequestUtils.getStringParameter(request, "processDefId", "");
		String formCode = ServletRequestUtils.getStringParameter(request, "formCode", "");
		String jsonString = ServletRequestUtils.getStringParameter(request, "jsonString", "");
		String data = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynYouthDeclarationDTO dynYouthDeclarationDTO = JsonHelper.getInstance().readValue(data, dateFormat, new TypeReference<DynYouthDeclarationDTO>(){});
			//调用校验工具类，校验数据
			beanValidatorUtil.validateObject(dynYouthDeclarationDTO);
			String userId = SessionHelper.getLoginSysUserId(request);
			String deptId = SessionHelper.getCurrentDeptId(request);
			//封装启动流程所需的参数
			Map<String, Object> parameter = new HashMap<String,Object>();
			parameter.put("processDefId", processDefId);
			parameter.put("formCode", formCode);
			parameter.put("jsonString", jsonString);
			parameter.put("userId", userId);
			parameter.put("deptId", deptId);
			dynYouthDeclarationDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
			StartResultBean result = dynYouthDeclarationService.insertDynYouthDeclarationAndStartProcess(dynYouthDeclarationDTO, parameter);
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
		DynYouthDeclarationDTO dto = dynYouthDeclarationService.queryDynYouthDeclarationByPrimaryKey(id);
        map.put("flag", OpResult.success);
        map.put("dynYouthDeclarationDTO", dto);
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
		DynYouthDeclarationDTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<DynYouthDeclarationDTO>() {
					});
		} else {
			param = new DynYouthDeclarationDTO();
		}
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<DynYouthDeclarationDTO> dtoList = dynYouthDeclarationService.searchDynYouthDeclarationForExport(param, idsList);
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = dynYouthDeclarationService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<DynYouthDeclarationDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			DynYouthDeclarationDTO bean = objList.get(i);
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
    @RequestMapping("/download")
   	public void download(HttpServletRequest request,HttpServletResponse response,String json) throws Exception{
   		HSSFWorkbook workbook = new HSSFWorkbook();
   		List<DynYouthDeclarationDTO> studentsList = new ArrayList<>();
   		//JSONObject.parseArray(json, DynYouthDeclarationDTO.class)
   		String [] ids = json.split(",");
   		for(int i=0;i<ids.length;i++){
   			studentsList.add(dynYouthDeclarationService.queryDynYouthDeclarationByPrimaryKey(ids[i]));
   		}	
   		String fileName="";
   		String [] headers = {"导入导出ID","申请编号","突击队名称","备案情况","联系人电话","突击队任务完成情况及取得成效","评选情况"};
   		dynYouthDeclarationService.downloadExcel(workbook,0,headers,studentsList,request);
   		ByteArrayOutputStream out = new ByteArrayOutputStream();
   		workbook.write(out);
   		byte[] content = out.toByteArray();
   		InputStream ins = new ByteArrayInputStream(content);
   		fileName = URLEncoder.encode(("优秀铸心突击队申报表.xls"),"UTF-8").replace("+","%20");
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
}

