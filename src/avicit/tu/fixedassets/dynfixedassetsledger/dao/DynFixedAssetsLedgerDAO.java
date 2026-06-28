package avicit.tu.fixedassets.dynfixedassetsledger.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.tu.fixedassets.dynfixedassetsledger.dto.DynFixedAssetsLedgerDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：文冲
 * @邮箱：13022927887@163.com
 * @创建时间： 2025-04-24 10:09
 * @类说明：DYN_FIXED_ASSETS_LEDGERDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynFixedAssetsLedgerDAO {

	/**
	 * 分页查询
	 * @param dynFixedAssetsLedgerDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynFixedAssetsLedgerDTO>
	 */
	public Page<DynFixedAssetsLedgerDTO> searchDynFixedAssetsLedgerByPage(@Param("bean") DynFixedAssetsLedgerDTO dynFixedAssetsLedgerDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynFixedAssetsLedgerDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynFixedAssetsLedgerDTO>
	 */
	public List<DynFixedAssetsLedgerDTO> searchDynFixedAssetsLedger(@Param("bean") DynFixedAssetsLedgerDTO dynFixedAssetsLedgerDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynFixedAssetsLedgerDTO>
	 */
	public List<DynFixedAssetsLedgerDTO> searchDynFixedAssetsLedgerForExport(@Param(value = "bean") DynFixedAssetsLedgerDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynFixedAssetsLedgerDTO
	 */
	public DynFixedAssetsLedgerDTO findDynFixedAssetsLedgerById(String id);

	/**
	* 新增
	* @param dynFixedAssetsLedgerDTO 保存对象
	* @return int
	*/
	public int insertDynFixedAssetsLedger(DynFixedAssetsLedgerDTO dynFixedAssetsLedgerDTO);

	/**
	 * 批量新增
	 * @param dynFixedAssetsLedgerDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynFixedAssetsLedgerList(@Param("dtoList") List<DynFixedAssetsLedgerDTO> dynFixedAssetsLedgerDTOList);

	/**
	 * 部分更新
	 * @param dynFixedAssetsLedgerDTO 更新对象
	 * @return int
	 */
	public int updateDynFixedAssetsLedgerSensitive(DynFixedAssetsLedgerDTO dynFixedAssetsLedgerDTO);

	/**
	 * 全部更新
	 * @param dynFixedAssetsLedgerDTO 更新对象
	 * @return int
	 */
	public int updateDynFixedAssetsLedgerAll(DynFixedAssetsLedgerDTO dynFixedAssetsLedgerDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynFixedAssetsLedgerList(@Param("dtoList") List<DynFixedAssetsLedgerDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynFixedAssetsLedgerById(String id);
}

