package avicit.pb.pojo.partyRestPojo.dyndetail.rest;

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

import avicit.pb.pojo.partyRestPojo.dyndetail.dto.DynDetailDTO;
import avicit.pb.pojo.partyRestPojo.dyndetail.service.DynDetailService;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-18 13:54
 * @类说明：DYN_DETAILRest
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/pb/pojo/partyRestPojo/dynDetail/dynDetailRest")
public class DynDetailRest {

	@Autowired
	private DynDetailService dynDetailService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<DynDetailDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<DynDetailDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<DynDetailDTO> responseMsg = new ResponseMsg<DynDetailDTO>();
		DynDetailDTO dto = dynDetailService.queryDynDetailByPrimaryKey(id);
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
	public ResponseMsg<String> save(DynDetailDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = dynDetailService.insertDynDetail(dto);
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
	public ResponseMsg<Integer> updateSensitive(DynDetailDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynDetailService.updateDynDetailSensitive(dto);
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
	public ResponseMsg<Integer> updateAll(DynDetailDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynDetailService.updateDynDetailAll(dto);
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
		int count = dynDetailService.deleteDynDetailById(id);
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
		int count = dynDetailService.deleteDynDetailByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<QueryRespBean<DynDetailDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DynDetailDTO>> searchByPage(Muti3Bean<QueryReqBean<DynDetailDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<DynDetailDTO>> responseMsg = new ResponseMsg<QueryRespBean<DynDetailDTO>>();
		QueryReqBean<DynDetailDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<DynDetailDTO> queryRespBean = dynDetailService
				.searchDynDetailByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * 按条件不分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<List<DynDetailDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<DynDetailDTO>> search(Muti3Bean<QueryReqBean<DynDetailDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<List<DynDetailDTO>> responseMsg = new ResponseMsg<List<DynDetailDTO>>();
		QueryReqBean<DynDetailDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		List<DynDetailDTO> queryRespBean = dynDetailService.searchDynDetail(queryReqBean.getSearchParams(),orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}
}

