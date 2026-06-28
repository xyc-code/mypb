package avicit.pb.member.dynworkplan.rest;

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

import avicit.pb.member.dynworkplan.dto.DynWorkPlanDTO;
import avicit.pb.member.dynworkplan.service.DynWorkPlanService;
import avicit.pb.member.dynworkcompany.dto.DynWorkCompanyDTO;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-23 16:42
 * @类说明：
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/pb/member/dynWorkPlan/dynWorkPlanRest")
public class DynWorkPlanRest {

	@Autowired
	private DynWorkPlanService dynWorkPlanService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<DynWorkPlanDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<DynWorkPlanDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<DynWorkPlanDTO> responseMsg = new ResponseMsg<DynWorkPlanDTO>();
		DynWorkPlanDTO dto = dynWorkPlanService.queryDynWorkPlanByPrimaryKey(id);
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
    public ResponseMsg<String> save(DynWorkPlanDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = dynWorkPlanService.insertDynWorkPlan(dto);
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
	public ResponseMsg<Integer> updateSensitive(DynWorkPlanDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynWorkPlanService.updateDynWorkPlanSensitive(dto);
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
	public ResponseMsg<Integer> updateAll(DynWorkPlanDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynWorkPlanService.updateDynWorkPlanAll(dto);
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
		int count = dynWorkPlanService.deleteDynWorkPlanById(id);
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
		int count = dynWorkPlanService.deleteDynWorkPlanByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param queryReqBean 查询条件
	 * @return ResponseMsg<QueryRespBean<DynWorkPlanDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DynWorkPlanDTO>> searchByPage(Muti3Bean<QueryReqBean<DynWorkPlanDTO>,String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<DynWorkPlanDTO>> responseMsg = new ResponseMsg<QueryRespBean<DynWorkPlanDTO>>();
		QueryReqBean<DynWorkPlanDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<DynWorkPlanDTO> queryRespBean = dynWorkPlanService
				.searchDynWorkPlanByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * 按条件不分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<List<DynWorkPlanDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<DynWorkPlanDTO>> search(Muti3Bean<QueryReqBean<DynWorkPlanDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<List<DynWorkPlanDTO>> responseMsg = new ResponseMsg<List<DynWorkPlanDTO>>();
		QueryReqBean<DynWorkPlanDTO> queryReqBean = mutibean.getDto1();
        String orderby = mutibean.getDto2();
        String keyWord = mutibean.getDto3();
		List<DynWorkPlanDTO> queryRespBean = dynWorkPlanService.searchDynWorkPlan(queryReqBean.getSearchParams(),orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

}

