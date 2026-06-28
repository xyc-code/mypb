package avicit.jg.jgpaymentplan.dto;

import javax.persistence.Id;
import avicit.platform6.core.domain.BeanDTO;
import com.fasterxml.jackson.annotation.JsonFormat;
import avicit.platform6.core.properties.PlatformConstant.LogType;
import avicit.platform6.core.annotation.log.LogField;
import avicit.platform6.core.annotation.log.FieldRemark;
import avicit.platform6.core.annotation.log.PojoRemark;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-12 08:51 
 * @类说明：请款计划表
 * @修改记录：
 */
@PojoRemark(table = "jg_payment_plan", object = "JgPaymentPlanDTO", name = "请款计划表")
public class JgPaymentPlanDTO extends BeanDTO {
	private static final long serialVersionUID = 1L;

	@Id
	@LogField

	@FieldRemark(column = "id", field = "id", name = "ID(主键)")
	/*
	 *ID(主键)
	 */
	private java.lang.String id;

	@FieldRemark(column = "secret_level", field = "secretLevel", name = "密级")
	/*
	 *密级
	 */
	private java.lang.String secretLevel;

	@FieldRemark(column = "project_id", field = "projectId", name = "项目ID")
	/*
	 *项目ID
	 */
	private java.lang.String projectId;

	@FieldRemark(column = "publish_no", field = "publishNo", name = "下达批次")
	/*
	 *下达批次
	 */
	private java.lang.String publishNo;

	@FieldRemark(column = "publish_code", field = "publishCode", name = "下达文号")
	/*
	 *下达文号
	 */
	private java.lang.String publishCode;

	@FieldRemark(column = "publish_date", field = "publishDate", name = "下达日期")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *下达日期
	 */
	private java.util.Date publishDate;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *下达日期开始时间
	 */
	private java.util.Date publishDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *下达日期截止时间
	 */
	private java.util.Date publishDateEnd;

	@FieldRemark(column = "payment_type", field = "paymentType", name = "请款类型")
	/*
	 *请款类型
	 */
	private java.lang.String paymentType;

	@FieldRemark(column = "payment_year", field = "paymentYear", name = "请款年度")
	/*
	 *请款年度
	 */
	private Long paymentYear;

	@FieldRemark(column = "payment_month", field = "paymentMonth", name = "请款月份")
	/*
	 *请款月份
	 */
	private Long paymentMonth;

	@FieldRemark(column = "budget_fund", field = "budgetFund", name = "中央预算内资金")
	/*
	 *中央预算内资金
	 */
	private java.math.BigDecimal budgetFund;

	@FieldRemark(column = "budget_special_fund", field = "budgetSpecialFund", name = "配套资金")
	/*
	 *配套资金
	 */
	private java.math.BigDecimal budgetSpecialFund;

	@FieldRemark(column = "bank_loans", field = "bankLoans", name = "银行贷款")
	/*
	 *银行贷款
	 */
	private java.math.BigDecimal bankLoans;

	@FieldRemark(column = "self_fund", field = "selfFund", name = "自筹资金")
	/*
	 *自筹资金
	 */
	private java.math.BigDecimal selfFund;

	@FieldRemark(column = "status", field = "status", name = "状态(10编制中,20已提交)")
	/*
	 *状态(10编制中,20已提交)
	 */
	private java.lang.String status;

	@FieldRemark(column = "remark", field = "remark", name = "备注")
	/*
	 *备注
	 */
	private java.lang.String remark;

	@FieldRemark(column = "attribute_01", field = "attribute01", name = "备用字段01")
	/*
	 *备用字段01
	 */
	private java.lang.String attribute01;

	@FieldRemark(column = "attribute_02", field = "attribute02", name = "备用字段02")
	/*
	 *备用字段02
	 */
	private java.lang.String attribute02;

	@FieldRemark(column = "attribute_03", field = "attribute03", name = "备用字段03")
	/*
	 *备用字段03
	 */
	private java.lang.String attribute03;

	@FieldRemark(column = "attribute_04", field = "attribute04", name = "备用字段04")
	/*
	 *备用字段04
	 */
	private java.lang.String attribute04;

	@FieldRemark(column = "attribute_05", field = "attribute05", name = "备用字段05")
	/*
	 *备用字段05
	 */
	private java.lang.String attribute05;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *最新更新日期开始时间
	 */
	private java.util.Date lastUpdateDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *最新更新日期截止时间
	 */
	private java.util.Date lastUpdateDateEnd;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *创建日期开始时间
	 */
	private java.util.Date creationDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *创建日期截止时间
	 */
	private java.util.Date creationDateEnd;

	@FieldRemark(column = "created_dept", field = "createdDept", name = "创建人所属部门）")
	/*
	 *创建人所属部门）
	 */
	private java.lang.String createdDept;

	@FieldRemark(column = "org_identity", field = "orgIdentity", name = "多组织ID")
	/*
	 *多组织ID
	 */
	private java.lang.String orgIdentity;

	public java.lang.String getId() {
		return id;
	}

	public void setId(java.lang.String id) {
		this.id = id;
	}

	public java.lang.String getSecretLevel() {
		return secretLevel;
	}

	public void setSecretLevel(java.lang.String secretLevel) {
		this.secretLevel = secretLevel;
	}

	public java.lang.String getProjectId() {
		return projectId;
	}

	public void setProjectId(java.lang.String projectId) {
		this.projectId = projectId;
	}

	public java.lang.String getPublishNo() {
		return publishNo;
	}

	public void setPublishNo(java.lang.String publishNo) {
		this.publishNo = publishNo;
	}

	public java.lang.String getPublishCode() {
		return publishCode;
	}

	public void setPublishCode(java.lang.String publishCode) {
		this.publishCode = publishCode;
	}

	public java.util.Date getPublishDate() {
		return publishDate;
	}

	public void setPublishDate(java.util.Date publishDate) {
		this.publishDate = publishDate;
	}

	public java.util.Date getPublishDateBegin() {
		return publishDateBegin;
	}

	public void setPublishDateBegin(java.util.Date publishDateBegin) {
		this.publishDateBegin = publishDateBegin;
	}

	public java.util.Date getPublishDateEnd() {
		return publishDateEnd;
	}

	public void setPublishDateEnd(java.util.Date publishDateEnd) {
		this.publishDateEnd = publishDateEnd;
	}

	public java.lang.String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(java.lang.String paymentType) {
		this.paymentType = paymentType;
	}

	public Long getPaymentYear() {
		return paymentYear;
	}

	public void setPaymentYear(Long paymentYear) {
		this.paymentYear = paymentYear;
	}

	public Long getPaymentMonth() {
		return paymentMonth;
	}

	public void setPaymentMonth(Long paymentMonth) {
		this.paymentMonth = paymentMonth;
	}

	public java.math.BigDecimal getBudgetFund() {
		return budgetFund;
	}

	public void setBudgetFund(java.math.BigDecimal budgetFund) {
		this.budgetFund = budgetFund;
	}

	public java.math.BigDecimal getBudgetSpecialFund() {
		return budgetSpecialFund;
	}

	public void setBudgetSpecialFund(java.math.BigDecimal budgetSpecialFund) {
		this.budgetSpecialFund = budgetSpecialFund;
	}

	public java.math.BigDecimal getBankLoans() {
		return bankLoans;
	}

	public void setBankLoans(java.math.BigDecimal bankLoans) {
		this.bankLoans = bankLoans;
	}

	public java.math.BigDecimal getSelfFund() {
		return selfFund;
	}

	public void setSelfFund(java.math.BigDecimal selfFund) {
		this.selfFund = selfFund;
	}

	public java.lang.String getStatus() {
		return status;
	}

	public void setStatus(java.lang.String status) {
		this.status = status;
	}

	public java.lang.String getRemark() {
		return remark;
	}

	public void setRemark(java.lang.String remark) {
		this.remark = remark;
	}

	public java.lang.String getAttribute01() {
		return attribute01;
	}

	public void setAttribute01(java.lang.String attribute01) {
		this.attribute01 = attribute01;
	}

	public java.lang.String getAttribute02() {
		return attribute02;
	}

	public void setAttribute02(java.lang.String attribute02) {
		this.attribute02 = attribute02;
	}

	public java.lang.String getAttribute03() {
		return attribute03;
	}

	public void setAttribute03(java.lang.String attribute03) {
		this.attribute03 = attribute03;
	}

	public java.lang.String getAttribute04() {
		return attribute04;
	}

	public void setAttribute04(java.lang.String attribute04) {
		this.attribute04 = attribute04;
	}

	public java.lang.String getAttribute05() {
		return attribute05;
	}

	public void setAttribute05(java.lang.String attribute05) {
		this.attribute05 = attribute05;
	}

	public java.util.Date getLastUpdateDateBegin() {
		return lastUpdateDateBegin;
	}

	public void setLastUpdateDateBegin(java.util.Date lastUpdateDateBegin) {
		this.lastUpdateDateBegin = lastUpdateDateBegin;
	}

	public java.util.Date getLastUpdateDateEnd() {
		return lastUpdateDateEnd;
	}

	public void setLastUpdateDateEnd(java.util.Date lastUpdateDateEnd) {
		this.lastUpdateDateEnd = lastUpdateDateEnd;
	}

	public java.util.Date getCreationDateBegin() {
		return creationDateBegin;
	}

	public void setCreationDateBegin(java.util.Date creationDateBegin) {
		this.creationDateBegin = creationDateBegin;
	}

	public java.util.Date getCreationDateEnd() {
		return creationDateEnd;
	}

	public void setCreationDateEnd(java.util.Date creationDateEnd) {
		this.creationDateEnd = creationDateEnd;
	}

	public java.lang.String getCreatedDept() {
		return createdDept;
	}

	public void setCreatedDept(java.lang.String createdDept) {
		this.createdDept = createdDept;
	}

	public java.lang.String getOrgIdentity() {
		return orgIdentity;
	}

	public void setOrgIdentity(java.lang.String orgIdentity) {
		this.orgIdentity = orgIdentity;
	}

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "请款计划表";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "请款计划表";
		} else {
			return super.logTitle;
		}
	}

	public LogType getLogType() {
		if (super.logType == null || super.logType.equals("")) {
			return LogType.module_operate;
		} else {
			return super.logType;
		}
	}

}