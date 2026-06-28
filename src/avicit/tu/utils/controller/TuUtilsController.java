package avicit.tu.utils.controller;

import java.io.BufferedOutputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.util.CellRangeAddress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.SysUserRoleAPI;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.api.sysuser.dto.SysUserRole;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;

/**
 * 工会工具类
 *
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/tuutils/tuutilsController")
public class TuUtilsController {
	
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Autowired
	private SysUserRoleAPI sysUserRoleAPI;
	@Autowired
	private SysUserAPI sysUserAPI;
	
	/**
     * 查询当前登录人所属工会信息
     * @return ModelAndView
     */
    @RequestMapping(value = "queryUserTuInfo")
    @ResponseBody
    public Map<String,Object> toQueryUserTuInfo(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<String,Object>();
        String userId = (String) request.getSession().getAttribute("userId");
        String sql = "select t.ID,t.LEAGUE_NAME,t.ATTRIBUTE_03 from dyn_trade_union_organiza t "
        		+ "where t.LEAGUE_NAME = (select t1.ATTRIBUTE_03 from dyn_trade_union_mb t1 where t1.user_id = '" + userId + "')";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        if (list != null && list.size() > 0) {
        	map.put("LEAGUE_ID", list.get(0).get("ID").toString());
            map.put("LEAGUE_NAME", list.get(0).get("LEAGUE_NAME").toString());
            map.put("LEAGUE_TYPE", list.get(0).get("ATTRIBUTE_03").toString());
        }else{
        	map.put("LEAGUE_ID", "");
            map.put("LEAGUE_NAME", "");
            map.put("LEAGUE_TYPE", "");
        }
        return map;
    }
    
    /**
     * 查询当前登录人是否为当前工会组织委员
     * @return ModelAndView
     */
    @RequestMapping(value = "queryUserIsZzwy")
    @ResponseBody
    public Map<String,Object> toQueryUserIsZzwy(HttpServletRequest request) {
    	Map<String,Object> map = new HashMap<String,Object>();
        String userId = (String) request.getSession().getAttribute("userId");
        String zzwyCode = "2";
        String sql = "select * from dyn_tu_organ_member t where t.USER_ID = '" + userId + "' and t.USER_POST = '" + zzwyCode + "'";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        if (list != null && list.size() > 0) {
            map.put("userPost", "Y");
        }else{
            map.put("userPost", "N");
        }
        return map;
    }
    
    /**
     * 查询当前登录人是否为当前工会某一职务
     * @return ModelAndView
     */
    @RequestMapping(value = "queryUserIsPost")
    @ResponseBody
    public Map<String,Object> toQueryUserIsPost(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<String,Object>();
        String userId = (String) request.getSession().getAttribute("userId");
        String userPost = ServletRequestUtils.getStringParameter(request, "userPost", "");
        if(!"".equals(userPost)){
        	String[] arr = userPost.split(",");
        	String userPostStr = "";
        	for (String str : arr) {
        		userPostStr += "'" + str + "',";
			}
        	userPostStr = userPostStr.substring(0, userPostStr.length()-1);
        	String sql = "select * from dyn_tu_organ_member t where t.USER_ID = '" + userId + "' and t.USER_POST in (" + userPostStr + ")";
            List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
            if (list != null && list.size() > 0) {
                map.put("userPost", "Y");
            }else{
                map.put("userPost", "N");
            }
        }
        return map;
    }

    
    /**
     * 查询当前用户所属党支部相对应职务列表
     * @return ModelAndView
     */
    @RequestMapping(value = "queryUserPartyIsPost")
    @ResponseBody
    public Map<String,Object> toQueryUserPartyIsPost(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<String,Object>();
        String userId = (String) request.getSession().getAttribute("userId");
        String userPost = ServletRequestUtils.getStringParameter(request, "userPost", "");
        if(!"".equals(userPost)){
        	String[] arr = userPost.split(",");
        	String userPostStr = "";
        	for (String str : arr) {
        		userPostStr += "'" + str + "',";
			}
        	userPostStr = userPostStr.substring(0, userPostStr.length()-1);
        	String sql = "select t1.name from PARTY_ORGAN_MEMBER t left join sys_user t1 on t.user_id = t1.id "
        			+ "where t.party_id = (select t2.party_id from party_member t2 where t2.user_id = '" 
        			+ userId + "') and t.user_post in (" + userPostStr + ")";
            List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
            String userStr = "";
            if (list != null && list.size() > 0) {
            	for (Map<String, Object> users : list) {
            		userStr += users.get("NAME").toString() + ",";
				}
            	userStr = userStr.substring(0, userStr.length()-1);
            }
            map.put("userStr", userStr);
        }
        return map;
    }
    
    
    /**
     * 给指定角色加指定用户
     * @return ModelAndView
     */
    @RequestMapping(value = "insertRoueUser")
    @ResponseBody
    public Map<String,Object> toInsertRoueUser(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<String,Object>();
        //该表col2为loginname
    	String sql = "select * from aaaa_001 t";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        if (list != null && list.size() > 0) {
        	for (Map<String, Object> users : list) {
        		String loginName = users.get("COL2").toString();
        		SysUser user = sysUserAPI.getSysUserByLoginName(loginName);
        		SysUserRole su = new SysUserRole();
                su.setSysRoleId("948e83e3968496cf0196ae59c0a9408c");
                su.setSysUserId(user.getId());
                su.setId(ComUtil.getId());
                su.setSysApplicationId("1");
    			PojoUtil.setSysProperties(su, OpType.insert);
                sysUserRoleAPI.insertSysUserRole(su);
			}
        }
        return map;
    }
    
    
    /************************************************   职工爱心医疗互助基金报销     start  **********************************************************/
    
    /**
     * 职工爱心医疗互助基金报销汇总导出数据
     *
     * @return Map<String, Object>
     * @throws Exception 
     */
    @RequestMapping(value = "/exportExcelsByMedicine", method = RequestMethod.POST)
    public void exportExcelsByMedicine(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	String drafYear = ServletRequestUtils.getStringParameter(request, "drafYear", "");
    	String creationDateStart = ServletRequestUtils.getStringParameter(request, "creationDateStart", "");
    	String creationDateEnd = ServletRequestUtils.getStringParameter(request, "creationDateEnd", "");
    	String excelName = "职工爱心医疗互助基金报销汇总";
    	HSSFWorkbook workbook = new HSSFWorkbook();
    	HSSFSheet sheet = workbook.createSheet(excelName);
    	createSheet(workbook, sheet);
    	
    	String sql = "select t.*,t1.name,t2.lookup_name,t3.businessstate_,t3.activityalias_,t3.assigneenames_ from DA_CARE_MEDICINE t "
    			+ "left join sys_user t1 on t.patienter_id = t1.id "
    			+ "left join sys_lookup_v t2 on t2.lookup_type = 'DISEASE_TYPE' and t.disease_type = t2.lookup_code "
    			+ "left join sys_bpm_hist_procinst t3 on t.id = t3.formid_ ";
    	String wh1 = "t.draf_year = '" + drafYear + "' ";
    	String wh2 = "t.creation_date >= to_date('" + creationDateStart + "', 'yyyy-MM-dd') ";
    	String wh3 = "t.creation_date <= to_date('" + creationDateEnd + "', 'yyyy-MM-dd') ";
    	if(!"".equals(drafYear) && !"".equals(creationDateStart) && !"".equals(creationDateEnd)){
    		sql += "where " + wh1 + "and " + wh2 + "and " + wh3;
    	}else if(!"".equals(drafYear) && !"".equals(creationDateStart)){
    		sql += "where " + wh1 + "and " + wh2;
    	}else if(!"".equals(drafYear) && !"".equals(creationDateEnd)){
    		sql += "where " + wh1 + "and " + wh3;
    	}else if(!"".equals(creationDateStart) && !"".equals(creationDateEnd)){
    		sql += "where " + wh2 + "and " + wh3;
    	}else if(!"".equals(drafYear) || !"".equals(creationDateStart) || !"".equals(creationDateEnd)){
    		sql += "where ";
    		if(!"".equals(drafYear)){
        		sql += wh1;
        	}
        	if(!"".equals(creationDateStart)){
        		sql += wh2;
        	}
        	if(!"".equals(creationDateEnd)){
        		sql += wh3;
        	}
    	}
    	sql += "order by t.creation_date desc";
    	List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    	if(list != null && list.size() > 0){
    		int indexRow = 1;
    		for (Map<String, Object> map : list) {
    			String subSql = "select * from DA_CARE_MEDICINE_ITEM t where t.fk_id = '" + map.get("ID").toString() + "' order by t.inhosp_date desc";
    			List<Map<String, Object>> subList = jdbcTemplate.queryForList(subSql);
    			insertSheel(workbook, sheet, map, subList, indexRow);
    			indexRow++;
			}
    	}
    	response.reset();
    	response.addHeader("Content-Disposition", "attachment;filename=" + new String(excelName.getBytes("gb2312"), "ISO8859-1") + ".xls");
    	OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
    	response.setContentType("application/vnd.ms-excel;charset=gb2312");
    	workbook.write(toClient);
    	toClient.close();
    }
    
    
    /**
     * 创建表头
     * @param workbook
     * @param sheet
     */
    private static void createSheet(HSSFWorkbook workbook, HSSFSheet sheet){
    	String[] title = {"表单编码", "年度", "申请人", "申请时间", "申请部门", "患者姓名", "患者性别", "患者年龄", "联系方式", "疾病类型", "患病名称",
    			"报销职工卡号", "开户银行", "是否多条住院信息", "治疗医院", "住院日期开始", "住院日期结束", "医疗费金额", "统筹资金支付", "统筹基金支付总金额", 
    			"个人支付金额", "申请报销金额", "医疗费总金额", "报销比例", "流程状态", "流程当前步骤", "流程当前处理人"};
    	HSSFRow row = sheet.createRow(0);
    	for (int j = 0; j < title.length; j++) {
    		sheet.setColumnWidth(j, 4500);
    		HSSFCell tempCell = row.createCell(j);
    		tempCell.setCellValue(title[j]);
			tempCell.setCellStyle(setStyleTitle(workbook));
    	}
    	row.setHeightInPoints(35);
    }
    
    /**
     * 添加数据
     * @param workbook
     * @param sheet
     * @param map
     * @param indexRow
     */
    private void insertSheel(HSSFWorkbook workbook, HSSFSheet sheet, Map<String, Object> map, List<Map<String, Object>> subList, int indexRow){
    	String[] title = {"表单编码", "年度", "申请人", "申请时间", "申请部门", "患者姓名", "患者性别", "患者年龄", "联系方式", "疾病类型", "患病名称",
    			"报销职工卡号", "开户银行", "是否多条住院信息", "治疗医院", "住院日期开始", "住院日期结束", "医疗费金额", "统筹资金支付", "统筹基金支付总金额",
    			"个人支付金额", "申请报销金额", "医疗费总金额", "报销比例", "流程状态", "流程当前步骤", "流程当前处理人"};
    	String autoCode = map.get("AUTO_CODE") == null ? "" : map.get("AUTO_CODE").toString();
    	String drafYear = map.get("DRAF_YEAR") == null ? "" : map.get("DRAF_YEAR").toString();
    	String drafUser = map.get("DRAF_USER") == null ? "" : map.get("DRAF_USER").toString();
    	String drafDate = map.get("DRAF_DATE") == null ? "" : map.get("DRAF_DATE").toString();
    	String drafDept = map.get("DRAF_DEPT") == null ? "" : map.get("DRAF_DEPT").toString();
    	String name = map.get("NAME") == null ? "" : map.get("NAME").toString();
    	String patientSex = map.get("PATIENT_SEX") == null ? "" : map.get("PATIENT_SEX").toString();
    	if("1".equals(patientSex)){
    		patientSex = "男";
    	}else if("2".equals(patientSex)){
    		patientSex = "女";
    	}
    	String patientAge = map.get("PATIENT_AGE") == null ? "" : map.get("PATIENT_AGE").toString();
    	String patientTel = map.get("PATIENT_TEL") == null ? "" : map.get("PATIENT_TEL").toString();
    	String diseaseType = map.get("LOOKUP_NAME") == null ? "" : map.get("LOOKUP_NAME").toString();
    	String disease = map.get("DISEASE") == null ? "" : map.get("DISEASE").toString();
    	String employeeCard = map.get("EMPLOYEE_CARD") == null ? "" : map.get("EMPLOYEE_CARD").toString();
    	String depositBank = map.get("DEPOSIT_BANK") == null ? "" : map.get("DEPOSIT_BANK").toString();
    	if("0".equals(depositBank)){
    		depositBank = "交通银行";
    	}else if("1".equals(depositBank)){
    		depositBank = "招商银行";
    	}
    	String isMoreData = "否";
    	String hospital = "";
    	String inhospDate = "";
    	String outhospDate = "";
    	String subHealthExpense = "";
    	String subOverallExpenes = "";
    	if(subList != null && subList.size() > 0){
    		if(subList.size() > 1){
    			isMoreData = "是";
    			for (Map<String, Object> subMap : subList) {
        			String tempHospital = subMap.get("HOSPITAL") == null ? "" : subMap.get("HOSPITAL").toString();  
        	    	String tempInhospDate = subMap.get("INHOSP_DATE") == null ? "" : subMap.get("INHOSP_DATE").toString().substring(0, 10);
        	    	String tempOuthospDate = subMap.get("OUTHOSP_DATE") == null ? "" : subMap.get("OUTHOSP_DATE").toString().substring(0, 10);
        	    	String tempHealthExpense = subMap.get("HEALTH_EXPENSE") == null ? "" : subMap.get("HEALTH_EXPENSE").toString();
        	    	String tempOverallExpenes = subMap.get("OVERALL_EXPENSE") == null ? "" : subMap.get("OVERALL_EXPENSE").toString();
        	    	hospital = hospital + "/" + tempHospital;
        	    	inhospDate = inhospDate + "/" + tempInhospDate;
        	    	outhospDate = outhospDate + "/" + tempOuthospDate;
        	    	subHealthExpense = subHealthExpense + "/" + tempHealthExpense;
        	    	subOverallExpenes = subOverallExpenes + "/" + tempOverallExpenes;
    			}
    			hospital = hospital.substring(1, hospital.length());
    			inhospDate = inhospDate.substring(1, inhospDate.length());
    			outhospDate = outhospDate.substring(1, outhospDate.length());
    			subHealthExpense = subHealthExpense.substring(1, subHealthExpense.length());
    			subOverallExpenes = subOverallExpenes.substring(1, subOverallExpenes.length());
    		}else{
    			hospital = subList.get(0).get("HOSPITAL") == null ? "" : subList.get(0).get("HOSPITAL").toString();  
    			inhospDate = subList.get(0).get("INHOSP_DATE") == null ? "" : subList.get(0).get("INHOSP_DATE").toString().substring(0, 10);
    			outhospDate = subList.get(0).get("OUTHOSP_DATE") == null ? "" : subList.get(0).get("OUTHOSP_DATE").toString().substring(0, 10);
    			subHealthExpense = subList.get(0).get("HEALTH_EXPENSE") == null ? "" : subList.get(0).get("HEALTH_EXPENSE").toString();
    			subOverallExpenes = subList.get(0).get("OVERALL_EXPENSE") == null ? "" : subList.get(0).get("OVERALL_EXPENSE").toString();
    		}
    	}
    	String overallExpenes = map.get("OVERALL_EXPENSES") == null ? "" : map.get("OVERALL_EXPENSES").toString();
    	String personExpenses = map.get("PERSON_EXPENSES") == null ? "" : map.get("PERSON_EXPENSES").toString();
    	String submitExpenses = map.get("SUBMIT_EXPENSES") == null ? "" : map.get("SUBMIT_EXPENSES").toString();
    	String healthExpenses = map.get("HEALTH_EXPENSES") == null ? "" : map.get("HEALTH_EXPENSES").toString();
    	String bxbl = map.get("BXBL") == null ? "" : map.get("BXBL").toString();
    	String bpmStatus = map.get("BUSINESSSTATE_") == null ? "" : map.get("BUSINESSSTATE_").toString();
    	if("start".equals(bpmStatus)){
    		bpmStatus = "拟稿中";
    	}else if("active".equals(bpmStatus)){
    		bpmStatus = "流转中";
    	}else if("ended".equals(bpmStatus)){
    		bpmStatus = "已完成";
    	}
    	String bpmActivityAlias = map.get("ACTIVITYALIAS_") == null ? "" : map.get("ACTIVITYALIAS_").toString();
    	String bpmAssigneeNames = map.get("ASSIGNEENAMES_") == null ? "" : map.get("ASSIGNEENAMES_").toString();
    	
    	HSSFRow row = sheet.createRow(indexRow);
    	row.setHeightInPoints(25);
		for (int i = 0; i < title.length; i++) {
			HSSFCell tempCell = row.createCell(i);
			if(i == 0) tempCell.setCellValue(autoCode);
			if(i == 1) tempCell.setCellValue(drafYear);
			if(i == 2) tempCell.setCellValue(drafUser);
			if(i == 3) tempCell.setCellValue(drafDate);
			if(i == 4) tempCell.setCellValue(drafDept);
			if(i == 5) tempCell.setCellValue(name);
			if(i == 6) tempCell.setCellValue(patientSex);
			if(i == 7) tempCell.setCellValue(patientAge);
			if(i == 8) tempCell.setCellValue(patientTel);
			if(i == 9) tempCell.setCellValue(diseaseType);
			if(i == 10) tempCell.setCellValue(disease);
			if(i == 11) tempCell.setCellValue(employeeCard);
			if(i == 12) tempCell.setCellValue(depositBank);
			if(i == 13) tempCell.setCellValue(isMoreData);
			if(i == 14) tempCell.setCellValue(hospital);
			if(i == 15) tempCell.setCellValue(inhospDate);
			if(i == 16) tempCell.setCellValue(outhospDate);
			if(i == 17) tempCell.setCellValue(subHealthExpense);
			if(i == 18) tempCell.setCellValue(subOverallExpenes);
			if(i == 19) tempCell.setCellValue(overallExpenes);
			if(i == 20) tempCell.setCellValue(personExpenses);
			if(i == 21) tempCell.setCellValue(submitExpenses);
			if(i == 22) tempCell.setCellValue(healthExpenses);
			if(i == 23) tempCell.setCellValue(bxbl);
			if(i == 24) tempCell.setCellValue(bpmStatus);
			if(i == 25) tempCell.setCellValue(bpmActivityAlias);
			if(i == 26) tempCell.setCellValue(bpmAssigneeNames);
			//tempCell.setCellStyle(setStyleTitle(workbook));
    	}
    }
   
    /************************************************   职工爱心医疗互助基金报销     end  **********************************************************/
    
   
    
    /************************************************  开展技术比武活动/岗位练兵记录     start  ******************************************************/
    /**
     * 开展技术比武活动/岗位练兵记录单条导出数据
     *
     * @return Map<String, Object>
     * @throws Exception 
     */
    @RequestMapping(value = "/exportExcelsByKzjsbwhdByOne", method = RequestMethod.POST)
    public void exportExcelsByKzjsbwhdByOne(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	String id = ServletRequestUtils.getStringParameter(request, "id", "");
    	String excelName = "开展技术比武活动、岗位练兵记录";
    	String sql = "SELECT T.*,T1.LOOKUP_NAME FROM DYN_JSJN_BWHD T LEFT JOIN SYS_LOOKUP_V T1 ON T.POSITION_TYPE = T1.LOOKUP_CODE "
    			+ "AND T1.LOOKUP_TYPE = 'GUILD_JSJN_POSITION' WHERE T.ID = '" + id + "'";
    	List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    	HSSFWorkbook workbook = new HSSFWorkbook();
    	if(list != null && list.size() > 0){
    		for (Map<String, Object> map : list) {
    			String subSql = "SELECT T.*,T1.LOOKUP_NAME FROM DYN_JSJN_BWHD_SUB T LEFT JOIN SYS_LOOKUP_V T1 ON T.USER_SEX = T1.LOOKUP_CODE "
    					+ "AND T1.LOOKUP_TYPE = 'PLATFORM_SEX' WHERE T.FK_ID = '" + map.get("ID").toString() + "' ORDER BY T.XH ASC";
    			List<Map<String, Object>> subList = jdbcTemplate.queryForList(subSql);
    	    	HSSFSheet sheet = workbook.createSheet(map.get("APP_CODE").toString());
    	    	HSSFFont font = workbook.createFont();
    	    	font.setFontName("宋体");
    	    	font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
    	    	font.setFontHeightInPoints((short) 16);
    	    	font.setColor(HSSFFont.COLOR_NORMAL);
    	    	HSSFRow row = sheet.createRow(0);
    	    	int colNum = 6;
    	    	for (int i = 0; i < colNum; i++) {
    	    		sheet.setColumnWidth(i, 6000);
    			}
    			HSSFCell tempCell = row.createCell(0);
    			tempCell.setCellValue("开展技术比武活动/岗位练兵记录");
    			tempCell.setCellStyle(setStyleTitle(workbook, font));
    	    	row.setHeightInPoints(35);
    	    	sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 5));
    			insertKzjsbwhdSheel(workbook, sheet, map, subList);
			}
    	}
    	response.reset();
    	response.addHeader("Content-Disposition", "attachment;filename=" + new String(excelName.getBytes("gb2312"), "ISO8859-1") + ".xls");
    	OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
    	response.setContentType("application/vnd.ms-excel;charset=gb2312");
    	workbook.write(toClient);
    	toClient.close();
    }
    
    
    /**
     * 开展技术比武活动/岗位练兵记录多条导出数据
     *
     * @return Map<String, Object>
     * @throws Exception 
     */
    @RequestMapping(value = "/exportExcelsByKzjsbwhdBySelect", method = RequestMethod.POST)
    public void exportExcelsByKzjsbwhdBySelect(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	String ids = ServletRequestUtils.getStringParameter(request, "ids", "");
    	String excelName = "开展技术比武活动、岗位练兵记录";
    	String[] idArr = ids.split(",");
    	String newIds = "";
    	for (String str : idArr) {
    		newIds = newIds + "'" + str + "',";
		}
    	newIds = newIds.substring(0, newIds.length()-1);
    	String sql = "SELECT T.*,T1.LOOKUP_NAME FROM DYN_JSJN_BWHD T LEFT JOIN SYS_LOOKUP_V T1 ON T.POSITION_TYPE = T1.LOOKUP_CODE "
    			+ "AND T1.LOOKUP_TYPE = 'GUILD_JSJN_POSITION' WHERE T.ID IN (" + newIds + ") ORDER BY T.CREATION_DATE DESC";
    	List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    	HSSFWorkbook workbook = new HSSFWorkbook();
    	if(list != null && list.size() > 0){
    		for (Map<String, Object> map : list) {
    			String subSql = "SELECT T.*,T1.LOOKUP_NAME FROM DYN_JSJN_BWHD_SUB T LEFT JOIN SYS_LOOKUP_V T1 ON T.USER_SEX = T1.LOOKUP_CODE "
    					+ "AND T1.LOOKUP_TYPE = 'PLATFORM_SEX' WHERE T.FK_ID = '" + map.get("ID").toString() + "' ORDER BY T.XH ASC";
    			List<Map<String, Object>> subList = jdbcTemplate.queryForList(subSql);
    	    	HSSFSheet sheet = workbook.createSheet(map.get("APP_CODE").toString());
    	    	HSSFFont font = workbook.createFont();
    	    	font.setFontName("宋体");
    	    	font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
    	    	font.setFontHeightInPoints((short) 16);
    	    	font.setColor(HSSFFont.COLOR_NORMAL);
    	    	HSSFRow row = sheet.createRow(0);
    	    	int colNum = 6;
    	    	for (int i = 0; i < colNum; i++) {
    	    		sheet.setColumnWidth(i, 6000);
    			}
    			HSSFCell tempCell = row.createCell(0);
    			tempCell.setCellValue("开展技术比武活动/岗位练兵记录");
    			tempCell.setCellStyle(setStyleTitle(workbook, font));
    	    	row.setHeightInPoints(35);
    	    	sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 5));
    			insertKzjsbwhdSheel(workbook, sheet, map, subList);
			}
    	}
    	response.reset();
    	response.addHeader("Content-Disposition", "attachment;filename=" + new String(excelName.getBytes("gb2312"), "ISO8859-1") + ".xls");
    	OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
    	response.setContentType("application/vnd.ms-excel;charset=gb2312");
    	workbook.write(toClient);
    	toClient.close();
    }
    
    
    /**
     * 开展技术比武活动/岗位练兵记录导出--添加数据
     * @param workbook
     * @param sheet
     * @param map
     */
    private void insertKzjsbwhdSheel(HSSFWorkbook workbook, HSSFSheet sheet, Map<String, Object> map, List<Map<String, Object>> subList){
    	String appDate = map.get("APP_DATE") == null ? "" : map.get("APP_DATE").toString().substring(0, 10);
    	String appCode = map.get("APP_CODE") == null ? "" : map.get("APP_CODE").toString();
    	String appUser = map.get("APP_USER") == null ? "" : map.get("APP_USER").toString();
    	String appDept = map.get("APP_DEPT") == null ? "" : map.get("APP_DEPT").toString();
    	String tel = map.get("TEL") == null ? "" : map.get("TEL").toString();
    	String attendance = map.get("ATTENDANCE") == null ? "" : map.get("ATTENDANCE").toString();
    	String positionType = map.get("LOOKUP_NAME") == null ? "" : map.get("LOOKUP_NAME").toString();
    	String bwPosition = map.get("BW_POSITION") == null ? "" : map.get("BW_POSITION").toString();
    	String subject = map.get("SUBJECT") == null ? "" : map.get("SUBJECT").toString();
    	String activityProgramme = map.get("ACTIVITY_PROGRAMME") == null ? "" : map.get("ACTIVITY_PROGRAMME").toString();
    	String activityEffectiveness = map.get("ACTIVITY_EFFECTIVENESS") == null ? "" : map.get("ACTIVITY_EFFECTIVENESS").toString();
    	String remark = map.get("REMANR") == null ? "" : map.get("REMANR").toString();
    	
    	int rowNum = 1;
    	int subListSize = 0;
    	//第一行
    	HSSFRow row1 = sheet.createRow(rowNum);
    	row1.setHeightInPoints(25);
    	HSSFCell tempCell10 = row1.createCell(0);
    	tempCell10.setCellValue("申请日期：");
    	tempCell10.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell11 = row1.createCell(1);
    	tempCell11.setCellValue(appDate);
    	tempCell11.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 1, 2));
    	HSSFCell tempCell12 = row1.createCell(2);
    	tempCell12.setCellValue("");
    	tempCell12.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell13 = row1.createCell(3);
    	tempCell13.setCellValue("表单编号：");
    	tempCell13.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell14 = row1.createCell(4);
    	tempCell14.setCellValue(appCode);
    	tempCell14.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 4, 5));
    	HSSFCell tempCell15 = row1.createCell(5);
    	tempCell15.setCellValue("");
    	tempCell15.setCellStyle(setStyleContent(workbook, "right"));
    	rowNum++;
    	//第二行
    	HSSFRow row2 = sheet.createRow(rowNum);
    	row2.setHeightInPoints(25);
    	HSSFCell tempCell20 = row2.createCell(0);
    	tempCell20.setCellValue("申请人：");
    	tempCell20.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell21 = row2.createCell(1);
    	tempCell21.setCellValue(appUser);
    	tempCell21.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 1, 2));
    	HSSFCell tempCell22 = row2.createCell(2);
    	tempCell22.setCellValue("");
    	tempCell22.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell23 = row2.createCell(3);
    	tempCell23.setCellValue("所在单位：");
    	tempCell23.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell24 = row2.createCell(4);
    	tempCell24.setCellValue(appDept);
    	tempCell24.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 4, 5));
    	HSSFCell tempCell25 = row2.createCell(5);
    	tempCell25.setCellValue("");
    	tempCell25.setCellStyle(setStyleContent(workbook, "left"));
    	rowNum++;
    	//第三行
    	HSSFRow row3 = sheet.createRow(rowNum);
    	row3.setHeightInPoints(25);
    	HSSFCell tempCell30 = row3.createCell(0);
    	tempCell30.setCellValue("联系电话：");
    	tempCell30.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell31 = row3.createCell(1);
    	tempCell31.setCellValue(tel);
    	tempCell31.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 1, 2));
    	HSSFCell tempCell32 = row3.createCell(2);
    	tempCell32.setCellValue("");
    	tempCell32.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell33 = row3.createCell(3);
    	tempCell33.setCellValue("参加人数：");
    	tempCell33.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell34 = row3.createCell(4);
    	tempCell34.setCellValue(attendance);
    	tempCell34.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 4, 5));
    	HSSFCell tempCell35 = row3.createCell(5);
    	tempCell35.setCellValue("");
    	tempCell35.setCellStyle(setStyleContent(workbook, "right"));
    	rowNum++;
    	//第四行
    	HSSFRow row4 = sheet.createRow(rowNum);
    	row4.setHeightInPoints(25);
    	HSSFCell tempCell40 = row4.createCell(0);
    	tempCell40.setCellValue("岗位类型：");
    	tempCell40.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell41 = row4.createCell(1);
    	tempCell41.setCellValue(positionType);
    	tempCell41.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 1, 2));
    	HSSFCell tempCell42 = row4.createCell(2);
    	tempCell42.setCellValue("");
    	tempCell42.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell43 = row4.createCell(3);
    	tempCell43.setCellValue("");
    	tempCell43.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell44 = row4.createCell(4);
    	tempCell44.setCellValue("");
    	tempCell44.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 4, 5));
    	HSSFCell tempCell45 = row4.createCell(5);
    	tempCell45.setCellValue("");
    	tempCell45.setCellStyle(setStyleContent(workbook, "left"));
    	rowNum++;
    	//第五行
    	HSSFRow row5 = sheet.createRow(rowNum);
    	row5.setHeightInPoints(25);
    	HSSFCell tempCell50 = row5.createCell(0);
    	tempCell50.setCellValue("比武岗位：");
    	tempCell50.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell51 = row5.createCell(1);
    	tempCell51.setCellValue(bwPosition);
    	tempCell51.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 1, 2));
    	HSSFCell tempCell52 = row5.createCell(2);
    	tempCell52.setCellValue("");
    	tempCell52.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell53 = row5.createCell(3);
    	tempCell53.setCellValue("主题：");
    	tempCell53.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell54 = row5.createCell(4);
    	tempCell54.setCellValue(subject);
    	tempCell54.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 4, 5));
    	HSSFCell tempCell55 = row5.createCell(5);
    	tempCell55.setCellValue("");
    	tempCell55.setCellStyle(setStyleContent(workbook, "left"));
    	rowNum++;
    	//第六行
    	HSSFRow row6 = sheet.createRow(rowNum);
    	row6.setHeightInPoints(100);
    	HSSFCell tempCell60 = row6.createCell(0);
    	tempCell60.setCellValue("活动方案：");
    	tempCell60.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell61 = row6.createCell(1);
    	tempCell61.setCellValue(activityProgramme);
    	tempCell61.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 1, 5));
    	HSSFCell tempCell62 = row6.createCell(2);
    	tempCell62.setCellValue("");
    	tempCell62.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell63 = row6.createCell(3);
    	tempCell63.setCellValue("");
    	tempCell63.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell64 = row6.createCell(4);
    	tempCell64.setCellValue("");
    	tempCell64.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell65 = row6.createCell(5);
    	tempCell65.setCellValue("");
    	tempCell65.setCellStyle(setStyleContent(workbook, "left"));
    	rowNum++;
    	//第七行
    	HSSFRow row7 = sheet.createRow(rowNum);
    	row7.setHeightInPoints(100);
    	HSSFCell tempCell70 = row7.createCell(0);
    	tempCell70.setCellValue("活动效果：");
    	tempCell70.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell71 = row7.createCell(1);
    	tempCell71.setCellValue(activityEffectiveness);
    	tempCell71.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 1, 5));
    	HSSFCell tempCell72 = row7.createCell(2);
    	tempCell72.setCellValue("");
    	tempCell72.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell73 = row7.createCell(3);
    	tempCell73.setCellValue("");
    	tempCell73.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell74 = row7.createCell(4);
    	tempCell74.setCellValue("");
    	tempCell74.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell75 = row7.createCell(5);
    	tempCell75.setCellValue("");
    	tempCell75.setCellStyle(setStyleContent(workbook, "left"));
    	rowNum++;
    	if(subList != null && subList.size() > 0){
    		//第八行   子表表头
        	HSSFRow row8 = sheet.createRow(rowNum);
        	row8.setHeightInPoints(25);
        	HSSFCell tempCell81 = row8.createCell(0);
        	tempCell81.setCellValue("获奖名次：");
        	tempCell81.setCellStyle(setStyleContent(workbook, "right"));
        	HSSFCell tempCell82 = row8.createCell(1);
        	tempCell82.setCellValue("序号");
        	tempCell82.setCellStyle(setStyleContent(workbook, "center"));
        	HSSFCell tempCell83 = row8.createCell(2);
        	tempCell83.setCellValue("参赛工种");
        	tempCell83.setCellStyle(setStyleContent(workbook, "center"));
        	HSSFCell tempCell84 = row8.createCell(3);
        	tempCell84.setCellValue("姓名");
        	tempCell84.setCellStyle(setStyleContent(workbook, "center"));
        	HSSFCell tempCell85 = row8.createCell(4);
        	tempCell85.setCellValue("性别");
        	tempCell85.setCellStyle(setStyleContent(workbook, "center"));
        	HSSFCell tempCell86 = row8.createCell(5);
        	tempCell86.setCellValue("获奖名次");
        	tempCell86.setCellStyle(setStyleContent(workbook, "center"));
        	rowNum++;
			for (Map<String, Object> subMap : subList) {
    			String xh = subMap.get("XH") == null ? "" : subMap.get("XH").toString();  
    	    	String showGz = subMap.get("SHOW_GZ") == null ? "" : subMap.get("SHOW_GZ").toString();
    	    	String userName = subMap.get("USER_NAME") == null ? "" : subMap.get("USER_NAME").toString();
    	    	String userSex = subMap.get("LOOKUP_NAME") == null ? "" : subMap.get("LOOKUP_NAME").toString();
    	    	String winnersRanking = subMap.get("WINNERS_RANKING") == null ? "" : subMap.get("WINNERS_RANKING").toString();
    	    	//第九行开始循环子表数据
    	    	HSSFRow tempRow = sheet.createRow(rowNum);
    	    	tempRow.setHeightInPoints(25);
    	    	HSSFCell tempCell1 = tempRow.createCell(1);
    	    	tempCell1.setCellValue(xh);
    	    	tempCell1.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell2 = tempRow.createCell(2);
    	    	tempCell2.setCellValue(showGz);
    	    	tempCell2.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell3 = tempRow.createCell(3);
    	    	tempCell3.setCellValue(userName);
    	    	tempCell3.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell4 = tempRow.createCell(4);
    	    	tempCell4.setCellValue(userSex);
    	    	tempCell4.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell5 = tempRow.createCell(5);
    	    	tempCell5.setCellValue(winnersRanking);
    	    	tempCell5.setCellStyle(setStyleContent(workbook, "center"));
    	    	rowNum++;
    	    	subListSize++;
			}
			sheet.addMergedRegion(new CellRangeAddress(rowNum-subListSize-1, rowNum-1, 0, 0));
    	}
    	//最后一行
    	HSSFRow row9 = sheet.createRow(rowNum);
    	row9.setHeightInPoints(50);
    	HSSFCell tempCell90 = row9.createCell(0);
    	tempCell90.setCellValue("备注：");
    	tempCell90.setCellStyle(setStyleContent(workbook, "right"));
    	HSSFCell tempCell91 = row9.createCell(1);
    	tempCell91.setCellValue(remark);
    	tempCell91.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 1, 5));
    	HSSFCell tempCell92 = row9.createCell(2);
    	tempCell92.setCellValue("");
    	tempCell92.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell93 = row9.createCell(3);
    	tempCell93.setCellValue("");
    	tempCell93.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell94 = row9.createCell(4);
    	tempCell94.setCellValue("");
    	tempCell94.setCellStyle(setStyleContent(workbook, "left"));
    	HSSFCell tempCell95 = row9.createCell(5);
    	tempCell95.setCellValue("");
    	tempCell95.setCellStyle(setStyleContent(workbook, "left"));
    }
    
   
    
    
    /************************************************  开展技术比武活动/岗位练兵记录     end  ********************************************************/
    
    
    /************************************************   技术技能竞赛报名表   start   **********************************************************/
    /**
     * 技术技能竞赛报名表单条导出数据
     *
     * @return Map<String, Object>
     * @throws Exception 
     */
    @RequestMapping(value = "/exportExcelsByJsjnjsbmByOne", method = RequestMethod.POST)
    public void exportExcelsByJsjnjsbmByOne(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	String id = ServletRequestUtils.getStringParameter(request, "id", "");
    	String excelName = "技术技能竞赛报名表";
    	String sql = "SELECT T.*,T1.LOOKUP_NAME FROM DYN_JSJN_JSBM T LEFT JOIN SYS_LOOKUP_V T1 ON T.POSITION_TYPE = T1.LOOKUP_CODE "
    			+ "AND T1.LOOKUP_TYPE = 'GUILD_JSJN_POSITION' WHERE T.ID = '" + id + "'";
    	List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    	HSSFWorkbook workbook = new HSSFWorkbook();
    	if(list != null && list.size() > 0){
    		for (Map<String, Object> map : list) {
    			String subSql = "SELECT T.*,T1.LOOKUP_NAME FROM DYN_JSJN_JSBM_SUB T LEFT JOIN SYS_LOOKUP_V T1 ON T.SEX = T1.LOOKUP_CODE "
    					+ "AND T1.LOOKUP_TYPE = 'PLATFORM_SEX' WHERE T.FK_ID = '" + map.get("ID").toString() + "' ORDER BY T.XH ASC";
    			List<Map<String, Object>> subList = jdbcTemplate.queryForList(subSql);
    	    	HSSFSheet sheet = workbook.createSheet(map.get("APP_CODE").toString());
    	    	createJsjnjsbmTitle(workbook, sheet, excelName);
    			insertJsjnjsbmSheel(workbook, sheet, map, subList);
			}
    	}
    	response.reset();
    	response.addHeader("Content-Disposition", "attachment;filename=" + new String(excelName.getBytes("gb2312"), "ISO8859-1") + ".xls");
    	OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
    	response.setContentType("application/vnd.ms-excel;charset=gb2312");
    	workbook.write(toClient);
    	toClient.close();
    }
    
    
    /**
     * 技术技能竞赛报名表多条导出数据
     *
     * @return Map<String, Object>
     * @throws Exception 
     */
    @RequestMapping(value = "/exportExcelsByJsjnjsbmBySelect", method = RequestMethod.POST)
    public void exportExcelsByJsjnjsbmBySelect(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	String ids = ServletRequestUtils.getStringParameter(request, "ids", "");
    	String excelName = "技术技能竞赛报名表";
    	String[] idArr = ids.split(",");
    	String newIds = "";
    	for (String str : idArr) {
    		newIds = newIds + "'" + str + "',";
		}
    	newIds = newIds.substring(0, newIds.length()-1);
    	String sql = "SELECT T.*,T1.LOOKUP_NAME FROM DYN_JSJN_JSBM T LEFT JOIN SYS_LOOKUP_V T1 ON T.POSITION_TYPE = T1.LOOKUP_CODE "
    			+ "AND T1.LOOKUP_TYPE = 'GUILD_JSJN_POSITION' WHERE T.ID IN (" + newIds + ") ORDER BY T.CREATION_DATE DESC";
    	List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    	HSSFWorkbook workbook = new HSSFWorkbook();
    	if(list != null && list.size() > 0){
    		for (Map<String, Object> map : list) {
    			String subSql = "SELECT T.*,T1.LOOKUP_NAME FROM DYN_JSJN_JSBM_SUB T LEFT JOIN SYS_LOOKUP_V T1 ON T.SEX = T1.LOOKUP_CODE "
    					+ "AND T1.LOOKUP_TYPE = 'PLATFORM_SEX' WHERE T.FK_ID = '" + map.get("ID").toString() + "' ORDER BY T.XH ASC";
    			List<Map<String, Object>> subList = jdbcTemplate.queryForList(subSql);
    	    	HSSFSheet sheet = workbook.createSheet(map.get("APP_CODE").toString());
    	    	createJsjnjsbmTitle(workbook, sheet, excelName);
    			insertJsjnjsbmSheel(workbook, sheet, map, subList);
			}
    	}
    	response.reset();
    	response.addHeader("Content-Disposition", "attachment;filename=" + new String(excelName.getBytes("gb2312"), "ISO8859-1") + ".xls");
    	OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
    	response.setContentType("application/vnd.ms-excel;charset=gb2312");
    	workbook.write(toClient);
    	toClient.close();
    }
    
    /**
     * 技术技能竞赛报名表--创建标题、单元格宽度
     * @param workbook
     * @param sheet
     */
    private static void createJsjnjsbmTitle(HSSFWorkbook workbook, HSSFSheet sheet, String title){
    	HSSFRow row = sheet.createRow(0);
    	for (int i = 0; i < 11; i++) {
    		if(i == 0){
    			sheet.setColumnWidth(i, 3000);
    		}else if(i == 3){
    			sheet.setColumnWidth(i, 3000);
    		}else if(i == 8){
    			sheet.setColumnWidth(i, 6000);
    		}else{
    			sheet.setColumnWidth(i, 4500);
    		}
    	}
    	HSSFFont font = workbook.createFont();
    	font.setFontName("宋体");
    	font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
    	font.setFontHeightInPoints((short) 16);
    	font.setColor(HSSFFont.COLOR_NORMAL);
    	
    	HSSFCell tempCell = row.createCell(0);
		tempCell.setCellValue(title);
		tempCell.setCellStyle(setStyleTitle(workbook, font));
    	row.setHeightInPoints(35);
    	sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 10));
    }
    
    
    /**
     * 技术技能竞赛报名表导出--添加数据
     * @param workbook
     * @param sheet
     * @param map
     * @param subList
     */
    private void insertJsjnjsbmSheel(HSSFWorkbook workbook, HSSFSheet sheet, Map<String, Object> map, List<Map<String, Object>> subList){
    	String appDate = map.get("APP_DATE") == null ? "" : map.get("APP_DATE").toString().substring(0, 10);
    	String appCode = map.get("APP_CODE") == null ? "" : map.get("APP_CODE").toString();
    	String appUser = map.get("APP_USER") == null ? "" : map.get("APP_USER").toString();
    	String appDept = map.get("APP_DEPT") == null ? "" : map.get("APP_DEPT").toString();
    	String tel = map.get("TEL") == null ? "" : map.get("TEL").toString();
    	String attendance = map.get("ATTENDANCE") == null ? "" : map.get("ATTENDANCE").toString();
    	String positionType = map.get("LOOKUP_NAME") == null ? "" : map.get("LOOKUP_NAME").toString();
    	
    	int rowNum = 1;
    	//第一行
    	HSSFRow row1 = sheet.createRow(rowNum);
    	row1.setHeightInPoints(25);
    	HSSFCell tempCell10 = row1.createCell(0);
    	tempCell10.setCellValue("申请日期：");
    	tempCell10.setCellStyle(setStyleContent(workbook, "right"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 0, 1));
    	HSSFCell tempCell11 = row1.createCell(1);
    	tempCell11.setCellValue(appDate);
    	tempCell11.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell12 = row1.createCell(2);
    	tempCell12.setCellValue(appDate);
    	tempCell12.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 2, 5));
    	HSSFCell tempCell13 = row1.createCell(3);
    	tempCell13.setCellValue("");
    	tempCell13.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell14 = row1.createCell(4);
    	tempCell14.setCellValue("");
    	tempCell14.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell15 = row1.createCell(5);
    	tempCell15.setCellValue("");
    	tempCell15.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell16 = row1.createCell(6);
    	tempCell16.setCellValue("表单编号：");
    	tempCell16.setCellStyle(setStyleContent(workbook, "right"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 6, 7));
    	HSSFCell tempCell17 = row1.createCell(7);
    	tempCell17.setCellValue("");
    	tempCell17.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell18 = row1.createCell(8);
    	tempCell18.setCellValue(appCode);
    	tempCell18.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 8, 10));
    	HSSFCell tempCell19 = row1.createCell(9);
    	tempCell19.setCellValue("");
    	tempCell19.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell110 = row1.createCell(10);
    	tempCell110.setCellValue("");
    	tempCell110.setCellStyle(setStyleNull(workbook));
    	rowNum++;
    	//第二行
    	HSSFRow row2 = sheet.createRow(rowNum);
    	row2.setHeightInPoints(25);
    	HSSFCell tempCell20 = row2.createCell(0);
    	tempCell20.setCellValue("经办人：");
    	tempCell20.setCellStyle(setStyleContent(workbook, "right"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 0, 1));
    	HSSFCell tempCell21 = row2.createCell(1);
    	tempCell21.setCellValue("");
    	tempCell21.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell22 = row2.createCell(2);
    	tempCell22.setCellValue(appUser);
    	tempCell22.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 2, 5));
    	HSSFCell tempCell23 = row2.createCell(3);
    	tempCell23.setCellValue("");
    	tempCell23.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell24 = row2.createCell(4);
    	tempCell24.setCellValue("");
    	tempCell24.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell25 = row2.createCell(5);
    	tempCell25.setCellValue("");
    	tempCell25.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell26 = row2.createCell(6);
    	tempCell26.setCellValue("所在单位：");
    	tempCell26.setCellStyle(setStyleContent(workbook, "right"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 6, 7));
    	HSSFCell tempCell27 = row2.createCell(7);
    	tempCell27.setCellValue("");
    	tempCell27.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell28 = row2.createCell(8);
    	tempCell28.setCellValue(appDept);
    	tempCell28.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 8, 10));
    	HSSFCell tempCell29 = row2.createCell(9);
    	tempCell29.setCellValue("");
    	tempCell29.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell210 = row2.createCell(10);
    	tempCell210.setCellValue("");
    	tempCell210.setCellStyle(setStyleNull(workbook));
    	rowNum++;
    	//第三行
    	HSSFRow row3 = sheet.createRow(rowNum);
    	row3.setHeightInPoints(25);
    	HSSFCell tempCell30 = row3.createCell(0);
    	tempCell30.setCellValue("联系电话：");
    	tempCell30.setCellStyle(setStyleContent(workbook, "right"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 0, 1));
    	HSSFCell tempCell31 = row3.createCell(1);
    	tempCell31.setCellValue("");
    	tempCell31.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell32 = row3.createCell(2);
    	tempCell32.setCellValue(tel);
    	tempCell32.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 2, 5));
    	HSSFCell tempCell33 = row3.createCell(3);
    	tempCell33.setCellValue("");
    	tempCell33.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell34 = row3.createCell(4);
    	tempCell34.setCellValue("");
    	tempCell34.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell35 = row3.createCell(5);
    	tempCell35.setCellValue("");
    	tempCell35.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell36 = row3.createCell(6);
    	tempCell36.setCellValue("参加人数：");
    	tempCell36.setCellStyle(setStyleContent(workbook, "right"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 6, 7));
    	HSSFCell tempCell37 = row3.createCell(7);
    	tempCell37.setCellValue("");
    	tempCell37.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell38 = row3.createCell(8);
    	tempCell38.setCellValue(attendance);
    	tempCell38.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 8, 10));
    	HSSFCell tempCell39 = row3.createCell(9);
    	tempCell39.setCellValue("");
    	tempCell39.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell310 = row3.createCell(10);
    	tempCell310.setCellValue("");
    	tempCell310.setCellStyle(setStyleNull(workbook));
    	rowNum++;
    	//第四行
    	HSSFRow row4 = sheet.createRow(rowNum);
    	row4.setHeightInPoints(25);
    	HSSFCell tempCell40 = row4.createCell(0);
    	tempCell40.setCellValue("岗位类型：");
    	tempCell40.setCellStyle(setStyleContent(workbook, "right"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 0, 1));
    	HSSFCell tempCell41 = row4.createCell(1);
    	tempCell41.setCellValue("");
    	tempCell41.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell42 = row4.createCell(2);
    	tempCell42.setCellValue(positionType);
    	tempCell42.setCellStyle(setStyleContent(workbook, "left"));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 2, 5));
    	HSSFCell tempCell43 = row4.createCell(3);
    	tempCell43.setCellValue("");
    	tempCell43.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell44 = row4.createCell(4);
    	tempCell44.setCellValue("");
    	tempCell44.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell45 = row4.createCell(5);
    	tempCell45.setCellValue("");
    	tempCell45.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell46 = row4.createCell(6);
    	tempCell46.setCellValue("");
    	tempCell46.setCellStyle(setStyleNull(workbook));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 6, 7));
    	HSSFCell tempCell47 = row4.createCell(7);
    	tempCell47.setCellValue("");
    	tempCell47.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell48 = row4.createCell(8);
    	tempCell48.setCellValue("");
    	tempCell48.setCellStyle(setStyleNull(workbook));
    	sheet.addMergedRegion(new CellRangeAddress(rowNum, rowNum, 8, 10));
    	HSSFCell tempCell49 = row4.createCell(9);
    	tempCell49.setCellValue("");
    	tempCell49.setCellStyle(setStyleNull(workbook));
    	HSSFCell tempCell410 = row4.createCell(10);
    	tempCell410.setCellValue("");
    	tempCell410.setCellStyle(setStyleNull(workbook));
    	rowNum++;
    	if(subList != null && subList.size() > 0){
    		//第五行   子表表头
    		HSSFRow row5 = sheet.createRow(rowNum);
    		row5.setHeightInPoints(25);
    		HSSFCell tempCell50 = row5.createCell(0);
    		tempCell50.setCellValue("序号");
    		tempCell50.setCellStyle(setStyleContent(workbook, "center"));
    		HSSFCell tempCell51 = row5.createCell(1);
    		tempCell51.setCellValue("竞赛工种");
    		tempCell51.setCellStyle(setStyleContent(workbook, "center"));
    		HSSFCell tempCell52 = row5.createCell(2);
    		tempCell52.setCellValue("竞赛选手姓名");
    		tempCell52.setCellStyle(setStyleContent(workbook, "center"));
    		HSSFCell tempCell53 = row5.createCell(3);
    		tempCell53.setCellValue("性别");
    		tempCell53.setCellStyle(setStyleContent(workbook, "center"));
    		HSSFCell tempCell54 = row5.createCell(4);
    		tempCell54.setCellValue("出生年月");
    		tempCell54.setCellStyle(setStyleContent(workbook, "center"));
    		HSSFCell tempCell55 = row5.createCell(5);
    		tempCell55.setCellValue("文化程度");
    		tempCell55.setCellStyle(setStyleContent(workbook, "center"));
    		HSSFCell tempCell56 = row5.createCell(6);
    		tempCell56.setCellValue("入厂时间");
    		tempCell56.setCellStyle(setStyleContent(workbook, "center"));
    		HSSFCell tempCell57 = row5.createCell(7);
    		tempCell57.setCellValue("技能等级");
    		tempCell57.setCellStyle(setStyleContent(workbook, "center"));
    		HSSFCell tempCell58 = row5.createCell(8);
    		tempCell58.setCellValue("身份证号");
    		tempCell58.setCellStyle(setStyleContent(workbook, "center"));
    		HSSFCell tempCell59 = row5.createCell(9);
    		tempCell59.setCellValue("手机号码");
    		tempCell59.setCellStyle(setStyleContent(workbook, "center"));
    		HSSFCell tempCell510 = row5.createCell(10);
    		tempCell510.setCellValue("备注");
    		tempCell510.setCellStyle(setStyleContent(workbook, "center"));
        	rowNum++;
			for (Map<String, Object> subMap : subList) {
    			String xh = subMap.get("XH") == null ? "" : subMap.get("XH").toString();  
    	    	String showGz = subMap.get("SHOW_GZ") == null ? "" : subMap.get("SHOW_GZ").toString();
    	    	String userName = subMap.get("USER_NAME") == null ? "" : subMap.get("USER_NAME").toString();
    	    	String userSex = subMap.get("LOOKUP_NAME") == null ? "" : subMap.get("LOOKUP_NAME").toString();
    	    	String birthday = subMap.get("BIRTHDAY") == null ? "" : subMap.get("BIRTHDAY").toString().substring(0, 10);
    	    	String whcd = subMap.get("WHCD") == null ? "" : subMap.get("WHCD").toString();
    	    	String intoDate = subMap.get("INTO_DATE") == null ? "" : subMap.get("INTO_DATE").toString().substring(0, 10);
    	    	String jndj = subMap.get("JNDJ") == null ? "" : subMap.get("JNDJ").toString();
    	    	String cardId = subMap.get("CARD_ID") == null ? "" : subMap.get("CARD_ID").toString();
    	    	String phone = subMap.get("PHONE") == null ? "" : subMap.get("PHONE").toString();
    	    	String remark = subMap.get("REMARK") == null ? "" : subMap.get("REMARK").toString();
    	    	//第六行开始循环子表数据
    	    	HSSFRow tempRow = sheet.createRow(rowNum);
    	    	tempRow.setHeightInPoints(25);
    	    	HSSFCell tempCell0 = tempRow.createCell(0);
    	    	tempCell0.setCellValue(xh);
    	    	tempCell0.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell1 = tempRow.createCell(1);
    	    	tempCell1.setCellValue(showGz);
    	    	tempCell1.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell2 = tempRow.createCell(2);
    	    	tempCell2.setCellValue(userName);
    	    	tempCell2.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell3 = tempRow.createCell(3);
    	    	tempCell3.setCellValue(userSex);
    	    	tempCell3.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell4 = tempRow.createCell(4);
    	    	tempCell4.setCellValue(birthday);
    	    	tempCell4.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell5 = tempRow.createCell(5);
    	    	tempCell5.setCellValue(whcd);
    	    	tempCell5.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell6 = tempRow.createCell(6);
    	    	tempCell6.setCellValue(intoDate);
    	    	tempCell6.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell7 = tempRow.createCell(7);
    	    	tempCell7.setCellValue(jndj);
    	    	tempCell7.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell8 = tempRow.createCell(8);
    	    	tempCell8.setCellValue(cardId);
    	    	tempCell8.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell9 = tempRow.createCell(9);
    	    	tempCell9.setCellValue(phone);
    	    	tempCell9.setCellStyle(setStyleContent(workbook, "center"));
    	    	HSSFCell tempCell101 = tempRow.createCell(10);
    	    	tempCell101.setCellValue(remark);
    	    	tempCell101.setCellStyle(setStyleContent(workbook, "center"));
    	    	rowNum++;
			}
    	}
    }
    
    
    /************************************************   技术技能竞赛报名表     end    **********************************************************/
    
    /**
     * excel标题样式
     * @param workbook
     * @return
     */
    private static HSSFCellStyle setStyleTitle(HSSFWorkbook workbook){
    	HSSFFont font = workbook.createFont();
    	font.setFontName("宋体");
    	font.setFontHeightInPoints((short) 12);
    	font.setColor(HSSFFont.COLOR_NORMAL);
    	HSSFCellStyle cellStyle = workbook.createCellStyle();
    	cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);
    	cellStyle.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
    	cellStyle.setFont(font);
    	cellStyle.setBorderTop(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBorderBottom(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBorderLeft(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBorderRight(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setTopBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setBottomBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setLeftBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setRightBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
    	cellStyle.setFillForegroundColor(IndexedColors.WHITE.getIndex());
    	return cellStyle;
    }
    
    /**
     * excel标题样式
     * @param workbook
     * @param font
     * @return
     */
    private static HSSFCellStyle setStyleTitle(HSSFWorkbook workbook, HSSFFont font){
    	HSSFCellStyle cellStyle = workbook.createCellStyle();
    	cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);
    	cellStyle.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
    	cellStyle.setFont(font);
    	cellStyle.setBorderTop(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBorderBottom(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBorderLeft(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBorderRight(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setTopBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setBottomBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setLeftBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setRightBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
    	cellStyle.setFillForegroundColor(IndexedColors.WHITE.getIndex());
    	return cellStyle;
    }
    
    /**
     * excel内容样式
     * @param workbook
     * @return
     */
    private static HSSFCellStyle setStyleContent(HSSFWorkbook workbook, String align){
    	HSSFFont font = workbook.createFont();
    	font.setFontName("宋体");
    	font.setFontHeightInPoints((short) 11);
    	font.setColor(HSSFFont.COLOR_NORMAL);
    	HSSFCellStyle cellStyle = workbook.createCellStyle();
    	if("left".equals(align)){
    		cellStyle.setAlignment(HSSFCellStyle.ALIGN_LEFT);
    	}else if("center".equals(align)){
    		cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);
    	}else if("right".equals(align)){
    		cellStyle.setAlignment(HSSFCellStyle.ALIGN_RIGHT);
    	}
    	cellStyle.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
    	cellStyle.setFont(font);
    	cellStyle.setWrapText(true);
    	cellStyle.setBorderTop(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBorderBottom(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBorderLeft(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBorderRight(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setTopBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setBottomBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setLeftBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setRightBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
    	cellStyle.setFillForegroundColor(IndexedColors.WHITE.getIndex());
    	return cellStyle;
    }
    
    /**
     * excel内容样式  只设置边框
     * @param workbook
     * @return
     */
    private static HSSFCellStyle setStyleNull(HSSFWorkbook workbook){
    	HSSFCellStyle cellStyle = workbook.createCellStyle();
    	cellStyle.setBorderTop(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBorderBottom(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBorderLeft(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBorderRight(HSSFCellStyle.BORDER_THIN);
    	cellStyle.setBottomBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setLeftBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setRightBorderColor(HSSFColor.BLACK.index);
    	cellStyle.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
    	cellStyle.setFillForegroundColor(IndexedColors.WHITE.getIndex());
    	return cellStyle;
    }
}
