package avicit.pb.scoring.integral.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.scoring.integral.dto.IntegralDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：zzf
 * @邮箱：numbery@163.com
 * @创建时间： 2023-08-01 08:51
 * @类说明：INTEGRALDao
 * @修改记录： 
 */
@MyBatisRepository
public interface IntegralDAO {

	/**
	 * 分页查询
	 * @param integralDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<IntegralDTO>
	 */
	public Page<IntegralDTO> searchIntegralByPage(@Param("bean") IntegralDTO integralDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord,@Param("s") String s);

	/**
	 * 不分页查询
	 * @param integralDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<IntegralDTO>
	 */
	public List<IntegralDTO> searchIntegral(@Param("bean") IntegralDTO integralDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<IntegralDTO>
	 */
	public List<IntegralDTO> searchIntegralForExport(@Param(value = "bean") IntegralDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return IntegralDTO
	 */
	public IntegralDTO findIntegralById(String id);

	/**
	* 新增
	* @param integralDTO 保存对象
	* @return int
	*/
	public int insertIntegral(IntegralDTO integralDTO);

	/**
	 * 批量新增
	 * @param integralDTOList 保存对象集合
	 * @return int
	 */
	public int insertIntegralList(@Param("dtoList") List<IntegralDTO> integralDTOList);

	/**
	 * 部分更新
	 * @param integralDTO 更新对象
	 * @return int
	 */
	public int updateIntegralSensitive(IntegralDTO integralDTO);

	/**
	 * 全部更新
	 * @param integralDTO 更新对象
	 * @return int
	 */
	public int updateIntegralAll(IntegralDTO integralDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateIntegralList(@Param("dtoList") List<IntegralDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteIntegralById(String id);
	//查询今年的分数
	public IntegralDTO quaryId(@Param("id") String id,@Param("quary") String quary,@Param("date") Date date);
	//查询去年的分数
	public IntegralDTO quarryId(@Param("id") String id,@Param("quary") String quary);
}

