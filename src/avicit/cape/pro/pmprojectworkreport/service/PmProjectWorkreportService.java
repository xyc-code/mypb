package avicit.cape.pro.pmprojectworkreport.service;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.domain.BeanProcess;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.sfn.intercept.SelfDefinedQuery;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.cape.pro.pmprojectworkreport.dto.PmProjectWorkreportDTO;
import avicit.cape.pro.pmprojectworkreport.dao.PmProjectWorkreportDao;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-03-31 23:21 
 * @类说明：请填写
 * @修改记录：
 */
@Service
public class PmProjectWorkreportService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(PmProjectWorkreportService.class);

	@Autowired
	private BpmOperateService bpmOperateService;

	private static final long serialVersionUID = 1L;

	@Autowired
	private PmProjectWorkreportDao pmProjectWorkreportDao;

	/**
	 * @description: 按条件分页查询
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public QueryRespBean<PmProjectWorkreportDTO> searchPmProjectWorkreportByPage(
			QueryReqBean<PmProjectWorkreportDTO> queryReqBean, String sfnConditions, String orgIdentity)
			throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			PmProjectWorkreportDTO searchParams = queryReqBean.getSearchParams();
			SelfDefinedQuery sdc = new SelfDefinedQuery(sfnConditions, "t1");
			Page<PmProjectWorkreportDTO> dataList = pmProjectWorkreportDao.searchPmProjectWorkreportByPage(searchParams,
					sdc.parseSql(), orgIdentity);
			QueryRespBean<PmProjectWorkreportDTO> queryRespBean = new QueryRespBean<PmProjectWorkreportDTO>();
			for (PmProjectWorkreportDTO dto : dataList.getResult()) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			logger.error("searchPmProjectWorkreportByPage出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* @description: 流程的编码转换成名称
	* @param stateCode
	* @return
	*/
	private String processStateCode2StateName(String stateCode) {
		String stateName = "";
		if (stateCode != null && stateCode.equals("active")) {
			stateName = "流转中";
		} else if (stateCode != null && stateCode.equals("ended")) {
			stateName = "结束";
		} else if (stateCode != null && stateCode.equals("start")) {
			stateName = "草稿";
		}
		return stateName;
	}

	/**
	 * @description: 按条件查询，不分页
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public List<PmProjectWorkreportDTO> searchPmProjectWorkreport(QueryReqBean<PmProjectWorkreportDTO> queryReqBean)
			throws Exception {
		try {
			PmProjectWorkreportDTO searchParams = queryReqBean.getSearchParams();
			List<PmProjectWorkreportDTO> dataList = pmProjectWorkreportDao.searchPmProjectWorkreport(searchParams);
			return dataList;
		} catch (Exception e) {
			logger.error("searchPmProjectWorkreport出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description: 通过主键查询单条记录
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public PmProjectWorkreportDTO queryPmProjectWorkreportByPrimaryKey(String id) throws Exception {
		try {
			PmProjectWorkreportDTO dto = pmProjectWorkreportDao.findPmProjectWorkreportById(id);
			//记录日志
			SysLogUtil.log4Query(dto);
			return dto;
		} catch (Exception e) {
			logger.error("queryPmProjectWorkreportByPrimaryKey出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* @description: 新增并启动流程
	* @param dto
	* @return
	* @throws Exception
	*/
	public String insertPmProjectWorkreport(PmProjectWorkreportDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			pmProjectWorkreportDao.insertPmProjectWorkreport(dto);
			//记录日志
			SysLogUtil.log4Insert(dto);
			return id;
		} catch (Exception e) {
			logger.error("insertPmProjectWorkreport出错：", e);
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
	public int insertPmProjectWorkreportList(List<PmProjectWorkreportDTO> dtoList) throws Exception {
		List<PmProjectWorkreportDTO> beanList = new ArrayList<PmProjectWorkreportDTO>();
		for (PmProjectWorkreportDTO dto : dtoList) {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			beanList.add(dto);
		}
		try {
			return pmProjectWorkreportDao.insertPmProjectWorkreportList(beanList);
		} catch (Exception e) {
			logger.error("insertPmProjectWorkreportList出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description: 修改对象全部字段
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	public int updatePmProjectWorkreport(PmProjectWorkreportDTO dto) throws Exception {
		try {
			//记录日志
			PmProjectWorkreportDTO old = findById(dto.getId());
			SysLogUtil.log4Update(dto, old);
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int ret = pmProjectWorkreportDao.updatePmProjectWorkreportAll(old);
			if (ret == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return ret;
		} catch (Exception e) {
			logger.error("updateDemoBusinessFlow出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description: 修改对象部分字段
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	public int updatePmProjectWorkreportSensitive(PmProjectWorkreportDTO dto) throws Exception {
		try {
			//记录日志
			PmProjectWorkreportDTO old = findById(dto.getId());
			SysLogUtil.log4Update(dto, old);
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int ret = pmProjectWorkreportDao.updatePmProjectWorkreportSensitive(old);
			if (ret == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return ret;
		} catch (Exception e) {
			logger.error("updateDemoBusinessFlow出错：", e);
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
	public int updatePmProjectWorkreportList(List<PmProjectWorkreportDTO> dtoList) throws Exception {
		try {
			return pmProjectWorkreportDao.updatePmProjectWorkreportList(dtoList);
		} catch (Exception e) {
			logger.error("updatePmProjectWorkreportList出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * @description: 按主键单条删除
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public int deletePmProjectWorkreportById(String id) throws Exception {
		if (StringUtils.isEmpty(id)) {
			throw new Exception("删除失败！传入的参数主键为null");
		}
		try {
			//记录日志
			SysLogUtil.log4Delete(findById(id));
			return pmProjectWorkreportDao.deletePmProjectWorkreportById(id);
		} catch (Exception e) {
			logger.error("deletePmProjectWorkreportById出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description: 批量删除数据
	 * @param ids id的数组
	 * @return
	 * @throws Exception
	 */
	public int deletePmProjectWorkreportByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deletePmProjectWorkreportById(id);
			String flowInstanceId = bpmOperateService.getInstanceIdByFormid(id);
			if (flowInstanceId != null && !"".equals(flowInstanceId)) {
				bpmOperateService.deleteProcessInstanceCascade(flowInstanceId);
			}
			result++;
		}
		return result;
	}

	/**
	 * @description:批量删除数据2
	 * @param  idList id的List
	 * @return
	 * @throws Exception
	 */
	public int deletePmProjectWorkreportList(List<String> idList) throws Exception {
		try {
			return pmProjectWorkreportDao.deletePmProjectWorkreportList(idList);
		} catch (Exception e) {
			logger.error("deletePmProjectWorkreportList出错：", e);
			e.printStackTrace();
			throw e;
		}
	}

	/**
	* 日志专用，内部方法，不再记录日志
	*/
	private PmProjectWorkreportDTO findById(String id) throws Exception {
		try {
			PmProjectWorkreportDTO dto = pmProjectWorkreportDao.findPmProjectWorkreportById(id);
			return dto;
		} catch (Exception e) {
			logger.error("findById出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* @description: 保存表单并启动流程
	* @param bean 表单对象,parameter 启动流程所需要的参数
	* @return
	* @throws Exception
	*/
	@SuppressWarnings("unchecked")
	public BeanProcess insertPmProjectWorkreportAndStartProcess(PmProjectWorkreportDTO bean,
			Map<String, Object> parameter) throws Exception {
		try {
			Assert.notNull(parameter, "启动流程失败，请传递流程启动参数！");
			String processDefId = (String) parameter.get("processDefId");
			String formCode = (String) parameter.get("formCode");
			String jsonString = (String) parameter.get("jsonString");
			String userId = (String) parameter.get("userId");
			String deptId = (String) parameter.get("deptId");
			String processInstanceId = null; //流程实例ID
			String taskUrl = ""; //待办url
			Assert.hasText(processDefId, "启动流程失败，请传递流程启动参数！");
			//业务操作
			String formId = this.insertPmProjectWorkreport(bean);
			//
			Map<String, Object> variables = new HashMap<String, Object>();
			//web表单传递过来(除表单对象外)的变量，可以为空
			if (jsonString != null && !jsonString.equals("")) {
				Map<String, Object> extVariables = JsonUtil.parseJSON2Map((String) jsonString);
				variables.putAll(extVariables);
			}
			//把表单对象转换成map,传递给流程变量
			Map<String, Object> pojoMap = (Map<String, Object>) PojoUtil.toMap(bean);
			variables.putAll(pojoMap);
			processInstanceId = bpmOperateService.startProcessInstanceById(processDefId, formCode, userId, deptId,
					variables);
			//取待办URL，如果不需要直接打开可以注释以下代码//
			taskUrl = bpmOperateService.getTaskUrl(String.valueOf(processInstanceId), "");
			//返回对象
			BeanProcess bp = new BeanProcess();
			bp.setFormId(formId);
			bp.setProcessInstanceId(processInstanceId);
			bp.setTaskUrl(taskUrl);
			return bp;
		} catch (Exception e) {
			logger.error("insertPmProjectWorkreportAndStartProcess出错:", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}
}
