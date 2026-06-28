package avicit.pb.dynThreeFour.dynthreefour.dto;

import avicit.platform6.core.annotation.log.FieldRemark;
import avicit.platform6.core.annotation.log.LogField;
import avicit.platform6.core.annotation.log.PojoRemark;
import avicit.platform6.core.domain.BeanDTO;
import avicit.platform6.core.properties.PlatformConstant.LogType;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Id;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-14 09:04
 * @类说明：DYN_THREE_FOURDto
 * @修改记录：
 */
@PojoRemark(table="DYN_THREE_FOUR_TJ", object="DynThreeFourTjDTO", name="DYN_THREE_FOUR_TJ")
public class DynThreeFourTjDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 参会组织名称
	 */
	@FieldRemark(column="id", field="id", name="id")
	private String id;

	@FieldRemark(column="ATTRIBUTE_01Alias", field="ATTRIBUTE_01Alias", name="党组织类别")
	private String ATTRIBUTE_01Alias;

	@FieldRemark(column="PARTY_NAME", field="PARTY_NAME", name="党组织名称")
	private String PARTY_NAME;

	@FieldRemark(column="DWH", field="DWH", name="党委会")
	private String DWH;

	@FieldRemark(column="ZZWYH", field="ZZWYH", name="总支委员会")
	private String ZZWYH;

	@FieldRemark(column="ZBWYH", field="ZBWYH", name="支部委员会")
	private String ZBWYH;

	@FieldRemark(column="DYDH", field="DYDH", name="党员大会")
	private String DYDH;

	@FieldRemark(column="DXZH", field="DXZH", name="党小组会")
	private String DXZH;

	@FieldRemark(column="JLJCWYH", field="JLJCWYH", name="纪律检查委员会")
	private String JLJCWYH;

	@FieldRemark(column="DK", field="DK", name="党课")
	private String DK;

	@FieldRemark(column="DWHWCL", field="DWHWCL", name="党委会完成率")
	private String DWHWCL;

	@FieldRemark(column="ZZWYHWCL", field="ZZWYHWCL", name="总支委员会完成率")
	private String ZZWYHWCL;

	@FieldRemark(column="ZBWYHWCl", field="ZBWYHWCl", name="支部委员会完成率")
	private String ZBWYHWCl;

	@FieldRemark(column="DYDHWCL", field="DYDHWCL", name="党员大会完成率")
	private String DYDHWCL;

	@FieldRemark(column="DXZHWCL", field="DXZHWCL", name="党小组会完成率")
	private String DXZHWCL;

	@FieldRemark(column="JLJCWYHWCL", field="JLJCWYHWCL", name="纪律检查委员会完成率")
	private String JLJCWYHWCL;

	@FieldRemark(column="DKWCL", field="DKWCL", name="党课完成率")
	private String DKWCL;


	@Override
	public String getLogFormName() {
		return null;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getATTRIBUTE_01Alias() {
		return ATTRIBUTE_01Alias;
	}

	public void setATTRIBUTE_01Alias(String ATTRIBUTE_01Alias) {
		this.ATTRIBUTE_01Alias = ATTRIBUTE_01Alias;
	}

	public String getPARTY_NAME() {
		return PARTY_NAME;
	}

	public void setPARTY_NAME(String PARTY_NAME) {
		this.PARTY_NAME = PARTY_NAME;
	}

	public String getDWH() {
		return DWH;
	}

	public void setDWH(String DWH) {
		this.DWH = DWH;
	}

	public String getZZWYH() {
		return ZZWYH;
	}

	public void setZZWYH(String ZZWYH) {
		this.ZZWYH = ZZWYH;
	}

	public String getZBWYH() {
		return ZBWYH;
	}

	public void setZBWYH(String ZBWYH) {
		this.ZBWYH = ZBWYH;
	}

	public String getDYDH() {
		return DYDH;
	}

	public void setDYDH(String DYDH) {
		this.DYDH = DYDH;
	}

	public String getDXZH() {
		return DXZH;
	}

	public void setDXZH(String DXZH) {
		this.DXZH = DXZH;
	}

	public String getJLJCWYH() {
		return JLJCWYH;
	}

	public void setJLJCWYH(String JLJCWYH) {
		this.JLJCWYH = JLJCWYH;
	}

	public String getDK() {
		return DK;
	}

	public void setDK(String DK) {
		this.DK = DK;
	}

	public String getDWHWCL() {
		return DWHWCL;
	}

	public void setDWHWCL(String DWHWCL) {
		this.DWHWCL = DWHWCL;
	}

	public String getZZWYHWCL() {
		return ZZWYHWCL;
	}

	public void setZZWYHWCL(String ZZWYHWCL) {
		this.ZZWYHWCL = ZZWYHWCL;
	}

	public String getZBWYHWCl() {
		return ZBWYHWCl;
	}

	public void setZBWYHWCl(String ZBWYHWCl) {
		this.ZBWYHWCl = ZBWYHWCl;
	}

	public String getDYDHWCL() {
		return DYDHWCL;
	}

	public void setDYDHWCL(String DYDHWCL) {
		this.DYDHWCL = DYDHWCL;
	}

	public String getDXZHWCL() {
		return DXZHWCL;
	}

	public void setDXZHWCL(String DXZHWCL) {
		this.DXZHWCL = DXZHWCL;
	}

	public String getJLJCWYHWCL() {
		return JLJCWYHWCL;
	}

	public void setJLJCWYHWCL(String JLJCWYHWCL) {
		this.JLJCWYHWCL = JLJCWYHWCL;
	}

	public String getDKWCL() {
		return DKWCL;
	}

	public void setDKWCL(String DKWCL) {
		this.DKWCL = DKWCL;
	}
}