package avicit.pb.milepost.dynfiveof.dto;

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
 * @创建时间： 2023-07-17 16:01
 * @类说明：DYN_FIVE_OFDto
 * @修改记录：
 */
@PojoRemark(table="DYN_FIVE_OF", object="DynFiveOfDTO", name="DYN_FIVE_OF")
public class DynFiveOfDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 提出时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="FIVE_DATE", field="fiveDate", name="提出时间")
	private java.util.Date fiveDate;
	
	/**
	 * 提出时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fiveDateBegin;
	
	/**
	 * 提出时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fiveDateEnd;

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
	 * 申请编号
	 */
	@FieldRemark(column="FIVE_NO", field="fiveNo", name="申请编号")
	private java.lang.String fiveNo;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR9", field="attr9", name="预留字段")
	private java.lang.String attr9;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR4", field="attr4", name="预留字段")
	private java.lang.String attr4;

	/**
	 * 提出人姓名
	 */
	@FieldRemark(column="FIVE_NAME", field="fiveName", name="提出人姓名")
	private java.lang.String fiveName;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR3", field="attr3", name="预留字段")
	private java.lang.String attr3;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR2", field="attr2", name="预留字段")
	private java.lang.String attr2;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR1", field="attr1", name="预留字段")
	private java.lang.String attr1;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 评选情况
	 */
	@FieldRemark(column="FIVE_SITUATION", field="fiveSituation", name="评选情况")
	private java.lang.String fiveSituation;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR8", field="attr8", name="预留字段")
	private java.lang.String attr8;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR7", field="attr7", name="预留字段")
	private java.lang.String attr7;

	/**
	 * 预留字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTR20", field="attr20", name="预留字段")
	private java.util.Date attr20;
	
	/**
	 * 预留字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr20Begin;
	
	/**
	 * 预留字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr20End;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR6", field="attr6", name="预留字段")
	private java.lang.String attr6;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR5", field="attr5", name="预留字段")
	private java.lang.String attr5;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR12", field="attr12", name="预留字段")
	private java.lang.String attr12;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR13", field="attr13", name="预留字段")
	private java.lang.String attr13;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR10", field="attr10", name="预留字段")
	private java.lang.String attr10;

	/**
	 * 联系人电话
	 */
	@FieldRemark(column="POSEN_TEL", field="posenTel", name="联系人电话")
	private java.lang.String posenTel;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR11", field="attr11", name="预留字段")
	private java.lang.String attr11;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR16", field="attr16", name="预留字段")
	private java.lang.String attr16;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR17", field="attr17", name="预留字段")
	private java.lang.String attr17;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR14", field="attr14", name="预留字段")
	private java.lang.String attr14;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR15", field="attr15", name="预留字段")
	private java.lang.String attr15;

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
	 * 预留字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTR18", field="attr18", name="预留字段")
	private java.util.Date attr18;
	
	/**
	 * 预留字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr18Begin;
	
	/**
	 * 预留字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr18End;

	/**
	 * 预留字段
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTR19", field="attr19", name="预留字段")
	private java.util.Date attr19;
	
	/**
	 * 预留字段起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr19Begin;
	
	/**
	 * 预留字段止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr19End;

	/**
	 * 改善效果
	 */
	@FieldRemark(column="FIVE_EFFECT", field="fiveEffect", name="改善效果")
	private java.lang.String fiveEffect;

	/**
	 * 单位
	 */
	@FieldRemark(column="FIVE_DEPT", field="fiveDept", name="单位")
	private java.lang.String fiveDept;

	/**
	 * 职位
	 */
	@FieldRemark(column="FIVE_POSITION", field="fivePosition", name="职位")
	private java.lang.String fivePosition;

	/**
	 * 应用前景
	 */
	@FieldRemark(column="FIVE_PROSPECTS", field="fiveProspects", name="应用前景")
	private java.lang.String fiveProspects;

	/**
	 * 联系人姓名
	 */
	@FieldRemark(column="POSEN_NAME", field="posenName", name="联系人姓名")
	private java.lang.String posenName;

	/**
	 * 年龄
	 */
	@FieldRemark(column="FVIE_AGE", field="fvieAge", name="年龄")
	private java.lang.String fvieAge;

	/**
	 * 申报补充
	 */
	@FieldRemark(column="FIVE_DECLARATIONS", field="fiveDeclarations", name="申报补充")
	private java.lang.String fiveDeclarations;

	/**
	 * 问题描述
	 */
	@FieldRemark(column="FIVE_PROBLEM", field="fiveProblem", name="问题描述")
	private java.lang.String fiveProblem;

	/**
	 * 改善措施
	 */
	@FieldRemark(column="FIVE_MEASURES", field="fiveMeasures", name="改善措施")
	private java.lang.String fiveMeasures;

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

	public java.util.Date getFiveDate(){
		return fiveDate;
	}

	public void setFiveDate(java.util.Date fiveDate){
		this.fiveDate = fiveDate;
	}

	public java.util.Date getFiveDateBegin(){
		return fiveDateBegin;
	}

	public void setFiveDateBegin(java.util.Date fiveDateBegin){
		this.fiveDateBegin = fiveDateBegin;
	}

	public java.util.Date getFiveDateEnd(){
		return fiveDateEnd;
	}

	public void setFiveDateEnd(java.util.Date fiveDateEnd){
		this.fiveDateEnd = fiveDateEnd;
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

	public java.lang.String getFiveNo(){
		return fiveNo;
	}

	public void setFiveNo(java.lang.String fiveNo){
		this.fiveNo = fiveNo;
	}

	public java.lang.String getAttr9(){
		return attr9;
	}

	public void setAttr9(java.lang.String attr9){
		this.attr9 = attr9;
	}

	public java.lang.String getAttr4(){
		return attr4;
	}

	public void setAttr4(java.lang.String attr4){
		this.attr4 = attr4;
	}

	public java.lang.String getFiveName(){
		return fiveName;
	}

	public void setFiveName(java.lang.String fiveName){
		this.fiveName = fiveName;
	}

	public java.lang.String getAttr3(){
		return attr3;
	}

	public void setAttr3(java.lang.String attr3){
		this.attr3 = attr3;
	}

	public java.lang.String getAttr2(){
		return attr2;
	}

	public void setAttr2(java.lang.String attr2){
		this.attr2 = attr2;
	}

	public java.lang.String getAttr1(){
		return attr1;
	}

	public void setAttr1(java.lang.String attr1){
		this.attr1 = attr1;
	}

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}

	public java.lang.String getFiveSituation(){
		return fiveSituation;
	}

	public void setFiveSituation(java.lang.String fiveSituation){
		this.fiveSituation = fiveSituation;
	}

	public java.lang.String getAttr8(){
		return attr8;
	}

	public void setAttr8(java.lang.String attr8){
		this.attr8 = attr8;
	}

	public java.lang.String getAttr7(){
		return attr7;
	}

	public void setAttr7(java.lang.String attr7){
		this.attr7 = attr7;
	}

	public java.util.Date getAttr20(){
		return attr20;
	}

	public void setAttr20(java.util.Date attr20){
		this.attr20 = attr20;
	}

	public java.util.Date getAttr20Begin(){
		return attr20Begin;
	}

	public void setAttr20Begin(java.util.Date attr20Begin){
		this.attr20Begin = attr20Begin;
	}

	public java.util.Date getAttr20End(){
		return attr20End;
	}

	public void setAttr20End(java.util.Date attr20End){
		this.attr20End = attr20End;
	}

	public java.lang.String getAttr6(){
		return attr6;
	}

	public void setAttr6(java.lang.String attr6){
		this.attr6 = attr6;
	}

	public java.lang.String getAttr5(){
		return attr5;
	}

	public void setAttr5(java.lang.String attr5){
		this.attr5 = attr5;
	}

	public java.lang.String getAttr12(){
		return attr12;
	}

	public void setAttr12(java.lang.String attr12){
		this.attr12 = attr12;
	}

	public java.lang.String getAttr13(){
		return attr13;
	}

	public void setAttr13(java.lang.String attr13){
		this.attr13 = attr13;
	}

	public java.lang.String getAttr10(){
		return attr10;
	}

	public void setAttr10(java.lang.String attr10){
		this.attr10 = attr10;
	}

	public java.lang.String getPosenTel(){
		return posenTel;
	}

	public void setPosenTel(java.lang.String posenTel){
		this.posenTel = posenTel;
	}

	public java.lang.String getAttr11(){
		return attr11;
	}

	public void setAttr11(java.lang.String attr11){
		this.attr11 = attr11;
	}

	public java.lang.String getAttr16(){
		return attr16;
	}

	public void setAttr16(java.lang.String attr16){
		this.attr16 = attr16;
	}

	public java.lang.String getAttr17(){
		return attr17;
	}

	public void setAttr17(java.lang.String attr17){
		this.attr17 = attr17;
	}

	public java.lang.String getAttr14(){
		return attr14;
	}

	public void setAttr14(java.lang.String attr14){
		this.attr14 = attr14;
	}

	public java.lang.String getAttr15(){
		return attr15;
	}

	public void setAttr15(java.lang.String attr15){
		this.attr15 = attr15;
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

	public java.util.Date getAttr18(){
		return attr18;
	}

	public void setAttr18(java.util.Date attr18){
		this.attr18 = attr18;
	}

	public java.util.Date getAttr18Begin(){
		return attr18Begin;
	}

	public void setAttr18Begin(java.util.Date attr18Begin){
		this.attr18Begin = attr18Begin;
	}

	public java.util.Date getAttr18End(){
		return attr18End;
	}

	public void setAttr18End(java.util.Date attr18End){
		this.attr18End = attr18End;
	}

	public java.util.Date getAttr19(){
		return attr19;
	}

	public void setAttr19(java.util.Date attr19){
		this.attr19 = attr19;
	}

	public java.util.Date getAttr19Begin(){
		return attr19Begin;
	}

	public void setAttr19Begin(java.util.Date attr19Begin){
		this.attr19Begin = attr19Begin;
	}

	public java.util.Date getAttr19End(){
		return attr19End;
	}

	public void setAttr19End(java.util.Date attr19End){
		this.attr19End = attr19End;
	}

	public java.lang.String getFiveEffect(){
		return fiveEffect;
	}

	public void setFiveEffect(java.lang.String fiveEffect){
		this.fiveEffect = fiveEffect;
	}

	public java.lang.String getFiveDept(){
		return fiveDept;
	}

	public void setFiveDept(java.lang.String fiveDept){
		this.fiveDept = fiveDept;
	}

	public java.lang.String getFivePosition(){
		return fivePosition;
	}

	public void setFivePosition(java.lang.String fivePosition){
		this.fivePosition = fivePosition;
	}

	public java.lang.String getFiveProspects(){
		return fiveProspects;
	}

	public void setFiveProspects(java.lang.String fiveProspects){
		this.fiveProspects = fiveProspects;
	}

	public java.lang.String getPosenName(){
		return posenName;
	}

	public void setPosenName(java.lang.String posenName){
		this.posenName = posenName;
	}

	public java.lang.String getFvieAge(){
		return fvieAge;
	}

	public void setFvieAge(java.lang.String fvieAge){
		this.fvieAge = fvieAge;
	}

	public java.lang.String getFiveDeclarations(){
		return fiveDeclarations;
	}

	public void setFiveDeclarations(java.lang.String fiveDeclarations){
		this.fiveDeclarations = fiveDeclarations;
	}

	public java.lang.String getFiveProblem(){
		return fiveProblem;
	}

	public void setFiveProblem(java.lang.String fiveProblem){
		this.fiveProblem = fiveProblem;
	}

	public java.lang.String getFiveMeasures(){
		return fiveMeasures;
	}

	public void setFiveMeasures(java.lang.String fiveMeasures){
		this.fiveMeasures = fiveMeasures;
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
			return "DYN_FIVE_OF";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_FIVE_OF";
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