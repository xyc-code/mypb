package avicit.pb.pojo.partyOrgPojo.wyfgExcel;

import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.msystem.excel.core.SysExcelImpWithExcelHandle;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Map;

public class WyfgExcel implements SysExcelImpWithExcelHandle {
    @Override
    public boolean validateRow(String s, Map<String, Object> map, long l) {
        return true;
    }

    @Override
    public void saveSheetBefore(String s, Map<String, List<Map<String, Object>>> data) {
        List<Map<String, Object>> list = data.get("insert");
        JdbcTemplate bean = SpringFactory.getBean(JdbcTemplate.class);
        for (Map<String, Object> item : list) {
            String party_name = (String) item.get("PARTY_NAME");
            List<Map<String, Object>> list1 = bean.queryForList("select id,attribute_01 from Party_Organization where party_name = '" + party_name + "'");
            if(list1!=null&&list1.size()!=0) {
                item.put("PARTY_ID", list1.get(0).get("ID"));
                item.put("SESSION_ID","0");
            }
        }
    }

    @Override
    public void saveSheetAfter(String s, Map<String, List<Map<String, Object>>> map) {

    }
}
