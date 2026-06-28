package avicit.pb.pojo.partyRestPojo.dynhuanjiedydh.service;

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
import avicit.pb.pojo.partyRestPojo.dynhuanjiedydh.dao.DynHuanjieDydhDAO;
import avicit.pb.pojo.partyRestPojo.dynhuanjiedydh.dto.DynHuanjieDydhDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-02-26 09:02
 * @类说明：DYN_HUANJIE_DYDHService
 * @修改记录： 
 */
@Service
public class DynHuanjieDydhService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(DynHuanjieDydhService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private DynHuanjieDydhDAO dynHuanjieDydhDAO;

	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynHuanjieDydhDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynHuanjieDydhDTO> searchDynHuanjieDydhByPage(QueryReqBean<DynHuanjieDydhDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynHuanjieDydhDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynHuanjieDydhDTO> dataList = dynHuanjieDydhDAO.searchDynHuanjieDydhByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynHuanjieDydhDTO> queryRespBean = new QueryRespBean<DynHuanjieDydhDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynHuanjieDydhByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynHuanjieDydhDTO>
	 * @throws Exception
	 */
	public List<DynHuanjieDydhDTO> searchDynHuanjieDydh(DynHuanjieDydhDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynHuanjieDydhDTO> dataList = dynHuanjieDydhDAO.searchDynHuanjieDydh(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynHuanjieDydh出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynHuanjieDydhDTO>
	 * @throws Exception
	 */
	public List<DynHuanjieDydhDTO> searchDynHuanjieDydhForExport(DynHuanjieDydhDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynHuanjieDydhDTO> dataList = dynHuanjieDydhDAO.searchDynHuanjieDydhForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynHuanjieDydhForExport出错：", e);
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
	 * @return DynHuanjieDydhDTO
	 * @throws Exception
	 */
	public DynHuanjieDydhDTO queryDynHuanjieDydhByPrimaryKey(String id) throws Exception {
		try {
			DynHuanjieDydhDTO dto = dynHuanjieDydhDAO.findDynHuanjieDydhById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynHuanjieDydhByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynHuanjieDydh(DynHuanjieDydhDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynHuanjieDydhDAO.insertDynHuanjieDydh(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynHuanjieDydh出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynHuanjieDydhList(List<DynHuanjieDydhDTO> dtoList) throws Exception {
		try {
			List<DynHuanjieDydhDTO> beanList = new ArrayList<DynHuanjieDydhDTO>();
			for (DynHuanjieDydhDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynHuanjieDydhDAO.insertDynHuanjieDydhList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynHuanjieDydhList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynHuanjieDydhAll(DynHuanjieDydhDTO dto) throws Exception {
		try {
			//记录日志
			DynHuanjieDydhDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynHuanjieDydhDAO.updateDynHuanjieDydhAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynHuanjieDydhAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynHuanjieDydhSensitive(DynHuanjieDydhDTO dto) throws Exception {
		try {
			//记录日志
			DynHuanjieDydhDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynHuanjieDydhDAO.updateDynHuanjieDydhSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynHuanjieDydhSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynHuanjieDydhList(List<DynHuanjieDydhDTO> dtoList) throws Exception {
		try {
			return dynHuanjieDydhDAO.updateDynHuanjieDydhList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynHuanjieDydhList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynHuanjieDydhById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynHuanjieDydhDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return dynHuanjieDydhDAO.deleteDynHuanjieDydhById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynHuanjieDydhById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynHuanjieDydhByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynHuanjieDydhById(id);
			result++;
		}
		return result;
	}

 	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynHuanjieDydhDTO
	 * @throws Exception
	 */
	private DynHuanjieDydhDTO findById(String id) throws Exception {
		try {
			DynHuanjieDydhDTO dto = dynHuanjieDydhDAO.findDynHuanjieDydhById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

