package avicit.pb.organize.partyorganmember.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-12 11:39
 * @类说明：党组织人员信息表Dao
 * @修改记录： 
 */
@MyBatisRepository
public interface PartyOrganMemberDAO {

	/**
	 * 分页查询
	 * @param partyOrganMemberDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<PartyOrganMemberDTO>
	 */
	public Page<PartyOrganMemberDTO> searchPartyOrganMemberByPage(@Param("bean") PartyOrganMemberDTO partyOrganMemberDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param partyOrganMemberDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<PartyOrganMemberDTO>
	 */
	public List<PartyOrganMemberDTO> searchPartyOrganMember(@Param("bean") PartyOrganMemberDTO partyOrganMemberDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<PartyOrganMemberDTO>
	 */
	public List<PartyOrganMemberDTO> searchPartyOrganMemberForExport(@Param(value = "bean") PartyOrganMemberDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return PartyOrganMemberDTO
	 */
	public PartyOrganMemberDTO findPartyOrganMemberById(String id);

	/**
	 * 删除树节点前做个查询
	 * @param id 主键id
	 * @return int
	 */
	public int selectPartyOrganMemberByPid(String id);
	
	/**
	 * 新增
	 * @param partyOrganMemberDTO 保存对象
	 * @return int
	 */
	public int insertPartyOrganMember(PartyOrganMemberDTO partyOrganMemberDTO);

	/**
	 * 批量新增
	 * @param partyOrganMemberDTOList 保存对象集合
	 * @return int
	 */
	public int insertPartyOrganMemberList(@Param("dtoList") List<PartyOrganMemberDTO> partyOrganMemberDTOList);

	/**
	 * 部分更新
	 * @param partyOrganMemberDTO 更新对象
	 * @return int
	 */
	public int updatePartyOrganMemberSensitive(PartyOrganMemberDTO partyOrganMemberDTO);

	/**
	 * 全部更新
	 * @param partyOrganMemberDTO 更新对象
	 * @return int
	 */
	public int updatePartyOrganMemberAll(PartyOrganMemberDTO partyOrganMemberDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updatePartyOrganMemberList(@Param("dtoList") List<PartyOrganMemberDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deletePartyOrganMemberById(String id);
	/**
	 * 主键查询
	 * @param id 主键id
	 * @return PartyOrganMemberDTO
	 */
	public List<PartyOrganMemberDTO> findPartyOrganMemberByOrganizationId(String partyId);

}

