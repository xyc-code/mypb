package avicit.pb.pojo.partyRestPojo.dynsubhjxjdydh3.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.pojo.partyRestPojo.dynsubhjxjdydh3.dto.DynSubHjxjdydh3DTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-18 11:50
 * @类说明：DYN_SUB_HJXJDYDH_3Dao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynSubHjxjdydh3DAO {

	/**
	 * 分页查询
	 * @param dynSubHjxjdydh3DTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynSubHjxjdydh3DTO>
	 */
	public Page<DynSubHjxjdydh3DTO> searchDynSubHjxjdydh3ByPage(@Param("bean") DynSubHjxjdydh3DTO dynSubHjxjdydh3DTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynSubHjxjdydh3DTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynSubHjxjdydh3DTO>
	 */
	public List<DynSubHjxjdydh3DTO> searchDynSubHjxjdydh3(@Param("bean") DynSubHjxjdydh3DTO dynSubHjxjdydh3DTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynSubHjxjdydh3DTO>
	 */
	public List<DynSubHjxjdydh3DTO> searchDynSubHjxjdydh3ForExport(@Param(value = "bean") DynSubHjxjdydh3DTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynSubHjxjdydh3DTO
	 */
	public DynSubHjxjdydh3DTO findDynSubHjxjdydh3ById(String id);

	/**
	* 新增
	* @param dynSubHjxjdydh3DTO 保存对象
	* @return int
	*/
	public int insertDynSubHjxjdydh3(DynSubHjxjdydh3DTO dynSubHjxjdydh3DTO);

	/**
	 * 批量新增
	 * @param dynSubHjxjdydh3DTOList 保存对象集合
	 * @return int
	 */
	public int insertDynSubHjxjdydh3List(@Param("dtoList") List<DynSubHjxjdydh3DTO> dynSubHjxjdydh3DTOList);

	/**
	 * 部分更新
	 * @param dynSubHjxjdydh3DTO 更新对象
	 * @return int
	 */
	public int updateDynSubHjxjdydh3Sensitive(DynSubHjxjdydh3DTO dynSubHjxjdydh3DTO);

	/**
	 * 全部更新
	 * @param dynSubHjxjdydh3DTO 更新对象
	 * @return int
	 */
	public int updateDynSubHjxjdydh3All(DynSubHjxjdydh3DTO dynSubHjxjdydh3DTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynSubHjxjdydh3List(@Param("dtoList") List<DynSubHjxjdydh3DTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynSubHjxjdydh3ById(String id);
}

