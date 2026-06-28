package avicit.lc.member.leaguemember.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.lc.member.leaguemember.dto.LeagueMemberDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-17 15:19
 * @类说明：团员信息管理Dao
 * @修改记录： 
 */
@MyBatisRepository
public interface LeagueMemberDAO {

	/**
	 * 分页查询
	 * @param leagueMemberDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<LeagueMemberDTO>
	 */
	public Page<LeagueMemberDTO> searchLeagueMemberByPage(@Param("bean") LeagueMemberDTO leagueMemberDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param leagueMemberDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<LeagueMemberDTO>
	 */
	public List<LeagueMemberDTO> searchLeagueMember(@Param("bean") LeagueMemberDTO leagueMemberDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<LeagueMemberDTO>
	 */
	public List<LeagueMemberDTO> searchLeagueMemberForExport(@Param(value = "bean") LeagueMemberDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return LeagueMemberDTO
	 */
	public LeagueMemberDTO findLeagueMemberById(String id);

	/**
	* 新增
	* @param leagueMemberDTO 保存对象
	* @return int
	*/
	public int insertLeagueMember(LeagueMemberDTO leagueMemberDTO);

	/**
	 * 批量新增
	 * @param leagueMemberDTOList 保存对象集合
	 * @return int
	 */
	public int insertLeagueMemberList(@Param("dtoList") List<LeagueMemberDTO> leagueMemberDTOList);

	/**
	 * 部分更新
	 * @param leagueMemberDTO 更新对象
	 * @return int
	 */
	public int updateLeagueMemberSensitive(LeagueMemberDTO leagueMemberDTO);

	/**
	 * 全部更新
	 * @param leagueMemberDTO 更新对象
	 * @return int
	 */
	public int updateLeagueMemberAll(LeagueMemberDTO leagueMemberDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateLeagueMemberList(@Param("dtoList") List<LeagueMemberDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteLeagueMemberById(String id);
}

