package avicit.pb.member.dynworkplan.dto;

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
 * @类说明：DYN_WORK_PLANDto
 * @修改记录：
 */
@PojoRemark(table="DYN_WORK_PLAN", object="DynWorkPlanDTO", name="DYN_WORK_PLAN")
public class DynWorkPlanDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 工作名称
	 */
	@FieldRemark(column="WORK_NAME", field="workName", name="工作名称")
	private String workName;

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
	 * 负责部门
	 */
	@FieldRemark(column="RESPONSIBLE_DEPA", field="responsibleDepa", name="负责部门")
	private String responsibleDepa;

	/**
	 * 状态
	 */
	@FieldRemark(column="STATUS", field="status", name="状态")
	private String status;

	/**
	 * 季度
	 */
	@FieldRemark(column="QUARTER", field="quarter", name="季度")
	private String quarter;

	/**
	 * 负责部门ID
	 */
	@FieldRemark(column="RESPONSIBLE_DEPA_ID", field="responsibleDepaId", name="负责部门ID")
	private String responsibleDepaId;

	/**
	 * 党委工作计划
	 */
	@FieldRemark(column="PARTY_COMMITTEE_WORK_PLAN", field="partyCommitteeWorkPlan", name="党委工作计划")
	private String partyCommitteeWorkPlan;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private String id;

	/**
	 * 公司计划ID
	 */
	@FieldRemark(column="COMPANY_ID", field="companyId", name="公司计划ID")
	private String companyId;

	/**
	 * 文件密级
	 */
	@FieldRemark(column="FILE_TYPE", field="fileType", name="文件密级")
	private String fileType;

	/**
	 * 计划结束时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="PLAN_DATE", field="planDate", name="计划结束时间")
	private java.util.Date planDate;

	/**
	 * 计划结束时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date planDateBegin;

	/**
	 * 计划结束时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date planDateEnd;

	public String getWorkName(){
		return workName;
	}

	public void setWorkName(String workName){
		this.workName = workName;
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

	public String getResponsibleDepa(){
		return responsibleDepa;
	}

	public void setResponsibleDepa(String responsibleDepa){
		this.responsibleDepa = responsibleDepa;
	}

	public String getStatus(){
		return status;
	}

	public void setStatus(String status){
		this.status = status;
	}

	public String getQuarter(){
		return quarter;
	}

	public void setQuarter(String quarter){
		this.quarter = quarter;
	}

	public String getResponsibleDepaId(){
		return responsibleDepaId;
	}

	public void setResponsibleDepaId(String responsibleDepaId){
		this.responsibleDepaId = responsibleDepaId;
	}

	public String getPartyCommitteeWorkPlan(){
		return partyCommitteeWorkPlan;
	}

	public void setPartyCommitteeWorkPlan(String partyCommitteeWorkPlan){
		this.partyCommitteeWorkPlan = partyCommitteeWorkPlan;
	}

	public String getId(){
		return id;
	}

	public void setId(String id){
		this.id = id;
	}

	public String getCompanyId(){
		return companyId;
	}

	public void setCompanyId(String companyId){
		this.companyId = companyId;
	}

	public String getFileType(){
		return fileType;
	}

	public void setFileType(String fileType){
		this.fileType = fileType;
	}

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

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_WORK_PLAN";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_WORK_PLAN";
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