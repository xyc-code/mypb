package avicit.jg.jgpaymentplan.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import avicit.platform6.api.session.SessionHelper;
import org.springframework.beans.factory.annotation.Autowired;

import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.core.rest.resteasy.RestEasyController;

import avicit.jg.jgpaymentplan.dto.JgPaymentPlanDTO;
import avicit.jg.jgpaymentplan.service.JgPaymentPlanService;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-12 08:51 
 * @类说明：请填写
 * @修改记录：
 */
@RestEasyController
@Path("/api/jg/jgpaymentplan/JgPaymentPlanRest")
public class JgPaymentPlanRest {

	@Autowired
	private JgPaymentPlanService jgPaymentPlanService;

	/**
	 * @description:通过ID获取单条记录
	 * @param id
	 * @return
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<JgPaymentPlanDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<JgPaymentPlanDTO> responseMsg = new ResponseMsg<JgPaymentPlanDTO>();
		JgPaymentPlanDTO dto = jgPaymentPlanService.queryJgPaymentPlanByPrimaryKey(id);
		responseMsg.setResponseBody(dto);
		return responseMsg;
	}

	/**
	* @description:插入一条记录
	* @param dto
	* @return
	* @throws Exception
	*/
	@POST
	@Path("/save/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<String> save(JgPaymentPlanDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = jgPaymentPlanService.insertJgPaymentPlan(dto);
		responseMsg.setResponseBody(id);
		return responseMsg;
	}

	/**
	 * @description:修改一条记录，按照匹配字段修改
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	@POST
	@Path("/updateSensitive/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> updateSensitive(JgPaymentPlanDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = jgPaymentPlanService.updateJgPaymentPlanSensitive(dto);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * @description:修改一条记录的全部字段
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	@POST
	@Path("/updateAll/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> updateAll(JgPaymentPlanDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = jgPaymentPlanService.updateJgPaymentPlan(dto);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * @description:按照ID删除一条记录
	 * @param id
	 * @return
	 * @throws Exception
	 */
	@POST
	@Path("/deleteById/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> deleteById(String id) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = jgPaymentPlanService.deleteJgPaymentPlanById(id);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	* @description:按条件分页查询
	* @param queryReqBean
	* @return
	* @throws Exception
	*/
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<JgPaymentPlanDTO>> searchByPage(QueryReqBean<JgPaymentPlanDTO> queryReqBean)
			throws Exception {
		ResponseMsg<QueryRespBean<JgPaymentPlanDTO>> responseMsg = new ResponseMsg<QueryRespBean<JgPaymentPlanDTO>>();
		QueryRespBean<JgPaymentPlanDTO> queryRespBean = jgPaymentPlanService.searchJgPaymentPlanByPage(queryReqBean,
				null, SessionHelper.getCurrentOrgIdentity());
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * @description:按条件不分页查询
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<JgPaymentPlanDTO>> search(QueryReqBean<JgPaymentPlanDTO> queryReqBean) throws Exception {
		ResponseMsg<List<JgPaymentPlanDTO>> responseMsg = new ResponseMsg<List<JgPaymentPlanDTO>>();
		List<JgPaymentPlanDTO> queryRespBean = jgPaymentPlanService.searchJgPaymentPlan(queryReqBean);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

}
