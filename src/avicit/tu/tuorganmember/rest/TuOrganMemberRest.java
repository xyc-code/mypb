package avicit.tu.tuorganmember.rest;

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

import avicit.tu.tuorganmember.dto.TuOrganMemberDTO;
import avicit.tu.tuorganmember.service.TuOrganMemberService;

import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-17 09:36
 * @类说明：团组织人员信息表Rest
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/tu/tuorganMember/TuOrganMemberRest")
public class TuOrganMemberRest {

	@Autowired
	private TuOrganMemberService leagueOrganMemberService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<TuOrganMemberDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<TuOrganMemberDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<TuOrganMemberDTO> responseMsg = new ResponseMsg<TuOrganMemberDTO>();
		TuOrganMemberDTO dto = leagueOrganMemberService.queryLeagueOrganMemberByPrimaryKey(id);
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
	public ResponseMsg<String> save(TuOrganMemberDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = leagueOrganMemberService.insertLeagueOrganMember(dto);
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
	public ResponseMsg<Integer> updateSensitive(TuOrganMemberDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = leagueOrganMemberService.updateLeagueOrganMemberSensitive(dto);
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
	public ResponseMsg<Integer> updateAll(TuOrganMemberDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = leagueOrganMemberService.updateLeagueOrganMemberAll(dto);
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
		int count = leagueOrganMemberService.deleteLeagueOrganMemberById(id);
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
		int count = leagueOrganMemberService.deleteLeagueOrganMemberByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param Muti3Bean<queryReqBean,orderBy,keyWord> 查询条件
	 * @return ResponseMsg<QueryRespBean<TuOrganMemberDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<TuOrganMemberDTO>> searchByPage(Muti3Bean<QueryReqBean<TuOrganMemberDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<TuOrganMemberDTO>> responseMsg = new ResponseMsg<QueryRespBean<TuOrganMemberDTO>>();
		QueryReqBean<TuOrganMemberDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<TuOrganMemberDTO> queryRespBean = leagueOrganMemberService
				.searchLeagueOrganMemberByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * 按条件不分页查询
	 * @param Muti3Bean<queryReqBean,orderBy,keyWord> 查询条件
	 * @return ResponseMsg<List<TuOrganMemberDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<TuOrganMemberDTO>> search(Muti3Bean<QueryReqBean<TuOrganMemberDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<List<TuOrganMemberDTO>> responseMsg = new ResponseMsg<List<TuOrganMemberDTO>>();
		QueryReqBean<TuOrganMemberDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		List<TuOrganMemberDTO> queryRespBean = leagueOrganMemberService.searchLeagueOrganMember(queryReqBean.getSearchParams(),orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}
}

