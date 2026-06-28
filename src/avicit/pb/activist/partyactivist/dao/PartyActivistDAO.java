package avicit.pb.activist.partyactivist.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.activist.partyactivist.dto.PartyActivistDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-25 09:20
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface PartyActivistDAO {

	/**
	 * 分页查询
	 * @param partyActivistDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<PartyActivistDTO>
	 */
	public Page<PartyActivistDTO> searchPartyActivistByPage(@Param("bean") PartyActivistDTO partyActivistDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
     * 不分页查询
     * @param partyActivistDTO 查询对象
     * @param orderBy 排序条件
     * @param keyWord 关键字
     * @return List<PartyActivistDTO>
     */
    public List<PartyActivistDTO> searchPartyActivist(@Param("bean") PartyActivistDTO partyActivistDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    /**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<PartyActivistDTO>
	 */
	public List<PartyActivistDTO> searchPartyActivistForExport(@Param(value = "bean") PartyActivistDTO dto, @Param(value = "ids") List<String> idsList);


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return PartyActivistDTO
	 */
	public PartyActivistDTO findPartyActivistById(String id);

	/**
	* 新增
	* @param partyActivistDTO 保存对象
	* @return int
	*/
	public int insertPartyActivist(PartyActivistDTO partyActivistDTO);

	/**
	 * 批量新增
	 * @param partyActivistDTOList 保存对象集合
	 * @return int
	 */
	public int insertPartyActivistList(@Param("dtoList") List<PartyActivistDTO> partyActivistDTOList);

	/**
	 * 部分更新
	 * @param partyActivistDTO 更新对象
	 * @return int
	 */
	public int updatePartyActivistSensitive(PartyActivistDTO partyActivistDTO);

	/**
	 * 全部更新
	 * @param partyActivistDTO 更新对象
	 * @return int
	 */
	public int updatePartyActivistAll(PartyActivistDTO partyActivistDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updatePartyActivistList(@Param("dtoList") List<PartyActivistDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deletePartyActivistById(String id);

	public int updatePartyActivistMemberPartyOrgByUserId(@Param("userId") String userId,@Param("partyId") String partyId);

	public Page<PartyActivistDTO> searchPartyActivistDXByPage(@Param("bean") PartyActivistDTO partyActivistDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);
}

