package avicit.platform6.rljcRest.dao;

import java.util.List;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.rljcRest.dto.DynMdmRyDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：avicitdev@avicit.com
 * @创建时间： 2024-01-02 11:39
 * @类说明：请填写
 * @修改记录： 
 */
@MyBatisRepository
public interface DynMdmRyDao {
    
    																																																																																														/**
     * 分页查询  DYN_MDM_RY
     * @param dynMdmRyDTO 查询对象
     * @param orgIdentity 组织id
     * @param orderBy 排序条件
     * @return Page<DynMdmRyDTO>
     */
	public Page<DynMdmRyDTO> searchDynMdmRyByPage(@Param("bean")DynMdmRyDTO dynMdmRyDTO,@Param("org")String orgIdentity,@Param("pOrderBy")String orderBy) ;
													
    																																																																																														/**
     * 按or条件的分页查询 DYN_MDM_RY
     * @param dynMdmRyDTO 查询对象
     * @param orgIdentity 组织id
     * @param orderBy 排序条件
     * @return Page<DynMdmRyDTO>
     */
	public Page<DynMdmRyDTO> searchDynMdmRyByPageOr(@Param("bean")DynMdmRyDTO dynMdmRyDTO,@Param("org")String orgIdentity,@Param("pOrderBy")String orderBy) ;
												    /**
     * 查询DYN_MDM_RY
     * @param dynMdmRyDTO 查询对象
     * @return List<DynMdmRyDTO>
     */
    public List<DynMdmRyDTO> searchDynMdmRy(DynMdmRyDTO dynMdmRyDTO);

    /**
     * 查询 DYN_MDM_RY
     * @param id 主键id
     * @return DynMdmRyDTO
     */
    public DynMdmRyDTO findDynMdmRyById(String id);
    
    /**
     * 查询 DYN_MDM_RY
     * @param id 主键id
     * @return DynMdmRyDTO
     */
    public DynMdmRyDTO findDynMdmRyByRyId(String ryId);
    
        /**
     * 新增DYN_MDM_RY
     * @param dynMdmRyDTO 保存对象
     * @return int
     */
    public int insertDynMdmRy(DynMdmRyDTO dynMdmRyDTO);
    
    /**
     * 批量新增 DYN_MDM_RY
     * @param dynMdmRyDTOList 保存对象集合
     * @return int
     */
    public int insertDynMdmRyList(List<DynMdmRyDTO> dynMdmRyDTOList);
    /**
     * 更新部分对象 DYN_MDM_RY
     * @param dynMdmRyDTO 更新对象
     * @return int
     */
    public int updateDynMdmRySensitive(DynMdmRyDTO dynMdmRyDTO);
    
    /**
     * 更新全部对象 DYN_MDM_RY
     * @param dynMdmRyDTO 更新对象
     * @return int
     */
    public int updateDynMdmRyAll(DynMdmRyDTO dynMdmRyDTO);
    
    /**
     * 批量更新对象 DYN_MDM_RY
     * @param dtoList 批量更新对象集合
     * @return int
     */
    public int updateDynMdmRyList(@Param("dtoList") List<DynMdmRyDTO> dtoList);
    
    /**
     * 按主键删除 DYN_MDM_RY
     * @param id 主键id
     * @return int
     */ 
    public int deleteDynMdmRyById(String id);
    
    /**
     * 按主键批量删除 DYN_MDM_RY
     * @param idList 主键集合
     * @return int
     */ 
    public int deleteDynMdmRyList(List<String> idList);
    /**
     * 查询 DYN_MDM_RY
     * @param code 员工编码
     * @return DynMdmRyDTO
     */
    public DynMdmRyDTO findDynMdmRyByCode(String code);
    
    
    }
