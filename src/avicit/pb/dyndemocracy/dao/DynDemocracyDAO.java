package avicit.pb.dyndemocracy.dao;

import java.util.*;

import avicit.pb.dyndemocracy.dto.DynDemocracyDTO;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;


/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-11-07 16:43
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface DynDemocracyDAO {

	/**
	 * 分页查询
	 * @param dynDemocracyDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynDemocracyDTO>
	 */
	public Page<DynDemocracyDTO> searchDynDemocracyByPage(@Param("bean") DynDemocracyDTO dynDemocracyDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynDemocracyDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynDemocracyDTO>
	 */
	public List<DynDemocracyDTO> searchDynDemocracy(@Param("bean") DynDemocracyDTO dynDemocracyDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynDemocracyDTO>
	 */
	public List<DynDemocracyDTO> searchDynDemocracyForExport(@Param(value = "bean") DynDemocracyDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynDemocracyDTO
	 */
	public DynDemocracyDTO findDynDemocracyById(String id);

	/**
	* 新增
	* @param dynDemocracyDTO 保存对象
	* @return int
	*/
	public int insertDynDemocracy(DynDemocracyDTO dynDemocracyDTO);

	/**
	 * 批量新增
	 * @param dynDemocracyDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynDemocracyList(@Param("dtoList") List<DynDemocracyDTO> dynDemocracyDTOList);

	/**
	 * 部分更新
	 * @param dynDemocracyDTO 更新对象
	 * @return int
	 */
	public int updateDynDemocracySensitive(DynDemocracyDTO dynDemocracyDTO);

	/**
	 * 全部更新
	 * @param dynDemocracyDTO 更新对象
	 * @return int
	 */
	public int updateDynDemocracyAll(DynDemocracyDTO dynDemocracyDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynDemocracyList(@Param("dtoList") List<DynDemocracyDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynDemocracyById(String id);
}

