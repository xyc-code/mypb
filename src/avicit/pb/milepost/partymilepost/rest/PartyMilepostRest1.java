package avicit.pb.milepost.partymilepost.rest;

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

import avicit.pb.milepost.partymilepost.dto.PartyMilepostDTO1;
import avicit.pb.milepost.partymilepost.service.PartyMilepostService1;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-14 08:58
 * @类说明：
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/pb/milepost/partyMilepost/partyMilepostRest")
public class PartyMilepostRest1 {

	@Autowired
	private PartyMilepostService1 partyMilepostService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<PartyMilepostDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<PartyMilepostDTO1> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<PartyMilepostDTO1> responseMsg = new ResponseMsg<PartyMilepostDTO1>();
		PartyMilepostDTO1 dto = partyMilepostService.queryPartyMilepostByPrimaryKey(id);
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
	public ResponseMsg<String> save(PartyMilepostDTO1 dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = partyMilepostService.insertPartyMilepost(dto);
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
	public ResponseMsg<Integer> updateSensitive(PartyMilepostDTO1 dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = partyMilepostService.updatePartyMilepostSensitive(dto);
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
	public ResponseMsg<Integer> updateAll(PartyMilepostDTO1 dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = partyMilepostService.updatePartyMilepostAll(dto);
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
		int count = partyMilepostService.deletePartyMilepostById(id);
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
		int count = partyMilepostService.deletePartyMilepostByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param queryReqBean 查询条件
	 * @return ResponseMsg<QueryRespBean<PartyMilepostDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<PartyMilepostDTO1>> searchByPage(Muti3Bean<QueryReqBean<PartyMilepostDTO1>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<PartyMilepostDTO1>> responseMsg = new ResponseMsg<QueryRespBean<PartyMilepostDTO1>>();
		QueryReqBean<PartyMilepostDTO1> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<PartyMilepostDTO1> queryRespBean = partyMilepostService
				.searchPartyMilepostByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * 按条件不分页查询
	 * @param queryReqBean 查询条件
	 * @return ResponseMsg<List<PartyMilepostDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<PartyMilepostDTO1>> search(Muti3Bean<QueryReqBean<PartyMilepostDTO1>, String,String> mutibean)
			throws Exception {
		ResponseMsg<List<PartyMilepostDTO1>> responseMsg = new ResponseMsg<List<PartyMilepostDTO1>>();
		QueryReqBean<PartyMilepostDTO1> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		List<PartyMilepostDTO1> queryRespBean = partyMilepostService.searchPartyMilepost(queryReqBean.getSearchParams(),orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}
}

