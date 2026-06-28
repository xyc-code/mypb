package avicit.pb.member.dynpartexpenseledger.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.springframework.beans.factory.annotation.Autowired;

import avicit.platform6.core.rest.msg.Muti3Bean;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.core.rest.resteasy.RestEasyController;

import avicit.pb.member.dynpartexpenseledger.dto.DynPartExpenseLedgerDTO;
import avicit.pb.member.dynpartexpenseledger.service.DynPartExpenseLedgerService;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-06 10:03
 * @类说明：DYN_PART_EXPENSE_LEDGERRest
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/pb/member/dynPartExpenseLedger/dynPartExpenseLedgerRest")
public class DynPartExpenseLedgerRest {

	@Autowired
	private DynPartExpenseLedgerService dynPartExpenseLedgerService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<DynPartExpenseLedgerDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<DynPartExpenseLedgerDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<DynPartExpenseLedgerDTO> responseMsg = new ResponseMsg<DynPartExpenseLedgerDTO>();
		DynPartExpenseLedgerDTO dto = dynPartExpenseLedgerService.queryDynPartExpenseLedgerByPrimaryKey(id);
		responseMsg.setResponseBody(dto);
		return responseMsg;
	}

	/**
	 * 新增对象
	 * @param dto 保存对象
	 * @return ResponseMsg<String>
	 * @throws Exception
	 */
	@POST
	@Path("/save/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<String> save(DynPartExpenseLedgerDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = dynPartExpenseLedgerService.insertDynPartExpenseLedger(dto);
		responseMsg.setResponseBody(id);
		return responseMsg;
	}

	/**
	 * 修改部分对象字段
	 * @param dto 修改对象
	 * @return ResponseMsg<Integer>
	 * @throws Exception
	 */
	@POST
	@Path("/updateSensitive/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> updateSensitive(DynPartExpenseLedgerDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynPartExpenseLedgerService.updateDynPartExpenseLedgerSensitive(dto);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 修改全部对象字段
	 * @param dto 修改对象
	 * @return ResponseMsg<Integer>
	 * @throws Exception
	 */
	@POST
	@Path("/updateAll/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> updateAll(DynPartExpenseLedgerDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynPartExpenseLedgerService.updateDynPartExpenseLedgerAll(dto);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按主键单条删除
	 * @param id 主键id
	 * @return ResponseMsg<Integer>
	 * @throws Exception
	 */
	@POST
	@Path("/deleteById/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> deleteById(String id) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynPartExpenseLedgerService.deleteDynPartExpenseLedgerById(id);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	* 按主键多条删除
	* @param ids 主键ids
	* @return ResponseMsg<Integer>
	* @throws Exception
	*/
	@POST
	@Path("/deleteByIds/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> deleteById(String[] ids) throws Exception {
	ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynPartExpenseLedgerService.deleteDynPartExpenseLedgerByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<QueryRespBean<DynPartExpenseLedgerDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DynPartExpenseLedgerDTO>> searchByPage(Muti3Bean<QueryReqBean<DynPartExpenseLedgerDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<DynPartExpenseLedgerDTO>> responseMsg = new ResponseMsg<QueryRespBean<DynPartExpenseLedgerDTO>>();
		QueryReqBean<DynPartExpenseLedgerDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<DynPartExpenseLedgerDTO> queryRespBean = dynPartExpenseLedgerService
				.searchDynPartExpenseLedgerByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * 按条件不分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<List<DynPartExpenseLedgerDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<DynPartExpenseLedgerDTO>> search(Muti3Bean<QueryReqBean<DynPartExpenseLedgerDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<List<DynPartExpenseLedgerDTO>> responseMsg = new ResponseMsg<List<DynPartExpenseLedgerDTO>>();
		QueryReqBean<DynPartExpenseLedgerDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		List<DynPartExpenseLedgerDTO> queryRespBean = dynPartExpenseLedgerService.searchDynPartExpenseLedger(queryReqBean.getSearchParams(),orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}
}

