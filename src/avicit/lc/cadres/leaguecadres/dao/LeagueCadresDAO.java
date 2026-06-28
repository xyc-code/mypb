package avicit.lc.cadres.leaguecadres.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.lc.cadres.leaguecadres.dto.LeagueCadresDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-18 09:02
 * @类说明：团干部信息Dao
 * @修改记录： 
 */
@MyBatisRepository
public interface LeagueCadresDAO {

	/**
	 * 分页查询
	 * @param leagueCadresDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<LeagueCadresDTO>
	 */
	public Page<LeagueCadresDTO> searchLeagueCadresByPage(@Param("bean") LeagueCadresDTO leagueCadresDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param leagueCadresDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<LeagueCadresDTO>
	 */
	public List<LeagueCadresDTO> searchLeagueCadres(@Param("bean") LeagueCadresDTO leagueCadresDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<LeagueCadresDTO>
	 */
	public List<LeagueCadresDTO> searchLeagueCadresForExport(@Param(value = "bean") LeagueCadresDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return LeagueCadresDTO
	 */
	public LeagueCadresDTO findLeagueCadresById(String id);

	/**
	* 新增
	* @param leagueCadresDTO 保存对象
	* @return int
	*/
	public int insertLeagueCadres(LeagueCadresDTO leagueCadresDTO);

	/**
	 * 批量新增
	 * @param leagueCadresDTOList 保存对象集合
	 * @return int
	 */
	public int insertLeagueCadresList(@Param("dtoList") List<LeagueCadresDTO> leagueCadresDTOList);

	/**
	 * 部分更新
	 * @param leagueCadresDTO 更新对象
	 * @return int
	 */
	public int updateLeagueCadresSensitive(LeagueCadresDTO leagueCadresDTO);

	/**
	 * 全部更新
	 * @param leagueCadresDTO 更新对象
	 * @return int
	 */
	public int updateLeagueCadresAll(LeagueCadresDTO leagueCadresDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateLeagueCadresList(@Param("dtoList") List<LeagueCadresDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteLeagueCadresById(String id);
}

