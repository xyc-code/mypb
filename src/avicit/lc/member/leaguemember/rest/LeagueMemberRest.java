package avicit.lc.member.leaguemember.rest;

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

import avicit.lc.member.leaguemember.dto.LeagueMemberDTO;
import avicit.lc.member.leaguemember.service.LeagueMemberService;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-17 15:19
 * @类说明：团员信息管理Rest
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/lc/member/leagueMember/leagueMemberRest")
public class LeagueMemberRest {

	@Autowired
	private LeagueMemberService leagueMemberService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<LeagueMemberDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<LeagueMemberDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<LeagueMemberDTO> responseMsg = new ResponseMsg<LeagueMemberDTO>();
		LeagueMemberDTO dto = leagueMemberService.queryLeagueMemberByPrimaryKey(id);
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
	public ResponseMsg<String> save(LeagueMemberDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = leagueMemberService.insertLeagueMember(dto);
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
	public ResponseMsg<Integer> updateSensitive(LeagueMemberDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = leagueMemberService.updateLeagueMemberSensitive(dto);
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
	public ResponseMsg<Integer> updateAll(LeagueMemberDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = leagueMemberService.updateLeagueMemberAll(dto);
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
		int count = leagueMemberService.deleteLeagueMemberById(id);
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
		int count = leagueMemberService.deleteLeagueMemberByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<QueryRespBean<LeagueMemberDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<LeagueMemberDTO>> searchByPage(Muti3Bean<QueryReqBean<LeagueMemberDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<LeagueMemberDTO>> responseMsg = new ResponseMsg<QueryRespBean<LeagueMemberDTO>>();
		QueryReqBean<LeagueMemberDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<LeagueMemberDTO> queryRespBean = leagueMemberService
				.searchLeagueMemberByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * 按条件不分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<List<LeagueMemberDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<LeagueMemberDTO>> search(Muti3Bean<QueryReqBean<LeagueMemberDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<List<LeagueMemberDTO>> responseMsg = new ResponseMsg<List<LeagueMemberDTO>>();
		QueryReqBean<LeagueMemberDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		List<LeagueMemberDTO> queryRespBean = leagueMemberService.searchLeagueMember(queryReqBean.getSearchParams(),orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}
}

