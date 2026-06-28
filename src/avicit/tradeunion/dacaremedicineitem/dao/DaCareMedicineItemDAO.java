package avicit.tradeunion.dacaremedicineitem.dao;

import avicit.platform6.core.mybatis.MyBatisRepository;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.tradeunion.dacaremedicineitem.dto.DaCareMedicineItemDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @金航数码科技有限责任公司
 * @作者：张国庆
 * @邮箱：numbery@163.com
 * @创建时间： 2024-04-02 13:08
 * @类说明： @修改记录：
 */
@MyBatisRepository
public interface DaCareMedicineItemDAO {


    /**
     * 分页查询
     *
     * @param daCareMedicineItemDTO
     *            查询对象
     * @param orderBy
     *            排序条件
     * @param keyWord
     *            关键字
     * @return Page<DaCareMedicineDTO>
     */
    public Page<DaCareMedicineItemDTO> searchDaCareMedicineItemByPage(@Param("bean") DaCareMedicineItemDTO daCareMedicineItemDTO,
                                                              @Param("pOrderBy") String orderBy, @Param("keyWord") String keyWord);

    /**
     * 不分页查询
     *
     * @param daCareMedicineItemDTO
     *            查询对象
     * @return List<DaCareMedicineItemDTO>
     */
    public List<DaCareMedicineItemDTO> searchDaCareMedicineItem(@Param("bean") DaCareMedicineItemDTO daCareMedicineItemDTO);

    /**
     * 主键查询
     *
     * @param id
     *            主键id
     * @return DaCareMedicineItemDTO
     */
    public DaCareMedicineItemDTO findDaCareMedicineItemById(String id);

    /**
     * 新增
     *
     * @param daCareMedicineItemDTO
     *            保存对象
     * @return int
     */
    public int insertDaCareMedicineItem(DaCareMedicineItemDTO daCareMedicineItemDTO);

    /**
     * 批量新增
     *
     * @param daCareMedicineItemDTOList
     *            保存对象集合
     * @return int
     */
    public int insertDaCareMedicineItemList(List<DaCareMedicineItemDTO> daCareMedicineItemDTOList);

    /**
     * 部分更新
     *
     * @param daCareMedicineItemDTO
     *            更新对象
     * @return int
     */
    public int updateDaCareMedicineItemSensitive(DaCareMedicineItemDTO daCareMedicineItemDTO);

    /**
     * 全部更新
     *
     * @param daCareMedicineItemDTO
     *            更新对象
     * @return int
     */
    public int updateDaCareMedicineItemAll(DaCareMedicineItemDTO daCareMedicineItemDTO);

    /**
     * 批量更新
     *
     * @param dtoList
     *            批量更新对象集合
     * @return int
     */
    public int updateDaCareMedicineItemList(@Param("dtoList") List<DaCareMedicineItemDTO> dtoList);

    /**
     * 删除
     *
     * @param id
     *            主键id
     * @return int
     */
    public int deleteDaCareMedicineItemById(String id);


    public List<DaCareMedicineItemDTO> searchDaCareMedicineItemListByFkId(@Param("fkId") String fkId);

}
