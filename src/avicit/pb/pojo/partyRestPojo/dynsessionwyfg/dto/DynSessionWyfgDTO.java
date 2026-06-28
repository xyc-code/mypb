package avicit.pb.pojo.partyRestPojo.dynsessionwyfg.dto;

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
 * @创建时间： 2024-02-23 15:33
 * @类说明：DYN_SESSION_WYFGDto
 * @修改记录：
 */
@PojoRemark(table="DYN_SESSION_WYFG", object="DynSessionWyfgDTO", name="DYN_SESSION_WYFG")
public class DynSessionWyfgDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 职务
	 */
	@FieldRemark(column="USER_POST", field="userPost", name="职务")
	private java.lang.String userPost;

	/**
	 * 届次
	 */
	@FieldRemark(column="SESSION_NAME", field="sessionName", name="届次")
	private java.lang.String sessionName;

	/**
	 * 入党时间
	 */
	@FieldRemark(column="USER_PARTY_TIME", field="userPartyTime", name="入党时间")
	private java.lang.String userPartyTime;

	/**
	 * 性别
	 */
	@FieldRemark(column="USER_SEX", field="userSex", name="性别")
	private java.lang.String userSex;

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
	 * 选举时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="SESSION_TIME", field="sessionTime", name="选举时间")
	private java.util.Date sessionTime;

	/**
	 * 选举时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date sessionTimeBegin;

	/**
	 * 选举时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date sessionTimeEnd;

	/**
	 * 预留字段9
	 */
	@FieldRemark(column="ATTR9", field="attr9", name="预留字段9")
	private java.lang.String attr9;

	/**
	 * 出生日期
	 */
	@FieldRemark(column="USER_ADD_TIME", field="userAddTime", name="出生日期")
	private java.lang.String userAddTime;

	/**
	 * 预留字段4
	 */
	@FieldRemark(column="ATTR4", field="attr4", name="预留字段4")
	private java.lang.String attr4;

	/**
	 * 党组织名称
	 */
	@FieldRemark(column="PARTY_NAME", field="partyName", name="党组织名称")
	private java.lang.String partyName;

	/**
	 * 选举类型
	 */
	@FieldRemark(column="SESSION_TYPE", field="sessionType", name="选举类型")
	private java.lang.String sessionType;

	/**
	 * 预留字段3
	 */
	@FieldRemark(column="ATTR3", field="attr3", name="预留字段3")
	private java.lang.String attr3;

	/**
	 * 预留字段2
	 */
	@FieldRemark(column="ATTR2", field="attr2", name="预留字段2")
	private java.lang.String attr2;

	/**
	 * 预留字段1
	 */
	@FieldRemark(column="ATTR1", field="attr1", name="预留字段1")
	private java.lang.String attr1;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 预留字段8
	 */
	@FieldRemark(column="ATTR8", field="attr8", name="预留字段8")
	private java.lang.String attr8;

	/**
	 * 预留字段7
	 */
	@FieldRemark(column="ATTR7", field="attr7", name="预留字段7")
	private java.lang.String attr7;

	/**
	 * 预留字段20
	 */
	@FieldRemark(column="ATTR20", field="attr20", name="预留字段20")
	private byte[] attr20;

	/**
	 * 预留字段6
	 */
	@FieldRemark(column="ATTR6", field="attr6", name="预留字段6")
	private java.lang.String attr6;

	/**
	 * 预留字段5
	 */
	@FieldRemark(column="ATTR5", field="attr5", name="预留字段5")
	private java.lang.String attr5;

	/**
	 * 得票数
	 */
	@FieldRemark(column="USER_NUMBER_VOTES", field="userNumberVotes", name="得票数")
	private java.lang.String userNumberVotes;

	/**
	 * 预留字段12
	 */
	@FieldRemark(column="ATTR12", field="attr12", name="预留字段12")
	private java.lang.String attr12;

	/**
	 * 预留字段13
	 */
	@FieldRemark(column="ATTR13", field="attr13", name="预留字段13")
	private java.lang.String attr13;

	/**
	 * 预留字段10
	 */
	@FieldRemark(column="ATTR10", field="attr10", name="预留字段10")
	private java.lang.String attr10;

	/**
	 * 预留字段11
	 */
	@FieldRemark(column="ATTR11", field="attr11", name="预留字段11")
	private java.lang.String attr11;

	/**
	 * 预留字段16
	 */
	@FieldRemark(column="ATTR16", field="attr16", name="预留字段16")
	private java.lang.String attr16;

	/**
	 * 预留字段17
	 */
	@FieldRemark(column="ATTR17", field="attr17", name="预留字段17")
	private java.lang.String attr17;

	/**
	 * 预留字段14
	 */
	@FieldRemark(column="ATTR14", field="attr14", name="预留字段14")
	private java.lang.String attr14;

	/**
	 * 预留字段15
	 */
	@FieldRemark(column="ATTR15", field="attr15", name="预留字段15")
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
	 * 预留字段18
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTR18", field="attr18", name="预留字段18")
	private java.util.Date attr18;

	/**
	 * 预留字段18起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr18Begin;

	/**
	 * 预留字段18止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr18End;

	/**
	 * 预留字段19
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTR19", field="attr19", name="预留字段19")
	private java.util.Date attr19;

	/**
	 * 预留字段19起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr19Begin;

	/**
	 * 预留字段19止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attr19End;

	/**
	 * 委员姓名
	 */
	@FieldRemark(column="USER_NAME", field="userName", name="委员姓名")
	private java.lang.String userName;

	/**
	 * 职称
	 */
	@FieldRemark(column="USER_RANKS", field="userRanks", name="职称")
	private java.lang.String userRanks;

	/**
	 * 委员分工
	 */
	@FieldRemark(column="USER_TYPE", field="userType", name="委员分工")
	private java.lang.String userType;

	/**
	 * 届次
	 */
	@FieldRemark(column="SESSION_ID", field="sessionId", name="届次")
	private java.lang.Long sessionId;

	/**
	 * 党组织id
	 */
	@FieldRemark(column="PARTY_ID", field="partyId", name="党组织id")
	private java.lang.String partyId;

	/**
	 * 参加工作时间
	 */
	@FieldRemark(column="USER_WORK_DATE", field="userWorkDate", name="参加工作时间")
	private java.lang.String userWorkDate;

	public java.lang.String getUserPost(){
		return userPost;
	}

	public void setUserPost(java.lang.String userPost){
		this.userPost = userPost;
	}

	public java.lang.String getSessionName(){
		return sessionName;
	}

	public void setSessionName(java.lang.String sessionName){
		this.sessionName = sessionName;
	}

	public java.lang.String getUserPartyTime(){
		return userPartyTime;
	}

	public void setUserPartyTime(java.lang.String userPartyTime){
		this.userPartyTime = userPartyTime;
	}

	public java.lang.String getUserSex(){
		return userSex;
	}

	public void setUserSex(java.lang.String userSex){
		this.userSex = userSex;
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

	public java.util.Date getSessionTime(){
		return sessionTime;
	}

	public void setSessionTime(java.util.Date sessionTime){
		this.sessionTime = sessionTime;
	}

	public java.util.Date getSessionTimeBegin(){
		return sessionTimeBegin;
	}

	public void setSessionTimeBegin(java.util.Date sessionTimeBegin){
		this.sessionTimeBegin = sessionTimeBegin;
	}

	public java.util.Date getSessionTimeEnd(){
		return sessionTimeEnd;
	}

	public void setSessionTimeEnd(java.util.Date sessionTimeEnd){
		this.sessionTimeEnd = sessionTimeEnd;
	}

	public java.lang.String getAttr9(){
		return attr9;
	}

	public void setAttr9(java.lang.String attr9){
		this.attr9 = attr9;
	}

	public java.lang.String getUserAddTime(){
		return userAddTime;
	}

	public void setUserAddTime(java.lang.String userAddTime){
		this.userAddTime = userAddTime;
	}

	public java.lang.String getAttr4(){
		return attr4;
	}

	public void setAttr4(java.lang.String attr4){
		this.attr4 = attr4;
	}

	public java.lang.String getPartyName(){
		return partyName;
	}

	public void setPartyName(java.lang.String partyName){
		this.partyName = partyName;
	}

	public java.lang.String getSessionType(){
		return sessionType;
	}

	public void setSessionType(java.lang.String sessionType){
		this.sessionType = sessionType;
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

	public byte[] getAttr20(){
		return attr20;
	}

	public void setAttr20(byte[] attr20){
		this.attr20 = attr20;
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

	public java.lang.String getUserNumberVotes(){
		return userNumberVotes;
	}

	public void setUserNumberVotes(java.lang.String userNumberVotes){
		this.userNumberVotes = userNumberVotes;
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

	public java.lang.String getUserName(){
		return userName;
	}

	public void setUserName(java.lang.String userName){
		this.userName = userName;
	}

	public java.lang.String getUserRanks(){
		return userRanks;
	}

	public void setUserRanks(java.lang.String userRanks){
		this.userRanks = userRanks;
	}

	public java.lang.String getUserType(){
		return userType;
	}

	public void setUserType(java.lang.String userType){
		this.userType = userType;
	}

	public java.lang.Long getSessionId(){
		return sessionId;
	}

	public void setSessionId(java.lang.Long sessionId){
		this.sessionId = sessionId;
	}

	public java.lang.String getPartyId(){
		return partyId;
	}

	public void setPartyId(java.lang.String partyId){
		this.partyId = partyId;
	}

	public java.lang.String getUserWorkDate(){
		return userWorkDate;
	}

	public void setUserWorkDate(java.lang.String userWorkDate){
		this.userWorkDate = userWorkDate;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_SESSION_WYFG";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_SESSION_WYFG";
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