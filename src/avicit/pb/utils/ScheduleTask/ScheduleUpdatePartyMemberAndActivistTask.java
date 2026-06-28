package avicit.pb.utils.ScheduleTask;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import avicit.pb.activist.partyactivist.dto.PartyActivistDTO;
import avicit.pb.activist.partyactivist.service.PartyActivistService;
import avicit.pb.member.partymember.dto.PartyMemberDTO;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.platform6.commons.utils.DateUtil;
import avicit.platform6.core.quartz.IBusinessJob;
@Component
public class ScheduleUpdatePartyMemberAndActivistTask implements IBusinessJob{
	
	@Autowired
	PartyMemberService partyMemberService;
	@Autowired
	PartyActivistService partyActivistService;
	
	
	public void task() throws Exception{
		List<PartyMemberDTO> listPartyMember = partyMemberService.searchPartyMember(null, null, null);
		List<PartyActivistDTO> listPartyActivist = partyActivistService.searchPartyActivist(null, null, null);
		for(PartyMemberDTO partyMemberDTO : listPartyMember){
			if(partyMemberDTO.getBirthday() != null){
				String age = getAge(partyMemberDTO.getBirthday());
				if(StringUtils.isNotEmpty(age)){
					partyMemberDTO.setAttribute02(age);
				}
			}
			if(partyMemberDTO.getRegularDate() != null){
				String partyAge = getPartyAge(partyMemberDTO.getRegularDate());
				if(StringUtils.isNotEmpty(partyAge)){
					partyMemberDTO.setAttribute05(partyAge);
				}
			}
			partyMemberService.updatePartyMemberSensitive(partyMemberDTO);
		}
		for(PartyActivistDTO partyActivistDTO : listPartyActivist){
			if(partyActivistDTO.getBirthday() != null){
				String age = getAge(partyActivistDTO.getBirthday());
				if(StringUtils.isNotEmpty(age)){
					partyActivistDTO.setAttribute01(age);
				}
			}
			partyActivistService.updatePartyActivistAll(partyActivistDTO);
		}
		
		
	}
	private String getAge(Date birthDay) throws Exception{
		
		String retDate = "";

		Calendar calendar = Calendar.getInstance();
		
		Date today = DateUtil.getToday();
		
		calendar.setTime(today);
		
		int todayYear = calendar.get(Calendar.YEAR);
		
		int todayMonth = calendar.get(Calendar.MONTH) + 1;
	
		int todayDay = calendar.get(Calendar.DATE);
		
        calendar.setTime(birthDay);
		
		//Date today = DateUtil.getToday();
	
		int birthDayYear = calendar.get(Calendar.YEAR);
	
		int birthDayMonth = calendar.get(Calendar.MONTH) + 1;
		
		int birthDayDay = calendar.get(Calendar.DATE);
		
		if(todayYear >=  birthDayYear){
			
			if(todayMonth - birthDayMonth > 0 ){
				
				retDate = String.valueOf(todayYear - birthDayYear);
				
			}else if(todayMonth - birthDayMonth == 0 ){
				
				if(todayDay - birthDayDay >= 0){
					
					retDate = String.valueOf(todayYear - birthDayYear);
							
				}else{
					retDate =  String.valueOf(todayYear - birthDayYear -1);
				}
				
			}else{
				
				retDate = String.valueOf(todayYear - birthDayYear -1);
			}
		}else{
			
			throw new Exception(birthDayYear + "-" + birthDayMonth + "-" + birthDayDay + ":日期输入错误！！！" );
		}
		return retDate;
}


  private String getPartyAge(Date regularDate) throws Exception{
	
	String retDate = "";

	Calendar calendar = Calendar.getInstance();
	
	Date today = DateUtil.getToday();
	
	calendar.setTime(today);
	
	int todayYear = calendar.get(Calendar.YEAR);
	
	int todayMonth = calendar.get(Calendar.MONTH) + 1;

	int todayDay = calendar.get(Calendar.DATE);
	
    calendar.setTime(regularDate);
	
	//Date today = DateUtil.getToday();

	int regularDayYear = calendar.get(Calendar.YEAR);

	int regularDayMonth = calendar.get(Calendar.MONTH) + 1;
	
	int regularDayDay = calendar.get(Calendar.DATE);
	
	if(todayYear >=  regularDayYear){
		
		if(todayMonth - regularDayMonth > 0 ){
			
			retDate = String.valueOf(todayYear - regularDayYear);
			
		}else if(todayMonth - regularDayMonth == 0 ){
			
			if(todayDay - regularDayDay >= 0){
				
				retDate = String.valueOf(todayYear - regularDayYear);
						
			}else{
				retDate =  String.valueOf(todayYear - regularDayYear -1);
			}
			
		}else{
			
			retDate = String.valueOf(todayYear - regularDayYear -1);
		}
	}else{
		
		throw new Exception(regularDayYear + "-" + regularDayMonth + "-" + regularDayDay + ":日期输入错误！！！" );
	}
	return retDate;
 }
}
