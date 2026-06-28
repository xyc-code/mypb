package avicit.pb.member.dynpartexpenseledger.service;

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
import avicit.pb.member.dynpartexpenseledger.dao.DynPartExpenseLedgerDAO;
import avicit.pb.member.dynpartexpenseledger.dto.DynPartExpenseLedgerDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-06 10:03
 * @类说明：DYN_PART_EXPENSE_LEDGERService
 * @修改记录： 
 */
@Service
public class DynPartExpenseLedgerService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(DynPartExpenseLedgerService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private DynPartExpenseLedgerDAO dynPartExpenseLedgerDAO;

	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynPartExpenseLedgerDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynPartExpenseLedgerDTO> searchDynPartExpenseLedgerByPage(QueryReqBean<DynPartExpenseLedgerDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynPartExpenseLedgerDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynPartExpenseLedgerDTO> dataList = dynPartExpenseLedgerDAO.searchDynPartExpenseLedgerByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynPartExpenseLedgerDTO> queryRespBean = new QueryRespBean<DynPartExpenseLedgerDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynPartExpenseLedgerByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynPartExpenseLedgerDTO>
	 * @throws Exception
	 */
	public List<DynPartExpenseLedgerDTO> searchDynPartExpenseLedger(DynPartExpenseLedgerDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynPartExpenseLedgerDTO> dataList = dynPartExpenseLedgerDAO.searchDynPartExpenseLedger(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynPartExpenseLedger出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynPartExpenseLedgerDTO>
	 * @throws Exception
	 */
	public List<DynPartExpenseLedgerDTO> searchDynPartExpenseLedgerForExport(DynPartExpenseLedgerDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynPartExpenseLedgerDTO> dataList = dynPartExpenseLedgerDAO.searchDynPartExpenseLedgerForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynPartExpenseLedgerForExport出错：", e);
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
	 * @return DynPartExpenseLedgerDTO
	 * @throws Exception
	 */
	public DynPartExpenseLedgerDTO queryDynPartExpenseLedgerByPrimaryKey(String id) throws Exception {
		try {
			DynPartExpenseLedgerDTO dto = dynPartExpenseLedgerDAO.findDynPartExpenseLedgerById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynPartExpenseLedgerByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynPartExpenseLedger(DynPartExpenseLedgerDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynPartExpenseLedgerDAO.insertDynPartExpenseLedger(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynPartExpenseLedger出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynPartExpenseLedgerList(List<DynPartExpenseLedgerDTO> dtoList) throws Exception {
		try {
			List<DynPartExpenseLedgerDTO> beanList = new ArrayList<DynPartExpenseLedgerDTO>();
			for (DynPartExpenseLedgerDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynPartExpenseLedgerDAO.insertDynPartExpenseLedgerList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynPartExpenseLedgerList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynPartExpenseLedgerAll(DynPartExpenseLedgerDTO dto) throws Exception {
		try {
			//记录日志
			DynPartExpenseLedgerDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynPartExpenseLedgerDAO.updateDynPartExpenseLedgerAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynPartExpenseLedgerAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynPartExpenseLedgerSensitive(DynPartExpenseLedgerDTO dto) throws Exception {
		try {
			//记录日志
			DynPartExpenseLedgerDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynPartExpenseLedgerDAO.updateDynPartExpenseLedgerSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynPartExpenseLedgerSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynPartExpenseLedgerList(List<DynPartExpenseLedgerDTO> dtoList) throws Exception {
		try {
			return dynPartExpenseLedgerDAO.updateDynPartExpenseLedgerList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynPartExpenseLedgerList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynPartExpenseLedgerById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynPartExpenseLedgerDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return dynPartExpenseLedgerDAO.deleteDynPartExpenseLedgerById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynPartExpenseLedgerById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynPartExpenseLedgerByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynPartExpenseLedgerById(id);
			result++;
		}
		return result;
	}

 	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynPartExpenseLedgerDTO
	 * @throws Exception
	 */
	private DynPartExpenseLedgerDTO findById(String id) throws Exception {
		try {
			DynPartExpenseLedgerDTO dto = dynPartExpenseLedgerDAO.findDynPartExpenseLedgerById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

