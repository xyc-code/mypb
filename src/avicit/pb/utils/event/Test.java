	package avicit.pb.utils.event;

import java.util.Map;

import avicit.platform6.core.domain.BeanBase;
import avicit.platform6.core.redisCacheManager.BaseCacheBean;
import avicit.platform6.core.redisCacheManager.BaseCacheDAO;

public class Test extends BeanBase implements BaseCacheBean,BaseCacheDAO {

	@Override
	public String prefix() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String returnAppId() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<String, ?> returnCacheKey() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String returnId() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String returnValidFlag() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getLogFormName() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getLogTitle() {
		// TODO Auto-generated method stub
		return null;
	}

}
