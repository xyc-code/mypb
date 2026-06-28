package avicit.lc.cadres.leaguecadres.dto;

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
 * @创建时间： 2022-02-18 09:02
 * @类说明：团干部信息Dto
 * @修改记录：
 */
@PojoRemark(table="LEAGUE_CADRES", object="LeagueCadresDTO", name="团干部信息")
public class LeagueCadresDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 姓名
	 */
	@NotBlank(message = "姓名不能为空")
	@FieldRemark(column="USER_ID", field="userId", name="姓名", dataType="user")
	private java.lang.String userId;

	/**
	 * 姓名显示字段
	 */
	private java.lang.String userIdAlias;

	/**
	 * 所在单位
	 */
	@NotBlank(message = "所在单位不能为空")
	@FieldRemark(column="DEPT_ID", field="deptId", name="所在单位", dataType="dept")
	private java.lang.String deptId;

	/**
	 * 所在单位显示字段
	 */
	private java.lang.String deptIdAlias;

	/**
	 * 所在团组织
	 */
	@NotBlank(message = "所在团组织不能为空")
	@FieldRemark(column="LEAGUE_ID", field="leagueId", name="所在团组织")
	private java.lang.String leagueId;
	private java.lang.String leagueIdAlias;

	public java.lang.String getLeagueIdAlias() {
		return leagueIdAlias;
	}

	public void setLeagueIdAlias(java.lang.String leagueIdAlias) {
		this.leagueIdAlias = leagueIdAlias;
	}

	/**
	 * 身份证号
	 */
	@NotBlank(message = "身份证号不能为空")
	@FieldRemark(column="CARD_ID", field="cardId", name="身份证号")
	private java.lang.String cardId;

	/**
	 * 民族
	 */
	@NotBlank(message = "民族不能为空")
	@FieldRemark(column="NATION", field="nation", name="民族")
	private java.lang.String nation;

	/**
	 * 政治面貌
	 */
	@NotBlank(message = "政治面貌不能为空")
	@FieldRemark(column="POLITICAL", field="political", name="政治面貌")
	private java.lang.String political;

	/**
	 * 全日制教育学历
	 */
	@NotBlank(message = "全日制教育学历不能为空")
	@FieldRemark(column="FULL_EDUCATION", field="fullEducation", name="全日制教育学历")
	private java.lang.String fullEducation;

	/**
	 * 全日制教育学历
	 */
	@NotBlank(message = "全日制教育学历不能为空")
	@FieldRemark(column="FULL_UNIVERSITY", field="fullUniversity", name="全日制教育学历", dataType="lookup", lookupType="LC_CARDES_FULL_EDUCATION")
	private java.lang.String fullUniversity;
	private java.lang.String fullUniversityName;

	/**
	 * 在职教育学历
	 */
	@NotBlank(message = "在职教育学历不能为空")
	@FieldRemark(column="JOB_EDUCATION", field="jobEducation", name="在职教育学历")
	private java.lang.String jobEducation;

	/**
	 * 在职教育毕业院校
	 */
	@NotBlank(message = "在职教育毕业院校不能为空")
	@FieldRemark(column="JOB_UNIVERSITY", field="jobUniversity", name="在职教育毕业院校", dataType="lookup", lookupType="LC_CARDES_JOB_UNIVERSITY")
	private java.lang.String jobUniversity;
	private java.lang.String jobUniversityName;

	/**
	 * 团现任职务
	 */
	@NotBlank(message = "团现任职务不能为空")
	@FieldRemark(column="POST", field="post", name="团现任职务")
	private java.lang.String post;

	/**
	 * 任现职年月
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="POST_DATE", field="postDate", name="任现职年月")
	private java.util.Date postDate;

	/**
	 * 任现职年月起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date postDateBegin;

	/**
	 * 任现职年月止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date postDateEnd;

	/**
	 * 办公电话
	 */
	@FieldRemark(column="PHONE", field="phone", name="办公电话")
	private java.lang.String phone;

	/**
	 * 移动电话
	 */
	@FieldRemark(column="TEL", field="tel", name="移动电话")
	private java.lang.String tel;

	/**
	 * 电子邮件
	 */
	@FieldRemark(column="MAIL", field="mail", name="电子邮件")
	private java.lang.String mail;

	/**
	 * 备注
	 */
	@FieldRemark(column="MARKS", field="marks", name="备注")
	private java.lang.String marks;

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
	 * VALID_FLAG
	 */

	@FieldRemark(column="VALID_FLAG", field="VALID_FLAG", name="是否有效",dataType="lookup", lookupType="PLATFORM_VALID_FLAG")
	private java.lang.String validFlag;
	private java.lang.String validFlagName;

	public java.lang.String getValidFlagName() {
		return validFlagName;
	}

	public void setValidFlagName(java.lang.String validFlagName) {
		this.validFlagName = validFlagName;
	}

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_01", field="attribute01", name="扩展字段")
	private java.lang.String attribute01;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_02", field="attribute02", name="扩展字段")
	private java.lang.String attribute02;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="扩展字段")
	private java.lang.String attribute03;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_04", field="attribute04", name="扩展字段")
	private java.lang.String attribute04;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_05", field="attribute05", name="扩展字段")
	private java.lang.String attribute05;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_06", field="attribute06", name="扩展字段")
	private java.lang.String attribute06;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_07", field="attribute07", name="扩展字段")
	private java.lang.String attribute07;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_08", field="attribute08", name="扩展字段")
	private java.lang.String attribute08;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_09", field="attribute09", name="扩展字段")
	private java.lang.String attribute09;

	/**
	 * 扩展字段
	 */
	@FieldRemark(column="ATTRIBUTE_10", field="attribute10", name="扩展字段")
	private java.lang.String attribute10;

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}

	public java.lang.String getUserId(){
		return userId;
	}

	public void setUserId(java.lang.String userId){
		this.userId = userId;
	}

	public java.lang.String getUserIdAlias(){
		return userIdAlias;
	}

	public void setUserIdAlias(java.lang.String userIdAlias){
		this.userIdAlias = userIdAlias;
	}

	public java.lang.String getDeptId(){
		return deptId;
	}

	public void setDeptId(java.lang.String deptId){
		this.deptId = deptId;
	}

	public java.lang.String getDeptIdAlias(){
		return deptIdAlias;
	}

	public void setDeptIdAlias(java.lang.String deptIdAlias){
		this.deptIdAlias = deptIdAlias;
	}

	public java.lang.String getLeagueId(){
		return leagueId;
	}

	public void setLeagueId(java.lang.String leagueId){
		this.leagueId = leagueId;
	}

	public java.lang.String getCardId(){
		return cardId;
	}

	public void setCardId(java.lang.String cardId){
		this.cardId = cardId;
	}

	public java.lang.String getNation(){
		return nation;
	}

	public void setNation(java.lang.String nation){
		this.nation = nation;
	}

	public java.lang.String getPolitical(){
		return political;
	}

	public void setPolitical(java.lang.String political){
		this.political = political;
	}

	public java.lang.String getFullEducation(){
		return fullEducation;
	}

	public void setFullEducation(java.lang.String fullEducation){
		this.fullEducation = fullEducation;
	}

    public java.lang.String getFullUniversity(){
		return fullUniversity;
	}

	public void setFullUniversity(java.lang.String fullUniversity){
		this.fullUniversity = fullUniversity;
	}

	public java.lang.String getFullUniversityName(){
		return fullUniversityName;
	}

	public void setFullUniversityName(java.lang.String fullUniversityName){
		this.fullUniversityName = fullUniversityName;
	}

	public java.lang.String getJobEducation(){
		return jobEducation;
	}

	public void setJobEducation(java.lang.String jobEducation){
		this.jobEducation = jobEducation;
	}

    public java.lang.String getJobUniversity(){
		return jobUniversity;
	}

	public void setJobUniversity(java.lang.String jobUniversity){
		this.jobUniversity = jobUniversity;
	}

	public java.lang.String getJobUniversityName(){
		return jobUniversityName;
	}

	public void setJobUniversityName(java.lang.String jobUniversityName){
		this.jobUniversityName = jobUniversityName;
	}

	public java.lang.String getPost(){
		return post;
	}

	public void setPost(java.lang.String post){
		this.post = post;
	}

	public java.util.Date getPostDate(){
		return postDate;
	}

	public void setPostDate(java.util.Date postDate){
		this.postDate = postDate;
	}

	public java.util.Date getPostDateBegin(){
		return postDateBegin;
	}

	public void setPostDateBegin(java.util.Date postDateBegin){
		this.postDateBegin = postDateBegin;
	}

	public java.util.Date getPostDateEnd(){
		return postDateEnd;
	}

	public void setPostDateEnd(java.util.Date postDateEnd){
		this.postDateEnd = postDateEnd;
	}

	public java.lang.String getPhone(){
		return phone;
	}

	public void setPhone(java.lang.String phone){
		this.phone = phone;
	}

	public java.lang.String getTel(){
		return tel;
	}

	public void setTel(java.lang.String tel){
		this.tel = tel;
	}

	public java.lang.String getMail(){
		return mail;
	}

	public void setMail(java.lang.String mail){
		this.mail = mail;
	}

	public java.lang.String getMarks(){
		return marks;
	}

	public void setMarks(java.lang.String marks){
		this.marks = marks;
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

	public java.lang.String getValidFlag(){
		return validFlag;
	}

	public void setValidFlag(java.lang.String validFlag){
		this.validFlag = validFlag;
	}

	public java.lang.String getAttribute01(){
		return attribute01;
	}

	public void setAttribute01(java.lang.String attribute01){
		this.attribute01 = attribute01;
	}

	public java.lang.String getAttribute02(){
		return attribute02;
	}

	public void setAttribute02(java.lang.String attribute02){
		this.attribute02 = attribute02;
	}

	public java.lang.String getAttribute03(){
		return attribute03;
	}

	public void setAttribute03(java.lang.String attribute03){
		this.attribute03 = attribute03;
	}

	public java.lang.String getAttribute04(){
		return attribute04;
	}

	public void setAttribute04(java.lang.String attribute04){
		this.attribute04 = attribute04;
	}

	public java.lang.String getAttribute05(){
		return attribute05;
	}

	public void setAttribute05(java.lang.String attribute05){
		this.attribute05 = attribute05;
	}

	public java.lang.String getAttribute06(){
		return attribute06;
	}

	public void setAttribute06(java.lang.String attribute06){
		this.attribute06 = attribute06;
	}

	public java.lang.String getAttribute07(){
		return attribute07;
	}

	public void setAttribute07(java.lang.String attribute07){
		this.attribute07 = attribute07;
	}

	public java.lang.String getAttribute08(){
		return attribute08;
	}

	public void setAttribute08(java.lang.String attribute08){
		this.attribute08 = attribute08;
	}

	public java.lang.String getAttribute09(){
		return attribute09;
	}

	public void setAttribute09(java.lang.String attribute09){
		this.attribute09 = attribute09;
	}

	public java.lang.String getAttribute10(){
		return attribute10;
	}

	public void setAttribute10(java.lang.String attribute10){
		this.attribute10 = attribute10;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "团干部信息";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "团干部信息";
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