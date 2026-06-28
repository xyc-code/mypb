package avicit.tradeunion.dacaremedicineitem.controller;


import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.DateUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.eform.EformConstant;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import avicit.tradeunion.dacaremedicineitem.dto.DaCareMedicineItemDTO;
import avicit.tradeunion.dacaremedicineitem.service.DaCareMedicineItemService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.lowagie.text.Table;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
@Scope("prototype")
@RequestMapping("avicit/tradeunion/daCareMedicineitem/daCareMedicineItemController")
public class DaCareMedicineItemController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DaCareMedicineItemController.class);


    @Autowired
    private DaCareMedicineItemService daCareMedicineItemService;

    /**
     * 列表页面分页查询
     * @param pageParameter 查询条件
     * @param request 请求
     * @return Map<String,Object>
     */
    @RequestMapping(value = "/operation/getDaCareMedicineItemsByPage")
    @ResponseBody
    public Map<String, Object> togetDaCareMedicineItemByPage(PageParameter pageParameter, HttpServletRequest request) {
        QueryReqBean<DaCareMedicineItemDTO> queryReqBean = new QueryReqBean<DaCareMedicineItemDTO>();
        queryReqBean.setPageParameter(pageParameter);
        String json = ServletRequestUtils.getStringParameter(request, "param", "");
        //字段查询条件
        String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");
        //排序方式
        String sord = ServletRequestUtils.getStringParameter(request, "sord", "");
        //排序字段
        String sidx = ServletRequestUtils.getStringParameter(request, "sidx", "");
        if (StringUtils.isNotEmpty(keyWord)) {
            json = keyWord;
        }
        String orderBy = "";
        String cloumnName = "";
        if (sidx != null && sord != null && !"".equals(sord) && !"".equals(sidx)) {
            cloumnName = ComUtil.getColumn(DaCareMedicineItemDTO.class, sidx);
            if (cloumnName != null) {
                //这里先进行判断是否有对应的数据库字段
                orderBy = " " + cloumnName + " " + sord;
            } else {
                //判断是否为特殊控件导致字段无法匹配
                if (sidx.indexOf("Alias") != -1) {
                    cloumnName = ComUtil.getColumn(DaCareMedicineItemDTO.class,
                            sidx.substring(0, sidx.lastIndexOf("Alias")));
                } else if (sidx.indexOf("Name") != -1) {
                    cloumnName = ComUtil.getColumn(DaCareMedicineItemDTO.class,
                            sidx.substring(0, sidx.lastIndexOf("Name")));
                }
                if (cloumnName != null) {
                    orderBy = " " + cloumnName + " " + sord;
                }
            }
        }
        HashMap<String, Object> map = new HashMap<String, Object>();
        DaCareMedicineItemDTO param = null;
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        QueryRespBean<DaCareMedicineItemDTO> result = null;
        if (json != null && !"".equals(json)) {
            param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DaCareMedicineItemDTO>() {
            });
        }else{
            param = new DaCareMedicineItemDTO();
        }
        queryReqBean.setSearchParams(param);
        param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
        try {
            result = daCareMedicineItemService.searchDaCareMedicineItemByPage(queryReqBean,orderBy,keyWord);
        } catch (Exception ex) {
            return map;
        }

        map.put("records", result.getPageParameter().getTotalCount());
        map.put("page", result.getPageParameter().getPage());
        map.put("total", result.getPageParameter().getTotalPage());
        map.put("rows", result.getResult());
        LOGGER.info("成功获取DaCareMedicineItemDTO分页数据");
        return map;
    }


    /**
     * 对比两个日期之间间隔，天数
     * @param request
     * @return
     */
    @RequestMapping(value = "/operation/getCallLeaveDays")
    @ResponseBody
    public ModelAndView getCallLeaveDays(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();


        int leaveDays=0;
        List<String> bbList=new ArrayList<>();//补班集合
        List<String> xjList=new ArrayList<>();//休假集合

        Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00"));
        String curYear = String.valueOf(calendar.get(Calendar.YEAR));

        //先判断传入的日期中都是哪一年的

        try {
            String firstDate=ServletRequestUtils.getStringParameter(request,"firstDate");
           String lastDate= ServletRequestUtils.getStringParameter(request,"lastDate");


           Date startDate=DateUtil.parseDate(firstDate);
            Date endDate=DateUtil.parseDate(lastDate);
            /*处理传递的日期是哪一年，然后加载对应的日历信息*/
            Calendar calStart=Calendar.getInstance();
            calStart.setTime(startDate);
           String startYear= String.valueOf(calStart.get(Calendar.YEAR));

            Calendar calEnd=Calendar.getInstance();
            calEnd.setTime(endDate);
            String endYear= String.valueOf(calEnd.get(Calendar.YEAR));

            if(startYear.equals(endYear)){//两个日期年份相等，则是在同一个年份中
                convertDate(bbList,xjList,startYear);
            }else{//不在同一年中，需要查询两个年份的日历
                convertDate(bbList,xjList,startYear);
                convertDate(bbList,xjList,endYear);
            }

            /***************按照要求，两个日期之间应该从次日算计，所以在开始日期上往后加1天********************/
            Calendar startDateCal=Calendar.getInstance();
            startDateCal.setTime(startDate);
            startDateCal.add(Calendar.DAY_OF_MONTH,+1);
            startDate=startDateCal.getTime();

            //开始循环日期
            Calendar cal=Calendar.getInstance();
            //循环遍历每个日期
            while (startDate.compareTo(endDate)<=0){
                cal.setTime(startDate);
                //判断是否在补班内，如果在补班内则加1
                if(!isExist(startDate,bbList)){
                    //判断是否是周六，周日
                    int week=cal.get(Calendar.DAY_OF_WEEK)-1;
                    if(week==0||week==6){//0为周日 6为周6
                        //跳出循环，进入下一个日期
                        cal.add(Calendar.DAY_OF_MONTH,+1);
                        startDate=cal.getTime();
                        continue;
                    }
                    //判断是否为节假日
                    try{
                        if(isExist(startDate,xjList)){
                            //跳出循环进入下一个日期
                            cal.add(Calendar.DAY_OF_MONTH,+1);
                            startDate=cal.getTime();
                            continue;
                        }

                    }catch(Exception e){
                        e.printStackTrace();
                    }
                }
                //不是节假日或者周末，或者在调休中，天数 加1
                leaveDays=leaveDays+1;
                //日期往后加1天
                cal.add(Calendar.DAY_OF_MONTH,+1);
                startDate=cal.getTime();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        mav.addObject("leaveDays",leaveDays);

        return mav;
    }

    private boolean isExist(Date date, List<String> list){
        boolean flag=false;
        try {
           String time= DateUtil.format(date,"yyyy-MM-dd");
            for(String s:list){
                if(s.equalsIgnoreCase(time)){
                    flag= true;
                    break;
                }
            }


        } catch (Exception e) {
            e.printStackTrace();
        }
        return flag;
    }


    public void convertDate(List<String> bbList,List<String> xjList,String year){

        BpmsControlUtils bpmsControlUtils=SpringFactory.getBean(BpmsControlUtils.class);
        TableData td=new TableData();
        td.setTableName("DYN_AXYL_CALENDAR");//日历配置表

        List<TableColData> tcdList=new ArrayList<>();
        TableColData tcd=new TableColData();
        tcd.setColName("YEAR");
        tcd.setColValue(year);
        tcd.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
        tcd.setColSelectType(EformConstant.ColSelectTypeEnum.EQUAL);
        tcdList.add(tcd);
        td.setTableColDataList(tcdList);

        List<Map<String, Object>> dataList= bpmsControlUtils.getDataList(td);

        if(dataList.size()>0){
            String subId=MapUtils.getString(dataList.get(0),"ID");

            TableData subTd=new TableData();
            subTd.setTableName("DYN_SUB_CALENDAR_1");//日历配置表字表

            List<TableColData> subTcdList=new ArrayList<>();
            TableColData subTcd=new TableColData();
            subTcd.setColName("FK_SUB_COL_ID");
            subTcd.setColValue(subId);
            subTcd.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
            subTcd.setColSelectType(EformConstant.ColSelectTypeEnum.EQUAL);
            subTcdList.add(subTcd);
            subTd.setTableColDataList(subTcdList);

            List<Map<String, Object>> datasubList= bpmsControlUtils.getDataList(subTd);

            for(Map<String, Object> data:datasubList){
                String rqType=MapUtils.getString(data,"RQ_TYPE");//日期类型
                Long rq=MapUtils.getLongValue(data,"RQ");//日期

                try {
                    String rqs = DateUtil.format(new Date(rq),"yyyy-MM-dd");
                    if("1".equals(rqType)){//假期

                        xjList.add(rqs);
                    }

                    if("2".equals(rqType)){//调休
                        bbList.add(rqs);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }


            }
        }



    }


}
