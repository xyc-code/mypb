package avicit.pb.milepost.partymilepost.dto;

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
 * @创建时间： 2022-02-14 08:58
 * @类说明：里程碑计划Dto
 * @修改记录：
 */
@PojoRemark(table="PARTY_MILEPOST", object="PartyMilepostDTO1", name="里程碑计划")
public class PartyMilepostDTO1 extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 联络员
	 */
	@FieldRemark(column="USER_ID", field="userId", name="联络员", dataType="user")
	private java.lang.String userId;
	
	/**
	 * 联络员显示字段
	 */
	private java.lang.String userIdAlias;

	/**
	 * 申请部门
	 */
	@FieldRemark(column="DEPT_ID", field="deptId", name="申请部门", dataType="dept")
	private java.lang.String deptId;
	
	/**
	 * 申请部门显示字段
	 */
	private java.lang.String deptIdAlias;

	/**
	 * 任务状态
	 */
	@FieldRemark(column="TASK_STATUS", field="taskStatus", name="任务状态", dataType="lookup", lookupType="PC_M_COMPLETE_STATUS")
	private java.lang.String taskStatus;
	private java.lang.String taskStatusName;

	/**
	 * 完成情况
	 */
	@FieldRemark(column="TASK_COMPLETION", field="taskCompletion", name="完成情况")
	private java.lang.String taskCompletion;

	/**
	 * 所在党支部
	 */
	@FieldRemark(column="PARTY_ID", field="partyId", name="所在党支部")
	private java.lang.String partyId;
	private java.lang.String partyIdAlias;
	public java.lang.String getPartyIdAlias() {
		return partyIdAlias;
	}

	public void setPartyIdAlias(java.lang.String partyIdAlias) {
		this.partyIdAlias = partyIdAlias;
	}

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
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_01", field="attribute01", name="扩展字段")
	private java.lang.String attribute01;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_02", field="attribute02", name="扩展字段")
	private java.lang.String attribute02;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="扩展字段")
	private java.lang.String attribute03;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_04", field="attribute04", name="扩展字段")
	private java.lang.String attribute04;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_05", field="attribute05", name="扩展字段")
	private java.lang.String attribute05;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_06", field="attribute06", name="扩展字段")
	private java.lang.String attribute06;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_07", field="attribute07", name="扩展字段")
	private java.lang.String attribute07;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_08", field="attribute08", name="扩展字段")
	private java.lang.String attribute08;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_09", field="attribute09", name="扩展字段")
	private java.lang.String attribute09;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_10", field="attribute10", name="扩展字段")
	private java.lang.String attribute10;

	/**
	 * 扩展字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTRIBUTE_11", field="attribute11", name="扩展字段")
	private java.util.Date attribute11;
	
	/**
	 * 扩展字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attribute11Begin;
	
	/**
	 * 扩展字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attribute11End;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_12", field="attribute12", name="扩展字段")
	private java.lang.Long attribute12;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_13", field="attribute13", name="扩展字段")
	private java.lang.String attribute13;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_14", field="attribute14", name="扩展字段")
	private java.lang.String attribute14;

	/**
	 * 扩展字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTRIBUTE_15", field="attribute15", name="扩展字段")
	private java.util.Date attribute15;
	
	/**
	 * 扩展字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attribute15Begin;
	
	/**
	 * 扩展字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attribute15End;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_16", field="attribute16", name="扩展字段")
	private java.lang.String attribute16;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_17", field="attribute17", name="扩展字段")
	private java.lang.String attribute17;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_18", field="attribute18", name="扩展字段")
	private java.lang.String attribute18;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_19", field="attribute19", name="扩展字段")
	private java.lang.String attribute19;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_20", field="attribute20", name="扩展字段")
	private java.lang.String attribute20;

	/**
	 * 主表ID
	 */
	@FieldRemark(column="COMMANDOS_ID", field="commandosId", name="主表ID")
	private java.lang.String commandosId;

	/**
	 * 里程碑计划
	 */
	@FieldRemark(column="MILEPOST_PLAN", field="milepostPlan", name="里程碑计划")
	private java.lang.String milepostPlan;

	/**
	 * 计划完成时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="COMPLETION_DATE", field="completionDate", name="计划完成时间")
	private java.util.Date completionDate;
	
	/**
	 * 计划完成时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date completionDateBegin;
	
	/**
	 * 计划完成时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date completionDateEnd;

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

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}

	public java.lang.String getUserId(){
		return userId;
	}

	public void setUserId(java.lang.String userId){
		this.userId = userId;
	}

	public java.lang.String getUserIdAlias(){
		return userIdAlias;
	}

	public void setUserIdAlias(java.lang.String userIdAlias){
		this.userIdAlias = userIdAlias;
	}

	public java.lang.String getDeptId(){
		return deptId;
	}

	public void setDeptId(java.lang.String deptId){
		this.deptId = deptId;
	}

	public java.lang.String getDeptIdAlias(){
		return deptIdAlias;
	}

	public void setDeptIdAlias(java.lang.String deptIdAlias){
		this.deptIdAlias = deptIdAlias;
	}

    public java.lang.String getTaskStatus(){
		return taskStatus;
	}

	public void setTaskStatus(java.lang.String taskStatus){
		this.taskStatus = taskStatus;
	}

	public java.lang.String getTaskStatusName(){
		return taskStatusName;
	}

	public void setTaskStatusName(java.lang.String taskStatusName){
		this.taskStatusName = taskStatusName;
	}

	public java.lang.String getTaskCompletion(){
		return taskCompletion;
	}

	public void setTaskCompletion(java.lang.String taskCompletion){
		this.taskCompletion = taskCompletion;
	}

	public java.lang.String getPartyId(){
		return partyId;
	}

	public void setPartyId(java.lang.String partyId){
		this.partyId = partyId;
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

	public java.lang.String getAttribute01(){
		return attribute01;
	}

	public void setAttribute01(java.lang.String attribute01){
		this.attribute01 = attribute01;
	}

	public java.lang.String getAttribute02(){
		return attribute02;
	}

	public void setAttribute02(java.lang.String attribute02){
		this.attribute02 = attribute02;
	}

	public java.lang.String getAttribute03(){
		return attribute03;
	}

	public void setAttribute03(java.lang.String attribute03){
		this.attribute03 = attribute03;
	}

	public java.lang.String getAttribute04(){
		return attribute04;
	}

	public void setAttribute04(java.lang.String attribute04){
		this.attribute04 = attribute04;
	}

	public java.lang.String getAttribute05(){
		return attribute05;
	}

	public void setAttribute05(java.lang.String attribute05){
		this.attribute05 = attribute05;
	}

	public java.lang.String getAttribute06(){
		return attribute06;
	}

	public void setAttribute06(java.lang.String attribute06){
		this.attribute06 = attribute06;
	}

	public java.lang.String getAttribute07(){
		return attribute07;
	}

	public void setAttribute07(java.lang.String attribute07){
		this.attribute07 = attribute07;
	}

	public java.lang.String getAttribute08(){
		return attribute08;
	}

	public void setAttribute08(java.lang.String attribute08){
		this.attribute08 = attribute08;
	}

	public java.lang.String getAttribute09(){
		return attribute09;
	}

	public void setAttribute09(java.lang.String attribute09){
		this.attribute09 = attribute09;
	}

	public java.lang.String getAttribute10(){
		return attribute10;
	}

	public void setAttribute10(java.lang.String attribute10){
		this.attribute10 = attribute10;
	}

	public java.util.Date getAttribute11(){
		return attribute11;
	}

	public void setAttribute11(java.util.Date attribute11){
		this.attribute11 = attribute11;
	}

	public java.util.Date getAttribute11Begin(){
		return attribute11Begin;
	}

	public void setAttribute11Begin(java.util.Date attribute11Begin){
		this.attribute11Begin = attribute11Begin;
	}

	public java.util.Date getAttribute11End(){
		return attribute11End;
	}

	public void setAttribute11End(java.util.Date attribute11End){
		this.attribute11End = attribute11End;
	}

	public java.lang.Long getAttribute12(){
		return attribute12;
	}

	public void setAttribute12(java.lang.Long attribute12){
		this.attribute12 = attribute12;
	}

	public java.lang.String getAttribute13(){
		return attribute13;
	}

	public void setAttribute13(java.lang.String attribute13){
		this.attribute13 = attribute13;
	}

	public java.lang.String getAttribute14(){
		return attribute14;
	}

	public void setAttribute14(java.lang.String attribute14){
		this.attribute14 = attribute14;
	}

	public java.util.Date getAttribute15(){
		return attribute15;
	}

	public void setAttribute15(java.util.Date attribute15){
		this.attribute15 = attribute15;
	}

	public java.util.Date getAttribute15Begin(){
		return attribute15Begin;
	}

	public void setAttribute15Begin(java.util.Date attribute15Begin){
		this.attribute15Begin = attribute15Begin;
	}

	public java.util.Date getAttribute15End(){
		return attribute15End;
	}

	public void setAttribute15End(java.util.Date attribute15End){
		this.attribute15End = attribute15End;
	}

	public java.lang.String getAttribute16(){
		return attribute16;
	}

	public void setAttribute16(java.lang.String attribute16){
		this.attribute16 = attribute16;
	}

	public java.lang.String getAttribute17(){
		return attribute17;
	}

	public void setAttribute17(java.lang.String attribute17){
		this.attribute17 = attribute17;
	}

	public java.lang.String getAttribute18(){
		return attribute18;
	}

	public void setAttribute18(java.lang.String attribute18){
		this.attribute18 = attribute18;
	}

	public java.lang.String getAttribute19(){
		return attribute19;
	}

	public void setAttribute19(java.lang.String attribute19){
		this.attribute19 = attribute19;
	}

	public java.lang.String getAttribute20(){
		return attribute20;
	}

	public void setAttribute20(java.lang.String attribute20){
		this.attribute20 = attribute20;
	}

	public java.lang.String getCommandosId(){
		return commandosId;
	}

	public void setCommandosId(java.lang.String commandosId){
		this.commandosId = commandosId;
	}

	public java.lang.String getMilepostPlan(){
		return milepostPlan;
	}

	public void setMilepostPlan(java.lang.String milepostPlan){
		this.milepostPlan = milepostPlan;
	}

	public java.util.Date getCompletionDate(){
		return completionDate;
	}

	public void setCompletionDate(java.util.Date completionDate){
		this.completionDate = completionDate;
	}

	public java.util.Date getCompletionDateBegin(){
		return completionDateBegin;
	}

	public void setCompletionDateBegin(java.util.Date completionDateBegin){
		this.completionDateBegin = completionDateBegin;
	}

	public java.util.Date getCompletionDateEnd(){
		return completionDateEnd;
	}

	public void setCompletionDateEnd(java.util.Date completionDateEnd){
		this.completionDateEnd = completionDateEnd;
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
			return "里程碑计划";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "里程碑计划";
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