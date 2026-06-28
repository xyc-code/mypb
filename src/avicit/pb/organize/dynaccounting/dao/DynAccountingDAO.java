package avicit.pb.organize.dynaccounting.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.organize.dynaccounting.dto.DynAccountingDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-07 10:22
 * @类说明：DYN_ACCOUNTINGDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynAccountingDAO {

	/**
	 * 分页查询
	 * @param dynAccountingDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynAccountingDTO>
	 */
	public Page<DynAccountingDTO> searchDynAccountingByPage(@Param("bean") DynAccountingDTO dynAccountingDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynAccountingDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynAccountingDTO>
	 */
	public List<DynAccountingDTO> searchDynAccounting(@Param("bean") DynAccountingDTO dynAccountingDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynAccountingDTO>
	 */
	public List<DynAccountingDTO> searchDynAccountingForExport(@Param(value = "bean") DynAccountingDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynAccountingDTO
	 */
	public DynAccountingDTO findDynAccountingById(String id);

	/**
	* 新增
	* @param dynAccountingDTO 保存对象
	* @return int
	*/
	public int insertDynAccounting(DynAccountingDTO dynAccountingDTO);

	/**
	 * 批量新增
	 * @param dynAccountingDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynAccountingList(@Param("dtoList") List<DynAccountingDTO> dynAccountingDTOList);

	/**
	 * 部分更新
	 * @param dynAccountingDTO 更新对象
	 * @return int
	 */
	public int updateDynAccountingSensitive(DynAccountingDTO dynAccountingDTO);

	/**
	 * 全部更新
	 * @param dynAccountingDTO 更新对象
	 * @return int
	 */
	public int updateDynAccountingAll(DynAccountingDTO dynAccountingDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynAccountingList(@Param("dtoList") List<DynAccountingDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynAccountingById(String id);
}

