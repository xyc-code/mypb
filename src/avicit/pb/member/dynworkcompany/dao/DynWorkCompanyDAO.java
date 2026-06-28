package avicit.pb.member.dynworkcompany.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.member.dynworkcompany.dto.DynWorkCompanyDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2024-05-23 16:42
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface DynWorkCompanyDAO {

	/**
	 * 分页查询
	 * @param dynWorkCompanyDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<DynWorkCompanyDTO>
	 */
	public Page<DynWorkCompanyDTO> searchDynWorkCompanyByPage(@Param("bean") DynWorkCompanyDTO dynWorkCompanyDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    /**
	 * 不分页查询
	 * @param dynWorkCompanyDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return List<DynWorkCompanyDTO>
	 */
	public List<DynWorkCompanyDTO> searchDynWorkCompany(@Param("bean") DynWorkCompanyDTO dynWorkCompanyDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    /**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<DynWorkCompanyDTO>
	 */
	public List<DynWorkCompanyDTO> searchDynWorkCompanyForExport(@Param(value = "bean") DynWorkCompanyDTO dto, @Param(value = "ids") List<String> idsList);


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return DynWorkCompanyDTO
	 */
	public DynWorkCompanyDTO findDynWorkCompanyById(String id);

	/**
	 * 新增
	 * @param dynWorkCompanyDTO 保存对象
	 * @return int
	 */
	public int insertDynWorkCompany(DynWorkCompanyDTO dynWorkCompanyDTO);

	/**
	 * 批量新增
	 * @param dynWorkCompanyDTOList 保存对象集合
	 * @return int
	 */
	public int insertDynWorkCompanyList(@Param("dtoList") List<DynWorkCompanyDTO> dynWorkCompanyDTOList);

	/**
	 * 部分更新
	 * @param dynWorkCompanyDTO 更新对象
	 * @return int
	 */
	public int updateDynWorkCompanySensitive(DynWorkCompanyDTO dynWorkCompanyDTO);

	/**
	 * 全部更新
	 * @param dynWorkCompanyDTO 更新对象
	 * @return int
	 */
	public int updateDynWorkCompanyAll(DynWorkCompanyDTO dynWorkCompanyDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updateDynWorkCompanyList(@Param("dtoList") List<DynWorkCompanyDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deleteDynWorkCompanyById(String id);

}

