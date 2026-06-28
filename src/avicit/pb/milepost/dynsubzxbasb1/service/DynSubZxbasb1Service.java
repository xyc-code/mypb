package avicit.pb.milepost.dynsubzxbasb1.service;

import java.io.Serializable;
import java.util.*;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.pb.milepost.dynfiveof.dto.DynFiveOfDTO;
import avicit.pb.milepost.dynsubzxbasb1.dao.DynSubZxbasb1DAO;
import avicit.pb.milepost.dynsubzxbasb1.dto.DynSubZxbasb1DTO;
import avicit.pb.milepost.dynyouthdeclaration.dto.DynYouthDeclarationDTO;
import avicit.pb.milepost.dynyouthrecord.dto.DynYouthRecordDTO;
import avicit.pb.milepost.dynyouthrecord.service.DynYouthRecordService;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import avicit.weekly.dto.WeeklyDTO;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-14 13:08
 * @类说明：DYN_SUB_ZXBASB_1Service
 * @修改记录： 
 */
@Service
public class DynSubZxbasb1Service implements Serializable,LoaderConstant {

	private static final Logger logger = LoggerFactory.getLogger(DynSubZxbasb1Service.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private DynSubZxbasb1DAO dynSubZxbasb1DAO;

	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynSubZxbasb1DTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynSubZxbasb1DTO> searchDynSubZxbasb1ByPage(QueryReqBean<DynSubZxbasb1DTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynSubZxbasb1DTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynSubZxbasb1DTO> dataList = dynSubZxbasb1DAO.searchDynSubZxbasb1ByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynSubZxbasb1DTO> queryRespBean = new QueryRespBean<DynSubZxbasb1DTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynSubZxbasb1ByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynSubZxbasb1DTO>
	 * @throws Exception
	 */
	public List<DynSubZxbasb1DTO> searchDynSubZxbasb1(DynSubZxbasb1DTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynSubZxbasb1DTO> dataList = dynSubZxbasb1DAO.searchDynSubZxbasb1(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynSubZxbasb1出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynSubZxbasb1DTO>
	 * @throws Exception
	 */
	public List<DynSubZxbasb1DTO> searchDynSubZxbasb1ForExport(DynSubZxbasb1DTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynSubZxbasb1DTO> dataList = dynSubZxbasb1DAO.searchDynSubZxbasb1ForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynSubZxbasb1ForExport出错：", e);
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
	 * @return DynSubZxbasb1DTO
	 * @throws Exception
	 */
	public DynSubZxbasb1DTO queryDynSubZxbasb1ByPrimaryKey(String id) throws Exception {
		try {
			DynSubZxbasb1DTO dto = dynSubZxbasb1DAO.findDynSubZxbasb1ById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynSubZxbasb1ByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynSubZxbasb1(DynSubZxbasb1DTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynSubZxbasb1DAO.insertDynSubZxbasb1(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynSubZxbasb1出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynSubZxbasb1List(List<DynSubZxbasb1DTO> dtoList) throws Exception {
		try {
			List<DynSubZxbasb1DTO> beanList = new ArrayList<DynSubZxbasb1DTO>();
			for (DynSubZxbasb1DTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynSubZxbasb1DAO.insertDynSubZxbasb1List(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynSubZxbasb1List出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynSubZxbasb1All(DynSubZxbasb1DTO dto) throws Exception {
		try {
			//记录日志
			DynSubZxbasb1DTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynSubZxbasb1DAO.updateDynSubZxbasb1All(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynSubZxbasb1All出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynSubZxbasb1Sensitive(DynSubZxbasb1DTO dto) throws Exception {
		try {
			//记录日志
			DynSubZxbasb1DTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynSubZxbasb1DAO.updateDynSubZxbasb1Sensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynSubZxbasb1Sensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynSubZxbasb1List(List<DynSubZxbasb1DTO> dtoList) throws Exception {
		try {
			return dynSubZxbasb1DAO.updateDynSubZxbasb1List(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynSubZxbasb1List出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynSubZxbasb1ById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynSubZxbasb1DTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return dynSubZxbasb1DAO.deleteDynSubZxbasb1ById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynSubZxbasb1ById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynSubZxbasb1ByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynSubZxbasb1ById(id);
			result++;
		}
		return result;
	}

 	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynSubZxbasb1DTO
	 * @throws Exception
	 */
	private DynSubZxbasb1DTO findById(String id) throws Exception {
		try {
			DynSubZxbasb1DTO dto = dynSubZxbasb1DAO.findDynSubZxbasb1ById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	public List<DynSubZxbasb1DTO> fomart(String fitId,String type){
		try{
		List<DynSubZxbasb1DTO>  dyn   =	 dynSubZxbasb1DAO.fomart(fitId,type);
		return dyn;
		}catch(Exception e){
			e.printStackTrace();
			logger.error("fitId出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
		
	}
	public void sonWeekly(String json, String lcid) {
		List<DynSubZxbasb1DTO> dtoList = fomart(json,"0");//队长
		List<DynSubZxbasb1DTO> dtoListChild = fomart(json,"1");//队员
		for(DynSubZxbasb1DTO dto : dtoListChild){
			String id = ComUtil.getId();
			dto.setId(id);
			dto.setFkSubColId(lcid);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynSubZxbasb1DAO.insertDynSubZxbasb1(dto);
		}
		for(DynSubZxbasb1DTO dto : dtoList){
			String id = ComUtil.getId();
			dto.setId(id);
			dto.setFkSubColId(lcid);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynSubZxbasb1DAO.insertDynSubZxbasb1(dto);
		}
		
	}
	public Map<String,Object> getPartyData(String type){
		Map<String,Object> map = new  HashMap<String,Object>();
		if("0".equals(type)){
			List<DynYouthRecordDTO> dto = dynSubZxbasb1DAO.searchDynYouthRecord();
			for(int i=0;i<dto.size();i++){
				SysDept dept = sysDeptLoader.getSysDeptBySysDeptId(dto.get(i).getCreatedDept());
				dto.get(i).setCreatedDept(dept.getDeptName());
			}
			map.put("result",dto);
			return map;
		}else if("1".equals(type)){
			List<DynYouthDeclarationDTO> dto= dynSubZxbasb1DAO.searchDynYouthDeclaration();
			for(int i=0;i<dto.size();i++){
				SysDept dept = sysDeptLoader.getSysDeptBySysDeptId(dto.get(i).getCreatedDept());
				dto.get(i).setCreatedDept(dept.getDeptName());
			}
			map.put("result",dto);
			return map;
		}else {
			List<DynFiveOfDTO> dto = dynSubZxbasb1DAO.searchDynFiveOf();
			for(int i=0;i<dto.size();i++){
				SysDept dept = sysDeptLoader.getSysDeptBySysDeptId(dto.get(i).getCreatedDept());
				dto.get(i).setCreatedDept(dept.getDeptName());
			}
			map.put("result",dto);
			return map;
		}
	}
}

