package avicit.tradeunion.dacaremedicineitem.dto;

import avicit.platform6.core.annotation.log.FieldRemark;
import avicit.platform6.core.annotation.log.LogField;
import avicit.platform6.core.annotation.log.PojoRemark;
import avicit.platform6.core.domain.BeanDTO;
import avicit.platform6.core.properties.PlatformConstant;

import javax.persistence.Id;

@PojoRemark(table="DA_CARE_MEDICINE_ITEM", object="DaCareMedicineItemDTO", name="XX爱心医疗子表")
public class DaCareMedicineItemDTO extends BeanDTO {
        private static final long serialVersionUID = 1L;

        /**
         * 主键
         */
        @Id
        @LogField
        @FieldRemark(column="ID", field="id", name="主键")
        private String id;

        /**
         * 治疗医院
         */
        @FieldRemark(column="HOSPITAL", field="hospital", name="治疗医院")
        private String hospital;

        /**
         * 住院日期开始
         */
        @FieldRemark(column="INHOSP_DATE", field="inhospDate", name="住院日期开始")
        private java.util.Date inhospDate;

        /**
         * 住院日期开始起
         */
        private java.util.Date inhospDateBegin;

        /**
         * 住院日期开始止
         */
        private java.util.Date inhospDateEnd;

        /**
         * 住院日期结束
         */
        @FieldRemark(column="OUTHOSP_DATE", field="outhospDate", name="住院日期结束")
        private java.util.Date outhospDate;

        /**
         * 住院日期结束起
         */
        private java.util.Date outhospDateBegin;

        /**
         * 住院日期结束止
         */
        private java.util.Date outhospDateEnd;


        /**
         * 医疗费总金额
         */
        @FieldRemark(column="HEALTH_EXPENSE", field="healthExpense", name="医疗费总金额")
        private float healthExpense;

        /**
         * 统筹基金支付
         */
        @FieldRemark(column="OVERALL_EXPENSE", field="overallExpense", name="统筹基金支付")
        private float overallExpense;



        /**
         * 创建时间起
         */
        private java.util.Date creationDateBegin;

        /**
         * 创建时间止
         */
        private java.util.Date creationDateEnd;

        /**
         * 最后修改时间起
         */
        private java.util.Date lastUpdateDateBegin;

        /**
         * 最后修改时间止
         */
        private java.util.Date lastUpdateDateEnd;

        /**
         * 组织标识
         */
        @FieldRemark(column="ORG_IDENTITY", field="orgIdentity", name="组织标识")
        private String orgIdentity;

        /**
         * 创建部门
         */
        @FieldRemark(column="CREATED_DEPT", field="createdDept", name="创建部门")
        private String createdDept;

        /**
         * 扩展字段
         */
        @FieldRemark(column="ATTRIBUTE_01", field="attribute01", name="扩展字段")
        private String attribute01;

        /**
         * 扩展字段
         */
        @FieldRemark(column="ATTRIBUTE_02", field="attribute02", name="扩展字段")
        private String attribute02;

        /**
         * 扩展字段
         */
        @FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="扩展字段")
        private String attribute03;

        /**
         * 扩展字段
         */
        @FieldRemark(column="ATTRIBUTE_04", field="attribute04", name="扩展字段")
        private String attribute04;

        /**
         * 扩展字段
         */
        @FieldRemark(column="ATTRIBUTE_05", field="attribute05", name="扩展字段")
        private String attribute05;

        /**
         * 扩展字段
         */
        @FieldRemark(column="ATTRIBUTE_06", field="attribute06", name="扩展字段")
        private String attribute06;

        /**
         * 扩展字段
         */
        @FieldRemark(column="ATTRIBUTE_07", field="attribute07", name="扩展字段")
        private String attribute07;

        /**
         * 扩展字段
         */
        @FieldRemark(column="ATTRIBUTE_08", field="attribute08", name="扩展字段")
        private String attribute08;

        /**
         * 扩展字段
         */
        @FieldRemark(column="ATTRIBUTE_09", field="attribute09", name="扩展字段")
        private String attribute09;

        /**
         * 扩展字段
         */
        @FieldRemark(column="ATTRIBUTE_10", field="attribute10", name="扩展字段")
        private String attribute10;
    @FieldRemark(column="FK_ID", field="fkId", name="外键")
    private String fkId;



        public String getId(){
            return id;
        }

        public void setId(String id){
            this.id = id;
        }



        public String getHospital(){
            return hospital;
        }

        public void setHospital(String hospital){
            this.hospital = hospital;
        }

        public java.util.Date getInhospDate(){
            return inhospDate;
        }

        public void setInhospDate(java.util.Date inhospDate){
            this.inhospDate = inhospDate;
        }

        public java.util.Date getInhospDateBegin(){
            return inhospDateBegin;
        }

        public void setInhospDateBegin(java.util.Date inhospDateBegin){
            this.inhospDateBegin = inhospDateBegin;
        }

        public java.util.Date getInhospDateEnd(){
            return inhospDateEnd;
        }

        public void setInhospDateEnd(java.util.Date inhospDateEnd){
            this.inhospDateEnd = inhospDateEnd;
        }

        public java.util.Date getOuthospDate(){
            return outhospDate;
        }

        public void setOuthospDate(java.util.Date outhospDate){
            this.outhospDate = outhospDate;
        }

        public java.util.Date getOuthospDateBegin(){
            return outhospDateBegin;
        }

        public void setOuthospDateBegin(java.util.Date outhospDateBegin){
            this.outhospDateBegin = outhospDateBegin;
        }

        public java.util.Date getOuthospDateEnd(){
            return outhospDateEnd;
        }

        public void setOuthospDateEnd(java.util.Date outhospDateEnd){
            this.outhospDateEnd = outhospDateEnd;
        }



        public float getHealthExpense(){
            return healthExpense;
        }

        public void setHealthExpense(float healthExpense){
            this.healthExpense = healthExpense;
        }

        public float getOverallExpense(){
            return overallExpense;
        }

        public void setOverallExpense(float overallExpense){
            this.overallExpense = overallExpense;
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

        public String getOrgIdentity(){
            return orgIdentity;
        }

        public void setOrgIdentity(String orgIdentity){
            this.orgIdentity = orgIdentity;
        }

        public String getCreatedDept(){
            return createdDept;
        }

        public void setCreatedDept(String createdDept){
            this.createdDept = createdDept;
        }

        public String getAttribute01(){
            return attribute01;
        }

        public void setAttribute01(String attribute01){
            this.attribute01 = attribute01;
        }

        public String getAttribute02(){
            return attribute02;
        }

        public void setAttribute02(String attribute02){
            this.attribute02 = attribute02;
        }

        public String getAttribute03(){
            return attribute03;
        }

        public void setAttribute03(String attribute03){
            this.attribute03 = attribute03;
        }

        public String getAttribute04(){
            return attribute04;
        }

        public void setAttribute04(String attribute04){
            this.attribute04 = attribute04;
        }

        public String getAttribute05(){
            return attribute05;
        }

        public void setAttribute05(String attribute05){
            this.attribute05 = attribute05;
        }

        public String getAttribute06(){
            return attribute06;
        }

        public void setAttribute06(String attribute06){
            this.attribute06 = attribute06;
        }

        public String getAttribute07(){
            return attribute07;
        }

        public void setAttribute07(String attribute07){
            this.attribute07 = attribute07;
        }

        public String getAttribute08(){
            return attribute08;
        }

        public void setAttribute08(String attribute08){
            this.attribute08 = attribute08;
        }

        public String getAttribute09(){
            return attribute09;
        }

        public void setAttribute09(String attribute09){
            this.attribute09 = attribute09;
        }

        public String getAttribute10(){
            return attribute10;
        }

        public void setAttribute10(String attribute10){
            this.attribute10 = attribute10;
        }
            public String getFkId(){
                return fkId;
            }

            public void setFkId(String fkId){
                this.fkId = fkId;
            }


        @Override
        public String getLogFormName() {
            if (super.logFormName == null || "".equals(super.logFormName)) {
                return "XX爱心医疗子表";
            }else{
                return super.logFormName;
            }
        }

        @Override
        public String getLogTitle() {
            if (super.logTitle == null || "".equals(super.logTitle)) {
                return "XX爱心医疗子表";
            }else{
                return super.logTitle;
            }
        }

        @Override
        public PlatformConstant.LogType getLogType() {
            if (super.logType == null || "".equals(super.logType)) {
                return PlatformConstant.LogType.module_operate;
            } else {
                return super.logType;
            }
        }


    }
