package avicit.pb.milepost.dynfiveof.event;

import avicit.pb.milepost.dynfiveof.dao.DynFiveOfDAO;
import avicit.pb.milepost.dynfiveof.dto.DynFiveOfDTO;
import avicit.pb.milepost.dynfiveof.service.DynFiveOfService;
import avicit.platform6.core.excel.imp.inf.Validate;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.msystem.excel.core.SysExcelImpWithExcelHandle;

import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class DynYouthEvent implements SysExcelImpWithExcelHandle {

    @Override
    public void saveSheetAfter(String arg0, Map<String, List<Map<String, Object>>> arg1) {
        // TODO Auto-generated method stub
        DynFiveOfDAO ser = SpringFactory.getBean(DynFiveOfDAO.class);
        Iterator<Map.Entry<String, List<Map<String, Object>>>> iterator = arg1.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<String, List<Map<String, Object>>> entry = iterator.next();
            List<Map<String, Object>> value = entry.getValue();
            if (value != null) {
                for (int i = 0; i < value.size(); i++) {
                    Map<String, Object> map = value.get(i);
                    Iterator<Map.Entry<String, Object>> iterator1 = map.entrySet().iterator();
                    while (iterator1.hasNext()) {
                        Map.Entry<String, Object> entrys = iterator1.next();
                        String key1 = entrys.getKey();
                        Object value1 = entrys.getValue();
                        if ("ID".equals(key1)) {
                            ser.deleteDynFiveOfById((String) value1);
                        }
                    }
                }
            }
        }

    }

    @Override
    public void saveSheetBefore(String arg0, Map<String, List<Map<String, Object>>> arg1) {
        Iterator<Map.Entry<String, List<Map<String, Object>>>> iterator = arg1.entrySet().iterator();
        DynFiveOfDAO sysApplicationService = SpringFactory.getBean(DynFiveOfDAO.class);
        DynFiveOfService DynFiveOfService = SpringFactory.getBean(DynFiveOfService.class);
        while (iterator.hasNext()) {
            Map.Entry<String, List<Map<String, Object>>> entry = iterator.next();
            String key = entry.getKey();
            List<Map<String, Object>> value = entry.getValue();
            if (value != null) {
                for (int i = 0; i < value.size(); i++) {
                    Map<String, Object> map = value.get(i);
                    Iterator<Map.Entry<String, Object>> iterator1 = map.entrySet().iterator();
                    DynFiveOfDTO dto = new DynFiveOfDTO();
                    while (iterator1.hasNext()) {
                        Map.Entry<String, Object> entrys = iterator1.next();
                        String key1 = entrys.getKey();
                        Object value1 = entrys.getValue();
                        if ("CREATED_BY".equals(key1)) {
                            dto.setCreatedBy((String) value1);
                        }
                        if ("LAST_UPDATED_BY".equals(key1)) {
                            dto.setLastUpdatedBy((String) value1);
                        }
                        if ("CREATION_DATE".equals(key1)) {
                            dto.setCreationDate((Date) value1);
                        }
                        if ("VERSION".equals(key1)) {
                            dto.setVersion((long) value1);
                        }
                        if ("FIVE_NO".equals(key1)) {
                            dto.setFiveNo((String) value1);
                        }
                        if ("FVIE_AGE".equals(key1)) {
                            dto.setFvieAge((String) value1);
                        }
                        if ("FIVE_DATE".equals(key1)) {
                            dto.setFiveDate((Date) value1);
                        }
                        if ("FIVE_PROBLEM".equals(key1)) {
                            dto.setFiveProblem((String) value1);
                        }
                        if ("FIVE_MEASURES".equals(key1)) {
                            dto.setFiveMeasures((String) value1);
                        }
                        if ("FIVE_EFFECT".equals(key1)) {
                            dto.setFiveEffect((String) value1);
                        }
                        if ("FIVE_PROSPECTS".equals(key1)) {
                            dto.setFiveProspects((String) value1);
                        }
                        if ("POSEN_TEL".equals(key1)) {
                            dto.setPosenTel((String) value1);
                        }
                        if ("FIVE_SITUATION".equals(key1)) {
                            dto.setFiveSituation((String) value1);
                        }
                        if ("ATTR1".equals(key1)) {
                            dto.setId((String) value1);
                        }
                        if ("ORG_IDENTITY".equals(key1)) {
                            dto.setOrgIdentity((String) value1);
                        }
                        if ("CREATED_DEPT".equals(key1)) {
                            dto.setCreatedDept((String) value1);
                        }
                        if ("LAST_UPDATE_IP".equals(key1)) {
                            dto.setLastUpdateIp((String) value1);
                        }
                    }
                    try {
                        DynFiveOfDTO dtos = DynFiveOfService.queryDynFiveOfByPrimaryKey(dto.getId());
                        dto.setVersion(dtos.getVersion());
                        int is = sysApplicationService.updateDynFiveOfSensitive(dto);
                    } catch (Exception e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    }
                }
            }
        }
    }

    @Override
    public boolean validateRow(String arg0, Map<String, Object> arg1, long arg2) {
        // TODO Auto-generated method stub
        try {
            Iterator<Map.Entry<String, Object>> iterator = arg1.entrySet().iterator();
            final DynFiveOfService sysApplicationService = SpringFactory.getBean(DynFiveOfService.class);
            while (iterator.hasNext()) {
                Map.Entry<String, Object> entry = iterator.next();
                String key = entry.getKey();
                Object value = entry.getValue();
                if ("ATTR1".equals(key)) {
                    Validate vilidate = new Validate() {
                        @Override
                        public boolean validate(Object arg0) {
                            if (arg0 == null) {
                                return false;
                            }
                            DynFiveOfDTO dto;
                            try {
                                dto = sysApplicationService.queryDynFiveOfByPrimaryKey((String) arg0);
                                if (dto == null) {
                                    return false;
                                }
                            } catch (Exception e) {
                                e.printStackTrace();
                                return false;
                            }

                            return true;
                        }

                        @Override
                        public String getField() {
                            // TODO Auto-generated method stub
                            return "ID";
                        }

                        @Override
                        public String getErrorMag() {
                            // TODO Auto-generated method stub
                            return "id为空或id查询不到";
                        }
                    };
                    if (value == null) {
                        vilidate.getErrorMag();
                        return false;
                    }
                    DynFiveOfDTO dto;
                    try {
                        dto = sysApplicationService.queryDynFiveOfByPrimaryKey((String) value);
                        if (dto == null) {
                            vilidate.getErrorMag();
                            return false;
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                        return false;
                    }


                }

            }

        } catch (Exception ex) {
            return false;
        }
        return true;
    }


}