package avicit.pb.commandos.partycommandos.dto;

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
 * @创建时间： 2022-02-11 09:57
 * @类说明：铸心突击队Dto
 * @修改记录：
 */
	@PojoRemark(table="PARTY_COMMANDOS", object="PartyCommandosDTO", name="铸心突击队")
public class PartyCommandosDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;
	
	private java.lang.String autoCodeValue;
	
	

	public java.lang.String getAutoCodeValue() {
		return autoCodeValue;
	}

	public void setAutoCodeValue(java.lang.String autoCodeValue) {
		this.autoCodeValue = autoCodeValue;
	}

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 联络员
	 */
	//@NotBlank(message = "联络员不能为空")
	@FieldRemark(column="USER_ID", field="userId", name="联络员", dataType="user")
	private java.lang.String userId;
	
	/**
	 * 联络员显示字段
	 */
	private java.lang.String userIdAlias;

	/**
	 * 申请部门
	 */
	//@NotBlank(message = "申请部门不能为空")
	@FieldRemark(column="DEPT_ID", field="deptId", name="申请部门", dataType="dept")
	private java.lang.String deptId;
	
	/**
	 * 申请部门显示字段
	 */
	private java.lang.String deptIdAlias;

	/**
	 * 突击队名称
	 */
	@NotBlank(message = "突击队名称不能为空")
	@FieldRemark(column="COMMANDOS_NAME", field="commandosName", name="突击队名称")
	private java.lang.String commandosName;

	/**
	 * 突击队类型
	 */
	@NotBlank(message = "突击队类型不能为空")
	@FieldRemark(column="COMMANDOS_TYPE", field="commandosType", name="突击队类型", dataType="lookup", lookupType="PC_TYPE")
	private java.lang.String commandosType;
	private java.lang.String commandosTypeName;

	/**
	 * 组建时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@NotNull(message = "组建时间不能为空")
	@FieldRemark(column="SETUP_TIME", field="setupTime", name="组建时间")
	private java.util.Date setupTime;
	
	/**
	 * 组建时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date setupTimeBegin;
	
	/**
	 * 组建时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date setupTimeEnd;

	/**
	 * 突击队负责人
	 */
	@NotBlank(message = "突击队负责人不能为空")
	@FieldRemark(column="COMMANDOS_CHARGER", field="commandosCharger", name="突击队负责人", dataType="user")
	private java.lang.String commandosCharger;
	
	/**
	 * 突击队负责人显示字段
	 */
	private java.lang.String commandosChargerAlias;

	/**
	 * 负责人所在党组织
	 */
	@LogField
	//@NotBlank(message = "负责人所在党组织不能为空")
	@FieldRemark(column="IN_PARTYORG", field="inPartyorg", name="负责人所在党组织")
	private java.lang.String inPartyorg;
	private java.lang.String inPartyOrgAlias;

	public java.lang.String getInPartyOrgAlias() {
		return inPartyOrgAlias;
	}

	public void setInPartyOrgAlias(java.lang.String inPartyOrgAlias) {
		this.inPartyOrgAlias = inPartyOrgAlias;
	}

	/**
	 * 负责人党内职务
	 */
	@NotBlank(message = "负责人党内职务不能为空")
	@FieldRemark(column="CHARGER_POST", field="chargerPost", name="负责人党内职务")
	private java.lang.String chargerPost;

	/**
	 * 负责人行政或技术职务
	 */
	@NotBlank(message = "负责人行政或技术职务不能为空")
	@FieldRemark(column="ADMINORTECH", field="adminortech", name="负责人行政或技术职务")
	private java.lang.String adminortech;

	/**
	 * 涉及党支部数
	 */
	@NotNull(message = "涉及党支部数不能为空")
	@FieldRemark(column="PARTY_NUM", field="partyNum", name="涉及党支部数")
	private java.lang.Long partyNum;

	/**
	 * 参与党员数
	 */
	@NotNull(message = "参与党员数不能为空")
	@FieldRemark(column="PM_NUM", field="pmNum", name="参与党员数")
	private java.lang.Long pmNum;

	/**
	 * 是否跨单位联合
	 */
	@NotBlank(message = "是否跨单位联合不能为空")
	@FieldRemark(column="UNIONDEPTS_YN", field="uniondeptsYn", name="是否跨单位联合", dataType="lookup", lookupType="PC_DPET_UNION")
	private java.lang.String uniondeptsYn;
	private java.lang.String uniondeptsYnName;

	/**
	 * 联合单位
	 */
	@FieldRemark(column="UNION_DEPTS", field="unionDepts", name="联合单位", dataType="dept")
	private java.lang.String unionDepts;
	
	/**
	 * 联合单位显示字段
	 */
	private java.lang.String unionDeptsAlias;

	/**
	 * 公关任务简介
	 */
	@NotBlank(message = "公关任务简介不能为空")
	@FieldRemark(column="KEY_PROBLEMS", field="keyProblems", name="公关任务简介")
	private java.lang.String keyProblems;

	/**
	 * 密级
	 */
	@NotBlank(message = "密级不能为空")
	@FieldRemark(column="PC_SECRET_LEVEL", field="pcSecretLevel", name="密级")
	private java.lang.String pcSecretLevel;

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
	@FieldRemark(column="ATTRIBUTE_01", field="attribute01", name="联络员")
	private java.lang.String attribute01;
	private java.lang.String attribute01Alias;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_02", field="attribute02", name="是否跨外部单位联合")
	private java.lang.String attribute02;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="外部联合单位")
	private java.lang.String attribute03;

	public java.lang.String getAttribute01Alias() {
		return attribute01Alias;
	}

	public void setAttribute01Alias(java.lang.String attribute01Alias) {
		this.attribute01Alias = attribute01Alias;
	}

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_04", field="attribute04", name="政委姓名")
	private java.lang.String attribute04;
	private java.lang.String attribute04Alias;

	public java.lang.String getAttribute04Alias() {
		return attribute04Alias;
	}

	public void setAttribute04Alias(java.lang.String attribute04Alias) {
		this.attribute04Alias = attribute04Alias;
	}

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_05", field="attribute05", name="政委行政或技术职务")
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
	@FieldRemark(column="ATTRIBUTE_12", field="attribute12", name="突击队总人数")
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
	 * 自动编码
	 */
	@NotBlank(message = "自动编码不能为空")
	@FieldRemark(column="AUTO_CODE", field="autoCode", name="自动编码")
	private java.lang.String autoCode;

	/**
	 * 联系电话
	 */
	@NotBlank(message = "联系电话不能为空")
	@FieldRemark(column="TEL", field="tel", name="联系电话")
	private java.lang.String tel;

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

	public java.lang.String getCommandosName(){
		return commandosName;
	}

	public void setCommandosName(java.lang.String commandosName){
		this.commandosName = commandosName;
	}

    public java.lang.String getCommandosType(){
		return commandosType;
	}

	public void setCommandosType(java.lang.String commandosType){
		this.commandosType = commandosType;
	}

	public java.lang.String getCommandosTypeName(){
		return commandosTypeName;
	}

	public void setCommandosTypeName(java.lang.String commandosTypeName){
		this.commandosTypeName = commandosTypeName;
	}

	public java.util.Date getSetupTime(){
		return setupTime;
	}

	public void setSetupTime(java.util.Date setupTime){
		this.setupTime = setupTime;
	}

	public java.util.Date getSetupTimeBegin(){
		return setupTimeBegin;
	}

	public void setSetupTimeBegin(java.util.Date setupTimeBegin){
		this.setupTimeBegin = setupTimeBegin;
	}

	public java.util.Date getSetupTimeEnd(){
		return setupTimeEnd;
	}

	public void setSetupTimeEnd(java.util.Date setupTimeEnd){
		this.setupTimeEnd = setupTimeEnd;
	}

	public java.lang.String getCommandosCharger(){
		return commandosCharger;
	}

	public void setCommandosCharger(java.lang.String commandosCharger){
		this.commandosCharger = commandosCharger;
	}

	public java.lang.String getCommandosChargerAlias(){
		return commandosChargerAlias;
	}

	public void setCommandosChargerAlias(java.lang.String commandosChargerAlias){
		this.commandosChargerAlias = commandosChargerAlias;
	}

	public java.lang.String getInPartyorg(){
		return inPartyorg;
	}

	public void setInPartyorg(java.lang.String inPartyorg){
		this.inPartyorg = inPartyorg;
	}

	public java.lang.String getChargerPost(){
		return chargerPost;
	}

	public void setChargerPost(java.lang.String chargerPost){
		this.chargerPost = chargerPost;
	}

	public java.lang.String getAdminortech(){
		return adminortech;
	}

	public void setAdminortech(java.lang.String adminortech){
		this.adminortech = adminortech;
	}

	public java.lang.Long getPartyNum(){
		return partyNum;
	}

	public void setPartyNum(java.lang.Long partyNum){
		this.partyNum = partyNum;
	}

	public java.lang.Long getPmNum(){
		return pmNum;
	}

	public void setPmNum(java.lang.Long pmNum){
		this.pmNum = pmNum;
	}

    public java.lang.String getUniondeptsYn(){
		return uniondeptsYn;
	}

	public void setUniondeptsYn(java.lang.String uniondeptsYn){
		this.uniondeptsYn = uniondeptsYn;
	}

	public java.lang.String getUniondeptsYnName(){
		return uniondeptsYnName;
	}

	public void setUniondeptsYnName(java.lang.String uniondeptsYnName){
		this.uniondeptsYnName = uniondeptsYnName;
	}

	public java.lang.String getUnionDepts(){
		return unionDepts;
	}

	public void setUnionDepts(java.lang.String unionDepts){
		this.unionDepts = unionDepts;
	}

	public java.lang.String getUnionDeptsAlias(){
		return unionDeptsAlias;
	}

	public void setUnionDeptsAlias(java.lang.String unionDeptsAlias){
		this.unionDeptsAlias = unionDeptsAlias;
	}

	public java.lang.String getKeyProblems(){
		return keyProblems;
	}

	public void setKeyProblems(java.lang.String keyProblems){
		this.keyProblems = keyProblems;
	}

	public java.lang.String getPcSecretLevel(){
		return pcSecretLevel;
	}

	public void setPcSecretLevel(java.lang.String pcSecretLevel){
		this.pcSecretLevel = pcSecretLevel;
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

	public java.lang.String getAutoCode(){
		return autoCode;
	}

	public void setAutoCode(java.lang.String autoCode){
		this.autoCode = autoCode;
	}

	public java.lang.String getTel(){
		return tel;
	}

	public void setTel(java.lang.String tel){
		this.tel = tel;
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
			return "铸心突击队";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "铸心突击队";
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