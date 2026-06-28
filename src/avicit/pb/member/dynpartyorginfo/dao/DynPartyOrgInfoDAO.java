package avicit.pb.member.dynpartyorginfo.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.member.dynpartyorginfo.dto.DynPartyOrgInfoDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-01-30 13:57
 * @类说明：DYN_PARTY_ORG_INFODao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynPartyOrgInfoDAO {

	/**
	 * 分页查询
	 * @param dynPartyOrgInfoDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynPartyOrgInfoDTO>
	 */
	public Page<DynPartyOrgInfoDTO> searchDynPartyOrgInfoByPage(@Param("bean") DynPartyOrgInfoDTO dynPartyOrgInfoDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynPartyOrgInfoDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynPartyOrgInfoDTO>
	 */
	public List<DynPartyOrgInfoDTO> searchDynPartyOrgInfo(@Param("bean") DynPartyOrgInfoDTO dynPartyOrgInfoDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynPartyOrgInfoDTO>
	 */
	public List<DynPartyOrgInfoDTO> searchDynPartyOrgInfoForExport(@Param(value = "bean") DynPartyOrgInfoDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynPartyOrgInfoDTO
	 */
	public DynPartyOrgInfoDTO findDynPartyOrgInfoById(String id);

	/**
	* 新增
	* @param dynPartyOrgInfoDTO 保存对象
	* @return int
	*/
	public int insertDynPartyOrgInfo(DynPartyOrgInfoDTO dynPartyOrgInfoDTO);

	/**
	 * 批量新增
	 * @param dynPartyOrgInfoDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynPartyOrgInfoList(@Param("dtoList") List<DynPartyOrgInfoDTO> dynPartyOrgInfoDTOList);

	/**
	 * 部分更新
	 * @param dynPartyOrgInfoDTO 更新对象
	 * @return int
	 */
	public int updateDynPartyOrgInfoSensitive(DynPartyOrgInfoDTO dynPartyOrgInfoDTO);

	/**
	 * 全部更新
	 * @param dynPartyOrgInfoDTO 更新对象
	 * @return int
	 */
	public int updateDynPartyOrgInfoAll(DynPartyOrgInfoDTO dynPartyOrgInfoDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynPartyOrgInfoList(@Param("dtoList") List<DynPartyOrgInfoDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynPartyOrgInfoById(String id);
}

