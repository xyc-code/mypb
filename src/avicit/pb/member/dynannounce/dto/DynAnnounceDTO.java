package avicit.pb.member.dynannounce.dto;

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
 * @创建时间： 2024-05-30 15:02
 * @类说明：DYN_ANNOUNCEDto
 * @修改记录：
 */
@PojoRemark(table="DYN_ANNOUNCE", object="DynAnnounceDTO", name="DYN_ANNOUNCE")
public class DynAnnounceDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 联系人
	 */
	@FieldRemark(column="CONTACTS", field="contacts", name="联系人")
	private String contacts;

	/**
	 * 协同党支部
	 */
	@FieldRemark(column="COLLABORATIVE_PARTY_BRANCH", field="collaborativePartyBranch", name="协同党支部")
	private String collaborativePartyBranch;

	/**
	 * 项目级别
	 */
	@FieldRemark(column="ENTRY_LEVEL", field="entryLevel", name="项目级别")
	private String entryLevel;

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
	 * 质量攻关成效
	 */
	@FieldRemark(column="EFFECT", field="effect", name="质量攻关成效")
	private String effect;

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
	 * 团队主要成员
	 */
	@FieldRemark(column="MEMBER", field="member", name="团队主要成员")
	private String member;

	/**
	 * 党支部发挥作用情况
	 */
	@FieldRemark(column="PERFORMANCE_SITUATION", field="performanceSituation", name="党支部发挥作用情况")
	private String performanceSituation;

	/**
	 * 承接党支部ID
	 */
	@FieldRemark(column="UNDERTAKE_PARTY_BRANCH_ID", field="undertakePartyBranchId", name="承接党支部ID")
	private String undertakePartyBranchId;

	/**
	 * 团队主要成员ID
	 */
	@FieldRemark(column="MEMBER_ID", field="memberId", name="团队主要成员ID")
	private String memberId;

	/**
	 * 协同党支部ID
	 */
	@FieldRemark(column="COLLABORATIVE_PARTY_BRANCH_ID", field="collaborativePartyBranchId", name="协同党支部ID")
	private String collaborativePartyBranchId;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private String id;

	/**
	 * 联系方式
	 */
	@FieldRemark(column="CONTACT_INFORMATION", field="contactInformation", name="联系方式")
	private String contactInformation;

	/**
	 * 项目名称
	 */
	@FieldRemark(column="ENTRY_NAME", field="entryName", name="项目名称")
	private String entryName;

	/**
	 * 承接党支部
	 */
	@FieldRemark(column="UNDERTAKE_PARTY_BRANCH", field="undertakePartyBranch", name="承接党支部")
	private String undertakePartyBranch;

	/**
	 * 活动计划结束时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="END_DATE", field="endDate", name="活动计划结束时间")
	private java.util.Date endDate;

	/**
	 * 活动计划结束时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date endDateBegin;

	/**
	 * 活动计划结束时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date endDateEnd;

	/**
	 * 字段_4
	 */
	@FieldRemark(column="DATA_4", field="data4", name="字段_4")
	private String data4;

	public String getContacts(){
		return contacts;
	}

	public void setContacts(String contacts){
		this.contacts = contacts;
	}

	public String getCollaborativePartyBranch(){
		return collaborativePartyBranch;
	}

	public void setCollaborativePartyBranch(String collaborativePartyBranch){
		this.collaborativePartyBranch = collaborativePartyBranch;
	}

	public String getEntryLevel(){
		return entryLevel;
	}

	public void setEntryLevel(String entryLevel){
		this.entryLevel = entryLevel;
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

	public String getEffect(){
		return effect;
	}

	public void setEffect(String effect){
		this.effect = effect;
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

	public String getMember(){
		return member;
	}

	public void setMember(String member){
		this.member = member;
	}

	public String getPerformanceSituation(){
		return performanceSituation;
	}

	public void setPerformanceSituation(String performanceSituation){
		this.performanceSituation = performanceSituation;
	}

	public String getUndertakePartyBranchId(){
		return undertakePartyBranchId;
	}

	public void setUndertakePartyBranchId(String undertakePartyBranchId){
		this.undertakePartyBranchId = undertakePartyBranchId;
	}

	public String getMemberId(){
		return memberId;
	}

	public void setMemberId(String memberId){
		this.memberId = memberId;
	}

	public String getCollaborativePartyBranchId(){
		return collaborativePartyBranchId;
	}

	public void setCollaborativePartyBranchId(String collaborativePartyBranchId){
		this.collaborativePartyBranchId = collaborativePartyBranchId;
	}

	public String getId(){
		return id;
	}

	public void setId(String id){
		this.id = id;
	}

	public String getContactInformation(){
		return contactInformation;
	}

	public void setContactInformation(String contactInformation){
		this.contactInformation = contactInformation;
	}

	public String getEntryName(){
		return entryName;
	}

	public void setEntryName(String entryName){
		this.entryName = entryName;
	}

	public String getUndertakePartyBranch(){
		return undertakePartyBranch;
	}

	public void setUndertakePartyBranch(String undertakePartyBranch){
		this.undertakePartyBranch = undertakePartyBranch;
	}

	public java.util.Date getEndDate(){
		return endDate;
	}

	public void setEndDate(java.util.Date endDate){
		this.endDate = endDate;
	}

	public java.util.Date getEndDateBegin(){
		return endDateBegin;
	}

	public void setEndDateBegin(java.util.Date endDateBegin){
		this.endDateBegin = endDateBegin;
	}

	public java.util.Date getEndDateEnd(){
		return endDateEnd;
	}

	public void setEndDateEnd(java.util.Date endDateEnd){
		this.endDateEnd = endDateEnd;
	}

	public String getData4(){
		return data4;
	}

	public void setData4(String data4){
		this.data4 = data4;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_ANNOUNCE";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_ANNOUNCE";
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