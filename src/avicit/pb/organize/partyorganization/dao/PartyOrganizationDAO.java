package avicit.pb.organize.partyorganization.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-12 11:39
 * @类说明：党组织结构表Dao
 * @修改记录： 
 */
@MyBatisRepository
public interface PartyOrganizationDAO {

	/**
	 * 通过主键获取对象
	 * @param id 主键id
	 * @return
	 */
	public PartyOrganizationDTO findPartyOrganizationById(@Param("id") String id);


	/**
	 * 获取当前节点的子节点
	 * @param id 节点id
	 * @return
	 */
	public List<PartyOrganizationDTO> findChildrenPartyOrganizationById(@Param("id")String id);
	
	/**
	* 获取子节点数据不包括自己
	* @param id 节点id
	* @param oldParentId 关联字段
	* @return
	*/
	public List<PartyOrganizationDTO> findChildrenPartyOrganizationExceptSelfById(@Param("parentId")String oldParentId,@Param("id")String id);

	/**
	* 根据条件查询节点
	* @param partyOrganizationDTO 查询条件
	* @return List<PartyOrganizationDTO>
	*/
	public List<PartyOrganizationDTO> searchPartyOrganization(PartyOrganizationDTO partyOrganizationDTO);


	/**
	 * 获取当前组织的根节点
	 * @param orgIdentity 组织id
	 * @return
	 */
	public PartyOrganizationDTO findPartyOrganizationRootNode(@Param("orgIdentity")String orgIdentity);


	/**
	* 新增
	* @param partyOrganizationDTO 保存对象
	* @return int
	*/
	public int insertPartyOrganization(PartyOrganizationDTO partyOrganizationDTO);

	/**
	 * 部分更新
	 * @param partyOrganizationDTO 更新对象
	 * @return int
	 */
	public int updatePartyOrganizationSensitive(PartyOrganizationDTO partyOrganizationDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updatePartyOrganizationList(@Param("dtoList") List<PartyOrganizationDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deletePartyOrganizationById(String id);

	/**
	 * 根据总体排序字段查询树对象集合
	 * @param treePath 树路径
	 * @return
	 */
	public List<PartyOrganizationDTO> findPartyOrganizationByTreePath(@Param("treePath") String treePath);
	
	/**
	 *  根据ids获取所有的节点
	 * @param idsList 主键id集合
	 * @return
	 */
	public List<PartyOrganizationDTO> searchPartyOrganizationByIds(@Param("ids")List<List<String>> idsList);

	/**
	 *  查询当前父节点下，子节点中最大的treeSort值
	 * @param parentId
	 * @return
	 */
	public Long findMaxTreeSortByParentId(String parentId);


	public PartyOrganizationDTO findPartyOrganizationByPartyCode(@Param("partyCode")String partyCode);

	/**
	 * 根据党组织id查询党员总数 如果zt不为5则递归查询该组织下的所有党员总数
	 * @param id 党组织id
	 * @param zt 党组织状态
	 * @return 党员总数*/
	public Integer partyCount(@Param("id") String id,@Param("zt") int zt);

	/**
	 * 根据党组织id查询党小组
	 * @param id 党组织id
	 * @return 党员总数*/
	public Integer partyOrgCount(@Param("id") String id);

	/**
	 * 根据党组织id查询委员总数
	 * @param id 党组织id
	 * @return 党员总数*/
	public Integer partyPostCount(@Param("id") String id);

	/**
	 * 根据党组织id查询应有总数
	 * @param id 党组织id
	 * @return 党员总数*/
	public Integer partyPostYycount(@Param("id") String id);

	/**
	 * 根据党组织id查询委员总数
	 * @param id 党组织id
	 * @return 党员总数*/
	public Integer partyJwPostCount(@Param("id") String id);

	/**
	 * 根据党组织id查询应有总数
	 * @param id 党组织id
	 * @return 党员总数*/
	public Integer partyJwPostYycount(@Param("id") String id);


	/**
	 * 根据党组织id查询纪委书记姓名
	 * @param id 党组织id
	 * @return 党员总数*/
	public String partyJwSjPostCount(@Param("id") String id);


	/**
	 * 根据党组织id查询纪委书记姓名
	 * @param id 党组织id
	 * @return 党员总数*/
	public String partyPostName(@Param("id") String id);

	/**
	 * 根据党组织id查询选举类型
	 * @param id 党组织id
	 * @return 党员总数*/
	public Integer partyType(@Param("id") String id);

	/**
	 * 获取党组织换届时间
	 * @param id 党组织id
	 * @return  换届时间*/
	String partyDate(@Param("id") String id);

	/**
	 * 获取本届党组织时间
	 * @param  id 党组织id
	 * @return  本届换届时间*/
	String partyBjDate(@Param("id")String id);

	/**
	 * 获取下属党支部组成
	 * @param  id 党组织id
	 * @return  本届换届时间*/
	List<String> partyZc(@Param("id")String id);

	/**
	 * 查询积极分子人数
	 * @param id 党组织id
	 * @return 数量
	 *  */
	Integer avic_count(@Param("id")String id,@Param("zt") String zt);
	/**
	 * 查询纪委名称
	 * @param id 党组织id
	 * @return 纪委名称
	 *  */
	String jwOrgName(@Param("id")String id);
	
	/**
	 * 查询公司党委委员总数
	 * @param id 党组织id*/
	String gsDwWyCount(@Param("id")String id);
	
	/**
	 * 查询所有党组织总数
	 * */
	String partyOrgAllCount();
	
	/**
	 * 查询所有基层党委
	 * */
	String partyOrgJcdwCount();
	
	/**
	 * 查询党总支数量
	 * */
	String partyOrgDzzCount();
	
	/**
	 * 查询直属党支部数量
	 * */
	String partyOrgZsdzbCount();
	
	/**
	 * 查询下属党支部数量
	 * */
	String partyOrgXsdzbCount();
	
	/**
	 * 查询直属纪委数量
	 * */
	String partyOrgZsjwCount();

	/**
	 * 查询党组织选举统计
	 * @param outtime 结束时间
	 * @param sytime 开始时间
	 * */
	List<Map<String,Object>> partySessionInfo(@Param("outtime") String outtime,@Param("sytime") String sytime);

	/**
	 * 查询所有女书记*/
	String sexPartyPost(@Param("outtime") String outtime,@Param("sytime") String sytime);

	/**
	 * 查询所有纪委书记*/
	String JwPartyPost(@Param("outtime") String outtime,@Param("sytime") String sytime);

	/**
	 * 查询所有组织委员*/
	String zzwyPartyPost(@Param("outtime") String outtime,@Param("sytime") String sytime);

}

