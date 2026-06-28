package avicit.cape.pro.pmprojectworkreport.dao;

import java.util.List;

import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.platform6.core.mybatis.pagehelper.Page;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.sfn.intercept.SelfDefined;
import avicit.cape.pro.pmprojectworkreport.dto.PmProjectWorkreportDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-03-31 23:21 
 * @类说明：请填写
 * @修改记录：
 */
@MyBatisRepository
public interface PmProjectWorkreportDao {

	/**
	 * @description: 分页查询 项目工作汇报
	 * @param searchParams
	 * @return
	 */
	public Page<PmProjectWorkreportDTO> searchPmProjectWorkreportByPage(
			@Param("bean") PmProjectWorkreportDTO pmProjectWorkreportDTO, @Param("sfnConditions") SelfDefined sql,
			@Param("org") String orgIdentity);

	/**
	* @description:查询对象项目工作汇报
	* @param searchParams
	* @return
	*/
	public List<PmProjectWorkreportDTO> searchPmProjectWorkreport(PmProjectWorkreportDTO pmProjectWorkreportDTO);

	/**
	 * @description:查询对象 项目工作汇报
	 * @param id
	 * @return
	 */
	public PmProjectWorkreportDTO findPmProjectWorkreportById(String id);

	/**
	* @description: 新增对象 项目工作汇报
	* @param paramMap
	* @return
	*/
	public int insertPmProjectWorkreport(PmProjectWorkreportDTO pmProjectWorkreportDTO);

	/**
	 * @description: 批量新增对象 项目工作汇报
	 * @param paramMap
	 * @return
	 */
	public int insertPmProjectWorkreportList(List<PmProjectWorkreportDTO> pmProjectWorkreportDTOList);

	/**
	 * @description: 更新对象 项目工作汇报
	 * @param paramMap
	 */
	public int updatePmProjectWorkreportSensitive(PmProjectWorkreportDTO pmProjectWorkreportDTO);

	/**
	 * @description: 更新对象 项目工作汇报
	 * @param paramMap
	 */
	public int updatePmProjectWorkreportAll(PmProjectWorkreportDTO pmProjectWorkreportDTO);

	/**
	 * @description: 批量更新对象 项目工作汇报
	 * @param paramList
	 * @return
	 */
	public int updatePmProjectWorkreportList(@Param("dtoList") List<PmProjectWorkreportDTO> dtoList);

	/**
	 * @description: 按主键删除 项目工作汇报
	 * @param ids
	 * @return
	 */
	public int deletePmProjectWorkreportById(String id);

	/**
	 * @description: 按主键批量删除 项目工作汇报
	 * @param ids
	 * @return
	*/
	public int deletePmProjectWorkreportList(List<String> idList);
}
