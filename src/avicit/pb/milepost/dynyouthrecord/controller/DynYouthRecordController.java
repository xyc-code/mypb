package avicit.pb.milepost.dynyouthrecord.controller;

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

import org.apache.ibatis.annotations.Param;
import org.apache.poi.ss.formula.functions.T;
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
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.weekly.dto.WeeklyDTO;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.type.TypeReference;

import avicit.pb.milepost.dynyouthrecord.dto.DynSubZxbasb1DTO;
import avicit.pb.milepost.dynyouthrecord.dto.DynYouthRecordDTO;
import avicit.pb.milepost.dynyouthrecord.service.DynYouthRecordService;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-12 15:04
 * @类说明：优秀“铸心”突击队
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/milepost/dynYouthRecord/dynYouthRecordController")
public class DynYouthRecordController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynYouthRecordController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynYouthRecordService dynYouthRecordService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDynYouthRecordManage")
	public ModelAndView toDynYouthRecordManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/milepost/dynyouthrecord/DynYouthRecordManage");
		mav.addObject("url", "platform/avicit/pb/milepost/dynYouthRecord/dynYouthRecordController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDynYouthRecordsByPage")
	@ResponseBody
	public Map<String, Object> togetDynYouthRecordByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DynYouthRecordDTO> queryReqBean = new QueryReqBean<DynYouthRecordDTO>();
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
			cloumnName = ComUtil.getColumn(DynYouthRecordDTO.class, sidx);
			if (cloumnName != null) {
				//这里先进行判断是否有对应的数据库字段
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(DynYouthRecordDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(DynYouthRecordDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		DynYouthRecordDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynYouthRecordDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynYouthRecordDTO>() {
			});
		}else{
			param = new DynYouthRecordDTO();
		}
		queryReqBean.setSearchParams(param);
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setBpmType("my");
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			String dept = SessionHelper.getCurrentDeptId(request);;
			result = dynYouthRecordService.searchDynYouthRecordByPage(queryReqBean,orderBy,keyWord,dept);
		} catch (Exception ex) {
			return map;
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynYouthRecordDTO分页数据");
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
			DynYouthRecordDTO dto = dynYouthRecordService.queryDynYouthRecordByPrimaryKey(id);
			mav.addObject("dynYouthRecordDTO", dto);
		}
		mav.setViewName("avicit/pb/milepost/dynyouthrecord/DynYouthRecord" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("milepost:dynYouthRecord:edit")
	public Map<String,Object> toSaveDynYouthRecord(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynYouthRecordDTO dynYouthRecordDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynYouthRecordDTO>() {
					});
			//调用校验工具类，校验数据
            beanValidatorUtil.validateObject(dynYouthRecordDTO);
			if (StringUtils.isEmpty(dynYouthRecordDTO.getId())) {
				//新增
				dynYouthRecordDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = dynYouthRecordService.insertDynYouthRecord(dynYouthRecordDTO);
				map.put("id", id);
			} else {
				//修改
				dynYouthRecordService.updateDynYouthRecordSensitive(dynYouthRecordDTO);
				map.put("id", dynYouthRecordDTO.getId());
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
    @RequiresPermissions("milepost:dynYouthRecord:delete")
	public Map<String,Object> toDeleteDynYouthRecord(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			dynYouthRecordService.deleteDynYouthRecordByIds(ids);
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
  	@RequiresPermissions("milepost:dynYouthRecord:edit")
  	public Map<String,Object> saveAndStartProcess(HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		String processDefId = ServletRequestUtils.getStringParameter(request, "processDefId", "");
		String formCode = ServletRequestUtils.getStringParameter(request, "formCode", "");
		String jsonString = ServletRequestUtils.getStringParameter(request, "jsonString", "");
		String data = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynYouthRecordDTO dynYouthRecordDTO = JsonHelper.getInstance().readValue(data, dateFormat, new TypeReference<DynYouthRecordDTO>(){});
			//调用校验工具类，校验数据
			beanValidatorUtil.validateObject(dynYouthRecordDTO);
			String userId = SessionHelper.getLoginSysUserId(request);
			String deptId = SessionHelper.getCurrentDeptId(request);
			//封装启动流程所需的参数
			Map<String, Object> parameter = new HashMap<String,Object>();
			parameter.put("processDefId", processDefId);
			parameter.put("formCode", formCode);
			parameter.put("jsonString", jsonString);
			parameter.put("userId", userId);
			parameter.put("deptId", deptId);
			dynYouthRecordDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
			StartResultBean result = dynYouthRecordService.insertDynYouthRecordAndStartProcess(dynYouthRecordDTO, parameter);
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
		DynYouthRecordDTO dto = dynYouthRecordService.queryDynYouthRecordByPrimaryKey(id);
        map.put("flag", OpResult.success);
        map.put("dynYouthRecordDTO", dto);
		return map;
	}
	
	/**
	 * 导出数据
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/exportExcel", method = RequestMethod.GET)
	public void exportExcel(HttpServletRequest request, HttpServletResponse response) {
		// 导出模板code
		String templateCode = ServletRequestUtils.getStringParameter(request, "templateCode", "QNSBDC");
		// 选择导出列
		String selectCols = ServletRequestUtils.getStringParameter(request, "selectCols", "QNSBDC");
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
		DynYouthRecordDTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<DynYouthRecordDTO>() {
					});
		} else {
			param = new DynYouthRecordDTO();
		}
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<DynYouthRecordDTO> dtoList = dynYouthRecordService.searchDynYouthRecordForExport(param, idsList);
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = dynYouthRecordService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<DynYouthRecordDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			DynYouthRecordDTO bean = objList.get(i);
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
    
    @RequestMapping("/fomrt")
	public Map<String,Object> fomrt(HttpServletRequest request,String id) throws Exception {
		Map<String,Object> map = new HashMap<String,Object>();
		if(id==null){
			 map.put("flag", OpResult.failure);
		     return map;
		}
		String captainsName ="";
		String ChildName = "";
		String ChildDept = "";
		String ChildAge = "";
		String ChildTask = "";
		//查询队长
		List<DynSubZxbasb1DTO> dtoList = dynYouthRecordService.fomart(id,"0");
		for(DynSubZxbasb1DTO dyn : dtoList){
			SysUser user = sysUserLoader.getSysUserById(dyn.getTjdDuiyuanname());
			if (user == null) {
				SysUser user1 = sysUserLoader.getSysUserById(dyn.getAttr1());
				captainsName+=user1.getName();
			} else {
				captainsName+=user.getName();
			}
		}
		//查询队员
		List<DynSubZxbasb1DTO> dtoListChild = dynYouthRecordService.fomart(id,"1");
		for(DynSubZxbasb1DTO dyn : dtoListChild){
			SysUser user = sysUserLoader.getSysUserById(dyn.getTjdDuiyuanname());
			if (user == null) {
				SysUser user1 = sysUserLoader.getSysUserById(dyn.getAttr1());
				ChildName += user1.getName()+ ";";
			} else {
				ChildName += user.getName()+ ";";
			}
			SysDept dept = sysDeptLoader.getSysDeptBySysDeptId(dyn.getTjdDanwei());
			if (dept == null) {
				ChildDept += Optional.ofNullable(dyn.getTjdDanwei()).orElse("")+";";
			} else {
				ChildDept += dept.getDeptName()+";";
			}
			ChildAge += dyn.getTjdAge()+";";
			ChildTask += dyn.getTjdZhiwu()+";";
		}
		
        map.put("flag", OpResult.success);
        map.put("captainsName", captainsName);
        map.put("ChildName",ChildName);
        map.put("ChildDept",ChildDept);
        map.put("ChildAge",ChildAge);
        map.put("ChildTask",ChildTask);
        map.put("ChildSize",dtoListChild.size());
		return map;
	}
    @RequestMapping("/download")
	public void download(HttpServletRequest request,HttpServletResponse response,String json) throws Exception{
		HSSFWorkbook workbook = new HSSFWorkbook();
		List<DynYouthRecordDTO> studentsList = new ArrayList<>();
		String [] ids = json.split(",");
   		for(int i=0;i<ids.length;i++){
   			studentsList.add(dynYouthRecordService.queryDynYouthRecordByPrimaryKey(ids[i]));
   		}	
		String fileName="";
		String [] headers = {"申请编号","申请单位","突击队名称","突击队队长","突击队队员","突击队队员单位","突击队队员年龄","突击队队员负责任务","队员人数","成立时间","计划完成任务时间","预期收益","主题","突击队类型"};
		dynYouthRecordService.downloadExcel(workbook,0,headers,studentsList,request);
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		workbook.write(out);
		byte[] content = out.toByteArray();
		InputStream ins = new ByteArrayInputStream(content);
		fileName = URLEncoder.encode(("优秀铸心突击队备案表.xls"),"UTF-8").replace("+","%20");
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
    @RequestMapping("QueryChild")
    public  Map<String,Object> QueryChild(String id){
    	Map<String,Object> map = new HashMap<String,Object>();
    	if(id==null){
			 map.put("flag", OpResult.failure);
		     return map;
		}
    	List<DynSubZxbasb1DTO> dtoList = dynYouthRecordService.fomart(id,"0");
    	for(DynSubZxbasb1DTO dyn : dtoList){
			SysUser user = sysUserLoader.getSysUserById(dyn.getTjdDuiyuanname());
			dyn.setAttr1(dyn.getTjdDuiyuanname());
			dyn.setTjdDuiyuanname(user.getName());
			SysDept dept = sysDeptLoader.getSysDeptBySysDeptId(dyn.getTjdDanwei());
			dyn.setTjdFiledUsername(dept.getDeptName());
//			dyn.setTjdDanwei(dyn.getTjdDanwei());
			dyn.setTjdDuizhangname("队长");
		}
    	List<DynSubZxbasb1DTO> dtoListChild = dynYouthRecordService.fomart(id,"1");
    	for(DynSubZxbasb1DTO dyn : dtoListChild){
			SysUser user = sysUserLoader.getSysUserById(dyn.getTjdDuiyuanname());
			dyn.setAttr1(dyn.getTjdDuiyuanname());
			dyn.setTjdDuiyuanname(user.getName());
			SysDept dept = sysDeptLoader.getSysDeptBySysDeptId(dyn.getTjdDanwei());
			dyn.setTjdFiledUsername(dept.getDeptName());
//			dyn.setTjdDanwei(dyn.getTjdDanwei());
			dyn.setTjdDuizhangname("队员");
		}
    	map.put("dtoList",dtoList);
    	map.put("dtoListChild",dtoListChild);
    	 map.put("flag", OpResult.success);
    	return map;
    }
    
}

