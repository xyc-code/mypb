package avicit.tu.tuorganmember.handle;

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
import avicit.tu.tuorganmember.dto.TuOrganMemberDTO;
import avicit.tu.tuorganmember.service.TuOrganMemberService;

@Component
public class TuMemberExcelImpWithBeanHandle implements SysExcelImpWithBeanHandle<TuOrganMemberDTO> {
	

	/**
	 * 自定义行数据校验
	 * @param data 行数据
	 * @return
	 * @throws DaoException
	 */
	@Override
	public boolean validateRow(TuOrganMemberDTO data) throws Exception {
		
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
	public void saveDataBefore(Map<String, List<TuOrganMemberDTO>> datas) throws Exception {
		TuOrganMemberService tuOrganMemberService = (TuOrganMemberService)SpringFactory.getBean(TuOrganMemberService.class);
		for(String key : datas.keySet()){
			if(StringUtils.equals(key, "insert")){}
			if(StringUtils.equals(key, "update")){}
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
	public void saveDataAfter(Map<String, List<TuOrganMemberDTO>> datas) throws Exception {

	}

	
}

