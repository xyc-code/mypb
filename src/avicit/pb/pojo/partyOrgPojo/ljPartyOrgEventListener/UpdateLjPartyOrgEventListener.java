package avicit.pb.pojo.partyOrgPojo.ljPartyOrgEventListener;

import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eform.EformConstant;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.collections.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 通用的更新某个表，的某个字段的值，仅限于更新字符串的
 */
public class UpdateLjPartyOrgEventListener implements EventListener {
    private static final Logger LOGGER = LoggerFactory.getLogger(UpdateLjPartyOrgEventListener.class);

    private String searchTableName;//要查询的表名称
    private String searchColName;//要查询的表列名称
    private String updateColName;//要更新的表列名称
    private String updateColValue;//要更新的表列值
    private String sessionJdVal;//选举进度，1、换届提醒。	2、提交请示。3、预备人选请示。4、党员大会

    @Override
    public void notify(EventListenerExecution eventListenerExecution) throws Exception {

        String formId=(String)eventListenerExecution.getVariable("id");
        BpmsControlUtils bpmsControlUtils= SpringMVCFactory.getBean(BpmsControlUtils.class);//得到电子表单操作类

        TableData tableData=new TableData();
        tableData.setTableName(searchTableName);//设置表名
        tableData.setPrimaryKeyValue(formId);
       Map<String, Object> searchMapResult= bpmsControlUtils.getData(tableData);//

        if(searchMapResult!=null){
            String partyId= MapUtils.getString(searchMapResult,searchColName);//党组织id
            tableData.setTableName("DYN_PARTY_ORG_INFO");//设置表名
            tableData.setPrimaryKeyValue("");//因为要按条件查询，所以不能设置主键id
            List<TableColData> tableColDataList=new ArrayList<>();
            TableColData tcd1=new TableColData();
            tcd1.setColValue(partyId);
            tcd1.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
            tcd1.setColSelectType(EformConstant.ColSelectTypeEnum.EQUAL);
            tcd1.setColName("PARTY_ID");
            tableColDataList.add(tcd1);
            TableColData tcd2=new TableColData();
            tcd2.setColValue("1");
            tcd2.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
            tcd2.setColSelectType(EformConstant.ColSelectTypeEnum.EQUAL);
            tcd2.setColName("SESSION_ID");
            tableColDataList.add(tcd2);

            tableData.setTableColDataList(tableColDataList);

            List<Map<String, Object>> searchMapResultsList= bpmsControlUtils.getDataList(tableData);//
            LOGGER.info("查询到了{}条当前届次记录",searchMapResultsList.size());

            //得到了当前届次，进行更新
            for(Map<String, Object> partyMap:searchMapResultsList){
                String id=MapUtils.getString(partyMap,"ID");
                tableData.setTableName("DYN_PARTY_ORG_INFO");
                tableData.setPrimaryKeyValue(id);//设置主键id
                tableColDataList.clear();

                TableColData utcd1=new TableColData();
                utcd1.setColValue(updateColValue);//1进行中，2已完成
                utcd1.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
                utcd1.setColName(updateColName);
                tableColDataList.add(utcd1);

                TableColData utcd2=new TableColData();
                utcd2.setColValue(sessionJdVal);//通用代码 party_org_type	党组织选举进度 。 1、换届提醒。	2、提交请示。3、预备人选请示。4、党员大会
                utcd2.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
                utcd2.setColName("SESSION_JD");
                tableColDataList.add(utcd2);


                int row=  bpmsControlUtils.updateData(tableData);
                LOGGER.info("更新了{}条记录",row);
            }

        }

    }
}
