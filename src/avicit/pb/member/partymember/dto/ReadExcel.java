package avicit.pb.member.partymember.dto;

import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.ParseException;
import java.util.*;

/**
 * @作者：zzf
 * @创建时间： 2024-01-23 14:59
 * @类说明：用于党费导入所写的通用导入 @修改记录：
 */
public class ReadExcel {
	private int totalRows = 0;
	private String errorMsg;
	private int totalCells = 0;
	public ReadExcel(){};
	public int getTotalRows(){return totalRows;}
	public int getTotalCells(){return totalCells;}
	public String getErrorInfo(){return errorMsg; }
	/**
	 * 根据文件以及sheet页获取导入数据
	 * @param sheetNum 选择的sheet页
	 * @param Mfile 导入的文件
	 * @return 导入数据
	 * */
	public List<Map<String,Object>> getExcelInfo(MultipartFile Mfile, int sheetNum){
		CommonsMultipartFile cf = (CommonsMultipartFile) Mfile;
		File file = new File("D:\\partyFileUpload");
		if(!file.exists()) file.mkdirs();
		File filel = new File("D:\\partyFileUpload\\"+new Date().getTime()+"xls");
		try{
			cf.getFileItem().write(filel);
		}catch(Exception ex){
			ex.printStackTrace();
		}
		FileInputStream is = null;
		Workbook wb =null;
		List<Map<String,Object>> list = null;
		try{
			is = new FileInputStream(filel);
			wb = new HSSFWorkbook(is);
			list = readXls(wb,sheetNum);
			is.close();
		}catch(Exception ex){
			ex.printStackTrace();
		}finally{
			if(is != null){
				try{
					is.close();
				}catch(Exception ex){
					is = null;
					ex.printStackTrace();
				}
			}
		}
		return list;
		
		
	}
	/**
	 * 生成excel模版
	 * @param workbook poi实例对象
	 * @param sheetNum 生成sheet页的索引
	 * @param headers  列头名称
	 * @param sheetName sheet名称
	 * */
	public void downloadExcel(HSSFWorkbook workbook,int sheetNum,String[] headers,String sheetName){
		HSSFSheet sheet = workbook.createSheet();
		HSSFRow row = sheet.createRow(sheetNum);
		workbook.setSheetName(sheetNum,sheetName);
		for(int i=0;i<headers.length;i++){
			HSSFCell cell = row.createCell(i);
			HSSFRichTextString text = new HSSFRichTextString(headers[i]);
			cell.setCellValue(text.toString());
		}
	}

	private List<Map<String,Object>> readXls(Workbook wb,int sheetNum)throws ParseException,IOException {
		Sheet sheet = wb.getSheetAt(sheetNum);
		this.totalRows = sheet.getPhysicalNumberOfRows();
		if(totalRows >=1 && sheet.getRow(0) !=null){
			this.totalCells = sheet.getRow(0).getPhysicalNumberOfCells();
		}else{
			return null;
		}
		List<Map<String,Object>> list= new ArrayList<>();
		for(int rowNum = 1;rowNum<=totalRows;rowNum++){
			HSSFRow hssfRow = (HSSFRow) sheet.getRow(rowNum);
			if(hssfRow ==null){
				continue;
			}
			Map<String,Object> map = new HashMap<>();
			int lastCellNum = hssfRow.getLastCellNum();
			for(int i =0;i<lastCellNum;i++){
				HSSFCell cell = hssfRow.getCell(i);
				HSSFRow Row = (HSSFRow)sheet.getRow(0);
				map.put(String.valueOf(getValue(Row.getCell(i))),String.valueOf(getValue(cell)));
			}
			list.add(map);
		}
		return list;
	}
	private Object getValue(HSSFCell gznr) {
		if(gznr.getCellType()==HSSFCell.CELL_TYPE_BOOLEAN){
			return String.valueOf(gznr.getBooleanCellValue());
		}else if(gznr.getCellType()==HSSFCell.CELL_TYPE_NUMERIC){
			return gznr.getNumericCellValue();
		}else{
			return String.valueOf(gznr.getStringCellValue());
		}
	}
	private boolean isExcel2003(String filePath){
		return filePath.matches("^.+\\.(?i)(xls)$");
	}
	private boolean isExcel2007(String filePath){
		return filePath.matches("^.+\\.(?i)(xlsx)$");
	}

	public boolean validateExcel(String filePath){
		return filePath != null && isExcel2003(filePath) && !isExcel2007(filePath);
	}


}