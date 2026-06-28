package avicit.pb.organize.partyorganmember.service;

import java.io.Serializable;
import java.util.*;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.commons.utils.UtilString;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.pb.organize.partyorganization.dao.PartyOrganizationDAO;
import avicit.pb.organize.partyorganmember.dao.PartyOrganMemberDAO;
import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import avicit.pb.organize.partyorganization.dto.*;
/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-12 11:39
 * @类说明：党组织人员信息表Service
 * @修改记录： 
 */
@Service
public class PartyOrganMemberService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(PartyOrganMemberService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private PartyOrganMemberDAO partyOrganMemberDAO;
	
	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;
	@Autowired
	private PartyOrganizationDAO partyOrganizationDAO;
	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<PartyOrganMemberDTO>
	 * @throws Exception
	 */
	public QueryRespBean<PartyOrganMemberDTO> searchPartyOrganMemberByPage(QueryReqBean<PartyOrganMemberDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			PartyOrganMemberDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<PartyOrganMemberDTO> dataList = partyOrganMemberDAO.searchPartyOrganMemberByPage(searchParams, orderBy, keyWord);
			QueryRespBean<PartyOrganMemberDTO> queryRespBean = new QueryRespBean<PartyOrganMemberDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchPartyOrganMemberByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<PartyOrganMemberDTO>
	 * @throws Exception
	 */
	public QueryRespBean<PartyOrganMemberDTO> searchPartyOrganMemberTelByPage(String userId,QueryReqBean<PartyOrganMemberDTO> queryReqBean, String orderBy, String keyWord) throws Exception {

		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			PartyOrganMemberDTO searchParams = queryReqBean.getSearchParams();
			if(StringUtils.isNotEmpty(searchParams.getPartyId())){
				
				
				PartyOrganizationDTO partyOrganizationDTO =  partyOrganizationDAO.findPartyOrganizationById(searchParams.getPartyId());
				if(partyOrganizationDTO != null && StringUtils.equals("-1", partyOrganizationDTO.getParentId())){
					searchParams.setPartyId("");
					searchParams.setUserId(userId);
				}
				if(StringUtils.equals("2", searchParams.getPartyId())){
					searchParams.setPartyId("");
					//searchParams.setUserId(userId);
				}
			}
			
			//表单数据查询
			Page<PartyOrganMemberDTO> dataList = partyOrganMemberDAO.searchPartyOrganMemberByPage(searchParams, orderBy, keyWord);
			QueryRespBean<PartyOrganMemberDTO> queryRespBean = new QueryRespBean<PartyOrganMemberDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchPartyOrganMemberByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<PartyOrganMemberDTO>
	 * @throws Exception
	 */
	public List<PartyOrganMemberDTO> searchPartyOrganMember(PartyOrganMemberDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<PartyOrganMemberDTO> dataList = partyOrganMemberDAO.searchPartyOrganMember(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchPartyOrganMember出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<PartyOrganMemberDTO>
	 * @throws Exception
	 */
	public List<PartyOrganMemberDTO> searchPartyOrganMemberForExport(PartyOrganMemberDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<PartyOrganMemberDTO> dataList = partyOrganMemberDAO.searchPartyOrganMemberForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchPartyOrganMemberForExport出错：", e);
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
	 * @return PartyOrganMemberDTO
	 * @throws Exception
	 */
	public PartyOrganMemberDTO queryPartyOrganMemberByPrimaryKey(String id) throws Exception {
		try {
			PartyOrganMemberDTO dto = partyOrganMemberDAO.findPartyOrganMemberById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryPartyOrganMemberByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	/**
	 * 删除树节点前在子表里做个查询，查询数据表里的数据个数
	 * @param id 当前树节点id
	 * @return int
	 * @throws Exception
	 */
	public int selectPartyOrganMemberByPid(String id) throws Exception {
		try {
			int emps = partyOrganMemberDAO.selectPartyOrganMemberByPid(id);
			return emps;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("selectPartyOrganMemberByPid出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertPartyOrganMember(PartyOrganMemberDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			partyOrganMemberDAO.insertPartyOrganMember(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertPartyOrganMember出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertPartyOrganMemberList(List<PartyOrganMemberDTO> dtoList) throws Exception {
		try {
			List<PartyOrganMemberDTO> beanList = new ArrayList<PartyOrganMemberDTO>();
			for (PartyOrganMemberDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return partyOrganMemberDAO.insertPartyOrganMemberList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertPartyOrganMemberList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyOrganMemberAll(PartyOrganMemberDTO dto) throws Exception {
		try {
			//记录日志
			PartyOrganMemberDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = partyOrganMemberDAO.updatePartyOrganMemberAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updatePartyOrganMemberAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyOrganMemberSensitive(PartyOrganMemberDTO dto) throws Exception {
		try {
			//记录日志
			PartyOrganMemberDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = partyOrganMemberDAO.updatePartyOrganMemberSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updatePartyOrganMemberSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyOrganMemberList(List<PartyOrganMemberDTO> dtoList) throws Exception {
		try {
			return partyOrganMemberDAO.updatePartyOrganMemberList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updatePartyOrganMemberList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deletePartyOrganMemberById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			PartyOrganMemberDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return partyOrganMemberDAO.deletePartyOrganMemberById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deletePartyOrganMemberById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deletePartyOrganMemberByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deletePartyOrganMemberById(id);
			result++;
		}
		return result;
	}

	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return PartyOrganMemberDTO
	 * @throws Exception
	 */
	private PartyOrganMemberDTO findById(String id) throws Exception {
		try {
			PartyOrganMemberDTO dto = partyOrganMemberDAO.findPartyOrganMemberById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	/**
	 * 主键查询
	 * @param partyId 主键partyId
	 * @return PartyOrganMemberDTO
	 * @throws Exception
	 */
	public List<PartyOrganMemberDTO> queryPartyOrganMemberByPartyId(String partyId) throws Exception {
		try {
			List<PartyOrganMemberDTO> dtoList = partyOrganMemberDAO.findPartyOrganMemberByOrganizationId(partyId);
			//记录日志
		
			return dtoList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryPartyOrganMemberByPartyId出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

