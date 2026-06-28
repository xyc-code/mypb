package avicit.cape.pmprojectys.pmprojectysda.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.sfn.intercept.SelfDefined;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.cape.pmprojectys.pmprojectysda.dto.PmProjectYsDaDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-09 17:35 
 * @类说明：请填写
 * @修改记录：
 */
@MyBatisRepository
public interface PmProjectYsDaDao {

	/**
	 * @description: 分页查询 项目验收管理-档案验收
	 * @param searchParams
	 * @return
	 */
	public Page<PmProjectYsDaDTO> searchPmProjectYsDaByPage(@Param(value = "bean") PmProjectYsDaDTO pmProjectYsDaDTO,
			@Param("sfnConditions") SelfDefined sql, @Param("org") String orgIdentity);

	/**
	* @description:查询对象 项目验收管理-档案验收
	* @param id
	* @return
	*/
	public PmProjectYsDaDTO findPmProjectYsDaById(String id);

	/**
	* @description: 新增对象 项目验收管理-档案验收
	* @param paramMap
	* @return
	*/
	public int insertPmProjectYsDa(PmProjectYsDaDTO pmProjectYsDaDTO);

	/**
	 * @description: 批量新增对象 项目验收管理-档案验收
	 * @param paramMap
	 * @return
	 */
	public int insertPmProjectYsDaList(List<PmProjectYsDaDTO> pmProjectYsDaDTOList);

	/**
	 * @description: 更新对象 项目验收管理-档案验收
	 * @param paramMap
	 * @return
	 */
	public int updatePmProjectYsDaSensitive(PmProjectYsDaDTO pmProjectYsDaDTO);

	/**
	 * @description: 更新对象 项目验收管理-档案验收
	 * @param paramMap
	 * @return
	 */
	public int updatePmProjectYsDaAll(PmProjectYsDaDTO pmProjectYsDaDTO);

	/**
	 * @description: 批量更新对象 项目验收管理-档案验收
	 * @param paramList
	 * @return
	 */
	public int updatePmProjectYsDaList(@Param("dtoList") List<PmProjectYsDaDTO> dtoList);

	/**
	 * @description: 按主键删除 项目验收管理-档案验收
	 * @param ids
	 * @return
	 */
	public int deletePmProjectYsDaById(String id);

	/**
	 * @description: 按主键批量删除 项目验收管理-档案验收
	 * @param ids
	 * @return
	*/
	public int deletePmProjectYsDaList(List<String> idList);
}
