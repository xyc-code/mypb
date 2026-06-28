package avicit.tradeunion.dacaremedicine.service;

import avicit.platform6.api.sysautocode.SysAutoCodeAPI;
import avicit.platform6.bpm.api.listener.InstanceDeleteEventListener;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import avicit.tradeunion.dacaremedicine.dao.DaCareMedicineDAO;
import avicit.tradeunion.dacaremedicine.dto.DaCareMedicineDTO;
import avicit.tradeunion.dacaremedicineitem.dto.DaCareMedicineItemDTO;
import avicit.tradeunion.dacaremedicineitem.service.DaCareMedicineItemService;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.util.CollectionUtils;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.util.*;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com @创建时间： 2021-03-28 13:08 @类说明： @修改记录：
 */
@Service
public class DaCareMedicineService implements Serializable, InstanceDeleteEventListener {

	private static final Logger logger = LoggerFactory.getLogger(DaCareMedicineService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private BpmOperateService bpmOperateService;

	@Autowired
	private BusinessService businessService;

	@Autowired
	private DaCareMedicineDAO daCareMedicineDAO;

	@Autowired
	public SysAutoCodeAPI autoCodeApi;

	private MathContext mathContext = new MathContext(1, RoundingMode.UNNECESSARY);

	@Autowired
	public DaCareMedicineItemService daCareMedicineItemService;



	/**
	 * 流程删除事件方法
	 * 
	 * @param processInstanceId
	 *            流程实例id
	 * @param executionId
	 * @param formId
	 *            表单id
	 * @throws Exception
	 */
	@Override
	public void notify(String processInstanceId, String executionId, String formId) throws Exception {
		DaCareMedicineDAO daCareMedicineDAO = SpringFactory.getBean(DaCareMedicineDAO.class);
		daCareMedicineDAO.deleteDaCareMedicineById(formId);
	}

	/**
	 * 查询（分页）
	 * 
	 * @param queryReqBean
	 *            分页
	 * @param orderBy
	 *            排序语句
	 * @param keyWord
	 *            快速查询条件
	 * @return QueryRespBean<DaCareMedicineDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DaCareMedicineDTO> searchDaCareMedicineByPage(QueryReqBean<DaCareMedicineDTO> queryReqBean,
			String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			DaCareMedicineDTO searchParams = queryReqBean.getSearchParams();
			// 表单数据查询
			Page<DaCareMedicineDTO> dataList = daCareMedicineDAO.searchDaCareMedicineByPage(searchParams, orderBy,
					keyWord);
			for (DaCareMedicineDTO dto : dataList.getResult()) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			QueryRespBean<DaCareMedicineDTO> queryRespBean = new QueryRespBean<DaCareMedicineDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDaCareMedicineByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询（不分页）
	 * 
	 * @param searchParams
	 *            条件
	 * @return List<DaCareMedicineDTO>
	 * @throws Exception
	 */
	public List<DaCareMedicineDTO> searchDaCareMedicine(DaCareMedicineDTO searchParams) throws Exception {
		try {
			List<DaCareMedicineDTO> dataList = daCareMedicineDAO.searchDaCareMedicine(searchParams);
			for (DaCareMedicineDTO dto : dataList) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			return dataList;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchDaCareMedicine出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 流程状态转换
	 * 
	 * @param stateCode
	 *            编码
	 * @return String
	 */
	private String processStateCode2StateName(String stateCode) {
		String stateName = "";
		if (stateCode != null && "active".equals(stateCode)) {
			stateName = "流转中";
		} else if (stateCode != null && "ended".equals(stateCode)) {
			stateName = "结束";
		} else if (stateCode != null && "start".equals(stateCode)) {
			stateName = "草稿";
		}
		return stateName;
	}

	/**
	 * 主键查询
	 * 
	 * @param id
	 *            主键id
	 * @return DaCareMedicineDTO
	 * @throws Exception
	 */
	public DaCareMedicineDTO queryDaCareMedicineByPrimaryKey(String id) throws Exception {
		try {
			DaCareMedicineDTO dto = daCareMedicineDAO.findDaCareMedicineById(id);
			// 记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryDaCareMedicineByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 新增
	 * 
	 * @param dto
	 *            保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDaCareMedicine(DaCareMedicineDTO dto, List<DaCareMedicineItemDTO> updateSubList) throws Exception {
		try {
			Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00"));
			String curYear = String.valueOf(calendar.get(Calendar.YEAR));
			String id = ComUtil.getId();
			dto.setId(id);
			dto.setAttribute01(curYear);
			PojoUtil.setSysProperties(dto, OpType.insert);
			Map<String, String> map = autoCodeApi.generateAutoCodeValue("", "DA_CARE_CODE", dto.getAutoCodeValue(),
					dto.getId(), false);
			String code = "";
			if (map.get("result").equals("success")) {
				code = map.get("autoCodeValue");
			}
			dto.setAutoCode(code);
			daCareMedicineDAO.insertDaCareMedicine(dto);


			/*20240402*/
			if (!CollectionUtils.isEmpty(updateSubList)) {
				for (DaCareMedicineItemDTO aCareMedicineItemDTO : updateSubList) {
					aCareMedicineItemDTO.setFkId(id);
					aCareMedicineItemDTO.setOrgIdentity(dto.getOrgIdentity());
					this.daCareMedicineItemService.insertDaCareMedicineItem(aCareMedicineItemDTO);
				}
			}


			// 记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDaCareMedicine出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * 
	 * @param dtoList
	 *            保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDaCareMedicineList(List<DaCareMedicineDTO> dtoList) throws Exception {
		try {
			List<DaCareMedicineDTO> beanList = new ArrayList<DaCareMedicineDTO>();
			for (DaCareMedicineDTO dto : dtoList) {
				String id = ComUtil.getId();
				dto.setId(id);
				PojoUtil.setSysProperties(dto, OpType.insert);
				// 记录日志
				if (dto != null) {
					SysLogUtil.log4Insert(dto);
				}
				beanList.add(dto);
			}
			return daCareMedicineDAO.insertDaCareMedicineList(beanList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDaCareMedicineList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * 
	 * @param dto
	 *            修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDaCareMedicineAll(DaCareMedicineDTO dto) throws Exception {
		try {
			// 记录日志
			DaCareMedicineDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			int count = daCareMedicineDAO.updateDaCareMedicineAll(dto);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDaCareMedicineAll出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 部分更新
	 * 
	 * @param dto
	 *            修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDaCareMedicineSensitive(DaCareMedicineDTO dto, List<DaCareMedicineItemDTO> updateSubList, String[] removeSubIds) throws Exception {
		try {
			// 记录日志
			DaCareMedicineDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = daCareMedicineDAO.updateDaCareMedicineSensitive(old);

			if (!CollectionUtils.isEmpty(updateSubList)) {
				for (DaCareMedicineItemDTO itemDTO : updateSubList) {
					DaCareMedicineItemDTO daCareMedicineItemDTO = this.daCareMedicineItemService.queryDaCareMedicineItemByPrimaryKey(itemDTO.getId());
					if (daCareMedicineItemDTO == null) {
						daCareMedicineItemDTO.setFkId(old.getId());
						daCareMedicineItemDTO.setOrgIdentity(old.getOrgIdentity());
						this.daCareMedicineItemService.insertDaCareMedicineItem(daCareMedicineItemDTO);
					} else {
						daCareMedicineItemService.updateDaCareMedicineItemSensitive(daCareMedicineItemDTO);
					}
				}
			}

			if (removeSubIds != null && removeSubIds.length > 0) {
				daCareMedicineItemService.deleteDaCareMedicineItemByIds(removeSubIds);
			}


			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDaCareMedicineSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * 
	 * @param dtoList
	 *            修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDaCareMedicineList(List<DaCareMedicineDTO> dtoList) throws Exception {
		try {
			return daCareMedicineDAO.updateDaCareMedicineList(dtoList);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateDaCareMedicineList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * 
	 * @param id
	 *            主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDaCareMedicineById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			// 记录日志
			DaCareMedicineDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return daCareMedicineDAO.deleteDaCareMedicineById(id);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteDaCareMedicineById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * 
	 * @param ids
	 *            id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDaCareMedicineByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteDaCareMedicineById(id);
			String processInstanceId = bpmOperateService.getInstanceIdByFormid(id);
			if (StringUtils.isNotEmpty(processInstanceId)) {
				bpmOperateService.deleteProcessInstanceCascade(processInstanceId);
			}
			result++;
		}
		return result;
	}

	/**
	 * 日志专用查询
	 * 
	 * @param id
	 *            主键id
	 * @return DaCareMedicineDTO
	 * @throws Exception
	 */
	private DaCareMedicineDTO findById(String id) throws Exception {
		try {
			DaCareMedicineDTO dto = daCareMedicineDAO.findDaCareMedicineById(id);
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 保存表单并启动流程
	 * 
	 * @param bean
	 *            表单对象
	 * @param parameter
	 *            启动流程所需要的参数
	 * @return StartResultBean
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public StartResultBean insertDaCareMedicineAndStartProcess(DaCareMedicineDTO bean,List<DaCareMedicineItemDTO> updateSubList, Map<String, Object> parameter)
			throws Exception {
		try {
			Assert.notNull(parameter, "启动流程失败，请传递流程启动参数！");
			String processDefId = (String) parameter.get("processDefId");
			String formCode = (String) parameter.get("formCode");
			String jsonString = (String) parameter.get("jsonString");
			String userId = (String) parameter.get("userId");
			String deptId = (String) parameter.get("deptId");
			Assert.hasText(processDefId, "启动流程失败，请传递流程启动参数！");
			// 保存业务数据
			this.insertDaCareMedicine(bean,updateSubList);
			// 声明流程变量
			Map<String, Object> variables = new HashMap<String, Object>();
			// 将表单之外的参数转换成map存入流程变量
			if (jsonString != null && !"".equals(jsonString)) {
				Map<String, Object> extVariables = JsonUtil.parseJSON2Map((String) jsonString);
				variables.putAll(extVariables);
			}
			// 将表单对象转换成map存入流程变量
			Map<String, Object> pojoMap = (Map<String, Object>) PojoUtil.toMap(bean);
			variables.putAll(pojoMap);
			String processInstanceId = bpmOperateService.startProcessInstanceById(processDefId, formCode, userId,
					deptId, variables);
			return businessService.getStartResultBean(processInstanceId, bean.getId(), userId);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertDaCareMedicineDTOAndStartProcess出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}


	/**
	 * （一）	一般住院医疗：
	 * 个人支付金额2000~3000元按10％比例计发爱心医疗互助金；
	 * 3001~4000元按15％比例计发爱心医疗互助金；
	 * 4001~5000元按20％比例计发爱心医疗互助金；
	 * 5001~6000元按25％比例计发爱心医疗互助金；
	 * 6001~7000元按30％比例计发爱心医疗互助金；
	 * 7001~8000元按35％比例计发爱心医疗互助金；
	 * 8001~9000元按40％比例计发爱心医疗互助金；
	 * 9001~10000元按45％比例计发爱心医疗互助金；
	 * 10001元以上按50％比例计发爱心医疗互助金。
	 * 特殊情况：此类型个人支付金额少于2000元时，弹窗提示（未达最低报销标准，报销金额0元，同时申请报销金额显示0元）；
	 * （二）	特殊门诊：可报销个人支付金额50％的费用；
	 * （三）	血液透析：每年只提交一次申请，个人支付金额小于等于2000元，按照实际个人支付金额全额报销；个人支付金额大于2000元，按照2000元报销。
	 * （四）	器官移植：每年只提交一次申请，个人支付金额小于等于10000元，按照实际个人支付金额全额报销；个人支付金额大于10000元，按照10000元报销。
	 * @param id
	 * @param patienterId
	 * @param diseaseType
	 * @param submitExpensess
	 * @param year
	 * @return
	 * @throws Exception
	 */
	public Map<String, String> getSubmitExpenses(String id, String patienterId, String diseaseType, String submitExpensess,
			String year) throws Exception {
		try {
			Map<String, String> retMap = new HashMap<String, String>();
			BigDecimal submitExpensessDB = new BigDecimal(submitExpensess);


			if("2".equals(diseaseType)||"3".equals(diseaseType)){//（三）	血液透析,（四）	器官移植 每年只能提交一次申请
				List<DaCareMedicineDTO> tempList=this.daCareMedicineDAO.searchPersonalDiseaseTypeExpenses(null, patienterId, year, diseaseType);
				if(tempList.size()>1){
					retMap.put("retValue","0.00");
					retMap.put("isSubmit","no");
					retMap.put("retMessage", "血液透析，器官移植，每年只提交一次申请!!!");
					return retMap;
				}
			}

			float submitExpensessF = submitExpensessDB.floatValue();
			BigDecimal personalAllLeftExpenses = findPersonalAllLeftExpenses(id, patienterId, year, submitExpensess);
			logger.info("=================="+personalAllLeftExpenses.toString());
			if (personalAllLeftExpenses.floatValue() <= 0) {
				retMap.put("retValue", personalAllLeftExpenses.toString());
				retMap.put("isSubmit","no");
				retMap.put("retMessage", "本年度个人报销已超过5万元，无法报销!!!");
				return retMap;
			} else {

				BigDecimal retBD = new BigDecimal("0.00");

				BigDecimal submitDB = personalAllLeftExpenses.subtract(retBD);
				if (submitDB.floatValue() <= 0) {
					retMap.put("retValue", submitDB.toString());
					retMap.put("isSubmit","no");
					retMap.put("retMessage", "个人申请报销金额大于等于个人本年度所剩余额，按个人所剩余额报销!!!");
				} else {
					retMap.put("retValue", submitDB.toString());
					retMap.put("isSubmit","yes");
					retMap.put("retMessage", "验证成功!!!");
				}
				return retMap;



			/*
				if (StringUtils.equals(diseaseType, "0")) {
					BigDecimal retBD = new BigDecimal("0.0");

					BigDecimal submitDB = personalAllLeftExpenses.subtract(retBD);
					if (submitDB.floatValue() <= 0) {
						retMap.put("retValue", personalAllLeftExpenses.toString());
						retMap.put("retMessage", "个人申请报销金额大于等于个人本年度所剩余额，按个人所剩余额报销!!!");
					} else {
						retMap.put("retValue", submitDB.toString());
						retMap.put("retMessage", "验证成功!!!");
					}
					return retMap;
				} else if (StringUtils.equals(diseaseType, "1")) {
					BigDecimal retBD = new BigDecimal("0.0");
					retBD = submitExpensessDB.multiply(new BigDecimal("0.5")).setScale(1, BigDecimal.ROUND_DOWN);
					BigDecimal submitDB = personalAllLeftExpenses.subtract(retBD);
					if (submitDB.floatValue() <= 0) {
						retMap.put("retValue", personalAllLeftExpenses.toString());
						retMap.put("retMessage", "个人申请报销金额大于等于个人本年度所剩余额，按个人所剩余额报销!!!");
					} else {
						retMap.put("retValue", submitDB.toString());
						retMap.put("retMessage", "验证成功!!!");
					}
					return retMap;
				} else if (StringUtils.equals(diseaseType, "2")) {

					if (findPersonalDiseaseTypeExpensesUsed(id, patienterId, year,diseaseType) == 1) {
						retMap.put("retValue", "0.0");
						retMap.put("retMessage", "本年度个人已报销血液透析2000元，无法报销!!!");
						return retMap;
					} else {
						retMap.put("retValue", "2000.0");
						retMap.put("retMessage", "验证成功!!!");
						return retMap;
					}


				} else {

					if (findPersonalDiseaseTypeExpensesUsed(id, patienterId, year,diseaseType) == 1) {
						retMap.put("retValue", "0.0");
						retMap.put("retMessage", "本年度个人已报销器官移植10000元，无法报销!!!");
						return retMap;
					} else {
						retMap.put("retValue", "10000.0");
						retMap.put("retMessage", "验证成功!!!");
						return retMap;
					}
				}*/
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("getSubmitExpenses出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 检查疾病类型
	 * @param id
	 * @param patienterId
	 * @param year
	 * @param diseaseType
	 * @return
	 */
	public Map<String, String> fidJblx(String id,String patienterId,String year,String diseaseType){
		Map<String, String> retMap = new HashMap<String, String>();
		if("2".equals(diseaseType)||"3".equals(diseaseType)){//（三）	血液透析,（四）	器官移植 每年只能提交一次申请
			List<DaCareMedicineDTO> tempList=this.daCareMedicineDAO.searchPersonalDiseaseTypeExpenses(null, patienterId, year, diseaseType);

			if(tempList.size()>=1){
				if(tempList.size()==1){
					String formId=tempList.get(0).getId();
					if(formId.equals(id)){//是否相等,为了排除自己就一条数据，然后在页面来回切换类型导致判断出错的问题。
						retMap.put("retMessage", "");
						retMap.put("isSubmit","yes");
					}else{
						retMap.put("isSubmit","no");
						retMap.put("retMessage", "血液透析，器官移植，每年只提交一次申请!!!");
					}
				}else{
					retMap.put("isSubmit","no");
					retMap.put("retMessage", "血液透析，器官移植，每年只提交一次申请!!!");
				}

			}else{
				retMap.put("retMessage", "");
				retMap.put("isSubmit","yes");
			}
		}
		return retMap;
	}



	public BigDecimal findPersonalAllLeftExpenses(String id, String patienterId, String year, String submitExpensess) throws Exception {
		try {
			BigDecimal allBigDecimal = new BigDecimal("50000.00");
			BigDecimal addBigDecimal = new BigDecimal("0.00");
			List<String> dataList = daCareMedicineDAO.searchPersonalAllLeftExpenses(id, patienterId, year);
			if (dataList.size() > 0) {
				for (String data : dataList) {
					BigDecimal tempBigDecimal = new BigDecimal(data);
					addBigDecimal = addBigDecimal.add(tempBigDecimal);
				}
			}

			//加上本次申请的
			BigDecimal currentSubmitExpensess = new BigDecimal(submitExpensess);//本次申请金额
			addBigDecimal = addBigDecimal.add(currentSubmitExpensess);

			BigDecimal subBigDecimal = allBigDecimal.subtract(addBigDecimal);
			return subBigDecimal;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findPersonalAllLeftExpenses出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}
	
	
	public int findPersonalDiseaseTypeExpensesUsed(String id, String patienterId, String year, String diseaseType) throws Exception {

		try {
		   int retValue = daCareMedicineDAO.searchPersonalDiseaseTypeExpensesUsed(id, patienterId, year,diseaseType);
			return retValue;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findPersonalDiseaseTypeExpensesUsed出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

}
