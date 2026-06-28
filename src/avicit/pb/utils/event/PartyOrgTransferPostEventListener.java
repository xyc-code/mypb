package avicit.pb.utils.event;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;

import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
//获取用户职位写入流程变量
public class PartyOrgTransferPostEventListener implements EventListener, LoaderConstant {

	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	// PartyOrganMemberService partyOrganMemberService =
	// SpringHelper.getBean(PartyOrganMemberService.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	PartyMemberService partyMemberService = SpringHelper.getBean(PartyMemberService.class);
	private static final Logger logger = LoggerFactory.getLogger(PartyOrgTransferEventListener.class);

	@Override
	public void notify(EventListenerExecution execution) throws Exception {
		String formId = (String) execution.getVariable("id");
		String sql = "update DYN_HUANJIE_DYDH set sfjw = '1' where id = '"+formId+"'";
		int update = jdbcTemplate.update(sql);
		if(update==0){
			update = 1;
		}

	}



}