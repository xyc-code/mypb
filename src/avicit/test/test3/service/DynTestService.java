package avicit.test.test3.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.sfn.intercept.SelfDefinedQuery;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.test.test3.dao.DynTestDao;
import avicit.test.test3.dto.DynTestDto;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

@Service
public class DynTestService  implements Serializable {

    private static final Logger LOGGER =  LoggerFactory.getLogger(DynTestService.class);
	
    private static final long serialVersionUID = 1L;
    
	@Autowired
	private DynTestDao dao;
	
    /**
	 * @description:按条件分页查询
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public QueryRespBean<DynTestDto> searchDynTestByPage(QueryReqBean<DynTestDto> queryReqBean,String sql, String Orderby) {
		try{
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynTestDto searchParams = queryReqBean.getSearchParams();
			Page<DynTestDto> dataList =  this.dao.searchDynTestByPage(searchParams,sql, Orderby);
			QueryRespBean<DynTestDto> queryRespBean =new QueryRespBean<DynTestDto>();

			queryRespBean.setResult(dataList);
			return queryRespBean;
		}catch(Exception e){
			LOGGER.error("searchDynTestByPage出错：", e);
			throw new DaoException(e.getMessage(),e);
		}
	}
	/**
	 * @description:按条件or查询的分页查询
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public QueryRespBean<DynTestDto> searchDynTestByPageOr(QueryReqBean<DynTestDto> queryReqBean,String sql, String Orderby) {
		try{
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynTestDto searchParams = queryReqBean.getSearchParams();
			Page<DynTestDto> dataList =  this.dao.searchDynTestByPageOr(searchParams,sql, Orderby);
			QueryRespBean<DynTestDto> queryRespBean =new QueryRespBean<DynTestDto>();

			queryRespBean.setResult(dataList);
			return queryRespBean;
		}catch(Exception e){
			LOGGER.error("searchDynTestByPage出错：", e);
			throw new DaoException(e.getMessage(),e);
		}
	}

    /**
	 * @description:按条件分页查询：流程
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public QueryRespBean<DynTestDto> searchDynTestBpmByPage(QueryReqBean<DynTestDto> queryReqBean,String sql, String Orderby) {
		try{
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynTestDto searchParams = queryReqBean.getSearchParams();
			Page<DynTestDto> dataList =  this.dao.searchDynTestBpmByPage(searchParams,sql, Orderby);
			QueryRespBean<DynTestDto> queryRespBean =new QueryRespBean<DynTestDto>();

			queryRespBean.setResult(dataList);
			return queryRespBean;
		}catch(Exception e){
			LOGGER.error("searchDynTestByPage出错：", e);
			throw new DaoException(e.getMessage(),e);
		}
	}
	/**
	 * @description:按条件or查询的分页查询：流程
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public QueryRespBean<DynTestDto> searchDynTestBpmByPageOr(QueryReqBean<DynTestDto> queryReqBean,String sql, String Orderby) {
		try{
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynTestDto searchParams = queryReqBean.getSearchParams();
			Page<DynTestDto> dataList =  this.dao.searchDynTestBpmByPageOr(searchParams,sql, Orderby);
			QueryRespBean<DynTestDto> queryRespBean =new QueryRespBean<DynTestDto>();

			queryRespBean.setResult(dataList);
			return queryRespBean;
		}catch(Exception e){
			LOGGER.error("searchDynTestByPage出错：", e);
			throw new DaoException(e.getMessage(),e);
		}
	}

	/**
	 * @description:按条件查询，不分页
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public List<DynTestDto> searchDynTest(DynTestDto searchParams) {
	    try{
	    	List<DynTestDto> dataList = this.dao.searchDynTest(searchParams);
	    	return dataList;
	    }catch(Exception e){
	    	LOGGER.error("searchDynTest出错：", e);
	    	throw new DaoException(e.getMessage(),e);
	    }
    }

	/**
	 * @description:按条件查询，不分页
	 * @param queryReqBean
	 * @return
	 * @throws Exception
	 */
	public List<DynTestDto> searchDynTestSelfDefined(DynTestDto searchParams, String sql) {
	    try{
	    	List<DynTestDto> dataList = this.dao.searchDynTestSelfDefined(searchParams, sql);
	    	return dataList;
	    }catch(Exception e){
	    	LOGGER.error("searchDynTest出错：", e);
	    	throw new DaoException(e.getMessage(),e);
	    }
    }
	/**
	 * @description:通过主键查询单条记录
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public DynTestDto queryDynTestByPrimaryKey(String id) {
		try{
			DynTestDto dto = this.dao.findDynTestById(id);
			//记录日志
			SysLogUtil.log4Query(dto);
			return dto;
		}catch(Exception e){
	    	LOGGER.error("queryDynTestByPrimaryKey出错：", e);
	    	throw new DaoException(e.getMessage(),e);
	    }
	}

		/**
	 * @description:新增对象
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	public String insertDynTest(DynTestDto dto) {
		try{
            String id = dto.getID();
			if (id == null || "".equals(id)){
                id = ComUtil.getId();
                dto.setID(id);
			}
			PojoUtil.setSysProperties(dto, OpType.insert);
			this.dao.insertDynTest(dto);
			//记录日志
			SysLogUtil.log4Insert(dto);
			return id;
		}catch(Exception e){
			LOGGER.error("insertDynTest出错：", e);
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	
	/**
	 * @description:修改对象全部字段
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	public int updateDynTest(DynTestDto dto) {
			//记录日志
			DynTestDto old =findById(dto.getID());
			
			SysLogUtil.log4Update(dto, old);
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto,true);
			int ret = this.dao.updateDynTestAll(old);
			if(ret ==0){
				throw new DaoException("数据失效，请重新更新");
			}
			return ret;
	}
	
	
	
	
	/**
	 * @description:按主键单条删除
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public int deleteDynTest(String id) throws Exception {
		if(StringUtils.isEmpty(id)){
		   throw new Exception("删除失败！传入的参数主键为null");
		   }
		try{
			//记录日志
			SysLogUtil.log4Delete(findById(id));
			return this.dao.deleteDynTestById(id);
		}catch(Exception e){
			LOGGER.error("deleteDynTestById出错：", e);
			throw new DaoException(e.getMessage(),e);
		}
	}
	
		/**
	 * 日志专用，内部方法，不再记录日志
	 * @return
	 * @throws Exception
	 */
	private DynTestDto findById(String id) {
		try{
				DynTestDto dto = this.dao.findDynTestById(id);
				if (dto!=null){
																																				                        dto.setCreationDate(dto.getCREATION_DATE());
																													dto.setCreatedBy(dto.getCREATED_BY());
														                        dto.setVersion(dto.getVERSION().longValue());
																																																	}
				return dto;
		}catch(Exception e){
	    		LOGGER.error("findById出错：", e);
	    		throw new DaoException(e.getMessage(),e);
	    }
	}
	
}