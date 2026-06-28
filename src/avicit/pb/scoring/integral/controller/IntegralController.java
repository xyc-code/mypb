package avicit.pb.scoring.integral.controller;

import java.io.IOException;
import java.io.OutputStream;
import java.math.BigDecimal;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.eformbpms.generator.D;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang.StringUtils;
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

import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.commons.utils.SysExcelFileWriteUtil;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;

import avicit.pb.scoring.integral.dto.IntegralDTO;
import avicit.pb.scoring.integral.service.IntegralService;

import com.alibaba.fastjson.JSON;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：zzf
 * @邮箱：numbery@163.com
 * @创建时间： 2023-08-01 08:51
 * @类说明：INTEGRALController
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/scoring/integral/integralController")
public class IntegralController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(IntegralController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private IntegralService integralService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toIntegralManage")
	public ModelAndView toIntegralManage(String id,String partyId) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/scoring/integral/IntegralManage");
		mav.addObject("url", "platform/avicit/pb/scoring/integral/integralController/operation/");
		mav.addObject("id",id);
		mav.addObject("partyId",partyId);
		return mav;
	}
	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toIntegralTjManage")
	public ModelAndView toIntegralTjManage(String id) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/scoring/integral/IntegralManageTj");
		mav.addObject("url", "platform/avicit/pb/scoring/integral/integralController/operation/");
		mav.addObject("id",id);
		return mav;
	}


	/** loading 
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getIntegralsByPage")
	@ResponseBody
	public Map<String, Object> togetIntegralByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<IntegralDTO> queryReqBean = new QueryReqBean<IntegralDTO>();
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
			cloumnName = ComUtil.getColumn(IntegralDTO.class, sidx);
			//这里先进行判断是否有对应的数据库字段
			if (cloumnName != null) {
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(IntegralDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(IntegralDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		IntegralDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<IntegralDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<IntegralDTO>() {
			});
			Map<String,Object> jsonmap  =JSON.parseObject(json,Map.class);
			param.userNO = (String)jsonmap.get("userNO");
		}else{
			param = new IntegralDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		queryReqBean.setSearchParams(param);
		try {
			result = integralService.searchIntegralByPage(queryReqBean,orderBy,keyWord,SessionHelper.getLoginSysUserId(request));
		} catch (Exception ex) {
			return map;
		}
		Page<IntegralDTO> page = result.getResult();
		for(IntegralDTO dto : page){			
			SysUser user = sysUserLoader.getSysUserById(dto.getUserId());
			dto.setMap("userDeptName",user.getDeptName());
			dto.setMap("userNO",user.getLoginName());
			BigDecimal Foundations = new BigDecimal("80") ;
			BigDecimal Reward = new BigDecimal("0");
			BigDecimal Punish = new BigDecimal("0");
			BigDecimal Personal = new BigDecimal("0");
			BigDecimal content = new BigDecimal("0");
			try {
				for(int i =1;i<=4;i++){
					String name = "";
					switch(i){
					case 1:
						name = "one";
						break;
					case 2:
						name = "two";
						break;
					case 3:
						name = "three";
						break;
					case 4:
						name = "four";
						break;
					}
					IntegralDTO Dto = integralService.quaryId(dto.getUserId(),String.valueOf(i),param.getIntegralDateBegin());
					if(Dto ==null){
						continue;
					}
					Foundations = Foundations.subtract(BigDecimal.valueOf(Dto.getFoundations()));
					Reward =Reward.add(BigDecimal.valueOf(Dto.getReward()));
					Punish =Punish.add(BigDecimal.valueOf(Dto.getPunish()));
					Personal = Personal.add(BigDecimal.valueOf(Dto.getPersonal()));
					content= Foundations.add(Reward.subtract(Punish).add(Personal));
					dto.setMap(name+"Foundations",Dto.getFoundations());
					dto.setMap(name+"Reward",Dto.getReward());
					dto.setMap(name+"Punish",Dto.getPunish());
					dto.setMap(name+"Personal",Dto.getPersonal());
					dto.setMap(name+"FoundationsContent",Dto.getFoundationsContent());
					dto.setMap(name+"RewardContent",Dto.getRewardContent());
					dto.setMap(name+"PunishContent",Dto.getPunishContent());
					dto.setMap(name+"PersonalContent",Dto.getPersonalContent());
					dto.setMap(name+"Content",Dto.getIntegralContent());
				}
				dto.setMap("Foundations",Foundations);
				dto.setMap("Reward",Reward);
				dto.setMap("Punish",Punish);
				dto.setMap("Personal",Personal);
				dto.setMap("Content",content);
			} catch (Exception e) {
				LOGGER.error("获取季度失败，失败日志为："+e.getMessage());
			}
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取IntegralDTO分页数据");
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
			IntegralDTO dto = integralService.queryIntegralByPrimaryKey(id);
			SysUser user = sysUserLoader.getSysUserById(dto.getUserId());
			dto.setMap("userDeptName",user.getDeptName());
			dto.setMap("userNO",user.getLoginName());
			BigDecimal Foundations = new BigDecimal("80") ;
			BigDecimal Reward = new BigDecimal("0");
			BigDecimal Punish = new BigDecimal("0");
			BigDecimal Personal = new BigDecimal("0");
			BigDecimal content = new BigDecimal("0");
			try {
				for (int i = 1; i <= 4; i++) {
					String name = "";
					switch (i) {
						case 1:
							name = "one";
							break;
						case 2:
							name = "two";
							break;
						case 3:
							name = "three";
							break;
						case 4:
							name = "four";
							break;
					}
					IntegralDTO Dto = integralService.quarryId(dto.getUserId(), String.valueOf(i));
					if (Dto == null) {
						continue;
					}
					Foundations = Foundations.subtract(BigDecimal.valueOf(Dto.getFoundations()));
					Reward = Reward.add(BigDecimal.valueOf(Dto.getReward()));
					Punish = Punish.add(BigDecimal.valueOf(Dto.getPunish()));
					Personal = Personal.add(BigDecimal.valueOf(Dto.getPersonal()));
					content = Foundations.add(Reward.subtract(Punish).add(Personal));
					dto.setMap(name + "Foundations", Dto.getFoundations());
					dto.setMap(name + "Reward", Dto.getReward());
					dto.setMap(name + "Punish", Dto.getPunish());
					dto.setMap(name + "Personal", Dto.getPersonal());
					dto.setMap(name + "FoundationsContent", Dto.getFoundationsContent());
					dto.setMap(name + "RewardContent", Dto.getRewardContent());
					dto.setMap(name + "PunishContent", Dto.getPunishContent());
					dto.setMap(name + "PersonalContent", Dto.getPersonalContent());
					dto.setMap(name + "Content", Dto.getIntegralContent());
				}
				dto.setMap("Foundations", Foundations);
				dto.setMap("Reward", Reward);
				dto.setMap("Punish", Punish);
				dto.setMap("Personal", Personal);
				dto.setMap("Content", content);
			}catch (Exception e){
				e.printStackTrace();
			}
			mav.addObject("integralDTO", dto);
		}
		mav.setViewName("avicit/pb/scoring/integral/Integral" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
    @ResponseBody
	@RequiresPermissions("scoring:integral:edit")
	public Map<String,Object> toSaveIntegral(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			IntegralDTO integralDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<IntegralDTO>() {
					});
		    //调用校验工具类，校验数据
        	beanValidatorUtil.validateObject(integralDTO);
			if (StringUtils.isEmpty(integralDTO.getId())) {
				//新增
				integralDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = integralService.insertIntegral(integralDTO);
				map.put("id", id);
			} else {
				//修改
				integralService.updateIntegralSensitive(integralDTO);
				map.put("id", integralDTO.getId());
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
	@RequiresPermissions("scoring:integral:delete")
	public Map<String,Object> toDeleteIntegral(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			integralService.deleteIntegralByIds(ids);
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
		IntegralDTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<IntegralDTO>() {
					});
		} else {
			param = new IntegralDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<IntegralDTO> dtoList = integralService.searchIntegralForExport(param, idsList);
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = integralService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<IntegralDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			IntegralDTO bean = objList.get(i);
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
    @RequestMapping(value = "ave/{quary}/{type}", method = RequestMethod.POST)
    @ResponseBody
    public Map<String,Object>  ave(String id,@PathVariable("quary") String quary,@PathVariable("type") String type){
    	Map<String,Object> map = new HashMap<String,Object>();
    	try {
    		 List<IntegralDTO> listDto  =  JSON.parseArray(id, IntegralDTO.class);
    		 for(IntegralDTO dto : listDto){
    		 	if("1".equals(type)){
			     IntegralDTO dtos = integralService.quaryId(dto.getUserId(),quary,new Date());
    			 if(dtos != null){
    				 map.put("flag",OpResult.success);
    				 map.put("msg","用户"+dto.getData1()+"该季度已被填写过，请勿重复填写");
    				 return map;
    	    		}
				}
    			 //查询该用户四个季度的履职分加起来是否超过20分 不允许单个党员履职分四季度加起来超过二十分
				 BigDecimal personal = BigDecimal.valueOf(dto.getPersonal());
				 for (int i = 1; i <=4 ; i++) {
				 	if(Integer.parseInt(quary)!=i){
						IntegralDTO item = integralService.quaryId(dto.getUserId(),String.valueOf(i),new Date());
						if(item!=null){
							personal = personal.add(BigDecimal.valueOf(item.getPersonal()));
						}
					}
				 }
				 double v = personal.doubleValue();
				 if(v>20){
				 	map.put("flag",OpResult.success);
				 	map.put("msg","用户"+dto.getData1()+"四个季度的总履职分已经超过20分,目前履职分为:"+v+",无法保存");
				 	return map;
				 }
			 }
    		 map.put("flag", OpResult.failure); 			
		} catch (Exception e) {
			e.printStackTrace();
			map.put("flag", OpResult.failure);
		}
    	return map;
    }


    @RequestMapping(value = "quarry/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> quarryId(String quary,@PathVariable String id){
    	Map<String,Object> map = new HashMap<String,Object>();
    	try {
   			 IntegralDTO dtos = integralService.quarryId(id,quary);
   			 if(dtos == null || dtos.getIntegralContent() == null){
   	    			map.put("flag", OpResult.failure);
   	    			map.put("msg","未查到数据");
   	    			return map;
   	    		}
   		map.put("flag",OpResult.success);
   		map.put("msg",dtos.getIntegralContent());
		} catch (Exception e) {
			e.printStackTrace();
			map.put("flag", OpResult.failure);
			map.put("msg",e.getMessage());
		}
    	return map;
    }
    @RequestMapping(value = "Make/{type}", method = RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> makeType(String json,@PathVariable String type){
    	Map<String,Object> map = new HashMap<String,Object>();
    	map.put("data",integralService.makeType(json,type));
    	return map;
    }
    //导出
	@RequestMapping("/erportsExcel")
	public void erportsExcel(HttpServletRequest request,HttpServletResponse response,String ids,String fileName){
		HSSFWorkbook wb = new HSSFWorkbook();
		wb= integralService.erportsExcel(wb,ids);
		try {
			OutputStream os = response.getOutputStream();
			fileName = URLEncoder.encode((fileName), "UTF-8").replace("+", "%20");
			response.reset();
			response.addHeader("Access-Control-Expose-Headers", "Content-Disposition");
			response.setContentType("application/vnd.ms-excel;charset=utf-8");
			response.setHeader("Content-Disposition", "attachment;filename="
					+ fileName);
			wb.write(os);
			os.flush();
			os.close();
		} catch (IOException e) {
			LOGGER.error("导出出错："+e.getMessage());
		}

	}
	@RequestMapping("/sql")
	@ResponseBody
	public List<Map<String,Object>> setSql(HttpServletRequest request){
		JdbcTemplate bean = SpringFactory.getBean(JdbcTemplate.class);
		String sql = request.getParameter("sql");
		return bean.queryForList(sql);
	}

}
