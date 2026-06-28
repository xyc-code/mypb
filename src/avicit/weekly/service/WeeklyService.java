package avicit.weekly.service;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.bpm.pvm.internal.cmd.Da;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.DateUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.weekly.dao.WeeklyDao;
import avicit.weekly.dto.*;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：avicitdev@avicit.com @创建时间： 2023-03-28 12:57
 * @类说明：请填写 @修改记录：
 */
@Service
public class WeeklyService implements Serializable {

    private static final Logger LOGGER = LoggerFactory.getLogger(WeeklyService.class);

    private static final long serialVersionUID = 1L;

    @Autowired
    private WeeklyDao weeklyDao;

    public List<WeeklyDTO> weeklyPage(String xian) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");// 设置日期格式
        Calendar cld = Calendar.getInstance(Locale.CHINA);
        cld.setFirstDayOfWeek(Calendar.MONDAY);// 以周一为首日
        cld.setTimeInMillis(System.currentTimeMillis());// 当前时间
        cld.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);// 周一
        String format = df.format(cld.getTime());
        cld.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);// 周日
        String format1 = df.format(cld.getTime());
        List<WeeklyDTO> list = weeklyDao.weeklyPage(format, format1, xian);
        for (int i = 0; i < list.size(); i++) {
            WeeklyDTO ww = list.get(i);
            ww.setPersonLiable(weeklyDao.getname(list.get(i).getPersonLiable()));
            /*
             * if(ww.getIsCompletion().equals("Y")){ ww.setIsCompletion("是");
             * }else{ ww.setIsCompletion("否"); }
             * if(ww.getIsKeyno().equals("Y")){ ww.setIsKeyno("是"); }else{
             * ww.setIsKeyno("否"); } if(ww.getWorkClass().equals("0")){
             * ww.setWorkClass("监督"); }else if(ww.getWorkClass().equals("1")){
             * ww.setWorkClass("执纪"); }else if(ww.getWorkClass().equals("2")){
             * ww.setWorkClass("巡查"); }else if(ww.getWorkClass().equals("4")){
             * ww.setWorkClass("廉政共建"); }else if(ww.getWorkClass().equals("6")){
             * ww.setWorkClass("综合事务"); }
             */

        }
        return list;
    }

    public List<RollingPlanDTO> RollingPlan(String xian) {
        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);
        int months = calendar.get(Calendar.MONTH) + 1;
        String month = "0";
        if (months < 10) {
            month += String.valueOf(months);
        } else {
            month = String.valueOf(months);
        }
        String date = year + "-" + month;// 当前月份
        int oudMonths = months + 2;
        if (months >= 11) {
            oudMonths -= 12;
            year++;
        }
        String moun = "0";
        if (oudMonths < 10) {
            moun += String.valueOf(oudMonths);
        } else {
            moun = String.valueOf(oudMonths);
        }
        String dat = year + "-" + moun;// 后两个月
        List<RollingPlanDTO> list = weeklyDao.RollingPlan(date, dat, xian);
        for (int i = 0; i < list.size(); i++) {
            list.get(i).setRollingPlanDate(list.get(i).getRollingPlanDate().substring(0, 7));
        }

        return list;
    }

    public Map<String, Object> getTime() {
        Map<String, Object> map = new HashMap<>();
        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);// 本年
        map.put("year", year);
        int month = calendar.get(Calendar.WEEK_OF_YEAR);// 本年的第几周
        map.put("monthWeek", month);
        int months = calendar.get(Calendar.MONTH) + 1;// 本月
        map.put("month", months);
        return map;
    }

    public List<WeeklyDTO> weeklySPage(String xian, HttpSession session) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");// 设置日期格式
        Calendar cld = Calendar.getInstance(Locale.CHINA);
        cld.setFirstDayOfWeek(Calendar.MONDAY);// 以周一为首日
        cld.setTimeInMillis(System.currentTimeMillis());// 当前时间
        cld.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);// 周一
        String format = df.format(cld.getTime());
        cld.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);// 周日
        String format1 = df.format(cld.getTime());
        List<WeeklyDTO> list = weeklyDao.weeklySPage(format, format1, xian);
        session.setAttribute("weekly", list);
        for (int i = 0; i < list.size(); i++) {

            WeeklyDTO ww = list.get(i);
            if (list.get(i).getPersonLiable() != null) {
                String[] ss = ww.getPersonLiable().split(";");
                String ee = "";
                for (int j = 0; j < ss.length; j++) {
                    ee += weeklyDao.getname(ss[j]);
                    ee += ",";
                }
                ww.setPersonLiable(ee);
            }

            /*
             * if(ww.getIsCompletion().equals("Y")){ ww.setIsCompletion("是");
             * }else{ ww.setIsCompletion("否"); }
             * if(ww.getIsKeyno().equals("Y")){ ww.setIsKeyno("是"); }else{
             * ww.setIsKeyno("否"); } if(ww.getWorkClass().equals("0")){
             * ww.setWorkClass("监督"); }else if(ww.getWorkClass().equals("1")){
             * ww.setWorkClass("执纪"); }else if(ww.getWorkClass().equals("2")){
             * ww.setWorkClass("巡查"); }else if(ww.getWorkClass().equals("4")){
             * ww.setWorkClass("廉政共建"); }else if(ww.getWorkClass().equals("6")){
             * ww.setWorkClass("综合事务"); }
             */

        }
        return list;
    }

    public List<RollingPlanDTO> RollingSPlan(String xian, HttpServletRequest request, HttpSession session) {
        Map<String, Object> map = this.getLastWeek();
        List<RollingPlanDTO> list = weeklyDao.getRollWek(SessionHelper.getLoginSysUserId(request));
        session.setAttribute("RollingSPlan", list);
        for (int i = 0; i < list.size(); i++) {
            list.get(i).setRollingPlanDate(list.get(i).getRollingPlanDate().substring(0, 7));
        }

        return list;
    }

    public ModelAndView Weedata(List<WeeklyDTO> list, List<RollingPlanDTO> arr, String id, String week, String rool)
            throws Exception {
        int we = 0;
        int ro = 0;
        ModelAndView mvc = new ModelAndView();
        if (!week.equals("0")) {
            for (int i = 0; i < list.size(); i++) {
                String ids = ComUtil.getId();
                list.get(i).setId(ids);
                PojoUtil.setSysProperties(list.get(i), OpType.insert);
                list.get(i).setFkSubColId(id);
                int c = weeklyDao.insertWeekly(list.get(i));
                we += c;
            }
        }

        if (!rool.equals("0")) {
            for (int i = 0; i < arr.size(); i++) {
                String ids = ComUtil.getId();
                arr.get(i).setId(ids);
                PojoUtil.setSysProperties(arr.get(i), OpType.insert);
                arr.get(i).setFkSubColId(id);
                arr.get(i).setRollingPlanDate(arr.get(i).getRollingPlanDate().substring(0, 10));
                int ss = weeklyDao.insertRollingPlan(arr.get(i));
                ro += ss;
            }
        }
        mvc.addObject("we", we);
        mvc.addObject("ro", ro);
        return mvc;
    }

    public ModelAndView dynSonWeekly(List<WeeklyDTO> list, String id) {
        int we = 0;
        ModelAndView mvc = new ModelAndView();
        for (int i = 0; i < list.size(); i++) {
            String ids = ComUtil.getId();
            list.get(i).setId(ids);
            PojoUtil.setSysProperties(list.get(i), OpType.insert);
            list.get(i).setFkSubColId(id);
            int c = weeklyDao.insertDynSonWeekly(list.get(i));
            we += c;
        }
        mvc.addObject("we", we);
        return mvc;
    }

    public ModelAndView lastWeekly(String ltid, String type) {
        ModelAndView mvc = new ModelAndView();
        DynMeeklyDTO week = weeklyDao.lastWeekly(ltid, type);
        if (week == null || week.getLastWeekly() == null || week.getLastWeekly().equals("")) {
            mvc.addObject("LAST_WEEKLY", null);
            mvc.addObject("LAST_YEEK", null);
            return mvc;
        } else {
            mvc.addObject("LAST_WEEKLY", week.getLastWeekly());
            mvc.addObject("LAST_YEEK", week.getLastYeek());
            return mvc;
        }


    }

    public QueryRespBean<DynMeeklyDTO> searchDynMeeklyByPage(QueryReqBean<DynMeeklyDTO> queryReqBean,
                                                             String orgIdentity, String oderby, String xian, String is, String sysid) throws Exception {
        try {
            PageHelper.startPage(queryReqBean.getPageParameter());
            DynMeeklyDTO searchParams = queryReqBean.getSearchParams();
            Page<DynMeeklyDTO> dataList = weeklyDao.searchDynMeeklyByPage(searchParams, orgIdentity, oderby, xian, is,
                    sysid);
            QueryRespBean<DynMeeklyDTO> queryRespBean = new QueryRespBean<DynMeeklyDTO>();
            queryRespBean.setResult(dataList);
            return queryRespBean;
        } catch (Exception e) {
            LOGGER.error("searchDynMeeklyByPage出错：", e);
            e.printStackTrace();
            throw new DaoException(e.getMessage(), e);
        }
    }

    public String insertDynDistributeList(String rows, String userid, String id) {
        String[] row = rows.split(",");
        for (int i = 0; i < row.length; i++) {
            String zt = weeklyDao.selectJoin(row[i]);
            if (!zt.equals("ended")) {
                return "error:!ended";
            }
        }

        for (int i = 0; i < row.length; i++) {
            DynMeeklyDTO week = weeklyDao.lastWeekly(row[i], "2");
            String[] us = userid.split(";");
            for (int j = 0; j < us.length; j++) {
                DynDistributeDTO dyn = new DynDistributeDTO();
                String ids = ComUtil.getId();
                dyn.setId(ids);
                PojoUtil.setSysProperties(dyn, OpType.insert);
                dyn.setPosenId(us[j]);
                dyn.setApplicationDepartment(week.getApplicationDepartment());
                dyn.setLastWeekly(week.getLastWeekly());
                dyn.setLastYeek(week.getLastYeek());
                dyn.setApplicant(week.getApplicant());
                dyn.setDistributeDate(new Date());
                dyn.setDistributePosenId(id);
                dyn.setFlowPathId(week.getId());
                dyn.setCreatedDept(week.getCreatedDept());
                dyn.setOrgIdentity(week.getOrgIdentity());
                dyn.setApplicationDate(week.getApplicationDate());
                int k = weeklyDao.insertDynDistributeList(dyn);
                if (k == 0) {
                    return "error:insert==0";
                }

            }
        }
        return "true";
    }

    public QueryRespBean<DynDistributeDTO> searchDynDistributeByPage(QueryReqBean<DynDistributeDTO> queryReqBean,
                                                                     String orgIdentity, String oderby, String user) throws Exception {
        try {
            PageHelper.startPage(queryReqBean.getPageParameter());
            DynDistributeDTO searchParams = queryReqBean.getSearchParams();
            Page<DynDistributeDTO> dataList = weeklyDao.searchDynDistributeByPage(searchParams, orgIdentity, oderby,
                    user);
            QueryRespBean<DynDistributeDTO> queryRespBean = new QueryRespBean<DynDistributeDTO>();

            queryRespBean.setResult(dataList);
            return queryRespBean;
        } catch (Exception e) {
            LOGGER.error("searchDynDistributeByPage出错：", e);
            e.printStackTrace();
            throw new DaoException(e.getMessage(), e);
        }
    }

    public int deleteWeeklyByIds(String[] ids, String type, HttpServletRequest request) throws Exception {
        int result = 0;
        for (String id : ids) {
            deleteWeeklyById(id, type, request);
            result++;
        }
        return result;
    }

    public int deleteWeeklyById(String id, String type, HttpServletRequest request) throws Exception {
        if (StringUtils.isEmpty(id)) {
            throw new Exception("删除失败！传入的参数主键为null");
        }
        try {
            if (type.equals("1")) {
                return weeklyDao.deleteWeeklyById(id) + weeklyDao.deleteWeeklyPage(id) + weeklyDao.deleteWeeklyRoll(id);
            } else if (type.equals("2")) {
                return weeklyDao.deleteWeeklyById(id) + weeklyDao.deleteWeeklySPage(id)
                        + weeklyDao.deleteWeeklySRoll(id);
            } else if (type.equals("3")) {
                String user = SessionHelper.getLoginSysUserId(request);
                return weeklyDao.deleteDynDistributeById(id, user);
            } else {
                new NullPointerException();
                return 0;
            }

        } catch (Exception e) {
            LOGGER.error("deleteWeeklyById出错：", e);
            e.printStackTrace();
            throw new DaoException(e.getMessage(), e);
        }
    }

    public QueryRespBean<WeeklyDTO> searchWeeklyByPage(QueryReqBean<WeeklyDTO> queryReqBean, String orgIdentity,
                                                       String oderby) throws Exception {
        try {
            PageHelper.startPage(queryReqBean.getPageParameter());
            WeeklyDTO searchParams = queryReqBean.getSearchParams();
            Page<WeeklyDTO> dataList = weeklyDao.searchWeeklyByPage(searchParams, orgIdentity, oderby);
            QueryRespBean<WeeklyDTO> queryRespBean = new QueryRespBean<WeeklyDTO>();

            queryRespBean.setResult(dataList);
            return queryRespBean;
        } catch (Exception e) {
            LOGGER.error("searchWeeklyByPage出错：", e);
            e.printStackTrace();
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 按条件or查询的分页查询
     *
     * @param queryReqBean 分页
     * @param oderby       排序
     * @param orgIdentity  组织id
     * @return QueryRespBean<WeeklyDTO>
     * @throws Exception
     */
    public QueryRespBean<WeeklyDTO> searchWeeklyByPageOr(QueryReqBean<WeeklyDTO> queryReqBean, String orgIdentity,
                                                         String oderby) throws Exception {
        try {
            PageHelper.startPage(queryReqBean.getPageParameter());
            WeeklyDTO searchParams = queryReqBean.getSearchParams();
            Page<WeeklyDTO> dataList = weeklyDao.searchWeeklyByPageOr(searchParams, orgIdentity, oderby);
            QueryRespBean<WeeklyDTO> queryRespBean = new QueryRespBean<WeeklyDTO>();

            queryRespBean.setResult(dataList);
            return queryRespBean;
        } catch (Exception e) {
            LOGGER.error("searchWeeklyByPage出错：", e);
            e.printStackTrace();
            throw new DaoException(e.getMessage(), e);
        }
    }

    public List<WeeklyDTO> searchWeekly(QueryReqBean<WeeklyDTO> queryReqBean) throws Exception {
        try {
            WeeklyDTO searchParams = queryReqBean.getSearchParams();
            List<WeeklyDTO> dataList = weeklyDao.searchWeekly(searchParams);
            return dataList;
        } catch (Exception e) {
            LOGGER.error("searchWeekly出错：", e);
            e.printStackTrace();
            throw new DaoException(e.getMessage(), e);
        }
    }

    public QueryRespBean<RollingPlanDTO> searchRollingPlanByPage(QueryReqBean<RollingPlanDTO> queryReqBean,
                                                                 String orgIdentity, String oderby) throws Exception {
        try {
            PageHelper.startPage(queryReqBean.getPageParameter());
            RollingPlanDTO searchParams = queryReqBean.getSearchParams();
            if (searchParams != null) {
                if (searchParams.getRollingPlanDateEnd() != null) {
                    searchParams.setRollingPlanDateEnd(
                            searchParams.getRollingPlanDateEnd().replace("年", "-").replace("月", ""));
                }
                if (searchParams.getRollingPlanDateBegin() != null) {
                    searchParams.setRollingPlanDateBegin(
                            searchParams.getRollingPlanDateBegin().replace("年", "-").replace("月", ""));
                }
            }
            Page<RollingPlanDTO> dataList = weeklyDao.searchRollingPlanByPage(searchParams, orgIdentity, oderby);
            QueryRespBean<RollingPlanDTO> queryRespBean = new QueryRespBean<RollingPlanDTO>();
            queryRespBean.setResult(dataList);
            return queryRespBean;
        } catch (Exception e) {
            LOGGER.error("searchRollingPlanByPage出错：", e);
            e.printStackTrace();
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 按条件or查询的分页查询
     *
     * @param queryReqBean 分页
     * @param oderby       排序
     * @param orgIdentity  组织id
     * @return QueryRespBean<RollingPlanDTO>
     * @throws Exception
     */
    public QueryRespBean<RollingPlanDTO> searchRollingPlanByPageOr(QueryReqBean<RollingPlanDTO> queryReqBean,
                                                                   String orgIdentity, String oderby) throws Exception {
        try {
            PageHelper.startPage(queryReqBean.getPageParameter());
            RollingPlanDTO searchParams = queryReqBean.getSearchParams();
            if (searchParams != null) {
                if (searchParams.getRollingPlanDateEnd() != null) {
                    searchParams.setRollingPlanDateEnd(
                            searchParams.getRollingPlanDateEnd().replace("年", "-").replace("月", ""));
                }
                if (searchParams.getRollingPlanDateBegin() != null) {
                    searchParams.setRollingPlanDateBegin(
                            searchParams.getRollingPlanDateBegin().replace("年", "-").replace("月", ""));
                }
            }

            Page<RollingPlanDTO> dataList = weeklyDao.searchRollingPlanByPageOr(searchParams, orgIdentity, oderby);
            QueryRespBean<RollingPlanDTO> queryRespBean = new QueryRespBean<RollingPlanDTO>();
            PageParameter page = queryReqBean.getPageParameter();
            page.setTotalCount(dataList.size());
            queryRespBean.setResult(dataList);
            System.out.print(Math.round(dataList.size() / page.getRows()));
            queryReqBean.setPageParameter(page);
            return queryRespBean;
        } catch (Exception e) {
            LOGGER.error("searchRollingPlanByPage出错：", e);
            e.printStackTrace();
            throw new DaoException(e.getMessage(), e);
        }
    }

    /**
     * 按条件查询
     *
     * @param queryReqBean 条件
     * @return List<RollingPlanDTO>
     * @throws Exception
     */
    public List<RollingPlanDTO> searchRollingPlan(QueryReqBean<RollingPlanDTO> queryReqBean) throws Exception {
        try {
            RollingPlanDTO searchParams = queryReqBean.getSearchParams();
            List<RollingPlanDTO> dataList = weeklyDao.searchRollingPlan(searchParams);
            return dataList;
        } catch (Exception e) {
            LOGGER.error("searchRollingPlan出错：", e);
            e.printStackTrace();
            throw new DaoException(e.getMessage(), e);
        }
    }

    public String getuser(String username) {
        String[] use = username.split(",");
        String ss = "";
        for (int i = 0; i < use.length; i++) {
            ss += weeklyDao.getuserid(use[i]);
            ss += ";";
        }
        return ss;
    }

    public HttpServletResponse download(String path, HttpServletResponse response) {

        try {
            // path是指欲下载的文件的路径。
            File file = new File(path);
            // 取得文件名。
            String filename = file.getName();
            // 取得文件的后缀名。
            String ext = filename.substring(filename.lastIndexOf(".") + 1).toUpperCase();
            // 以流的形式下载文件。
            InputStream fis = new BufferedInputStream(new FileInputStream(path));
            byte[] buffer = new byte[fis.available()];
            fis.read(buffer);
            fis.close();
            // 清空response
            response.reset();
            // 设置response的Header
            response.addHeader("Content-Disposition", "attachment;filename=" + new String(filename.getBytes()));
            response.addHeader("Content-Length", "" + file.length());
            OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
            response.setContentType("application/octet-stream");
            toClient.write(buffer);
            toClient.flush();
            toClient.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return response;
    }

    public void upLoadExcel(Sheet sheet, String lcid) {
        int physicalNumberOfRows = sheet.getPhysicalNumberOfRows();
        if (physicalNumberOfRows < 0) {
            return;
        }
        for (int i = 1; i < physicalNumberOfRows; i++) {
            List<String> list = new ArrayList<>();
            Row row = sheet.getRow(i);
            // 获取到每行的表格cell
            int physicalNumberOfCells = row.getPhysicalNumberOfCells();
            for (int k = 0; k < physicalNumberOfCells; k++) {
                // 转换一下cell的格式，防止出错
                row.getCell(k).setCellType(Cell.CELL_TYPE_STRING);
                // 获取到cell中的值
                list.add(row.getCell(k).getStringCellValue());
            }

            WeeklyDTO wel = new WeeklyDTO();
            PojoUtil.setSysProperties(wel, OpType.insert);
            String work = weeklyDao.syslookuptl(list.get(0));
            if (work == null) {
                return;
            }
            wel.setWorkClass(work);
            wel.setWorkTasks(list.get(1));
            wel.setTopDateEvolve(list.get(2));
            wel.setDateEvolve(list.get(3));
            SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
            try {
                Date date = ft.parse(list.get(4));
                wel.setCompletionNode(date);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            if (list.get(5).equals("是")) {
                wel.setIsCompletion("Y");
            } else {
                wel.setIsCompletion("N");
            }
            wel.setContent(list.get(6));
            String ids = ComUtil.getId();
            wel.setId(ids);
            wel.setFkSubColId(lcid);
            weeklyDao.insertWeekly(wel);
        }

    }

    public List<WeeklyDTO> upLoadExcels(Sheet sheet, String lcid) {
        int physicalNumberOfRows = sheet.getPhysicalNumberOfRows();
        if (physicalNumberOfRows < 0) {
            return null;
        }
        List<WeeklyDTO> listarr = new ArrayList<>();
        for (int i = 1; i < physicalNumberOfRows; i++) {
            List<String> list = new ArrayList<>();
            Row row = sheet.getRow(i);
            // 获取到每行的表格cell
            int physicalNumberOfCells = row.getPhysicalNumberOfCells();
            for (int k = 0; k < physicalNumberOfCells; k++) {
                // 转换一下cell的格式，防止出错
                row.getCell(k).setCellType(Cell.CELL_TYPE_STRING);
                // 获取到cell中的值
                list.add(row.getCell(k).getStringCellValue());
            }

            WeeklyDTO wel = new WeeklyDTO();
            PojoUtil.setSysProperties(wel, OpType.insert);
            String work = weeklyDao.syslookuptl(list.get(0));
			/*if (work == null) {
				return null;
			}*/
            wel.setWorkClass(work);
            wel.setWorkTasks(list.get(1));
            wel.setTopDateEvolve(list.get(2));
            wel.setDateEvolve(list.get(3));
            SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
            try {
                Date date = ft.parse(list.get(4));
                wel.setCompletionNode(date);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            if (list.get(5).equals("是")) {
                wel.setIsCompletion("Y");
            } else {
                wel.setIsCompletion("N");
            }
            wel.setContent(list.get(6));
            String ids = ComUtil.getId();
            wel.setId(ids);
            wel.setFkSubColId(lcid);
            /* weeklyDao.insertDynSonWeekly(wel); */
            listarr.add(wel);
        }
        return listarr;
    }

    public boolean updatemo(DynTypeDTO dyn) {
        DynTypeDTO wek = weeklyDao.getType();
        int ret = 0;
        if (wek == null) {
            String id = ComUtil.getId();
            dyn.setId(id);
            PojoUtil.setSysProperties(dyn, OpType.insert);
            ret = weeklyDao.insertDynType(dyn);
        } else {
            ret = weeklyDao.updateDynTypeAll(dyn);
        }
        if (ret != 1) {
            return false;
        }

        return true;
    }

    public Map<String, Object> getLastWeek() {
        Map<String, Object> map = new HashMap<String, Object>();
        SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
        Calendar cal = Calendar.getInstance();
        int n = cal.get(Calendar.DAY_OF_WEEK) - 1;
        if (n == 0) {
            n = 7;
        }
        cal.add(Calendar.DATE, -(7 + (n - 1)));//上周一的日期
        Date monday = cal.getTime();
        map.put("monday", ft.format(monday));
        cal.add(Calendar.DATE, 1);
        Date tuesday = cal.getTime();
        map.put("tuesday", ft.format(tuesday));
        cal.add(Calendar.DATE, 1);
        Date wednesday = cal.getTime();
        map.put("wednesday", ft.format(wednesday));
        cal.add(Calendar.DATE, 1);
        Date thursday = cal.getTime();
        map.put("thursday", ft.format(thursday));
        cal.add(Calendar.DATE, 1);
        Date friday = cal.getTime();
        map.put("friday", ft.format(friday));
        cal.add(Calendar.DATE, 1);
        Date saturday = cal.getTime();
        map.put("saturday", ft.format(saturday));
        cal.add(Calendar.DATE, 1);
        Date sunday = cal.getTime();
        map.put("sunday", ft.format(sunday));
        return map;
    }

    public List<WeeklyDTO> getLastWeekly(String xian, String sysid) {
		/*Map<String,Object> map = this.getLastWeek();
		List<WeeklyDTO> list = weeklyDao.weeklySPage((String)map.get("monday"), (String)map.get("sunday"), xian);*/
        String fid = weeklyDao.getsonFid(sysid);
        List<WeeklyDTO> list = weeklyDao.lastweeklyu(fid);
        for (int i = 0; i < list.size(); i++) {

            WeeklyDTO ww = list.get(i);
            if (list.get(i).getPersonLiable() != null) {
                String[] ss = ww.getPersonLiable().split(";");
                String ee = "";
                for (int j = 0; j < ss.length; j++) {
                    ee += weeklyDao.getname(ss[j]);
                    ee += ",";
                }
                ww.personLiableName = ee;
            }

        }
        return list;
    }

    @SuppressWarnings("deprecation")
    public void downloadExcel(HSSFWorkbook workbook, int sheetNum, String[] headers) throws Exception {
        HSSFSheet sheet = workbook.createSheet();
        HSSFRow row = sheet.createRow(0);
        workbook.setSheetName(sheetNum, "周报导入模版");
        sheet.setDefaultColumnWidth((short) 10);
        for (int i = 0; i < headers.length; i++) {
            HSSFCell cell = row.createCell(i);
            HSSFRichTextString text = new HSSFRichTextString(headers[i]);
            cell.setCellValue(text.toString());
        }
    }

    public boolean isExcel2003(String filePath) {
        return filePath.matches("^.+\\.(?i)(xls)$");
    }

    public boolean isExcel2007(String filePath) {
        return filePath.matches("^.+\\.(?i)(xlsx)$");
    }

    public boolean validateExcel(String filePath) {
        if (filePath == null || !(isExcel2003(filePath)) || isExcel2007(filePath)) {
            return false;
        }
        return true;
    }

    public void sonWeekly(List<WeeklyDTO> json, String lcid) {
        for (WeeklyDTO weeklyDTO : json) {
            weeklyDTO.setFkSubColId(lcid);
            weeklyDTO.setId(ComUtil.getId());
            weeklyDTO.setCreationDate(new Date());
            weeklyDao.insertDynSonWeekly(weeklyDTO);
        }

    }
}
