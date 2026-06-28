package avicit.pb.milepost.dynyouthdeclaration.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.milepost.dynyouthdeclaration.dto.DynYouthDeclarationDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-14 13:58
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface DynYouthDeclarationDAO {

	/**
	 * 分页查询
	 * @param dynYouthDeclarationDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynYouthDeclarationDTO>
	 */
	public Page<DynYouthDeclarationDTO> searchDynYouthDeclarationByPage(@Param("bean") DynYouthDeclarationDTO dynYouthDeclarationDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynYouthDeclarationDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynYouthDeclarationDTO>
	 */
	public List<DynYouthDeclarationDTO> searchDynYouthDeclaration(@Param("bean") DynYouthDeclarationDTO dynYouthDeclarationDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynYouthDeclarationDTO>
	 */
	public List<DynYouthDeclarationDTO> searchDynYouthDeclarationForExport(@Param(value = "bean") DynYouthDeclarationDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynYouthDeclarationDTO
	 */
	public DynYouthDeclarationDTO findDynYouthDeclarationById(String id);

	/**
	* 新增
	* @param dynYouthDeclarationDTO 保存对象
	* @return int
	*/
	public int insertDynYouthDeclaration(DynYouthDeclarationDTO dynYouthDeclarationDTO);

	/**
	 * 批量新增
	 * @param dynYouthDeclarationDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynYouthDeclarationList(@Param("dtoList") List<DynYouthDeclarationDTO> dynYouthDeclarationDTOList);

	/**
	 * 部分更新
	 * @param dynYouthDeclarationDTO 更新对象
	 * @return int
	 */
	public int updateDynYouthDeclarationSensitive(DynYouthDeclarationDTO dynYouthDeclarationDTO);

	/**
	 * 全部更新
	 * @param dynYouthDeclarationDTO 更新对象
	 * @return int
	 */
	public int updateDynYouthDeclarationAll(DynYouthDeclarationDTO dynYouthDeclarationDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynYouthDeclarationList(@Param("dtoList") List<DynYouthDeclarationDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynYouthDeclarationById(String id);
}

