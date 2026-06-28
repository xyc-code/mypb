package avicit.pb.activist.partyactivist.service;

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
import avicit.pb.activist.partyactivist.dao.PartyActivistDAO;
import avicit.pb.activist.partyactivist.dto.PartyActivistDTO;
import org.springframework.util.CollectionUtils;
import avicit.pb.activist.activistachievement.dto.ActivistAchievementDTO;
import avicit.pb.activist.activistachievement.service.ActivistAchievementService;
import avicit.pb.activist.activistmerits.dto.ActivistMeritsDTO;
import avicit.pb.activist.activistmerits.service.ActivistMeritsService;
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
public class PartyActivistService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(PartyActivistService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private PartyActivistDAO partyActivistDAO;

	@Autowired
    private SysExcelExpAPI sysExcelExpAPI;

	@Autowired
	private ActivistAchievementService activistAchievementService;
	@Autowired
	private ActivistMeritsService activistMeritsService;


	/**
	* 查询（分页）
	* @param queryReqBean 分页
	* @param orderBy 排序语句
	* @param keyWord 快速查询条件
	* @return QueryRespBean<PartyActivistDTO>
	* @throws Exception
	*/
	public QueryRespBean<PartyActivistDTO> searchPartyActivistByPage(QueryReqBean<PartyActivistDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			PartyActivistDTO searchParams = queryReqBean.getSearchParams();
			Page<PartyActivistDTO> dataList = partyActivistDAO.searchPartyActivistByPage(searchParams, orderBy, keyWord);
			QueryRespBean<PartyActivistDTO> queryRespBean = new QueryRespBean<PartyActivistDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			logger.error("searchPartyActivistByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
    * 查询（不分页）
    * @param searchParams 对象
    * @param keyWord 关键字
    * @param orderBy 排序
    * @return List<PartyActivistDTO>
    * @throws Exception
    */
    public List<PartyActivistDTO> searchPartyActivist(PartyActivistDTO searchParams, String orderBy, String keyWord)
            throws Exception {
        try {
            List<PartyActivistDTO> dataList = partyActivistDAO.searchPartyActivist(searchParams, orderBy, keyWord);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchPartyActivist出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return PartyActivistDTO
	 * @throws Exception
	 */
	public PartyActivistDTO queryPartyActivistByPrimaryKey(String id) throws Exception {
		try {
			PartyActivistDTO dto = partyActivistDAO.findPartyActivistById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			logger.error("queryPartyActivistByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}


	/**
	* 新增
	* @param dto 保存对象
	 * @param updateSubListExtr 
	* @return String
	* @throws Exception
	*/
	public String insertPartyActivist(PartyActivistDTO dto, List<ActivistAchievementDTO> updateSubList, List<ActivistMeritsDTO> updateSubListExtr) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			partyActivistDAO.insertPartyActivist(dto);

			if (!CollectionUtils.isEmpty(updateSubList)) {
				for (ActivistAchievementDTO activistAchievementDTO : updateSubList) {
					activistAchievementDTO.setPaId(id);
					activistAchievementDTO.setOrgIdentity(dto.getOrgIdentity());
					activistAchievementService.insertActivistAchievement(activistAchievementDTO);
				}
			}
			if (!CollectionUtils.isEmpty(updateSubListExtr)) {
				for (ActivistMeritsDTO activistMeritsDTO : updateSubListExtr) {
					activistMeritsDTO.setPaId(id);
					activistMeritsDTO.setOrgIdentity(dto.getOrgIdentity());
					activistMeritsService.insertActivistMerits(activistMeritsDTO);
					
				}
			}

			// 记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			logger.error("insertPartyActivist出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertPartyActivistList(List<PartyActivistDTO> dtoList) throws Exception {
		List<PartyActivistDTO> beanList = new ArrayList<PartyActivistDTO>();
		for (PartyActivistDTO dto : dtoList) {
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
			return partyActivistDAO.insertPartyActivistList(beanList);
		} catch (Exception e) {
			logger.error("insertPartyActivistList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyActivistAll(PartyActivistDTO dto) throws Exception {
		//记录日志
		PartyActivistDTO old = findById(dto.getId());
		if (old != null) {
			SysLogUtil.log4Update(dto, old);
		}
		PojoUtil.setSysProperties(dto, OpType.update);
		int ret = partyActivistDAO.updatePartyActivistAll(dto);
		if (ret == 0) {
			throw new DaoException("数据失效，请重新更新");
		}
		return ret;
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @param removeSubListExtr 
	 * @param updateSubListExtr 
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyActivistSensitive(PartyActivistDTO dto, List<ActivistAchievementDTO> updateSubList, List<ActivistMeritsDTO> updateSubListExtr, String[] removeSubIds, String[] removeSubListExtr) throws Exception {
		try {
			// 记录日志
			PartyActivistDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			if(dto.getFixstressTime() == null){
				old.setFixstressTime(null);
			}
			if(dto.getFixtargetTime() == null){
				old.setFixtargetTime(null);
			}
			
			
			int count = partyActivistDAO.updatePartyActivistSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}

			if (!CollectionUtils.isEmpty(updateSubList)) {
				for (ActivistAchievementDTO activistAchievementDTO : updateSubList) {
					ActivistAchievementDTO exsitActivistAchievementDTO = activistAchievementService.queryActivistAchievementByPrimaryKey(activistAchievementDTO.getId());
					if (exsitActivistAchievementDTO == null) {
						activistAchievementDTO.setPaId(old.getId());
						activistAchievementDTO.setOrgIdentity(old.getOrgIdentity());
						activistAchievementService.insertActivistAchievement(activistAchievementDTO);
					} else {
						activistAchievementService.updateActivistAchievementSensitive(activistAchievementDTO);
					}
				}
			}
			if (removeSubIds != null && removeSubIds.length > 0) {
				activistAchievementService.deleteActivistAchievementByIds(removeSubIds);
			}
			if (!CollectionUtils.isEmpty(updateSubListExtr)) {
				for (ActivistMeritsDTO activistMeritsDTO : updateSubListExtr) {
					ActivistMeritsDTO exsitactivistMeritsDTO = activistMeritsService.queryActivistMeritsByPrimaryKey(activistMeritsDTO.getId());
					if (exsitactivistMeritsDTO == null) {
						activistMeritsDTO.setPaId(old.getId());
						activistMeritsDTO.setOrgIdentity(old.getOrgIdentity());
						activistMeritsService.insertActivistMerits(activistMeritsDTO);
					} else {
	
						activistMeritsService.updateActivistMeritsSensitive(activistMeritsDTO);
					}
				}
			}
			if (removeSubListExtr != null && removeSubListExtr.length > 0) {

				activistMeritsService.deleteActivistMeritsByIds(removeSubListExtr);
			}
			return count;
		} catch (Exception e) {
			logger.error("updatePartyActivistSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyActivistList(List<PartyActivistDTO> dtoList) throws Exception {
		try {
			return partyActivistDAO.updatePartyActivistList(dtoList);
		} catch (Exception e) {
			logger.error("updatePartyActivistList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deletePartyActivistById(String id) throws Exception {
		if (StringUtils.isEmpty(id)) {
			throw new Exception("删除失败！传入的参数主键为null");
		}
		try {
			//记录日志
			PartyActivistDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			// 删除关联子表数据
			ActivistAchievementDTO queryParamsActivistAchievementDTO = new ActivistAchievementDTO();
			queryParamsActivistAchievementDTO.setPaId(id);
			List<ActivistAchievementDTO> listActivistAchievementDTO = activistAchievementService.searchActivistAchievement(queryParamsActivistAchievementDTO,"","");
			for (ActivistAchievementDTO activistAchievementDTO : listActivistAchievementDTO) {
				activistAchievementService.deleteActivistAchievementById(activistAchievementDTO.getId());
			}
			ActivistMeritsDTO queryParamsActivistMeritsDTO = new ActivistMeritsDTO();
			queryParamsActivistMeritsDTO.setPaId(id);
			List<ActivistMeritsDTO> listActivistMeritsDTO = activistMeritsService.searchActivistMerits(queryParamsActivistMeritsDTO,"","");
			for (ActivistMeritsDTO activistMeritsDTO : listActivistMeritsDTO) {
				activistMeritsService.deleteActivistMeritsById(activistMeritsDTO.getId());
			}
			return partyActivistDAO.deletePartyActivistById(id);
		} catch (Exception e) {
			logger.error("deletePartyActivistById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deletePartyActivistByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deletePartyActivistById(id);
			result++;
		}
		return result;
	}

    /**
     * 查询（导出）
     * @param searchParams 条件
     * @param idsList 导出数据集合
     * @return List<PartyActivistDTO>
     * @throws Exception
     */
    public List<PartyActivistDTO> searchPartyActivistForExport(PartyActivistDTO searchParams, List<String> idsList)
            throws Exception {
        try {
            List<PartyActivistDTO> dataList = partyActivistDAO.searchPartyActivistForExport(searchParams, idsList);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchPartyActivistForExport出错：", e);
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
	* @return PartyActivistDTO
	* @throws Exception
	*/
	private PartyActivistDTO findById(String id) throws Exception {
		try {
			PartyActivistDTO dto = partyActivistDAO.findPartyActivistById(id);
			return dto;
		} catch (Exception e) {
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	/**
	 * 根据党员ID更新支部
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyActivistMemberPartyOrgByUserId(String userId,String partyId) throws Exception {
		try {
			return partyActivistDAO.updatePartyActivistMemberPartyOrgByUserId(userId,partyId);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updatePartyActivistMemberPartyOrgByUserId出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	public QueryRespBean<PartyActivistDTO> searchPartyActivistDXByPage(QueryReqBean<PartyActivistDTO> activistDTOQueryReqBean, String orderBy, String keyWord) {
		try {
			PageHelper.startPage(activistDTOQueryReqBean.getPageParameter());
			PartyActivistDTO searchParams = activistDTOQueryReqBean.getSearchParams();
			Page<PartyActivistDTO> dataList = partyActivistDAO.searchPartyActivistDXByPage(searchParams, orderBy, keyWord);
			QueryRespBean<PartyActivistDTO> queryRespBean = new QueryRespBean<PartyActivistDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			logger.error("searchPartyActivistByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

