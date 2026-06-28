package avicit.pb.activist.activistmerits.service;

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
import avicit.pb.activist.activistmerits.dao.ActivistMeritsDAO;
import avicit.pb.activist.activistmerits.dto.ActivistMeritsDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-25 09:20
 * @类说明：
 * @修改记录： 
 */
@Service
public class ActivistMeritsService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(ActivistMeritsService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private ActivistMeritsDAO activistMeritsDAO;

	@Autowired
    private SysExcelExpAPI sysExcelExpAPI;

	/**
	* 查询（分页）
	* @param queryReqBean 分页
	* @param orderBy 排序语句
	* @param keyWord 快速查询条件
	* @return QueryRespBean<ActivistMeritsDTO>
	* @throws Exception
	*/
	public QueryRespBean<ActivistMeritsDTO> searchActivistMeritsByPage(QueryReqBean<ActivistMeritsDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			ActivistMeritsDTO searchParams = queryReqBean.getSearchParams();
			Page<ActivistMeritsDTO> dataList = activistMeritsDAO.searchActivistMeritsByPage(searchParams, orderBy, keyWord);
			QueryRespBean<ActivistMeritsDTO> queryRespBean = new QueryRespBean<ActivistMeritsDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			logger.error("searchActivistMeritsByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
    * 查询（不分页）
    * @param searchParams 对象
    * @param keyWord 关键字
    * @param orderBy 排序
    * @return List<ActivistMeritsDTO>
    * @throws Exception
    */
    public List<ActivistMeritsDTO> searchActivistMerits(ActivistMeritsDTO searchParams, String orderBy, String keyWord)
            throws Exception {
        try {
            List<ActivistMeritsDTO> dataList = activistMeritsDAO.searchActivistMerits(searchParams, orderBy, keyWord);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchActivistMerits出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return ActivistMeritsDTO
	 * @throws Exception
	 */
	public ActivistMeritsDTO queryActivistMeritsByPrimaryKey(String id) throws Exception {
		try {
			ActivistMeritsDTO dto = activistMeritsDAO.findActivistMeritsById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			logger.error("queryActivistMeritsByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 新增
	* @param dto 保存对象
	* @return String
	* @throws Exception
	*/
	public String insertActivistMerits(ActivistMeritsDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			activistMeritsDAO.insertActivistMerits(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			logger.error("insertActivistMerits出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertActivistMeritsList(List<ActivistMeritsDTO> dtoList) throws Exception {
		List<ActivistMeritsDTO> beanList = new ArrayList<ActivistMeritsDTO>();
		for (ActivistMeritsDTO dto : dtoList) {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			beanList.add(dto);
		}
		try {
			return activistMeritsDAO.insertActivistMeritsList(beanList);
		} catch (Exception e) {
			logger.error("insertActivistMeritsList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateActivistMeritsAll(ActivistMeritsDTO dto) throws Exception {
		//记录日志
		ActivistMeritsDTO old = findById(dto.getId());
		if (old != null) {
			SysLogUtil.log4Update(dto, old);
		}
		PojoUtil.setSysProperties(dto, OpType.update);
		int ret = activistMeritsDAO.updateActivistMeritsAll(dto);
		if (ret == 0) {
			throw new DaoException("数据失效，请重新更新");
		}
		return ret;
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateActivistMeritsSensitive(ActivistMeritsDTO dto) throws Exception {
		try {
			//记录日志
			ActivistMeritsDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = activistMeritsDAO.updateActivistMeritsSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			logger.error("updateActivistMeritsSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateActivistMeritsList(List<ActivistMeritsDTO> dtoList) throws Exception {
		try {
			return activistMeritsDAO.updateActivistMeritsList(dtoList);
		} catch (Exception e) {
			logger.error("updateActivistMeritsList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteActivistMeritsById(String id) throws Exception {
		if (StringUtils.isEmpty(id)) {
			throw new Exception("删除失败！传入的参数主键为null");
		}
		try {
			//记录日志
			ActivistMeritsDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return activistMeritsDAO.deleteActivistMeritsById(id);
		} catch (Exception e) {
			logger.error("deleteActivistMeritsById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteActivistMeritsByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteActivistMeritsById(id);
			result++;
		}
		return result;
	}

    /**
     * 查询（导出）
     * @param searchParams 条件
     * @param idsList 导出数据集合
     * @return List<ActivistMeritsDTO>
     * @throws Exception
     */
    public List<ActivistMeritsDTO> searchActivistMeritsForExport(ActivistMeritsDTO searchParams, List<String> idsList)
            throws Exception {
        try {
            List<ActivistMeritsDTO> dataList = activistMeritsDAO.searchActivistMeritsForExport(searchParams, idsList);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchActivistMeritsForExport出错：", e);
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
	* 日志专用查询
	* @param id 主键id
	* @return ActivistMeritsDTO
	* @throws Exception
	*/
	private ActivistMeritsDTO findById(String id) throws Exception {
		try {
			ActivistMeritsDTO dto = activistMeritsDAO.findActivistMeritsById(id);
			return dto;
		} catch (Exception e) {
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

