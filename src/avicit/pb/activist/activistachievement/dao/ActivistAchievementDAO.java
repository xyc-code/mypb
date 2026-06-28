package avicit.pb.activist.activistachievement.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.activist.activistachievement.dto.ActivistAchievementDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-25 09:20
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface ActivistAchievementDAO {

	/**
	 * 分页查询
	 * @param activistAchievementDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<ActivistAchievementDTO>
	 */
	public Page<ActivistAchievementDTO> searchActivistAchievementByPage(@Param("bean") ActivistAchievementDTO activistAchievementDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
     * 不分页查询
     * @param activistAchievementDTO 查询对象
     * @param orderBy 排序条件
     * @param keyWord 关键字
     * @return List<ActivistAchievementDTO>
     */
    public List<ActivistAchievementDTO> searchActivistAchievement(@Param("bean") ActivistAchievementDTO activistAchievementDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    /**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<ActivistAchievementDTO>
	 */
	public List<ActivistAchievementDTO> searchActivistAchievementForExport(@Param(value = "bean") ActivistAchievementDTO dto, @Param(value = "ids") List<String> idsList);


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return ActivistAchievementDTO
	 */
	public ActivistAchievementDTO findActivistAchievementById(String id);

	/**
	* 新增
	* @param activistAchievementDTO 保存对象
	* @return int
	*/
	public int insertActivistAchievement(ActivistAchievementDTO activistAchievementDTO);

	/**
	 * 批量新增
	 * @param activistAchievementDTOList 保存对象集合
	 * @return int
	 */
	public int insertActivistAchievementList(@Param("dtoList") List<ActivistAchievementDTO> activistAchievementDTOList);

	/**
	 * 部分更新
	 * @param activistAchievementDTO 更新对象
	 * @return int
	 */
	public int updateActivistAchievementSensitive(ActivistAchievementDTO activistAchievementDTO);

	/**
	 * 全部更新
	 * @param activistAchievementDTO 更新对象
	 * @return int
	 */
	public int updateActivistAchievementAll(ActivistAchievementDTO activistAchievementDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateActivistAchievementList(@Param("dtoList") List<ActivistAchievementDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteActivistAchievementById(String id);

}

