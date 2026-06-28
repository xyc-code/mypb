package avicit.pb.scoring.integral.dto;

import java.util.HashMap;
import java.util.Map;

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
 * @作者：zzf
 * @邮箱：numbery@163.com
 * @创建时间： 2023-08-01 08:51
 * @类说明：INTEGRALDto
 * @修改记录：
 */
@PojoRemark(table="INTEGRAL", object="IntegralDTO", name="INTEGRAL")
public class IntegralDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 惩处减分
	 */
	@FieldRemark(column="PUNISH", field="punish", name="惩处减分")
	private java.lang.Double punish;

	/**
	 * 外键
	 */
	@FieldRemark(column="FK_SUB_COL_ID", field="fkSubColId", name="外键")
	private java.lang.String fkSubColId;

	/**
	 * 惩处减分备注
	 */
	@FieldRemark(column="PUNISH_CONTENT", field="punishContent", name="惩处减分备注")
	private java.lang.String punishContent;

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
	 * 奖励加分
	 */
	@FieldRemark(column="REWARD", field="reward", name="奖励加分")
	private java.lang.Double reward;

	/**
	 * 填写日期
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="INTEGRAL_DATE", field="integralDate", name="填写日期")
	private java.util.Date integralDate;

	/**
	 * 填写日期起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date integralDateBegin;

	/**
	 * 填写日期止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date integralDateEnd;

	/**
	 * 履职分
	 */
	@FieldRemark(column="PERSONAL", field="personal", name="履职分")
	private java.lang.Double personal;

	/**
	 * 基础分扣分备注
	 */
	@FieldRemark(column="FOUNDATIONS_CONTENT", field="foundationsContent", name="基础分扣分备注")
	private java.lang.String foundationsContent;

	/**
	 * 履职分备注
	 */
	@FieldRemark(column="PERSONAL_CONTENT", field="personalContent", name="履职分备注")
	private java.lang.String personalContent;

	/**
	 * 奖励加分备注
	 */
	@FieldRemark(column="REWARD_CONTENT", field="rewardContent", name="奖励加分备注")
	private java.lang.String rewardContent;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 基础分扣分
	 */
	@FieldRemark(column="FOUNDATIONS", field="foundations", name="基础分扣分")
	private java.lang.Double foundations;

	/**
	 * 总分
	 */
	@FieldRemark(column="INTEGRAL_CONTENT", field="integralContent", name="总分")
	private java.lang.Double integralContent;

	/**
	 * 姓名
	 */
	@FieldRemark(column="DATA_1", field="data1", name="姓名")
	private java.lang.String data1;

	/**
	 * 用户id
	 */
	@FieldRemark(column="USER_ID", field="userId", name="用户id")
	private java.lang.String userId;

	/**
	 * 性别
	 */
	@FieldRemark(column="SEX", field="sex", name="性别")
	private java.lang.String sex;

	/**
	 * 党支部id
	 */
	@FieldRemark(column="PARTY_ID", field="partyId", name="党支部id")
	private java.lang.String partyId;
	
	public java.lang.String userNO;

	/**
	 * 党支部名称
	 */
	@FieldRemark(column="PARTY_NAME", field="partyName", name="党支部名称")
	private java.lang.String partyName;

	/**
	 * 身份证号
	 */
	@FieldRemark(column="ID_NUMBER", field="idNumber", name="身份证号")
	private java.lang.String idNumber;
	
	//虚拟字段
	private Map<String,Object> map = new HashMap<>();
	
	public void setMap(String key,Object value){
		map.put(key,value);
	}
	public Map<String,Object> getMap(){
		return map;
	}



	public java.lang.String getFkSubColId(){
		return fkSubColId;
	}

	public void setFkSubColId(java.lang.String fkSubColId){
		this.fkSubColId = fkSubColId;
	}

	public java.lang.String getPunishContent(){
		return punishContent;
	}

	public void setPunishContent(java.lang.String punishContent){
		this.punishContent = punishContent;
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


	public java.util.Date getIntegralDate(){
		return integralDate;
	}

	public void setIntegralDate(java.util.Date integralDate){
		this.integralDate = integralDate;
	}

	public java.util.Date getIntegralDateBegin(){
		return integralDateBegin;
	}

	public void setIntegralDateBegin(java.util.Date integralDateBegin){
		this.integralDateBegin = integralDateBegin;
	}

	public java.util.Date getIntegralDateEnd(){
		return integralDateEnd;
	}

	public void setIntegralDateEnd(java.util.Date integralDateEnd){
		this.integralDateEnd = integralDateEnd;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Double getPunish() {
		return punish;
	}

	public void setPunish(Double punish) {
		this.punish = punish;
	}

	public Double getReward() {
		return reward;
	}

	public void setReward(Double reward) {
		this.reward = reward;
	}

	public Double getPersonal() {
		return personal;
	}

	public void setPersonal(Double personal) {
		this.personal = personal;
	}

	public Double getFoundations() {
		return foundations;
	}

	public void setFoundations(Double foundations) {
		this.foundations = foundations;
	}

	public Double getIntegralContent() {
		return integralContent;
	}

	public void setIntegralContent(Double integralContent) {
		this.integralContent = integralContent;
	}

	public String getUserNO() {
		return userNO;
	}

	public void setUserNO(String userNO) {
		this.userNO = userNO;
	}

	public void setMap(Map<String, Object> map) {
		this.map = map;
	}

	public java.lang.String getFoundationsContent(){
		return foundationsContent;
	}

	public void setFoundationsContent(java.lang.String foundationsContent){
		this.foundationsContent = foundationsContent;
	}

	public java.lang.String getPersonalContent(){
		return personalContent;
	}

	public void setPersonalContent(java.lang.String personalContent){
		this.personalContent = personalContent;
	}

	public java.lang.String getRewardContent(){
		return rewardContent;
	}

	public void setRewardContent(java.lang.String rewardContent){
		this.rewardContent = rewardContent;
	}

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}



	public java.lang.String getData1(){
		return data1;
	}

	public void setData1(java.lang.String data1){
		this.data1 = data1;
	}

	public java.lang.String getUserId(){
		return userId;
	}

	public void setUserId(java.lang.String userId){
		this.userId = userId;
	}

	public java.lang.String getSex(){
		return sex;
	}

	public void setSex(java.lang.String sex){
		this.sex = sex;
	}

	public java.lang.String getPartyId(){
		return partyId;
	}

	public void setPartyId(java.lang.String partyId){
		this.partyId = partyId;
	}

	public java.lang.String getPartyName(){
		return partyName;
	}

	public void setPartyName(java.lang.String partyName){
		this.partyName = partyName;
	}

	public java.lang.String getIdNumber(){
		return idNumber;
	}

	public void setIdNumber(java.lang.String idNumber){
		this.idNumber = idNumber;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "INTEGRAL";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "INTEGRAL";
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