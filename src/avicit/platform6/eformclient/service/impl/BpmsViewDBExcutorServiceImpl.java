package avicit.platform6.eformclient.service.impl;

import avicit.platform6.api.bpmbusiness.vo.HistoryTaskVo;
import avicit.platform6.api.commonselect.ZTreeNode;
import avicit.platform6.api.eform.dto.EformDomAttr;
import avicit.platform6.api.eform.dto.FieldDataEntity;
import avicit.platform6.api.rowdataauthorization.sysdbsubject.dto.SysDbEntityDTO;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.sysuser.*;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.DateUtil;
import avicit.platform6.core.dao.DbUtils;
import avicit.platform6.core.dao.dynamicdatasource.Dbs;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.filter.session.RedisSessionService;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.rest.client.RestClient;
import avicit.platform6.core.rest.client.RestClientConfig;
import avicit.platform6.core.rest.msg.*;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.db.dbtablecol.dto.DbTableColDTO;
import avicit.platform6.db.dbtabletype.dto.DbTable;
import avicit.platform6.db.utils.DbControlUtil;
import avicit.platform6.dbclient.factory.DbTableFactory;
import avicit.platform6.dbclient.factory.DbTableInterface;
import avicit.platform6.eform.EformConstant;
import avicit.platform6.eform.dto.EformCustomButton;
import avicit.platform6.eformbpms.dto.EformViewContent;
import avicit.platform6.eformbpms.dto.EformViewInfo;
import avicit.platform6.eformbpms.utils.BpmsCacheUtils;
import avicit.platform6.eformbpms.utils.EformCommonUtils;
import avicit.platform6.eformbpms.view.service.TransferColInterface;
import avicit.platform6.eformbpms.vo.TableDataEntity;
import avicit.platform6.eformclient.dao.EformClientDBExecutorDao;
import avicit.platform6.eformclient.dao.ViewDao;
import avicit.platform6.eformclient.service.BpmsViewDBExcutorService;
import avicit.platform6.eformclient.utils.BpmsClientControlUtils;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import org.apache.commons.lang3.StringUtils;
import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.ws.rs.core.GenericType;
import java.io.ByteArrayInputStream;
import java.sql.Blob;
import java.sql.Clob;
import java.util.*;

@Service
public class BpmsViewDBExcutorServiceImpl implements BpmsViewDBExcutorService {


    @Autowired
    private ViewDao viewDao;
    @Autowired
    private EformClientDBExecutorDao efromDao;

    @Autowired
    private SysUserAPI userApi;

    @Autowired
    private SysOrgAPI orgApi;
    
    @Autowired
    private SysDeptAPI deptApi;

    @Autowired
    private SysPositionAPI positionApi;

    @Autowired
    private SysRoleAPI roleApi;

    @Autowired
    private SysGroupAPI groupApi;

    @Autowired
    private SysLookupAPI lookupApi;

    @Autowired
    private BpmsCacheUtils bpmsCacheUtils;

    @Autowired
    private BpmsClientControlUtils bpmsControlUtils;

    @Autowired
    private DbControlUtil dbUtils;

    @Autowired
    private BusinessService businessService;
    @Autowired
    private DictionaryService dictionaryService;

    private TransferColInterface event = null;

    @Override
    public void beforeExport(QueryRespBean<Map<String, Object>> result, String viewid,
                                                                       String tableComponentid, String pid, String orgIdentity, String version) throws Exception {
        // 1:取表格表名,列模型
        List<String> nodeIdList = new ArrayList<String>();
        EformViewInfo eformViewInfo = bpmsCacheUtils.getViewInfoById(viewid);
        if(StringUtils.isEmpty(version)){
            version = eformViewInfo.getCurrentVersion();
        }
        EformViewContent viewContent = bpmsCacheUtils.getViewContent(viewid,version);

        SAXReader reader = new SAXReader();
        Document document = reader.read(new ByteArrayInputStream(viewContent.getViewSchema()));
        Element root = document.getRootElement();
        List<?> list = root.selectNodes("table[@id='" + tableComponentid + "']");
        if(list == null || list.size() == 0){
            return;
        }
        Element el = (Element) list.get(0);

        String dataSrc = el.attributeValue("dataSrc");
        if (dataSrc == null || "".equals(dataSrc)) {
            throw new Exception("配置有误，未配置数据类型！");
        }
        List<?> cm = el.selectNodes("descendant::tableColModel ");
        Iterator<?> cmit = ((Element) cm.get(0)).elementIterator();

        Map<String,String> formatMap = new HashMap();
        while (cmit.hasNext()) {
            Element tm = (Element) cmit.next();
            if ("tableColumn".equals(tm.getName())) {
                String id = tm.attribute("id").getValue();
                String dbFieldType = tm.attribute("db_filed_type").getValue();
                try {
                    String format = tm.attribute("format").getValue();
                    if ("DATE".equals(dbFieldType)) {
                        if ("yyyy-mm-dd".equals(format)) {
                            format = "yyyy-MM-dd";
                        } else if ("yyyy-mm-dd 24h:mi".equals(format)) {
                            format = "yyyy-MM-dd HH:mm";
                        }
                        formatMap.put(id, format);
                    }
                }catch (Exception e){
                    e.printStackTrace();
                }
            }
        }

        List<Map<String, Object>> rowsList = result.getResult().getResult();
        for (int k = 0; k < rowsList.size(); k++) {

            Map<String, Object> map = rowsList.get(k);    // 查找需要转换的列
            Iterator<Map.Entry<String, String>> entries = formatMap.entrySet().iterator();
            while (entries.hasNext()){
                Map.Entry<String,String> formatEntry = entries.next();
                Date oldValue = (Date) map.get(formatEntry.getKey());
                if(oldValue == null){
                    map.put(formatEntry.getKey(), null);
                }else{
                    map.put(formatEntry.getKey(), DateUtil.format(oldValue,formatEntry.getValue()));
                }
            }
        }
    }

    public List<String> getAllSubNode(QueryReqBean<Map<String, Object>> queryReqBean, String viewid,
                                      String tableComponentid, String pid, String orgIdentity, String version) throws Exception {
        // 1:取表格表名,列模型
        List<String> nodeIdList = new ArrayList<String>();
        EformViewInfo eformViewInfo = bpmsCacheUtils.getViewInfoById(viewid);
        if(StringUtils.isEmpty(version)){
            version = eformViewInfo.getCurrentVersion();
        }
        EformViewContent viewContent = bpmsCacheUtils.getViewContent(viewid,version);

        SAXReader reader = new SAXReader();
        Document document = reader.read(new ByteArrayInputStream(viewContent.getViewSchema()));
        Element root = document.getRootElement();
        List<?> list = root.selectNodes("table[@id='" + tableComponentid + "']");
        if(list == null || list.size() == 0){
            return new ArrayList<String>();
        }
        Element el = (Element) list.get(0);

        String dataSrc = el.attributeValue("dataSrc");
        if (dataSrc == null || "".equals(dataSrc)) {
            throw new Exception("配置有误，未配置数据类型！");
        }
        List<?> formSearch = null;
        Map<String, Object> searchParams = queryReqBean.getSearchParams();
        if (pid != null && !"".equals(pid) && !"NULL".equals(pid)) {
            List<?> compRef = root.selectNodes("compRef[@subcompid='" + tableComponentid + "']");
            if (compRef != null && compRef.size() > 0) {
                Element compRefel = (Element) compRef.get(0);
                String compfkfiled = compRefel.attributeValue("subfkfiled");
                String miancomptype = compRefel.attributeValue("miancomptype");
                String miancompid = compRefel.attributeValue("miancompid");

                if ("tree".equals(miancomptype)) {
                    List<?> listTree = root.selectNodes("tree[@id='" + miancompid + "']");
                    Element elTree = (Element) listTree.get(0);

                    String dbidTree = elTree.attributeValue("dbid");
                    String nodeidTree = elTree.attributeValue("nodeid");
                    String pidTree = elTree.attributeValue("pid");
                    String reflevel = elTree.attributeValue("reflevel");
                    int rlevel = -1;
                    if (StringUtils.isNotEmpty(reflevel)){
                        rlevel = Integer.parseInt(reflevel);
                    }
                    Element treedataFilter = elTree.element("dataFilter");
                    String treeFilterSql = "";
                    Map<String, Object> comparaMap = null;
                    if (searchParams.containsKey("comparaMap")) {
                        comparaMap = (Map<String, Object>) searchParams.get("comparaMap");
                        if (treedataFilter != null) {
                            Element parameterArea = elTree.element("parameterArea");
                            if (parameterArea!=null) {
                                String paraareaid = parameterArea.attributeValue("paraareaid");
                                treeFilterSql = EformCommonUtils.getDataFilterSql(treedataFilter, (Map<String, Object>) comparaMap.get(paraareaid), paraareaid, "t");
                            }
                        }
                    }
                    DbTable dbTable = dbUtils.selectDbTable(dbidTree);
                    boolean hasOrgCol = dbUtils.isOrgIdentityColumnExist(dbidTree);
                    nodeIdList = bpmsControlUtils.getAllSubNodeIdList(dbTable, nodeidTree, pidTree, pid, orgIdentity,hasOrgCol,treeFilterSql,searchParams,rlevel);
                    nodeIdList.add(pid);

                }
            }
        }
        return nodeIdList;
    }

    @Override
    public QueryRespBean<Map<String, Object>> selectTableComponentData(
            QueryReqBean<Map<String, Object>> queryReqBean, String pOrderBy, String viewid,
            String tableComponentid, String andOr, String pid, String langcode, String isbpm, String orgIdentity, String sqlPermission, String version, List<String> nodeIdList) throws Exception {
        // 1:取表格表名,列模型
        EformViewInfo eformViewInfo = bpmsCacheUtils.getViewInfoById(viewid);
        if(StringUtils.isEmpty(version)){
            version = eformViewInfo.getCurrentVersion();
        }
        EformViewContent viewContent = bpmsCacheUtils.getViewContent(viewid,version);

        SAXReader reader = new SAXReader();
        Document document = reader.read(new ByteArrayInputStream(viewContent.getViewSchema()));
        Element root = document.getRootElement();
        List<?> list = root.selectNodes("table[@id='" + tableComponentid + "']");
        if(list == null || list.size() == 0){
            return new QueryRespBean<Map<String, Object>>();
        }
        Element el = (Element) list.get(0);
        String tableName = el.attributeValue("refdb");
        String flowid = el.attributeValue("flowid");
        //流程数据过滤条件 1仅显示流程关联数据 2显示所有数据
        String flowfilter = el.attributeValue("flowfilter");
        if (StringUtils.isEmpty(flowfilter)){
            flowfilter = "1";
        }

        String dataSrc = el.attributeValue("dataSrc");
        if (dataSrc == null || "".equals(dataSrc)) {
            throw new Exception("配置有误，未配置数据类型！");
        }
        List<?> formSearch = null;
        // 2:参数装配
        if (andOr.equals("Or")) {
            formSearch = el.selectNodes("descendant::tableToolbar//tableSearchbarArea//tableKeyWordSearch");
        } else {
            formSearch = el.selectNodes("descendant::tableToolbar//tableSearchbarArea//formSearch");
        }
        String queryCriteria = "";

        Map<String, Object> searchParams = queryReqBean.getSearchParams();
        if (searchParams != null) {
            // add by likl begin
            searchParams.put("viewCode", eformViewInfo.getViewCode());
            // add by likl end
            if (formSearch.size() > 0) {
                Iterator<?> It = ((Element) formSearch.get(0)).elementIterator();
                queryCriteria = getTablequeryCriteria(It, searchParams, andOr, isbpm);

            } else {
                queryCriteria = getTablequeryCriteria(null, searchParams, andOr, isbpm);
            }
            if (StringUtils.isEmpty(queryCriteria)){
                queryCriteria = getTableBpmquery(searchParams,isbpm,tableName,flowfilter);
            }else{
                String bpmquery = getTableBpmquery(searchParams,isbpm,tableName,flowfilter);
                if (StringUtils.isEmpty(bpmquery)){
                    queryCriteria = "(" +queryCriteria + ") ";
                }else{
                    queryCriteria = "(" +queryCriteria + ") and"+bpmquery;
                }

            }

        }else{
            searchParams = new HashMap<String, Object>();
            // add by likl begin
            searchParams.put("viewCode", eformViewInfo.getViewCode());
            // add by likl end
        }

        if (queryCriteria != null && queryCriteria.trim().length() > 0) {
            queryCriteria = queryCriteria + " and (" + sqlPermission + ")";
        } else {
            queryCriteria = sqlPermission;
        }
        String where = el.attributeValue("where") == null ? "" : el.attributeValue("where");
        if (StringUtils.isNotEmpty(where)){
            queryCriteria = queryCriteria + " and ("+where+")";
        }

        Element dataFilter = el.element("dataFilter");
        if (dataFilter !=null){
            Map<String,Object> comparaMap = ( Map<String,Object>)searchParams.get("comparaMap");
            String paraareaid = null;
            if(el.element("parameterArea") != null){
                paraareaid = el.element("parameterArea").attributeValue("paraareaid");
            }
            String dataFilterSql = EformCommonUtils.getDataFilterSql(dataFilter,(Map<String,Object>)comparaMap.get(paraareaid),paraareaid,"");
            if (StringUtils.isNotEmpty(dataFilterSql)) {
                queryCriteria = queryCriteria + " and (" + dataFilterSql + ")";
            }
        }

        String paramet = el.attributeValue("paramet");
        if (paramet != null && !"".equals(paramet)) {

            doExpressionParser(searchParams, paramet);
        }

        List<?> cm = el.selectNodes("descendant::tableColModel ");
        Iterator<?> cmit = ((Element) cm.get(0)).elementIterator();
        if (pOrderBy == null || "".equals(pOrderBy)) {
            pOrderBy = getTableOrderBy(cmit);
        } else {
            if (pOrderBy.contains("Name")){
                pOrderBy = pOrderBy.replace("Name","");
            }
            String col = pOrderBy.split(" ")[0];
            while (cmit.hasNext()) {
                Element tm = (Element) cmit.next();
                String filedType = tm.attribute("db_filed_type") != null ? tm.attribute("db_filed_type").getValue() : "";
                String filedid = tm.attribute("id") != null ? tm.attribute("id").getValue() : "";
                if (col.equals(filedid)){

                    if ("CLOB".equals(filedType)  ) {
                        DbTableInterface eformDbService = DbTableFactory.produce(DbUtils.getDbType());
                        pOrderBy = eformDbService.getCLOBorderby(col) + " "+pOrderBy.split(" ")[1];;

                    }
                    break;
                }

            }

            pOrderBy = "order by " + pOrderBy;


        }

        List<?> tablePagingbar = el.selectNodes("descendant::tablePagingbar");
        if (tablePagingbar.size() == 0) {
            queryReqBean.getPageParameter().setRows(200000);
        }

        // 2.1 取联动关系
        if (pid != null && !"".equals(pid) && !"NULL".equals(pid)) {
            List<?> compRef = root.selectNodes("compRef[@subcompid='" + tableComponentid + "']");
            if (compRef != null && compRef.size() > 0) {
                Element compRefel = (Element) compRef.get(0);
                String compfkfiled = compRefel.attributeValue("subfkfiled");
                String miancomptype = compRefel.attributeValue("miancomptype");
                String miancompid = compRefel.attributeValue("miancompid");

                if (queryCriteria.length() > 0) {
                    queryCriteria += " and ";
                }

                if ("tree".equals(miancomptype)) {

                    String insql = "";
                    String pids = "";
                    for (int i = 0; i < nodeIdList.size(); i++) {
                        if (i%500 == 0&&i!=0){
                            pids += "'" + nodeIdList.get(i) + "'";
                            insql += " "+compfkfiled + " in (" + pids + ") or";
                            pids = "";
                        } else if (i != nodeIdList.size() - 1) {
                            pids += "'" + nodeIdList.get(i) + "',";
                        }else {
                            pids += "'" + nodeIdList.get(i) + "'";
                        }

                    }
                    if (StringUtils.isNotEmpty(pids)) {
                        insql += " "+compfkfiled + " in (" + pids + ")";
                    }else{
                        if (insql.endsWith("or")){
                            insql = insql.substring(0,insql.length()-2);
                        }
                    }
                    if (StringUtils.isNotEmpty(insql)) {
                        queryCriteria += "("+insql+")";
                    }
                } else {
                    queryCriteria += compfkfiled + " = '" + pid + "'";
                }
            }
        }

        // 3:取数
        if ("databaseTable".equals(dataSrc)) {

            String dbid = el.attributeValue("dbid");
            DbTable selectDbTable = bpmsCacheUtils.getTablesBytableId(dbid);
            String datasourceId = "";
            if (selectDbTable != null) {
                datasourceId = selectDbTable.getDataSourceId();
            }
            String isorgfilter = el.attributeValue("isorgfilter") != null ?el.attributeValue("isorgfilter") : "Y";
            //判断组织标识
            if (dbUtils.isOrgIdentityColumnExist(dbid) && "Y".equals(isorgfilter)) {
                if (queryCriteria.length() > 0) {
                    queryCriteria += " and ";
                }
                queryCriteria += " ORG_IDENTITY = '" + orgIdentity + "' ";
            }

            if (tableName == null || "".equals(tableName)) {
                throw new Exception("配置有误，未配置数据表！");
            }
            String selectColSql = "";
//			List<Element> collist = new ArrayList<Element>();
//			cmit = ((Element) cm.get(0)).elementIterator();
//			while(cmit.hasNext()){
//				Element tm = (Element)cmit.next();
//				if("tableColumn".equals(tm.getName())){
//					collist.add(tm);
//					selectColSql += tm.attribute("id").getValue()+",";
//				}
//			}
//
//			selectColSql = selectColSql.substring(0, selectColSql.length()-1);
            Page<Map<String, Object>> dataList = null;
            PageHelper.startPage(queryReqBean.getPageParameter());
            Dbs.setDbType(datasourceId);
            String leftJoin = "";

            List<?> tableLinkDbList = el.selectNodes("descendant::tableLinkDb");
            if (tableLinkDbList!=null && tableLinkDbList.size()>0) {
                Map<String,Object> comparaMap = ( Map<String,Object>)searchParams.get("comparaMap");
                Element parameterArea = el.element("parameterArea");
                String paraareaid = "";
                if (parameterArea!=null) {
                    paraareaid = el.element("parameterArea").attributeValue("paraareaid");
                }
                Map<String,String> joinmap = getJoinSql(tableLinkDbList,comparaMap, paraareaid);
                if (isbpm.equals("Y")) {
                    if (StringUtils.isNotEmpty(flowid)){
                        leftJoin += " and v.PROCDEFID_ like '"+flowid+"%' ";
                    }
                }
                leftJoin += joinmap.get("joinsql");
                selectColSql = joinmap.get("selectcolsql");
            }else{
                if (isbpm.equals("Y")&& StringUtils.isNotEmpty(flowid)){
                    leftJoin += " and v.PROCDEFID_ like '"+flowid+"%'";
                }
            }
            if (isbpm.equals("Y")) {
                dataList = viewDao.selectBPMDBTableComponentDataByPage(searchParams, pOrderBy, tableName, queryCriteria, selectColSql,leftJoin);
            } else {
                dataList = viewDao.selectDBTableComponentDataByPage(searchParams, pOrderBy, tableName, queryCriteria, selectColSql,leftJoin);
            }
            Dbs.clear();

            for (int k = 0; k < dataList.size(); k++) {

                Map<String, Object> map = dataList.get(k);    // 查找需要转换的列
                Iterator<Map.Entry<String, Object>> entries = map.entrySet().iterator();

                while (entries.hasNext()) {

                    Map.Entry<String, Object> entry = entries.next();

                    if (entry.getValue() instanceof Blob) {
                        Object obj = map.get(entry.getKey());
                        String blobToString = EformCommonUtils.convertBlobToBase64String((Blob) obj);
                        map.put(entry.getKey(),blobToString);
                    } else if (entry.getValue() instanceof Clob) {
                        Object obj = map.get(entry.getKey());
                        String clobToString = EformCommonUtils.ClobToString((Clob) obj);
                        map.put(entry.getKey(), clobToString);
                    }

                }
                cmit = ((Element) cm.get(0)).elementIterator();
                while (cmit.hasNext()) {
                    Element tm = (Element) cmit.next();
                    if ("tableColumn".equals(tm.getName())) {
                        String id = tm.attribute("id").getValue();
                        Element tableColRenderer = tm.element("tableColRenderer");
                        String formControl = "";
                        String dataCombox = "";
                        String dataComboxType = "";
                        String queryStatement = "";
                        String paraJson = "";
                        String dicAutoTransform = "";
                        if(tableColRenderer != null){
                            formControl = tableColRenderer.attribute("formControl") ==null ? "" : tableColRenderer.attribute("formControl").getValue();
                            dataCombox = tableColRenderer.attribute("dataCombox") ==null ? "" : tableColRenderer.attribute("dataCombox").getValue();
                            dataComboxType = tableColRenderer.attribute("dataComboxType") ==null ? "" : tableColRenderer.attribute("dataComboxType").getValue();
                            dicAutoTransform = tableColRenderer.attribute("dicAutoTransform") ==null ? "" : tableColRenderer.attribute("dicAutoTransform").getValue();
                            Element elevents = tableColRenderer.element("events");
                            Iterator<?> itEvent = elevents.elementIterator();
                            while(itEvent.hasNext()){
                                Element event = (Element)itEvent.next();
                                if(event.attribute("name") != null && !event.attribute("name").equals("")){
                                    String eventName = event.attribute("name").getValue();
                                    String function = event.getText();
                                    if(("event_queryStatement").equals(eventName)){
                                        queryStatement = function;
                                    }else if(("event_dictionaryPara").equals(eventName)){
                                        paraJson = function;
                                    }
                                }
                            }
                        }

                        Map<String,Object> dicParams = new HashMap<String, Object>();
                        String transform = tm.attribute("transform") == null ? "" : tm.attribute("transform").getValue();
                        if (StringUtils.isEmpty(transform)) {
                            if("dictionary".equals(formControl) && "Y".equals(dicAutoTransform)){
                                transform = "dictionary";
                                dicParams.put("dataCombox",dataCombox);
                                dicParams.put("dataComboxType",dataComboxType);
                                dicParams.put("sql",queryStatement);
                                dicParams.put("mappingData",paraJson);
                                dicParams.put("domId",id);
                                dicParams.put("colValue", map.get(id));
                                dicParams.put("dicUniqueCode","");
                                HashMap<String, Object> paramMaps = new HashMap<String, Object>();
                                paramMaps.put("_userId", searchParams.get("currUserId"));
                                paramMaps.put("_deptId", searchParams.get("currDeptId"));
                                paramMaps.put("_languageCode", SessionHelper.getCurrentLanguageCode());
                                dicParams.put("paramMaps",paramMaps);
                            }else{
                                continue;
                            }
                        }

                        String lookupTypeSelect = tm.attribute("LookupTypeName") == null ? "" : tm.attribute("LookupTypeName").getValue();
                        String customselectcode = tm.attribute("customselectcode") == null ? "" : tm.attribute("customselectcode").getValue();

                        this.transColumn(transform, id, map, lookupTypeSelect,customselectcode, langcode, tm, dicParams);

                    }
                }
                /*if (isbpm.equals("Y")) {
                    String taskUser = "";
                    String processinstanceid = (String) map.get("PROCESSINSTANCEID");
                    if (StringUtils.isNotEmpty(processinstanceid)) {
                        List<HistoryTaskVo> taskList = businessService.getHistTaskListByProcInstId(processinstanceid);
                        for (HistoryTaskVo task : taskList) {
                            if ("0".equals(task.getTaskType()) && "0".equals(task.getTaskFinished()) && "1".equals(task.getTaskState())) {
                                taskUser += userApi.getSysUserNameById(task.getAssignee()) + ",";
                            }
                        }
                        if (StringUtils.isNotEmpty(taskUser)) {
                            taskUser = taskUser.substring(0, taskUser.length() - 1);
                        }
                    }
                    map.put("assignee",taskUser);
                }*/
            }
            QueryRespBean<Map<String, Object>> queryRespBean = new QueryRespBean<Map<String, Object>>();
            queryRespBean.setResult(dataList);
            return queryRespBean;
        } else if ("sql".equals(dataSrc)) {
            String refsql = el.attributeValue("refsql");
            if (refsql == null || "".equals(refsql)) {
                throw new Exception("配置有误，未配置SQL！");
            }

            if (queryCriteria.trim().length() > 0) {
                if (refsql.toLowerCase().indexOf("where") == -1) {
                    queryCriteria = " where " + queryCriteria;
                } else {
                    queryCriteria = " and " + queryCriteria;
                }
            }
            Page<Map<String, Object>> dataList = null;
            if (isbpm.equals("Y")) {
                dataList = viewDao.selectBPMSQLTableComponentDataByPage(searchParams, pOrderBy, refsql, queryCriteria,"");
            } else {
                dataList = viewDao.selectSQLTableComponentDataByPage(searchParams, pOrderBy, refsql, queryCriteria);
            }

            for (int k = 0; k < dataList.size(); k++) {
                Map<String, Object> map = dataList.get(k);    // 查找需要转换的列
                Iterator<Map.Entry<String, Object>> entries = map.entrySet().iterator();
                while (entries.hasNext()) {

                    Map.Entry<String, Object> entry = entries.next();

                    if (entry.getValue() instanceof Blob) {
                        Object obj = map.get(entry.getKey());
                        map.put(entry.getKey(),EformCommonUtils.convertBlobToBase64String((Blob)obj));
                    } else if (entry.getValue() instanceof Clob) {
                        Object obj = map.get(entry.getKey());
                        String clobToString = EformCommonUtils.ClobToString((Clob) obj);
                        map.put(entry.getKey(), clobToString);
                    }

                }
                cmit = ((Element) cm.get(0)).elementIterator();
                while (cmit.hasNext()) {
                    Element tm = (Element) cmit.next();
                    if ("tableColumn".equals(tm.getName())) {

                        String id = tm.attribute("id").getValue();
                        Element tableColRenderer = tm.element("tableColRenderer");
                        String formControl = "";
                        String dataCombox = "";
                        String dataComboxType = "";
                        String queryStatement = "";
                        String paraJson = "";
                        String dicAutoTransform = "";
                        if(tableColRenderer != null){
                            formControl = tableColRenderer.attribute("formControl") ==null ? "" : tableColRenderer.attribute("formControl").getValue();
                            dataCombox = tableColRenderer.attribute("dataCombox") ==null ? "" : tableColRenderer.attribute("dataCombox").getValue();
                            dataComboxType = tableColRenderer.attribute("dataComboxType") ==null ? "" : tableColRenderer.attribute("dataComboxType").getValue();
                            dicAutoTransform = tableColRenderer.attribute("dicAutoTransform") ==null ? "" : tableColRenderer.attribute("dicAutoTransform").getValue();
                            Element elevents = tableColRenderer.element("events");
                            Iterator<?> itEvent = elevents.elementIterator();
                            while(itEvent.hasNext()){
                                Element event = (Element)itEvent.next();
                                if(event.attribute("name") != null && !event.attribute("name").equals("")){
                                    String eventName = event.attribute("name").getValue();
                                    String function = event.getText();
                                    if(("event_queryStatement").equals(eventName)){
                                        queryStatement = function;
                                    }else if(("event_dictionaryPara").equals(eventName)){
                                        paraJson = function;
                                    }
                                }
                            }
                        }

                        Map<String,Object> dicParams = new HashMap<String, Object>();
                        String transform = tm.attribute("transform") == null ? "" : tm.attribute("transform").getValue();
                        if (StringUtils.isEmpty(transform)) {
                            //行编辑控件是数据字典并且选中自动转换，才进行转换
                            if("dictionary".equals(formControl) && "Y".equals(dicAutoTransform)){
                                transform = "dictionary";
                                dicParams.put("dataCombox",dataCombox);
                                dicParams.put("dataComboxType",dataComboxType);
                                dicParams.put("sql",queryStatement);
                                dicParams.put("mappingData",paraJson);
                                dicParams.put("domId",id);
                                dicParams.put("colValue", map.get(id));
                                dicParams.put("dicUniqueCode","");
                                HashMap<String, Object> paramMaps = new HashMap<String, Object>();
                                paramMaps.put("_userId", searchParams.get("currUserId"));
                                paramMaps.put("_deptId", searchParams.get("currDeptId"));
                                paramMaps.put("_languageCode", SessionHelper.getCurrentLanguageCode());
                                dicParams.put("paramMaps",paramMaps);
                            }else{
                                continue;
                            }
                        }

                        String lookupTypeSelect = tm.attribute("LookupTypeName") == null ? "" : tm.attribute("LookupTypeName").getValue();
                        String customselectcode = tm.attribute("customselectcode") == null ? "" : tm.attribute("customselectcode").getValue();

                        this.transColumn(transform, id, map, lookupTypeSelect,customselectcode, langcode, tm, dicParams);
                    }
                }
            }
            QueryRespBean<Map<String, Object>> queryRespBean = new QueryRespBean<Map<String, Object>>();
            queryRespBean.setResult(dataList);
            return queryRespBean;
        } else {
            return null;
        }

    }



    private Map<String,String> getJoinSql(List<?> tableLinkDbList,Map<String,Object> comparameter,String paraareaid){
        StringBuffer joinsql = new StringBuffer("");
        StringBuffer selectcolsql = new StringBuffer("");
        if (comparameter!=null && comparameter.containsKey(paraareaid)){
            comparameter = (Map<String,Object>)comparameter.get(paraareaid);
        }
        Map<String,String> map = new HashMap<String, String>();
        for (Object o : tableLinkDbList){
            Element tableLinkDb = (Element)o;
            String tablename = tableLinkDb.attributeValue("refdb");
            String code = tableLinkDb.attributeValue("code");
            String linktype = tableLinkDb.attributeValue("linktype");

            String joinkeyword = "";
            if ("1".equals(linktype)){
                joinkeyword = " inner join";
            }else if ("2".equals(linktype)){
                joinkeyword = " left join";
            }else if ("3".equals(linktype)){
                joinkeyword = " right join";
            }

            String filtersql = EformCommonUtils.transFilter(tableLinkDb,comparameter,paraareaid,code);
            if (StringUtils.isEmpty(filtersql)){
                continue;
            }
            joinsql.append(joinkeyword).append(" ").append(tablename).append(" "+code).append(" on ").append(filtersql);

            String colnames = tableLinkDb.attributeValue("colnames");
            String[] cols = colnames.split(",");
            for (String col : cols){
                if (StringUtils.isNotEmpty(col)) {
                    selectcolsql.append(",").append(code).append(".").append(col).append(" as ").append(code.toUpperCase()).append("_").append(col);
                }
            }
        }
        map.put("joinsql",joinsql.toString());
        map.put("selectcolsql",selectcolsql.toString());
        return map;
    }

    @Override
    public Map<String, Object> creatTableModel(List<DbTableColDTO> list, String isbpm, Map<String, Object> colMap,String compomentId) {
        // 2: 生成列模型
        Map<String, Object> tableColModel = getColModel(compomentId);
        // 3: 生成列
        List<Map<String, Object>> tableCol = getCol(tableColModel.get("id")
                .toString(), list, isbpm, colMap,"");

        tableColModel.put("children", tableCol);
        return tableColModel;
    }


    public Map<String, Object> creatOuterTableModel(List<DbTableColDTO> list, String isbpm, Map<String, Object> colMap,String dbid) {
        // 2: 生成列模型
        Map<String, Object> tableColModel = getColModel("".toString());
        // 3: 生成列
        List<Map<String, Object>> tableCol = getCol(tableColModel.get("id")
                .toString(), list, isbpm, colMap,dbid);

        tableColModel.put("children", tableCol);
        return tableColModel;
    }

    @Override
    public Map<String, Object> creatDataListModel(List<DbTableColDTO> list, String isbpm, Map<String, Object> colMap, String compomentId) {
        // 2: 生成列模型
        Map<String, Object> tableColModel = getDataListColModel(compomentId);
        // 3: 生成列
        List<Map<String, Object>> tableCol = getDataListCol(list, isbpm, colMap,"");

        tableColModel.put("children", tableCol);
        return tableColModel;
    }

    private void doExpressionParser(Map<String, Object> searchParams,
                                    String paramet) {
        // TODO Auto-generated method stub

    }


    private String getTableOrderBy(Iterator<?> cmit) {
        ArrayList<Map> array = new ArrayList<Map>();
        boolean hasCreationDate = false;
        String pkColName = "";
        while (cmit.hasNext()) {
            Element tm = (Element) cmit.next();
            String orderindex = tm.attribute("orderindex") != null ? tm.attribute("orderindex").getValue() : "";
            if (orderindex != null && !"".equals(orderindex) ) {//&& !"0".equals(orderindex)) {  --放开0作为数据排序序数的限制
                Map map = new HashMap();
                map.put("orderindex", orderindex);
                map.put("id", tm.attribute("id").getValue());
                map.put("sorttype", tm.attribute("sorttype").getValue());
                map.put("coltype", tm.attribute("db_filed_type").getValue());
                array.add(map);
            }
            String colname = tm.attribute("id") != null ?  tm.attribute("id").getValue():"";
            if ("CREATION_DATE".equals(colname)){
                hasCreationDate = true;
            }
            String ispkfiled = tm.attribute("ispkfiled")!= null ?tm.attribute("ispkfiled").getValue():"";
            if ("Y".equals(ispkfiled)){
                pkColName = colname;
            }
        }
        if (array.size() > 0) {
            Object[] o = array.toArray();

            Arrays.sort(o, new Comparator() {
                @Override
                public int compare(Object o1, Object o2) {
                    Map m1 = (Map) o1;
                    Map m2 = (Map) o2;
                    if (Integer.parseInt(m1.get("orderindex").toString()) > Integer.parseInt(m2.get("orderindex").toString())) {
                        return 1;
                    } else if (Integer.parseInt(m1.get("orderindex").toString()) == Integer.parseInt(m2.get("orderindex").toString())) {
                        return 0;
                    } else {
                        return -1;
                    }
                }

            });

            StringBuilder sb = new StringBuilder("order by ");
            for (int i = 0; i < o.length; i++) {
                Map m1 = (Map) o[i];
                if ("CLOB".equals(m1.get("coltype"))){
                    DbTableInterface eformDbService = DbTableFactory.produce(DbUtils.getDbType());
                    sb.append(eformDbService.getCLOBorderby(m1.get("id").toString()));
                }else{
                    sb.append(m1.get("id").toString());
                }
                sb.append(" ").append(m1.get("sorttype").toString()).append(", ");
            }
            return sb.delete(sb.length() - 2, sb.length() - 1).toString();
        } else {
            if (StringUtils.isNotEmpty(pkColName)){
                if (hasCreationDate){
                    return "order by t1.CREATION_DATE ,t1."+pkColName+" asc";
                }else{
                    return "order by t1."+pkColName+" asc";
                }
            }

        }
        return "";
    }

    private String getTableBpmquery(Map<String, Object> bean,String isbpm,String tableName,String flowfilter){
        StringBuilder sb = new StringBuilder();
        if (isbpm.equals("Y")) {

            SysDbEntityDTO para = new SysDbEntityDTO();
            para.setTableName(tableName);
            para.setMapperForTab("ViewMapper.xml");
            List<SysDbEntityDTO> result  = null;
            String url = RestClientConfig.getRestHost("rowdataauthorization") + "/api/sysdbsubject/SysDbSubjectRest/searchSysDbEntity";
            ResponseMsg<List<SysDbEntityDTO>> responseMsg = RestClient.doPost(url, para,
                    new GenericType<ResponseMsg<List<SysDbEntityDTO>>>() {
                    });

            if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) {
                result = responseMsg.getResponseBody();
            }

            if ((result == null || result.size()==0) && "1".equals(flowfilter)) {
                if (bean.get("bpmtype") != null && "my".equals(bean.get("bpmtype"))) {
                    sb.append("and   ").append("exists (select 1 from BPM_CLIENT_HIST_TASK_V os where t1.ID=os.task_b_id_  and os.assignee_ = #{bean.currUserId,jdbcType=VARCHAR} and t1.PROCESSINSTANCEID = os.PROCINST_) ");
                }
            }

            if (bean.get("bpmState") != null && !"".equals(bean.get("bpmState")) && !"all".equals(bean.get("bpmState"))) {
                if ("nostart".equals(bean.get("bpmState"))){
                    sb.append("and   ").append("t1.BUSINESSSTATE_ is null ");
                }else {
                    sb.append("and   ").append("t1.BUSINESSSTATE_ = #{bean.bpmState,jdbcType=VARCHAR}");
                }
            }
        }
        StringBuilder ret = sb.delete(0, 4);
        return ret.toString();
    }

    private String getTablequeryCriteria(Iterator<?> it, Map<String, Object> bean, String andOr, String isbpm) {
        StringBuilder sb = new StringBuilder();
        if (it != null) {
            while (it.hasNext()) {
                Element tm = (Element) it.next();
                if (!tm.getName().equals("events")) {
                    String dbFiled = tm.attribute("id").getValue();
                    String formFiledID = tm.attribute("formFiledID").getValue();
                    String formControl = tm.attribute("formControl").getValue();
                    if (formControl.equals("text")) {
                        if (bean.get(formFiledID) != null && !"".equals(bean.get(formFiledID))) {
                            sb.append(andOr + "   ").append(dbFiled).append(" like concat(concat('%',#{bean.").append(formFiledID).append(" ,jdbcType=VARCHAR}),'%')    ");
                        }
                    } else if("userSelect".equals(formControl)
                            ||"orgSelect".equals(formControl)||"deptSelect".equals(formControl)
                            ||"groupSelect".equals(formControl)||"positionSelect".equals(formControl)||"roleSelect".equals(formControl)){
                        if (bean.get(formFiledID) != null && !"".equals(bean.get(formFiledID))) {
                            String[] options = ((String)bean.get(formFiledID)).split(";");
                            if(options.length > 0){
                                sb.append(andOr + " ( ");
                                for(int i = 0; i< options.length; i++){
                                    String option = options[i];
                                    if(i != 0){
                                        sb.append(" or ");
                                    }
                                    sb.append(dbFiled).append(" like concat(concat('%','").append(option).append("'),'%')    ");
                                }
                                sb.append(") ");
                            }else{
                                sb.append(andOr + "   ").append(dbFiled).append(" like concat(concat('%',#{bean.").append(formFiledID).append(" ,jdbcType=VARCHAR}),'%')    ");
                            }

                        }
                    }else if (formControl.equals("date") || formControl.equals("dateTime")) {
                        if (bean.containsKey(formFiledID + "_START")) {
                            String startTime = (String) bean.get(formFiledID + "_START");
                            if (StringUtils.isNotBlank(startTime)) {
                            	sb.append("and ").append(dbFiled).append(" >= ").append(
                                		DbTableFactory.produce(DbUtils.getDbType()).getDateFormat(startTime));
                            }
                        }
                        if (bean.containsKey(formFiledID + "_END")) {
                            String endTime = (String) bean.get(formFiledID + "_END");
                            if (StringUtils.isNotBlank(endTime)) {
                                if (!endTime.contains(":")){
                                    endTime = endTime + " 23:59";
                                }
                                sb.append("and ").append(dbFiled).append(" <= ").append(DbTableFactory.produce(DbUtils.getDbType()).getDateFormat(endTime));
                            }
                        }
                    } else if (formControl.equals("number")) {
                        if (bean.containsKey(formFiledID + "_START")) {
                            String startNumber = (String) bean.get(formFiledID + "_START");
                            if (StringUtils.isNotBlank(startNumber)) {
                                sb.append("and ").append(dbFiled).append(" >= ").append(" " + startNumber + " ");
                            }
                        }
                        if (bean.containsKey(formFiledID + "_END")) {
                            String endNumber = (String) bean.get(formFiledID + "_END");
                            if (StringUtils.isNotBlank(endNumber)) {
                                sb.append("and ").append(dbFiled).append(" <= ").append(" " + endNumber + " ");
                            }
                        }
                    } else if(formControl.equals("checkbox")){
                        if (bean.get(formFiledID) != null && !"".equals(bean.get(formFiledID))) {
                            String[] values = bean.get(formFiledID).toString().split(",");
                            sb.append("and   ").append(dbFiled).append(" in (");
                            for(String value : values){
                                sb.append("'").append(value).append("',");
                            }
                            sb.deleteCharAt(sb.length() - 1).append(")  ");
                        }
                    }else {
                        if (bean.get(formFiledID) != null && !"".equals(bean.get(formFiledID))) {
                            sb.append("and   ").append(dbFiled).append(" = #{bean.").append(formFiledID).append(",jdbcType=VARCHAR}  ");
                        }
                    }
                }
            }
        }
        StringBuilder ret = sb.delete(0, 4);
        return ret.toString();
    }

    private void transColumn(String type, String colName, Map<String, Object> map, String lookup, String customselectcode, String langcode, Element tm, Map<String, Object> dicMap) {
    	if ("orgid".equals(type)) {
            String orgStr = "";
            String orgIds = null;
            Object obj = map.get(colName);
            if (obj instanceof Clob) {
            	orgIds = EformCommonUtils.ClobToString((Clob) obj);
            } else {
            	orgIds = (String) obj;
            }
            if (orgIds != null) {
                String[] s = orgIds.split(";");
                for (int i = 0; i < s.length; i++) {
                	orgStr = orgStr
                            + orgApi.getSysOrgNameBySysOrgId(s[i],
                            langcode)
                            + ",";
                }
            }
            map.put(
                    colName + "Name",
                    orgStr.length() > 1 ? orgStr.substring(0,
                    		orgStr.length() - 1) : "");
            map.put(colName, orgIds != null ? orgIds : "");

        } else if ("userid".equals(type)) {
            String userStr = "";
            String userIds = null;
            Object obj = map.get(colName);
            if (obj instanceof Clob) {
                userIds = EformCommonUtils.ClobToString((Clob) obj);
            } else {
                userIds = (String) map.get(colName);
            }
            if (userIds != null) {
                String[] s = userIds.split(";");
                for (int i = 0; i < s.length; i++) {
                    userStr = userStr + userApi.getSysUserNameById(s[i])
                            + ",";
                }
            }
            map.put(
                    colName + "Name",
                    userStr.length() > 1 ? userStr.substring(0,
                            userStr.length() - 1) : "");
            map.put(colName, userIds != null ? userIds : "");
        } else if ("deptid".equals(type)) {

            String deptStr = "";
            String deptIds = null;
            Object obj = map.get(colName);
            if (obj instanceof Clob) {
                deptIds = EformCommonUtils.ClobToString((Clob) obj);
            } else {
                deptIds = (String) obj;
            }
            if (deptIds != null) {
                String[] s = deptIds.split(";");
                for (int i = 0; i < s.length; i++) {
                    deptStr = deptStr
                            + deptApi.getSysDeptNameBySysDeptId(s[i],
                            langcode)
                            + ",";
                }
            }
            map.put(
                    colName + "Name",
                    deptStr.length() > 1 ? deptStr.substring(0,
                            deptStr.length() - 1) : "");
            map.put(colName, deptIds != null ? deptIds : "");


        } else if ("positionid".equals(type)) {
            String positionStr = "";
            String positionIds = null;
            Object obj = map.get(colName);
            if (obj instanceof Clob) {
                positionIds = EformCommonUtils.ClobToString((Clob) obj);
            } else {
                positionIds = (String) map.get(colName);
            }
            if (positionIds != null) {
                String[] s;
                if (positionIds.contains(",")) {
                    s = positionIds.split(",");
                }else{
                    s = positionIds.split(";");
                }
                for (int i = 0; i < s.length; i++) {
                    positionStr = positionStr + positionApi.getSysPositionNameBySysPositionId(s[i], langcode)
                            + ",";
                }
            }
            map.put(
                    colName + "Name",
                    positionStr.length() > 1 ? positionStr.substring(0,
                            positionStr.length() - 1) : "");
            map.put(colName, positionIds != null ? positionIds : "");
        } else if ("roleid".equals(type)) {
            String roleStr = "";
            String roleIds = null;
            Object obj = map.get(colName);
            if (obj instanceof Clob) {
                roleIds = EformCommonUtils.ClobToString((Clob) obj);
            } else {
                roleIds = (String) map.get(colName);
            }
            if (roleIds != null) {
                String[] s;
                if (roleIds.contains(",")) {
                    s = roleIds.split(",");
                }else{
                    s = roleIds.split(";");
                }
                for (int i = 0; i < s.length; i++) {
                    roleStr = roleStr + roleApi.getSysRoleNameById(s[i])
                            + ",";
                }
            }
            map.put(
                    colName + "Name",
                    roleStr.length() > 1 ? roleStr.substring(0,
                            roleStr.length() - 1) : "");
            map.put(colName, roleIds != null ? roleIds : "");
        } else if ("groupid".equals(type)) {
            String groupStr = "";
            String groupIds = null;
            Object obj = map.get(colName);
            if (obj instanceof Clob) {
                groupIds = EformCommonUtils.ClobToString((Clob) obj);
            } else {
                groupIds = (String) map.get(colName);
            }
            if (groupIds != null) {
                String[] s;
                if (groupIds.contains(",")) {
                    s = groupIds.split(",");
                }else{
                    s = groupIds.split(";");
                }
                for (int i = 0; i < s.length; i++) {
                    groupStr = groupStr + groupApi.getSysGroupNameBySysGroupId(s[i], "zh_CN")
                            + ",";
                }
            }
            map.put(
                    colName + "Name",
                    groupStr.length() > 1 ? groupStr.substring(0,
                            groupStr.length() - 1) : "");
            map.put(colName, groupIds != null ? groupIds : "");
        } else if ("lookup".equals(type)) {
            String lookupStr = "";
            String lookupIds = null;
            Object obj = map.get(colName);
            if (obj instanceof Clob) {
                lookupIds = EformCommonUtils.ClobToString((Clob) obj);
            } else {
                lookupIds = (String) map.get(colName);
            }
            if (lookupIds != null) {
                String[] s = lookupIds.split(",");
                for (int i = 0; i < s.length; i++) {
                    lookupStr = lookupStr + lookupApi.getNameByLooupTypeCodeAndLooupCode(lookup, s[i])
                            + ",";
                }
            }
            map.put(
                    colName + "Name",
                    lookupStr.length() > 1 ? lookupStr.substring(0,
                            lookupStr.length() - 1) : "");
            map.put(colName, lookupIds != null ? lookupIds : "");
        } else if ("customselect".equals(type)) {
            String customselectStr = "";
            String customselectIds = null;
            Object obj = map.get(colName);
            if (obj instanceof Clob) {
            	customselectIds = EformCommonUtils.ClobToString((Clob) obj);
            } else {
            	customselectIds = (String) map.get(colName);
            }
            if (customselectIds != null) {
    			String urlptr= RestClientConfig.getRestHost(RestClientConfig.main) + "/api/platform6/SysDefineSelectRest/searchBySqlExecSQLNoPage/v1";
            	Muti3Bean<Map<String,String[]>,String,String> parameterbean = new Muti3Bean<Map<String,String[]>,String,String>();
            	parameterbean.setDto1(new HashMap<String, String[]>());
    			parameterbean.setDto2(customselectcode);
    			parameterbean.setDto3(customselectIds);
    			ResponseMsg<List<Map<String,Object>>> responseMsg = RestClient.doPost(urlptr, parameterbean, new GenericType<ResponseMsg<List<Map<String,Object>>>>(){});
                List<Map<String, Object>> temps = responseMsg.getResponseBody();
		     	for(Map<String, Object> temp : temps){
		     		String key = (String)temp.get("KEY");
		     		if(key.equals(customselectIds)){
		     			customselectStr = (String)temp.get("VALUE");
		     			break;
		     		}
		     	}
		     if (StringUtils.isEmpty(customselectStr)){
		    	customselectStr = customselectIds;
		     }
    			customselectStr = customselectStr + ",";
            }
            map.put(
                    colName + "Name",
                    customselectStr.length() > 1 ? customselectStr.substring(0,
                    		customselectStr.length() - 1) : "");
            map.put(colName, customselectIds != null ? customselectIds : "");
        } else if ("userdefined".equals(type)) {
            String customStr = "";
            String customIds = null;
            Object obj = map.get(colName);
            if (obj instanceof Clob) {
                customIds = EformCommonUtils.ClobToString((Clob) obj);
            } else {
                customIds = (String) map.get(colName);
            }
            if (customIds != null) {
                String apiurl = tm.attributeValue("userdefinedclass");
                if (!StringUtils.isEmpty(apiurl)) {
                    event = EformCommonUtils.instancetrans(apiurl);
                    customStr = event.transfer(customIds);
                }

            }
            map.put(colName + "Name",
                    customStr.length() > 0 ? customStr.substring(0,
                            customStr.length()) : "");
            map.put(colName, customIds != null ? customIds : "");
        } else if ("dictionary".equals(type)){
            String dataComboxType = (String) dicMap.get("dataComboxType");
            String dataCombox = (String) dicMap.get("dataCombox");
            if(StringUtils.isNotEmpty(dataComboxType) && !dataComboxType.equals("-1")){
                Dbs.setDbType(dataCombox);
            }
            String displayValue = dictionaryService.searchDictionary(dicMap);
            Dbs.clear();
            map.put(colName + "Name",
                    displayValue.length() > 0 ? displayValue.substring(0,
                            displayValue.length()) : "");
        }else if (tm.attribute("db_filed_type").getValue().equals("BLOB")) {
            Object obj = map.get(colName);
            String blobToString = "";
            if (obj instanceof Blob) {
                blobToString = EformCommonUtils.convertBlobToBase64String((Blob) obj);
            }
            map.put(colName, blobToString);
        } else if (tm.attribute("db_filed_type").getValue().equals("CLOB")) {
            Object obj = map.get(colName);
            String clobToString = "";
            if (obj instanceof Clob) {
                clobToString = EformCommonUtils.ClobToString((Clob) obj);
            }

            map.put(colName, clobToString);
        }
    }

    private Map<String, Object> getDataListColModel(String pid) {
        Map<String, Object> retmap = new HashMap<String, Object>();
        retmap.put("id", pid + "dataListColModel");
        retmap.put("pid", pid);
        retmap.put("name", "列模型");
        retmap.put("type", "dataListColModel");

        Map<String, Object> arrmap = new HashMap<String, Object>();
        arrmap.put("id", pid + "dataListColModel");
        arrmap.put("name", "列模型");

        retmap.put("attribute", arrmap);

        return retmap;
    }

    private Map<String, Object> getColModel(String pid) {
        Map<String, Object> retmap = new HashMap<String, Object>();
        retmap.put("id", pid + "tableColModel");
        retmap.put("pid", pid);
        retmap.put("name", "列模型");
        retmap.put("type", "tableColModel");

        Map<String, Object> arrmap = new HashMap<String, Object>();
        arrmap.put("id", pid + "tableColModel");
        arrmap.put("name", "列模型");
        arrmap.put("width", "120");

        retmap.put("attribute", arrmap);

        return retmap;
    }

    private List<Map<String, Object>> getDataListCol(
                                             List<DbTableColDTO> list, String isbpm, Map<String, Object> colMap,String dbid) {
        List<Map<String, Object>> retlist = new ArrayList<Map<String, Object>>();

        for (int i = 0; i < list.size(); i++) {
            DbTableColDTO tc = list.get(i);
            String colname = tc.getColName();
            if (colMap.containsKey(colname)) {
                colMap.remove(colname);
                continue;
            }
            Map<String, Object> retmap = new HashMap<String, Object>();
            retmap.put("id", tc.getColName());
            retmap.put("name", tc.getColComments());
            retmap.put("type", "dataListColumn");


            Map<String, Object> arrmap = new HashMap<String, Object>();
            arrmap.put("id", tc.getColName());
            arrmap.put("name", tc.getColComments());
            arrmap.put("db_filed_type", tc.getColType());
            arrmap.put("dbid",dbid);

            if (("Y".equals(tc.getColIsPk())|| "ID".equals(tc.getColName())) && StringUtils.isEmpty(dbid)) {
                arrmap.put("ispkfiled", "Y");
            } else {
                arrmap.put("ispkfiled", "N");
            }

            if ("NUMBER".equals(tc.getColType())) {
                arrmap.put("align", "right");
            } else if (tc.getColType().equals("DATE")) {
                arrmap.put("align", "center");
                arrmap.put("format", "yyyy-mm-dd");
            } else {
                arrmap.put("align", "left");
                arrmap.put("format", "");
            }
            arrmap.put("sorttype", "");
            arrmap.put("orderindex", "");

            retmap.put("attribute", arrmap);

            retlist.add(retmap);
        }

        if (isbpm.equals("Y")) {
            getBpmCol(retlist, colMap);
        }

        return retlist;
    }

    private List<Map<String, Object>> getCol(String string,
                                             List<DbTableColDTO> list, String isbpm, Map<String, Object> colMap,String dbid) {
        List<Map<String, Object>> retlist = new ArrayList<Map<String, Object>>();

        for (int i = 0; i < list.size(); i++) {
            DbTableColDTO tc = list.get(i);
            String colname = tc.getColName();
            if (colMap.containsKey(colname)) {
                colMap.remove(colname);
                continue;
            }
            Map<String, Object> retmap = new HashMap<String, Object>();
            retmap.put("id", tc.getColName());
            retmap.put("name", tc.getColComments());
            retmap.put("type", "tableColumn");


            Map<String, Object> arrmap = new HashMap<String, Object>();
            arrmap.put("id", tc.getColName());
            arrmap.put("name", tc.getColComments());
            arrmap.put("db_filed_type", tc.getColType());
            arrmap.put("dbid",dbid);
            arrmap.put("width", "");
            if (tc.getColName().startsWith("ATTRIBUTE_") || tc.getColName().equals("ID") || tc.getColName().equals("LAST_UPDATE_DATE")
                    || tc.getColName().equals("LAST_UPDATED_BY") || tc.getColName().equals("CREATION_DATE") || tc.getColName().equals("CREATED_BY")
                    || tc.getColName().equals("LAST_UPDATE_IP") || tc.getColName().equals("VERSION")
                    || tc.getColName().equals("ORG_IDENTITY")|| tc.getColName().equals("CREATED_DEPT")|| EformConstant.MyBatisType.BLOB.equals(tc.getColType())) {
                arrmap.put("hidden", "true");
            } else {
                arrmap.put("hidden", "false");
            }

            if (("Y".equals(tc.getColIsPk())|| "ID".equals(tc.getColName())) && StringUtils.isEmpty(dbid)) {
                arrmap.put("ispkfiled", "Y");
            } else {
                arrmap.put("ispkfiled", "N");
            }

            if ("NUMBER".equals(tc.getColType())) {
                arrmap.put("align", "right");
            } else if (tc.getColType().equals("DATE")) {
                arrmap.put("align", "center");
                arrmap.put("format", "yyyy-mm-dd");
            } else {
                arrmap.put("align", "left");
                arrmap.put("format", "");
            }
            arrmap.put("sorttype", "");
            arrmap.put("orderindex", "");

            retmap.put("attribute", arrmap);

            retlist.add(retmap);
        }

        if (isbpm.equals("Y")) {
            getBpmCol(retlist, colMap);
        }

        return retlist;
    }


    private List<Map<String, Object>> getBpmCol(List<Map<String, Object>> list, Map<String, Object> colMap) {

        if (!colMap.containsKey("ACTIVITYALIAS_")) {
            Map<String, Object> retmap = new HashMap<String, Object>();
            retmap.put("id", "ACTIVITYALIAS_");
            retmap.put("name", "流程当前步骤");
            retmap.put("type", "tableVirColumn");

            Map<String, Object> arrmap = new HashMap<String, Object>();
            arrmap.put("id", "ACTIVITYALIAS_");
            arrmap.put("name", "流程当前步骤");

            arrmap.put("width", "");
            arrmap.put("hidden", "false");
            arrmap.put("align", "left");
            arrmap.put("format", "");
            arrmap.put("sorttype", "");
            arrmap.put("orderindex", "");

            retmap.put("attribute", arrmap);

            list.add(retmap);
        }


        if (!colMap.containsKey("BUSINESSSTATE_")) {
            Map<String, Object> retmap2 = new HashMap<String, Object>();
            retmap2.put("id", "BUSINESSSTATE_");
            retmap2.put("name", "流程状态");
            retmap2.put("type", "tableVirColumn");

            Map<String, Object> arrmap2 = new HashMap<String, Object>();
            arrmap2.put("id", "BUSINESSSTATE_");
            arrmap2.put("name", "流程状态");

            arrmap2.put("width", "");
            arrmap2.put("hidden", "false");
            arrmap2.put("align", "left");
            arrmap2.put("format", "bpmstatus");
            arrmap2.put("ud_function", "bpmStatusFormatter");
            arrmap2.put("sorttype", "");
            arrmap2.put("orderindex", "");

            retmap2.put("attribute", arrmap2);

            list.add(retmap2);
        }

        if (!colMap.containsKey("ASSIGNEENAMES_")) {
            Map<String, Object> retmap4 = new HashMap<String, Object>();
            retmap4.put("id", "ASSIGNEENAMES_");
            retmap4.put("name", "流程当前处理人");
            retmap4.put("type", "tableVirColumn");

            Map<String, Object> arrmap4 = new HashMap<String, Object>();
            arrmap4.put("id", "ASSIGNEENAMES_");
            arrmap4.put("name", "流程当前处理人");

            arrmap4.put("width", "");
            arrmap4.put("hidden", "false");
            arrmap4.put("align", "left");
            arrmap4.put("format", "");
            arrmap4.put("sorttype", "");
            arrmap4.put("orderindex", "");

            retmap4.put("attribute", arrmap4);

            list.add(retmap4);
        }

        if (!colMap.containsKey("flowdetail")) {
            Map<String, Object> retmap3 = new HashMap<String, Object>();
            retmap3.put("id", "flowdetail");
            retmap3.put("name", "流程详细");
            retmap3.put("type", "tableVirColumn");

            Map<String, Object> arrmap3 = new HashMap<String, Object>();
            arrmap3.put("id", "flowdetail");
            arrmap3.put("name", "流程详细");

            arrmap3.put("width", "");
            arrmap3.put("hidden", "false");
            arrmap3.put("align", "left");
            arrmap3.put("format", "bpmdetail");
            arrmap3.put("sorttype", "");
            arrmap3.put("orderindex", "");
            arrmap3.put("ud_function", "bpmFormatter");

            retmap3.put("attribute", arrmap3);

            list.add(retmap3);
        }

        return list;
    }


    @Override
    public void saveTableData(String tableid, String viewid, String version, List<Map<String, Object>> datas, String orgId) throws Exception {



        EformViewInfo eformViewInfo = bpmsCacheUtils.getViewInfoById(viewid);
        if(StringUtils.isEmpty(version)){
            version = eformViewInfo.getCurrentVersion();
        }
        EformViewContent viewContent = bpmsCacheUtils.getViewContent(viewid,version);

        SAXReader reader = new SAXReader();
        Document document = reader.read(new ByteArrayInputStream(viewContent.getViewSchema()));
        Element root = document.getRootElement();
        List<?> list = root.selectNodes("table[@id='" + tableid + "']");
        Element el = (Element) list.get(0);
        String dbid = el.attributeValue("dbid");
        DbTable dbTable = dbUtils.selectDbTable(dbid);
        List<DbTableColDTO> collist = dbUtils.getColunmsByTableId(dbid);

        String sessionId = ContextCommonHolder.getCookeMid();
        Map session = new HashMap();
        if (org.springframework.util.StringUtils.hasText(sessionId)) {
            session = RedisSessionService.getInstance().getSessionById(
                    sessionId);
        }

        Map<String,Map<String,String>> colattrMap = new HashMap<String, Map<String, String>>();
        List<?> colRenderer = el.selectNodes("descendant::tableColRenderer");
        boolean needUniqueCheck = false; //判断是否需要唯一性校验
        for (Object renderer : colRenderer){
            Element render = (Element) renderer;
            Map<String,String> attr = new HashMap<String, String>();
            String colName = render.getParent().attributeValue("id");
            String domType = render.attributeValue("formControl");
            String isUnique = render.attributeValue("isUnique");
            String name = render.getParent().attributeValue("name");
            attr.put("colName",colName);
            attr.put("domType",domType);
            attr.put("isUnique",isUnique);
            attr.put("name",name);
            if(!needUniqueCheck && "Y".equals(isUnique)){
                needUniqueCheck = true;
            }
            colattrMap.put(colName,attr);
        }
        List<EformDomAttr> logColumns = new ArrayList<EformDomAttr>();
        for (DbTableColDTO col : collist){
            EformDomAttr domAttr = new EformDomAttr();
            domAttr.setColName(col.getColName());
            domAttr.setColLabel(col.getColComments());
            domAttr.setColType(col.getColType());
            domAttr.setColLength(col.getColLength());
            if (colattrMap.containsKey(col.getColName())){
                Map<String,String > te = colattrMap.get(col.getColName());
                domAttr.setDomType(te.get("domType"));
            }
            logColumns.add(domAttr);
        }


        //唯一性验证
        if(needUniqueCheck){
            Map<String,Object> repeatMap = new HashMap<String, Object>();
            Map<String,Object> originalMap = new HashMap<String, Object>();

            Set<String> repeatField = new LinkedHashSet<String>();
            for (Map<String, Object> data : datas){
                Map<String,Object> resultMap = new HashMap<String, Object>();
                TableDataEntity table = new TableDataEntity();
                String subpk = "ID";

                for (DbTableColDTO domattr : collist) {
                    if (domattr.getColIsPk().equals("Y")) {
                        subpk = domattr.getColName();
                        break;
                    }
                }
                table.setPk(subpk);
                if (data.containsKey(table.getPk()) && StringUtils.isNotEmpty((String)data.get(table.getPk()))) {
                    String id = (String) data.get(table.getPk());

                    resultMap = this.tableUnique(subpk,dbTable, colattrMap, data, id);
                }else{
                    resultMap = this.tableUnique(subpk,dbTable,colattrMap, data, "");
                }

                repeatMap.putAll((Map<String,Object>)resultMap.get("repeatMap"));
                originalMap.putAll((Map<String,Object>)resultMap.get("originalMap"));
            }

            Iterator<Map.Entry<String, Object>> it=repeatMap.entrySet().iterator();
            while(it.hasNext()) {
                Map.Entry<String, Object> entry=it.next();
                String key=entry.getKey();
                String value=(String)entry.getValue();
                String originalValue = (String)originalMap.get(key);
                int index = key.indexOf("_");

                if(StringUtils.isEmpty(originalValue)){
                    repeatField.add(key.substring(index+1,key.length()));
                }
                if(StringUtils.isNotEmpty(value) && StringUtils.isNotEmpty(originalValue) && originalValue.equals(value)){
                    repeatField.add(key.substring(index+1,key.length()));
                }
            }

            if(repeatField.size() > 0){

                Set<String> resultSet = new LinkedHashSet<String>();
                for (String colName:
                repeatField) {
                    Map<String,String> attr = colattrMap.get(colName);
                    resultSet.add((String)attr.get("name"));
                }
                throw new DaoException(resultSet.toString() + "存在重复数据！");
            }
        }

        //封装数据
        for (Map<String, Object> data : datas){
            TableDataEntity table = new TableDataEntity();

            if (data.containsKey("VERSION")){
                data.remove("VERSION");
            }


            String subpk = "ID";
            for (DbTableColDTO domattr : collist) {
                if (domattr.getColIsPk().equals("Y")) {
                    subpk = domattr.getColName();
                    break;
                }
            }
            table.setPk(subpk);
            table.setDatasourceId(dbTable.getDataSourceId());
            table.setDbTableId(dbTable.getId());
            //封装子表数据
            EformCommonUtils.transEntity(orgId, collist, data, table);

            table.setFkCol(dbTable.getFkColName());
            table.setTableName(dbTable.getTableName());
            table.setButton(null);
            table.setTableTitle(dbTable.getTableComments());
            Map<String, Object> sublog = new HashMap<String, Object>();
            sublog.put("columns", logColumns);
            sublog.put("data", table.getFields());
            sublog.put("syslogModule", eformViewInfo.getViewName());



            String msg = "1";
            boolean hasCreatedDept = dbUtils.isCreatedDeptColumnExist(dbid);

            List<String> tableColumns = null;
            if(!"datasource".equals(table.getDatasourceId())){
                List<DbTableColDTO> columnsList = this.dbUtils.getColunmsByTableId(table.getDbTableId());
                tableColumns = new ArrayList<String>();
                for (int i = 0; i< columnsList.size(); i++){
                    DbTableColDTO dbTableColDTO = columnsList.get(i);
                    tableColumns.add(dbTableColDTO.getColName());
                }
            }

            if (data.containsKey(table.getPk()) && StringUtils.isNotEmpty((String)data.get(table.getPk()))) {
                String id = (String) data.get(table.getPk());
                EformCommonUtils.setSysPropertiesNew(table, PlatformConstant.OpType.update, session,hasCreatedDept,tableColumns);
                EformCustomButton subbutton = null;
                msg = bpmsControlUtils.updateData(id, table, subbutton);
                SysLogUtil.log(sublog, bpmsControlUtils.getByPK(table.getTableName(), (String) table.getFields().get(subpk).getData(), subpk), PlatformConstant.OpType.update, PlatformConstant.OpResult.success);
            } else {
                FieldDataEntity field_subId = new FieldDataEntity();
                field_subId.setColumnName(table.getPk());
                field_subId.setData(ComUtil.getId());
                field_subId.setDataType(EformConstant.MyBatisType.VARCHAR);
                table.addField(field_subId);


                EformCommonUtils.setSysPropertiesNew(table, PlatformConstant.OpType.insert, session,hasCreatedDept,tableColumns);
                EformCustomButton subbutton = null;
                if (table.getButton() != null) {
                    for (EformCustomButton itbutton : table.getButton()) {
                        if (itbutton.getButtonCode().equals(EformConstant.ButtonType.insert.getCode())) {
                            subbutton = itbutton;
                        }
                    }
                }
                msg = bpmsControlUtils.insertData(table, subbutton);
                SysLogUtil.log(sublog, null, PlatformConstant.OpType.insert, PlatformConstant.OpResult.success);
            }
            if (!msg.equals("1")) {
                throw new DaoException(msg);
            }
        }


    }

    @Override
    public QueryRespBean<Map<String, Object>> selectDataListData(
            QueryReqBean<Map<String, Object>> queryReqBean, String pOrderBy, String viewid,
            String tableComponentid, String andOr, String pid, String langcode, String isbpm, String orgIdentity, String sqlPermission, String version) throws Exception {
        // 1:取表格表名,列模型


        EformViewInfo eformViewInfo = bpmsCacheUtils.getViewInfoById(viewid);
        if(StringUtils.isEmpty(version)){
            version = eformViewInfo.getCurrentVersion();
        }
        EformViewContent viewContent = bpmsCacheUtils.getViewContent(viewid,version);

        SAXReader reader = new SAXReader();
        Document document = reader.read(new ByteArrayInputStream(viewContent.getViewSchema()));
        Element root = document.getRootElement();
        List<?> list = root.selectNodes("dataList[@id='" + tableComponentid + "']");
        if(list == null || list.size() == 0){
            return new QueryRespBean<Map<String, Object>>();
        }
        Element el = (Element) list.get(0);
        String tableName = el.attributeValue("refdb");
        String flowid = el.attributeValue("flowid");
        //流程数据过滤条件 1仅显示流程关联数据 2显示所有数据
        String flowfilter = el.attributeValue("flowfilter");
        if (StringUtils.isEmpty(flowfilter)){
            flowfilter = "1";
        }

        String dataSrc = el.attributeValue("dataSrc");
        if (dataSrc == null || "".equals(dataSrc)) {
            throw new Exception("配置有误，未配置数据类型！");
        }
        List<?> formSearch = null;
        // 2:参数装配
        if (andOr.equals("Or")) {
            formSearch = el.selectNodes("descendant::dataListToolbar//dataListSearchbarArea//dataListKeyWordSearch");
        } else {
            formSearch = el.selectNodes("descendant::dataListToolbar//dataListSearchbarArea//dataListFormSearch");
        }
        String queryCriteria = "";

        Map<String, Object> searchParams = queryReqBean.getSearchParams();
        if (searchParams != null) {
            if (formSearch.size() > 0) {
                Iterator<?> It = ((Element) formSearch.get(0)).elementIterator();
                queryCriteria = getTablequeryCriteria(It, searchParams, andOr, isbpm);

            } else {
                queryCriteria = getTablequeryCriteria(null, searchParams, andOr, isbpm);
            }
            if (StringUtils.isEmpty(queryCriteria)){
                queryCriteria = getTableBpmquery(searchParams,isbpm,tableName,flowfilter);
            }else{
                String bpmquery = getTableBpmquery(searchParams,isbpm,tableName,flowfilter);
                if (StringUtils.isEmpty(bpmquery)){
                    queryCriteria = "(" +queryCriteria + ") ";
                }else{
                    queryCriteria = "(" +queryCriteria + ") and"+bpmquery;
                }

            }

        }


        if (queryCriteria != null && queryCriteria.trim().length() > 0) {
            queryCriteria = queryCriteria + " and (" + sqlPermission + ")";
        } else {
            queryCriteria = sqlPermission;
        }
        String where = el.attributeValue("where") == null ? "" : el.attributeValue("where");
        if (StringUtils.isNotEmpty(where)){
            queryCriteria = queryCriteria + " and ("+where+")";
        }

        Element dataFilter = el.element("dataFilter");
        if (dataFilter !=null){
            Map<String,Object> comparaMap = ( Map<String,Object>)searchParams.get("comparaMap");
            String paraareaid = el.element("parameterArea").attributeValue("paraareaid");
            String dataFilterSql = EformCommonUtils.getDataFilterSql(dataFilter,(Map<String,Object>)comparaMap.get(paraareaid),paraareaid,"");
            if (StringUtils.isNotEmpty(dataFilterSql)) {
                queryCriteria = queryCriteria + " and (" + dataFilterSql + ")";
            }
        }

        String paramet = el.attributeValue("paramet");
        if (paramet != null && !"".equals(paramet)) {

            doExpressionParser(searchParams, paramet);
        }

        List<?> cm = el.selectNodes("descendant::dataListColModel ");
        Iterator<?> cmit = ((Element) cm.get(0)).elementIterator();
        if (pOrderBy == null || "".equals(pOrderBy)) {
            pOrderBy = getTableOrderBy(cmit);
        } else {
            if (pOrderBy.contains("Name")){
                pOrderBy = pOrderBy.replace("Name","");
            }
            String col = pOrderBy.split(" ")[0];
            while (cmit.hasNext()) {
                Element tm = (Element) cmit.next();
                String filedType = tm.attribute("db_filed_type") != null ? tm.attribute("db_filed_type").getValue() : "";
                String filedid = tm.attribute("id") != null ? tm.attribute("id").getValue() : "";
                if (col.equals(filedid)){

                    if ("CLOB".equals(filedType)  ) {
                        DbTableInterface eformDbService = DbTableFactory.produce(DbUtils.getDbType());
                        pOrderBy = eformDbService.getCLOBorderby(col) + " "+pOrderBy.split(" ")[1];;

                    }
                    break;
                }

            }

            pOrderBy = "order by " + pOrderBy;


        }

        List<?> tablePagingbar = el.selectNodes("descendant::dataListPagingbar");
        if (tablePagingbar.size() == 0) {
            queryReqBean.getPageParameter().setRows(200000);
        }

        // 2.1 取联动关系
        if (pid != null && !"".equals(pid) && !"NULL".equals(pid)) {
            List<?> compRef = root.selectNodes("compRef[@subcompid='" + tableComponentid + "']");
            if (compRef != null && compRef.size() > 0) {
                Element compRefel = (Element) compRef.get(0);
                String compfkfiled = compRefel.attributeValue("subfkfiled");
                String miancomptype = compRefel.attributeValue("miancomptype");
                String miancompid = compRefel.attributeValue("miancompid");

                if (queryCriteria.length() > 0) {
                    queryCriteria += " and ";
                }

                if ("tree".equals(miancomptype)) {
                    List<?> listTree = root.selectNodes("tree[@id='" + miancompid + "']");
                    Element elTree = (Element) listTree.get(0);

                    String dbidTree = elTree.attributeValue("dbid");
                    String nodeidTree = elTree.attributeValue("nodeid");
                    String pidTree = elTree.attributeValue("pid");
                    String reflevel = elTree.attributeValue("reflevel");
                    int rlevel = -1;
                    if (StringUtils.isNotEmpty(reflevel)){
                        rlevel = Integer.parseInt(reflevel);
                    }
                    Element treedataFilter = elTree.element("dataFilter");
                    String treeFilterSql = "";
                    Map<String, Object> comparaMap = null;
                    if (searchParams.containsKey("comparaMap")) {
                        comparaMap = (Map<String, Object>) searchParams.get("comparaMap");
                        if (treedataFilter != null) {
                            Element parameterArea = elTree.element("parameterArea");
                            if (parameterArea!=null) {
                                String paraareaid = parameterArea.attributeValue("paraareaid");
                                treeFilterSql = EformCommonUtils.getDataFilterSql(treedataFilter, (Map<String, Object>) comparaMap.get(paraareaid), paraareaid, "t");
                            }
                        }
                    }
                    DbTable dbTable = dbUtils.selectDbTable(dbidTree);
                    boolean hasOrgCol = dbUtils.isOrgIdentityColumnExist(dbidTree);
                    List<String> nodeIdList = bpmsControlUtils.getAllSubNodeIdList(dbTable, nodeidTree, pidTree, pid, orgIdentity,hasOrgCol,treeFilterSql,searchParams,rlevel);
                    nodeIdList.add(pid);
                    String insql = "";
                    String pids = "";
                    for (int i = 0; i < nodeIdList.size(); i++) {
                        if (i%500 == 0&&i!=0){
                            pids += "'" + nodeIdList.get(i) + "'";
                            insql += " "+compfkfiled + " in (" + pids + ") or";
                            pids = "";
                        } else if (i != nodeIdList.size() - 1) {
                            pids += "'" + nodeIdList.get(i) + "',";
                        }else {
                            pids += "'" + nodeIdList.get(i) + "'";
                        }

                    }
                    if (StringUtils.isNotEmpty(pids)) {
                        insql += " "+compfkfiled + " in (" + pids + ")";
                    }else{
                        if (insql.endsWith("or")){
                            insql = insql.substring(0,insql.length()-2);
                        }
                    }
                    if (StringUtils.isNotEmpty(insql)) {
                        queryCriteria += "("+insql+")";
                    }
                } else {
                    queryCriteria += compfkfiled + " = '" + pid + "'";
                }
            }
        }

        // 3:取数
        if ("databaseTable".equals(dataSrc)) {

            String dbid = el.attributeValue("dbid");
            DbTable selectDbTable = bpmsCacheUtils.getTablesBytableId(dbid);
            String datasourceId = "";
            if (selectDbTable != null) {
                datasourceId = selectDbTable.getDataSourceId();
            }
            String isorgfilter = el.attributeValue("isorgfilter") != null ?el.attributeValue("isorgfilter") : "Y";
            //判断组织标识
            if (dbUtils.isOrgIdentityColumnExist(dbid) && "Y".equals(isorgfilter)) {
                if (queryCriteria.length() > 0) {
                    queryCriteria += " and ";
                }
                queryCriteria += " ORG_IDENTITY = '" + orgIdentity + "' ";
            }

            if (tableName == null || "".equals(tableName)) {
                throw new Exception("配置有误，未配置数据表！");
            }
            String selectColSql = "";
//			List<Element> collist = new ArrayList<Element>();
//			cmit = ((Element) cm.get(0)).elementIterator();
//			while(cmit.hasNext()){
//				Element tm = (Element)cmit.next();
//				if("tableColumn".equals(tm.getName())){
//					collist.add(tm);
//					selectColSql += tm.attribute("id").getValue()+",";
//				}
//			}
//
//			selectColSql = selectColSql.substring(0, selectColSql.length()-1);
            Page<Map<String, Object>> dataList = null;
            PageHelper.startPage(queryReqBean.getPageParameter());
            Dbs.setDbType(datasourceId);
            String leftJoin = "";

            List<?> tableLinkDbList = el.selectNodes("descendant::tableLinkDb");
            if (tableLinkDbList!=null && tableLinkDbList.size()>0) {
                Map<String,Object> comparaMap = ( Map<String,Object>)searchParams.get("comparaMap");
                Element parameterArea = el.element("parameterArea");
                String paraareaid = "";
                if (parameterArea!=null) {
                    paraareaid = el.element("parameterArea").attributeValue("paraareaid");
                }
                Map<String,String> joinmap = getJoinSql(tableLinkDbList,comparaMap, paraareaid);
                if (isbpm.equals("Y")) {
                    if (StringUtils.isNotEmpty(flowid)){
                        leftJoin += " and v.PROCDEFID_ like '"+flowid+"%' ";
                    }
                }
                leftJoin += joinmap.get("joinsql");
                selectColSql = joinmap.get("selectcolsql");
            }else{
                if (isbpm.equals("Y")&& StringUtils.isNotEmpty(flowid)){
                    leftJoin += " and v.PROCDEFID_ like '"+flowid+"%'";
                }
            }
            if (isbpm.equals("Y")) {
                dataList = viewDao.selectBPMDBTableComponentDataByPage(searchParams, pOrderBy, tableName, queryCriteria, selectColSql,leftJoin);
            } else {
                dataList = viewDao.selectDBTableComponentDataByPage(searchParams, pOrderBy, tableName, queryCriteria, selectColSql,leftJoin);
            }
            Dbs.clear();

            for (int k = 0; k < dataList.size(); k++) {

                Map<String, Object> map = dataList.get(k);    // 查找需要转换的列
                Iterator<Map.Entry<String, Object>> entries = map.entrySet().iterator();

                while (entries.hasNext()) {

                    Map.Entry<String, Object> entry = entries.next();

                    if (entry.getValue() instanceof Blob) {
                        Object obj = map.get(entry.getKey());
                        String blobToString = EformCommonUtils.convertBlobToBase64String((Blob) obj);
                        map.put(entry.getKey(),blobToString);
                    } else if (entry.getValue() instanceof Clob) {
                        Object obj = map.get(entry.getKey());
                        String clobToString = EformCommonUtils.ClobToString((Clob) obj);
                        map.put(entry.getKey(), clobToString);
                    }

                }
                cmit = ((Element) cm.get(0)).elementIterator();
                while (cmit.hasNext()) {
                    Element tm = (Element) cmit.next();
                    if ("dataListColumn".equals(tm.getName())) {


                        String id = tm.attribute("id").getValue();
                        Element tableColRenderer = tm.element("tableColRenderer");
                        String formControl = "";
                        String dataCombox = "";
                        String dataComboxType = "";
                        String queryStatement = "";
                        String paraJson = "";
                        String dicAutoTransform = "";
                        if(tableColRenderer != null){
                            formControl = tableColRenderer.attribute("formControl") ==null ? "" : tableColRenderer.attribute("formControl").getValue();
                            dataCombox = tableColRenderer.attribute("dataCombox") ==null ? "" : tableColRenderer.attribute("dataCombox").getValue();
                            dataComboxType = tableColRenderer.attribute("dataComboxType") ==null ? "" : tableColRenderer.attribute("dataComboxType").getValue();
                            dicAutoTransform = tableColRenderer.attribute("dicAutoTransform") ==null ? "" : tableColRenderer.attribute("dicAutoTransform").getValue();
                            Element elevents = tableColRenderer.element("events");
                            Iterator<?> itEvent = elevents.elementIterator();
                            while(itEvent.hasNext()){
                                Element event = (Element)itEvent.next();
                                if(event.attribute("name") != null && !event.attribute("name").equals("")){
                                    String eventName = event.attribute("name").getValue();
                                    String function = event.getText();
                                    if(("event_queryStatement").equals(eventName)){
                                        queryStatement = function;
                                    }else if(("event_dictionaryPara").equals(eventName)){
                                        paraJson = function;
                                    }
                                }
                            }
                        }

                        Map<String,Object> dicParams = new HashMap<String, Object>();
                        String transform = tm.attribute("transform") == null ? "" : tm.attribute("transform").getValue();
                        if (StringUtils.isEmpty(transform)) {
                            if("dictionary".equals(formControl) && "Y".equals(dicAutoTransform)){
                                transform = "dictionary";
                                dicParams.put("dataCombox",dataCombox);
                                dicParams.put("dataComboxType",dataComboxType);
                                dicParams.put("sql",queryStatement);
                                dicParams.put("mappingData",paraJson);
                                dicParams.put("domId",id);
                                dicParams.put("colValue", map.get(id));
                                dicParams.put("dicUniqueCode","");
                                HashMap<String, Object> paramMaps = new HashMap<String, Object>();
                                paramMaps.put("_userId", searchParams.get("currUserId"));
                                paramMaps.put("_deptId", searchParams.get("currDeptId"));
                                paramMaps.put("_languageCode", SessionHelper.getCurrentLanguageCode());
                                dicParams.put("paramMaps",paramMaps);
                            }else{
                                continue;
                            }
                        }

                        String lookupTypeSelect = tm.attribute("LookupTypeName") == null ? "" : tm.attribute("LookupTypeName").getValue();
                        String customselectcode = tm.attribute("customselectcode") == null ? "" : tm.attribute("customselectcode").getValue();

                        this.transColumn(transform, id, map, lookupTypeSelect,customselectcode, langcode, tm, dicParams);
                    }
                }
            }
            QueryRespBean<Map<String, Object>> queryRespBean = new QueryRespBean<Map<String, Object>>();
            queryRespBean.setResult(dataList);
            return queryRespBean;
        }  else {
            return null;
        }

    }

    public Map<String,Object> tableUnique(String pkId, DbTable table, Map<String,Map<String,String>> colattrMap, Map saveData, String id) throws Exception {

        Map<String,Object> repeatMap = new HashMap<String, Object>();
        Map<String,Object> originalMap = new HashMap<String, Object>();

        Collection<Map<String,String>> values = colattrMap.values();
        for(Map<String,String> map : values){
            String colName = map.get("colName");
            String unique = map.get("isUnique");
            if("Y".equals(unique)){
                String value = saveData.get(colName).toString();
                if(StringUtils.isNotEmpty(id)){
                    originalMap.put(id+"_"+colName, value);
                }else{
                    originalMap.put(ComUtil.getId()+"_"+colName, value);
                }

                Dbs.setDbType(table.getDataSourceId());
                List<Map<String,Object>> repeatResult = null;
                if ("date".equals(map.get("domType"))) {
                    repeatResult = this.uniqueDateForBatch(table.getTableName(),
                            colName, value, id);
                } else {
                    repeatResult = this.uniqueForBatch(table.getTableName(),
                            colName, value, id);
                }
                for (Map<String,Object> ele:
                        repeatResult) {
                    String eleValue = ele.get(colName).toString();
                    repeatMap.put((String)ele.get(pkId) + "_" + colName,eleValue);
                }
                Dbs.clear();
                /*if (count > 0) {
                    msg = msg + "【" + colName + "】数据已经存在!<br>";
                    flag = false;
                }*/
            }
        }

        Map<String, Object> result = new HashMap<String, Object>();
        result.put("repeatMap",repeatMap);
        result.put("originalMap",originalMap);
        return result;
    }



    public List<Map<String,Object>> uniqueForBatch(String tableName, String colName, String value, String id) {
        return efromDao.uniqueForBatch(tableName, colName, value, id);

    }


    public List<Map<String,Object>> uniqueDateForBatch(String tableName, String colName, String value, String id) {
        if (value.contains(":")) {
            //时间格式：yyyy-mm-dd hh24:mi:ss
            return efromDao.uniqueDatetimeForBatch(tableName, colName, value + ":00", id);
        } else {
            //时间格式：yyyy-mm-dd
            return efromDao.uniqueDateForBatch(tableName, colName, value, id);
        }
    }
}
