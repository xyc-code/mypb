package avicit.pb.dynThreeFour.dynthreefour.dao;

import java.util.*;

import avicit.pb.dynThreeFour.dynthreefour.dto.DynThreeFourDTO;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.platform6.core.mybatis.pagehelper.Page;
import org.apache.ibatis.annotations.Param;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-14 09:04
 * @类说明：DYN_THREE_FOURDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynThreeFourDAO {

	/**
	 * 分页查询
	 * @param dynThreeFourDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynThreeFourDTO>
	 */
	public Page<DynThreeFourDTO> searchDynThreeFourByPage(@Param("bean") DynThreeFourDTO dynThreeFourDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynThreeFourDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynThreeFourDTO>
	 */
	public List<DynThreeFourDTO> searchDynThreeFour(@Param("bean") DynThreeFourDTO dynThreeFourDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynThreeFourDTO>
	 */
	public List<DynThreeFourDTO> searchDynThreeFourForExport(@Param(value = "bean") DynThreeFourDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynThreeFourDTO
	 */
	public DynThreeFourDTO findDynThreeFourById(String id);

	/**
	* 新增
	* @param dynThreeFourDTO 保存对象
	* @return int
	*/
	public int insertDynThreeFour(DynThreeFourDTO dynThreeFourDTO);

	/**
	 * 批量新增
	 * @param dynThreeFourDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynThreeFourList(@Param("dtoList") List<DynThreeFourDTO> dynThreeFourDTOList);

	/**
	 * 部分更新
	 * @param dynThreeFourDTO 更新对象
	 * @return int
	 */
	public int updateDynThreeFourSensitive(DynThreeFourDTO dynThreeFourDTO);

	/**
	 * 全部更新
	 * @param dynThreeFourDTO 更新对象
	 * @return int
	 */
	public int updateDynThreeFourAll(DynThreeFourDTO dynThreeFourDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynThreeFourList(@Param("dtoList") List<DynThreeFourDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynThreeFourById(String id);
}

