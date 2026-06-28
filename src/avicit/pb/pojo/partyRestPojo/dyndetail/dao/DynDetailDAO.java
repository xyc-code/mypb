package avicit.pb.pojo.partyRestPojo.dyndetail.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.pojo.partyRestPojo.dyndetail.dto.DynDetailDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-18 13:54
 * @类说明：DYN_DETAILDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynDetailDAO {

	/**
	 * 分页查询
	 * @param dynDetailDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynDetailDTO>
	 */
	public Page<DynDetailDTO> searchDynDetailByPage(@Param("bean") DynDetailDTO dynDetailDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynDetailDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynDetailDTO>
	 */
	public List<DynDetailDTO> searchDynDetail(@Param("bean") DynDetailDTO dynDetailDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynDetailDTO>
	 */
	public List<DynDetailDTO> searchDynDetailForExport(@Param(value = "bean") DynDetailDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynDetailDTO
	 */
	public DynDetailDTO findDynDetailById(String id);

	/**
	* 新增
	* @param dynDetailDTO 保存对象
	* @return int
	*/
	public int insertDynDetail(DynDetailDTO dynDetailDTO);

	/**
	 * 批量新增
	 * @param dynDetailDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynDetailList(@Param("dtoList") List<DynDetailDTO> dynDetailDTOList);

	/**
	 * 部分更新
	 * @param dynDetailDTO 更新对象
	 * @return int
	 */
	public int updateDynDetailSensitive(DynDetailDTO dynDetailDTO);

	/**
	 * 全部更新
	 * @param dynDetailDTO 更新对象
	 * @return int
	 */
	public int updateDynDetailAll(DynDetailDTO dynDetailDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynDetailList(@Param("dtoList") List<DynDetailDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynDetailById(String id);
}

