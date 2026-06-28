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
import avicit.platform6.modules.system.sysorguser.sysuser.service.SysUserLoader;
import avicit.platform6.msystem.user.service.impl.UserService;

public class TuJoinFlowEventListener implements EventListener, LoaderConstant {

	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	PartyMemberService partyMemberService = SpringHelper.getBean(PartyMemberService.class);
	private static final Logger logger = LoggerFactory.getLogger(TuJoinFlowEventListener.class);

	@Override
	public void notify(EventListenerExecution execution) throws Exception {
		
		String id = (String) execution.getVariable("id"); //402881a7899ae85701899ae986ac02f7
		List<Map<String, Object>> list0 = jdbcTemplate.queryForList("select * from DYN_TU_TRANSFER t where t.id = '"+id+"'");
		
		
		
		List<Map<String, Object>> list = jdbcTemplate.queryForList("select * from DYN_TU_TRANSFER_V t where t.ATTRIBUTE_03 = '"+id+"'");
		if(list != null && list.size() > 0){
			for(int i=0;i<list.size();i++){
			

//统战信息主表
TableData tableDataInsert = new TableData();
tableDataInsert.setTableName("DYN_TRADE_UNION_MB");
//新增
List<TableColData> listins=new ArrayList<TableColData>();



//
TableColData tableColData1=new TableColData();
tableColData1.setColName("USER_ID");
tableColData1.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData1.setColValue((String)list.get(i).get("USER_ID"));
listins.add(tableColData1);

//
TableColData tableColData2=new TableColData();
tableColData2.setColName("DEPT_ID");
tableColData2.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData2.setColValue((String)list.get(i).get("DEPT_ID"));
listins.add(tableColData2);

//所在工会ID
TableColData tableColData3=new TableColData();
tableColData3.setColName("TRADE_UNION_ID");
tableColData3.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData3.setColValue((String)list0.get(0).get("IN_TU_ORG_ID"));
listins.add(tableColData3);
//所在工会名称
TableColData tableColData33=new TableColData();
tableColData33.setColName("ATTRIBUTE_03");
tableColData33.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData33.setColValue((String)list0.get(0).get("IN_TU_ORG"));
listins.add(tableColData33);
//
TableColData tableColData4=new TableColData();
tableColData4.setColName("USER_CODE");
tableColData4.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData4.setColValue((String)list.get(i).get("USER_CODE"));
listins.add(tableColData4);
//
TableColData tableColData5=new TableColData();
tableColData5.setColName("IDCARD");
tableColData5.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData5.setColValue((String)list.get(i).get("IDCARD"));
listins.add(tableColData5);
//
if(list.get(i).get("BIRTHDAY")!=null){
	TableColData tableColData6=new TableColData();
	tableColData6.setColName("BIRTHDAY");
	tableColData6.setColJdbcType(ColJdbcTypeEnum.DATE);
	tableColData6.setColValue((Date)list.get(i).get("BIRTHDAY"));
	listins.add(tableColData6);
}
//
if(list.get(i).get("JOIN_PARTY")!=null){
TableColData tableColData7=new TableColData();
tableColData7.setColName("JOIN_PARTY");
tableColData7.setColJdbcType(ColJdbcTypeEnum.DATE);
tableColData7.setColValue((Date)list.get(i).get("JOIN_PARTY"));
listins.add(tableColData7);
}
////
TableColData tableColData8=new TableColData();
tableColData8.setColName("SEX");
tableColData8.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData8.setColValue((String)list.get(i).get("SEX"));
listins.add(tableColData8);
//
TableColData tableColData9=new TableColData();
tableColData9.setColName("NATION");
tableColData9.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData9.setColValue((String)list.get(i).get("NATION"));
listins.add(tableColData9);
//
TableColData tableColData10=new TableColData();
tableColData10.setColName("ORIGN");
tableColData10.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData10.setColValue((String)list.get(i).get("ORIGN"));
listins.add(tableColData10);
//
TableColData tableColData11=new TableColData();
tableColData11.setColName("EDUCATION_LEVEL");
tableColData11.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData11.setColValue((String)list.get(i).get("EDUCATION_LEVEL"));
listins.add(tableColData11);
//
TableColData tableColData12=new TableColData();
tableColData12.setColName("POLITICAL_OUTLOOK");
tableColData12.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData12.setColValue((String)list.get(i).get("POLITICAL_OUTLOOK"));
listins.add(tableColData12);
//
TableColData tableColData13=new TableColData();
tableColData13.setColName("POST");
tableColData13.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData13.setColValue((String)list.get(i).get("POST"));
listins.add(tableColData13);
//
TableColData tableColData14=new TableColData();
tableColData14.setColName("PROFESSIONAL_RANK");
tableColData14.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData14.setColValue((String)list.get(i).get("PROFESSIONAL_RANK"));
listins.add(tableColData14);
//
TableColData tableColData15=new TableColData();
tableColData15.setColName("CATEGORY");
tableColData15.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData15.setColValue((String)list.get(i).get("CATEGORY"));
listins.add(tableColData15);
//
TableColData tableColData16=new TableColData();
tableColData16.setColName("ONOFF_JOB");
tableColData16.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColData16.setColValue((String)list.get(i).get("ONOFF_JOB"));
listins.add(tableColData16);

TableColData tableColData17=new TableColData();
tableColData17.setColName("PARTY_MONEY");
tableColData17.setColJdbcType(ColJdbcTypeEnum.DECIMAL);
tableColData17.setColValue((BigDecimal)list.get(i).get("PARTY_MONEY"));
listins.add(tableColData17);





//必填
String mainId=ComUtil.getId();
TableColData tableColDatamust1=new TableColData();
tableColDatamust1.setColName("ID");
tableColDatamust1.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColDatamust1.setColValue(mainId);
listins.add(tableColDatamust1);
//必填
Date LAST_UPDATE_DATE2=(Date)list.get(i).get("LAST_UPDATE_DATE");
TableColData tableColDatamust2=new TableColData();
tableColDatamust2.setColName("LAST_UPDATE_DATE");
tableColDatamust2.setColJdbcType(ColJdbcTypeEnum.DATE);
tableColDatamust2.setColValue(LAST_UPDATE_DATE2);
listins.add(tableColDatamust2);
//必填
String  CREATED_DEPT2=(String)list.get(i).get("CREATED_DEPT");
TableColData tableColDatamust3=new TableColData();
tableColDatamust3.setColName("CREATED_DEPT");
tableColDatamust3.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColDatamust3.setColValue(CREATED_DEPT2);
listins.add(tableColDatamust3);
//必填
String  LAST_UPDATE_IP2=(String)list.get(i).get("LAST_UPDATE_IP");
TableColData tableColDatamust4=new TableColData();
tableColDatamust4.setColName("LAST_UPDATE_IP");
tableColDatamust4.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColDatamust4.setColValue(LAST_UPDATE_IP2);
listins.add(tableColDatamust4);
//必填
String  CREATED_BY2=(String)list.get(i).get("CREATED_BY");
TableColData tableColDatamust5=new TableColData();
tableColDatamust5.setColName("CREATED_BY");
tableColDatamust5.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColDatamust5.setColValue(CREATED_BY2);
listins.add(tableColDatamust5);
//必填
String  LAST_UPDATED_BY2=(String)list.get(i).get("LAST_UPDATED_BY");
TableColData tableColDatamust6=new TableColData();
tableColDatamust6.setColName("LAST_UPDATED_BY");
tableColDatamust6.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColDatamust6.setColValue(LAST_UPDATED_BY2);
listins.add(tableColDatamust6);
//必填
Date CREATION_DATE2=(Date)list.get(i).get("CREATION_DATE");
TableColData tableColDatamust7=new TableColData();
tableColDatamust7.setColName("CREATION_DATE");
tableColDatamust7.setColJdbcType(ColJdbcTypeEnum.DATE);
tableColDatamust7.setColValue(CREATION_DATE2);
listins.add(tableColDatamust7);
//必填
BigDecimal VERSION2=(BigDecimal)list.get(i).get("VERSION");
TableColData tableColDatamust8=new TableColData();
tableColDatamust8.setColName("VERSION");
tableColDatamust8.setColJdbcType(ColJdbcTypeEnum.DECIMAL);
tableColDatamust8.setColValue(VERSION2);
listins.add(tableColDatamust8);
//必填
String  ORG_IDENTITY2=(String)list.get(i).get("ORG_IDENTITY");
TableColData tableColDatamust9=new TableColData();
tableColDatamust9.setColName("ORG_IDENTITY");
tableColDatamust9.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColDatamust9.setColValue(ORG_IDENTITY2);
listins.add(tableColDatamust9);


tableDataInsert.setTableColDataList(listins);
bpmsControlUtils.addData(tableDataInsert);


//统战信息流程表
TableData tableDataUpdate = new TableData();
tableDataUpdate.setTableName("DYN_TU_TRANSFER_V");
tableDataUpdate.setPrimaryKeyValue((String)list.get(i).get("ID"));

//新增
List<TableColData> list2=new ArrayList<TableColData>();

//姓名
TableColData tableColDataU1=new TableColData();
tableColDataU1.setColName("ATTRIBUTE_04");
tableColDataU1.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
tableColDataU1.setColValue(mainId);
list2.add(tableColDataU1);

tableDataUpdate.setTableColDataList(list2);
bpmsControlUtils.updateData(tableDataUpdate);





			
			
			}
				
		
		}
		 //throw new Exception("停停停停停停停");
		
	}



}
