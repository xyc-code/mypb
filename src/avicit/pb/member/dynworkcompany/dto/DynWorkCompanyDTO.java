package avicit.pb.member.dynworkcompany.dto;

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
 * @创建时间： 2024-05-23 16:42
 * @类说明：DYN_WORK_COMPANYDto
 * @修改记录：
 */
@PojoRemark(table="DYN_WORK_COMPANY", object="DynWorkCompanyDTO", name="DYN_WORK_COMPANY")
public class DynWorkCompanyDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 计划开始时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="PLAN_DATE", field="planDate", name="计划开始时间")
	private java.util.Date planDate;

	/**
	 * 计划开始时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date planDateBegin;

	/**
	 * 计划开始时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date planDateEnd;

	/**
	 * 责任业务科室
	 */
	@FieldRemark(column="RESPONSIBITY_DEPT", field="responsibityDept", name="责任业务科室")
	private String responsibityDept;

	/**
	 * 业务联系人
	 */
	@FieldRemark(column="BUSINESS_CONTACT_PERSON", field="businessContactPerson", name="业务联系人")
	private String businessContactPerson;

	/**
	 * 工作任务
	 */
	@FieldRemark(column="WORK_TASKS", field="workTasks", name="工作任务")
	private String workTasks;

	/**
	 * 下发计划时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="DISTRIBUTE_DATE", field="distributeDate", name="下发计划时间")
	private java.util.Date distributeDate;

	/**
	 * 下发计划时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date distributeDateBegin;

	/**
	 * 下发计划时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date distributeDateEnd;

	/**
	 * 工作要点及要求
	 */
	@FieldRemark(column="WORK_ASK", field="workAsk", name="工作要点及要求")
	private String workAsk;

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
	 * 责任单位
	 */
	@FieldRemark(column="RESPONSIBITY_UNIT", field="responsibityUnit", name="责任单位")
	private String responsibityUnit;

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
	 * 密级
	 */
	@FieldRemark(column="CLASSIFICTION", field="classifiction", name="密级")
	private String classifiction;

	/**
	 * 工作类别
	 */
	@FieldRemark(column="WORK_TYPE", field="workType", name="工作类别")
	private String workType;

	/**
	 * 工作状态
	 */
	@FieldRemark(column="WORK_STATUS", field="workStatus", name="工作状态")
	private String workStatus;

	/**
	 * 党建工作目标
	 */
	@FieldRemark(column="WORK_TARGET", field="workTarget", name="党建工作目标")
	private String workTarget;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private String id;

	/**
	 * 党建工作内容
	 */
	@FieldRemark(column="WORK_CONTENT", field="workContent", name="党建工作内容")
	private String workContent;

	/**
	 * 类别
	 */
	@FieldRemark(column="TYPE", field="type", name="类别")
	private String type;

	/**
	 * 党委工作计划ID
	 */
	@FieldRemark(column="WORK_ID", field="workId", name="党委工作计划ID")
	private String workId;

	/**
	 * 文件密级
	 */
	@FieldRemark(column="FILE_TYPE", field="fileType", name="文件密级")
	private String fileType;

	public java.util.Date getPlanDate(){
		return planDate;
	}

	public void setPlanDate(java.util.Date planDate){
		this.planDate = planDate;
	}

	public java.util.Date getPlanDateBegin(){
		return planDateBegin;
	}

	public void setPlanDateBegin(java.util.Date planDateBegin){
		this.planDateBegin = planDateBegin;
	}

	public java.util.Date getPlanDateEnd(){
		return planDateEnd;
	}

	public void setPlanDateEnd(java.util.Date planDateEnd){
		this.planDateEnd = planDateEnd;
	}

	public String getResponsibityDept(){
		return responsibityDept;
	}

	public void setResponsibityDept(String responsibityDept){
		this.responsibityDept = responsibityDept;
	}

	public String getBusinessContactPerson(){
		return businessContactPerson;
	}

	public void setBusinessContactPerson(String businessContactPerson){
		this.businessContactPerson = businessContactPerson;
	}

	public String getWorkTasks(){
		return workTasks;
	}

	public void setWorkTasks(String workTasks){
		this.workTasks = workTasks;
	}

	public java.util.Date getDistributeDate(){
		return distributeDate;
	}

	public void setDistributeDate(java.util.Date distributeDate){
		this.distributeDate = distributeDate;
	}

	public java.util.Date getDistributeDateBegin(){
		return distributeDateBegin;
	}

	public void setDistributeDateBegin(java.util.Date distributeDateBegin){
		this.distributeDateBegin = distributeDateBegin;
	}

	public java.util.Date getDistributeDateEnd(){
		return distributeDateEnd;
	}

	public void setDistributeDateEnd(java.util.Date distributeDateEnd){
		this.distributeDateEnd = distributeDateEnd;
	}

	public String getWorkAsk(){
		return workAsk;
	}

	public void setWorkAsk(String workAsk){
		this.workAsk = workAsk;
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

	public String getResponsibityUnit(){
		return responsibityUnit;
	}

	public void setResponsibityUnit(String responsibityUnit){
		this.responsibityUnit = responsibityUnit;
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

	public String getClassifiction(){
		return classifiction;
	}

	public void setClassifiction(String classifiction){
		this.classifiction = classifiction;
	}

	public String getWorkType(){
		return workType;
	}

	public void setWorkType(String workType){
		this.workType = workType;
	}

	public String getWorkStatus(){
		return workStatus;
	}

	public void setWorkStatus(String workStatus){
		this.workStatus = workStatus;
	}

	public String getWorkTarget(){
		return workTarget;
	}

	public void setWorkTarget(String workTarget){
		this.workTarget = workTarget;
	}

	public String getId(){
		return id;
	}

	public void setId(String id){
		this.id = id;
	}

	public String getWorkContent(){
		return workContent;
	}

	public void setWorkContent(String workContent){
		this.workContent = workContent;
	}

	public String getType(){
		return type;
	}

	public void setType(String type){
		this.type = type;
	}

	public String getWorkId(){
		return workId;
	}

	public void setWorkId(String workId){
		this.workId = workId;
	}

	public String getFileType(){
		return fileType;
	}

	public void setFileType(String fileType){
		this.fileType = fileType;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_WORK_COMPANY";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_WORK_COMPANY";
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