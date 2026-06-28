package avicit.test.test3.dto;

import javax.persistence.Id;
import avicit.platform6.core.domain.BeanDTO;
import com.fasterxml.jackson.annotation.JsonFormat;
import avicit.platform6.core.properties.PlatformConstant.LogType;
import avicit.platform6.core.annotation.log.LogField;
import avicit.platform6.core.annotation.log.FieldRemark;
import avicit.platform6.core.annotation.log.PojoRemark;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonIgnore;

@PojoRemark(table="DYN_TEST",object="DynTestDto",name="test")
public class DynTestDto extends BeanDTO{

private static final long serialVersionUID = 1L;

	    @JsonProperty("DATA_1")
			@FieldRemark(column="DATA_1",field="DATA_1",name="DATA_1")
 	private String DATA_1;

    
 	
	    @JsonProperty("LAST_UPDATE_IP")
			@FieldRemark(column="LAST_UPDATE_IP",field="LAST_UPDATE_IP",name="创建人IP")
 	private String LAST_UPDATE_IP;

    
 	
	    @JsonProperty("CREATED_DEPT")
			@FieldRemark(column="CREATED_DEPT",field="CREATED_DEPT",name="创建人部门")
 	private String CREATED_DEPT;

    
 	
	    @JsonProperty("CREATION_DATE")
			@FieldRemark(column="CREATION_DATE",field="CREATION_DATE",name="创建时间")
 	private java.util.Date CREATION_DATE;

    
 	    @JsonProperty("CREATION_DATE_START")
		 	private java.util.Date CREATION_DATE_START;

	@JsonProperty("CREATION_DATE_END")
		 	private java.util.Date CREATION_DATE_END;
 	
	    @JsonProperty("DATA_2")
			@FieldRemark(column="DATA_2",field="DATA_2",name="字段_2")
 	private String DATA_2;

    
 	
	    @JsonProperty("CREATED_BY")
			@FieldRemark(column="CREATED_BY",field="CREATED_BY",name="创建人ID")
 	private String CREATED_BY;

    
 	
	    @JsonProperty("VERSION")
			@FieldRemark(column="VERSION",field="VERSION",name="版本")
 	private java.math.BigDecimal VERSION;

    
 	    @JsonProperty("VERSION_START")
    private java.math.BigDecimal VERSION_START;
    @JsonProperty("VERSION_END")
    private java.math.BigDecimal VERSION_END;
	
	    @JsonProperty("ID")
			@FieldRemark(column="ID",field="ID",name="ID")
 	private String ID;

    
 	
	    @JsonProperty("LAST_UPDATE_DATE")
			@FieldRemark(column="LAST_UPDATE_DATE",field="LAST_UPDATE_DATE",name="最后更新时间")
 	private java.util.Date LAST_UPDATE_DATE;

    
 	    @JsonProperty("LAST_UPDATE_DATE_START")
		 	private java.util.Date LAST_UPDATE_DATE_START;

	@JsonProperty("LAST_UPDATE_DATE_END")
		 	private java.util.Date LAST_UPDATE_DATE_END;
 	
	    @JsonProperty("LAST_UPDATED_BY")
			@FieldRemark(column="LAST_UPDATED_BY",field="LAST_UPDATED_BY",name="最后更新人ID")
 	private String LAST_UPDATED_BY;

    
 	
	    @JsonProperty("ORG_IDENTITY")
			@FieldRemark(column="ORG_IDENTITY",field="ORG_IDENTITY",name="组织ID")
 	private String ORG_IDENTITY;

    
 	

	@JsonProperty("ACTIVITYALIAS_")
    private String ACTIVITYALIAS_; //流程当前步骤
	@JsonProperty("BUSINESSSTATE_")
	private String BUSINESSSTATE_; //流程状态
	@JsonProperty("PROCESSINSTANCEID")
	private String PROCESSINSTANCEID;
	private String flowdetail; //流程详细
	private String currUserId; //流程用户查询参数
	private String bpmState; //流程状态查询参数


 	public String getDATA_1(){
 		return 	DATA_1;
 	}

 	public void setDATA_1(String DATA_1){
 	     this.DATA_1=DATA_1;
 	}
 	
 	 	

 	public String getLAST_UPDATE_IP(){
 		return 	LAST_UPDATE_IP;
 	}

 	public void setLAST_UPDATE_IP(String LAST_UPDATE_IP){
 	     this.LAST_UPDATE_IP=LAST_UPDATE_IP;
 	}
 	
 	 	

 	public String getCREATED_DEPT(){
 		return 	CREATED_DEPT;
 	}

 	public void setCREATED_DEPT(String CREATED_DEPT){
 	     this.CREATED_DEPT=CREATED_DEPT;
 	}
 	
 	 	

 	public java.util.Date getCREATION_DATE(){
 		return 	CREATION_DATE;
 	}

 	public void setCREATION_DATE(java.util.Date CREATION_DATE){
 	     this.CREATION_DATE=CREATION_DATE;
 	}
 	
 	 	public java.util.Date getCREATION_DATE_START(){
 		return 	CREATION_DATE_START;
 	}

 	public void setCREATION_DATE_START(java.util.Date CREATION_DATE_START){
 	     this.CREATION_DATE_START=CREATION_DATE_START;
 	}
 	
 	public java.util.Date getCREATION_DATE_END(){
 		return 	CREATION_DATE_END;
 	}
 	
 	public void setCREATION_DATE_END(java.util.Date CREATION_DATE_END){
 	     this.CREATION_DATE_END=CREATION_DATE_END;
 	}
 	 	

 	public String getDATA_2(){
 		return 	DATA_2;
 	}

 	public void setDATA_2(String DATA_2){
 	     this.DATA_2=DATA_2;
 	}
 	
 	 	

 	public String getCREATED_BY(){
 		return 	CREATED_BY;
 	}

 	public void setCREATED_BY(String CREATED_BY){
 	     this.CREATED_BY=CREATED_BY;
 	}
 	
 	 	

 	public java.math.BigDecimal getVERSION(){
 		return 	VERSION;
 	}

 	public void setVERSION(java.math.BigDecimal VERSION){
 	     this.VERSION=VERSION;
 	}
 	
 	 	public java.math.BigDecimal getVERSION_START(){
 		return 	VERSION_START;
 	}

 	public void setVERSION_START(java.math.BigDecimal VERSION_START){
 	     this.VERSION_START=VERSION_START;
 	}
 	
 	public java.math.BigDecimal getVERSION_END(){
 		return 	VERSION_END;
 	}
 	
 	public void setVERSION_END(java.math.BigDecimal VERSION_END){
 	     this.VERSION_END=VERSION_END;
 	}
 	 	

 	public String getID(){
 		return 	ID;
 	}

 	public void setID(String ID){
 	     this.ID=ID;
 	}
 	
 	 	

 	public java.util.Date getLAST_UPDATE_DATE(){
 		return 	LAST_UPDATE_DATE;
 	}

 	public void setLAST_UPDATE_DATE(java.util.Date LAST_UPDATE_DATE){
 	     this.LAST_UPDATE_DATE=LAST_UPDATE_DATE;
 	}
 	
 	 	public java.util.Date getLAST_UPDATE_DATE_START(){
 		return 	LAST_UPDATE_DATE_START;
 	}

 	public void setLAST_UPDATE_DATE_START(java.util.Date LAST_UPDATE_DATE_START){
 	     this.LAST_UPDATE_DATE_START=LAST_UPDATE_DATE_START;
 	}
 	
 	public java.util.Date getLAST_UPDATE_DATE_END(){
 		return 	LAST_UPDATE_DATE_END;
 	}
 	
 	public void setLAST_UPDATE_DATE_END(java.util.Date LAST_UPDATE_DATE_END){
 	     this.LAST_UPDATE_DATE_END=LAST_UPDATE_DATE_END;
 	}
 	 	

 	public String getLAST_UPDATED_BY(){
 		return 	LAST_UPDATED_BY;
 	}

 	public void setLAST_UPDATED_BY(String LAST_UPDATED_BY){
 	     this.LAST_UPDATED_BY=LAST_UPDATED_BY;
 	}
 	
 	 	

 	public String getORG_IDENTITY(){
 		return 	ORG_IDENTITY;
 	}

 	public void setORG_IDENTITY(String ORG_IDENTITY){
 	     this.ORG_IDENTITY=ORG_IDENTITY;
 	}
 	
 	 	

    public String getACTIVITYALIAS_() {
        return ACTIVITYALIAS_;
    }

    public void setACTIVITYALIAS_(String ACTIVITYALIAS_) {
        this.ACTIVITYALIAS_ = ACTIVITYALIAS_;
    }

    public String getBUSINESSSTATE_() {
        return BUSINESSSTATE_;
    }

    public void setBUSINESSSTATE_(String BUSINESSSTATE_) {
        this.BUSINESSSTATE_ = BUSINESSSTATE_;
    }

	public String getPROCESSINSTANCEID() {
		return PROCESSINSTANCEID;
	}

	public void setPROCESSINSTANCEID(String PROCESSINSTANCEID) {
		this.PROCESSINSTANCEID = PROCESSINSTANCEID;
	}

    public String getFlowdetail() {
        return flowdetail;
    }

    public void setFlowdetail(String flowdetail) {
        this.flowdetail = flowdetail;
    }

	public String getCurrUserId() {
		return currUserId;
	}

	public void setCurrUserId(String currUserId) {
		this.currUserId = currUserId;
	}

	public String getBpmState() {
		return bpmState;
	}

	public void setBpmState(String bpmState) {
		this.bpmState = bpmState;
	}

	public String getLogFormName() {
		if(super.logFormName==null||super.logFormName.equals("")){
			return "test";
		}else{
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if(super.logTitle==null||super.logTitle.equals("")){
			return "test";
		}else{
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
