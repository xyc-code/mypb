package avicit.tradeunion.dacaremedicine.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import avicit.tradeunion.dacaremedicineitem.dto.DaCareMedicineItemDTO;
import org.springframework.beans.factory.annotation.Autowired;

import avicit.platform6.core.rest.msg.Muti3Bean;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.core.rest.resteasy.RestEasyController;

import avicit.tradeunion.dacaremedicine.dto.DaCareMedicineDTO;
import avicit.tradeunion.dacaremedicine.service.DaCareMedicineService;
import avicit.platform6.core.shiroSecurity.contextThread.ContextCommonHolder;
import avicit.platform6.api.sysshirolog.impl.AfterLoginSessionProcess;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2021-03-28 13:08
 * @类说明：
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/tradeunion/daCareMedicine/daCareMedicineRest")
public class DaCareMedicineRest {

	@Autowired
	private DaCareMedicineService daCareMedicineService;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<DaCareMedicineDTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<DaCareMedicineDTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<DaCareMedicineDTO> responseMsg = new ResponseMsg<DaCareMedicineDTO>();
		DaCareMedicineDTO dto = daCareMedicineService.queryDaCareMedicineByPrimaryKey(id);
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
	public ResponseMsg<String> save(DaCareMedicineDTO dto,List<DaCareMedicineItemDTO> updateSubList) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = daCareMedicineService.insertDaCareMedicine(dto,updateSubList);
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
	public ResponseMsg<Integer> updateSensitive(DaCareMedicineDTO dto,List<DaCareMedicineItemDTO> updateSubList, String[] removeSubIds) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = daCareMedicineService.updateDaCareMedicineSensitive(dto,updateSubList,removeSubIds);
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
	public ResponseMsg<Integer> updateAll(DaCareMedicineDTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = daCareMedicineService.updateDaCareMedicineAll(dto);
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
		int count = daCareMedicineService.deleteDaCareMedicineById(id);
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
		int count = daCareMedicineService.deleteDaCareMedicineByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<QueryRespBean<DaCareMedicineDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DaCareMedicineDTO>> searchByPage(Muti3Bean<QueryReqBean<DaCareMedicineDTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<DaCareMedicineDTO>> responseMsg = new ResponseMsg<QueryRespBean<DaCareMedicineDTO>>();
		QueryReqBean<DaCareMedicineDTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<DaCareMedicineDTO> queryRespBean = daCareMedicineService
				.searchDaCareMedicineByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
	 * 按条件不分页查询
	 * @param queryReqBean 查询条件
	 * @return ResponseMsg<List<DaCareMedicineDTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/search/v1/")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<DaCareMedicineDTO>> search(QueryReqBean<DaCareMedicineDTO> queryReqBean)
			throws Exception {
		ResponseMsg<List<DaCareMedicineDTO>> responseMsg = new ResponseMsg<List<DaCareMedicineDTO>>();
		List<DaCareMedicineDTO> queryRespBean = daCareMedicineService.searchDaCareMedicine(queryReqBean.getSearchParams());
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

}

