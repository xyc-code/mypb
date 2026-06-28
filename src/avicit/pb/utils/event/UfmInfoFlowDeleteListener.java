package avicit.pb.utils.event;

import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.Response;

import java.io.BufferedReader;
import java.io.Reader;
import java.sql.Clob;
import java.util.ArrayList;
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
import avicit.platform6.modules.system.sysorguser.sysuser.service.SysUserLoader;
import avicit.platform6.msystem.user.service.impl.UserService;

public class UfmInfoFlowDeleteListener implements EventListener, LoaderConstant {

	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	PartyMemberService partyMemberService = SpringHelper.getBean(PartyMemberService.class);
	private static final Logger logger = LoggerFactory.getLogger(UfmInfoFlowDeleteListener.class);

	@Override
	public void notify(EventListenerExecution execution) throws Exception {
		String id = (String) execution.getVariable("id");
		TableData tableData = new TableData();
		tableData.setTableName("DYN_UFM_INFO_F");
		tableData.setPrimaryKeyValue(id);
		Map<String, Object> data = bpmsControlUtils.getData(tableData);
		
		//统战信息主表
		TableData tableDataInsert = new TableData();
		tableDataInsert.setTableName("DYN_UFM_INFO");
		tableDataInsert.setPrimaryKeyValue((String)data.get("DATA_7"));
		
		//删除
		List<TableColData> list=new ArrayList<TableColData>();
			
		
	
		
		//必填
		TableColData tableColDatamust10=new TableColData();
		tableColDatamust10.setColName("DATA_8");
		tableColDatamust10.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColDatamust10.setColValue("N");
		list.add(tableColDatamust10);
	
		tableDataInsert.setTableColDataList(list);
		bpmsControlUtils.updateData(tableDataInsert);
	

	}



}
