package avicit.common.event;

import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.eform.EformConstant;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.List;


/**
 * 通用更新表状态
 */
public class CommonUpdateStatusEventListener implements EventListener {

    private String tableName;
    private  String colName1;
    private String data1;
    private  String colName2;
    private String data2;
    private  String colName3;
    private String data3;

    @Override
    public void notify(EventListenerExecution eventListenerExecution) throws Exception {
        String formId=(String)eventListenerExecution.getVariable("ID");

        if(StringUtils.isEmpty(formId)){
            formId=(String)eventListenerExecution.getVariable("id");
        }
        BpmsControlUtils bpmsControlUtils= SpringFactory.getBean(BpmsControlUtils.class);

        TableData td=new TableData();
        td.setTableName(tableName);
        td.setPrimaryKeyValue(formId);

        List<TableColData> tableColDataList=new ArrayList<>();


        if(!"".equals(colName1)&&!"".equals(data1)){
            TableColData tcd=new TableColData();
            tcd.setColName(colName1);
            tcd.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
            tcd.setColValue(data1);
            tableColDataList.add(tcd);

        }

        if(!"".equals(colName2)&&!"".equals(data2)){
            TableColData tcd=new TableColData();
            tcd.setColName(colName2);
            tcd.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
            tcd.setColValue(data2);
            tableColDataList.add(tcd);

        }

        if(!"".equals(colName3)&&!"".equals(data3)){
            TableColData tcd=new TableColData();
            tcd.setColName(colName3);
            tcd.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
            tcd.setColValue(data3);
            tableColDataList.add(tcd);

        }

        td.setTableColDataList(tableColDataList);
        bpmsControlUtils.updateData(td);


    }
}
