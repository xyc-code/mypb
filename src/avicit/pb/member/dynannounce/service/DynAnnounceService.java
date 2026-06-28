package avicit.pb.member.dynannounce.service;

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
import avicit.pb.member.dynannounce.dao.DynAnnounceDAO;
import avicit.pb.member.dynannounce.dto.DynAnnounceDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-30 15:02
 * @类说明：DYN_ANNOUNCEService
 * @修改记录： 
 */
@Service
public class DynAnnounceService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(DynAnnounceService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private DynAnnounceDAO dynAnnounceDAO;

	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynAnnounceDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynAnnounceDTO> searchDynAnnounceByPage(QueryReqBean<DynAnnounceDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynAnnounceDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynAnnounceDTO> dataList = dynAnnounceDAO.searchDynAnnounceByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynAnnounceDTO> queryRespBean = new QueryRespBean<DynAnnounceDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynAnnounceByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynAnnounceDTO>
	 * @throws Exception
	 */
	public List<DynAnnounceDTO> searchDynAnnounce(DynAnnounceDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynAnnounceDTO> dataList = dynAnnounceDAO.searchDynAnnounce(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynAnnounce出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynAnnounceDTO>
	 * @throws Exception
	 */
	public List<DynAnnounceDTO> searchDynAnnounceForExport(DynAnnounceDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynAnnounceDTO> dataList = dynAnnounceDAO.searchDynAnnounceForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynAnnounceForExport出错：", e);
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
	 * @return DynAnnounceDTO
	 * @throws Exception
	 */
	public DynAnnounceDTO queryDynAnnounceByPrimaryKey(String id) throws Exception {
		try {
			DynAnnounceDTO dto = dynAnnounceDAO.findDynAnnounceById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynAnnounceByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynAnnounce(DynAnnounceDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynAnnounceDAO.insertDynAnnounce(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynAnnounce出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynAnnounceList(List<DynAnnounceDTO> dtoList) throws Exception {
		try {
			List<DynAnnounceDTO> beanList = new ArrayList<DynAnnounceDTO>();
			for (DynAnnounceDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynAnnounceDAO.insertDynAnnounceList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynAnnounceList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynAnnounceAll(DynAnnounceDTO dto) throws Exception {
		try {
			//记录日志
			DynAnnounceDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynAnnounceDAO.updateDynAnnounceAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynAnnounceAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynAnnounceSensitive(DynAnnounceDTO dto) throws Exception {
		try {
			//记录日志
			DynAnnounceDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynAnnounceDAO.updateDynAnnounceSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynAnnounceSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynAnnounceList(List<DynAnnounceDTO> dtoList) throws Exception {
		try {
			return dynAnnounceDAO.updateDynAnnounceList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynAnnounceList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynAnnounceById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynAnnounceDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return dynAnnounceDAO.deleteDynAnnounceById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynAnnounceById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynAnnounceByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynAnnounceById(id);
			result++;
		}
		return result;
	}

 	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynAnnounceDTO
	 * @throws Exception
	 */
	public DynAnnounceDTO findById(String id) throws Exception {
		try {
			DynAnnounceDTO dto = dynAnnounceDAO.findDynAnnounceById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

}

