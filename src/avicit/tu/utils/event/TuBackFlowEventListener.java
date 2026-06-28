package avicit.tu.utils.event;

import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.Response;

import java.io.BufferedReader;
import java.io.Reader;
import java.math.BigDecimal;
import java.sql.Clob;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.antlr.grammar.v3.ANTLRv3Parser.throwsSpec_return;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;

import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.SysDeptAPI;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.SysUserDeptPositionAPI;
import avicit.platform6.api.sysuser.dto.SysUserDeptPosition;
import avicit.platform6.api.sysuser.impl.SysUserDeptPositionAPImpl;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.cmd.ma;
import avicit.platform6.bpm.pvm.internal.cmd.advance.PrecessingInterface;
import avicit.platform6.bpm.pvm.internal.env.Context;
import avicit.platform6.bpm.pvm.internal.env.SpringContext;
import avicit.platform6.bpm.pvm.internal.model.ExecutionImpl;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.exception.ExceptionUtil;
import avicit.platform6.core.rest.client.RestClient;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.eform.EformConstant.ColJdbcTypeEnum;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import avicit.platform6.modules.system.sysapplication.service.SysApplicationService;
import avicit.platform6.modules.system.sysorguser.sysuser.service.SysUserLoader;
import avicit.platform6.msystem.user.service.impl.UserService;

public class TuBackFlowEventListener implements PrecessingInterface, LoaderConstant {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Override
	public void execute(ExecutionImpl execution, Map args) {
		// 流程执行Id
		String executionId = execution.getId();
		// 流程实例Id
		String processInstanceId = execution.getProcessInstanceId();
		// 流程节点名称
		execution.getActivityAlias();
		// 流程定义id
		execution.getProcessDefinitionId();
		//如果大写ID取不到 formId 的值，请将 ID 改写成小写 id
		String formId = (String) execution.getVariable("id");
		//如果需要操作数据库，请通过SpringFactory获得bean，比如：
		SysApplicationService sysApplicationService = SpringFactory.getBean(SysApplicationService.class);

		
		BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
		JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
		PartyMemberService partyMemberService = SpringHelper.getBean(PartyMemberService.class);

		
		List<Map<String, Object>> list = jdbcTemplate.queryForList("select * from DYN_TU_TRANSFER t where t.ID = '"+formId+"'");
		if(list != null && list.size() > 0){
			for(int i=0;i<list.size();i++){

				//流程表
				TableData tableDataUpdate = new TableData();
				tableDataUpdate.setTableName("DYN_TU_TRANSFER");
				tableDataUpdate.setPrimaryKeyValue((String)list.get(i).get("ID"));
				
				//新增
				List<TableColData> list2=new ArrayList<TableColData>();
				
				//姓名
				TableColData tableColDataU1=new TableColData();
				tableColDataU1.setColName("DATA_1");
				tableColDataU1.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
				tableColDataU1.setColValue("N");
				list2.add(tableColDataU1);
				
				tableDataUpdate.setTableColDataList(list2);
				bpmsControlUtils.updateData(tableDataUpdate);	
			}
		
		}

		
		List list3 = sysApplicationService.getAllList();
		logger.info("=======BpmDBListener取得SysApplication个数="+list3.size());
		logger.info("根据上面提供的变量进行业务操作");
	}
	



}
