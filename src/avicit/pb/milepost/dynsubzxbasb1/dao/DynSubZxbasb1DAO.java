package avicit.pb.milepost.dynsubzxbasb1.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.weekly.dto.WeeklyDTO;
import avicit.pb.milepost.dynfiveof.dto.DynFiveOfDTO;
import avicit.pb.milepost.dynsubzxbasb1.dto.DynSubZxbasb1DTO;
import avicit.pb.milepost.dynyouthdeclaration.dto.DynYouthDeclarationDTO;
import avicit.pb.milepost.dynyouthrecord.dto.DynYouthRecordDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-14 13:08
 * @类说明：DYN_SUB_ZXBASB_1Dao
 * @修改记录： 
 */
@MyBatisRepository
public interface DynSubZxbasb1DAO {

	/**
	 * 分页查询
	 * @param dynSubZxbasb1DTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynSubZxbasb1DTO>
	 */
	public Page<DynSubZxbasb1DTO> searchDynSubZxbasb1ByPage(@Param("bean") DynSubZxbasb1DTO dynSubZxbasb1DTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param dynSubZxbasb1DTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynSubZxbasb1DTO>
	 */
	public List<DynSubZxbasb1DTO> searchDynSubZxbasb1(@Param("bean") DynSubZxbasb1DTO dynSubZxbasb1DTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynSubZxbasb1DTO>
	 */
	public List<DynSubZxbasb1DTO> searchDynSubZxbasb1ForExport(@Param(value = "bean") DynSubZxbasb1DTO dto, @Param(value = "ids") List<String> idsList);

	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynSubZxbasb1DTO
	 */
	public DynSubZxbasb1DTO findDynSubZxbasb1ById(String id);

	/**
	* 新增
	* @param dynSubZxbasb1DTO 保存对象
	* @return int
	*/
	public int insertDynSubZxbasb1(DynSubZxbasb1DTO dynSubZxbasb1DTO);

	/**
	 * 批量新增
	 * @param dynSubZxbasb1DTOList 保存对象集合
	 * @return int
	 */
	public int insertDynSubZxbasb1List(@Param("dtoList") List<DynSubZxbasb1DTO> dynSubZxbasb1DTOList);

	/**
	 * 部分更新
	 * @param dynSubZxbasb1DTO 更新对象
	 * @return int
	 */
	public int updateDynSubZxbasb1Sensitive(DynSubZxbasb1DTO dynSubZxbasb1DTO);

	/**
	 * 全部更新
	 * @param dynSubZxbasb1DTO 更新对象
	 * @return int
	 */
	public int updateDynSubZxbasb1All(DynSubZxbasb1DTO dynSubZxbasb1DTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynSubZxbasb1List(@Param("dtoList") List<DynSubZxbasb1DTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynSubZxbasb1ById(String id);
	
	public List<DynSubZxbasb1DTO> fomart(@Param("fitId")String fitId,@Param("type") String type);
	public List<DynYouthRecordDTO> searchDynYouthRecord();
	public List<DynYouthDeclarationDTO> searchDynYouthDeclaration();
	public List<DynFiveOfDTO> searchDynFiveOf();
}

