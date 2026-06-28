package avicit.pb.dyntaskchecklist.dto;

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
 * @邮箱：请填写 @创建时间： 2023-05-18 15:02
 * @类说明：DYN_INSPECTION @修改记录：
 */
@PojoRemark(table = "dyn_inspection", object = "DynInspectionDTO", name = "DYN_INSPECTION")
public class DynInspectionDTO extends BeanDTO {
	private static final long serialVersionUID = 1L;

	@Id
	@LogField

	@FieldRemark(column = "id", field = "id", name = "ID")
	/*
	 * ID
	 */
	private java.lang.String id;

	@FieldRemark(column = "inspection_opinion", field = "inspectionOpinion", name = "被巡察单位主管领导审核意见")
	/*
	 * 被巡察单位主管领导审核意见
	 */
	private java.lang.String inspectionOpinion;

	@FieldRemark(column = "attribute_11", field = "attribute11", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute11;

	@FieldRemark(column = "attribute_10", field = "attribute10", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute10;

	@FieldRemark(column = "inspection_material", field = "inspectionMaterial", name = "整改措施落实的佐证材料")
	/*
	 * 整改措施落实的佐证材料
	 */
	private java.lang.String inspectionMaterial;
	/*
	 * LAST_UPDATE_DATE开始时间
	 */
	private java.util.Date lastUpdateDateBegin;
	/*
	 * LAST_UPDATE_DATE截止时间
	 */
	private java.util.Date lastUpdateDateEnd;

	@FieldRemark(column = "inspection_one_and", field = "inspectionOneAnd", name = "举一反三检查情况")
	/*
	 * 举一反三检查情况
	 */
	private java.lang.String inspectionOneAnd;

	@FieldRemark(column = "inspection_opinion_s", field = "inspectionOpinionS", name = "被巡察单位巡察整改领导小组审核意见")
	/*
	 * 被巡察单位巡察整改领导小组审核意见
	 */
	private java.lang.String inspectionOpinionS;

	@FieldRemark(column = "inspection_opinion_end", field = "inspectionOpinionEnd", name = "公司主管业务部门审查意见")
	/*
	 * 公司主管业务部门审查意见
	 */
	private java.lang.String inspectionOpinionEnd;

	@FieldRemark(column = "inspection_on", field = "inspectionOn", name = "巡察问题序号")
	/*
	 * 巡察问题序号
	 */
	private java.lang.String inspectionOn;
	@LogField

	@FieldRemark(column = "created_dept", field = "createdDept", name = "CREATED_DEPT")
	/*
	 * CREATED_DEPT
	 */
	private java.lang.String createdDept;

	@FieldRemark(column = "inspection_from_posen_tel", field = "inspectionFromPosenTel", name = "申请人电话")
	/*
	 * 申请人电话
	 */
	private java.lang.String inspectionFromPosenTel;

	@FieldRemark(column = "attribute_04", field = "attribute04", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute04;

	@FieldRemark(column = "inspection_opinion_end_date", field = "inspectionOpinionEndDate", name = "公司主管业务部门审查日期")
	/*
	 * 公司主管业务部门审查日期
	 */
	private java.util.Date inspectionOpinionEndDate;
	/*
	 * 公司主管业务部门审查日期开始时间
	 */
	private java.util.Date inspectionOpinionEndDateBegin;
	/*
	 * 公司主管业务部门审查日期截止时间
	 */
	private java.util.Date inspectionOpinionEndDateEnd;

	@FieldRemark(column = "attribute_03", field = "attribute03", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute03;

	@FieldRemark(column = "attribute_02", field = "attribute02", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute02;

	@FieldRemark(column = "inspection_posen", field = "inspectionPosen", name = "责任人")
	/*
	 * 责任人
	 */
	private java.lang.String inspectionPosen;

	@FieldRemark(column = "attribute_01", field = "attribute01", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute01;

	@FieldRemark(column = "inspection_opinion_date", field = "inspectionOpinionDate", name = "被巡察单位主管领导审核日期")
	/*
	 * 被巡察单位主管领导审核日期
	 */
	private java.util.Date inspectionOpinionDate;
	/*
	 * 被巡察单位主管领导审核日期开始时间
	 */
	private java.util.Date inspectionOpinionDateBegin;
	/*
	 * 被巡察单位主管领导审核日期截止时间
	 */
	private java.util.Date inspectionOpinionDateEnd;

	@FieldRemark(column = "inspection_end_issue_qk", field = "inspectionEndIssueQk", name = "整改措施完成情况")
	/*
	 * 整改措施完成情况
	 */
	private java.lang.String inspectionEndIssueQk;
	/*
	 * CREATION_DATE开始时间
	 */
	private java.util.Date creationDateBegin;
	/*
	 * CREATION_DATE截止时间
	 */
	private java.util.Date creationDateEnd;

	@FieldRemark(column = "inspection_from_posen_dept", field = "inspectionFromPosenDept", name = "申请人单位")
	/*
	 * 申请人单位
	 */
	private java.lang.String inspectionFromPosenDept;

	@FieldRemark(column = "attribute_09", field = "attribute09", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute09;

	@FieldRemark(column = "attribute_08", field = "attribute08", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute08;

	@FieldRemark(column = "attribute_07", field = "attribute07", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute07;

	@FieldRemark(column = "inspection_from_date", field = "inspectionFromDate", name = "申请日期")
	/*
	 * 申请日期
	 */
	private java.util.Date inspectionFromDate;
	/*
	 * 申请日期开始时间
	 */
	private java.util.Date inspectionFromDateBegin;
	/*
	 * 申请日期截止时间
	 */
	private java.util.Date inspectionFromDateEnd;

	@FieldRemark(column = "attribute_06", field = "attribute06", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute06;

	@FieldRemark(column = "inspection_measure_issue", field = "inspectionMeasureIssue", name = "针对根本原因制定的归零措施")
	/*
	 * 针对根本原因制定的归零措施
	 */
	private java.lang.String inspectionMeasureIssue;

	@FieldRemark(column = "attribute_05", field = "attribute05", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute05;

	@FieldRemark(column = "inspection_opinion_date_s", field = "inspectionOpinionDateS", name = "被巡察单位巡察整改领导小组审核日期")
	/*
	 * 被巡察单位巡察整改领导小组审核日期
	 */
	private java.util.Date inspectionOpinionDateS;
	/*
	 * 被巡察单位巡察整改领导小组审核日期开始时间
	 */
	private java.util.Date inspectionOpinionDateSBegin;
	/*
	 * 被巡察单位巡察整改领导小组审核日期截止时间
	 */
	private java.util.Date inspectionOpinionDateSEnd;

	@FieldRemark(column = "inspection_from_on", field = "inspectionFromOn", name = "表单编号")
	/*
	 * 表单编号
	 */
	private java.lang.String inspectionFromOn;

	@FieldRemark(column = "inspection_from_posen", field = "inspectionFromPosen", name = "申请人")
	/*
	 * 申请人
	 */
	private java.lang.String inspectionFromPosen;

	@FieldRemark(column = "inspection_end_issue", field = "inspectionEndIssue", name = "产生问题的根本原因")
	/*
	 * 产生问题的根本原因
	 */
	private java.lang.String inspectionEndIssue;
	@LogField

	@FieldRemark(column = "org_identity", field = "orgIdentity", name = "ORG_IDENTITY")
	/*
	 * ORG_IDENTITY
	 */
	private java.lang.String orgIdentity;

	@FieldRemark(column = "inspection_issue", field = "inspectionIssue", name = "巡察反馈的问题")
	/*
	 * 巡察反馈的问题
	 */
	private java.lang.String inspectionIssue;

	public java.lang.String getId() {
		return id;
	}

	public void setId(java.lang.String id) {
		this.id = id;
	}

	public java.lang.String getInspectionOpinion() {
		return inspectionOpinion;
	}

	public void setInspectionOpinion(java.lang.String inspectionOpinion) {
		this.inspectionOpinion = inspectionOpinion;
	}

	public java.lang.String getAttribute11() {
		return attribute11;
	}

	public void setAttribute11(java.lang.String attribute11) {
		this.attribute11 = attribute11;
	}

	public java.lang.String getAttribute10() {
		return attribute10;
	}

	public void setAttribute10(java.lang.String attribute10) {
		this.attribute10 = attribute10;
	}

	public java.lang.String getInspectionMaterial() {
		return inspectionMaterial;
	}

	public void setInspectionMaterial(java.lang.String inspectionMaterial) {
		this.inspectionMaterial = inspectionMaterial;
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

	public java.lang.String getInspectionOneAnd() {
		return inspectionOneAnd;
	}

	public void setInspectionOneAnd(java.lang.String inspectionOneAnd) {
		this.inspectionOneAnd = inspectionOneAnd;
	}

	public java.lang.String getInspectionOpinionS() {
		return inspectionOpinionS;
	}

	public void setInspectionOpinionS(java.lang.String inspectionOpinionS) {
		this.inspectionOpinionS = inspectionOpinionS;
	}

	public java.lang.String getInspectionOpinionEnd() {
		return inspectionOpinionEnd;
	}

	public void setInspectionOpinionEnd(java.lang.String inspectionOpinionEnd) {
		this.inspectionOpinionEnd = inspectionOpinionEnd;
	}

	public java.lang.String getInspectionOn() {
		return inspectionOn;
	}

	public void setInspectionOn(java.lang.String inspectionOn) {
		this.inspectionOn = inspectionOn;
	}

	public java.lang.String getCreatedDept() {
		return createdDept;
	}

	public void setCreatedDept(java.lang.String createdDept) {
		this.createdDept = createdDept;
	}

	public java.lang.String getInspectionFromPosenTel() {
		return inspectionFromPosenTel;
	}

	public void setInspectionFromPosenTel(java.lang.String inspectionFromPosenTel) {
		this.inspectionFromPosenTel = inspectionFromPosenTel;
	}

	public java.lang.String getAttribute04() {
		return attribute04;
	}

	public void setAttribute04(java.lang.String attribute04) {
		this.attribute04 = attribute04;
	}

	public java.util.Date getInspectionOpinionEndDate() {
		return inspectionOpinionEndDate;
	}

	public void setInspectionOpinionEndDate(java.util.Date inspectionOpinionEndDate) {
		this.inspectionOpinionEndDate = inspectionOpinionEndDate;
	}

	public java.util.Date getInspectionOpinionEndDateBegin() {
		return inspectionOpinionEndDateBegin;
	}

	public void setInspectionOpinionEndDateBegin(java.util.Date inspectionOpinionEndDateBegin) {
		this.inspectionOpinionEndDateBegin = inspectionOpinionEndDateBegin;
	}

	public java.util.Date getInspectionOpinionEndDateEnd() {
		return inspectionOpinionEndDateEnd;
	}

	public void setInspectionOpinionEndDateEnd(java.util.Date inspectionOpinionEndDateEnd) {
		this.inspectionOpinionEndDateEnd = inspectionOpinionEndDateEnd;
	}

	public java.lang.String getAttribute03() {
		return attribute03;
	}

	public void setAttribute03(java.lang.String attribute03) {
		this.attribute03 = attribute03;
	}

	public java.lang.String getAttribute02() {
		return attribute02;
	}

	public void setAttribute02(java.lang.String attribute02) {
		this.attribute02 = attribute02;
	}

	public java.lang.String getInspectionPosen() {
		return inspectionPosen;
	}

	public void setInspectionPosen(java.lang.String inspectionPosen) {
		this.inspectionPosen = inspectionPosen;
	}

	public java.lang.String getAttribute01() {
		return attribute01;
	}

	public void setAttribute01(java.lang.String attribute01) {
		this.attribute01 = attribute01;
	}

	public java.util.Date getInspectionOpinionDate() {
		return inspectionOpinionDate;
	}

	public void setInspectionOpinionDate(java.util.Date inspectionOpinionDate) {
		this.inspectionOpinionDate = inspectionOpinionDate;
	}

	public java.util.Date getInspectionOpinionDateBegin() {
		return inspectionOpinionDateBegin;
	}

	public void setInspectionOpinionDateBegin(java.util.Date inspectionOpinionDateBegin) {
		this.inspectionOpinionDateBegin = inspectionOpinionDateBegin;
	}

	public java.util.Date getInspectionOpinionDateEnd() {
		return inspectionOpinionDateEnd;
	}

	public void setInspectionOpinionDateEnd(java.util.Date inspectionOpinionDateEnd) {
		this.inspectionOpinionDateEnd = inspectionOpinionDateEnd;
	}

	public java.lang.String getInspectionEndIssueQk() {
		return inspectionEndIssueQk;
	}

	public void setInspectionEndIssueQk(java.lang.String inspectionEndIssueQk) {
		this.inspectionEndIssueQk = inspectionEndIssueQk;
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

	public java.lang.String getInspectionFromPosenDept() {
		return inspectionFromPosenDept;
	}

	public void setInspectionFromPosenDept(java.lang.String inspectionFromPosenDept) {
		this.inspectionFromPosenDept = inspectionFromPosenDept;
	}

	public java.lang.String getAttribute09() {
		return attribute09;
	}

	public void setAttribute09(java.lang.String attribute09) {
		this.attribute09 = attribute09;
	}

	public java.lang.String getAttribute08() {
		return attribute08;
	}

	public void setAttribute08(java.lang.String attribute08) {
		this.attribute08 = attribute08;
	}

	public java.lang.String getAttribute07() {
		return attribute07;
	}

	public void setAttribute07(java.lang.String attribute07) {
		this.attribute07 = attribute07;
	}

	public java.util.Date getInspectionFromDate() {
		return inspectionFromDate;
	}

	public void setInspectionFromDate(java.util.Date inspectionFromDate) {
		this.inspectionFromDate = inspectionFromDate;
	}

	public java.util.Date getInspectionFromDateBegin() {
		return inspectionFromDateBegin;
	}

	public void setInspectionFromDateBegin(java.util.Date inspectionFromDateBegin) {
		this.inspectionFromDateBegin = inspectionFromDateBegin;
	}

	public java.util.Date getInspectionFromDateEnd() {
		return inspectionFromDateEnd;
	}

	public void setInspectionFromDateEnd(java.util.Date inspectionFromDateEnd) {
		this.inspectionFromDateEnd = inspectionFromDateEnd;
	}

	public java.lang.String getAttribute06() {
		return attribute06;
	}

	public void setAttribute06(java.lang.String attribute06) {
		this.attribute06 = attribute06;
	}

	public java.lang.String getInspectionMeasureIssue() {
		return inspectionMeasureIssue;
	}

	public void setInspectionMeasureIssue(java.lang.String inspectionMeasureIssue) {
		this.inspectionMeasureIssue = inspectionMeasureIssue;
	}

	public java.lang.String getAttribute05() {
		return attribute05;
	}

	public void setAttribute05(java.lang.String attribute05) {
		this.attribute05 = attribute05;
	}

	public java.util.Date getInspectionOpinionDateS() {
		return inspectionOpinionDateS;
	}

	public void setInspectionOpinionDateS(java.util.Date inspectionOpinionDateS) {
		this.inspectionOpinionDateS = inspectionOpinionDateS;
	}

	public java.util.Date getInspectionOpinionDateSBegin() {
		return inspectionOpinionDateSBegin;
	}

	public void setInspectionOpinionDateSBegin(java.util.Date inspectionOpinionDateSBegin) {
		this.inspectionOpinionDateSBegin = inspectionOpinionDateSBegin;
	}

	public java.util.Date getInspectionOpinionDateSEnd() {
		return inspectionOpinionDateSEnd;
	}

	public void setInspectionOpinionDateSEnd(java.util.Date inspectionOpinionDateSEnd) {
		this.inspectionOpinionDateSEnd = inspectionOpinionDateSEnd;
	}

	public java.lang.String getInspectionFromOn() {
		return inspectionFromOn;
	}

	public void setInspectionFromOn(java.lang.String inspectionFromOn) {
		this.inspectionFromOn = inspectionFromOn;
	}

	public java.lang.String getInspectionFromPosen() {
		return inspectionFromPosen;
	}

	public void setInspectionFromPosen(java.lang.String inspectionFromPosen) {
		this.inspectionFromPosen = inspectionFromPosen;
	}

	public java.lang.String getInspectionEndIssue() {
		return inspectionEndIssue;
	}

	public void setInspectionEndIssue(java.lang.String inspectionEndIssue) {
		this.inspectionEndIssue = inspectionEndIssue;
	}

	public java.lang.String getOrgIdentity() {
		return orgIdentity;
	}

	public void setOrgIdentity(java.lang.String orgIdentity) {
		this.orgIdentity = orgIdentity;
	}

	public java.lang.String getInspectionIssue() {
		return inspectionIssue;
	}

	public void setInspectionIssue(java.lang.String inspectionIssue) {
		this.inspectionIssue = inspectionIssue;
	}

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "DYN_INSPECTION";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "DYN_INSPECTION";
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