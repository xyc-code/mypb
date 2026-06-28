package avicit.pb.dynThreeFour.dynthreefour.dto;

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
 * @创建时间： 2024-03-14 09:04
 * @类说明：DYN_THREE_FOURDto
 * @修改记录：
 */
@PojoRemark(table="DYN_THREE_FOUR", object="DynThreeFourDTO", name="DYN_THREE_FOUR")
public class DynThreeFourDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 参会组织名称
	 */
	@FieldRemark(column="JOIN_MEET_ORG", field="joinMeetOrg", name="参会组织名称")
	private String joinMeetOrg;

	/**
	 * 会议时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="MEET_DATE", field="meetDate", name="会议时间")
	private java.util.Date meetDate;

	/**
	 * 会议时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date meetDateBegin;

	/**
	 * 会议时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date meetDateEnd;

	/**
	 * 会议地点
	 */
	@FieldRemark(column="MEET_PLACE", field="meetPlace", name="会议地点")
	private String meetPlace;

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
	 * 会议名称：
	 */
	@FieldRemark(column="MEET_NAME", field="meetName", name="会议名称：")
	private String meetName;

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
	 * 参会人员
	 */
	@FieldRemark(column="JOIN_PEOPLE", field="joinPeople", name="参会人员")
	private String joinPeople;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private String id;

	/**
	 * 会议类型
	 */
	@FieldRemark(column="MEET_TYPE", field="meetType", name="会议类型")
	private String meetType;

	/**
	 * 会议提纲
	 */
	@FieldRemark(column="MEET_OUTLINE", field="meetOutline", name="会议提纲")
	private String meetOutline;

	/**
	 * 是否记录培训学时
	 */
	@FieldRemark(column="HOURS_RECORD_YN", field="hoursRecordYn", name="是否记录培训学时")
	private String hoursRecordYn;

	/**
	 * 学时
	 */
	@FieldRemark(column="LEARN_HOURS", field="learnHours", name="学时")
	private java.math.BigDecimal learnHours;

	/**
	 * 会议主题
	 */
	@FieldRemark(column="MEET_THEME", field="meetTheme", name="会议主题")
	private String meetTheme;

	/**
	 * 应到会人数
	 */
	@FieldRemark(column="DUE_PEOPLE_NUM", field="duePeopleNum", name="应到会人数")
	private Long duePeopleNum;

	/**
	 * 实到会人数
	 */
	@FieldRemark(column="ACTUAL_PEOPLE_NUM", field="actualPeopleNum", name="实到会人数")
	private Long actualPeopleNum;

	/**
	 * 缺席人数
	 */
	@FieldRemark(column="LEAVE_PEOPLE_NUM", field="leavePeopleNum", name="缺席人数")
	private Long leavePeopleNum;

	/**
	 * 参会率
	 */
	@FieldRemark(column="JOIN_MEET_RATE", field="joinMeetRate", name="参会率")
	private java.math.BigDecimal joinMeetRate;

	/**
	 * 请假人员名单
	 */
	@FieldRemark(column="LEAVE_PEOPLE", field="leavePeople", name="请假人员名单")
	private String leavePeople;

	/**
	 * 主讲人
	 */
	@FieldRemark(column="SPEAKER", field="speaker", name="主讲人")
	private String speaker;

	/**
	 * 授课人
	 */
	@FieldRemark(column="LECTURER", field="lecturer", name="授课人")
	private String lecturer;

	/**
	 * 主持人
	 */
	@FieldRemark(column="HOST_TAKER", field="hostTaker", name="主持人")
	private String hostTaker;

	/**
	 * 记录人
	 */
	@FieldRemark(column="NOTE_TAKER", field="noteTaker", name="记录人")
	private String noteTaker;

	/**
	 * 会议结果
	 */
	@FieldRemark(column="MEET_RESULT", field="meetResult", name="会议结果")
	private String meetResult;

	/**
	 * 备注
	 */
	@FieldRemark(column="REMARKS", field="remarks", name="备注")
	private String remarks;

	/**
	 * 参会组织名称N
	 */
	@FieldRemark(column="JOIN_ORG", field="joinOrg", name="参会组织名称N")
	private String joinOrg;

	/**
	 * 参会人员
	 */
	@FieldRemark(column="JOIN_PEOPLE_NEW", field="joinPeopleNew", name="参会人员")
	private String joinPeopleNew;

	/**
	 * 参会组织ID
	 */
	@FieldRemark(column="JOIN_ORG_ID", field="joinOrgId", name="参会组织ID")
	private String joinOrgId;

	/**
	 * 参会人员ID
	 */
	@FieldRemark(column="JOIN_PEOPLE_ID", field="joinPeopleId", name="参会人员ID")
	private String joinPeopleId;

	/**
	 * 密级
	 */
	@LogField
	@NotBlank(message = "密级不能为空")
	@FieldRemark(column="SECRET_LEVEL", field="secretLevel", name="密级", dataType="lookup", lookupType="PLATFORM_FILE_SECRET_LEVEL")
	private String secretLevel;
	private String secretLevelName;

	/**
	 * 主讲人是否为外来人员
	 */
	@FieldRemark(column="SPEAKER_OUT_YN", field="speakerOutYn", name="主讲人是否为外来人员")
	private String speakerOutYn;

	/**
	 * 授课人是否为外来人员：
	 */
	@FieldRemark(column="LECTURER_OUT_YN", field="lecturerOutYn", name="授课人是否为外来人员：")
	private String lecturerOutYn;

	/**
	 * 主持人是否为外来人员：
	 */
	@FieldRemark(column="HOST_TAKER_OUT_YN", field="hostTakerOutYn", name="主持人是否为外来人员：")
	private String hostTakerOutYn;

	/**
	 * 记录人是否为外来人员：
	 */
	@FieldRemark(column="NOTE_TAKER_OUT_YN", field="noteTakerOutYn", name="记录人是否为外来人员：")
	private String noteTakerOutYn;

	/**
	 * 请假人员名单NEW
	 */
	@FieldRemark(column="LEAVE_PEOPLE_NEW", field="leavePeopleNew", name="请假人员名单NEW")
	private String leavePeopleNew;

	/**
	 * 请假人员名单
	 */
	@FieldRemark(column="LEAVEL_PEOPLE", field="leavelPeople", name="请假人员名单")
	private String leavelPeople;

	/**
	 * 申请人
	 */
	@FieldRemark(column="REQUEST_USER", field="requestUser", name="申请人")
	private String requestUser;

	/**
	 * 申请人所在党支部
	 */
	@FieldRemark(column="PARTY_NAME", field="partyName", name="申请人所在党支部")
	private String partyName;

	/**
	 * 党支部ID
	 */
	@FieldRemark(column="PARTY_ID", field="partyId", name="党支部ID")
	private String partyId;

	/**
	 * 自动编号
	 */
	@FieldRemark(column="AUTO_CODE", field="autoCode", name="自动编号")
	private String autoCode;

	/**
	 * 参会人员党支部
	 */
	@FieldRemark(column="PARTY_NAME_NEW", field="partyNameNew", name="参会人员党支部")
	private String partyNameNew;

	/**
	 * 申请人电话
	 */
	@FieldRemark(column="REQUEST_TEL", field="requestTel", name="申请人电话")
	private String requestTel;

	/**
	 * 党组织类型
	 */
	@FieldRemark(column="PARTY_TYPE", field="partyType", name="党组织类型")
	private String partyType;

	/**
	 * 列席人员
	 */
	@FieldRemark(column="LX_POSEN", field="lxPosen", name="列席人员")
	private String lxPosen;

	/**
	 * 会议关键词
	 */
	@FieldRemark(column="MEET_ZJ", field="meetZj", name="会议关键词")
	private String meetZj;

	public String getJoinMeetOrg(){
		return joinMeetOrg;
	}

	public void setJoinMeetOrg(String joinMeetOrg){
		this.joinMeetOrg = joinMeetOrg;
	}

	public java.util.Date getMeetDate(){
		return meetDate;
	}

	public void setMeetDate(java.util.Date meetDate){
		this.meetDate = meetDate;
	}

	public java.util.Date getMeetDateBegin(){
		return meetDateBegin;
	}

	public void setMeetDateBegin(java.util.Date meetDateBegin){
		this.meetDateBegin = meetDateBegin;
	}

	public java.util.Date getMeetDateEnd(){
		return meetDateEnd;
	}

	public void setMeetDateEnd(java.util.Date meetDateEnd){
		this.meetDateEnd = meetDateEnd;
	}

	public String getMeetPlace(){
		return meetPlace;
	}

	public void setMeetPlace(String meetPlace){
		this.meetPlace = meetPlace;
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

	public String getMeetName(){
		return meetName;
	}

	public void setMeetName(String meetName){
		this.meetName = meetName;
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

	public String getJoinPeople(){
		return joinPeople;
	}

	public void setJoinPeople(String joinPeople){
		this.joinPeople = joinPeople;
	}

	public String getId(){
		return id;
	}

	public void setId(String id){
		this.id = id;
	}

	public String getMeetType(){
		return meetType;
	}

	public void setMeetType(String meetType){
		this.meetType = meetType;
	}

	public String getMeetOutline(){
		return meetOutline;
	}

	public void setMeetOutline(String meetOutline){
		this.meetOutline = meetOutline;
	}

	public String getHoursRecordYn(){
		return hoursRecordYn;
	}

	public void setHoursRecordYn(String hoursRecordYn){
		this.hoursRecordYn = hoursRecordYn;
	}

	public java.math.BigDecimal getLearnHours(){
		return learnHours;
	}

	public void setLearnHours(java.math.BigDecimal learnHours){
		this.learnHours = learnHours;
	}

	public String getMeetTheme(){
		return meetTheme;
	}

	public void setMeetTheme(String meetTheme){
		this.meetTheme = meetTheme;
	}

	public Long getDuePeopleNum(){
		return duePeopleNum;
	}

	public void setDuePeopleNum(Long duePeopleNum){
		this.duePeopleNum = duePeopleNum;
	}

	public Long getActualPeopleNum(){
		return actualPeopleNum;
	}

	public void setActualPeopleNum(Long actualPeopleNum){
		this.actualPeopleNum = actualPeopleNum;
	}

	public Long getLeavePeopleNum(){
		return leavePeopleNum;
	}

	public void setLeavePeopleNum(Long leavePeopleNum){
		this.leavePeopleNum = leavePeopleNum;
	}

	public java.math.BigDecimal getJoinMeetRate(){
		return joinMeetRate;
	}

	public void setJoinMeetRate(java.math.BigDecimal joinMeetRate){
		this.joinMeetRate = joinMeetRate;
	}

	public String getLeavePeople(){
		return leavePeople;
	}

	public void setLeavePeople(String leavePeople){
		this.leavePeople = leavePeople;
	}

	public String getSpeaker(){
		return speaker;
	}

	public void setSpeaker(String speaker){
		this.speaker = speaker;
	}

	public String getLecturer(){
		return lecturer;
	}

	public void setLecturer(String lecturer){
		this.lecturer = lecturer;
	}

	public String getHostTaker(){
		return hostTaker;
	}

	public void setHostTaker(String hostTaker){
		this.hostTaker = hostTaker;
	}

	public String getNoteTaker(){
		return noteTaker;
	}

	public void setNoteTaker(String noteTaker){
		this.noteTaker = noteTaker;
	}

	public String getMeetResult(){
		return meetResult;
	}

	public void setMeetResult(String meetResult){
		this.meetResult = meetResult;
	}

	public String getRemarks(){
		return remarks;
	}

	public void setRemarks(String remarks){
		this.remarks = remarks;
	}

	public String getJoinOrg(){
		return joinOrg;
	}

	public void setJoinOrg(String joinOrg){
		this.joinOrg = joinOrg;
	}

	public String getJoinPeopleNew(){
		return joinPeopleNew;
	}

	public void setJoinPeopleNew(String joinPeopleNew){
		this.joinPeopleNew = joinPeopleNew;
	}

	public String getJoinOrgId(){
		return joinOrgId;
	}

	public void setJoinOrgId(String joinOrgId){
		this.joinOrgId = joinOrgId;
	}

	public String getJoinPeopleId(){
		return joinPeopleId;
	}

	public void setJoinPeopleId(String joinPeopleId){
		this.joinPeopleId = joinPeopleId;
	}

    public String getSecretLevel(){
		return secretLevel;
	}

	public void setSecretLevel(String secretLevel){
		this.secretLevel = secretLevel;
	}

	public String getSecretLevelName(){
		return secretLevelName;
	}

	public void setSecretLevelName(String secretLevelName){
		this.secretLevelName = secretLevelName;
	}

	public String getSpeakerOutYn(){
		return speakerOutYn;
	}

	public void setSpeakerOutYn(String speakerOutYn){
		this.speakerOutYn = speakerOutYn;
	}

	public String getLecturerOutYn(){
		return lecturerOutYn;
	}

	public void setLecturerOutYn(String lecturerOutYn){
		this.lecturerOutYn = lecturerOutYn;
	}

	public String getHostTakerOutYn(){
		return hostTakerOutYn;
	}

	public void setHostTakerOutYn(String hostTakerOutYn){
		this.hostTakerOutYn = hostTakerOutYn;
	}

	public String getNoteTakerOutYn(){
		return noteTakerOutYn;
	}

	public void setNoteTakerOutYn(String noteTakerOutYn){
		this.noteTakerOutYn = noteTakerOutYn;
	}

	public String getLeavePeopleNew(){
		return leavePeopleNew;
	}

	public void setLeavePeopleNew(String leavePeopleNew){
		this.leavePeopleNew = leavePeopleNew;
	}

	public String getLeavelPeople(){
		return leavelPeople;
	}

	public void setLeavelPeople(String leavelPeople){
		this.leavelPeople = leavelPeople;
	}

	public String getRequestUser(){
		return requestUser;
	}

	public void setRequestUser(String requestUser){
		this.requestUser = requestUser;
	}

	public String getPartyName(){
		return partyName;
	}

	public void setPartyName(String partyName){
		this.partyName = partyName;
	}

	public String getPartyId(){
		return partyId;
	}

	public void setPartyId(String partyId){
		this.partyId = partyId;
	}

	public String getAutoCode(){
		return autoCode;
	}

	public void setAutoCode(String autoCode){
		this.autoCode = autoCode;
	}

	public String getPartyNameNew(){
		return partyNameNew;
	}

	public void setPartyNameNew(String partyNameNew){
		this.partyNameNew = partyNameNew;
	}

	public String getRequestTel(){
		return requestTel;
	}

	public void setRequestTel(String requestTel){
		this.requestTel = requestTel;
	}

	public String getPartyType(){
		return partyType;
	}

	public void setPartyType(String partyType){
		this.partyType = partyType;
	}

	public String getLxPosen(){
		return lxPosen;
	}

	public void setLxPosen(String lxPosen){
		this.lxPosen = lxPosen;
	}

	public String getMeetZj(){
		return meetZj;
	}

	public void setMeetZj(String meetZj){
		this.meetZj = meetZj;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_THREE_FOUR";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_THREE_FOUR";
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