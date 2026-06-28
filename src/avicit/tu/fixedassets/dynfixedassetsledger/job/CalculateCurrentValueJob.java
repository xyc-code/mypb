package avicit.tu.fixedassets.dynfixedassetsledger.job;

import org.springframework.stereotype.Component;

import avicit.platform6.core.quartz.IBusinessJob;
import avicit.platform6.core.spring.SpringFactory;
import avicit.tu.fixedassets.dynfixedassetsledger.service.DynFixedAssetsLedgerService;

/**
 * 
 * 每月月初定时计算固定资产现值
 *
 */
@Component
public class CalculateCurrentValueJob implements IBusinessJob{

	
	public void calculateCurrentValue(){
		DynFixedAssetsLedgerService service = SpringFactory.getBean(DynFixedAssetsLedgerService.class);
		service.calculateCurrentValue();
	}
	
}
