package avicit.pb.member.partymember.service;

import avicit.pb.member.partymember.dao.PartyMemberDAO;
import avicit.pb.member.partymember.dto.PartyMemberDTO;
import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.eformbpms.dto.EformViewInfo;
import avicit.platform6.eformbpms.utils.BpmsCacheUtils;
import avicit.platform6.eformclient.service.BpmsViewDBExcutorService;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.ServletRequestUtils;

import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com @创建时间： 2022-01-21 08:46
 * @类说明：党员信息表Service @修改记录：
 */
@Service
public class PartyMemberService implements Serializable {

    private static final Logger logger = LoggerFactory.getLogger(PartyMemberService.class);

    private static final long serialVersionUID = 1L;

    @Autowired
    private PartyMemberDAO partyMemberDAO;
    @Autowired
    private BpmsViewDBExcutorService h5ViewEngine;
    @Autowired
    private SysExcelExpAPI sysExcelExpAPI;
    @Autowired
    private BpmsCacheUtils catchUtils;
    public static String extractText(String str) {
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (Character.isLetter(c)) {
                sb.append(c);
            }
        }
        return sb.toString();
    }

    /**
     * 查询（分页）
     *
     * @param queryReqBean 分页
     * @param orderBy      排序语句
     * @param keyWord      快速查询条件
     * @return QueryRespBean<PartyMemberDTO>
     * @throws Exception
     */
    public QueryRespBean<PartyMemberDTO> searchPartyMemberByPage(QueryReqBean<PartyMemberDTO> queryReqBean,
                                                                 String orderBy, String keyWord) throws Exception {
        try {
            PartyMemberDTO searchParams = queryReqBean.getSearchParams();
            // 表单数据查询
            PageHelper.startPage(queryReqBean.getPageParameter());
            if (!StringUtils.isBlank(searchParams.getUserIdAlias())) {
                String userIdAlias = extractText(searchParams.getUserIdAlias());
                searchParams.setUserIdAlias(userIdAlias);
            }
            Page<PartyMemberDTO> dataList = partyMemberDAO.searchPartyMemberByPage(searchParams, orderBy, keyWord);
            QueryRespBean<PartyMemberDTO> queryRespBean = new QueryRespBean<PartyMemberDTO>();
            queryRespBean.setResult(dataList);
            return queryRespBean;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchPartyMemberByPage出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 查询（分页）
     *
     * @param queryReqBean 分页
     * @param orderBy      排序语句
     * @param keyWord      快速查询条件
     * @return QueryRespBean<PartyMemberDTO>
     * @throws Exception
     */

    public QueryRespBean<PartyMemberDTO> searchPartyMemberSnyByPage(QueryReqBean<PartyMemberDTO> queryReqBean,
                                                                    String orderBy, String keyWord) throws Exception {
        try {
            PartyMemberDTO searchParams = queryReqBean.getSearchParams();
            // 表单数据查询
            PageHelper.startPage(queryReqBean.getPageParameter());
            if (!StringUtils.isBlank(searchParams.getUserIdAlias())) {
                String userIdAlias = extractText(searchParams.getUserIdAlias());
                searchParams.setUserIdAlias(userIdAlias);
            }
            Page<PartyMemberDTO> dataList = partyMemberDAO.searchPartyMemberBySynPage(searchParams, orderBy, keyWord);
            QueryRespBean<PartyMemberDTO> queryRespBean = new QueryRespBean<PartyMemberDTO>();
            queryRespBean.setResult(dataList);
            return queryRespBean;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchPartyMemberByPage出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 查询（不分页）
     *
     * @param searchParams 条件
     * @param orderBy      排序语句
     * @param keyWord      快速查询条件
     * @return List<PartyMemberDTO>
     * @throws Exception
     */
    public List<PartyMemberDTO> searchPartyMember(PartyMemberDTO searchParams, String orderBy, String keyWord)
            throws Exception {
        try {
            List<PartyMemberDTO> dataList = partyMemberDAO.searchPartyMember(searchParams, orderBy, keyWord);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchPartyMember出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 查询（导出）
     *
     * @param searchParams 条件
     * @param idsList      导出数据集合
     * @return List<PartyMemberDTO>
     * @throws Exception
     */
    public List<PartyMemberDTO> searchPartyMemberForExport(PartyMemberDTO searchParams, List<String> idsList)
            throws Exception {
        try {
            List<PartyMemberDTO> dataList = partyMemberDAO.searchPartyMemberForExport(searchParams, idsList);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchPartyMemberForExport出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 导出excel
     *
     * @param templateCode 模板code
     * @param colsList     导出列集合
     * @param dataList     导出数据
     * @return
     */
    public byte[] exportExcel(String templateCode, List<SysExcelColumnDTO> colsList, List<Map<String, Object>> dataList)
            throws Exception {
        // 构造导出模板code集合
        List<String> templateCodeList = new ArrayList<String>();
        templateCodeList.add(templateCode);
        // 构造code所对应的导出列集合
        Map<String, List<SysExcelColumnDTO>> colsMap = new HashMap<String, List<SysExcelColumnDTO>>();
        colsMap.put(templateCode, colsList);
        // 构造code所对应的数据集合
        Map<String, List<Map<String, Object>>> dataMap = new HashMap<String, List<Map<String, Object>>>();
        dataMap.put(templateCode, dataList);
        byte[] bytes = sysExcelExpAPI.exportExcel(templateCodeList, colsMap, dataMap);
        return bytes;
    }

    /**
     * 主键查询
     *
     * @param id 主键id
     * @return PartyMemberDTO
     * @throws Exception
     */
    public PartyMemberDTO queryPartyMemberByPrimaryKey(String id) throws Exception {
        try {
            PartyMemberDTO dto = partyMemberDAO.findPartyMemberById(id);
            // 记录日志
            if (dto != null) {
                SysLogUtil.log4Query(dto);
            }
            return dto;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("queryPartyMemberByPrimaryKey出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 新增
     *
     * @param dto 保存对象
     * @return String
     * @throws Exception
     */
    public String insertPartyMember(PartyMemberDTO dto) throws Exception {
        try {
            String id = ComUtil.getId();
            dto.setId(id);
            PojoUtil.setSysProperties(dto, OpType.insert);
            partyMemberDAO.insertPartyMember(dto);
            // 记录日志
            if (dto != null) {
                SysLogUtil.log4Insert(dto);
            }
            return id;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("insertPartyMember出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 批量新增
     *
     * @param dtoList 保存对象集合
     * @return int
     * @throws Exception
     */
    public int insertPartyMemberList(List<PartyMemberDTO> dtoList) throws Exception {
        try {
            List<PartyMemberDTO> beanList = new ArrayList<PartyMemberDTO>();
            for (PartyMemberDTO dto : dtoList) {
                String id = ComUtil.getId();
                dto.setId(id);
                PojoUtil.setSysProperties(dto, OpType.insert);
                // 记录日志
                if (dto != null) {
                    SysLogUtil.log4Insert(dto);
                }
                beanList.add(dto);
            }
            return partyMemberDAO.insertPartyMemberList(beanList);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("insertPartyMemberList出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 全部更新
     *
     * @param dto 修改对象
     * @return int
     * @throws Exception
     */
    public int updatePartyMemberAll(PartyMemberDTO dto) throws Exception {
        try {
            // 记录日志
            PartyMemberDTO old = findById(dto.getId());
            if (old != null) {
                SysLogUtil.log4Update(dto, old);
            }
            PojoUtil.setSysProperties(dto, OpType.update);
            int count = partyMemberDAO.updatePartyMemberAll(dto);
            if (count == 0) {
                throw new DaoException("数据失效，请重新更新");
            }
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updatePartyMemberAll出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 部分更新
     *
     * @param dto 修改对象
     * @return int
     * @throws Exception
     */
    public int updatePartyMemberSensitive(PartyMemberDTO dto) throws Exception {
        try {
            // 记录日志
            PartyMemberDTO old = findById(dto.getId());
            if (old != null) {
                SysLogUtil.log4Update(dto, old);
            }
            PojoUtil.setSysProperties(dto, OpType.update);
            PojoUtil.copyProperties(old, dto, true);
            if (dto.getRegularDate() == null) {
                old.setRegularDate(null);
            }
            int count = partyMemberDAO.updatePartyMemberSensitive(old);
            if (count == 0) {
                throw new DaoException("数据失效，请重新更新");
            }
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updatePartyMemberSensitive出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 批量更新
     *
     * @param dtoList 修改对象集合
     * @return int
     * @throws Exception
     */
    public int updatePartyMemberList(List<PartyMemberDTO> dtoList) throws Exception {
        try {
            return partyMemberDAO.updatePartyMemberList(dtoList);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updatePartyMemberList出错：", e);
            throw new DaoException(e.getMessage(), e);
        }

    }

    /**
     * 根据党员ID更新支部
     *
     * @param partyId 修改对象集合
     * @return int
     * @throws Exception
     */
    public int updatePartyMemberPartyOrgByUserId(String userId, String partyId) throws Exception {
        try {
            return partyMemberDAO.updatePartyMemberPartyOrgByUserId(userId, partyId);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updatePartyMemberPartyOrgByUserId出错：", e);
            throw new DaoException(e.getMessage(), e);
        }

    }

    /**
     * 根据党员ID更新支部及党小组
     *
     * @param partyId 修改对象集合
     * @return int
     * @throws Exception
     */
    public int updatePartyMemberPartyOrgAndGroupByUserId(String userId, String partyId, String partyGroupId)
            throws Exception {
        try {
            return partyMemberDAO.updatePartyMemberPartyOrgAndGroupByUserId(userId, partyId, partyGroupId);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updatePartyMemberPartyOrgAndGroupByUserId出错：", e);
            throw new DaoException(e.getMessage(), e);
        }

    }

    /**
     * 删除
     *
     * @param id 主键id
     * @return int
     * @throws Exception
     */
    public int deletePartyMemberById(String id) throws Exception {
        try {
            if (StringUtils.isEmpty(id)) {
                throw new Exception("删除失败！传入的参数主键为null");
            }
            // 记录日志
            PartyMemberDTO dto = findById(id);
            if (dto != null) {
                SysLogUtil.log4Delete(dto);
            }
            return partyMemberDAO.deletePartyMemberById(id);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("deletePartyMemberById出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 批量删除
     *
     * @param ids id的数组
     * @return int
     * @throws Exception
     */
    public int deletePartyMemberByIds(String[] ids) throws Exception {
        int result = 0;
        for (String id : ids) {
            deletePartyMemberById(id);
            result++;
        }
        return result;
    }

    /**
     * 日志专用查询
     *
     * @param id 主键id
     * @return PartyMemberDTO
     * @throws Exception
     */
    private PartyMemberDTO findById(String id) throws Exception {
        try {
            PartyMemberDTO dto = partyMemberDAO.findPartyMemberById(id);
            return dto;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("findById出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    public Map<String, String> getPartyMemberOrganizationByUserId(String userId) {

        try {
            Map<String, String> retMap = partyMemberDAO.findPartyMemberOrganizationById(userId);
            return retMap;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("getPartyMemberOrganizationByUserId出错：", e);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   throw new DaoException(e.getMessage(), e);
        }
    }

    public Map<String, String> getPartyGroupByPartyId(String partyId) {

        try {
            Map<String, String> retMap = partyMemberDAO.findPartyGroupByPartyId(partyId);
            return retMap;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("findPartyGroupByPartyId出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    public List<Map<String, String>> getAllPartyMembersByPartyOrg() {

        try {
            List<Map<String, String>> retMap = partyMemberDAO.findAllPartyMembersByPartyOrg();
            return retMap;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("getAllPartyMembersByPartyOrg出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    public int updateRest(PartyMemberDTO dto) throws Exception {
        try {
            // 记录日志
            PojoUtil.setSysProperties(dto, OpType.update);
            int count = partyMemberDAO.updatePartyMemberSensitiveRest(dto);
            if (count == 0) {
                throw new DaoException("数据失效，请重新更新");
            }
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updatePartyMemberSensitive出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    public QueryRespBean<PartyMemberDTO> searchPartyMemberByDXZPage(QueryReqBean<PartyMemberDTO> queryReqBean, String orderBy, String keyWord) {
        try {
            PartyMemberDTO searchParams = queryReqBean.getSearchParams();
            // 表单数据查询
            PageHelper.startPage(queryReqBean.getPageParameter());
            if (!StringUtils.isBlank(searchParams.getUserIdAlias())) {
                String userIdAlias = extractText(searchParams.getUserIdAlias());
                searchParams.setUserIdAlias(userIdAlias);
            }

            Page<PartyMemberDTO> dataList = partyMemberDAO.searchPartyMemberByDXZPage(searchParams, orderBy, keyWord);
            QueryRespBean<PartyMemberDTO> queryRespBean = new QueryRespBean<PartyMemberDTO>();
            queryRespBean.setResult(dataList);
            return queryRespBean;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchPartyMemberByPage出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    public List<PartyMemberDTO> toDataSync() {
        return partyMemberDAO.toDataSync();
    }
}
