package avicit.pb.member.dynufminfof.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.member.dynufminfof.dto.DynUfmInfoFDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-13 13:27
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface DynUfmInfoFDAO {

	/**
	 * 分页查询
	 * @param dynUfmInfoFDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynUfmInfoFDTO>
	 */
	public Page<DynUfmInfoFDTO> searchDynUfmInfoFByPage(@Param("bean") DynUfmInfoFDTO dynUfmInfoFDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynUfmInfoFDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynUfmInfoFDTO>
	 */
	public List<DynUfmInfoFDTO> searchDynUfmInfoF(@Param("bean") DynUfmInfoFDTO dynUfmInfoFDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynUfmInfoFDTO>
	 */
	public List<DynUfmInfoFDTO> searchDynUfmInfoFForExport(@Param(value = "bean") DynUfmInfoFDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynUfmInfoFDTO
	 */
	public DynUfmInfoFDTO findDynUfmInfoFById(String id);

	/**
	* 新增
	* @param dynUfmInfoFDTO 保存对象
	* @return int
	*/
	public int insertDynUfmInfoF(DynUfmInfoFDTO dynUfmInfoFDTO);

	/**
	 * 批量新增
	 * @param dynUfmInfoFDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynUfmInfoFList(@Param("dtoList") List<DynUfmInfoFDTO> dynUfmInfoFDTOList);

	/**
	 * 部分更新
	 * @param dynUfmInfoFDTO 更新对象
	 * @return int
	 */
	public int updateDynUfmInfoFSensitive(DynUfmInfoFDTO dynUfmInfoFDTO);

	/**
	 * 全部更新
	 * @param dynUfmInfoFDTO 更新对象
	 * @return int
	 */
	public int updateDynUfmInfoFAll(DynUfmInfoFDTO dynUfmInfoFDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynUfmInfoFList(@Param("dtoList") List<DynUfmInfoFDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynUfmInfoFById(String id);
}

