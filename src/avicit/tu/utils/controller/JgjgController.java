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
import org.apache.poi.ss.util.CellRangeAddress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.syslookup.SysLookupAPI;


/**
 * 巾帼建功工具类
 * @author wenc
 *
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/tuutils/jgjgController")
public class JgjgController {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Autowired
	private SysLookupAPI sysLookupAPI;
	@Autowired
    private SysApplicationAPI sysApplicationAPI;
	
	/**
     * 查询当前人员上年度绩效考核信息
     * @return Map
     * 	O：没查到
     */
    @RequestMapping(value = "queryUserKpiLevel")
    @ResponseBody
    public Map<String,Object> toQueryUserKpiLevel(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<String,Object>();
        String loginName = ServletRequestUtils.getStringParameter(request, "loginName", "");
        String currentYear = ServletRequestUtils.getStringParameter(request, "currentYear", "");
        String sql = "SELECT T.ACHIEVEMENTS_LEVEL FROM DYN_ACHIEVEMENTS T LEFT JOIN SYS_USER T1 ON T.DJ_USER_ID = T1.ID "
    			+ "WHERE T1.LOGIN_NAME = '" + loginName + "' AND T.ACHIEVEMENTS_PERIOD LIKE '%" + currentYear + "%'";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
        if (list != null && list.size() > 0) {
        	String userKpiLevel = list.get(0).get("ACHIEVEMENTS_LEVEL") == null ? "" : list.get(0).get("ACHIEVEMENTS_LEVEL").toString();
        	map.put("kipLevel", userKpiLevel);
        }else{
            map.put("kipLevel", "O");
        }
        return map;
    }
    
    /**
     * 标兵单行导出数据
     *
     * @return Map<String, Object>
     */
    @RequestMapping(value = "/exportExcelsBybb", method = RequestMethod.POST)
    public void exportExcelsBybb(HttpServletRequest request, HttpServletResponse response) {
    	
    	
    }
    
    /**
     * 标兵汇总导出数据
     *
     * @return Map<String, Object>
     * @throws Exception 
     */
    @RequestMapping(value = "/exportExcelsBybbs", method = RequestMethod.POST)
    public void exportExcelsBybbs(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	String ids = ServletRequestUtils.getStringParameter(request, "ids", "");
    	if (ids.indexOf(",") != -1) {
			ids = ids.replaceAll(",", "','");
			ids = "'" + ids + "'";
		}
    	String excelName = "年度巾帼建功标兵初评汇总表";
    	HSSFWorkbook workbook = new HSSFWorkbook();
    	HSSFSheet sheet = workbook.createSheet(excelName);
    	createBbsSheet(workbook, sheet);
    	
    	String sql = "select t.*,t2.dept_name,t3.state_ from DYN_JGJG_BB t "
    			+ "left join sys_user_dept_position t1 on t.bb_user_id = t1.user_id "
    			+ "left join sys_dept_v t2 on t1.dept_id = t2.id "
    			+ "left join sys_bpm_hist_procinst t3 on t.id = t3.formid_ "
    			+ "where t.id in (" + ids + ")order by t.creation_date desc";
    	List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    	if(list != null && list.size() > 0){
    		int indexRow = 3;
    		for (Map<String, Object> map : list) {
    			bbsInsertSheel(workbook, sheet, map, indexRow);
    			indexRow++;
			}
    	}
    	
    	response.reset();
    	response.addHeader("Content-Disposition", "attachment;filename=" + new String(excelName.getBytes("gb2312"), "ISO8859-1") + ".xlsx");
    	OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
    	response.setContentType("application/vnd.ms-excel;charset=gb2312");
    	workbook.write(toClient);
    	toClient.close();
    }
    
    /**
     * 汇总创建表头
     * @param workbook
     * @param sheet
     */
    private static void createBbsSheet(HSSFWorkbook workbook, HSSFSheet sheet){
    	String[] secondTitle = {"是否满足3个必要条件", "标兵评比内容分项得分情况（分）"}; 
    	String[] thirdTtile = {"排名", "单位", "姓名", "人员类别", "绩效等级", "个人荣誉", "至少一项改善项目", "是否满足参评条件", "绩效", "荣誉", "技术研究课题", 
    			"专利项目", "公司级工艺攻关项目", "基层级工艺攻关项目", "班组现场精益改善优秀成果", "标准编制", "论文成果", "其他成果", "总分", "初评意见", "备注"};
    	
    	
    	//首行合并
    	HSSFRow firstRow = sheet.createRow(0);
    	HSSFCell firstCell = firstRow.createCell(0);
    	firstCell.setCellValue("年度巾帼建功标兵评分汇总表");
    	firstCell.setCellStyle(setStyleFirstTitle(workbook));
    	firstRow.setHeightInPoints(40);
    	sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 21));
    	
    	HSSFRow secondRow = sheet.createRow(1);
    	for (int j = 0; j < thirdTtile.length; j++) {
    		HSSFCell tempCell = secondRow.createCell(j);
    		if(j == 4){
    			tempCell.setCellValue(secondTitle[0]);
    		}else if(j == 8){
    			tempCell.setCellValue(secondTitle[1]);
    		}else{
    			tempCell.setCellValue("");
    		}
			tempCell.setCellStyle(setStyleTitle(workbook));
    	}
    	secondRow.setHeightInPoints(30);
    	sheet.addMergedRegion(new CellRangeAddress(1, 1, 4, 7));
    	sheet.addMergedRegion(new CellRangeAddress(1, 1, 8, 17));
    	
    	HSSFRow row = sheet.createRow(2);
    	row.setHeightInPoints(30);
    	for (int i = 0; i < thirdTtile.length; i++) {
    		//设置列宽
    		if(i == 1 || i == 5){
    			sheet.setColumnWidth(i, 5000);
    		}else{
    			sheet.setColumnWidth(i, 3000);
    		}
    		
    		//合并单元格
			if(i < 4 || i > 17){
				//sheet.addMergedRegion(new CellRangeAddress(1, 2, i, i));
			}
    		
			HSSFCell tempCell = row.createCell(i);
			tempCell.setCellValue(thirdTtile[i]);
			tempCell.setCellStyle(setStyleTitle(workbook));
		}
    }
    
    
    /**
     * 添加数据
     * @param workbook
     * @param sheet
     * @param map
     * @param indexRow
     */
    private void bbsInsertSheel(HSSFWorkbook workbook, HSSFSheet sheet, Map<String, Object> map, int indexRow){
    	String[] ttile = {"排名", "单位", "姓名", "人员类别", "绩效等级", "个人荣誉", "至少一项改善项目", "是否满足参评条件", "绩效", "荣誉", "技术研究课题", 
    			"专利项目", "公司级工艺攻关项目", "基层级工艺攻关项目", "班组现场精益改善优秀成果", "标准编制", "论文成果", "其他成果", "总分", "初评意见", "备注"};
    	String paiMing = (indexRow - 2) + ""; //排名
    	String deptName = map.get("DEPT_NAME") == null ? "" : map.get("DEPT_NAME").toString(); //单位
    	String userName = map.get("BB_USER_NAME") == null ? "" : map.get("BB_USER_NAME").toString(); //姓名
    	String userType = map.get("BB_USER_TYPE") == null ? "" : map.get("BB_USER_TYPE").toString(); //人员类别
    	String userTypeName = "";
    	if(!"".equals(userType)){
    		userTypeName = rsLookupValue("GH_JGJG_USER_TYPE", userType);
    	}
    	String kpiLevel = map.get("BB_USER_KPI_LEVEL") == null ? "" : map.get("BB_USER_KPI_LEVEL").toString(); //绩效等级
    	String satisfy = "√";
    	if(!"A+".equals(kpiLevel) && !"A".equals(kpiLevel) && !"A-".equals(kpiLevel) & !"B+".equals(kpiLevel)){
    		satisfy = "×";
    	}
    	String kpiScore = map.get("BB_USER_KPI_SCORE") == null ? "" : map.get("BB_USER_KPI_SCORE").toString(); //绩效
    	String honorScore = map.get("HONOR_COUNT_SCORE") == null ? "" : map.get("HONOR_COUNT_SCORE").toString(); //荣誉
    	String techScore = map.get("TECHNOLOGY_COUNT_SCORE") == null ? "" : map.get("TECHNOLOGY_COUNT_SCORE").toString(); //技术研究课题
    	String zlScore = map.get("INVENTION_COUNT_SCORE") == null ? "" : map.get("INVENTION_COUNT_SCORE").toString(); //专利项目
    	String gsgyScore = map.get("COMP_PROJECT_COUNT_SCORE") == null ? "" : map.get("COMP_PROJECT_COUNT_SCORE").toString(); //公司级工艺攻关项目
    	String jcgyScore = map.get("DEPT_PROJECT_COUNT_SCORE") == null ? "" : map.get("DEPT_PROJECT_COUNT_SCORE").toString(); //基层级工艺攻关项目
    	String bzxcScore = map.get("JYGSYXCG_COUNT_SCORE") == null ? "" : map.get("JYGSYXCG_COUNT_SCORE").toString(); //班组现场精益改善优秀成果
    	String bzScore = map.get("STANDARD_COUNT_SCORE") == null ? "" : map.get("STANDARD_COUNT_SCORE").toString(); //标准编制
    	String lwScore = map.get("PAPER_COUNT_SCORE") == null ? "" : map.get("PAPER_COUNT_SCORE").toString(); //论文成果
    	String gjcgScore = map.get("COUN_ACHIE_COUNT_SCORE") == null ? "" : map.get("COUN_ACHIE_COUNT_SCORE").toString(); //国家级其他成果
    	String sbcgScore = map.get("PROV_ACHIE_COUNT_SCORE") == null ? "" : map.get("PROV_ACHIE_COUNT_SCORE").toString(); //省部级、市级其他成果
    	int otherCgScore = 0;
    	if(!"".equals(gjcgScore)){
    		otherCgScore += Integer.parseInt(gjcgScore);
    	}
    	if(!"".equals(sbcgScore)){
    		otherCgScore += Integer.parseInt(sbcgScore);
    	}
    	String allScore = map.get("ALL_COUNT_SCORE") == null ? "" : map.get("ALL_COUNT_SCORE").toString(); //总分
    	
    	HSSFRow row = sheet.createRow(indexRow);
    	row.setHeightInPoints(30);
    	for (int i = 0; i < ttile.length; i++) {
			HSSFCell tempCell = row.createCell(i);
			if(i == 0) tempCell.setCellValue(paiMing);
			if(i == 1) tempCell.setCellValue(deptName);
			if(i == 2) tempCell.setCellValue(userName);
			if(i == 3) tempCell.setCellValue(userTypeName);
			if(i == 4) tempCell.setCellValue(kpiLevel);
			if(i == 5) tempCell.setCellValue("");
			if(i == 6) tempCell.setCellValue("");
			if(i == 7) tempCell.setCellValue(satisfy);
			if(i == 8) tempCell.setCellValue(kpiScore);
			if(i == 9) tempCell.setCellValue(honorScore);
			if(i == 10) tempCell.setCellValue(techScore);
			if(i == 11) tempCell.setCellValue(zlScore);
			if(i == 12) tempCell.setCellValue(gsgyScore);
			if(i == 13) tempCell.setCellValue(jcgyScore);
			if(i == 14) tempCell.setCellValue(bzxcScore);
			if(i == 15) tempCell.setCellValue(bzScore);
			if(i == 16) tempCell.setCellValue(lwScore);
			if(i == 17) tempCell.setCellValue(otherCgScore);
			if(i == 18) tempCell.setCellValue(allScore);
			if(i == 19) tempCell.setCellValue("");
			if(i == 20) tempCell.setCellValue("");
			tempCell.setCellStyle(setStyleTitle(workbook));
		}
    	
    }
    
    /**
     * 首行标题样式
     * @param workbook
     * @return
     */
    private static HSSFCellStyle setStyleFirstTitle(HSSFWorkbook workbook){
    	HSSFFont font = workbook.createFont();
    	font.setFontName("方正小标宋简体");
    	font.setFontHeightInPoints((short) 18);
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
    	return cellStyle;
    }
    
    /**
     * 标题样式
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
    	return cellStyle;
    }

    /**
     * 根据通用代码转换
     */
    private String rsLookupValue(String lookupCode, String lookupValue) {
    	return sysLookupAPI.getNameByLooupTypeCodeAndLooupCodeByAppId(lookupCode, lookupValue, sysApplicationAPI.getCurrentAppId());
    }
}
