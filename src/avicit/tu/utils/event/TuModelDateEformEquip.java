package avicit.tu.utils.event;

import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.eform.tutorial.demoequip.service.DemoEquipService;
import avicit.platform6.eformbpms.view.service.TransferColInterface;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TuModelDateEformEquip implements TransferColInterface {

	private static Logger logger =LoggerFactory.getLogger(TuModelDateEformEquip.class);
	//注入业务service
private DemoEquipService service = (DemoEquipService)SpringFactory.getBean("demoEquipService");

@Override
public String transfer(String value) {
	//psuok
	value=value+"psu";
	return value;
	
	//调用业务中的转换方法，将值转为code
		//return service.findCodeByValue(value);
	}
}
			