package avicit.tu.fixedassets.dynfixedassetsledger.dto;

import javax.persistence.Id;
import avicit.platform6.core.domain.BeanDTO;
import com.fasterxml.jackson.annotation.JsonFormat;
import avicit.platform6.core.properties.PlatformConstant.LogType;
import avicit.platform6.core.annotation.log.LogField;
import avicit.platform6.core.annotation.log.FieldRemark;
import avicit.platform6.core.annotation.log.PojoRemark;

/**
 * @金航数码科技有限责任公司
 * @作者：文冲
 * @邮箱：13022927887@163.com
 * @创建时间： 2025-04-24 10:09
 * @类说明：DYN_FIXED_ASSETS_LEDGERDto
 * @修改记录：
 */
@PojoRemark(table="DYN_FIXED_ASSETS_LEDGER", object="DynFixedAssetsLedgerDTO", name="DYN_FIXED_ASSETS_LEDGER")
public class DynFixedAssetsLedgerDTO extends BeanDTO{
	private static final long serialVersionUID = 1L;

	/**
	 * 资产单位
	 */
	@FieldRemark(column="ASSET_DW", field="assetDw", name="资产单位", dataType="lookup", lookupType="GUILD_ASSETS_DY_TYPE")
	private java.lang.String assetDw;
	private java.lang.String assetDwName;

	/**
	 * 房间号
	 */
	@FieldRemark(column="TY_SB_ROOM", field="tySbRoom", name="房间号")
	private java.lang.String tySbRoom;

	/**
	 * 资产品牌
	 */
	@FieldRemark(column="ASSET_BRAND", field="assetBrand", name="资产品牌")
	private java.lang.String assetBrand;

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
	 * 注册表序列号
	 */
	@FieldRemark(column="OFFICE_REGIS_NUMBER", field="officeRegisNumber", name="注册表序列号")
	private java.lang.String officeRegisNumber;

	/**
	 * 设备用途
	 */
	@FieldRemark(column="TY_SB_YONGT", field="tySbYongt", name="设备用途")
	private java.lang.String tySbYongt;

	/**
	 * ID
	 */
	@Id
	@LogField
	@FieldRemark(column="ID", field="id", name="ID")
	private java.lang.String id;

	/**
	 * 入账日期
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="INSERT_DATE", field="insertDate", name="入账日期")
	private java.util.Date insertDate;

	/**
	 * 入账日期起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date insertDateBegin;

	/**
	 * 入账日期止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date insertDateEnd;

	/**
	 * 经办人
	 */
	@FieldRemark(column="APPLY_USER", field="applyUser", name="经办人")
	private java.lang.String applyUser;

	/**
	 * 原值
	 */
	@FieldRemark(column="ORIGINAL_VALUE", field="originalValue", name="原值")
	private java.lang.Double originalValue;

	/**
	 * 设备出厂日期
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="TY_SB_CC_DATE", field="tySbCcDate", name="设备出厂日期")
	private java.util.Date tySbCcDate;

	/**
	 * 设备出厂日期起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date tySbCcDateBegin;

	/**
	 * 设备出厂日期止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date tySbCcDateEnd;

	/**
	 * 所属科室
	 */
	@FieldRemark(column="TY_SB_CLASS", field="tySbClass", name="所属科室")
	private java.lang.String tySbClass;

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
	 * 台账显示MAC地址
	 */
	@FieldRemark(column="PC_MAC_ADDRESS", field="pcMacAddress", name="台账显示MAC地址")
	private java.lang.String pcMacAddress;

	/**
	 * 资产使用单位
	 */
	@FieldRemark(column="USED_DEPT", field="usedDept", name="资产使用单位")
	private java.lang.String usedDept;

	/**
	 * 关联计算机编号
	 */
	@FieldRemark(column="OFFICE_COMPUTER_NUMBER", field="officeComputerNumber", name="关联计算机编号")
	private java.lang.String officeComputerNumber;

	/**
	 * 资产名称
	 */
	@FieldRemark(column="ASSET_NAEM", field="assetNaem", name="资产名称")
	private java.lang.String assetNaem;

	/**
	 * 设备编号
	 */
	@FieldRemark(column="TY_SB_CODE", field="tySbCode", name="设备编号")
	private java.lang.String tySbCode;

	/**
	 * 操作系统版本
	 */
	@FieldRemark(column="PC_WINDOWS_VERSION", field="pcWindowsVersion", name="操作系统版本")
	private java.lang.String pcWindowsVersion;

	/**
	 * 责任人
	 */
	@FieldRemark(column="ZR_USER", field="zrUser", name="责任人", dataType="user")
	private java.lang.String zrUser;

	/**
	 * 责任人显示字段
	 */
	private java.lang.String zrUserAlias;

	/**
	 * 设备状态
	 */
	@FieldRemark(column="TY_SB_STATUS", field="tySbStatus", name="设备状态")
	private java.lang.String tySbStatus;

	/**
	 * MAC地址
	 */
	@FieldRemark(column="OFFICE_MAC_ADDRESS", field="officeMacAddress", name="MAC地址")
	private java.lang.String officeMacAddress;

	/**
	 * 工会ID
	 */
	@FieldRemark(column="GUILD_ID", field="guildId", name="工会ID")
	private java.lang.String guildId;

	/**
	 * 折旧月份
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="DEPRE_DATE", field="depreDate", name="折旧月份")
	private java.util.Date depreDate;

	/**
	 * 折旧月份起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date depreDateBegin;

	/**
	 * 折旧月份止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date depreDateEnd;

	/**
	 * 设备型号
	 */
	@FieldRemark(column="TY_SB_XINGH", field="tySbXingh", name="设备型号")
	private java.lang.String tySbXingh;

	/**
	 * 设备密级
	 */
	@FieldRemark(column="TY_SB_SECRET_LEVEL", field="tySbSecretLevel", name="设备密级", dataType="lookup", lookupType="GUILD_ASSETS_SECRET_LEVEL")
	private java.lang.String tySbSecretLevel;
	private java.lang.String tySbSecretLevelName;

	/**
	 * 资产明细
	 */
	@FieldRemark(column="ASSET_DETAILS", field="assetDetails", name="资产明细")
	private java.lang.String assetDetails;

	/**
	 * 设备品牌
	 */
	@FieldRemark(column="TY_SB_BRAND", field="tySbBrand", name="设备品牌")
	private java.lang.String tySbBrand;

	/**
	 * 资产使用单位ID
	 */
	@FieldRemark(column="USED_DEPT_ID", field="usedDeptId", name="资产使用单位ID")
	private java.lang.String usedDeptId;

	/**
	 * 设备名称
	 */
	@FieldRemark(column="TY_SB_NAME", field="tySbName", name="设备名称")
	private java.lang.String tySbName;

	/**
	 * 系统安装时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="PC_INSTALL_DATE", field="pcInstallDate", name="系统安装时间")
	private java.util.Date pcInstallDate;

	/**
	 * 系统安装时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date pcInstallDateBegin;

	/**
	 * 系统安装时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date pcInstallDateEnd;

	/**
	 * 资产类别
	 */
	@FieldRemark(column="ASSET_TYPE", field="assetType", name="资产类别", dataType="lookup", lookupType="GUILD_ASSETS_TYPE")
	private java.lang.String assetType;
	private java.lang.String assetTypeName;

	/**
	 * 放置地点
	 */
	@FieldRemark(column="TY_SB_ADDRESS", field="tySbAddress", name="放置地点")
	private java.lang.String tySbAddress;

	/**
	 * 启用时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="TY_SB_QY_DATE", field="tySbQyDate", name="启用时间")
	private java.util.Date tySbQyDate;

	/**
	 * 启用时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date tySbQyDateBegin;

	/**
	 * 启用时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date tySbQyDateEnd;

	/**
	 * 责任人
	 */
	@FieldRemark(column="TY_SB_ZE_USER", field="tySbZeUser", name="责任人")
	private java.lang.String tySbZeUser;

	/**
	 * 存放地点
	 */
	@FieldRemark(column="STORAGE_PLACE", field="storagePlace", name="存放地点", dataType="lookup", lookupType="GUILD_ASSETS_STORAGE_PLACE")
	private java.lang.String storagePlace;
	private java.lang.String storagePlaceName;

	/**
	 * 设备出厂编号
	 */
	@FieldRemark(column="TY_SB_CC_CODE", field="tySbCcCode", name="设备出厂编号")
	private java.lang.String tySbCcCode;

	/**
	 * 台账显示硬盘序列号
	 */
	@FieldRemark(column="PC_DISK_NUMBER", field="pcDiskNumber", name="台账显示硬盘序列号")
	private java.lang.String pcDiskNumber;

	/**
	 * 资产数量
	 */
	@FieldRemark(column="ASSET_NUM", field="assetNum", name="资产数量")
	private java.lang.Long assetNum;

	/**
	 * 员工编码
	 */
	@FieldRemark(column="OFFICE_USER_CODE", field="officeUserCode", name="员工编码")
	private java.lang.String officeUserCode;

	/**
	 * IP
	 */
	@FieldRemark(column="TY_SB_IP", field="tySbIp", name="IP")
	private java.lang.String tySbIp;

	/**
	 * 所属部门
	 */
	@FieldRemark(column="TY_SB_DEPT", field="tySbDept", name="所属部门")
	private java.lang.String tySbDept;

	/**
	 * 资产编码
	 */
	@FieldRemark(column="ASSET_CODE", field="assetCode", name="资产编码")
	private java.lang.String assetCode;

	/**
	 * 设备类别
	 */
	@FieldRemark(column="TY_SB_TYPE", field="tySbType", name="设备类别")
	private java.lang.String tySbType;

	/**
	 * 网络类型
	 */
	@FieldRemark(column="TY_SB_NET_TYPE", field="tySbNetType", name="网络类型")
	private java.lang.String tySbNetType;

	/**
	 * 序号
	 */
	@FieldRemark(column="XH", field="xh", name="序号")
	private java.lang.Long xh;

	/**
	 * 经办人ID
	 */
	@FieldRemark(column="APPLY_USER_ID", field="applyUserId", name="经办人ID", dataType="user")
	private java.lang.String applyUserId;

	/**
	 * 经办人ID显示字段
	 */
	private java.lang.String applyUserIdAlias;

	/**
	 * 领用人
	 */
	@FieldRemark(column="APPLY_LY_USER_ID", field="applyLyUserId", name="领用人")
	private java.lang.String applyLyUserId;

	/**
	 * 现值
	 */
	@FieldRemark(column="CURRENT_VALUE", field="currentValue", name="现值")
	private java.lang.Double currentValue;

	/**
	 * 工会名称
	 */
	@FieldRemark(column="GUILD_NAME", field="guildName", name="工会名称")
	private java.lang.String guildName;

	/**
	 * 型号规格
	 */
	@FieldRemark(column="ASSET_XHGG", field="assetXhgg", name="型号规格")
	private java.lang.String assetXhgg;

	/**
	 * 数据状态
	 */
	@FieldRemark(column="DATA_STATUS", field="dataStatus", name="数据状态")
	private java.lang.String dataStatus;

	/**
	 * 备注
	 */
	@FieldRemark(column="REMARK", field="remark", name="备注")
	private java.lang.String remark;

	/**
	 * 新增类型
	 */
	@FieldRemark(column="INSERT_TYPE", field="insertType", name="新增类型")
	private java.lang.String insertType;

	/**
	 * 备用字段01
	 */
	@FieldRemark(column="ATTRIBUTE_01", field="attribute01", name="备用字段01")
	private java.lang.String attribute01;

	/**
	 * 备用字段02
	 */
	@FieldRemark(column="ATTRIBUTE_02", field="attribute02", name="备用字段02")
	private java.lang.String attribute02;

	/**
	 * 备用字段03
	 */
	@FieldRemark(column="ATTRIBUTE_03", field="attribute03", name="备用字段03")
	private java.lang.String attribute03;

	/**
	 * 备用字段04
	 */
	@FieldRemark(column="ATTRIBUTE_04", field="attribute04", name="备用字段04")
	private java.lang.String attribute04;

	/**
	 * 备用字段05
	 */
	@FieldRemark(column="ATTRIBUTE_05", field="attribute05", name="备用字段05")
	private java.lang.String attribute05;

	/**
	 * 备用字段06
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="ATTRIBUTE_06", field="attribute06", name="备用字段06")
	private java.util.Date attribute06;

	/**
	 * 备用字段06起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attribute06Begin;

	/**
	 * 备用字段06止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date attribute06End;

	/**
	 * 所属年度
	 */
	@FieldRemark(column="YEAR_TO_BELONG", field="yearToBelong", name="所属年度")
	private java.lang.String yearToBelong;
	
	
	/**
	 * 调入时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="INTO_DATE", field="intotDate", name="调入日期")
	private java.util.Date intoDate;

	/**
	 * 调入时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date intoDateBegin;

	/**
	 * 调入时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date intoDateEnd;
	
	
	/**
	 * 调出时间
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	@FieldRemark(column="OUT_DATE", field="outDate", name="调出日期")
	private java.util.Date outDate;

	/**
	 * 调出时间起
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date outDateBegin;

	/**
	 * 调出时间止
	 */
	@JsonFormat(pattern = "yyyy-MM-dd",timezone="GMT+8")
	private java.util.Date outDateEnd;
	
	

    public java.lang.String getAssetDw(){
		return assetDw;
	}

	public void setAssetDw(java.lang.String assetDw){
		this.assetDw = assetDw;
	}

	public java.lang.String getAssetDwName(){
		return assetDwName;
	}

	public void setAssetDwName(java.lang.String assetDwName){
		this.assetDwName = assetDwName;
	}

	public java.lang.String getTySbRoom(){
		return tySbRoom;
	}

	public void setTySbRoom(java.lang.String tySbRoom){
		this.tySbRoom = tySbRoom;
	}

	public java.lang.String getAssetBrand(){
		return assetBrand;
	}

	public void setAssetBrand(java.lang.String assetBrand){
		this.assetBrand = assetBrand;
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

	public java.lang.String getOfficeRegisNumber(){
		return officeRegisNumber;
	}

	public void setOfficeRegisNumber(java.lang.String officeRegisNumber){
		this.officeRegisNumber = officeRegisNumber;
	}

	public java.lang.String getTySbYongt(){
		return tySbYongt;
	}

	public void setTySbYongt(java.lang.String tySbYongt){
		this.tySbYongt = tySbYongt;
	}

	public java.lang.String getId(){
		return id;
	}

	public void setId(java.lang.String id){
		this.id = id;
	}

	public java.util.Date getInsertDate(){
		return insertDate;
	}

	public void setInsertDate(java.util.Date insertDate){
		this.insertDate = insertDate;
	}

	public java.util.Date getInsertDateBegin(){
		return insertDateBegin;
	}

	public void setInsertDateBegin(java.util.Date insertDateBegin){
		this.insertDateBegin = insertDateBegin;
	}

	public java.util.Date getInsertDateEnd(){
		return insertDateEnd;
	}

	public void setInsertDateEnd(java.util.Date insertDateEnd){
		this.insertDateEnd = insertDateEnd;
	}

	public java.lang.String getApplyUser(){
		return applyUser;
	}

	public void setApplyUser(java.lang.String applyUser){
		this.applyUser = applyUser;
	}

	public java.lang.Double getOriginalValue(){
		return originalValue;
	}

	public void setOriginalValue(java.lang.Double originalValue){
		this.originalValue = originalValue;
	}

	public java.util.Date getTySbCcDate(){
		return tySbCcDate;
	}

	public void setTySbCcDate(java.util.Date tySbCcDate){
		this.tySbCcDate = tySbCcDate;
	}

	public java.util.Date getTySbCcDateBegin(){
		return tySbCcDateBegin;
	}

	public void setTySbCcDateBegin(java.util.Date tySbCcDateBegin){
		this.tySbCcDateBegin = tySbCcDateBegin;
	}

	public java.util.Date getTySbCcDateEnd(){
		return tySbCcDateEnd;
	}

	public void setTySbCcDateEnd(java.util.Date tySbCcDateEnd){
		this.tySbCcDateEnd = tySbCcDateEnd;
	}

	public java.lang.String getTySbClass(){
		return tySbClass;
	}

	public void setTySbClass(java.lang.String tySbClass){
		this.tySbClass = tySbClass;
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

	public java.lang.String getPcMacAddress(){
		return pcMacAddress;
	}

	public void setPcMacAddress(java.lang.String pcMacAddress){
		this.pcMacAddress = pcMacAddress;
	}

	public java.lang.String getUsedDept(){
		return usedDept;
	}

	public void setUsedDept(java.lang.String usedDept){
		this.usedDept = usedDept;
	}

	public java.lang.String getOfficeComputerNumber(){
		return officeComputerNumber;
	}

	public void setOfficeComputerNumber(java.lang.String officeComputerNumber){
		this.officeComputerNumber = officeComputerNumber;
	}

	public java.lang.String getAssetNaem(){
		return assetNaem;
	}

	public void setAssetNaem(java.lang.String assetNaem){
		this.assetNaem = assetNaem;
	}

	public java.lang.String getTySbCode(){
		return tySbCode;
	}

	public void setTySbCode(java.lang.String tySbCode){
		this.tySbCode = tySbCode;
	}

	public java.lang.String getPcWindowsVersion(){
		return pcWindowsVersion;
	}

	public void setPcWindowsVersion(java.lang.String pcWindowsVersion){
		this.pcWindowsVersion = pcWindowsVersion;
	}

	public java.lang.String getZrUser(){
		return zrUser;
	}

	public void setZrUser(java.lang.String zrUser){
		this.zrUser = zrUser;
	}

	public java.lang.String getZrUserAlias(){
		return zrUserAlias;
	}

	public void setZrUserAlias(java.lang.String zrUserAlias){
		this.zrUserAlias = zrUserAlias;
	}

	public java.lang.String getTySbStatus(){
		return tySbStatus;
	}

	public void setTySbStatus(java.lang.String tySbStatus){
		this.tySbStatus = tySbStatus;
	}

	public java.lang.String getOfficeMacAddress(){
		return officeMacAddress;
	}

	public void setOfficeMacAddress(java.lang.String officeMacAddress){
		this.officeMacAddress = officeMacAddress;
	}

	public java.lang.String getGuildId(){
		return guildId;
	}

	public void setGuildId(java.lang.String guildId){
		this.guildId = guildId;
	}

	public java.util.Date getDepreDate(){
		return depreDate;
	}

	public void setDepreDate(java.util.Date depreDate){
		this.depreDate = depreDate;
	}

	public java.util.Date getDepreDateBegin(){
		return depreDateBegin;
	}

	public void setDepreDateBegin(java.util.Date depreDateBegin){
		this.depreDateBegin = depreDateBegin;
	}

	public java.util.Date getDepreDateEnd(){
		return depreDateEnd;
	}

	public void setDepreDateEnd(java.util.Date depreDateEnd){
		this.depreDateEnd = depreDateEnd;
	}

	public java.lang.String getTySbXingh(){
		return tySbXingh;
	}

	public void setTySbXingh(java.lang.String tySbXingh){
		this.tySbXingh = tySbXingh;
	}

    public java.lang.String getTySbSecretLevel(){
		return tySbSecretLevel;
	}

	public void setTySbSecretLevel(java.lang.String tySbSecretLevel){
		this.tySbSecretLevel = tySbSecretLevel;
	}

	public java.lang.String getTySbSecretLevelName(){
		return tySbSecretLevelName;
	}

	public void setTySbSecretLevelName(java.lang.String tySbSecretLevelName){
		this.tySbSecretLevelName = tySbSecretLevelName;
	}

	public java.lang.String getAssetDetails(){
		return assetDetails;
	}

	public void setAssetDetails(java.lang.String assetDetails){
		this.assetDetails = assetDetails;
	}

	public java.lang.String getTySbBrand(){
		return tySbBrand;
	}

	public void setTySbBrand(java.lang.String tySbBrand){
		this.tySbBrand = tySbBrand;
	}

	public java.lang.String getUsedDeptId(){
		return usedDeptId;
	}

	public void setUsedDeptId(java.lang.String usedDeptId){
		this.usedDeptId = usedDeptId;
	}

	public java.lang.String getTySbName(){
		return tySbName;
	}

	public void setTySbName(java.lang.String tySbName){
		this.tySbName = tySbName;
	}

	public java.util.Date getPcInstallDate(){
		return pcInstallDate;
	}

	public void setPcInstallDate(java.util.Date pcInstallDate){
		this.pcInstallDate = pcInstallDate;
	}

	public java.util.Date getPcInstallDateBegin(){
		return pcInstallDateBegin;
	}

	public void setPcInstallDateBegin(java.util.Date pcInstallDateBegin){
		this.pcInstallDateBegin = pcInstallDateBegin;
	}

	public java.util.Date getPcInstallDateEnd(){
		return pcInstallDateEnd;
	}

	public void setPcInstallDateEnd(java.util.Date pcInstallDateEnd){
		this.pcInstallDateEnd = pcInstallDateEnd;
	}

    public java.lang.String getAssetType(){
		return assetType;
	}

	public void setAssetType(java.lang.String assetType){
		this.assetType = assetType;
	}

	public java.lang.String getAssetTypeName(){
		return assetTypeName;
	}

	public void setAssetTypeName(java.lang.String assetTypeName){
		this.assetTypeName = assetTypeName;
	}

	public java.lang.String getTySbAddress(){
		return tySbAddress;
	}

	public void setTySbAddress(java.lang.String tySbAddress){
		this.tySbAddress = tySbAddress;
	}

	public java.util.Date getTySbQyDate(){
		return tySbQyDate;
	}

	public void setTySbQyDate(java.util.Date tySbQyDate){
		this.tySbQyDate = tySbQyDate;
	}

	public java.util.Date getTySbQyDateBegin(){
		return tySbQyDateBegin;
	}

	public void setTySbQyDateBegin(java.util.Date tySbQyDateBegin){
		this.tySbQyDateBegin = tySbQyDateBegin;
	}

	public java.util.Date getTySbQyDateEnd(){
		return tySbQyDateEnd;
	}

	public void setTySbQyDateEnd(java.util.Date tySbQyDateEnd){
		this.tySbQyDateEnd = tySbQyDateEnd;
	}

	public java.lang.String getTySbZeUser(){
		return tySbZeUser;
	}

	public void setTySbZeUser(java.lang.String tySbZeUser){
		this.tySbZeUser = tySbZeUser;
	}

    public java.lang.String getStoragePlace(){
		return storagePlace;
	}

	public void setStoragePlace(java.lang.String storagePlace){
		this.storagePlace = storagePlace;
	}

	public java.lang.String getStoragePlaceName(){
		return storagePlaceName;
	}

	public void setStoragePlaceName(java.lang.String storagePlaceName){
		this.storagePlaceName = storagePlaceName;
	}

	public java.lang.String getTySbCcCode(){
		return tySbCcCode;
	}

	public void setTySbCcCode(java.lang.String tySbCcCode){
		this.tySbCcCode = tySbCcCode;
	}

	public java.lang.String getPcDiskNumber(){
		return pcDiskNumber;
	}

	public void setPcDiskNumber(java.lang.String pcDiskNumber){
		this.pcDiskNumber = pcDiskNumber;
	}

	public java.lang.Long getAssetNum(){
		return assetNum;
	}

	public void setAssetNum(java.lang.Long assetNum){
		this.assetNum = assetNum;
	}

	public java.lang.String getOfficeUserCode(){
		return officeUserCode;
	}

	public void setOfficeUserCode(java.lang.String officeUserCode){
		this.officeUserCode = officeUserCode;
	}

	public java.lang.String getTySbIp(){
		return tySbIp;
	}

	public void setTySbIp(java.lang.String tySbIp){
		this.tySbIp = tySbIp;
	}

	public java.lang.String getTySbDept(){
		return tySbDept;
	}

	public void setTySbDept(java.lang.String tySbDept){
		this.tySbDept = tySbDept;
	}

	public java.lang.String getAssetCode(){
		return assetCode;
	}

	public void setAssetCode(java.lang.String assetCode){
		this.assetCode = assetCode;
	}

	public java.lang.String getTySbType(){
		return tySbType;
	}

	public void setTySbType(java.lang.String tySbType){
		this.tySbType = tySbType;
	}

	public java.lang.String getTySbNetType(){
		return tySbNetType;
	}

	public void setTySbNetType(java.lang.String tySbNetType){
		this.tySbNetType = tySbNetType;
	}

	public java.lang.Long getXh(){
		return xh;
	}

	public void setXh(java.lang.Long xh){
		this.xh = xh;
	}

	public java.lang.String getApplyUserId(){
		return applyUserId;
	}

	public void setApplyUserId(java.lang.String applyUserId){
		this.applyUserId = applyUserId;
	}

	public java.lang.String getApplyUserIdAlias(){
		return applyUserIdAlias;
	}

	public void setApplyUserIdAlias(java.lang.String applyUserIdAlias){
		this.applyUserIdAlias = applyUserIdAlias;
	}

	public java.lang.String getApplyLyUserId(){
		return applyLyUserId;
	}

	public void setApplyLyUserId(java.lang.String applyLyUserId){
		this.applyLyUserId = applyLyUserId;
	}

	public java.lang.Double getCurrentValue(){
		return currentValue;
	}

	public void setCurrentValue(java.lang.Double currentValue){
		this.currentValue = currentValue;
	}

	public java.lang.String getGuildName(){
		return guildName;
	}

	public void setGuildName(java.lang.String guildName){
		this.guildName = guildName;
	}

	public java.lang.String getAssetXhgg(){
		return assetXhgg;
	}

	public void setAssetXhgg(java.lang.String assetXhgg){
		this.assetXhgg = assetXhgg;
	}

	public java.lang.String getDataStatus(){
		return dataStatus;
	}

	public void setDataStatus(java.lang.String dataStatus){
		this.dataStatus = dataStatus;
	}

	public java.lang.String getRemark(){
		return remark;
	}

	public void setRemark(java.lang.String remark){
		this.remark = remark;
	}

	public java.lang.String getInsertType(){
		return insertType;
	}

	public void setInsertType(java.lang.String insertType){
		this.insertType = insertType;
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

	public java.util.Date getAttribute06(){
		return attribute06;
	}

	public void setAttribute06(java.util.Date attribute06){
		this.attribute06 = attribute06;
	}

	public java.util.Date getAttribute06Begin(){
		return attribute06Begin;
	}

	public void setAttribute06Begin(java.util.Date attribute06Begin){
		this.attribute06Begin = attribute06Begin;
	}

	public java.util.Date getAttribute06End(){
		return attribute06End;
	}

	public void setAttribute06End(java.util.Date attribute06End){
		this.attribute06End = attribute06End;
	}

	public java.lang.String getYearToBelong(){
		return yearToBelong;
	}

	public void setYearToBelong(java.lang.String yearToBelong){
		this.yearToBelong = yearToBelong;
	}
	
	public java.util.Date getIntoDate() {
		return intoDate;
	}

	public void setIntoDate(java.util.Date intoDate) {
		this.intoDate = intoDate;
	}

	public java.util.Date getIntoDateBegin() {
		return intoDateBegin;
	}

	public void setIntoDateBegin(java.util.Date intoDateBegin) {
		this.intoDateBegin = intoDateBegin;
	}

	public java.util.Date getIntoDateEnd() {
		return intoDateEnd;
	}

	public void setIntoDateEnd(java.util.Date intoDateEnd) {
		this.intoDateEnd = intoDateEnd;
	}

	public java.util.Date getOutDate() {
		return outDate;
	}

	public void setOutDate(java.util.Date outDate) {
		this.outDate = outDate;
	}

	public java.util.Date getOutDateBegin() {
		return outDateBegin;
	}

	public void setOutDateBegin(java.util.Date outDateBegin) {
		this.outDateBegin = outDateBegin;
	}

	public java.util.Date getOutDateEnd() {
		return outDateEnd;
	}

	public void setOutDateEnd(java.util.Date outDateEnd) {
		this.outDateEnd = outDateEnd;
	}

	@Override
	public String getLogFormName() {
		if (super.logFormName == null || "".equals(super.logFormName)) {
			return "DYN_FIXED_ASSETS_LEDGER";
		}else{
			return super.logFormName;
		}
	}

	@Override
	public String getLogTitle() {
		if (super.logTitle == null || "".equals(super.logTitle)) {
			return "DYN_FIXED_ASSETS_LEDGER";
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