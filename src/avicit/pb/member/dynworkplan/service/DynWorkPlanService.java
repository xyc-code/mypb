package avicit.pb.member.dynworkplan.service;

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
import avicit.pb.member.dynworkplan.dao.DynWorkPlanDAO;
import avicit.pb.member.dynworkplan.dto.DynWorkPlanDTO;
import org.springframework.util.CollectionUtils;
import avicit.pb.member.dynworkcompany.dto.DynWorkCompanyDTO;
import avicit.pb.member.dynworkcompany.service.DynWorkCompanyService;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-23 16:42
 * @类说明：
 * @修改记录： 
 */
@Service
public class DynWorkPlanService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(DynWorkPlanService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private DynWorkPlanDAO dynWorkPlanDAO;
	

	@Autowired
	private DynWorkCompanyService dynWorkCompanyService;

	@Autowired
    private SysExcelExpAPI sysExcelExpAPI;

	/**
	* 查询（分页）
	* @param queryReqBean 分页
	* @param orderBy 排序语句
	* @param keyWord 快速查询条件
	* @return QueryRespBean<DynWorkPlanDTO>
	* @throws Exception
	*/
	public QueryRespBean<DynWorkPlanDTO> searchDynWorkPlanByPage(QueryReqBean<DynWorkPlanDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynWorkPlanDTO searchParams = queryReqBean.getSearchParams();
			Page<DynWorkPlanDTO> dataList = dynWorkPlanDAO.searchDynWorkPlanByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynWorkPlanDTO> queryRespBean = new QueryRespBean<DynWorkPlanDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			logger.error("searchDynWorkPlanByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 查询（不分页）
	* @param searchParams 对象
	* @param keyWord 关键字
	* @param orderBy 排序
	* @return List<DynWorkPlanDTO>
	* @throws Exception
	*/
	public List<DynWorkPlanDTO> searchDynWorkPlan(DynWorkPlanDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynWorkPlanDTO> dataList = dynWorkPlanDAO.searchDynWorkPlan(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			logger.error("searchDynWorkPlan出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynWorkPlanDTO
	 * @throws Exception
	 */
	public DynWorkPlanDTO queryDynWorkPlanByPrimaryKey(String id) throws Exception {
		try {
			DynWorkPlanDTO dto = dynWorkPlanDAO.findDynWorkPlanById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			logger.error("queryDynWorkPlanByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}


	/**
	* 新增
	* @param dto 保存对象
	* @return String
	* @throws Exception
	*/
	public String insertDynWorkPlan(DynWorkPlanDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynWorkPlanDAO.insertDynWorkPlan(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			logger.error("insertDynWorkPlan出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynWorkPlanList(List<DynWorkPlanDTO> dtoList) throws Exception {
		List<DynWorkPlanDTO> beanList = new ArrayList<DynWorkPlanDTO>();
		for (DynWorkPlanDTO dto : dtoList) {
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
			return dynWorkPlanDAO.insertDynWorkPlanList(beanList);
		} catch (Exception e) {
			logger.error("insertDynWorkPlanList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynWorkPlanAll(DynWorkPlanDTO dto) throws Exception {
		//记录日志
		DynWorkPlanDTO old = findById(dto.getId());
		if (old != null) {
			SysLogUtil.log4Update(dto, old);
		}
		PojoUtil.setSysProperties(dto, OpType.update);
		int ret = dynWorkPlanDAO.updateDynWorkPlanAll(dto);
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
	public int updateDynWorkPlanSensitive(DynWorkPlanDTO dto) throws Exception {
		try {
			//记录日志
			DynWorkPlanDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynWorkPlanDAO.updateDynWorkPlanSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			logger.error("updateDynWorkPlanSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynWorkPlanList(List<DynWorkPlanDTO> dtoList) throws Exception {
		try {
			return dynWorkPlanDAO.updateDynWorkPlanList(dtoList);
		} catch (Exception e) {
			logger.error("updateDynWorkPlanList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynWorkPlanById(String id) throws Exception {
		if (StringUtils.isEmpty(id)) {
			throw new Exception("删除失败！传入的参数主键为null");
		}
		try {
			//记录日志
			DynWorkPlanDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			// 删除关联子表数据
			DynWorkCompanyDTO queryParams = new DynWorkCompanyDTO();
			queryParams.setWorkId(id);
			List<DynWorkCompanyDTO> list = dynWorkCompanyService.searchDynWorkCompany(queryParams,"","");
			for (DynWorkCompanyDTO dynWorkCompanyDTO : list) {
				dynWorkCompanyService.deleteDynWorkCompanyById(dynWorkCompanyDTO.getId());
			}
			return dynWorkPlanDAO.deleteDynWorkPlanById(id);
		} catch (Exception e) {
			logger.error("deleteDynWorkPlanById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynWorkPlanByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynWorkPlanById(id);
			result++;
		}
		return result;
	}

    /**
     * 查询（导出）
     * @param searchParams 条件
     * @param idsList 导出数据集合
     * @return List<DynWorkPlanDTO>
     * @throws Exception
     */
    public List<DynWorkPlanDTO> searchDynWorkPlanForExport(DynWorkPlanDTO searchParams, List<String> idsList)
            throws Exception {
        try {
            List<DynWorkPlanDTO> dataList = dynWorkPlanDAO.searchDynWorkPlanForExport(searchParams, idsList);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchDynWorkPlanForExport出错：", e);
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
	* @return DynWorkPlanDTO
	* @throws Exception
	*/
	private DynWorkPlanDTO findById(String id) throws Exception {
		try {
			DynWorkPlanDTO dto = dynWorkPlanDAO.findDynWorkPlanById(id);
			return dto;
		} catch (Exception e) {
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

