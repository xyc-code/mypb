package avicit.cape.pmprojectys.pmprojectysxcjg.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.sfn.intercept.SelfDefined;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.cape.pmprojectys.pmprojectysxcjg.dto.PmProjectYsXcjgDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-09 17:39 
 * @类说明：请填写
 * @修改记录：
 */
@MyBatisRepository
public interface PmProjectYsXcjgDao {

	/**
	 * @description: 分页查询 项目验收管理-现场竣工验收
	 * @param searchParams
	 * @return
	 */
	public Page<PmProjectYsXcjgDTO> searchPmProjectYsXcjgByPage(
			@Param(value = "bean") PmProjectYsXcjgDTO pmProjectYsXcjgDTO, @Param("sfnConditions") SelfDefined sql,
			@Param("org") String orgIdentity);

	/**
	* @description:查询对象 项目验收管理-现场竣工验收
	* @param id
	* @return
	*/
	public PmProjectYsXcjgDTO findPmProjectYsXcjgById(String id);

	/**
	* @description: 新增对象 项目验收管理-现场竣工验收
	* @param paramMap
	* @return
	*/
	public int insertPmProjectYsXcjg(PmProjectYsXcjgDTO pmProjectYsXcjgDTO);

	/**
	 * @description: 批量新增对象 项目验收管理-现场竣工验收
	 * @param paramMap
	 * @return
	 */
	public int insertPmProjectYsXcjgList(List<PmProjectYsXcjgDTO> pmProjectYsXcjgDTOList);

	/**
	 * @description: 更新对象 项目验收管理-现场竣工验收
	 * @param paramMap
	 * @return
	 */
	public int updatePmProjectYsXcjgSensitive(PmProjectYsXcjgDTO pmProjectYsXcjgDTO);

	/**
	 * @description: 更新对象 项目验收管理-现场竣工验收
	 * @param paramMap
	 * @return
	 */
	public int updatePmProjectYsXcjgAll(PmProjectYsXcjgDTO pmProjectYsXcjgDTO);

	/**
	 * @description: 批量更新对象 项目验收管理-现场竣工验收
	 * @param paramList
	 * @return
	 */
	public int updatePmProjectYsXcjgList(@Param("dtoList") List<PmProjectYsXcjgDTO> dtoList);

	/**
	 * @description: 按主键删除 项目验收管理-现场竣工验收
	 * @param ids
	 * @return
	 */
	public int deletePmProjectYsXcjgById(String id);

	/**
	 * @description: 按主键批量删除 项目验收管理-现场竣工验收
	 * @param ids
	 * @return
	*/
	public int deletePmProjectYsXcjgList(List<String> idList);
}
