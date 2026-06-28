package avicit.tu.dyntumodelworkerf.dto;

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
 * @创建时间： 2023-08-14 14:24
 * @类说明：DYN_TU_MODEL_WORKER_FDto
 * @修改记录：
 */
@PojoRemark(table="DYN_TU_MODEL_WORKER_F", object="DynTuModelWorkerFDTO", name="DYN_TU_MODEL_WORKER_F")
public class DynTuModelWorkerFDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

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
	 * 照片文件1
	 */
	@FieldRemark(column="BLOB", field="blob", name="照片文件1")
	private byte[] blob;

	/**
	 * DATA_11
	 */
	@FieldRemark(column="DATA_11", field="data11", name="DATA_11")
	private java.lang.Long data11;

	/**
	 * DATA_10
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="DATA_10", field="data10", name="DATA_10")
	private java.util.Date data10;

	/**
	 * DATA_10起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date data10Begin;

	/**
	 * DATA_10止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date data10End;

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
	 * 荣誉颁发机构
	 */
	@FieldRemark(column="HONOR_ORGAN", field="honorOrgan", name="荣誉颁发机构")
	private java.lang.String honorOrgan;

	/**
	 * 劳模姓名ID
	 */
	@FieldRemark(column="DATA_1", field="data1", name="劳模姓名ID")
	private java.lang.String data1;

	/**
	 * 字段_2
	 */
	@FieldRemark(column="DATA_2", field="data2", name="字段_2")
	private java.lang.String data2;

	/**
	 * 荣誉名称
	 */
	@FieldRemark(column="HONOR_NAME", field="honorName", name="荣誉名称")
	private java.lang.String honorName;

	/**
	 * 字段_3
	 */
	@FieldRemark(column="DATA_3", field="data3", name="字段_3")
	private java.lang.String data3;

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
	 * 申请单位ID
	 */
	@FieldRemark(column="DEPT_ID", field="deptId", name="申请单位ID")
	private java.lang.String deptId;

	/**
	 * DATA_9
	 */
	@FieldRemark(column="DATA_9", field="data9", name="DATA_9")
	private java.lang.String data9;

	/**
	 * 劳模姓名
	 */
	@FieldRemark(column="MODEL_NAME", field="modelName", name="劳模姓名")
	private java.lang.String modelName;

	/**
	 * 照片文件2
	 */
	@FieldRemark(column="CLOB", field="clob", name="照片文件2")
	private java.lang.String clob;

	/**
	 * DATA_5
	 */
	@FieldRemark(column="DATA_5", field="data5", name="DATA_5")
	private java.lang.String data5;

	/**
	 * 表单编号
	 */
	@FieldRemark(column="AUTO_CODE", field="autoCode", name="表单编号")
	private java.lang.String autoCode;

	/**
	 * DATA_6
	 */
	@FieldRemark(column="DATA_6", field="data6", name="DATA_6")
	private java.lang.String data6;

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

	/**
	 * 申请日期
	 */
	@FieldRemark(column="REQUEST_DATE", field="requestDate", name="申请日期")
	private java.lang.String requestDate;

	/**
	 * 新增荣誉层级
	 */
	@FieldRemark(column="MODEL_LEVEL", field="modelLevel", name="新增荣誉层级", dataType="lookup", lookupType="MODELNAMELEVEL")
	private java.lang.String modelLevel;
	private java.lang.String modelLevelName;

	/**
	 * 联系方式
	 */
	@FieldRemark(column="TEL", field="tel", name="联系方式")
	private java.lang.Long tel;

	/**
	 * 地市级荣誉
	 */
	@FieldRemark(column="MODEL_CITY", field="modelCity", name="地市级荣誉")
	private java.lang.String modelCity;

	/**
	 * 公司级荣誉
	 */
	@FieldRemark(column="MODEL_COMPANY", field="modelCompany", name="公司级荣誉")
	private java.lang.String modelCompany;

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

	public byte[] getBlob(){
		return blob;
	}

	public void setBlob(byte[] blob){
		this.blob = blob;
	}

	public java.lang.Long getData11(){
		return data11;
	}

	public void setData11(java.lang.Long data11){
		this.data11 = data11;
	}

	public java.util.Date getData10(){
		return data10;
	}

	public void setData10(java.util.Date data10){
		this.data10 = data10;
	}

	public java.util.Date getData10Begin(){
		return data10Begin;
	}

	public void setData10Begin(java.util.Date data10Begin){
		this.data10Begin = data10Begin;
	}

	public java.util.Date getData10End(){
		return data10End;
	}

	public void setData10End(java.util.Date data10End){
		this.data10End = data10End;
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

	public java.lang.String getHonorOrgan(){
		return honorOrgan;
	}

	public void setHonorOrgan(java.lang.String honorOrgan){
		this.honorOrgan = honorOrgan;
	}

	public java.lang.String getData1(){
		return data1;
	}

	public void setData1(java.lang.String data1){
		this.data1 = data1;
	}

	public java.lang.String getData2(){
		return data2;
	}

	public void setData2(java.lang.String data2){
		this.data2 = data2;
	}

	public java.lang.String getHonorName(){
		return honorName;
	}

	public void setHonorName(java.lang.String honorName){
		this.honorName = honorName;
	}

	public java.lang.String getData3(){
		return data3;
	}

	public void setData3(java.lang.String data3){
		this.data3 = data3;
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

	public java.lang.String getDeptId(){
		return deptId;
	}

	public void setDeptId(java.lang.String deptId){
		this.deptId = deptId;
	}

	public java.lang.String getData9(){
		return data9;
	}

	public void setData9(java.lang.String data9){
		this.data9 = data9;
	}

	public java.lang.String getModelName(){
		return modelName;
	}

	public void setModelName(java.lang.String modelName){
		this.modelName = modelName;
	}

	public java.lang.String getClob(){
		return clob;
	}

	public void setClob(java.lang.String clob){
		this.clob = clob;
	}

	public java.lang.String getData5(){
		return data5;
	}

	public void setData5(java.lang.String data5){
		this.data5 = data5;
	}

	public java.lang.String getAutoCode(){
		return autoCode;
	}

	public void setAutoCode(java.lang.String autoCode){
		this.autoCode = autoCode;
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

	public java.lang.String getRequestDate(){
		return requestDate;
	}

	public void setRequestDate(java.lang.String requestDate){
		this.requestDate = requestDate;
	}

    public java.lang.String getModelLevel(){
		return modelLevel;
	}

	public void setModelLevel(java.lang.String modelLevel){
		this.modelLevel = modelLevel;
	}

	public java.lang.String getModelLevelName(){
		return modelLevelName;
	}

	public void setModelLevelName(java.lang.String modelLevelName){
		this.modelLevelName = modelLevelName;
	}

	public java.lang.Long getTel(){
		return tel;
	}

	public void setTel(java.lang.Long tel){
		this.tel = tel;
	}

	public java.lang.String getModelCity(){
		return modelCity;
	}

	public void setModelCity(java.lang.String modelCity){
		this.modelCity = modelCity;
	}

	public java.lang.String getModelCompany(){
		return modelCompany;
	}

	public void setModelCompany(java.lang.String modelCompany){
		this.modelCompany = modelCompany;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_TU_MODEL_WORKER_F";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_TU_MODEL_WORKER_F";
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