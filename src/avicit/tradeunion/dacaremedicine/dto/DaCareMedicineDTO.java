package avicit.tradeunion.dacaremedicine.dto;

import javax.persistence.Id;
import avicit.platform6.core.domain.BeanDTO;
import com.fasterxml.jackson.annotation.JsonFormat;
import avicit.platform6.core.properties.PlatformConstant.LogType;
import avicit.platform6.core.annotation.log.LogField;
import avicit.platform6.core.annotation.log.FieldRemark;
import avicit.platform6.core.annotation.log.PojoRemark;

/**
* @金航数码科技有限责任公司
* @作者：林博
* @邮箱：numbery@163.com
* @创建时间： 2021-03-28 13:08
* @类说明：XX爱心医疗Dto
* @修改记录：
*/
@PojoRemark(table="DA_CARE_MEDICINE", object="DaCareMedicineDTO", name="XX爱心医疗")
public class DaCareMedicineDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	* 主键
	*/
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="主键")
	private String id;

	/**
	* 表单编号
	*/
	@FieldRemark(column="AUTO_CODE", field="autoCode", name="表单编号")
	private String autoCode;

	/**
	* 患者姓名
	*/
	@FieldRemark(column="PATIENTER_ID", field="patienterId", name="患者姓名", dataType="user")
	private String patienterId;
	
	/**
	* 患者姓名显示字段
	*/
	private String patienterIdAlias;

	/**
	* 患者性别
	*/
	@FieldRemark(column="PATIENT_SEX", field="patientSex", name="患者性别", dataType="lookup", lookupType="PLATFORM_SEX")
	private String patientSex;
	private String patientSexName;

	/**
	* 患者年龄
	*/
	@FieldRemark(column="PATIENT_AGE", field="patientAge", name="患者年龄")
	private String patientAge;

	/**
	* 患者电话
	*/
	@FieldRemark(column="PATIENT_TEL", field="patientTel", name="患者电话")
	private String patientTel;

	/**
	* 患病名称
	*/
	@FieldRemark(column="DISEASE", field="disease", name="患病名称")
	private String disease;

	/**
	* 治疗医院
	*/
	@FieldRemark(column="HOSPITAL", field="hospital", name="治疗医院")
	private String hospital;

	/**
	* 住院日期开始
	*/
	@FieldRemark(column="INHOSP_DATE", field="inhospDate", name="住院日期开始")
	private java.util.Date inhospDate;
	
	/**
	* 住院日期开始起
	*/
	private java.util.Date inhospDateBegin;
	
	/**
	* 住院日期开始止
	*/
	private java.util.Date inhospDateEnd;

	/**
	* 住院日期结束
	*/
	@FieldRemark(column="OUTHOSP_DATE", field="outhospDate", name="住院日期结束")
	private java.util.Date outhospDate;
	
	/**
	* 住院日期结束起
	*/
	private java.util.Date outhospDateBegin;
	
	/**
	* 住院日期结束止
	*/
	private java.util.Date outhospDateEnd;

	/**
	* 报销职工卡号
	*/
	@FieldRemark(column="EMPLOYEE_CARD", field="employeeCard", name="报销职工卡号")
	private String employeeCard;

	/**
	* 开户银行
	*/
	@FieldRemark(column="DEPOSIT_BANK", field="depositBank", name="开户银行", dataType="lookup", lookupType="DEPOSIT_BANK")
	private String depositBank;
	private String depositBankName;

	/**
	* 疾病类型
	*/
	@FieldRemark(column="DISEASE_TYPE", field="diseaseType", name="疾病类型", dataType="lookup", lookupType="DISEASE_TYPE")
	private String diseaseType;
	private String diseaseTypeName;

	/**
	* 医疗费总金额
	*/
	@FieldRemark(column="HEALTH_EXPENSES", field="healthExpenses", name="医疗费总金额")
	private float healthExpenses;

	/**
	* 统筹基金支付
	*/
	@FieldRemark(column="OVERALL_EXPENSES", field="overallExpenses", name="统筹基金支付")
	private float overallExpenses;

	/**
	* 个人支付金额
	*/
	@FieldRemark(column="PERSON_EXPENSES", field="personExpenses", name="个人支付金额")
	private float personExpenses;

	/**
	* 申请报销金额
	*/
	@FieldRemark(column="SUBMIT_EXPENSES", field="submitExpenses", name="申请报销金额")
	private float submitExpenses;

	/**
	* 创建时间起
	*/
	private java.util.Date creationDateBegin;
	
	/**
	* 创建时间止
	*/
	private java.util.Date creationDateEnd;

	/**
	* 最后修改时间起
	*/
	private java.util.Date lastUpdateDateBegin;
	
	/**
	* 最后修改时间止
	*/
	private java.util.Date lastUpdateDateEnd;

	/**
	* 组织标识
	*/
	@FieldRemark(column="ORG_IDENTITY", field="orgIdentity", name="组织标识")
	private String orgIdentity;

	/**
	* 创建部门
	*/
	@FieldRemark(column="CREATED_DEPT", field="createdDept", name="创建部门")
	private String createdDept;

	/**
	* 扩展字段
	*/
	@FieldRemark(column="ATTRIBUTE_01", field="attribute01", name="扩展字段")
	private String attribute01;

	/**
	* 扩展字段
	*/
	@FieldRemark(column="ATTRIBUTE_02", field="attribute02", name="扩展字段")
	private String attribute02;

	/**
	* 扩展字段
	*/
	@FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="扩展字段")
	private String attribute03;

	/**
	* 扩展字段
	*/
	@FieldRemark(column="ATTRIBUTE_04", field="attribute04", name="扩展字段")
	private String attribute04;

	/**
	* 扩展字段
	*/
	@FieldRemark(column="ATTRIBUTE_05", field="attribute05", name="扩展字段")
	private String attribute05;

	/**
	* 扩展字段
	*/
	@FieldRemark(column="ATTRIBUTE_06", field="attribute06", name="扩展字段")
	private String attribute06;

	/**
	* 扩展字段
	*/
	@FieldRemark(column="ATTRIBUTE_07", field="attribute07", name="扩展字段")
	private String attribute07;

	/**
	* 扩展字段
	*/
	@FieldRemark(column="ATTRIBUTE_08", field="attribute08", name="扩展字段")
	private String attribute08;

	/**
	* 扩展字段
	*/
	@FieldRemark(column="ATTRIBUTE_09", field="attribute09", name="扩展字段")
	private String attribute09;

	/**
	* 扩展字段
	*/
	@FieldRemark(column="ATTRIBUTE_10", field="attribute10", name="扩展字段")
	private String attribute10;
	/**
	* 节点名称(节点中文名称)
	*/
	private String activityalias_;
	/**
	* 节点标识(当前节点id)
	*/
	private String activityname_;
	/**
	* 流程当前状态(流程当前状态)
	*/
	private String businessstate_;
	/**
	* 当前登录人ID(当前登录人ID)
	*/
	private String currUserId;
	/**
	* 流程范围
	*/
	private String bpmType;
	/**
	* 流程状态
	*/ 
    private String bpmState;


	public String getId(){
		return id;
	}

	public void setId(String id){
		this.id = id;
	}

	public String getAutoCode(){
		return autoCode;
	}

	public void setAutoCode(String autoCode){
		this.autoCode = autoCode;
	}

	public String getPatienterId(){
		return patienterId;
	}

	public void setPatienterId(String patienterId){
		this.patienterId = patienterId;
	}

	public String getPatienterIdAlias(){
		return patienterIdAlias;
	}

	public void setPatienterIdAlias(String patienterIdAlias){
		this.patienterIdAlias = patienterIdAlias;
	}
	public String getPatientSex(){
		return patientSex;
	}

	public void setPatientSex(String patientSex){
		this.patientSex = patientSex;
	}

	public String getPatientSexName(){
		return patientSexName;
	}

	public void setPatientSexName(String patientSexName){
		this.patientSexName = patientSexName;
	}

	public String getPatientAge(){
		return patientAge;
	}

	public void setPatientAge(String patientAge){
		this.patientAge = patientAge;
	}

	public String getPatientTel(){
		return patientTel;
	}

	public void setPatientTel(String patientTel){
		this.patientTel = patientTel;
	}

	public String getDisease(){
		return disease;
	}

	public void setDisease(String disease){
		this.disease = disease;
	}

	public String getHospital(){
		return hospital;
	}

	public void setHospital(String hospital){
		this.hospital = hospital;
	}

	public java.util.Date getInhospDate(){
		return inhospDate;
	}

	public void setInhospDate(java.util.Date inhospDate){
		this.inhospDate = inhospDate;
	}

	public java.util.Date getInhospDateBegin(){
		return inhospDateBegin;
	}

	public void setInhospDateBegin(java.util.Date inhospDateBegin){
		this.inhospDateBegin = inhospDateBegin;
	}

	public java.util.Date getInhospDateEnd(){
		return inhospDateEnd;
	}

	public void setInhospDateEnd(java.util.Date inhospDateEnd){
		this.inhospDateEnd = inhospDateEnd;
	}

	public java.util.Date getOuthospDate(){
		return outhospDate;
	}

	public void setOuthospDate(java.util.Date outhospDate){
		this.outhospDate = outhospDate;
	}

	public java.util.Date getOuthospDateBegin(){
		return outhospDateBegin;
	}

	public void setOuthospDateBegin(java.util.Date outhospDateBegin){
		this.outhospDateBegin = outhospDateBegin;
	}

	public java.util.Date getOuthospDateEnd(){
		return outhospDateEnd;
	}

	public void setOuthospDateEnd(java.util.Date outhospDateEnd){
		this.outhospDateEnd = outhospDateEnd;
	}

	public String getEmployeeCard(){
		return employeeCard;
	}

	public void setEmployeeCard(String employeeCard){
		this.employeeCard = employeeCard;
	}
	public String getDepositBank(){
		return depositBank;
	}

	public void setDepositBank(String depositBank){
		this.depositBank = depositBank;
	}

	public String getDepositBankName(){
		return depositBankName;
	}

	public void setDepositBankName(String depositBankName){
		this.depositBankName = depositBankName;
	}
	public String getDiseaseType(){
		return diseaseType;
	}

	public void setDiseaseType(String diseaseType){
		this.diseaseType = diseaseType;
	}

	public String getDiseaseTypeName(){
		return diseaseTypeName;
	}

	public void setDiseaseTypeName(String diseaseTypeName){
		this.diseaseTypeName = diseaseTypeName;
	}

	public float getHealthExpenses(){
		return healthExpenses;
	}

	public void setHealthExpenses(float healthExpenses){
		this.healthExpenses = healthExpenses;
	}

	public float getOverallExpenses(){
		return overallExpenses;
	}

	public void setOverallExpenses(float overallExpenses){
		this.overallExpenses = overallExpenses;
	}

	public float getPersonExpenses(){
		return personExpenses;
	}

	public void setPersonExpenses(float personExpenses){
		this.personExpenses = personExpenses;
	}

	public float getSubmitExpenses(){
		return submitExpenses;
	}

	public void setSubmitExpenses(float submitExpenses){
		this.submitExpenses = submitExpenses;
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

	public String getOrgIdentity(){
		return orgIdentity;
	}

	public void setOrgIdentity(String orgIdentity){
		this.orgIdentity = orgIdentity;
	}

	public String getCreatedDept(){
		return createdDept;
	}

	public void setCreatedDept(String createdDept){
		this.createdDept = createdDept;
	}

	public String getAttribute01(){
		return attribute01;
	}

	public void setAttribute01(String attribute01){
		this.attribute01 = attribute01;
	}

	public String getAttribute02(){
		return attribute02;
	}

	public void setAttribute02(String attribute02){
		this.attribute02 = attribute02;
	}

	public String getAttribute03(){
		return attribute03;
	}

	public void setAttribute03(String attribute03){
		this.attribute03 = attribute03;
	}

	public String getAttribute04(){
		return attribute04;
	}

	public void setAttribute04(String attribute04){
		this.attribute04 = attribute04;
	}

	public String getAttribute05(){
		return attribute05;
	}

	public void setAttribute05(String attribute05){
		this.attribute05 = attribute05;
	}

	public String getAttribute06(){
		return attribute06;
	}

	public void setAttribute06(String attribute06){
		this.attribute06 = attribute06;
	}

	public String getAttribute07(){
		return attribute07;
	}

	public void setAttribute07(String attribute07){
		this.attribute07 = attribute07;
	}

	public String getAttribute08(){
		return attribute08;
	}

	public void setAttribute08(String attribute08){
		this.attribute08 = attribute08;
	}

	public String getAttribute09(){
		return attribute09;
	}

	public void setAttribute09(String attribute09){
		this.attribute09 = attribute09;
	}

	public String getAttribute10(){
		return attribute10;
	}

	public void setAttribute10(String attribute10){
		this.attribute10 = attribute10;
	}
	
	public String getActivityalias_() {
		return activityalias_;
	}

	public void setActivityalias_(String activityalias_) {
		this.activityalias_ = activityalias_;
	}

	public String getActivityname_() {
		return activityname_;
	}

	public void setActivityname_(String activityname_) {
		this.activityname_ = activityname_;
	}

	public String getBusinessstate_() {
		return businessstate_;
	}

	public void setBusinessstate_(String businessstate_) {
		this.businessstate_ = businessstate_;
	}

	public String getCurrUserId() {
		return currUserId;
	}

	public void setCurrUserId(String currUserId) {
		this.currUserId = currUserId;
	}

	public String getBpmType() {
		return bpmType;
	}

	public void setBpmType(String bpmType) {
		this.bpmType = bpmType;
	}

	public String getBpmState() {
		return bpmState;
	}

	public void setBpmState(String bpmState) {
		this.bpmState = bpmState;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "XX爱心医疗";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "XX爱心医疗";
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
	private String autoCodeValue;


	public String getAutoCodeValue() {
		return autoCodeValue;
	}

	public void setAutoCodeValue(String autoCodeValue) {
		this.autoCodeValue = autoCodeValue;
	}

}
