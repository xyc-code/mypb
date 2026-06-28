package avicit.pb.pojo.partyRestPojo.dynjwdydhzb.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.pojo.partyRestPojo.dynjwdydhzb.dto.DynJwDydhzbDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-03-18 11:50
 * @类说明：DYN_JW_DYDHZBDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynJwDydhzbDAO {

	/**
	 * 分页查询
	 * @param dynJwDydhzbDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynJwDydhzbDTO>
	 */
	public Page<DynJwDydhzbDTO> searchDynJwDydhzbByPage(@Param("bean") DynJwDydhzbDTO dynJwDydhzbDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynJwDydhzbDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynJwDydhzbDTO>
	 */
	public List<DynJwDydhzbDTO> searchDynJwDydhzb(@Param("bean") DynJwDydhzbDTO dynJwDydhzbDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynJwDydhzbDTO>
	 */
	public List<DynJwDydhzbDTO> searchDynJwDydhzbForExport(@Param(value = "bean") DynJwDydhzbDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynJwDydhzbDTO
	 */
	public DynJwDydhzbDTO findDynJwDydhzbById(String id);

	/**
	* 新增
	* @param dynJwDydhzbDTO 保存对象
	* @return int
	*/
	public int insertDynJwDydhzb(DynJwDydhzbDTO dynJwDydhzbDTO);

	/**
	 * 批量新增
	 * @param dynJwDydhzbDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynJwDydhzbList(@Param("dtoList") List<DynJwDydhzbDTO> dynJwDydhzbDTOList);

	/**
	 * 部分更新
	 * @param dynJwDydhzbDTO 更新对象
	 * @return int
	 */
	public int updateDynJwDydhzbSensitive(DynJwDydhzbDTO dynJwDydhzbDTO);

	/**
	 * 全部更新
	 * @param dynJwDydhzbDTO 更新对象
	 * @return int
	 */
	public int updateDynJwDydhzbAll(DynJwDydhzbDTO dynJwDydhzbDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynJwDydhzbList(@Param("dtoList") List<DynJwDydhzbDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynJwDydhzbById(String id);
}

