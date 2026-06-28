package avicit.platform6.modules.system.sysautocode.action;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.sysautocode.dto.SysAutoCode;
import avicit.platform6.api.sysautocode.dto.SysAutoCodeIO;
import avicit.platform6.api.sysautocode.dto.SysAutoCodeSegment;
import avicit.platform6.api.sysautocode.dto.SysAutoCodeValue;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.dao.DbUtils;
import avicit.platform6.core.dao.MutiDataBaseConfig;
import avicit.platform6.core.excel.imp.ExcelImportReport;
import avicit.platform6.core.excel.imp.entity.ExcelImportResult;
import avicit.platform6.core.jdbc.JdbcAvicit;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.client.RestClient;
import avicit.platform6.core.rest.client.RestClientConfig;
import avicit.platform6.core.rest.msg.ResponseStatus;
import avicit.platform6.core.rest.msg.*;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.modules.system.excelimport.orguser.ImportHistoryRecord;
import avicit.platform6.modules.system.syslog.service.LogBaseFactory;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.thoughtworks.xstream.XStream;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.JdbcUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.GenericType;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@Scope("prototype")
@RequestMapping("/sysautocode/sysAutoCodeManageController")
public class SysAutoCodeManageController implements LoaderConstant {

    private static final Logger LOGGER = LoggerFactory.getLogger(SysAutoCodeManageController.class);

    public static final String AUTO_CODE_REST_URL = "/api/platform6/sysautocode/SysAutoCodeManageRest/";

    @Autowired
    private JdbcAvicit jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    /**
     * @param pageParameter 查询条件,request 请求
     * @return
     * @throws JsonProcessingException
     * @description:分页查询方法
     */
    @RequestMapping(value = "/getSysAutoCodesByPage")
    @ResponseBody
    public String getSysAutoCodeByPage(PageParameter pageParameter, HttpServletRequest request) throws JsonProcessingException {
        QueryReqBean<SysAutoCode> queryReqBean = new QueryReqBean<SysAutoCode>();
        queryReqBean.setPageParameter(pageParameter);
        HashMap<String, Object> map = new HashMap<String, Object>();
        String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");// 字段查询条件
        String sord = ServletRequestUtils.getStringParameter(request, "sord", "");// 排序方式
        String sidx = ServletRequestUtils.getStringParameter(request, "sidx", "");// 排序字段
        //修改为根据appId过滤 start
        SysAutoCode param = null;
        if (StringUtils.isNotBlank(keyWord)) {
            param = JsonHelper.getInstance().readValue(keyWord, new TypeReference<SysAutoCode>() {
            });
        } else {
            param = new SysAutoCode();
        }
        param.setSysApplicationId(SessionHelper.getApplicationId());
        queryReqBean.setSearchParams(param);
        //end
        String oderby = "";
        if (StringUtils.isNotBlank(sidx) && StringUtils.isNotBlank(sord)) {
            String cloumnName = ComUtil.getColumn(SysAutoCode.class, sidx);
            if (cloumnName != null) {
                oderby = " " + cloumnName + " " + sord;
            }
        }

        Muti3Bean<QueryReqBean<SysAutoCode>, String, String> bean = new Muti3Bean<QueryReqBean<SysAutoCode>, String, String>();
        bean.setDto1(queryReqBean);
        bean.setDto2(SessionHelper.getCurrentOrgIdentity(request));
        bean.setDto3(oderby);

        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "searchByPage/v1";
        ResponseMsg<QueryRespBean<SysAutoCode>> responseMsg = RestClient.doPost(restURL, bean, new GenericType<ResponseMsg<QueryRespBean<SysAutoCode>>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            throw new RuntimeException(responseMsg.getErrorDesc());
        }
        QueryRespBean<SysAutoCode> result = responseMsg.getResponseBody();
        map.put("records", result.getPageParameter().getTotalCount());
        map.put("page", result.getPageParameter().getPage());
        map.put("total", result.getPageParameter().getTotalPage());
        map.put("rows", result.getResult());
        LOGGER.info("成功获取SysAutoCodeDTO分页数据");
        return JsonHelper.getInstance().setDateFormat(new SimpleDateFormat("yyyy-MM-dd")).writeValueAsString(map);
    }


    @RequestMapping(value = "/getSysAutoCodesByPageForWa")
    @ResponseBody
    public String getSysAutoCodeByPageForWA(PageParameter pageParameter, HttpServletRequest request) throws JsonProcessingException {
        QueryReqBean<SysAutoCode> queryReqBean = new QueryReqBean<SysAutoCode>();
        queryReqBean.setPageParameter(pageParameter);
        HashMap<String, Object> map = new HashMap<String, Object>();
        String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");// 字段查询条件
        String sord = ServletRequestUtils.getStringParameter(request, "sord", "");// 排序方式
        String sidx = ServletRequestUtils.getStringParameter(request, "sidx", "");// 排序字段
        String tableName = ServletRequestUtils.getStringParameter(request, "tableName", "");
        String colName = ServletRequestUtils.getStringParameter(request, "colName", "");
        //修改为根据appId过滤 start
        SysAutoCode param = null;
        if (StringUtils.isNotBlank(keyWord)) {
            param = JsonHelper.getInstance().readValue(keyWord, new TypeReference<SysAutoCode>() {
            });
        } else {
            param = new SysAutoCode();
        }
        param.setSysApplicationId(SessionHelper.getApplicationId());
        queryReqBean.setSearchParams(param);
        //end
        String oderby = "";
        if (StringUtils.isNotBlank(sidx) && StringUtils.isNotBlank(sord)) {
            String cloumnName = ComUtil.getColumn(SysAutoCode.class, sidx);
            if (cloumnName != null) {
                oderby = " " + cloumnName + " " + sord;
            }
        }

        Muti5Bean<QueryReqBean<SysAutoCode>, String, String, String, String> bean = new Muti5Bean<QueryReqBean<SysAutoCode>, String, String, String, String>();
        bean.setDto1(queryReqBean);
        bean.setDto2(SessionHelper.getCurrentOrgIdentity(request));
        bean.setDto3(oderby);
        bean.setDto4(tableName);
        bean.setDto5(colName);
        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "searchByPageForWA/v1";
        ResponseMsg<QueryRespBean<SysAutoCode>> responseMsg = RestClient.doPost(restURL, bean, new GenericType<ResponseMsg<QueryRespBean<SysAutoCode>>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            throw new RuntimeException(responseMsg.getErrorDesc());
        }
        QueryRespBean<SysAutoCode> result = responseMsg.getResponseBody();
        map.put("records", result.getPageParameter().getTotalCount());
        map.put("page", result.getPageParameter().getPage());
        map.put("total", result.getPageParameter().getTotalPage());
        map.put("rows", result.getResult());
        LOGGER.info("成功获取SysAutoCodeDTO分页数据");
        return JsonHelper.getInstance().setDateFormat(new SimpleDateFormat("yyyy-MM-dd")).writeValueAsString(map);
    }


    /**
     * @return
     * @description:根据code查询
     */
    @RequestMapping(value = "/getSysAutoCodeByCode")
    @ResponseBody
    public String getSysAutoCodeByCode(HttpServletRequest request) {
        QueryReqBean<SysAutoCode> queryReqBean = new QueryReqBean<SysAutoCode>();
        HashMap<String, Object> map = new HashMap<String, Object>();
        String code = ServletRequestUtils.getStringParameter(request, "code", "");// 字段查询条件

        SysAutoCode autoCode = new SysAutoCode();
        autoCode.setCode(code);
        queryReqBean.setSearchParams(autoCode);
        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "searchSysAutoCode/v1";
        ResponseMsg<List<SysAutoCode>> responseMsg = RestClient.doPost(restURL, queryReqBean, new GenericType<ResponseMsg<List<SysAutoCode>>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            throw new RuntimeException(responseMsg.getErrorDesc());
        }
        if (responseMsg.getResponseBody().size() == 1) {
            return "false";
        }
        return "true";
    }

    /**
     * @return
     * @description:初始化添加页面的数据
     */
    @RequestMapping(value = "/initInsertPageData")
    public ModelAndView initInsertPageData(HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("avicit/platform6/autocode/SysAutoCodeAdd");
        return mav;
    }

    /**
     * @return
     * @description:初始化修改页面的数据
     */
    @RequestMapping(value = "/initEditPageData/{id}")
    public ModelAndView initEditPageData(@PathVariable String id, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "get/v1/" + id;
        ResponseMsg<SysAutoCode> responseMsg = RestClient.doGet(restURL, new GenericType<ResponseMsg<SysAutoCode>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            throw new RuntimeException(responseMsg.getErrorDesc());
        }

        SysAutoCodeSegment segment = new SysAutoCodeSegment();
        segment.setSysAutoCodeId(id);
        QueryReqBean<SysAutoCodeSegment> queryReqBean = new QueryReqBean<SysAutoCodeSegment>();
        queryReqBean.setSearchParams(segment);
        restURL = restHost + AUTO_CODE_REST_URL + "searchSysAutoCodeSegment/v1";
        ResponseMsg<List<SysAutoCodeSegment>> segmentMsg = RestClient.doPost(restURL, queryReqBean, new GenericType<ResponseMsg<List<SysAutoCodeSegment>>>() {
        });
        if (segmentMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + segmentMsg.getRetCode() + "," + segmentMsg.getErrorDesc());
            throw new RuntimeException(segmentMsg.getErrorDesc());
        }
        mav.addObject("code", responseMsg.getResponseBody());
        mav.addObject("segmentList", segmentMsg.getResponseBody());
        mav.setViewName("avicit/platform6/autocode/SysAutoCodeEdit");
        //是否跳码
        if(!StringUtils.isEmpty(id)){
            mav.addObject("edit","Y");
        }
        return mav;
    }

    /**
     * @param
     * @return
     * @description:保存数据
     */
    @ResponseBody
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String saveSysAutoCode(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String codeData = ServletRequestUtils.getStringParameter(request, "code", "");
        String codeSegmentData = ServletRequestUtils.getStringParameter(request, "codeSegment", "");
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        SysAutoCode sysAutoCode = JsonHelper.getInstance().readValue(codeData, dateFormat, new TypeReference<SysAutoCode>() {
        });
        sysAutoCode.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
        sysAutoCode.setSysApplicationId(SessionHelper.getApplicationId());
        sysAutoCode.setValidFlag("Y");

        if (!"".equals(sysAutoCode.getTableName()) && !"".equals(sysAutoCode.getColumnName())) {
            if (!validateTableNameExist(sysAutoCode.getTableName())) {
                map.put("error", "1");//error=1，不存在表
                map.put("flag", OpResult.failure);
                return JsonHelper.getInstance().writeValueAsString(map);
            } else if (!validateColumnNameExist(sysAutoCode.getTableName(), sysAutoCode.getColumnName())) {
                map.put("error", "2");//error=1，不存在列
                map.put("flag", OpResult.failure);
                return JsonHelper.getInstance().writeValueAsString(map);
            }
        }

        List<SysAutoCodeSegment> sysAutoCodeSegmentList = JsonHelper.getInstance().readValue(codeSegmentData, dateFormat, new TypeReference<List<SysAutoCodeSegment>>() {
        });

        Muti3Bean<SysAutoCode, List<SysAutoCodeSegment>, String> bean = new Muti3Bean<SysAutoCode, List<SysAutoCodeSegment>, String>();
        bean.setDto1(sysAutoCode);
        bean.setDto2(sysAutoCodeSegmentList);
        bean.setDto3(RestClientConfig.systemid());

        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "saveCascade/v1";
        ResponseMsg<String> responseMsg = RestClient.doPost(restURL, bean, new GenericType<ResponseMsg<String>>() {
        });

        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }
        return JsonHelper.getInstance().writeValueAsString(map);

    }


    /**
     * @return
     * @description:更新数据(网安专用)
     */
    @ResponseBody
    @RequestMapping(value = "/updateForWa", method = RequestMethod.POST)
    public String updateSysAutoCodeForWa(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String autocode = ServletRequestUtils.getStringParameter(request, "autocode", "");

        String tablename = ServletRequestUtils.getStringParameter(request, "tablename", "");

        String colname = ServletRequestUtils.getStringParameter(request, "colname", "");
        QueryReqBean<SysAutoCode> queryReqBean = new QueryReqBean<SysAutoCode>();
        SysAutoCode autoCode = new SysAutoCode();
        autoCode.setCode(autocode);
        queryReqBean.setSearchParams(autoCode);
        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "searchSysAutoCode/v1";
        ResponseMsg<List<SysAutoCode>> responseMsg = RestClient.doPost(restURL, queryReqBean, new GenericType<ResponseMsg<List<SysAutoCode>>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
            map.put("error", responseMsg.getErrorDesc());
        }
        List<SysAutoCode> sysAutoCodes = responseMsg.getResponseBody();
        if (sysAutoCodes != null && sysAutoCodes.size() > 0) {
            SysAutoCode sysAutoCode = sysAutoCodes.get(0);
            sysAutoCode.setColumnName(colname);
            sysAutoCode.setTableName(tablename);
            restURL = restHost + AUTO_CODE_REST_URL + "updateSensitiveCascadeForWa/v1";
            ResponseMsg<Integer> responseMsgs = RestClient.doPost(restURL, sysAutoCode, new GenericType<ResponseMsg<Integer>>() {
            });
            if (responseMsgs.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
                LOGGER.debug("调用rest服务成功：" + restURL);
            } else { //失败
                LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsgs.getRetCode() + "," + responseMsgs.getErrorDesc());
                map.put("flag", OpResult.failure);
                map.put("error", responseMsgs.getErrorDesc());
            }
        }

        map.put("flag", OpResult.success);
        return JsonHelper.getInstance().writeValueAsString(map);

    }


    /**
     * @return
     * @description:更新数据
     */
    @ResponseBody
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public String updateSysAutoCode(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String jsonData = ServletRequestUtils.getStringParameter(request, "code", "");
        String codeSegmentData = ServletRequestUtils.getStringParameter(request, "codeSegment", "");
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        SysAutoCode sysAutoCode = JsonHelper.getInstance().readValue(jsonData, dateFormat, new TypeReference<SysAutoCode>() {
        });
        sysAutoCode.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
        sysAutoCode.setSysApplicationId(SessionHelper.getApplicationId());
        List<SysAutoCodeSegment> sysAutoCodeSegmentList = JsonHelper.getInstance().readValue(codeSegmentData, dateFormat, new TypeReference<List<SysAutoCodeSegment>>() {
        });

        if (!"".equals(sysAutoCode.getTableName()) && !"".equals(sysAutoCode.getColumnName())) {
            if (!validateTableNameExist(sysAutoCode.getTableName())) {
                map.put("error", "1");//error=1，不存在表
                map.put("flag", OpResult.failure);
                return JsonHelper.getInstance().writeValueAsString(map);
            } else if (!validateColumnNameExist(sysAutoCode.getTableName(), sysAutoCode.getColumnName())) {
                map.put("error", "2");//error=1，不存在列
                map.put("flag", OpResult.failure);
                return JsonHelper.getInstance().writeValueAsString(map);
            }
        }

        Muti3Bean<SysAutoCode, List<SysAutoCodeSegment>, String> bean = new Muti3Bean<SysAutoCode, List<SysAutoCodeSegment>, String>();
        bean.setDto1(sysAutoCode);
        bean.setDto2(sysAutoCodeSegmentList);
        bean.setDto3(RestClientConfig.systemid());

        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "updateSensitiveCascade/v1";
        ResponseMsg<Integer> responseMsg = RestClient.doPost(restURL, bean, new GenericType<ResponseMsg<Integer>>() {
        });

        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }
        return JsonHelper.getInstance().writeValueAsString(map);

    }

    /**
     * @param ids id数组
     * @return
     * @description:按照id批量删除数据
     */
    @ResponseBody
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public String deleteSysAutoCode(@RequestBody String[] ids,
                                    HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();

        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "deleteCascadeByIds/v1";
        ResponseMsg<Integer> responseMsg = RestClient.doPost(restURL, ids, new GenericType<ResponseMsg<Integer>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }
        return JsonHelper.getInstance().writeValueAsString(map);
    }

    /**
     * @return
     * @description:取得预览通用代码
     */
    @ResponseBody
    @RequestMapping(value = "/previewAutoCode", method = RequestMethod.POST)
    public String previewAutoCode(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String codeSegmentData = ServletRequestUtils.getStringParameter(request, "codeSegment", "");
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        List<SysAutoCodeSegment> segmentList = JsonHelper.getInstance().readValue(codeSegmentData, dateFormat, new TypeReference<List<SysAutoCodeSegment>>() {
        });
        Muti2Bean<List<SysAutoCodeSegment>, String> bean = new Muti2Bean<List<SysAutoCodeSegment>, String>();
        bean.setDto1(segmentList);
        bean.setDto2(RestClientConfig.systemid());
        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "previewAutoCode/v1";
        ResponseMsg<List<HashMap<String, String>>> responseMsg = RestClient.doPost(restURL, bean, new GenericType<ResponseMsg<List<HashMap<String, String>>>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }
        map.put("data", responseMsg.getResponseBody());

        return JsonHelper.getInstance().writeValueAsString(map);
    }

    /**
     * @return
     * @description:获取自编代码规则数据
     */
    @ResponseBody
    @RequestMapping(value = "/getAutoCodeData", method = RequestMethod.POST)
    public String getAutoCodeData(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String autoCodeIdStr = ServletRequestUtils.getStringParameter(request, "autoCodeId", "");//自动编码ID
        String autoCodeStr = ServletRequestUtils.getStringParameter(request, "autoCode", "");//自动编码代码
        String businessId = ServletRequestUtils.getStringParameter(request, "businessId", "");//自动编码代码
        Muti4Bean<String, String, String, String> bean = new Muti4Bean<String, String, String, String>();
        bean.setDto1(autoCodeIdStr);
        bean.setDto2(autoCodeStr);
        bean.setDto3(businessId);
        bean.setDto4(RestClientConfig.systemid());

        //编码规则数据
        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "generateAutoCodeData/v1";
        ResponseMsg<List<HashMap<String, String>>> responseMsg = RestClient.doPost(restURL, bean, new GenericType<ResponseMsg<List<HashMap<String, String>>>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }
        List<HashMap<String, String>> result = responseMsg.getResponseBody();

        //可变属性
        String inputFlag = "false";
        if (result != null && result.size() > 0) {
            for (HashMap<String, String> hashMap : result) {
                String segmentType = hashMap.get("segmentType");
                if ("4".equals(segmentType)) {
                    inputFlag = "true";
                    break;
                }
            }
        }

        map.put("inputFlag", inputFlag);
        map.put("data", result);
        return JsonHelper.getInstance().writeValueAsString(map);
    }

    /**
     * @return
     * @description:查询流水码
     */
    @ResponseBody
    @RequestMapping(value = "/searchSerialNum", method = RequestMethod.POST)
    public String searchSerialNum(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String autoCodeIdStr = ServletRequestUtils.getStringParameter(request, "autoCodeId", "");//自动编码ID
        String autoCodeStr = ServletRequestUtils.getStringParameter(request, "autoCode", "");//自动编码代码
        String autoIncreaseCode = ServletRequestUtils.getStringParameter(request, "autoIncreaseCode", "");
        String serialNumLength = ServletRequestUtils.getStringParameter(request, "serialNumLength", "");
        String autoIncreaseFlag = ServletRequestUtils.getStringParameter(request, "autoIncreaseFlag", "");

        Muti5Bean<String, String, String, String, String> bean = new Muti5Bean<String, String, String, String, String>();
        bean.setDto1(autoCodeIdStr);
        bean.setDto2(autoCodeStr);
        bean.setDto3(autoIncreaseCode);
        bean.setDto4(serialNumLength);
        bean.setDto5(autoIncreaseFlag);

        //编码规则数据
        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "searchSerialNum/v1";
        ResponseMsg<String> responseMsg = RestClient.doPost(restURL, bean, new GenericType<ResponseMsg<String>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }

        map.put("result", responseMsg.getResponseBody());
        return JsonHelper.getInstance().writeValueAsString(map);
    }

    /**
     * @return
     * @description:校验分类码
     */
    @ResponseBody
    @RequestMapping(value = "/checkLooukupCode", method = RequestMethod.POST)
    public String checkLooukupCode(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String looukupCode = ServletRequestUtils.getStringParameter(request, "looukupCode", "");
        Muti2Bean<String, String> bean = new Muti2Bean<String, String>();
        bean.setDto1(looukupCode);
        bean.setDto2(RestClientConfig.systemid());
        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "checkLooukupCode/v1";
        ResponseMsg<Boolean> responseMsg = RestClient.doPost(restURL, bean, new GenericType<ResponseMsg<Boolean>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }
        map.put("result", responseMsg.getResponseBody().toString());
        return JsonHelper.getInstance().writeValueAsString(map);
    }

    /**
     * @return
     * @description:校验函数
     */
    @ResponseBody
    @RequestMapping(value = "/checkFuncExp", method = RequestMethod.POST)
    public String checkFuncExp(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String funcExp = ServletRequestUtils.getStringParameter(request, "funcExp", "");//自动编码ID

        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "checkFuncExp/v1";
        ResponseMsg<Boolean> responseMsg = RestClient.doPost(restURL, funcExp, new GenericType<ResponseMsg<Boolean>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }
        map.put("result", responseMsg.getResponseBody().toString());
        return JsonHelper.getInstance().writeValueAsString(map);
    }

    /**
     * @return
     * @description:校验SQL
     */
    @ResponseBody
    @RequestMapping(value = "/checkSqlExp", method = RequestMethod.POST)
    public String checkSqlExp(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String sqlExp = ServletRequestUtils.getStringParameter(request, "sqlExp", "");//自动编码ID

        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "checkSqlExp/v1";
        ResponseMsg<Boolean> responseMsg = RestClient.doPost(restURL, sqlExp, new GenericType<ResponseMsg<Boolean>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }
        map.put("result", responseMsg.getResponseBody().toString());
        return JsonHelper.getInstance().writeValueAsString(map);
    }

    /**
     * @return
     * @description:校验编码值
     */
    @ResponseBody
    @RequestMapping(value = "/checkAutoCodeValue", method = RequestMethod.POST)
    public String checkAutoCodeValue(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String autoCodeId = ServletRequestUtils.getStringParameter(request, "autoCodeId", "");//自动编码代码
        String autoCode = ServletRequestUtils.getStringParameter(request, "autoCode", "");//自动编码代码
        String autoCodeValue = ServletRequestUtils.getStringParameter(request, "autoCodeValue", "");//自动编码值
        Muti3Bean<String, String, String> bean = new Muti3Bean<String, String, String>();
        bean.setDto1(autoCodeId);
        bean.setDto2(autoCode);
        bean.setDto3(autoCodeValue);

        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "checkAutoCodeValue/v1";
        ResponseMsg<Map<String, String>> responseMsg = RestClient.doPost(restURL, bean, new GenericType<ResponseMsg<Map<String, String>>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }
        map.put("result", responseMsg.getResponseBody());
        return JsonHelper.getInstance().writeValueAsString(map);
    }

    /**
     * @return
     * @description:根据编码值查找编码
     */
    @ResponseBody
    @RequestMapping(value = "/getAutoCodeByValue", method = RequestMethod.POST)
    public HashMap<String, Object> getAutoCodeByValue(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String autoCode = ServletRequestUtils.getStringParameter(request, "autoCode", "");//自动编码代码
        String autoCodeValue = ServletRequestUtils.getStringParameter(request, "autoCodeValue", "");//自动编码值
        Muti2Bean<String, String> bean = new Muti2Bean<String, String>();
        bean.setDto1(autoCode);
        bean.setDto2(autoCodeValue);

        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "searchSysAutoCodeValue/v1";
        ResponseMsg<SysAutoCodeValue> responseMsg = RestClient.doPost(restURL, bean, new GenericType<ResponseMsg<SysAutoCodeValue>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }
        if (responseMsg.getResponseBody() != null) {
            map.put("result", responseMsg.getResponseBody().getAutoCode());
        } else {
            map.put("result", "");
        }
        return map;
    }

    public boolean validateTableNameExist(String tableName) {
        int tableNum;
        tableName = tableName.toUpperCase();
        String sql = "";
        if (DbUtils.isOracle()||DbUtils.isDM())
            sql = "SELECT COUNT(*) FROM ALL_TABLES WHERE TABLE_NAME = '" + tableName + "'";
        else if (DbUtils.isMySql())
            sql = "SELECT COUNT(*) FROM information_schema.tables WHERE TABLE_NAME = '" + tableName + "'";
        else if (DbUtils.isSqlServer())
            sql = "SELECT  COUNT(*) FROM dbo.sysobjects WHERE NAME = '" + tableName + "'";

        Number number = jdbcTemplate.queryForObject(sql, Integer.class);
        tableNum = number != null ? number.intValue() : 0;
        return tableNum > 0;
    }

    public boolean validateColumnNameExist(String tableName, String columnName) {
        int columnNum;
        tableName = tableName.toUpperCase();
        columnName = columnName.toUpperCase();
        String sql = "";
        if (DbUtils.isOracle()||DbUtils.isDM())
            sql = "SELECT COUNT(*) FROM User_Tab_Columns WHERE TABLE_NAME = '" + tableName + "' AND COLUMN_NAME = '" + columnName + "'";
        else if (DbUtils.isMySql())
            sql = "SELECT COUNT(*) FROM information_schema.columns WHERE TABLE_NAME = '" + tableName + "' AND COLUMN_NAME = '" + columnName + "'";
        else if (DbUtils.isSqlServer())
            sql = "SELECT COUNT(*) FROM syscolumns WHERE id=object_id('" + tableName + "') AND NAME = '" + columnName + "'";
        Number number = jdbcTemplate.queryForObject(sql, Integer.class);
        columnNum = number != null ? number.intValue() : 0;
        return columnNum > 0;
    }

    private boolean hasString(String sysWord) {
        return sysWord.toLowerCase().startsWith("SYS".toLowerCase())
                || sysWord.toLowerCase().startsWith("BPM".toLowerCase())
                || sysWord.toLowerCase().startsWith("EFORM".toLowerCase())
                || sysWord.toLowerCase().startsWith("DB".toLowerCase());
    }

    @RequestMapping(value = "/tableList")
    @ResponseBody
    public Map<String, Object> tableList(HttpServletRequest request) {
        String tableName = request.getParameter("tableName");
        if (StringUtils.isEmpty(tableName)) {
            tableName = null;
        } else {
            tableName = "%" + tableName.toUpperCase() + "%";
        }

        List<Map<String, String>> list = new ArrayList<Map<String, String>>();
        Connection connection = null;
        ResultSet rs = null;
        try {
            connection = jdbc.getJdbcTemplate().getDataSource().getConnection();
            DatabaseMetaData metaData = connection.getMetaData();
            String[] types = {
                    "TABLE", "VIEW"
            };

            MutiDataBaseConfig sd = SpringFactory.getBean(MutiDataBaseConfig.class);
            if (sd.getCurrentDbType().equals("sqlserver2008")) {
                rs = metaData.getTables(connection.getCatalog(), "dbo", tableName, types);
            } else if(sd.getCurrentDbType().equals("oscar")){
                rs = metaData.getTables(null, metaData.getUserName(), tableName, types);
            } else if(sd.getCurrentDbType().equals("kingbase8")){
                rs = metaData.getTables(null, "PUBLIC", null, types);
            }else if(sd.getCurrentDbType().equals("dm")){
                rs = metaData.getTables(null, null, tableName, types);
            }else {
                rs = metaData.getTables(null, metaData.getUserName(), tableName, types);
            }

            while (rs.next()) {
                //过滤以系统、流程、表单相关的表表
                if (hasString(rs.getString(3))) {
                    continue;
                }

                Map<String, String> map = new HashMap<String, String>();
                ResultSet pk = metaData.getPrimaryKeys(null, metaData.getUserName(), rs.getString(3));
                while (pk.next()) {
                    map.put("pk", pk.getObject(4) + "");
                }
                if(!DbUtils.isOscar() && !DbUtils.isKingbase8()){
                    if (pk.getStatement() != null) {
                        pk.getStatement().close();
                    }
                }
                pk.close();
                if (DbUtils.isOracle()) {
                    //获取表描述信息
                    ResultSet commentsSet = connection.prepareStatement("select * from  (SELECT A.TABLE_NAME,A.COMMENTS table_comments  FROM USER_TAB_COMMENTS A) where table_name='" + rs.getString(3) + "'").executeQuery();
                    while (commentsSet.next()) {
                        if (commentsSet.getString("TABLE_COMMENTS") != null && !commentsSet.getString("TABLE_COMMENTS").equals("")) {
                            map.put("tableComment", commentsSet.getString("TABLE_COMMENTS"));
                        }
                    }
                    if (commentsSet.getStatement() != null) {
                        commentsSet.getStatement().close();
                    }

                    commentsSet.close();
                } else {
                    map.put("tableComment", rs.getString("REMARKS"));
                }
                map.put("tableName", rs.getString(3));
                map.put("id", ComUtil.getId());
                map.put("dataSourceId", "dataSource");
                list.add(map);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            JdbcUtils.closeConnection(connection);
        }

        HashMap<String, Object> back = new HashMap<String, Object>();
        //back.put("records", roleList.size());
        //back.put("page", page);
        back.put("total", list.size());
        back.put("rows", list);

        return back;
    }

    @RequestMapping(value = "/tableColumnList")
    @ResponseBody
    public Map<String, Object> tableColumnList(HttpServletRequest request) {
        String tableName = request.getParameter("tableName");
        String tableColumnName = request.getParameter("tableColumnName");
        if (StringUtils.isEmpty(tableColumnName)) {
            tableColumnName = "%";
        } else {
            tableColumnName = "%" + tableColumnName.toUpperCase() + "%";
        }

        Connection connection = null;
        List<Map<String, String>> columns = new ArrayList();
        try {
            connection = jdbc.getJdbcTemplate().getDataSource().getConnection();
            DatabaseMetaData metaData = connection.getMetaData();
            String schema = getSchema(connection);

            ResultSet colRet = metaData.getColumns(connection.getCatalog(), schema, tableName, tableColumnName);
            while (colRet.next()) {
                String columnName = colRet.getString("COLUMN_NAME");
                String columnComment = "";

                if (colRet.getString("TABLE_SCHEM") != null && !colRet.getString("TABLE_SCHEM").equals(schema)) {
                    columnComment = "";
                } else {
                    //获取字段描述信息
                    if (DbUtils.isOracle()) {
                        //oracle需特殊操作获取描述
                        ResultSet commentsSet = connection.prepareStatement("select * from user_col_comments where table_name='" + tableName + "' and column_name='" + colRet.getString("COLUMN_NAME") + "'").executeQuery();
                        while (commentsSet.next()) {
                            if (commentsSet.getString("COMMENTS") != null && !commentsSet.getString("COMMENTS").equals("")) {
                                columnComment = commentsSet.getString("COMMENTS");
                            }
                        }

                        commentsSet.getStatement().close();
                        commentsSet.close();
                    } else {
                        columnComment = colRet.getString("REMARKS");
                    }
                }

                Map<String, String> data = new HashMap<String, String>();
                data.put("id", ComUtil.getId());
                data.put("columnName", columnName);
                data.put("columnComment", columnComment);

                columns.add(data);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            JdbcUtils.closeConnection(connection);
        }

        HashMap<String, Object> back = new HashMap<String, Object>();
        //back.put("records", roleList.size());
        //back.put("page", page);
        back.put("total", columns.size());
        back.put("rows", columns);

        return back;
    }

    private String getSchema(Connection conn) throws Exception {
        String schema;

        MutiDataBaseConfig sd = SpringFactory.getBean(MutiDataBaseConfig.class);
        if (sd.getCurrentDbType().equals("sqlserver2008")) {
            return "dbo";
        } else {
            schema = conn.getMetaData().getUserName();
            if ((schema == null) || (schema.length() == 0)) {
                throw new Exception("ORACLE数据库模式不允许为空");
            }
        }

        return schema;
    }

    /**
     * @return
     * @description:校验rest服务名
     */
    @ResponseBody
    @RequestMapping(value = "/checkRestServicesName", method = RequestMethod.POST)
    public String checkRestServicesName(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String restNameExp = ServletRequestUtils.getStringParameter(request, "restNameExp", "");//自动编码ID
        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "checkRestServicesName/v1";
        ResponseMsg<Boolean> responseMsg = RestClient.doPost(restURL, restNameExp, new GenericType<ResponseMsg<Boolean>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }
        map.put("result", responseMsg.getResponseBody().toString());
        return JsonHelper.getInstance().writeValueAsString(map);
    }
    @ResponseBody
    @RequestMapping(value = "/checkRestServicesURL", method = RequestMethod.POST)
    public String checkRestServicesURL(HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();
        String restUrlExp = ServletRequestUtils.getStringParameter(request, "restUrlExp", "");//自动编码ID
        String restNameExp = ServletRequestUtils.getStringParameter(request, "restNameExp", "");
        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
        String restURL = restHost + AUTO_CODE_REST_URL + "checkRestServicesUrl/v1";
        Map<String,String> parms= new HashMap<String,String>();
        parms.put("restUrlExp",restUrlExp);
        parms.put("restNameExp",restNameExp);
        ResponseMsg<Boolean> responseMsg = RestClient.doPost(restURL, parms, new GenericType<ResponseMsg<Boolean>>() {
        });
        if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
            LOGGER.debug("调用rest服务成功：" + restURL);
            map.put("flag", OpResult.success);
        } else { //失败
            LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
            map.put("flag", OpResult.failure);
        }
        map.put("result", responseMsg.getResponseBody().toString());
        return JsonHelper.getInstance().writeValueAsString(map);
    }
    @ResponseBody
    @RequestMapping(value = "importManage", method = RequestMethod.GET)
    public ModelAndView toSysAutoCodeImportManage(HttpServletRequest request,
													   HttpServletResponse response) {
		ModelAndView mav = new ModelAndView();
		String url = "platform//sysautocode/sysAutoCodeManageController/";
		mav.setViewName("avicit/platform6/autocode/importAutoCode");
		mav.addObject("fileName","importAutoCode");
		request.setAttribute("url",url);
		return mav;
	}
	@ResponseBody
    @RequestMapping(value = "/import", method = RequestMethod.POST)
    public String importSysAutoCodeDTO(
                @RequestParam("profileFile") MultipartFile file,
                HttpServletRequest request){
        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
		String mainUrl = restHost + AUTO_CODE_REST_URL + "searchSysAutoCode/v1";
		String insertUrl = restHost + AUTO_CODE_REST_URL + "saveCascade/v1";
		boolean isUpdate = Boolean.parseBoolean(ServletRequestUtils.getStringParameter(request, "isUpdate", "false"));
		Map<String, String>  result = new HashMap<String, String>(2);
        if (!file.isEmpty()) {
            try {
                XStream xStream = new XStream();
                int successCount = 0;
                int failedCount = 0;
                List<Map<Integer, String>> errorRecord = new ArrayList<Map<Integer, String>>();
                Map<Integer, String> errorColTitle = new HashMap<Integer, String>(2);
                errorColTitle.put(0, "编码名称");
                errorColTitle.put(1, "错误信息");
                errorRecord.add(errorColTitle);

                List<SysAutoCodeIO> fileCodeIOs = (List<SysAutoCodeIO>) xStream.fromXML(file.getInputStream());
                for (SysAutoCodeIO sysAutoCodeIO : fileCodeIOs) {
                    boolean existFlag = false;

                    SysAutoCode sysAutoCode = sysAutoCodeIO.getSysAutoCode();
                    sysAutoCode.setSysApplicationId(SessionHelper.getApplicationId());
                    List<SysAutoCodeSegment> sysAutoCodeSegmentList = sysAutoCodeIO.getSubList();

                    QueryReqBean<SysAutoCode> queryReqBean = new QueryReqBean<SysAutoCode>();
                    SysAutoCode searchAutoCode = new SysAutoCode();
                    searchAutoCode.setCode(sysAutoCode.getCode());
                    searchAutoCode.setSysApplicationId(SessionHelper.getApplicationId());
                    queryReqBean.setSearchParams(searchAutoCode);
                    ResponseMsg<List<SysAutoCode>> responseMsg = RestClient.doPost(mainUrl, queryReqBean, new GenericType<ResponseMsg<List<SysAutoCode>>>() {
                    });
                    if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
                        if(responseMsg.getResponseBody().size() == 1){//该编码已存在
                            existFlag = true;
                        }else if(responseMsg.getResponseBody().size() > 1){//当前应用下编码重复，跳过不导入
                            Map<Integer, String> errorInfo = new HashMap<Integer, String>(2);
                            errorInfo.put(0, sysAutoCode.getName());
                            errorInfo.put(1, "当前应用下编码重复");
                            errorRecord.add(errorInfo);
                            failedCount++;
                            continue;
                        }
                        LOGGER.debug("调用rest服务成功：" + mainUrl);
                    }
                    if(existFlag){
                        if(isUpdate){//更新
                            String delUrl = restHost + AUTO_CODE_REST_URL + "deleteCascadeByIds/v1";
                            String[] ids = new String[1];
                            for(int i = 0;i<responseMsg.getResponseBody().size();i++){
                                ids[i] = responseMsg.getResponseBody().get(i).getId();
                            }
                            ResponseMsg<Integer> responseMsgDel = RestClient.doPost(delUrl, ids, new GenericType<ResponseMsg<Integer>>() {
                            });
                            if(responseMsgDel.getRetCode().equals(ResponseStatus.HTTP_OK)){//删除旧数据
                                LOGGER.debug("调用rest服务成功：" + delUrl);
                            }
                            Muti3Bean<SysAutoCode, List<SysAutoCodeSegment>, String> bean =new Muti3Bean<SysAutoCode, List<SysAutoCodeSegment>, String>();
                            bean.setDto1(sysAutoCode);
                            bean.setDto2(sysAutoCodeSegmentList);
                            bean.setDto3(SessionHelper.getApplicationId());
                            ResponseMsg<Integer> responseMsgInsert = RestClient.doPost(insertUrl, bean, new GenericType<ResponseMsg<Integer>>() {
                            });
                            if (responseMsgInsert.getRetCode().equals(ResponseStatus.HTTP_OK)) {//插入新数据
                                successCount++;
                                LOGGER.debug("调用rest服务成功：" + insertUrl);
                            } else {
                                Map<Integer, String> errorInfo = new HashMap<Integer, String>(2);
                                errorInfo.put(0, sysAutoCode.getName());
                                errorInfo.put(1, "导入失败");
                                errorRecord.add(errorInfo);
                                failedCount++;
                                continue;
                            }
                        }else{
                            Map<Integer, String> errorInfo = new HashMap<Integer, String>(2);
                            errorInfo.put(0, sysAutoCode.getName());
                            errorInfo.put(1, "当前应用下编码已存在");
                            errorRecord.add(errorInfo);
                            failedCount++;
                            continue;
                        }
                    }else{//插入
                        Muti3Bean<SysAutoCode, List<SysAutoCodeSegment>, String> bean = new Muti3Bean<SysAutoCode, List<SysAutoCodeSegment>, String>();
                        bean.setDto1(sysAutoCode);
                        bean.setDto2(sysAutoCodeSegmentList);
                        bean.setDto3(SessionHelper.getApplicationId());
                        ResponseMsg<Integer> responseMsgInsert = RestClient.doPost(insertUrl, bean, new GenericType<ResponseMsg<Integer>>() {
                        });
                        if (responseMsgInsert.getRetCode().equals(ResponseStatus.HTTP_OK)) {//插入新数据
                            successCount++;
                            LOGGER.debug("调用rest服务成功：" + insertUrl);
                        } else{
                            Map<Integer, String> errorInfo = new HashMap<Integer, String>(2);
                            errorInfo.put(0, sysAutoCode.getName());
                            errorInfo.put(1, "导入失败");
                            errorRecord.add(errorInfo);
                            failedCount++;
                            continue;
                        }
                    }
                }
                ExcelImportReport report = new ExcelImportReport("编码导入",successCount,failedCount, errorRecord);

				ImportHistoryRecord importHistoryRecord = SpringFactory.getBean(ImportHistoryRecord.class);
				String appId = SessionHelper.getApplicationId();
				String languageCode = SessionHelper.getSystemDefaultLanguageCode();
				String loginName = SessionHelper.getLoginName(request);
				ExcelImportResult importResult  =report.saveImportRecord();
				// 导入信息写入到数据库中
				importHistoryRecord.generate2Db(importResult, appId, languageCode, loginName );

				if( failedCount == 0 ){
					result.put("flag", "success");
					result.put("msg", importResult.getMessage());
				}else{
					result.put("flag", "failure");
					result.put("msg", importResult.getMessage());
				}
				return JsonHelper.getInstance().writeValueAsString(result);
            }catch (Exception e){
				e.printStackTrace();
			}
        }
        result.put("flag","failure");
		result.put("msg","文件读取失败！" );
		return JsonHelper.getInstance().writeValueAsString(result);
    }
    @RequestMapping(value = "export", method = RequestMethod.POST)
    public void exportSysAutoCodeDTOtoXML(HttpServletResponse response, HttpServletRequest request) {
        String ids = ServletRequestUtils.getStringParameter(request, "ids", "");
		JsonHelper jsonHelper = JsonHelper.getInstance();

		List<SysAutoCodeIO> autoCodeIOList = new ArrayList<SysAutoCodeIO>();
		String fileName = "自动编码.xml";
        String restHost = RestClientConfig.getRestHost(RestClientConfig.syscoding);
		String mainUrl = restHost + AUTO_CODE_REST_URL + "get/v1/";
        String subUrl = restHost + AUTO_CODE_REST_URL + "searchSysAutoCodeSegmentByAutoCode/v1";

        StringBuilder errorMsg = new StringBuilder();
		boolean success = true;

		if(ids!= null && ids != ""){
            String[] autoCodeIds = jsonHelper.readValue(ids, String[].class);
            for (String id : autoCodeIds) {
                SysAutoCode sysAutoCode = new SysAutoCode();
                List<SysAutoCodeSegment> subList = new ArrayList<SysAutoCodeSegment>();
                String url = mainUrl + id;
                ResponseMsg<SysAutoCode> mainResponseMsg = RestClient.doGet(url, new GenericType<ResponseMsg<SysAutoCode>>() {});
                if (mainResponseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) {
					sysAutoCode = mainResponseMsg.getResponseBody();
				} else {
					success = false;
					LOGGER.error("url:" + url + ", error:" + mainResponseMsg.getErrorDesc());
					errorMsg.append(mainResponseMsg.getErrorDesc());
					continue;
				}
                Muti2Bean<String,String> bean = new Muti2Bean<String,String>();
                bean.setDto1(id);
                bean.setDto2(sysAutoCode.getCode());
                ResponseMsg<List<SysAutoCodeSegment>> subResponseMsg = RestClient.doPost(subUrl,bean,new GenericType<ResponseMsg<List<SysAutoCodeSegment>>>(){});
                if (subResponseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) {
					subList = subResponseMsg.getResponseBody();
				} else {
					success = false;
					LOGGER.error("url:" + subUrl + ", error:" + subResponseMsg.getErrorDesc());
					errorMsg.append(subResponseMsg.getErrorDesc());
				}
                if(sysAutoCode != null){
                    SysAutoCodeIO sysAutoCodeIO = new SysAutoCodeIO();
                    sysAutoCodeIO.setSysAutoCode(sysAutoCode);
                    sysAutoCodeIO.setSubList(subList);
                    autoCodeIOList.add(sysAutoCodeIO);
                } else {
					success = false;
					errorMsg.append("ID: '" + id + "'对应的自动编码不存在");
				}
            }
        }else{
            PageParameter pageParameter = new PageParameter();
            QueryReqBean<SysAutoCode> queryReqBean = new QueryReqBean<SysAutoCode>();
            queryReqBean.setPageParameter(pageParameter);
            SysAutoCode param = new SysAutoCode();
            param.setSysApplicationId(SessionHelper.getApplicationId());
            queryReqBean.setSearchParams(param);
            Muti3Bean<QueryReqBean<SysAutoCode>, String, String> bean = new Muti3Bean<QueryReqBean<SysAutoCode>, String, String>();
            bean.setDto1(queryReqBean);
            bean.setDto2(SessionHelper.getCurrentOrgIdentity(request));
            bean.setDto3("");
            String restURL = restHost + AUTO_CODE_REST_URL + "searchByPage/v1";
            ResponseMsg<QueryRespBean<SysAutoCode>> responseMsg = RestClient.doPost(restURL, bean, new GenericType<ResponseMsg<QueryRespBean<SysAutoCode>>>() {
            });
            if (responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) { //成功
                LOGGER.debug("调用rest服务成功：" + restURL);
            } else { //失败
                LOGGER.info("调用rest服务出错：:" + restURL + "," + responseMsg.getRetCode() + "," + responseMsg.getErrorDesc());
                throw new RuntimeException(responseMsg.getErrorDesc());
            }
            QueryRespBean<SysAutoCode> result = responseMsg.getResponseBody();
            for(SysAutoCode sysAutoCode : result.getResult()){
                List<SysAutoCodeSegment> subList = new ArrayList<SysAutoCodeSegment>();
                Muti2Bean<String,String> subbean = new Muti2Bean<String,String>();
                subbean.setDto1(sysAutoCode.getId());
                subbean.setDto2(sysAutoCode.getCode());
                ResponseMsg<List<SysAutoCodeSegment>> subResponseMsg = RestClient.doPost(subUrl,subbean,new GenericType<ResponseMsg<List<SysAutoCodeSegment>>>(){});
                if (subResponseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) {
					subList = subResponseMsg.getResponseBody();
				} else {
					success = false;
					LOGGER.error("url:" + subUrl + ", error:" + subResponseMsg.getErrorDesc());
					errorMsg.append(subResponseMsg.getErrorDesc());
				}
                if(sysAutoCode != null){
                    SysAutoCodeIO sysAutoCodeIO = new SysAutoCodeIO();
                    sysAutoCodeIO.setSysAutoCode(sysAutoCode);
                    sysAutoCodeIO.setSubList(subList);
                    autoCodeIOList.add(sysAutoCodeIO);
                } else {
					success = false;
					errorMsg.append("ID: '" + sysAutoCode.getId() + "'对应的自动编码不存在");
				}
            }
        }

		try {
			response.setHeader("Content-disposition", "attachment;filename=" + URLEncoder.encode(fileName, "utf-8"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		OutputStream outputStream = null;
		try {
			outputStream = response.getOutputStream();
		} catch (IOException e) {
			e.printStackTrace();
		}
		try {
			XStream xstream = new XStream();
			String exportInfo = "";
			OpResult result = null;
			if(success){
				exportInfo = xstream.toXML(autoCodeIOList);
				result = OpResult.success;
			}else{
				exportInfo = errorMsg.toString();
				result = OpResult.failure;
			}

			outputStream.write(exportInfo.getBytes(Charset.forName("UTF-8")));
			outputStream.flush();
			outputStream.close();
			SysLogUtil.log("编码管理", "编码管理导出", PlatformConstant.OpType.select,
					result, LogBaseFactory.getLogBase());
		} catch (Exception e) {
			e.printStackTrace();
		}
    }
}
