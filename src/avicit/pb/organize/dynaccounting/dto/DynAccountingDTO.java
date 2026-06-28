package avicit.pb.organize.dynaccounting.dto;

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
 * @创建时间： 2024-05-07 10:22
 * @类说明：DYN_ACCOUNTINGDto
 * @修改记录：
 */
@PojoRemark(table="DYN_ACCOUNTING", object="DynAccountingDTO", name="DYN_ACCOUNTING")
public class DynAccountingDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

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
	 * 事由
	 */
	@FieldRemark(column="SUBJECT_MATTER", field="subjectMatter", name="事由")
	private String subjectMatter;

	/**
	 * 支出
	 */
	@FieldRemark(column="EXPENDITURE", field="expenditure", name="支出")
	private java.math.BigDecimal expenditure;

	/**
	 * 余额
	 */
	@FieldRemark(column="BALANCE", field="balance", name="余额")
	private String balance;

	/**
	 * 党组织名称
	 */
	@FieldRemark(column="RARTY_NAME", field="partyName", name="党组织名称")
	private String partyName;

	/**
	 * 状态
	 */
	@FieldRemark(column="STATUS", field="status", name="状态")
	private String status;

	/**
	 * 收入
	 */
	@FieldRemark(column="INCOME", field="income", name="收入")
	private java.math.BigDecimal income;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private String id;

	/**
	 * 党组织ID
	 */
	@FieldRemark(column="RARTY_ID", field="partyId", name="党组织ID")
	private String partyId;

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

	public String getSubjectMatter(){
		return subjectMatter;
	}

	public void setSubjectMatter(String subjectMatter){
		this.subjectMatter = subjectMatter;
	}

	public java.math.BigDecimal getExpenditure(){
		return expenditure;
	}

	public void setExpenditure(java.math.BigDecimal expenditure){
		this.expenditure = expenditure;
	}

	public String getBalance(){
		return balance;
	}

	public void setBalance(String balance){
		this.balance = balance;
	}

	public String getRartyName(){
		return partyName;
	}

	public void setPartyName(String partyName){
		this.partyName = partyName;
	}

	public String getStatus(){
		return status;
	}

	public void setStatus(String status){
		this.status = status;
	}

	public java.math.BigDecimal getIncome(){
		return income;
	}

	public void setIncome(java.math.BigDecimal income){
		this.income = income;
	}

	public String getId(){
		return id;
	}

	public void setId(String id){
		this.id = id;
	}

	public String getPartyId(){
		return partyId;
	}

	public void setPartyId(String partyId){
		this.partyId = partyId;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_ACCOUNTING";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_ACCOUNTING";
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