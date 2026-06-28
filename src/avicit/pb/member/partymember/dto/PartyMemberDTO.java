package avicit.pb.member.partymember.dto;

import javax.annotation.Nullable;
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
 * @创建时间： 2022-01-21 08:46
 * @类说明：党员信息表Dto
 * @修改记录：
 */
@PojoRemark(table="PARTY_MEMBER", object="PartyMemberDTO", name="党员信息表")
public class PartyMemberDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 姓名
	 */
	@NotBlank(message = "姓名不能为空")
	@FieldRemark(column="USER_ID", field="userId", name="姓名", dataType="user")
	private java.lang.String userId;

	/**
	 * 姓名显示字段
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
	 * 党支部
	 */
	@NotBlank(message = "党支部不能为空")
	@FieldRemark(column="PARTY_ID", field="partyId", name="党支部")
	private java.lang.String partyId;
	
	
	/**
	 * 党支部名称
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
	 * 出生地
	 */
	@FieldRemark(column="BIRTH_PLACE", field="birthPlace", name="出生地")
	private java.lang.String birthPlace;

	/**
	 * 教育类别
	 */
	@FieldRemark(column="EDUCATION_SECTOR", field="educationSector", name="教育类别", dataType="lookup", lookupType="PM_EDUCATION_TYPE")
	private java.lang.String educationSector;
	private java.lang.String educationSectorName;

	/**
	 * 入党时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@NotNull(message = "入党时间不能为空")
	@FieldRemark(column="JOIN_PARTY", field="joinParty", name="入党时间")
	private java.util.Date joinParty;

	/**
	 * 入党时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date joinPartyBegin;

	/**
	 * 入党时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date joinPartyEnd;

	/**
	 * 文化程度
	 */
	@NotBlank(message = "文化程度不能为空")
	@FieldRemark(column="EDUCATION_LEVEL", field="educationLevel", name="文化程度", dataType="lookup", lookupType="PM_EDUCATION_LEVEL")
	private java.lang.String educationLevel;
	private java.lang.String educationLevelName;

	/**
	 * 入党单位
	 */
	@FieldRemark(column="JOINPARTY_DEPT", field="joinpartyDept", name="入党单位")
	@NotNull(message = "入党单位不能为空")
	private java.lang.String joinpartyDept;

	/**
	 * 类别
	 */
	//@NotBlank(message = "类别不能为空")
	@FieldRemark(column="PARTY_TYPE", field="partyType", name="类别", dataType="lookup", lookupType="PM_PARTY_TYPE")
	private java.lang.String partyType;
	private java.lang.String partyTypeName;

	/**
	 * 介绍人
	 */
	@FieldRemark(column="INTRODUCER", field="introducer", name="介绍人")
	private java.lang.String introducer;

	/**
	 * 毕业时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	//@NotNull(message = "毕业时间不能为空")
	@FieldRemark(column="GRADUATION_TIME", field="graduationTime", name="毕业时间")
	private java.util.Date graduationTime;

	/**
	 * 毕业时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date graduationTimeBegin;

	/**
	 * 毕业时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date graduationTimeEnd;

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
	 * 职务
	 */
	@NotBlank(message = "职务不能为空")
	@FieldRemark(column="POST", field="post", name="职务")
	private java.lang.String post;

	/**
	 * 职称
	 */
	@NotBlank(message = "职称不能为空")
	@FieldRemark(column="PROFESSIONAL_RANK", field="professionalRank", name="职称")
	private java.lang.String professionalRank;

	/**
	 * 身份类别
	 */
	@NotBlank(message = "身份类别不能为空")
	@FieldRemark(column="CATEGORY", field="category", name="身份类别", dataType="lookup", lookupType="PM_CATEGORY")
	private java.lang.String category;
	private java.lang.String categoryName;

	/**
	 * 加入中共组织类型
	 */
	@NotBlank(message = "加入中共组织类型不能为空")
	@FieldRemark(column="JOINZG_TYPE", field="joinzgType", name="加入中共组织类型", dataType="lookup", lookupType="PM_JOINZG_TYPE")
	private java.lang.String joinzgType;
	private java.lang.String joinzgTypeName;

	/**
	 * 转正日期
	 */
	@Nullable
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="REGULAR_DATE", field="regularDate", name="转正日期")
	private java.util.Date regularDate;

	/**
	 * 转正日期起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date regularDateBegin;

	/**
	 * 转正日期止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date regularDateEnd;

	/**
	 * 转正类别
	 */
	@FieldRemark(column="REGULAR_TYPE", field="regularType", name="转正类别", dataType="lookup", lookupType="PM_REGULAR_TYPE")
	private java.lang.String regularType;
	private java.lang.String regularTypeName;

	/**
	 * 进入支部类型
	 */
	@NotBlank(message = "进入支部类型不能为空")
	@FieldRemark(column="JOINBRANCH_TYPE", field="joinbranchType", name="进入支部类型", dataType="lookup", lookupType="PM_JOINBRANCH_TYPE")
	private java.lang.String joinbranchType;
	private java.lang.String joinbranchTypeName;

	/**
	 * 身份证号
	 */
	@NotBlank(message = "身份证号不能为空")
	@FieldRemark(column="IDCARD", field="idcard", name="身份证号")
	private java.lang.String idcard;

	/**
	 * 家庭地址
	 */
	@NotBlank(message = "家庭地址不能为空")
	@FieldRemark(column="ADDRESS", field="address", name="家庭地址")
	private java.lang.String address;

	/**
	 * 联系电话
	 */
	@NotBlank(message = "联系电话不能为空")
	@FieldRemark(column="TEL", field="tel", name="联系电话")
	private java.lang.String tel;

	/**
	 * 户口地址
	 */
	@FieldRemark(column="REGISTER_ADDRESS", field="registerAddress", name="户口地址")
	private java.lang.String registerAddress;

	/**
	 * 党费
	 */
	@NotNull(message = "党费不能为空")
	@FieldRemark(column="PARTY_MONEY", field="partyMoney", name="党费")
	private java.lang.Double partyMoney;

	/**
	 * 在职/离职
	 */
	@NotBlank(message = "在职/离职不能为空")
	@FieldRemark(column="ONOFF_JOB", field="onoffJob", name="在职/离职", dataType="lookup", lookupType="PM_ONOFF_JOB")
	private java.lang.String onoffJob;
	private java.lang.String onoffJobName;

	/**
	 * 党支部职务
	 */
	//@FieldRemark(column="BRANCH_POST", field="branchPost", name="党支部职务")
	@FieldRemark(column="BRANCH_POST", field="branchPost", name="党支部职务", dataType="lookup", lookupType="PM_BRANCH_POST_TYPE")
	private java.lang.String branchPost;
	private java.lang.String branchPostName;

	public java.lang.String getBranchPostName() {
		return branchPostName;
	}

	public void setBranchPostName(java.lang.String branchPostName) {
		this.branchPostName = branchPostName;
	}

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
	@FieldRemark(column="ATTRIBUTE_01", field="attribute01", name="所在党小组")
	private java.lang.String attribute01;
	private java.lang.String attribute01Alias;
	public java.lang.String getAttribute01Alias() {
		return attribute01Alias;
	}

	public void setAttribute01Alias(java.lang.String attribute01Alias) {
		this.attribute01Alias = attribute01Alias;
	}

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_02", field="attribute02", name="年龄")
	private java.lang.String attribute02;

	/**
	 * 扩展字段
	 */
	//@FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="扩展字段")
	@NotNull(message = "职称等级不能为空")
	@FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="职称等级", dataType="lookup", lookupType="PM_PROFESSIONAL_RANK_LEVEL")
	private java.lang.String attribute03;

	/**
	 * 扩展字段
	 */
	@NotNull(message = "技能等级不能为空")
	@FieldRemark(column="ATTRIBUTE_04", field="attribute04", name="技能等级", dataType="lookup", lookupType="PM_SKILL_LEVEL")
	private java.lang.String attribute04;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_05", field="attribute05", name="党龄")
	private java.lang.String attribute05;

	/**
	 * 扩展字段
	 */
	//@FieldRemark(column="ATTRIBUTE_06", field="attribute06", name="扩展字段")
	@NotNull(message = "是否为党小组长不能为空")
	@FieldRemark(column="ATTRIBUTE_06", field="attribute06", name="是否为党小组长", dataType="lookup", lookupType="PM_GROUP_LEADER_YN")
	private java.lang.String attribute06;

	/**
	 * 扩展字段
	 */
	//@FieldRemark(column="ATTRIBUTE_07", field="attribute07", name="扩展字段")
	@FieldRemark(column="ATTRIBUTE_07", field="attribute07", name="各级党代表", dataType="lookup", lookupType="PM_REPRESENT_LEVEL")
	private java.lang.String attribute07;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_08", field="attribute08", name="党内荣耀")
	private java.lang.String attribute08;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_09", field="attribute09", name="党纪处分")
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
	@NotNull(message = "是否有效不能为空")
	@FieldRemark(column="STATUS", field="status", name="是否有效",dataType="lookup", lookupType="PLATFORM_VALID_FLAG")
	private java.lang.String status;
	private java.lang.String statusName;
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

	public java.lang.String getBirthPlace(){
		return birthPlace;
	}

	public void setBirthPlace(java.lang.String birthPlace){
		this.birthPlace = birthPlace;
	}

    public java.lang.String getEducationSector(){
		return educationSector;
	}

	public void setEducationSector(java.lang.String educationSector){
		this.educationSector = educationSector;
	}

	public java.lang.String getEducationSectorName(){
		return educationSectorName;
	}

	public void setEducationSectorName(java.lang.String educationSectorName){
		this.educationSectorName = educationSectorName;
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

	public java.lang.String getJoinpartyDept(){
		return joinpartyDept;
	}

	public void setJoinpartyDept(java.lang.String joinpartyDept){
		this.joinpartyDept = joinpartyDept;
	}

    public java.lang.String getPartyType(){
		return partyType;
	}

	public void setPartyType(java.lang.String partyType){
		this.partyType = partyType;
	}

	public java.lang.String getPartyTypeName(){
		return partyTypeName;
	}

	public void setPartyTypeName(java.lang.String partyTypeName){
		this.partyTypeName = partyTypeName;
	}

	public java.lang.String getIntroducer(){
		return introducer;
	}

	public void setIntroducer(java.lang.String introducer){
		this.introducer = introducer;
	}

	public java.util.Date getGraduationTime(){
		return graduationTime;
	}

	public void setGraduationTime(java.util.Date graduationTime){
		this.graduationTime = graduationTime;
	}

	public java.util.Date getGraduationTimeBegin(){
		return graduationTimeBegin;
	}

	public void setGraduationTimeBegin(java.util.Date graduationTimeBegin){
		this.graduationTimeBegin = graduationTimeBegin;
	}

	public java.util.Date getGraduationTimeEnd(){
		return graduationTimeEnd;
	}

	public void setGraduationTimeEnd(java.util.Date graduationTimeEnd){
		this.graduationTimeEnd = graduationTimeEnd;
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

	public java.lang.String getPost(){
		return post;
	}

	public void setPost(java.lang.String post){
		this.post = post;
	}

	public java.lang.String getProfessionalRank(){
		return professionalRank;
	}

	public void setProfessionalRank(java.lang.String professionalRank){
		this.professionalRank = professionalRank;
	}

    public java.lang.String getCategory(){
		return category;
	}

	public void setCategory(java.lang.String category){
		this.category = category;
	}

	public java.lang.String getCategoryName(){
		return categoryName;
	}

	public void setCategoryName(java.lang.String categoryName){
		this.categoryName = categoryName;
	}

    public java.lang.String getJoinzgType(){
		return joinzgType;
	}

	public void setJoinzgType(java.lang.String joinzgType){
		this.joinzgType = joinzgType;
	}

	public java.lang.String getJoinzgTypeName(){
		return joinzgTypeName;
	}

	public void setJoinzgTypeName(java.lang.String joinzgTypeName){
		this.joinzgTypeName = joinzgTypeName;
	}

	public java.util.Date getRegularDate(){
		return regularDate;
	}

	public void setRegularDate(java.util.Date regularDate){
		this.regularDate = regularDate;
	}

	public java.util.Date getRegularDateBegin(){
		return regularDateBegin;
	}

	public void setRegularDateBegin(java.util.Date regularDateBegin){
		this.regularDateBegin = regularDateBegin;
	}

	public java.util.Date getRegularDateEnd(){
		return regularDateEnd;
	}

	public void setRegularDateEnd(java.util.Date regularDateEnd){
		this.regularDateEnd = regularDateEnd;
	}

    public java.lang.String getRegularType(){
		return regularType;
	}

	public void setRegularType(java.lang.String regularType){
		this.regularType = regularType;
	}

	public java.lang.String getRegularTypeName(){
		return regularTypeName;
	}

	public void setRegularTypeName(java.lang.String regularTypeName){
		this.regularTypeName = regularTypeName;
	}

    public java.lang.String getJoinbranchType(){
		return joinbranchType;
	}

	public void setJoinbranchType(java.lang.String joinbranchType){
		this.joinbranchType = joinbranchType;
	}

	public java.lang.String getJoinbranchTypeName(){
		return joinbranchTypeName;
	}

	public void setJoinbranchTypeName(java.lang.String joinbranchTypeName){
		this.joinbranchTypeName = joinbranchTypeName;
	}

	public java.lang.String getIdcard(){
		return idcard;
	}

	public void setIdcard(java.lang.String idcard){
		this.idcard = idcard;
	}

	public java.lang.String getAddress(){
		return address;
	}

	public void setAddress(java.lang.String address){
		this.address = address;
	}

	public java.lang.String getTel(){
		return tel;
	}

	public void setTel(java.lang.String tel){
		this.tel = tel;
	}

	public java.lang.String getRegisterAddress(){
		return registerAddress;
	}

	public void setRegisterAddress(java.lang.String registerAddress){
		this.registerAddress = registerAddress;
	}

	public java.lang.Double getPartyMoney(){
		return partyMoney;
	}

	public void setPartyMoney(java.lang.Double partyMoney){
		this.partyMoney = partyMoney;
	}

    public java.lang.String getOnoffJob(){
		return onoffJob;
	}

	public void setOnoffJob(java.lang.String onoffJob){
		this.onoffJob = onoffJob;
	}

	public java.lang.String getOnoffJobName(){
		return onoffJobName;
	}

	public void setOnoffJobName(java.lang.String onoffJobName){
		this.onoffJobName = onoffJobName;
	}

	public java.lang.String getBranchPost(){
		return branchPost;
	}

	public void setBranchPost(java.lang.String branchPost){
		this.branchPost = branchPost;
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
			return "党员信息表";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "党员信息表";
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