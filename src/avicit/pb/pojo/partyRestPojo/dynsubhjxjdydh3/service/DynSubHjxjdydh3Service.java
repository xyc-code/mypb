package avicit.pb.pojo.partyRestPojo.dynsubhjxjdydh3.service;

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
import avicit.pb.pojo.partyRestPojo.dynsubhjxjdydh3.dao.DynSubHjxjdydh3DAO;
import avicit.pb.pojo.partyRestPojo.dynsubhjxjdydh3.dto.DynSubHjxjdydh3DTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-18 11:50
 * @类说明：DYN_SUB_HJXJDYDH_3Service
 * @修改记录： 
 */
@Service
public class DynSubHjxjdydh3Service implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(DynSubHjxjdydh3Service.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private DynSubHjxjdydh3DAO dynSubHjxjdydh3DAO;

	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynSubHjxjdydh3DTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynSubHjxjdydh3DTO> searchDynSubHjxjdydh3ByPage(QueryReqBean<DynSubHjxjdydh3DTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynSubHjxjdydh3DTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynSubHjxjdydh3DTO> dataList = dynSubHjxjdydh3DAO.searchDynSubHjxjdydh3ByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynSubHjxjdydh3DTO> queryRespBean = new QueryRespBean<DynSubHjxjdydh3DTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynSubHjxjdydh3ByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynSubHjxjdydh3DTO>
	 * @throws Exception
	 */
	public List<DynSubHjxjdydh3DTO> searchDynSubHjxjdydh3(DynSubHjxjdydh3DTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynSubHjxjdydh3DTO> dataList = dynSubHjxjdydh3DAO.searchDynSubHjxjdydh3(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynSubHjxjdydh3出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynSubHjxjdydh3DTO>
	 * @throws Exception
	 */
	public List<DynSubHjxjdydh3DTO> searchDynSubHjxjdydh3ForExport(DynSubHjxjdydh3DTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynSubHjxjdydh3DTO> dataList = dynSubHjxjdydh3DAO.searchDynSubHjxjdydh3ForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynSubHjxjdydh3ForExport出错：", e);
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
	 * @return DynSubHjxjdydh3DTO
	 * @throws Exception
	 */
	public DynSubHjxjdydh3DTO queryDynSubHjxjdydh3ByPrimaryKey(String id) throws Exception {
		try {
			DynSubHjxjdydh3DTO dto = dynSubHjxjdydh3DAO.findDynSubHjxjdydh3ById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynSubHjxjdydh3ByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynSubHjxjdydh3(DynSubHjxjdydh3DTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynSubHjxjdydh3DAO.insertDynSubHjxjdydh3(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynSubHjxjdydh3出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynSubHjxjdydh3List(List<DynSubHjxjdydh3DTO> dtoList) throws Exception {
		try {
			List<DynSubHjxjdydh3DTO> beanList = new ArrayList<DynSubHjxjdydh3DTO>();
			for (DynSubHjxjdydh3DTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynSubHjxjdydh3DAO.insertDynSubHjxjdydh3List(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynSubHjxjdydh3List出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynSubHjxjdydh3All(DynSubHjxjdydh3DTO dto) throws Exception {
		try {
			//记录日志
			DynSubHjxjdydh3DTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynSubHjxjdydh3DAO.updateDynSubHjxjdydh3All(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynSubHjxjdydh3All出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynSubHjxjdydh3Sensitive(DynSubHjxjdydh3DTO dto) throws Exception {
		try {
			//记录日志
			DynSubHjxjdydh3DTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynSubHjxjdydh3DAO.updateDynSubHjxjdydh3Sensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynSubHjxjdydh3Sensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynSubHjxjdydh3List(List<DynSubHjxjdydh3DTO> dtoList) throws Exception {
		try {
			return dynSubHjxjdydh3DAO.updateDynSubHjxjdydh3List(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynSubHjxjdydh3List出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynSubHjxjdydh3ById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynSubHjxjdydh3DTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return dynSubHjxjdydh3DAO.deleteDynSubHjxjdydh3ById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynSubHjxjdydh3ById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynSubHjxjdydh3ByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynSubHjxjdydh3ById(id);
			result++;
		}
		return result;
	}

 	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynSubHjxjdydh3DTO
	 * @throws Exception
	 */
	private DynSubHjxjdydh3DTO findById(String id) throws Exception {
		try {
			DynSubHjxjdydh3DTO dto = dynSubHjxjdydh3DAO.findDynSubHjxjdydh3ById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

