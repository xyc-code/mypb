package avicit.pb.activist.partyactivist.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import avicit.pb.activist.activistmerits.service.ActivistMeritsService;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;

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
import avicit.platform6.bpm.pvm.internal.cmd.a;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.DateUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.commons.utils.SysExcelFileWriteUtil;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.pb.activist.activistmerits.dto.ActivistMeritsDTO;
import avicit.pb.activist.activistachievement.dto.ActivistAchievementDTO;
import avicit.pb.activist.activistachievement.service.ActivistAchievementService;
import avicit.pb.activist.partyactivist.dto.PartyActivistDTO;
import avicit.pb.activist.partyactivist.service.PartyActivistService;
import avicit.pb.member.partymember.dto.PartyMemberDTO;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
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
//因查询过慢，取消@scope('prototype')注解 从原型模式改为单例模型 提升查询速度
//@Scope("prototype")
@RequestMapping("avicit/pb/activist/partyActivist/partyActivistController")
public class PartyActivistController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(PartyActivistController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private PartyActivistService partyActivistService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;
    @Autowired
	private PartyOrganizationService partyOrganizationService;
    @Autowired
    private ActivistMeritsService activiService;
	@Autowired
	//党员表service
	private PartyMemberService partyMemberService;
	private String languageCode = SessionHelper.getSystemDefaultLanguageCode();
	private static Collection<SysLookupSimpleVo> platformSex = null;
	private static Collection<SysLookupSimpleVo> paEducationLevel =null;
	private static Collection<SysLookupSimpleVo> paPartyType =null;
	private static Collection<SysLookupSimpleVo> paYnLeague =null;
	private static Collection<SysLookupSimpleVo> platformValidFlag =null;
	private static Collection<SysLookupSimpleVo> paEducationType =null;
	private static Collection<SysLookupSimpleVo> paProfessionalRankLevel =null;
	private static Collection<SysLookupSimpleVo> paSkillLevel =null;
	private static Collection<SysLookupSimpleVo> paCategory =null;
	private static Collection<SysLookupSimpleVo> paMerits =null;

	public PartyActivistController() {
		platformSex  =sysLookupLoader.getLookUpListByTypeByAppId("PLATFORM_SEX","1");
		paEducationLevel  =sysLookupLoader.getLookUpListByTypeByAppId("PA_EDUCATION_LEVEL","1");
		paPartyType  =sysLookupLoader.getLookUpListByTypeByAppId("PA_PARTY_TYPE","1");
		paYnLeague =sysLookupLoader.getLookUpListByTypeByAppId("PA_YN_LEAGUE","1");
		platformValidFlag  =sysLookupLoader.getLookUpListByTypeByAppId("PLATFORM_VALID_FLAG","1");
		paEducationType =sysLookupLoader.getLookUpListByTypeByAppId("PA_EDUCATION_TYPE","1");
		paProfessionalRankLevel =sysLookupLoader.getLookUpListByTypeByAppId("PA_PROFESSIONAL_RANK_LEVEL","1");
		paSkillLevel =sysLookupLoader.getLookUpListByTypeByAppId("PA_SKILL_LEVEL","1");
		paCategory =sysLookupLoader.getLookUpListByTypeByAppId("PA_CATEGORY","1");
		paMerits =sysLookupLoader.getLookUpListByTypeByAppId("PA_MERITS","1");
	}

	/**
	 * 跳转到列表页面
	 * @param request 请求
	 * @param reponse 响应
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toPartyActivistManage")
	public ModelAndView toPartyActivistManage(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		System.out.println("aa");
		mav.setViewName("avicit/pb/activist/partyactivist/PartyActivistManage");
		mav.addObject("url", "platform/avicit/pb/activist/partyActivist/partyActivistController/operation/");
		mav.addObject("activistAchievementUrl", "platform/avicit/pb/activist/activistAchievement/activistAchievementController/operation/");
		mav.addObject("activistMeritsUrl", "platform/avicit/pb/activist/activistMerits/activistMeritsController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getPartyActivistsByPage")
	@ResponseBody
	@RequiresPermissions("activist:partyActivist:view")
	public Map<String, Object> togetPartyActivistByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<PartyActivistDTO> queryReqBean = new QueryReqBean<PartyActivistDTO>();
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
			cloumnName = ComUtil.getColumn(PartyActivistDTO.class, sidx);
			if (cloumnName != null) {
				//这里先进行判断是否有对应的数据库字段
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(PartyActivistDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(PartyActivistDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		PartyActivistDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<PartyActivistDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<PartyActivistDTO>() {
			});
		}else{
            param = new PartyActivistDTO();
        }
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		queryReqBean.setSearchParams(param);
		try {
			result = partyActivistService.searchPartyActivistByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		for (PartyActivistDTO dto : result.getResult()) {
			if(StringUtils.isNotEmpty(dto.getPartyId())){
				PartyOrganizationDTO partyOrganizationDTO;
				try {
					partyOrganizationDTO = partyOrganizationService.queryPartyOrganizationByPrimaryKey(dto.getPartyId());
					if(partyOrganizationDTO != null){
						dto.setPartyIdAlias(partyOrganizationDTO.getPartyName());
					}else{
						dto.setPartyIdAlias(dto.getPartyId());
					}
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

			}



			convertDto(dto);
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取PartyActivistDTO分页数据");
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
		Map<String, Object> map = new HashMap<>();
		if (!"Add".equals(type)) {
			//编辑窗口或者详细页窗口
			PartyActivistDTO dto = partyActivistService.queryPartyActivistByPrimaryKey(id);
			convertDto(dto);
			PartyOrganizationDTO partyOrganizationDTO = partyOrganizationService.queryPartyOrganizationByPrimaryKey(dto.getPartyId());
			if(partyOrganizationDTO != null){
				dto.setPartyIdAlias(partyOrganizationDTO.getPartyName());
			}
			if(dto.getAttribute08()!=null){
				mav.addObject("attribute08Alias",partyOrganizationService.queryPartyOrganizationByPrimaryKey(dto.getAttribute08()).getPartyName());
			}else{
				mav.addObject("attribute08Alias",(""));
			}
			mav.addObject("partyActivistDTO", dto);
		}
		try {
			String appId = sysApplicationAPI.getCurrentAppId();
			Collection<SysLookupSimpleVo> meritsList = sysLookupLoader.getLookUpListByTypeByAppId("PA_MERITS",appId);
			HashMap<String, String> meritsMap = new LinkedHashMap<String, String>();
			for (SysLookupSimpleVo vo : meritsList) {
				meritsMap.put(vo.getLookupCode(), vo.getLookupName());
			}
			map.put("meritsData", meritsMap);
			Collection<SysLookupSimpleVo> typeList = sysLookupLoader.getLookUpListByTypeByAppId("PA_PARTY_TYPE",appId);
			HashMap<String, String> typeMap = new LinkedHashMap<String, String>();
			for (SysLookupSimpleVo vo : typeList) {
				typeMap.put(vo.getLookupCode(), vo.getLookupName());
			}
			map.put("typeData", typeMap);
			Collection<SysLookupSimpleVo> yearList = sysLookupLoader.getLookUpListByTypeByAppId("PA_YEAR",appId);
			HashMap<String, String> yearMap = new LinkedHashMap<String, String>();
			for (SysLookupSimpleVo vo : yearList) {
				yearMap.put(vo.getLookupCode(), vo.getLookupName());
			}
			map.put("yearData", yearMap);
			map.put("flag", OpResult.success);
		} catch (Exception ex) {
			map.put("flag", OpResult.failure);
		}
		mav.addObject("meritsMap", JsonHelper.getInstance().writeValueAsString(map));
		//mav.addObject("test2Data", JsonHelper.getInstance().writeValueAsString(test2Map));
		mav.addObject("activistAchievementEditUrl", "platform/avicit/pb/activist/activistAchievement/activistAchievementController/operation/");
		mav.addObject("activistMeritsEditUrl", "platform/avicit/pb/activist/activistMerits/activistMeritsController/operation/");
		mav.setViewName("avicit/pb/activist/partyactivist/PartyActivist" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String, Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("activist:partyActivist:edit")
	public Map<String, Object> toSavePartyActivist(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		String updateSubData = ServletRequestUtils.getStringParameter(request, "updateSubData", "");
		String removeSubIds = ServletRequestUtils.getStringParameter(request, "removeSubIds", "");
		String updateSubDataExtr = ServletRequestUtils.getStringParameter(request, "updateSubDataExtr", "");
		String removeSubIdsExtr = ServletRequestUtils.getStringParameter(request, "removeSubIdsExtr", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			PartyActivistDTO partyActivistDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<PartyActivistDTO>() {
					});
			List<ActivistAchievementDTO> updateSubList = new ArrayList<ActivistAchievementDTO>();
			if (StringUtils.isNotEmpty(updateSubData)) {
				updateSubList = JsonHelper.getInstance().readValue(updateSubData, dateFormat, new TypeReference<List<ActivistAchievementDTO>>() {
				});
			}
			List<ActivistMeritsDTO> updateSubListExtr = new ArrayList<ActivistMeritsDTO>();
			if (StringUtils.isNotEmpty(updateSubDataExtr)) {
				updateSubListExtr = JsonHelper.getInstance().readValue(updateSubDataExtr, dateFormat, new TypeReference<List<ActivistMeritsDTO>>() {
				});
			}
			String[] removeSubList = null;
			String[] removeSubListExtr = null;
			if (StringUtils.isNotEmpty(removeSubIds)) {
				removeSubList = JsonHelper.getInstance().readValue(removeSubIds, String[].class);
			}
			if (StringUtils.isNotEmpty(removeSubIdsExtr)) {
				removeSubListExtr = JsonHelper.getInstance().readValue(removeSubIdsExtr, String[].class);
			}
            //调用校验工具类，校验数据
            beanValidatorUtil.validateObject(partyActivistDTO);
			if (StringUtils.isEmpty(partyActivistDTO.getId())) {
				//新增
				partyActivistDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				if(partyActivistDTO.getBirthday() != null){
					String age = getAge(partyActivistDTO.getBirthday());
					if(StringUtils.isNotEmpty(age)){
						partyActivistDTO.setAttribute01(age);
					}
				}
				
				
				
				
				String id = partyActivistService.insertPartyActivist(partyActivistDTO,updateSubList,updateSubListExtr);
				map.put("id", id);
			} else {
				//修改
				
				if(partyActivistDTO.getBirthday() != null){
					String age = getAge(partyActivistDTO.getBirthday());
					if(StringUtils.isNotEmpty(age)){
						partyActivistDTO.setAttribute01(age);
					}
				}
				
				
				
				partyActivistService.updatePartyActivistSensitive(partyActivistDTO,updateSubList,updateSubListExtr,removeSubList,removeSubListExtr);
				map.put("id", partyActivistDTO.getId());
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
	 * @param request 请求
	 * @return Map<String, Object>
	 */
	@RequestMapping(value = "/operation/delete", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("activist:partyActivist:delete")
	public Map<String, Object> toDeletePartyActivist(@RequestBody String[] ids, HttpServletRequest request) {
		Map<String, Object> map = new HashMap<>();
		try {
			partyActivistService.deletePartyActivistByIds(ids);
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
        PartyActivistDTO param = null;
        if (selectConditions != null && !"".equals(selectConditions)) {
            param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
                    new TypeReference<PartyActivistDTO>() {
                    });
        } else {
            param = new PartyActivistDTO();
        }
        param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
        try {
            List<PartyActivistDTO> dtoList = partyActivistService.searchPartyActivistForExport(param, idsList);
			for (int i = 0; dtoList != null && i < dtoList.size(); i++) {
				PartyActivistDTO dto = dtoList.get(i);
				if(dto != null){

					if(StringUtils.isNotEmpty(dto.getPartyId())){
						PartyOrganizationDTO partyOrganizationDTO;
						try {
							partyOrganizationDTO = partyOrganizationService.queryPartyOrganizationByPrimaryKey(dto.getPartyId());
							if(partyOrganizationDTO != null){
								//dto.setPartyIdAlias(partyOrganizationDTO.getPartyName());
								dto.setPartyId(partyOrganizationDTO.getPartyName());
								//dto.setDeptId(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(), languageCode));
							}
						} catch (Exception e) {
							e.printStackTrace();
						}

					}
					if(StringUtils.isNotEmpty(dto.getId())){
						StringBuilder chilrdArr = new StringBuilder();
						ActivistMeritsDTO activdto = new ActivistMeritsDTO();
						activdto.setPaId(dto.getId());
						 List<ActivistMeritsDTO> activDtos = activiService.searchActivistMerits(activdto, "", "");

							 for(ActivistMeritsDTO activDto : activDtos){
							 activDto.setTypeName(lookCode(paPartyType,activDto.getType()));
							 activDto.setMeritsName(lookCode(paMerits, activDto.getMerits()));
							 if(chilrdArr.length()!=0){
							 	chilrdArr.append(";\n");
							 }
							 chilrdArr.append("年份：").append(activDto.getAttribute01()).append(",绩效为：").append(activDto.getMeritsName()).append(",类别为：").append(activDto.getTypeName()).append(",排名为：").append(activDto.getPosition());
						 }
						dto.setChilrdArr(chilrdArr.toString());
					}
					dto.setAttribute02(lookCode(paEducationType,dto.getAttribute02()));
					dto.setAttribute03(lookCode(paProfessionalRankLevel,dto.getAttribute03()));
					dto.setAttribute04(lookCode(paSkillLevel,dto.getAttribute04()));
					dto.setAttribute05(lookCode(paCategory,dto.getAttribute05()));
					convertDto(dto);
				}
			}
            List<Map<String,Object>> dataList = objectsToMaps(dtoList);
            byte[] bytes = partyActivistService.exportExcel(templateCode, colsList, dataList);
            String excelFileName = param.getLogTitle() + "_" + System.currentTimeMillis() + ".xlsx";
            SysExcelFileWriteUtil.writeExcel(excelFileName, bytes, request, response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    /**
     * 积极分子一键转党员
     * @param ids 积极分字id数组
     * @return 返回结果
     * */
    @RequestMapping("/operation/partyMeber")
    @ResponseBody
    public Map<String,Object> partyMeber(@RequestBody String[] ids){
    	Map<String,Object> responseMap = new HashMap<>();
    	String userNames = "";
    	for(int i=0;i<ids.length;i++){
    		try {
    		PartyActivistDTO partyActivistDTO=this.partyActivistService.queryPartyActivistByPrimaryKey(ids[i]);
    		PartyMemberDTO dto = new PartyMemberDTO();
    		dto.setUserId(partyActivistDTO.getUserId());
    		dto.setUserCode(partyActivistDTO.getUserCode());
    		dto.setDeptId(partyActivistDTO.getDeptId());
    		dto.setPartyId(partyActivistDTO.getPartyId());
    		dto.setSex(partyActivistDTO.getSex());
    		dto.setBirthday(partyActivistDTO.getBirthday());
    		dto.setNation(partyActivistDTO.getNation());
    		dto.setOrign(partyActivistDTO.getOrign());
    		dto.setBirthPlace(partyActivistDTO.getAttribute07());
    		dto.setEducationSector(partyActivistDTO.getAttribute02());
    		dto.setJoinParty(partyActivistDTO.getReqpartyTime());
    		dto.setEducationLevel(partyActivistDTO.getEducationLevel());
    		dto.setJoinpartyDept("中国航发XX");
    		dto.setIntroducer(partyActivistDTO.getIntroducer());
    		dto.setWorkTime(partyActivistDTO.getWorkTime());
    		dto.setPost(partyActivistDTO.getPost());
    		dto.setProfessionalRank(partyActivistDTO.getProfessionalRank());
    		dto.setCategory(partyActivistDTO.getAttribute05());
    		dto.setIdcard(partyActivistDTO.getIdcard());
    		dto.setTel(partyActivistDTO.getAttribute06());
    		dto.setOnoffJob("0");
    		dto.setAttribute01(partyActivistDTO.getAttribute08());
    		dto.setStatus("1");
    		dto.setAttribute04(partyActivistDTO.getAttribute04());
    		dto.setAttribute02(partyActivistDTO.getAttribute01());
    		Map<String,String> ma = this.partyMemberService.getPartyMemberOrganizationByUserId(partyActivistDTO.getUserId());
    		if(ma != null){
    			String userName = this.sysUserLoader.getSysUserNameById(dto.getUserId());
    			userNames+=userName+"、";
    			LOGGER.error("党员表存在当前用户--"+userName);
    		}else{
    			this.partyMemberService.insertPartyMember(dto);
    			partyActivistDTO.setStatus("0");
        		this.partyActivistService.updatePartyActivistAll(partyActivistDTO);
    		}

			} catch (Exception e) {
				e.printStackTrace();
				responseMap.put("jsonArray", ids);
		    	responseMap.put("flag","error");
		    	return responseMap;
			}
    	}
    	responseMap.put("jsonArray", ids);
    	responseMap.put("flag","success");	
    	if(!userNames.equals("")){
    		responseMap.put("msg", "党员表存在用户--"+userNames);
    		responseMap.put("jsonArray", ids);
        	responseMap.put("flag","error");	
    	}
    	
    	return responseMap;
    }

    /**
     * 将List转换为List<Map<String, Object>>
     * @param objList
     * @return List<Map<String, Object>>
     */
    private List<Map<String, Object>> objectsToMaps(List<PartyActivistDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			PartyActivistDTO bean = objList.get(i);
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
	private void convertDto(PartyActivistDTO dto){
		if (dto == null){
			return;
		}
		dto.setUserIdAlias(sysUserLoader.getSysUserNameById(dto.getUserId()));
		String sysDeptName = sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(), SessionHelper.getCurrentLanguageCode());
		if(StringUtils.equals("该部门语言信息丢失", sysDeptName)){
			dto.setDeptIdAlias(dto.getDeptId());
		}else{
			dto.setDeptIdAlias(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(), SessionHelper.getCurrentLanguageCode()));
		}
		dto.setSexName(lookCode(platformSex,dto.getSex()));
		dto.setEducationLevelName(lookCode(paEducationLevel,dto.getEducationLevel()));
		dto.setActivistTypeName(lookCode(paPartyType,dto.getActivistType()));
		dto.setLeagueMemberName(lookCode(paYnLeague,dto.getLeagueMember()));
		dto.setStatusName(lookCode(platformValidFlag,dto.getStatus()));


	}

	private String lookCode(Collection<SysLookupSimpleVo> records, String looupCode) {
		String lookupName = "";
		if ((records != null) && (records.size() > 0)) {
			for (SysLookupSimpleVo sysLookupSimpleVo : records) {
				if (sysLookupSimpleVo.getLookupCode().equals(looupCode)) {
					lookupName = sysLookupSimpleVo.getLookupName();
					break;
				}
			}
		}
		return lookupName;
	}

	private String getAge(Date birthDay) throws Exception{
		
		String retDate = "";

		Calendar calendar = Calendar.getInstance();
		
		Date today = DateUtil.getToday();
		
		calendar.setTime(today);
		
		int todayYear = calendar.get(Calendar.YEAR);
		
		int todayMonth = calendar.get(Calendar.MONTH) + 1;
	
		int todayDay = calendar.get(Calendar.DATE);
		
        calendar.setTime(birthDay);
		
		//Date today = DateUtil.getToday();
	
		int birthDayYear = calendar.get(Calendar.YEAR);
	
		int birthDayMonth = calendar.get(Calendar.MONTH) + 1;
		
		int birthDayDay = calendar.get(Calendar.DATE);
		
		if(todayYear >  birthDayYear){
			
			if(todayMonth - birthDayMonth > 0 ){
				
				retDate = String.valueOf(todayYear - birthDayYear);
				
			}else if(todayMonth - birthDayMonth == 0 ){
				
				if(todayDay - birthDayDay >= 0){
					
					retDate = String.valueOf(todayYear - birthDayYear);
							
				}else{
					retDate =  String.valueOf(todayYear - birthDayYear -1);
				}
				
			}else{
				
				retDate = String.valueOf(todayYear - birthDayYear -1);
			}
		}else{
			
			throw new Exception(birthDayYear + "-" + birthDayDay + "-" + birthDayDay + ":日期输入错误！！！" );
		}
		return retDate;
}
}

