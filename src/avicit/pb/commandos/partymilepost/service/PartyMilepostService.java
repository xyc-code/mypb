package avicit.pb.commandos.partymilepost.service;

import java.io.Serializable;
import java.util.*;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.pb.commandos.partymilepost.dao.PartyMilepostDAO;
import avicit.pb.commandos.partymilepost.dto.PartyMilepostDTO;
import avicit.pb.milepost.partymilepost.dto.PartyMilepostDTO1;
import avicit.platform6.modules.system.sysfileupload.service.SwfUploadService;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-11 09:57
 * @类说明：
 * @修改记录： 
 */
@Service
public class PartyMilepostService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(PartyMilepostService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private PartyMilepostDAO partyMilepostDAO;

	@Autowired
    private SysExcelExpAPI sysExcelExpAPI;
	@Autowired
	private SwfUploadService sysAttachmentAPI;
	@Autowired
	private BpmOperateService bpmOperateService;
	
	@Autowired
	private BusinessService businessService;
	



	/**
	* 查询（分页）
	* @param queryReqBean 分页
	* @param orderBy 排序语句
	* @param keyWord 快速查询条件
	* @return QueryRespBean<PartyMilepostDTO>
	* @throws Exception
	*/
	public QueryRespBean<PartyMilepostDTO> searchPartyMilepostByPage(QueryReqBean<PartyMilepostDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			PartyMilepostDTO searchParams = queryReqBean.getSearchParams();
			Page<PartyMilepostDTO> dataList = partyMilepostDAO.searchPartyMilepostByPage(searchParams, orderBy, keyWord);
			for(PartyMilepostDTO dto : dataList.getResult()) {
				dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
			}
			QueryRespBean<PartyMilepostDTO> queryRespBean = new QueryRespBean<PartyMilepostDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			logger.error("searchPartyMilepostByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
    * 查询（不分页）
    * @param searchParams 查询对象
    * @param orderBy 排序
    * @param keyWord 关键字
    * @return List<PartyMilepostDTO>
    * @throws Exception
    */
    public List<PartyMilepostDTO> searchPartyMilepost(PartyMilepostDTO searchParams, String orderBy, String keyWord)
            throws Exception {
        try {
            List<PartyMilepostDTO> dataList = partyMilepostDAO.searchPartyMilepost(searchParams, orderBy, keyWord);
            return dataList;
        } catch (Exception e) {
            logger.error("searchPartyMilepost出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }



	/**
	 * 主键查询
	 * @param id 主键id
	 * @return PartyMilepostDTO
	 * @throws Exception
	 */
	public PartyMilepostDTO queryPartyMilepostByPrimaryKey(String id) throws Exception {
		try {
			PartyMilepostDTO dto = partyMilepostDAO.findPartyMilepostById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			logger.error("queryPartyMilepostByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 新增
	* @param dto 保存对象
	* @return String
	* @throws Exception
	*/
	public String insertPartyMilepost(PartyMilepostDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			partyMilepostDAO.insertPartyMilepost(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			logger.error("insertPartyMilepost出错：", e);
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
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertPartyMilepostList(List<PartyMilepostDTO> dtoList) throws Exception {
		List<PartyMilepostDTO> beanList = new ArrayList<PartyMilepostDTO>();
		for (PartyMilepostDTO dto : dtoList) {
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
			return partyMilepostDAO.insertPartyMilepostList(beanList);
		} catch (Exception e) {
			logger.error("insertPartyMilepostList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyMilepostAll(PartyMilepostDTO dto) throws Exception {
		//记录日志
		PartyMilepostDTO old = findById(dto.getId());
		if (old != null) {
			SysLogUtil.log4Update(dto, old);
		}
		PojoUtil.setSysProperties(dto, OpType.update);
		int ret = partyMilepostDAO.updatePartyMilepostAll(dto);
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
	public int updatePartyMilepostSensitive(PartyMilepostDTO dto) throws Exception {
		try {
			//记录日志
			PartyMilepostDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = partyMilepostDAO.updatePartyMilepostSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			logger.error("updatePartyMilepostSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updatePartyMilepostList(List<PartyMilepostDTO> dtoList) throws Exception {
		try {
			return partyMilepostDAO.updatePartyMilepostList(dtoList);
		} catch (Exception e) {
			logger.error("updatePartyMilepostList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deletePartyMilepostById(String id) throws Exception {
		if (StringUtils.isEmpty(id)) {
			throw new Exception("删除失败！传入的参数主键为null");
		}
		try {
			//记录日志
			PartyMilepostDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			//删除附件
			sysAttachmentAPI.deleteAttachByFormId(id);
			//删除流程数据
			String processInstanceId = bpmOperateService.getInstanceIdByFormid(id);
			if(StringUtils.isNotEmpty(processInstanceId)){
				bpmOperateService.deleteProcessInstanceCascade(processInstanceId);
			}
			return partyMilepostDAO.deletePartyMilepostById(id);
		} catch (Exception e) {
			logger.error("deletePartyMilepostById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deletePartyMilepostByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deletePartyMilepostById(id);
			result++;
		}
		return result;
	}

	/**
	* 日志专用查询
	* @param id 主键id
	* @return PartyMilepostDTO
	* @throws Exception
	*/
	private PartyMilepostDTO findById(String id) throws Exception {
		try {
			PartyMilepostDTO dto = partyMilepostDAO.findPartyMilepostById(id);
			return dto;
		} catch (Exception e) {
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}


    /**
     * 查询（导出）
     * @param searchParams 条件
     * @param idsList 导出数据集合
     * @return List<PartyMilepostDTO>
     * @throws Exception
     */
    public List<PartyMilepostDTO> searchPartyMilepostForExport(PartyMilepostDTO searchParams, List<String> idsList)
            throws Exception {
        try {
            List<PartyMilepostDTO> dataList = partyMilepostDAO.searchPartyMilepostForExport(searchParams, idsList);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchPartyMilepostForExport出错：", e);
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
}

