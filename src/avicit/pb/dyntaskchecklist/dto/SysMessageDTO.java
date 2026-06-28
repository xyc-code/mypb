package avicit.pb.dyntaskchecklist.dto;

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
 * @邮箱：请填写 @创建时间： 2023-05-23 13:54
 * @类说明：系统消息表，用于在系统中保存提示消息 @修改记录：
 */
@PojoRemark(table = "sys_message", object = "SysMessageDTO", name = "系统消息表，用于在系统中保存提示消息")
public class SysMessageDTO extends BeanDTO {
	private static final long serialVersionUID = 1L;

	@Id
	@LogField

	@FieldRemark(column = "id", field = "id", name = "主键")
	/*
	 * 主键
	 */
	private java.lang.String id;
	@LogField

	@FieldRemark(column = "title", field = "title", name = "消息的标题")
	/*
	 * 消息的标题
	 */
	private java.lang.String title;

	@FieldRemark(column = "content", field = "content", name = "消息的内容，可以含有HTML标签")
	/*
	 * 消息的内容，可以含有HTML标签
	 */
	private java.lang.String content;

	@FieldRemark(column = "url_address", field = "urlAddress", name = "打开该消息时转向的地址，一般为相对路径")
	/*
	 * 打开该消息时转向的地址，一般为相对路径
	 */
	private java.lang.String urlAddress;
	@LogField

	@FieldRemark(column = "send_user", field = "sendUser", name = "消息发送人")
	/*
	 * 消息发送人
	 */
	private java.lang.String sendUser;
	@LogField

	@FieldRemark(column = "send_date", field = "sendDate", name = "发送日期")
	/*
	 * 发送日期
	 */
	private java.util.Date sendDate;
	/*
	 * 发送日期开始时间
	 */
	private java.util.Date sendDateBegin;
	/*
	 * 发送日期截止时间
	 */
	private java.util.Date sendDateEnd;

	@FieldRemark(column = "recv_user", field = "recvUser", name = "消息接收人")
	/*
	 * 消息接收人
	 */
	private java.lang.String recvUser;

	@FieldRemark(column = "recv_date", field = "recvDate", name = "接收日期")
	/*
	 * 接收日期
	 */
	private java.util.Date recvDate;
	/*
	 * 接收日期开始时间
	 */
	private java.util.Date recvDateBegin;
	/*
	 * 接收日期截止时间
	 */
	private java.util.Date recvDateEnd;

	@FieldRemark(column = "is_readed", field = "isReaded", name = "消息是否已经被打开。1-已打开，0-未打开")
	/*
	 * 消息是否已经被打开。1-已打开，0-未打开
	 */
	private java.lang.String isReaded;
	/*
	 * 最后修改时间开始时间
	 */
	private java.util.Date lastUpdateDateBegin;
	/*
	 * 最后修改时间截止时间
	 */
	private java.util.Date lastUpdateDateEnd;
	/*
	 * 创建时间开始时间
	 */
	private java.util.Date creationDateBegin;
	/*
	 * 创建时间截止时间
	 */
	private java.util.Date creationDateEnd;

	@FieldRemark(column = "attribute_01", field = "attribute01", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute01;

	@FieldRemark(column = "attribute_02", field = "attribute02", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute02;

	@FieldRemark(column = "attribute_03", field = "attribute03", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute03;

	@FieldRemark(column = "attribute_04", field = "attribute04", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute04;

	@FieldRemark(column = "attribute_05", field = "attribute05", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute05;

	@FieldRemark(column = "attribute_06", field = "attribute06", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute06;

	@FieldRemark(column = "attribute_07", field = "attribute07", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute07;

	@FieldRemark(column = "attribute_08", field = "attribute08", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute08;

	@FieldRemark(column = "attribute_09", field = "attribute09", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute09;

	@FieldRemark(column = "attribute_10", field = "attribute10", name = "扩展字段")
	/*
	 * 扩展字段
	 */
	private java.lang.String attribute10;

	@FieldRemark(column = "url_type", field = "urlType", name = "URL类型，是URL就是1,是js方法，就是0。")
	/*
	 * URL类型，是URL就是1,是js方法，就是0。
	 */
	private java.lang.String urlType;

	@FieldRemark(column = "auto_disappear", field = "autoDisappear", name = "是否自动消失")
	/*
	 * 是否自动消失
	 */
	private java.lang.String autoDisappear;

	@FieldRemark(column = "disappear_date", field = "disappearDate", name = "到期时间")
	/*
	 * 到期时间
	 */
	private java.util.Date disappearDate;
	/*
	 * 到期时间开始时间
	 */
	private java.util.Date disappearDateBegin;
	/*
	 * 到期时间截止时间
	 */
	private java.util.Date disappearDateEnd;

	@FieldRemark(column = "send_deptid", field = "sendDeptid", name = "发送人部门ID")
	/*
	 * 发送人部门ID
	 */
	private java.lang.String sendDeptid;

	@FieldRemark(column = "sys_application_id", field = "sysApplicationId", name = "所属应用ID")
	/*
	 * 所属应用ID
	 */
	private java.lang.String sysApplicationId;

	@FieldRemark(column = "msg_id", field = "msgId", name = "消息外键ID")
	/*
	 * 消息外键ID
	 */
	private java.lang.String msgId;

	@FieldRemark(column = "msg_mobile_url", field = "msgMobileUrl", name = "移动端地址")
	/*
	 * 移动端地址
	 */
	private java.lang.String msgMobileUrl;

	@FieldRemark(column = "org_identity", field = "orgIdentity", name = "组织ID")
	/*
	 * 组织ID
	 */
	private java.lang.String orgIdentity;

	@FieldRemark(column = "source_code", field = "sourceCode", name = "消息来源代码")
	/*
	 * 消息来源代码
	 */
	private java.lang.String sourceCode;

	@FieldRemark(column = "source_name", field = "sourceName", name = "消息来源")
	/*
	 * 消息来源
	 */
	private java.lang.String sourceName;

	@FieldRemark(column = "send_type", field = "sendType", name = "发送方式，来自PC 0，来自MOBILE 1")
	/*
	 * 发送方式，来自PC 0，来自MOBILE 1
	 */
	private java.lang.String sendType;

	@FieldRemark(column = "msg_type", field = "msgType", name = "消息类型，广播消息1，点对点消息0")
	/*
	 * 消息类型，广播消息1，点对点消息0
	 */
	private java.lang.String msgType;

	@FieldRemark(column = "recv_or_send", field = "recvOrSend", name = "接收或发送 1接收 0发送")
	/*
	 * 接收或发送 1接收 0发送
	 */
	private java.lang.String recvOrSend;

	public java.lang.String getId() {
		return id;
	}

	public void setId(java.lang.String id) {
		this.id = id;
	}

	public java.lang.String getTitle() {
		return title;
	}

	public void setTitle(java.lang.String title) {
		this.title = title;
	}

	public java.lang.String getContent() {
		return content;
	}

	public void setContent(java.lang.String content) {
		this.content = content;
	}

	public java.lang.String getUrlAddress() {
		return urlAddress;
	}

	public void setUrlAddress(java.lang.String urlAddress) {
		this.urlAddress = urlAddress;
	}

	public java.lang.String getSendUser() {
		return sendUser;
	}

	public void setSendUser(java.lang.String sendUser) {
		this.sendUser = sendUser;
	}

	public java.util.Date getSendDate() {
		return sendDate;
	}

	public void setSendDate(java.util.Date sendDate) {
		this.sendDate = sendDate;
	}

	public java.util.Date getSendDateBegin() {
		return sendDateBegin;
	}

	public void setSendDateBegin(java.util.Date sendDateBegin) {
		this.sendDateBegin = sendDateBegin;
	}

	public java.util.Date getSendDateEnd() {
		return sendDateEnd;
	}

	public void setSendDateEnd(java.util.Date sendDateEnd) {
		this.sendDateEnd = sendDateEnd;
	}

	public java.lang.String getRecvUser() {
		return recvUser;
	}

	public void setRecvUser(java.lang.String recvUser) {
		this.recvUser = recvUser;
	}

	public java.util.Date getRecvDate() {
		return recvDate;
	}

	public void setRecvDate(java.util.Date recvDate) {
		this.recvDate = recvDate;
	}

	public java.util.Date getRecvDateBegin() {
		return recvDateBegin;
	}

	public void setRecvDateBegin(java.util.Date recvDateBegin) {
		this.recvDateBegin = recvDateBegin;
	}

	public java.util.Date getRecvDateEnd() {
		return recvDateEnd;
	}

	public void setRecvDateEnd(java.util.Date recvDateEnd) {
		this.recvDateEnd = recvDateEnd;
	}

	public java.lang.String getIsReaded() {
		return isReaded;
	}

	public void setIsReaded(java.lang.String isReaded) {
		this.isReaded = isReaded;
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

	public java.lang.String getAttribute07() {
		return attribute07;
	}

	public void setAttribute07(java.lang.String attribute07) {
		this.attribute07 = attribute07;
	}

	public java.lang.String getAttribute08() {
		return attribute08;
	}

	public void setAttribute08(java.lang.String attribute08) {
		this.attribute08 = attribute08;
	}

	public java.lang.String getAttribute09() {
		return attribute09;
	}

	public void setAttribute09(java.lang.String attribute09) {
		this.attribute09 = attribute09;
	}

	public java.lang.String getAttribute10() {
		return attribute10;
	}

	public void setAttribute10(java.lang.String attribute10) {
		this.attribute10 = attribute10;
	}

	public java.lang.String getUrlType() {
		return urlType;
	}

	public void setUrlType(java.lang.String urlType) {
		this.urlType = urlType;
	}

	public java.lang.String getAutoDisappear() {
		return autoDisappear;
	}

	public void setAutoDisappear(java.lang.String autoDisappear) {
		this.autoDisappear = autoDisappear;
	}

	public java.util.Date getDisappearDate() {
		return disappearDate;
	}

	public void setDisappearDate(java.util.Date disappearDate) {
		this.disappearDate = disappearDate;
	}

	public java.util.Date getDisappearDateBegin() {
		return disappearDateBegin;
	}

	public void setDisappearDateBegin(java.util.Date disappearDateBegin) {
		this.disappearDateBegin = disappearDateBegin;
	}

	public java.util.Date getDisappearDateEnd() {
		return disappearDateEnd;
	}

	public void setDisappearDateEnd(java.util.Date disappearDateEnd) {
		this.disappearDateEnd = disappearDateEnd;
	}

	public java.lang.String getSendDeptid() {
		return sendDeptid;
	}

	public void setSendDeptid(java.lang.String sendDeptid) {
		this.sendDeptid = sendDeptid;
	}

	public java.lang.String getSysApplicationId() {
		return sysApplicationId;
	}

	public void setSysApplicationId(java.lang.String sysApplicationId) {
		this.sysApplicationId = sysApplicationId;
	}

	public java.lang.String getMsgId() {
		return msgId;
	}

	public void setMsgId(java.lang.String msgId) {
		this.msgId = msgId;
	}

	public java.lang.String getMsgMobileUrl() {
		return msgMobileUrl;
	}

	public void setMsgMobileUrl(java.lang.String msgMobileUrl) {
		this.msgMobileUrl = msgMobileUrl;
	}

	public java.lang.String getOrgIdentity() {
		return orgIdentity;
	}

	public void setOrgIdentity(java.lang.String orgIdentity) {
		this.orgIdentity = orgIdentity;
	}

	public java.lang.String getSourceCode() {
		return sourceCode;
	}

	public void setSourceCode(java.lang.String sourceCode) {
		this.sourceCode = sourceCode;
	}

	public java.lang.String getSourceName() {
		return sourceName;
	}

	public void setSourceName(java.lang.String sourceName) {
		this.sourceName = sourceName;
	}

	public java.lang.String getSendType() {
		return sendType;
	}

	public void setSendType(java.lang.String sendType) {
		this.sendType = sendType;
	}

	public java.lang.String getMsgType() {
		return msgType;
	}

	public void setMsgType(java.lang.String msgType) {
		this.msgType = msgType;
	}

	public java.lang.String getRecvOrSend() {
		return recvOrSend;
	}

	public void setRecvOrSend(java.lang.String recvOrSend) {
		this.recvOrSend = recvOrSend;
	}

	public String getLogFormName() {
		if (super.logFormName == null || super.logFormName.equals("")) {
			return "系统消息表，用于在系统中保存提示消息";
		} else {
			return super.logFormName;
		}
	}

	public String getLogTitle() {
		if (super.logTitle == null || super.logTitle.equals("")) {
			return "系统消息表，用于在系统中保存提示消息";
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