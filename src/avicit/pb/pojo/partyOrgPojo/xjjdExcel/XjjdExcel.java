package avicit.pb.pojo.partyOrgPojo.xjjdExcel;

import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.msystem.excel.core.SysExcelImpWithExcelHandle;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.*;
import java.util.logging.Logger;

@Component
public class XjjdExcel implements SysExcelImpWithExcelHandle {
    @Override
    public boolean validateRow(String sheetName, Map<String, Object> rowdata, long rowNum) {
        return true;
    }

    @Override
    public void saveSheetBefore(String sheetName, Map<String, List<Map<String, Object>>> data) {
        try {
            List<Map<String, Object>> list = data.get("insert");
            SysLookupAPI sysLookupLoader = SpringFactory.getBean(SysLookupAPI.class);
            JdbcTemplate bean = SpringFactory.getBean(JdbcTemplate.class);
            Collection<SysLookupSimpleVo> sessionType = sysLookupLoader.getLookUpListByTypeByAppId("party_xj_type", "1");
            for (Map<String, Object> item : list) {
                Date crea_time = (Date) item.get("CREA_TIME");
                String party_name = (String) item.get("PARTY_NAME");
                String session_type = (String) item.get("SESSION_TYPE");
                if ((sessionType != null) && (sessionType.size() > 0)) {
                    for (SysLookupSimpleVo sysLookupSimpleVo : sessionType) {
                        if (sysLookupSimpleVo.getLookupName().equals(session_type)) {
                            item.remove("SESSION_TYPE");
                            item.put("SESSION_TYPE",sysLookupSimpleVo.getLookupCode());
                            break;
                        }
                    }
                }
                List<Map<String, Object>> list1 = bean.queryForList("select id,attribute_01 from Party_Organization where party_name = '" + party_name + "'");
                if(list1!=null&&list1.size()!=0){
                    item.put("PARTY_ID",list1.get(0).get("ID"));
                    item.put("PARTY_TYPE",list1.get(0).get("ATTRIBUTE_01"));
                    item.put("SESSION_ID","1");
                    Calendar instance = Calendar.getInstance();
                    instance.setTime(crea_time);
                    instance.add(Calendar.MONTH,-6);
                    item.put("CREA_TIME_DATE",instance.getTime());
                    instance.setTime(crea_time);
                    instance.add(Calendar.MONTH,-4);
                    item.put("CREA_TIME_DATE_TJ",instance.getTime());
                    instance.setTime(crea_time);
                    instance.add(Calendar.MONTH,-2);
                    item.put("CREA_TIME_DATE_TJYB",instance.getTime());
                    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
                    instance.setTime(crea_time);
                    instance.add(Calendar.MONTH,-1);
                    item.put("ATTR1",df.format(instance.getTime()));
                    item.put("ATTR2",df.format(crea_time));
                    item.put("ATTR3",df.format(crea_time));
                    item.put("ZKDYDH",crea_time);
                    //item.put("JWYCH",crea_time);
                    item.put("WYYCH",crea_time);
                }else{
                    System.out.println("--------------------------");
                    System.out.println("党组织名称："+party_name+"时间："+crea_time+"类型："+session_type+"未关联党组织");
                    System.out.println("--------------------------");
                }



            }
        }catch (Exception e){
            System.out.println("--------------------------");
            System.out.println(e.getMessage());
            System.out.println("--------------------------");
        }
    }

    @Override
    public void saveSheetAfter(String sheetName, Map<String, List<Map<String, Object>>> data) {

    }
}
