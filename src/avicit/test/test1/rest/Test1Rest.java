package avicit.test.test1.rest;


import avicit.platform6.core.rest.msg.Muti3Bean;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.core.rest.resteasy.RestEasyController;

import avicit.test.test1.dto.Test1DTO;
import avicit.test.test1.service.Test1Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;
import javax.ws.rs.*;


/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-26 10:27
 * @类说明：
 * @修改记录： 
 */
@RestEasyController
@Path("/api/avicit/test/test1/test1Rest")
public class Test1Rest {

	@Autowired
	private Test1Service test1Service;

	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return ResponseMsg<Test1DTO>
	 * @throws Exception
	 */
	@GET
	@Path("/get/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<Test1DTO> get(@PathParam("id") String id) throws Exception {
		ResponseMsg<Test1DTO> responseMsg = new ResponseMsg<Test1DTO>();
		Test1DTO dto = test1Service.queryTest1ByPrimaryKey(id);
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
	public ResponseMsg<String> save(Test1DTO dto) throws Exception {
		ResponseMsg<String> responseMsg = new ResponseMsg<String>();
		String id = test1Service.insertTest1(dto);
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
	public ResponseMsg<Integer> updateSensitive(Test1DTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = test1Service.updateTest1Sensitive(dto);
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
	public ResponseMsg<Integer> updateAll(Test1DTO dto) throws Exception {
		ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
		int count = test1Service.updateTest1All(dto);
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
		int count = test1Service.deleteTest1ById(id);
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
		int count = test1Service.deleteTest1ByIds(ids);
		responseMsg.setResponseBody(count);
		return responseMsg;
	}

	/**
	 * 按条件分页查询
	 * @param mutibean 查询条件
	 * @return ResponseMsg<QueryRespBean<Test1DTO>>
	 * @throws Exception
	 */
	@POST
	@Path("/searchByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<Test1DTO>> searchByPage(Muti3Bean<QueryReqBean<Test1DTO>, String,String> mutibean)
			throws Exception {
		ResponseMsg<QueryRespBean<Test1DTO>> responseMsg = new ResponseMsg<QueryRespBean<Test1DTO>>();
		QueryReqBean<Test1DTO> queryReqBean = mutibean.getDto1();
		String orderby = mutibean.getDto2();
		String keyWord = mutibean.getDto3();
		QueryRespBean<Test1DTO> queryRespBean = test1Service
				.searchTest1ByPage(queryReqBean,orderby,keyWord);
		responseMsg.setResponseBody(queryRespBean);
		return responseMsg;
	}

	/**
     * 按条件不分页查询
     * @param mutibean 查询条件
     * @return ResponseMsg<List<Test1DTO>>
     * @throws Exception
     */
    @POST
    @Path("/search/v1/")
    @Produces("application/json;charset=UTF-8")
    @Consumes("application/json;charset=UTF-8")
    public ResponseMsg<List<Test1DTO>> search(Muti3Bean<QueryReqBean<Test1DTO>, String,String> mutibean)
            throws Exception {
        ResponseMsg<List<Test1DTO>> responseMsg = new ResponseMsg<List<Test1DTO>>();
        QueryReqBean<Test1DTO> queryReqBean = mutibean.getDto1();
        String orderby = mutibean.getDto2();
        String keyWord = mutibean.getDto3();
        List<Test1DTO> queryRespBean = test1Service.searchTest1(queryReqBean.getSearchParams(),orderby,keyWord);
        responseMsg.setResponseBody(queryRespBean);
        return responseMsg;
    }

}

