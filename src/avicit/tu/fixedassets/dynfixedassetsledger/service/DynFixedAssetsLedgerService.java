package avicit.tu.fixedassets.dynfixedassetsledger.service;

import java.io.Serializable;
import java.util.*;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
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
import avicit.tu.fixedassets.dynfixedassetsledger.dao.DynFixedAssetsLedgerDAO;
import avicit.tu.fixedassets.dynfixedassetsledger.dto.DynFixedAssetsLedgerDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：文冲
 * @邮箱：13022927887@163.com
 * @创建时间： 2025-04-23 16:37
 * @类说明：DYN_FIXED_ASSETS_LEDGERService
 * @修改记录： 
 */
@Service
public class DynFixedAssetsLedgerService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(DynFixedAssetsLedgerService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private DynFixedAssetsLedgerDAO dynFixedAssetsLedgerDAO;

	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynFixedAssetsLedgerDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynFixedAssetsLedgerDTO> searchDynFixedAssetsLedgerByPage(QueryReqBean<DynFixedAssetsLedgerDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynFixedAssetsLedgerDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynFixedAssetsLedgerDTO> dataList = dynFixedAssetsLedgerDAO.searchDynFixedAssetsLedgerByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynFixedAssetsLedgerDTO> queryRespBean = new QueryRespBean<DynFixedAssetsLedgerDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynFixedAssetsLedgerByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynFixedAssetsLedgerDTO>
	 * @throws Exception
	 */
	public List<DynFixedAssetsLedgerDTO> searchDynFixedAssetsLedger(DynFixedAssetsLedgerDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynFixedAssetsLedgerDTO> dataList = dynFixedAssetsLedgerDAO.searchDynFixedAssetsLedger(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynFixedAssetsLedger出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynFixedAssetsLedgerDTO>
	 * @throws Exception
	 */
	public List<DynFixedAssetsLedgerDTO> searchDynFixedAssetsLedgerForExport(DynFixedAssetsLedgerDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynFixedAssetsLedgerDTO> dataList = dynFixedAssetsLedgerDAO.searchDynFixedAssetsLedgerForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynFixedAssetsLedgerForExport出错：", e);
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
	 * @return DynFixedAssetsLedgerDTO
	 * @throws Exception
	 */
	public DynFixedAssetsLedgerDTO queryDynFixedAssetsLedgerByPrimaryKey(String id) throws Exception {
		try {
			DynFixedAssetsLedgerDTO dto = dynFixedAssetsLedgerDAO.findDynFixedAssetsLedgerById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynFixedAssetsLedgerByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynFixedAssetsLedger(DynFixedAssetsLedgerDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynFixedAssetsLedgerDAO.insertDynFixedAssetsLedger(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynFixedAssetsLedger出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynFixedAssetsLedgerList(List<DynFixedAssetsLedgerDTO> dtoList) throws Exception {
		try {
			List<DynFixedAssetsLedgerDTO> beanList = new ArrayList<DynFixedAssetsLedgerDTO>();
			for (DynFixedAssetsLedgerDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynFixedAssetsLedgerDAO.insertDynFixedAssetsLedgerList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynFixedAssetsLedgerList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynFixedAssetsLedgerAll(DynFixedAssetsLedgerDTO dto) throws Exception {
		try {
			//记录日志
			DynFixedAssetsLedgerDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynFixedAssetsLedgerDAO.updateDynFixedAssetsLedgerAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynFixedAssetsLedgerAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynFixedAssetsLedgerSensitive(DynFixedAssetsLedgerDTO dto) throws Exception {
		try {
			//记录日志
			DynFixedAssetsLedgerDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynFixedAssetsLedgerDAO.updateDynFixedAssetsLedgerSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynFixedAssetsLedgerSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynFixedAssetsLedgerList(List<DynFixedAssetsLedgerDTO> dtoList) throws Exception {
		try {
			return dynFixedAssetsLedgerDAO.updateDynFixedAssetsLedgerList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynFixedAssetsLedgerList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynFixedAssetsLedgerById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynFixedAssetsLedgerDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return dynFixedAssetsLedgerDAO.deleteDynFixedAssetsLedgerById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynFixedAssetsLedgerById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynFixedAssetsLedgerByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynFixedAssetsLedgerById(id);
			result++;
		}
		return result;
	}

 	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynFixedAssetsLedgerDTO
	 * @throws Exception
	 */
	private DynFixedAssetsLedgerDTO findById(String id) throws Exception {
		try {
			DynFixedAssetsLedgerDTO dto = dynFixedAssetsLedgerDAO.findDynFixedAssetsLedgerById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	/********************************************    计算现值          ***********************************************/
	
	/**
	 * 根据原值、分类中减值信息更新现值
	 */
	public void calculateCurrentValue(){
		try {
			Map<String, Integer> depreValue = getFixedAssetsTypeCurrent();
			Calendar calendar = Calendar.getInstance();
			DynFixedAssetsLedgerDTO searchParams = new DynFixedAssetsLedgerDTO();
			searchParams.setYearToBelong(calendar.get(Calendar.YEAR) + "");
			List<DynFixedAssetsLedgerDTO> dataList = dynFixedAssetsLedgerDAO.searchDynFixedAssetsLedger(searchParams, "", "");
			if(dataList != null && dataList.size() > 0){
				for (DynFixedAssetsLedgerDTO dto : dataList) {
					int calculateMonthNum = calculateMonth(dto.getAttribute06());
					if(calculateMonthNum > 0){
						if(depreValue.containsKey(dto.getAssetDetails())){
							Integer currentValue = depreValue.get(dto.getAssetDetails());
							double newCurrentValue = dto.getCurrentValue() - (calculateMonthNum * currentValue * dto.getAssetNum());
							if(newCurrentValue <= 0){
								newCurrentValue = (long) 0;
							}
							DynFixedAssetsLedgerDTO updateDto = new DynFixedAssetsLedgerDTO();
							updateDto.setId(dto.getId());
							updateDto.setCurrentValue(newCurrentValue);
							updateDto.setAttribute06(new Date());
							updateDynFixedAssetsLedgerSensitive(updateDto);
						}
					}else{
						DynFixedAssetsLedgerDTO updateDto = new DynFixedAssetsLedgerDTO();
						updateDto.setId(dto.getId());
						if(dto.getCurrentValue() == null){
							updateDto.setCurrentValue(dto.getOriginalValue());
						}
						updateDto.setAttribute06(new Date());
						updateDynFixedAssetsLedgerSensitive(updateDto);
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("更新现值出错！", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	
	/**
	 * 查询资产减值信息
	 */
	public Map<String, Integer> getFixedAssetsTypeCurrent(){
		Map<String, Integer> result = new HashMap<String, Integer>();
		String sql = "select t.details_code,t.details_money from dyn_assets_type_sub t";
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		if(list != null && list.size() > 0){
			for (Map<String, Object> map : list) {
				result.put(map.get("DETAILS_CODE").toString(), Integer.parseInt(map.get("DETAILS_MONEY").toString()));
			}
		}
		return result;
	}
	
	
	/**
	 * 根据当前日期与上次更新日期做对比，获取需要减值的月份数量
	 * @param lastCalculateDate
	 * @return
	 */
	public int calculateMonth(Date lastCalculateDate){
		int num = 0;
		Calendar now = Calendar.getInstance();
		Calendar target = Calendar.getInstance();
		target.setTime(lastCalculateDate);
		
		int yearDiff = now.get(Calendar.YEAR) - target.get(Calendar.YEAR);
		int monthDiff = now.get(Calendar.MONTH) - target.get(Calendar.MONTH);
		num = Math.abs(yearDiff * 12 + monthDiff);
		return num;
	}
}

