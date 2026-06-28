package avicit.tu.dyntumodelworker.dto;

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
 * @作者：temp
 * @邮箱：temp@163.com
 * @创建时间： 2023-08-11 09:59
 * @类说明：DYN_TU_MODEL_WORKERDto
 * @修改记录：
 */
@PojoRemark(table="DYN_TU_MODEL_WORKER", object="DynTuModelWorkerDTO", name="DYN_TU_MODEL_WORKER")
public class DynTuModelWorkerDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * DATA_11
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="DATA_11", field="data11", name="DATA_11")
	private java.util.Date data11;

	/**
	 * DATA_11起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date data11Begin;

	/**
	 * DATA_11止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date data11End;

	/**
	 * 流程ID
	 */
	@FieldRemark(column="DATA_10", field="data10", name="流程ID")
	private java.lang.String data10;

	/**
	 * DATA_12
	 */
	@FieldRemark(column="DATA_12", field="data12", name="DATA_12")
	private java.lang.Long data12;

	/**
	 * 申请人
	 */
	@FieldRemark(column="REQUEST_USER", field="requestUser", name="申请人")
	private java.lang.String requestUser;

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
	 * 荣誉颁发文件及证书照片附件
	 */
	@FieldRemark(column="ANNEX", field="annex", name="荣誉颁发文件及证书照片附件")
	private java.lang.String annex;

	/**
	 * 二级部门名称
	 */
	@FieldRemark(column="DEPT_TWO_NAME", field="deptTwoName", name="二级部门名称")
	private java.lang.String deptTwoName;

	/**
	 * 荣誉颁发机构
	 */
	@FieldRemark(column="HONOR_ORGAN", field="honorOrgan", name="荣誉颁发机构")
	private java.lang.String honorOrgan;

	/**
	 * 民族
	 */
	@FieldRemark(column="NATION", field="nation", name="民族")
	private java.lang.String nation;

	/**
	 * 一级部门ID
	 */
	@FieldRemark(column="DEPT_ONE_ID", field="deptOneId", name="一级部门ID")
	private java.lang.String deptOneId;

	/**
	 * 三级部门ID
	 */
	@FieldRemark(column="DEPT_THREE_ID", field="deptThreeId", name="三级部门ID")
	private java.lang.String deptThreeId;

	/**
	 * 性别
	 */
	@FieldRemark(column="DATA_1", field="data1", name="性别", dataType="lookup", lookupType="PLATFORM_SEX")
	private java.lang.String data1;
	private java.lang.String data1Name;

	/**
	 * DATA_2
	 */
	@FieldRemark(column="DATA_2", field="data2", name="DATA_2")
	private java.lang.String data2;

	/**
	 * DATA_3
	 */
	@FieldRemark(column="DATA_3", field="data3", name="DATA_3")
	private java.lang.String data3;

	/**
	 * 技能等级
	 */
	@FieldRemark(column="SKILL_LEVEL", field="skillLevel", name="技能等级")
	private java.lang.String skillLevel;

	/**
	 * DATA_4
	 */
	@FieldRemark(column="DATA_4", field="data4", name="DATA_4")
	private java.lang.String data4;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 出生日期
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="BIRTHDAY", field="birthday", name="出生日期")
	private java.util.Date birthday;

	/**
	 * 出生日期起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date birthdayBegin;

	/**
	 * 出生日期止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date birthdayEnd;

	/**
	 * DATA_9
	 */
	@FieldRemark(column="DATA_9", field="data9", name="DATA_9")
	private java.lang.String data9;

	/**
	 * 申请单位ID
	 */
	@FieldRemark(column="DEPT_ID", field="deptId", name="申请单位ID")
	private java.lang.String deptId;

	/**
	 * 字段_5
	 */
	@FieldRemark(column="DATA_5", field="data5", name="字段_5")
	private java.lang.String data5;

	/**
	 * 学历
	 */
	@FieldRemark(column="EDUCATION_LEVEL", field="educationLevel", name="学历")
	private java.lang.String educationLevel;

	/**
	 * DATA_6
	 */
	@FieldRemark(column="DATA_6", field="data6", name="DATA_6")
	private java.lang.String data6;

	/**
	 * 表单编号
	 */
	@FieldRemark(column="AUTO_CODE", field="autoCode", name="表单编号")
	private java.lang.String autoCode;

	/**
	 * DATA_7
	 */
	@FieldRemark(column="DATA_7", field="data7", name="DATA_7")
	private java.lang.String data7;

	/**
	 * DATA_8
	 */
	@FieldRemark(column="DATA_8", field="data8", name="DATA_8")
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
	 * 三级部门名称
	 */
	@FieldRemark(column="DEPT_THREE_NAME", field="deptThreeName", name="三级部门名称")
	private java.lang.String deptThreeName;

	/**
	 * 职称
	 */
	@FieldRemark(column="PROFESSIONAL_RANK", field="professionalRank", name="职称")
	private java.lang.String professionalRank;

	/**
	 * 政治面貌
	 */
	@FieldRemark(column="POLITICAL_OUTLOOK", field="politicalOutlook", name="政治面貌")
	private java.lang.String politicalOutlook;

	/**
	 * 新增荣誉层级
	 */
	@FieldRemark(column="MODEL_LEVEL", field="modelLevel", name="新增荣誉层级")
	private java.lang.String modelLevel;

	/**
	 * 专业
	 */
	@FieldRemark(column="SPECIALITY", field="speciality", name="专业")
	private java.lang.String speciality;

	/**
	 * 公司级荣誉
	 */
	@FieldRemark(column="MODEL_COMPANY", field="modelCompany", name="公司级荣誉")
	private java.lang.String modelCompany;

	/**
	 * 申请人_ID
	 */
	@FieldRemark(column="REQUEST_USER_ID", field="requestUserId", name="申请人_ID")
	private java.lang.String requestUserId;

	/**
	 * 申请单位
	 */
	@FieldRemark(column="DEPT_NAME", field="deptName", name="申请单位")
	private java.lang.String deptName;

	/**
	 * 年龄
	 */
	@FieldRemark(column="SEX", field="sex", name="年龄")
	private java.lang.String sex;

	/**
	 * 国家级荣誉
	 */
	@FieldRemark(column="MODEL_COUNTRY", field="modelCountry", name="国家级荣誉")
	private java.lang.String modelCountry;

	/**
	 * 省部级荣誉
	 */
	@FieldRemark(column="MODEL_ECONOMIZE", field="modelEconomize", name="省部级荣誉")
	private java.lang.String modelEconomize;

	/**
	 * 二级部门ID
	 */
	@FieldRemark(column="DEPT_TWO_ID", field="deptTwoId", name="二级部门ID")
	private java.lang.String deptTwoId;

	/**
	 * 参加工作日期
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="WORK_DATE", field="workDate", name="参加工作日期")
	private java.util.Date workDate;

	/**
	 * 参加工作日期起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date workDateBegin;

	/**
	 * 参加工作日期止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date workDateEnd;

	/**
	 * 荣誉名称
	 */
	@FieldRemark(column="HONOR_NAME", field="honorName", name="荣誉名称")
	private java.lang.String honorName;

	/**
	 * 发动机分类
	 */
	@FieldRemark(column="CATEGORY_TYPE", field="categoryType", name="发动机分类")
	private java.lang.String categoryType;

	/**
	 * 岗位名称
	 */
	@FieldRemark(column="POST_NAME", field="postName", name="岗位名称")
	private java.lang.String postName;

	/**
	 * 人员编码
	 */
	@FieldRemark(column="USER_CODE", field="userCode", name="人员编码")
	private java.lang.String userCode;

	/**
	 * 荣誉颁发文件名
	 */
	@FieldRemark(column="HONOR_FILE_NAME", field="honorFileName", name="荣誉颁发文件名")
	private java.lang.String honorFileName;

	/**
	 * 申请日期
	 */
	@FieldRemark(column="REQUEST_DATE", field="requestDate", name="申请日期")
	private java.lang.String requestDate;

	/**
	 * 聘任职级
	 */
	@FieldRemark(column="APPOINTMENT_LEVEL", field="appointmentLevel", name="聘任职级")
	private java.lang.String appointmentLevel;

	/**
	 * 联系方式
	 */
	@FieldRemark(column="TEL", field="tel", name="联系方式")
	private java.lang.Long tel;

	/**
	 * 一级部门名称
	 */
	@FieldRemark(column="DEPT_ONE_NAME", field="deptOneName", name="一级部门名称")
	private java.lang.String deptOneName;

	/**
	 * 地市级荣誉
	 */
	@FieldRemark(column="MODEL_CITY", field="modelCity", name="地市级荣誉")
	private java.lang.String modelCity;

	/**
	 * 劳模姓名
	 */
	@FieldRemark(column="MODEL_NAME", field="modelName", name="劳模姓名")
	private java.lang.String modelName;

	/**
	 * DATA_13
	 */
	@FieldRemark(column="DATA_13", field="data13", name="DATA_13")
	private byte[] data13;

	/**
	 * DATA_14
	 */
	@FieldRemark(column="DATA_14", field="data14", name="DATA_14")
	private java.lang.String data14;

	/**
	 * 获奖年月
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="HONOR_DATE", field="honorDate", name="获奖年月")
	private java.util.Date honorDate;

	/**
	 * 获奖年月起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date honorDateBegin;

	/**
	 * 获奖年月止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date honorDateEnd;

	public java.util.Date getData11(){
		return data11;
	}

	public void setData11(java.util.Date data11){
		this.data11 = data11;
	}

	public java.util.Date getData11Begin(){
		return data11Begin;
	}

	public void setData11Begin(java.util.Date data11Begin){
		this.data11Begin = data11Begin;
	}

	public java.util.Date getData11End(){
		return data11End;
	}

	public void setData11End(java.util.Date data11End){
		this.data11End = data11End;
	}

	public java.lang.String getData10(){
		return data10;
	}

	public void setData10(java.lang.String data10){
		this.data10 = data10;
	}

	public java.lang.Long getData12(){
		return data12;
	}

	public void setData12(java.lang.Long data12){
		this.data12 = data12;
	}

	public java.lang.String getRequestUser(){
		return requestUser;
	}

	public void setRequestUser(java.lang.String requestUser){
		this.requestUser = requestUser;
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

	public java.lang.String getAnnex(){
		return annex;
	}

	public void setAnnex(java.lang.String annex){
		this.annex = annex;
	}

	public java.lang.String getDeptTwoName(){
		return deptTwoName;
	}

	public void setDeptTwoName(java.lang.String deptTwoName){
		this.deptTwoName = deptTwoName;
	}

	public java.lang.String getHonorOrgan(){
		return honorOrgan;
	}

	public void setHonorOrgan(java.lang.String honorOrgan){
		this.honorOrgan = honorOrgan;
	}

	public java.lang.String getNation(){
		return nation;
	}

	public void setNation(java.lang.String nation){
		this.nation = nation;
	}

	public java.lang.String getDeptOneId(){
		return deptOneId;
	}

	public void setDeptOneId(java.lang.String deptOneId){
		this.deptOneId = deptOneId;
	}

	public java.lang.String getDeptThreeId(){
		return deptThreeId;
	}

	public void setDeptThreeId(java.lang.String deptThreeId){
		this.deptThreeId = deptThreeId;
	}

    public java.lang.String getData1(){
		return data1;
	}

	public void setData1(java.lang.String data1){
		this.data1 = data1;
	}

	public java.lang.String getData1Name(){
		return data1Name;
	}

	public void setData1Name(java.lang.String data1Name){
		this.data1Name = data1Name;
	}

	public java.lang.String getData2(){
		return data2;
	}

	public void setData2(java.lang.String data2){
		this.data2 = data2;
	}

	public java.lang.String getData3(){
		return data3;
	}

	public void setData3(java.lang.String data3){
		this.data3 = data3;
	}

	public java.lang.String getSkillLevel(){
		return skillLevel;
	}

	public void setSkillLevel(java.lang.String skillLevel){
		this.skillLevel = skillLevel;
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

	public java.lang.String getData9(){
		return data9;
	}

	public void setData9(java.lang.String data9){
		this.data9 = data9;
	}

	public java.lang.String getDeptId(){
		return deptId;
	}

	public void setDeptId(java.lang.String deptId){
		this.deptId = deptId;
	}

	public java.lang.String getData5(){
		return data5;
	}

	public void setData5(java.lang.String data5){
		this.data5 = data5;
	}

	public java.lang.String getEducationLevel(){
		return educationLevel;
	}

	public void setEducationLevel(java.lang.String educationLevel){
		this.educationLevel = educationLevel;
	}

	public java.lang.String getData6(){
		return data6;
	}

	public void setData6(java.lang.String data6){
		this.data6 = data6;
	}

	public java.lang.String getAutoCode(){
		return autoCode;
	}

	public void setAutoCode(java.lang.String autoCode){
		this.autoCode = autoCode;
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

	public java.lang.String getDeptThreeName(){
		return deptThreeName;
	}

	public void setDeptThreeName(java.lang.String deptThreeName){
		this.deptThreeName = deptThreeName;
	}

	public java.lang.String getProfessionalRank(){
		return professionalRank;
	}

	public void setProfessionalRank(java.lang.String professionalRank){
		this.professionalRank = professionalRank;
	}

	public java.lang.String getPoliticalOutlook(){
		return politicalOutlook;
	}

	public void setPoliticalOutlook(java.lang.String politicalOutlook){
		this.politicalOutlook = politicalOutlook;
	}

	public java.lang.String getModelLevel(){
		return modelLevel;
	}

	public void setModelLevel(java.lang.String modelLevel){
		this.modelLevel = modelLevel;
	}

	public java.lang.String getSpeciality(){
		return speciality;
	}

	public void setSpeciality(java.lang.String speciality){
		this.speciality = speciality;
	}

	public java.lang.String getModelCompany(){
		return modelCompany;
	}

	public void setModelCompany(java.lang.String modelCompany){
		this.modelCompany = modelCompany;
	}

	public java.lang.String getRequestUserId(){
		return requestUserId;
	}

	public void setRequestUserId(java.lang.String requestUserId){
		this.requestUserId = requestUserId;
	}

	public java.lang.String getDeptName(){
		return deptName;
	}

	public void setDeptName(java.lang.String deptName){
		this.deptName = deptName;
	}

	public java.lang.String getSex(){
		return sex;
	}

	public void setSex(java.lang.String sex){
		this.sex = sex;
	}

	public java.lang.String getModelCountry(){
		return modelCountry;
	}

	public void setModelCountry(java.lang.String modelCountry){
		this.modelCountry = modelCountry;
	}

	public java.lang.String getModelEconomize(){
		return modelEconomize;
	}

	public void setModelEconomize(java.lang.String modelEconomize){
		this.modelEconomize = modelEconomize;
	}

	public java.lang.String getDeptTwoId(){
		return deptTwoId;
	}

	public void setDeptTwoId(java.lang.String deptTwoId){
		this.deptTwoId = deptTwoId;
	}

	public java.util.Date getWorkDate(){
		return workDate;
	}

	public void setWorkDate(java.util.Date workDate){
		this.workDate = workDate;
	}

	public java.util.Date getWorkDateBegin(){
		return workDateBegin;
	}

	public void setWorkDateBegin(java.util.Date workDateBegin){
		this.workDateBegin = workDateBegin;
	}

	public java.util.Date getWorkDateEnd(){
		return workDateEnd;
	}

	public void setWorkDateEnd(java.util.Date workDateEnd){
		this.workDateEnd = workDateEnd;
	}

	public java.lang.String getHonorName(){
		return honorName;
	}

	public void setHonorName(java.lang.String honorName){
		this.honorName = honorName;
	}

	public java.lang.String getCategoryType(){
		return categoryType;
	}

	public void setCategoryType(java.lang.String categoryType){
		this.categoryType = categoryType;
	}

	public java.lang.String getPostName(){
		return postName;
	}

	public void setPostName(java.lang.String postName){
		this.postName = postName;
	}

	public java.lang.String getUserCode(){
		return userCode;
	}

	public void setUserCode(java.lang.String userCode){
		this.userCode = userCode;
	}

	public java.lang.String getHonorFileName(){
		return honorFileName;
	}

	public void setHonorFileName(java.lang.String honorFileName){
		this.honorFileName = honorFileName;
	}

	public java.lang.String getRequestDate(){
		return requestDate;
	}

	public void setRequestDate(java.lang.String requestDate){
		this.requestDate = requestDate;
	}

	public java.lang.String getAppointmentLevel(){
		return appointmentLevel;
	}

	public void setAppointmentLevel(java.lang.String appointmentLevel){
		this.appointmentLevel = appointmentLevel;
	}

	public java.lang.Long getTel(){
		return tel;
	}

	public void setTel(java.lang.Long tel){
		this.tel = tel;
	}

	public java.lang.String getDeptOneName(){
		return deptOneName;
	}

	public void setDeptOneName(java.lang.String deptOneName){
		this.deptOneName = deptOneName;
	}

	public java.lang.String getModelCity(){
		return modelCity;
	}

	public void setModelCity(java.lang.String modelCity){
		this.modelCity = modelCity;
	}

	public java.lang.String getModelName(){
		return modelName;
	}

	public void setModelName(java.lang.String modelName){
		this.modelName = modelName;
	}

	public byte[] getData13(){
		return data13;
	}

	public void setData13(byte[] data13){
		this.data13 = data13;
	}

	public java.lang.String getData14(){
		return data14;
	}

	public void setData14(java.lang.String data14){
		this.data14 = data14;
	}

	public java.util.Date getHonorDate(){
		return honorDate;
	}

	public void setHonorDate(java.util.Date honorDate){
		this.honorDate = honorDate;
	}

	public java.util.Date getHonorDateBegin(){
		return honorDateBegin;
	}

	public void setHonorDateBegin(java.util.Date honorDateBegin){
		this.honorDateBegin = honorDateBegin;
	}

	public java.util.Date getHonorDateEnd(){
		return honorDateEnd;
	}

	public void setHonorDateEnd(java.util.Date honorDateEnd){
		this.honorDateEnd = honorDateEnd;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_TU_MODEL_WORKER";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_TU_MODEL_WORKER";
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