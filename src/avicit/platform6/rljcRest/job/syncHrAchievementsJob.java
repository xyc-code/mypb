package avicit.platform6.rljcRest.job;

import org.springframework.stereotype.Component;

import avicit.platform6.core.quartz.IBusinessJob;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.rljcRest.service.DynAchievementsService;

@Component
public class syncHrAchievementsJob implements IBusinessJob{
	
	//同步人力绩效考核信息
	public void syncHrAchievements(){
		DynAchievementsService dynAchievementsService = SpringFactory.getBean(DynAchievementsService.class);
		dynAchievementsService.syncHrAchievementsJob();
	}
	
	
	//同步人力绩效考核信息到入党积极分子子表中（从2024年度开始）
	public void syncHrAchievementsToActivist(){
		DynAchievementsService dynAchievementsService = SpringFactory.getBean(DynAchievementsService.class);
		dynAchievementsService.syncHrAchievementsToActivistJob();
	}
	
}
