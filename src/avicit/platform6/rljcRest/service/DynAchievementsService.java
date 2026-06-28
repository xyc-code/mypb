package avicit.platform6.rljcRest.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.Serializable;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.*;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import avicit.pb.activist.activistmerits.dto.ActivistMeritsDTO;
import avicit.pb.activist.activistmerits.service.ActivistMeritsService;
import avicit.pb.activist.partyactivist.dao.PartyActivistDAO;
import avicit.pb.activist.partyactivist.dto.PartyActivistDTO;
import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.rljcRest.dao.DynAchievementsDAO;
import avicit.platform6.rljcRest.dao.DynMdmRyDao;
import avicit.platform6.rljcRest.dto.DynAchievementsDTO;
import avicit.platform6.rljcRest.dto.DynMdmRyDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：sunc
 * @邮箱：123@qq.com
 * @创建时间： 2024-08-16 11:00
 * @类说明：DYN_ACHIEVEMENTSService
 * @修改记录： 
 */
@Service
public class DynAchievementsService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(DynAchievementsService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private DynAchievementsDAO dynAchievementsDAO;

	@Autowired
	private SysExcelExpAPI sysExcelExpAPI;
	
	@Autowired
	private DynMdmRyDao dynMdmRyDao;

	@Autowired
	private SysUserAPI sysUserAPI;
	
	@Autowired
	private PartyActivistDAO partyActivistDAO;
	
	@Autowired
	private ActivistMeritsService activistMeritsService;
	
	@Autowired
	private SysLookupAPI sysLookupAPI;
	/**
	 * 查询（分页）
	 * @param queryReqBean 分页
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return QueryRespBean<DynAchievementsDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynAchievementsDTO> searchDynAchievementsByPage(QueryReqBean<DynAchievementsDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynAchievementsDTO searchParams = queryReqBean.getSearchParams();
			//表单数据查询
			Page<DynAchievementsDTO> dataList = dynAchievementsDAO.searchDynAchievementsByPage(searchParams, orderBy, keyWord);
			QueryRespBean<DynAchievementsDTO> queryRespBean = new QueryRespBean<DynAchievementsDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynAchievementsByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * @param searchParams 条件
	 * @param orderBy 排序语句
	 * @param keyWord 快速查询条件
	 * @return List<DynAchievementsDTO>
	 * @throws Exception
	 */
	public List<DynAchievementsDTO> searchDynAchievements(DynAchievementsDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<DynAchievementsDTO> dataList = dynAchievementsDAO.searchDynAchievements(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynAchievements出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（导出）
	 * @param searchParams 条件
	 * @param idsList 导出数据集合
	 * @return List<DynAchievementsDTO>
	 * @throws Exception
	 */
	public List<DynAchievementsDTO> searchDynAchievementsForExport(DynAchievementsDTO searchParams, List<String> idsList)
			throws Exception {
		try {
			List<DynAchievementsDTO> dataList = dynAchievementsDAO.searchDynAchievementsForExport(searchParams, idsList);
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDynAchievementsForExport出错：", e);
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
	 * @return DynAchievementsDTO
	 * @throws Exception
	 */
	public DynAchievementsDTO queryDynAchievementsByPrimaryKey(String id) throws Exception {
		try {
			DynAchievementsDTO dto = dynAchievementsDAO.findDynAchievementsById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDynAchievementsByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynAchievements(DynAchievementsDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynAchievementsDAO.insertDynAchievements(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynAchievements出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynAchievementsList(List<DynAchievementsDTO> dtoList) throws Exception {
		try {
			List<DynAchievementsDTO> beanList = new ArrayList<DynAchievementsDTO>();
			for (DynAchievementsDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				//记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return dynAchievementsDAO.insertDynAchievementsList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDynAchievementsList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynAchievementsAll(DynAchievementsDTO dto) throws Exception {
		try {
			//记录日志
			DynAchievementsDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = dynAchievementsDAO.updateDynAchievementsAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynAchievementsAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynAchievementsSensitive(DynAchievementsDTO dto) throws Exception {
		try {
			//记录日志
			//DynAchievementsDTO old = findById(dto.getId());
			DynAchievementsDTO old = dynAchievementsDAO.findDynAchievementsByAchievementsId(dto.getAchievementsId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = dynAchievementsDAO.updateDynAchievementsSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynAchievementsSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynAchievementsList(List<DynAchievementsDTO> dtoList) throws Exception {
		try {
			return dynAchievementsDAO.updateDynAchievementsList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDynAchievementsList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynAchievementsById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			DynAchievementsDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return dynAchievementsDAO.deleteDynAchievementsById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDynAchievementsById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynAchievementsByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDynAchievementsById(id);
			result++;
		}
		return result;
	}

 	/**
	 * 日志专用查询
	 * @param id 主键id
	 * @return DynAchievementsDTO
	 * @throws Exception
	 */
	private DynAchievementsDTO findById(String id) throws Exception {
		try {
			DynAchievementsDTO dto = dynAchievementsDAO.findDynAchievementsById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	
	
	/***********************************************************  与人力同步定时任务    ****************************************************************/
	
	//同步人力绩效考核信息
	public void syncHrAchievementsJob(){
		long l1 = System.currentTimeMillis();
		Calendar calendar = Calendar.getInstance();
		int currentYear = calendar.get(Calendar.YEAR);
		int pageSize = 5000;//单次获取条数
		int syncPage = getHrDataTotal(pageSize); //总共多少页
		int insertNum = 0;
		int updataNum = 0;
		for(int i = 0; i < syncPage; i++){
			JSONObject resultJson = restConn(i+1, pageSize);
			JSONObject data = resultJson.getJSONObject("data");
			JSONArray jsonArray = data.getJSONArray("items");
			for (int j = 0; j < jsonArray.size(); j++) {
				JSONObject businessData = jsonArray.getJSONObject(j).getJSONObject("ODS_HR_USER_ACHIEVEMENTS").getJSONObject("businessData");
				DynAchievementsDTO dto = JSONObject.parseObject(businessData.toJSONString(), DynAchievementsDTO.class);
				String jxYear = dto.getAchievementsPeriod();
				if(!"".equals(jxYear) && jxYear != null){
					if(jxYear.contains(currentYear + "") || jxYear.contains(currentYear-1 + "") || jxYear.contains(currentYear-2 + "")){
						String ryId = dto.getUserId();
						DynMdmRyDTO dynMdmRyDTO = dynMdmRyDao.findDynMdmRyByRyId(ryId);
						if(dynMdmRyDTO != null){
							dto.setDjUserId(sysUserAPI.getSysUserByLoginName(dynMdmRyDTO.getJtygbm()).getId());
						}
						DynAchievementsDTO temp = dynAchievementsDAO.findDynAchievementsByAchievementsId(dto.getAchievementsId());
						try {
							if(temp == null){
								this.insertDynAchievements(dto);
								insertNum++;
							}else{
								this.updateDynAchievementsSensitive(dto);
								updataNum++;
							}
						} catch (Exception e) {
							logger.error("ryId【" + ryId + "】 insert or update failure !!!");
							e.printStackTrace();
						}
					}
				}
			}
		}
		long l2 = System.currentTimeMillis();
		System.out.println("本次人力绩效考核数据同步完成，总耗时【" + (l2-l1) + "】共新增【" + insertNum + "】条，更新【" + updataNum + "】条。");
	}
	
	
	public int getHrDataTotal(int pageSize){
		JSONObject resultJson = restConn(1, pageSize);
		JSONObject data = resultJson.getJSONObject("data");
		int total = data.getInteger("total");
		int pageSizes = data.getInteger("pageSize");
		int allPageSize= (total % pageSizes == 0) ? total / pageSizes : total / pageSizes + 1;
		return allPageSize;
	}
	
	
	//查询数据
	public JSONObject restConn(int page, int pageSize){
		JSONObject resultJson = null;
        HttpURLConnection con = null;
        InputStream inputStream = null;
        BufferedReader br = null;
        try {
            URL url = new URL("http://20.14.3.218:18080/dam-dataservice/open-api/dam/dataservice/defined/query-data/89F07633C57D7B42B5A9F0D022C85D54/v1");
            con = (HttpURLConnection) url.openConnection();
            con.setConnectTimeout(15000);
            con.setReadTimeout(15000);
            
            //设置请求方式
            con.setRequestMethod("POST");
            //是否使用缓存
            con.setUseCaches(false);
            //是否从HttpURLConnection进行输入输出
            con.setDoInput(true);
            con.setDoOutput(true);
            //请求头
            con.setRequestProperty("Content-Type", "application/json");
            con.setRequestProperty("Authorization", "Basic SFRVU0VS");
            //建立连接
            con.connect();
            //得到请求流的输出流对象，拼接请求参数
            OutputStream os = con.getOutputStream();
            Map<String, Object> paramMap = new HashMap<String, Object>();
            paramMap.put("page", page);
            paramMap.put("pageSize", pageSize);
            paramMap.put("modelCode", "ODS_HR_USER_ACHIEVEMENTS");

            List<String> queryField = new ArrayList<String>();
            queryField.add("ACHIEVEMENTS_ID");
            queryField.add("USER_ID");
            queryField.add("ACHIEVEMENTS_PERIOD");
            queryField.add("ACHIEVEMENTS_LEVEL");
            queryField.add("ACHIEVEMENTS_USE");
            queryField.add("REMARKS");
            queryField.add("CREATE_TIME");
            queryField.add("CREATE_USER_ID");
            queryField.add("MODIFY_TIME");
            queryField.add("MODIFY_USER_ID");
            queryField.add("DELETE_FLAG");
            queryField.add("SORT_INDEX");
            paramMap.put("queryField", queryField);

            paramMap.put("vague", false);

            os.write(JSON.toJSONString(paramMap).getBytes());
            os.flush();
            //读取响应
            if (HttpURLConnection.HTTP_OK == con.getResponseCode()) {
                inputStream = con.getInputStream();
            } else {
                inputStream = con.getErrorStream();
            }
            //将响应流转化为字符串
            StringBuilder result = new StringBuilder();
            String line;
            br = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));
            while (null != (line = br.readLine())) {
                result.append(line);
            }
            resultJson = JSON.parseObject(result.toString());
        }catch (Exception e){

        }finally {
            try {
            	if(con != null){
            		con.disconnect();
            	}
                if (br != null) {
                    br.close();
                }
                if (inputStream != null) {
                    inputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();

            }
        }
        return resultJson;
	}
	
	
	/**********************************************************  定时查询积极分子绩效考核信息    ***************************************************************/
	
	//同步人力绩效考核信息到入党积极分子子表中（从2024年度开始）
	public void syncHrAchievementsToActivistJob(){
		Calendar calendar = Calendar.getInstance();
		int currentYear = calendar.get(Calendar.YEAR);
		if(currentYear > 2024){//从2025年开始同步
			PartyActivistDTO partyActivistDTO = new PartyActivistDTO();
			//获取所有积极分子
			List<PartyActivistDTO> list = partyActivistDAO.searchPartyActivist(partyActivistDTO, "", "");
			if(list != null && list.size() > 0){
				for(int i = 0; i < list.size(); i++){
					String userId = list.get(i).getUserId();
					//查询当前用户前一年的人力绩效考核信息
					DynAchievementsDTO params = new DynAchievementsDTO();
					params.setDjUserId(userId);
					params.setAchievementsPeriod((currentYear) + "");
					List<DynAchievementsDTO> achievementsList = dynAchievementsDAO.searchDynAchievements(params, "", "");
					if(achievementsList != null && achievementsList.size() > 0){
						try {
							//人力绩效信息考核登记转换
							String djMerits = "";
							Collection<SysLookupSimpleVo> vo = sysLookupAPI.getLookUpListByType("PA_MERITS", SessionHelper.getApplicationId(), SessionHelper.getCurrentLanguageCode());
							if(vo != null && vo.size() > 0){
								for (SysLookupSimpleVo sysLookupSimpleVo : vo) {
									if(achievementsList.get(0).getAchievementsLevel().equals(sysLookupSimpleVo.getLookupName())){
										djMerits = sysLookupSimpleVo.getLookupCode();
									}
								}
							}
							//查询当前用户前一年的积极分子子表中的绩效考核信息
							ActivistMeritsDTO activistParams = new ActivistMeritsDTO();
							String fkId = list.get(i).getId();
							activistParams.setPaId(fkId);
							activistParams.setAttribute01((currentYear) + "");
							List<ActivistMeritsDTO> activistList = activistMeritsService.searchActivistMerits(activistParams, "", "");
							if(activistList != null && activistList.size() > 0){
								//存在，则更新
								ActivistMeritsDTO updateActivistMeritsDTO = new ActivistMeritsDTO();
								updateActivistMeritsDTO.setId(activistList.get(0).getId());
								updateActivistMeritsDTO.setPaId(fkId);
								updateActivistMeritsDTO.setMerits(djMerits);
								activistMeritsService.updateActivistMeritsSensitive(updateActivistMeritsDTO);
							}else{
								//新增
								ActivistMeritsDTO insertActivistMeritsDTO = new ActivistMeritsDTO();
								insertActivistMeritsDTO.setMerits(djMerits);
								insertActivistMeritsDTO.setAttribute01(currentYear + "");
								insertActivistMeritsDTO.setPaId(fkId);
								activistMeritsService.insertActivistMerits(insertActivistMeritsDTO);
							}
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}
			}
		}
		System.out.println("本次同步人力绩效考核信息到入党积极分子表完成");
	}
	

}

