package avicit.pb.milepost.dynyouthrecord.rest;

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

import avicit.pb.milepost.dynyouthrecord.dto.DynYouthRecordDTO;
import avicit.pb.milepost.dynyouthrecord.service.DynYouthRecordService;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-12 15:04
 * @类说明：
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/pb/milepost/dynYouthRecord/dynYouthRecordRest")
public class DynYouthRecordRest {

	@Autowired
	private DynYouthRecordService dynYouthRecordService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<DynYouthRecordDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<DynYouthRecordDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<DynYouthRecordDTO> responseMsg = new ResponseMsg<DynYouthRecordDTO>();
		DynYouthRecordDTO dto = dynYouthRecordService.queryDynYouthRecordByPrimaryKey(id);
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
	public ResponseMsg<String> save(DynYouthRecordDTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = dynYouthRecordService.insertDynYouthRecord(dto);
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
	public ResponseMsg<Integer> updateSensitive(DynYouthRecordDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynYouthRecordService.updateDynYouthRecordSensitive(dto);
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
	public ResponseMsg<Integer> updateAll(DynYouthRecordDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = dynYouthRecordService.updateDynYouthRecordAll(dto);
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
		int count = dynYouthRecordService.deleteDynYouthRecordById(id);
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
		int count = dynYouthRecordService.deleteDynYouthRecordByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param queryReqBean 查询条件
	 * @return ResponseMsg<QueryRespBean<DynYouthRecordDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DynYouthRecordDTO>> searchByPage(Muti3Bean<QueryReqBean<DynYouthRecordDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<DynYouthRecordDTO>> responseMsg = new ResponseMsg<QueryRespBean<DynYouthRecordDTO>>();
		QueryReqBean<DynYouthRecordDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		/*QueryRespBean<DynYouthRecordDTO> queryRespBean = dynYouthRecordService
				.searchDynYouthRecordByPage(queryReqBean,orderby,keyWord);*/
		/*responseMsg.setResponseBody(queryRespBean);*/
		return responseMsg;
	}

	/**
	 * 按条件不分页查询
	 * @param queryReqBean 查询条件
	 * @return ResponseMsg<List<DynYouthRecordDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<DynYouthRecordDTO>> search(Muti3Bean<QueryReqBean<DynYouthRecordDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<List<DynYouthRecordDTO>> responseMsg = new ResponseMsg<List<DynYouthRecordDTO>>();
		QueryReqBean<DynYouthRecordDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		List<DynYouthRecordDTO> queryRespBean = dynYouthRecordService.searchDynYouthRecord(queryReqBean.getSearchParams(),orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}
}

