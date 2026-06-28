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

public class UfmInfoFlowEventListener implements EventListener, LoaderConstant {

	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	PartyMemberService partyMemberService = SpringHelper.getBean(PartyMemberService.class);
	private static final Logger logger = LoggerFactory.getLogger(UfmInfoFlowEventListener.class);

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
		
		//新增
		List<TableColData> list=new ArrayList<TableColData>();
		
		//姓名
		TableColData tableColData1=new TableColData();
		tableColData1.setColName("UFMNAME");
		tableColData1.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData1.setColValue(data.get("UFMNAME"));
		list.add(tableColData1);

		//工号
		TableColData tableColData2=new TableColData();
		tableColData2.setColName("EMPLOYEEID");
		tableColData2.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData2.setColValue(data.get("EMPLOYEEID"));
		list.add(tableColData2);
		
		
		
		//编号
		TableColData tableColData3=new TableColData();
		tableColData3.setColName("NEMBER");
		tableColData3.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData3.setColValue(data.get("NEMBER"));
		list.add(tableColData3);
		
		if(data.get("BIRTHDATE")!=null){
			//出生年月
			TableColData tableColData4=new TableColData();
			tableColData4.setColName("BIRTHDATE");
			tableColData4.setColJdbcType(ColJdbcTypeEnum.DATE);
			tableColData4.setColValue(data.get("BIRTHDATE"));
			list.add(tableColData4);
		}
		
		//性别
		TableColData tableColData5=new TableColData();
		tableColData5.setColName("GENDER");
		tableColData5.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData5.setColValue(data.get("GENDER"));
		list.add(tableColData5);
		//党组织名称
		TableColData tableColData6=new TableColData();
		tableColData6.setColName("PO_NAME");
		tableColData6.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData6.setColValue(data.get("PO_NAME"));
		list.add(tableColData6);
		//部门名称
		TableColData tableColData7=new TableColData();
		tableColData7.setColName("DEPT_NAME");
		tableColData7.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData7.setColValue(data.get("DEPT_NAME"));
		list.add(tableColData7);
		//民族
		TableColData tableColData8=new TableColData();
		tableColData8.setColName("NATION");
		tableColData8.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData8.setColValue(data.get("NATION"));
		list.add(tableColData8);
		//职务
		TableColData tableColData9=new TableColData();
		tableColData9.setColName("DUTIES");
		tableColData9.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData9.setColValue(data.get("DUTIES"));
		list.add(tableColData9);
		//全日制学历
		TableColData tableColData10=new TableColData();
		tableColData10.setColName("FUL_EDUCATION");
		tableColData10.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData10.setColValue(data.get("FUL_EDUCATION"));
		list.add(tableColData10);
		//全日制毕业学校
		TableColData tableColData11=new TableColData();
		tableColData11.setColName("FUL_GRADUATION");
		tableColData11.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData11.setColValue(data.get("FUL_GRADUATION"));
		list.add(tableColData11);
		//全日制专业
		TableColData tableColData12=new TableColData();
		tableColData12.setColName("FUL_SPECIALITY");
		tableColData12.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData12.setColValue(data.get("FUL_SPECIALITY"));
		list.add(tableColData12);
		//非全日制学历
		TableColData tableColData13=new TableColData();
		tableColData13.setColName("PART_EDUCATION");
		tableColData13.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData13.setColValue(data.get("PART_EDUCATION"));
		list.add(tableColData13);
		//职称
		TableColData tableColData14=new TableColData();
		tableColData14.setColName("USER_TITLE");
		tableColData14.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData14.setColValue(data.get("USER_TITLE"));
		list.add(tableColData14);
		//非全日制毕业学校
		TableColData tableColData15=new TableColData();
		tableColData15.setColName("PART_GRADUATION");
		tableColData15.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData15.setColValue(data.get("PART_GRADUATION"));
		list.add(tableColData15);
		//非全日制专业
		TableColData tableColData16=new TableColData();
		tableColData16.setColName("PART_SPECIALITY");
		tableColData16.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData16.setColValue(data.get("PART_SPECIALITY"));
		list.add(tableColData16);
		//政治面貌
		TableColData tableColData17=new TableColData();
		tableColData17.setColName("POLITICAL_OUTLOOK");
		tableColData17.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData17.setColValue(data.get("POLITICAL_OUTLOOK"));
		list.add(tableColData17);
		//统战身份
		TableColData tableColData18=new TableColData();
		tableColData18.setColName("UF_IDENTITY");
		tableColData18.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData18.setColValue(data.get("UF_IDENTITY"));
		list.add(tableColData18);
		//宗教信仰
		TableColData tableColData19=new TableColData();
		tableColData19.setColName("RELIGIOUS_BELIER");
		tableColData19.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData19.setColValue(data.get("RELIGIOUS_BELIER"));
		list.add(tableColData19);
		//居留国家
		TableColData tableColData20=new TableColData();
		tableColData20.setColName("RESIDENCE_COUNTRY");
		tableColData20.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData20.setColValue(data.get("RESIDENCE_COUNTRY"));
		list.add(tableColData20);
		//居留年限
		TableColData tableColData21=new TableColData();
		tableColData21.setColName("RESIDENCE_YEAR");
		tableColData21.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData21.setColValue(data.get("RESIDENCE_YEAR"));
		list.add(tableColData21);
		//居留原因
		TableColData tableColData22=new TableColData();
		tableColData22.setColName("RESIDENCE_REASON");
		tableColData22.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData22.setColValue(data.get("RESIDENCE_REASON"));
		list.add(tableColData22);
		//是否香港、澳门同胞
		TableColData tableColData23=new TableColData();
		tableColData23.setColName("HO_COMPATRIOTS");
		tableColData23.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData23.setColValue(data.get("HO_COMPATRIOTS"));
		list.add(tableColData23);
		//是否香港、澳门眷属
		TableColData tableColData24=new TableColData();
		tableColData24.setColName("HO_DEPENDENTS");
		tableColData24.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData24.setColValue(data.get("HO_DEPENDENTS"));
		list.add(tableColData24);
		//是否台湾同胞
		TableColData tableColData25=new TableColData();
		tableColData25.setColName("TAIWAN_COMPATRIOTS");
		tableColData25.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData25.setColValue(data.get("TAIWAN_COMPATRIOTS"));
		list.add(tableColData25);
		//是否台湾同胞在大陆亲属
		TableColData tableColData26=new TableColData();
		tableColData26.setColName("TAIWAN_RELATIVES");
		tableColData26.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData26.setColValue(data.get("TAIWAN_RELATIVES"));
		list.add(tableColData26);
		//是否华侨、归侨、侨眷
		TableColData tableColData27=new TableColData();
		tableColData27.setColName("RO_CHINESE");
		tableColData27.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData27.setColValue(data.get("RO_CHINESE"));
		list.add(tableColData27);
		//(眷属)侨居国
		TableColData tableColData28=new TableColData();
		tableColData28.setColName("HOST_COUNTRY");
		tableColData28.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData28.setColValue(data.get("HOST_COUNTRY"));
		list.add(tableColData28);
		//在民主党派、人大、政协等任职情况
		TableColData tableColData29=new TableColData();
		tableColData29.setColName("PARTY_REPRE_POSITIONS");
		tableColData29.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColData29.setColValue(data.get("PARTY_REPRE_POSITIONS"));
		list.add(tableColData29);
		//手机号码
		TableColData tableColData30=new TableColData();
		tableColData30.setColName("PHONE_NUMBER");
		tableColData30.setColJdbcType(ColJdbcTypeEnum.DECIMAL);
		tableColData30.setColValue(data.get("PHONE_NUMBER"));
		list.add(tableColData30);
		
		
		//党组织ID或CODE
		TableColData tableColData31=new TableColData();
		tableColData31.setColName("DATA_6");
		tableColData31.setColJdbcType(ColJdbcTypeEnum.DECIMAL);
		tableColData31.setColValue(data.get("DATA_6"));
		list.add(tableColData31);
		
		
		
		//必填
		String mainId=ComUtil.getId();
		TableColData tableColDatamust1=new TableColData();
		tableColDatamust1.setColName("ID");
		tableColDatamust1.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColDatamust1.setColValue(mainId);
		list.add(tableColDatamust1);
		//必填
		TableColData tableColDatamust2=new TableColData();
		tableColDatamust2.setColName("LAST_UPDATE_DATE");
		tableColDatamust2.setColJdbcType(ColJdbcTypeEnum.DATE);
		tableColDatamust2.setColValue(data.get("LAST_UPDATE_DATE"));
		list.add(tableColDatamust2);
		//必填
		TableColData tableColDatamust3=new TableColData();
		tableColDatamust3.setColName("CREATED_DEPT");
		tableColDatamust3.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColDatamust3.setColValue(data.get("CREATED_DEPT"));
		list.add(tableColDatamust3);
		//必填
		TableColData tableColDatamust4=new TableColData();
		tableColDatamust4.setColName("LAST_UPDATE_IP");
		tableColDatamust4.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColDatamust4.setColValue(data.get("LAST_UPDATE_IP"));
		list.add(tableColDatamust4);
		//必填
		TableColData tableColDatamust5=new TableColData();
		tableColDatamust5.setColName("CREATED_BY");
		tableColDatamust5.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColDatamust5.setColValue(data.get("CREATED_BY"));
		list.add(tableColDatamust5);
		//必填
		TableColData tableColDatamust6=new TableColData();
		tableColDatamust6.setColName("LAST_UPDATED_BY");
		tableColDatamust6.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColDatamust6.setColValue(data.get("LAST_UPDATED_BY"));
		list.add(tableColDatamust6);
		//必填
		TableColData tableColDatamust7=new TableColData();
		tableColDatamust7.setColName("CREATION_DATE");
		tableColDatamust7.setColJdbcType(ColJdbcTypeEnum.DATE);
		tableColDatamust7.setColValue(data.get("CREATION_DATE"));
		list.add(tableColDatamust7);
		//必填
		TableColData tableColDatamust8=new TableColData();
		tableColDatamust8.setColName("VERSION");
		tableColDatamust8.setColJdbcType(ColJdbcTypeEnum.DECIMAL);
		tableColDatamust8.setColValue(data.get("VERSION"));
		list.add(tableColDatamust8);
		//必填
		TableColData tableColDatamust9=new TableColData();
		tableColDatamust9.setColName("ORG_IDENTITY");
		tableColDatamust9.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColDatamust9.setColValue(data.get("ORG_IDENTITY"));
		list.add(tableColDatamust9);
		
		
		
		tableDataInsert.setTableColDataList(list);
		bpmsControlUtils.addData(tableDataInsert);
	
		
		//统战信息流程表
		TableData tableDataUpdate = new TableData();
		tableDataUpdate.setTableName("DYN_UFM_INFO_F");
		tableDataUpdate.setPrimaryKeyValue(id);
		
		//新增
		List<TableColData> list2=new ArrayList<TableColData>();
		
		//姓名
		TableColData tableColDataU1=new TableColData();
		tableColDataU1.setColName("DATA_7");
		tableColDataU1.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
		tableColDataU1.setColValue(mainId);
		list2.add(tableColDataU1);
		
		tableDataUpdate.setTableColDataList(list2);
		bpmsControlUtils.updateData(tableDataUpdate);


	}



}
