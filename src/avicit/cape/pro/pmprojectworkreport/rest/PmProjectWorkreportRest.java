package avicit.cape.pro.pmprojectworkreport.rest;

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
import avicit.cape.pro.pmprojectworkreport.dto.PmProjectWorkreportDTO;
import avicit.cape.pro.pmprojectworkreport.service.PmProjectWorkreportService;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-03-31 23:21 
 * @类说明：请填写
 * @修改记录：
 */
@RestEasyController
@Path("/api/cape/pro/pmprojectworkreport/PmProjectWorkreportRest")
public class PmProjectWorkreportRest {

	@Autowired
	private PmProjectWorkreportService pmProjectWorkreportService;

	/**
	 * @description: 通过ID获取单条记录
	 * @param id
	 * @return
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<PmProjectWorkreportDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<PmProjectWorkreportDTO> responseMsg = new ResponseMsg<PmProjectWorkreportDTO>();
		PmProjectWorkreportDTO dto = pmProjectWorkreportService.queryPmProjectWorkreportByPrimaryKey(id);
		responseMsg.setResponseBody(dto);
		return responseMsg;
	}

	/**
	 * @description: 插入一条记录
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	@POST
	@Path("/save/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<String> save(PmProjectWorkreportDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = pmProjectWorkreportService.insertPmProjectWorkreport(dto);
		responseMsg.setResponseBody(id);
		return responseMsg;
	}

	/**
	 * @description: 修改一条记录，按照匹配字段修改
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	@POST
	@Path("/updateSensitive/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> updateSensitive(PmProjectWorkreportDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = pmProjectWorkreportService.updatePmProjectWorkreportSensitive(dto);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * @description: 修改一条记录的全部字段
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	@POST
	@Path("/updateAll/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> updateAll(PmProjectWorkreportDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = pmProjectWorkreportService.updatePmProjectWorkreport(dto);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * @description: 按照ID删除一条记录
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
		int count = pmProjectWorkreportService.deletePmProjectWorkreportById(id);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * @description: 按条件分页查询
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<PmProjectWorkreportDTO>> searchByPage(
			QueryReqBean<PmProjectWorkreportDTO> queryReqBean, String sfnConditions) throws Exception {
		ResponseMsg<QueryRespBean<PmProjectWorkreportDTO>> responseMsg = new ResponseMsg<QueryRespBean<PmProjectWorkreportDTO>>();
		QueryRespBean<PmProjectWorkreportDTO> queryRespBean = pmProjectWorkreportService
				.searchPmProjectWorkreportByPage(queryReqBean, sfnConditions, SessionHelper.getCurrentOrgIdentity());
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * @description: 按条件不分页查询
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<PmProjectWorkreportDTO>> search(QueryReqBean<PmProjectWorkreportDTO> queryReqBean)
			throws Exception {
		ResponseMsg<List<PmProjectWorkreportDTO>> responseMsg = new ResponseMsg<List<PmProjectWorkreportDTO>>();
		List<PmProjectWorkreportDTO> queryRespBean = pmProjectWorkreportService.searchPmProjectWorkreport(queryReqBean);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

}
