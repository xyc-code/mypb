package avicit.tu.dyntumodelworker.service;

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
import avicit.tu.dyntumodelworker.dao.DynTuModelWorkerDAO;
import avicit.tu.dyntumodelworker.dto.DynTuModelWorkerDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：temp
 * @邮箱：temp@163.com
 * @创建时间： 2023-08-11 09:59
 * @类说明：DYN_TU_MODEL_WORKERService
 * @修改记录： 
 */
@Service
public class DynTuModelWorkerService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(DynTuModelWorkerService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private DynTuModelWorkerDAO dynTuModelWorkerDAO;

	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynTuModelWorkerDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynTuModelWorkerDTO> searchDynTuModelWorkerByPage(QueryReqBean<DynTuModelWorkerDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynTuModelWorkerDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynTuModelWorkerDTO> dataList = dynTuModelWorkerDAO.searchDynTuModelWorkerByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynTuModelWorkerDTO> queryRespBean = new QueryRespBean<DynTuModelWorkerDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynTuModelWorkerByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynTuModelWorkerDTO>
	 * @throws Exception
	 */
	public List<DynTuModelWorkerDTO> searchDynTuModelWorker(DynTuModelWorkerDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynTuModelWorkerDTO> dataList = dynTuModelWorkerDAO.searchDynTuModelWorker(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynTuModelWorker出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynTuModelWorkerDTO>
	 * @throws Exception
	 */
	public List<DynTuModelWorkerDTO> searchDynTuModelWorkerForExport(DynTuModelWorkerDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynTuModelWorkerDTO> dataList = dynTuModelWorkerDAO.searchDynTuModelWorkerForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynTuModelWorkerForExport出错：", e);
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
	 * @return DynTuModelWorkerDTO
	 * @throws Exception
	 */
	public DynTuModelWorkerDTO queryDynTuModelWorkerByPrimaryKey(String id) throws Exception {
		try {
			DynTuModelWorkerDTO dto = dynTuModelWorkerDAO.findDynTuModelWorkerById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynTuModelWorkerByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynTuModelWorker(DynTuModelWorkerDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynTuModelWorkerDAO.insertDynTuModelWorker(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynTuModelWorker出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynTuModelWorkerList(List<DynTuModelWorkerDTO> dtoList) throws Exception {
		try {
			List<DynTuModelWorkerDTO> beanList = new ArrayList<DynTuModelWorkerDTO>();
			for (DynTuModelWorkerDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynTuModelWorkerDAO.insertDynTuModelWorkerList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynTuModelWorkerList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynTuModelWorkerAll(DynTuModelWorkerDTO dto) throws Exception {
		try {
			//记录日志
			DynTuModelWorkerDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynTuModelWorkerDAO.updateDynTuModelWorkerAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynTuModelWorkerAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynTuModelWorkerSensitive(DynTuModelWorkerDTO dto) throws Exception {
		try {
			//记录日志
			DynTuModelWorkerDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynTuModelWorkerDAO.updateDynTuModelWorkerSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynTuModelWorkerSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynTuModelWorkerList(List<DynTuModelWorkerDTO> dtoList) throws Exception {
		try {
			return dynTuModelWorkerDAO.updateDynTuModelWorkerList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynTuModelWorkerList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynTuModelWorkerById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynTuModelWorkerDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return dynTuModelWorkerDAO.deleteDynTuModelWorkerById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynTuModelWorkerById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynTuModelWorkerByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynTuModelWorkerById(id);
			result++;
		}
		return result;
	}

 	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynTuModelWorkerDTO
	 * @throws Exception
	 */
	private DynTuModelWorkerDTO findById(String id) throws Exception {
		try {
			DynTuModelWorkerDTO dto = dynTuModelWorkerDAO.findDynTuModelWorkerById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	
	
	
	public List<Map<String, Object>> queryOne(String id) {
		try{
			return  dynTuModelWorkerDAO.queryOne(id);
		}catch(Exception e){
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	public Map<String, Object> queryOne2(String id) {
		try{
			return  dynTuModelWorkerDAO.queryOne2(id);
		}catch(Exception e){
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	public List<Map<String, Object>> queryAge(String id) {
		try{
			return  dynTuModelWorkerDAO.queryAge(id);
		}catch(Exception e){
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	public List<Map<String, Object>> queryEducation(String id) {
		try{
			return  dynTuModelWorkerDAO.queryEducation(id);
		}catch(Exception e){
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	public List<Map<String, Object>> queryPr(String id) {
		try{
			return  dynTuModelWorkerDAO.queryPr(id);
		}catch(Exception e){
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	public List<Map<String, Object>> queryType(String id) {
		try{
			return  dynTuModelWorkerDAO.queryType(id);
		}catch(Exception e){
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	public List<Map<String, Object>> querySex(String id) {
		try{
			return  dynTuModelWorkerDAO.querySex(id);
		}catch(Exception e){
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	
	
	
}

