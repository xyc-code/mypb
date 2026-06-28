package avicit.pb.organize.partyorganmember.rest;

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

import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-12 11:39
 * @类说明：党组织人员信息表Rest
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/pb/organize/partyOrganMember/partyOrganMemberRest")
public class PartyOrganMemberRest {

	@Autowired
	private PartyOrganMemberService partyOrganMemberService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<PartyOrganMemberDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<PartyOrganMemberDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<PartyOrganMemberDTO> responseMsg = new ResponseMsg<PartyOrganMemberDTO>();
		PartyOrganMemberDTO dto = partyOrganMemberService.queryPartyOrganMemberByPrimaryKey(id);
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
	public ResponseMsg<String> save(PartyOrganMemberDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = partyOrganMemberService.insertPartyOrganMember(dto);
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
	public ResponseMsg<Integer> updateSensitive(PartyOrganMemberDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = partyOrganMemberService.updatePartyOrganMemberSensitive(dto);
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
	public ResponseMsg<Integer> updateAll(PartyOrganMemberDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = partyOrganMemberService.updatePartyOrganMemberAll(dto);
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
		int count = partyOrganMemberService.deletePartyOrganMemberById(id);
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
		int count = partyOrganMemberService.deletePartyOrganMemberByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param Muti3Bean<queryReqBean,orderBy,keyWord> 查询条件
	 * @return ResponseMsg<QueryRespBean<PartyOrganMemberDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<PartyOrganMemberDTO>> searchByPage(Muti3Bean<QueryReqBean<PartyOrganMemberDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<PartyOrganMemberDTO>> responseMsg = new ResponseMsg<QueryRespBean<PartyOrganMemberDTO>>();
		QueryReqBean<PartyOrganMemberDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<PartyOrganMemberDTO> queryRespBean = partyOrganMemberService
				.searchPartyOrganMemberByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * 按条件不分页查询
	 * @param Muti3Bean<queryReqBean,orderBy,keyWord> 查询条件
	 * @return ResponseMsg<List<PartyOrganMemberDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<PartyOrganMemberDTO>> search(Muti3Bean<QueryReqBean<PartyOrganMemberDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<List<PartyOrganMemberDTO>> responseMsg = new ResponseMsg<List<PartyOrganMemberDTO>>();
		QueryReqBean<PartyOrganMemberDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		List<PartyOrganMemberDTO> queryRespBean = partyOrganMemberService.searchPartyOrganMember(queryReqBean.getSearchParams(),orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}
}

