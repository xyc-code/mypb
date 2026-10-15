package avicit.pb.assessment.dao;

import java.util.List;
import avicit.platform6.core.mybatis.MyBatisRepository;

@MyBatisRepository
public interface TradeUnionAssessmentSourceDAO {
    List<String> findOrgIdentities();
}
