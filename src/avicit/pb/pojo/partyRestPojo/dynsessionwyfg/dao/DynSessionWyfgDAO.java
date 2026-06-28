package avicit.pb.pojo.partyRestPojo.dynsessionwyfg.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.pojo.partyRestPojo.dynsessionwyfg.dto.DynSessionWyfgDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-02-23 15:33
 * @类说明：DYN_SESSION_WYFGDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynSessionWyfgDAO {

	/**
	 * 分页查询
	 * @param dynSessionWyfgDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynSessionWyfgDTO>
	 */
	public Page<DynSessionWyfgDTO> searchDynSessionWyfgByPage(@Param("bean") DynSessionWyfgDTO dynSessionWyfgDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynSessionWyfgDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynSessionWyfgDTO>
	 */
	public List<DynSessionWyfgDTO> searchDynSessionWyfg(@Param("bean") DynSessionWyfgDTO dynSessionWyfgDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynSessionWyfgDTO>
	 */
	public List<DynSessionWyfgDTO> searchDynSessionWyfgForExport(@Param(value = "bean") DynSessionWyfgDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynSessionWyfgDTO
	 */
	public DynSessionWyfgDTO findDynSessionWyfgById(String id);

	/**
	* 新增
	* @param dynSessionWyfgDTO 保存对象
	* @return int
	*/
	public int insertDynSessionWyfg(DynSessionWyfgDTO dynSessionWyfgDTO);

	/**
	 * 批量新增
	 * @param dynSessionWyfgDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynSessionWyfgList(@Param("dtoList") List<DynSessionWyfgDTO> dynSessionWyfgDTOList);

	/**
	 * 部分更新
	 * @param dynSessionWyfgDTO 更新对象
	 * @return int
	 */
	public int updateDynSessionWyfgSensitive(DynSessionWyfgDTO dynSessionWyfgDTO);

	/**
	 * 全部更新
	 * @param dynSessionWyfgDTO 更新对象
	 * @return int
	 */
	public int updateDynSessionWyfgAll(DynSessionWyfgDTO dynSessionWyfgDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynSessionWyfgList(@Param("dtoList") List<DynSessionWyfgDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynSessionWyfgById(String id);
}

