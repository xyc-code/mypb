package avicit.pb.milepost.dynyouthrecord.dto;

import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import avicit.platform6.core.domain.BeanDTO;
import com.fasterxml.jackson.annotation.JsonFormat;
import avicit.platform6.core.properties.PlatformConstant.LogType;
import avicit.platform6.core.annotation.log.LogField;
import avicit.platform6.core.annotation.log.FieldRemark;
import avicit.platform6.core.annotation.log.PojoRemark;
import org.hibernate.validator.constraints.NotBlank;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-12 15:04
 * @类说明：DYN_YOUTH_RECORDDto
 * @修改记录：
 */
@PojoRemark(table="DYN_YOUTH_RECORD", object="DynYouthRecordDTO", name="DYN_YOUTH_RECORD")
public class DynYouthRecordDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 主题
	 */
	@FieldRemark(column="COMMANDOES_THEME", field="commandoesTheme", name="主题")
	private java.lang.String commandoesTheme;

	/**
	 * 突击队类型
	 */
	@FieldRemark(column="COMMANDOES_TYPE", field="commandoesType", name="突击队类型")
	private java.lang.String commandoesType;

	/**
	 * 突击队队长
	 */
	@FieldRemark(column="COMMANDOES_CAPTAINS", field="commandoesCaptains", name="突击队队长")
	private java.lang.String commandoesCaptains;

	/**
	 * 成立时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="COMMANDOES_DATE", field="commandoesDate", name="成立时间")
	private java.util.Date commandoesDate;
	
	/**
	 * 成立时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date commandoesDateBegin;
	
	/**
	 * 成立时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date commandoesDateEnd;

	/**
	 * LAST_UPDATE_DATE起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date lastUpdateDateBegin;
	
	/**
	 * LAST_UPDATE_DATE止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date lastUpdateDateEnd;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR9", field="attr9", name="预留字段")
	private java.lang.String attr9;

	/**
	 * 计划完成任务时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="COMMANDOES_TASK_DATE", field="commandoesTaskDate", name="计划完成任务时间")
	private java.util.Date commandoesTaskDate;
	
	/**
	 * 计划完成任务时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date commandoesTaskDateBegin;
	
	/**
	 * 计划完成任务时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date commandoesTaskDateEnd;

	/**
	 * 突击队队员负责任务
	 */
	@FieldRemark(column="COMMANDOES_TEAM_TASK", field="commandoesTeamTask", name="突击队队员负责任务")
	private java.lang.String commandoesTeamTask;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR4", field="attr4", name="预留字段")
	private java.lang.String attr4;

	/**
	 * 申请单位
	 */
	@FieldRemark(column="APPLICATION_UNIT", field="applicationUnit", name="申请单位")
	private java.lang.String applicationUnit;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR3", field="attr3", name="预留字段")
	private java.lang.String attr3;

	/**
	 * 突击队名称
	 */
	@FieldRemark(column="COMMANDOES_NAME", field="commandoesName", name="突击队名称")
	private java.lang.String commandoesName;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR2", field="attr2", name="预留字段")
	private java.lang.String attr2;

	/**
	 * 申请人
	 */
	@FieldRemark(column="ATTR1", field="attr1", name="申请人")
	private java.lang.String attr1;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR8", field="attr8", name="预留字段")
	private java.lang.String attr8;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR7", field="attr7", name="预留字段")
	private java.lang.String attr7;

	/**
	 * 预留字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTR20", field="attr20", name="预留字段")
	private java.util.Date attr20;
	
	/**
	 * 预留字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr20Begin;
	
	/**
	 * 预留字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr20End;

	/**
	 * 突击队队员单位
	 */
	@FieldRemark(column="COMMANDOES_TEAM_DEPT", field="commandoesTeamDept", name="突击队队员单位")
	private java.lang.String commandoesTeamDept;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR6", field="attr6", name="预留字段")
	private java.lang.String attr6;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR5", field="attr5", name="预留字段")
	private java.lang.String attr5;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR12", field="attr12", name="预留字段")
	private java.lang.String attr12;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR13", field="attr13", name="预留字段")
	private java.lang.String attr13;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR10", field="attr10", name="预留字段")
	private java.lang.String attr10;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR11", field="attr11", name="预留字段")
	private java.lang.String attr11;

	/**
	 * 预留字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTR16", field="attr16", name="预留字段")
	private java.util.Date attr16;
	
	/**
	 * 预留字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr16Begin;
	
	/**
	 * 预留字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr16End;

	/**
	 * 预留字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTR17", field="attr17", name="预留字段")
	private java.util.Date attr17;
	
	/**
	 * 预留字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr17Begin;
	
	/**
	 * 预留字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr17End;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR14", field="attr14", name="预留字段")
	private java.lang.String attr14;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR15", field="attr15", name="预留字段")
	private java.lang.String attr15;

	/**
	 * CREATION_DATE起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date creationDateBegin;
	
	/**
	 * CREATION_DATE止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date creationDateEnd;

	/**
	 * 预留字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTR18", field="attr18", name="预留字段")
	private java.util.Date attr18;
	
	/**
	 * 预留字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr18Begin;
	
	/**
	 * 预留字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr18End;

	/**
	 * 预留字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTR19", field="attr19", name="预留字段")
	private java.util.Date attr19;
	
	/**
	 * 预留字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr19Begin;
	
	/**
	 * 预留字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr19End;

	/**
	 * 突击队队员
	 */
	@FieldRemark(column="COMMANDOES_TEAM_NAME", field="commandoesTeamName", name="突击队队员")
	private java.lang.String commandoesTeamName;

	/**
	 * 队员人数
	 */
	@FieldRemark(column="COMMANDOES_TEAM_COUNT", field="commandoesTeamCount", name="队员人数")
	private java.lang.String commandoesTeamCount;

	/**
	 * 突击队队员年龄
	 */
	@FieldRemark(column="COMMANDOES_TEAM_AGE", field="commandoesTeamAge", name="突击队队员年龄")
	private java.lang.String commandoesTeamAge;

	/**
	 * 申请编号
	 */
	@FieldRemark(column="APPLICATION_NUMBER", field="applicationNumber", name="申请编号")
	private java.lang.String applicationNumber;

	/**
	 * 预期收益
	 */
	@FieldRemark(column="EXPECTED_INCOME", field="expectedIncome", name="预期收益")
	private java.lang.String expectedIncome;

	/**
	 * 节点名称(节点中文名称)
	 */
	private java.lang.String activityalias_;
	/**
	 * 节点标识(当前节点id)
	 */
	private java.lang.String activityname_;
	/**
	 * 流程当前状态(流程当前状态)
	 */
	private java.lang.String businessstate_;
	/**
	 * 流程当前处理人
	 */
	private java.lang.String assigneenames_;
	/**
	 * 当前登录人ID(当前登录人ID)
	 */
	private java.lang.String currUserId;
	/**
	 * 流程范围
	 */
	private java.lang.String bpmType;
	/**
	 * 流程状态
	 */
    private java.lang.String bpmState;

	public java.lang.String getCommandoesTheme(){
		return commandoesTheme;
	}

	public void setCommandoesTheme(java.lang.String commandoesTheme){
		this.commandoesTheme = commandoesTheme;
	}

	public java.lang.String getCommandoesType(){
		return commandoesType;
	}

	public void setCommandoesType(java.lang.String commandoesType){
		this.commandoesType = commandoesType;
	}

	public java.lang.String getCommandoesCaptains(){
		return commandoesCaptains;
	}

	public void setCommandoesCaptains(java.lang.String commandoesCaptains){
		this.commandoesCaptains = commandoesCaptains;
	}

	public java.util.Date getCommandoesDate(){
		return commandoesDate;
	}

	public void setCommandoesDate(java.util.Date commandoesDate){
		this.commandoesDate = commandoesDate;
	}

	public java.util.Date getCommandoesDateBegin(){
		return commandoesDateBegin;
	}

	public void setCommandoesDateBegin(java.util.Date commandoesDateBegin){
		this.commandoesDateBegin = commandoesDateBegin;
	}

	public java.util.Date getCommandoesDateEnd(){
		return commandoesDateEnd;
	}

	public void setCommandoesDateEnd(java.util.Date commandoesDateEnd){
		this.commandoesDateEnd = commandoesDateEnd;
	}

	public java.util.Date getLastUpdateDateBegin(){
		return lastUpdateDateBegin;
	}

	public void setLastUpdateDateBegin(java.util.Date lastUpdateDateBegin){
		this.lastUpdateDateBegin = lastUpdateDateBegin;
	}

	public java.util.Date getLastUpdateDateEnd(){
		return lastUpdateDateEnd;
	}

	public void setLastUpdateDateEnd(java.util.Date lastUpdateDateEnd){
		this.lastUpdateDateEnd = lastUpdateDateEnd;
	}

	public java.lang.String getAttr9(){
		return attr9;
	}

	public void setAttr9(java.lang.String attr9){
		this.attr9 = attr9;
	}

	public java.util.Date getCommandoesTaskDate(){
		return commandoesTaskDate;
	}

	public void setCommandoesTaskDate(java.util.Date commandoesTaskDate){
		this.commandoesTaskDate = commandoesTaskDate;
	}

	public java.util.Date getCommandoesTaskDateBegin(){
		return commandoesTaskDateBegin;
	}

	public void setCommandoesTaskDateBegin(java.util.Date commandoesTaskDateBegin){
		this.commandoesTaskDateBegin = commandoesTaskDateBegin;
	}

	public java.util.Date getCommandoesTaskDateEnd(){
		return commandoesTaskDateEnd;
	}

	public void setCommandoesTaskDateEnd(java.util.Date commandoesTaskDateEnd){
		this.commandoesTaskDateEnd = commandoesTaskDateEnd;
	}

	public java.lang.String getCommandoesTeamTask(){
		return commandoesTeamTask;
	}

	public void setCommandoesTeamTask(java.lang.String commandoesTeamTask){
		this.commandoesTeamTask = commandoesTeamTask;
	}

	public java.lang.String getAttr4(){
		return attr4;
	}

	public void setAttr4(java.lang.String attr4){
		this.attr4 = attr4;
	}

	public java.lang.String getApplicationUnit(){
		return applicationUnit;
	}

	public void setApplicationUnit(java.lang.String applicationUnit){
		this.applicationUnit = applicationUnit;
	}

	public java.lang.String getAttr3(){
		return attr3;
	}

	public void setAttr3(java.lang.String attr3){
		this.attr3 = attr3;
	}

	public java.lang.String getCommandoesName(){
		return commandoesName;
	}

	public void setCommandoesName(java.lang.String commandoesName){
		this.commandoesName = commandoesName;
	}

	public java.lang.String getAttr2(){
		return attr2;
	}

	public void setAttr2(java.lang.String attr2){
		this.attr2 = attr2;
	}

	public java.lang.String getAttr1(){
		return attr1;
	}

	public void setAttr1(java.lang.String attr1){
		this.attr1 = attr1;
	}

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}

	public java.lang.String getAttr8(){
		return attr8;
	}

	public void setAttr8(java.lang.String attr8){
		this.attr8 = attr8;
	}

	public java.lang.String getAttr7(){
		return attr7;
	}

	public void setAttr7(java.lang.String attr7){
		this.attr7 = attr7;
	}

	public java.util.Date getAttr20(){
		return attr20;
	}

	public void setAttr20(java.util.Date attr20){
		this.attr20 = attr20;
	}

	public java.util.Date getAttr20Begin(){
		return attr20Begin;
	}

	public void setAttr20Begin(java.util.Date attr20Begin){
		this.attr20Begin = attr20Begin;
	}

	public java.util.Date getAttr20End(){
		return attr20End;
	}

	public void setAttr20End(java.util.Date attr20End){
		this.attr20End = attr20End;
	}

	public java.lang.String getCommandoesTeamDept(){
		return commandoesTeamDept;
	}

	public void setCommandoesTeamDept(java.lang.String commandoesTeamDept){
		this.commandoesTeamDept = commandoesTeamDept;
	}

	public java.lang.String getAttr6(){
		return attr6;
	}

	public void setAttr6(java.lang.String attr6){
		this.attr6 = attr6;
	}

	public java.lang.String getAttr5(){
		return attr5;
	}

	public void setAttr5(java.lang.String attr5){
		this.attr5 = attr5;
	}

	public java.lang.String getAttr12(){
		return attr12;
	}

	public void setAttr12(java.lang.String attr12){
		this.attr12 = attr12;
	}

	public java.lang.String getAttr13(){
		return attr13;
	}

	public void setAttr13(java.lang.String attr13){
		this.attr13 = attr13;
	}

	public java.lang.String getAttr10(){
		return attr10;
	}

	public void setAttr10(java.lang.String attr10){
		this.attr10 = attr10;
	}

	public java.lang.String getAttr11(){
		return attr11;
	}

	public void setAttr11(java.lang.String attr11){
		this.attr11 = attr11;
	}

	public java.util.Date getAttr16(){
		return attr16;
	}

	public void setAttr16(java.util.Date attr16){
		this.attr16 = attr16;
	}

	public java.util.Date getAttr16Begin(){
		return attr16Begin;
	}

	public void setAttr16Begin(java.util.Date attr16Begin){
		this.attr16Begin = attr16Begin;
	}

	public java.util.Date getAttr16End(){
		return attr16End;
	}

	public void setAttr16End(java.util.Date attr16End){
		this.attr16End = attr16End;
	}

	public java.util.Date getAttr17(){
		return attr17;
	}

	public void setAttr17(java.util.Date attr17){
		this.attr17 = attr17;
	}

	public java.util.Date getAttr17Begin(){
		return attr17Begin;
	}

	public void setAttr17Begin(java.util.Date attr17Begin){
		this.attr17Begin = attr17Begin;
	}

	public java.util.Date getAttr17End(){
		return attr17End;
	}

	public void setAttr17End(java.util.Date attr17End){
		this.attr17End = attr17End;
	}

	public java.lang.String getAttr14(){
		return attr14;
	}

	public void setAttr14(java.lang.String attr14){
		this.attr14 = attr14;
	}

	public java.lang.String getAttr15(){
		return attr15;
	}

	public void setAttr15(java.lang.String attr15){
		this.attr15 = attr15;
	}

	public java.util.Date getCreationDateBegin(){
		return creationDateBegin;
	}

	public void setCreationDateBegin(java.util.Date creationDateBegin){
		this.creationDateBegin = creationDateBegin;
	}

	public java.util.Date getCreationDateEnd(){
		return creationDateEnd;
	}

	public void setCreationDateEnd(java.util.Date creationDateEnd){
		this.creationDateEnd = creationDateEnd;
	}

	public java.util.Date getAttr18(){
		return attr18;
	}

	public void setAttr18(java.util.Date attr18){
		this.attr18 = attr18;
	}

	public java.util.Date getAttr18Begin(){
		return attr18Begin;
	}

	public void setAttr18Begin(java.util.Date attr18Begin){
		this.attr18Begin = attr18Begin;
	}

	public java.util.Date getAttr18End(){
		return attr18End;
	}

	public void setAttr18End(java.util.Date attr18End){
		this.attr18End = attr18End;
	}

	public java.util.Date getAttr19(){
		return attr19;
	}

	public void setAttr19(java.util.Date attr19){
		this.attr19 = attr19;
	}

	public java.util.Date getAttr19Begin(){
		return attr19Begin;
	}

	public void setAttr19Begin(java.util.Date attr19Begin){
		this.attr19Begin = attr19Begin;
	}

	public java.util.Date getAttr19End(){
		return attr19End;
	}

	public void setAttr19End(java.util.Date attr19End){
		this.attr19End = attr19End;
	}

	public java.lang.String getCommandoesTeamName(){
		return commandoesTeamName;
	}

	public void setCommandoesTeamName(java.lang.String commandoesTeamName){
		this.commandoesTeamName = commandoesTeamName;
	}

	public java.lang.String getCommandoesTeamCount(){
		return commandoesTeamCount;
	}

	public void setCommandoesTeamCount(java.lang.String commandoesTeamCount){
		this.commandoesTeamCount = commandoesTeamCount;
	}

	public java.lang.String getCommandoesTeamAge(){
		return commandoesTeamAge;
	}

	public void setCommandoesTeamAge(java.lang.String commandoesTeamAge){
		this.commandoesTeamAge = commandoesTeamAge;
	}

	public java.lang.String getApplicationNumber(){
		return applicationNumber;
	}

	public void setApplicationNumber(java.lang.String applicationNumber){
		this.applicationNumber = applicationNumber;
	}

	public java.lang.String getExpectedIncome(){
		return expectedIncome;
	}

	public void setExpectedIncome(java.lang.String expectedIncome){
		this.expectedIncome = expectedIncome;
	}

	public java.lang.String getActivityalias_() {
		return activityalias_;
	}

	public void setActivityalias_(java.lang.String activityalias_) {
		this.activityalias_ = activityalias_;
	}

	public java.lang.String getActivityname_() {
		return activityname_;
	}

	public void setActivityname_(java.lang.String activityname_) {
		this.activityname_ = activityname_;
	}

	public java.lang.String getBusinessstate_() {
		return businessstate_;
	}

	public void setBusinessstate_(java.lang.String businessstate_) {
		this.businessstate_ = businessstate_;
	}

	public String getAssigneenames_() {
		return assigneenames_;
	}

	public void setAssigneenames_(String assigneenames_) {
		this.assigneenames_ = assigneenames_;
	}

	public java.lang.String getCurrUserId() {
		return currUserId;
	}

	public void setCurrUserId(java.lang.String currUserId) {
		this.currUserId = currUserId;
	}

	public java.lang.String getBpmType() {
		return bpmType;
	}

	public void setBpmType(java.lang.String bpmType) {
		this.bpmType = bpmType;
	}

	public java.lang.String getBpmState() {
		return bpmState;
	}

	public void setBpmState(java.lang.String bpmState) {
		this.bpmState = bpmState;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_YOUTH_RECORD";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_YOUTH_RECORD";
		}else{
			return super.logTitle;
		}
	}

	@Override
	public LogType getLogType() {
		if (super.logType == null || "".equals(super.logType)) {
			return LogType.module_operate;
		} else {
			return super.logType;
		}
	}
}