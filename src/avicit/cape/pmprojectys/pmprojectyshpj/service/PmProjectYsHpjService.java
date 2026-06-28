package avicit.cape.pmprojectys.pmprojectyshpj.service;

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
import avicit.cape.pmprojectys.pmprojectyshpj.dao.PmProjectYsHpjDao;
import avicit.cape.pmprojectys.pmprojectyshpj.dto.PmProjectYsHpjDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-11 10:27 
 * @类说明：请填写
 * @修改记录：
 */
@Service
public class PmProjectYsHpjService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(PmProjectYsHpjService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private PmProjectYsHpjDao pmProjectYsHpjDao;

	@Autowired
	private SwfUploadService sysAttachmentAPI;

	/**
	 * @description:按条件分页查询
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public QueryRespBean<PmProjectYsHpjDTO> searchPmProjectYsHpjByPage(QueryReqBean<PmProjectYsHpjDTO> queryReqBean,
			String sfnConditions, String orgIdentity) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			PmProjectYsHpjDTO searchParams = queryReqBean.getSearchParams();
			SelfDefinedQuery sdc = new SelfDefinedQuery(sfnConditions, "t1");
			Page<PmProjectYsHpjDTO> dataList = pmProjectYsHpjDao.searchPmProjectYsHpjByPage(searchParams,
					sdc.parseSql(), orgIdentity);
			QueryRespBean<PmProjectYsHpjDTO> queryRespBean = new QueryRespBean<PmProjectYsHpjDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			logger.error("searchPmProjectYsHpjByPage出错：", e);
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
	public List<PmProjectYsHpjDTO> searchPmProjectYsHpj(QueryReqBean<PmProjectYsHpjDTO> queryReqBean) throws Exception {
		try {
			PmProjectYsHpjDTO searchParams = queryReqBean.getSearchParams();
			List<PmProjectYsHpjDTO> dataList = pmProjectYsHpjDao.searchPmProjectYsHpj(searchParams);
			return dataList;
		} catch (Exception e) {
			logger.error("searchPmProjectYsHpj出错：", e);
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
	public PmProjectYsHpjDTO queryPmProjectYsHpjByPrimaryKey(String id) throws Exception {
		try {
			PmProjectYsHpjDTO dto = pmProjectYsHpjDao.findPmProjectYsHpjById(id);
			//记录日志
			SysLogUtil.log4Query(dto);
			return dto;
		} catch (Exception e) {
			logger.error("queryPmProjectYsHpjByPrimaryKey出错：", e);
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
	public String insertPmProjectYsHpj(PmProjectYsHpjDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			pmProjectYsHpjDao.insertPmProjectYsHpj(dto);
			//记录日志
			SysLogUtil.log4Insert(dto);
			return id;
		} catch (Exception e) {
			logger.error("insertPmProjectYsHpj出错：", e);
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
	public int insertPmProjectYsHpjList(List<PmProjectYsHpjDTO> dtoList) throws Exception {
		List<PmProjectYsHpjDTO> beanList = new ArrayList<PmProjectYsHpjDTO>();
		for (PmProjectYsHpjDTO dto : dtoList) {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			beanList.add(dto);
		}
		try {
			return pmProjectYsHpjDao.insertPmProjectYsHpjList(beanList);
		} catch (Exception e) {
			logger.error("insertPmProjectYsHpjList出错：", e);
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
	public int updatePmProjectYsHpj(PmProjectYsHpjDTO dto) throws Exception {
		//记录日志
		PmProjectYsHpjDTO old = findById(dto.getId());
		SysLogUtil.log4Update(dto, old);
		PojoUtil.setSysProperties(dto, OpType.update);
		PojoUtil.copyProperties(old, dto, true);
		int ret = pmProjectYsHpjDao.updatePmProjectYsHpjAll(old);
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
	public int updatePmProjectYsHpjSensitive(PmProjectYsHpjDTO dto) throws Exception {
		try {
			//记录日志
			PmProjectYsHpjDTO old = findById(dto.getId());
			SysLogUtil.log4Update(dto, old);
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = pmProjectYsHpjDao.updatePmProjectYsHpjSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			logger.error("updatePmProjectYsHpjSensitive出错：", e);
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
	public int updatePmProjectYsHpjList(List<PmProjectYsHpjDTO> dtoList) throws Exception {
		try {
			return pmProjectYsHpjDao.updatePmProjectYsHpjList(dtoList);
		} catch (Exception e) {
			logger.error("updatePmProjectYsHpjList出错：", e);
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
	public int deletePmProjectYsHpjById(String id) throws Exception {
		if (StringUtils.isEmpty(id)) {
			throw new Exception("删除失败！传入的参数主键为null");
		}
		try {
			//记录日志
			SysLogUtil.log4Delete(findById(id));
			return pmProjectYsHpjDao.deletePmProjectYsHpjById(id);
		} catch (Exception e) {
			logger.error("deletePmProjectYsHpjById出错：", e);
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
	public int deletePmProjectYsHpjByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			sysAttachmentAPI.deleteAttachByFormId(id);
			deletePmProjectYsHpjById(id);
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
	public int deletePmProjectYsHpjList(List<String> idList) throws Exception {
		try {
			return pmProjectYsHpjDao.deletePmProjectYsHpjList(idList);
		} catch (Exception e) {
			logger.error("deletePmProjectYsHpjList出错：", e);
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
	private PmProjectYsHpjDTO findById(String id) throws Exception {
		try {
			PmProjectYsHpjDTO dto = pmProjectYsHpjDao.findPmProjectYsHpjById(id);
			return dto;
		} catch (Exception e) {
			logger.error("findById出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(), e);
		}
	}

}
