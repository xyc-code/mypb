package avicit.pb.dyndemocracy.service;

import avicit.pb.dyndemocracy.dao.DynDemocracyDAO;
import avicit.pb.dyndemocracy.dto.DynDemocracyDTO;
import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.SysPermissionResourceAPI;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.api.listener.InstanceDeleteEventListener;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.commons.utils.*;
import avicit.platform6.core.excel.export.ServerExcelExport;
import avicit.platform6.core.excel.export.headersource.JqExportDataGridHeaderSource;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.eformbpms.dto.EformViewContent;
import avicit.platform6.eformbpms.dto.EformViewInfo;
import avicit.platform6.eformbpms.utils.BpmsCacheUtils;
import avicit.platform6.eformclient.service.BpmsViewDBExcutorService;
import avicit.platform6.eformclient.utils.BpmsCommonUtils;
import avicit.platform6.modules.system.sysfileupload.service.SwfUploadService;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import com.fasterxml.jackson.core.type.TypeReference;
import com.lowagie.text.Document;
import com.lowagie.text.PageSize;
import com.lowagie.text.Rectangle;
import com.lowagie.text.pdf.PdfWriter;
import org.apache.commons.lang.StringUtils;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;
import org.springframework.util.Assert;
import org.springframework.web.bind.ServletRequestUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayInputStream;
import java.io.Serializable;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-11-07 16:43
 * @类说明：
 * @修改记录：
 */
@Service
public class DynDemocracyService implements Serializable, InstanceDeleteEventListener, LoaderConstant {

    private static final Logger logger = LoggerFactory.getLogger(DynDemocracyService.class);

    private static final long serialVersionUID = 1L;

    @Autowired
    private BpmOperateService bpmOperateService;

    @Autowired
    private BusinessService businessService;

    @Autowired
    private DynDemocracyDAO dynDemocracyDAO;

    @Autowired
    private SysExcelExpAPI sysExcelExpAPI;

    @Autowired
    private SwfUploadService sysAttachmentAPI;
    @Autowired
    private SysPermissionResourceAPI permissionAPI;
    @Autowired
    private BpmsViewDBExcutorService h5ViewEngine;
	@Autowired
	private BpmsCacheUtils bpmsCacheUtils;

    /**
     * 流程删除事件方法
     *
     * @param processInstanceId 流程实例id
     * @param executionId
     * @param formId            表单id
     * @throws Exception
     */
    @Override
    public void notify(String processInstanceId, String executionId, String formId) throws Exception {
        DynDemocracyDAO dynDemocracyDAO = SpringFactory.getBean(DynDemocracyDAO.class);
        dynDemocracyDAO.deleteDynDemocracyById(formId);
    }

    /**
     * 查询（分页）
     *
     * @param queryReqBean 分页
     * @param orderBy      排序语句
     * @param keyWord      快速查询条件
     * @return QueryRespBean<DynDemocracyDTO>
     * @throws Exception
     */
    public QueryRespBean<DynDemocracyDTO> searchDynDemocracyByPage(QueryReqBean<DynDemocracyDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
        try {
            PageHelper.startPage(queryReqBean.getPageParameter());
            DynDemocracyDTO searchParams = queryReqBean.getSearchParams();
            //表单数据查询
            Page<DynDemocracyDTO> dataList = dynDemocracyDAO.searchDynDemocracyByPage(searchParams, orderBy, keyWord);
            for (DynDemocracyDTO dto : dataList.getResult()) {
                dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
            }
            QueryRespBean<DynDemocracyDTO> queryRespBean = new QueryRespBean<DynDemocracyDTO>();
            queryRespBean.setResult(dataList);
            return queryRespBean;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchDynDemocracyByPage出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 查询（不分页）
     *
     * @param searchParams 条件
     * @param orderBy      排序语句
     * @param keyWord      快速查询条件
     * @return List<DynDemocracyDTO>
     * @throws Exception
     */
    public List<DynDemocracyDTO> searchDynDemocracy(DynDemocracyDTO searchParams, String orderBy, String keyWord)
            throws Exception {
        try {
            List<DynDemocracyDTO> dataList = dynDemocracyDAO.searchDynDemocracy(searchParams, orderBy, keyWord);
            for (DynDemocracyDTO dto : dataList) {
                dto.setBusinessstate_(processStateCode2StateName(dto.getBusinessstate_()));
            }
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchDynDemocracy出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 查询（导出）
     *
     * @param searchParams 条件
     * @param idsList      导出数据集合
     * @return List<DynDemocracyDTO>
     * @throws Exception
     */
    public List<DynDemocracyDTO> searchDynDemocracyForExport(DynDemocracyDTO searchParams, List<String> idsList)
            throws Exception {
        try {
            List<DynDemocracyDTO> dataList = dynDemocracyDAO.searchDynDemocracyForExport(searchParams, idsList);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchDynDemocracyForExport出错：", e);
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
    public byte[] exportExcel(String templateCode, List<SysExcelColumnDTO> colsList, List<Map<String, Object>> dataList) throws Exception {
        //构造导出模板code集合
        List<String> templateCodeList = new ArrayList<String>();
        templateCodeList.add(templateCode);
        //构造code所对应的导出列集合
        Map<String, List<SysExcelColumnDTO>> colsMap = new HashMap<String, List<SysExcelColumnDTO>>();
        colsMap.put(templateCode, colsList);
        //构造code所对应的数据集合
        Map<String, List<Map<String, Object>>> dataMap = new HashMap<String, List<Map<String, Object>>>();
        dataMap.put(templateCode, dataList);
        byte[] bytes = sysExcelExpAPI.exportExcel(templateCodeList, colsMap, dataMap);
        return bytes;
    }

    /**
     * 流程状态转换
     *
     * @param stateCode 编码
     * @return String
     */
    private String processStateCode2StateName(String stateCode) {
        String stateName = "";
        if (stateCode != null && "active".equals(stateCode)) {
            stateName = "流转中";
        } else if (stateCode != null && "ended".equals(stateCode)) {
            stateName = "已完成";
        } else if (stateCode != null && "start".equals(stateCode)) {
            stateName = "拟稿中";
        }
        return stateName;
    }

    /**
     * 主键查询
     *
     * @param id 主键id
     * @return DynDemocracyDTO
     * @throws Exception
     */
    public DynDemocracyDTO queryDynDemocracyByPrimaryKey(String id) throws Exception {
        try {
            DynDemocracyDTO dto = dynDemocracyDAO.findDynDemocracyById(id);
            //记录日志
            if (dto != null) {
                SysLogUtil.log4Query(dto);
            }
            return dto;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("queryDynDemocracyByPrimaryKey出错：", e);
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
    public String insertDynDemocracy(DynDemocracyDTO dto) throws Exception {
        try {
            String id = ComUtil.getId();
            dto.setId(id);
            PojoUtil.setSysProperties(dto, OpType.insert);
            dynDemocracyDAO.insertDynDemocracy(dto);
            //记录日志
            if (dto != null) {
                SysLogUtil.log4Insert(dto);
            }
            return id;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("insertDynDemocracy出错：", e);
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
    public int insertDynDemocracyList(List<DynDemocracyDTO> dtoList) throws Exception {
        try {
            List<DynDemocracyDTO> beanList = new ArrayList<DynDemocracyDTO>();
            for (DynDemocracyDTO dto : dtoList) {
                String id = ComUtil.getId();
                dto.setId(id);
                PojoUtil.setSysProperties(dto, OpType.insert);
                //记录日志
                if (dto != null) {
                    SysLogUtil.log4Insert(dto);
                }
                beanList.add(dto);
            }
            return dynDemocracyDAO.insertDynDemocracyList(beanList);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("insertDynDemocracyList出错：", e);
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
    public int updateDynDemocracyAll(DynDemocracyDTO dto) throws Exception {
        try {
            //记录日志
            DynDemocracyDTO old = findById(dto.getId());
            if (old != null) {
                SysLogUtil.log4Update(dto, old);
            }
            PojoUtil.setSysProperties(dto, OpType.update);
            int count = dynDemocracyDAO.updateDynDemocracyAll(dto);
            if (count == 0) {
                throw new DaoException("数据失效，请重新更新");
            }
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updateDynDemocracyAll出错：", e);
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
    public int updateDynDemocracySensitive(DynDemocracyDTO dto) throws Exception {
        try {
            //记录日志
            DynDemocracyDTO old = findById(dto.getId());
            if (old != null) {
                SysLogUtil.log4Update(dto, old);
            }
            PojoUtil.setSysProperties(dto, OpType.update);
            PojoUtil.copyProperties(old, dto, true);
            int count = dynDemocracyDAO.updateDynDemocracySensitive(old);
            if (count == 0) {
                throw new DaoException("数据失效，请重新更新");
            }
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updateDynDemocracySensitive出错：", e);
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
    public int updateDynDemocracyList(List<DynDemocracyDTO> dtoList) throws Exception {
        try {
            return dynDemocracyDAO.updateDynDemocracyList(dtoList);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updateDynDemocracyList出错：", e);
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
    public int deleteDynDemocracyById(String id) throws Exception {
        try {
            if (StringUtils.isEmpty(id)) {
                throw new Exception("删除失败！传入的参数主键为null");
            }
            //记录日志
            DynDemocracyDTO dto = findById(id);
            if (dto != null) {
                SysLogUtil.log4Delete(dto);
            }
            //删除附件
            sysAttachmentAPI.deleteAttachByFormId(id);
            //删除流程数据
            String processInstanceId = bpmOperateService.getInstanceIdByFormid(id);
            if (StringUtils.isNotEmpty(processInstanceId)) {
                bpmOperateService.deleteProcessInstanceCascade(processInstanceId);
            }
            return dynDemocracyDAO.deleteDynDemocracyById(id);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("deleteDynDemocracyById出错：", e);
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
    public int deleteDynDemocracyByIds(String[] ids) throws Exception {
        int result = 0;
        for (String id : ids) {
            deleteDynDemocracyById(id);
            result++;
        }
        return result;
    }

    /**
     * 日志专用查询
     *
     * @param id 主键id
     * @return DynDemocracyDTO
     * @throws Exception
     */
    private DynDemocracyDTO findById(String id) throws Exception {
        try {
            DynDemocracyDTO dto = dynDemocracyDAO.findDynDemocracyById(id);
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
     * @param bean      表单对象
     * @param parameter 启动流程所需要的参数
     * @return StartResultBean
     * @throws Exception
     */
    @SuppressWarnings("unchecked")
    public StartResultBean insertDynDemocracyAndStartProcess(DynDemocracyDTO bean, Map<String, Object> parameter) throws Exception {
        try {
            Assert.notNull(parameter, "启动流程失败，请传递流程启动参数！");
            String processDefId = (String) parameter.get("processDefId");
            String formCode = (String) parameter.get("formCode");
            String jsonString = (String) parameter.get("jsonString");
            String userId = (String) parameter.get("userId");
            String deptId = (String) parameter.get("deptId");
            Assert.hasText(processDefId, "启动流程失败，请传递流程启动参数！");
            //保存业务数据
            this.insertDynDemocracy(bean);
            //声明流程变量
            Map<String, Object> variables = new HashMap<String, Object>();
            //将表单之外的参数转换成map存入流程变量
            if (jsonString != null && !"".equals(jsonString)) {
                Map<String, Object> extVariables = JsonUtil.parseJSON2Map((String) jsonString);
                variables.putAll(extVariables);
            }
            //将表单对象转换成map存入流程变量
            Map<String, Object> pojoMap = (Map<String, Object>) PojoUtil.toMap(bean);
            variables.putAll(pojoMap);
            String processInstanceId = bpmOperateService.startProcessInstanceById(processDefId, formCode, userId, deptId, variables);
            return businessService.getStartResultBean(processInstanceId, bean.getId(), userId);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("insertDynDemocracyDTOAndStartProcess出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 民主生活会导出*/
    public String downloadExcel(String version, HttpServletRequest request, ModelMap map, HttpServletResponse response, String langcode) {
        String viewid = ServletRequestUtils.getStringParameter(request, "viewid", "");
        String tableComponentid = ServletRequestUtils.getStringParameter(request, "tableid", "");
        String isbpm = ServletRequestUtils.getStringParameter(request, "isbpm", "");
        String orgIdentity = SessionHelper.getCurrentOrgIdentity(request);
        PageParameter pageParameter = new PageParameter();
        QueryReqBean<Map<String, Object>> queryReqBean = new QueryReqBean();
        queryReqBean.setPageParameter(pageParameter);
        String sqlPermission = this.permissionAPI.analyzePermissionSql("t1", tableComponentid, request.getSession().getAttribute("CURRENT_ORG_IDENTITY").toString());
        String json = ServletRequestUtils.getStringParameter(request, "param", "");
        String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");
        String sord = ServletRequestUtils.getStringParameter(request, "sord", "");
        String sidx = ServletRequestUtils.getStringParameter(request, "sidx", "ID");
        String pid = ServletRequestUtils.getStringParameter(request, "pid", "");
        String comparameter = ServletRequestUtils.getStringParameter(request, "comparameter", "");
        String orderBy = "";
        if (sidx != null && !"".equals(sidx)) {
            orderBy = sidx + " " + sord;
        }

        if (!"".equals(keyWord)) {
            json = keyWord;
        }

        Map<String, Object> param = new HashMap();
        if (json != null && !"".equals(json)) {
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            param = (Map) JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<Map<String, Object>>() {
            });
        }

        SimpleDateFormat dateFormat;
        if (org.apache.commons.lang3.StringUtils.isNotEmpty(comparameter)) {
            dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Map<String, Object> comparaMap = (Map) JsonHelper.getInstance().readValue(comparameter, dateFormat, new TypeReference<Map<String, Object>>() {
            });
            ((Map) param).put("comparaMap", comparaMap);
        }

        if (isbpm.equals("Y")) {
            ((Map) param).put("bpmtype", "my");
        }

        ((Map) param).put("currUserId", SessionHelper.getLoginSysUserId(request));
        ((Map) param).put("currDeptId", SessionHelper.getCurrentDeptId(request));
        queryReqBean.setSearchParams(param);
        dateFormat = null;

        QueryRespBean result;
        try {
            String andOr = "And";
            if (keyWord != null && !"".equals(keyWord)) {
                andOr = "Or";
            }

            List<String> nodeIdList = this.h5ViewEngine.getAllSubNode(queryReqBean, viewid, tableComponentid, pid, orgIdentity, version);
            result = this.h5ViewEngine.selectTableComponentData(queryReqBean, orderBy, viewid, tableComponentid, andOr, pid, langcode, isbpm, orgIdentity, sqlPermission, version, nodeIdList);
            int currentPage = result.getPageParameter().getPage();
            long totalPages = result.getPageParameter().getTotalPage();
            if ((long) currentPage < totalPages) {
                int totalrecords = (int) result.getPageParameter().getTotalCount();
                pageParameter = new PageParameter(1, totalrecords);
                queryReqBean.setPageParameter(pageParameter);
                result = this.h5ViewEngine.selectTableComponentData(queryReqBean, orderBy, viewid, tableComponentid, andOr, pid, langcode, isbpm, orgIdentity, sqlPermission, version, nodeIdList);
            }
            this.beforeExport(result,viewid,tableComponentid,pid,orgIdentity,version);
//            this.h5ViewEngine.beforeExport(result, viewid, tableComponentid, pid, orgIdentity, version);
        } catch (Exception var36) {
            logger.error(var36.getMessage());
            var36.printStackTrace();
            return "";
        }

        List<Map<String, Object>> rowsList = result.getResult().getResult();
        String fileType = ServletRequestUtils.getStringParameter(request, "fileType", "excel");
        String fileName = ServletRequestUtils.getStringParameter(request, "fileName", "导出数据");
        boolean hasRowNum = ServletRequestUtils.getBooleanParameter(request, "hasRowNum", true);
        String showCols;
        String layout;
        if ("excel".equals(fileType)) {
            showCols = ServletRequestUtils.getStringParameter(request, "dataGridFields", "");
            showCols =showCols.replaceAll("\\bleft\\b","center");
            String unContainFields = ServletRequestUtils.getStringParameter(request, "unContainFields", "");
            layout = ServletRequestUtils.getStringParameter(request, "sheetName", "sheet1");
            ServerExcelExport serverExp = new ServerExcelExport();
            serverExp.setFileName(fileName);
            serverExp.setSheetName(layout);
            serverExp.setHasRowNum(hasRowNum);
            serverExp.setUnexportColumn(unContainFields);
            JqExportDataGridHeaderSource JqExportDataGridHeaderSource = new JqExportDataGridHeaderSource(showCols);
            JqExportDataGridHeaderSource.setUnexportColumn(unContainFields);
            serverExp.setUserDefinedGridHeader(JqExportDataGridHeaderSource);
            Map<String, Object>[] rowArray = (Map[]) rowsList.toArray(new Map[rowsList.size()]);
            serverExp.setData(rowArray);
            map.addAttribute("export", serverExp);
            return "excel.down";
        } else if (!"pdf".equals(fileType)) {
            logger.error("not support type" + fileType);
            return null;
        } else {
            showCols = ServletRequestUtils.getStringParameter(request, "showCols", "");
            Map<String, Object>[] showFields = (Map[]) JsonHelper.getInstance().readValue(showCols, Map[].class);
            layout = ServletRequestUtils.getStringParameter(request, "layout", "portrait");
            Rectangle pageSize = new Rectangle(PageSize.A4);
            if (layout.equals("landscape")) {
                pageSize = pageSize.rotate();
            }

            Document document = new Document(pageSize);
            response.setContentType("application/pdf");
            fileName = fileName + ".pdf";

            try {
                String agent = request.getHeader("USER-AGENT");
                if (agent != null && agent.toLowerCase().indexOf("firefox") > 0) {
                    response.setHeader("Content-Disposition", "attachment; filename=" + new String(fileName.getBytes("GB2312"), "ISO-8859-1"));
                } else {
                    response.setHeader("Content-disposition", "attachment;filename=" + URLEncoder.encode(fileName, "utf-8"));
                }

                PdfWriter.getInstance(document, response.getOutputStream());
                List<Map<String, Object>> headerList = Arrays.asList(showFields);
                document.open();
                BpmsCommonUtils.drawPdfTable(document, hasRowNum, rowsList, headerList);
                document.close();
            } catch (Exception var35) {
                logger.error("Failed to create pdf");
            }

        }
        return null;
    }
    /*处理导出数据*/
    private void beforeExport(QueryRespBean<Map<String, Object>> result, String viewid, String tableComponentid, String pid, String orgIdentity, String version) throws Exception{
		EformViewInfo eformViewInfo = this.bpmsCacheUtils.getViewInfoById(viewid);
		if (org.apache.commons.lang3.StringUtils.isEmpty(version)) {
			version = eformViewInfo.getCurrentVersion();
		}

		EformViewContent viewContent = this.bpmsCacheUtils.getViewContent(viewid, version);
		SAXReader reader = new SAXReader();
		org.dom4j.Document document = reader.read(new ByteArrayInputStream(viewContent.getViewSchema()));
		Element root = document.getRootElement();
		List<?> list = root.selectNodes("table[@id='" + tableComponentid + "']");
		if (list != null && list.size() != 0) {
			Element el = (Element)list.get(0);
			String dataSrc = el.attributeValue("dataSrc");
			if (dataSrc != null && !"".equals(dataSrc)) {
				List<?> cm = el.selectNodes("descendant::tableColModel ");
				Iterator<?> cmit = ((Element)cm.get(0)).elementIterator();
				HashMap formatMap = new HashMap();

				while(cmit.hasNext()) {
					Element tm = (Element)cmit.next();
                    if ("tableColumn".equals(tm.getName())) {
						String id = tm.attribute("id").getValue();
						String dbFieldType = tm.attribute("db_filed_type").getValue();
						String format = tm.attribute("format").getValue();
						if ("DATE".equals(dbFieldType)) {
							if ("yyyy-mm-dd".equals(format)) {
								format = "yyyy-MM-dd";
							} else if ("yyyy-mm-dd 24h:mi".equals(format)) {
								format = "yyyy-MM-dd HH:mm";
							}
                            formatMap.put(id, format);
						}
					}
				}

				List<Map<String, Object>> rowsList = result.getResult().getResult();

				for(int k = 0; k < rowsList.size(); ++k) {
					Map<String, Object> map = (Map)rowsList.get(k);
					Iterator entries = formatMap.entrySet().iterator();
					try {
                        String businessstate_ = (String) map.get("BUSINESSSTATE_");
                        switch (businessstate_){
                            case "ended":
                                businessstate_ = "已结束";
                                break;
                            case "start":
                                businessstate_ = "拟稿中";
                                break;
                            case "active":
                                businessstate_ = "流转中";
                                break;
                            default:
                                businessstate_ = "";
                        }
                        map.put("BUSINESSSTATE_",businessstate_);
                    }catch (Exception e){
                        logger.error("流程状态转化有误");
                    }

                    while(entries.hasNext()) {
						Map.Entry<String, String> formatEntry = (Map.Entry)entries.next();
                        Date oldValue = (Date)map.get(formatEntry.getKey());
						if (oldValue == null) {
							map.put(formatEntry.getKey(), (Object)null);
						} else {
							map.put(formatEntry.getKey(), DateUtil.format(oldValue, (String)formatEntry.getValue()));
						}
					}
				}

			} else {
				throw new Exception("配置有误，未配置数据类型！");
			}
		}
	}

}

