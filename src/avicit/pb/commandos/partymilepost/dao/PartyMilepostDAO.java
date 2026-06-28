package avicit.pb.commandos.partymilepost.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.commandos.partymilepost.dto.PartyMilepostDTO;
import org.apache.ibatis.annotations.Select;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-11 09:57
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface PartyMilepostDAO {

	/**
	 * 分页查询
	 * @param partyMilepostDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<PartyMilepostDTO>
	 */
	public Page<PartyMilepostDTO> searchPartyMilepostByPage(@Param("bean") PartyMilepostDTO partyMilepostDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
     * 不分页查询
     * @param partyMilepostDTO 查询对象
     * @param orderBy 排序条件
     * @param keyWord 关键字
     * @return List<PartyMilepostDTO>
     */
    public List<PartyMilepostDTO> searchPartyMilepost(@Param("bean") PartyMilepostDTO partyMilepostDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    /**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<PartyMilepostDTO>
	 */
	public List<PartyMilepostDTO> searchPartyMilepostForExport(@Param(value = "bean") PartyMilepostDTO dto, @Param(value = "ids") List<String> idsList);


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return PartyMilepostDTO
	 */
	public PartyMilepostDTO findPartyMilepostById(String id);

	/**
	 * 新增
	 * @param partyMilepostDTO 保存对象
	 * @return int
	 */
	public int insertPartyMilepost(PartyMilepostDTO partyMilepostDTO);

	/**
	 * 批量新增
	 * @param partyMilepostDTOList 保存对象集合
	 * @return int
	 */
	public int insertPartyMilepostList(@Param("dtoList") List<PartyMilepostDTO> partyMilepostDTOList);

	/**
	 * 部分更新
	 * @param partyMilepostDTO 更新对象
	 * @return int
	 */
	public int updatePartyMilepostSensitive(PartyMilepostDTO partyMilepostDTO);

	/**
	 * 全部更新
	 * @param partyMilepostDTO 更新对象
	 * @return int
	 */
	public int updatePartyMilepostAll(PartyMilepostDTO partyMilepostDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updatePartyMilepostList(@Param("dtoList") List<PartyMilepostDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deletePartyMilepostById(String id);

    // 总的里程碑
	public String getByCountTaskStatus(@Param("date") String date);

	// 未完成里程碑
	public String getByCountTaskStatusW(@Param("date") String date);

	// 完成里程碑
	public String getByCountTaskStatusWC(@Param("date") String date);


	// 超期里程碑
	public String getByCountTaskStatusE(@Param("date") String date);
}

