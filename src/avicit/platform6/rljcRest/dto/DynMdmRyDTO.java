package avicit.platform6.rljcRest.dto;

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
 * @邮箱：请填写 @创建时间： 2024-01-02 11:39
 * @类说明：DYN_MDM_RY @修改记录：
 */
@PojoRemark(table = "dyn_mdm_ry", object = "DynMdmRyDTO", name = "DYN_MDM_RY")
public class DynMdmRyDTO extends BeanDTO {
	private static final long serialVersionUID = 1L;
	public Object UUID;

	@Id
	@LogField

	@FieldRemark(column = "id", field = "id", name = "ID")
	/*
	 * ID
	 */
	private java.lang.String id;

	@FieldRemark(column = "zcdj", field = "zcdj", name = "职称等级")
	/*
	 * 职称等级
	 */
	private java.lang.String zcdj;

	@FieldRemark(column = "cjgzrq", field = "cjgzrq", name = "参加工作日期")
	/*
	 * 参加工作日期
	 */
	private java.lang.String cjgzrq;

	@FieldRemark(column = "szbm", field = "szbm", name = "所在部门")
	/*
	 * 所在部门
	 */
	private java.lang.String szbm;

	@FieldRemark(column = "csd", field = "csd", name = "出生地")
	/*
	 * 出生地
	 */
	private java.lang.String csd;

	@FieldRemark(column = "jrbdwsj", field = "jrbdwsj", name = "进入本单位时间")
	/*
	 * 进入本单位时间
	 */
	private java.lang.String jrbdwsj;

	@FieldRemark(column = "whcd", field = "whcd", name = "文化程度")
	/*
	 * 文化程度
	 */
	private java.lang.String whcd;

	@FieldRemark(column = "rylb", field = "rylb", name = "人员类别")
	/*
	 * 人员类别
	 */
	private java.lang.String rylb;


	@FieldRemark(column = "sfqy", field = "sfqy", name = "是否启用")
	/*
	 * 是否启用
	 */
	private java.lang.String sfqy;

	@FieldRemark(column = "sfzh", field = "sfzh", name = "身份证号")
	/*
	 * 身份证号
	 */
	private java.lang.String sfzh;

	@FieldRemark(column = "jylb", field = "jylb", name = "教育类别")
	/*
	 * 教育类别
	 */
	private java.lang.String jylb;

	@FieldRemark(column = "jtzz", field = "jtzz", name = "家庭住址")
	/*
	 * 家庭住址
	 */
	private java.lang.String jtzz;

	@FieldRemark(column = "jndj", field = "jndj", name = "技能等级")
	/*
	 * 技能等级
	 */
	private java.lang.String jndj;

	@FieldRemark(column = "zc", field = "zc", name = "职称")
	/*
	 * 职称
	 */
	private java.lang.String zc;

	@FieldRemark(column = "xb", field = "xb", name = "性别")
	/*
	 * 性别
	 */
	private java.lang.String xb;

	@FieldRemark(column = "jtygbm", field = "jtygbm", name = "集团员工编码")
	/*
	 * 集团员工编码
	 */
	private java.lang.String jtygbm;

	@FieldRemark(column = "mz", field = "mz", name = "民族")
	/*
	 * 民族
	 */
	private java.lang.String mz;

	@FieldRemark(column = "sflb", field = "sflb", name = "身份类别")
	/*
	 * 身份类别
	 */
	private java.lang.String sflb;

	@FieldRemark(column = "csrq", field = "csrq", name = "出生日期")
	/*
	 * 出生日期
	 */
	private java.util.Date csrq;

	@FieldRemark(column = "szgw", field = "szgw", name = "所在岗位")
	/*
	 * 所在岗位
	 */
	private java.lang.String szgw;

	@FieldRemark(column = "rybm", field = "rybm", name = "人员编码")
	/*
	 * 人员编码
	 */
	private java.lang.String rybm;

	@FieldRemark(column = "xm", field = "xm", name = "姓名")
	/*
	 * 姓名
	 */
	private java.lang.String xm;

	@FieldRemark(column = "yjbm", field = "yjbm", name = "一级部门")
	/*
	 * 一级部门
	 */
	private java.lang.String yjbm;
	@LogField

	@FieldRemark(column = "org_identity", field = "orgIdentity", name = "ORG_IDENTITY")
	/*
	 * ORG_IDENTITY
	 */
	private java.lang.String orgIdentity;

	@FieldRemark(column = "jg", field = "jg", name = "籍贯")
	/*
	 * 籍贯
	 */
	private java.lang.String jg;

	@FieldRemark(column = "nl", field = "nl", name = "年龄")

	/*
	 * 年龄
	 */
	private Long nl;

	@FieldRemark(column = "ryid", field = "ryid", name = "人员ID")
	/*
	 * 籍贯
	 */
	private java.lang.String ryid;

	public java.lang.String getId() {
		return id;
	}

	public void setId(java.lang.String id) {
		this.id = id;
	}

	public java.lang.String getZcdj() {
		return zcdj;
	}

	public void setZcdj(java.lang.String zcdj) {
		this.zcdj = zcdj;
	}





	public java.lang.String getCjgzrq() {
		return cjgzrq;
	}

	public void setCjgzrq(java.lang.String cjgzrq) {
		this.cjgzrq = cjgzrq;
	}

	public java.lang.String getSzbm() {
		return szbm;
	}

	public void setSzbm(java.lang.String szbm) {
		this.szbm = szbm;
	}

	public java.lang.String getCsd() {
		return csd;
	}

	public void setCsd(java.lang.String csd) {
		this.csd = csd;
	}

	public java.lang.String getJrbdwsj() {
		return jrbdwsj;
	}

	public void setJrbdwsj(java.lang.String jrbdwsj) {
		this.jrbdwsj = jrbdwsj;
	}

	public java.lang.String getWhcd() {
		return whcd;
	}

	public void setWhcd(java.lang.String whcd) {
		this.whcd = whcd;
	}

	public java.lang.String getRylb() {
		return rylb;
	}

	public void setRylb(java.lang.String rylb) {
		this.rylb = rylb;
	}

	public java.lang.String getCreatedDept() {
		return createdDept;
	}

	public void setCreatedDept(java.lang.String createdDept) {
		this.createdDept = createdDept;
	}

	public java.lang.String getSfqy() {
		return sfqy;
	}

	public void setSfqy(java.lang.String sfqy) {
		this.sfqy = sfqy;
	}

	public java.lang.String getSfzh() {
		return sfzh;
	}

	public void setSfzh(java.lang.String sfzh) {
		this.sfzh = sfzh;
	}

	public java.lang.String getJylb() {
		return jylb;
	}

	public void setJylb(java.lang.String jylb) {
		this.jylb = jylb;
	}





	public java.lang.String getJtzz() {
		return jtzz;
	}

	public void setJtzz(java.lang.String jtzz) {
		this.jtzz = jtzz;
	}

	public java.lang.String getJndj() {
		return jndj;
	}

	public void setJndj(java.lang.String jndj) {
		this.jndj = jndj;
	}

	public java.lang.String getZc() {
		return zc;
	}

	public void setZc(java.lang.String zc) {
		this.zc = zc;
	}

	public java.lang.String getXb() {
		return xb;
	}

	public void setXb(java.lang.String xb) {
		this.xb = xb;
	}

	public java.lang.String getJtygbm() {
		return jtygbm;
	}

	public void setJtygbm(java.lang.String jtygbm) {
		this.jtygbm = jtygbm;
	}

	public java.lang.String getMz() {
		return mz;
	}

	public void setMz(java.lang.String mz) {
		this.mz = mz;
	}

	public java.lang.String getSflb() {
		return sflb;
	}

	public void setSflb(java.lang.String sflb) {
		this.sflb = sflb;
	}

	public java.util.Date getCsrq() {
		return csrq;
	}

	public void setCsrq(java.util.Date csrq) {
		this.csrq = csrq;
	}


	public java.lang.String getSzgw() {
		return szgw;
	}

	public void setSzgw(java.lang.String szgw) {
		this.szgw = szgw;
	}

	public java.lang.String getRybm() {
		return rybm;
	}

	public void setRybm(java.lang.String rybm) {
		this.rybm = rybm;
	}

	public java.lang.String getXm() {
		return xm;
	}

	public void setXm(java.lang.String xm) {
		this.xm = xm;
	}

	public java.lang.String getYjbm() {
		return yjbm;
	}

	public void setYjbm(java.lang.String yjbm) {
		this.yjbm = yjbm;
	}

	public java.lang.String getOrgIdentity() {
		return orgIdentity;
	}

	public void setOrgIdentity(java.lang.String orgIdentity) {
		this.orgIdentity = orgIdentity;
	}

	public java.lang.String getJg() {
		return jg;
	}

	public void setJg(java.lang.String jg) {
		this.jg = jg;
	}

	public Long getNl() {
		return nl;
	}

	public void setNl(Long nl) {
		this.nl = nl;
	}

	public String getRyid() {
		return ryid;
	}

	public void setRyid(String ryid) {
		this.ryid = ryid;
	}

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "DYN_MDM_RY";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "DYN_MDM_RY";
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