package avicit.tu.dyntradeunionmb.dto;

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
 * @作者：psutest
 * @邮箱：psutest@163.com
 * @创建时间： 2023-08-02 15:30
 * @类说明：DYN_TRADE_UNION_MBDto
 * @修改记录：
 */
@PojoRemark(table="DYN_TRADE_UNION_MB", object="DynTradeUnionMbDTO", name="DYN_TRADE_UNION_MB")
public class DynTradeUnionMbDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 扩展字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTRIBUTE_15", field="attribute15", name="扩展字段")
	private java.util.Date attribute15;

	/**
	 * 扩展字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attribute15Begin;

	/**
	 * 扩展字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attribute15End;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_14", field="attribute14", name="扩展字段")
	private java.lang.Long attribute14;

	/**
	 * 扩展字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTRIBUTE_13", field="attribute13", name="扩展字段")
	private java.util.Date attribute13;

	/**
	 * 扩展字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attribute13Begin;

	/**
	 * 扩展字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attribute13End;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_12", field="attribute12", name="扩展字段")
	private java.lang.Long attribute12;

	/**
	 * 5身份证号
	 */
	@FieldRemark(column="IDCARD", field="idcard", name="5身份证号")
	private java.lang.String idcard;

	/**
	 * 扩展字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTRIBUTE_11", field="attribute11", name="扩展字段")
	private java.util.Date attribute11;

	/**
	 * 扩展字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attribute11Begin;

	/**
	 * 扩展字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attribute11End;

	/**
	 * 工会
	 */
	@FieldRemark(column="TRADE_UNION_ID", field="tradeUnionId", name="工会")
	private java.lang.String tradeUnionId;

	/**
	 * 13职务
	 */
	@FieldRemark(column="POST", field="post", name="13职务")
	private java.lang.String post;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_10", field="attribute10", name="扩展字段")
	private java.lang.String attribute10;

	/**
	 * 性别
	 */
	@FieldRemark(column="SEX", field="sex", name="性别")
	private java.lang.String sex;

	/**
	 * 1姓名ID
	 */
	@FieldRemark(column="USER_ID", field="userId", name="1姓名ID")
	private java.lang.String userId;

	/**
	 * 最后更新时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date lastUpdateDateBegin;

	/**
	 * 最后更新时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date lastUpdateDateEnd;

	/**
	 * 9民族
	 */
	@FieldRemark(column="NATION", field="nation", name="9民族")
	private java.lang.String nation;

	/**
	 * 10籍贯
	 */
	@FieldRemark(column="ORIGN", field="orign", name="10籍贯")
	private java.lang.String orign;

	/**
	 * 17会费金额(季度)
	 */
	@FieldRemark(column="PARTY_MONEY", field="partyMoney", name="17会费金额(季度)")
	private java.lang.Long partyMoney;

	/**
	 * 是否转出IN在内部OUT已经转出
	 */
	@FieldRemark(column="STATUS", field="status", name="是否转出IN在内部OUT已经转出")
	private java.lang.String status;

	/**
	 * 15身份类别
	 */
	@FieldRemark(column="CATEGORY", field="category", name="15身份类别")
	private java.lang.String category;

	/**
	 * 字段_4
	 */
	@FieldRemark(column="DATA_4", field="data4", name="字段_4")
	private java.lang.String data4;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 6出行年月
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="BIRTHDAY", field="birthday", name="6出行年月")
	private java.util.Date birthday;

	/**
	 * 6出行年月起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date birthdayBegin;

	/**
	 * 6出行年月止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date birthdayEnd;

	/**
	 * 2部门ID
	 */
	@FieldRemark(column="DEPT_ID", field="deptId", name="2部门ID")
	private java.lang.String deptId;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_04", field="attribute04", name="扩展字段")
	private java.lang.String attribute04;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="扩展字段")
	private java.lang.String attribute03;

	/**
	 * B流程中E流程完成
	 */
	@FieldRemark(column="ATTRIBUTE_02", field="attribute02", name="B流程中E流程完成")
	private java.lang.String attribute02;

	/**
	 * 11文化程度
	 */
	@FieldRemark(column="EDUCATION_LEVEL", field="educationLevel", name="11文化程度")
	private java.lang.String educationLevel;

	/**
	 * 7入会时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="JOIN_PARTY", field="joinParty", name="7入会时间")
	private java.util.Date joinParty;

	/**
	 * 7入会时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date joinPartyBegin;

	/**
	 * 7入会时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date joinPartyEnd;

	/**
	 * 创建时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date creationDateBegin;

	/**
	 * 创建时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date creationDateEnd;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_09", field="attribute09", name="扩展字段")
	private java.lang.String attribute09;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_08", field="attribute08", name="扩展字段")
	private java.lang.String attribute08;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_07", field="attribute07", name="扩展字段")
	private java.lang.String attribute07;

	/**
	 * 14职称
	 */
	@FieldRemark(column="PROFESSIONAL_RANK", field="professionalRank", name="14职称")
	private java.lang.String professionalRank;

	/**
	 * 16在职/离职
	 */
	@FieldRemark(column="ONOFF_JOB", field="onoffJob", name="16在职/离职")
	private java.lang.String onoffJob;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_06", field="attribute06", name="扩展字段")
	private java.lang.String attribute06;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_05", field="attribute05", name="扩展字段")
	private java.lang.String attribute05;

	/**
	 * 4人员编码
	 */
	@FieldRemark(column="USER_CODE", field="userCode", name="4人员编码")
	private java.lang.String userCode;

	/**
	 * 12政治面貌
	 */
	@FieldRemark(column="POLITICAL_OUTLOOK", field="politicalOutlook", name="12政治面貌")
	private java.lang.String politicalOutlook;

	public java.util.Date getAttribute15(){
		return attribute15;
	}

	public void setAttribute15(java.util.Date attribute15){
		this.attribute15 = attribute15;
	}

	public java.util.Date getAttribute15Begin(){
		return attribute15Begin;
	}

	public void setAttribute15Begin(java.util.Date attribute15Begin){
		this.attribute15Begin = attribute15Begin;
	}

	public java.util.Date getAttribute15End(){
		return attribute15End;
	}

	public void setAttribute15End(java.util.Date attribute15End){
		this.attribute15End = attribute15End;
	}

	public java.lang.Long getAttribute14(){
		return attribute14;
	}

	public void setAttribute14(java.lang.Long attribute14){
		this.attribute14 = attribute14;
	}

	public java.util.Date getAttribute13(){
		return attribute13;
	}

	public void setAttribute13(java.util.Date attribute13){
		this.attribute13 = attribute13;
	}

	public java.util.Date getAttribute13Begin(){
		return attribute13Begin;
	}

	public void setAttribute13Begin(java.util.Date attribute13Begin){
		this.attribute13Begin = attribute13Begin;
	}

	public java.util.Date getAttribute13End(){
		return attribute13End;
	}

	public void setAttribute13End(java.util.Date attribute13End){
		this.attribute13End = attribute13End;
	}

	public java.lang.Long getAttribute12(){
		return attribute12;
	}

	public void setAttribute12(java.lang.Long attribute12){
		this.attribute12 = attribute12;
	}

	public java.lang.String getIdcard(){
		return idcard;
	}

	public void setIdcard(java.lang.String idcard){
		this.idcard = idcard;
	}

	public java.util.Date getAttribute11(){
		return attribute11;
	}

	public void setAttribute11(java.util.Date attribute11){
		this.attribute11 = attribute11;
	}

	public java.util.Date getAttribute11Begin(){
		return attribute11Begin;
	}

	public void setAttribute11Begin(java.util.Date attribute11Begin){
		this.attribute11Begin = attribute11Begin;
	}

	public java.util.Date getAttribute11End(){
		return attribute11End;
	}

	public void setAttribute11End(java.util.Date attribute11End){
		this.attribute11End = attribute11End;
	}

	public java.lang.String getTradeUnionId(){
		return tradeUnionId;
	}

	public void setTradeUnionId(java.lang.String tradeUnionId){
		this.tradeUnionId = tradeUnionId;
	}

	public java.lang.String getPost(){
		return post;
	}

	public void setPost(java.lang.String post){
		this.post = post;
	}

	public java.lang.String getAttribute10(){
		return attribute10;
	}

	public void setAttribute10(java.lang.String attribute10){
		this.attribute10 = attribute10;
	}

	public java.lang.String getSex(){
		return sex;
	}

	public void setSex(java.lang.String sex){
		this.sex = sex;
	}

	public java.lang.String getUserId(){
		return userId;
	}

	public void setUserId(java.lang.String userId){
		this.userId = userId;
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

	public java.lang.String getNation(){
		return nation;
	}

	public void setNation(java.lang.String nation){
		this.nation = nation;
	}

	public java.lang.String getOrign(){
		return orign;
	}

	public void setOrign(java.lang.String orign){
		this.orign = orign;
	}

	public java.lang.Long getPartyMoney(){
		return partyMoney;
	}

	public void setPartyMoney(java.lang.Long partyMoney){
		this.partyMoney = partyMoney;
	}

	public java.lang.String getStatus(){
		return status;
	}

	public void setStatus(java.lang.String status){
		this.status = status;
	}

	public java.lang.String getCategory(){
		return category;
	}

	public void setCategory(java.lang.String category){
		this.category = category;
	}

	public java.lang.String getData4(){
		return data4;
	}

	public void setData4(java.lang.String data4){
		this.data4 = data4;
	}

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}

	public java.util.Date getBirthday(){
		return birthday;
	}

	public void setBirthday(java.util.Date birthday){
		this.birthday = birthday;
	}

	public java.util.Date getBirthdayBegin(){
		return birthdayBegin;
	}

	public void setBirthdayBegin(java.util.Date birthdayBegin){
		this.birthdayBegin = birthdayBegin;
	}

	public java.util.Date getBirthdayEnd(){
		return birthdayEnd;
	}

	public void setBirthdayEnd(java.util.Date birthdayEnd){
		this.birthdayEnd = birthdayEnd;
	}

	public java.lang.String getDeptId(){
		return deptId;
	}

	public void setDeptId(java.lang.String deptId){
		this.deptId = deptId;
	}

	public java.lang.String getAttribute04(){
		return attribute04;
	}

	public void setAttribute04(java.lang.String attribute04){
		this.attribute04 = attribute04;
	}

	public java.lang.String getAttribute03(){
		return attribute03;
	}

	public void setAttribute03(java.lang.String attribute03){
		this.attribute03 = attribute03;
	}

	public java.lang.String getAttribute02(){
		return attribute02;
	}

	public void setAttribute02(java.lang.String attribute02){
		this.attribute02 = attribute02;
	}

	public java.lang.String getEducationLevel(){
		return educationLevel;
	}

	public void setEducationLevel(java.lang.String educationLevel){
		this.educationLevel = educationLevel;
	}

	public java.util.Date getJoinParty(){
		return joinParty;
	}

	public void setJoinParty(java.util.Date joinParty){
		this.joinParty = joinParty;
	}

	public java.util.Date getJoinPartyBegin(){
		return joinPartyBegin;
	}

	public void setJoinPartyBegin(java.util.Date joinPartyBegin){
		this.joinPartyBegin = joinPartyBegin;
	}

	public java.util.Date getJoinPartyEnd(){
		return joinPartyEnd;
	}

	public void setJoinPartyEnd(java.util.Date joinPartyEnd){
		this.joinPartyEnd = joinPartyEnd;
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

	public java.lang.String getAttribute09(){
		return attribute09;
	}

	public void setAttribute09(java.lang.String attribute09){
		this.attribute09 = attribute09;
	}

	public java.lang.String getAttribute08(){
		return attribute08;
	}

	public void setAttribute08(java.lang.String attribute08){
		this.attribute08 = attribute08;
	}

	public java.lang.String getAttribute07(){
		return attribute07;
	}

	public void setAttribute07(java.lang.String attribute07){
		this.attribute07 = attribute07;
	}

	public java.lang.String getProfessionalRank(){
		return professionalRank;
	}

	public void setProfessionalRank(java.lang.String professionalRank){
		this.professionalRank = professionalRank;
	}

	public java.lang.String getOnoffJob(){
		return onoffJob;
	}

	public void setOnoffJob(java.lang.String onoffJob){
		this.onoffJob = onoffJob;
	}

	public java.lang.String getAttribute06(){
		return attribute06;
	}

	public void setAttribute06(java.lang.String attribute06){
		this.attribute06 = attribute06;
	}

	public java.lang.String getAttribute05(){
		return attribute05;
	}

	public void setAttribute05(java.lang.String attribute05){
		this.attribute05 = attribute05;
	}

	public java.lang.String getUserCode(){
		return userCode;
	}

	public void setUserCode(java.lang.String userCode){
		this.userCode = userCode;
	}

	public java.lang.String getPoliticalOutlook(){
		return politicalOutlook;
	}

	public void setPoliticalOutlook(java.lang.String politicalOutlook){
		this.politicalOutlook = politicalOutlook;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_TRADE_UNION_MB";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_TRADE_UNION_MB";
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