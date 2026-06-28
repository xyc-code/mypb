package avicit.pb.dyxfg.dynxfgfq.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.dyxfg.dynxfgfq.dto.DynXfgFqDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-25 14:42
 * @类说明：DYN_XFG_FQDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynXfgFqDAO {

	/**
	 * 分页查询
	 * @param dynXfgFqDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynXfgFqDTO>
	 */
	public Page<DynXfgFqDTO> searchDynXfgFqByPage(@Param("bean") DynXfgFqDTO dynXfgFqDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynXfgFqDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynXfgFqDTO>
	 */
	public List<DynXfgFqDTO> searchDynXfgFq(@Param("bean") DynXfgFqDTO dynXfgFqDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynXfgFqDTO>
	 */
	public List<DynXfgFqDTO> searchDynXfgFqForExport(@Param(value = "bean") DynXfgFqDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynXfgFqDTO
	 */
	public DynXfgFqDTO findDynXfgFqById(String id);

	/**
	* 新增
	* @param dynXfgFqDTO 保存对象
	* @return int
	*/
	public int insertDynXfgFq(DynXfgFqDTO dynXfgFqDTO);

	/**
	 * 批量新增
	 * @param dynXfgFqDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynXfgFqList(@Param("dtoList") List<DynXfgFqDTO> dynXfgFqDTOList);

	/**
	 * 部分更新
	 * @param dynXfgFqDTO 更新对象
	 * @return int
	 */
	public int updateDynXfgFqSensitive(DynXfgFqDTO dynXfgFqDTO);

	/**
	 * 全部更新
	 * @param dynXfgFqDTO 更新对象
	 * @return int
	 */
	public int updateDynXfgFqAll(DynXfgFqDTO dynXfgFqDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynXfgFqList(@Param("dtoList") List<DynXfgFqDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynXfgFqById(String id);
}

