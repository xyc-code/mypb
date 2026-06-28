package avicit.test.test1.service;

import java.io.Serializable;
import java.util.*;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.test.test1.dao.Test1DAO;
import avicit.test.test1.dto.Test1DTO;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-26 10:27
 * @类说明：
 * @修改记录： 
 */
@Service
public class Test1Service implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(Test1Service.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private Test1DAO test1DAO;

	@Autowired
    private SysExcelExpAPI sysExcelExpAPI;

	/**
	* 查询（分页）
	* @param queryReqBean 分页
	* @param orderBy 排序语句
	* @param keyWord 快速查询条件
	* @return QueryRespBean<Test1DTO>
	* @throws Exception
	*/
	public QueryRespBean<Test1DTO> searchTest1ByPage(QueryReqBean<Test1DTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			Test1DTO searchParams = queryReqBean.getSearchParams();
			Page<Test1DTO> dataList = test1DAO.searchTest1ByPage(searchParams, orderBy, keyWord);
			QueryRespBean<Test1DTO> queryRespBean = new QueryRespBean<Test1DTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			logger.error("searchTest1ByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
    * 查询（不分页）
    * @param searchParams 对象
    * @param keyWord 关键字
    * @param orderBy 排序
    * @return List<Test1DTO>
    * @throws Exception
    */
    public List<Test1DTO> searchTest1(Test1DTO searchParams, String orderBy, String keyWord)
            throws Exception {
        try {
            List<Test1DTO> dataList = test1DAO.searchTest1(searchParams, orderBy, keyWord);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchTest1出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return Test1DTO
	 * @throws Exception
	 */
	public Test1DTO queryTest1ByPrimaryKey(String id) throws Exception {
		try {
			Test1DTO dto = test1DAO.findTest1ById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			logger.error("queryTest1ByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 新增
	* @param dto 保存对象
	* @return String
	* @throws Exception
	*/
	public String insertTest1(Test1DTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			test1DAO.insertTest1(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			logger.error("insertTest1出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertTest1List(List<Test1DTO> dtoList) throws Exception {
		List<Test1DTO> beanList = new ArrayList<Test1DTO>();
		for (Test1DTO dto : dtoList) {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			beanList.add(dto);
		}
		try {
			return test1DAO.insertTest1List(beanList);
		} catch (Exception e) {
			logger.error("insertTest1List出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateTest1All(Test1DTO dto) throws Exception {
		//记录日志
		Test1DTO old = findById(dto.getId());
		if (old != null) {
			SysLogUtil.log4Update(dto, old);
		}
		PojoUtil.setSysProperties(dto, OpType.update);
		int ret = test1DAO.updateTest1All(dto);
		if (ret == 0) {
			throw new DaoException("数据失效，请重新更新");
		}
		return ret;
	}

	/**
	 * 部分更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateTest1Sensitive(Test1DTO dto) throws Exception {
		try {
			//记录日志
			Test1DTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = test1DAO.updateTest1Sensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			return count;
		} catch (Exception e) {
			logger.error("updateTest1Sensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateTest1List(List<Test1DTO> dtoList) throws Exception {
		try {
			return test1DAO.updateTest1List(dtoList);
		} catch (Exception e) {
			logger.error("updateTest1List出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteTest1ById(String id) throws Exception {
		if (StringUtils.isEmpty(id)) {
			throw new Exception("删除失败！传入的参数主键为null");
		}
		try {
			//记录日志
			Test1DTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			return test1DAO.deleteTest1ById(id);
		} catch (Exception e) {
			logger.error("deleteTest1ById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteTest1ByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteTest1ById(id);
			result++;
		}
		return result;
	}

    /**
     * 查询（导出）
     * @param searchParams 条件
     * @param idsList 导出数据集合
     * @return List<Test1DTO>
     * @throws Exception
     */
    public List<Test1DTO> searchTest1ForExport(Test1DTO searchParams, List<String> idsList)
            throws Exception {
        try {
            List<Test1DTO> dataList = test1DAO.searchTest1ForExport(searchParams, idsList);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchTest1ForExport出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

	/**
     * 导出excel
     * @param templateCode 模板code
     * @param colsList 导出列集合
     * @param dataList 导出数据
     * @return
     */
    public byte[] exportExcel(String templateCode, List<SysExcelColumnDTO> colsList, List<Map<String,Object>> dataList) throws Exception{
        //构造导出模板code集合
        List<String> templateCodeList = new ArrayList<String>();
        templateCodeList.add(templateCode);
        //构造code所对应的导出列集合
        Map<String,List<SysExcelColumnDTO>> colsMap = new HashMap<String,List<SysExcelColumnDTO>>();
        colsMap.put(templateCode,colsList);
        //构造code所对应的数据集合
        Map<String,List<Map<String,Object>>> dataMap = new HashMap<String,List<Map<String,Object>>>();
        dataMap.put(templateCode,dataList);
        byte[] bytes = sysExcelExpAPI.exportExcel(templateCodeList, colsMap, dataMap);
        return bytes;
    }

	/**
	* 日志专用查询
	* @param id 主键id
	* @return Test1DTO
	* @throws Exception
	*/
	private Test1DTO findById(String id) throws Exception {
		try {
			Test1DTO dto = test1DAO.findTest1ById(id);
			return dto;
		} catch (Exception e) {
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

