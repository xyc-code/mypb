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
 * @邮箱：请填写 @创建时间： 2023-04-06 14:46
 * @类说明：DYN_MEEKLY @修改记录：
 */
@PojoRemark(table = "dyn_meekly", object = "DynMeeklyDTO", name = "DYN_MEEKLY")
public class DynMeeklyDTO extends BeanDTO {
	private static final long serialVersionUID = 1L;

	@Id
	@LogField

	@FieldRemark(column = "id", field = "id", name = "ID")
	/*
	 * ID
	 */
	private java.lang.String id;
	@FieldRemark(column = "BUSINESSSTATE_", field = "businessstate", name = "流程状态")
	private java.lang.String businessstate;
	public java.lang.String getBusinessstate() {
		return businessstate;
	}

	public void setBusinessstate(java.lang.String businessstate) {
		this.businessstate = businessstate;
	}

	@FieldRemark(column = "application_department", field = "applicationDepartment", name = "申请部门")
	/*
	 * 申请部门
	 */
	private java.lang.String applicationDepartment;

	@FieldRemark(column = "applicant", field = "applicant", name = "字段_4")
	/*
	 * 字段_4
	 */
	private java.lang.String applicant;
	/*
	 * 创建时间开始时间
	 */
	private java.util.Date creationDateBegin;
	/*
	 * 创建时间截止时间
	 */
	private java.util.Date creationDateEnd;
	/*
	 * 最后更新时间开始时间
	 */
	private java.util.Date lastUpdateDateBegin;
	/*
	 * 最后更新时间截止时间
	 */
	private java.util.Date lastUpdateDateEnd;

	@FieldRemark(column = "form_no", field = "formNo", name = "表单编号")
	/*
	 * 表单编号
	 */
	private java.lang.String formNo;
	@LogField

	@FieldRemark(column = "created_dept", field = "createdDept", name = "创建人部门")
	/*
	 * 创建人部门
	 */
	private java.lang.String createdDept;
	@LogField

	@FieldRemark(column = "org_identity", field = "orgIdentity", name = "组织ID")
	/*
	 * 组织ID
	 */
	private java.lang.String orgIdentity;

	@FieldRemark(column = "application_date", field = "applicationDate", name = "申请日期")
	/*
	 * 申请日期
	 */
	private java.lang.String applicationDate;

	@FieldRemark(column = "last_weekly", field = "lastWeekly", name = "周")
	/*
	 * 周
	 */
	private java.lang.String lastWeekly;
//    流程id
	private java.lang.String lcid;
	public java.lang.String getLcid() {
		return lcid;
	}

	public void setLcid(java.lang.String lcid) {
		this.lcid = lcid;
	}
	@FieldRemark(column = "last_yeek", field = "lastYeek", name = "月")
	/*
	 * 月
	 */
	private java.lang.String lastYeek;

	public java.lang.String getId() {
		return id;
	}

	public void setId(java.lang.String id) {
		this.id = id;
	}

	public java.lang.String getApplicationDepartment() {
		return applicationDepartment;
	}

	public void setApplicationDepartment(java.lang.String applicationDepartment) {
		this.applicationDepartment = applicationDepartment;
	}

	public java.lang.String getApplicant() {
		return applicant;
	}

	public void setApplicant(java.lang.String applicant) {
		this.applicant = applicant;
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

	public java.lang.String getFormNo() {
		return formNo;
	}

	public void setFormNo(java.lang.String formNo) {
		this.formNo = formNo;
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

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "DYN_MEEKLY";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "DYN_MEEKLY";
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