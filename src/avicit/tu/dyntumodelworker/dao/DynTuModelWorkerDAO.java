package avicit.tu.dyntumodelworker.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.tu.dyntumodelworker.dto.DynTuModelWorkerDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：temp
 * @邮箱：temp@163.com
 * @创建时间： 2023-08-11 09:59
 * @类说明：DYN_TU_MODEL_WORKERDao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynTuModelWorkerDAO {

	/**
	 * 分页查询
	 * @param dynTuModelWorkerDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynTuModelWorkerDTO>
	 */
	public Page<DynTuModelWorkerDTO> searchDynTuModelWorkerByPage(@Param("bean") DynTuModelWorkerDTO dynTuModelWorkerDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynTuModelWorkerDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynTuModelWorkerDTO>
	 */
	public List<DynTuModelWorkerDTO> searchDynTuModelWorker(@Param("bean") DynTuModelWorkerDTO dynTuModelWorkerDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynTuModelWorkerDTO>
	 */
	public List<DynTuModelWorkerDTO> searchDynTuModelWorkerForExport(@Param(value = "bean") DynTuModelWorkerDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynTuModelWorkerDTO
	 */
	public DynTuModelWorkerDTO findDynTuModelWorkerById(String id);

	/**
	* 新增
	* @param dynTuModelWorkerDTO 保存对象
	* @return int
	*/
	public int insertDynTuModelWorker(DynTuModelWorkerDTO dynTuModelWorkerDTO);

	/**
	 * 批量新增
	 * @param dynTuModelWorkerDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynTuModelWorkerList(@Param("dtoList") List<DynTuModelWorkerDTO> dynTuModelWorkerDTOList);

	/**
	 * 部分更新
	 * @param dynTuModelWorkerDTO 更新对象
	 * @return int
	 */
	public int updateDynTuModelWorkerSensitive(DynTuModelWorkerDTO dynTuModelWorkerDTO);

	/**
	 * 全部更新
	 * @param dynTuModelWorkerDTO 更新对象
	 * @return int
	 */
	public int updateDynTuModelWorkerAll(DynTuModelWorkerDTO dynTuModelWorkerDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynTuModelWorkerList(@Param("dtoList") List<DynTuModelWorkerDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynTuModelWorkerById(String id);
	
	
	//psu
	public List<Map<String,Object>> queryOne(String id);

	public Map<String,Object> queryOne2(String id);
	
	public List<Map<String,Object>> queryAge(String id);
	
	public List<Map<String,Object>> queryEducation(String id);
	
	public List<Map<String,Object>> queryPr(String id);
	
	public List<Map<String,Object>> queryType(String id);
	
	public List<Map<String,Object>> querySex(String id);
	
	
	
}

