package avicit.pb.milepost.dynfiveof.service;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.servlet.http.HttpServletRequest;

import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.SysDeptAPI;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRichTextString;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.listener.InstanceDeleteEventListener;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.spring.SpringFactory;
import avicit.pb.milepost.dynfiveof.dao.DynFiveOfDAO;
import avicit.pb.milepost.dynfiveof.dto.DynFiveOfDTO;
import avicit.pb.milepost.dynyouthrecord.dto.DynSubZxbasb1DTO;
import avicit.pb.milepost.dynyouthrecord.dto.DynYouthRecordDTO;
import avicit.pb.milepost.dynyouthrecord.service.DynYouthRecordService;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import avicit.platform6.modules.system.sysfileupload.service.SwfUploadService;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-17 16:01
 * @类说明：
 * @修改记录： 
 */
@Service
public class DynFiveOfService implements Serializable,InstanceDeleteEventListener,LoaderConstant {

	private static final Logger logger = LoggerFactory.getLogger(DynFiveOfService.class);

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private BpmOperateService bpmOperateService;
	
	@Autowired
	private BusinessService businessService;

	@Autowired
	private DynFiveOfDAO dynFiveOfDAO;
	
	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;

	@Autowired
	private SwfUploadService sysAttachmentAPI;

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	/**
	 * 流程删除事件方法
	 * @param processInstanceId 流程实例id
	 * @param executionId 
	 * @param formId 表单id
	 * @throws Exception
	 */
	@Override
	public void notify(String processInstanceId, String executionId, String formId) throws Exception {
		DynFiveOfDAO dynFiveOfDAO = SpringFactory.getBean(DynFiveOfDAO.class);
		dynFiveOfDAO.deleteDynFiveOfById(formId);
	}

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynFiveOfDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynFiveOfDTO> searchDynFiveOfByPage(QueryReqBean<DynFiveOfDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynFiveOfDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynFiveOfDTO> dataList = dynFiveOfDAO.searchDynFiveOfByPage(searchParams, orderBy, keyWord);
			for(DynFiveOfDTO dto : dataList.getResult()) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			QueryRespBean<DynFiveOfDTO> queryRespBean = new QueryRespBean<DynFiveOfDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynFiveOfByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynFiveOfDTO>
	 * @throws Exception
	 */
	public List<DynFiveOfDTO> searchDynFiveOf(DynFiveOfDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynFiveOfDTO> dataList = dynFiveOfDAO.searchDynFiveOf(searchParams, orderBy, keyWord);
			for(DynFiveOfDTO dto : dataList) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynFiveOf出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynFiveOfDTO>
	 * @throws Exception
	 */
	public List<DynFiveOfDTO> searchDynFiveOfForExport(DynFiveOfDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynFiveOfDTO> dataList = dynFiveOfDAO.searchDynFiveOfForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynFiveOfForExport出错：", e);
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
	 * @return DynFiveOfDTO
	 * @throws Exception
	 */
	public DynFiveOfDTO queryDynFiveOfByPrimaryKey(String id) throws Exception {
		try {
			DynFiveOfDTO dto = dynFiveOfDAO.findDynFiveOfById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynFiveOfByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 新增
	* @param dto 保存对象
	* @return String
	* @throws Exception
	*/
	public String insertDynFiveOf(DynFiveOfDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynFiveOfDAO.insertDynFiveOf(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynFiveOf出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynFiveOfList(List<DynFiveOfDTO> dtoList) throws Exception {
		try {
			List<DynFiveOfDTO> beanList = new ArrayList<DynFiveOfDTO>();
			for (DynFiveOfDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynFiveOfDAO.insertDynFiveOfList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynFiveOfList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynFiveOfAll(DynFiveOfDTO dto) throws Exception {
		try {
			//记录日志
			DynFiveOfDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynFiveOfDAO.updateDynFiveOfAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynFiveOfAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynFiveOfSensitive(DynFiveOfDTO dto) throws Exception {
		try {
			//记录日志
			DynFiveOfDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynFiveOfDAO.updateDynFiveOfSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynFiveOfSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynFiveOfList(List<DynFiveOfDTO> dtoList) throws Exception {
		try {
			return dynFiveOfDAO.updateDynFiveOfList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynFiveOfList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynFiveOfById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynFiveOfDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			//删除附件
			sysAttachmentAPI.deleteAttachByFormId(id);
			//删除流程数据
			String processInstanceId = bpmOperateService.getInstanceIdByFormid(id);
			if(StringUtils.isNotEmpty(processInstanceId)){
				bpmOperateService.deleteProcessInstanceCascade(processInstanceId);
			}
			return dynFiveOfDAO.deleteDynFiveOfById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynFiveOfById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynFiveOfByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynFiveOfById(id);
			result++;
		}
		return result;
	}

	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynFiveOfDTO
	 * @throws Exception
	 */
	private DynFiveOfDTO findById(String id) throws Exception {
		try {
			DynFiveOfDTO dto = dynFiveOfDAO.findDynFiveOfById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
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
	public StartResultBean insertDynFiveOfAndStartProcess(DynFiveOfDTO bean, Map<String, Object> parameter) throws Exception{
		try {	
			Assert.notNull(parameter, "启动流程失败，请传递流程启动参数！");
			String processDefId = (String)parameter.get("processDefId");
			String formCode = (String)parameter.get("formCode");
			String jsonString = (String)parameter.get("jsonString");
			String userId = (String)parameter.get("userId");
			String deptId = (String)parameter.get("deptId");
			Assert.hasText(processDefId, "启动流程失败，请传递流程启动参数！");
			//保存业务数据
			this.insertDynFiveOf(bean);
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
			logger.error("insertDynFiveOfDTOAndStartProcess出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	@SuppressWarnings("deprecation")
	public void downloadExcel(HSSFWorkbook workbook,int sheetNum,String[] headers,List<DynFiveOfDTO> dtoList,HttpServletRequest request) throws Exception{
		HSSFSheet sheet = workbook.createSheet();
		SimpleDateFormat sr = new SimpleDateFormat("yyyy-MM-dd");
		HSSFRow row = sheet.createRow(0);
		workbook.setSheetName(sheetNum,"五小成果申报");
		sheet.setDefaultColumnWidth((short)10);
		for(int i=0;i<headers.length;i++){
			HSSFCell cell = row.createCell(i);
			HSSFRichTextString text = new HSSFRichTextString(headers[i]);
			cell.setCellValue(text.toString());
		}
		HSSFCell cell;
		HSSFRichTextString text;
		for(int i =0;i<dtoList.size();i++){
			if(dtoList.get(i)==null) {
				continue;
			}
				String attr1 = "";
				String attr2 = "";
				String attr3 = "";



			 row = sheet.createRow(i+1);
			 DynFiveOfDTO dto = dtoList.get(i);
			SysUser user = sysUserLoader.getSysUserById(dto.getFiveName());
			List<Map<String,Object>> attr1List = jdbcTemplate.queryForList("select * from dyn_five_of_user where five_of_id = '"+dto.getId()+"' ");
			for(Map<String, Object> attr1Map : attr1List){
				attr1 += attr1Map.get("USER_NAME")+ ";";
				SysDept dept = sysDeptLoader.getSysDeptBySysDeptId((String) attr1Map.get("PARTY_NAME"));
				if (dept == null) {
					attr2 += "" + ";";
				} else {
					attr2 += dept.getDeptName() + ";";
				}
				attr3 += attr1Map.get("DUTIES") + ";";
			}
			 cell = row.createCell(0);
			 text = new HSSFRichTextString(dto.getId());
			 cell.setCellValue(text.toString());
			 cell = row.createCell(1);
			 text = new HSSFRichTextString(dto.getFiveNo());
			 cell.setCellValue(text.toString());

			cell = row.createCell(2);
			text = new HSSFRichTextString(user.getName());
			cell.setCellValue(text.toString());

			cell = row.createCell(3);
			text = new HSSFRichTextString(attr1);
			cell.setCellValue(text.toString());

			cell = row.createCell(4);
			text = new HSSFRichTextString(attr2);
			cell.setCellValue(text.toString());

			cell = row.createCell(5);
			text = new HSSFRichTextString(attr3);
			cell.setCellValue(text.toString());

			 cell = row.createCell(6);
			 text = new HSSFRichTextString(sr.format(dto.getFiveDate()));
			 cell.setCellValue(text.toString());
			 cell = row.createCell(7);
			 text = new HSSFRichTextString(dto.getFiveEffect());
			 cell.setCellValue(text.toString());
			 cell = row.createCell(8);
			 text = new HSSFRichTextString(dto.getFiveProspects());
			 cell.setCellValue(text.toString());
			 cell = row.createCell(9);
			 text = new HSSFRichTextString(dto.getPosenTel());
			 cell.setCellValue(text.toString());
			 cell = row.createCell(10);
			 text = new HSSFRichTextString(dto.getFiveSituation());
			 cell.setCellValue(text.toString());				 
		}
		
	}
	public boolean quartUser(String id){
		JdbcTemplate jdbc  = SpringFactory.getBean(JdbcTemplate.class);
		List<Map<String,Object>> list = jdbc.queryForList("select * from dyn_youth_info where to_char(user_id) = '"+id+"' and new_date > ADD_MONTHS(SYSDATE,-35*12)");
		if(list!=null && list.size() != 0){
			return true;
		}
		
		return false;
	}
	public int updatebpmHistProcinstTitle(String title,String formid){
		if(title==null||"".equals(title)){
			return 0;
		}
		
		return  dynFiveOfDAO.updatebpmHistProcinstTitle(formid,title);
	}


	public DynFiveOfDTO searchDynFiveOfById(String id) {
		try {
			DynFiveOfDTO dto = dynFiveOfDAO.findDynFiveOfId(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

