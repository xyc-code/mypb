package avicit.pb.dyxfg.dynpartyxfg.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.dyxfg.dynpartyxfg.dto.DynPartyXfgDTO;
import org.apache.ibatis.annotations.Select;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-25 14:43
 * @类说明：DYN_PARTY_XFGDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynPartyXfgDAO {

	/**
	 * 分页查询
	 * @param dynPartyXfgDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynPartyXfgDTO>
	 */
	public Page<DynPartyXfgDTO> searchDynPartyXfgByPage(@Param("bean") DynPartyXfgDTO dynPartyXfgDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynPartyXfgDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynPartyXfgDTO>
	 */
	public List<DynPartyXfgDTO> searchDynPartyXfg(@Param("bean") DynPartyXfgDTO dynPartyXfgDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynPartyXfgDTO>
	 */
	public List<DynPartyXfgDTO> searchDynPartyXfgForExport(@Param(value = "bean") DynPartyXfgDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynPartyXfgDTO
	 */
	public DynPartyXfgDTO findDynPartyXfgById(String id);

	/**
	* 新增
	* @param dynPartyXfgDTO 保存对象
	* @return int
	*/
	public int insertDynPartyXfg(DynPartyXfgDTO dynPartyXfgDTO);

	/**
	 * 批量新增
	 * @param dynPartyXfgDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynPartyXfgList(@Param("dtoList") List<DynPartyXfgDTO> dynPartyXfgDTOList);

	/**
	 * 部分更新
	 * @param dynPartyXfgDTO 更新对象
	 * @return int
	 */
	public int updateDynPartyXfgSensitive(DynPartyXfgDTO dynPartyXfgDTO);

	/**
	 * 全部更新
	 * @param dynPartyXfgDTO 更新对象
	 * @return int
	 */
	public int updateDynPartyXfgAll(DynPartyXfgDTO dynPartyXfgDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynPartyXfgList(@Param("dtoList") List<DynPartyXfgDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynPartyXfgById(String id);

	/**
	 * 根据发送查询申请信息ids
	 * @param id
	 */
	public List<String> searchByFkSubQfId(String id);
}

