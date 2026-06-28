package avicit.lc.cadres.leaguecadres.handler;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import avicit.pb.member.partymember.dto.PartyMemberDTO;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.commons.utils.UtilString;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.exception.ExceptionUtil;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.msystem.excel.core.SysExcelImpWithBeanHandle;
import avicit.lc.cadres.leaguecadres.dto.LeagueCadresDTO;
import avicit.lc.organize.leagueorganization.dto.LeagueOrganizationDTO;
import avicit.lc.organize.leagueorganization.service.LeagueOrganizationService;
@Component
public class LeagueCadresDTOExcelImpWithBeanHandle implements SysExcelImpWithBeanHandle<LeagueCadresDTO> {
	
	LeagueOrganizationService leagueOrganizationService = (LeagueOrganizationService)SpringFactory.getBean(LeagueOrganizationService.class);
	/**
	 * 自定义行数据校验
	 * @param data 行数据
	 * @return
	 * @throws DaoException
	 */
	@Override
	public boolean validateRow(LeagueCadresDTO data) throws Exception {
		

		return true;
	}

	/**
	 * 数据插入前处理
	 * @param datas 所有数据
	 *              K:"INSERT", V:插入数据结果集
	 *              K:"UPDATE", V:更新数据结果集
	 * @throws DaoException
	 */
	@Override
	public void saveDataBefore(Map<String, List<LeagueCadresDTO>> datas) throws Exception {
		
		for(String key : datas.keySet()){
			if(StringUtils.equals(key, "insert")){
				List<LeagueCadresDTO> list = datas.get(key);
				for(LeagueCadresDTO leagueCadresDTO : list){
					LeagueOrganizationDTO leagueOrganizationDTO = leagueOrganizationService.queryLeagueOrganizationByPartyCode(leagueCadresDTO.getLeagueId());
					if(leagueOrganizationDTO != null && !StringUtils.isEmpty(leagueOrganizationDTO.getId())){
						leagueCadresDTO.setLeagueId(leagueOrganizationDTO.getId());
					}else{
						throw new DaoException("LeagueOrganizationDTO为空！！！");
					
					}
	
	
				}
				
			}
			if(StringUtils.equals(key, "update")){
				List<LeagueCadresDTO> list = datas.get(key);
				for(LeagueCadresDTO leagueCadresDTO : list){
					LeagueOrganizationDTO leagueOrganizationDTO = leagueOrganizationService.queryLeagueOrganizationByPartyCode(leagueCadresDTO.getLeagueId());
					if(leagueOrganizationDTO != null && !StringUtils.isEmpty(leagueOrganizationDTO.getId())){
						leagueCadresDTO.setLeagueId(leagueOrganizationDTO.getId());
					}else{
						throw new DaoException("LeagueOrganizationDTO为空！！！");
					}
	
				}
			}
		}
	
		
	}

	/**
	 * 数据插入后处理
	 * @param datas 所有数据
	 *              K:"INSERT", V:插入x`数据结果集
	 *              K:"UPDATE", V:更新数据结果集
	 * @throws DaoException
	 */
	@Override
	public void saveDataAfter(Map<String, List<LeagueCadresDTO>> datas) throws Exception {

	}

	
}

