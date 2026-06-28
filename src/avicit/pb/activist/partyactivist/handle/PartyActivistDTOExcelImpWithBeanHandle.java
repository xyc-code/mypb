package avicit.pb.activist.partyactivist.handle;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import avicit.pb.member.partymember.dto.PartyMemberDTO;
import avicit.pb.activist.partyactivist.dto.*;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.commons.utils.UtilString;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.exception.ExceptionUtil;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.msystem.excel.core.SysExcelImpWithBeanHandle;

@Component
public class PartyActivistDTOExcelImpWithBeanHandle implements SysExcelImpWithBeanHandle<PartyActivistDTO> {
	

	/**
	 * 自定义行数据校验
	 * @param data 行数据
	 * @return
	 * @throws DaoException
	 */
	@Override
	public boolean validateRow(PartyActivistDTO data) throws Exception {
		
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
	public void saveDataBefore(Map<String, List<PartyActivistDTO>> datas) throws Exception {
		PartyOrganizationService partyOrganizationService = (PartyOrganizationService)SpringFactory.getBean(PartyOrganizationService.class);
		for(String key : datas.keySet()){
			if(StringUtils.equals(key, "insert")){
				List<PartyActivistDTO> list = datas.get(key);
				for(PartyActivistDTO partyActivistDTO : list){
					PartyOrganizationDTO partyOrganizationDTO = partyOrganizationService.queryPartyOrganizationByPartyCode(partyActivistDTO.getPartyId());
					if(partyOrganizationDTO != null && !StringUtils.isEmpty(partyOrganizationDTO.getId())){
						partyActivistDTO.setPartyId(partyOrganizationDTO.getId());
					}else{
						throw new DaoException("partyOrganizationDTO为空！！！");
					
					}
	
	
				}
				
			}
			if(StringUtils.equals(key, "update")){
				List<PartyActivistDTO> list = datas.get(key);
				for(PartyActivistDTO partyActivistDTO : list){
					PartyOrganizationDTO partyOrganizationDTO = partyOrganizationService.queryPartyOrganizationByPartyCode(partyActivistDTO.getPartyId());
					if(partyOrganizationDTO != null && !StringUtils.isEmpty(partyOrganizationDTO.getId())){
						partyActivistDTO.setPartyId(partyOrganizationDTO.getId());
					}else{
						throw new DaoException("partyOrganizationDTO为空！！！");
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
	public void saveDataAfter(Map<String, List<PartyActivistDTO>> datas) throws Exception {

	}

	
}

