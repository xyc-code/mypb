package avicit.lc.organize.leagueorganmember.service;

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
import avicit.lc.organize.leagueorganmember.dao.LeagueOrganMemberDAO;
import avicit.lc.organize.leagueorganmember.dto.LeagueOrganMemberDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-17 09:36
 * @类说明：团组织人员信息表Service
 * @修改记录： 
 */
@Service
public class LeagueOrganMemberService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(LeagueOrganMemberService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private LeagueOrganMemberDAO leagueOrganMemberDAO;
	
	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;
	
	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<LeagueOrganMemberDTO>
	 * @throws Exception
	 */
	public QueryRespBean<LeagueOrganMemberDTO> searchLeagueOrganMemberByPage(QueryReqBean<LeagueOrganMemberDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			LeagueOrganMemberDTO searchParams = queryReqBean.getSearchParams();
			if (!StringUtils.isBlank(searchParams.getLeagueId()) && searchParams.getLeagueId().equals("402811817f055577017f05574e570219")) {
				searchParams.setLeagueId(null);
				searchParams.setUserPost(null);
			}
			//表单数据查询
			Page<LeagueOrganMemberDTO> dataList = leagueOrganMemberDAO.searchLeagueOrganMemberByPage(searchParams, orderBy, keyWord);
			QueryRespBean<LeagueOrganMemberDTO> queryRespBean = new QueryRespBean<LeagueOrganMemberDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchLeagueOrganMemberByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<LeagueOrganMemberDTO>
	 * @throws Exception
	 */
	public List<LeagueOrganMemberDTO> searchLeagueOrganMember(LeagueOrganMemberDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<LeagueOrganMemberDTO> dataList = leagueOrganMemberDAO.searchLeagueOrganMember(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchLeagueOrganMember出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<LeagueOrganMemberDTO>
	 * @throws Exception
	 */
	public List<LeagueOrganMemberDTO> searchLeagueOrganMemberForExport(LeagueOrganMemberDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<LeagueOrganMemberDTO> dataList = leagueOrganMemberDAO.searchLeagueOrganMemberForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchLeagueOrganMemberForExport出错：", e);
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
	 * @return LeagueOrganMemberDTO
	 * @throws Exception
	 */
	public LeagueOrganMemberDTO queryLeagueOrganMemberByPrimaryKey(String id) throws Exception {
		try {
			LeagueOrganMemberDTO dto = leagueOrganMemberDAO.findLeagueOrganMemberById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryLeagueOrganMemberByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	/**
	 * 删除树节点前在子表里做个查询，查询数据表里的数据个数
	 * @param id 当前树节点id
	 * @return int
	 * @throws Exception
	 */
	public int selectLeagueOrganMemberByPid(String id) throws Exception {
		try {
			int emps = leagueOrganMemberDAO.selectLeagueOrganMemberByPid(id);
			return emps;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("selectLeagueOrganMemberByPid出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertLeagueOrganMember(LeagueOrganMemberDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			leagueOrganMemberDAO.insertLeagueOrganMember(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertLeagueOrganMember出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertLeagueOrganMemberList(List<LeagueOrganMemberDTO> dtoList) throws Exception {
		try {
			List<LeagueOrganMemberDTO> beanList = new ArrayList<LeagueOrganMemberDTO>();
			for (LeagueOrganMemberDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return leagueOrganMemberDAO.insertLeagueOrganMemberList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertLeagueOrganMemberList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateLeagueOrganMemberAll(LeagueOrganMemberDTO dto) throws Exception {
		try {
			//记录日志
			LeagueOrganMemberDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = leagueOrganMemberDAO.updateLeagueOrganMemberAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateLeagueOrganMemberAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateLeagueOrganMemberSensitive(LeagueOrganMemberDTO dto) throws Exception {
		try {
			//记录日志
			LeagueOrganMemberDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = leagueOrganMemberDAO.updateLeagueOrganMemberSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateLeagueOrganMemberSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateLeagueOrganMemberList(List<LeagueOrganMemberDTO> dtoList) throws Exception {
		try {
			return leagueOrganMemberDAO.updateLeagueOrganMemberList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateLeagueOrganMemberList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteLeagueOrganMemberById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			LeagueOrganMemberDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return leagueOrganMemberDAO.deleteLeagueOrganMemberById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteLeagueOrganMemberById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteLeagueOrganMemberByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteLeagueOrganMemberById(id);
			result++;
		}
		return result;
	}

	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return LeagueOrganMemberDTO
	 * @throws Exception
	 */
	private LeagueOrganMemberDTO findById(String id) throws Exception {
		try {
			LeagueOrganMemberDTO dto = leagueOrganMemberDAO.findLeagueOrganMemberById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

