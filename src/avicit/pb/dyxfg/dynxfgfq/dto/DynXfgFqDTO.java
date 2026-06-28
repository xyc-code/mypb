package avicit.pb.dyxfg.dynxfgfq.dto;

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
 * @创建时间： 2024-03-25 14:42
 * @类说明：DYN_XFG_FQDto
 * @修改记录：
 */
@PojoRemark(table="DYN_XFG_FQ", object="DynXfgFqDTO", name="DYN_XFG_FQ")
public class DynXfgFqDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 时间节点起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="FQ_CRER_DATE_BEGIN", field="fqCrerDateBegin", name="时间节点起")
	private java.util.Date fqCrerDateBegin;

	/**
	 * 时间节点起起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fqCrerDateBeginBegin;

	/**
	 * 时间节点起止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fqCrerDateBeginEnd;

	/**
	 * 时间节点至
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="FQ_CRER_DATE_END", field="fqCrerDateEnd", name="时间节点至")
	private java.util.Date fqCrerDateEnd;

	/**
	 * 时间节点至起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fqCrerDateEndBegin;

	/**
	 * 时间节点至止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fqCrerDateEndEnd;

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
	 * 标题
	 */
	@FieldRemark(column="FQ_TITLE", field="fqTitle", name="标题")
	private java.lang.String fqTitle;

	/**
	 * 发起人联系方式
	 */
	@FieldRemark(column="FQ_TEL", field="fqTel", name="发起人联系方式")
	private java.lang.String fqTel;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR9", field="attr9", name="预留字段")
	private java.lang.String attr9;

	/**
	 * 活动开展时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="FQ_HDKZ_DATE_BEGIN", field="fqHdkzDateBegin", name="活动开展时间起")
	private java.util.Date fqHdkzDateBegin;

	/**
	 * 活动开展时间起起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fqHdkzDateBeginBegin;

	/**
	 * 活动开展时间起止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fqHdkzDateBeginEnd;

	/**
	 * 发起日期
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="FQ_CREA_TIME", field="fqCreaTime", name="发起日期")
	private java.util.Date fqCreaTime;

	/**
	 * 发起日期起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fqCreaTimeBegin;

	/**
	 * 发起日期止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fqCreaTimeEnd;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR4", field="attr4", name="预留字段")
	private java.lang.String attr4;

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
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

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
	 * 先锋岗评选时间段
	 */
	@FieldRemark(column="FQ_PXSJ", field="fqPxsj", name="先锋岗评选时间段")
	private java.lang.String fqPxsj;

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
	 * 表单编号
	 */
	@FieldRemark(column="FQ_FROM_NO", field="fqFromNo", name="表单编号")
	private java.lang.String fqFromNo;

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
	 * 党组织类型
	 */
	@FieldRemark(column="FQ_PARTY_TYPE", field="fqPartyType", name="党组织类型")
	private java.lang.String fqPartyType;

	/**
	 * 发起人
	 */
	@FieldRemark(column="FQ_USER", field="fqUser", name="发起人")
	private java.lang.String fqUser;

	/**
	 * 活动开展时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="FQ_HDKZ_DATE_END", field="fqHdkzDateEnd", name="活动开展时间止")
	private java.util.Date fqHdkzDateEnd;

	/**
	 * 活动开展时间止起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fqHdkzDateEndBegin;

	/**
	 * 活动开展时间止止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date fqHdkzDateEndEnd;

	/**
	 * 党组织名称
	 */
	@FieldRemark(column="FQ_PARTY_NAME", field="fqPartyName", name="党组织名称")
	private java.lang.String fqPartyName;

	/**
	 * 发送党组织
	 */
	@FieldRemark(column="FQ_PARTY_ORG", field="fqPartyOrg", name="发送党组织")
	private java.lang.String fqPartyOrg;

	public java.util.Date getFqCrerDateBegin(){
		return fqCrerDateBegin;
	}

	public void setFqCrerDateBegin(java.util.Date fqCrerDateBegin){
		this.fqCrerDateBegin = fqCrerDateBegin;
	}

	public java.util.Date getFqCrerDateBeginBegin(){
		return fqCrerDateBeginBegin;
	}

	public void setFqCrerDateBeginBegin(java.util.Date fqCrerDateBeginBegin){
		this.fqCrerDateBeginBegin = fqCrerDateBeginBegin;
	}

	public java.util.Date getFqCrerDateBeginEnd(){
		return fqCrerDateBeginEnd;
	}

	public void setFqCrerDateBeginEnd(java.util.Date fqCrerDateBeginEnd){
		this.fqCrerDateBeginEnd = fqCrerDateBeginEnd;
	}

	public java.util.Date getFqCrerDateEnd(){
		return fqCrerDateEnd;
	}

	public void setFqCrerDateEnd(java.util.Date fqCrerDateEnd){
		this.fqCrerDateEnd = fqCrerDateEnd;
	}

	public java.util.Date getFqCrerDateEndBegin(){
		return fqCrerDateEndBegin;
	}

	public void setFqCrerDateEndBegin(java.util.Date fqCrerDateEndBegin){
		this.fqCrerDateEndBegin = fqCrerDateEndBegin;
	}

	public java.util.Date getFqCrerDateEndEnd(){
		return fqCrerDateEndEnd;
	}

	public void setFqCrerDateEndEnd(java.util.Date fqCrerDateEndEnd){
		this.fqCrerDateEndEnd = fqCrerDateEndEnd;
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

	public java.lang.String getFqTitle(){
		return fqTitle;
	}

	public void setFqTitle(java.lang.String fqTitle){
		this.fqTitle = fqTitle;
	}

	public java.lang.String getFqTel(){
		return fqTel;
	}

	public void setFqTel(java.lang.String fqTel){
		this.fqTel = fqTel;
	}

	public java.lang.String getAttr9(){
		return attr9;
	}

	public void setAttr9(java.lang.String attr9){
		this.attr9 = attr9;
	}

	public java.util.Date getFqHdkzDateBegin(){
		return fqHdkzDateBegin;
	}

	public void setFqHdkzDateBegin(java.util.Date fqHdkzDateBegin){
		this.fqHdkzDateBegin = fqHdkzDateBegin;
	}

	public java.util.Date getFqHdkzDateBeginBegin(){
		return fqHdkzDateBeginBegin;
	}

	public void setFqHdkzDateBeginBegin(java.util.Date fqHdkzDateBeginBegin){
		this.fqHdkzDateBeginBegin = fqHdkzDateBeginBegin;
	}

	public java.util.Date getFqHdkzDateBeginEnd(){
		return fqHdkzDateBeginEnd;
	}

	public void setFqHdkzDateBeginEnd(java.util.Date fqHdkzDateBeginEnd){
		this.fqHdkzDateBeginEnd = fqHdkzDateBeginEnd;
	}

	public java.util.Date getFqCreaTime(){
		return fqCreaTime;
	}

	public void setFqCreaTime(java.util.Date fqCreaTime){
		this.fqCreaTime = fqCreaTime;
	}

	public java.util.Date getFqCreaTimeBegin(){
		return fqCreaTimeBegin;
	}

	public void setFqCreaTimeBegin(java.util.Date fqCreaTimeBegin){
		this.fqCreaTimeBegin = fqCreaTimeBegin;
	}

	public java.util.Date getFqCreaTimeEnd(){
		return fqCreaTimeEnd;
	}

	public void setFqCreaTimeEnd(java.util.Date fqCreaTimeEnd){
		this.fqCreaTimeEnd = fqCreaTimeEnd;
	}

	public java.lang.String getAttr4(){
		return attr4;
	}

	public void setAttr4(java.lang.String attr4){
		this.attr4 = attr4;
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

	public java.lang.String getFqPxsj(){
		return fqPxsj;
	}

	public void setFqPxsj(java.lang.String fqPxsj){
		this.fqPxsj = fqPxsj;
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

	public java.lang.String getFqFromNo(){
		return fqFromNo;
	}

	public void setFqFromNo(java.lang.String fqFromNo){
		this.fqFromNo = fqFromNo;
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

	public java.lang.String getFqPartyType(){
		return fqPartyType;
	}

	public void setFqPartyType(java.lang.String fqPartyType){
		this.fqPartyType = fqPartyType;
	}

	public java.lang.String getFqUser(){
		return fqUser;
	}

	public void setFqUser(java.lang.String fqUser){
		this.fqUser = fqUser;
	}

	public java.util.Date getFqHdkzDateEnd(){
		return fqHdkzDateEnd;
	}

	public void setFqHdkzDateEnd(java.util.Date fqHdkzDateEnd){
		this.fqHdkzDateEnd = fqHdkzDateEnd;
	}

	public java.util.Date getFqHdkzDateEndBegin(){
		return fqHdkzDateEndBegin;
	}

	public void setFqHdkzDateEndBegin(java.util.Date fqHdkzDateEndBegin){
		this.fqHdkzDateEndBegin = fqHdkzDateEndBegin;
	}

	public java.util.Date getFqHdkzDateEndEnd(){
		return fqHdkzDateEndEnd;
	}

	public void setFqHdkzDateEndEnd(java.util.Date fqHdkzDateEndEnd){
		this.fqHdkzDateEndEnd = fqHdkzDateEndEnd;
	}

	public java.lang.String getFqPartyName(){
		return fqPartyName;
	}

	public void setFqPartyName(java.lang.String fqPartyName){
		this.fqPartyName = fqPartyName;
	}

	public java.lang.String getFqPartyOrg(){
		return fqPartyOrg;
	}

	public void setFqPartyOrg(java.lang.String fqPartyOrg){
		this.fqPartyOrg = fqPartyOrg;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_XFG_FQ";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_XFG_FQ";
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