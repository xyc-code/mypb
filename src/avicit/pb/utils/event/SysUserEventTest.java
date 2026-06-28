package avicit.pb.utils.event;

import avicit.platform6.modules.system.sysorguser.sysuser.domain.SysUser;
import avicit.platform6.modules.system.sysorguser.sysuser.service.SysUserEvent;
import avicit.platform6.core.redisCacheManager.BaseCacheBean;
import avicit.platform6.core.redisCacheManager.BaseCacheMybatisManager;
import com.fasterxml.jackson.core.type.TypeReference;
public class SysUserEventTest implements SysUserEvent {
	//BaseCacheBlank  BaseCacheBlank;
	private BaseCacheMybatisManager baseCacheManager;
	@Override
	public void afterDeleteSysUser(SysUser arg0) {
		// TODO Auto-generated method stub
		System.out.print("2222");
	}	

	@Override
	public void afterInsertSysUser(SysUser arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void afterUpdateSysUser(SysUser arg0) {
		// TODO Auto-generated method stub
		System.out.print("1111");
	}

	@Override
	public void beforeDeleteSysUser(SysUser arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void beforeInsertSysUser(SysUser arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void beforeUpdateSysUser(SysUser arg0) {
		// TODO Auto-generated method stub

	}

}
