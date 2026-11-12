package avicit.pb.membernotice;

import avicit.platform6.bpm.api.identity.*;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.core.spring.SpringFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import java.util.*;

public class NoticeActors extends UserSelect {
    @Override
    public Actors getActors(String process, String execution, String activity, String form, String user) {
        List<Map<String, Object>> rows = SpringFactory.getBean(JdbcTemplate.class).queryForList(
                "select u.ID,u.NAME from DYN_DYFSYZ a join SYS_USER u on u.ID=a.SECRETARY_ID where a.ID=?", form);
        NoticeRules.require(rows.size() == 1, "通知接收书记不存在，请核对党组织任职信息");
        Actor actor = new UserActor(); actor.setId(NoticeRules.text(rows.get(0).get("ID")));
        actor.setName(NoticeRules.text(rows.get(0).get("NAME"))); actor.setType("user");
        Actors actors = new Actors(); actors.setId(UUID.randomUUID().toString()); actors.setActorlist(Collections.singletonList(actor));
        return actors;
    }
}
