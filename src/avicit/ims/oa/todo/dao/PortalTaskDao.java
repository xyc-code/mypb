package avicit.ims.oa.todo.dao;

import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.platform6.core.mybatis.pagehelper.Page;
import org.apache.ibatis.annotations.Param;

import java.util.Map;
@MyBatisRepository
public interface PortalTaskDao {
    public Page<Map<String,Object>> searchPortalTaskByPage(
            @Param("userId") String userId,@Param("taskType") String taskType,
            @Param("startTime") String startTime,@Param("endTime") String endTime,
            @Param("title") String title
            );

    public String getReceiveDealDate(@Param("id") String id);
}
