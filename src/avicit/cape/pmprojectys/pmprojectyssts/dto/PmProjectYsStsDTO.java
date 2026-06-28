package avicit.cape.pmprojectys.pmprojectyssts.dto;

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
 * @邮箱：请填写
 * @创建时间： 2026-06-09 10:52 
 * @类说明：项目验收管理-三同时
 * @修改记录：
 */
@PojoRemark(table = "pm_project_ys_sts", object = "PmProjectYsStsDTO", name = "项目验收管理-三同时")
public class PmProjectYsStsDTO extends BeanDTO {
	private static final long serialVersionUID = 1L;

	@Id
	@LogField
	@FieldRemark(column = "id", field = "id", name = "主键")
	/*
	 *主键
	 */
	private java.lang.String id;
	@FieldRemark(column = "secret_level", field = "secretLevel", name = "密级")
	/*
	 *密级
	 */
	private java.lang.String secretLevel;
	@FieldRemark(column = "project_id", field = "projectId", name = "项目id")
	/*
	 *项目id
	 */
	private java.lang.String projectId;
	@FieldRemark(column = "project_name", field = "projectName", name = "项目名称")
	/*
	 *项目名称
	 */
	private java.lang.String projectName;
	@FieldRemark(column = "task_id", field = "taskId", name = "任务id")
	/*
	 *任务id
	 */
	private java.lang.String taskId;
	@FieldRemark(column = "task_name", field = "taskName", name = "任务名称")
	/*
	 *任务名称
	 */
	private java.lang.String taskName;
	@FieldRemark(column = "zyjk_ys_date", field = "zyjkYsDate", name = "职业健康-验收时间")
	/*
	 *职业健康-验收时间
	 */
	private java.lang.String zyjkYsDate;
	@FieldRemark(column = "zyjk_name", field = "zyjkName", name = "职业健康-批复文件名称")
	/*
	 *职业健康-批复文件名称
	 */
	private java.lang.String zyjkName;
	@FieldRemark(column = "zyjk_date", field = "zyjkDate", name = "职业健康-批复时间")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *职业健康-批复时间
	 */
	private java.util.Date zyjkDate;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *职业健康-批复时间开始时间
	 */
	private java.util.Date zyjkDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *职业健康-批复时间截止时间
	 */
	private java.util.Date zyjkDateEnd;
	@FieldRemark(column = "zyjk_no", field = "zyjkNo", name = "职业健康-批复文号")
	/*
	 *职业健康-批复文号
	 */
	private java.lang.String zyjkNo;
	@FieldRemark(column = "hb_ys_date", field = "hbYsDate", name = "环保-验收时间")
	/*
	 *环保-验收时间
	 */
	private java.lang.String hbYsDate;
	@FieldRemark(column = "hb_name", field = "hbName", name = "环保-批复文件名称")
	/*
	 *环保-批复文件名称
	 */
	private java.lang.String hbName;
	@FieldRemark(column = "hb_date", field = "hbDate", name = "环保-批复时间")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *环保-批复时间
	 */
	private java.util.Date hbDate;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *环保-批复时间开始时间
	 */
	private java.util.Date hbDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *环保-批复时间截止时间
	 */
	private java.util.Date hbDateEnd;
	@FieldRemark(column = "hb_no", field = "hbNo", name = "环保-批复文号")
	/*
	 *环保-批复文号
	 */
	private java.lang.String hbNo;
	@FieldRemark(column = "aq_ys_date", field = "aqYsDate", name = "安全-验收时间")
	/*
	 *安全-验收时间
	 */
	private java.lang.String aqYsDate;
	@FieldRemark(column = "aq_name", field = "aqName", name = "安全-批复文件名称")
	/*
	 *安全-批复文件名称
	 */
	private java.lang.String aqName;
	@FieldRemark(column = "aq_date", field = "aqDate", name = "安全-批复时间")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *安全-批复时间
	 */
	private java.util.Date aqDate;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *安全-批复时间开始时间
	 */
	private java.util.Date aqDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *安全-批复时间截止时间
	 */
	private java.util.Date aqDateEnd;
	@FieldRemark(column = "aq_no", field = "aqNo", name = "安全-批复文号")
	/*
	 *安全-批复文号
	 */
	private java.lang.String aqNo;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *创建时间开始时间
	 */
	private java.util.Date creationDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *创建时间截止时间
	 */
	private java.util.Date creationDateEnd;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *最后修改时间开始时间
	 */
	private java.util.Date lastUpdateDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *最后修改时间截止时间
	 */
	private java.util.Date lastUpdateDateEnd;
	@FieldRemark(column = "created_dept", field = "createdDept", name = "创建部门")
	/*
	 *创建部门
	 */
	private java.lang.String createdDept;
	@FieldRemark(column = "org_identity", field = "orgIdentity", name = "多组织ID")
	/*
	 *多组织ID
	 */
	private java.lang.String orgIdentity;
	@FieldRemark(column = "attribute_01", field = "attribute01", name = "扩展预留字段1")
	/*
	 *扩展预留字段1
	 */
	private java.lang.String attribute01;
	@FieldRemark(column = "attribute_02", field = "attribute02", name = "扩展预留字段2")
	/*
	 *扩展预留字段2
	 */
	private java.lang.String attribute02;
	@FieldRemark(column = "attribute_03", field = "attribute03", name = "扩展预留字段3")
	/*
	 *扩展预留字段3
	 */
	private java.lang.String attribute03;
	@FieldRemark(column = "attribute_04", field = "attribute04", name = "扩展预留字段4")
	/*
	 *扩展预留字段4
	 */
	private java.lang.String attribute04;
	@FieldRemark(column = "attribute_05", field = "attribute05", name = "扩展预留字段5")
	/*
	 *扩展预留字段5
	 */
	private java.lang.String attribute05;
	@FieldRemark(column = "attribute_06", field = "attribute06", name = "扩展预留字段6")
	/*
	 *扩展预留字段6
	 */
	private java.lang.String attribute06;
	@FieldRemark(column = "attribute_07", field = "attribute07", name = "扩展预留字段7")
	/*
	 *扩展预留字段7
	 */
	private java.math.BigDecimal attribute07;
	@FieldRemark(column = "attribute_08", field = "attribute08", name = "扩展预留字段8")
	/*
	 *扩展预留字段8
	 */
	private java.math.BigDecimal attribute08;
	@FieldRemark(column = "attribute_09", field = "attribute09", name = "扩展预留字段9")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *扩展预留字段9
	 */
	private java.util.Date attribute09;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *扩展预留字段9开始时间
	 */
	private java.util.Date attribute09Begin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *扩展预留字段9截止时间
	 */
	private java.util.Date attribute09End;
	@FieldRemark(column = "attribute_10", field = "attribute10", name = "扩展预留字段10")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *扩展预留字段10
	 */
	private java.util.Date attribute10;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *扩展预留字段10开始时间
	 */
	private java.util.Date attribute10Begin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *扩展预留字段10截止时间
	 */
	private java.util.Date attribute10End;

	public java.lang.String getId() {
		return id;
	}

	public void setId(java.lang.String id) {
		this.id = id;
	}

	public java.lang.String getSecretLevel() {
		return secretLevel;
	}

	public void setSecretLevel(java.lang.String secretLevel) {
		this.secretLevel = secretLevel;
	}

	public java.lang.String getProjectId() {
		return projectId;
	}

	public void setProjectId(java.lang.String projectId) {
		this.projectId = projectId;
	}

	public java.lang.String getProjectName() {
		return projectName;
	}

	public void setProjectName(java.lang.String projectName) {
		this.projectName = projectName;
	}

	public java.lang.String getTaskId() {
		return taskId;
	}

	public void setTaskId(java.lang.String taskId) {
		this.taskId = taskId;
	}

	public java.lang.String getTaskName() {
		return taskName;
	}

	public void setTaskName(java.lang.String taskName) {
		this.taskName = taskName;
	}

	public java.lang.String getZyjkYsDate() {
		return zyjkYsDate;
	}

	public void setZyjkYsDate(java.lang.String zyjkYsDate) {
		this.zyjkYsDate = zyjkYsDate;
	}

	public java.lang.String getZyjkName() {
		return zyjkName;
	}

	public void setZyjkName(java.lang.String zyjkName) {
		this.zyjkName = zyjkName;
	}

	public java.util.Date getZyjkDate() {
		return zyjkDate;
	}

	public void setZyjkDate(java.util.Date zyjkDate) {
		this.zyjkDate = zyjkDate;
	}

	public java.util.Date getZyjkDateBegin() {
		return zyjkDateBegin;
	}

	public void setZyjkDateBegin(java.util.Date zyjkDateBegin) {
		this.zyjkDateBegin = zyjkDateBegin;
	}

	public java.util.Date getZyjkDateEnd() {
		return zyjkDateEnd;
	}

	public void setZyjkDateEnd(java.util.Date zyjkDateEnd) {
		this.zyjkDateEnd = zyjkDateEnd;
	}

	public java.lang.String getZyjkNo() {
		return zyjkNo;
	}

	public void setZyjkNo(java.lang.String zyjkNo) {
		this.zyjkNo = zyjkNo;
	}

	public java.lang.String getHbYsDate() {
		return hbYsDate;
	}

	public void setHbYsDate(java.lang.String hbYsDate) {
		this.hbYsDate = hbYsDate;
	}

	public java.lang.String getHbName() {
		return hbName;
	}

	public void setHbName(java.lang.String hbName) {
		this.hbName = hbName;
	}

	public java.util.Date getHbDate() {
		return hbDate;
	}

	public void setHbDate(java.util.Date hbDate) {
		this.hbDate = hbDate;
	}

	public java.util.Date getHbDateBegin() {
		return hbDateBegin;
	}

	public void setHbDateBegin(java.util.Date hbDateBegin) {
		this.hbDateBegin = hbDateBegin;
	}

	public java.util.Date getHbDateEnd() {
		return hbDateEnd;
	}

	public void setHbDateEnd(java.util.Date hbDateEnd) {
		this.hbDateEnd = hbDateEnd;
	}

	public java.lang.String getHbNo() {
		return hbNo;
	}

	public void setHbNo(java.lang.String hbNo) {
		this.hbNo = hbNo;
	}

	public java.lang.String getAqYsDate() {
		return aqYsDate;
	}

	public void setAqYsDate(java.lang.String aqYsDate) {
		this.aqYsDate = aqYsDate;
	}

	public java.lang.String getAqName() {
		return aqName;
	}

	public void setAqName(java.lang.String aqName) {
		this.aqName = aqName;
	}

	public java.util.Date getAqDate() {
		return aqDate;
	}

	public void setAqDate(java.util.Date aqDate) {
		this.aqDate = aqDate;
	}

	public java.util.Date getAqDateBegin() {
		return aqDateBegin;
	}

	public void setAqDateBegin(java.util.Date aqDateBegin) {
		this.aqDateBegin = aqDateBegin;
	}

	public java.util.Date getAqDateEnd() {
		return aqDateEnd;
	}

	public void setAqDateEnd(java.util.Date aqDateEnd) {
		this.aqDateEnd = aqDateEnd;
	}

	public java.lang.String getAqNo() {
		return aqNo;
	}

	public void setAqNo(java.lang.String aqNo) {
		this.aqNo = aqNo;
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

	public java.lang.String getAttribute01() {
		return attribute01;
	}

	public void setAttribute01(java.lang.String attribute01) {
		this.attribute01 = attribute01;
	}

	public java.lang.String getAttribute02() {
		return attribute02;
	}

	public void setAttribute02(java.lang.String attribute02) {
		this.attribute02 = attribute02;
	}

	public java.lang.String getAttribute03() {
		return attribute03;
	}

	public void setAttribute03(java.lang.String attribute03) {
		this.attribute03 = attribute03;
	}

	public java.lang.String getAttribute04() {
		return attribute04;
	}

	public void setAttribute04(java.lang.String attribute04) {
		this.attribute04 = attribute04;
	}

	public java.lang.String getAttribute05() {
		return attribute05;
	}

	public void setAttribute05(java.lang.String attribute05) {
		this.attribute05 = attribute05;
	}

	public java.lang.String getAttribute06() {
		return attribute06;
	}

	public void setAttribute06(java.lang.String attribute06) {
		this.attribute06 = attribute06;
	}

	public java.math.BigDecimal getAttribute07() {
		return attribute07;
	}

	public void setAttribute07(java.math.BigDecimal attribute07) {
		this.attribute07 = attribute07;
	}

	public java.math.BigDecimal getAttribute08() {
		return attribute08;
	}

	public void setAttribute08(java.math.BigDecimal attribute08) {
		this.attribute08 = attribute08;
	}

	public java.util.Date getAttribute09() {
		return attribute09;
	}

	public void setAttribute09(java.util.Date attribute09) {
		this.attribute09 = attribute09;
	}

	public java.util.Date getAttribute09Begin() {
		return attribute09Begin;
	}

	public void setAttribute09Begin(java.util.Date attribute09Begin) {
		this.attribute09Begin = attribute09Begin;
	}

	public java.util.Date getAttribute09End() {
		return attribute09End;
	}

	public void setAttribute09End(java.util.Date attribute09End) {
		this.attribute09End = attribute09End;
	}

	public java.util.Date getAttribute10() {
		return attribute10;
	}

	public void setAttribute10(java.util.Date attribute10) {
		this.attribute10 = attribute10;
	}

	public java.util.Date getAttribute10Begin() {
		return attribute10Begin;
	}

	public void setAttribute10Begin(java.util.Date attribute10Begin) {
		this.attribute10Begin = attribute10Begin;
	}

	public java.util.Date getAttribute10End() {
		return attribute10End;
	}

	public void setAttribute10End(java.util.Date attribute10End) {
		this.attribute10End = attribute10End;
	}

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "项目验收管理-三同时";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "项目验收管理-三同时";
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

	private String activityalias_;
	private String businessstate_;
	private String bpmType;
	private String bpmState;
	private String currUserId;

	public String getActivityalias_() {
		return activityalias_;
	}

	public void setActivityalias_(String activityalias_) {
		this.activityalias_ = activityalias_;
	}

	public String getBusinessstate_() {
		return businessstate_;
	}

	public void setBusinessstate_(String businessstate_) {
		this.businessstate_ = businessstate_;
	}

	public String getBpmType() {
		return bpmType;
	}

	public void setBpmType(String bpmType) {
		this.bpmType = bpmType;
	}

	public String getBpmState() {
		return bpmState;
	}

	public void setBpmState(String bpmState) {
		this.bpmState = bpmState;
	}

	public String getCurrUserId() {
		return currUserId;
	}

	public void setCurrUserId(String currUserId) {
		this.currUserId = currUserId;
	}
}