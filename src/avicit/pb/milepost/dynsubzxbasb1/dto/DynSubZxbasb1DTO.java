package avicit.pb.milepost.dynsubzxbasb1.dto;

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
 * @创建时间： 2023-07-14 13:08
 * @类说明：DYN_SUB_ZXBASB_1Dto
 * @修改记录：
 */
@PojoRemark(table="DYN_SUB_ZXBASB_1", object="DynSubZxbasb1DTO", name="DYN_SUB_ZXBASB_1")
public class DynSubZxbasb1DTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 外键
	 */
	@FieldRemark(column="FK_SUB_COL_ID", field="fkSubColId", name="外键")
	private java.lang.String fkSubColId;

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
	 * 任务内容
	 */
	@FieldRemark(column="TJD_ZHIWU", field="tjdZhiwu", name="任务内容")
	private java.lang.String tjdZhiwu;

	/**
	 * 年龄
	 */
	@FieldRemark(column="TJD_AGE", field="tjdAge", name="年龄")
	private java.lang.Long tjdAge;

	/**
	 * 职务
	 */
	@FieldRemark(column="TJD_DUIZHANGNAME", field="tjdDuizhangname", name="职务")
	private java.lang.String tjdDuizhangname;

	/**
	 * 突击队队员姓名
	 */
	@FieldRemark(column="TJD_DUIYUANNAME", field="tjdDuiyuanname", name="突击队队员姓名")
	private java.lang.String tjdDuiyuanname;

	/**
	 * 所在单位
	 */
	@FieldRemark(column="TJD_DANWEI", field="tjdDanwei", name="所在单位")
	private java.lang.String tjdDanwei;

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
	@FieldRemark(column="TJD_FILED_USERNAME", field="tjdFiledUsername", name="预留字段")
	private java.lang.String tjdFiledUsername;

	public java.lang.String getFkSubColId(){
		return fkSubColId;
	}

	public void setFkSubColId(java.lang.String fkSubColId){
		this.fkSubColId = fkSubColId;
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

	public java.lang.String getTjdZhiwu(){
		return tjdZhiwu;
	}

	public void setTjdZhiwu(java.lang.String tjdZhiwu){
		this.tjdZhiwu = tjdZhiwu;
	}

	public java.lang.Long getTjdAge(){
		return tjdAge;
	}

	public void setTjdAge(java.lang.Long tjdAge){
		this.tjdAge = tjdAge;
	}

	public java.lang.String getTjdDuizhangname(){
		return tjdDuizhangname;
	}

	public void setTjdDuizhangname(java.lang.String tjdDuizhangname){
		this.tjdDuizhangname = tjdDuizhangname;
	}

	public java.lang.String getTjdDuiyuanname(){
		return tjdDuiyuanname;
	}

	public void setTjdDuiyuanname(java.lang.String tjdDuiyuanname){
		this.tjdDuiyuanname = tjdDuiyuanname;
	}

	public java.lang.String getTjdDanwei(){
		return tjdDanwei;
	}

	public void setTjdDanwei(java.lang.String tjdDanwei){
		this.tjdDanwei = tjdDanwei;
	}

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}

	public java.lang.String getTjdFiledUsername(){
		return tjdFiledUsername;
	}

	public void setTjdFiledUsername(java.lang.String tjdFiledUsername){
		this.tjdFiledUsername = tjdFiledUsername;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_SUB_ZXBASB_1";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_SUB_ZXBASB_1";
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