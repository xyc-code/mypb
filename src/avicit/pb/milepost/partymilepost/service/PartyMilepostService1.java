package avicit.pb.milepost.partymilepost.service;

import java.io.Serializable;
import java.util.*;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
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
import avicit.pb.milepost.partymilepost.dao.PBMilepostDAO;
import avicit.pb.milepost.partymilepost.dto.PartyMilepostDTO1;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import avicit.platform6.modules.system.sysfileupload.service.SwfUploadService;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-14 08:58
 * @类说明：
 * @修改记录： 
 */
@Service
public class PartyMilepostService1 implements Serializable,InstanceDeleteEventListener {

	private static final Logger logger = LoggerFactory.getLogger(PartyMilepostService1.class);

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private BpmOperateService bpmOperateService;
	
	@Autowired
	private BusinessService businessService;

	@Autowired
	private PBMilepostDAO partyMilepostDAO;
	
	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;
	
	@Autowired
	private SwfUploadService sysAttachmentAPI;
	
	/**
	 * 流程删除事件方法
	 * @param processInstanceId 流程实例id
	 * @param executionId 
	 * @param formId 表单id
	 * @throws Exception
	 */
	@Override
	public void notify(String processInstanceId, String executionId, String formId) throws Exception {
		PBMilepostDAO partyMilepostDAO = SpringFactory.getBean(PBMilepostDAO.class);
		partyMilepostDAO.deletePartyMilepostById(formId);
	}

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<PartyMilepostDTO>
	 * @throws Exception
	 */
	public QueryRespBean<PartyMilepostDTO1> searchPartyMilepostByPage(QueryReqBean<PartyMilepostDTO1> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			PartyMilepostDTO1 searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<PartyMilepostDTO1> dataList = partyMilepostDAO.searchPBMilepostByPage(searchParams, orderBy, keyWord);
			for(PartyMilepostDTO1 dto : dataList.getResult()) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			QueryRespBean<PartyMilepostDTO1> queryRespBean = new QueryRespBean<PartyMilepostDTO1>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchPartyMilepostByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<PartyMilepostDTO>
	 * @throws Exception
	 */
	public List<PartyMilepostDTO1> searchPartyMilepost(PartyMilepostDTO1 searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<PartyMilepostDTO1> dataList = partyMilepostDAO.searchPartyMilepost(searchParams, orderBy, keyWord);
			for(PartyMilepostDTO1 dto : dataList) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchPartyMilepost出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<PartyMilepostDTO>
	 * @throws Exception
	 */
	public List<PartyMilepostDTO1> searchPartyMilepostForExport(PartyMilepostDTO1 searchParams, List<String> idsList)
			throws Exception {
		try {
			List<PartyMilepostDTO1> dataList = partyMilepostDAO.searchPartyMilepostForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchPartyMilepostForExport出错：", e);
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
	 * @return PartyMilepostDTO
	 * @throws Exception
	 */
	public PartyMilepostDTO1 queryPartyMilepostByPrimaryKey(String id) throws Exception {
		try {
			PartyMilepostDTO1 dto = partyMilepostDAO.findPartyMilepostById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryPartyMilepostByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 新增
	* @param dto 保存对象
	* @return String
	* @throws Exception
	*/
	public String insertPartyMilepost(PartyMilepostDTO1 dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			partyMilepostDAO.insertPartyMilepost(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertPartyMilepost出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertPartyMilepostList(List<PartyMilepostDTO1> dtoList) throws Exception {
		try {
			List<PartyMilepostDTO1> beanList = new ArrayList<PartyMilepostDTO1>();
			for (PartyMilepostDTO1 dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return partyMilepostDAO.insertPartyMilepostList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertPartyMilepostList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyMilepostAll(PartyMilepostDTO1 dto) throws Exception {
		try {
			//记录日志
			PartyMilepostDTO1 old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = partyMilepostDAO.updatePartyMilepostAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updatePartyMilepostAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyMilepostSensitive(PartyMilepostDTO1 dto) throws Exception {
		try {
			//记录日志
			PartyMilepostDTO1 old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = partyMilepostDAO.updatePartyMilepostSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updatePartyMilepostSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyMilepostList(List<PartyMilepostDTO1> dtoList) throws Exception {
		try {
			return partyMilepostDAO.updatePartyMilepostList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updatePartyMilepostList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deletePartyMilepostById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			PartyMilepostDTO1 dto = findById(id);
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
			return partyMilepostDAO.deletePartyMilepostById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deletePartyMilepostById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deletePartyMilepostByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deletePartyMilepostById(id);
			result++;
		}
		return result;
	}

	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return PartyMilepostDTO
	 * @throws Exception
	 */
	private PartyMilepostDTO1 findById(String id) throws Exception {
		try {
			PartyMilepostDTO1 dto = partyMilepostDAO.findPartyMilepostById(id);
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
	public StartResultBean insertPartyMilepostAndStartProcess(PartyMilepostDTO1 bean, Map<String, Object> parameter) throws Exception{
		try {	
 			Assert.notNull(parameter, "启动流程失败，请传递流程启动参数！");
			String processDefId = (String)parameter.get("processDefId");
			String formCode = (String)parameter.get("formCode");
			String jsonString = (String)parameter.get("jsonString");
			String userId = (String)parameter.get("userId");
			String deptId = (String)parameter.get("deptId");
			Assert.hasText(processDefId, "启动流程失败，请传递流程启动参数！");
			//保存业务数据
			this.updatePartyMilepostSensitive(bean);
			//this.insertPartyMilepost(bean);
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
			logger.error("insertPartyMilepostDTOAndStartProcess出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

