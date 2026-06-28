package avicit.ims.oa.todo.service;

import avicit.ims.oa.todo.dao.PortalTaskDao;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.PageParameter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.Map;

@Service
public class PortalTaskService  implements Serializable {
    private static final Logger LOGGER =  LoggerFactory.getLogger(PortalTaskService.class);

    private static final long serialVersionUID = 1L;

    @Autowired
    PortalTaskDao portalTaskDao;

    public Page<Map<String,Object>> searchPortalTaskByPage(
            String userId,String taskType, String startTime,String endTime,String title,
            int currentPage, int pageSize)
            throws Exception {
        try {
            PageParameter pageParameter = new PageParameter();
            pageParameter.setPage(currentPage);
            pageParameter.setRows(pageSize);
            PageHelper.startPage(pageParameter);
            Page<Map<String,Object>> dataList = portalTaskDao.searchPortalTaskByPage(userId,taskType,
                    startTime,endTime,title);
            return dataList;
        } catch (Exception e) {
            LOGGER.error("searchPortalTaskByPage出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    public String getReceiveDealDate(String formId) throws Exception {
        return portalTaskDao.getReceiveDealDate(formId);
    }

}
