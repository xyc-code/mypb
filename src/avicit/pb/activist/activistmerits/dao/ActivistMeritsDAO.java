package avicit.pb.activist.activistmerits.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.activist.activistmerits.dto.ActivistMeritsDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-25 09:21
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface ActivistMeritsDAO {

	/**
	 * 分页查询
	 * @param activistMeritsDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<ActivistMeritsDTO>
	 */
	public Page<ActivistMeritsDTO> searchActivistMeritsByPage(@Param("bean") ActivistMeritsDTO activistMeritsDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
     * 不分页查询
     * @param activistMeritsDTO 查询对象
     * @param orderBy 排序条件
     * @param keyWord 关键字
     * @return List<ActivistMeritsDTO>
     */
    public List<ActivistMeritsDTO> searchActivistMerits(@Param("bean") ActivistMeritsDTO activistMeritsDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    /**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<ActivistMeritsDTO>
	 */
	public List<ActivistMeritsDTO> searchActivistMeritsForExport(@Param(value = "bean") ActivistMeritsDTO dto, @Param(value = "ids") List<String> idsList);


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return ActivistMeritsDTO
	 */
	public ActivistMeritsDTO findActivistMeritsById(String id);

	/**
	* 新增
	* @param activistMeritsDTO 保存对象
	* @return int
	*/
	public int insertActivistMerits(ActivistMeritsDTO activistMeritsDTO);

	/**
	 * 批量新增
	 * @param activistMeritsDTOList 保存对象集合
	 * @return int
	 */
	public int insertActivistMeritsList(@Param("dtoList") List<ActivistMeritsDTO> activistMeritsDTOList);

	/**
	 * 部分更新
	 * @param activistMeritsDTO 更新对象
	 * @return int
	 */
	public int updateActivistMeritsSensitive(ActivistMeritsDTO activistMeritsDTO);

	/**
	 * 全部更新
	 * @param activistMeritsDTO 更新对象
	 * @return int
	 */
	public int updateActivistMeritsAll(ActivistMeritsDTO activistMeritsDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateActivistMeritsList(@Param("dtoList") List<ActivistMeritsDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteActivistMeritsById(String id);

}

