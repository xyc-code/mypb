package avicit.cape.pmprojectys.pmprojectyssts.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.sfn.intercept.SelfDefined;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.cape.pmprojectys.pmprojectyssts.dto.PmProjectYsStsDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-09 10:52 
 * @类说明：请填写
 * @修改记录：
 */
@MyBatisRepository
public interface PmProjectYsStsDao {

	/**
	 * @description: 分页查询 项目验收管理-三同时
	 * @param searchParams
	 * @return
	 */
	public Page<PmProjectYsStsDTO> searchPmProjectYsStsByPage(
			@Param(value = "bean") PmProjectYsStsDTO pmProjectYsStsDTO, @Param("sfnConditions") SelfDefined sql,
			@Param("org") String orgIdentity);

	/**
	* @description:查询对象 项目验收管理-三同时
	* @param id
	* @return
	*/
	public PmProjectYsStsDTO findPmProjectYsStsById(String id);

	/**
	* @description: 新增对象 项目验收管理-三同时
	* @param paramMap
	* @return
	*/
	public int insertPmProjectYsSts(PmProjectYsStsDTO pmProjectYsStsDTO);

	/**
	 * @description: 批量新增对象 项目验收管理-三同时
	 * @param paramMap
	 * @return
	 */
	public int insertPmProjectYsStsList(List<PmProjectYsStsDTO> pmProjectYsStsDTOList);

	/**
	 * @description: 更新对象 项目验收管理-三同时
	 * @param paramMap
	 * @return
	 */
	public int updatePmProjectYsStsSensitive(PmProjectYsStsDTO pmProjectYsStsDTO);

	/**
	 * @description: 更新对象 项目验收管理-三同时
	 * @param paramMap
	 * @return
	 */
	public int updatePmProjectYsStsAll(PmProjectYsStsDTO pmProjectYsStsDTO);

	/**
	 * @description: 批量更新对象 项目验收管理-三同时
	 * @param paramList
	 * @return
	 */
	public int updatePmProjectYsStsList(@Param("dtoList") List<PmProjectYsStsDTO> dtoList);

	/**
	 * @description: 按主键删除 项目验收管理-三同时
	 * @param ids
	 * @return
	 */
	public int deletePmProjectYsStsById(String id);

	/**
	 * @description: 按主键批量删除 项目验收管理-三同时
	 * @param ids
	 * @return
	*/
	public int deletePmProjectYsStsList(List<String> idList);
}
