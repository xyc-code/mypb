package avicit.jg.jgpaymentplan.service;

import java.io.Serializable;
import java.util.List;
import java.util.ArrayList;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import avicit.platform6.modules.system.sysfileupload.service.SwfUploadService;

import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.sfn.intercept.SelfDefinedQuery;
import avicit.jg.jgpaymentplan.dao.JgPaymentPlanDao;
import avicit.jg.jgpaymentplan.dto.JgPaymentPlanDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-12 08:51 
 * @类说明：请填写
 * @修改记录：
 */
@Service
public class JgPaymentPlanService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(JgPaymentPlanService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private JgPaymentPlanDao jgPaymentPlanDao;

	@Autowired
	private SwfUploadService sysAttachmentAPI;

	/**
	 * @description:按条件分页查询
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public QueryRespBean<JgPaymentPlanDTO> searchJgPaymentPlanByPage(QueryReqBean<JgPaymentPlanDTO> queryReqBean,
			String sfnConditions, String orgIdentity) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			JgPaymentPlanDTO searchParams = queryReqBean.getSearchParams();
			SelfDefinedQuery sdc = new SelfDefinedQuery(sfnConditions, "t1");
			Page<JgPaymentPlanDTO> dataList = jgPaymentPlanDao.searchJgPaymentPlanByPage(searchParams, sdc.parseSql(),
					orgIdentity);
			QueryRespBean<JgPaymentPlanDTO> queryRespBean = new QueryRespBean<JgPaymentPlanDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			logger.error("searchJgPaymentPlanByPage出错：", e);
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
	public List<JgPaymentPlanDTO> searchJgPaymentPlan(QueryReqBean<JgPaymentPlanDTO> queryReqBean) throws Exception {
		try {
			JgPaymentPlanDTO searchParams = queryReqBean.getSearchParams();
			List<JgPaymentPlanDTO> dataList = jgPaymentPlanDao.searchJgPaymentPlan(searchParams);
			return dataList;
		} catch (Exception e) {
			logger.error("searchJgPaymentPlan出错：", e);
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
	public JgPaymentPlanDTO queryJgPaymentPlanByPrimaryKey(String id) throws Exception {
		try {
			JgPaymentPlanDTO dto = jgPaymentPlanDao.findJgPaymentPlanById(id);
			//记录日志
			SysLogUtil.log4Query(dto);
			return dto;
		} catch (Exception e) {
			logger.error("queryJgPaymentPlanByPrimaryKey出错：", e);
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
	public String insertJgPaymentPlan(JgPaymentPlanDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			jgPaymentPlanDao.insertJgPaymentPlan(dto);
			//记录日志
			SysLogUtil.log4Insert(dto);
			return id;
		} catch (Exception e) {
			logger.error("insertJgPaymentPlan出错：", e);
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
	public int insertJgPaymentPlanList(List<JgPaymentPlanDTO> dtoList) throws Exception {
		List<JgPaymentPlanDTO> beanList = new ArrayList<JgPaymentPlanDTO>();
		for (JgPaymentPlanDTO dto : dtoList) {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			beanList.add(dto);
		}
		try {
			return jgPaymentPlanDao.insertJgPaymentPlanList(beanList);
		} catch (Exception e) {
			logger.error("insertJgPaymentPlanList出错：", e);
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
	public int updateJgPaymentPlan(JgPaymentPlanDTO dto) throws Exception {
		//记录日志
		JgPaymentPlanDTO old = findById(dto.getId());
		SysLogUtil.log4Update(dto, old);
		PojoUtil.setSysProperties(dto, OpType.update);
		PojoUtil.copyProperties(old, dto, true);
		int ret = jgPaymentPlanDao.updateJgPaymentPlanAll(old);
		if (ret == 0) {
			throw new DaoException("数据失效，请重新更新");
		}
		return ret;

	}

	/**
	 * @description:修改对象部分字段
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	public int updateJgPaymentPlanSensitive(JgPaymentPlanDTO dto) throws Exception {
		try {
			//记录日志
			JgPaymentPlanDTO old = findById(dto.getId());
			SysLogUtil.log4Update(dto, old);
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = jgPaymentPlanDao.updateJgPaymentPlanSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			logger.error("updateJgPaymentPlanSensitive出错：", e);
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
	public int updateJgPaymentPlanList(List<JgPaymentPlanDTO> dtoList) throws Exception {
		try {
			return jgPaymentPlanDao.updateJgPaymentPlanList(dtoList);
		} catch (Exception e) {
			logger.error("updateJgPaymentPlanList出错：", e);
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
	public int deleteJgPaymentPlanById(String id) throws Exception {
		if (StringUtils.isEmpty(id)) {
			throw new Exception("删除失败！传入的参数主键为null");
		}
		try {
			//记录日志
			SysLogUtil.log4Delete(findById(id));
			return jgPaymentPlanDao.deleteJgPaymentPlanById(id);
		} catch (Exception e) {
			logger.error("deleteJgPaymentPlanById出错：", e);
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
	public int deleteJgPaymentPlanByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			sysAttachmentAPI.deleteAttachByFormId(id);
			deleteJgPaymentPlanById(id);
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
	public int deleteJgPaymentPlanList(List<String> idList) throws Exception {
		try {
			return jgPaymentPlanDao.deleteJgPaymentPlanList(idList);
		} catch (Exception e) {
			logger.error("deleteJgPaymentPlanList出错：", e);
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
	private JgPaymentPlanDTO findById(String id) throws Exception {
		try {
			JgPaymentPlanDTO dto = jgPaymentPlanDao.findJgPaymentPlanById(id);
			return dto;
		} catch (Exception e) {
			logger.error("findById出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

}
