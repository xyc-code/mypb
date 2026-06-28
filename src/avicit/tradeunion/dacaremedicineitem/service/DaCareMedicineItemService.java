package avicit.tradeunion.dacaremedicineitem.service;

import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import avicit.tradeunion.dacaremedicineitem.dao.DaCareMedicineItemDAO;
import avicit.tradeunion.dacaremedicineitem.dto.DaCareMedicineItemDTO;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Service
public class DaCareMedicineItemService  implements Serializable{
    private static final Logger logger = LoggerFactory.getLogger(DaCareMedicineItemService.class);

    private static final long serialVersionUID = 1L;

    @Autowired
    private DaCareMedicineItemDAO daCareMedicineItemDAO;


    /**
     * 查询（分页）
     *
     * @param queryReqBean
     *            分页
     * @param orderBy
     *            排序语句
     * @param keyWord
     *            快速查询条件
     * @return QueryRespBean<DaCareMedicineItemDTO>
     * @throws Exception
     */
    public QueryRespBean<DaCareMedicineItemDTO> searchDaCareMedicineItemByPage(QueryReqBean<DaCareMedicineItemDTO> queryReqBean,
                                                                       String orderBy, String keyWord) throws Exception {
        try {
            PageHelper.startPage(queryReqBean.getPageParameter());
            DaCareMedicineItemDTO searchParams = queryReqBean.getSearchParams();
            // 表单数据查询
            Page<DaCareMedicineItemDTO> dataList = daCareMedicineItemDAO.searchDaCareMedicineItemByPage(searchParams, orderBy,
                    keyWord);
            QueryRespBean<DaCareMedicineItemDTO> queryRespBean = new QueryRespBean<DaCareMedicineItemDTO>();
            queryRespBean.setResult(dataList);
            return queryRespBean;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchDaCareMedicineItemByPage出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 查询（不分页）
     *
     * @param searchParams
     *            条件
     * @return List<DaCareMedicineItemDTO>
     * @throws Exception
     */
    public List<DaCareMedicineItemDTO> searchDaCareMedicineItem(DaCareMedicineItemDTO searchParams) throws Exception {
        try {
            List<DaCareMedicineItemDTO> dataList = daCareMedicineItemDAO.searchDaCareMedicineItem(searchParams);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchDaCareMedicineItem出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }


    /**
     * 主键查询
     *
     * @param id
     *            主键id
     * @return DaCareMedicineItemDTO
     * @throws Exception
     */
    public DaCareMedicineItemDTO queryDaCareMedicineItemByPrimaryKey(String id) throws Exception {
        try {
            DaCareMedicineItemDTO dto = daCareMedicineItemDAO.findDaCareMedicineItemById(id);
            // 记录日志
            if (dto != null) {
                SysLogUtil.log4Query(dto);
            }
            return dto;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("queryDaCareMedicineItemByPrimaryKey出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 新增
     *
     * @param dto
     *            保存对象
     * @return String
     * @throws Exception
     */
    public String insertDaCareMedicineItem(DaCareMedicineItemDTO dto) throws Exception {
        try {
            String id = ComUtil.getId();
            dto.setId(id);
            PojoUtil.setSysProperties(dto, PlatformConstant.OpType.insert);
            daCareMedicineItemDAO.insertDaCareMedicineItem(dto);
            // 记录日志
            if (dto != null) {
                SysLogUtil.log4Insert(dto);
            }
            return id;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("insertDaCareMedicineItem出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 批量新增
     *
     * @param dtoList
     *            保存对象集合
     * @return int
     * @throws Exception
     */
    public int insertDaCareMedicineList(List<DaCareMedicineItemDTO> dtoList) throws Exception {
        try {
            List<DaCareMedicineItemDTO> beanList = new ArrayList<DaCareMedicineItemDTO>();
            for (DaCareMedicineItemDTO dto : dtoList) {
                String id = ComUtil.getId();
                dto.setId(id);
                PojoUtil.setSysProperties(dto, PlatformConstant.OpType.insert);
                // 记录日志
                if (dto != null) {
                    SysLogUtil.log4Insert(dto);
                }
                beanList.add(dto);
            }
            return daCareMedicineItemDAO.insertDaCareMedicineItemList(beanList);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("insertDaCareMedicineItemList出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 全部更新
     *
     * @param dto
     *            修改对象
     * @return int
     * @throws Exception
     */
    public int updateDaCareMedicineItemAll(DaCareMedicineItemDTO dto) throws Exception {
        try {
            // 记录日志
            DaCareMedicineItemDTO old = findById(dto.getId());
            if (old != null) {
                SysLogUtil.log4Update(dto, old);
            }
            PojoUtil.setSysProperties(dto, PlatformConstant.OpType.update);
            int count = daCareMedicineItemDAO.updateDaCareMedicineItemAll(dto);
            if (count == 0) {
                throw new DaoException("数据失效，请重新更新");
            }
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updateDaCareMedicineItemAll出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 部分更新
     *
     * @param dto
     *            修改对象
     * @return int
     * @throws Exception
     */
    public int updateDaCareMedicineItemSensitive(DaCareMedicineItemDTO dto) throws Exception {
        try {
            // 记录日志
            DaCareMedicineItemDTO old = findById(dto.getId());
            if (old != null) {
                SysLogUtil.log4Update(dto, old);
            }
            PojoUtil.setSysProperties(dto, PlatformConstant.OpType.update);
            PojoUtil.copyProperties(old, dto, true);
            int count = daCareMedicineItemDAO.updateDaCareMedicineItemSensitive(old);
            if (count == 0) {
                throw new DaoException("数据失效，请重新更新");
            }
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updateDaCareMedicineItemSensitive出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 批量更新
     *
     * @param dtoList
     *            修改对象集合
     * @return int
     * @throws Exception
     */
    public int updateDaCareMedicineItemList(List<DaCareMedicineItemDTO> dtoList) throws Exception {
        try {
            return daCareMedicineItemDAO.updateDaCareMedicineItemList(dtoList);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updateDaCareMedicineList出错：", e);
            throw new DaoException(e.getMessage(), e);
        }

    }

    /**
     * 删除
     *
     * @param id
     *            主键id
     * @return int
     * @throws Exception
     */
    public int deleteDaCareMedicineItemById(String id) throws Exception {
        try {
            if (StringUtils.isEmpty(id)) {
                throw new Exception("删除失败！传入的参数主键为null");
            }
            // 记录日志
            DaCareMedicineItemDTO dto = findById(id);
            if (dto != null) {
                SysLogUtil.log4Delete(dto);
            }
            return daCareMedicineItemDAO.deleteDaCareMedicineItemById(id);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("deleteDaCareMedicineItemById出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 批量删除
     *
     * @param ids
     *            id的数组
     * @return int
     * @throws Exception
     */
    public int deleteDaCareMedicineItemByIds(String[] ids) throws Exception {
        int result = 0;
        for (String id : ids) {
            deleteDaCareMedicineItemById(id);
            result++;
        }
        return result;
    }

    /**
     * 日志专用查询
     *
     * @param id
     *            主键id
     * @return DaCareMedicineDTO
     * @throws Exception
     */
    private DaCareMedicineItemDTO findById(String id) throws Exception {
        try {
            DaCareMedicineItemDTO dto = daCareMedicineItemDAO.findDaCareMedicineItemById(id);
            return dto;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("findById出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }


    public List<DaCareMedicineItemDTO> searchDaCareMedicineItemListByFkId(String fkId) throws Exception {
        try {
            List<DaCareMedicineItemDTO> dataList = daCareMedicineItemDAO.searchDaCareMedicineItemListByFkId(fkId);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchDaCareMedicineItemListByFkId出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

}
