package avicit.cape.pmprojectys.pmprojectyshpj.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.platform6.core.sfn.intercept.SelfDefined;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.cape.pmprojectys.pmprojectyshpj.dto.PmProjectYsHpjDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-11 10:27 
 * @类说明：请填写
 * @修改记录：
 */
@MyBatisRepository
public interface PmProjectYsHpjDao {

	/**
	 * @description: 分页查询 项目验收管理-后评价管理
	 * @param searchParams
	 * @return
	 */
	public Page<PmProjectYsHpjDTO> searchPmProjectYsHpjByPage(@Param("bean") PmProjectYsHpjDTO pmProjectYsHpjDTO,
			@Param("sfnConditions") SelfDefined sql, @Param("org") String orgIdentity);

	/**
	* @description:查询对象 项目验收管理-后评价管理
	* @param searchParams
	* @return
	*/
	public List<PmProjectYsHpjDTO> searchPmProjectYsHpj(PmProjectYsHpjDTO pmProjectYsHpjDTO);

	/**
	 * @description:查询对象 项目验收管理-后评价管理
	 * @param id
	 * @return
	 */
	public PmProjectYsHpjDTO findPmProjectYsHpjById(String id);

	/**
	* @description: 新增对象 项目验收管理-后评价管理
	* @param paramMap
	* @return
	*/
	public int insertPmProjectYsHpj(PmProjectYsHpjDTO pmProjectYsHpjDTO);

	/**
	 * @description: 批量新增对象 项目验收管理-后评价管理
	 * @param paramMap
	 * @return
	 */
	public int insertPmProjectYsHpjList(List<PmProjectYsHpjDTO> pmProjectYsHpjDTOList);

	/**
	 * @description: 更新对象 项目验收管理-后评价管理
	 * @param paramMap
	 * @return
	 */
	public int updatePmProjectYsHpjSensitive(PmProjectYsHpjDTO pmProjectYsHpjDTO);

	/**
	 * @description: 更新对象 项目验收管理-后评价管理
	 * @param paramMap
	 * @return
	 */
	public int updatePmProjectYsHpjAll(PmProjectYsHpjDTO pmProjectYsHpjDTO);

	/**
	 * @description: 批量更新对象 项目验收管理-后评价管理
	 * @param paramList
	 * @return
	 */
	public int updatePmProjectYsHpjList(@Param("dtoList") List<PmProjectYsHpjDTO> dtoList);

	/**
	 * @description: 按主键删除 项目验收管理-后评价管理
	 * @param ids
	 * @return
	 */
	public int deletePmProjectYsHpjById(String id);

	/**
	 * @description: 按主键批量删除 项目验收管理-后评价管理
	 * @param ids
	 * @return
	*/
	public int deletePmProjectYsHpjList(List<String> idList);
}
