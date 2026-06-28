package avicit.tu.fixedassets.dynfixedassetsledger.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang.StringUtils;
import org.cryptacular.io.ClassPathResource;
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
import avicit.platform6.api.sysautocode.SysAutoCodeAPI;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.commons.utils.SysExcelFileWriteUtil;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;

import avicit.tu.fixedassets.dynfixedassetsledger.dto.DynFixedAssetsLedgerDTO;
import avicit.tu.fixedassets.dynfixedassetsledger.service.DynFixedAssetsLedgerService;
import avicit.tu.fixedassets.dynfixedassetsledger.service.ExportWord;

import com.deepoove.poi.XWPFTemplate;
import com.deepoove.poi.data.Tables;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：文冲
 * @邮箱：13022927887@163.com
 * @创建时间： 2025-04-24 10:09
 * @类说明：DYN_FIXED_ASSETS_LEDGERController
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/tu/fixedassets/dynFixedAssetsLedger/dynFixedAssetsLedgerController")
public class DynFixedAssetsLedgerController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynFixedAssetsLedgerController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynFixedAssetsLedgerService dynFixedAssetsLedgerService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    private SysAutoCodeAPI sysAutoCodeAPI;
    @Autowired
	private ExportWord exportword;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDynFixedAssetsLedgerManage")
	public ModelAndView toDynFixedAssetsLedgerManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/tu/fixedassets/dynfixedassetsledger/DynFixedAssetsLedgerManage");
		mav.addObject("url", "platform/avicit/tu/fixedassets/dynFixedAssetsLedger/dynFixedAssetsLedgerController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDynFixedAssetsLedgersByPage")
	@ResponseBody
	public Map<String, Object> togetDynFixedAssetsLedgerByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DynFixedAssetsLedgerDTO> queryReqBean = new QueryReqBean<DynFixedAssetsLedgerDTO>();
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
			cloumnName = ComUtil.getColumn(DynFixedAssetsLedgerDTO.class, sidx);
			//这里先进行判断是否有对应的数据库字段
			if (cloumnName != null) {
				orderBy = " " + cloumnName + " " + sord;
			} else {
				//判断是否为特殊控件导致字段无法匹配
				if (sidx.indexOf("Alias") != -1) {
					cloumnName = ComUtil.getColumn(DynFixedAssetsLedgerDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Alias")));
				} else if (sidx.indexOf("Name") != -1) {
					cloumnName = ComUtil.getColumn(DynFixedAssetsLedgerDTO.class,
							sidx.substring(0, sidx.lastIndexOf("Name")));
				}
				if (cloumnName != null) {
					orderBy = " " + cloumnName + " " + sord;
				}
			}
		}
		HashMap<String, Object> map = new HashMap<String, Object>();
		DynFixedAssetsLedgerDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynFixedAssetsLedgerDTO> result = null;
		if (json != null && !"".equals(json)) {
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynFixedAssetsLedgerDTO>() {
			});
		}else{
			param = new DynFixedAssetsLedgerDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		queryReqBean.setSearchParams(param);
		try {
			result = dynFixedAssetsLedgerService.searchDynFixedAssetsLedgerByPage(queryReqBean,orderBy,keyWord);
		} catch (Exception ex) {
			return map;
		}
		for (DynFixedAssetsLedgerDTO dto : result.getResult()) {
			convertDto(dto);
		}
		map.put("records", result.getPageParameter().getTotalCount());
		map.put("page", result.getPageParameter().getPage());
		map.put("total", result.getPageParameter().getTotalPage());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynFixedAssetsLedgerDTO分页数据");
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
			DynFixedAssetsLedgerDTO dto = dynFixedAssetsLedgerService.queryDynFixedAssetsLedgerByPrimaryKey(id);
			convertDto(dto);
			mav.addObject("dynFixedAssetsLedgerDTO", dto);
		}
		mav.setViewName("avicit/tu/fixedassets/dynfixedassetsledger/DynFixedAssetsLedger" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
    @ResponseBody
	public Map<String,Object> toSaveDynFixedAssetsLedger(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynFixedAssetsLedgerDTO dynFixedAssetsLedgerDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynFixedAssetsLedgerDTO>() {
					});
		    //调用校验工具类，校验数据
        	beanValidatorUtil.validateObject(dynFixedAssetsLedgerDTO);
			if (StringUtils.isEmpty(dynFixedAssetsLedgerDTO.getId())) {
				//新增
				dynFixedAssetsLedgerDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = dynFixedAssetsLedgerService.insertDynFixedAssetsLedger(dynFixedAssetsLedgerDTO);
				map.put("id", id);
			} else {
				//修改
				dynFixedAssetsLedgerService.updateDynFixedAssetsLedgerSensitive(dynFixedAssetsLedgerDTO);
				map.put("id", dynFixedAssetsLedgerDTO.getId());
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
	public Map<String,Object> toDeleteDynFixedAssetsLedger(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			dynFixedAssetsLedgerService.deleteDynFixedAssetsLedgerByIds(ids);
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
		DynFixedAssetsLedgerDTO param = null;
		if (selectConditions != null && !"".equals(selectConditions)) {
			param = JsonHelper.getInstance().readValue(selectConditions, dateFormat,
					new TypeReference<DynFixedAssetsLedgerDTO>() {
					});
		} else {
			param = new DynFixedAssetsLedgerDTO();
		}
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			List<DynFixedAssetsLedgerDTO> dtoList = dynFixedAssetsLedgerService.searchDynFixedAssetsLedgerForExport(param, idsList);
			for (int i = 0; dtoList != null && i < dtoList.size(); i++) {
				convertDto(dtoList.get(i));
			}
			List<Map<String,Object>> dataList = objectsToMaps(dtoList);
			byte[] bytes = dynFixedAssetsLedgerService.exportExcel(templateCode, colsList, dataList);
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
    private List<Map<String, Object>> objectsToMaps(List<DynFixedAssetsLedgerDTO> objList) {
        List<Map<String, Object>> list = new ArrayList<>();
		for (int i = 0; objList != null && i < objList.size(); i++) {
			DynFixedAssetsLedgerDTO bean = objList.get(i);
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
	private void convertDto(DynFixedAssetsLedgerDTO dto){
		if (dto == null){
			return;
		}
		dto.setAssetDwName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("GUILD_ASSETS_DY_TYPE", dto.getAssetDw(),sysApplicationAPI.getCurrentAppId()));
		dto.setZrUserAlias(sysUserLoader.getSysUserNameById(dto.getZrUser()));
		dto.setTySbSecretLevelName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("GUILD_ASSETS_SECRET_LEVEL", dto.getTySbSecretLevel(),sysApplicationAPI.getCurrentAppId()));
		dto.setAssetTypeName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("GUILD_ASSETS_TYPE", dto.getAssetType(),sysApplicationAPI.getCurrentAppId()));
		dto.setStoragePlaceName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("GUILD_ASSETS_STORAGE_PLACE", dto.getStoragePlace(),sysApplicationAPI.getCurrentAppId()));
		dto.setApplyUserIdAlias(sysUserLoader.getSysUserNameById(dto.getApplyUserId()));
	}
	
	
	/***********************************************************************   资产调拨         ********************************************************************/
	/**
	 * 校验资产调拨数量是否超出限制
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/queryFixedAssetsNum", method = RequestMethod.POST)
    @ResponseBody
	public Map<String,Object> toQueryFixedAssetsNum(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String assetsLedgerId = ServletRequestUtils.getStringParameter(request, "assetsLedgerId", "");
		String assetsLedgerNum = ServletRequestUtils.getStringParameter(request, "assetsLedgerNum", "");
		String taskId = ServletRequestUtils.getStringParameter(request, "taskId", "");
		String dbNum = ServletRequestUtils.getStringParameter(request, "dbNum", "");
		try {
			String sql = "select * from dyn_fixed_assets_db t left join sys_bpm_hist_procinst t2 on t.id = t2.formid_ "
					+ "where t.asset_ledger_id = '" + assetsLedgerId + "' and t.id != '" + taskId + "' "
					+ "and (t2.state_ = 'active' or t2.state_ = 'start')";
			List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
			if(list != null && list.size() > 0){
				int tempNum = Integer.parseInt(assetsLedgerNum) - Integer.parseInt(dbNum);
				for (Map<String, Object> maps : list) {
					int thisDbNum = Integer.parseInt(maps.get("DB_NUM").toString());
					tempNum = tempNum - thisDbNum;
				}
				if(tempNum < 0){
					map.put("flag", OpResult.failure);
				}else{
					map.put("flag", OpResult.success);
				}
			}else{
				map.put("flag", OpResult.success);
			}
		} catch (Exception ex) {
		    map.put("errorMsg", ex.getMessage());
			map.put("flag", OpResult.failure);
			return map;
		}
		return map;
	}


	/**
	 * 根据所选择工会ID查询所管理的资产，添加到资产盘点子表中
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/addFixedAssetsPdSub", method = RequestMethod.POST)
    @ResponseBody
	public Map<String,Object> toAddFixedAssetsPdSub(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String guildId = ServletRequestUtils.getStringParameter(request, "guildId", "");
		String id = ServletRequestUtils.getStringParameter(request, "id", "");
		String userId = SessionHelper.getLoginSysUserId(request);
		String deptId = SessionHelper.getCurrentDeptId(request);
		try {
			//先清空该id下的子表数据
			jdbcTemplate.execute("DELETE DYN_FIXED_ASSETS_PD_SUB T WHERE T.FK_ID = '" + id + "'");
			Calendar calendar = Calendar.getInstance();
			int currentYear = calendar.get(Calendar.YEAR);
			
			DynFixedAssetsLedgerDTO searchParams = new DynFixedAssetsLedgerDTO();
			searchParams.setGuildId(guildId);
			searchParams.setYearToBelong(currentYear + "");
			List<DynFixedAssetsLedgerDTO> result = dynFixedAssetsLedgerService.searchDynFixedAssetsLedger(searchParams, "t1.xh asc", "");
			for (DynFixedAssetsLedgerDTO dto : result) {
				String upSql = "INSERT INTO DYN_FIXED_ASSETS_PD_SUB(FK_ID,ASSET_CODE,ASSET_NAEM,ASSET_TYPE,CURRENT_VALUE,ORIGINAL_VALUE,"
						+ "INSERT_TYPE,INSERT_DATE,ASSET_NUM,ASSET_DW,ASSET_XHGG,ASSET_BRAND,ASSET_DETAILS,STORAGE_PLACE,ZR_USER,"
						+ "ASSET_ID,ID,CREATED_DEPT,ORG_IDENTITY,LAST_UPDATE_IP,CREATED_BY,CREATION_DATE,VERSION,LAST_UPDATED_BY,"
						+ "LAST_UPDATE_DATE) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
				Object[] args = new Object[]{id, dto.getAssetCode(), dto.getAssetNaem(), dto.getAssetType(), dto.getCurrentValue(),
						dto.getOriginalValue(), dto.getInsertType(), dto.getInsertDate(), dto.getAssetNum(), dto.getAssetDw(), dto.getAssetXhgg(), 
						dto.getAssetBrand(), dto.getAssetDetails(), dto.getStoragePlace(), dto.getZrUser(), dto.getId(), ComUtil.getId(), deptId,
						"ORG_ROOT", dto.getLastUpdateIp(), userId, new Date(), 1, userId, new Date()};
				jdbcTemplate.update(upSql, args);
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
	 * 生成编码
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/createAutoCode", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> toCreateAutoCode(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String code = ServletRequestUtils.getStringParameter(request, "code", "");
		String id = ServletRequestUtils.getStringParameter(request, "id", "");
		try {
			DynFixedAssetsLedgerDTO dto = dynFixedAssetsLedgerService.queryDynFixedAssetsLedgerByPrimaryKey(id);
			if(dto != null){//修改
				if(!code.equals(dto.getAssetCode())){
					String[] arr = code.split("-");
					String newCode = "$$" + arr[0] + "$$-$$" + arr[1] + "$$";
					Map<String,String> maps = sysAutoCodeAPI.generateAutoCodeValue("", "GUILD_FIXED_CODE", newCode, id, true);
					String createCode = "";
					if(maps.get("result").equals("success")){
						createCode  = maps.get("autoCodeValue");
					}
					if(!code.equals(createCode)){
						dto.setAssetCode(createCode);
						dynFixedAssetsLedgerService.updateDynFixedAssetsLedgerSensitive(dto);
					}
				}
			}else{//新增
				String[] arr = code.split("-");
				String newCode = "$$" + arr[0] + "$$-$$" + arr[1] + "$$";
				sysAutoCodeAPI.generateAutoCodeValue("", "GUILD_FIXED_CODE", newCode, id, true);
			}
			map.put("flag", OpResult.success);
		} catch (Exception ex) {
		    map.put("errorMsg", ex.getMessage());
			map.put("flag", OpResult.failure);
			return map;
		}
		return map;
	}

	
	/***********************************************************************   资产分析         ********************************************************************/
	/**
	 * 根据资产类型分类展示所有工会的资产数量总和
	 * 一级柱状图
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getEchartOneByAssetsNum")
	@ResponseBody
	public Map<String, Object> togetEchartOneByAssetsNum( HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		String year = ServletRequestUtils.getStringParameter(request, "year", "");
        String[] typeNames = null;
		String[] unionNames = null;
		Map<String, String[]> unionMaps = new HashMap<String, String[]>();
		Map<String, String> unionIdMaps = new LinkedHashMap<String, String>();
        //查询分类
        List<Map<String, Object>> typeList = jdbcTemplate.queryForList("select * from dyn_assets_type t order by t.xh asc");
        if(typeList != null && typeList.size() > 0){
        	typeNames = new String[typeList.size()];
        	for (int i = 0; i < typeList.size(); i++) {
        		typeNames[i] = typeList.get(i).get("TYPE_NAME").toString();
			}
        }
        //查询工会
        List<Map<String, Object>> tradeList = jdbcTemplate.queryForList("select * from dyn_trade_union_organiza t where t.PARENT_ID != '-1' order by t.TREE_SORT asc");
        if(tradeList != null && tradeList.size() > 0){
        	unionNames = new String[tradeList.size()];
        	for (int i = 0; i < tradeList.size(); i++) {
        		unionNames[i] = tradeList.get(i).get("LEAGUE_NAME").toString();
        		unionMaps.put(tradeList.get(i).get("LEAGUE_NAME").toString(), new String[typeNames.length]);
        		unionIdMaps.put(tradeList.get(i).get("ID").toString(), tradeList.get(i).get("LEAGUE_NAME").toString());
			}
        }
        //查询当前年份台账数据
        String sql = "select t.GUILD_ID,t1.TYPE_NAME,sum(t.ASSET_NUM) AS ASSET_NUM "
        		+ "from dyn_fixed_assets_ledger t left join dyn_assets_type t1 on t.ASSET_TYPE = t1.TYPE_CODE "
        		+ "where t.YEAR_TO_BELONG = '" + year + "' group by t.GUILD_ID,T1.TYPE_NAME "
        		+ "order by t.GUILD_ID ASC";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        if(list != null && list.size() > 0){
        	for (Map<String, Object> maps : list) {
        		//获取默认数据，通过id查询，避免工会名称修改导致数据查询不到
        		String[] arr = unionMaps.get(unionIdMaps.get(maps.get("GUILD_ID")));
				for (int i = 0; i < typeNames.length; i++) {
					//确认对应类型的下标，以便修改对应工会数量
					if(typeNames[i].equals(maps.get("TYPE_NAME").toString())){
						arr[i] = maps.get("ASSET_NUM").toString();
					}
				}
				unionMaps.put(unionIdMaps.get(maps.get("GUILD_ID")), arr);        		
			}
        }
        map.put("typeNames", typeNames);
		map.put("unionNames", unionNames);
		map.put("unionMaps", unionMaps);
		return map;
	}
	
	
	/**
	 * 根据资产类型分类展示所有工会的资产数量总和
	 * 一级柱状图
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getEchartTwoByAssetsNum")
	@ResponseBody
	public Map<String, Object> togetEchartTwoByAssetsNum( HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		String year = ServletRequestUtils.getStringParameter(request, "year", "");
		String typeName = ServletRequestUtils.getStringParameter(request, "typeName", "");
        String[] typeNames = null;
		String[] unionNames = null;
		Map<String, String[]> unionMaps = new HashMap<String, String[]>();
		Map<String, String> unionIdMaps = new LinkedHashMap<String, String>();
        //查询分类
		String queryTypeSql = "select t.* from dyn_assets_type_sub t left join dyn_assets_type t1 on t.fk_id = t1.id "
				+ "where t1.type_name = '" + typeName + "' order by t.xh asc";
        List<Map<String, Object>> typeList = jdbcTemplate.queryForList(queryTypeSql);
        if(typeList != null && typeList.size() > 0){
        	typeNames = new String[typeList.size()];
        	for (int i = 0; i < typeList.size(); i++) {
        		typeNames[i] = typeList.get(i).get("DETAILS_NAME").toString();
			}
        }
        //查询工会
        List<Map<String, Object>> tradeList = jdbcTemplate.queryForList("select * from dyn_trade_union_organiza t where t.PARENT_ID != '-1' order by t.TREE_SORT asc");
        if(tradeList != null && tradeList.size() > 0){
        	unionNames = new String[tradeList.size()];
        	for (int i = 0; i < tradeList.size(); i++) {
        		unionNames[i] = tradeList.get(i).get("LEAGUE_NAME").toString();
        		unionMaps.put(tradeList.get(i).get("LEAGUE_NAME").toString(), new String[typeNames.length]);
        		unionIdMaps.put(tradeList.get(i).get("ID").toString(), tradeList.get(i).get("LEAGUE_NAME").toString());
			}
        }
        //查询当前年份台账数据
        String sql = "select t.GUILD_ID,t.ASSET_DETAILS,sum(t.ASSET_NUM) AS ASSET_NUM "
        		+ "from dyn_fixed_assets_ledger t left join dyn_assets_type t1 on t.ASSET_TYPE = t1.TYPE_CODE "
        		+ "where t.YEAR_TO_BELONG = '" + year + "' and t1.TYPE_NAME = '" + typeName 
        		+ "' group by t.GUILD_ID,T.ASSET_DETAILS order by t.GUILD_ID ASC";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        if(list != null && list.size() > 0){
        	for (Map<String, Object> maps : list) {
        		//获取默认数据，通过id查询，避免工会名称修改导致数据查询不到
        		String[] arr = unionMaps.get(unionIdMaps.get(maps.get("GUILD_ID")));
				for (int i = 0; i < typeNames.length; i++) {
					//确认对应类型的下标，以便修改对应工会数量
					if(typeNames[i].equals(maps.get("ASSET_DETAILS").toString())){
						arr[i] = maps.get("ASSET_NUM").toString();
					}
				}
				unionMaps.put(unionIdMaps.get(maps.get("GUILD_ID")), arr);        		
			}
        }
        map.put("typeNames", typeNames);
		map.put("unionNames", unionNames);
		map.put("unionMaps", unionMaps);
		return map;
	}
	
	
	/**
	 * 根据资产类型分类展示资产原值和现值
	 * 一级折线图
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getEchartOneByAssetCurrentAndOriginal")
	@ResponseBody
	public Map<String, Object> togetEchartOneByAssetCurrentAndOriginal( HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		String year = ServletRequestUtils.getStringParameter(request, "year", "");
		String[] assetsTypeNames = null;
		String[] originalValues = null;
		String[] currentValues = null;
		 //查询分类
        List<Map<String, Object>> typeList = jdbcTemplate.queryForList("select * from dyn_assets_type t order by t.xh asc");
        if(typeList != null && typeList.size() > 0){
        	assetsTypeNames = new String[typeList.size()];
        	originalValues = new String[typeList.size()];
			currentValues = new String[typeList.size()];
        	for (int i = 0; i < typeList.size(); i++) {
        		assetsTypeNames[i] = typeList.get(i).get("TYPE_NAME").toString();
        		originalValues[i] = "0";
        		currentValues[i] = "0";
			}
        }
		
		String sql = "select t1.TYPE_NAME,sum(t.original_value) AS original_value,sum(t.current_value) AS current_value "
				+ "from dyn_fixed_assets_ledger t left join dyn_assets_type t1 on t.ASSET_TYPE = t1.TYPE_CODE "
				+ "where t.YEAR_TO_BELONG = '" + year + "'group by T1.TYPE_NAME";
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		if(list != null && list.size() > 0){
			for(int i = 0; i < list.size(); i++){
				for(int j = 0; j < assetsTypeNames.length; j++){
					if(assetsTypeNames[j].equals(list.get(i).get("TYPE_NAME").toString())){
						originalValues[j] = list.get(i).get("ORIGINAL_VALUE").toString();
						currentValues[j] = list.get(i).get("CURRENT_VALUE").toString();
					}
				}
			}
		}
		map.put("assetsTypeNames", assetsTypeNames);
		map.put("originalValues", originalValues);
		map.put("currentValues", currentValues);
		return map;
	}
	
	/**
	 * 根据资产类型分类展示资产原值和现值
	 * 二级折线图
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getEchartTwoByAssetCurrentAndOriginal")
	@ResponseBody
	public Map<String, Object> togetEchartTowByAssetCurrentAndOriginal( HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		String year = ServletRequestUtils.getStringParameter(request, "year", "");
		String typeName = ServletRequestUtils.getStringParameter(request, "typeName", "");
		String[] assetsTypeNames = null;
		String[] originalValues = null;
		String[] currentValues = null;
		//查询分类
		String queryTypeSql = "select t.* from dyn_assets_type_sub t left join dyn_assets_type t1 on t.fk_id = t1.id "
				+ "where t1.type_name = '" + typeName + "' order by t.xh asc";
		List<Map<String, Object>> typeList = jdbcTemplate.queryForList(queryTypeSql);
        if(typeList != null && typeList.size() > 0){
        	assetsTypeNames = new String[typeList.size()];
        	originalValues = new String[typeList.size()];
			currentValues = new String[typeList.size()];
        	for (int i = 0; i < typeList.size(); i++) {
        		assetsTypeNames[i] = typeList.get(i).get("DETAILS_NAME").toString();
        		originalValues[i] = "0";
        		currentValues[i] = "0";
			}
        }
		
		String sql = "select t.ASSET_DETAILS,sum(t.original_value) AS original_value,sum(t.current_value) AS current_value "
				+ "from dyn_fixed_assets_ledger t left join dyn_assets_type t1 on t.ASSET_TYPE = t1.TYPE_CODE "
				+ "where t.YEAR_TO_BELONG = '" + year + "' and t1.TYPE_NAME = '" + typeName + "'group by T.ASSET_DETAILS";
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		if(list != null && list.size() > 0){
			for(int i = 0; i < list.size(); i++){
				for(int j = 0; j < assetsTypeNames.length; j++){
					if(assetsTypeNames[j].equals(list.get(i).get("ASSET_DETAILS").toString())){
						originalValues[j] = list.get(i).get("ORIGINAL_VALUE").toString();
						currentValues[j] = list.get(i).get("CURRENT_VALUE").toString();
					}
				}
			}
		}
		map.put("assetsTypeNames", assetsTypeNames);
		map.put("originalValues", originalValues);
		map.put("currentValues", currentValues);
		return map;
	}
	
	
	/**
	 * 根据资产类型分类展示资产原值
	 * 一级饼状图
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getEchartOneByAssetsOriginalValue")
	@ResponseBody
	public Map<String, Object> togetEchartOneByAssetsOriginalValue( HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		String year = ServletRequestUtils.getStringParameter(request, "year", "");
		String[] assetsTypeNames = null;
		String[] originalValues = null;
		
		String sql = "select t1.TYPE_NAME,sum(t.original_value) AS ORIGINAL_VALUE from dyn_fixed_assets_ledger t "
				+ "left join dyn_assets_type t1 on t.ASSET_TYPE = t1.TYPE_CODE where t.YEAR_TO_BELONG = '"
				+ year + "'group by T1.TYPE_NAME";
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		if(list != null && list.size() > 0){
			assetsTypeNames = new String[list.size()];
			originalValues = new String[list.size()];
			for(int i = 0; i < list.size(); i++){
				assetsTypeNames[i] = list.get(i).get("TYPE_NAME").toString();
				originalValues[i] = list.get(i).get("ORIGINAL_VALUE").toString();
			}
		}
		map.put("assetsTypeNames", assetsTypeNames);
		map.put("originalValues", originalValues);
		return map;
	}
	
	/**
	 * 根据资产类型分类展示资产原值
	 * 二级饼状图
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getEchartTwoByAssetsOriginalValue")
	@ResponseBody
	public Map<String, Object> togetEchartTwoByAssetsOriginalValue( HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		String year = ServletRequestUtils.getStringParameter(request, "year", "");
		String typeName = ServletRequestUtils.getStringParameter(request, "typeName", "");
		String[] assetsTypeNames = null;
		String[] originalValues = null;
		
		String sql = "select t.ASSET_DETAILS,sum(t.original_value) AS ORIGINAL_VALUE from dyn_fixed_assets_ledger t "
				+ "left join dyn_assets_type t1 on t.ASSET_TYPE = t1.TYPE_CODE where t.YEAR_TO_BELONG = '"
				+ year + "' and t1.type_name = '" + typeName + "' group by T.ASSET_DETAILS";
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		if(list != null && list.size() > 0){
			assetsTypeNames = new String[list.size()];
			originalValues = new String[list.size()];
			for(int i = 0; i < list.size(); i++){
				assetsTypeNames[i] = list.get(i).get("ASSET_DETAILS").toString();
				originalValues[i] = list.get(i).get("ORIGINAL_VALUE").toString();
			}
		}
		map.put("assetsTypeNames", assetsTypeNames);
		map.put("originalValues", originalValues);
		return map;
	}
	
	/**
	 * 根据资产类型分类展示各资产状态下的数量
	 * 一级柱状图
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getEchartOneByAssetsInsertType")
	@ResponseBody
	public Map<String, Object> togetEchartOneByAssetsInsertType( HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		String year = ServletRequestUtils.getStringParameter(request, "year", "");
        String[] typeNames = null;
		String[] statusNames = null;
		Map<String, String[]> statusMaps = new HashMap<String, String[]>();
        //查询分类
        List<Map<String, Object>> typeList = jdbcTemplate.queryForList("select * from dyn_assets_type t order by t.xh asc");
        if(typeList != null && typeList.size() > 0){
        	typeNames = new String[typeList.size()];
        	for (int i = 0; i < typeList.size(); i++) {
        		typeNames[i] = typeList.get(i).get("TYPE_NAME").toString();
			}
        }
        //查询状态类型
        List<Map<String, Object>> statusList = jdbcTemplate.queryForList("select * from sys_lookup_v t where t.LOOKUP_TYPE = 'GUILD_ASSETS_STATUS' order by t.LOOKUP_CODE asc");
        if(statusList != null && statusList.size() > 0){
        	statusNames = new String[statusList.size()];
        	for (int i = 0; i < statusList.size(); i++) {
        		statusNames[i] = statusList.get(i).get("LOOKUP_NAME").toString();
        		statusMaps.put(statusList.get(i).get("LOOKUP_NAME").toString(), new String[typeNames.length]);
			}
        }
        //查询当前年份台账数据
        String sql = "select t1.TYPE_NAME,t2.LOOKUP_NAME,sum(t.ASSET_NUM) AS ASSET_NUM from dyn_fixed_assets_ledger t "
        		+ "left join dyn_assets_type t1 on t.ASSET_TYPE = t1.TYPE_CODE left join sys_lookup_v t2 "
        		+ "on t.INSERT_TYPE = t2.LOOKUP_CODE and t2.LOOKUP_TYPE ='GUILD_ASSETS_STATUS' "
        		+ "where t.YEAR_TO_BELONG = '" + year + "' group by t1.TYPE_NAME,T2.LOOKUP_NAME;";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        if(list != null && list.size() > 0){
        	for (Map<String, Object> maps : list) {
        		String[] arr = statusMaps.get(maps.get("LOOKUP_NAME"));
				for (int i = 0; i < typeNames.length; i++) {
					//确认对应类型的下标
					if(typeNames[i].equals(maps.get("TYPE_NAME").toString())){
						arr[i] = maps.get("ASSET_NUM").toString();
					}
				}
				statusMaps.put(maps.get("LOOKUP_NAME").toString(), arr);        		
			}
        }
        map.put("typeNames", typeNames);
        map.put("statusNames", statusNames);
		map.put("statusMaps", statusMaps);
		return map;
	}
	
	/**
	 * 根据资产类型分类展示各资产状态下的数量
	 * 二级柱状图
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getEchartTwoByAssetsInsertType")
	@ResponseBody
	public Map<String, Object> togetEchartTwoByAssetsInsertType( HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		String year = ServletRequestUtils.getStringParameter(request, "year", "");
		String typeName = ServletRequestUtils.getStringParameter(request, "typeName", "");
        String[] typeNames = null;
		String[] statusNames = null;
		Map<String, String[]> statusMaps = new HashMap<String, String[]>();
        //查询分类
		String queryTypeSql = "select t.* from dyn_assets_type_sub t left join dyn_assets_type t1 on t.fk_id = t1.id "
				+ "where t1.type_name = '" + typeName + "' order by t.xh asc";
        List<Map<String, Object>> typeList = jdbcTemplate.queryForList(queryTypeSql);
        if(typeList != null && typeList.size() > 0){
        	typeNames = new String[typeList.size()];
        	for (int i = 0; i < typeList.size(); i++) {
        		typeNames[i] = typeList.get(i).get("DETAILS_NAME").toString();
			}
        }
        //查询状态类型
        List<Map<String, Object>> statusList = jdbcTemplate.queryForList("select * from sys_lookup_v t where t.LOOKUP_TYPE = 'GUILD_ASSETS_STATUS' order by t.LOOKUP_CODE asc");
        if(statusList != null && statusList.size() > 0){
        	statusNames = new String[statusList.size()];
        	for (int i = 0; i < statusList.size(); i++) {
        		statusNames[i] = statusList.get(i).get("LOOKUP_NAME").toString();
        		statusMaps.put(statusList.get(i).get("LOOKUP_NAME").toString(), new String[typeNames.length]);
			}
        }
        //查询当前年份台账数据
        String sql = "select t.ASSET_DETAILS,t2.LOOKUP_NAME,sum(t.ASSET_NUM) AS ASSET_NUM from dyn_fixed_assets_ledger t "
        		+ "left join dyn_assets_type t1 on t.ASSET_TYPE = t1.TYPE_CODE "
        		+ "left join sys_lookup_v t2 on t.INSERT_TYPE = t2.LOOKUP_CODE and t2.LOOKUP_TYPE ='GUILD_ASSETS_STATUS' "
        		+ "where t.YEAR_TO_BELONG = '" + year + "' and t1.TYPE_NAME = '" + typeName + "' "
        		+ "group by t.ASSET_DETAILS,T2.LOOKUP_NAME;";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        if(list != null && list.size() > 0){
        	for (Map<String, Object> maps : list) {
        		String[] arr = statusMaps.get(maps.get("LOOKUP_NAME"));
				for (int i = 0; i < typeNames.length; i++) {
					//确认对应类型的下标
					if(typeNames[i].equals(maps.get("ASSET_DETAILS").toString())){
						arr[i] = maps.get("ASSET_NUM").toString();
					}
				}
				statusMaps.put(maps.get("LOOKUP_NAME").toString(), arr);        		
			}
        }
        map.put("typeNames", typeNames);
        map.put("statusNames", statusNames);
		map.put("statusMaps", statusMaps);
		return map;
	}
	
	/**
	 * 测试导出word
	 */
	@RequestMapping(value = "/operation/expWord")
	@ResponseBody
	public void toExpWord( HttpServletRequest request, HttpServletResponse response) {
		try {
	        // 生成文档并输出到响应流
	        ClassPathResource resource = new ClassPathResource("controller/template.docx");
	        XWPFTemplate template = XWPFTemplate.compile(resource.getInputStream());
	        
	        HashMap<String, Object> map = new HashMap<String, Object>();
	        map.put("name", "zhangsan");
	        map.put("age", "55");
	        map.put("table", Tables.of(new String[][]{{"张三", "30"}, {"李四", "25"}}).create());
	        
	        // 设置响应头
	        response.reset();
	        response.addHeader("Content-Disposition", "attachment; filename=11.doc");
	        response.setContentType("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
	        OutputStream toClient = new BufferedOutputStream(response.getOutputStream()); 
	        
	        // 3. 渲染并生成文件
	        template.render(map);
	        template.writeToFile("output.docx");
	        template.write(response.getOutputStream());
	        template.close();
	        
	       
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	@RequestMapping(value = "/operation/exportWord")
	public void exportWord(HttpServletRequest req, HttpServletResponse resp)throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();

		String id = ServletRequestUtils.getStringParameter(req, "id", "");

		map.put("msNmae", "张三");
		map.put("tdNmae", "李四");

		/*
		 * Enumeration<String> paramNames = req.getParameterNames(); //
		 * 通过循环将表单参数放入键值对映射中 while(paramNames.hasMoreElements()) { String key =
		 * paramNames.nextElement(); String value = req.getParameter(key);
		 * map.put(key, value); }
		 */

		// 提示：在调用工具类生成Word文档之前应当检查所有字段是否完整
		// 否则Freemarker的模板殷勤在处理时可能会因为找不到值而报错 这里暂时忽略这个步骤了
		File file = null;
		InputStream fin = null;
		ServletOutputStream out = null;
		try {
			// 调用工具类WordGenerator的createDoc方法生成Word文档
			file = exportword.createDoc(map, "template");
			fin = new FileInputStream(file);
			resp.reset();
			resp.setCharacterEncoding("utf-8");
			resp.setContentType("application/msword;charset=utf-8");
			// 设置浏览器以下载的方式处理该文件默认名为resume.doc

			String FileName = "名师评价表.doc";
			String httpHeader = "attachment;filename=" + java.net.URLEncoder.encode(FileName, "UTF-8");
			resp.addHeader("Content-Disposition", httpHeader);

			out = resp.getOutputStream();
			byte[] buffer = new byte[512]; // 缓冲区
			int bytesToRead = -1;
			// 通过循环将读入的Word文件的内容输出到浏览器中
			while ((bytesToRead = fin.read(buffer)) != -1) {
				out.write(buffer, 0, bytesToRead);
			}
		} finally {
			if (fin != null)
				fin.close();
			if (out != null)
				out.close();
			if (file != null)
				file.delete(); // 删除临时文件
		}

	}

}
