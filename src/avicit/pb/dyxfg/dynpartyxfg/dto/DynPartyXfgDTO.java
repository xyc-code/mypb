package avicit.pb.dyxfg.dynpartyxfg.dto;

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
 * @创建时间： 2024-03-25 14:43
 * @类说明：DYN_PARTY_XFGDto
 * @修改记录：
 */
@PojoRemark(table="DYN_PARTY_XFG", object="DynPartyXfgDTO", name="DYN_PARTY_XFG")
public class DynPartyXfgDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 公示时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="XFG_GSSJ_BEGIN", field="xfgGssjBegin", name="公示时间起")
	private java.util.Date xfgGssjBegin;

	/**
	 * 公示时间起起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date xfgGssjBeginBegin;

	/**
	 * 公示时间起止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date xfgGssjBeginEnd;

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
	@FieldRemark(column="XFG_PARTY_TYPE", field="xfgPartyType", name="党组织类型")
	private java.lang.String xfgPartyType;

	/**
	 * 表单编号
	 */
	@FieldRemark(column="XFG_FROM_NO", field="xfgFromNo", name="表单编号")
	private java.lang.String xfgFromNo;

	/**
	 * 预留字段
	 */
	@FieldRemark(column="ATTR9", field="attr9", name="预留字段")
	private java.lang.String attr9;

	/**
	 * 申请日期
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="XFG_CREA_DATE", field="xfgCreaDate", name="申请日期")
	private java.util.Date xfgCreaDate;

	/**
	 * 申请日期起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date xfgCreaDateBegin;

	/**
	 * 申请日期止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date xfgCreaDateEnd;

	/**
	 * 申请人
	 */
	@FieldRemark(column="XFG_USER", field="xfgUser", name="申请人")
	private java.lang.String xfgUser;

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
	 * 支委会记录
	 */
	@FieldRemark(column="XFG_ZWHJL", field="xfgZwhjl", name="支委会记录")
	private java.lang.String xfgZwhjl;

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
	 * 公示时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="XFG_GSSJ_END", field="xfgGssjEnd", name="公示时间止")
	private java.util.Date xfgGssjEnd;

	/**
	 * 公示时间止起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date xfgGssjEndBegin;

	/**
	 * 公示时间止止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date xfgGssjEndEnd;

	/**
	 * 党组织名称
	 */
	@FieldRemark(column="XFG_PARTY_NAME", field="xfgPartyName", name="党组织名称")
	private java.lang.String xfgPartyName;

	public java.util.Date getXfgGssjBegin(){
		return xfgGssjBegin;
	}

	public void setXfgGssjBegin(java.util.Date xfgGssjBegin){
		this.xfgGssjBegin = xfgGssjBegin;
	}

	public java.util.Date getXfgGssjBeginBegin(){
		return xfgGssjBeginBegin;
	}

	public void setXfgGssjBeginBegin(java.util.Date xfgGssjBeginBegin){
		this.xfgGssjBeginBegin = xfgGssjBeginBegin;
	}

	public java.util.Date getXfgGssjBeginEnd(){
		return xfgGssjBeginEnd;
	}

	public void setXfgGssjBeginEnd(java.util.Date xfgGssjBeginEnd){
		this.xfgGssjBeginEnd = xfgGssjBeginEnd;
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

	public java.lang.String getXfgPartyType(){
		return xfgPartyType;
	}

	public void setXfgPartyType(java.lang.String xfgPartyType){
		this.xfgPartyType = xfgPartyType;
	}

	public java.lang.String getXfgFromNo(){
		return xfgFromNo;
	}

	public void setXfgFromNo(java.lang.String xfgFromNo){
		this.xfgFromNo = xfgFromNo;
	}

	public java.lang.String getAttr9(){
		return attr9;
	}

	public void setAttr9(java.lang.String attr9){
		this.attr9 = attr9;
	}

	public java.util.Date getXfgCreaDate(){
		return xfgCreaDate;
	}

	public void setXfgCreaDate(java.util.Date xfgCreaDate){
		this.xfgCreaDate = xfgCreaDate;
	}

	public java.util.Date getXfgCreaDateBegin(){
		return xfgCreaDateBegin;
	}

	public void setXfgCreaDateBegin(java.util.Date xfgCreaDateBegin){
		this.xfgCreaDateBegin = xfgCreaDateBegin;
	}

	public java.util.Date getXfgCreaDateEnd(){
		return xfgCreaDateEnd;
	}

	public void setXfgCreaDateEnd(java.util.Date xfgCreaDateEnd){
		this.xfgCreaDateEnd = xfgCreaDateEnd;
	}

	public java.lang.String getXfgUser(){
		return xfgUser;
	}

	public void setXfgUser(java.lang.String xfgUser){
		this.xfgUser = xfgUser;
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

	public java.lang.String getXfgZwhjl(){
		return xfgZwhjl;
	}

	public void setXfgZwhjl(java.lang.String xfgZwhjl){
		this.xfgZwhjl = xfgZwhjl;
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

	public java.util.Date getXfgGssjEnd(){
		return xfgGssjEnd;
	}

	public void setXfgGssjEnd(java.util.Date xfgGssjEnd){
		this.xfgGssjEnd = xfgGssjEnd;
	}

	public java.util.Date getXfgGssjEndBegin(){
		return xfgGssjEndBegin;
	}

	public void setXfgGssjEndBegin(java.util.Date xfgGssjEndBegin){
		this.xfgGssjEndBegin = xfgGssjEndBegin;
	}

	public java.util.Date getXfgGssjEndEnd(){
		return xfgGssjEndEnd;
	}

	public void setXfgGssjEndEnd(java.util.Date xfgGssjEndEnd){
		this.xfgGssjEndEnd = xfgGssjEndEnd;
	}

	public java.lang.String getXfgPartyName(){
		return xfgPartyName;
	}

	public void setXfgPartyName(java.lang.String xfgPartyName){
		this.xfgPartyName = xfgPartyName;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_PARTY_XFG";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_PARTY_XFG";
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