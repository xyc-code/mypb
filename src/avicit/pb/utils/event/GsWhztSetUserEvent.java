package avicit.pb.utils.event;


import avicit.platform6.bpm.api.BpmVariableKey;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.identity.impl.UserImpl;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eform.EformConstant;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.poi.ss.formula.functions.T;

import java.util.ArrayList;
import java.util.List;

/**
 * 公司文化载体,设置流程审核人信息到页面字段中
 */
public class GsWhztSetUserEvent implements EventListener {
    @Override
    public void notify(EventListenerExecution eventListenerExecution) throws Exception {

        String formId=(String)eventListenerExecution.getVariable("ID");
        if(formId==null){
            formId=(String)eventListenerExecution.getVariable("id");
        }
        UserImpl userImpl = (UserImpl) eventListenerExecution.getVariable(BpmVariableKey.USER);

        BpmsControlUtils bpmsControlUtils= SpringMVCFactory.getBean(BpmsControlUtils.class);

        TableData tableData=new TableData();
        tableData.setTableName("DYN_WHZTXX");//文化载体信息
        tableData.setPrimaryKeyValue(formId);
        List<TableColData> tableColDataList=new ArrayList<>();
        TableColData tableColData=new TableColData();
        tableColData.setColName("WHZTSHLD");//文化载体审核领导
        tableColData.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
        tableColData.setColValue(userImpl.getName());
        tableColDataList.add(tableColData);
        tableData.setTableColDataList(tableColDataList);
        bpmsControlUtils.updateData(tableData);

    }
}
