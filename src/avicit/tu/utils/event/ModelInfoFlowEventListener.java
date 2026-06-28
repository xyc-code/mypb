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

public class ModelInfoFlowEventListener implements EventListener, LoaderConstant {

	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	PartyMemberService partyMemberService = SpringHelper.getBean(PartyMemberService.class);
	private static final Logger logger = LoggerFactory.getLogger(ModelInfoFlowEventListener.class);

	@Override
	public void notify(EventListenerExecution execution) throws Exception {
		
		String id = (String) execution.getVariable("id"); //402881a7899ae85701899ae986ac02f7
		//劳模流程表数据
		List<Map<String, Object>> list0 = jdbcTemplate.queryForList("select * from dyn_tu_model_worker_f  t where t.id = '"+id+"'");	
		
		String modellevel = list0.get(0).get("MODEL_LEVEL").toString();
		String honorname = list0.get(0).get("HONOR_NAME").toString();
		


		
		//劳模人员表数据
		String memberid= list0.get(0).get("DATA_1").toString();
		List<Map<String, Object>> list = jdbcTemplate.queryForList("select * from dyn_tu_model_worker t where t.id = '"+memberid+"'");
		if(list != null && list.size() > 0){
			for(int i=0;i<list.size();i++){
				
				
				String modelcountry="";
				if(list.get(i).get("MODEL_COUNTRY")!=null){
					modelcountry = list.get(i).get("MODEL_COUNTRY").toString()+"/"+honorname;
				}else{
					modelcountry=honorname;
				}
				String modeleconomize="";
				if(list.get(i).get("MODEL_ECONOMIZE")!=null){
					modeleconomize = list.get(i).get("MODEL_ECONOMIZE").toString()+"/"+honorname;
				}else{
					modeleconomize=honorname;
				}
				String modelcity="";
				if(list.get(i).get("MODEL_CITY")!=null){
					modelcity = list.get(i).get("MODEL_CITY").toString()+"/"+honorname;
				}else{
					modelcity=honorname;
				}
				String modelcompany="";
				if(list.get(i).get("MODEL_COMPANY")!=null){
					modelcompany = list.get(i).get("MODEL_COMPANY").toString()+"/"+honorname;
				}else{
					modelcompany=honorname;
				}
				
				
				
						
					//劳模人员表数据
					TableData tableDataUpdate = new TableData();
					tableDataUpdate.setTableName("DYN_TU_MODEL_WORKER");
					tableDataUpdate.setPrimaryKeyValue(memberid);
					
					//修改
					List<TableColData> list2=new ArrayList<TableColData>();
					
					
					if(modellevel.equals("1")){
						TableColData tableColDataU1=new TableColData();
						tableColDataU1.setColName("MODEL_COUNTRY");
						tableColDataU1.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataU1.setColValue(modelcountry);
						list2.add(tableColDataU1);
					}
					if(modellevel.equals("2")){
						TableColData tableColDataU1=new TableColData();
						tableColDataU1.setColName("MODEL_ECONOMIZE");
						tableColDataU1.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataU1.setColValue(modeleconomize);
						list2.add(tableColDataU1);
					}
					if(modellevel.equals("3")){
						TableColData tableColDataU1=new TableColData();
						tableColDataU1.setColName("MODEL_CITY");
						tableColDataU1.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataU1.setColValue(modelcity);
						list2.add(tableColDataU1);
					}
					if(modellevel.equals("4")){
						TableColData tableColDataU1=new TableColData();
						tableColDataU1.setColName("MODEL_COMPANY");
						tableColDataU1.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataU1.setColValue(modelcompany);
						list2.add(tableColDataU1);
					}
					
					
					
					//记录流程ID
					String data10="";
					if(list0.get(0).get("DATA_10")!=null){
						data10 = list0.get(0).get("DATA_10").toString()+"/"+list.get(i).get("ID").toString();
					}else{
						data10=list.get(i).get("ID").toString();
					}
					TableColData tableColDataU11=new TableColData();
					tableColDataU11.setColName("DATA_10");
					tableColDataU11.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
					tableColDataU11.setColValue(data10);
					list2.add(tableColDataU11);
					
					
					
					tableDataUpdate.setTableColDataList(list2);
					bpmsControlUtils.updateData(tableDataUpdate);		
			
			}
				
		
		}
		 //throw new Exception("停停停停停停停");
		
	}



}
