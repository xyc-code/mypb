package avicit.pb.dyxfg.dynxfgfq.service;

import java.io.Serializable;
import java.util.*;

import avicit.platform6.bpm.api.listener.InstanceDeleteEventListener;
import avicit.platform6.bpm.web.service.BpmOperateService;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.commons.utils.JsonUtil;
import avicit.platform6.core.spring.SpringFactory;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.util.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.pb.dyxfg.dynxfgfq.dao.DynXfgFqDAO;
import avicit.pb.dyxfg.dynxfgfq.dto.DynXfgFqDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-25 14:42
 * @类说明：DYN_XFG_FQService
 * @修改记录： 
 */
@Service
public class DynXfgFqService implements Serializable, InstanceDeleteEventListener {

	private static final Logger logger = LoggerFactory.getLogger(DynXfgFqService.class);

	private static final long serialVersionUID = 1L;
	@Autowired
	private BpmOperateService bpmOperateService;
	@Autowired
	private BusinessService businessService;

	@Autowired
	private DynXfgFqDAO dynXfgFqDAO;

	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynXfgFqDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynXfgFqDTO> searchDynXfgFqByPage(QueryReqBean<DynXfgFqDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynXfgFqDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynXfgFqDTO> dataList = dynXfgFqDAO.searchDynXfgFqByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynXfgFqDTO> queryRespBean = new QueryRespBean<DynXfgFqDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynXfgFqByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynXfgFqDTO>
	 * @throws Exception
	 */
	public List<DynXfgFqDTO> searchDynXfgFq(DynXfgFqDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynXfgFqDTO> dataList = dynXfgFqDAO.searchDynXfgFq(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynXfgFq出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynXfgFqDTO>
	 * @throws Exception
	 */
	public List<DynXfgFqDTO> searchDynXfgFqForExport(DynXfgFqDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynXfgFqDTO> dataList = dynXfgFqDAO.searchDynXfgFqForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynXfgFqForExport出错：", e);
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
	 * 主键查询
	 * @param id 主键id
	 * @return DynXfgFqDTO
	 * @throws Exception
	 */
	public DynXfgFqDTO queryDynXfgFqByPrimaryKey(String id) throws Exception {
		try {
			DynXfgFqDTO dto = dynXfgFqDAO.findDynXfgFqById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynXfgFqByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynXfgFq(DynXfgFqDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynXfgFqDAO.insertDynXfgFq(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynXfgFq出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynXfgFqList(List<DynXfgFqDTO> dtoList) throws Exception {
		try {
			List<DynXfgFqDTO> beanList = new ArrayList<DynXfgFqDTO>();
			for (DynXfgFqDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynXfgFqDAO.insertDynXfgFqList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynXfgFqList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynXfgFqAll(DynXfgFqDTO dto) throws Exception {
		try {
			//记录日志
			DynXfgFqDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynXfgFqDAO.updateDynXfgFqAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynXfgFqAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynXfgFqSensitive(DynXfgFqDTO dto) throws Exception {
		try {
			//记录日志
			DynXfgFqDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynXfgFqDAO.updateDynXfgFqSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynXfgFqSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynXfgFqList(List<DynXfgFqDTO> dtoList) throws Exception {
		try {
			return dynXfgFqDAO.updateDynXfgFqList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynXfgFqList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynXfgFqById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynXfgFqDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			//删除流程数据
			String processInstanceId = bpmOperateService.getInstanceIdByFormid(id);
			if(StringUtils.isNotEmpty(processInstanceId)){
				bpmOperateService.deleteProcessInstanceCascade(processInstanceId);
			}
			return dynXfgFqDAO.deleteDynXfgFqById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynXfgFqById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynXfgFqByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynXfgFqById(id);
			//删除流程数据
			String processInstanceId = bpmOperateService.getInstanceIdByFormid(id);
			if(StringUtils.isNotEmpty(processInstanceId)){
				bpmOperateService.deleteProcessInstanceCascade(processInstanceId);
			}
			result++;
		}
		return result;
	}

 	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynXfgFqDTO
	 * @throws Exception
	 */
	private DynXfgFqDTO findById(String id) throws Exception {
		try {
			DynXfgFqDTO dto = dynXfgFqDAO.findDynXfgFqById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
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
	 * 保存表单并启动流程
	 * @param bean 表单对象
	 * @param parameter 启动流程所需要的参数
	 * @return StartResultBean
	 * @throws Exception
	 */
	public StartResultBean insertDynXfgFqAndStartProcess(DynXfgFqDTO bean, Map<String, Object> parameter) throws Exception{
		try {
			Assert.notNull(parameter, "启动流程失败，请传递流程启动参数！");
			String processDefId = (String)parameter.get("processDefId");
			String formCode = (String)parameter.get("formCode");
			String jsonString = (String)parameter.get("jsonString");
			String userId = (String)parameter.get("userId");
			String deptId = (String)parameter.get("deptId");
			Assert.hasText(processDefId, "启动流程失败，请传递流程启动参数！");
			//保存业务数据
			this.insertDynXfgFq(bean);
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
			logger.error("insertDynXfgFqDTOAndStartProcess出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 流程删除事件方法
	 * @param processInstanceId 流程实例id
	 * @param executionId
	 * @param formId 表单id
	 * @throws Exception
	 */
	@Override
	public void notify(String processInstanceId, String executionId, String formId) throws Exception {
		DynXfgFqDAO dynXfgFqDAO = SpringFactory.getBean(DynXfgFqDAO.class);
		dynXfgFqDAO.deleteDynXfgFqById(formId);
	}
}

