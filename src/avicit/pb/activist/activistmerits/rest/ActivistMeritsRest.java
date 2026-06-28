package avicit.pb.activist.activistmerits.rest;

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

import avicit.pb.activist.activistmerits.dto.ActivistMeritsDTO;
import avicit.pb.activist.activistmerits.service.ActivistMeritsService;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-25 09:21
 * @类说明：
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/pb/activist/activistMerits/activistMeritsRest")
public class ActivistMeritsRest {

	@Autowired
	private ActivistMeritsService activistMeritsService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<ActivistMeritsDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<ActivistMeritsDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<ActivistMeritsDTO> responseMsg = new ResponseMsg<ActivistMeritsDTO>();
		ActivistMeritsDTO dto = activistMeritsService.queryActivistMeritsByPrimaryKey(id);
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
	public ResponseMsg<String> save(ActivistMeritsDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = activistMeritsService.insertActivistMerits(dto);
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
	public ResponseMsg<Integer> updateSensitive(ActivistMeritsDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = activistMeritsService.updateActivistMeritsSensitive(dto);
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
	public ResponseMsg<Integer> updateAll(ActivistMeritsDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = activistMeritsService.updateActivistMeritsAll(dto);
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
		int count = activistMeritsService.deleteActivistMeritsById(id);
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
		int count = activistMeritsService.deleteActivistMeritsByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param Muti3Bean<queryReqBean,orderBy,keyWord> 查询条件
	 * @return ResponseMsg<QueryRespBean<ActivistMeritsDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<ActivistMeritsDTO>> searchByPage(Muti3Bean<QueryReqBean<ActivistMeritsDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<ActivistMeritsDTO>> responseMsg = new ResponseMsg<QueryRespBean<ActivistMeritsDTO>>();
		QueryReqBean<ActivistMeritsDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<ActivistMeritsDTO> queryRespBean = activistMeritsService
				.searchActivistMeritsByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
     * 按条件不分页查询
     * @param mutibean 查询条件
     * @return ResponseMsg<List<ActivistMeritsDTO>>
     * @throws Exception
     */
    @POST
    @Path("/search/v1/")
    @Produces("application/json;charset=UTF-8")
    @Consumes("application/json;charset=UTF-8")
    public ResponseMsg<List<ActivistMeritsDTO>> search(Muti3Bean<QueryReqBean<ActivistMeritsDTO>, String,String> mutibean)
            throws Exception {
        ResponseMsg<List<ActivistMeritsDTO>> responseMsg = new ResponseMsg<List<ActivistMeritsDTO>>();
        QueryReqBean<ActivistMeritsDTO> queryReqBean = mutibean.getDto1();
        String orderby = mutibean.getDto2();
        String keyWord = mutibean.getDto3();
        List<ActivistMeritsDTO> queryRespBean = activistMeritsService.searchActivistMerits(queryReqBean.getSearchParams(),orderby,keyWord);
        responseMsg.setResponseBody(queryRespBean);
        return responseMsg;
    }

}

