package avicit.pb.member.dynannounce.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.member.dynannounce.dto.DynAnnounceDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-30 15:02
 * @类说明：DYN_ANNOUNCEDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynAnnounceDAO {

	/**
	 * 分页查询
	 * @param dynAnnounceDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynAnnounceDTO>
	 */
	public Page<DynAnnounceDTO> searchDynAnnounceByPage(@Param("bean") DynAnnounceDTO dynAnnounceDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynAnnounceDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynAnnounceDTO>
	 */
	public List<DynAnnounceDTO> searchDynAnnounce(@Param("bean") DynAnnounceDTO dynAnnounceDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynAnnounceDTO>
	 */
	public List<DynAnnounceDTO> searchDynAnnounceForExport(@Param(value = "bean") DynAnnounceDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynAnnounceDTO
	 */
	public DynAnnounceDTO findDynAnnounceById(String id);

	/**
	* 新增
	* @param dynAnnounceDTO 保存对象
	* @return int
	*/
	public int insertDynAnnounce(DynAnnounceDTO dynAnnounceDTO);

	/**
	 * 批量新增
	 * @param dynAnnounceDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynAnnounceList(@Param("dtoList") List<DynAnnounceDTO> dynAnnounceDTOList);

	/**
	 * 部分更新
	 * @param dynAnnounceDTO 更新对象
	 * @return int
	 */
	public int updateDynAnnounceSensitive(DynAnnounceDTO dynAnnounceDTO);

	/**
	 * 全部更新
	 * @param dynAnnounceDTO 更新对象
	 * @return int
	 */
	public int updateDynAnnounceAll(DynAnnounceDTO dynAnnounceDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynAnnounceList(@Param("dtoList") List<DynAnnounceDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynAnnounceById(String id);
}

