package avicit.pb.commandos.partycommandos.rest;

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

import avicit.pb.commandos.partycommandos.dto.PartyCommandosDTO;
import avicit.pb.commandos.partycommandos.service.PartyCommandosService;
import avicit.pb.commandos.partymilepost.dto.PartyMilepostDTO;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-11 09:57
 * @类说明：
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/pb/commandos/partyCommandos/partyCommandosRest")
public class PartyCommandosRest {

	@Autowired
	private PartyCommandosService partyCommandosService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<PartyCommandosDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<PartyCommandosDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<PartyCommandosDTO> responseMsg = new ResponseMsg<PartyCommandosDTO>();
		PartyCommandosDTO dto = partyCommandosService.queryPartyCommandosByPrimaryKey(id);
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
	public ResponseMsg<String> save(PartyCommandosDTO dto,List<PartyMilepostDTO> addSubList) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = partyCommandosService.insertPartyCommandos(dto,addSubList);
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
    public ResponseMsg<Integer> updateSensitive(PartyCommandosDTO dto,List<PartyMilepostDTO> updateSubList,String[] removeSubIds) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = partyCommandosService.updatePartyCommandosSensitive(dto,updateSubList,removeSubIds);
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
	public ResponseMsg<Integer> updateAll(PartyCommandosDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = partyCommandosService.updatePartyCommandosAll(dto);
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
		int count = partyCommandosService.deletePartyCommandosById(id);
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
	public ResponseMsg<Integer> deleteByIds(String[] ids) throws Exception {
	ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = partyCommandosService.deletePartyCommandosByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param queryReqBean 查询条件
	 * @return ResponseMsg<QueryRespBean<PartyCommandosDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<PartyCommandosDTO>> searchByPage(Muti3Bean<QueryReqBean<PartyCommandosDTO>,String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<PartyCommandosDTO>> responseMsg = new ResponseMsg<QueryRespBean<PartyCommandosDTO>>();
		QueryReqBean<PartyCommandosDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<PartyCommandosDTO> queryRespBean = partyCommandosService
				.searchPartyCommandosByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
     * 按条件不分页查询
     * @param mutibean 查询条件
     * @return ResponseMsg<List<PartyCommandosDTO>>
     * @throws Exception
     */
    @POST
    @Path("/search/v1/")
    @Produces("application/json;charset=UTF-8")
    @Consumes("application/json;charset=UTF-8")
    public ResponseMsg<List<PartyCommandosDTO>> search(Muti3Bean<QueryReqBean<PartyCommandosDTO>, String,String> mutibean)
            throws Exception {
        ResponseMsg<List<PartyCommandosDTO>> responseMsg = new ResponseMsg<List<PartyCommandosDTO>>();
        QueryReqBean<PartyCommandosDTO> queryReqBean = mutibean.getDto1();
        String orderby = mutibean.getDto2();
        String keyWord = mutibean.getDto3();
        List<PartyCommandosDTO> queryRespBean = partyCommandosService.searchPartyCommandos(queryReqBean.getSearchParams(),orderby,keyWord);
        responseMsg.setResponseBody(queryRespBean);
        return responseMsg;
    }
}

