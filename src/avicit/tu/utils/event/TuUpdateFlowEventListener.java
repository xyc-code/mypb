package avicit.tu.utils.event;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;

import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.eform.EformConstant.ColJdbcTypeEnum;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;

public class TuUpdateFlowEventListener implements EventListener, LoaderConstant {

	private static final long serialVersionUID = 1L;
	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	PartyMemberService partyMemberService = SpringHelper.getBean(PartyMemberService.class);

	@Override
	public void notify(EventListenerExecution execution) throws Exception {

		String id = (String) execution.getVariable("id"); // 402881a7899ae85701899ae986ac02f7
		List<Map<String, Object>> tranList = jdbcTemplate.queryForList("select * from DYN_TU_TRANSFER t where t.id = '" + id + "'");
		List<Map<String, Object>> list = jdbcTemplate.queryForList("select * from DYN_TU_TRANSFER_V t where t.ATTRIBUTE_03 = '" + id + "'");
		String newGhId = tranList.get(0).get("IN_TU_ORG_ID").toString();
		List<Map<String, Object>> ghList = jdbcTemplate.queryForList("select * from DYN_TRADE_UNION_ORGANIZA t where t.id = '" + newGhId + "'");
		if (list != null && list.size() > 0) {
			for (int i = 0; i < list.size(); i++) {
				String tempId = (String) list.get(i).get("ATTRIBUTE_04");
				//20241218 modby wenc 添加同步子表会员信息到工会会员信息表
				List<Map<String, Object>> userList = jdbcTemplate.queryForList("select * from DYN_TRADE_UNION_MB t where t.id = '" + tempId + "'");
				if(userList != null && userList.size() > 0){
					// 会员信息表
					TableData tableDataUpdate = new TableData();
					tableDataUpdate.setTableName("DYN_TRADE_UNION_MB");
					tableDataUpdate.setPrimaryKeyValue(tempId);

					List<TableColData> list2 = new ArrayList<TableColData>();
					//20250307 addby wenc 添加更新工会同时更新用户部门信息
					String userNewDeptId = ghList.get(0).get("ATTRIBUTE_02").toString();
					if(!"".equals(userNewDeptId) && userNewDeptId != null){
						if(userNewDeptId.length() == 32){//关联单部门，多部门情况下暂不处理
							String userOldDeptId = list.get(0).get("DEPT_ID").toString();
							if(!userOldDeptId.equals(userNewDeptId)){
								TableColData tableColDataDeptId = new TableColData();
								tableColDataDeptId.setColName("DEPT_ID");
								tableColDataDeptId.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
								tableColDataDeptId.setColValue(userNewDeptId);
								list2.add(tableColDataDeptId);
							}
						}
					}
					//20250307 endby wenc 添加更新工会同时更新用户部门信息
					// 名称
					TableColData tableColDataU1 = new TableColData();
					tableColDataU1.setColName("TRADE_UNION_ID");
					tableColDataU1.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
					tableColDataU1.setColValue(newGhId);
					list2.add(tableColDataU1);

					// ID
					TableColData tableColDataU11 = new TableColData();
					tableColDataU11.setColName("ATTRIBUTE_03");
					tableColDataU11.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
					tableColDataU11.setColValue((String) tranList.get(0).get("IN_TU_ORG"));
					list2.add(tableColDataU11);

					if (tranList.get(0).get("TRANSFER_TYPE").toString().equals("1")) {
						TableColData tableColDataU111 = new TableColData();
						tableColDataU111.setColName("ATTRIBUTE_04");
						tableColDataU111.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataU111.setColValue("外部转出");
						list2.add(tableColDataU111);
					}
					
					//新增更新：籍贯、民族、文化程度、政治面貌、职务、职称、身份类别、在职/离职、会费金额
					String ogign = list.get(i).get("ORIGN") == null ? "" : list.get(i).get("ORIGN").toString();
					if(!"".equals(ogign)){
						TableColData tableColDataOgign = new TableColData();
						tableColDataOgign.setColName("ORIGN");
						tableColDataOgign.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataOgign.setColValue(ogign);
						list2.add(tableColDataOgign);
					}
					
					String nation = list.get(i).get("NATION") == null ? "" : list.get(i).get("NATION").toString();
					if(!"".equals(nation)){
						TableColData tableColDataNation = new TableColData();
						tableColDataNation.setColName("NATION");
						tableColDataNation.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataNation.setColValue(nation);
						list2.add(tableColDataNation);
					}
					
					String education = list.get(i).get("EDUCATION_LEVEL") == null ? "" : list.get(i).get("EDUCATION_LEVEL").toString();
					if(!"".equals(education)){
						TableColData tableColDataEducation = new TableColData();
						tableColDataEducation.setColName("EDUCATION_LEVEL");
						tableColDataEducation.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataEducation.setColValue(education);
						list2.add(tableColDataEducation);
					}
					
					String political = list.get(i).get("POLITICAL_OUTLOOK") == null ? "" : list.get(i).get("POLITICAL_OUTLOOK").toString();
					if(!"".equals(political)){
						TableColData tableColDataPolitical = new TableColData();
						tableColDataPolitical.setColName("POLITICAL_OUTLOOK");
						tableColDataPolitical.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataPolitical.setColValue(political);
						list2.add(tableColDataPolitical);
					}
					
					String post = list.get(i).get("POST") == null ? "" : list.get(i).get("POST").toString();
					if(!"".equals(post)){
						TableColData tableColDataPost = new TableColData();
						tableColDataPost.setColName("POST");
						tableColDataPost.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataPost.setColValue(post);
						list2.add(tableColDataPost);
					}
					
					String professional = list.get(i).get("PROFESSIONAL_RANK") == null ? "" : list.get(i).get("PROFESSIONAL_RANK").toString();
					if(!"".equals(professional)){
						TableColData tableColDataProfessional = new TableColData();
						tableColDataProfessional.setColName("PROFESSIONAL_RANK");
						tableColDataProfessional.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataProfessional.setColValue(professional);
						list2.add(tableColDataProfessional);
					}
					
					String category = list.get(i).get("CATEGORY") == null ? "" : list.get(i).get("CATEGORY").toString();
					if(!"".equals(category)){
						TableColData tableColDataCategory = new TableColData();
						tableColDataCategory.setColName("CATEGORY");
						tableColDataCategory.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataCategory.setColValue(category);
						list2.add(tableColDataCategory);
					}
					
					String onoff = list.get(i).get("ONOFF_JOB") == null ? "" : list.get(i).get("ONOFF_JOB").toString();
					if(!"".equals(onoff)){
						TableColData tableColDataOnoff = new TableColData();
						tableColDataOnoff.setColName("ONOFF_JOB");
						tableColDataOnoff.setColJdbcType(ColJdbcTypeEnum.VARCHAR);
						tableColDataOnoff.setColValue(onoff);
						list2.add(tableColDataOnoff);
					}
					
					int party = list.get(i).get("PARTY_MONEY") == null ? 0 : Integer.parseInt(list.get(i).get("PARTY_MONEY").toString());
					if(party > 0){
						TableColData tableColDataParty = new TableColData();
						tableColDataParty.setColName("PARTY_MONEY");
						tableColDataParty.setColJdbcType(ColJdbcTypeEnum.DECIMAL);
						tableColDataParty.setColValue(party);
						list2.add(tableColDataParty);
					}
					
					
					tableDataUpdate.setTableColDataList(list2);
					bpmsControlUtils.updateData(tableDataUpdate);
				}
				//20241218 endby wenc 添加同步子表会员信息到工会会员信息表
			}
		}
	}
}
