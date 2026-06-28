package avicit.platform6.rljcRest.dto;

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
 * @作者：sunc
 * @邮箱：123@qq.com
 * @创建时间： 2024-08-16 11:00
 * @类说明：DYN_ACHIEVEMENTSDto
 * @修改记录：
 */
@PojoRemark(table="DYN_ACHIEVEMENTS", object="DynAchievementsDTO", name="DYN_ACHIEVEMENTS")
public class DynAchievementsDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

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
	 * 用户ID
	 */
	@FieldRemark(column="USER_ID", field="userId", name="用户ID")
	private String userId;

	/**
	 * 考核周期
	 */
	@FieldRemark(column="ACHIEVEMENTS_PERIOD", field="achievementsPeriod", name="考核周期")
	private String achievementsPeriod;

	/**
	 * 备注
	 */
	@FieldRemark(column="REMARKS", field="remarks", name="备注")
	private String remarks;

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
	 * 考核等级
	 */
	@FieldRemark(column="ACHIEVEMENTS_LEVEL", field="achievementsLevel", name="考核等级")
	private String achievementsLevel;

	/**
	 * 排序字段
	 */
	@FieldRemark(column="SORT_INDEX", field="sortIndex", name="排序字段")
	private String sortIndex;

	/**
	 * 逻辑删除标志
	 */
	@FieldRemark(column="DELETE_FLAG", field="deleteFlag", name="逻辑删除标志")
	private String deleteFlag;

	/**
	 * 绩效考核应用
	 */
	@FieldRemark(column="ACHIEVEMENTS_USE", field="achievementsUse", name="绩效考核应用")
	private String achievementsUse;
	
	/**
	 * 绩效考核ID
	 */
	@FieldRemark(column="ACHIEVEMENTS_Id", field="achievementsId", name="绩效考核ID")
	private String achievementsId;
	
	/**
	 * 党建用户ID
	 */
	@FieldRemark(column="DJ_USER_ID", field="djUserId", name="党建用户ID")
	private String djUserId;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private String id;

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

	public String getUserId(){
		return userId;
	}

	public void setUserId(String userId){
		this.userId = userId;
	}

	public String getAchievementsPeriod(){
		return achievementsPeriod;
	}

	public void setAchievementsPeriod(String achievementsPeriod){
		this.achievementsPeriod = achievementsPeriod;
	}

	public String getRemarks(){
		return remarks;
	}

	public void setRemarks(String remarks){
		this.remarks = remarks;
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

	public String getAchievementsLevel(){
		return achievementsLevel;
	}

	public void setAchievementsLevel(String achievementsLevel){
		this.achievementsLevel = achievementsLevel;
	}

	public String getSortIndex(){
		return sortIndex;
	}

	public void setSortIndex(String sortIndex){
		this.sortIndex = sortIndex;
	}

	public String getDeleteFlag(){
		return deleteFlag;
	}

	public void setDeleteFlag(String deleteFlag){
		this.deleteFlag = deleteFlag;
	}

	public String getAchievementsUse(){
		return achievementsUse;
	}

	public void setAchievementsUse(String achievementsUse){
		this.achievementsUse = achievementsUse;
	}

	public String getId(){
		return id;
	}

	public void setId(String id){
		this.id = id;
	}
	
	

	public String getAchievementsId() {
		return achievementsId;
	}

	public void setAchievementsId(String achievementsId) {
		this.achievementsId = achievementsId;
	}

	public String getDjUserId() {
		return djUserId;
	}

	public void setDjUserId(String djUserId) {
		this.djUserId = djUserId;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_ACHIEVEMENTS";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_ACHIEVEMENTS";
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