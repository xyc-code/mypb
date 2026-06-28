package avicit.test.test.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.test.test.dto.TestDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-26 10:27
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface TestDAO {

	/**
	 * 分页查询
	 * @param testDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<TestDTO>
	 */
	public Page<TestDTO> searchTestByPage(@Param("bean") TestDTO testDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param testDTO 查询对象
	 * @param orderBy 排序条件
     * @param keyWord 关键字
	 * @return List<TestDTO>
	 */
	public List<TestDTO> searchTest(@Param("bean") TestDTO testDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    /**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<TestDTO>
	 */
	public List<TestDTO> searchTestForExport(@Param(value = "bean") TestDTO dto, @Param(value = "ids") List<String> idsList);


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return TestDTO
	 */
	public TestDTO findTestById(String id);

	/**
	 * 新增
	 * @param testDTO 保存对象
	 * @return int
	 */
	public int insertTest(TestDTO testDTO);

	/**
	 * 批量新增
	 * @param testDTOList 保存对象集合
	 * @return int
	 */
	public int insertTestList(@Param("dtoList") List<TestDTO> testDTOList);

	/**
	 * 部分更新
	 * @param testDTO 更新对象
	 * @return int
	 */
	public int updateTestSensitive(TestDTO testDTO);

	/**
	 * 全部更新
	 * @param testDTO 更新对象
	 * @return int
	 */
	public int updateTestAll(TestDTO testDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateTestList(@Param("dtoList") List<TestDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteTestById(String id);

}

