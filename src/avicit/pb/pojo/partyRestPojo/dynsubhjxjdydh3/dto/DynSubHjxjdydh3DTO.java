package avicit.pb.pojo.partyRestPojo.dynsubhjxjdydh3.dto;

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
 * @创建时间： 2024-03-18 11:50
 * @类说明：DYN_SUB_HJXJDYDH_3Dto
 * @修改记录：
 */
@PojoRemark(table="DYN_SUB_HJXJDYDH_3", object="DynSubHjxjdydh3DTO", name="DYN_SUB_HJXJDYDH_3")
public class DynSubHjxjdydh3DTO extends BeanDTO{
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
	 * 序号
	 */
	@FieldRemark(column="SN", field="sn", name="序号")
	private java.lang.String sn;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

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
	 * 姓名
	 */
	@FieldRemark(column="NAME", field="name", name="姓名")
	private java.lang.String name;

	/**
	 * 性别
	 */
	@FieldRemark(column="GENDER", field="gender", name="性别")
	private java.lang.String gender;

	/**
	 * 委员分工
	 */
	@FieldRemark(column="DIVISION_LABOR", field="divisionLabor", name="委员分工")
	private java.lang.String divisionLabor;

	/**
	 * 得票数
	 */
	@FieldRemark(column="NUMBER_VOTES", field="numberVotes", name="得票数")
	private java.lang.Long numberVotes;

	/**
	 * 出生日期
	 */
	@FieldRemark(column="BIRTHDAY", field="birthday", name="出生日期")
	private java.lang.String birthday;

	/**
	 * 职务
	 */
	@FieldRemark(column="POST", field="post", name="职务")
	private java.lang.String post;

	/**
	 * 职称
	 */
	@FieldRemark(column="PRO_TITLE", field="proTitle", name="职称")
	private java.lang.String proTitle;

	/**
	 * 入党时间
	 */
	@FieldRemark(column="TIME_JOIN", field="timeJoin", name="入党时间")
	private java.lang.String timeJoin;

	/**
	 * 参加工作时间
	 */
	@FieldRemark(column="TIME_WORK", field="timeWork", name="参加工作时间")
	private java.lang.String timeWork;

	/**
	 * 联系方式
	 */
	@FieldRemark(column="TEL", field="tel", name="联系方式")
	private java.lang.String tel;

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

	public java.lang.String getSn(){
		return sn;
	}

	public void setSn(java.lang.String sn){
		this.sn = sn;
	}

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
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

	public java.lang.String getName(){
		return name;
	}

	public void setName(java.lang.String name){
		this.name = name;
	}

	public java.lang.String getGender(){
		return gender;
	}

	public void setGender(java.lang.String gender){
		this.gender = gender;
	}

	public java.lang.String getDivisionLabor(){
		return divisionLabor;
	}

	public void setDivisionLabor(java.lang.String divisionLabor){
		this.divisionLabor = divisionLabor;
	}

	public java.lang.Long getNumberVotes(){
		return numberVotes;
	}

	public void setNumberVotes(java.lang.Long numberVotes){
		this.numberVotes = numberVotes;
	}

	public java.lang.String getBirthday(){
		return birthday;
	}

	public void setBirthday(java.lang.String birthday){
		this.birthday = birthday;
	}

	public java.lang.String getPost(){
		return post;
	}

	public void setPost(java.lang.String post){
		this.post = post;
	}

	public java.lang.String getProTitle(){
		return proTitle;
	}

	public void setProTitle(java.lang.String proTitle){
		this.proTitle = proTitle;
	}

	public java.lang.String getTimeJoin(){
		return timeJoin;
	}

	public void setTimeJoin(java.lang.String timeJoin){
		this.timeJoin = timeJoin;
	}

	public java.lang.String getTimeWork(){
		return timeWork;
	}

	public void setTimeWork(java.lang.String timeWork){
		this.timeWork = timeWork;
	}

	public java.lang.String getTel(){
		return tel;
	}

	public void setTel(java.lang.String tel){
		this.tel = tel;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_SUB_HJXJDYDH_3";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_SUB_HJXJDYDH_3";
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