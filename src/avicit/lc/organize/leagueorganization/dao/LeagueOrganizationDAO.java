package avicit.lc.organize.leagueorganization.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.lc.organize.leagueorganization.dto.LeagueOrganizationDTO;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-17 09:36
 * @类说明：团组织信息表Dao
 * @修改记录： 
 */
@MyBatisRepository
public interface LeagueOrganizationDAO {

	/**
	 * 通过主键获取对象
	 * @param id 主键id
	 * @return
	 */
	public LeagueOrganizationDTO findLeagueOrganizationById(@Param("id") String id);


	/**
	 * 获取当前节点的子节点
	 * @param id 节点id
	 * @return
	 */
	public List<LeagueOrganizationDTO> findChildrenLeagueOrganizationById(@Param("id")String id);
	
	/**
	* 获取子节点数据不包括自己
	* @param id 节点id
	* @param oldParentId 关联字段
	* @return
	*/
	public List<LeagueOrganizationDTO> findChildrenLeagueOrganizationExceptSelfById(@Param("parentId")String oldParentId,@Param("id")String id);

	/**
	* 根据条件查询节点
	* @param leagueOrganizationDTO 查询条件
	* @return List<LeagueOrganizationDTO>
	*/
	public List<LeagueOrganizationDTO> searchLeagueOrganization(LeagueOrganizationDTO leagueOrganizationDTO);


	/**
	 * 获取当前组织的根节点
	 * @param orgIdentity 组织id
	 * @return
	 */
	public LeagueOrganizationDTO findLeagueOrganizationRootNode(@Param("orgIdentity")String orgIdentity);


	/**
	* 新增
	* @param leagueOrganizationDTO 保存对象
	* @return int
	*/
	public int insertLeagueOrganization(LeagueOrganizationDTO leagueOrganizationDTO);

	/**
	 * 部分更新
	 * @param leagueOrganizationDTO 更新对象
	 * @return int
	 */
	public int updateLeagueOrganizationSensitive(LeagueOrganizationDTO leagueOrganizationDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateLeagueOrganizationList(@Param("dtoList") List<LeagueOrganizationDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteLeagueOrganizationById(String id);

	/**
	 * 根据总体排序字段查询树对象集合
	 * @param treePath 树路径
	 * @return
	 */
	public List<LeagueOrganizationDTO> findLeagueOrganizationByTreePath(@Param("treePath") String treePath);
	
	/**
	 *  根据ids获取所有的节点
	 * @param idsList 主键id集合
	 * @return
	 */
	public List<LeagueOrganizationDTO> searchLeagueOrganizationByIds(@Param("ids")List<List<String>> idsList);

	/**
	 *  查询当前父节点下，子节点中最大的treeSort值
	 * @param parentId
	 * @return
	 */
	public Long findMaxTreeSortByParentId(String parentId);


	public LeagueOrganizationDTO findLeagueOrganizationByLeagueCode(@Param("leagueCode")String leagueCode);
	


}

