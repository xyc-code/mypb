package avicit.pb.dynThreeFour.dynthreefour.service;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;

import avicit.pb.dynThreeFour.dynthreefour.controller.DynThreeFourController;
import avicit.pb.dynThreeFour.dynthreefour.dao.DynThreeFourDAO;
import avicit.pb.dynThreeFour.dynthreefour.dto.DynThreeFourDTO;
import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.bpm.pvm.internal.cmd.O;
import avicit.platform6.bpm.pvm.internal.cmd.P;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import io.swagger.models.auth.In;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;

import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-14 09:04
 * @类说明：DYN_THREE_FOURService
 * @修改记录： 
 */
@Service
public class DynThreeFourService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(DynThreeFourService.class);

	private static final long serialVersionUID = 1L;
	@Autowired
	private SysApplicationAPI sysApplicationAPI;

	@Autowired
	private DynThreeFourDAO dynThreeFourDAO;

	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;

	@Autowired
	private JdbcTemplate jdbcTemplate;

	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynThreeFourDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynThreeFourDTO> searchDynThreeFourByPage(QueryReqBean<DynThreeFourDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynThreeFourDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynThreeFourDTO> dataList = dynThreeFourDAO.searchDynThreeFourByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynThreeFourDTO> queryRespBean = new QueryRespBean<DynThreeFourDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynThreeFourByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynThreeFourDTO>
	 * @throws Exception
	 */
	public List<DynThreeFourDTO> searchDynThreeFour(DynThreeFourDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynThreeFourDTO> dataList = dynThreeFourDAO.searchDynThreeFour(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynThreeFour出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynThreeFourDTO>
	 * @throws Exception
	 */
	public List<DynThreeFourDTO> searchDynThreeFourForExport(DynThreeFourDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynThreeFourDTO> dataList = dynThreeFourDAO.searchDynThreeFourForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynThreeFourForExport出错：", e);
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
	 * @return DynThreeFourDTO
	 * @throws Exception
	 */
	public DynThreeFourDTO queryDynThreeFourByPrimaryKey(String id) throws Exception {
		try {
			DynThreeFourDTO dto = dynThreeFourDAO.findDynThreeFourById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynThreeFourByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynThreeFour(DynThreeFourDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynThreeFourDAO.insertDynThreeFour(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynThreeFour出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynThreeFourList(List<DynThreeFourDTO> dtoList) throws Exception {
		try {
			List<DynThreeFourDTO> beanList = new ArrayList<DynThreeFourDTO>();
			for (DynThreeFourDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynThreeFourDAO.insertDynThreeFourList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynThreeFourList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynThreeFourAll(DynThreeFourDTO dto) throws Exception {
		try {
			//记录日志
			DynThreeFourDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynThreeFourDAO.updateDynThreeFourAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynThreeFourAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynThreeFourSensitive(DynThreeFourDTO dto) throws Exception {
		try {
			//记录日志
			DynThreeFourDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynThreeFourDAO.updateDynThreeFourSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynThreeFourSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynThreeFourList(List<DynThreeFourDTO> dtoList) throws Exception {
		try {
			return dynThreeFourDAO.updateDynThreeFourList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynThreeFourList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynThreeFourById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynThreeFourDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return dynThreeFourDAO.deleteDynThreeFourById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynThreeFourById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynThreeFourByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynThreeFourById(id);
			result++;
		}
		return result;
	}

 	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynThreeFourDTO
	 * @throws Exception
	 */
	private DynThreeFourDTO findById(String id) throws Exception {
		try {
			DynThreeFourDTO dto = dynThreeFourDAO.findDynThreeFourById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	//根据会议类型设置对应键值对
	public void setValue(String meet_type,Map<String,Object> item,String num){
		switch (meet_type){
			case "0":
				item.put("DYDH",num);
				break;
			case "1":
				item.put("ZBWYH",num);
				break;
			case "2":
				item.put("DXZH",num);
				break;
			case "3":
				item.put("DK",num);
				break;
			case "4":
				item.put("JLJCWYH",num);
				break;
			case "5":
				if(!item.get("ATTRIBUTE_01").toString().equals("2")||item.get("PARTY_NAME").toString().indexOf("党委")==-1){
					item.put("DWH","-");
					break;
				} else
				item.put("DWH",num);
				break;
			case "6":
				item.put("ZZWYH",num);
				break;
		}
	}
	//根据会议关键词设置对应键值对
	public void setMapValue(String key,Map<String,Object> item){
		int num = 0;
		switch (key){
			case "0":
				Object dydh = item.get("DYDH");
				if (dydh!=null){
					num = Integer.parseInt(dydh.toString());
				}
				item.put("DYDH",num+1);
				break;
			case "1":
				Object zbwyh = item.get("ZBWYH");
				if (zbwyh!=null){
					num = Integer.parseInt(zbwyh.toString());
				}
				item.put("ZBWYH",num+1);
				break;
			case "2":
				Object dxzh = item.get("DXZH");
				if (dxzh!=null){
					num = Integer.parseInt(dxzh.toString());
				}
				item.put("DXZH",num+1);
				break;
			case "3":
				Object dk = item.get("DK");
				if (dk!=null){
					num = Integer.parseInt(dk.toString());
				}
				item.put("DK",num+1);
				break;
			case "4":
				Object jljcwyh = item.get("JLJCWYH");
				if (jljcwyh!=null){
					num = Integer.parseInt(jljcwyh.toString());
				}
				item.put("JLJCWYH",num+1);
				break;
			case "5":
				Object dwh = item.get("DWH");
				if (dwh!=null){
					num = Integer.parseInt(dwh.toString());
				}
				item.put("DWH",num+1);
				break;
			case "6":
				Object zzwyh = item.get("ZZWYH");
				if (zzwyh!=null){
					num = Integer.parseInt(zzwyh.toString());
				}
				item.put("ZZWYH",num+1);
				break;

		}
	}

	//查询是否拥有党小组 根据此设置对应键值对
	public boolean setPartyXz(Map<String,Object> item, String party_id){
		if (item.get("ATTRIBUTE_01").toString().equals("2")) {
			item.put("isDxz","1");
			return false;
		}
		Map<String, Object> asNum = jdbcTemplate.queryForMap("select count(*) as num from party_organization t where t.parent_id= '" + party_id + "' and t.party_name != '无党小组'  order by t.TREE_SORT");
		if(asNum!=null){
			String num = asNum.get("NUM").toString();
			if("0".equals(num)){
				item.put("isDxz","1");
				return false;
			}
		}
		return true;
	}
	//查询所有党组织 并附带搜索
	public List<Map<String, Object>> queryPartyOrg(String partyName){
		if (partyName == null) {
			partyName = "1 = 1";
		}
		List<Map<String, Object>> partyOrganMemberDTOS = null;
		//首先查出所有党组织
		try {
			partyOrganMemberDTOS = jdbcTemplate.queryForList("select * from party_organization t where t.tree_level != '1' and t.attribute_01 not in ('0') and " + partyName + " and t.party_name != '中国航发XX纪委'   order by t.TREE_SORTS");
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("查询党组织失效，错误信息" + e.getMessage());
		}
		return partyOrganMemberDTOS;
	}

	public List<Map<String, Object>> queryPartyOrgByparty(String sql){
		List<Map<String, Object>> partyOrganMemberDTOS = null;
		//首先查出所有党组织
		try {
			partyOrganMemberDTOS = jdbcTemplate.queryForList("select * from party_organization p where p."+sql+"");
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("查询党组织失效，错误信息" + e.getMessage());
		}
		return partyOrganMemberDTOS;
	}

	//统计三会一课逻辑层
	public void setDynThreeFourView(List<Map<String, Object>> partyOrganMemberDTOS,String year){
		if (year == null) {
			year = "sysdate";
		}
		for (Map<String, Object> item : partyOrganMemberDTOS) {
			String party_id = item.get("ID").toString();
			String party_name = item.get("PARTY_NAME").toString();
			// List<Map<String, Object>> list = jdbcTemplate.queryForList("select count(*) as num,t.meet_type,sum(t.LEARN_HOURS) as LEARN_HOURS from dyn_three_four t where t.party_id = '" + party_id + "' and to_char(t.meet_date, 'yyyy') = to_char("+year+", 'yyyy') group by meet_type");
			List<Map<String, Object>> list = jdbcTemplate.queryForList("select count(*) as num,t.meet_type,sum(t.LEARN_HOURS) as LEARN_HOURS from dyn_three_four t where t.JOIN_ORG like '%" + party_name + "%' and to_char(t.meet_date, 'yyyy') = to_char(" + year + ", 'yyyy') group by meet_type");
			String attribute_01 = item.get("ATTRIBUTE_01").toString();
			item.put("ATTRIBUTE_01Alias", DynThreeFourController.sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PARTY_ORG_TYPE", attribute_01, sysApplicationAPI.getCurrentAppId()));
			//设置该党支部是否有小组
			boolean isPartyXz = this.setPartyXz(item, party_id);
			//总学时
			BigDecimal xs = new BigDecimal("0");
			for (Map<String, Object> items : list) {
				String meet_type = items.get("MEET_TYPE").toString();
				String num = items.get("NUM").toString();
				Object learn_hours = items.get("LEARN_HOURS");
				if (learn_hours != null) {
					BigDecimal bigDecimal = BigDecimal.valueOf(Float.parseFloat(learn_hours.toString()));
					xs = xs.add(bigDecimal);
				}
				this.setValue(meet_type, item, num);
					if(isPartyXz){
						//如果拥有党小组 需要查询该支部下的小组有没有开小组会 也要算到支部上
						List<Map<String, Object>> listNum = jdbcTemplate.queryForList("select count(*) as num,t.meet_type,sum(t.LEARN_HOURS) as LEARN_HOURS from dyn_three_four t where t.party_name = '"+party_name+"' and meet_type = '2' and to_char(t.meet_date, 'yyyy') = to_char("+year+", 'yyyy') group by meet_type");
						Map<String,Object> asNum = null;
						if(listNum!=null&&listNum.size()!=0){
							asNum = listNum.get(0);
						}
						if(asNum!=null){
							String num1 =  asNum.get("num").toString();
//							if("2".equals(meet_type)){
//								int dydh = Integer.parseInt(item.get("DXZH").toString());
//								item.put("DXZH",dydh+num1);
//							}else{
								item.put("DXZH",num1);
//							}
							Object learn_hours1 = asNum.get("LEARN_HOURS");
							if(learn_hours1!=null){
								BigDecimal bigDecimal = BigDecimal.valueOf(Float.parseFloat(learn_hours1.toString()));
								xs = xs.add(bigDecimal);
							}
						}
				}
			}
			this.setMonth(item,year,isPartyXz);
			if(item.get("ATTRIBUTE_01").toString().equals("2")){
				item.put("DXZH","-");
			}
			item.put("xs", xs);
		}
	}
	//三会一课统计页面的详细图
	public List<Map<String,Object>> threeContent(List<Map<String, Object>> partyOrganMemberDTOS,String year){
		List<Map<String,Object>> mapList = new ArrayList<>();
		String [] strs ={"落实习近平总书记对航空发动机重要指示批示精神、贯彻落实集团党组一号文、公司党委一号文","主题形势任务教育","党组织选举","发展党员","党员学习","民主评议","推优评先","党风廉政教育","党员处理处分、末端监督","党务公开","党费、党建活动经费","铸心突击队","党建+质量","党建共建","党员积分","主题党日","合规","其他"};
		this.setListMap(mapList,strs);
		if (year == null) {
			year = "sysdate";
		}
		for(Map<String,Object> item : partyOrganMemberDTOS ){
			String party_name = item.get("PARTY_NAME").toString();
			List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.* from dyn_three_four t where t.JOIN_ORG like '%" + party_name + "%' and to_char(t.meet_date, 'yyyy') = to_char(to_date('"+year+"', 'yyyy'), 'yyyy') ");
			for (Map<String, Object> stringObjectMap : list) {
				Object meet_zj = stringObjectMap.get("MEET_ZJ");
				if (meet_zj!=null){
					String[] split = meet_zj.toString().split(",");
					for (String string : split) {
						for (Map<String, Object> map : mapList) {
							Object meet_zj1 = map.get("meet_zj");
							if(meet_zj1!=null){
								if(string.equals(meet_zj1.toString())){
									if(stringObjectMap.get("MEET_TYPE")!=null){
										this.setMapValue(stringObjectMap.get("MEET_TYPE").toString(),map);
									}
								}
							}
						}
					}
				}
			}
		}
		return mapList;

	}
	//初始化Listmap
	public void setListMap(List<Map<String,Object>> mapList,String [] strs){
		for (String str : strs) {
			Map<String, Object> hashmap = new HashMap<>();
			hashmap.put("meet_zj", str);
			mapList.add(hashmap);
		}
	}



	//计算三会一课的完成率
	public void  setMonth(Map<String,Object> item,String year, Boolean isPartyXz){
		//当前月份
		int monthValue = LocalDate.now().getMonthValue();
		//当前季度
		int quarter = this.getQuarter(monthValue);
		//计算党委会的完成率
		Object dwh = item.get("DWH");
		if(dwh!=null){
			if(item.get("ATTRIBUTE_01")!="2"&&item.get("PARTY_NAME").toString().indexOf("党委")==-1) {
				item.put("DWHWCL", "-");
			} else if(year.equals("sysdate")){
				String s = completionRate(Integer.parseInt(dwh.toString()), monthValue) +"%";
				item.put("DWHWCL",s);
			}else{
				String s = completionRate(Integer.parseInt(dwh.toString()), 12) +"%";
				item.put("DWHWCL",s);
			}
		}else{
			item.put("DWHWCL","-");
		}
		///计算总支委会的完成率
		Object zzwyh = item.get("ZZWYH");
		if(zzwyh!=null){
			if(item.get("ATTRIBUTE_01")!="2"&&item.get("PARTY_NAME").toString().indexOf("党总支")==-1) {
				item.put("ZZWYHWCL","-");
			} else
			if(year.equals("sysdate")){
				String s = completionRate(Integer.parseInt(zzwyh.toString()), monthValue) +"%";
				item.put("ZZWYHWCL",s);
			}else{
				String s = completionRate(Integer.parseInt(zzwyh.toString()), 12) +"%";
				item.put("ZZWYHWCL",s);
			}
		}else{
			item.put("ZZWYHWCL","-");
		}
		//计算支部委员会的完成率
		Object zbwyh = item.get("ZBWYH");
		if(zbwyh!=null){
			if(!item.get("ATTRIBUTE_01").toString().equals("1")) {
				item.put("ZBWYHWCl", "-");
			} else
			if(year.equals("sysdate")){
				String s = completionRate(Integer.parseInt(zbwyh.toString()), monthValue) +"%";
				item.put("ZBWYHWCl",s);
			}else{
				String s = completionRate(Integer.parseInt(zbwyh.toString()), 12) +"%";
				item.put("ZBWYHWCl",s);
			}
		}else{
			item.put("ZBWYHWCl","-");
		}
		//计算党小组会的完成率
		Object dxzh = item.get("DXZH");
		if(dxzh!=null){
			if(isPartyXz == false) {
				item.put("DXZHWCL", "-");
			} else
			if(year.equals("sysdate")){
				String s = completionRate(Integer.parseInt(dxzh.toString()), monthValue) +"%";
				item.put("DXZHWCL",s);
			}else{
				String s = completionRate(Integer.parseInt(dxzh.toString()),12) +"%";
				item.put("DXZHWCL",s);
			}
		}else{
			item.put("DXZHWCL","-");
		}
		//计算党员大会的完成率
		Object dydh = item.get("DYDH");
		if(dydh!=null){
			if(year.equals("sysdate")){
				String s = completionRate(Integer.parseInt(dydh.toString()), quarter) +"%";
				item.put("DYDHWCL",s);
			}else {
				String s = completionRate(Integer.parseInt(dydh.toString()), 4) +"%";
				item.put("DYDHWCL",s);
			}
		}else{
			item.put("DYDHWCL","-");
		}

		//计算党课的完成率
		Object dk = item.get("DK");
		if(dk!=null){
			if(year.equals("sysdate")){
				String s = completionRate(Integer.parseInt(dk.toString()), quarter) +"%";
				item.put("DKWCL",s);
			}else {
				String s = completionRate(Integer.parseInt(dk.toString()), 4) +"%";
				item.put("DKWCL",s);
			}
		}else{
			item.put("DKWCL","-");
		}

		//计算纪委会的完成率
		Object jowly = item.get("JLJCWYH");
		if(jowly!=null){
			item.put("JLJCWYHWCL","-");
		}else{
			item.put("JLJCWYHWCL","-");
		}

	}

	//辅助计算完成率
	public int completionRate(int completedTasks,int totalTasks){
		//当前任务数为0时 无需计算
		if(completedTasks==0){
			return 0;
		}
		//当前任务数多余总任务数 无需计算
		if(completedTasks>totalTasks){
			return 100;
		}
		return (int)(((double)completedTasks/totalTasks*100));
	}
	//辅助获取当前季度
	public int getQuarter(int month){
		if(month>=1&&month<=3){
			return 1;
		}else if(month>=4&&month<=6){
			return 2;
		}else if(month>=7&&month<=9){
			return 3;
		}else {
			return 4;
		}
	}

}

