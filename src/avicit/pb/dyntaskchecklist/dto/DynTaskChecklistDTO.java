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
 * @邮箱：请填写 @创建时间： 2023-05-16 16:49
 * @类说明：DYN_TASK_CHECKLIST @修改记录：
 */
@PojoRemark(table = "dyn_task_checklist", object = "DynTaskChecklistDTO", name = "DYN_TASK_CHECKLIST")
public class DynTaskChecklistDTO extends BeanDTO {
	private static final long serialVersionUID = 1L;

	@Id
	@LogField

	@FieldRemark(column = "id", field = "id", name = "ID")
	/*
	 * ID
	 */
	private java.lang.String id;

	@FieldRemark(column = "manifest_one_and", field = "manifestOneAnd", name = "举一反三情况")
	/*
	 * 举一反三情况
	 */
	private java.lang.String manifestOneAnd;

	@FieldRemark(column = "attribute_12", field = "attribute12", name = "预留字段")
	/*
	 * 预留字段
	 */
	private java.lang.String attribute12;
	@FieldRemark(column = "DATE_MANIFEST", field = "dateManifest", name = "下发时间")
	/*
	 * 下发时间
	 */
	private java.lang.String dateManifest;
	public java.lang.String getDateManifest(){
		return dateManifest;
	}
     public void setDateManifest(java.lang.String dateManifest) {
		this.dateManifest = dateManifest;
	}

	@FieldRemark(column = "manifest_posen", field = "manifestPosen", name = "责任人")
	/*
	 * 责任人
	 */
	private java.lang.String manifestPosen;

	@FieldRemark(column = "attribute_11", field = "attribute11", name = "预留字段")
	/*
	 * 预留字段
	 */
	private java.lang.String attribute11;

	@FieldRemark(column = "manifest_issue", field = "manifestIssue", name = "发现的问题")
	/*
	 * 发现的问题
	 */
	private java.lang.String manifestIssue;

	@FieldRemark(column = "attribute_10", field = "attribute10", name = "预留字段")
	/*
	 * 预留字段
	 */
	private java.lang.String attribute10;
	/*
	 * LAST_UPDATE_DATE开始时间
	 */
	private java.util.Date lastUpdateDateBegin;
	/*
	 * LAST_UPDATE_DATE截止时间
	 */
	private java.util.Date lastUpdateDateEnd;

	@FieldRemark(column = "manifest_date_end", field = "manifestDateEnd", name = "预计完成时间(格式为yyyy-mm-dd)")
	/*
	 * 完成时间
	 */
	private java.util.Date manifestDateEnd;
	/*
	 * 完成时间开始时间
	 */
	private java.util.Date manifestDateEndBegin;
	/*
	 * 完成时间截止时间
	 */
	private java.util.Date manifestDateEndEnd;
	/*@LogField

	@FieldRemark(column = "created_dept", field = "createdDept", name = "CREATED_DEPT")
	
	 * CREATED_DEPT
	 
	private java.lang.String createdDept;*/

	@FieldRemark(column = "manifest_leadership", field = "manifestLeadership", name = "责任领导")
	/*
	 * 责任领导
	 */
	private java.lang.String manifestLeadership;

	@FieldRemark(column = "attribute_04", field = "attribute04", name = "预留字段")
	/*
	 * 预留字段
	 */
	private java.lang.String attribute04;

	@FieldRemark(column = "attribute_03", field = "attribute03", name = "代办人")
	/*
	 * 预留字段
	 */
	private java.lang.String attribute03;

	@FieldRemark(column = "attribute_02", field = "attribute02", name = "巡察问题序号")
	/*
	 * 预留字段
	 */
	private java.lang.String attribute02;

	@FieldRemark(column = "attribute_01", field = "attribute01", name = "")
	/*
	 * 预留字段
	 */
	private java.lang.String attribute01;

	@FieldRemark(column = "manifest_measure", field = "manifestMeasure", name = "整改措施具体内容 （含措施分解）")
	/*
	 * 整改措施具体内容 （含措施分解）
	 */
	private java.lang.String manifestMeasure;
	/*
	 * CREATION_DATE开始时间
	 */
	private java.util.Date creationDateBegin;
	/*
	 * CREATION_DATE截止时间
	 */
	private java.util.Date creationDateEnd;

	@FieldRemark(column = "manifest_cause", field = "manifestCause", name = "原因分析")
	/*
	 * 原因分析
	 */
	private java.lang.String manifestCause;

	@FieldRemark(column = "attribute_09", field = "attribute09", name = "预留字段")
	/*
	 * 预留字段
	 */
	private java.lang.String attribute09;

	@FieldRemark(column = "attribute_08", field = "attribute08", name = "预留字段")
	/*
	 * 预留字段
	 */
	private java.lang.String attribute08;

	@FieldRemark(column = "attribute_07", field = "attribute07", name = "预留字段")
	/*
	 * 预留字段
	 */
	private java.lang.String attribute07;

	@FieldRemark(column = "attribute_06", field = "attribute06", name = "预留字段")
	/*
	 * 预留字段
	 */
	private java.lang.String attribute06;

	@FieldRemark(column = "attribute_05", field = "attribute05", name = "预留字段")
	/*
	 * 预留字段
	 */
	private java.lang.String attribute05;

	@FieldRemark(column = "list_mainly", field = "listMainly", name = "主要方面")
	/*
	 * 主要方面
	 */
	private java.lang.String listMainly;

	@FieldRemark(column = "manifest_issue_cont", field = "manifestIssueCont", name = "问题的具体内容")
	/*
	 * 问题的具体内容
	 */
	private java.lang.String manifestIssueCont;
	/*@LogField

	@FieldRemark(column = "org_identity", field = "orgIdentity", name = "ORG_IDENTITY")
	
	 * ORG_IDENTITY
	 
	private java.lang.String orgIdentity;*/

	@FieldRemark(column = "manifest_qian", field = "manifestQian", name = "业务主管 部门会签")
	/*
	 * 业务主管 部门会签
	 */
	private java.lang.String manifestQian;

	public java.lang.String getId() {
		return id;
	}

	public void setId(java.lang.String id) {
		this.id = id;
	}

	public java.lang.String getManifestOneAnd() {
		return manifestOneAnd;
	}

	public void setManifestOneAnd(java.lang.String manifestOneAnd) {
		this.manifestOneAnd = manifestOneAnd;
	}

	public java.lang.String getAttribute12() {
		return attribute12;
	}

	public void setAttribute12(java.lang.String attribute12) {
		this.attribute12 = attribute12;
	}

	public java.lang.String getManifestPosen() {
		return manifestPosen;
	}

	public void setManifestPosen(java.lang.String manifestPosen) {
		this.manifestPosen = manifestPosen;
	}

	public java.lang.String getAttribute11() {
		return attribute11;
	}

	public void setAttribute11(java.lang.String attribute11) {
		this.attribute11 = attribute11;
	}

	public java.lang.String getManifestIssue() {
		return manifestIssue;
	}

	public void setManifestIssue(java.lang.String manifestIssue) {
		this.manifestIssue = manifestIssue;
	}

	public java.lang.String getAttribute10() {
		return attribute10;
	}

	public void setAttribute10(java.lang.String attribute10) {
		this.attribute10 = attribute10;
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

	public java.util.Date getManifestDateEnd() {
		return manifestDateEnd;
	}

	public void setManifestDateEnd(java.util.Date manifestDateEnd) {
		this.manifestDateEnd = manifestDateEnd;
	}

	public java.util.Date getManifestDateEndBegin() {
		return manifestDateEndBegin;
	}

	public void setManifestDateEndBegin(java.util.Date manifestDateEndBegin) {
		this.manifestDateEndBegin = manifestDateEndBegin;
	}

	public java.util.Date getManifestDateEndEnd() {
		return manifestDateEndEnd;
	}

	public void setManifestDateEndEnd(java.util.Date manifestDateEndEnd) {
		this.manifestDateEndEnd = manifestDateEndEnd;
	}

	/*public java.lang.String getCreatedDept() {
		return createdDept;
	}*/

	/*public void setCreatedDept(java.lang.String createdDept) {
		this.createdDept = createdDept;
	}*/

	public java.lang.String getManifestLeadership() {
		return manifestLeadership;
	}

	public void setManifestLeadership(java.lang.String manifestLeadership) {
		this.manifestLeadership = manifestLeadership;
	}

	public java.lang.String getAttribute04() {
		return attribute04;
	}

	public void setAttribute04(java.lang.String attribute04) {
		this.attribute04 = attribute04;
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

	public java.lang.String getAttribute01() {
		return attribute01;
	}

	public void setAttribute01(java.lang.String attribute01) {
		this.attribute01 = attribute01;
	}

	public java.lang.String getManifestMeasure() {
		return manifestMeasure;
	}

	public void setManifestMeasure(java.lang.String manifestMeasure) {
		this.manifestMeasure = manifestMeasure;
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

	public java.lang.String getManifestCause() {
		return manifestCause;
	}

	public void setManifestCause(java.lang.String manifestCause) {
		this.manifestCause = manifestCause;
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

	public java.lang.String getAttribute06() {
		return attribute06;
	}

	public void setAttribute06(java.lang.String attribute06) {
		this.attribute06 = attribute06;
	}

	public java.lang.String getAttribute05() {
		return attribute05;
	}

	public void setAttribute05(java.lang.String attribute05) {
		this.attribute05 = attribute05;
	}

	public java.lang.String getListMainly() {
		return listMainly;
	}

	public void setListMainly(java.lang.String listMainly) {
		this.listMainly = listMainly;
	}

	public java.lang.String getManifestIssueCont() {
		return manifestIssueCont;
	}

	public void setManifestIssueCont(java.lang.String manifestIssueCont) {
		this.manifestIssueCont = manifestIssueCont;
	}

	/*public java.lang.String getOrgIdentity() {
		return orgIdentity;
	}*/

	/*public void setOrgIdentity(java.lang.String orgIdentity) {
		this.orgIdentity = orgIdentity;
	}*/

	public java.lang.String getManifestQian() {
		return manifestQian;
	}

	public void setManifestQian(java.lang.String manifestQian) {
		this.manifestQian = manifestQian;
	}

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "DYN_TASK_CHECKLIST";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "DYN_TASK_CHECKLIST";
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