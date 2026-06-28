package avicit.cape.pmprojectys.pmprojectyshpj.dto;

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
 * @创建时间： 2026-06-11 10:27 
 * @类说明：项目验收管理-后评价管理
 * @修改记录：
 */
@PojoRemark(table = "pm_project_ys_hpj", object = "PmProjectYsHpjDTO", name = "项目验收管理-后评价管理")
public class PmProjectYsHpjDTO extends BeanDTO {
	private static final long serialVersionUID = 1L;

	@Id
	@LogField

	@FieldRemark(column = "id", field = "id", name = "主键")
	/*
	 *主键
	 */
	private java.lang.String id;

	@FieldRemark(column = "secret_level", field = "secretLevel", name = "密级")
	/*
	 *密级
	 */
	private java.lang.String secretLevel;

	@FieldRemark(column = "project_id", field = "projectId", name = "项目id")
	/*
	 *项目id
	 */
	private java.lang.String projectId;

	@FieldRemark(column = "project_name", field = "projectName", name = "所属项目")
	/*
	 *所属项目
	 */
	private java.lang.String projectName;

	@FieldRemark(column = "task_id", field = "taskId", name = "任务id")
	/*
	 *任务id
	 */
	private java.lang.String taskId;

	@FieldRemark(column = "task_name", field = "taskName", name = "任务名称")
	/*
	 *任务名称
	 */
	private java.lang.String taskName;

	@FieldRemark(column = "sub_project_id", field = "subProjectId", name = "项目编号")
	/*
	 *项目编号
	 */
	private java.lang.String subProjectId;

	@FieldRemark(column = "sub_project_code", field = "subProjectCode", name = "项目编号")
	/*
	 *项目编号
	 */
	private java.lang.String subProjectCode;

	@FieldRemark(column = "sub_project_name", field = "subProjectName", name = "设备名称")
	/*
	 *设备名称
	 */
	private java.lang.String subProjectName;

	@FieldRemark(column = "pf_gg", field = "pfGg", name = "规格")
	/*
	 *规格
	 */
	private java.lang.String pfGg;

	@FieldRemark(column = "pf_xg", field = "pfXg", name = "型号")
	/*
	 *型号
	 */
	private java.lang.String pfXg;

	@FieldRemark(column = "pf_xnzb", field = "pfXnzb", name = "主要性能指标")
	/*
	 *主要性能指标
	 */
	private java.lang.String pfXnzb;

	@FieldRemark(column = "pf_type", field = "pfType", name = "类型")
	/*
	 *类型
	 */
	private java.lang.String pfType;

	@FieldRemark(column = "pf_num", field = "pfNum", name = "数量")
	/*
	 *数量
	 */
	private Long pfNum;

	@FieldRemark(column = "ys_gg", field = "ysGg", name = "规格")
	/*
	 *规格
	 */
	private java.lang.String ysGg;

	@FieldRemark(column = "ys_xnzb", field = "ysXnzb", name = "主要性能指标")
	/*
	 *主要性能指标
	 */
	private java.lang.String ysXnzb;

	@FieldRemark(column = "ys_xg", field = "ysXg", name = "设备型号")
	/*
	 *设备型号
	 */
	private java.lang.String ysXg;

	@FieldRemark(column = "ys_zzcs", field = "ysZzcs", name = "制造厂商")
	/*
	 *制造厂商
	 */
	private java.lang.String ysZzcs;

	@FieldRemark(column = "ys_ccrq_date", field = "ysCcrqDate", name = "出厂日期")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *出厂日期
	 */
	private java.util.Date ysCcrqDate;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *出厂日期开始时间
	 */
	private java.util.Date ysCcrqDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *出厂日期截止时间
	 */
	private java.util.Date ysCcrqDateEnd;

	@FieldRemark(column = "ys_ccbh", field = "ysCcbh", name = "出厂编号")
	/*
	 *出厂编号
	 */
	private java.lang.String ysCcbh;

	@FieldRemark(column = "ys_zys_date", field = "ysZysDate", name = "终验收日期")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *终验收日期
	 */
	private java.util.Date ysZysDate;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *终验收日期开始时间
	 */
	private java.util.Date ysZysDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *终验收日期截止时间
	 */
	private java.util.Date ysZysDateEnd;

	@FieldRemark(column = "ys_dh_date", field = "ysDhDate", name = "到货时间")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *到货时间
	 */
	private java.util.Date ysDhDate;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *到货时间开始时间
	 */
	private java.util.Date ysDhDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *到货时间截止时间
	 */
	private java.util.Date ysDhDateEnd;

	@FieldRemark(column = "ys_user", field = "ysUser", name = "办理人")
	/*
	 *办理人
	 */
	private java.lang.String ysUser;

	@FieldRemark(column = "ys_dept", field = "ysDept", name = "使用单位")
	/*
	 *使用单位
	 */
	private java.lang.String ysDept;

	@FieldRemark(column = "ys_ysjl", field = "ysYsjl", name = "验收结论")
	/*
	 *验收结论
	 */
	private java.lang.String ysYsjl;

	@FieldRemark(column = "ys_idea", field = "ysIdea", name = "验收意见")
	/*
	 *验收意见
	 */
	private java.lang.String ysIdea;

	@FieldRemark(column = "hpj_date", field = "hpjDate", name = "评价日期")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *评价日期
	 */
	private java.util.Date hpjDate;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *评价日期开始时间
	 */
	private java.util.Date hpjDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *评价日期截止时间
	 */
	private java.util.Date hpjDateEnd;

	@FieldRemark(column = "hpj_dept", field = "hpjDept", name = "评价单位")
	/*
	 *评价单位
	 */
	private java.lang.String hpjDept;

	@FieldRemark(column = "hpj_user", field = "hpjUser", name = "评价人")
	/*
	 *评价人
	 */
	private java.lang.String hpjUser;

	@FieldRemark(column = "hpj_yyxg", field = "hpjYyxg", name = "应用效果")
	/*
	 *应用效果
	 */
	private java.lang.String hpjYyxg;

	@FieldRemark(column = "hpj_sxjz", field = "hpjSxjz", name = "实现价值")
	/*
	 *实现价值
	 */
	private java.lang.String hpjSxjz;

	@FieldRemark(column = "hpj_czwt", field = "hpjCzwt", name = "存在问题")
	/*
	 *存在问题
	 */
	private java.lang.String hpjCzwt;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *创建时间开始时间
	 */
	private java.util.Date creationDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *创建时间截止时间
	 */
	private java.util.Date creationDateEnd;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *最后修改时间开始时间
	 */
	private java.util.Date lastUpdateDateBegin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *最后修改时间截止时间
	 */
	private java.util.Date lastUpdateDateEnd;

	@FieldRemark(column = "created_dept", field = "createdDept", name = "创建部门")
	/*
	 *创建部门
	 */
	private java.lang.String createdDept;

	@FieldRemark(column = "org_identity", field = "orgIdentity", name = "多组织ID")
	/*
	 *多组织ID
	 */
	private java.lang.String orgIdentity;

	@FieldRemark(column = "attribute_01", field = "attribute01", name = "扩展预留字段1")
	/*
	 *扩展预留字段1
	 */
	private java.lang.String attribute01;

	@FieldRemark(column = "attribute_02", field = "attribute02", name = "扩展预留字段2")
	/*
	 *扩展预留字段2
	 */
	private java.lang.String attribute02;

	@FieldRemark(column = "attribute_03", field = "attribute03", name = "扩展预留字段3")
	/*
	 *扩展预留字段3
	 */
	private java.lang.String attribute03;

	@FieldRemark(column = "attribute_04", field = "attribute04", name = "扩展预留字段4")
	/*
	 *扩展预留字段4
	 */
	private java.lang.String attribute04;

	@FieldRemark(column = "attribute_05", field = "attribute05", name = "扩展预留字段5")
	/*
	 *扩展预留字段5
	 */
	private java.lang.String attribute05;

	@FieldRemark(column = "attribute_06", field = "attribute06", name = "扩展预留字段6")
	/*
	 *扩展预留字段6
	 */
	private java.lang.String attribute06;

	@FieldRemark(column = "attribute_07", field = "attribute07", name = "扩展预留字段7")
	/*
	 *扩展预留字段7
	 */
	private java.math.BigDecimal attribute07;

	@FieldRemark(column = "attribute_08", field = "attribute08", name = "扩展预留字段8")
	/*
	 *扩展预留字段8
	 */
	private java.math.BigDecimal attribute08;

	@FieldRemark(column = "attribute_09", field = "attribute09", name = "扩展预留字段9")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *扩展预留字段9
	 */
	private java.util.Date attribute09;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *扩展预留字段9开始时间
	 */
	private java.util.Date attribute09Begin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *扩展预留字段9截止时间
	 */
	private java.util.Date attribute09End;

	@FieldRemark(column = "attribute_10", field = "attribute10", name = "扩展预留字段10")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *扩展预留字段10
	 */
	private java.util.Date attribute10;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *扩展预留字段10开始时间
	 */
	private java.util.Date attribute10Begin;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	/*
	 *扩展预留字段10截止时间
	 */
	private java.util.Date attribute10End;

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

	public java.lang.String getProjectName() {
		return projectName;
	}

	public void setProjectName(java.lang.String projectName) {
		this.projectName = projectName;
	}

	public java.lang.String getTaskId() {
		return taskId;
	}

	public void setTaskId(java.lang.String taskId) {
		this.taskId = taskId;
	}

	public java.lang.String getTaskName() {
		return taskName;
	}

	public void setTaskName(java.lang.String taskName) {
		this.taskName = taskName;
	}

	public java.lang.String getSubProjectId() {
		return subProjectId;
	}

	public void setSubProjectId(java.lang.String subProjectId) {
		this.subProjectId = subProjectId;
	}

	public java.lang.String getSubProjectCode() {
		return subProjectCode;
	}

	public void setSubProjectCode(java.lang.String subProjectCode) {
		this.subProjectCode = subProjectCode;
	}

	public java.lang.String getSubProjectName() {
		return subProjectName;
	}

	public void setSubProjectName(java.lang.String subProjectName) {
		this.subProjectName = subProjectName;
	}

	public java.lang.String getPfGg() {
		return pfGg;
	}

	public void setPfGg(java.lang.String pfGg) {
		this.pfGg = pfGg;
	}

	public java.lang.String getPfXg() {
		return pfXg;
	}

	public void setPfXg(java.lang.String pfXg) {
		this.pfXg = pfXg;
	}

	public java.lang.String getPfXnzb() {
		return pfXnzb;
	}

	public void setPfXnzb(java.lang.String pfXnzb) {
		this.pfXnzb = pfXnzb;
	}

	public java.lang.String getPfType() {
		return pfType;
	}

	public void setPfType(java.lang.String pfType) {
		this.pfType = pfType;
	}

	public Long getPfNum() {
		return pfNum;
	}

	public void setPfNum(Long pfNum) {
		this.pfNum = pfNum;
	}

	public java.lang.String getYsGg() {
		return ysGg;
	}

	public void setYsGg(java.lang.String ysGg) {
		this.ysGg = ysGg;
	}

	public java.lang.String getYsXnzb() {
		return ysXnzb;
	}

	public void setYsXnzb(java.lang.String ysXnzb) {
		this.ysXnzb = ysXnzb;
	}

	public java.lang.String getYsXg() {
		return ysXg;
	}

	public void setYsXg(java.lang.String ysXg) {
		this.ysXg = ysXg;
	}

	public java.lang.String getYsZzcs() {
		return ysZzcs;
	}

	public void setYsZzcs(java.lang.String ysZzcs) {
		this.ysZzcs = ysZzcs;
	}

	public java.util.Date getYsCcrqDate() {
		return ysCcrqDate;
	}

	public void setYsCcrqDate(java.util.Date ysCcrqDate) {
		this.ysCcrqDate = ysCcrqDate;
	}

	public java.util.Date getYsCcrqDateBegin() {
		return ysCcrqDateBegin;
	}

	public void setYsCcrqDateBegin(java.util.Date ysCcrqDateBegin) {
		this.ysCcrqDateBegin = ysCcrqDateBegin;
	}

	public java.util.Date getYsCcrqDateEnd() {
		return ysCcrqDateEnd;
	}

	public void setYsCcrqDateEnd(java.util.Date ysCcrqDateEnd) {
		this.ysCcrqDateEnd = ysCcrqDateEnd;
	}

	public java.lang.String getYsCcbh() {
		return ysCcbh;
	}

	public void setYsCcbh(java.lang.String ysCcbh) {
		this.ysCcbh = ysCcbh;
	}

	public java.util.Date getYsZysDate() {
		return ysZysDate;
	}

	public void setYsZysDate(java.util.Date ysZysDate) {
		this.ysZysDate = ysZysDate;
	}

	public java.util.Date getYsZysDateBegin() {
		return ysZysDateBegin;
	}

	public void setYsZysDateBegin(java.util.Date ysZysDateBegin) {
		this.ysZysDateBegin = ysZysDateBegin;
	}

	public java.util.Date getYsZysDateEnd() {
		return ysZysDateEnd;
	}

	public void setYsZysDateEnd(java.util.Date ysZysDateEnd) {
		this.ysZysDateEnd = ysZysDateEnd;
	}

	public java.util.Date getYsDhDate() {
		return ysDhDate;
	}

	public void setYsDhDate(java.util.Date ysDhDate) {
		this.ysDhDate = ysDhDate;
	}

	public java.util.Date getYsDhDateBegin() {
		return ysDhDateBegin;
	}

	public void setYsDhDateBegin(java.util.Date ysDhDateBegin) {
		this.ysDhDateBegin = ysDhDateBegin;
	}

	public java.util.Date getYsDhDateEnd() {
		return ysDhDateEnd;
	}

	public void setYsDhDateEnd(java.util.Date ysDhDateEnd) {
		this.ysDhDateEnd = ysDhDateEnd;
	}

	public java.lang.String getYsUser() {
		return ysUser;
	}

	public void setYsUser(java.lang.String ysUser) {
		this.ysUser = ysUser;
	}

	public java.lang.String getYsDept() {
		return ysDept;
	}

	public void setYsDept(java.lang.String ysDept) {
		this.ysDept = ysDept;
	}

	public java.lang.String getYsYsjl() {
		return ysYsjl;
	}

	public void setYsYsjl(java.lang.String ysYsjl) {
		this.ysYsjl = ysYsjl;
	}

	public java.lang.String getYsIdea() {
		return ysIdea;
	}

	public void setYsIdea(java.lang.String ysIdea) {
		this.ysIdea = ysIdea;
	}

	public java.util.Date getHpjDate() {
		return hpjDate;
	}

	public void setHpjDate(java.util.Date hpjDate) {
		this.hpjDate = hpjDate;
	}

	public java.util.Date getHpjDateBegin() {
		return hpjDateBegin;
	}

	public void setHpjDateBegin(java.util.Date hpjDateBegin) {
		this.hpjDateBegin = hpjDateBegin;
	}

	public java.util.Date getHpjDateEnd() {
		return hpjDateEnd;
	}

	public void setHpjDateEnd(java.util.Date hpjDateEnd) {
		this.hpjDateEnd = hpjDateEnd;
	}

	public java.lang.String getHpjDept() {
		return hpjDept;
	}

	public void setHpjDept(java.lang.String hpjDept) {
		this.hpjDept = hpjDept;
	}

	public java.lang.String getHpjUser() {
		return hpjUser;
	}

	public void setHpjUser(java.lang.String hpjUser) {
		this.hpjUser = hpjUser;
	}

	public java.lang.String getHpjYyxg() {
		return hpjYyxg;
	}

	public void setHpjYyxg(java.lang.String hpjYyxg) {
		this.hpjYyxg = hpjYyxg;
	}

	public java.lang.String getHpjSxjz() {
		return hpjSxjz;
	}

	public void setHpjSxjz(java.lang.String hpjSxjz) {
		this.hpjSxjz = hpjSxjz;
	}

	public java.lang.String getHpjCzwt() {
		return hpjCzwt;
	}

	public void setHpjCzwt(java.lang.String hpjCzwt) {
		this.hpjCzwt = hpjCzwt;
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

	public java.lang.String getAttribute06() {
		return attribute06;
	}

	public void setAttribute06(java.lang.String attribute06) {
		this.attribute06 = attribute06;
	}

	public java.math.BigDecimal getAttribute07() {
		return attribute07;
	}

	public void setAttribute07(java.math.BigDecimal attribute07) {
		this.attribute07 = attribute07;
	}

	public java.math.BigDecimal getAttribute08() {
		return attribute08;
	}

	public void setAttribute08(java.math.BigDecimal attribute08) {
		this.attribute08 = attribute08;
	}

	public java.util.Date getAttribute09() {
		return attribute09;
	}

	public void setAttribute09(java.util.Date attribute09) {
		this.attribute09 = attribute09;
	}

	public java.util.Date getAttribute09Begin() {
		return attribute09Begin;
	}

	public void setAttribute09Begin(java.util.Date attribute09Begin) {
		this.attribute09Begin = attribute09Begin;
	}

	public java.util.Date getAttribute09End() {
		return attribute09End;
	}

	public void setAttribute09End(java.util.Date attribute09End) {
		this.attribute09End = attribute09End;
	}

	public java.util.Date getAttribute10() {
		return attribute10;
	}

	public void setAttribute10(java.util.Date attribute10) {
		this.attribute10 = attribute10;
	}

	public java.util.Date getAttribute10Begin() {
		return attribute10Begin;
	}

	public void setAttribute10Begin(java.util.Date attribute10Begin) {
		this.attribute10Begin = attribute10Begin;
	}

	public java.util.Date getAttribute10End() {
		return attribute10End;
	}

	public void setAttribute10End(java.util.Date attribute10End) {
		this.attribute10End = attribute10End;
	}

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "项目验收管理-后评价管理";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "项目验收管理-后评价管理";
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