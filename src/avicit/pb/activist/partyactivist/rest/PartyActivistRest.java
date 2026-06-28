package avicit.pb.activist.partyactivist.rest;

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

import avicit.pb.activist.partyactivist.dto.PartyActivistDTO;
import avicit.pb.activist.partyactivist.service.PartyActivistService;
import avicit.pb.activist.activistachievement.dto.ActivistAchievementDTO;
import avicit.pb.activist.activistmerits.dto.ActivistMeritsDTO;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-25 09:20
 * @类说明：
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/pb/activist/partyActivist/partyActivistRest")
public class PartyActivistRest {

	@Autowired
	private PartyActivistService partyActivistService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<PartyActivistDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<PartyActivistDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<PartyActivistDTO> responseMsg = new ResponseMsg<PartyActivistDTO>();
		PartyActivistDTO dto = partyActivistService.queryPartyActivistByPrimaryKey(id);
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
	public ResponseMsg<String> save(PartyActivistDTO dto,List<ActivistAchievementDTO> addSubList,List<ActivistMeritsDTO> addSubListExtr) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = partyActivistService.insertPartyActivist(dto,addSubList,addSubListExtr);
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
    public ResponseMsg<Integer> updateSensitive(PartyActivistDTO dto,List<ActivistAchievementDTO> updateSubList,String[] removeSubIds) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = partyActivistService.updatePartyActivistSensitive(dto,updateSubList,null, removeSubIds, removeSubIds);
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
	public ResponseMsg<Integer> updateAll(PartyActivistDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = partyActivistService.updatePartyActivistAll(dto);
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
		int count = partyActivistService.deletePartyActivistById(id);
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
		int count = partyActivistService.deletePartyActivistByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param queryReqBean 查询条件
	 * @return ResponseMsg<QueryRespBean<PartyActivistDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<PartyActivistDTO>> searchByPage(Muti3Bean<QueryReqBean<PartyActivistDTO>,String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<PartyActivistDTO>> responseMsg = new ResponseMsg<QueryRespBean<PartyActivistDTO>>();
		QueryReqBean<PartyActivistDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<PartyActivistDTO> queryRespBean = partyActivistService
				.searchPartyActivistByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
     * 按条件不分页查询
     * @param mutibean 查询条件
     * @return ResponseMsg<List<PartyActivistDTO>>
     * @throws Exception
     */
    @POST
    @Path("/search/v1/")
    @Produces("application/json;charset=UTF-8")
    @Consumes("application/json;charset=UTF-8")
    public ResponseMsg<List<PartyActivistDTO>> search(Muti3Bean<QueryReqBean<PartyActivistDTO>, String,String> mutibean)
            throws Exception {
        ResponseMsg<List<PartyActivistDTO>> responseMsg = new ResponseMsg<List<PartyActivistDTO>>();
        QueryReqBean<PartyActivistDTO> queryReqBean = mutibean.getDto1();
        String orderby = mutibean.getDto2();
        String keyWord = mutibean.getDto3();
        List<PartyActivistDTO> queryRespBean = partyActivistService.searchPartyActivist(queryReqBean.getSearchParams(),orderby,keyWord);
        responseMsg.setResponseBody(queryRespBean);
        return responseMsg;
    }
}

