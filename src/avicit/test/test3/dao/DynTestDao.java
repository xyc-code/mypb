package avicit.test.test3.dao;

import java.util.List;
import java.util.Map;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.sfn.intercept.SelfDefined;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.test.test3.dto.DynTestDto;

@MyBatisRepository
public interface DynTestDao {
    /**
     * @description: 分页查询  test
     * @param dto
     * @return
     */
    public Page<DynTestDto> searchDynTestByPage(@Param("bean")DynTestDto dto,@Param("sql")String sql,@Param("P_OrderBy")String P_OrderBy);
    /**
     * @description: 按条件or查询的分页查询
     * @param dto
     * @return
     */
    public Page<DynTestDto> searchDynTestByPageOr(@Param("bean")DynTestDto dto,@Param("sql")String sql,@Param("P_OrderBy")String P_OrderBy);

    /**
     * @description: 分页查询：流程  test
     * @param dto
     * @return
     */
    public Page<DynTestDto> searchDynTestBpmByPage(@Param("bean")DynTestDto dto,@Param("sql")String sql,@Param("P_OrderBy")String P_OrderBy);
    /**
     * @description: 按条件or查询的分页查询：流程
     * @param dto
     * @return
     */
    public Page<DynTestDto> searchDynTestBpmByPageOr(@Param("bean")DynTestDto dto,@Param("sql")String sql,@Param("P_OrderBy")String P_OrderBy);

    /**
     * @description:查询对象列表  test
     * @param dto
     * @return
     */
    public List<DynTestDto> searchDynTest(@Param("bean")DynTestDto dto);

 	/**
     * @description:查询对象列表  test
     * @param dto
     * @param sql
     * @return
     */
    public List<DynTestDto> searchDynTestSelfDefined(@Param("bean") DynTestDto dto, @Param("sql") String sql);

    /**
     * @description:查询对象  test
     * @param id
     * @return
     */
    public DynTestDto findDynTestById(String id);

        /**
     * @description: 新增对象  test
     * @param dto
     * @return
     */
    public int insertDynTest(DynTestDto dto);

    /**
     * @description: 批量新增对象  test
     * @param list
     * @return
     */
    public int insertDynTestList(List<DynTestDto> list);
    /**
     * @description: 更新对象  test
     * @param dto
     * @return
     */
    public int updateDynTestSensitive(DynTestDto dto);

    /**
     * @description: 更新对象  test
     * @param dto
     * @return
     */
    public int updateDynTestAll(DynTestDto dto);

    /**
     * @description: 批量更新对象  test
     * @param dtoList
     * @return
     */
    public int updateDynTestList(@Param("dtoList") List<DynTestDto> dtoList);

    /**
     * @description: 按主键删除  test
     * @param id
     * @return
     */
    public int deleteDynTestById(String id);

    /**
     * @description: 按主键批量删除  test
     * @param idList
     * @return
    */
    public int deleteDynTestList(List<String> idList);
}