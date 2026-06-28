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
 * @邮箱：请填写 @创建时间： 2023-03-28 12:57
 * @类说明：周报表 @修改记录：
 */
@PojoRemark(table = "weekly", object = "WeeklyDTO", name = "周报表")
public class WeeklyDTO extends BeanDTO {
	private static final long serialVersionUID = 1L;

	@Id
	@LogField

	@FieldRemark(column = "id", field = "id", name = "ID")
	/*
	 * ID
	 */
	private java.lang.String id;

	@FieldRemark(column = "work_tasks", field = "workTasks", name = "工作任务")
	/*
	 * 工作任务
	 */
	private java.lang.String workTasks;

	@FieldRemark(column = "person_liable", field = "personLiable", name = "责任人")
	/*
	 * 责任人
	 */
	private String personLiable;

	@FieldRemark(column = "fk_sub_col_id", field = "fkSubColId", name = "外键")
	/*
	 * 外键
	 */
	private java.lang.String fkSubColId;
	/*
	 * 创建时间开始时间
	 */
	private java.util.Date creationDate;
	/*
	 * 创建时间截止时间
	 */
	private java.util.Date creationDateEnd;

	@FieldRemark(column = "is_completion", field = "isCompletion", name = "是否完成")
	/*
	 * 是否完成
	 */
	private java.lang.String isCompletion;
	/*
	 * 最后更新时间开始时间
	 */
	private java.util.Date lastUpdateDate;
	/*
	 * 最后更新时间截止时间
	 */
	private java.util.Date lastUpdateDateEnd;

	@FieldRemark(column = "top_date_evolve", field = "topDateEvolve", name = "上周进展")
	/*
	 * 上周进展
	 */
	private java.lang.String topDateEvolve;
	@FieldRemark(column = "CONTENT", field = "content", name = "备注")
	
	private java.lang.String content;
	public String personLiableName;
	
	public java.lang.String getContent() {
		return content;
	}

	public void setContent(java.lang.String content) {
		this.content = content;
	}

	@FieldRemark(column = "completion_node", field = "completionNode", name = "完成节点")
	/*
	 * 完成节点
	 */
	private java.util.Date completionNode;
	/*
	 * 完成节点开始时间
	 */
	private java.util.Date completionNodeBegin;
	/*
	 * 完成节点截止时间
	 */
	private java.util.Date completionNodeEnd;

	@FieldRemark(column = "is_keyno", field = "isKeyno", name = "是否重要")
	/*
	 * 是否重要
	 */
	private java.lang.String isKeyno;

	@FieldRemark(column = "date_evolve", field = "dateEvolve", name = "本周计划")
	/*
	 * 本周计划
	 */
	private java.lang.String dateEvolve;
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

	@FieldRemark(column = "work_class", field = "workClass", name = "类别")
	/*
	 * 类别
	 */
	private java.lang.String workClass;
	
	public WeeklyDTO() {
		// TODO Auto-generated constructor stub
	}
	
	   @LogField
	    @FieldRemark(column = "DEPT_ID", field = "deptId", name = "部门ID")
	    private String deptId;
	   public void setDeptId(String deptId) {
	        this.deptId = deptId;
	    }

	    public String getDeptId() {
	        return deptId;
	    }
	public java.lang.String getId() {
		return id;
	}

	public void setId(java.lang.String id) {
		this.id = id;
	}

	public java.lang.String getWorkTasks() {
		return workTasks;
	}

	public void setWorkTasks(java.lang.String workTasks) {
		this.workTasks = workTasks;
	}

	public String getPersonLiable() {
		return personLiable;
	}

	public void setPersonLiable(String personLiable) {
		this.personLiable = personLiable;
	}

	public java.lang.String getFkSubColId() {
		return fkSubColId;
	}

	public void setFkSubColId(java.lang.String fkSubColId) {
		this.fkSubColId = fkSubColId;
	}

	public java.util.Date getCreationDateBegin() {
		return creationDate;
	}

	public void setCreationDateBegin(java.util.Date creationDateBegin) {
		this.creationDate = creationDateBegin;
	}

	public java.util.Date getCreationDateEnd() {
		return creationDateEnd;
	}

	public void setCreationDateEnd(java.util.Date creationDateEnd) {
		this.creationDateEnd = creationDateEnd;
	}

	public java.lang.String getIsCompletion() {
		return isCompletion;
	}

	public void setIsCompletion(java.lang.String isCompletion) {
		this.isCompletion = isCompletion;
	}

	public java.util.Date getLastUpdateDateBegin() {
		return lastUpdateDate;
	}

	public void setLastUpdateDateBegin(java.util.Date lastUpdateDateBegin) {
		this.lastUpdateDate = lastUpdateDateBegin;
	}

	public java.util.Date getLastUpdateDateEnd() {
		return lastUpdateDateEnd;
	}

	public void setLastUpdateDateEnd(java.util.Date lastUpdateDateEnd) {
		this.lastUpdateDateEnd = lastUpdateDateEnd;
	}

	public java.lang.String getTopDateEvolve() {
		return topDateEvolve;
	}

	public void setTopDateEvolve(java.lang.String topDateEvolve) {
		this.topDateEvolve = topDateEvolve;
	}

	public java.util.Date getCompletionNode() {
		return completionNode;
	}

	public void setCompletionNode(java.util.Date completionNode) {
		this.completionNode = completionNode;
	}

	public java.util.Date getCompletionNodeBegin() {
		return completionNodeBegin;
	}

	public void setCompletionNodeBegin(java.util.Date completionNodeBegin) {
		this.completionNodeBegin = completionNodeBegin;
	}

	public java.util.Date getCompletionNodeEnd() {
		return completionNodeEnd;
	}

	public void setCompletionNodeEnd(java.util.Date completionNodeEnd) {
		this.completionNodeEnd = completionNodeEnd;
	}

	public java.lang.String getIsKeyno() {
		return isKeyno;
	}

	public void setIsKeyno(java.lang.String isKeyno) {
		this.isKeyno = isKeyno;
	}

	public java.lang.String getDateEvolve() {
		return dateEvolve;
	}

	public void setDateEvolve(java.lang.String dateEvolve) {
		this.dateEvolve = dateEvolve;
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

	public java.lang.String getWorkClass() {
		return workClass;
	}

	public void setWorkClass(java.lang.String workClass) {
		this.workClass = workClass;
	}

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "周报表";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "周报表";
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