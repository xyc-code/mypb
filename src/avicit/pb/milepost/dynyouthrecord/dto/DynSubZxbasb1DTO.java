package avicit.pb.milepost.dynyouthrecord.dto;

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
 * @邮箱：请填写 @创建时间： 2023-07-13 10:10
 * @类说明：DYN_SUB_ZXBASB_1 @修改记录：
 */
@PojoRemark(table = "dyn_sub_zxbasb_1", object = "DynSubZxbasb1DTO", name = "DYN_SUB_ZXBASB_1")
public class DynSubZxbasb1DTO extends BeanDTO {
	private static final long serialVersionUID = 1L;

	@Id
	@LogField

	@FieldRemark(column = "id", field = "id", name = "ID")
	/*
	 * ID
	 */
	private java.lang.String id;

	@FieldRemark(column = "fk_sub_col_id", field = "fkSubColId", name = "外键")
	/*
	 * 外键
	 */
	private java.lang.String fkSubColId;
	/*
	 * 创建时间开始时间
	 */
	private java.util.Date creationDateBegin;
	/*
	 * 创建时间截止时间
	 */
	private java.util.Date creationDateEnd;
	/*
	 * 最后更新时间开始时间
	 */
	private java.util.Date lastUpdateDateBegin;
	/*
	 * 最后更新时间截止时间
	 */
	private java.util.Date lastUpdateDateEnd;

	@FieldRemark(column = "tjd_zhiwu", field = "tjdZhiwu", name = "任务内容")
	/*
	 * 任务内容
	 */
	private java.lang.String tjdZhiwu;

	@FieldRemark(column = "tjd_age", field = "tjdAge", name = "年龄")
	/*
	 * 年龄
	 */
	private Long tjdAge;

	@FieldRemark(column = "tjd_duizhangname", field = "tjdDuizhangname", name = "职务")
	/*
	 * 职务
	 */
	private java.lang.String tjdDuizhangname;

	@FieldRemark(column = "tjd_duiyuanname", field = "tjdDuiyuanname", name = "突击队队员姓名")
	/*
	 * 突击队队员姓名
	 */
	private java.lang.String tjdDuiyuanname;

	@FieldRemark(column = "tjd_danwei", field = "tjdDanwei", name = "所在单位")
	/*
	 * 所在单位
	 */
	private java.lang.String tjdDanwei;
	@LogField

	@FieldRemark(column = "created_dept", field = "createdDept", name = "创建人部门")
	/*
	 * 创建人部门
	 */
	private java.lang.String createdDept;
	@LogField

	@FieldRemark(column = "org_identity", field = "orgIdentity", name = "组织ID")
	/*
	 * 组织ID
	 */
	private java.lang.String orgIdentity;

	@FieldRemark(column = "tjd_filed_username", field = "tjdFiledUsername", name = "预留字段")
	/*
	 * 预留字段
	 */
	private java.lang.String tjdFiledUsername;

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public String getAttr1() {
		return attr1;
	}

	public void setAttr1(String attr1) {
		this.attr1 = attr1;
	}

	@LogField

	@FieldRemark(column = "attr1", field = "ATTR1", name = "预留字段1")
	private  String attr1;

	public java.lang.String getId() {
		return id;
	}

	public void setId(java.lang.String id) {
		this.id = id;
	}

	public java.lang.String getFkSubColId() {
		return fkSubColId;
	}

	public void setFkSubColId(java.lang.String fkSubColId) {
		this.fkSubColId = fkSubColId;
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

	public java.lang.String getTjdZhiwu() {
		return tjdZhiwu;
	}

	public void setTjdZhiwu(java.lang.String tjdZhiwu) {
		this.tjdZhiwu = tjdZhiwu;
	}

	public Long getTjdAge() {
		return tjdAge;
	}

	public void setTjdAge(Long tjdAge) {
		this.tjdAge = tjdAge;
	}

	public java.lang.String getTjdDuizhangname() {
		return tjdDuizhangname;
	}

	public void setTjdDuizhangname(java.lang.String tjdDuizhangname) {
		this.tjdDuizhangname = tjdDuizhangname;
	}

	public java.lang.String getTjdDuiyuanname() {
		return tjdDuiyuanname;
	}

	public void setTjdDuiyuanname(java.lang.String tjdDuiyuanname) {
		this.tjdDuiyuanname = tjdDuiyuanname;
	}

	public java.lang.String getTjdDanwei() {
		return tjdDanwei;
	}

	public void setTjdDanwei(java.lang.String tjdDanwei) {
		this.tjdDanwei = tjdDanwei;
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

	public java.lang.String getTjdFiledUsername() {
		return tjdFiledUsername;
	}

	public void setTjdFiledUsername(java.lang.String tjdFiledUsername) {
		this.tjdFiledUsername = tjdFiledUsername;
	}

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "DYN_SUB_ZXBASB_1";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "DYN_SUB_ZXBASB_1";
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