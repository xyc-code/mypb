package avicit.test.test1.dto;

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
 * @创建时间： 2022-01-26 10:27
 * @类说明：TEST1Dto
 * @修改记录：
 */
@PojoRemark(table="TEST1", object="Test1DTO", name="TEST1")
public class Test1DTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * TEST2
	 */
	@FieldRemark(column="TEST2", field="test2", name="TEST2", dataType="lookup", lookupType="PA_PARTY_TYPE")
	private java.lang.String test2;
	private java.lang.String test2Name;

	/**
	 * TEST3
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="TEST3", field="test3", name="TEST3")
	private java.util.Date test3;

	/**
	 * TEST3起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date test3Begin;

	/**
	 * TEST3止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date test3End;

	/**
	 * TEST_ID
	 */
	@FieldRemark(column="TEST_ID", field="testId", name="TEST_ID")
	private java.lang.String testId;

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

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}

    public java.lang.String getTest2(){
		return test2;
	}

	public void setTest2(java.lang.String test2){
		this.test2 = test2;
	}

	public java.lang.String getTest2Name(){
		return test2Name;
	}

	public void setTest2Name(java.lang.String test2Name){
		this.test2Name = test2Name;
	}

	public java.util.Date getTest3(){
		return test3;
	}

	public void setTest3(java.util.Date test3){
		this.test3 = test3;
	}

	public java.util.Date getTest3Begin(){
		return test3Begin;
	}

	public void setTest3Begin(java.util.Date test3Begin){
		this.test3Begin = test3Begin;
	}

	public java.util.Date getTest3End(){
		return test3End;
	}

	public void setTest3End(java.util.Date test3End){
		this.test3End = test3End;
	}

	public java.lang.String getTestId(){
		return testId;
	}

	public void setTestId(java.lang.String testId){
		this.testId = testId;
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

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "TEST1";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "TEST1";
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