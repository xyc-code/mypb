package avicit.pb.pojo.partyRestPojo.dynsessionwyfg.rest;

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

import avicit.pb.pojo.partyRestPojo.dynsessionwyfg.dto.DynSessionWyfgDTO;
import avicit.pb.pojo.partyRestPojo.dynsessionwyfg.service.DynSessionWyfgService;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-02-23 15:33
 * @类说明：DYN_SESSION_WYFGRest
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/pb/pojo/partyRestPojo/dynSessionWyfg/dynSessionWyfgRest")
public class DynSessionWyfgRest {

	@Autowired
	private DynSessionWyfgService dynSessionWyfgService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<DynSessionWyfgDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<DynSessionWyfgDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<DynSessionWyfgDTO> responseMsg = new ResponseMsg<DynSessionWyfgDTO>();
		DynSessionWyfgDTO dto = dynSessionWyfgService.queryDynSessionWyfgByPrimaryKey(id);
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
	public ResponseMsg<String> save(DynSessionWyfgDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = dynSessionWyfgService.insertDynSessionWyfg(dto);
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
	public ResponseMsg<Integer> updateSensitive(DynSessionWyfgDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynSessionWyfgService.updateDynSessionWyfgSensitive(dto);
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
	public ResponseMsg<Integer> updateAll(DynSessionWyfgDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynSessionWyfgService.updateDynSessionWyfgAll(dto);
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
		int count = dynSessionWyfgService.deleteDynSessionWyfgById(id);
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
		int count = dynSessionWyfgService.deleteDynSessionWyfgByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<QueryRespBean<DynSessionWyfgDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DynSessionWyfgDTO>> searchByPage(Muti3Bean<QueryReqBean<DynSessionWyfgDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<DynSessionWyfgDTO>> responseMsg = new ResponseMsg<QueryRespBean<DynSessionWyfgDTO>>();
		QueryReqBean<DynSessionWyfgDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<DynSessionWyfgDTO> queryRespBean = dynSessionWyfgService
				.searchDynSessionWyfgByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * 按条件不分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<List<DynSessionWyfgDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<DynSessionWyfgDTO>> search(Muti3Bean<QueryReqBean<DynSessionWyfgDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<List<DynSessionWyfgDTO>> responseMsg = new ResponseMsg<List<DynSessionWyfgDTO>>();
		QueryReqBean<DynSessionWyfgDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		List<DynSessionWyfgDTO> queryRespBean = dynSessionWyfgService.searchDynSessionWyfg(queryReqBean.getSearchParams(),orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}
}

