package avicit.pb.pojo.partyRestPojo.dynsubhjxjdydh3.rest;

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

import avicit.pb.pojo.partyRestPojo.dynsubhjxjdydh3.dto.DynSubHjxjdydh3DTO;
import avicit.pb.pojo.partyRestPojo.dynsubhjxjdydh3.service.DynSubHjxjdydh3Service;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-18 11:50
 * @类说明：DYN_SUB_HJXJDYDH_3Rest
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/pb/pojo/partyRestPojo/dynSubHjxjdydh3/dynSubHjxjdydh3Rest")
public class DynSubHjxjdydh3Rest {

	@Autowired
	private DynSubHjxjdydh3Service dynSubHjxjdydh3Service;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<DynSubHjxjdydh3DTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<DynSubHjxjdydh3DTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<DynSubHjxjdydh3DTO> responseMsg = new ResponseMsg<DynSubHjxjdydh3DTO>();
		DynSubHjxjdydh3DTO dto = dynSubHjxjdydh3Service.queryDynSubHjxjdydh3ByPrimaryKey(id);
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
	public ResponseMsg<String> save(DynSubHjxjdydh3DTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = dynSubHjxjdydh3Service.insertDynSubHjxjdydh3(dto);
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
	public ResponseMsg<Integer> updateSensitive(DynSubHjxjdydh3DTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynSubHjxjdydh3Service.updateDynSubHjxjdydh3Sensitive(dto);
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
	public ResponseMsg<Integer> updateAll(DynSubHjxjdydh3DTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynSubHjxjdydh3Service.updateDynSubHjxjdydh3All(dto);
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
		int count = dynSubHjxjdydh3Service.deleteDynSubHjxjdydh3ById(id);
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
		int count = dynSubHjxjdydh3Service.deleteDynSubHjxjdydh3ByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<QueryRespBean<DynSubHjxjdydh3DTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DynSubHjxjdydh3DTO>> searchByPage(Muti3Bean<QueryReqBean<DynSubHjxjdydh3DTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<DynSubHjxjdydh3DTO>> responseMsg = new ResponseMsg<QueryRespBean<DynSubHjxjdydh3DTO>>();
		QueryReqBean<DynSubHjxjdydh3DTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<DynSubHjxjdydh3DTO> queryRespBean = dynSubHjxjdydh3Service
				.searchDynSubHjxjdydh3ByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * 按条件不分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<List<DynSubHjxjdydh3DTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<DynSubHjxjdydh3DTO>> search(Muti3Bean<QueryReqBean<DynSubHjxjdydh3DTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<List<DynSubHjxjdydh3DTO>> responseMsg = new ResponseMsg<List<DynSubHjxjdydh3DTO>>();
		QueryReqBean<DynSubHjxjdydh3DTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		List<DynSubHjxjdydh3DTO> queryRespBean = dynSubHjxjdydh3Service.searchDynSubHjxjdydh3(queryReqBean.getSearchParams(),orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}
}

