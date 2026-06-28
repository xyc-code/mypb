package avicit.cape.pmprojectys.pmprojectyscwjs.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.sfn.intercept.SelfDefined;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.cape.pmprojectys.pmprojectyscwjs.dto.PmProjectYsCwjsDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-09 17:34 
 * @类说明：请填写
 * @修改记录：
 */
@MyBatisRepository
public interface PmProjectYsCwjsDao {

	/**
	 * @description: 分页查询 项目验收管理-财务决算审计
	 * @param searchParams
	 * @return
	 */
	public Page<PmProjectYsCwjsDTO> searchPmProjectYsCwjsByPage(
			@Param(value = "bean") PmProjectYsCwjsDTO pmProjectYsCwjsDTO, @Param("sfnConditions") SelfDefined sql,
			@Param("org") String orgIdentity);

	/**
	* @description:查询对象 项目验收管理-财务决算审计
	* @param id
	* @return
	*/
	public PmProjectYsCwjsDTO findPmProjectYsCwjsById(String id);

	/**
	* @description: 新增对象 项目验收管理-财务决算审计
	* @param paramMap
	* @return
	*/
	public int insertPmProjectYsCwjs(PmProjectYsCwjsDTO pmProjectYsCwjsDTO);

	/**
	 * @description: 批量新增对象 项目验收管理-财务决算审计
	 * @param paramMap
	 * @return
	 */
	public int insertPmProjectYsCwjsList(List<PmProjectYsCwjsDTO> pmProjectYsCwjsDTOList);

	/**
	 * @description: 更新对象 项目验收管理-财务决算审计
	 * @param paramMap
	 * @return
	 */
	public int updatePmProjectYsCwjsSensitive(PmProjectYsCwjsDTO pmProjectYsCwjsDTO);

	/**
	 * @description: 更新对象 项目验收管理-财务决算审计
	 * @param paramMap
	 * @return
	 */
	public int updatePmProjectYsCwjsAll(PmProjectYsCwjsDTO pmProjectYsCwjsDTO);

	/**
	 * @description: 批量更新对象 项目验收管理-财务决算审计
	 * @param paramList
	 * @return
	 */
	public int updatePmProjectYsCwjsList(@Param("dtoList") List<PmProjectYsCwjsDTO> dtoList);

	/**
	 * @description: 按主键删除 项目验收管理-财务决算审计
	 * @param ids
	 * @return
	 */
	public int deletePmProjectYsCwjsById(String id);

	/**
	 * @description: 按主键批量删除 项目验收管理-财务决算审计
	 * @param ids
	 * @return
	*/
	public int deletePmProjectYsCwjsList(List<String> idList);
}
