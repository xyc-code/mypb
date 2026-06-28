package avicit.pb.pojo.partyRestPojo.dynhuanjiedydh.dto;

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
 * @创建时间： 2024-02-26 09:02
 * @类说明：DYN_HUANJIE_DYDHDto
 * @修改记录：
 */
@PojoRemark(table="DYN_HUANJIE_DYDH", object="DynHuanjieDydhDTO", name="DYN_HUANJIE_DYDH")
public class DynHuanjieDydhDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 申请人所在单位
	 */
	@FieldRemark(column="DEPT_NAME", field="deptName", name="申请人所在单位")
	private java.lang.String deptName;

	/**
	 * 表单编号
	 */
	@FieldRemark(column="AUTO_CODE", field="autoCode", name="表单编号")
	private java.lang.String autoCode;

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
	 * 申请人
	 */
	@FieldRemark(column="USER_NAME", field="userName", name="申请人")
	private java.lang.String userName;

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
	 * 申请人所在党支部
	 */
	@FieldRemark(column="PARTY_NAME", field="partyName", name="申请人所在党支部")
	private java.lang.String partyName;

	/**
	 * 申请日期
	 */
	@FieldRemark(column="REQUST_DATE", field="requstDate", name="申请日期")
	private java.lang.String requstDate;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 党支部ID
	 */
	@FieldRemark(column="PARTY_ID", field="partyId", name="党支部ID")
	private java.lang.String partyId;

	/**
	 * 召开党员大会时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ELECTION_TIME", field="electionTime", name="召开党员大会时间")
	private java.util.Date electionTime;

	/**
	 * 召开党员大会时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date electionTimeBegin;

	/**
	 * 召开党员大会时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date electionTimeEnd;

	/**
	 * 应参加有选举权人数
	 */
	@FieldRemark(column="PARTY_YINGGAI", field="partyYinggai", name="应参加有选举权人数")
	private java.lang.Long partyYinggai;

	/**
	 * 实际参加有选举权人数
	 */
	@FieldRemark(column="PARTY_SHIJI", field="partyShiji", name="实际参加有选举权人数")
	private java.lang.Long partyShiji;

	/**
	 * 三会一课名称
	 */
	@FieldRemark(column="THREE_FOUR_NAME", field="threeFourName", name="三会一课名称")
	private java.lang.String threeFourName;

	/**
	 * 三会一课ID
	 */
	@FieldRemark(column="THREE_FOUR_ID", field="threeFourId", name="三会一课ID")
	private java.lang.String threeFourId;

	/**
	 * 三会一课名称1
	 */
	@FieldRemark(column="THREE_FOUR_NAME1", field="threeFourName1", name="三会一课名称1")
	private java.lang.String threeFourName1;

	/**
	 * 三会一课ID1
	 */
	@FieldRemark(column="THREE_FOUR_ID1", field="threeFourId1", name="三会一课ID1")
	private java.lang.String threeFourId1;

	/**
	 * 选举党组织名称
	 */
	@FieldRemark(column="PARTY_NAME_NEW", field="partyNameNew", name="选举党组织名称")
	private java.lang.String partyNameNew;

	/**
	 * 选举类型
	 */
	@FieldRemark(column="PARTY_TYPE", field="partyType", name="选举类型")
	private java.lang.String partyType;

	/**
	 * 申请人电话
	 */
	@FieldRemark(column="USER_TEL", field="userTel", name="申请人电话")
	private java.lang.String userTel;

	/**
	 * 是否显示纪委字段
	 */
	@FieldRemark(column="SFJW", field="sfjw", name="是否显示纪委字段")
	private java.lang.String sfjw;

	/**
	 * 纪律检查委员会一次会议时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="JW_TIME", field="jwTime", name="纪律检查委员会一次会议时间")
	private java.util.Date jwTime;

	/**
	 * 纪律检查委员会一次会议时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date jwTimeBegin;

	/**
	 * 纪律检查委员会一次会议时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date jwTimeEnd;

	/**
	 * 纪律检查委员会一次会议应参加人数:
	 */
	@FieldRemark(column="JW_YINGGA", field="jwYingga", name="纪律检查委员会一次会议应参加人数:")
	private java.lang.Long jwYingga;

	/**
	 * 纪律检查委员会一次会议实际参加人数：
	 */
	@FieldRemark(column="JW_SHIJI", field="jwShiji", name="纪律检查委员会一次会议实际参加人数：")
	private java.lang.Long jwShiji;

	/**
	 * 纪律检查委员会一次会议参与率
	 */
	@FieldRemark(column="JW_CYL", field="jwCyl", name="纪律检查委员会一次会议参与率")
	private java.math.BigDecimal jwCyl;

	/**
	 * 纪律检查委员会一次会议记录:
	 */
	@FieldRemark(column="JW_THREE", field="jwThree", name="纪律检查委员会一次会议记录:")
	private java.lang.String jwThree;

	/**
	 * 纪委三会一课记录id
	 */
	@FieldRemark(column="JW_THREE_ID", field="jwThreeId", name="纪委三会一课记录id")
	private java.lang.String jwThreeId;

	/**
	 * 选举党支部id
	 */
	@FieldRemark(column="PARTY_NEW_ID", field="partyNewId", name="选举党支部id")
	private java.lang.String partyNewId;

	public java.lang.String getDeptName(){
		return deptName;
	}

	public void setDeptName(java.lang.String deptName){
		this.deptName = deptName;
	}

	public java.lang.String getAutoCode(){
		return autoCode;
	}

	public void setAutoCode(java.lang.String autoCode){
		this.autoCode = autoCode;
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

	public java.lang.String getUserName(){
		return userName;
	}

	public void setUserName(java.lang.String userName){
		this.userName = userName;
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

	public java.lang.String getPartyName(){
		return partyName;
	}

	public void setPartyName(java.lang.String partyName){
		this.partyName = partyName;
	}

	public java.lang.String getRequstDate(){
		return requstDate;
	}

	public void setRequstDate(java.lang.String requstDate){
		this.requstDate = requstDate;
	}

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}

	public java.lang.String getPartyId(){
		return partyId;
	}

	public void setPartyId(java.lang.String partyId){
		this.partyId = partyId;
	}

	public java.util.Date getElectionTime(){
		return electionTime;
	}

	public void setElectionTime(java.util.Date electionTime){
		this.electionTime = electionTime;
	}

	public java.util.Date getElectionTimeBegin(){
		return electionTimeBegin;
	}

	public void setElectionTimeBegin(java.util.Date electionTimeBegin){
		this.electionTimeBegin = electionTimeBegin;
	}

	public java.util.Date getElectionTimeEnd(){
		return electionTimeEnd;
	}

	public void setElectionTimeEnd(java.util.Date electionTimeEnd){
		this.electionTimeEnd = electionTimeEnd;
	}

	public java.lang.Long getPartyYinggai(){
		return partyYinggai;
	}

	public void setPartyYinggai(java.lang.Long partyYinggai){
		this.partyYinggai = partyYinggai;
	}

	public java.lang.Long getPartyShiji(){
		return partyShiji;
	}

	public void setPartyShiji(java.lang.Long partyShiji){
		this.partyShiji = partyShiji;
	}

	public java.lang.String getThreeFourName(){
		return threeFourName;
	}

	public void setThreeFourName(java.lang.String threeFourName){
		this.threeFourName = threeFourName;
	}

	public java.lang.String getThreeFourId(){
		return threeFourId;
	}

	public void setThreeFourId(java.lang.String threeFourId){
		this.threeFourId = threeFourId;
	}

	public java.lang.String getThreeFourName1(){
		return threeFourName1;
	}

	public void setThreeFourName1(java.lang.String threeFourName1){
		this.threeFourName1 = threeFourName1;
	}

	public java.lang.String getThreeFourId1(){
		return threeFourId1;
	}

	public void setThreeFourId1(java.lang.String threeFourId1){
		this.threeFourId1 = threeFourId1;
	}

	public java.lang.String getPartyNameNew(){
		return partyNameNew;
	}

	public void setPartyNameNew(java.lang.String partyNameNew){
		this.partyNameNew = partyNameNew;
	}

	public java.lang.String getPartyType(){
		return partyType;
	}

	public void setPartyType(java.lang.String partyType){
		this.partyType = partyType;
	}

	public java.lang.String getUserTel(){
		return userTel;
	}

	public void setUserTel(java.lang.String userTel){
		this.userTel = userTel;
	}

	public java.lang.String getSfjw(){
		return sfjw;
	}

	public void setSfjw(java.lang.String sfjw){
		this.sfjw = sfjw;
	}

	public java.util.Date getJwTime(){
		return jwTime;
	}

	public void setJwTime(java.util.Date jwTime){
		this.jwTime = jwTime;
	}

	public java.util.Date getJwTimeBegin(){
		return jwTimeBegin;
	}

	public void setJwTimeBegin(java.util.Date jwTimeBegin){
		this.jwTimeBegin = jwTimeBegin;
	}

	public java.util.Date getJwTimeEnd(){
		return jwTimeEnd;
	}

	public void setJwTimeEnd(java.util.Date jwTimeEnd){
		this.jwTimeEnd = jwTimeEnd;
	}

	public java.lang.Long getJwYingga(){
		return jwYingga;
	}

	public void setJwYingga(java.lang.Long jwYingga){
		this.jwYingga = jwYingga;
	}

	public java.lang.Long getJwShiji(){
		return jwShiji;
	}

	public void setJwShiji(java.lang.Long jwShiji){
		this.jwShiji = jwShiji;
	}

	public java.math.BigDecimal getJwCyl(){
		return jwCyl;
	}

	public void setJwCyl(java.math.BigDecimal jwCyl){
		this.jwCyl = jwCyl;
	}

	public java.lang.String getJwThree(){
		return jwThree;
	}

	public void setJwThree(java.lang.String jwThree){
		this.jwThree = jwThree;
	}

	public java.lang.String getJwThreeId(){
		return jwThreeId;
	}

	public void setJwThreeId(java.lang.String jwThreeId){
		this.jwThreeId = jwThreeId;
	}

	public java.lang.String getPartyNewId(){
		return partyNewId;
	}

	public void setPartyNewId(java.lang.String partyNewId){
		this.partyNewId = partyNewId;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_HUANJIE_DYDH";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_HUANJIE_DYDH";
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