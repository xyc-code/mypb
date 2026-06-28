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
 * @邮箱：请填写 @创建时间： 2023-04-24 21:30
 * @类说明：DYN_TYPE @修改记录：
 */
@PojoRemark(table = "dyn_type", object = "DynTypeDTO", name = "DYN_TYPE")
public class DynTypeDTO extends BeanDTO {
	private static final long serialVersionUID = 1L;

	@Id
	@LogField

	@FieldRemark(column = "id", field = "id", name = "ID")
	/*
	 * ID
	 */
	private java.lang.String id;

	@FieldRemark(column = "weekly_search", field = "weeklySearch", name = "周报审核搜索按钮")
	/*
	 * 周报审核搜索按钮
	 */
	private java.lang.String weeklySearch;

	@FieldRemark(column = "weekly_process", field = "weeklyProcess", name = "周报审核发起流程按钮")
	/*
	 * 周报审核发起流程按钮
	 */
	private java.lang.String weeklyProcess;

	@FieldRemark(column = "weekly_plan_search", field = "weeklyPlanSearch", name = "周报审核搜索月计划按钮")
	/*
	 * 周报审核搜索月计划按钮
	 */
	private java.lang.String weeklyPlanSearch;

	@FieldRemark(column = "weekly_delete_son", field = "weeklyDeleteSon", name = "周报上报删除按钮")
	/*
	 * 周报上报删除按钮
	 */
	private java.lang.String weeklyDeleteSon;
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

	@FieldRemark(column = "weekly_distribute", field = "weeklyDistribute", name = "周报审核分发按钮")
	/*
	 * 周报审核分发按钮
	 */
	private java.lang.String weeklyDistribute;

	@FieldRemark(column = "weekly_search_son", field = "weeklySearchSon", name = "周报上报搜索按钮")
	/*
	 * 周报上报搜索按钮
	 */
	private java.lang.String weeklySearchSon;

	@FieldRemark(column = "weekly_plan_search_son", field = "weeklyPlanSearchSon", name = "周报上报搜索月计划按钮")
	/*
	 * 周报上报搜索月计划按钮
	 */
	private java.lang.String weeklyPlanSearchSon;
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

	@FieldRemark(column = "weekly_delete", field = "weeklyDelete", name = "周报审核删除按钮")
	/*
	 * 周报审核删除按钮
	 */
	private java.lang.String weeklyDelete;

	@FieldRemark(column = "weekly_processs_son", field = "weeklyProcesssSon", name = "周报上报发起流程按钮")
	/*
	 * 周报上报发起流程按钮
	 */
	private java.lang.String weeklyProcesssSon;

	@FieldRemark(column = "WEEKLY_DISTRIBUTE_POSEN", field = "weeklyDistributePosen", name = "周报审核分发流程默认人员")
	/*
	 * 周报上报发起流程按钮
	 */
	private java.lang.String weeklyDistributePosen;
	public java.lang.String getWeeklyDistributePosen() {
		return weeklyDistributePosen;
	}

	public void setWeeklyDistributePosen(java.lang.String weeklyDistributePosen) {
		this.weeklyDistributePosen = weeklyDistributePosen;
	}
	public java.lang.String getId() {
		return id;
	}

	public void setId(java.lang.String id) {
		this.id = id;
	}

	public java.lang.String getWeeklySearch() {
		return weeklySearch;
	}

	public void setWeeklySearch(java.lang.String weeklySearch) {
		this.weeklySearch = weeklySearch;
	}

	public java.lang.String getWeeklyProcess() {
		return weeklyProcess;
	}

	public void setWeeklyProcess(java.lang.String weeklyProcess) {
		this.weeklyProcess = weeklyProcess;
	}

	public java.lang.String getWeeklyPlanSearch() {
		return weeklyPlanSearch;
	}

	public void setWeeklyPlanSearch(java.lang.String weeklyPlanSearch) {
		this.weeklyPlanSearch = weeklyPlanSearch;
	}

	public java.lang.String getWeeklyDeleteSon() {
		return weeklyDeleteSon;
	}

	public void setWeeklyDeleteSon(java.lang.String weeklyDeleteSon) {
		this.weeklyDeleteSon = weeklyDeleteSon;
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

	public java.lang.String getWeeklyDistribute() {
		return weeklyDistribute;
	}

	public void setWeeklyDistribute(java.lang.String weeklyDistribute) {
		this.weeklyDistribute = weeklyDistribute;
	}

	public java.lang.String getWeeklySearchSon() {
		return weeklySearchSon;
	}

	public void setWeeklySearchSon(java.lang.String weeklySearchSon) {
		this.weeklySearchSon = weeklySearchSon;
	}

	public java.lang.String getWeeklyPlanSearchSon() {
		return weeklyPlanSearchSon;
	}

	public void setWeeklyPlanSearchSon(java.lang.String weeklyPlanSearchSon) {
		this.weeklyPlanSearchSon = weeklyPlanSearchSon;
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

	public java.lang.String getWeeklyDelete() {
		return weeklyDelete;
	}

	public void setWeeklyDelete(java.lang.String weeklyDelete) {
		this.weeklyDelete = weeklyDelete;
	}

	public java.lang.String getWeeklyProcesssSon() {
		return weeklyProcesssSon;
	}

	public void setWeeklyProcesssSon(java.lang.String weeklyProcesssSon) {
		this.weeklyProcesssSon = weeklyProcesssSon;
	}

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "DYN_TYPE";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "DYN_TYPE";
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