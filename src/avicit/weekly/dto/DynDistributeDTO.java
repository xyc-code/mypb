package avicit.weekly.dto;

import javax.persistence.Id;
import avicit.platform6.core.domain.BeanDTO;
import com.fasterxml.jackson.annotation.JsonFormat;
import avicit.platform6.core.properties.PlatformConstant.LogType;
import avicit.platform6.core.annotation.log.LogField;
import avicit.platform6.core.annotation.log.FieldRemark;
import avicit.platform6.core.annotation.log.PojoRemark;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写 @创建时间： 2023-04-07 10:10
 * @类说明：DYN_DISTRIBUTE @修改记录：
 */
@PojoRemark(table = "dyn_distribute", object = "DynDistributeDTO", name = "DYN_DISTRIBUTE")
public class DynDistributeDTO extends BeanDTO {
	private static final long serialVersionUID = 1L;

	@Id
	@LogField

	@FieldRemark(column = "id", field = "id", name = "ID")
	/*
	 * ID
	 */
	private java.lang.String id;

	@FieldRemark(column = "dept_id", field = "deptId", name = "部门ID")
	/*
	 * 部门ID
	 */
	private java.lang.String deptId;

	@FieldRemark(column = "posen_id", field = "posenId", name = "被分发人ID")
	/*
	 * 被分发人ID
	 */
	private java.lang.String posenId;

	@FieldRemark(column = "application_department", field = "applicationDepartment", name = "申请部门")
	/*
	 * 申请部门
	 */
	private java.lang.String applicationDepartment;

	@FieldRemark(column = "last_weekly", field = "lastWeekly", name = "周")
	/*
	 * 周
	 */
	private java.lang.String lastWeekly;

	@FieldRemark(column = "last_yeek", field = "lastYeek", name = "月")
	/*
	 * 月
	 */
	private java.lang.String lastYeek;

	@FieldRemark(column = "applicant", field = "applicant", name = "责任人")
	/*
	 * 责任人
	 */
	private java.lang.String applicant;

	@FieldRemark(column = "distribute_date", field = "distributeDate", name = "分发日期")
	/*
	 * 分发日期
	 */
	private java.util.Date distributeDate;
	/*
	 * 分发日期开始时间
	 */
	private java.util.Date distributeDateBegin;
	/*
	 * 分发日期截止时间
	 */
	private java.util.Date distributeDateEnd;
	/*
	 * CREATION_DATE开始时间
	 */
	private java.util.Date creationDateBegin;
	/*
	 * CREATION_DATE截止时间
	 */
	private java.util.Date creationDateEnd;
	/*
	 * LAST_UPDATE_DATE开始时间
	 */
	private java.util.Date lastUpdateDateBegin;
	/*
	 * LAST_UPDATE_DATE截止时间
	 */
	private java.util.Date lastUpdateDateEnd;

	@FieldRemark(column = "is_son", field = "isSon", name = "是什么")
	/*
	 * 是什么
	 */
	private java.lang.String isSon;

	@FieldRemark(column = "distribute_posen_id", field = "distributePosenId", name = "分发人ID")
	/*
	 * 分发人ID
	 */
	private java.lang.String distributePosenId;

	@FieldRemark(column = "flow_path_id", field = "flowPathId", name = "流程ID")
	/*
	 * 流程ID
	 */
	private java.lang.String flowPathId;
	@LogField

	@FieldRemark(column = "created_dept", field = "createdDept", name = "CREATED_DEPT")
	/*
	 * CREATED_DEPT
	 */
	private java.lang.String createdDept;
	@LogField

	@FieldRemark(column = "org_identity", field = "orgIdentity", name = "ORG_IDENTITY")
	/*
	 * ORG_IDENTITY
	 */
	private java.lang.String orgIdentity;

	@FieldRemark(column = "application_date", field = "applicationDate", name = "申请日期")
	/*
	 * 申请日期
	 */
	private java.lang.String applicationDate;

	public java.lang.String getId() {
		return id;
	}

	public void setId(java.lang.String id) {
		this.id = id;
	}

	public java.lang.String getDeptId() {
		return deptId;
	}

	public void setDeptId(java.lang.String deptId) {
		this.deptId = deptId;
	}

	public java.lang.String getPosenId() {
		return posenId;
	}

	public void setPosenId(java.lang.String posenId) {
		this.posenId = posenId;
	}

	public java.lang.String getApplicationDepartment() {
		return applicationDepartment;
	}

	public void setApplicationDepartment(java.lang.String applicationDepartment) {
		this.applicationDepartment = applicationDepartment;
	}

	public java.lang.String getLastWeekly() {
		return lastWeekly;
	}

	public void setLastWeekly(java.lang.String lastWeekly) {
		this.lastWeekly = lastWeekly;
	}

	public java.lang.String getLastYeek() {
		return lastYeek;
	}

	public void setLastYeek(java.lang.String lastYeek) {
		this.lastYeek = lastYeek;
	}

	public java.lang.String getApplicant() {
		return applicant;
	}

	public void setApplicant(java.lang.String applicant) {
		this.applicant = applicant;
	}

	public java.util.Date getDistributeDate() {
		return distributeDate;
	}

	public void setDistributeDate(java.util.Date distributeDate) {
		this.distributeDate = distributeDate;
	}

	public java.util.Date getDistributeDateBegin() {
		return distributeDateBegin;
	}

	public void setDistributeDateBegin(java.util.Date distributeDateBegin) {
		this.distributeDateBegin = distributeDateBegin;
	}

	public java.util.Date getDistributeDateEnd() {
		return distributeDateEnd;
	}

	public void setDistributeDateEnd(java.util.Date distributeDateEnd) {
		this.distributeDateEnd = distributeDateEnd;
	}

	public java.util.Date getCreationDateBegin() {
		return creationDateBegin;
	}

	public void setCreationDateBegin(java.util.Date creationDateBegin) {
		this.creationDateBegin = creationDateBegin;
	}

	public java.util.Date getCreationDateEnd() {
		return creationDateEnd;
	}

	public void setCreationDateEnd(java.util.Date creationDateEnd) {
		this.creationDateEnd = creationDateEnd;
	}

	public java.util.Date getLastUpdateDateBegin() {
		return lastUpdateDateBegin;
	}

	public void setLastUpdateDateBegin(java.util.Date lastUpdateDateBegin) {
		this.lastUpdateDateBegin = lastUpdateDateBegin;
	}

	public java.util.Date getLastUpdateDateEnd() {
		return lastUpdateDateEnd;
	}

	public void setLastUpdateDateEnd(java.util.Date lastUpdateDateEnd) {
		this.lastUpdateDateEnd = lastUpdateDateEnd;
	}

	public java.lang.String getIsSon() {
		return isSon;
	}

	public void setIsSon(java.lang.String isSon) {
		this.isSon = isSon;
	}

	public java.lang.String getDistributePosenId() {
		return distributePosenId;
	}

	public void setDistributePosenId(java.lang.String distributePosenId) {
		this.distributePosenId = distributePosenId;
	}

	public java.lang.String getFlowPathId() {
		return flowPathId;
	}

	public void setFlowPathId(java.lang.String flowPathId) {
		this.flowPathId = flowPathId;
	}

	public java.lang.String getCreatedDept() {
		return createdDept;
	}

	public void setCreatedDept(java.lang.String createdDept) {
		this.createdDept = createdDept;
	}

	public java.lang.String getOrgIdentity() {
		return orgIdentity;
	}

	public void setOrgIdentity(java.lang.String orgIdentity) {
		this.orgIdentity = orgIdentity;
	}

	public java.lang.String getApplicationDate() {
		return applicationDate;
	}

	public void setApplicationDate(java.lang.String applicationDate) {
		this.applicationDate = applicationDate;
	}

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "DYN_DISTRIBUTE";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "DYN_DISTRIBUTE";
		} else {
			return super.logTitle;
		}
	}

	public LogType getLogType() {
		if (super.logType == null || super.logType.equals("")) {
			return LogType.module_operate;
		} else {
			return super.logType;
		}
	}

}