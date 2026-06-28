package avicit.pb.organize.partyorganization.dto;

import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import avicit.platform6.core.domain.BaseTreeDTO;
import avicit.platform6.core.annotation.log.FieldRemark;
import avicit.platform6.core.annotation.log.LogField;
import avicit.platform6.core.annotation.log.PojoRemark;
import avicit.platform6.core.properties.PlatformConstant.LogType;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.validator.constraints.NotBlank;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-12 11:39
 * @类说明：党组织结构表Dto
 * @修改记录：
 */
@PojoRemark(table="PARTY_ORGANIZATION", object="PartyOrganizationDTO", name="党组织结构表")
public class PartyOrganizationDTO extends BaseTreeDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * PARTY_CODE
	 */
	@NotBlank(message = "PARTY_CODE不能为空")
	@FieldRemark(column="PARTY_CODE", field="partyCode", name="PARTY_CODE")
	private java.lang.String partyCode;

	/**
	 * PARTY_NAME
	 */
	@NotBlank(message = "PARTY_NAME不能为空")
	@FieldRemark(column="PARTY_NAME", field="partyName", name="PARTY_NAME")
	private java.lang.String partyName;

	/**
	 * IS_LEAD_PARTY
	 */
	@FieldRemark(column="IS_LEAD_PARTY", field="isLeadParty", name="IS_LEAD_PARTY")
	private java.lang.String isLeadParty;

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
	 * PARENT_ID
	 */
	@FieldRemark(column="PARENT_ID", field="parentId", name="PARENT_ID")
	private java.lang.String parentId;
	
	/**
	 * PARENT_ID显示字段
	 */
	private java.lang.String parentPartyName;

	/**
	 * VALID_FLAG
	 */
	@FieldRemark(column="VALID_FLAG", field="validFlag", name="VALID_FLAG")
	private java.lang.String validFlag;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_01", field="attribute01", name="扩展字段")
	private java.lang.String attribute01;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_02", field="attribute02", name="扩展字段")
	private java.lang.String attribute02;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="扩展字段")
	private java.lang.String attribute03;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_04", field="attribute04", name="扩展字段")
	private java.lang.String attribute04;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_05", field="attribute05", name="扩展字段")
	private java.lang.String attribute05;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_06", field="attribute06", name="扩展字段")
	private java.lang.String attribute06;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_07", field="attribute07", name="扩展字段")
	private java.lang.String attribute07;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_08", field="attribute08", name="扩展字段")
	private java.lang.String attribute08;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_09", field="attribute09", name="扩展字段")
	private java.lang.String attribute09;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_10", field="attribute10", name="扩展字段")
	private java.lang.String attribute10;

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}

	public java.lang.String getPartyCode(){
		return partyCode;
	}

	public void setPartyCode(java.lang.String partyCode){
		this.partyCode = partyCode;
	}

	public java.lang.String getPartyName(){
		return partyName;
	}

	public void setPartyName(java.lang.String partyName){
		this.partyName = partyName;
	}

	public java.lang.String getIsLeadParty(){
		return isLeadParty;
	}

	public void setIsLeadParty(java.lang.String isLeadParty){
		this.isLeadParty = isLeadParty;
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

    public java.lang.String getParentId(){
		return parentId;
	}

	public void setParentId(java.lang.String parentId){
		this.parentId = parentId;
	}

	public java.lang.String getParentPartyName(){
		return parentPartyName;
	}

	public void setParentPartyName(java.lang.String parentPartyName){
		this.parentPartyName = parentPartyName;
	}

	public java.lang.String getValidFlag(){
		return validFlag;
	}

	public void setValidFlag(java.lang.String validFlag){
		this.validFlag = validFlag;
	}

	public java.lang.String getAttribute01(){
		return attribute01;
	}

	public void setAttribute01(java.lang.String attribute01){
		this.attribute01 = attribute01;
	}

	public java.lang.String getAttribute02(){
		return attribute02;
	}

	public void setAttribute02(java.lang.String attribute02){
		this.attribute02 = attribute02;
	}

	public java.lang.String getAttribute03(){
		return attribute03;
	}

	public void setAttribute03(java.lang.String attribute03){
		this.attribute03 = attribute03;
	}

	public java.lang.String getAttribute04(){
		return attribute04;
	}

	public void setAttribute04(java.lang.String attribute04){
		this.attribute04 = attribute04;
	}

	public java.lang.String getAttribute05(){
		return attribute05;
	}

	public void setAttribute05(java.lang.String attribute05){
		this.attribute05 = attribute05;
	}

	public java.lang.String getAttribute06(){
		return attribute06;
	}

	public void setAttribute06(java.lang.String attribute06){
		this.attribute06 = attribute06;
	}

	public java.lang.String getAttribute07(){
		return attribute07;
	}

	public void setAttribute07(java.lang.String attribute07){
		this.attribute07 = attribute07;
	}

	public java.lang.String getAttribute08(){
		return attribute08;
	}

	public void setAttribute08(java.lang.String attribute08){
		this.attribute08 = attribute08;
	}

	public java.lang.String getAttribute09(){
		return attribute09;
	}

	public void setAttribute09(java.lang.String attribute09){
		this.attribute09 = attribute09;
	}

	public java.lang.String getAttribute10(){
		return attribute10;
	}

	public void setAttribute10(java.lang.String attribute10){
		this.attribute10 = attribute10;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "党组织结构表";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "党组织结构表";
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