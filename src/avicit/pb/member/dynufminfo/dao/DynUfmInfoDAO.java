package avicit.pb.member.dynufminfo.dao;

import java.util.List;
import java.util.Map;

import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.member.dynufminfo.dto.DynUfmInfoDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-13 13:13
 * @类说明：DYN_UFM_INFODao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynUfmInfoDAO {

	/**
	* 分页查询
	* @param dynUfmInfoDTO 查询对象
	* @param orgIdentity 组织id
	* @param orderBy 排序条件
	* @return Page<DynUfmInfoDTO>
	*/
	public Page<DynUfmInfoDTO> searchDynUfmInfoByPage(@Param("bean") DynUfmInfoDTO dynUfmInfoDTO, @Param("pOrderBy") String orderBy);

	/**
	* 不分页查询
	* @param dynUfmInfoDTO 查询对象
	* @return List<DynUfmInfoDTO>
	*/
	public List<DynUfmInfoDTO> searchDynUfmInfo(@Param("bean") DynUfmInfoDTO dynUfmInfoDTO);


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynUfmInfoDTO
	 */
	public DynUfmInfoDTO findDynUfmInfoById(String id);

	/**
	* 新增
	* @param dynUfmInfoDTO 保存对象
	* @return int
	*/
	public int insertDynUfmInfo(DynUfmInfoDTO dynUfmInfoDTO);

	/**
	 * 批量新增
	 * @param dynUfmInfoDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynUfmInfoList(List<DynUfmInfoDTO> dynUfmInfoDTOList);

	/**
	 * 部分更新
	 * @param dynUfmInfoDTO 更新对象
	 * @return int
	 */
	public int updateDynUfmInfoSensitive(DynUfmInfoDTO dynUfmInfoDTO);

	/**
	 * 全部更新
	 * @param dynUfmInfoDTO 更新对象
	 * @return int
	 */
	public int updateDynUfmInfoAll(DynUfmInfoDTO dynUfmInfoDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynUfmInfoList(@Param("dtoList") List<DynUfmInfoDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynUfmInfoById(String id);

	/**
	 * 查询
	 * @param id 主键id
	 * @return DynUfmInfoDTO
	 */
	public DynUfmInfoDTO findEmployeeid(String employeeid);

	//psu+
	
	public Map<String,Object> poOrgNameDao(String poName);
	
	
	
}

