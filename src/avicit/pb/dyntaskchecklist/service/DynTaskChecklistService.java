package avicit.pb.dyntaskchecklist.service;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.Reader;
import java.io.Serializable;
import java.math.BigInteger;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

import javax.jms.Session;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.GenericType;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;

import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.rest.client.RestClient;
import avicit.platform6.core.rest.client.RestClientConfig;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.msystem.sysmsg.controller.SysMsgConstant;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.client.methods.HttpPost;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xslf.usermodel.TextAlign;
import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.TextAlignment;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.apache.poi.xwpf.usermodel.XWPFTable;
import org.apache.poi.xwpf.usermodel.XWPFTableCell;
import org.apache.poi.xwpf.usermodel.XWPFTableRow;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTPPr;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTblPr;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTblWidth;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTc;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTcPr;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTVerticalJc;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STBorder;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STJc;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STMerge;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STTblWidth;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STVerticalJc;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.druid.pool.vendor.NullExceptionSorter;
import com.thoughtworks.xstream.alias.ClassMapper.Null;

import avicit.pb.dyntaskchecklist.dao.DynTaskChecklistDao;
import avicit.pb.dyntaskchecklist.dto.DynInspecIcDTO;
import avicit.pb.dyntaskchecklist.dto.DynInspectionDTO;
import avicit.pb.dyntaskchecklist.dto.DynTaskChecklistDTO;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.sysuser.SysDeptAPI;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.pvm.internal.cmd.p;
import avicit.platform6.bpm.pvm.internal.identity.impl.MembershipImpl;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.sfn.intercept.SelfDefinedQuery;

import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.modules.system.sysfileupload.domain.SysFileUpload;
import avicit.platform6.modules.system.sysfileupload.service.SwfUploadService;
import avicit.platform6.modules.system.sysfileupload.service.SysFileUploadService;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import avicit.platform6.msystem.sysmsg.dto.SysMsgDTO;
import avicit.platform6.msystem.sysmsg.service.SysMsgService;
import oracle.sql.CLOB;
import oracle.sql.TIMESTAMP;

import org.apache.commons.httpclient.Header;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.StringRequestEntity;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写 @创建时间： 2023-05-16 16:49
 * @类说明：请填写 @修改记录：
 */
@Service
public class DynTaskChecklistService implements Serializable {

	private static final Logger LOGGER = LoggerFactory.getLogger(DynTaskChecklistService.class);

	private static final long serialVersionUID = 1L;
	@Autowired
	private BpmOperateService bpmOperateService;
	
	@Autowired
	private BusinessService businessService;
	@Autowired
	private SysMsgService sysMsgServie;

	@Autowired
	private DynTaskChecklistDao dynTaskChecklistDao;
	@Autowired
	private SysUserAPI sysuserAPI; 
	@Autowired
	private SysDeptAPI sysdeptAPI;
	public static int fromOn = 1;
	public static int CalDATE = 0;
	@Autowired
	private  SwfUploadService uploda;
	

	/**
	 * @description:按条件分页查询
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public QueryRespBean<DynTaskChecklistDTO> searchDynTaskChecklistByPage(
			QueryReqBean<DynTaskChecklistDTO> queryReqBean, String sfnConditions, String orgIdentity) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynTaskChecklistDTO searchParams = queryReqBean.getSearchParams();
			SelfDefinedQuery sdc = new SelfDefinedQuery(sfnConditions, "t1");
			Page<DynTaskChecklistDTO> dataList = dynTaskChecklistDao.searchDynTaskChecklistByPage(searchParams,
					sdc.parseSql(), orgIdentity);
			QueryRespBean<DynTaskChecklistDTO> queryRespBean = new QueryRespBean<DynTaskChecklistDTO>();

			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			LOGGER.error("searchDynTaskChecklistByPage出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description:按条件查询，不分页
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public List<DynTaskChecklistDTO> searchDynTaskChecklist(QueryReqBean<DynTaskChecklistDTO> queryReqBean)
			throws Exception {
		try {
			DynTaskChecklistDTO searchParams = queryReqBean.getSearchParams();
			List<DynTaskChecklistDTO> dataList = dynTaskChecklistDao.searchDynTaskChecklist(searchParams);
			return dataList;
		} catch (Exception e) {
			LOGGER.error("searchDynTaskChecklist出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description:通过主键查询单条记录
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public DynTaskChecklistDTO queryDynTaskChecklistByPrimaryKey(String id) throws Exception {
		try {
			DynTaskChecklistDTO dto = dynTaskChecklistDao.findDynTaskChecklistById(id);
			// 记录日志
			SysLogUtil.log4Query(dto);
			return dto;
		} catch (Exception e) {
			LOGGER.error("queryDynTaskChecklistByPrimaryKey出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description:新增对象
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	public String insertDynTaskChecklist(DynTaskChecklistDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynTaskChecklistDao.insertDynTaskChecklist(dto);
			// 记录日志
			SysLogUtil.log4Insert(dto);
			return id;
		} catch (Exception e) {
			LOGGER.error("insertDynTaskChecklist出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description:批量新增对象
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	public int insertDynTaskChecklistList(List<DynTaskChecklistDTO> dtoList) throws Exception {
		List<DynTaskChecklistDTO> demo = new ArrayList<DynTaskChecklistDTO>();
		for (DynTaskChecklistDTO dto : dtoList) {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			demo.add(dto);
		}
		try {
			return dynTaskChecklistDao.insertDynTaskChecklistList(demo);
		} catch (Exception e) {
			LOGGER.error("insertDynTaskChecklistList出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description:修改对象全部字段
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	public int updateDynTaskChecklist(DynTaskChecklistDTO dto) throws Exception {
		try {
			// 记录日志
			DynTaskChecklistDTO old = findById(dto.getId());
			SysLogUtil.log4Update(dto, old);
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int ret = dynTaskChecklistDao.updateDynTaskChecklistAll(old);
			if (ret == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return ret;
		} catch (Exception e) {
			LOGGER.error("updateDynTaskChecklist出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description:修改对象部分字段
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	public int updateDynTaskChecklistSensitive(DynTaskChecklistDTO dto) throws Exception {
		try {
			// 记录日志
			DynTaskChecklistDTO old = findById(dto.getId());
			SysLogUtil.log4Update(dto, old);
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynTaskChecklistDao.updateDynTaskChecklistSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			LOGGER.error("updateDynTaskChecklistSensitive出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description:批量更新对象
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	public int updateDynTaskChecklistList(List<DynTaskChecklistDTO> dtoList) throws Exception {
		try {
			return dynTaskChecklistDao.updateDynTaskChecklistList(dtoList);
		} catch (Exception e) {
			LOGGER.error("updateDynTaskChecklistList出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * @description:按主键单条删除
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public int deleteDynTaskChecklistById(String id) throws Exception {
		if (StringUtils.isEmpty(id)) {
			throw new Exception("删除失败！传入的参数主键为null");
		}
		try {
			// 记录日志
			SysLogUtil.log4Delete(findById(id));
			return dynTaskChecklistDao.deleteDynTaskChecklistById(id);
		} catch (Exception e) {
			LOGGER.error("deleteDynTaskChecklistById出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description:批量删除数据
	 * @param ids
	 *            id的数组
	 * @return
	 * @throws Exception
	 */
	public int deleteDynTaskChecklistByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynTaskChecklistById(id);
			result++;
		}
		return result;
	}

	/**
	 * @description:批量删除数据2
	 * @param idlist
	 *            id的List
	 * @return
	 * @throws Exception
	 */
	public int deleteDynTaskChecklistList(List<String> idlist) throws Exception {
		try {
			return dynTaskChecklistDao.deleteDynTaskChecklistList(idlist);
		} catch (Exception e) {
			LOGGER.error("deleteDynTaskChecklistList出错：", e);
			e.printStackTrace();
			throw e;
		}
	}

	/**
	 * 日志专用，内部方法，不再记录日志
	 * 
	 * @return
	 * @throws Exception
	 */
	private DynTaskChecklistDTO findById(String id) throws Exception {
		try {
			DynTaskChecklistDTO dto = dynTaskChecklistDao.findDynTaskChecklistById(id);
			return dto;
		} catch (Exception e) {
			LOGGER.error("findById出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description:计算参数
	 * @param type
	 *            计算什么参数 no 根据no决定是否插入数据库
	 * @return 计算好的参数
	 */
	public String compute(String type, String no) {
		if (type.equals("1")) {
			String fromno = "";
			Calendar calendar = Calendar.getInstance();
			int year = calendar.get(Calendar.YEAR);
			int month = calendar.get(Calendar.MONTH) + 1;
			int date = calendar.get(Calendar.DATE);
			// 判断是否有存储日期 如果没有 代表是第一条数据
			if (CalDATE == 0) {
				fromno = year + "" + month + "" + date + "001";
				CalDATE = date;
				fromOn = 1;
				return fromno;
			}
			// 判断存储日期是否与今天日期一样 如果不一样代表未生产过编号
			if (CalDATE != date) {
				fromOn = 1;
				fromno = year + "" + month + "" + date + "00" + fromOn;
				fromOn++;
				CalDATE = date;
				return fromno;
			}

			// 判断存储日期是否与今天日期一样 如果一样代表已经生产过编号
			if (CalDATE == date) {
				String on = "00";
				fromOn++;
				if (fromOn >= 10) {
					on = "0";
				} else if (fromOn >= 100) {
					on = "";
				}
				if (fromOn > 999) {
					fromOn = 1;
				}
				fromno = year + "" + month + "" + date + on + fromOn;
				return fromno;
			}

		}

		return null;
	}

	/**
	 * 修改对象部分字段
	 * 
	 * @param dto
	 *            修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynInspectionSensitive(DynInspectionDTO dto) throws Exception {
		try {
			// 记录日志
			DynInspectionDTO old = findByIdDTO(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynTaskChecklistDao.updateDynInspectionSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			LOGGER.error("updateDynInspectionSensitive出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 日志专用，内部方法，不再记录日志
	 * 
	 * @param id
	 *            主键id
	 * @return DynInspectionDTO
	 * @throws Exception
	 */
	public DynInspectionDTO findByIdDTO(String id) throws Exception {
		try {
			DynInspectionDTO dto = dynTaskChecklistDao.findDynInspectionById(id);
			// 记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			LOGGER.error("findById出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}
	public XWPFDocument getWode(String id,String entryid) throws SQLException{
		DynInspectionDTO dto = null;
		List<String> arr = null;
		try {
			dto = findByIdDTO(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(entryid == null){
			entryid = dynTaskChecklistDao.getEntryid(id);
		}
		if(dto == null){
			dto=dynTaskChecklistDao.queryAttr3(id);
			id = dto.getId();
		}
		int Hash = ComUtil.getHashInt(entryid, 8);
		String  HashId = "bpm_track_ext"+Hash;	
		//创建word对象
		XWPFDocument doc = new XWPFDocument();

		//创建复数表格
		XWPFTable sTable = doc.createTable();
		//创建表格
		XWPFTable xTable = doc.createTable();
		this.setTableStyle(sTable);
		this.setTableStyle(xTable);
		XWPFTableCell cell  =  sTable.getRow(0).getCell(0);
		this.setBorder(cell);
		this.setBodyTextTmp(cell, "巡察反馈问题整改归零表", "黑体", 20, true, 0);
		cell = sTable.getRow(0).addNewTableCell();
		this.setBodyTextTmp(cell, "", "黑体", 12, false, 0);
		this.MergeCell(sTable);
		cell  =  xTable.getRow(0).getCell(0);	
	    this.setBorder(cell);
		this.setBodyTextTmp(cell, "问题序号:"+dto.getInspectionOn(), "宋体", 12, false, 0);		    
		cell = xTable.getRow(0).addNewTableCell();
		xTable.getRow(0).setHeight(100);
	    this.setBorder(cell);
		this.setBodyTextTmp(cell, "责任部门（人）："+getUserDept(dto.getInspectionPosen().split(";")), "宋体", 12, false, 0);
		XWPFTableRow row = xTable.createRow();
		row.setHeight(1200);
		this.setBodyTextTmp(row.getCell(0), "巡察反馈的问题（包括例证）:", "宋体", 12, false, 0);
		this.setBodyTextTmp(row.getCell(1), dto.getInspectionIssue(), "宋体", 12, false, 0);
		row = xTable.createRow();
		row.setHeight(1200);
		this.setBodyTextTmp(row.getCell(0), "产生问题的根本原因:", "宋体", 12, false, 0);
		this.setBodyTextTmp(row.getCell(1), dto.getInspectionEndIssue(), "宋体", 12, false, 0);
		row = xTable.createRow();
		row.setHeight(1200);
		this.setBodyTextTmp(row.getCell(0), "针对根本原因制定的归零措施:", "宋体", 12, false, 0);
		this.setBodyTextTmp(row.getCell(1), dto.getInspectionMeasureIssue(), "宋体", 12, false, 0);
		row = xTable.createRow();
		row.setHeight(1200);
		this.setBodyTextTmp(row.getCell(0), "整改措施完成情况:", "宋体", 12, false, 0);
		this.setBodyTextTmp(row.getCell(1), dto.getInspectionEndIssueQk(), "宋体", 12, false, 0);
		row = xTable.createRow();
		row.setHeight(1200);
		this.setBodyTextTmp(row.getCell(0), "整改措施落实的佐证材料:", "宋体", 12, false, 0);
		//第一个是主键id 第二个是电子表单组件的实例id
		List<SysFileUpload> sys = uploda.getFileListByFormId(id,"M0QNQdnkP7mMAm48EJdfvRr5oRAChmED");
		if(sys != null&&sys.size()!=0){
			arr = new ArrayList<>();
			for(SysFileUpload file : sys){
				arr.add(file.getFILE_NAME());				
			}
			this.setBodyTextTmpn(row.getCell(1), arr.toArray(new String[arr.size()]), "宋体", 12, false, 0);		
		}else{
			this.setBodyTextTmp(row.getCell(1),dto.getAttribute02(), "宋体", 12, false, 0);
		}	
		row = xTable.createRow();
		row.setHeight(1200);
		this.setBodyTextTmp(row.getCell(0), "举一反三检查情况:", "宋体", 12, false, 0);
		this.setBodyTextTmp(row.getCell(1), dto.getInspectionOneAnd(), "宋体", 12, false, 0);
		row = xTable.createRow();
		row.setHeight(1200);
		this.setBodyTextTmp(row.getCell(0), "被巡察单位主管领导审核:", "宋体", 12, false, 0);
		this.setBodyTextTmpn(row.getCell(1),this.getTaskArray(entryid, HashId, "task3"), "宋体", 12, false, 0);
		row = xTable.createRow();
		row.setHeight(1200);
		this.setBodyTextTmp(row.getCell(0), "被巡察单位巡察整改领导小组审核:", "宋体", 12, false, 0);
		this.setBodyTextTmpn(row.getCell(1),this.getTaskArray(entryid, HashId, "task6"), "宋体", 12, false, 0);
		row = xTable.createRow();
		row.setHeight(1200);
		this.setBodyTextTmp(row.getCell(0), "公司主管业务部门审查:", "宋体", 12, false, 0);
		this.setBodyTextTmpn(row.getCell(1),this.getTaskArray(entryid, HashId, "task4"), "宋体", 12, false, 0);
		return doc;
	}
	//设置表格单元格内容
	public void setBodyTextTmp(XWPFTableCell cell,String text,String fontFamily,int fontSize,boolean bold,int get){
		XWPFParagraph paragraph = cell.getParagraphs().get(get);
		cell.getCTTc().addNewTcPr().addNewTcW().setW(BigInteger.valueOf(8000));
		if(!bold){
			//根据标题加粗处理来判断是居中还是水平居中
			paragraph.setAlignment(ParagraphAlignment.BOTH);
			paragraph.setVerticalAlignment(TextAlignment.CENTER);
			paragraph.setIndentationLeft(500);
			paragraph.setIndentationRight(500);
			paragraph.setSpacingBefore(500);
			paragraph.setSpacingAfter(500);
		}else{
			paragraph.setAlignment(ParagraphAlignment.CENTER);
		}
		XWPFRun run = paragraph.createRun();
		run.setFontFamily(fontFamily);
		run.setBold(bold);
		run.setText(text);
		run.setFontSize(fontSize);
	}
	//处理需要换行的内容
	public void setBodyTextTmpn(XWPFTableCell cell,String [] texts,String fontFamily,int fontSize,boolean bold,int get){
		XWPFParagraph paragraph = cell.getParagraphs().get(get);
		CTTcPr cellPr = cell.getCTTc().getTcPr();
		cell.getCTTc().addNewTcPr().addNewTcW().setW(BigInteger.valueOf(8000));
		paragraph.setAlignment(ParagraphAlignment.CENTER);
		XWPFRun run = paragraph.createRun();
		run.setFontFamily(fontFamily);
		run.setBold(bold);		
		run.setFontSize(fontSize);
		for(int i=0;i<texts.length;i++){
			run.setText(texts[i]);
			run.addBreak();
		}
	}
	//做去掉边框的处理
	public void setBorder(XWPFTableCell cell){		
	  CTTc cttc =	cell.getCTTc();
	  CTTcPr ctcpr=cttc.addNewTcPr();
	  cttc.getTcPr().addNewTcBorders().addNewLeft().setVal(STBorder.NIL);
	  cttc.getTcPr().addNewTcBorders().addNewRight().setVal(STBorder.NIL);
	  cttc.getTcPr().addNewTcBorders().addNewTop().setVal(STBorder.NIL);
	  cttc.getTcPr().addNewTcBorders().addNewBottom().setVal(STBorder.NIL);
	}
	//合并单元格
	public void MergeCell(XWPFTable sTable){
		XWPFTableCell cell1  =  sTable.getRow(0).getCell(0);
		XWPFTableCell cell2  =  sTable.getRow(0).getCell(1);
		cell1.getCTTc().addNewTcPr().addNewGridSpan().setVal(BigInteger.valueOf(2));
		cell2.getCTTc().newCursor().removeXml();
	}
	//设置表格样式
	public void setTableStyle(XWPFTable Table){
		//表格居中显示
		CTTblPr tblPr = Table.getCTTbl().addNewTblPr();
		tblPr.addNewJc().setVal(STJc.CENTER);
		//列宽自动分割
		CTTblWidth tblWidth = tblPr.isSetTblW() ? tblPr.getTblW() :tblPr.addNewTblW();
		tblWidth.setW(new BigInteger("20000000"));
		tblWidth.setType(STTblWidth.AUTO);
	}
	//获取流程意见
	public String[] getTaskArray(String entryid,String HashId,String taskName) throws SQLException{
		List<Map<String,Object>>  dtos  = dynTaskChecklistDao.getTask(entryid,HashId,taskName);	
		List<String> arr = new ArrayList<>();
		for(int i=0;i<dtos.size();i++){
			Map<String,Object> map = dtos.get(i);
			SimpleDateFormat sr = new SimpleDateFormat("yyyy-MM-dd HH:mm:SS");
			String mesage = ClobToString((CLOB)map.get("MESSAGE_")) ;
			TIMESTAMP end = (TIMESTAMP)map.get("END_");
			String date =sr.format(end.dateValue());
			String dnam = (String) map.get("OP_UNAME_");
			arr.add(mesage);
			arr.add("审核日期:"+date);
			arr.add("姓名:"+dnam);
		}
		
		String [] texts = arr.toArray(new String[arr.size()]);
		return texts;
	}
	//处理用户id
	public String getUserDept(String[] userAll){
		String userdept ="";
		for(int i =0;i<userAll.length;i++){
			SysUser user = sysuserAPI.getSysUserById(userAll[i]);
			userdept+= user.getDeptName()+ "(" + user.getName() + ")";
			if(i!=userAll.length){
				userdept += ";";	
			}
			 
		}	
		return userdept;
	}

	public HSSFWorkbook extor(HSSFWorkbook wb, String id,String entryid) {
		DynInspectionDTO dto = null;
		SimpleDateFormat sr = new SimpleDateFormat("yyyy-MM-dd");
		try {
			dto = findByIdDTO(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(entryid == null){
			entryid = dynTaskChecklistDao.getEntryid(id);
		}
		if(dto == null){
			dto=dynTaskChecklistDao.queryAttr3(id);
			id = dto.getAttribute03();
		}
		int Hash = ComUtil.getHashInt(entryid, 8);
		String  HashId = "bpm_track_ext"+Hash;		
		Sheet sheet = wb.createSheet("巡察反馈问题整改归零表");
		Row row = sheet.createRow(0);
		// 获取表格样式对象
		HSSFCellStyle style = wb.createCellStyle();
		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		// 设置字体样式以及px
		Font font = wb.createFont();
		font.setFontName("微软雅黑");
		font.setFontHeightInPoints((short) 12);
		style.setFont(font);
		Cell cell = null;
		sheet.setDefaultColumnWidth(20);
		sheet.setDefaultRowHeight((short) 800);
		cell = row.createCell(0);
		for (int i = 1; i < 4; i++) {
			row.createCell(i);
		}
		cell.setCellValue("巡察反馈问题整改归零表");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 8));
		row.setHeight((short) 800);
		row = sheet.createRow(1);
		cell = row.createCell(0);
		row.createCell(1);
		cell.setCellValue("问题序号:" + dto.getInspectionOn());
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(1, 1, 0, 1));
		cell = row.createCell(6);
		row.createCell(7);
	    String[]  userAll =	dto.getInspectionPosen().split(";");
	    String userdept ="";
		for(int i =0;i<userAll.length;i++){
			SysUser user = sysuserAPI.getSysUserById(userAll[i]);
			userdept+= user.getDeptName()+ "(" + user.getName() + ")";
			if(i!=userAll.length){
				userdept += ";";	
			}
			 
		}		
		cell.setCellValue("责任部门（人）:" + userdept);
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(1, 1, 6, 7));
		row = sheet.createRow(2);
		cell = row.createCell(0);
		row.createCell(1);
		cell.setCellValue("巡察反馈的问题（包括例证）:");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(2, 2, 0, 1));
		cell = row.createCell(2);
		row.createCell(3);
		cell.setCellValue(dto.getInspectionIssue());
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(2, 2, 2, 3));
		row = sheet.createRow(3);
		cell = row.createCell(0);
		row.createCell(1);
		cell.setCellValue("产生问题的根本原因:");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(3, 3, 0, 1));
		cell = row.createCell(2);
		row.createCell(3);
		cell.setCellValue(dto.getInspectionEndIssue());
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(3, 3, 2, 3));
		row = sheet.createRow(4);
		cell = row.createCell(0);
		row.createCell(1);
		cell.setCellValue("针对根本原因制定的归零措施:");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(4, 4, 0, 1));
		cell = row.createCell(2);
		row.createCell(3);
		cell.setCellValue(dto.getInspectionMeasureIssue());
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(4, 4, 2, 3));
		row = sheet.createRow(5);
		cell = row.createCell(0);
		row.createCell(1);
		cell.setCellValue("整改措施完成情况:");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(5, 5, 0, 1));
		cell = row.createCell(2);
		row.createCell(3);
		cell.setCellValue(dto.getInspectionEndIssueQk());
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(5, 5, 2, 3));
		row = sheet.createRow(6);
		cell = row.createCell(0);
		row.createCell(1);
		cell.setCellValue("整改措施落实的佐证材料:");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(6, 6, 0, 1));
		cell = row.createCell(2);
		row.createCell(3);
		cell.setCellValue(dto.getAttribute02());
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(6, 6, 2, 3));
		row = sheet.createRow(7);
		cell = row.createCell(0);
		row.createCell(1);
		cell.setCellValue("举一反三检查情况:");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(7, 7, 0, 1));
		cell = row.createCell(2);
		row.createCell(3);
		cell.setCellValue(dto.getInspectionOneAnd());
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(7, 7, 2, 3));
		row = sheet.createRow(8);
		cell = row.createCell(0);
		row.createCell(1);		
		cell.setCellValue("被巡察单位主管领导审核意见:");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(8, 8, 0, 1));
		cell = row.createCell(2);
		row.createCell(3);
//		Map<String,Object>  dtos  = dynTaskChecklistDao.getTask(entryid,HashId,"task3");		
//		CLOB mesage = (CLOB)dtos.get("MESSAGE_");
//		TIMESTAMP end = (TIMESTAMP)dtos.get("END_");
//		String dnam = (String) dtos.get("SEND_UNAME_");
//		cell.setCellValue(ClobToString(mesage)+"\n审核日期为:"+end+"\n姓名:"+dnam);		
//		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(8, 8, 2, 3));
		row = sheet.createRow(9);
		cell = row.createCell(0);
		row.createCell(1);
		cell.setCellValue("被巡察单位巡察整改领导小组审核意见:");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(9, 9, 0, 1));
		cell = row.createCell(2);
		row.createCell(3);
//		dtos = dynTaskChecklistDao.getTask(entryid,HashId,"task6");
//		mesage = (CLOB)dtos.get("MESSAGE_");
//		end = (TIMESTAMP)dtos.get("END_");
//		dnam = (String) dtos.get("SEND_UNAME_");
//		cell.setCellValue(ClobToString(mesage)+"\n审核日期为:"+end+"\n姓名:"+dnam);
//		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(9, 9, 2, 3));
		row = sheet.createRow(10);
		cell = row.createCell(0);
		row.createCell(1);
		cell.setCellValue("公司主管业务部门审查:");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(10, 10, 0, 1));
		cell = row.createCell(2);
		row.createCell(3);
//		dtos = dynTaskChecklistDao.getTask(entryid,HashId,"task4");
//		mesage = (CLOB)dtos.get("MESSAGE_");
//		end = (TIMESTAMP)dtos.get("END_");
//		dnam = (String) dtos.get("SEND_UNAME_");
//		cell.setCellValue(ClobToString(mesage)+"\n审核日期为:"+end+"\n姓名:"+dnam);
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(10, 10, 2, 3));
		return wb;
	}
	public Map<String,Object> push(String lcid,String id,String userid){
		Map<String,Object> map = new HashMap<>();
		if(lcid==null){
			map.put("flag","0");
			map.put("msg","当前节点并不能推送");
			return map;
		}
		String task = dynTaskChecklistDao.selectLCID(lcid);
		if(task==null||!task.equals("task2")){
			map.put("flag","0");
			map.put("msg","当前节点并不能推送");
			return map;
		}
		try {
			DynInspectionDTO dto =  findByIdDTO(id);
			if(dto.getInspectionPosen().indexOf(userid)==-1){
				map.put("flag","3");
				map.put("msg","当前用户不是该记录负责人");
				return map;
			}
			String zt = dto.getAttribute05();
			if(zt==null || zt.equals("0")){
				map.put("flag","1");
				map.put("row",dto);
				map.put("data",queryDynTaskChecklistByPrimaryKey(dto.getAttribute03()));
				map.put("msg","可以正常推送");



				Calendar c = Calendar.getInstance();							
				SysMsgDTO sysMsgdto = new SysMsgDTO();
				sysMsgdto.setTitle("巡查整改通知");
				sysMsgdto.setContent("请前往待办填写当前进度");
				sysMsgdto.setMsgType("0");
				sysMsgdto.setSendUser("1");
				sysMsgdto.setSendUserAlias("系统消息");
				sysMsgdto.setRecvUser(dto.getInspectionPosen());
				sysMsgdto.setRecvUserAlias("信息消息");
				c.add(Calendar.DAY_OF_MONTH,7);	
				sysMsgdto.setSendDate(c.getTime());
				c.add(Calendar.DAY_OF_MONTH,15);	
				sysMsgdto.setDisappearDate(c.getTime());
				boolean bol =  sysMsgServie.insertMsg(sysMsgdto);


			    dto.setAttribute05("2");
			    this.updateDynInspectionSensitive(dto);			
			}else{
		          map.put("flag","2");
		          map.put("row",dto);
		          map.put("msg","已经推送过了");
			}
			
		} catch (Exception e) {	
			e.printStackTrace();
			LOGGER.error("推送出错："+ e.getMessage());
			map.put("flag","0");
		}
		
		
		return map;
	}

	/**
	 * 发送POST请求
	 * 
	 * @param url
	 *            发送请求的地址 jsonStr 携带的参数 headers 请求头
	 * @return String 请求返回的参数
	 */
	public String sendPostWithJson(String url, String jsonStr, HashMap<String, String> headers) {
		// 返回的结果
		String jsonResult = "";
		try {
			HttpClient client = new HttpClient();
			// 连接超时
			client.getHttpConnectionManager().getParams().setConnectionTimeout(3 * 1000);
			// 读取数据超时
			client.getHttpConnectionManager().getParams().setSoTimeout(3 * 60 * 1000);
			client.getParams().setContentCharset("UTF-8");
			PostMethod postMethod = new PostMethod(url);

			postMethod.setRequestHeader("content-type", headers.get("content-type"));

			// 非空
			if (null != jsonStr && !"".equals(jsonStr)) {
				StringRequestEntity requestEntity = new StringRequestEntity(jsonStr, headers.get("content-type"),
						"UTF-8");
				postMethod.setRequestEntity(requestEntity);
			}
			int status = client.executeMethod(postMethod);
			if (status == HttpStatus.SC_OK) {
				jsonResult = postMethod.getResponseBodyAsString();
				return jsonResult;
			}else {
				Header firstHeader = postMethod.getResponseHeader("location");  // 新的请求地址在此
                String newAddress ="http://localhost:8080/"+ firstHeader.getValue();   // 此时即拿到了重定向后的地址
			}
		} catch (Exception e) {
			throw new RuntimeException("接口连接失败！");
		}
		return jsonResult;
		
	}

	public String getUserName(String id) {
		SysUser user = sysuserAPI.getSysUserById(id);
		return user.getName();
	}
	public String getDeptName(String id) {
		
		SysDept user = sysdeptAPI.getSysDeptBySysDeptId(id);
		return user.getDeptName();
	}
	/**
	 * 新增对象
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynInspecIc(DynInspecIcDTO dto) throws Exception {
		try{
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynTaskChecklistDao.insertDynInspecIc(dto);
			//记录日志
			if(dto != null){
			  SysLogUtil.log4Insert(dto);
			}
			return id;
		}catch(Exception e){
			LOGGER.error("insertDynInspecIc出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	/**
	 * 循环计数
	 * @param id 计数id
	 * @return String
	 * @throws Exception
	 */
	public int countFor(String id)  {
		int i = dynTaskChecklistDao.countFor(id);
		if(i==0){
			return 1;
		}else{
			return i+1;
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
	public StartResultBean insertDynTaskChecklistAndStartProcess(DynTaskChecklistDTO bean, Map<String, Object> parameter, HttpServletRequest request) throws Exception{
		try {	
			Assert.notNull(parameter, "启动流程失败，请传递流程启动参数！");
			String processDefId = (String)parameter.get("processDefId");
			String formCode = (String)parameter.get("formCode");
			String jsonString = (String)parameter.get("jsonString");
			String userId = (String)parameter.get("userId");
			String deptId = (String)parameter.get("deptId");
			Assert.hasText(processDefId, "启动流程失败，请传递流程启动参数！");
			//保存业务数据
		   DynInspectionDTO dto  =new DynInspectionDTO();
		   dto.setInspectionOn(bean.getAttribute02());
		   if(bean.getManifestPosen()==null || bean.getManifestPosen().equals("null")){
			   dto.setInspectionPosen(bean.getAttribute03());
		   }else{
			   dto.setInspectionPosen(bean.getManifestPosen());
		   }
		   //巡查反馈的问题 
		   dto.setInspectionIssue(bean.getManifestIssue());
           //产生问题的根本原因
		   dto.setInspectionEndIssue(bean.getManifestCause());
		   //针对根本原因制定的归零措施
		   dto.setInspectionMeasureIssue(bean.getManifestMeasure());
		   //问题主要方面
		   dto.setAttribute01(bean.getListMainly());
		   //问题的具体内容
		   dto.setAttribute04(bean.getManifestIssueCont());
		   dto.setAttribute03(bean.getId());
		   dto.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		   SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			Date date = new Date(System.currentTimeMillis());
			bean.setDateManifest(formatter.format(date));
			bean.setAttribute01("1");
			int  i= this.updateDynTaskChecklistSensitive(bean);
		    String dtoId = this.insertDynInspection(dto);
			//声明流程变量
			Map<String, Object> variables = new HashMap<String, Object>();
			//将表单之外的参数转换成map存入流程变量
			if(jsonString != null && !"".equals(jsonString)){
				Map<String, Object> extVariables = JsonUtil.parseJSON2Map((String)jsonString);
				variables.putAll(extVariables);
			}
			//将表单对象转换成map存入流程变量
			Map<String, Object> pojoMap = (Map<String, Object>) PojoUtil.toMap(dto);
			variables.putAll(pojoMap);
			String processInstanceId = bpmOperateService.startProcessInstanceById(processDefId, formCode, userId, deptId, variables);
			return businessService.getStartResultBean(processInstanceId, dtoId, userId);
		} catch (Exception e) {
			e.printStackTrace();
			//logger.error("insertDynTaskChecklistDTOAndStartProcess出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	/**
	* 新增
	* @param dto 保存对象
	* @return String
	* @throws Exception
	*/
	public String insertDynInspection(DynInspectionDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynTaskChecklistDao.insertDynInspection(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
//			logger.error("insertDynInspection出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	public String tolcsj(String type,String id){
		if(type.equals("0")){
		 return	dynTaskChecklistDao.selectLczt(id);
		}
		if(type.equals("1")){
			return dynTaskChecklistDao.selectlcid(id);
		}		
		return "";
	}
	public String ClobToString(CLOB clob){
		String reString = "";
		try{
			Reader is = clob.getCharacterStream();
			BufferedReader br = new BufferedReader(is);
			String s = br.readLine();
			StringBuffer sb = new StringBuffer();
			while (s !=null){
				sb.append(s);
				s = br.readLine();
			}
			reString = sb.toString();
			if(br!=null){
				br.close();
			}
			if(is !=null){
				is.close();
			}
			return reString;
		}catch(Exception ex){
			LOGGER.error("转换失败，异常为:"+ex.getMessage());
			return null;
		}
		
	}
	public String getDbid(String id){
			Assert.notNull(id, "转换失败，请传递参数！");
			return dynTaskChecklistDao.getDbid(id);	
	}

	/**
	 *
	 * @param id
	 * @return
	 */
	public DynInspectionDTO findAttr3(String id){
		return dynTaskChecklistDao.queryAttr3(id);
	}
}
