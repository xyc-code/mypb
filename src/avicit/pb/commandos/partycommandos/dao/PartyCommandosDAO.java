package avicit.pb.commandos.partycommandos.dao;

import java.util.*;
import avicit.platform6.core.mybatis.MyBatisRepository;
import org.apache.ibatis.annotations.Param;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.pb.commandos.partycommandos.dto.PartyCommandosDTO;
import org.apache.ibatis.annotations.Select;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-11 09:57
 * @类说明：
 * @修改记录： 
 */
@MyBatisRepository
public interface PartyCommandosDAO {

	/**
	 * 分页查询
	 * @param partyCommandosDTO 查询对象
	 * @param orderBy 排序条件
	 * @param keyWord 关键字
	 * @return Page<PartyCommandosDTO>
	 */
	public Page<PartyCommandosDTO> searchPartyCommandosByPage(@Param("bean") PartyCommandosDTO partyCommandosDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

	/**
	 * 不分页查询
	 * @param partyCommandosDTO 查询对象
	 * @param orderBy 排序条件
     * @param keyWord 关键字
	 * @return List<PartyCommandosDTO>
	 */
	public List<PartyCommandosDTO> searchPartyCommandos(@Param("bean") PartyCommandosDTO partyCommandosDTO, @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    /**
	 * 查询（导出）
	 * @param dto 查询对象
	 * @param idsList id列表
	 * @return List<PartyCommandosDTO>
	 */
	public List<PartyCommandosDTO> searchPartyCommandosForExport(@Param(value = "bean") PartyCommandosDTO dto, @Param(value = "ids") List<String> idsList);


	/**
	 * 主键查询
	 * @param id 主键id
	 * @return PartyCommandosDTO
	 */
	public PartyCommandosDTO findPartyCommandosById(String id);

	/**
	 * 新增
	 * @param partyCommandosDTO 保存对象
	 * @return int
	 */
	public int insertPartyCommandos(PartyCommandosDTO partyCommandosDTO);

	/**
	 * 批量新增
	 * @param partyCommandosDTOList 保存对象集合
	 * @return int
	 */
	public int insertPartyCommandosList(@Param("dtoList") List<PartyCommandosDTO> partyCommandosDTOList);

	/**
	 * 部分更新
	 * @param partyCommandosDTO 更新对象
	 * @return int
	 */
	public int updatePartyCommandosSensitive(PartyCommandosDTO partyCommandosDTO);

	/**
	 * 全部更新
	 * @param partyCommandosDTO 更新对象
	 * @return int
	 */
	public int updatePartyCommandosAll(PartyCommandosDTO partyCommandosDTO);

	/**
	 * 批量更新
	 * @param dtoList 批量更新对象集合
	 * @return int
	 */
	public int updatePartyCommandosList(@Param("dtoList") List<PartyCommandosDTO> dtoList);

	/**
	 * 删除
	 * @param id 主键id
	 * @return int
	 */
	public int deletePartyCommandosById(String id);


    String getByCommandosType(@Param("date") String date);
}

