package avicit.pb.member.dynworkplan.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.member.dynworkplan.dto.DynWorkPlanDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-23 16:42
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface DynWorkPlanDAO {

	/**
	 * 分页查询
	 * @param dynWorkPlanDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynWorkPlanDTO>
	 */
	public Page<DynWorkPlanDTO> searchDynWorkPlanByPage(@Param("bean") DynWorkPlanDTO dynWorkPlanDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynWorkPlanDTO 查询对象
	 * @param orderBy 排序条件
     * @param keyWord 关键字
	 * @return List<DynWorkPlanDTO>
	 */
	public List<DynWorkPlanDTO> searchDynWorkPlan(@Param("bean") DynWorkPlanDTO dynWorkPlanDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    /**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynWorkPlanDTO>
	 */
	public List<DynWorkPlanDTO> searchDynWorkPlanForExport(@Param(value = "bean") DynWorkPlanDTO dto, @Param(value = "ids") List<String> idsList);


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynWorkPlanDTO
	 */
	public DynWorkPlanDTO findDynWorkPlanById(String id);

	/**
	 * 新增
	 * @param dynWorkPlanDTO 保存对象
	 * @return int
	 */
	public int insertDynWorkPlan(DynWorkPlanDTO dynWorkPlanDTO);

	/**
	 * 批量新增
	 * @param dynWorkPlanDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynWorkPlanList(@Param("dtoList") List<DynWorkPlanDTO> dynWorkPlanDTOList);

	/**
	 * 部分更新
	 * @param dynWorkPlanDTO 更新对象
	 * @return int
	 */
	public int updateDynWorkPlanSensitive(DynWorkPlanDTO dynWorkPlanDTO);

	/**
	 * 全部更新
	 * @param dynWorkPlanDTO 更新对象
	 * @return int
	 */
	public int updateDynWorkPlanAll(DynWorkPlanDTO dynWorkPlanDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynWorkPlanList(@Param("dtoList") List<DynWorkPlanDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynWorkPlanById(String id);

}

