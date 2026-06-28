package avicit.platform6.rljcRest.service;
import java.io.Serializable;
import java.util.List;
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
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.rljcRest.dao.DynMdmRyDao;
import avicit.platform6.rljcRest.dto.DynMdmRyDTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：avicitdev@avicit.com
 * @创建时间： 2024-01-02 11:39
 * @类说明：请填写
 * @修改记录： 
 */
@Service
public class DynMdmRyService  implements Serializable {

	private static final Logger LOGGER =  LoggerFactory.getLogger(DynMdmRyService.class);
	
    private static final long serialVersionUID = 1L;
    
	@Autowired
	private DynMdmRyDao dynMdmRyDao;


																																																																																															/**
	 * 按条件分页查询
	 * @param queryReqBean 分页
	 * @param oderby 排序
	 * @param orgIdentity 组织id
	 * @return QueryRespBean<DynMdmRyDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynMdmRyDTO> searchDynMdmRyByPage(QueryReqBean<DynMdmRyDTO> queryReqBean,String orgIdentity,String oderby) throws Exception {
		try{
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynMdmRyDTO searchParams = queryReqBean.getSearchParams();
			Page<DynMdmRyDTO> dataList =  dynMdmRyDao.searchDynMdmRyByPage(searchParams,orgIdentity,oderby);
			QueryRespBean<DynMdmRyDTO> queryRespBean =new QueryRespBean<DynMdmRyDTO>();

			queryRespBean.setResult(dataList);
			return queryRespBean;
		}catch(Exception e){
			LOGGER.error("searchDynMdmRyByPage出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(),e);
		}
	}
			 									
																																																																																															/**
	 * 按条件or查询的分页查询
	 * @param queryReqBean 分页 
	 * @param oderby 排序
	 * @param orgIdentity 组织id
	 * @return QueryRespBean<DynMdmRyDTO>
	 * @throws Exception
	 */
	public QueryRespBean<DynMdmRyDTO> searchDynMdmRyByPageOr(QueryReqBean<DynMdmRyDTO> queryReqBean,String orgIdentity,String oderby) throws Exception {
		try{
			PageHelper.startPage(queryReqBean.getPageParameter());
			DynMdmRyDTO searchParams = queryReqBean.getSearchParams();
			Page<DynMdmRyDTO> dataList =  dynMdmRyDao.searchDynMdmRyByPageOr(searchParams,orgIdentity,oderby);
			QueryRespBean<DynMdmRyDTO> queryRespBean =new QueryRespBean<DynMdmRyDTO>();

			queryRespBean.setResult(dataList);
			return queryRespBean;
		}catch(Exception e){
			LOGGER.error("searchDynMdmRyByPage出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(),e);
		}
	}
			 									/**
	 * 按条件查询
	 * @param queryReqBean 条件
	 * @return List<DynMdmRyDTO>
	 * @throws Exception
	 */
	public List<DynMdmRyDTO> searchDynMdmRy(QueryReqBean<DynMdmRyDTO> queryReqBean) throws Exception {
	    try{
	    	DynMdmRyDTO searchParams = queryReqBean.getSearchParams();
	    	List<DynMdmRyDTO> dataList = dynMdmRyDao.searchDynMdmRy(searchParams);
	    	return dataList;
	    }catch(Exception e){
	    	LOGGER.error("searchDynMdmRy出错：", e);
	    	e.printStackTrace();
	    	throw new DaoException(e.getMessage(),e);
	    }
    }
	/**
	 * 通过主键查询单条记录
	 * @param id 主键id
	 * @return DynMdmRyDTO
	 * @throws Exception
	 */
	public DynMdmRyDTO queryDynMdmRyByPrimaryKey(String id) throws Exception {
		try{
			DynMdmRyDTO dto = dynMdmRyDao.findDynMdmRyById(id);
			//记录日志
			if(dto != null){
			  SysLogUtil.log4Query(dto);
			}
			return dto;
		}catch(Exception e){
	    	LOGGER.error("queryDynMdmRyByPrimaryKey出错：", e);
	    	e.printStackTrace();
	    	throw new DaoException(e.getMessage(),e);
	    }
	}

		/**
	 * 新增对象
	 * @param dto 保存对象
	 * @return String
	 * @throws Exception
	 */
	public String insertDynMdmRy(DynMdmRyDTO dto) throws Exception {
		try{
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			dynMdmRyDao.insertDynMdmRy(dto);
			//记录日志
			if(dto != null){
			  SysLogUtil.log4Insert(dto);
			}
			return id;
		}catch(Exception e){
			LOGGER.error("insertDynMdmRy出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	/**
	 * 批量新增对象
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertDynMdmRyList(List<DynMdmRyDTO> dtoList) throws Exception {
		List<DynMdmRyDTO> demo = new ArrayList<DynMdmRyDTO>();
		for(DynMdmRyDTO dto: dtoList){
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			//记录日志
			if(dto != null){
			  SysLogUtil.log4Insert(dto);
			}
			demo.add(dto);
		}
		try{
		    return dynMdmRyDao.insertDynMdmRyList(demo);
		}catch(Exception e){
			LOGGER.error("insertDynMdmRyList出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	/**
	 * 修改对象全部字段
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynMdmRy(DynMdmRyDTO dto) throws Exception {
			//记录日志
			DynMdmRyDTO old =findByCode(dto.getJtygbm());
			if(old != null){
			  SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto,true);
			int ret = dynMdmRyDao.updateDynMdmRyAll(old);
			if(ret ==0){
				throw new DaoException("数据失效，请重新更新");
			}
			return ret;
	}
	/**
	 * 修改对象部分字段
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateDynMdmRySensitive(DynMdmRyDTO dto) throws Exception {
		try{
			//记录日志
			DynMdmRyDTO old =findByCode(dto.getJtygbm());
			if(old != null){
			  SysLogUtil.log4Update(dto, old);
			}
			//20241126 modby wenc 添加人力数据为NULL校验
			if("NULL".equals(dto.getCsd())){
				dto.setCsd(null);
			}
			if("NULL".equals(dto.getJylb())){
				dto.setJylb(null);
			}
			if("NULL".equals(dto.getJtzz())){
				dto.setJtzz(null);
			}
			if("NULL".equals(dto.getJndj())){
				dto.setJndj(null);
			}
			if("NULL".equals(dto.getZc())){
				dto.setZc(null);
			}
			if("NULL".equals(dto.getJg())){
				dto.setJg(null);
			}
			//20241126 endby wenc 添加人力数据为NULL校验
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto,true);
			int count = dynMdmRyDao.updateDynMdmRySensitive(old);
			if(count ==0){
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		}catch(Exception e){
			LOGGER.error("updateDynMdmRySensitive出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(),e);
		}
	}
	
	/**
	 * 批量更新对象
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateDynMdmRyList(List<DynMdmRyDTO> dtoList) throws Exception {
		try{
            return dynMdmRyDao.updateDynMdmRyList(dtoList);	 
		}catch(Exception e){
			LOGGER.error("updateDynMdmRyList出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(),e);
		}

	}
	
	
	/**
	 * 按主键单条删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynMdmRyById(String id) throws Exception {
		if(StringUtils.isEmpty(id)){
		   throw new Exception("删除失败！传入的参数主键为null");
		   }
		try{
			//记录日志
			DynMdmRyDTO obje = findById(id);
			if(obje != null){
				SysLogUtil.log4Delete(obje);
			}
			return dynMdmRyDao.deleteDynMdmRyById(id);
		}catch(Exception e){
			LOGGER.error("deleteDynMdmRyById出错：", e);
			e.printStackTrace();
			throw new DaoException(e.getMessage(),e);
		}
	}
	/**
	 * 批量删除数据
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynMdmRyByIds(String[] ids) throws Exception{
		int result =0;
		for(String id : ids ){
			deleteDynMdmRyById(id);
			result++;
		}
		return result;
	}
	
	/**
	 * 批量删除数据2
	 * @param idlist 主键集合
	 * @return int
	 * @throws Exception
	 */
	public int deleteDynMdmRyList(List<String> idlist) throws Exception{
		try{
		    return dynMdmRyDao.deleteDynMdmRyList(idlist);
		}catch(Exception e){
	    	LOGGER.error("deleteDynMdmRyList出错：", e);
	    	e.printStackTrace();
	    	throw e;
	    }
	}
		/**
	 * 日志专用，内部方法，不再记录日志
	 * @param id 主键id
	 * @return DynMdmRyDTO
	 * @throws Exception
	 */
	private DynMdmRyDTO findById(String id) throws Exception {
		try{
			DynMdmRyDTO dto = dynMdmRyDao.findDynMdmRyById(id);
			//记录日志
			if(dto != null){
				SysLogUtil.log4Query(dto);
			}
			return dto;
		}catch(Exception e){
    		LOGGER.error("findById出错：", e);
    		e.printStackTrace();
    		throw new DaoException(e.getMessage(),e);
	    }
	}
	/**
	 * 通过员工编码查询单条记录
	 * @param code 员工编码
	 * @return DynMdmRyDTO
	 * @throws Exception
	 */
	public DynMdmRyDTO findByCode(String code) throws Exception {
		try{
			DynMdmRyDTO dto = dynMdmRyDao.findDynMdmRyByCode(code);
			return dto;
		}catch(Exception e){
    		LOGGER.error("findById出错：", e);
    		e.printStackTrace();
    		throw new DaoException(e.getMessage(),e);
	    }
	}
	
}
