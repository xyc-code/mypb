package avicit.weekly.dto;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写 @创建时间： 2023-03-28 12:57
 * @类说明：周报表 @修改记录：
 */
public class ReadExcel  {
	private int totalRows = 0;
	private String errorMsg;
	private int totalCells = 0;
	public ReadExcel(){};
	public int getTotalRows(){return totalRows;}
	public int getTotalCells(){return totalCells;}
	public String getErrorInfo(){return errorMsg; }
	public List<WeeklyDTO> getExcelInfo(MultipartFile Mfile,int sheetNum){
		CommonsMultipartFile cf = (CommonsMultipartFile) Mfile;
		File file = new File("D:\\fileupload");
		if(!file.exists()) file.mkdirs();
		File filel = new File("D:\\fileupload\\"+new Date().getTime()+"xls");
		try{
			cf.getFileItem().write(filel);
		}catch(Exception ex){
			ex.printStackTrace();
		}
		List<WeeklyDTO> dtoList = new ArrayList<WeeklyDTO>();	
		FileInputStream is = null;
		Workbook wb =null;
		try{
			is = new FileInputStream(filel);
			wb = new HSSFWorkbook(is);
			dtoList = readXls(wb);
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
		return dtoList;
		
		
	}
	private List<WeeklyDTO> readXls(Workbook wb)throws ParseException,IOException {
		// TODO Auto-generated method stub
		Sheet sheet = wb.getSheetAt(0);
		this.totalRows = sheet.getPhysicalNumberOfRows();
		if(totalRows >=1 && sheet.getRow(0) !=null){
			this.totalCells = sheet.getRow(0).getPhysicalNumberOfCells();
		}else{
			return null;
		}
		WeeklyDTO dto = null;
		List<WeeklyDTO> dtoList = new ArrayList<WeeklyDTO>();
		for(int rowNum = 1;rowNum<=totalRows;rowNum++){
			HSSFRow hssfRow = (HSSFRow) sheet.getRow(rowNum);
			if(hssfRow ==null){
				continue;
			}
			dto = new WeeklyDTO();
			HSSFCell gznr = hssfRow.getCell(0);
			if(gznr != null) dto.setWorkTasks(String.valueOf(getValue(gznr)));
			HSSFCell topDateEvolve = hssfRow.getCell(1);
			if(topDateEvolve !=null) dto.setTopDateEvolve(String.valueOf(getValue(topDateEvolve)));
			HSSFCell setDateEvolve = hssfRow.getCell(2);
			if(setDateEvolve !=null) dto.setDateEvolve(String.valueOf(getValue(setDateEvolve)));
			HSSFCell setCompletionNode = hssfRow.getCell(3);
			if(setCompletionNode !=null){
				Date date = setCompletionNode.getDateCellValue();
				SimpleDateFormat sdf =new SimpleDateFormat("yyyy-MM-dd");
				dto.setCompletionNode(sdf.parse(sdf.format(date)));				
			} 
			HSSFCell setContent = hssfRow.getCell(4);
			if(setContent !=null) dto.setContent(String.valueOf(getValue(setContent)));
			
			dtoList.add(dto);
		}
		return dtoList;
	}
	@SuppressWarnings("static-access")
	private Object getValue(HSSFCell gznr) {
		// TODO Auto-generated method stub
		if(gznr.getCellType()==HSSFCell.CELL_TYPE_BOOLEAN){
			return String.valueOf(gznr.getBooleanCellValue());
		}else if(gznr.getCellType()==HSSFCell.CELL_TYPE_NUMERIC){
			return gznr.getNumericCellValue();
		}else{
			return String.valueOf(gznr.getStringCellValue());
		}
	}

}