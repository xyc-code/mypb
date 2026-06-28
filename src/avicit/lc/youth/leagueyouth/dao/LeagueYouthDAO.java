package avicit.lc.youth.leagueyouth.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.lc.youth.leagueyouth.dto.LeagueYouthDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-18 09:50
 * @类说明：青年信息管理Dao
 * @修改记录： 
 */
@MyBatisRepository
public interface LeagueYouthDAO {

	/**
	 * 分页查询
	 * @param leagueYouthDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<LeagueYouthDTO>
	 */
	public Page<LeagueYouthDTO> searchLeagueYouthByPage(@Param("bean") LeagueYouthDTO leagueYouthDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param leagueYouthDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<LeagueYouthDTO>
	 */
	public List<LeagueYouthDTO> searchLeagueYouth(@Param("bean") LeagueYouthDTO leagueYouthDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<LeagueYouthDTO>
	 */
	public List<LeagueYouthDTO> searchLeagueYouthForExport(@Param(value = "bean") LeagueYouthDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return LeagueYouthDTO
	 */
	public LeagueYouthDTO findLeagueYouthById(String id);

	/**
	* 新增
	* @param leagueYouthDTO 保存对象
	* @return int
	*/
	public int insertLeagueYouth(LeagueYouthDTO leagueYouthDTO);

	/**
	 * 批量新增
	 * @param leagueYouthDTOList 保存对象集合
	 * @return int
	 */
	public int insertLeagueYouthList(@Param("dtoList") List<LeagueYouthDTO> leagueYouthDTOList);

	/**
	 * 部分更新
	 * @param leagueYouthDTO 更新对象
	 * @return int
	 */
	public int updateLeagueYouthSensitive(LeagueYouthDTO leagueYouthDTO);

	/**
	 * 全部更新
	 * @param leagueYouthDTO 更新对象
	 * @return int
	 */
	public int updateLeagueYouthAll(LeagueYouthDTO leagueYouthDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateLeagueYouthList(@Param("dtoList") List<LeagueYouthDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteLeagueYouthById(String id);
}

