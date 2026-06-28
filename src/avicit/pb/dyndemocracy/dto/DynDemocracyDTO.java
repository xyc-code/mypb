package avicit.pb.dyndemocracy.dto;

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
 * @创建时间： 2023-11-07 16:43
 * @类说明：DYN_DEMOCRACYDto
 * @修改记录：
 */
@PojoRemark(table="DYN_DEMOCRACY", object="DynDemocracyDTO", name="DYN_DEMOCRACY")
public class DynDemocracyDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 召开日期报送
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="DEMOCRACY_DATE", field="democracyDate", name="召开日期报送")
	private java.util.Date democracyDate;
	
	/**
	 * 召开日期报送起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date democracyDateBegin;
	
	/**
	 * 召开日期报送止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date democracyDateEnd;

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
	 * 会后材料报送
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="DEMOCRACY_END_DATE", field="democracyEndDate", name="会后材料报送")
	private java.util.Date democracyEndDate;
	
	/**
	 * 会后材料报送起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date democracyEndDateBegin;
	
	/**
	 * 会后材料报送止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date democracyEndDateEnd;

	/**
	 * 公司领导姓名
	 */
	@FieldRemark(column="LEAD_NAME", field="leadName", name="公司领导姓名")
	private java.lang.String leadName;

	/**
	 * 主管公司领导是否参加
	 */
	@FieldRemark(column="LEAD_JOIN", field="leadJoin", name="主管公司领导是否参加")
	private java.lang.String leadJoin;

	/**
	 * 单位
	 */
	@FieldRemark(column="DEMOCRACY_DEPT", field="democracyDept", name="单位")
	private java.lang.String democracyDept;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

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

	public java.util.Date getDemocracyDate(){
		return democracyDate;
	}

	public void setDemocracyDate(java.util.Date democracyDate){
		this.democracyDate = democracyDate;
	}

	public java.util.Date getDemocracyDateBegin(){
		return democracyDateBegin;
	}

	public void setDemocracyDateBegin(java.util.Date democracyDateBegin){
		this.democracyDateBegin = democracyDateBegin;
	}

	public java.util.Date getDemocracyDateEnd(){
		return democracyDateEnd;
	}

	public void setDemocracyDateEnd(java.util.Date democracyDateEnd){
		this.democracyDateEnd = democracyDateEnd;
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

	public java.util.Date getDemocracyEndDate(){
		return democracyEndDate;
	}

	public void setDemocracyEndDate(java.util.Date democracyEndDate){
		this.democracyEndDate = democracyEndDate;
	}

	public java.util.Date getDemocracyEndDateBegin(){
		return democracyEndDateBegin;
	}

	public void setDemocracyEndDateBegin(java.util.Date democracyEndDateBegin){
		this.democracyEndDateBegin = democracyEndDateBegin;
	}

	public java.util.Date getDemocracyEndDateEnd(){
		return democracyEndDateEnd;
	}

	public void setDemocracyEndDateEnd(java.util.Date democracyEndDateEnd){
		this.democracyEndDateEnd = democracyEndDateEnd;
	}

	public java.lang.String getLeadName(){
		return leadName;
	}

	public void setLeadName(java.lang.String leadName){
		this.leadName = leadName;
	}

	public java.lang.String getLeadJoin(){
		return leadJoin;
	}

	public void setLeadJoin(java.lang.String leadJoin){
		this.leadJoin = leadJoin;
	}

	public java.lang.String getDemocracyDept(){
		return democracyDept;
	}

	public void setDemocracyDept(java.lang.String democracyDept){
		this.democracyDept = democracyDept;
	}

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
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
			return "DYN_DEMOCRACY";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_DEMOCRACY";
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