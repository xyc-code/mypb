package avicit.pb.dyxfg;


import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eform.service.EformHandlerEvent;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.Map;

/**
 * 先锋岗统计子表删除后置事件，更新先锋岗申请子表数据状态
 *
 */
public class XfgSqSubDeleteEvent implements EformHandlerEvent {
    /**
     * 前置事件
     * @param oldEntity 原数据（添加操作时为null）
     * @param newEntity 新数据（删除操作时为null）
     */
    @Override
    public void beforeEvent(Map oldEntity, Map newEntity) {
       // String code = (String)newEntity.get("CODE");
       // if (code.startsWith("undefined")){
          //  throw new RuntimeException("编码不能以undefined开头");
      //  }
    }

    /**
     * 后置事件
     * @param oldEntity 原数据（添加操作时为null）
     * @param newEntity 新数据（删除操作时为null）
     */
    @Override
    public void afterEvent(Map oldEntity, Map newEntity) {
        String id = (String)oldEntity.get("SFGSQ_ID");//先锋岗申请子表主键id
        try {
            JdbcTemplate jdbcTemplate=SpringMVCFactory.getBean(JdbcTemplate.class);
            jdbcTemplate.execute("update DYN_XFG_CHIRD t set t.attr5='撤销'  where t.id='"+id+"'");

            //service.deleteDemoEquipById(id);
        }catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("删除出错请检查");
        }
    }
}
