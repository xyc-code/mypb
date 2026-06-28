package avicit.jg.jgpaymentplan.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.platform6.core.sfn.intercept.SelfDefined;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.jg.jgpaymentplan.dto.JgPaymentPlanDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-12 08:51 
 * @类说明：请填写
 * @修改记录：
 */
@MyBatisRepository
public interface JgPaymentPlanDao {

	/**
	 * @description: 分页查询 请款计划表
	 * @param searchParams
	 * @return
	 */
	public Page<JgPaymentPlanDTO> searchJgPaymentPlanByPage(@Param("bean") JgPaymentPlanDTO jgPaymentPlanDTO,
			@Param("sfnConditions") SelfDefined sql, @Param("org") String orgIdentity);

	/**
	* @description:查询对象 请款计划表
	* @param searchParams
	* @return
	*/
	public List<JgPaymentPlanDTO> searchJgPaymentPlan(JgPaymentPlanDTO jgPaymentPlanDTO);

	/**
	 * @description:查询对象 请款计划表
	 * @param id
	 * @return
	 */
	public JgPaymentPlanDTO findJgPaymentPlanById(String id);

	/**
	* @description: 新增对象 请款计划表
	* @param paramMap
	* @return
	*/
	public int insertJgPaymentPlan(JgPaymentPlanDTO jgPaymentPlanDTO);

	/**
	 * @description: 批量新增对象 请款计划表
	 * @param paramMap
	 * @return
	 */
	public int insertJgPaymentPlanList(List<JgPaymentPlanDTO> jgPaymentPlanDTOList);

	/**
	 * @description: 更新对象 请款计划表
	 * @param paramMap
	 * @return
	 */
	public int updateJgPaymentPlanSensitive(JgPaymentPlanDTO jgPaymentPlanDTO);

	/**
	 * @description: 更新对象 请款计划表
	 * @param paramMap
	 * @return
	 */
	public int updateJgPaymentPlanAll(JgPaymentPlanDTO jgPaymentPlanDTO);

	/**
	 * @description: 批量更新对象 请款计划表
	 * @param paramList
	 * @return
	 */
	public int updateJgPaymentPlanList(@Param("dtoList") List<JgPaymentPlanDTO> dtoList);

	/**
	 * @description: 按主键删除 请款计划表
	 * @param ids
	 * @return
	 */
	public int deleteJgPaymentPlanById(String id);

	/**
	 * @description: 按主键批量删除 请款计划表
	 * @param ids
	 * @return
	*/
	public int deleteJgPaymentPlanList(List<String> idList);
}
