package avicit.pb.scoring.integral.service;

import avicit.pb.milepost.dynyouthrecord.event.UserDefineFunction;
import avicit.pb.scoring.integral.dao.IntegralDAO;
import avicit.pb.scoring.integral.dto.IntegralDTO;
import avicit.platform6.api.excel.SysExcelExpAPI;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.SysUserRoleAPI;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.pvm.internal.cmd.Da;
import avicit.platform6.bpm.pvm.internal.cmd.I;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import com.alibaba.fastjson.JSON;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @金航数码科技有限责任公司
 * @作者：zzf
 * @邮箱：numbery@163.com
 * @创建时间： 2023-08-01 08:51
 * @类说明：INTEGRALService
 * @修改记录：
 */
@Service
public class IntegralService implements Serializable, LoaderConstant {

    private static final Logger logger = LoggerFactory.getLogger(IntegralService.class);

    private static final long serialVersionUID = 1L;

    @Autowired
    private IntegralDAO integralDAO;

    @Autowired
    private SysExcelExpAPI sysExcelExpAPI;
    @Autowired
    private SysUserRoleAPI sysUserRoleAPI;

    /**
     * 查询（分页）
     *
     * @param queryReqBean 分页
     * @param orderBy      排序语句
     * @param keyWord      快速查询条件
     * @return QueryRespBean<IntegralDTO>
     * @throws Exception
     */
    public QueryRespBean<IntegralDTO> searchIntegralByPage(QueryReqBean<IntegralDTO> queryReqBean, String orderBy, String keyWord, String userid) throws Exception {
        try {
            PageHelper.startPage(queryReqBean.getPageParameter());
            IntegralDTO searchParams = queryReqBean.getSearchParams();
            //表单数据查询
            //调取党支部查询sql
            UserDefineFunction sql = new UserDefineFunction();
            Map<String, String> map = new HashMap<String, String>();
            map.put("loginUserId", userid);
            map.put("tableName", "");
            String s = sql.getSql(map);
            if (userid.equals("1")) {
                s = "1=1";
            }
            List<SysUser> pb_first_admin = sysUserRoleAPI.getSysUserListBySysRoleCode("pb_first_admin");
            for (SysUser sysUser : pb_first_admin) {
                if (userid.equals(sysUser.getId())) {
                    s = "1=1";
                }
            }
            Page<IntegralDTO> dataList = integralDAO.searchIntegralByPage(searchParams, orderBy, keyWord, s);
            QueryRespBean<IntegralDTO> queryRespBean = new QueryRespBean<IntegralDTO>();
            queryRespBean.setResult(dataList);
            return queryRespBean;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchIntegralByPage出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 查询（不分页）
     *
     * @param searchParams 条件
     * @param orderBy      排序语句
     * @param keyWord      快速查询条件
     * @return List<IntegralDTO>
     * @throws Exception
     */
    public List<IntegralDTO> searchIntegral(IntegralDTO searchParams, String orderBy, String keyWord)
            throws Exception {
        try {
            List<IntegralDTO> dataList = integralDAO.searchIntegral(searchParams, orderBy, keyWord);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchIntegral出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 查询（导出）
     *
     * @param searchParams 条件
     * @param idsList      导出数据集合
     * @return List<IntegralDTO>
     * @throws Exception
     */
    public List<IntegralDTO> searchIntegralForExport(IntegralDTO searchParams, List<String> idsList)
            throws Exception {
        try {
            List<IntegralDTO> dataList = integralDAO.searchIntegralForExport(searchParams, idsList);
            return dataList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("searchIntegralForExport出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 导出excel
     *
     * @param templateCode 模板code
     * @param colsList     导出列集合
     * @param dataList     导出数据
     * @return
     */
    public byte[] exportExcel(String templateCode, List<SysExcelColumnDTO> colsList, List<Map<String, Object>> dataList) throws Exception {
        //构造导出模板code集合
        List<String> templateCodeList = new ArrayList<String>();
        templateCodeList.add(templateCode);
        //构造code所对应的导出列集合
        Map<String, List<SysExcelColumnDTO>> colsMap = new HashMap<String, List<SysExcelColumnDTO>>();
        colsMap.put(templateCode, colsList);
        //构造code所对应的数据集合
        Map<String, List<Map<String, Object>>> dataMap = new HashMap<String, List<Map<String, Object>>>();
        dataMap.put(templateCode, dataList);
        byte[] bytes = sysExcelExpAPI.exportExcel(templateCodeList, colsMap, dataMap);
        return bytes;
    }

    /**
     * 主键查询
     *
     * @param id 主键id
     * @return IntegralDTO
     * @throws Exception
     */
    public IntegralDTO queryIntegralByPrimaryKey(String id) throws Exception {
        try {
            IntegralDTO dto = integralDAO.findIntegralById(id);
            //记录日志
            if (dto != null) {
                SysLogUtil.log4Query(dto);
            }
            return dto;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("queryIntegralByPrimaryKey出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 新增
     *
     * @param dto 保存对象
     * @return String
     * @throws Exception
     */
    public String insertIntegral(IntegralDTO dto) throws Exception {
        try {
            String id = ComUtil.getId();
            dto.setId(id);
            PojoUtil.setSysProperties(dto, OpType.insert);
            integralDAO.insertIntegral(dto);
            //记录日志
            if (dto != null) {
                SysLogUtil.log4Insert(dto);
            }
            return id;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("insertIntegral出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 批量新增
     *
     * @param dtoList 保存对象集合
     * @return int
     * @throws Exception
     */
    public int insertIntegralList(List<IntegralDTO> dtoList) throws Exception {
        try {
            List<IntegralDTO> beanList = new ArrayList<IntegralDTO>();
            for (IntegralDTO dto : dtoList) {
                String id = ComUtil.getId();
                dto.setId(id);
                PojoUtil.setSysProperties(dto, OpType.insert);
                //记录日志
                if (dto != null) {
                    SysLogUtil.log4Insert(dto);
                }
                beanList.add(dto);
            }
            return integralDAO.insertIntegralList(beanList);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("insertIntegralList出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 全部更新
     *
     * @param dto 修改对象
     * @return int
     * @throws Exception
     */
    public int updateIntegralAll(IntegralDTO dto) throws Exception {
        try {
            //记录日志
            IntegralDTO old = findById(dto.getId());
            if (old != null) {
                SysLogUtil.log4Update(dto, old);
            }
            PojoUtil.setSysProperties(dto, OpType.update);
            int count = integralDAO.updateIntegralAll(dto);
            if (count == 0) {
                throw new DaoException("数据失效，请重新更新");
            }
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updateIntegralAll出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 部分更新
     *
     * @param dto 修改对象
     * @return int
     * @throws Exception
     */
    public int updateIntegralSensitive(IntegralDTO dto) throws Exception {
        try {
            //记录日志
            IntegralDTO old = findById(dto.getId());
            if (old != null) {
                SysLogUtil.log4Update(dto, old);
            }
            PojoUtil.setSysProperties(dto, OpType.update);
            PojoUtil.copyProperties(old, dto, true);
            int count = integralDAO.updateIntegralSensitive(old);
            if (count == 0) {
                throw new DaoException("数据失效，请重新更新");
            }
            return count;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updateIntegralSensitive出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 批量更新
     *
     * @param dtoList 修改对象集合
     * @return int
     * @throws Exception
     */
    public int updateIntegralList(List<IntegralDTO> dtoList) throws Exception {
        try {
            return integralDAO.updateIntegralList(dtoList);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("updateIntegralList出错：", e);
            throw new DaoException(e.getMessage(), e);
        }

    }

    /**
     * 删除
     *
     * @param id 主键id
     * @return int
     * @throws Exception
     */
    public int deleteIntegralById(String id) throws Exception {
        try {
            if (StringUtils.isEmpty(id)) {
                throw new Exception("删除失败！传入的参数主键为null");
            }
            //记录日志
            IntegralDTO dto = findById(id);
            if (dto != null) {
                SysLogUtil.log4Delete(dto);
            }
            return integralDAO.deleteIntegralById(id);
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("deleteIntegralById出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 批量删除
     *
     * @param ids id的数组
     * @return int
     * @throws Exception
     */
    public int deleteIntegralByIds(String[] ids) throws Exception {
        int result = 0;
        for (String id : ids) {
            deleteIntegralById(id);
            result++;
        }
        return result;
    }

    /**
     * 日志专用查询
     *
     * @param id 主键id
     * @return IntegralDTO
     * @throws Exception
     */
    private IntegralDTO findById(String id) throws Exception {
        try {
            IntegralDTO dto = integralDAO.findIntegralById(id);
            return dto;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("findById出错：", e);
            throw new DaoException(e.getMessage(), e);
        }
    }

    public IntegralDTO quaryId(String id, String quary, Date date) throws Exception {
        try {
            IntegralDTO dto = integralDAO.quaryId(id, quary,date);
            return dto;
        } catch (Exception e) {
            logger.error("查询出错:" + e.getMessage());
            throw new Exception(e.getMessage(), e);
        }
    }

    public IntegralDTO quarryId(String id, String quary) throws Exception {
        try {
            IntegralDTO dto = null;
            int quaryNum = Integer.parseInt(quary);
            if (quaryNum != 1) {
                quaryNum--;
                dto = integralDAO.quaryId(id, String.valueOf(quaryNum),new Date());
            } else {
                dto = integralDAO.quaryId(id, quary,new Date());
            }


            return dto;
        } catch (Exception e) {
            logger.error("查询出错:" + e.getMessage());
            throw new Exception(e.getMessage(), e);
        }
    }

    public List<Map<String, Object>> makeType(String json, String type) {
        List<Map<String, Object>> list = new ArrayList<>();
        Map<String, Object> map = new HashMap<>();
        try {
            if ("1".equals(type)) {
                Map<String, Object> jsonmap = JSON.parseObject(json, Map.class);
                SysUser user = sysUserLoader.getSysUserById((String) jsonmap.get("USER_ID"));
                if (user == null) {
                    map.put("flag", OpResult.failure);
                    map.put("erroe", "null");
                    list.add(map);
                    return list;
                }
                map.put("USER", user);
                map.put("flag", OpResult.success);
                list.add(map);
            }
            return list;
        } catch (Exception e) {
            map.put("flag", OpResult.failure);
            map.put("error", e.getMessage());
            list.add(map);
            return list;
        }

    }

    //导出
    public HSSFWorkbook erportsExcel(HSSFWorkbook wb, String ids) {
        SimpleDateFormat sr = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat sf = new SimpleDateFormat("yyyy");
        /*DynPointsService bean = SpringHelper.getBean(DynPointsService.class);
        List<DynPointsDTO> dataList = null;
        List<IntegralDTO> childList = new ArrayList<>();
        if (ids == null || "".equals(ids)) {
            try {
                dataList = bean.searchDynPoints(null, "", "");
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            String[] split = ids.split(",");
            dataList = new ArrayList<>();
            for (String s : split) {
                try {
                    DynPointsDTO dynPointsDTO = bean.queryDynPointsByPrimaryKey(s);
                    dataList.add(dynPointsDTO);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        String[] headers = {"党支部名称", "姓名", "基础分扣分", "基础分备注", "履职分", "履职分备注", "奖励加分", "奖励加分备注", "惩处减分", "惩处减分备注", "合计得分","填写日期","具体季度"};
        HSSFSheet sheet = wb.createSheet();
        HSSFRow row = sheet.createRow(0);
        wb.setSheetName(0,"党员积分制");
        sheet.setDefaultColumnWidth((short)10);
        for(int i=0;i<headers.length;i++){
            HSSFCell cell = row.createCell(i);
            HSSFRichTextString text = new HSSFRichTextString(headers[i]);
            cell.setCellValue(text.toString());
        }
        if(dataList!=null){
            for (DynPointsDTO item : dataList) {
                IntegralDTO integralDTO = new IntegralDTO();
                integralDTO.setFkSubColId(item.getId());
                try {
                    List<IntegralDTO> integralDTOS = this.searchIntegral(integralDTO, "", "");
                    for (IntegralDTO integralDTO1 : integralDTOS) {
                        integralDTO1.setMap("quarter", item.getQuarter());
                    }
                    childList.addAll(integralDTOS);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            for (int i = 0; i <childList.size() ; i++) {
                IntegralDTO item = childList.get(i);
                List<String> items = new ArrayList<>();
                row = sheet.createRow(i+1);
                String partyName = item.getPartyName();
                items.add(partyName);
                SysUser user = sysUserLoader.getSysUserById(item.getUserId());
                items.add(user.getName());
                items.add(item.getFoundations().toString());
                items.add(item.getFoundationsContent());
                items.add(item.getPersonal().toString());
                items.add(item.getPersonalContent());
                items.add(item.getReward().toString());
                items.add(item.getRewardContent());
                items.add(item.getPunish().toString());
                items.add(item.getPunishContent());
                items.add(item.getIntegralContent().toString());
                items.add(sr.format(item.getIntegralDate()));
                Map<String, Object> map = item.getMap();
                items.add(sf.format(item.getIntegralDate())+"第"+map.get("quarter").toString()+"季度");
                for(int j=0;j<items.size();j++){
                    HSSFCell cell = row.createCell(j);
                    HSSFRichTextString text = new HSSFRichTextString(items.get(j));
                    cell.setCellValue(text.toString());
                }
            }
        }*/

        return wb;
    }
}

