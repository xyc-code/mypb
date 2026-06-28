package avicit.tu.ffcljy.event;

import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eform.EformConstant;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;


/**
 * 反腐倡廉流程审批完成后更新状态
 */
public class FfcljyEventListener implements EventListener {

    private static final Logger LOGGER = LoggerFactory.getLogger(FfcljyEventListener.class);

    @Override
    public void notify(EventListenerExecution eventListenerExecution) throws Exception {

        String formId=(String)eventListenerExecution.getVariable("id");

        BpmsControlUtils bpmsControlUtils= SpringMVCFactory.getBean(BpmsControlUtils.class);
        TableData var1=new TableData();
        var1.setTableName("DYN_FFCLJYQK");
        var1.setPrimaryKeyValue(formId);
        List<TableColData> tableColDataList=new ArrayList<>();

        TableColData tcd=new TableColData();
        tcd.setColName("FLAG");
        tcd.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
        tcd.setColValue("0");//默认是0 有效 ， 1 无效
        tableColDataList.add(tcd);
        var1.setTableColDataList(tableColDataList);

        int row= bpmsControlUtils.updateData(var1);
        LOGGER.info("反腐倡廉删除更新了{}条",row);


    }
}
