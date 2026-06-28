package avicit.pb.member.dynworkcompany.rest;


import avicit.platform6.core.rest.msg.Muti3Bean;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.core.rest.resteasy.RestEasyController;

import avicit.pb.member.dynworkcompany.dto.DynWorkCompanyDTO;
import avicit.pb.member.dynworkcompany.service.DynWorkCompanyService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;
import javax.ws.rs.*;


/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-23 16:42
 * @类说明：
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/pb/member/dynWorkCompany/dynWorkCompanyRest")
public class DynWorkCompanyRest {

	@Autowired
	private DynWorkCompanyService dynWorkCompanyService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<DynWorkCompanyDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<DynWorkCompanyDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<DynWorkCompanyDTO> responseMsg = new ResponseMsg<DynWorkCompanyDTO>();
		DynWorkCompanyDTO dto = dynWorkCompanyService.queryDynWorkCompanyByPrimaryKey(id);
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
	public ResponseMsg<String> save(DynWorkCompanyDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = dynWorkCompanyService.insertDynWorkCompany(dto);
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
	public ResponseMsg<Integer> updateSensitive(DynWorkCompanyDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynWorkCompanyService.updateDynWorkCompanySensitive(dto);
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
	public ResponseMsg<Integer> updateAll(DynWorkCompanyDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynWorkCompanyService.updateDynWorkCompanyAll(dto);
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
		int count = dynWorkCompanyService.deleteDynWorkCompanyById(id);
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
		int count = dynWorkCompanyService.deleteDynWorkCompanyByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<QueryRespBean<DynWorkCompanyDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DynWorkCompanyDTO>> searchByPage(Muti3Bean<QueryReqBean<DynWorkCompanyDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<DynWorkCompanyDTO>> responseMsg = new ResponseMsg<QueryRespBean<DynWorkCompanyDTO>>();
		QueryReqBean<DynWorkCompanyDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<DynWorkCompanyDTO> queryRespBean = dynWorkCompanyService
				.searchDynWorkCompanyByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
     * 按条件不分页查询
     * @param mutibean 查询条件
     * @return ResponseMsg<List<DynWorkCompanyDTO>>
     * @throws Exception
     */
    @POST
    @Path("/search/v1/")
    @Produces("application/json;charset=UTF-8")
    @Consumes("application/json;charset=UTF-8")
    public ResponseMsg<List<DynWorkCompanyDTO>> search(Muti3Bean<QueryReqBean<DynWorkCompanyDTO>, String,String> mutibean)
            throws Exception {
        ResponseMsg<List<DynWorkCompanyDTO>> responseMsg = new ResponseMsg<List<DynWorkCompanyDTO>>();
        QueryReqBean<DynWorkCompanyDTO> queryReqBean = mutibean.getDto1();
        String orderby = mutibean.getDto2();
        String keyWord = mutibean.getDto3();
        List<DynWorkCompanyDTO> queryRespBean = dynWorkCompanyService.searchDynWorkCompany(queryReqBean.getSearchParams(),orderby,keyWord);
        responseMsg.setResponseBody(queryRespBean);
        return responseMsg;
    }

}

