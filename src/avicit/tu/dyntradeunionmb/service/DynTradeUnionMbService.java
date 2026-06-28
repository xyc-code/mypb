package avicit.tu.dyntradeunionmb.service;

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
import avicit.tu.dyntradeunionmb.dao.DynTradeUnionMbDAO;
import avicit.tu.dyntradeunionmb.dto.DynTradeUnionMbDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：psutest
 * @邮箱：psutest@163.com
 * @创建时间： 2023-08-02 15:30
 * @类说明：DYN_TRADE_UNION_MBService
 * @修改记录： 
 */
@Service
public class DynTradeUnionMbService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(DynTradeUnionMbService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private DynTradeUnionMbDAO dynTradeUnionMbDAO;

	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynTradeUnionMbDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynTradeUnionMbDTO> searchDynTradeUnionMbByPage(QueryReqBean<DynTradeUnionMbDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynTradeUnionMbDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynTradeUnionMbDTO> dataList = dynTradeUnionMbDAO.searchDynTradeUnionMbByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynTradeUnionMbDTO> queryRespBean = new QueryRespBean<DynTradeUnionMbDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynTradeUnionMbByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynTradeUnionMbDTO>
	 * @throws Exception
	 */
	public List<DynTradeUnionMbDTO> searchDynTradeUnionMb(DynTradeUnionMbDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynTradeUnionMbDTO> dataList = dynTradeUnionMbDAO.searchDynTradeUnionMb(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynTradeUnionMb出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynTradeUnionMbDTO>
	 * @throws Exception
	 */
	public List<DynTradeUnionMbDTO> searchDynTradeUnionMbForExport(DynTradeUnionMbDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynTradeUnionMbDTO> dataList = dynTradeUnionMbDAO.searchDynTradeUnionMbForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynTradeUnionMbForExport出错：", e);
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
	 * @return DynTradeUnionMbDTO
	 * @throws Exception
	 */
	public DynTradeUnionMbDTO queryDynTradeUnionMbByPrimaryKey(String id) throws Exception {
		try {
			DynTradeUnionMbDTO dto = dynTradeUnionMbDAO.findDynTradeUnionMbById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynTradeUnionMbByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynTradeUnionMb(DynTradeUnionMbDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynTradeUnionMbDAO.insertDynTradeUnionMb(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynTradeUnionMb出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynTradeUnionMbList(List<DynTradeUnionMbDTO> dtoList) throws Exception {
		try {
			List<DynTradeUnionMbDTO> beanList = new ArrayList<DynTradeUnionMbDTO>();
			for (DynTradeUnionMbDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynTradeUnionMbDAO.insertDynTradeUnionMbList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynTradeUnionMbList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynTradeUnionMbAll(DynTradeUnionMbDTO dto) throws Exception {
		try {
			//记录日志
			DynTradeUnionMbDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynTradeUnionMbDAO.updateDynTradeUnionMbAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynTradeUnionMbAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynTradeUnionMbSensitive(DynTradeUnionMbDTO dto) throws Exception {
		try {
			//记录日志
			DynTradeUnionMbDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynTradeUnionMbDAO.updateDynTradeUnionMbSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynTradeUnionMbSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynTradeUnionMbList(List<DynTradeUnionMbDTO> dtoList) throws Exception {
		try {
			return dynTradeUnionMbDAO.updateDynTradeUnionMbList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynTradeUnionMbList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynTradeUnionMbById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynTradeUnionMbDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return dynTradeUnionMbDAO.deleteDynTradeUnionMbById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynTradeUnionMbById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynTradeUnionMbByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynTradeUnionMbById(id);
			result++;
		}
		return result;
	}

 	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynTradeUnionMbDTO
	 * @throws Exception
	 */
	private DynTradeUnionMbDTO findById(String id) throws Exception {
		try {
			DynTradeUnionMbDTO dto = dynTradeUnionMbDAO.findDynTradeUnionMbById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	
	
	
	
	
	
	
	
	public List<Map<String, Object>> queryOne(String id) {
		try{
			return  dynTradeUnionMbDAO.queryOne(id);
		}catch(Exception e){
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	
	public List<Map<String, Object>> queryTwo(String id) {
		try{
			return  dynTradeUnionMbDAO.queryTwo(id);
		}catch(Exception e){
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	
	
	
	
	
	
}

