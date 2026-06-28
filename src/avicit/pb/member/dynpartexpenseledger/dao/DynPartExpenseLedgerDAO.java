package avicit.pb.member.dynpartexpenseledger.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.member.dynpartexpenseledger.dto.DynPartExpenseLedgerDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-06 10:03
 * @类说明：DYN_PART_EXPENSE_LEDGERDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynPartExpenseLedgerDAO {

	/**
	 * 分页查询
	 * @param dynPartExpenseLedgerDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynPartExpenseLedgerDTO>
	 */
	public Page<DynPartExpenseLedgerDTO> searchDynPartExpenseLedgerByPage(@Param("bean") DynPartExpenseLedgerDTO dynPartExpenseLedgerDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynPartExpenseLedgerDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynPartExpenseLedgerDTO>
	 */
	public List<DynPartExpenseLedgerDTO> searchDynPartExpenseLedger(@Param("bean") DynPartExpenseLedgerDTO dynPartExpenseLedgerDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynPartExpenseLedgerDTO>
	 */
	public List<DynPartExpenseLedgerDTO> searchDynPartExpenseLedgerForExport(@Param(value = "bean") DynPartExpenseLedgerDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynPartExpenseLedgerDTO
	 */
	public DynPartExpenseLedgerDTO findDynPartExpenseLedgerById(String id);

	/**
	* 新增
	* @param dynPartExpenseLedgerDTO 保存对象
	* @return int
	*/
	public int insertDynPartExpenseLedger(DynPartExpenseLedgerDTO dynPartExpenseLedgerDTO);

	/**
	 * 批量新增
	 * @param dynPartExpenseLedgerDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynPartExpenseLedgerList(@Param("dtoList") List<DynPartExpenseLedgerDTO> dynPartExpenseLedgerDTOList);

	/**
	 * 部分更新
	 * @param dynPartExpenseLedgerDTO 更新对象
	 * @return int
	 */
	public int updateDynPartExpenseLedgerSensitive(DynPartExpenseLedgerDTO dynPartExpenseLedgerDTO);

	/**
	 * 全部更新
	 * @param dynPartExpenseLedgerDTO 更新对象
	 * @return int
	 */
	public int updateDynPartExpenseLedgerAll(DynPartExpenseLedgerDTO dynPartExpenseLedgerDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynPartExpenseLedgerList(@Param("dtoList") List<DynPartExpenseLedgerDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynPartExpenseLedgerById(String id);


	public DynPartExpenseLedgerDTO findDynPartExpenseLedgerByPartId(@Param("id")String id,@Param("year")String year);
}

