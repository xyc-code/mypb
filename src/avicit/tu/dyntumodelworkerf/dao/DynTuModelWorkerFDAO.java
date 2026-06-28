package avicit.tu.dyntumodelworkerf.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.tu.dyntumodelworkerf.dto.DynTuModelWorkerFDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：temp
 * @邮箱：temp@163.com
 * @创建时间： 2023-08-14 14:24
 * @类说明：DYN_TU_MODEL_WORKER_FDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynTuModelWorkerFDAO {

	/**
	 * 分页查询
	 * @param dynTuModelWorkerFDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynTuModelWorkerFDTO>
	 */
	public Page<DynTuModelWorkerFDTO> searchDynTuModelWorkerFByPage(@Param("bean") DynTuModelWorkerFDTO dynTuModelWorkerFDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynTuModelWorkerFDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynTuModelWorkerFDTO>
	 */
	public List<DynTuModelWorkerFDTO> searchDynTuModelWorkerF(@Param("bean") DynTuModelWorkerFDTO dynTuModelWorkerFDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynTuModelWorkerFDTO>
	 */
	public List<DynTuModelWorkerFDTO> searchDynTuModelWorkerFForExport(@Param(value = "bean") DynTuModelWorkerFDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynTuModelWorkerFDTO
	 */
	public DynTuModelWorkerFDTO findDynTuModelWorkerFById(String id);

	/**
	* 新增
	* @param dynTuModelWorkerFDTO 保存对象
	* @return int
	*/
	public int insertDynTuModelWorkerF(DynTuModelWorkerFDTO dynTuModelWorkerFDTO);

	/**
	 * 批量新增
	 * @param dynTuModelWorkerFDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynTuModelWorkerFList(@Param("dtoList") List<DynTuModelWorkerFDTO> dynTuModelWorkerFDTOList);

	/**
	 * 部分更新
	 * @param dynTuModelWorkerFDTO 更新对象
	 * @return int
	 */
	public int updateDynTuModelWorkerFSensitive(DynTuModelWorkerFDTO dynTuModelWorkerFDTO);

	/**
	 * 全部更新
	 * @param dynTuModelWorkerFDTO 更新对象
	 * @return int
	 */
	public int updateDynTuModelWorkerFAll(DynTuModelWorkerFDTO dynTuModelWorkerFDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynTuModelWorkerFList(@Param("dtoList") List<DynTuModelWorkerFDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynTuModelWorkerFById(String id);
}

