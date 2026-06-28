package avicit.pb.member.dynpartexpenseledger.dto;

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
 * @创建时间： 2024-05-06 10:03
 * @类说明：DYN_PART_EXPENSE_LEDGERDto
 * @修改记录：
 */
@PojoRemark(table="DYN_PART_EXPENSE_LEDGER", object="DynPartExpenseLedgerDTO", name="DYN_PART_EXPENSE_LEDGER")
public class DynPartExpenseLedgerDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 党费已使用额度
	 */
	@FieldRemark(column="PARTY_MONEY_USED", field="partyMoneyUsed", name="党费已使用额度")
	private String partyMoneyUsed;

	/**
	 * 年度
	 */
	@FieldRemark(column="PARTY_MONEY_YEAR", field="partyMoneyYear", name="年度")
	private String partyMoneyYear;

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
	 * 党费未使用额度
	 */
	@FieldRemark(column="PARTY_MONEY_NOT_USED", field="partyMoneyNotUsed", name="党费未使用额度")
	private String partyMoneyNotUsed;

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
	 * 党费发放总额
	 */
	@FieldRemark(column="PARTY_MONEY", field="partyMoney", name="党费发放总额")
	private java.math.BigDecimal partyMoney;

	/**
	 * 状态
	 */
	@FieldRemark(column="STATUS", field="status", name="状态")
	private String status;

	/**
	 * 党组织名称
	 */
	@FieldRemark(column="PARTY_NAME", field="partyName", name="党组织名称")
	private String partyName;

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
	@FieldRemark(column="PARTY_ID", field="partyId", name="党组织ID")
	private String partyId;

	/**
	 * 活动经费额度
	 */
	@FieldRemark(column="PARTY_FINANCE", field="partyFinance", name="活动经费额度")
	private java.math.BigDecimal partyFinance;

	/**
	 * 活动经费已使用额度
	 */
	@FieldRemark(column="PARTY_FINANCE_USED", field="partyFinanceUsed", name="活动经费已使用额度")
	private String partyFinanceUsed;

	/**
	 * 活动经费未使用额度
	 */
	@FieldRemark(column="PARTY_FINANCE_NOT_USED", field="partyFinanceNotUsed", name="活动经费未使用额度")
	private String partyFinanceNotUsed;

	/**
	 * 字段_2
	 */
	@FieldRemark(column="DATA_2", field="data2", name="字段_2")
	private String data2;

	public String getPartyMoneyUsed(){
		return partyMoneyUsed;
	}

	public void setPartyMoneyUsed(String partyMoneyUsed){
		this.partyMoneyUsed = partyMoneyUsed;
	}

	public String getPartyMoneyYear(){
		return partyMoneyYear;
	}

	public void setPartyMoneyYear(String partyMoneyYear){
		this.partyMoneyYear = partyMoneyYear;
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

	public String getPartyMoneyNotUsed(){
		return partyMoneyNotUsed;
	}

	public void setPartyMoneyNotUsed(String partyMoneyNotUsed){
		this.partyMoneyNotUsed = partyMoneyNotUsed;
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

	public java.math.BigDecimal getPartyMoney(){
		return partyMoney;
	}

	public void setPartyMoney(java.math.BigDecimal partyMoney){
		this.partyMoney = partyMoney;
	}

	public String getStatus(){
		return status;
	}

	public void setStatus(String status){
		this.status = status;
	}

	public String getPartyName(){
		return partyName;
	}

	public void setPartyName(String partyName){
		this.partyName = partyName;
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

	public java.math.BigDecimal getPartyFinance(){
		return partyFinance;
	}

	public void setPartyFinance(java.math.BigDecimal partyFinance){
		this.partyFinance = partyFinance;
	}

	public String getPartyFinanceUsed(){
		return partyFinanceUsed;
	}

	public void setPartyFinanceUsed(String partyFinanceUsed){
		this.partyFinanceUsed = partyFinanceUsed;
	}

	public String getPartyFinanceNotUsed(){
		return partyFinanceNotUsed;
	}

	public void setPartyFinanceNotUsed(String partyFinanceNotUsed){
		this.partyFinanceNotUsed = partyFinanceNotUsed;
	}

	public String getData2(){
		return data2;
	}

	public void setData2(String data2){
		this.data2 = data2;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_PART_EXPENSE_LEDGER";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_PART_EXPENSE_LEDGER";
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