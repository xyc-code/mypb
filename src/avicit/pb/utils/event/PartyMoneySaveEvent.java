package avicit.pb.utils.event;

import java.util.Map;

import avicit.platform6.eform.service.EformHandlerEvent;

public class PartyMoneySaveEvent implements EformHandlerEvent{
	
	@Override
	public void afterEvent(Map<String, Object> arg0, Map<String, Object> arg1) {
		
		String a = "1";
		String b = "b";
		
		// TODO Auto-generated method stub
		
	}

	@Override
	public void beforeEvent(Map<String, Object> arg0, Map<String, Object> arg1) {
		// TODO Auto-generated method stub
		String a = "1";
		String b = "b";
		System.out.print(a);
		
	}

}
