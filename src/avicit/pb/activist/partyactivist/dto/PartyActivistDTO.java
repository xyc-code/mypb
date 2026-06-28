package avicit.pb.activist.partyactivist.dto;

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
 * @创建时间： 2022-01-25 09:20
 * @类说明：积极分子管理Dto
 * @修改记录：
 */
@PojoRemark(table="PARTY_ACTIVIST", object="PartyActivistDTO", name="积极分子管理")
public class PartyActivistDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 主键
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="主键")
	private java.lang.String id;

	/**
	 * 姓名ID
	 */
	@NotBlank(message = "姓名ID不能为空")
	@FieldRemark(column="USER_ID", field="userId", name="姓名ID", dataType="user")
	private java.lang.String userId;

	/**
	 * 姓名ID显示字段
	 */
	private java.lang.String userIdAlias;

	/**
	 * 部门ID
	 */
	@NotBlank(message = "部门ID不能为空")
	@FieldRemark(column="DEPT_ID", field="deptId", name="部门ID", dataType="dept")
	private java.lang.String deptId;

	/**
	 * 部门ID显示字段
	 */
	private java.lang.String deptIdAlias;

	/**
	 * 党支部ID
	 */
	@NotBlank(message = "党支部ID不能为空")
	@FieldRemark(column="PARTY_ID", field="partyId", name="党支部ID")
	private java.lang.String partyId;
	
	/**
	 * 党支部ID显示字段
	 */
	private java.lang.String partyIdAlias;


	public java.lang.String getPartyIdAlias() {
		return partyIdAlias;
	}

	public void setPartyIdAlias(java.lang.String partyIdAlias) {
		this.partyIdAlias = partyIdAlias;
	}

	/**
	 * 人员编码
	 */
	@NotBlank(message = "人员编码不能为空")
	@FieldRemark(column="USER_CODE", field="userCode", name="人员编码")
	private java.lang.String userCode;

	/**
	 * 性别
	 */
	@NotBlank(message = "性别不能为空")
	@FieldRemark(column="SEX", field="sex", name="性别", dataType="lookup", lookupType="PLATFORM_SEX")
	private java.lang.String sex;
	private java.lang.String sexName;

	/**
	 * 出行年月
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="BIRTHDAY", field="birthday", name="出生年月")
	private java.util.Date birthday;

	/**
	 * 出行年月起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date birthdayBegin;

	/**
	 * 出行年月止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date birthdayEnd;

	/**
	 * 民族
	 */
	@NotBlank(message = "民族不能为空")
	@FieldRemark(column="NATION", field="nation", name="民族")
	private java.lang.String nation;

	/**
	 * 籍贯
	 */
	@NotBlank(message = "籍贯不能为空")
	@FieldRemark(column="ORIGN", field="orign", name="籍贯")
	private java.lang.String orign;

	/**
	 * 文化程度
	 */
	@NotBlank(message = "文化程度不能为空")
	@FieldRemark(column="EDUCATION_LEVEL", field="educationLevel", name="文化程度", dataType="lookup", lookupType="PA_EDUCATION_LEVEL")
	private java.lang.String educationLevel;
	private java.lang.String educationLevelName;

	/**
	 * 身份证号
	 */
	@NotBlank(message = "身份证号不能为空")
	@FieldRemark(column="IDCARD", field="idcard", name="身份证号")
	private java.lang.String idcard;

	/**
	 * 职称
	 */
	@FieldRemark(column="PROFESSIONAL_RANK", field="professionalRank", name="职称")
	private java.lang.String professionalRank;

	/**
	 * 职务
	 */
	@FieldRemark(column="POST", field="post", name="职务")
	private java.lang.String post;

	/**
	 * 培养联系人
	 */
	@NotBlank(message = "培养联系人不能为空")
	@FieldRemark(column="INTRODUCER", field="introducer", name="培养联系人")
	private java.lang.String introducer;

	/**
	 * 参加工作时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@NotNull(message = "参加工作时间不能为空")
	@FieldRemark(column="WORK_TIME", field="workTime", name="参加工作时间")
	private java.util.Date workTime;

	/**
	 * 参加工作时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date workTimeBegin;

	/**
	 * 参加工作时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date workTimeEnd;

	/**
	 * 积极分子类别
	 */
	@FieldRemark(column="ACTIVIST_TYPE", field="activistType", name="积极分子类别", dataType="lookup", lookupType="PA_PARTY_TYPE")
	private java.lang.String activistType;
	private java.lang.String activistTypeName;

	/**
	 * 申请入党时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@NotNull(message = "申请入党时间不能为空")
	@FieldRemark(column="REQPARTY_TIME", field="reqpartyTime", name="申请入党时间")
	private java.util.Date reqpartyTime;

	/**
	 * 申请入党时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date reqpartyTimeBegin;

	/**
	 * 申请入党时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date reqpartyTimeEnd;

	/**
	 * 确定积极分子时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="FIXACTIVIST_TIME", field="fixactivistTime", name="确定积极分子时间")
	private java.util.Date fixactivistTime;

	/**
	 * 确定积极分子时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fixactivistTimeBegin;

	/**
	 * 确定积极分子时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fixactivistTimeEnd;

	/**
	 * 确定重点培养时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="FIXSTRESS_TIME", field="fixstressTime", name="确定重点培养时间")
	private java.util.Date fixstressTime;

	/**
	 * 确定重点培养时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fixstressTimeBegin;

	/**
	 * 确定重点培养时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fixstressTimeEnd;

	/**
	 * 确定发展对象时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="FIXTARGET_TIME", field="fixtargetTime", name="确定发展对象时间")
	private java.util.Date fixtargetTime;

	/**
	 * 确定发展对象时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fixtargetTimeBegin;

	/**
	 * 确定发展对象时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fixtargetTimeEnd;

	/**
	 * 团员
	 */
	@NotBlank(message = "团员不能为空")
	@FieldRemark(column="LEAGUE_MEMBER", field="leagueMember", name="团员", dataType="lookup", lookupType="PA_YN_LEAGUE")
	private java.lang.String leagueMember;
	private java.lang.String leagueMemberName;

	/**
	 * 所在班组党员数
	 */
	@FieldRemark(column="PARTY_MEMBERS", field="partyMembers", name="所在班组党员数")
	private java.lang.Long partyMembers;

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
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_01", field="attribute01", name="年龄")
	private java.lang.String attribute01;

	/**
	 * 扩展字段
	 */
	//@FieldRemark(column="ATTRIBUTE_02", field="attribute02", name="扩展字段")
	@FieldRemark(column="ATTRIBUTE_02", field="attribute02", name="教育类别", dataType="lookup", lookupType="PA_EDUCATION_TYPE")
	private java.lang.String attribute02;

	/**
	 * 扩展字段
	 */
	//@FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="扩展字段")
	@FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="职称等级", dataType="lookup", lookupType="PA_PROFESSIONAL_RANK_LEVEL")
	private java.lang.String attribute03;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_04", field="attribute04", name="技能等级", dataType="lookup", lookupType="PA_SKILL_LEVEL")
	private java.lang.String attribute04;

	/**
	 * 扩展字段
	 */
	//@FieldRemark(column="ATTRIBUTE_05", field="attribute05", name="扩展字段")
	@FieldRemark(column="ATTRIBUTE_05", field="attribute05", name="身份类别", dataType="lookup", lookupType="PA_CATEGORY")
	private java.lang.String attribute05;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_06", field="attribute06", name="联系电话")
	private java.lang.String attribute06;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_07", field="attribute07", name="出生地")
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

	/**
	 * 扩展字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTRIBUTE_11", field="attribute11", name="毕业时间")
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
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_12", field="attribute12", name="扩展字段")
	private java.lang.Long attribute12;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_13", field="attribute13", name="扩展字段")
	private java.lang.String attribute13;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_14", field="attribute14", name="扩展字段")
	private java.lang.String attribute14;

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
	@FieldRemark(column="ATTRIBUTE_16", field="attribute16", name="扩展字段")
	private java.lang.String attribute16;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_17", field="attribute17", name="扩展字段")
	private java.lang.String attribute17;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_18", field="attribute18", name="扩展字段")
	private java.lang.String attribute18;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_19", field="attribute19", name="扩展字段")
	private java.lang.String attribute19;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_20", field="attribute20", name="扩展字段")
	private java.lang.String attribute20;

	/**
	 * 是否有效
	 */
	@FieldRemark(column="STATUS", field="status", name="是否有效",dataType="lookup", lookupType="PLATFORM_VALID_FLAG")
	private java.lang.String status;
	private java.lang.String statusName;
	/*虚拟列*/
	@FieldRemark(column="chilrdArr", field="chilrdArr", name="子表字段")
	private   String chilrdArr;

	public String getChilrdArr() {
		return chilrdArr;
	}

	public void setChilrdArr(String chilrdArr) {
		this.chilrdArr = chilrdArr;
	}

	public java.lang.String getStatusName() {
		return statusName;
	}

	public void setStatusName(java.lang.String statusName) {
		this.statusName = statusName;
	}


	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}

	public java.lang.String getUserId(){
		return userId;
	}

	public void setUserId(java.lang.String userId){
		this.userId = userId;
	}

	public java.lang.String getUserIdAlias(){
		return userIdAlias;
	}

	public void setUserIdAlias(java.lang.String userIdAlias){
		this.userIdAlias = userIdAlias;
	}

	public java.lang.String getDeptId(){
		return deptId;
	}

	public void setDeptId(java.lang.String deptId){
		this.deptId = deptId;
	}

	public java.lang.String getDeptIdAlias(){
		return deptIdAlias;
	}

	public void setDeptIdAlias(java.lang.String deptIdAlias){
		this.deptIdAlias = deptIdAlias;
	}

	public java.lang.String getPartyId(){
		return partyId;
	}

	public void setPartyId(java.lang.String partyId){
		this.partyId = partyId;
	}

	public java.lang.String getUserCode(){
		return userCode;
	}

	public void setUserCode(java.lang.String userCode){
		this.userCode = userCode;
	}

    public java.lang.String getSex(){
		return sex;
	}

	public void setSex(java.lang.String sex){
		this.sex = sex;
	}

	public java.lang.String getSexName(){
		return sexName;
	}

	public void setSexName(java.lang.String sexName){
		this.sexName = sexName;
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

    public java.lang.String getEducationLevel(){
		return educationLevel;
	}

	public void setEducationLevel(java.lang.String educationLevel){
		this.educationLevel = educationLevel;
	}

	public java.lang.String getEducationLevelName(){
		return educationLevelName;
	}

	public void setEducationLevelName(java.lang.String educationLevelName){
		this.educationLevelName = educationLevelName;
	}

	public java.lang.String getIdcard(){
		return idcard;
	}

	public void setIdcard(java.lang.String idcard){
		this.idcard = idcard;
	}

	public java.lang.String getProfessionalRank(){
		return professionalRank;
	}

	public void setProfessionalRank(java.lang.String professionalRank){
		this.professionalRank = professionalRank;
	}

	public java.lang.String getPost(){
		return post;
	}

	public void setPost(java.lang.String post){
		this.post = post;
	}

	public java.lang.String getIntroducer(){
		return introducer;
	}

	public void setIntroducer(java.lang.String introducer){
		this.introducer = introducer;
	}

	public java.util.Date getWorkTime(){
		return workTime;
	}

	public void setWorkTime(java.util.Date workTime){
		this.workTime = workTime;
	}

	public java.util.Date getWorkTimeBegin(){
		return workTimeBegin;
	}

	public void setWorkTimeBegin(java.util.Date workTimeBegin){
		this.workTimeBegin = workTimeBegin;
	}

	public java.util.Date getWorkTimeEnd(){
		return workTimeEnd;
	}

	public void setWorkTimeEnd(java.util.Date workTimeEnd){
		this.workTimeEnd = workTimeEnd;
	}

    public java.lang.String getActivistType(){
		return activistType;
	}

	public void setActivistType(java.lang.String activistType){
		this.activistType = activistType;
	}

	public java.lang.String getActivistTypeName(){
		return activistTypeName;
	}

	public void setActivistTypeName(java.lang.String activistTypeName){
		this.activistTypeName = activistTypeName;
	}

	public java.util.Date getReqpartyTime(){
		return reqpartyTime;
	}

	public void setReqpartyTime(java.util.Date reqpartyTime){
		this.reqpartyTime = reqpartyTime;
	}

	public java.util.Date getReqpartyTimeBegin(){
		return reqpartyTimeBegin;
	}

	public void setReqpartyTimeBegin(java.util.Date reqpartyTimeBegin){
		this.reqpartyTimeBegin = reqpartyTimeBegin;
	}

	public java.util.Date getReqpartyTimeEnd(){
		return reqpartyTimeEnd;
	}

	public void setReqpartyTimeEnd(java.util.Date reqpartyTimeEnd){
		this.reqpartyTimeEnd = reqpartyTimeEnd;
	}

	public java.util.Date getFixactivistTime(){
		return fixactivistTime;
	}

	public void setFixactivistTime(java.util.Date fixactivistTime){
		this.fixactivistTime = fixactivistTime;
	}

	public java.util.Date getFixactivistTimeBegin(){
		return fixactivistTimeBegin;
	}

	public void setFixactivistTimeBegin(java.util.Date fixactivistTimeBegin){
		this.fixactivistTimeBegin = fixactivistTimeBegin;
	}

	public java.util.Date getFixactivistTimeEnd(){
		return fixactivistTimeEnd;
	}

	public void setFixactivistTimeEnd(java.util.Date fixactivistTimeEnd){
		this.fixactivistTimeEnd = fixactivistTimeEnd;
	}

	public java.util.Date getFixstressTime(){
		return fixstressTime;
	}

	public void setFixstressTime(java.util.Date fixstressTime){
		this.fixstressTime = fixstressTime;
	}

	public java.util.Date getFixstressTimeBegin(){
		return fixstressTimeBegin;
	}

	public void setFixstressTimeBegin(java.util.Date fixstressTimeBegin){
		this.fixstressTimeBegin = fixstressTimeBegin;
	}

	public java.util.Date getFixstressTimeEnd(){
		return fixstressTimeEnd;
	}

	public void setFixstressTimeEnd(java.util.Date fixstressTimeEnd){
		this.fixstressTimeEnd = fixstressTimeEnd;
	}

	public java.util.Date getFixtargetTime(){
		return fixtargetTime;
	}

	public void setFixtargetTime(java.util.Date fixtargetTime){
		this.fixtargetTime = fixtargetTime;
	}

	public java.util.Date getFixtargetTimeBegin(){
		return fixtargetTimeBegin;
	}

	public void setFixtargetTimeBegin(java.util.Date fixtargetTimeBegin){
		this.fixtargetTimeBegin = fixtargetTimeBegin;
	}

	public java.util.Date getFixtargetTimeEnd(){
		return fixtargetTimeEnd;
	}

	public void setFixtargetTimeEnd(java.util.Date fixtargetTimeEnd){
		this.fixtargetTimeEnd = fixtargetTimeEnd;
	}

    public java.lang.String getLeagueMember(){
		return leagueMember;
	}

	public void setLeagueMember(java.lang.String leagueMember){
		this.leagueMember = leagueMember;
	}

	public java.lang.String getLeagueMemberName(){
		return leagueMemberName;
	}

	public void setLeagueMemberName(java.lang.String leagueMemberName){
		this.leagueMemberName = leagueMemberName;
	}

	public java.lang.Long getPartyMembers(){
		return partyMembers;
	}

	public void setPartyMembers(java.lang.Long partyMembers){
		this.partyMembers = partyMembers;
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

	public java.lang.Long getAttribute12(){
		return attribute12;
	}

	public void setAttribute12(java.lang.Long attribute12){
		this.attribute12 = attribute12;
	}

	public java.lang.String getAttribute13(){
		return attribute13;
	}

	public void setAttribute13(java.lang.String attribute13){
		this.attribute13 = attribute13;
	}

	public java.lang.String getAttribute14(){
		return attribute14;
	}

	public void setAttribute14(java.lang.String attribute14){
		this.attribute14 = attribute14;
	}

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

	public java.lang.String getAttribute16(){
		return attribute16;
	}

	public void setAttribute16(java.lang.String attribute16){
		this.attribute16 = attribute16;
	}

	public java.lang.String getAttribute17(){
		return attribute17;
	}

	public void setAttribute17(java.lang.String attribute17){
		this.attribute17 = attribute17;
	}

	public java.lang.String getAttribute18(){
		return attribute18;
	}

	public void setAttribute18(java.lang.String attribute18){
		this.attribute18 = attribute18;
	}

	public java.lang.String getAttribute19(){
		return attribute19;
	}

	public void setAttribute19(java.lang.String attribute19){
		this.attribute19 = attribute19;
	}

	public java.lang.String getAttribute20(){
		return attribute20;
	}

	public void setAttribute20(java.lang.String attribute20){
		this.attribute20 = attribute20;
	}

	public java.lang.String getStatus(){
		return status;
	}

	public void setStatus(java.lang.String status){
		this.status = status;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "积极分子管理";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "积极分子管理";
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