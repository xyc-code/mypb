package avicit.pb.member.dynufminfof.service;

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
import avicit.pb.member.dynufminfof.dao.DynUfmInfoFDAO;
import avicit.pb.member.dynufminfof.dto.DynUfmInfoFDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-13 13:27
 * @类说明：
 * @修改记录： 
 */
@Service
public class DynUfmInfoFService implements Serializable,InstanceDeleteEventListener {

	private static final Logger logger = LoggerFactory.getLogger(DynUfmInfoFService.class);

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private BpmOperateService bpmOperateService;
	
	@Autowired
	private BusinessService businessService;

	@Autowired
	private DynUfmInfoFDAO dynUfmInfoFDAO;
	
	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;
	
	
	/**
	 * 流程删除事件方法
	 * @param processInstanceId 流程实例id
	 * @param executionId 
	 * @param formId 表单id
	 * @throws Exception
	 */
	@Override
	public void notify(String processInstanceId, String executionId, String formId) throws Exception {
		DynUfmInfoFDAO dynUfmInfoFDAO = SpringFactory.getBean(DynUfmInfoFDAO.class);
		dynUfmInfoFDAO.deleteDynUfmInfoFById(formId);
	}

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynUfmInfoFDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynUfmInfoFDTO> searchDynUfmInfoFByPage(QueryReqBean<DynUfmInfoFDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynUfmInfoFDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynUfmInfoFDTO> dataList = dynUfmInfoFDAO.searchDynUfmInfoFByPage(searchParams, orderBy, keyWord);
			for(DynUfmInfoFDTO dto : dataList.getResult()) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			QueryRespBean<DynUfmInfoFDTO> queryRespBean = new QueryRespBean<DynUfmInfoFDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynUfmInfoFByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynUfmInfoFDTO>
	 * @throws Exception
	 */
	public List<DynUfmInfoFDTO> searchDynUfmInfoF(DynUfmInfoFDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynUfmInfoFDTO> dataList = dynUfmInfoFDAO.searchDynUfmInfoF(searchParams, orderBy, keyWord);
			for(DynUfmInfoFDTO dto : dataList) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynUfmInfoF出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynUfmInfoFDTO>
	 * @throws Exception
	 */
	public List<DynUfmInfoFDTO> searchDynUfmInfoFForExport(DynUfmInfoFDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynUfmInfoFDTO> dataList = dynUfmInfoFDAO.searchDynUfmInfoFForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynUfmInfoFForExport出错：", e);
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
	 * @return DynUfmInfoFDTO
	 * @throws Exception
	 */
	public DynUfmInfoFDTO queryDynUfmInfoFByPrimaryKey(String id) throws Exception {
		try {
			DynUfmInfoFDTO dto = dynUfmInfoFDAO.findDynUfmInfoFById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynUfmInfoFByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 新增
	* @param dto 保存对象
	* @return String
	* @throws Exception
	*/
	public String insertDynUfmInfoF(DynUfmInfoFDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynUfmInfoFDAO.insertDynUfmInfoF(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynUfmInfoF出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynUfmInfoFList(List<DynUfmInfoFDTO> dtoList) throws Exception {
		try {
			List<DynUfmInfoFDTO> beanList = new ArrayList<DynUfmInfoFDTO>();
			for (DynUfmInfoFDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynUfmInfoFDAO.insertDynUfmInfoFList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynUfmInfoFList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynUfmInfoFAll(DynUfmInfoFDTO dto) throws Exception {
		try {
			//记录日志
			DynUfmInfoFDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynUfmInfoFDAO.updateDynUfmInfoFAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynUfmInfoFAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynUfmInfoFSensitive(DynUfmInfoFDTO dto) throws Exception {
		try {
			//记录日志
			DynUfmInfoFDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynUfmInfoFDAO.updateDynUfmInfoFSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynUfmInfoFSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynUfmInfoFList(List<DynUfmInfoFDTO> dtoList) throws Exception {
		try {
			return dynUfmInfoFDAO.updateDynUfmInfoFList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynUfmInfoFList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynUfmInfoFById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynUfmInfoFDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			//删除流程数据
			String processInstanceId = bpmOperateService.getInstanceIdByFormid(id);
			if(StringUtils.isNotEmpty(processInstanceId)){
				bpmOperateService.deleteProcessInstanceCascade(processInstanceId);
			}
			return dynUfmInfoFDAO.deleteDynUfmInfoFById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynUfmInfoFById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynUfmInfoFByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynUfmInfoFById(id);
			result++;
		}
		return result;
	}

	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynUfmInfoFDTO
	 * @throws Exception
	 */
	private DynUfmInfoFDTO findById(String id) throws Exception {
		try {
			DynUfmInfoFDTO dto = dynUfmInfoFDAO.findDynUfmInfoFById(id);
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
	public StartResultBean insertDynUfmInfoFAndStartProcess(DynUfmInfoFDTO bean, Map<String, Object> parameter) throws Exception{
		try {	
			Assert.notNull(parameter, "启动流程失败，请传递流程启动参数！");
			String processDefId = (String)parameter.get("processDefId");
			String formCode = (String)parameter.get("formCode");
			String jsonString = (String)parameter.get("jsonString");
			String userId = (String)parameter.get("userId");
			String deptId = (String)parameter.get("deptId");
			Assert.hasText(processDefId, "启动流程失败，请传递流程启动参数！");
			//保存业务数据
			String id = this.insertDynUfmInfoF(bean);
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
			logger.error("insertDynUfmInfoFDTOAndStartProcess出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

