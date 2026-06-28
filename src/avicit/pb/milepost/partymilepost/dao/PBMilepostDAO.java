package avicit.pb.milepost.partymilepost.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.milepost.partymilepost.dto.PartyMilepostDTO1;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-14 08:58
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface PBMilepostDAO {

	/**
	 * 分页查询
	 * @param partyMilepostDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<PartyMilepostDTO>
	 */
	public Page<PartyMilepostDTO1> searchPBMilepostByPage(@Param("bean") PartyMilepostDTO1 partyMilepostDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param partyMilepostDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<PartyMilepostDTO>
	 */
	public List<PartyMilepostDTO1> searchPartyMilepost(@Param("bean") PartyMilepostDTO1 partyMilepostDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<PartyMilepostDTO>
	 */
	public List<PartyMilepostDTO1> searchPartyMilepostForExport(@Param(value = "bean") PartyMilepostDTO1 dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return PartyMilepostDTO
	 */
	public PartyMilepostDTO1 findPartyMilepostById(String id);

	/**
	* 新增
	* @param partyMilepostDTO 保存对象
	* @return int
	*/
	public int insertPartyMilepost(PartyMilepostDTO1 partyMilepostDTO);

	/**
	 * 批量新增
	 * @param partyMilepostDTOList 保存对象集合
	 * @return int
	 */
	public int insertPartyMilepostList(@Param("dtoList") List<PartyMilepostDTO1> partyMilepostDTOList);

	/**
	 * 部分更新
	 * @param partyMilepostDTO 更新对象
	 * @return int
	 */
	public int updatePartyMilepostSensitive(PartyMilepostDTO1 partyMilepostDTO);

	/**
	 * 全部更新
	 * @param partyMilepostDTO 更新对象
	 * @return int
	 */
	public int updatePartyMilepostAll(PartyMilepostDTO1 partyMilepostDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updatePartyMilepostList(@Param("dtoList") List<PartyMilepostDTO1> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deletePartyMilepostById(String id);
}

