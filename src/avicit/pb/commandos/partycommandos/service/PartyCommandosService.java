package avicit.pb.commandos.partycommandos.service;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.*;

import avicit.pb.commandos.partymilepost.dao.PartyMilepostDAO;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.sysautocode.SysAutoCodeAPI;
import avicit.platform6.bpm.api.listener.InstanceDeleteEventListener;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.spring.SpringFactory;
import avicit.pb.commandos.partycommandos.dao.PartyCommandosDAO;
import avicit.pb.commandos.partycommandos.dto.PartyCommandosDTO;
import org.springframework.util.CollectionUtils;
import avicit.pb.commandos.partymilepost.dto.PartyMilepostDTO;
import avicit.pb.commandos.partymilepost.service.PartyMilepostService;
import org.springframework.util.Assert;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.commons.utils.JsonUtil;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

import avicit.platform6.modules.system.sysfileupload.service.SwfUploadService;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-11 09:57
 * @类说明：
 * @修改记录： 
 */
@Service
public class PartyCommandosService implements Serializable , InstanceDeleteEventListener{

	private static final Logger logger = LoggerFactory.getLogger(PartyCommandosService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private PartyCommandosDAO partyCommandosDAO;

	@Autowired
    private SysExcelExpAPI sysExcelExpAPI;

	@Autowired
	private SwfUploadService sysAttachmentAPI;

	@Autowired
	private PartyMilepostService partyMilepostService;
	@Autowired
	private BpmOperateService bpmOperateService;

	@Autowired
	private BusinessService businessService;
	@Autowired
	public SysAutoCodeAPI autoCodeApi;
	@Autowired
	public PartyMilepostDAO partyMilepostDAO;

	/**
	* 查询（分页）
	* @param queryReqBean 分页
	* @param orderBy 排序语句
	* @param keyWord 快速查询条件
	* @return QueryRespBean<PartyCommandosDTO>
	* @throws Exception
	*/
	public QueryRespBean<PartyCommandosDTO> searchPartyCommandosByPage(QueryReqBean<PartyCommandosDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			PartyCommandosDTO searchParams = queryReqBean.getSearchParams();
			Page<PartyCommandosDTO> dataList = partyCommandosDAO.searchPartyCommandosByPage(searchParams, orderBy, keyWord);
			for(PartyCommandosDTO dto : dataList.getResult()) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			QueryRespBean<PartyCommandosDTO> queryRespBean = new QueryRespBean<PartyCommandosDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			logger.error("searchPartyCommandosByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 查询（不分页）
	* @param searchParams 查询对象
	* @param orderBy 排序
	* @param keyWord 关键字
	* @return List<PartyCommandosDTO>
	* @throws Exception
	*/
	public List<PartyCommandosDTO> searchPartyCommandos(PartyCommandosDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<PartyCommandosDTO> dataList = partyCommandosDAO.searchPartyCommandos(searchParams, orderBy, keyWord);
			for(PartyCommandosDTO dto : dataList) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			return dataList;
		} catch (Exception e) {
			logger.error("searchPartyCommandos出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}


	/**
	* 流程状态转换
	* @param stateCode 编码
	* @return String
	*/
	private String processStateCode2StateName(String stateCode){
		String stateName = "";
		if(stateCode != null && "active".equals(stateCode)){
			stateName = "流转中";
		}else if(stateCode !=null && "ended".equals(stateCode)){
			stateName = "已完成";
		}else if(stateCode !=null && "start".equals(stateCode)){
			stateName = "拟稿中";
		}
		return stateName;
	}
	/**
	 * 主键查询
	 * @param id 主键id
	 * @return PartyCommandosDTO
	 * @throws Exception
	 */
	public PartyCommandosDTO queryPartyCommandosByPrimaryKey(String id) throws Exception {
		try {
			PartyCommandosDTO dto = partyCommandosDAO.findPartyCommandosById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			logger.error("queryPartyCommandosByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}


	/**
	* 新增
	* @param dto 保存对象
	* @return String
	* @throws Exception
	*/
	public String insertPartyCommandos(PartyCommandosDTO dto, List<PartyMilepostDTO> updateSubList) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			Map<String, String> map = autoCodeApi.generateAutoCodeValue("", "partyCommandosCode", dto.getAutoCodeValue(),
					dto.getId(), false);
			String code = "";
			if (map.get("result").equals("success")) {
				code = map.get("autoCodeValue");
			}
			dto.setAutoCode(code);
			
			partyCommandosDAO.insertPartyCommandos(dto);

			if (!CollectionUtils.isEmpty(updateSubList)) {
				for (PartyMilepostDTO partyMilepostDTO : updateSubList) {
					partyMilepostDTO.setCommandosId(id);
					partyMilepostDTO.setTaskStatus("0");
					partyMilepostDTO.setOrgIdentity(dto.getOrgIdentity());
					partyMilepostDTO.setUserId(dto.getUserId());
					partyMilepostDTO.setDeptId(dto.getDeptId());
					partyMilepostDTO.setPartyId(dto.getInPartyorg());
					partyMilepostDTO.setAttribute01(dto.getPcSecretLevel());
					partyMilepostService.insertPartyMilepost(partyMilepostDTO);
				}
			}

			// 记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			logger.error("insertPartyCommandos出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertPartyCommandosList(List<PartyCommandosDTO> dtoList) throws Exception {
		List<PartyCommandosDTO> beanList = new ArrayList<PartyCommandosDTO>();
		for (PartyCommandosDTO dto : dtoList) {
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
			return partyCommandosDAO.insertPartyCommandosList(beanList);
		} catch (Exception e) {
			logger.error("insertPartyCommandosList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyCommandosAll(PartyCommandosDTO dto) throws Exception {
		//记录日志
		PartyCommandosDTO old = findById(dto.getId());
		if (old != null) {
			SysLogUtil.log4Update(dto, old);
		}
		PojoUtil.setSysProperties(dto, OpType.update);
		int ret = partyCommandosDAO.updatePartyCommandosAll(dto);
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
	public int updatePartyCommandosSensitive(PartyCommandosDTO dto, List<PartyMilepostDTO> updateSubList, String[] removeSubIds) throws Exception {
		try {
			// 记录日志
			PartyCommandosDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = partyCommandosDAO.updatePartyCommandosSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}

			if (!CollectionUtils.isEmpty(updateSubList)) {
				for (PartyMilepostDTO partyMilepostDTO : updateSubList) {
					PartyMilepostDTO exsitPartyMilepostDTO = partyMilepostService.queryPartyMilepostByPrimaryKey(partyMilepostDTO.getId());
					if (exsitPartyMilepostDTO == null) {
						partyMilepostDTO.setCommandosId(old.getId());
						partyMilepostDTO.setOrgIdentity(old.getOrgIdentity());
						partyMilepostDTO.setTaskStatus("0");
						partyMilepostDTO.setUserId(old.getUserId());
						partyMilepostDTO.setDeptId(old.getDeptId());
						partyMilepostDTO.setPartyId(old.getInPartyorg());
						partyMilepostDTO.setAttribute01(old.getPcSecretLevel());
						partyMilepostService.insertPartyMilepost(partyMilepostDTO);
					} else {
						partyMilepostDTO.setAttribute01(old.getPcSecretLevel());
						partyMilepostService.updatePartyMilepostSensitive(partyMilepostDTO);
					}
				}
			}

			if (removeSubIds != null && removeSubIds.length > 0) {
				partyMilepostService.deletePartyMilepostByIds(removeSubIds);
			}

			return count;
		} catch (Exception e) {
			logger.error("updatePartyCommandosSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyCommandosList(List<PartyCommandosDTO> dtoList) throws Exception {
		try {
			return partyCommandosDAO.updatePartyCommandosList(dtoList);
		} catch (Exception e) {
			logger.error("updatePartyCommandosList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deletePartyCommandosById(String id) throws Exception {
		if (StringUtils.isEmpty(id)) {
			throw new Exception("删除失败！传入的参数主键为null");
		}
		try {
			//记录日志
			PartyCommandosDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			//删除关联附件
			sysAttachmentAPI.deleteAttachByFormId(id);
			//删除关联流程实例
			String processInstanceId = bpmOperateService.getInstanceIdByFormid(id);
			if(StringUtils.isNotEmpty(processInstanceId)){
				bpmOperateService.deleteProcessInstanceCascade(processInstanceId);
			}
			// 删除关联子表数据
			PartyMilepostDTO queryParams = new PartyMilepostDTO();
			queryParams.setCommandosId(id);
			List<PartyMilepostDTO> list = partyMilepostService.searchPartyMilepost(queryParams,"","");
			for (PartyMilepostDTO partyMilepostDTO : list) {
				partyMilepostService.deletePartyMilepostById(partyMilepostDTO.getId());
			}
			return partyCommandosDAO.deletePartyCommandosById(id);
		} catch (Exception e) {
			logger.error("deletePartyCommandosById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deletePartyCommandosByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deletePartyCommandosById(id);
			result++;
		}
		return result;
	}

	/**
	* 日志专用查询
	* @param id 主键id
	* @return PartyCommandosDTO
	* @throws Exception
	*/
	private PartyCommandosDTO findById(String id) throws Exception {
		try {
			PartyCommandosDTO dto = partyCommandosDAO.findPartyCommandosById(id);
			return dto;
		} catch (Exception e) {
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	/**
	* 保存表单并启动流程
	* @param bean 表单对象
	* @param parameter 启动流程所需要的参数
	* @return StartResultBean
	* @throws Exception
	*/
	@SuppressWarnings("unchecked")
	public StartResultBean insertPartyCommandosAndStartProcess(PartyCommandosDTO bean,List<PartyMilepostDTO> updateSubList ,Map<String, Object> parameter) throws Exception{
	Assert.notNull(parameter, "启动流程失败，请传递流程启动参数！");
		String processDefId = (String)parameter.get("processDefId");
		String formCode = (String)parameter.get("formCode");
		String jsonString = (String)parameter.get("jsonString");
		String userId = (String)parameter.get("userId");
		String deptId = (String)parameter.get("deptId");
		Assert.hasText(processDefId, "启动流程失败，请传递流程启动参数！");
		//保存业务数据
		this.insertPartyCommandos(bean,updateSubList);
		//声明流程变量
		Map<String, Object> variables = new HashMap<String, Object>();
		//将表单之外的参数转换成map存入流程变量
		if(jsonString != null && !"".equals(jsonString)){
		Map<String, Object> extVariables = JsonUtil.parseJSON2Map((String)jsonString);
		variables.putAll(extVariables);
		}
		//将表单对象转换成map存入流程变量
		Map<String, Object> pojoMap = (Map<String, Object>) PojoUtil.toMap(bean);
		variables.putAll(pojoMap);
		String processInstanceId = bpmOperateService.startProcessInstanceById(processDefId, formCode, userId, deptId, variables);
		return businessService.getStartResultBean(processInstanceId, bean.getId(), userId);
	}

    /**
     * 查询（导出）
     * @param searchParams 条件
     * @param idsList 导出数据集合
     * @return List<PartyCommandosDTO>
     * @throws Exception
     */
    public List<PartyCommandosDTO> searchPartyCommandosForExport(PartyCommandosDTO searchParams, List<String> idsList)
            throws Exception {
        try {
            List<PartyCommandosDTO> dataList = partyCommandosDAO.searchPartyCommandosForExport(searchParams, idsList);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchPartyCommandosForExport出错：", e);
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

	@Override
	public void notify(String processInstanceId, String executionId, String formId) throws Exception {
		PartyCommandosDAO partyCommandosDAO = SpringFactory.getBean(PartyCommandosDAO.class);
		partyCommandosDAO.deletePartyCommandosById(formId);
	}

	// 查询基础信息统计
	public Map<String, Object> getByCommandosType() {
		Map<String, Object> byCommandosTypeMap = new HashMap<>();
		SimpleDateFormat sr = new SimpleDateFormat("yyyy");
		Date date = new Date();
		// byCommandosType 查询突击队公司类型
		String byCommandosType = partyCommandosDAO.getByCommandosType(sr.format(date));
		// taskStatus 查询所有里程碑数量
		String taskStatus =  partyMilepostDAO.getByCountTaskStatus(sr.format(date));
		// taskStatusW 查询里程碑未完成
		String taskStatusW =  partyMilepostDAO.getByCountTaskStatusW(sr.format(date));
		// taskStatusWC 查询里程碑已完成
		String taskStatusWC =  partyMilepostDAO.getByCountTaskStatusWC(sr.format(date));
		// taskStatusE 查询里程碑已超期
		String taskStatusE =  partyMilepostDAO.getByCountTaskStatusE(sr.format(date));
		byCommandosTypeMap.put("byCommandosType",byCommandosType);
		byCommandosTypeMap.put("taskStatus",taskStatus);
		byCommandosTypeMap.put("taskStatusW",taskStatusW);
		byCommandosTypeMap.put("taskStatusWC",taskStatusWC);
		byCommandosTypeMap.put("taskStatusE",taskStatusE);
		return byCommandosTypeMap;
	}
}

