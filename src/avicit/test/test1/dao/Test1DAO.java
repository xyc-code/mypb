package avicit.test.test1.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.test.test1.dto.Test1DTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-26 10:27
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface Test1DAO {

	/**
	 * 分页查询
	 * @param test1DTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<Test1DTO>
	 */
	public Page<Test1DTO> searchTest1ByPage(@Param("bean") Test1DTO test1DTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    /**
	 * 不分页查询
	 * @param test1DTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<Test1DTO>
	 */
	public List<Test1DTO> searchTest1(@Param("bean") Test1DTO test1DTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    /**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<Test1DTO>
	 */
	public List<Test1DTO> searchTest1ForExport(@Param(value = "bean") Test1DTO dto, @Param(value = "ids") List<String> idsList);


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return Test1DTO
	 */
	public Test1DTO findTest1ById(String id);

	/**
	 * 新增
	 * @param test1DTO 保存对象
	 * @return int
	 */
	public int insertTest1(Test1DTO test1DTO);

	/**
	 * 批量新增
	 * @param test1DTOList 保存对象集合
	 * @return int
	 */
	public int insertTest1List(@Param("dtoList") List<Test1DTO> test1DTOList);

	/**
	 * 部分更新
	 * @param test1DTO 更新对象
	 * @return int
	 */
	public int updateTest1Sensitive(Test1DTO test1DTO);

	/**
	 * 全部更新
	 * @param test1DTO 更新对象
	 * @return int
	 */
	public int updateTest1All(Test1DTO test1DTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateTest1List(@Param("dtoList") List<Test1DTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteTest1ById(String id);

}

