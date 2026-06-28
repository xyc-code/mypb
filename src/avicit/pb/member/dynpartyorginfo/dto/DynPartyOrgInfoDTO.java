package avicit.pb.member.dynpartyorginfo.dto;

import avicit.platform6.core.annotation.log.FieldRemark;
import avicit.platform6.core.annotation.log.LogField;
import avicit.platform6.core.annotation.log.PojoRemark;
import avicit.platform6.core.domain.BeanDTO;
import avicit.platform6.core.properties.PlatformConstant.LogType;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Id;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-02-28 14:06
 * @类说明：DYN_PARTY_ORG_INFODto
 * @修改记录：
 */
@PojoRemark(table="DYN_PARTY_ORG_INFO", object="DynPartyOrgInfoDTO", name="DYN_PARTY_ORG_INFO")
public class DynPartyOrgInfoDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 届次
	 */
	@FieldRemark(column="SESSION_NAME", field="sessionName", name="届次")
	private String sessionName;

	/**
	 * 提交换届选举请示 
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="CREA_TIME_DATE_TJ", field="creaTimeDateTj", name="提交换届选举请示 ")
	private java.util.Date creaTimeDateTj;

	/**
	 * 提交换届选举请示 起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date creaTimeDateTjBegin;

	/**
	 * 提交换届选举请示 止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date creaTimeDateTjEnd;

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
	 * 党组织类型
	 */
	@FieldRemark(column="PARTY_TYPE", field="partyType", name="党组织类型")
	private String partyType;

	/**
	 * 预留字段9
	 */
	@FieldRemark(column="ATTR9", field="attr9", name="预留字段9")
	private String attr9;

	/**
	 * 换届提醒
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="CREA_TIME_DATE", field="creaTimeDate", name="换届提醒")
	private java.util.Date creaTimeDate;

	/**
	 * 换届提醒起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date creaTimeDateBegin;

	/**
	 * 换届提醒止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date creaTimeDateEnd;

	/**
	 * 换届提醒（空：未开始、1进行中、2已完成）
	 */
	@FieldRemark(column="ATTR4", field="attr4", name="换届提醒（空：未开始、1进行中、2已完成）")
	private String attr4;

	/**
	 * 党组织名称
	 */
	@FieldRemark(column="PARTY_NAME", field="partyName", name="党组织名称")
	private String partyName;

	/**
	 * 选举类型
	 */
	@FieldRemark(column="SESSION_TYPE", field="sessionType", name="选举类型")
	private String sessionType;

	/**
	 * 党委会审批选举结果时间
	 */
	@FieldRemark(column="ATTR3", field="attr3", name="党委会审批选举结果时间")
	private String attr3;

	/**
	 * 上报选举结果
	 */
	@FieldRemark(column="ATTR2", field="attr2", name="上报选举结果")
	private String attr2;

	/**
	 * 党委会审批预备人选时间
	 */
	@FieldRemark(column="ATTR1", field="attr1", name="党委会审批预备人选时间")
	private String attr1;

	/**
	 * 选举进度
	 */
	@FieldRemark(column="SESSION_JD", field="sessionJd", name="选举进度")
	private String sessionJd;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private String id;

	/**
	 * 预留字段8
	 */
	@FieldRemark(column="ATTR8", field="attr8", name="预留字段8")
	private String attr8;

	/**
	 * 党员大会及结果上报（空：未开始、1进行中、2已完成）
	 */
	@FieldRemark(column="ATTR7", field="attr7", name="党员大会及结果上报（空：未开始、1进行中、2已完成）")
	private String attr7;

	/**
	 * 预留字段20
	 */
	@FieldRemark(column="ATTR20", field="attr20", name="预留字段20")
	private byte[] attr20;

	/**
	 * 预备人选请示（空：未开始、1进行中、2已完成）
	 */
	@FieldRemark(column="ATTR6", field="attr6", name="预备人选请示（空：未开始、1进行中、2已完成）")
	private String attr6;

	/**
	 * 召开党员大会
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ZKDYDH", field="zkdydh", name="召开党员大会")
	private java.util.Date zkdydh;

	/**
	 * 召开党员大会起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date zkdydhBegin;

	/**
	 * 召开党员大会止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date zkdydhEnd;

	/**
	 * 换届请示（空：未开始、1进行中、2已完成）
	 */
	@FieldRemark(column="ATTR5", field="attr5", name="换届请示（空：未开始、1进行中、2已完成）")
	private String attr5;

	/**
	 * 预留字段12
	 */
	@FieldRemark(column="ATTR12", field="attr12", name="预留字段12")
	private String attr12;

	/**
	 * 预留字段13
	 */
	@FieldRemark(column="ATTR13", field="attr13", name="预留字段13")
	private String attr13;

	/**
	 * 预留字段10
	 */
	@FieldRemark(column="ATTR10", field="attr10", name="预留字段10")
	private String attr10;

	/**
	 * 预留字段11
	 */
	@FieldRemark(column="ATTR11", field="attr11", name="预留字段11")
	private String attr11;

	/**
	 * 预留字段16
	 */
	@FieldRemark(column="ATTR16", field="attr16", name="预留字段16")
	private String attr16;

	/**
	 * 选举时间调整时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="CREA_TIME", field="creaTime", name="选举时间调整时间")
	private java.util.Date creaTime;

	/**
	 * 选举时间调整时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date creaTimeBegin;

	/**
	 * 选举时间调整时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date creaTimeEnd;

	/**
	 * 预留字段17
	 */
	@FieldRemark(column="ATTR17", field="attr17", name="预留字段17")
	private String attr17;

	/**
	 * 预留字段14
	 */
	@FieldRemark(column="ATTR14", field="attr14", name="预留字段14")
	private String attr14;

	/**
	 * 预留字段15
	 */
	@FieldRemark(column="ATTR15", field="attr15", name="预留字段15")
	private String attr15;

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
	 * 组织机构调整文件
	 */
	@FieldRemark(column="ORG_FILE", field="orgFile", name="组织机构调整文件")
	private String orgFile;

	/**
	 * 备注
	 */
	@FieldRemark(column="PARTY_ORG_CONTENT", field="partyOrgContent", name="备注")
	private String partyOrgContent;

	/**
	 * 纪委一次会 
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="JWYCH", field="jwych", name="纪委一次会 ")
	private java.util.Date jwych;

	/**
	 * 纪委一次会 起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date jwychBegin;

	/**
	 * 纪委一次会 止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date jwychEnd;

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
	 * 委员会一次会
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="WYYCH", field="wyych", name="委员会一次会")
	private java.util.Date wyych;

	/**
	 * 委员会一次会起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date wyychBegin;

	/**
	 * 委员会一次会止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date wyychEnd;

	/**
	 * 0为历届1为本届
	 */
	@FieldRemark(column="SESSION_ID", field="sessionId", name="0为历届1为本届")
	private Long sessionId;

	/**
	 * 党组织id
	 */
	@FieldRemark(column="PARTY_ID", field="partyId", name="党组织id")
	private String partyId;

	/**
	 * 提交候选人预备人选请示 
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="CREA_TIME_DATE_TJYB", field="creaTimeDateTjyb", name="提交候选人预备人选请示 ")
	private java.util.Date creaTimeDateTjyb;

	/**
	 * 提交候选人预备人选请示 起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date creaTimeDateTjybBegin;

	/**
	 * 提交候选人预备人选请示 止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date creaTimeDateTjybEnd;

	public String getSessionName(){
		return sessionName;
	}

	public void setSessionName(String sessionName){
		this.sessionName = sessionName;
	}

	public java.util.Date getCreaTimeDateTj(){
		return creaTimeDateTj;
	}

	public void setCreaTimeDateTj(java.util.Date creaTimeDateTj){
		this.creaTimeDateTj = creaTimeDateTj;
	}

	public java.util.Date getCreaTimeDateTjBegin(){
		return creaTimeDateTjBegin;
	}

	public void setCreaTimeDateTjBegin(java.util.Date creaTimeDateTjBegin){
		this.creaTimeDateTjBegin = creaTimeDateTjBegin;
	}

	public java.util.Date getCreaTimeDateTjEnd(){
		return creaTimeDateTjEnd;
	}

	public void setCreaTimeDateTjEnd(java.util.Date creaTimeDateTjEnd){
		this.creaTimeDateTjEnd = creaTimeDateTjEnd;
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

	public String getPartyType(){
		return partyType;
	}

	public void setPartyType(String partyType){
		this.partyType = partyType;
	}

	public String getAttr9(){
		return attr9;
	}

	public void setAttr9(String attr9){
		this.attr9 = attr9;
	}

	public java.util.Date getCreaTimeDate(){
		return creaTimeDate;
	}

	public void setCreaTimeDate(java.util.Date creaTimeDate){
		this.creaTimeDate = creaTimeDate;
	}

	public java.util.Date getCreaTimeDateBegin(){
		return creaTimeDateBegin;
	}

	public void setCreaTimeDateBegin(java.util.Date creaTimeDateBegin){
		this.creaTimeDateBegin = creaTimeDateBegin;
	}

	public java.util.Date getCreaTimeDateEnd(){
		return creaTimeDateEnd;
	}

	public void setCreaTimeDateEnd(java.util.Date creaTimeDateEnd){
		this.creaTimeDateEnd = creaTimeDateEnd;
	}

	public String getAttr4(){
		return attr4;
	}

	public void setAttr4(String attr4){
		this.attr4 = attr4;
	}

	public String getPartyName(){
		return partyName;
	}

	public void setPartyName(String partyName){
		this.partyName = partyName;
	}

	public String getSessionType(){
		return sessionType;
	}

	public void setSessionType(String sessionType){
		this.sessionType = sessionType;
	}

	public String getAttr3(){
		return attr3;
	}

	public void setAttr3(String attr3){
		this.attr3 = attr3;
	}

	public String getAttr2(){
		return attr2;
	}

	public void setAttr2(String attr2){
		this.attr2 = attr2;
	}

	public String getAttr1(){
		return attr1;
	}

	public void setAttr1(String attr1){
		this.attr1 = attr1;
	}

	public String getSessionJd(){
		return sessionJd;
	}

	public void setSessionJd(String sessionJd){
		this.sessionJd = sessionJd;
	}

	public String getId(){
		return id;
	}

	public void setId(String id){
		this.id = id;
	}

	public String getAttr8(){
		return attr8;
	}

	public void setAttr8(String attr8){
		this.attr8 = attr8;
	}

	public String getAttr7(){
		return attr7;
	}

	public void setAttr7(String attr7){
		this.attr7 = attr7;
	}

	public byte[] getAttr20(){
		return attr20;
	}

	public void setAttr20(byte[] attr20){
		this.attr20 = attr20;
	}

	public String getAttr6(){
		return attr6;
	}

	public void setAttr6(String attr6){
		this.attr6 = attr6;
	}

	public java.util.Date getZkdydh(){
		return zkdydh;
	}

	public void setZkdydh(java.util.Date zkdydh){
		this.zkdydh = zkdydh;
	}

	public java.util.Date getZkdydhBegin(){
		return zkdydhBegin;
	}

	public void setZkdydhBegin(java.util.Date zkdydhBegin){
		this.zkdydhBegin = zkdydhBegin;
	}

	public java.util.Date getZkdydhEnd(){
		return zkdydhEnd;
	}

	public void setZkdydhEnd(java.util.Date zkdydhEnd){
		this.zkdydhEnd = zkdydhEnd;
	}

	public String getAttr5(){
		return attr5;
	}

	public void setAttr5(String attr5){
		this.attr5 = attr5;
	}

	public String getAttr12(){
		return attr12;
	}

	public void setAttr12(String attr12){
		this.attr12 = attr12;
	}

	public String getAttr13(){
		return attr13;
	}

	public void setAttr13(String attr13){
		this.attr13 = attr13;
	}

	public String getAttr10(){
		return attr10;
	}

	public void setAttr10(String attr10){
		this.attr10 = attr10;
	}

	public String getAttr11(){
		return attr11;
	}

	public void setAttr11(String attr11){
		this.attr11 = attr11;
	}

	public String getAttr16(){
		return attr16;
	}

	public void setAttr16(String attr16){
		this.attr16 = attr16;
	}

	public java.util.Date getCreaTime(){
		return creaTime;
	}

	public void setCreaTime(java.util.Date creaTime){
		this.creaTime = creaTime;
	}

	public java.util.Date getCreaTimeBegin(){
		return creaTimeBegin;
	}

	public void setCreaTimeBegin(java.util.Date creaTimeBegin){
		this.creaTimeBegin = creaTimeBegin;
	}

	public java.util.Date getCreaTimeEnd(){
		return creaTimeEnd;
	}

	public void setCreaTimeEnd(java.util.Date creaTimeEnd){
		this.creaTimeEnd = creaTimeEnd;
	}

	public String getAttr17(){
		return attr17;
	}

	public void setAttr17(String attr17){
		this.attr17 = attr17;
	}

	public String getAttr14(){
		return attr14;
	}

	public void setAttr14(String attr14){
		this.attr14 = attr14;
	}

	public String getAttr15(){
		return attr15;
	}

	public void setAttr15(String attr15){
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

	public String getOrgFile(){
		return orgFile;
	}

	public void setOrgFile(String orgFile){
		this.orgFile = orgFile;
	}

	public String getPartyOrgContent(){
		return partyOrgContent;
	}

	public void setPartyOrgContent(String partyOrgContent){
		this.partyOrgContent = partyOrgContent;
	}

	public java.util.Date getJwych(){
		return jwych;
	}

	public void setJwych(java.util.Date jwych){
		this.jwych = jwych;
	}

	public java.util.Date getJwychBegin(){
		return jwychBegin;
	}

	public void setJwychBegin(java.util.Date jwychBegin){
		this.jwychBegin = jwychBegin;
	}

	public java.util.Date getJwychEnd(){
		return jwychEnd;
	}

	public void setJwychEnd(java.util.Date jwychEnd){
		this.jwychEnd = jwychEnd;
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

	public java.util.Date getWyych(){
		return wyych;
	}

	public void setWyych(java.util.Date wyych){
		this.wyych = wyych;
	}

	public java.util.Date getWyychBegin(){
		return wyychBegin;
	}

	public void setWyychBegin(java.util.Date wyychBegin){
		this.wyychBegin = wyychBegin;
	}

	public java.util.Date getWyychEnd(){
		return wyychEnd;
	}

	public void setWyychEnd(java.util.Date wyychEnd){
		this.wyychEnd = wyychEnd;
	}

	public Long getSessionId(){
		return sessionId;
	}

	public void setSessionId(Long sessionId){
		this.sessionId = sessionId;
	}

	public String getPartyId(){
		return partyId;
	}

	public void setPartyId(String partyId){
		this.partyId = partyId;
	}

	public java.util.Date getCreaTimeDateTjyb(){
		return creaTimeDateTjyb;
	}

	public void setCreaTimeDateTjyb(java.util.Date creaTimeDateTjyb){
		this.creaTimeDateTjyb = creaTimeDateTjyb;
	}

	public java.util.Date getCreaTimeDateTjybBegin(){
		return creaTimeDateTjybBegin;
	}

	public void setCreaTimeDateTjybBegin(java.util.Date creaTimeDateTjybBegin){
		this.creaTimeDateTjybBegin = creaTimeDateTjybBegin;
	}

	public java.util.Date getCreaTimeDateTjybEnd(){
		return creaTimeDateTjybEnd;
	}

	public void setCreaTimeDateTjybEnd(java.util.Date creaTimeDateTjybEnd){
		this.creaTimeDateTjybEnd = creaTimeDateTjybEnd;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_PARTY_ORG_INFO";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_PARTY_ORG_INFO";
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