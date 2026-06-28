package avicit.pb.activist.activistachievement.dto;

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
 * @创建时间： 2022-01-25 09:20
 * @类说明：积极分子突出工作业绩及获奖情况Dto
 * @修改记录：
 */
@PojoRemark(table="ACTIVIST_ACHIEVEMENT", object="ActivistAchievementDTO", name="积极分子突出工作业绩及获奖情况")
public class ActivistAchievementDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 年份
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="YEAR", field="year", name="年份")
	private java.util.Date year;

	/**
	 * 年份起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date yearBegin;

	/**
	 * 年份止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date yearEnd;

	/**
	 * 获得奖项
	 */
	@FieldRemark(column="AWARDS", field="awards", name="获得奖项")
	private java.lang.String awards;

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
	@FieldRemark(column="ATTRIBUTE_01", field="attribute01", name="年份", dataType="lookup", lookupType="PA_YEAR")
	private java.lang.String attribute01;
	private java.lang.String attribute01Name;

	public java.lang.String getAttribute01Name() {
		return attribute01Name;
	}

	public void setAttribute01Name(java.lang.String attribute01Name) {
		this.attribute01Name = attribute01Name;
	}

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_02", field="attribute02", name="扩展字段")
	private java.lang.String attribute02;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="扩展字段")
	private java.lang.String attribute03;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_04", field="attribute04", name="扩展字段")
	private java.lang.String attribute04;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_05", field="attribute05", name="扩展字段")
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
	@FieldRemark(column="ATTRIBUTE_12", field="attribute12", name="扩展字段")
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
	 * 主表ID
	 */
	@FieldRemark(column="PA_ID", field="paId", name="主表ID")
	private java.lang.String paId;

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}

	public java.util.Date getYear(){
		return year;
	}

	public void setYear(java.util.Date year){
		this.year = year;
	}

	public java.util.Date getYearBegin(){
		return yearBegin;
	}

	public void setYearBegin(java.util.Date yearBegin){
		this.yearBegin = yearBegin;
	}

	public java.util.Date getYearEnd(){
		return yearEnd;
	}

	public void setYearEnd(java.util.Date yearEnd){
		this.yearEnd = yearEnd;
	}

	public java.lang.String getAwards(){
		return awards;
	}

	public void setAwards(java.lang.String awards){
		this.awards = awards;
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

	public java.lang.String getPaId(){
		return paId;
	}

	public void setPaId(java.lang.String paId){
		this.paId = paId;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "积极分子突出工作业绩及获奖情况";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "积极分子突出工作业绩及获奖情况";
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