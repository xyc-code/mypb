package avicit.cape.pmprojectys.pmprojectyszjbg.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.sfn.intercept.SelfDefined;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.cape.pmprojectys.pmprojectyszjbg.dto.PmProjectYsZjbgDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-09 17:38 
 * @类说明：请填写
 * @修改记录：
 */
@MyBatisRepository
public interface PmProjectYsZjbgDao {

	/**
	 * @description: 分页查询 项目验收管理-总结报告
	 * @param searchParams
	 * @return
	 */
	public Page<PmProjectYsZjbgDTO> searchPmProjectYsZjbgByPage(
			@Param(value = "bean") PmProjectYsZjbgDTO pmProjectYsZjbgDTO, @Param("sfnConditions") SelfDefined sql,
			@Param("org") String orgIdentity);

	/**
	* @description:查询对象 项目验收管理-总结报告
	* @param id
	* @return
	*/
	public PmProjectYsZjbgDTO findPmProjectYsZjbgById(String id);

	/**
	* @description: 新增对象 项目验收管理-总结报告
	* @param paramMap
	* @return
	*/
	public int insertPmProjectYsZjbg(PmProjectYsZjbgDTO pmProjectYsZjbgDTO);

	/**
	 * @description: 批量新增对象 项目验收管理-总结报告
	 * @param paramMap
	 * @return
	 */
	public int insertPmProjectYsZjbgList(List<PmProjectYsZjbgDTO> pmProjectYsZjbgDTOList);

	/**
	 * @description: 更新对象 项目验收管理-总结报告
	 * @param paramMap
	 * @return
	 */
	public int updatePmProjectYsZjbgSensitive(PmProjectYsZjbgDTO pmProjectYsZjbgDTO);

	/**
	 * @description: 更新对象 项目验收管理-总结报告
	 * @param paramMap
	 * @return
	 */
	public int updatePmProjectYsZjbgAll(PmProjectYsZjbgDTO pmProjectYsZjbgDTO);

	/**
	 * @description: 批量更新对象 项目验收管理-总结报告
	 * @param paramList
	 * @return
	 */
	public int updatePmProjectYsZjbgList(@Param("dtoList") List<PmProjectYsZjbgDTO> dtoList);

	/**
	 * @description: 按主键删除 项目验收管理-总结报告
	 * @param ids
	 * @return
	 */
	public int deletePmProjectYsZjbgById(String id);

	/**
	 * @description: 按主键批量删除 项目验收管理-总结报告
	 * @param ids
	 * @return
	*/
	public int deletePmProjectYsZjbgList(List<String> idList);
}
