package avicit.pb.milepost.dynfiveof.controller;

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

import avicit.pb.milepost.dynyouthrecord.dto.DynSubZxbasb1DTO;
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.api.sysuser.dto.SysUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
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
import avicit.pb.milepost.dynfiveof.dto.DynFiveOfDTO;
import avicit.pb.milepost.dynfiveof.service.DynFiveOfService;
import avicit.pb.milepost.dynyouthrecord.dto.DynYouthRecordDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-17 16:01
 * @类说明：
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/milepost/dynFiveOf/dynFiveOfController")
public class DynFiveOfController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynFiveOfController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynFiveOfService dynFiveOfService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;
	@Autowired
	private JdbcTemplate jdbcTemplate;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDynFiveOfManage")
	public ModelAndView toDynFiveOfManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/milepost/dynfiveof/DynFiveOfManage");
		mav.addObject("url", "platform/avicit/pb/milepost/dynFiveOf/dynFiveOfController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDynFiveOfsByPage")
	@ResponseBody
	@RequiresPermissions("milepost:dynFiveOf:view")
	public Map<String, Object> togetDynFiveOfByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DynFiveOfDTO> queryReqBean = new QueryReqBean<DynFiveOfDTO>();
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
			cloumnName = ComUtil.getColumn(DynFiveOfDTO.class, sidx);
			if (cloumnName != null) {
				//这里先进行判断是否有对应的数据库字段
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(DynFiveOfDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(DynFiveOfDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		DynFiveOfDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynFiveOfDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynFiveOfDTO>() {
			});
		}else{
			param = new DynFiveOfDTO();
		}
		queryReqBean.setSearchParams(param);
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setBpmType("my");
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			result = dynFiveOfService.searchDynFiveOfByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynFiveOfDTO分页数据");
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
			DynFiveOfDTO dto = dynFiveOfService.queryDynFiveOfByPrimaryKey(id);
			mav.addObject("dynFiveOfDTO", dto);
		}
		mav.setViewName("avicit/pb/milepost/dynfiveof/DynFiveOf" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("milepost:dynFiveOf:edit")
	public Map<String,Object> toSaveDynFiveOf(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynFiveOfDTO dynFiveOfDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynFiveOfDTO>() {
					});
			//调用校验工具类，校验数据
            beanValidatorUtil.validateObject(dynFiveOfDTO);
			if (StringUtils.isEmpty(dynFiveOfDTO.getId())) {
				//新增
				dynFiveOfDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = dynFiveOfService.insertDynFiveOf(dynFiveOfDTO);
				map.put("id", id);
			} else {
				//修改
				dynFiveOfService.updateDynFiveOfSensitive(dynFiveOfDTO);
				map.put("id", dynFiveOfDTO.getId());
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
    @RequiresPermissions("milepost:dynFiveOf:delete")
	public Map<String,Object> toDeleteDynFiveOf(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			dynFiveOfService.deleteDynFiveOfByIds(ids);
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
  	@RequiresPermissions("milepost:dynFiveOf:edit")
  	public Map<String,Object> saveAndStartProcess(HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		String processDefId = ServletRequestUtils.getStringParameter(request, "processDefId", "");
		String formCode = ServletRequestUtils.getStringParameter(request, "formCode", "");
		String jsonString = ServletRequestUtils.getStringParameter(request, "jsonString", "");
		String data = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynFiveOfDTO dynFiveOfDTO = JsonHelper.getInstance().readValue(data, dateFormat, new TypeReference<DynFiveOfDTO>(){});
			//调用校验工具类，校验数据
			beanValidatorUtil.validateObject(dynFiveOfDTO);
			String userId = SessionHelper.getLoginSysUserId(request);
			String deptId = SessionHelper.getCurrentDeptId(request);
			//封装启动流程所需的参数
			Map<String, Object> parameter = new HashMap<String,Object>();
			parameter.put("processDefId", processDefId);
			parameter.put("formCode", formCode);
			parameter.put("jsonString", jsonString);
			parameter.put("userId", userId);
			parameter.put("deptId", deptId);
			dynFiveOfDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
			StartResultBean result = dynFiveOfService.insertDynFiveOfAndStartProcess(dynFiveOfDTO, parameter);
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
		DynFiveOfDTO dto = dynFiveOfService.queryDynFiveOfByPrimaryKey(id);
        map.put("flag", OpResult.success);
        map.put("dynFiveOfDTO", dto);
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
		DynFiveOfDTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<DynFiveOfDTO>() {
					});
		} else {
			param = new DynFiveOfDTO();
		}
		param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<DynFiveOfDTO> dtoList = dynFiveOfService.searchDynFiveOfForExport(param, idsList);
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = dynFiveOfService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<DynFiveOfDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			DynFiveOfDTO bean = objList.get(i);
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
    
    @RequestMapping("/QuaryUser")
    @ResponseBody
    public Map<String,Object> QuaryUser(HttpServletRequest request){
    	Map<String,Object> map = new HashMap<>();
    	String userId =  SessionHelper.getLoginSysUserId(request);
    	if(userId == null || "".equals(userId)){
    		map.put("flag","error");
    		return map;
    	}
    	if(userId.equals("1")){
    		map.put("flag","success");
    		return map;
    	}
    	
    	boolean bol = dynFiveOfService.quartUser(userId);
    	if(bol){
    		map.put("flag","success");
    	}else{
    		map.put("flag","error");
    	}
    	
    	return map;
    }
    
    
    /*
     * 导出Excel文件**/
    @RequestMapping("/download")
	public void download(HttpServletRequest request,HttpServletResponse response,String json) throws Exception{
		HSSFWorkbook workbook = new HSSFWorkbook();
		List<DynFiveOfDTO> studentsList = dynFiveOfService.searchDynFiveOf(null,null,null);
//		String [] ids = json.split(",");
//   		for(int i=0;i<ids.length;i++){
//   			studentsList.add(dynFiveOfService.searchDynFiveOfById(ids[i]));
//   		}
		String fileName="";
		String [] headers = {"导入导出ID","申请编号","申请人姓名","提出人姓名","提出人部门","提出人职务","提出时间","改善效果","应用前景","联系人电话","评选情况"};
		dynFiveOfService.downloadExcel(workbook,0,headers,studentsList,request);
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		workbook.write(out);
		byte[] content = out.toByteArray();
		InputStream ins = new ByteArrayInputStream(content);
		fileName = URLEncoder.encode(("五小成果申报.xls"),"UTF-8").replace("+","%20");
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

	@RequestMapping("/fomrt")
	public Map<String,Object> fomrt(HttpServletRequest request,String id) throws Exception {
		Map<String,Object> map = new HashMap<String,Object>();
		if(id==null){
			map.put("flag", OpResult.failure);
			return map;
		}
		String attr1 = "";
		String attr2 = "";
		String attr3 = "";
		//查询队员
		List<Map<String,Object>> attr1List = jdbcTemplate.queryForList("select * from dyn_five_of_user where five_of_id = '"+id+"' ");
		for(Map<String, Object> attr1Map : attr1List){
				attr1 += attr1Map.get("USER_NAME")+ ";";
			SysDept dept = sysDeptLoader.getSysDeptBySysDeptId((String) attr1Map.get("PARTY_NAME"));
			if (dept == null) {
				attr2 += "" + ";";
			} else {
				attr2 += dept.getDeptName() + ";";
			}
				attr3 += attr1Map.get("DUTIES") + ";";
		}

		map.put("flag", OpResult.success);
		map.put("attr1", attr1);
		map.put("attr2", attr2);
		map.put("attr3", attr3);
		return map;
	}

}

