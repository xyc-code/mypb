package avicit.tradeunion.dacaremedicine.dao;

import java.util.List;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.tradeunion.dacaremedicine.dto.DaCareMedicineDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com @创建时间： 2021-03-28 13:08 @类说明： @修改记录：
 */
@MyBatisRepository
public interface DaCareMedicineDAO {

	/**
	 * 分页查询
	 * 
	 * @param daCareMedicineDTO
	 *            查询对象
	 * @param orderBy
	 *            排序条件
	 * @param keyWord
	 *            关键字
	 * @return Page<DaCareMedicineDTO>
	 */
	public Page<DaCareMedicineDTO> searchDaCareMedicineByPage(@Param("bean") DaCareMedicineDTO daCareMedicineDTO,
			@Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * 
	 * @param daCareMedicineDTO
	 *            查询对象
	 * @return List<DaCareMedicineDTO>
	 */
	public List<DaCareMedicineDTO> searchDaCareMedicine(@Param("bean") DaCareMedicineDTO daCareMedicineDTO);

	/**
	 * 主键查询
	 * 
	 * @param id
	 *            主键id
	 * @return DaCareMedicineDTO
	 */
	public DaCareMedicineDTO findDaCareMedicineById(String id);

	/**
	 * 新增
	 * 
	 * @param daCareMedicineDTO
	 *            保存对象
	 * @return int
	 */
	public int insertDaCareMedicine(DaCareMedicineDTO daCareMedicineDTO);

	/**
	 * 批量新增
	 * 
	 * @param daCareMedicineDTOList
	 *            保存对象集合
	 * @return int
	 */
	public int insertDaCareMedicineList(List<DaCareMedicineDTO> daCareMedicineDTOList);

	/**
	 * 部分更新
	 * 
	 * @param daCareMedicineDTO
	 *            更新对象
	 * @return int
	 */
	public int updateDaCareMedicineSensitive(DaCareMedicineDTO daCareMedicineDTO);

	/**
	 * 全部更新
	 * 
	 * @param daCareMedicineDTO
	 *            更新对象
	 * @return int
	 */
	public int updateDaCareMedicineAll(DaCareMedicineDTO daCareMedicineDTO);

	/**
	 * 批量更新
	 * 
	 * @param dtoList
	 *            批量更新对象集合
	 * @return int
	 */
	public int updateDaCareMedicineList(@Param("dtoList") List<DaCareMedicineDTO> dtoList);

	/**
	 * 删除
	 * 
	 * @param id
	 *            主键id
	 * @return int
	 */
	public int deleteDaCareMedicineById(String id);



	public List<DaCareMedicineDTO> searchPersonalDiseaseTypeExpenses(@Param("id") String id,@Param("patienterId") String patienterId, @Param("year") String year,@Param("diseaseType") String diseaseType);

	public List<String> searchPersonalAllLeftExpenses(@Param("id") String id,@Param("patienterId") String patienterId, @Param("year") String year);

	public int searchPersonalDiseaseTypeExpensesUsed(@Param("id") String id,@Param("patienterId") String patienterId, @Param("year") String year,@Param("diseaseType") String diseaseType);
}
