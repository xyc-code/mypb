package avicit.video.controller;


import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.api.sysprofile.SysProfileAPI;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformProperties;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eform.EformConstant;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import avicit.platform6.modules.system.sysfileupload.domain.SysFileUpload;
import avicit.platform6.modules.system.sysfileupload.service.SwfUploadService;
import avicit.tradeunion.dacaremedicine.dto.DaCareMedicineDTO;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 声像播放类 20240425 张国庆
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/video/videoPlayerController")
public class VideoPlayerController {
    private static Logger log = LoggerFactory.getLogger(VideoPlayerController.class);
    public static final String doccenterPath = PlatformProperties.getProperty("doccenter.path");
    @Autowired
    private SwfUploadService swfUploadService;
    @Autowired
    private SysProfileAPI sysProfileAPI;
    /**
     * 跳转到列表页面
     * @param request 请求
     * @param reponse 响应
     * @return ModelAndView
     */
    @RequestMapping(value = "toPlayer")
    public ModelAndView toPlayer(HttpServletRequest request, HttpServletResponse reponse) {
        ModelAndView mav = new ModelAndView();
        String formId=ServletRequestUtils.getStringParameter(request,"formId","");
        String appId= SessionHelper.getApplicationId();
        String  videoPlayerUrl=sysProfileAPI.getProfileValueByCodeByAppId("videoPlayerUrl",appId);
        List<SysFileUpload> fileUploadList= swfUploadService.getFileListByFormId(formId,"video");//得到所有附件
        List<Map<String,String>> videoList=new ArrayList<>();

        String playUrl="";//默认加载地址
        for(SysFileUpload sysFileUpload:fileUploadList){
            String filePath=sysFileUpload.getFILE_URL();
            String newPlayerPath=filePath.substring(doccenterPath.length(),filePath.length());
            Map<String,String> map=new HashMap<>();
            map.put("key",sysFileUpload.getFILE_NAME());
            map.put("value",videoPlayerUrl+newPlayerPath.replaceAll("\\\\","/"));
            videoList.add(map);
        }
        if(fileUploadList.size()>0){
            String filePath=fileUploadList.get(0).getFILE_URL();
            playUrl=filePath.substring(doccenterPath.length(),filePath.length()).replaceAll("\\\\","/");
        }

        StringBuffer sql=new StringBuffer("select * from DYN_VIDEO t where t.ID='"+formId+"'");
        JdbcTemplate jdbcTemplate= SpringMVCFactory.getBean(JdbcTemplate.class);

        List<Map<String,Object>> dataList=jdbcTemplate.queryForList(sql.toString());
        for(Map<String,Object> dataMap:dataList){
            String playPosterUrl= MapUtils.getString(dataMap,"VIDEO_FM");
            mav.addObject("playPosterUrl", playPosterUrl);
        }
        mav.setViewName("avicit/video/ckPlayer");
        mav.addObject("videoList", videoList);//视频播放列表
        mav.addObject("playHost", videoPlayerUrl);//视频播放列表
        mav.addObject("playUrl", playUrl);//视频播放列表
        return mav;
    }

    /**
     * 跳转到列表页面
     * @param request 请求
     * @param reponse 响应
     * @return ModelAndView
     */
    @RequestMapping(value = "toPlayerList")
    public ModelAndView totoPlayerList(HttpServletRequest request, HttpServletResponse reponse) {
        ModelAndView mav = new ModelAndView();
        String videoType = ServletRequestUtils.getStringParameter(request, "videoType", "");
        mav.addObject("videoType", videoType);
        mav.setViewName("avicit/video/videoList");

        return mav;
    }
    /**
     * 跳转到列表页面
     * @param request 请求
     * @param reponse 响应
     * @return ModelAndView
     */
    @RequestMapping(value = "toPlayerListLeab")
    public ModelAndView totoPlayerListLeab(HttpServletRequest request, HttpServletResponse reponse) {
        ModelAndView mav = new ModelAndView();
        String videoType = ServletRequestUtils.getStringParameter(request, "videoType", "");
        mav.addObject("videoType", videoType);
        mav.setViewName("avicit/video/videoListLeab");

        return mav;
    }
    /**
     * 跳转到列表页面，
     * @param request 请求
     * @param reponse 响应
     * @return ModelAndView
     */
    @RequestMapping(value = "toVideoDownload")
    public ModelAndView totoVideoDownload(HttpServletRequest request, HttpServletResponse reponse) {
        ModelAndView mav = new ModelAndView();

        mav.setViewName("avicit/video/videodownload");

        return mav;
    }
    /**
     * 列表页面分页查询
     * @param pageParameter 查询条件
     * @param request 请求
     * @return Map<String,Object>
     */
    @RequestMapping(value = "/operation/getVideoPlaysByPage")
    @ResponseBody
    public Map<String, Object> togetVideoPlaysByPage(PageParameter pageParameter, HttpServletRequest request) {

        Map<String, Object> map =new HashMap<>();

        try{
            //字段查询条件
            String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");
            String videoType = ServletRequestUtils.getStringParameter(request, "videoType", "");

            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            StringBuffer sql=new StringBuffer("select * from DYN_VIDEO t where t.VIDEO_TYPE like '%"+videoType+"%'");
            JdbcTemplate jdbcTemplate= SpringMVCFactory.getBean(JdbcTemplate.class);
            boolean flag=true;
            if (StringUtils.isNotEmpty(keyWord)) {
                List<Map<String,String>> list= JsonHelper.getInstance().readValue(keyWord, dateFormat, new TypeReference<List<Map<String,String>>>() {
                });

                StringBuffer sql2=new StringBuffer(" and ");
                for(Map<String,String> cumMap:list){
                    String str= ComUtil.replaceNull2Space(MapUtils.getString(cumMap,"str"));
                    if("".equals(str)){
                        flag=false;
                        break;
                    }
                    sql2.append("t.").
                            append(MapUtils.getString(cumMap,"column")).//视频分类
                            append(" like ").
                            append("'%").
                            append(MapUtils.getString(cumMap,"str")).
                            append("%'").
                            append(" or ");
                }
                if(flag) {
                    sql2.delete(sql2.lastIndexOf("or"), sql2.length());
                    sql.append(sql2);
                }
            }

            sql.append(" order by  IS_TOP asc, draf_date asc");

            List<Map<String,Object>> dataListFirst=jdbcTemplate.queryForList("select * from DYN_SCRIPT_UP t where t.up_type='"+videoType+"'");

                map.put("dataListFirst", dataListFirst);//首条数据
                List<Map<String,Object>> dataList=jdbcTemplate.queryForList(sql.toString());
                map.put("videoList", dataList);//视频播放列表


        }catch (Exception e){
            e.printStackTrace();
        }

return map;
    }

    /**
     * 列表页面分页查询，查询标签
     * @param pageParameter 查询条件
     * @param request 请求
     * @return Map<String,Object>
     */
    @RequestMapping(value = "/operation/getVideoLeabPlaysByPage")
    @ResponseBody
    public Map<String, Object> togetVideoLeabPlaysByPage(PageParameter pageParameter, HttpServletRequest request) {

        Map<String, Object> map =new HashMap<>();

        try{
            //字段查询条件
            String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");
            String videoType = ServletRequestUtils.getStringParameter(request, "videoType", "");

            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            StringBuffer sql=new StringBuffer();
            if("daxw".equals(videoType)){//如果是东安新闻，就只查询东安新闻的
                sql.append("select * from DYN_VIDEO t where t.VIDEO_LEAB like '%"+videoType+"%'");

            }else{
                sql.append("select * from DYN_VIDEO t where t.VIDEO_LEAB not like '%"+videoType+"%' ");
            }

            JdbcTemplate jdbcTemplate= SpringMVCFactory.getBean(JdbcTemplate.class);
            boolean flag=true;
            if (StringUtils.isNotEmpty(keyWord)) {
                List<Map<String,String>> list= JsonHelper.getInstance().readValue(keyWord, dateFormat, new TypeReference<List<Map<String,String>>>() {
                });

                StringBuffer sql2=new StringBuffer(" and ");
                for(Map<String,String> cumMap:list){
                    String str= ComUtil.replaceNull2Space(MapUtils.getString(cumMap,"str"));
                    if("".equals(str)){
                        flag=false;
                        break;
                    }
                    sql2.append("t.").
                            append(MapUtils.getString(cumMap,"column")).//视频分类
                            append(" like ").
                            append("'%").
                            append(MapUtils.getString(cumMap,"str")).
                            append("%'").
                            append(" or ");
                }
                if(flag) {
                    sql2.delete(sql2.lastIndexOf("or"), sql2.length());
                    sql.append(sql2);
                }
            }

            sql.append(" order by t.DRAF_DATE desc");


            List<Map<String,Object>> dataList=jdbcTemplate.queryForList(sql.toString());
            map.put("videoList", dataList);//视频播放列表
            map.put("records", dataList.size());
            //map.put("page", result.getPageParameter().getPage());
            //map.put("total", result.getPageParameter().getTotalPage());
            map.put("rows", dataList);

        }catch (Exception e){
            e.printStackTrace();
        }

        return map;
    }


    /**
     * 列表页面分页查询，查询标签
     * @param pageParameter 查询条件
     * @param request 请求
     * @return Map<String,Object>
     */
    @RequestMapping(value = "/operation/getVideoDownloadsByPage")
    @ResponseBody
    public Map<String, Object> togetVideoDownloadsByPage(PageParameter pageParameter, HttpServletRequest request) {

        Map<String, Object> map =new HashMap<>();

        try{
            //字段查询条件
            String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");

            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            StringBuffer sql=new StringBuffer();
                sql.append("select * from DYN_VIDEO t where t.IS_DOWNLOAD ='Y'");

            JdbcTemplate jdbcTemplate= SpringMVCFactory.getBean(JdbcTemplate.class);
            boolean flag=true;
            if (StringUtils.isNotEmpty(keyWord)) {
                List<Map<String,String>> list= JsonHelper.getInstance().readValue(keyWord, dateFormat, new TypeReference<List<Map<String,String>>>() {
                });

                StringBuffer sql2=new StringBuffer(" and ");
                for(Map<String,String> cumMap:list){
                    String str= ComUtil.replaceNull2Space(MapUtils.getString(cumMap,"str"));
                    if("".equals(str)){
                        flag=false;
                        break;
                    }
                    sql2.append("t.").
                            append(MapUtils.getString(cumMap,"column")).//视频分类
                            append(" like ").
                            append("'%").
                            append(MapUtils.getString(cumMap,"str")).
                            append("%'").
                            append(" or ");
                }
                if(flag) {
                    sql2.delete(sql2.lastIndexOf("or"), sql2.length());
                    sql.append(sql2);
                }
            }

            sql.append(" order by  IS_TOP asc, draf_date asc");
            List<Map<String,Object>> dataList=jdbcTemplate.queryForList(sql.toString());
            map.put("videoList", dataList);//视频播放列表


        }catch (Exception e){
            e.printStackTrace();
        }

        return map;
    }
    /**
     * 跳转到列表页面
     * @param request 请求
     * @param reponse 响应
     * @return ModelAndView
     */

    @RequestMapping(value = "toPlayerIndexFrame")
    public ModelAndView toPlayerIndexFrame(HttpServletRequest request, HttpServletResponse reponse) {
        ModelAndView mav = new ModelAndView();
        String rows = ServletRequestUtils.getStringParameter(request, "rows", "");

        //SysLookupAPI sysLookupAPI=SpringMVCFactory.getBean(SysLookupAPI.class);
        String appId=SessionHelper.getApplicationId();
        JdbcTemplate jdbcTemplate=SpringMVCFactory.getBean(JdbcTemplate.class);
        java.util.List<java.util.Map<String, Object>> yearList=jdbcTemplate.queryForList("select t.cur_year from DYN_VIDEO t group by t.cur_year");
       // Collection<SysLookupSimpleVo> lookupSimpleVos= sysLookupAPI.getLookUpListByTypeByAppId("videoType",appId);
        mav.setViewName("avicit/video/indexframe");
        mav.addObject("rows", rows);
        mav.addObject("videoYear", yearList);

       // mav.addObject("videoType", lookupSimpleVos);
        return mav;
    }

    @RequestMapping(value = "toPlayerIndexList")
    public ModelAndView toPlayerIndexList(HttpServletRequest request, HttpServletResponse reponse) {
        ModelAndView mav = new ModelAndView();
        String rows = ServletRequestUtils.getStringParameter(request, "rows", "");
     //   String videoType = ServletRequestUtils.getStringParameter(request, "videoType", "");
        String videoYear = ServletRequestUtils.getStringParameter(request, "videoYear", "");

      /*  SysLookupAPI sysLookupAPI=SpringMVCFactory.getBean(SysLookupAPI.class);
        String appId=SessionHelper.getApplicationId();
        String vodeoTypeName= sysLookupAPI.getNameByLooupTypeCodeAndLooupCodeByAppId("videoType",videoType,appId);*/
        mav.setViewName("avicit/video/indexVideoList");
        mav.addObject("rows", rows);
        mav.addObject("videoYear", videoYear);

       /* mav.addObject("videoType", videoType);
        mav.addObject("vodeoTypeName", vodeoTypeName);*/
        return mav;
    }
    /**
     * 列表页面分页查询
     * @param pageParameter 查询条件
     * @param request 请求
     * @return Map<String,Object>
     */
    @RequestMapping(value = "/operation/getIndexVideoPlaysByPage")
    @ResponseBody
    public Map<String, Object> togetIndexVideoPlaysByPage(PageParameter pageParameter, HttpServletRequest request) {

        Map<String, Object> map =new HashMap<>();

        try{
            //字段查询条件
            String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");
            String videoYear = ServletRequestUtils.getStringParameter(request, "videoYear", "");
            String rows = ServletRequestUtils.getStringParameter(request, "rows", "4");
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            StringBuffer sql=new StringBuffer("select * from DYN_VIDEO t where t.cur_year like '%"+videoYear+"%' order by  IS_TOP asc, draf_date asc");
            JdbcTemplate jdbcTemplate= SpringMVCFactory.getBean(JdbcTemplate.class);

            List<Map<String,Object>> dataList=jdbcTemplate.queryForList(sql.toString());
            map.put("videoList", dataList);//视频播放列表
        }catch (Exception e){
            e.printStackTrace();
        }

        return map;
    }

    /**
     * 标签检索
     * @param request
     * @param reponse
     * @return
     */
    @RequestMapping(value = "toLabSearchList")
    public ModelAndView toLabSearchList(HttpServletRequest request, HttpServletResponse reponse) {
        ModelAndView mav = new ModelAndView();
        String rows = ServletRequestUtils.getStringParameter(request, "rows", "");
        //String videoType = ServletRequestUtils.getStringParameter(request, "videoType", "");


        SysLookupAPI sysLookupAPI=SpringMVCFactory.getBean(SysLookupAPI.class);
        String appId=SessionHelper.getApplicationId();
        String languageCode=SessionHelper.getCurrentLanguageCode();
        Collection<SysLookupSimpleVo> lookupSimpleVos =sysLookupAPI.getLookUpListByType("videolab", appId,  languageCode);
        mav.setViewName("avicit/video/labSearchList");
        mav.addObject("rows", rows);
        mav.addObject("lookupSimpleVos", lookupSimpleVos);

       /* mav.addObject("videoType", videoType);
        mav.addObject("vodeoTypeName", vodeoTypeName);*/
        return mav;
    }
    /**
     * 列表页面分页查询
     * @param pageParameter 查询条件
     * @param request 请求
     * @return Map<String,Object>
     */
    @RequestMapping(value = "/operation/getLeabSearchByPage")
    @ResponseBody
    public Map<String, Object> togetLeabSearchByPage(PageParameter pageParameter, HttpServletRequest request) {

        Map<String, Object> map = new HashMap<>();
        List<Map<String,Object>> dataList=new ArrayList<>();
        Map<String,Object> onlyMap= new HashMap<>();
        try{
            //字段查询条件
            String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            JdbcTemplate jdbcTemplate= SpringMVCFactory.getBean(JdbcTemplate.class);
            if (StringUtils.isNotEmpty(keyWord)) {

              String strArr[]=keyWord.split(",");

              for(String str:strArr){
                  StringBuffer sql=new StringBuffer("select * from DYN_VIDEO t  where t.VIDEO_LEAB like '%"+str+"%' order by  IS_TOP asc, draf_date asc");
                  List<Map<String,Object>> temList=jdbcTemplate.queryForList(sql.toString());
                  for(Map<String,Object> temMap:temList){
                      String keyId=MapUtils.getString(temMap,"ID");

                      if(onlyMap.get(keyId)==null){//过滤重复数据
                          onlyMap.put(keyId,temList);
                          dataList.add(temMap);
                      }

                  }


              }

            }else{
                StringBuffer sql=new StringBuffer("select * from DYN_VIDEO t  order by   IS_TOP asc, draf_date asc");
                dataList=jdbcTemplate.queryForList(sql.toString());
            }

            map.put("videoList", dataList);//视频播放列表
        }catch (Exception e){
            e.printStackTrace();
        }


        return map;
    }
}
