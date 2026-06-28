package avicit.cape.pmprojectys.pmprojectyssts.rest;

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

import avicit.cape.pmprojectys.pmprojectyssts.dto.PmProjectYsStsDTO;
import avicit.cape.pmprojectys.pmprojectyssts.service.PmProjectYsStsService;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-09 10:52 
 * @类说明：请填写
 * @修改记录：
 */
@RestEasyController
@Path("/api/cape/pmprojectys/pmprojectyssts/PmProjectYsStsRest")
public class PmProjectYsStsRest {

	@Autowired
	private PmProjectYsStsService pmProjectYsStsService;

	/**
	 * @description:通过ID获取单条记录
	 * @param id
	 * @return
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<PmProjectYsStsDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<PmProjectYsStsDTO> responseMsg = new ResponseMsg<PmProjectYsStsDTO>();
		PmProjectYsStsDTO dto = pmProjectYsStsService.queryPmProjectYsStsByPrimaryKey(id);
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
	@Path("/save/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<String> save(PmProjectYsStsDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = pmProjectYsStsService.insertPmProjectYsSts(dto);
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
	@Path("/updateSensitive/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> updateSensitive(PmProjectYsStsDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = pmProjectYsStsService.updatePmProjectYsStsSensitive(dto);
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
	@Path("/updateAll/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> updateAll(PmProjectYsStsDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = pmProjectYsStsService.updatePmProjectYsSts(dto);
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
	@Path("/deleteById/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> deleteById(String id) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = pmProjectYsStsService.deletePmProjectYsStsById(id);
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
	@Path("/searchByPage/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<PmProjectYsStsDTO>> searchByPage(QueryReqBean<PmProjectYsStsDTO> queryReqBean,
			String sdfConditons) throws Exception {
		ResponseMsg<QueryRespBean<PmProjectYsStsDTO>> responseMsg = new ResponseMsg<QueryRespBean<PmProjectYsStsDTO>>();
		QueryRespBean<PmProjectYsStsDTO> queryRespBean = pmProjectYsStsService.searchPmProjectYsStsByPage(queryReqBean,
				sdfConditons, SessionHelper.getCurrentOrgIdentity());
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}
}
