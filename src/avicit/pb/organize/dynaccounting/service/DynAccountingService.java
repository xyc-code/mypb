package avicit.pb.organize.dynaccounting.service;

import java.io.Serializable;
import java.util.*;
import org.apache.commons.lang.StringUtils;
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
import avicit.pb.organize.dynaccounting.dao.DynAccountingDAO;
import avicit.pb.organize.dynaccounting.dto.DynAccountingDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-07 10:22
 * @类说明：DYN_ACCOUNTINGService
 * @修改记录： 
 */
@Service
public class DynAccountingService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(DynAccountingService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private DynAccountingDAO dynAccountingDAO;

	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynAccountingDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynAccountingDTO> searchDynAccountingByPage(QueryReqBean<DynAccountingDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynAccountingDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynAccountingDTO> dataList = dynAccountingDAO.searchDynAccountingByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynAccountingDTO> queryRespBean = new QueryRespBean<DynAccountingDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynAccountingByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynAccountingDTO>
	 * @throws Exception
	 */
	public List<DynAccountingDTO> searchDynAccounting(DynAccountingDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynAccountingDTO> dataList = dynAccountingDAO.searchDynAccounting(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynAccounting出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynAccountingDTO>
	 * @throws Exception
	 */
	public List<DynAccountingDTO> searchDynAccountingForExport(DynAccountingDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynAccountingDTO> dataList = dynAccountingDAO.searchDynAccountingForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynAccountingForExport出错：", e);
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
	 * @return DynAccountingDTO
	 * @throws Exception
	 */
	public DynAccountingDTO queryDynAccountingByPrimaryKey(String id) throws Exception {
		try {
			DynAccountingDTO dto = dynAccountingDAO.findDynAccountingById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynAccountingByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynAccounting(DynAccountingDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynAccountingDAO.insertDynAccounting(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynAccounting出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynAccountingList(List<DynAccountingDTO> dtoList) throws Exception {
		try {
			List<DynAccountingDTO> beanList = new ArrayList<DynAccountingDTO>();
			for (DynAccountingDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynAccountingDAO.insertDynAccountingList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynAccountingList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynAccountingAll(DynAccountingDTO dto) throws Exception {
		try {
			//记录日志
			DynAccountingDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynAccountingDAO.updateDynAccountingAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynAccountingAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynAccountingSensitive(DynAccountingDTO dto) throws Exception {
		try {
			//记录日志
			DynAccountingDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynAccountingDAO.updateDynAccountingSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynAccountingSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynAccountingList(List<DynAccountingDTO> dtoList) throws Exception {
		try {
			return dynAccountingDAO.updateDynAccountingList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynAccountingList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynAccountingById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynAccountingDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return dynAccountingDAO.deleteDynAccountingById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynAccountingById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynAccountingByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynAccountingById(id);
			result++;
		}
		return result;
	}

 	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynAccountingDTO
	 * @throws Exception
	 */
	private DynAccountingDTO findById(String id) throws Exception {
		try {
			DynAccountingDTO dto = dynAccountingDAO.findDynAccountingById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

