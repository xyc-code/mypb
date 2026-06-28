package avicit.tu.ffcljy.controller;


import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eform.EformConstant;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@Scope("prototype")
@RequestMapping("avicit/tu/ffcljy/ffcljyController")
public class FfcljyController implements LoaderConstant {

    private static final Logger LOGGER = LoggerFactory.getLogger(FfcljyController.class);


    /**
     * 按照id批量删除数据,更新状态
     * @param ids id数组
     * @return Map<String,Object>
     */
    @RequestMapping(value = "/operation/updateStatus", method = RequestMethod.POST)
    @ResponseBody
    public Map<String,Object> toUpdateStatus(@RequestBody String[] ids) {
        Map<String,Object> map = new HashMap<String,Object>();
        try {


            BpmsControlUtils bpmsControlUtils= SpringMVCFactory.getBean(BpmsControlUtils.class);

            for(String id :ids){
                TableData var1=new TableData();
                var1.setTableName("DYN_FFCLJYQK");
                var1.setPrimaryKeyValue(id);
                List<TableColData> tableColDataList=new ArrayList<>();

                TableColData tcd=new TableColData();
                tcd.setColName("FLAG");
                tcd.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
                tcd.setColValue("1");//默认是0 有效 ， 1 无效
                tableColDataList.add(tcd);
                var1.setTableColDataList(tableColDataList);

                int row= bpmsControlUtils.updateData(var1);
                LOGGER.info("反腐倡廉删除更新了{}条",row);

            }

            map.put("flag", PlatformConstant.OpResult.success);
        } catch (Exception ex) {
            map.put("flag", PlatformConstant.OpResult.failure);
            return map;
        }
        return map;
    }
}
