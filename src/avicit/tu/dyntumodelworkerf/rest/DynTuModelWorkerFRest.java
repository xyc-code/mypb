package avicit.tu.dyntumodelworkerf.rest;

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

import avicit.tu.dyntumodelworkerf.dto.DynTuModelWorkerFDTO;
import avicit.tu.dyntumodelworkerf.service.DynTuModelWorkerFService;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：temp
 * @邮箱：temp@163.com
 * @创建时间： 2023-08-14 14:24
 * @类说明：DYN_TU_MODEL_WORKER_FRest
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/tu/dynTuModelWorkerF/dynTuModelWorkerFRest")
public class DynTuModelWorkerFRest {

	@Autowired
	private DynTuModelWorkerFService dynTuModelWorkerFService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<DynTuModelWorkerFDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<DynTuModelWorkerFDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<DynTuModelWorkerFDTO> responseMsg = new ResponseMsg<DynTuModelWorkerFDTO>();
		DynTuModelWorkerFDTO dto = dynTuModelWorkerFService.queryDynTuModelWorkerFByPrimaryKey(id);
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
	public ResponseMsg<String> save(DynTuModelWorkerFDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = dynTuModelWorkerFService.insertDynTuModelWorkerF(dto);
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
	public ResponseMsg<Integer> updateSensitive(DynTuModelWorkerFDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynTuModelWorkerFService.updateDynTuModelWorkerFSensitive(dto);
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
	public ResponseMsg<Integer> updateAll(DynTuModelWorkerFDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynTuModelWorkerFService.updateDynTuModelWorkerFAll(dto);
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
		int count = dynTuModelWorkerFService.deleteDynTuModelWorkerFById(id);
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
		int count = dynTuModelWorkerFService.deleteDynTuModelWorkerFByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<QueryRespBean<DynTuModelWorkerFDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DynTuModelWorkerFDTO>> searchByPage(Muti3Bean<QueryReqBean<DynTuModelWorkerFDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<DynTuModelWorkerFDTO>> responseMsg = new ResponseMsg<QueryRespBean<DynTuModelWorkerFDTO>>();
		QueryReqBean<DynTuModelWorkerFDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<DynTuModelWorkerFDTO> queryRespBean = dynTuModelWorkerFService
				.searchDynTuModelWorkerFByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * 按条件不分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<List<DynTuModelWorkerFDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<DynTuModelWorkerFDTO>> search(Muti3Bean<QueryReqBean<DynTuModelWorkerFDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<List<DynTuModelWorkerFDTO>> responseMsg = new ResponseMsg<List<DynTuModelWorkerFDTO>>();
		QueryReqBean<DynTuModelWorkerFDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		List<DynTuModelWorkerFDTO> queryRespBean = dynTuModelWorkerFService.searchDynTuModelWorkerF(queryReqBean.getSearchParams(),orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}
}

