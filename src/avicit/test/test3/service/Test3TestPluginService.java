
package avicit.test.test3.service;

import org.springframework.stereotype.Service;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.sysuser.*;
import org.apache.commons.lang3.StringUtils;
import avicit.platform6.eform.service.EformHandlerEvent;
import java.io.Serializable;
import java.sql.Clob;

import avicit.test.test3.dto.*;
import avicit.test.test3.service.*;

import avicit.platform6.core.dao.dynamicdatasource.Dbs;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

@Service
public class Test3TestPluginService implements Serializable{
	
	private static Logger logger = LoggerFactory.getLogger(Test3TestPluginService.class);
	
	@Autowired
	private SysUserAPI sysUserAPI;

	@Autowired
	private SysDeptAPI sysDeptAPI;

	@Autowired
	private SysGroupAPI sysGroupAPI;

	@Autowired
	private SysRoleAPI sysRoleAPI;

	@Autowired
	private SysPositionAPI sysPositionAPI;

	@Autowired
	private SysLookupAPI lookupApi;
	
		@Autowired
	private DynTestService dynTestService;
	
	public DynTestDto queryDynTestByPrimaryKey(String Id)  throws Exception{
		return this.dynTestService.queryDynTestByPrimaryKey(Id);
	}
		
	//方法集合
	
}