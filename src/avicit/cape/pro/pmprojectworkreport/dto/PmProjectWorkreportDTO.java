package avicit.cape.pro.pmprojectworkreport.dto;

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
 * @创建时间： 2026-03-31 23:21 
 * @类说明：项目工作汇报
 * @修改记录：
 */
@PojoRemark(table = "pm_project_workreport", object = "PmProjectWorkreportDTO", name = "项目工作汇报")
public class PmProjectWorkreportDTO extends BeanDTO {
	private static final long serialVersionUID = 1L;
	private java.lang.String activityalias_; // 节点中文名称
	private java.lang.String activityname_; // 当前节点id
	private java.lang.String businessstate_; // 流程当前状态
	private java.lang.String currUserId; // 当前登录人ID
	private java.lang.String bpmType;
	private java.lang.String bpmState;

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

	@FieldRemark(column = "project_order", field = "projectOrder", name = "项目令号")
	/*
	 *项目令号
	 */
	private java.lang.String projectOrder;

	@FieldRemark(column = "org_model", field = "orgModel", name = "组织实施模式")
	/*
	 *组织实施模式
	 */
	private java.lang.String orgModel;

	@FieldRemark(column = "user_id", field = "userId", name = "项目责任人/责任专家")
	/*
	 *项目责任人/责任专家
	 */
	private java.lang.String userId;
	/*
	 *项目责任人/责任专家显示字段
	 */
	private java.lang.String userIdAlias;

	@FieldRemark(column = "dept_id", field = "deptId", name = "责任部门")
	/*
	 *责任部门
	 */
	private java.lang.String deptId;
	/*
	 *责任部门显示字段
	 */
	private java.lang.String deptIdAlias;

	@FieldRemark(column = "leader_dept", field = "leaderDept", name = "责任学部")
	/*
	 *责任学部
	 */
	private java.lang.String leaderDept;
	/*
	 *责任学部显示字段
	 */
	private java.lang.String leaderDeptAlias;

	@FieldRemark(column = "project_leader", field = "projectLeader", name = "项目主管")
	/*
	 *项目主管
	 */
	private java.lang.String projectLeader;
	/*
	 *项目主管显示字段
	 */
	private java.lang.String projectLeaderAlias;

	@FieldRemark(column = "company_manager_id", field = "companyManagerId", name = "实验室主管")
	/*
	 *实验室主管
	 */
	private java.lang.String companyManagerId;
	/*
	 *实验室主管显示字段
	 */
	private java.lang.String companyManagerIdAlias;

	@FieldRemark(column = "science_user_id", field = "scienceUserId", name = "业务主管处领导")
	/*
	 *业务主管处领导
	 */
	private java.lang.String scienceUserId;
	/*
	 *业务主管处领导显示字段
	 */
	private java.lang.String scienceUserIdAlias;

	@FieldRemark(column = "plan_start_date", field = "planStartDate", name = "立项时间")
	/*
	 *立项时间
	 */
	private java.util.Date planStartDate;
	/*
	 *立项时间开始时间
	 */
	private java.util.Date planStartDateBegin;
	/*
	 *立项时间截止时间
	 */
	private java.util.Date planStartDateEnd;

	@FieldRemark(column = "plan_end_date", field = "planEndDate", name = "结题时间")
	/*
	 *结题时间
	 */
	private java.util.Date planEndDate;
	/*
	 *结题时间开始时间
	 */
	private java.util.Date planEndDateBegin;
	/*
	 *结题时间截止时间
	 */
	private java.util.Date planEndDateEnd;

	@FieldRemark(column = "fund_budget", field = "fundBudget", name = "经费预算")
	/*
	 *经费预算
	 */
	private java.math.BigDecimal fundBudget;

	@FieldRemark(column = "fund_expenditure", field = "fundExpenditure", name = "经费支出")
	/*
	 *经费支出
	 */
	private java.math.BigDecimal fundExpenditure;

	@FieldRemark(column = "project_node", field = "projectNode", name = "里程碑点")
	/*
	 *里程碑点
	 */
	private java.lang.String projectNode;

	@FieldRemark(column = "this_month_plan", field = "thisMonthPlan", name = "本月计划及进展")
	/*
	 *本月计划及进展
	 */
	private java.lang.String thisMonthPlan;

	@FieldRemark(column = "next_month_plan", field = "nextMonthPlan", name = "下月计划")
	/*
	 *下月计划
	 */
	private java.lang.String nextMonthPlan;

	@FieldRemark(column = "this_month_xtwt", field = "thisMonthXtwt", name = "本月需协调问题")
	/*
	 *本月需协调问题
	 */
	private java.lang.String thisMonthXtwt;

	@FieldRemark(column = "this_month_cyuser", field = "thisMonthCyuser", name = "本月协调会参与人员（其他职能部门）")
	/*
	 *本月协调会参与人员（其他职能部门）
	 */
	private java.lang.String thisMonthCyuser;

	@FieldRemark(column = "expense_execution_rate", field = "expenseExecutionRate", name = "账面费用执行率")
	/*
	 *账面费用执行率
	 */
	private java.lang.String expenseExecutionRate;

	@FieldRemark(column = "fund_execution_rate", field = "fundExecutionRate", name = "经费执行率")
	/*
	 *经费执行率
	 */
	private java.lang.String fundExecutionRate;

	@FieldRemark(column = "plan_status", field = "planStatus", name = "任务进展状态")
	/*
	 *任务进展状态
	 */
	private java.lang.String planStatus;

	@FieldRemark(column = "wr_year", field = "wrYear", name = "填报年份")
	/*
	 *填报年份
	 */
	private java.lang.String wrYear;

	@FieldRemark(column = "wr_month", field = "wrMonth", name = "填报月份")
	/*
	 *填报月份
	 */
	private java.lang.String wrMonth;

	@FieldRemark(column = "status", field = "status", name = "状态")
	/*
	 *状态
	 */
	private java.lang.String status;

	@FieldRemark(column = "bpm_task_id", field = "bpmTaskId", name = "流程id")
	/*
	 *流程id
	 */
	private java.lang.String bpmTaskId;

	@FieldRemark(column = "remark", field = "remark", name = "备注")
	/*
	 *备注
	 */
	private java.lang.String remark;
	/*
	*创建时间开始时间
	*/
	private java.util.Date creationDateBegin;
	/*
	 *创建时间截止时间
	 */
	private java.util.Date creationDateEnd;
	/*
	*最后修改时间开始时间
	*/
	private java.util.Date lastUpdateDateBegin;
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
	/*
	 *扩展预留字段9
	 */
	private java.util.Date attribute09;
	/*
	 *扩展预留字段9开始时间
	 */
	private java.util.Date attribute09Begin;
	/*
	 *扩展预留字段9截止时间
	 */
	private java.util.Date attribute09End;

	@FieldRemark(column = "attribute_10", field = "attribute10", name = "扩展预留字段10")
	/*
	 *扩展预留字段10
	 */
	private java.util.Date attribute10;
	/*
	 *扩展预留字段10开始时间
	 */
	private java.util.Date attribute10Begin;
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

	public java.lang.String getProjectOrder() {
		return projectOrder;
	}

	public void setProjectOrder(java.lang.String projectOrder) {
		this.projectOrder = projectOrder;
	}

	public java.lang.String getOrgModel() {
		return orgModel;
	}

	public void setOrgModel(java.lang.String orgModel) {
		this.orgModel = orgModel;
	}

	public java.lang.String getUserId() {
		return userId;
	}

	public void setUserId(java.lang.String userId) {
		this.userId = userId;
	}

	public java.lang.String getUserIdAlias() {
		return userIdAlias;
	}

	public void setUserIdAlias(java.lang.String userIdAlias) {
		this.userIdAlias = userIdAlias;
	}

	public java.lang.String getDeptId() {
		return deptId;
	}

	public void setDeptId(java.lang.String deptId) {
		this.deptId = deptId;
	}

	public java.lang.String getDeptIdAlias() {
		return deptIdAlias;
	}

	public void setDeptIdAlias(java.lang.String deptIdAlias) {
		this.deptIdAlias = deptIdAlias;
	}

	public java.lang.String getLeaderDept() {
		return leaderDept;
	}

	public void setLeaderDept(java.lang.String leaderDept) {
		this.leaderDept = leaderDept;
	}

	public java.lang.String getLeaderDeptAlias() {
		return leaderDeptAlias;
	}

	public void setLeaderDeptAlias(java.lang.String leaderDeptAlias) {
		this.leaderDeptAlias = leaderDeptAlias;
	}

	public java.lang.String getProjectLeader() {
		return projectLeader;
	}

	public void setProjectLeader(java.lang.String projectLeader) {
		this.projectLeader = projectLeader;
	}

	public java.lang.String getProjectLeaderAlias() {
		return projectLeaderAlias;
	}

	public void setProjectLeaderAlias(java.lang.String projectLeaderAlias) {
		this.projectLeaderAlias = projectLeaderAlias;
	}

	public java.lang.String getCompanyManagerId() {
		return companyManagerId;
	}

	public void setCompanyManagerId(java.lang.String companyManagerId) {
		this.companyManagerId = companyManagerId;
	}

	public java.lang.String getCompanyManagerIdAlias() {
		return companyManagerIdAlias;
	}

	public void setCompanyManagerIdAlias(java.lang.String companyManagerIdAlias) {
		this.companyManagerIdAlias = companyManagerIdAlias;
	}

	public java.lang.String getScienceUserId() {
		return scienceUserId;
	}

	public void setScienceUserId(java.lang.String scienceUserId) {
		this.scienceUserId = scienceUserId;
	}

	public java.lang.String getScienceUserIdAlias() {
		return scienceUserIdAlias;
	}

	public void setScienceUserIdAlias(java.lang.String scienceUserIdAlias) {
		this.scienceUserIdAlias = scienceUserIdAlias;
	}

	public java.util.Date getPlanStartDate() {
		return planStartDate;
	}

	public void setPlanStartDate(java.util.Date planStartDate) {
		this.planStartDate = planStartDate;
	}

	public java.util.Date getPlanStartDateBegin() {
		return planStartDateBegin;
	}

	public void setPlanStartDateBegin(java.util.Date planStartDateBegin) {
		this.planStartDateBegin = planStartDateBegin;
	}

	public java.util.Date getPlanStartDateEnd() {
		return planStartDateEnd;
	}

	public void setPlanStartDateEnd(java.util.Date planStartDateEnd) {
		this.planStartDateEnd = planStartDateEnd;
	}

	public java.util.Date getPlanEndDate() {
		return planEndDate;
	}

	public void setPlanEndDate(java.util.Date planEndDate) {
		this.planEndDate = planEndDate;
	}

	public java.util.Date getPlanEndDateBegin() {
		return planEndDateBegin;
	}

	public void setPlanEndDateBegin(java.util.Date planEndDateBegin) {
		this.planEndDateBegin = planEndDateBegin;
	}

	public java.util.Date getPlanEndDateEnd() {
		return planEndDateEnd;
	}

	public void setPlanEndDateEnd(java.util.Date planEndDateEnd) {
		this.planEndDateEnd = planEndDateEnd;
	}

	public java.math.BigDecimal getFundBudget() {
		return fundBudget;
	}

	public void setFundBudget(java.math.BigDecimal fundBudget) {
		this.fundBudget = fundBudget;
	}

	public java.math.BigDecimal getFundExpenditure() {
		return fundExpenditure;
	}

	public void setFundExpenditure(java.math.BigDecimal fundExpenditure) {
		this.fundExpenditure = fundExpenditure;
	}

	public java.lang.String getProjectNode() {
		return projectNode;
	}

	public void setProjectNode(java.lang.String projectNode) {
		this.projectNode = projectNode;
	}

	public java.lang.String getThisMonthPlan() {
		return thisMonthPlan;
	}

	public void setThisMonthPlan(java.lang.String thisMonthPlan) {
		this.thisMonthPlan = thisMonthPlan;
	}

	public java.lang.String getNextMonthPlan() {
		return nextMonthPlan;
	}

	public void setNextMonthPlan(java.lang.String nextMonthPlan) {
		this.nextMonthPlan = nextMonthPlan;
	}

	public java.lang.String getThisMonthXtwt() {
		return thisMonthXtwt;
	}

	public void setThisMonthXtwt(java.lang.String thisMonthXtwt) {
		this.thisMonthXtwt = thisMonthXtwt;
	}

	public java.lang.String getThisMonthCyuser() {
		return thisMonthCyuser;
	}

	public void setThisMonthCyuser(java.lang.String thisMonthCyuser) {
		this.thisMonthCyuser = thisMonthCyuser;
	}

	public java.lang.String getExpenseExecutionRate() {
		return expenseExecutionRate;
	}

	public void setExpenseExecutionRate(java.lang.String expenseExecutionRate) {
		this.expenseExecutionRate = expenseExecutionRate;
	}

	public java.lang.String getFundExecutionRate() {
		return fundExecutionRate;
	}

	public void setFundExecutionRate(java.lang.String fundExecutionRate) {
		this.fundExecutionRate = fundExecutionRate;
	}

	public java.lang.String getPlanStatus() {
		return planStatus;
	}

	public void setPlanStatus(java.lang.String planStatus) {
		this.planStatus = planStatus;
	}

	public java.lang.String getWrYear() {
		return wrYear;
	}

	public void setWrYear(java.lang.String wrYear) {
		this.wrYear = wrYear;
	}

	public java.lang.String getWrMonth() {
		return wrMonth;
	}

	public void setWrMonth(java.lang.String wrMonth) {
		this.wrMonth = wrMonth;
	}

	public java.lang.String getStatus() {
		return status;
	}

	public void setStatus(java.lang.String status) {
		this.status = status;
	}

	public java.lang.String getBpmTaskId() {
		return bpmTaskId;
	}

	public void setBpmTaskId(java.lang.String bpmTaskId) {
		this.bpmTaskId = bpmTaskId;
	}

	public java.lang.String getRemark() {
		return remark;
	}

	public void setRemark(java.lang.String remark) {
		this.remark = remark;
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

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "项目工作汇报";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "项目工作汇报";
		} else {
			return super.logTitle;
		}
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

	public LogType getLogType() {
		if (super.logType == null || super.logType.equals("")) {
			return LogType.module_operate;
		} else {
			return super.logType;
		}
	}

}