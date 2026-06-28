package avicit.platform6.rljcRest.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.rljcRest.dto.DynAchievementsDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：sunc
 * @邮箱：123@qq.com
 * @创建时间： 2024-08-16 11:00
 * @类说明：DYN_ACHIEVEMENTSDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynAchievementsDAO {

	/**
	 * 分页查询
	 * @param dynAchievementsDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynAchievementsDTO>
	 */
	public Page<DynAchievementsDTO> searchDynAchievementsByPage(@Param("bean") DynAchievementsDTO dynAchievementsDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynAchievementsDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynAchievementsDTO>
	 */
	public List<DynAchievementsDTO> searchDynAchievements(@Param("bean") DynAchievementsDTO dynAchievementsDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynAchievementsDTO>
	 */
	public List<DynAchievementsDTO> searchDynAchievementsForExport(@Param(value = "bean") DynAchievementsDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynAchievementsDTO
	 */
	public DynAchievementsDTO findDynAchievementsById(String id);
	
	/**
	 * 主键查询
	 * @param achievementsId 人力id
	 * @return DynAchievementsDTO
	 */
	public DynAchievementsDTO findDynAchievementsByAchievementsId(String achievementsId);

	/**
	* 新增
	* @param dynAchievementsDTO 保存对象
	* @return int
	*/
	public int insertDynAchievements(DynAchievementsDTO dynAchievementsDTO);

	/**
	 * 批量新增
	 * @param dynAchievementsDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynAchievementsList(@Param("dtoList") List<DynAchievementsDTO> dynAchievementsDTOList);

	/**
	 * 部分更新
	 * @param dynAchievementsDTO 更新对象
	 * @return int
	 */
	public int updateDynAchievementsSensitive(DynAchievementsDTO dynAchievementsDTO);

	/**
	 * 全部更新
	 * @param dynAchievementsDTO 更新对象
	 * @return int
	 */
	public int updateDynAchievementsAll(DynAchievementsDTO dynAchievementsDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynAchievementsList(@Param("dtoList") List<DynAchievementsDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynAchievementsById(String id);
}

