package avicit.test.test.service;

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
import avicit.test.test.dao.TestDAO;
import avicit.test.test.dto.TestDTO;
import org.springframework.util.CollectionUtils;
import avicit.test.test1.dto.Test1DTO;
import avicit.test.test1.service.Test1Service;
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
public class TestService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(TestService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private TestDAO testDAO;
	

	@Autowired
	private Test1Service test1Service;

	@Autowired
    private SysExcelExpAPI sysExcelExpAPI;

	/**
	* 查询（分页）
	* @param queryReqBean 分页
	* @param orderBy 排序语句
	* @param keyWord 快速查询条件
	* @return QueryRespBean<TestDTO>
	* @throws Exception
	*/
	public QueryRespBean<TestDTO> searchTestByPage(QueryReqBean<TestDTO> queryReqBean, String orderBy, String keyWord) throws Exception {
		try {
			PageHelper.startPage(queryReqBean.getPageParameter());
			TestDTO searchParams = queryReqBean.getSearchParams();
			Page<TestDTO> dataList = testDAO.searchTestByPage(searchParams, orderBy, keyWord);
			QueryRespBean<TestDTO> queryRespBean = new QueryRespBean<TestDTO>();
			queryRespBean.setResult(dataList);
			return queryRespBean;
		} catch (Exception e) {
			logger.error("searchTestByPage出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 查询（不分页）
	* @param searchParams 对象
	* @param keyWord 关键字
	* @param orderBy 排序
	* @return List<TestDTO>
	* @throws Exception
	*/
	public List<TestDTO> searchTest(TestDTO searchParams, String orderBy, String keyWord)
			throws Exception {
		try {
			List<TestDTO> dataList = testDAO.searchTest(searchParams, orderBy, keyWord);
			return dataList;
		} catch (Exception e) {
			logger.error("searchTest出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return TestDTO
	 * @throws Exception
	 */
	public TestDTO queryTestByPrimaryKey(String id) throws Exception {
		try {
			TestDTO dto = testDAO.findTestById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			logger.error("queryTestByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}


	/**
	* 新增
	* @param dto 保存对象
	* @return String
	* @throws Exception
	*/
	public String insertTest(TestDTO dto, List<Test1DTO> updateSubList) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			testDAO.insertTest(dto);

			if (!CollectionUtils.isEmpty(updateSubList)) {
				for (Test1DTO test1DTO : updateSubList) {
					test1DTO.setTestId(id);
					test1DTO.setOrgIdentity(dto.getOrgIdentity());
					test1Service.insertTest1(test1DTO);
				}
			}

			// 记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			logger.error("insertTest出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量新增
	 * @param dtoList 保存对象集合
	 * @return int
	 * @throws Exception
	 */
	public int insertTestList(List<TestDTO> dtoList) throws Exception {
		List<TestDTO> beanList = new ArrayList<TestDTO>();
		for (TestDTO dto : dtoList) {
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
			return testDAO.insertTestList(beanList);
		} catch (Exception e) {
			logger.error("insertTestList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 全部更新
	 * @param dto 修改对象
	 * @return int
	 * @throws Exception
	 */
	public int updateTestAll(TestDTO dto) throws Exception {
		//记录日志
		TestDTO old = findById(dto.getId());
		if (old != null) {
			SysLogUtil.log4Update(dto, old);
		}
		PojoUtil.setSysProperties(dto, OpType.update);
		int ret = testDAO.updateTestAll(dto);
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
	public int updateTestSensitive(TestDTO dto, List<Test1DTO> updateSubList, String[] removeSubIds) throws Exception {
		try {
			// 记录日志
			TestDTO old = findById(dto.getId());
			if (old != null) {
				SysLogUtil.log4Update(dto, old);
			}
			PojoUtil.setSysProperties(dto, OpType.update);
			PojoUtil.copyProperties(old, dto, true);
			int count = testDAO.updateTestSensitive(old);
			if (count == 0) {
				throw new DaoException("数据失效，请重新更新");
			}

			if (!CollectionUtils.isEmpty(updateSubList)) {
				for (Test1DTO test1DTO : updateSubList) {
					Test1DTO exsitTest1DTO = test1Service.queryTest1ByPrimaryKey(test1DTO.getId());
					if (exsitTest1DTO == null) {
						test1DTO.setTestId(old.getId());
						test1DTO.setOrgIdentity(old.getOrgIdentity());
						test1Service.insertTest1(test1DTO);
					} else {
						test1Service.updateTest1Sensitive(test1DTO);
					}
				}
			}
			if (removeSubIds != null && removeSubIds.length > 0) {
				test1Service.deleteTest1ByIds(removeSubIds);
			}
			return count;
		} catch (Exception e) {
			logger.error("updateTestSensitive出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量更新
	 * @param dtoList 修改对象集合
	 * @return int
	 * @throws Exception
	 */
	public int updateTestList(List<TestDTO> dtoList) throws Exception {
		try {
			return testDAO.updateTestList(dtoList);
		} catch (Exception e) {
			logger.error("updateTestList出错：", e);
			throw new DaoException(e.getMessage(), e);
		}

	}

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 * @throws Exception
	 */
	public int deleteTestById(String id) throws Exception {
		if (StringUtils.isEmpty(id)) {
			throw new Exception("删除失败！传入的参数主键为null");
		}
		try {
			//记录日志
			TestDTO dto = findById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			// 删除关联子表数据
			Test1DTO queryParams = new Test1DTO();
			queryParams.setTestId(id);
			List<Test1DTO> list = test1Service.searchTest1(queryParams,"","");
			for (Test1DTO test1DTO : list) {
				test1Service.deleteTest1ById(test1DTO.getId());
			}
			return testDAO.deleteTestById(id);
		} catch (Exception e) {
			logger.error("deleteTestById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteTestByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteTestById(id);
			result++;
		}
		return result;
	}

    /**
     * 查询（导出）
     * @param searchParams 条件
     * @param idsList 导出数据集合
     * @return List<TestDTO>
     * @throws Exception
     */
    public List<TestDTO> searchTestForExport(TestDTO searchParams, List<String> idsList)
            throws Exception {
        try {
            List<TestDTO> dataList = testDAO.searchTestForExport(searchParams, idsList);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchTestForExport出错：", e);
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
	* @return TestDTO
	* @throws Exception
	*/
	private TestDTO findById(String id) throws Exception {
		try {
			TestDTO dto = testDAO.findTestById(id);
			return dto;
		} catch (Exception e) {
			logger.error("findById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
}

