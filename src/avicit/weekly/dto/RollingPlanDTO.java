package avicit.weekly.dto;

import avicit.platform6.core.annotation.log.FieldRemark;
import avicit.platform6.core.annotation.log.LogField;
import avicit.platform6.core.domain.BeanDTO;
import avicit.platform6.core.properties.PlatformConstant.LogType;
import oracle.sql.CLOB;

import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.sql.Clob;
import java.util.Date;

import javax.persistence.Id;

public class RollingPlanDTO extends BeanDTO implements Serializable  {
	   private static final long serialVersionUID = 6916919448534364251L;
    @Id
    @LogField
    @FieldRemark(column = "id", field = "id", name = "表主键　")
    private String id;
    @LogField
    @FieldRemark(column = "CREATED_BY", field = "createdBy", name = "创建人ID")
    private String createdBy;
    @LogField
    @FieldRemark(column = "LAST_UPDATED_BY", field = "lastUpdatedBy", name = "最后更新人ID")
    private String lastUpdatedBy;
    @LogField
    @FieldRemark(column = "CREATION_DATE", field = "creationDate", name = "创建时间")
    private java.util.Date creationDate;
    @LogField
    @FieldRemark(column = "ROLLING_PLAN_CONTENT", field = "rollingPlanContent", name = "备注")
    private String rollingPlanContent;
    @LogField
    @FieldRemark(column = "LAST_UPDATE_DATE", field = "lastUpdateDate", name = "最后更新时间")
    private java.util.Date lastUpdateDate;
    @LogField
    @FieldRemark(column = "ROLLING_PLAN_ASSIGNMENT", field = "rollingPlanAssignment", name = "工作任务")
    private String rollingPlanAssignment;
    @LogField
    @FieldRemark(column = "ROLLING_PLAN_DATE", field = "rollingPlanDate", name = "月份")
    private String rollingPlanDate;
    @LogField
    @FieldRemark(column = "ROLLING_PLAN_TARGET", field = "rollingPlanTarget", name = "完成目标")
    private String rollingPlanTarget;
    @LogField
    @FieldRemark(column = "VERSION", field = "version", name = "版本")
    private Long version;
    @LogField
    @FieldRemark(column = "CREATED_DEPT", field = "createdDept", name = "创建人部门")
    private String createdDept;
    @LogField
    @FieldRemark(column = "ORG_IDENTITY", field = "orgIdentity", name = "组织ID")
    private String orgIdentity;
    @LogField
    @FieldRemark(column = "LAST_UPDATE_IP", field = "lastUpdateIp", name = "创建人IP")
    private String lastUpdateIp;
    @FieldRemark(column = "fk_sub_col_id", field = "fkSubColId", name = "外键")
	private java.lang.String fkSubColId;
    @LogField
    @FieldRemark(column = "DEPT_ID", field = "deptId", name = "部门ID")
    private String deptId;
    /*
   	 * 月份开始时间
   	 */
   	private String rollingPlanDateBegin;
   	/*
   	 * 月份截止时间
   	 */
   	private String rollingPlanDateEnd;
   	public String getRollingPlanDateBegin() {
   		return rollingPlanDateBegin;
   	}

   	public void setRollingPlanDateBegin(String rollingPlanDateBegin) {
   		this.rollingPlanDateBegin = rollingPlanDateBegin;
   	}

   	public String getRollingPlanDateEnd() {
   		return rollingPlanDateEnd;
   	}

   	public void setRollingPlanDateEnd(String rollingPlanDateEnd) {
   		this.rollingPlanDateEnd = rollingPlanDateEnd;
   	}

    public void setDeptId(String deptId) {
        this.deptId = deptId;
    }

    public String getDeptId() {
        return deptId;
    }

    @LogField
    @FieldRemark(column = "ROLLING_PLANDATE", field = "rollingPlandate", name = "部分ID")
    private String rollingPlandate;
   
   


    public String getRollingPlandate() {
        return rollingPlandate;
    }

    public void setRollingPlandate(String rollingPlandate) {
        this.rollingPlandate = rollingPlandate;
    }
    
    public java.lang.String getFkSubColId() {
		return fkSubColId;
	}

	public void setFkSubColId(java.lang.String fkSubColId) {
		this.fkSubColId = fkSubColId;
	}


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getLastUpdatedBy() {
        return lastUpdatedBy;
    }

    public void setLastUpdatedBy(String lastUpdatedBy) {
        this.lastUpdatedBy = lastUpdatedBy;
    }

    public java.util.Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(java.util.Date creationDate) {
        this.creationDate = creationDate;
    }

    public String getRollingPlanContent() {
        return rollingPlanContent;
    }

    public void setRollingPlanContent(String rollingPlanContent) {
        this.rollingPlanContent = rollingPlanContent;
    }

    public java.util.Date getLastUpdateDate() {
        return lastUpdateDate;
    }

    public void setLastUpdateDate(java.util.Date lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
    }

    public String getRollingPlanAssignment() {
        return rollingPlanAssignment;
    }

    public void setRollingPlanAssignment(String rollingPlanAssignment) {
        this.rollingPlanAssignment = rollingPlanAssignment;
    }

    public String getRollingPlanDate() {
        return rollingPlanDate;
    }

    public void setRollingPlanDate(String rollingPlanDate) {
        this.rollingPlanDate = rollingPlanDate;
    }

    public String getRollingPlanTarget() {
        return rollingPlanTarget;
    }

    public void setRollingPlanTarget(String rollingPlanTarget) {
        this.rollingPlanTarget = rollingPlanTarget;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    public String getCreatedDept() {
        return createdDept;
    }

    public void setCreatedDept(String createdDept) {
        this.createdDept = createdDept;
    }

    public String getOrgIdentity() {
        return orgIdentity;
    }

    public void setOrgIdentity(String orgIdentity) {
        this.orgIdentity = orgIdentity;
    }

    public String getLastUpdateIp() {
        return lastUpdateIp;
    }

    public void setLastUpdateIp(String lastUpdateIp) {
        this.lastUpdateIp = lastUpdateIp;
    }
    public String getLogFormName() {
		if(super.logFormName==null||super.logFormName.equals("")){
			return "ROLLING_PLAN";
		}else{
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if(super.logTitle==null||super.logTitle.equals("")){
			return "ROLLING_PLAN";
		}else{
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
