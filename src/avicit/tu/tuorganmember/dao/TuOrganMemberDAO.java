package avicit.tu.tuorganmember.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.tu.tuorganmember.dto.TuOrganMemberDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-17 09:36
 * @类说明：团组织人员信息表Dao
 * @修改记录： 
 */
@MyBatisRepository
public interface TuOrganMemberDAO {

	/**
	 * 分页查询
	 * @param leagueOrganMemberDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<TuOrganMemberDTO>
	 */
	public Page<TuOrganMemberDTO> searchLeagueOrganMemberByPage(@Param("bean") TuOrganMemberDTO leagueOrganMemberDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param leagueOrganMemberDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<TuOrganMemberDTO>
	 */
	public List<TuOrganMemberDTO> searchLeagueOrganMember(@Param("bean") TuOrganMemberDTO leagueOrganMemberDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<TuOrganMemberDTO>
	 */
	public List<TuOrganMemberDTO> searchLeagueOrganMemberForExport(@Param(value = "bean") TuOrganMemberDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return TuOrganMemberDTO
	 */
	public TuOrganMemberDTO findLeagueOrganMemberById(String id);

	/**
	 * 删除树节点前做个查询
	 * @param id 主键id
	 * @return int
	 */
	public int selectLeagueOrganMemberByPid(String id);
	
	/**
	 * 新增
	 * @param leagueOrganMemberDTO 保存对象
	 * @return int
	 */
	public int insertLeagueOrganMember(TuOrganMemberDTO leagueOrganMemberDTO);

	/**
	 * 批量新增
	 * @param leagueOrganMemberDTOList 保存对象集合
	 * @return int
	 */
	public int insertLeagueOrganMemberList(@Param("dtoList") List<TuOrganMemberDTO> leagueOrganMemberDTOList);

	/**
	 * 部分更新
	 * @param leagueOrganMemberDTO 更新对象
	 * @return int
	 */
	public int updateLeagueOrganMemberSensitive(TuOrganMemberDTO leagueOrganMemberDTO);

	/**
	 * 全部更新
	 * @param leagueOrganMemberDTO 更新对象
	 * @return int
	 */
	public int updateLeagueOrganMemberAll(TuOrganMemberDTO leagueOrganMemberDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateLeagueOrganMemberList(@Param("dtoList") List<TuOrganMemberDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteLeagueOrganMemberById(String id);

}

