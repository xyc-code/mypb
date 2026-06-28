package avicit.cape.pmprojectys.pmprojectyssts.service;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import avicit.platform6.modules.system.sysfileupload.service.SwfUploadService;
import org.springframework.util.Assert;

import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.commons.utils.JsonUtil;
import avicit.platform6.core.domain.BeanProcess;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.sfn.intercept.SelfDefinedQuery;
import avicit.cape.pmprojectys.pmprojectyssts.dao.PmProjectYsStsDao;
import avicit.cape.pmprojectys.pmprojectyssts.dto.PmProjectYsStsDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-09 10:52 
 * @类说明：请填写
 * @修改记录：
 */
@Service
public class PmProjectYsStsService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(PmProjectYsStsService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private BpmOperateService bpmOperateService;

	@Autowired
	private PmProjectYsStsDao pmProjectYsStsDao;

	@Autowired
	private SwfUploadService sysAttachmentAPI;

	/**
	 * @description:按条件分页查询
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public QueryRespBean<PmProjectYsStsDTO> searchPmProjectYsStsByPage(QueryReqBean<PmProjectYsStsDTO> queryReqBean,
			String sfnConditions, String orgIdentity) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			PmProjectYsStsDTO searchParams = queryReqBean.getSearchParams();
			SelfDefinedQuery sdc = new SelfDefinedQuery(sfnConditions, "t1");
			Page<PmProjectYsStsDTO> dataList = pmProjectYsStsDao.searchPmProjectYsStsByPage(searchParams,
					sdc.parseSql(), orgIdentity);
			QueryRespBean<PmProjectYsStsDTO> queryRespBean = new QueryRespBean<PmProjectYsStsDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			logger.error("searchPmProjectYsStsByPage出错：", e);
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
	public PmProjectYsStsDTO queryPmProjectYsStsByPrimaryKey(String id) throws Exception {
		try {
			PmProjectYsStsDTO dto = pmProjectYsStsDao.findPmProjectYsStsById(id);
			//记录日志
			SysLogUtil.log4Query(dto);
			return dto;
		} catch (Exception e) {
			logger.error("queryPmProjectYsStsByPrimaryKey出错：", e);
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
	public String insertPmProjectYsSts(PmProjectYsStsDTO dto) throws Exception {
		try {
			if (dto.getId() == null || dto.getId().equals("")) {
				String id = ComUtil.getId();
				dto.setId(id);
			}
			PojoUtil.setSysProperties(dto, OpType.insert);
			pmProjectYsStsDao.insertPmProjectYsSts(dto);
			//记录日志
			SysLogUtil.log4Insert(dto);
			return dto.getId();
		} catch (Exception e) {
			logger.error("insertPmProjectYsSts出错：", e);
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
	public int insertPmProjectYsStsList(List<PmProjectYsStsDTO> dtoList) throws Exception {
		List<PmProjectYsStsDTO> beanList = new ArrayList<PmProjectYsStsDTO>();
		for (PmProjectYsStsDTO dto : dtoList) {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			beanList.add(dto);
		}
		try {
			return pmProjectYsStsDao.insertPmProjectYsStsList(beanList);
		} catch (Exception e) {
			logger.error("insertPmProjectYsStsList出错：", e);
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
	public int updatePmProjectYsSts(PmProjectYsStsDTO dto) throws Exception {
		try {
			//记录日志
			PmProjectYsStsDTO old = findById(dto.getId());
			SysLogUtil.log4Update(dto, old);
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int ret = pmProjectYsStsDao.updatePmProjectYsStsAll(old);
			if (ret == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return ret;
		} catch (Exception e) {
			logger.error("updatePmProjectYsSts出错：", e);
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
	public int updatePmProjectYsStsSensitive(PmProjectYsStsDTO dto) throws Exception {
		try {
			//记录日志
			PmProjectYsStsDTO old = findById(dto.getId());
			SysLogUtil.log4Update(dto, old);
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = pmProjectYsStsDao.updatePmProjectYsStsSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			logger.error("updatePmProjectYsStsSensitive出错：", e);
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
	public int updatePmProjectYsStsList(List<PmProjectYsStsDTO> dtoList) throws Exception {
		try {
			return pmProjectYsStsDao.updatePmProjectYsStsList(dtoList);
		} catch (Exception e) {
			logger.error("updatePmProjectYsStsList出错：", e);
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
	public int deletePmProjectYsStsById(String id) throws Exception {
		if (StringUtils.isEmpty(id))
			throw new Exception("删除失败！传入的参数主键为null");
		try {
			//记录日志
			SysLogUtil.log4Delete(findById(id));
			return pmProjectYsStsDao.deletePmProjectYsStsById(id);
		} catch (Exception e) {
			logger.error("deletePmProjectYsStsById出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description:批量删除数据
	 * @param ids id的数组
	 * @return
	 * @throws Exception
	 */
	public int deletePmProjectYsStsByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			sysAttachmentAPI.deleteAttachByFormId(id);
			deletePmProjectYsStsById(id);
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
	public int deletePmProjectYsStsList(List<String> idList) throws Exception {
		try {
			return pmProjectYsStsDao.deletePmProjectYsStsList(idList);
		} catch (Exception e) {
			logger.error("deletePmProjectYsStsList出错：", e);
			e.printStackTrace();
			throw e;
		}
	}

	/**
	* @description:日志专用，内部方法，不再记录日志
	* @param id
	* @return
	* @throws Exception
	*/
	private PmProjectYsStsDTO findById(String id) throws Exception {
		try {
			PmProjectYsStsDTO dto = pmProjectYsStsDao.findPmProjectYsStsById(id);
			return dto;
		} catch (Exception e) {
			logger.error("findById出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * @description:新增并开启流程
	 * @param bean parameter
	 * @return
	 * @throws Exception
	 */
	public BeanProcess insertPmProjectYsStsStartProcess(PmProjectYsStsDTO bean, Map<String, Object> parameter)
			throws Exception {
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
			String formId = bean.getId();
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
			logger.error("insertPmProjectYsStsStartProcess:", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}
}
