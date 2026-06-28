package avicit.pb.member.dynufminfof.dto;

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
 * @创建时间： 2023-07-13 13:27
 * @类说明：DYN_UFM_INFO_FDto
 * @修改记录：
 */
@PojoRemark(table="DYN_UFM_INFO_F", object="DynUfmInfoFDTO", name="DYN_UFM_INFO_F")
public class DynUfmInfoFDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 部门名称
	 */
	@FieldRemark(column="DEPT_NAME", field="deptName", name="部门名称")
	private java.lang.String deptName;

	/**
	 * 居留原因
	 */
	@FieldRemark(column="RESIDENCE_REASON", field="residenceReason", name="居留原因")
	private java.lang.String residenceReason;

	/**
	 * 是否台湾同胞
	 */
	@FieldRemark(column="TAIWAN_COMPATRIOTS", field="taiwanCompatriots", name="是否台湾同胞")
	private java.lang.String taiwanCompatriots;

	/**
	 * 全日制专业
	 */
	@FieldRemark(column="FUL_SPECIALITY", field="fulSpeciality", name="全日制专业")
	private java.lang.String fulSpeciality;

	/**
	 * 居留国家
	 */
	@FieldRemark(column="RESIDENCE_COUNTRY", field="residenceCountry", name="居留国家")
	private java.lang.String residenceCountry;

	/**
	 * 出生年月
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="BIRTHDATE", field="birthdate", name="出生年月")
	private java.util.Date birthdate;
	
	/**
	 * 出生年月起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date birthdateBegin;
	
	/**
	 * 出生年月止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date birthdateEnd;

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
	 * 非全日制专业
	 */
	@FieldRemark(column="PART_SPECIALITY", field="partSpeciality", name="非全日制专业")
	private java.lang.String partSpeciality;

	/**
	 * 民族
	 */
	@FieldRemark(column="NATION", field="nation", name="民族")
	private java.lang.String nation;

	/**
	 * 是否台湾同胞在大陆亲属
	 */
	@FieldRemark(column="TAIWAN_RELATIVES", field="taiwanRelatives", name="是否台湾同胞在大陆亲属")
	private java.lang.String taiwanRelatives;

	/**
	 * 备用字段1
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="DATA_1", field="data1", name="备用字段1")
	private java.util.Date data1;
	
	/**
	 * 备用字段1起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date data1Begin;
	
	/**
	 * 备用字段1止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date data1End;

	/**
	 * 备用字段2
	 */
	@FieldRemark(column="DATA_2", field="data2", name="备用字段2")
	private java.lang.Long data2;

	/**
	 * 性别
	 */
	@FieldRemark(column="GENDER", field="gender", name="性别", dataType="lookup", lookupType="PLATFORM_SEX")
	private java.lang.String gender;
	private java.lang.String genderName;

	/**
	 * 备用字段3
	 */
	@FieldRemark(column="DATA_3", field="data3", name="备用字段3")
	private java.lang.String data3;

	/**
	 * 统战身份
	 */
	@FieldRemark(column="UF_IDENTITY", field="ufIdentity", name="统战身份")
	private java.lang.String ufIdentity;

	/**
	 * 是否香港、澳门同胞
	 */
	@FieldRemark(column="HO_COMPATRIOTS", field="hoCompatriots", name="是否香港、澳门同胞", dataType="lookup", lookupType="PLATFORM_YES_NO_FLAG")
	private java.lang.String hoCompatriots;
	private java.lang.String hoCompatriotsName;

	/**
	 * 备用字段4
	 */
	@FieldRemark(column="DATA_4", field="data4", name="备用字段4")
	private java.lang.String data4;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 非全日制毕业学校
	 */
	@FieldRemark(column="PART_GRADUATION", field="partGraduation", name="非全日制毕业学校")
	private java.lang.String partGraduation;

	/**
	 * 全日制学历
	 */
	@FieldRemark(column="FUL_EDUCATION", field="fulEducation", name="全日制学历")
	private java.lang.String fulEducation;

	/**
	 * (眷属)侨居国
	 */
	@FieldRemark(column="HOST_COUNTRY", field="hostCountry", name="(眷属)侨居国")
	private java.lang.String hostCountry;

	/**
	 * 宗教信仰
	 */
	@FieldRemark(column="RELIGIOUS_BELIER", field="religiousBelier", name="宗教信仰")
	private java.lang.String religiousBelier;

	/**
	 * 姓名
	 */
	@FieldRemark(column="UFMNAME", field="ufmname", name="姓名")
	private java.lang.String ufmname;

	/**
	 * 备用字段5
	 */
	@FieldRemark(column="DATA_5", field="data5", name="备用字段5")
	private java.lang.String data5;

	/**
	 * 员工号
	 */
	@FieldRemark(column="EMPLOYEEID", field="employeeid", name="员工号")
	private java.lang.String employeeid;

	/**
	 * 职称
	 */
	@FieldRemark(column="USER_TITLE", field="userTitle", name="职称")
	private java.lang.String userTitle;

	/**
	 * 备用字段6
	 */
	@FieldRemark(column="DATA_6", field="data6", name="备用字段6")
	private java.lang.String data6;

	/**
	 * 备用字段7
	 */
	@FieldRemark(column="DATA_7", field="data7", name="备用字段7")
	private java.lang.String data7;

	/**
	 * 备用字段8
	 */
	@FieldRemark(column="DATA_8", field="data8", name="备用字段8")
	private java.lang.String data8;

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
	 * 居留年限
	 */
	@FieldRemark(column="RESIDENCE_YEAR", field="residenceYear", name="居留年限")
	private java.lang.String residenceYear;

	/**
	 * 在民主党派、人大、政协等任职情况
	 */
	@FieldRemark(column="PARTY_REPRE_POSITIONS", field="partyReprePositions", name="在民主党派、人大、政协等任职情况")
	private java.lang.String partyReprePositions;

	/**
	 * 职务
	 */
	@FieldRemark(column="DUTIES", field="duties", name="职务")
	private java.lang.String duties;

	/**
	 * 党组织名称
	 */
	@FieldRemark(column="PO_NAME", field="poName", name="党组织名称")
	private java.lang.String poName;

	/**
	 * 是否香港、澳门眷属
	 */
	@FieldRemark(column="HO_DEPENDENTS", field="hoDependents", name="是否香港、澳门眷属")
	private java.lang.String hoDependents;

	/**
	 * 是否华侨、归侨、侨眷
	 */
	@FieldRemark(column="RO_CHINESE", field="roChinese", name="是否华侨、归侨、侨眷")
	private java.lang.String roChinese;

	/**
	 * 编号
	 */
	@FieldRemark(column="NEMBER", field="nember", name="编号")
	private java.lang.String nember;

	/**
	 * 非全日制学历
	 */
	@FieldRemark(column="PART_EDUCATION", field="partEducation", name="非全日制学历")
	private java.lang.String partEducation;

	/**
	 * 全日制毕业学校
	 */
	@FieldRemark(column="FUL_GRADUATION", field="fulGraduation", name="全日制毕业学校")
	private java.lang.String fulGraduation;

	/**
	 * 政治面貌
	 */
	@FieldRemark(column="POLITICAL_OUTLOOK", field="politicalOutlook", name="政治面貌")
	private java.lang.String politicalOutlook;

	/**
	 * 手机号码
	 */
	@FieldRemark(column="PHONE_NUMBER", field="phoneNumber", name="手机号码")
	private java.lang.Long phoneNumber;

	/**
	 * 节点名称(节点中文名称)
	 */
	private java.lang.String activityalias_;
	/**
	 * 节点标识(当前节点id)
	 */
	private java.lang.String activityname_;
	/**
	 * 流程当前状态(流程当前状态)
	 */
	private java.lang.String businessstate_;
	/**
	 * 流程当前处理人
	 */
	private java.lang.String assigneenames_;
	/**
	 * 当前登录人ID(当前登录人ID)
	 */
	private java.lang.String currUserId;
	/**
	 * 流程范围
	 */
	private java.lang.String bpmType;
	/**
	 * 流程状态
	 */
    private java.lang.String bpmState;

	public java.lang.String getDeptName(){
		return deptName;
	}

	public void setDeptName(java.lang.String deptName){
		this.deptName = deptName;
	}

	public java.lang.String getResidenceReason(){
		return residenceReason;
	}

	public void setResidenceReason(java.lang.String residenceReason){
		this.residenceReason = residenceReason;
	}

	public java.lang.String getTaiwanCompatriots(){
		return taiwanCompatriots;
	}

	public void setTaiwanCompatriots(java.lang.String taiwanCompatriots){
		this.taiwanCompatriots = taiwanCompatriots;
	}

	public java.lang.String getFulSpeciality(){
		return fulSpeciality;
	}

	public void setFulSpeciality(java.lang.String fulSpeciality){
		this.fulSpeciality = fulSpeciality;
	}

	public java.lang.String getResidenceCountry(){
		return residenceCountry;
	}

	public void setResidenceCountry(java.lang.String residenceCountry){
		this.residenceCountry = residenceCountry;
	}

	public java.util.Date getBirthdate(){
		return birthdate;
	}

	public void setBirthdate(java.util.Date birthdate){
		this.birthdate = birthdate;
	}

	public java.util.Date getBirthdateBegin(){
		return birthdateBegin;
	}

	public void setBirthdateBegin(java.util.Date birthdateBegin){
		this.birthdateBegin = birthdateBegin;
	}

	public java.util.Date getBirthdateEnd(){
		return birthdateEnd;
	}

	public void setBirthdateEnd(java.util.Date birthdateEnd){
		this.birthdateEnd = birthdateEnd;
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

	public java.lang.String getPartSpeciality(){
		return partSpeciality;
	}

	public void setPartSpeciality(java.lang.String partSpeciality){
		this.partSpeciality = partSpeciality;
	}

	public java.lang.String getNation(){
		return nation;
	}

	public void setNation(java.lang.String nation){
		this.nation = nation;
	}

	public java.lang.String getTaiwanRelatives(){
		return taiwanRelatives;
	}

	public void setTaiwanRelatives(java.lang.String taiwanRelatives){
		this.taiwanRelatives = taiwanRelatives;
	}

	public java.util.Date getData1(){
		return data1;
	}

	public void setData1(java.util.Date data1){
		this.data1 = data1;
	}

	public java.util.Date getData1Begin(){
		return data1Begin;
	}

	public void setData1Begin(java.util.Date data1Begin){
		this.data1Begin = data1Begin;
	}

	public java.util.Date getData1End(){
		return data1End;
	}

	public void setData1End(java.util.Date data1End){
		this.data1End = data1End;
	}

	public java.lang.Long getData2(){
		return data2;
	}

	public void setData2(java.lang.Long data2){
		this.data2 = data2;
	}

    public java.lang.String getGender(){
		return gender;
	}

	public void setGender(java.lang.String gender){
		this.gender = gender;
	}

	public java.lang.String getGenderName(){
		return genderName;
	}

	public void setGenderName(java.lang.String genderName){
		this.genderName = genderName;
	}

	public java.lang.String getData3(){
		return data3;
	}

	public void setData3(java.lang.String data3){
		this.data3 = data3;
	}

	public java.lang.String getUfIdentity(){
		return ufIdentity;
	}

	public void setUfIdentity(java.lang.String ufIdentity){
		this.ufIdentity = ufIdentity;
	}

    public java.lang.String getHoCompatriots(){
		return hoCompatriots;
	}

	public void setHoCompatriots(java.lang.String hoCompatriots){
		this.hoCompatriots = hoCompatriots;
	}

	public java.lang.String getHoCompatriotsName(){
		return hoCompatriotsName;
	}

	public void setHoCompatriotsName(java.lang.String hoCompatriotsName){
		this.hoCompatriotsName = hoCompatriotsName;
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

	public java.lang.String getPartGraduation(){
		return partGraduation;
	}

	public void setPartGraduation(java.lang.String partGraduation){
		this.partGraduation = partGraduation;
	}

	public java.lang.String getFulEducation(){
		return fulEducation;
	}

	public void setFulEducation(java.lang.String fulEducation){
		this.fulEducation = fulEducation;
	}

	public java.lang.String getHostCountry(){
		return hostCountry;
	}

	public void setHostCountry(java.lang.String hostCountry){
		this.hostCountry = hostCountry;
	}

	public java.lang.String getReligiousBelier(){
		return religiousBelier;
	}

	public void setReligiousBelier(java.lang.String religiousBelier){
		this.religiousBelier = religiousBelier;
	}

	public java.lang.String getUfmname(){
		return ufmname;
	}

	public void setUfmname(java.lang.String ufmname){
		this.ufmname = ufmname;
	}

	public java.lang.String getData5(){
		return data5;
	}

	public void setData5(java.lang.String data5){
		this.data5 = data5;
	}

	public java.lang.String getEmployeeid(){
		return employeeid;
	}

	public void setEmployeeid(java.lang.String employeeid){
		this.employeeid = employeeid;
	}

	public java.lang.String getUserTitle(){
		return userTitle;
	}

	public void setUserTitle(java.lang.String userTitle){
		this.userTitle = userTitle;
	}

	public java.lang.String getData6(){
		return data6;
	}

	public void setData6(java.lang.String data6){
		this.data6 = data6;
	}

	public java.lang.String getData7(){
		return data7;
	}

	public void setData7(java.lang.String data7){
		this.data7 = data7;
	}

	public java.lang.String getData8(){
		return data8;
	}

	public void setData8(java.lang.String data8){
		this.data8 = data8;
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

	public java.lang.String getResidenceYear(){
		return residenceYear;
	}

	public void setResidenceYear(java.lang.String residenceYear){
		this.residenceYear = residenceYear;
	}

	public java.lang.String getPartyReprePositions(){
		return partyReprePositions;
	}

	public void setPartyReprePositions(java.lang.String partyReprePositions){
		this.partyReprePositions = partyReprePositions;
	}

	public java.lang.String getDuties(){
		return duties;
	}

	public void setDuties(java.lang.String duties){
		this.duties = duties;
	}

	public java.lang.String getPoName(){
		return poName;
	}

	public void setPoName(java.lang.String poName){
		this.poName = poName;
	}

	public java.lang.String getHoDependents(){
		return hoDependents;
	}

	public void setHoDependents(java.lang.String hoDependents){
		this.hoDependents = hoDependents;
	}

	public java.lang.String getRoChinese(){
		return roChinese;
	}

	public void setRoChinese(java.lang.String roChinese){
		this.roChinese = roChinese;
	}

	public java.lang.String getNember(){
		return nember;
	}

	public void setNember(java.lang.String nember){
		this.nember = nember;
	}

	public java.lang.String getPartEducation(){
		return partEducation;
	}

	public void setPartEducation(java.lang.String partEducation){
		this.partEducation = partEducation;
	}

	public java.lang.String getFulGraduation(){
		return fulGraduation;
	}

	public void setFulGraduation(java.lang.String fulGraduation){
		this.fulGraduation = fulGraduation;
	}

	public java.lang.String getPoliticalOutlook(){
		return politicalOutlook;
	}

	public void setPoliticalOutlook(java.lang.String politicalOutlook){
		this.politicalOutlook = politicalOutlook;
	}

	public java.lang.Long getPhoneNumber(){
		return phoneNumber;
	}

	public void setPhoneNumber(java.lang.Long phoneNumber){
		this.phoneNumber = phoneNumber;
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

	public String getAssigneenames_() {
		return assigneenames_;
	}

	public void setAssigneenames_(String assigneenames_) {
		this.assigneenames_ = assigneenames_;
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

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_UFM_INFO_F";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_UFM_INFO_F";
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