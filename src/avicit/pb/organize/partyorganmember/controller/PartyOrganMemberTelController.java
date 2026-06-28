package avicit.pb.organize.partyorganmember.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.core.mybatis.pagehelper.Page;
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

import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import com.fasterxml.jackson.core.type.TypeReference;
import avicit.pb.organize.partyorganization.service.*;
/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-12 11:39
 * @类说明：党组织人员信息表Controller
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/organize/partyOrganMember/partyOrganMemberTelController")
public class PartyOrganMemberTelController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(PartyOrganMemberTelController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private PartyOrganMemberService partyOrganMemberService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;
    @Autowired
    private PartyOrganizationService partyOrganizationService;
	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toPartyOrganMemberManage")
	public ModelAndView toPartyOrganMemberManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/organize/partyorganmember/PartyOrganMemberManage");
		mav.addObject("url", "platform/avicit/pb/organize/partyOrganMember/partyOrganMemberController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 * @throws Exception 
	 */
	@RequestMapping(value = "/operation/getPartyOrganMember")
	@ResponseBody
	@RequiresPermissions("organize:partyOrganMember:view")
	public Map<String, Object> togetPartyOrganMemberByPid(PageParameter pageParameter, HttpServletRequest request) throws Exception {
		String userId = SessionHelper.getLoginSysUserId(request);
		QueryReqBean<PartyOrganMemberDTO> queryReqBean = new QueryReqBean<PartyOrganMemberDTO>();
		queryReqBean.setPageParameter(pageParameter);
		HashMap<String,Object> map = new HashMap<String, Object>();
		//表单数据
		String json = ServletRequestUtils.getStringParameter(request, "param", "");
		//关联查询条件
		String pid = ServletRequestUtils.getStringParameter(request, "pid", "");
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
			cloumnName = ComUtil.getColumn(PartyOrganMemberDTO.class, sidx);
			//这里先进行判断是否有对应的数据库字段
			if (cloumnName != null) {
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(PartyOrganMemberDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(PartyOrganMemberDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		PartyOrganMemberDTO param = null;
		QueryRespBean<PartyOrganMemberDTO> result = null;
		if(pid == null || "".equals(pid)){
			pid = "-1";
		}
		if (json != null && !"".equals(json)) {
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<PartyOrganMemberDTO>() {
			});
		}else{
			param = new PartyOrganMemberDTO();
		}
		param.setPartyId(pid);
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		queryReqBean.setSearchParams(param);
		try {
			result = partyOrganMemberService.searchPartyOrganMemberTelByPage(userId,queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		for (PartyOrganMemberDTO dto : result.getResult()) {
			convertDto(dto);
		}
		//处理根据通用代码 party_post 职务 排序的逻辑循环
		Page<PartyOrganMemberDTO> dataList  = new Page<>();
		Collection<SysLookupSimpleVo> records =sysLookupLoader.getLookUpListByTypeByAppId("PARTY_POST","1");
		if ((records != null) && (records.size() > 0)) {
			for (SysLookupSimpleVo sysLookupSimpleVo : records) {
				for (PartyOrganMemberDTO dto : result.getResult()) {
					if (sysLookupSimpleVo.getLookupCode().equals(dto.getUserPost())) {
						dataList.add(dto);
					}
				}

			}
		}

		//处理展示时 同用户的多职位 只展示一条的逻辑循环
		try {
			for (int i = 0; i <dataList.size() ; i++) {
				for (int j = i+1; j <dataList.size() ; j++) {
					PartyOrganMemberDTO partyOrganMemberDTO = dataList.get(i);
					PartyOrganMemberDTO partyOrganMemberDTO1 = dataList.get(j);
					if(partyOrganMemberDTO.getUserId().equals(partyOrganMemberDTO1.getUserId())){
						dataList.get(i).setUserPostName(partyOrganMemberDTO.getUserPostName()+";"+partyOrganMemberDTO1.getUserPostName());
						dataList.remove(j);
						j--;
					}
				}
			}
		}catch (Exception e){
			LOGGER.error("处理多职位逻辑报错,"+e.getMessage());
		}




		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		//map.put("rows", result.getResult());
		map.put("rows",dataList);
		LOGGER.info("成功获取PartyOrganMemberDTO分页数据");
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
			PartyOrganMemberDTO dto = partyOrganMemberService.queryPartyOrganMemberByPrimaryKey(id);
			convertDto(dto);
			mav.addObject("partyOrganMemberDTO", dto);
		}else{
			mav.addObject("pid", id);
		}
		mav.setViewName("avicit/pb/organize/partyorganmember/PartyOrganMember" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String, Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("organize:partyOrganMember:edit")
	public Map<String, Object> toSavePartyOrganMember(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			PartyOrganMemberDTO partyOrganMemberDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<PartyOrganMemberDTO>() {
					});
            //调用校验工具类，校验数据
        	beanValidatorUtil.validateObject(partyOrganMemberDTO);
			if (StringUtils.isEmpty(partyOrganMemberDTO.getId())) {
				//新增
				partyOrganMemberDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = partyOrganMemberService.insertPartyOrganMember(partyOrganMemberDTO);
				map.put("id", id);
			} else {
				//修改
				partyOrganMemberService.updatePartyOrganMemberSensitive(partyOrganMemberDTO);
				map.put("id", partyOrganMemberDTO.getId());
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
	 * @return Map<String, Object>
	 */
	@RequestMapping(value = "/operation/delete", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("organize:partyOrganMember:delete")
	public Map<String, Object> toDeletePartyOrganMember(@RequestBody String[] ids) {
		Map<String, Object> map = new HashMap<>();
		try {
			partyOrganMemberService.deletePartyOrganMemberByIds(ids);
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
		PartyOrganMemberDTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<PartyOrganMemberDTO>() {
					});
		} else {
			param = new PartyOrganMemberDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<PartyOrganMemberDTO> dtoList = partyOrganMemberService.searchPartyOrganMemberForExport(param, idsList);
			for (int i = 0; dtoList != null && i < dtoList.size(); i++) {
				convertDto(dtoList.get(i));
			}
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = partyOrganMemberService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<PartyOrganMemberDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			PartyOrganMemberDTO bean = objList.get(i);
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
	 * @throws Exception 
	 */
	private void convertDto(PartyOrganMemberDTO dto) throws Exception{
		if (dto == null){
			return;
		}
		dto.setUserIdAlias(sysUserLoader.getSysUserNameById(dto.getUserId()));
		dto.setUserPostName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PARTY_POST", dto.getUserPost(),sysApplicationAPI.getCurrentAppId()));
		dto.setAttribute09(partyOrganizationService.queryPartyOrganizationByPrimaryKey(dto.getPartyId()).getPartyName());
	}
	@RequestMapping("/getUser/{userId}")
	@ResponseBody
	public Map<String, Object> getUser(@PathVariable String userId){
		Map<String,Object> map = new HashMap<>();
		PartyOrganMemberDTO partyOrganMemberDTO = new PartyOrganMemberDTO();
		partyOrganMemberDTO.setUserId(userId);
		List<PartyOrganMemberDTO> partyOrganMemberDTOS = null;
		try {
			partyOrganMemberDTOS = partyOrganMemberService.searchPartyOrganMember(partyOrganMemberDTO, "", "");
		} catch (Exception e) {
			e.printStackTrace();
		}
		map.put("rows",partyOrganMemberDTOS);
		return map;
	}

}

