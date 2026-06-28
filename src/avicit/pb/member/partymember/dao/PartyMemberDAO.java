package avicit.pb.member.partymember.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.member.partymember.dto.PartyMemberDTO;
import org.apache.ibatis.annotations.Select;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-21 08:46
 * @类说明：党员信息表Dao
 * @修改记录： 
 */
@MyBatisRepository
public interface PartyMemberDAO {

	/**
	 * 分页查询
	 * @param partyMemberDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<PartyMemberDTO>
	 */
	public Page<PartyMemberDTO> searchPartyMemberByPage(@Param("bean") PartyMemberDTO partyMemberDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param partyMemberDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<PartyMemberDTO>
	 */
	public List<PartyMemberDTO> searchPartyMember(@Param("bean") PartyMemberDTO partyMemberDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<PartyMemberDTO>
	 */
	public List<PartyMemberDTO> searchPartyMemberForExport(@Param(value = "bean") PartyMemberDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return PartyMemberDTO
	 */
	public PartyMemberDTO findPartyMemberById(String id);

	/**
	* 新增
	* @param partyMemberDTO 保存对象
	* @return int
	*/
	public int insertPartyMember(PartyMemberDTO partyMemberDTO);

	/**
	 * 批量新增
	 * @param partyMemberDTOList 保存对象集合
	 * @return int
	 */
	public int insertPartyMemberList(@Param("dtoList") List<PartyMemberDTO> partyMemberDTOList);

	/**
	 * 部分更新
	 * @param partyMemberDTO 更新对象
	 * @return int
	 */
	public int updatePartyMemberSensitive(PartyMemberDTO partyMemberDTO);
	
	/**
	 * rest部分更新*/
	int updatePartyMemberSensitiveRest(PartyMemberDTO partyMemberDTO);

	/**
	 * 全部更新
	 * @param partyMemberDTO 更新对象
	 * @return int
	 */
	public int updatePartyMemberAll(PartyMemberDTO partyMemberDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updatePartyMemberList(@Param("dtoList") List<PartyMemberDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deletePartyMemberById(String id);

	public Map<String,String> findPartyMemberOrganizationById(String userId);
	public Map<String,String> findPartyGroupByPartyId(String partyId);
	public int updatePartyMemberPartyOrgByUserId(@Param("userId") String userId,@Param("partyId") String partyId);

	public List<Map<String, String>> findAllPartyMembersByPartyOrg();

	public int updatePartyMemberPartyOrgAndGroupByUserId(@Param("userId")String userId,@Param("partyId")String partyId, @Param("partyGroupId")String partyGroupId);

	public Page<PartyMemberDTO> searchPartyMemberByDXZPage(@Param("bean") PartyMemberDTO partyMemberDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    public List<PartyMemberDTO> toDataSync();

	public Page<PartyMemberDTO> searchPartyMemberBySynPage(@Param("bean") PartyMemberDTO partyMemberDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);
}

