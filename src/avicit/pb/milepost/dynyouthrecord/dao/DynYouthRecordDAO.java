package avicit.pb.milepost.dynyouthrecord.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.lc.organize.leagueorganization.dto.LeagueOrganizationDTO;
import avicit.lc.organize.leagueorganmember.dto.LeagueOrganMemberDTO;
import avicit.pb.milepost.dynyouthrecord.dto.DynSubZxbasb1DTO;
import avicit.pb.milepost.dynyouthrecord.dto.DynYouthRecordDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-12 15:04
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface DynYouthRecordDAO {

	/**
	 * 分页查询
	 * @param dynYouthRecordDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynYouthRecordDTO>
	 */
	public Page<DynYouthRecordDTO> searchDynYouthRecordByPage(@Param("bean") DynYouthRecordDTO dynYouthRecordDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord,@Param ("dept") String dept);

	/**
	 * 不分页查询
	 * @param dynYouthRecordDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynYouthRecordDTO>
	 */
	public List<DynYouthRecordDTO> searchDynYouthRecord(@Param("bean") DynYouthRecordDTO dynYouthRecordDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynYouthRecordDTO>
	 */
	public List<DynYouthRecordDTO> searchDynYouthRecordForExport(@Param(value = "bean") DynYouthRecordDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynYouthRecordDTO
	 */
	public DynYouthRecordDTO findDynYouthRecordById(String id);

	/**
	* 新增
	* @param dynYouthRecordDTO 保存对象
	* @return int
	*/
	public int insertDynYouthRecord(DynYouthRecordDTO dynYouthRecordDTO);

	/**
	 * 批量新增
	 * @param dynYouthRecordDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynYouthRecordList(@Param("dtoList") List<DynYouthRecordDTO> dynYouthRecordDTOList);

	/**
	 * 部分更新
	 * @param dynYouthRecordDTO 更新对象
	 * @return int
	 */
	public int updateDynYouthRecordSensitive(DynYouthRecordDTO dynYouthRecordDTO);

	/**
	 * 全部更新
	 * @param dynYouthRecordDTO 更新对象
	 * @return int
	 */
	public int updateDynYouthRecordAll(DynYouthRecordDTO dynYouthRecordDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynYouthRecordList(@Param("dtoList") List<DynYouthRecordDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynYouthRecordById(String id);
	public List<DynSubZxbasb1DTO> fomart(@Param("fitId")String fitId,@Param("type") String type);
	List<LeagueOrganMemberDTO> getLeagueOrganizationDTO(@Param("deptId")String deptId,@Param("type") String type);
}

