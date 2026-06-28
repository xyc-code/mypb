package avicit.platform6.core.rest;

import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * @author zhanglei
 */
public class NettyStart {

	public static void main(String[] args) throws Exception {

	    new ClassPathXmlApplicationContext(new String[]{"spring-base.xml"});

	}
	
}
