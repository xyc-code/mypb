package avicit.pb.milepost.dynfiveof.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.milepost.dynfiveof.dto.DynFiveOfDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-17 16:01
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface DynFiveOfDAO {

	/**
	 * 分页查询
	 * @param dynFiveOfDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynFiveOfDTO>
	 */
	public Page<DynFiveOfDTO> searchDynFiveOfByPage(@Param("bean") DynFiveOfDTO dynFiveOfDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynFiveOfDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynFiveOfDTO>
	 */
	public List<DynFiveOfDTO> searchDynFiveOf(@Param("bean") DynFiveOfDTO dynFiveOfDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynFiveOfDTO>
	 */
	public List<DynFiveOfDTO> searchDynFiveOfForExport(@Param(value = "bean") DynFiveOfDTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynFiveOfDTO
	 */
	public DynFiveOfDTO findDynFiveOfById(String id);

	/**
	* 新增
	* @param dynFiveOfDTO 保存对象
	* @return int
	*/
	public int insertDynFiveOf(DynFiveOfDTO dynFiveOfDTO);

	/**
	 * 批量新增
	 * @param dynFiveOfDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynFiveOfList(@Param("dtoList") List<DynFiveOfDTO> dynFiveOfDTOList);

	/**
	 * 部分更新
	 * @param dynFiveOfDTO 更新对象
	 * @return int
	 */
	public int updateDynFiveOfSensitive(DynFiveOfDTO dynFiveOfDTO);

	/**
	 * 全部更新
	 * @param dynFiveOfDTO 更新对象
	 * @return int
	 */
	public int updateDynFiveOfAll(DynFiveOfDTO dynFiveOfDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynFiveOfList(@Param("dtoList") List<DynFiveOfDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynFiveOfById(String id);
	/**
	 * 修改流程标题*/
	int updatebpmHistProcinstTitle(@Param("fromid")String fromid,@Param("title")String title);

	public DynFiveOfDTO findDynFiveOfId(@Param("id") String id);
}

