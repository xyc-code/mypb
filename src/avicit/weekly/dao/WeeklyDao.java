package avicit.weekly.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.weekly.dto.DynDistributeDTO;
import avicit.weekly.dto.DynMeeklyDTO;
import avicit.weekly.dto.DynTypeDTO;
import avicit.weekly.dto.RollingPlanDTO;
import avicit.weekly.dto.WeeklyDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：avicitdev@avicit.com @创建时间： 2023-03-28 15:17
 * @类说明：请填写 @修改记录：
 */
@MyBatisRepository
public interface WeeklyDao {
	public String getname(@Param("ID")String id);
	List<WeeklyDTO> weeklyPage(@Param("sytime") String sytime, @Param("outtime") String outtime,@Param("sql")String xian);
	List<WeeklyDTO> weeklySPage(@Param("sytime") String sytime, @Param("outtime") String outtime,@Param("sql")String xian);
	List<RollingPlanDTO> RollingPlan(@Param("sytime")String sytime,@Param("outtime") String outtime,@Param("sql")String xian);
	List<RollingPlanDTO> RollingSPlan(@Param("sytime")String sytime,@Param("outtime") String outtime,@Param("sql")String xian);
	int insertWeekly(WeeklyDTO weeklyDTO);
	int insertRollingPlan(RollingPlanDTO rollingPlanDTO);
	DynMeeklyDTO lastWeekly(@Param("lsid")String lsid,@Param("type")String type);
	int updateDynMeeklySensitive(DynMeeklyDTO dynMeeklyDTO);
	Page<DynMeeklyDTO> searchDynMeeklyByPage(@Param("bean")DynMeeklyDTO dynMeeklyDTO,@Param("org")String orgIdentity,@Param("pOrderBy")String orderBy,@Param("xian") String xian,@Param("is") String is,@Param("sysid") String sysid) ;
    int insertDynDistributeList(DynDistributeDTO dynDistributeDTOList);
    Page<DynDistributeDTO> searchDynDistributeByPage(@Param("bean")DynDistributeDTO dynDistributeDTO,@Param("org")String orgIdentity,@Param("pOrderBy")String orderBy,@Param("user") String user) ;
    String selectJoin(String lsid);
    String selectChong(@Param("ASSIGNMENT")String ASSIGNMENT,@Param("sytime") String sytime, @Param("outtime") String outtime);
    int deleteWeeklyById(String id);
    int deleteWeeklyPage(String id);
    int deleteWeeklyRoll(String id);
    int deleteWeeklySPage(String id);
    int deleteWeeklySRoll(String id);
	/**
* 分页查询  周报表
* @param weeklyDTO 查询对象
* @param orgIdentity 组织id
* @param orderBy 排序条件
* @return Page<WeeklyDTO>
*/
public Page<WeeklyDTO> searchWeeklyByPage(@Param("bean")WeeklyDTO weeklyDTO,@Param("org")String orgIdentity,@Param("pOrderBy")String orderBy) ;

	/**
* 按or条件的分页查询 周报表
* @param weeklyDTO 查询对象
* @param orgIdentity 组织id
* @param orderBy 排序条件
* @return Page<WeeklyDTO>
*/
public Page<WeeklyDTO> searchWeeklyByPageOr(@Param("bean")WeeklyDTO weeklyDTO,@Param("org")String orgIdentity,@Param("pOrderBy")String orderBy) ;
public List<WeeklyDTO> searchWeekly(WeeklyDTO weeklyDTO);
/**
* 分页查询  ROLLING_PLAN
* @param rollingPlanDTO 查询对象
* @param orgIdentity 组织id
* @param orderBy 排序条件
* @return Page<RollingPlanDTO>
*/
public Page<RollingPlanDTO> searchRollingPlanByPage(@Param("bean")RollingPlanDTO rollingPlanDTO,@Param("org")String orgIdentity,@Param("pOrderBy")String orderBy) ;

	/**
* 按or条件的分页查询 ROLLING_PLAN
* @param rollingPlanDTO 查询对象
* @param orgIdentity 组织id
* @param orderBy 排序条件
* @return Page<RollingPlanDTO>
*/
public Page<RollingPlanDTO> searchRollingPlanByPageOr(@Param("bean")RollingPlanDTO rollingPlanDTO,@Param("org")String orgIdentity,@Param("pOrderBy")String orderBy) ;
/**
* 查询ROLLING_PLAN
* @param rollingPlanDTO 查询对象
* @return List<RollingPlanDTO>
*/
public List<RollingPlanDTO> searchRollingPlan(RollingPlanDTO rollingPlanDTO);
public int deleteDynDistributeById(@Param("id")String id,@Param("user")String user);
String getuserid(String username);
public int insertDynSonWeekly(WeeklyDTO dynSonWeeklyDTO);
//获取通用代码值
String syslookuptl(String lookup_name);
//获取权限
DynTypeDTO getType();

//新增权限
int insertDynType(DynTypeDTO dynTypeDTO);

//修改权限
int updateDynTypeAll(DynTypeDTO dynTypeDTO);

List<String> selectCount(int yeer);
String getsonFid(String sysid);
List<WeeklyDTO> lastweeklyu(String id);
List<RollingPlanDTO> getRollWek(String sysid);

}


