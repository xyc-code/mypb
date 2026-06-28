package avicit.pb.milepost.dynyouthrecord.service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Pattern;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.compress.utils.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFClientAnchor;
import org.apache.poi.hssf.usermodel.HSSFCreationHelper;
import org.apache.poi.hssf.usermodel.HSSFPatriarch;
import org.apache.poi.hssf.usermodel.HSSFPicture;
import org.apache.poi.hssf.usermodel.HSSFRichTextString;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import com.eviware.soapui.impl.support.http.HttpRequest;
import com.itextpdf.text.pdf.codec.Base64.OutputStream;

import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.listener.InstanceDeleteEventListener;
import avicit.platform6.bpm.pvm.internal.type.Matcher;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.properties.PlatformProperties;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.spring.SpringFactory;
import avicit.lc.organize.leagueorganization.dto.LeagueOrganizationDTO;
import avicit.lc.organize.leagueorganmember.dto.LeagueOrganMemberDTO;
import avicit.pb.milepost.dynyouthrecord.dao.DynYouthRecordDAO;
import avicit.pb.milepost.dynyouthrecord.dto.DynSubZxbasb1DTO;
import avicit.pb.milepost.dynyouthrecord.dto.DynYouthRecordDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import avicit.platform6.modules.system.sysorguser.sysuser.service.SysUserLoader;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-12 15:04
 * @类说明：
 * @修改记录： 
 */
@Service
public class DynYouthRecordService implements Serializable,InstanceDeleteEventListener,LoaderConstant {

	private static final Logger logger = LoggerFactory.getLogger(DynYouthRecordService.class);

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private BpmOperateService bpmOperateService;
	
	@Autowired
	private BusinessService businessService;

	@Autowired
	private DynYouthRecordDAO dynYouthRecordDAO;
	
	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;
	
	@Autowired
	private SysLookupAPI sysLookupAPI;
	
	/**
	 * 流程删除事件方法
	 * @param processInstanceId 流程实例id
	 * @param executionId 
	 * @param formId 表单id
	 * @throws Exception
	 */
	@Override
	public void notify(String processInstanceId, String executionId, String formId) throws Exception {
		DynYouthRecordDAO dynYouthRecordDAO = SpringFactory.getBean(DynYouthRecordDAO.class);
		dynYouthRecordDAO.deleteDynYouthRecordById(formId);
	}

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynYouthRecordDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynYouthRecordDTO> searchDynYouthRecordByPage(QueryReqBean<DynYouthRecordDTO> queryReqBean, String orderBy, String keyWord,String dept) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynYouthRecordDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynYouthRecordDTO> dataList = dynYouthRecordDAO.searchDynYouthRecordByPage(searchParams, orderBy, keyWord,dept);
			for(DynYouthRecordDTO dto : dataList.getResult()) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			QueryRespBean<DynYouthRecordDTO> queryRespBean = new QueryRespBean<DynYouthRecordDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynYouthRecordByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynYouthRecordDTO>
	 * @throws Exception
	 */
	public List<DynYouthRecordDTO> searchDynYouthRecord(DynYouthRecordDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynYouthRecordDTO> dataList = dynYouthRecordDAO.searchDynYouthRecord(searchParams, orderBy, keyWord);
			for(DynYouthRecordDTO dto : dataList) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynYouthRecord出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynYouthRecordDTO>
	 * @throws Exception
	 */
	public List<DynYouthRecordDTO> searchDynYouthRecordForExport(DynYouthRecordDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynYouthRecordDTO> dataList = dynYouthRecordDAO.searchDynYouthRecordForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynYouthRecordForExport出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	/**
	 * 导出excel
	 * @param templateCode 模板code
	 * @param colsList 导出列集合
	 * @param dataList 导出数据
	 * @return
	 */
	public byte[] exportExcel(String templateCode, List<SysExcelColumnDTO> colsList, List<Map<String,Object>> dataList) throws Exception{
		//构造导出模板code集合
		List<String> templateCodeList = new ArrayList<String>();
		templateCodeList.add(templateCode);
		//构造code所对应的导出列集合
		Map<String,List<SysExcelColumnDTO>> colsMap = new HashMap<String,List<SysExcelColumnDTO>>();
		colsMap.put(templateCode,colsList);
		//构造code所对应的数据集合
		Map<String,List<Map<String,Object>>> dataMap = new HashMap<String,List<Map<String,Object>>>();
		dataMap.put(templateCode,dataList);
		byte[] bytes = sysExcelExpAPI.exportExcel(templateCodeList, colsMap, dataMap);
		return bytes;
	}

	/**
	 * 流程状态转换
	 * @param stateCode 编码
	 * @return String
	 */
	private String processStateCode2StateName(String stateCode){
		String stateName = "";
		if(stateCode != null && "active".equals(stateCode)){
			stateName = "流转中";
		}else if(stateCode !=null && "ended".equals(stateCode)){
			stateName = "已完成";
		}else if(stateCode !=null && "start".equals(stateCode)){
			stateName = "拟稿中";
		}
		return stateName;
	}

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynYouthRecordDTO
	 * @throws Exception
	 */
	public DynYouthRecordDTO queryDynYouthRecordByPrimaryKey(String id) throws Exception {
		try {
			DynYouthRecordDTO dto = dynYouthRecordDAO.findDynYouthRecordById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynYouthRecordByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 新增
	* @param dto 保存对象
	* @return String
	* @throws Exception
	*/
	public String insertDynYouthRecord(DynYouthRecordDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynYouthRecordDAO.insertDynYouthRecord(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynYouthRecord出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynYouthRecordList(List<DynYouthRecordDTO> dtoList) throws Exception {
		try {
			List<DynYouthRecordDTO> beanList = new ArrayList<DynYouthRecordDTO>();
			for (DynYouthRecordDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynYouthRecordDAO.insertDynYouthRecordList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynYouthRecordList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynYouthRecordAll(DynYouthRecordDTO dto) throws Exception {
		try {
			//记录日志
			DynYouthRecordDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynYouthRecordDAO.updateDynYouthRecordAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynYouthRecordAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynYouthRecordSensitive(DynYouthRecordDTO dto) throws Exception {
		try {
			//记录日志
			DynYouthRecordDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynYouthRecordDAO.updateDynYouthRecordSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynYouthRecordSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynYouthRecordList(List<DynYouthRecordDTO> dtoList) throws Exception {
		try {
			return dynYouthRecordDAO.updateDynYouthRecordList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynYouthRecordList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynYouthRecordById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynYouthRecordDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			//删除流程数据
			String processInstanceId = bpmOperateService.getInstanceIdByFormid(id);
			if(StringUtils.isNotEmpty(processInstanceId)){
				bpmOperateService.deleteProcessInstanceCascade(processInstanceId);
			}
			return dynYouthRecordDAO.deleteDynYouthRecordById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynYouthRecordById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynYouthRecordByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynYouthRecordById(id);
			result++;
		}
		return result;
	}

	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynYouthRecordDTO
	 * @throws Exception
	 */
	private DynYouthRecordDTO findById(String id) throws Exception {
		try {
			DynYouthRecordDTO dto = dynYouthRecordDAO.findDynYouthRecordById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	public List<DynSubZxbasb1DTO> fomart(String fitId,String type){
		try{
		List<DynSubZxbasb1DTO>  dyn   =	 dynYouthRecordDAO.fomart(fitId,type);
		return dyn;
		}catch(Exception e){
			e.printStackTrace();
			logger.error("fitId出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
		
	}
	
	/**
	 * 保存表单并启动流程
	 * @param bean 表单对象
	 * @param parameter 启动流程所需要的参数
	 * @return StartResultBean
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public StartResultBean insertDynYouthRecordAndStartProcess(DynYouthRecordDTO bean, Map<String, Object> parameter) throws Exception{
		try {	
			Assert.notNull(parameter, "启动流程失败，请传递流程启动参数！");
			String processDefId = (String)parameter.get("processDefId");
			String formCode = (String)parameter.get("formCode");
			String jsonString = (String)parameter.get("jsonString");
			String userId = (String)parameter.get("userId");
			String deptId = (String)parameter.get("deptId");
			Assert.hasText(processDefId, "启动流程失败，请传递流程启动参数！");
			//保存业务数据
			this.insertDynYouthRecord(bean);
			//声明流程变量
			Map<String, Object> variables = new HashMap<String, Object>();
			//将表单之外的参数转换成map存入流程变量
			if(jsonString != null && !"".equals(jsonString)){
				Map<String, Object> extVariables = JsonUtil.parseJSON2Map((String)jsonString);
				variables.putAll(extVariables);
			}
			//将表单对象转换成map存入流程变量
			Map<String, Object> pojoMap = (Map<String, Object>) PojoUtil.toMap(bean);
			variables.putAll(pojoMap);
			String processInstanceId = bpmOperateService.startProcessInstanceById(processDefId, formCode, userId, deptId, variables);
			return businessService.getStartResultBean(processInstanceId, bean.getId(), userId);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynYouthRecordDTOAndStartProcess出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	public static void picure2(String fileurl,HSSFWorkbook workbook,HSSFSheet sheet,int col,int cell){
		String savePath = PlatformProperties.getProperty("doccenter.path") + File.separator;
		String hou = fileurl.substring(fileurl.lastIndexOf("/")+1);
		String url  = fileurl.substring(fileurl.lastIndexOf("image")+5,fileurl.lastIndexOf("/")).replace("/", "\\").replace("/","\\");
		BufferedImage bufferImg =null;
		ByteArrayOutputStream byteArrayOut= null;
		byte[] buffer = null;
		int type = 0;				
		try { 
			 url =savePath+"image"+url+"."+hou;
			 logger.info("文件路径为:"+url);
			 bufferImg = ImageIO.read(new File(url));
			 if(bufferImg == null){
				 return;
			 }
			 byteArrayOut = new ByteArrayOutputStream();
			 ImageIO.write(bufferImg,hou,byteArrayOut);
			 byteArrayOut.close();
		} catch (Exception e) {
			logger.error("文件输出失败，异常为:"+e.getMessage());
		}
		if("jpg".equals(hou)){
			type = HSSFWorkbook.PICTURE_TYPE_JPEG;
		}else if("png".equals(hou)){
			type = HSSFWorkbook.PICTURE_TYPE_PNG;
		}
		HSSFPatriarch partiarch = sheet.createDrawingPatriarch();
		HSSFClientAnchor anchor = new HSSFClientAnchor(0,0,1023,170, (short)cell, col, (short)cell, col);
		partiarch.createPicture(anchor,workbook.addPicture(byteArrayOut.toByteArray(),type));
		try{
			byteArrayOut.close();;
		}catch(IOException ex){
			logger.error("文件流关闭失败，异常为:"+ex.getMessage());
		}
	
	}
	public static List<String> Htmlfam(String html){
		 List<String> list = new ArrayList<>();
		 Pattern p_image;
		 String img;
		 String regEx_img = "<img.*src\\s*=\\s*(.*?)[^>]*?>";
		 p_image = Pattern.compile(regEx_img,Pattern.CASE_INSENSITIVE);
		 java.util.regex.Matcher m_image = p_image.matcher(html);
		 while(m_image.find()){
			 img = m_image.group();
			 java.util.regex.Matcher m = Pattern.compile("src\\s*=\\s*\"?(.*?)(\"|>|\\s+)").matcher(img);
			 while(m.find()){
				 list.add(m.group(1));
			 }
		 }
		 if(list.size()==0){
			 logger.info("无文件路径");
			 return list;
		 }
		 logger.info("文件路径为:"+list.get(0));
		 return list;
		
	}
	
	@SuppressWarnings("deprecation")
	public void downloadExcel(HSSFWorkbook workbook,int sheetNum,String[] headers,List<DynYouthRecordDTO> dtoList,HttpServletRequest request) throws Exception{
		HSSFSheet sheet = workbook.createSheet();
		SimpleDateFormat sr = new SimpleDateFormat("yyyy-MM-dd");
		HSSFRow row = sheet.createRow(0);
		workbook.setSheetName(sheetNum,"优秀铸心突击队备案表");
		sheet.setDefaultColumnWidth((short)10);
		for(int i=0;i<headers.length;i++){
			HSSFCell cell = row.createCell(i);
			HSSFRichTextString text = new HSSFRichTextString(headers[i]);
			cell.setCellValue(text.toString());
		}
		HSSFCell cell;
		HSSFRichTextString text;
		for(int i =0;i<dtoList.size();i++){
			if(dtoList.get(i)==null){
				continue;
			}
			String captainsName ="";
			String ChildName = "";
			String ChildDept = "";
			String ChildAge = "";
			String ChildTask = "";			
			 row = sheet.createRow(i+1);
			 DynYouthRecordDTO dto = dtoList.get(i);
			 List<DynSubZxbasb1DTO> dtoLists = fomart(dto.getId(),"0");
			 for(DynSubZxbasb1DTO dyn : dtoLists){
					SysUser user = sysUserLoader.getSysUserById(dyn.getTjdDuiyuanname());
					captainsName+=user.getName();
			 }
			 List<DynSubZxbasb1DTO> dtoListChild = fomart(dto.getId(),"1");
				for(DynSubZxbasb1DTO dyn : dtoListChild){
					SysUser user = sysUserLoader.getSysUserById(dyn.getTjdDuiyuanname());
					ChildName += user.getName()+ ";";
					SysDept dept = sysDeptLoader.getSysDeptBySysDeptId(dyn.getTjdDanwei());
					ChildDept += dept.getDeptName()+";";
					ChildAge += dyn.getTjdAge()+";";
					ChildTask += dyn.getTjdZhiwu()+";";
				}
			 cell = row.createCell(0);
			 text = new HSSFRichTextString(dto.getApplicationNumber());
			 cell.setCellValue(text.toString());
			 cell = row.createCell(1);
			 text = new HSSFRichTextString(sysDeptLoader.getSysDeptBySysDeptId(dto.getApplicationUnit()).getDeptName());
			 cell.setCellValue(text.toString());
			 cell = row.createCell(2);
			 text = new HSSFRichTextString(dto.getCommandoesName());
			 cell.setCellValue(text.toString());			 
			 cell = row.createCell(3);
			 text = new HSSFRichTextString(captainsName);
			 cell.setCellValue(text.toString());
			 cell = row.createCell(4);
			 text = new HSSFRichTextString(ChildName);
			 cell.setCellValue(text.toString());
			 cell = row.createCell(5);
			 text = new HSSFRichTextString(ChildDept);
			 cell.setCellValue(text.toString());
			 cell = row.createCell(6);
			 text = new HSSFRichTextString(ChildDept);
			 cell.setCellValue(text.toString());
			 cell = row.createCell(7);
			 text = new HSSFRichTextString(ChildAge);
			 cell.setCellValue(text.toString());
			 cell = row.createCell(8);
			 text = new HSSFRichTextString(ChildTask);
			 cell.setCellValue(text.toString());
			 cell = row.createCell(8);
			 text = new HSSFRichTextString(String.valueOf(dtoListChild.size()));
			 cell.setCellValue(text.toString());
			 cell = row.createCell(9);
			 cell.setCellValue(sr.format(dto.getCommandoesDate()));
			 cell = row.createCell(10);
			 cell.setCellValue(sr.format(dto.getCommandoesTaskDate()));
			 cell = row.createCell(11);		
			 List<String> arr = Htmlfam(dto.getExpectedIncome());
			 if(arr.size()!=0){
				 picure2(arr.get(0),workbook, sheet, i+1, 11); 
			 }			
			 cell.setCellValue(dto.getExpectedIncome());
			 cell = row.createCell(12);
			 text = new HSSFRichTextString(dto.getCommandoesTheme());
			 cell.setCellValue(text.toString());
			 cell = row.createCell(13);
			 text = new HSSFRichTextString(sysLookupAPI.getNameByLooupTypeCodeAndLooupCode("COMMANDOES_TYPE", dto.getCommandoesType()));
			 cell.setCellValue(text.toString());			 
		}
		
	}
	public List<LeagueOrganMemberDTO> getLeagueOrganizationDTO(String deptId,String type){
		List<LeagueOrganMemberDTO> dto = dynYouthRecordDAO.getLeagueOrganizationDTO(deptId,type);
		return dto;
	}
}

