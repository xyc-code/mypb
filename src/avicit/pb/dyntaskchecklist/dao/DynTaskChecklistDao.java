package avicit.pb.dyntaskchecklist.dao;

import java.util.List;
import java.util.Map;

import avicit.pb.dyntaskchecklist.dto.DynInspecIcDTO;
import avicit.pb.dyntaskchecklist.dto.DynInspectionDTO;
import avicit.pb.dyntaskchecklist.dto.DynTaskChecklistDTO;
import avicit.pb.dyntaskchecklist.dto.SysMessageDTO;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.sfn.intercept.SelfDefined;
import avicit.platform6.core.mybatis.pagehelper.Page;



/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2023-05-16 16:49 
 * @类说明：请填写
 * @修改记录：
 */
@MyBatisRepository
public interface DynTaskChecklistDao {
    
    /**
     * @description: 分页查询 DYN_TASK_CHECKLIST
     * @param searchParams
     * @return
     */
    																																																																																											public Page<DynTaskChecklistDTO> searchDynTaskChecklistByPage(@Param("bean")DynTaskChecklistDTO dynTaskChecklistDTO,@Param("sfnConditions")SelfDefined sql,@Param("org")String orgIdentity) ;
									    /**
     * @description:查询对象 DYN_TASK_CHECKLIST
     * @param searchParams
     * @return
     */
    public List<DynTaskChecklistDTO> searchDynTaskChecklist(DynTaskChecklistDTO dynTaskChecklistDTO);

    /**
     * @description:查询对象 DYN_TASK_CHECKLIST
     * @param id
     * @return
     */
    public DynTaskChecklistDTO findDynTaskChecklistById(String id);
    
        /**
     * @description: 新增对象 DYN_TASK_CHECKLIST
     * @param paramList
     * @return
     */
    public int insertDynTaskChecklist(DynTaskChecklistDTO dynTaskChecklistDTO);
    
    /**
     * @description: 批量新增对象 DYN_TASK_CHECKLIST
     * @param paramMap
     * @return
     */
    public int insertDynTaskChecklistList(List<DynTaskChecklistDTO> dynTaskChecklistDTOList);
    /**
     * @description: 更新对象 DYN_TASK_CHECKLIST
     * @param paramMap
     * @return
     */
    public int updateDynTaskChecklistSensitive(DynTaskChecklistDTO dynTaskChecklistDTO);
    
    /**
     * @description: 更新对象 DYN_TASK_CHECKLIST
     * @param paramMap
     * @return
     */
    public int updateDynTaskChecklistAll(DynTaskChecklistDTO dynTaskChecklistDTO);
    
    /**
     * @description: 批量更新对象 DYN_TASK_CHECKLIST
     * @param paramList
     * @return
     */
    public int updateDynTaskChecklistList(@Param("dtoList") List<DynTaskChecklistDTO> dtoList);
    
    /**
     * @description: 按主键删除 DYN_TASK_CHECKLIST
     * @param ids
     * @return
     */ 
    public int deleteDynTaskChecklistById(String id);
    
    /**
     * @description: 按主键批量删除 DYN_TASK_CHECKLIST
     * @param ids
     * @return
    */ 
    public int deleteDynTaskChecklistList(List<String> idList);
    
    public DynInspectionDTO findDynInspectionById(String id);
    
    public int updateDynInspectionSensitive(DynInspectionDTO dynInspectionDTO);
    
    public int insertSysMessage(SysMessageDTO sysMessageDTO);
    
    String selectLCID(String lcid);
    
    /**
 * 新增DYN_INSPEC_IC
 * @param dynInspecIcDTO 保存对象
 * @return int
 */
public int insertDynInspecIc(DynInspecIcDTO dynInspecIcDTO);
 int countFor(String id);
 public int insertDynInspection(DynInspectionDTO DynInspectionDTO);
 public String selectLczt(String id);
 public String selectlcid(String id);
 public List<Map<String,Object>> getTask(@Param("entryid")String entryid,@Param("HashId")String HashId,@Param("task")String task);
 String getEntryid(String id);
 DynInspectionDTO queryAttr3(String attr3);
 String getDbid(String id);
    }
