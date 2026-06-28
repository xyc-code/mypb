package avicit.tu.dyntradeunionmb.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.tu.dyntradeunionmb.dto.DynTradeUnionMbDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：psutest
 * @邮箱：psutest@163.com
 * @创建时间： 2023-08-02 15:30
 * @类说明：DYN_TRADE_UNION_MBDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynTradeUnionMbDAO {

	/**
	 * 分页查询
	 * @param dynTradeUnionMbDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynTradeUnionMbDTO>
	 */
	public Page<DynTradeUnionMbDTO> searchDynTradeUnionMbByPage(@Param("bean") DynTradeUnionMbDTO dynTradeUnionMbDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynTradeUnionMbDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynTradeUnionMbDTO>
	 */
	public List<DynTradeUnionMbDTO> searchDynTradeUnionMb(@Param("bean") DynTradeUnionMbDTO dynTradeUnionMbDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynTradeUnionMbDTO>
	 */
	public List<DynTradeUnionMbDTO> searchDynTradeUnionMbForExport(@Param(value = "bean") DynTradeUnionMbDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynTradeUnionMbDTO
	 */
	public DynTradeUnionMbDTO findDynTradeUnionMbById(String id);

	/**
	* 新增
	* @param dynTradeUnionMbDTO 保存对象
	* @return int
	*/
	public int insertDynTradeUnionMb(DynTradeUnionMbDTO dynTradeUnionMbDTO);

	/**
	 * 批量新增
	 * @param dynTradeUnionMbDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynTradeUnionMbList(@Param("dtoList") List<DynTradeUnionMbDTO> dynTradeUnionMbDTOList);

	/**
	 * 部分更新
	 * @param dynTradeUnionMbDTO 更新对象
	 * @return int
	 */
	public int updateDynTradeUnionMbSensitive(DynTradeUnionMbDTO dynTradeUnionMbDTO);

	/**
	 * 全部更新
	 * @param dynTradeUnionMbDTO 更新对象
	 * @return int
	 */
	public int updateDynTradeUnionMbAll(DynTradeUnionMbDTO dynTradeUnionMbDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynTradeUnionMbList(@Param("dtoList") List<DynTradeUnionMbDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynTradeUnionMbById(String id);
	
	
	
	
	
	
	
	//psu
	public List<Map<String,Object>> queryOne(String id);
	
	public List<Map<String,Object>> queryTwo(String id);
    
    
    
    
    
    
    
    
	
	
}

