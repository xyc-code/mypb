package avicit.pb.utils.event;

import avicit.pb.member.dynpartexpenseledger.dao.DynPartExpenseLedgerDAO;
import avicit.pb.member.dynpartexpenseledger.dto.DynPartExpenseLedgerDTO;
import avicit.pb.organize.dynaccounting.dao.DynAccountingDAO;
import avicit.pb.organize.dynaccounting.dto.DynAccountingDTO;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.jdbc.core.JdbcTemplate;

import java.beans.Transient;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
// 党费审批事件 记录账本
public class PartyAccountingCondition implements EventListener, LoaderConstant {
	BpmsControlUtils bpmsControlUtils = SpringHelper.getBean(BpmsControlUtils.class);
	JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
	DynPartExpenseLedgerDAO partExpenseLedgerDAO = SpringHelper.getBean(DynPartExpenseLedgerDAO.class);
	DynAccountingDAO dynAccountingDAO = SpringHelper.getBean(DynAccountingDAO.class);
	@Override
	@Transient
	public void notify(EventListenerExecution execution) throws Exception{
		// TODO Auto-generated method stub
		String id = (String) execution.getVariable("id");
		TableData tableData = new TableData();
		tableData.setTableName("DYN_PARTY_MONEY"); // 党费审批表
		tableData.setPrimaryKeyValue(id);
		Map<String, Object> data = bpmsControlUtils.getData(tableData);
		String partyId = (String)data.get("PARTY_ID"); // 申请支部id
		String partyName = (String)data.get("PARTY_NAME"); // 申请支部名称

		String total_price = data.get("TOTAL_PRICE").toString();
		double xxzlTotalPrice = Double.parseDouble(total_price); // 消费总额
		String selType = (String)data.get("SEL_TYPE"); // 事由
		SimpleDateFormat formatter= new SimpleDateFormat("yyyy");

		// 查询
		DynPartExpenseLedgerDTO dynPartExpenseLedgerByPartId = partExpenseLedgerDAO.findDynPartExpenseLedgerByPartId(partyId, formatter.format(new Date()));
		BigDecimal partyMoney = new BigDecimal(0);
		if (dynPartExpenseLedgerByPartId != null) {
			// 判断 申请支部的总额是否存在 为空查询总额
			if (StringUtils.isBlank(dynPartExpenseLedgerByPartId.getPartyMoneyNotUsed())) {
				partyMoney = dynPartExpenseLedgerByPartId.getPartyMoney();
			} else {
				partyMoney = new BigDecimal(dynPartExpenseLedgerByPartId.getPartyMoneyNotUsed());
			}
//		BigDecimal xxzlTotalPriceBigDecimal = xxzlTotalPrice;
			BigDecimal xxzlTotalPriceBigDecimal = new BigDecimal(xxzlTotalPrice);
			// 额度
			dynPartExpenseLedgerByPartId.setPartyMoneyNotUsed(String.valueOf(partyMoney.subtract(xxzlTotalPriceBigDecimal)));
			// 已使用额度
			dynPartExpenseLedgerByPartId.setPartyMoneyUsed(String.valueOf(dynPartExpenseLedgerByPartId.getPartyMoney().subtract(new BigDecimal(dynPartExpenseLedgerByPartId.getPartyMoneyNotUsed()))));
			// 修改
			partExpenseLedgerDAO.updateDynPartExpenseLedgerAll(dynPartExpenseLedgerByPartId);
			DynAccountingDTO dto = new DynAccountingDTO();
			String accountingId = ComUtil.getId();
			dto.setId(accountingId);
			dto.setStatus("0"); // 0党费 1经费
			dto.setSubjectMatter(selType); // 事由
			dto.setPartyId(partyId); // 支部id
			dto.setPartyName(partyName); // 支部名称
			dto.setExpenditure(xxzlTotalPriceBigDecimal);  // 支出
			dto.setCreatedBy("刘傲东");
			dto.setBalance(String.valueOf(partyMoney.subtract(xxzlTotalPriceBigDecimal)));// 额度
			dto.setLastUpdatedBy("刘傲东");
			dto.setCreationDate(new Date());
			dto.setLastUpdateDate(new Date());
			dto.setVersion(Long.valueOf(0));
			dto.setCreatedDept(partyId);
			dto.setOrgIdentity("4");
			dto.setLastUpdateIp("192.168.0.0");
			// 记账
			dynAccountingDAO.insertDynAccounting(dto);
		}
	}

}
