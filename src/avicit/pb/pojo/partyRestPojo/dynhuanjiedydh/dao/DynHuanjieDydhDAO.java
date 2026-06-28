package avicit.pb.pojo.partyRestPojo.dynhuanjiedydh.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.pojo.partyRestPojo.dynhuanjiedydh.dto.DynHuanjieDydhDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-02-26 09:02
 * @类说明：DYN_HUANJIE_DYDHDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynHuanjieDydhDAO {

	/**
	 * 分页查询
	 * @param dynHuanjieDydhDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynHuanjieDydhDTO>
	 */
	public Page<DynHuanjieDydhDTO> searchDynHuanjieDydhByPage(@Param("bean") DynHuanjieDydhDTO dynHuanjieDydhDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynHuanjieDydhDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynHuanjieDydhDTO>
	 */
	public List<DynHuanjieDydhDTO> searchDynHuanjieDydh(@Param("bean") DynHuanjieDydhDTO dynHuanjieDydhDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynHuanjieDydhDTO>
	 */
	public List<DynHuanjieDydhDTO> searchDynHuanjieDydhForExport(@Param(value = "bean") DynHuanjieDydhDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynHuanjieDydhDTO
	 */
	public DynHuanjieDydhDTO findDynHuanjieDydhById(String id);

	/**
	* 新增
	* @param dynHuanjieDydhDTO 保存对象
	* @return int
	*/
	public int insertDynHuanjieDydh(DynHuanjieDydhDTO dynHuanjieDydhDTO);

	/**
	 * 批量新增
	 * @param dynHuanjieDydhDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynHuanjieDydhList(@Param("dtoList") List<DynHuanjieDydhDTO> dynHuanjieDydhDTOList);

	/**
	 * 部分更新
	 * @param dynHuanjieDydhDTO 更新对象
	 * @return int
	 */
	public int updateDynHuanjieDydhSensitive(DynHuanjieDydhDTO dynHuanjieDydhDTO);

	/**
	 * 全部更新
	 * @param dynHuanjieDydhDTO 更新对象
	 * @return int
	 */
	public int updateDynHuanjieDydhAll(DynHuanjieDydhDTO dynHuanjieDydhDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynHuanjieDydhList(@Param("dtoList") List<DynHuanjieDydhDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynHuanjieDydhById(String id);
}

