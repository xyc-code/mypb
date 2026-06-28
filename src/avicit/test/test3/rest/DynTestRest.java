package avicit.test.test3.rest;

import java.util.List;
import java.util.Map;

import javax.ws.rs.Consumes;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import avicit.platform6.core.rest.msg.Muti2Bean;
import avicit.platform6.core.rest.msg.Muti3Bean;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.core.rest.resteasy.RestEasyController;
import avicit.test.test3.dto.DynTestDto;
import avicit.test.test3.service.DynTestService;

@RestEasyController
@Path("/api/avicit/test/Test3/DynTestRest")
public class DynTestRest   {

	private static final Logger LOGGER =  LoggerFactory.getLogger(DynTestRest.class);
	
	@Autowired
	private DynTestService service;
    
    @POST
	@Path("/searchDynTestByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DynTestDto>> searchDynTestByPage(Muti3Bean<QueryReqBean<DynTestDto>,String, String> data){
    	QueryReqBean<DynTestDto> queryReqBean=data.getDto1();
    	String sql=data.getDto2();
    	String Orderby=data.getDto3();
		ResponseMsg<QueryRespBean<DynTestDto>> responseMsg = new ResponseMsg<QueryRespBean<DynTestDto>>();
        QueryRespBean<DynTestDto> serviceResult=service.searchDynTestByPage(queryReqBean,sql,Orderby);
        responseMsg.setResponseBody(serviceResult);
        return responseMsg;
	}

	@POST
	@Path("/searchDynTestByPageOr/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DynTestDto>> searchDynTestByPageOr
		(Muti3Bean<QueryReqBean<DynTestDto>,String, String> data){
		QueryReqBean<DynTestDto> queryReqBean=data.getDto1();
    	String sql=data.getDto2();
    	String Orderby=data.getDto3();   
		ResponseMsg<QueryRespBean<DynTestDto>> responseMsg = 
	        		new ResponseMsg<QueryRespBean<DynTestDto>>();
        QueryRespBean<DynTestDto> serviceResult=service.searchDynTestByPageOr(queryReqBean,sql,Orderby);
        responseMsg.setResponseBody(serviceResult);
        return responseMsg;
	}
	
	@POST
	@Path("/searchDynTestBpmByPage/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DynTestDto>> searchDynTestBpmByPage
	(Muti3Bean<QueryReqBean<DynTestDto>,String, String> data){
		QueryReqBean<DynTestDto> queryReqBean=data.getDto1();
    	String sql=data.getDto2();
    	String Orderby=data.getDto3();      
		ResponseMsg<QueryRespBean<DynTestDto>> responseMsg = new ResponseMsg<QueryRespBean<DynTestDto>>();
        QueryRespBean<DynTestDto> serviceResult=service.searchDynTestBpmByPage(queryReqBean,sql,Orderby);
        responseMsg.setResponseBody(serviceResult);
        return responseMsg;
	}
	
	@POST
	@Path("/searchDynTest/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<DynTestDto>> searchDynTest(DynTestDto searchParams){
	        ResponseMsg<List<DynTestDto>> responseMsg = new ResponseMsg<List<DynTestDto>>();
	        List<DynTestDto> serviceResult=service.searchDynTest(searchParams);
	        responseMsg.setResponseBody(serviceResult);
	        return responseMsg;
	}




	@POST
	@Path("/searchDynTestBpmByPageOr/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<QueryRespBean<DynTestDto>> searchDynTestBpmByPageOr(Muti3Bean<QueryReqBean<DynTestDto>,String, String> data){
		QueryReqBean<DynTestDto> queryReqBean=data.getDto1();
    	String sql=data.getDto2();
    	String Orderby=data.getDto3(); 
		ResponseMsg<QueryRespBean<DynTestDto>> responseMsg = new ResponseMsg<QueryRespBean<DynTestDto>>();
        QueryRespBean<DynTestDto> serviceResult=service.searchDynTestBpmByPageOr(queryReqBean,sql,Orderby);
        responseMsg.setResponseBody(serviceResult);
        return responseMsg;
	}
	
	@POST
	@Path("/searchDynTestSelfDefined/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<List<DynTestDto>> searchDynTestSelfDefined(Muti2Bean<DynTestDto,String> data){
		
		DynTestDto searchParams=data.getDto1();
		String sql=data.getDto2();
		ResponseMsg<List<DynTestDto>> responseMsg = new ResponseMsg<List<DynTestDto>>();
        List<DynTestDto> serviceResult=service.searchDynTestSelfDefined(searchParams,sql);
        responseMsg.setResponseBody(serviceResult);
        return responseMsg;
	}
	
	@GET
	@Path("/queryDynTestByPrimaryKey/v1/{id}")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<DynTestDto> queryDynTestByPrimaryKey(@PathParam("id")String id){
	        ResponseMsg<DynTestDto> responseMsg = new ResponseMsg<DynTestDto>();
	        DynTestDto serviceResult=service.queryDynTestByPrimaryKey(id);
	        responseMsg.setResponseBody(serviceResult);
	        return responseMsg;
	}

	@POST
	@Path("/insertDynTest/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<String> insertDynTest(DynTestDto dto){
	        ResponseMsg<String> responseMsg = new ResponseMsg<String>();
	        String serviceResult=service.insertDynTest(dto);
	        responseMsg.setResponseBody(serviceResult);
	        return responseMsg;
	}
	
	@POST
	@Path("/updateDynTest/v1")
	@Produces("application/json;charset=UTF-8")
	@Consumes("application/json;charset=UTF-8")
	public ResponseMsg<Integer> updateDynTest(DynTestDto dto){
	        ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
	        int serviceResult=service.updateDynTest(dto);
	        responseMsg.setResponseBody(serviceResult);
	        return responseMsg;
	}

	@POST
	@Path("/deleteDynTest/v1")
	@Produces("application/json;charset=UTF-8")
	public ResponseMsg<Integer> deleteDynTest(String id) throws Exception{
	        ResponseMsg<Integer> responseMsg = new ResponseMsg<Integer>();
	        int serviceResult=service.deleteDynTest(id);
	        responseMsg.setResponseBody(serviceResult);
	        return responseMsg;
	}
    
}