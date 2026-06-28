
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
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.sysuser.*;
import org.apache.commons.lang3.StringUtils;
import avicit.platform6.eform.service.EformHandlerEvent;
import avicit.platform6.eformbpms.utils.EformCommonUtils;
import java.io.Serializable;
import avicit.test.test3.dto.*;
import avicit.test.test3.service.*;
import avicit.platform6.core.dao.dynamicdatasource.Dbs;
import java.sql.Clob;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.GenericType;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

@Service
public class Test3TestService implements Serializable{
	
	private static Logger logger = LoggerFactory.getLogger(Test3TestService.class);

	private EformHandlerEvent event = null;

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
	private SysOrgAPI sysOrgAPI;

	@Autowired
	private DynTestService dynTestService;

	public DynTestDto queryDynTestByPrimaryKey(String Id)  throws Exception{
		return this.dynTestService.queryDynTestByPrimaryKey(Id);
	}

	public void getDynTestDtoResult(DynTestDto dto,HttpServletRequest request,String langcode){
		if (dto != null){
			
		}
	}
	
	public String doSaveForm(Map tableDataMap,DynTestDto dto,String orgIdentity) throws Exception {
			String msg="";
			Dbs.setDbType("dataSource");

			DynTestDto dtoOld = this.dynTestService.queryDynTestByPrimaryKey(dto.getID());
			Map<String, Object> dtoMap = JsonHelper.getInstance().transformDto(dto, new TypeReference<HashMap<String, Object>>() {});
			//唯一性验证
			Map unique = this.mainTableUnique(dto,msg);
			
		    if (!(Boolean) unique.get("flag")) {
		    	msg = (String) unique.get("msg");
		    	return msg;
		    }
		    //保存前处理
		    this.beforeFunction(dto,dto.getID());
			if (dtoOld != null) {
								this.dynTestService.updateDynTest(dto);
							} else {
								this.dynTestService.insertDynTest(dto);
							}
			//保存后处理
			this.afterFunction(tableDataMap,dto.getID(),orgIdentity);
			Dbs.clear();
		return msg;
	}
	
	public Map mainTableUnique(DynTestDto dto,String msg) throws Exception {
		Map result = new HashMap();
		boolean flag = true;
		Map<String,String> tableDataMap = JsonHelper.getInstance().transformDto(dto,new TypeReference<Map<String,String>>() {});
																																																									
		result.put("flag", flag);
		result.put("msg", msg);
		return result;
	}
		
	private void beforeFunction(DynTestDto dto,String id){
		
	}
	
	private void afterFunction(Map tableDataMap,String id,String orgIdentity){
			
	}

	public EformHandlerEvent instance(String className){
		try{
			if (className != null && !"".equals(className)){
				Class<?> forName = Class.forName(className);
				Object newInstance = forName.newInstance();
				if (newInstance instanceof EformHandlerEvent){
					return (EformHandlerEvent) newInstance;
				}else{
					throw new Exception("【"+className+"】事件类没有实现接口【EformHandlerEvent】");
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
}