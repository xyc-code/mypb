package avicit.test.test3.controller;

import avicit.test.test3.service.*;
import avicit.test.test3.dto.*;

import avicit.platform6.api.commonselect.ZTreeNode;
import avicit.platform6.api.syspermissionresource.permissionanalysis.annotation.CustomBean;
import avicit.platform6.api.syspermissionresource.permissionanalysis.annotation.DataPermission;
import avicit.platform6.api.syspermissionresource.permissionanalysis.annotation.SqlParam;

import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.sysuser.*;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import avicit.platform6.core.excel.export.ServerExcelExport;
import avicit.platform6.core.excel.export.headersource.JqExportDataGridHeaderSource;
import com.lowagie.text.Document;
import com.lowagie.text.PageSize;
import com.lowagie.text.Rectangle;
import com.lowagie.text.pdf.PdfWriter;
import java.net.URLEncoder;
import java.util.Arrays;
import org.springframework.ui.ModelMap;
import avicit.platform6.eformclient.utils.BpmsCommonUtils;

@Controller
@RequestMapping(value = "/avicit/test/Test3Test1Controller")
public class Test3Test1Controller {

	@Autowired
	private Test3Test1Service service;

	@Autowired
	private BpmOperateService bpmOperateService;

    @Autowired
    private SysUserAPI sysUserAPI;

    @Autowired
    private SysDeptAPI sysDeptAPI;

    @Autowired
    private SysGroupAPI sysGroupAPI;

    @Autowired
    private SysRoleAPI sysRoleAPI;

    @Autowired
    private SysLookupAPI lookupApi;

    @Autowired
    private SysPositionAPI sysPositionAPI;

    @Autowired
    private SysOrgAPI sysOrgAPI;

            @Autowired
        private DynTestService DynTestService;
    
	private static Logger logger = LoggerFactory.getLogger(Test3Test1Controller.class);

    @RequestMapping(value = "/Test1/Manage", method = RequestMethod.GET)
    public ModelAndView toTest3Test1Manage(
            HttpServletRequest request,
            @CookieValue(value = PlatformConstant.COOKIE_CURRENT_LANGUAGE_CODE, defaultValue = PlatformConstant.D_LANGUAGE) String langcode) {
        ModelAndView mv = new ModelAndView();

        mv.setViewName("avicit/test/test3/test1");
        return mv;
    }

            @DataPermission(TableName = "t1", ModelName = "tablea1c6efb7a1ceb2428e3979b106ec2cb320db", BeanInfo = @CustomBean())
@RequestMapping(value = "/tablea1c6efb7a1ceb2428e3979b106ec2cb320db/searchByPage", method = RequestMethod.POST)
@ResponseBody
public Map<String, Object> searchTest3test1flowtableDYN_TESTByPage(PageParameter pageParameter,
                                                    HttpServletRequest request, @SqlParam(Key="myKey") Map<String,Object> parameter, @CookieValue(value = PlatformConstant.COOKIE_CURRENT_LANGUAGE_CODE, defaultValue = PlatformConstant.D_LANGUAGE) String langcode) throws Exception {
    String orgIdentity = SessionHelper.getCurrentOrgIdentity(request);

    QueryReqBean<DynTestDto> queryReqBean = new QueryReqBean<DynTestDto>();
    queryReqBean.setPageParameter(pageParameter);

    Map<String, Object> retmap = new HashMap<String, Object>();

    String sql = "";
    String json = ServletRequestUtils.getStringParameter(request, "param", "");
    String keyWord = ServletRequestUtils.getStringParameter(request, "keyWord", "");
    String sord = ServletRequestUtils.getStringParameter(request, "sord", "");// 排序方式
    String sidx = ServletRequestUtils.getStringParameter(request, "sidx", "");// 排序字段
    String pid = ServletRequestUtils.getStringParameter(request, "pid", "");  // 联动关系主表ID

    String orderBy = "";

    if (sidx != null && !"".equals(sidx)) {
        orderBy = sidx + " " + sord;
    }

    if (!"".equals(keyWord)) {
        json = keyWord;
    }

    DynTestDto param = new DynTestDto();
    DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    QueryRespBean<DynTestDto> result = null;
    if (json != null && !"".equals(json)) {
        param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynTestDto>() {});
    }

        
                    
        
    param.setCurrUserId(SessionHelper.getLoginSysUserId(request));


    queryReqBean.setSearchParams(param);

    try {
        if (keyWord != null && !"".equals(keyWord)) {
            result = DynTestService.searchDynTestBpmByPageOr(queryReqBean, sql, orderBy);
        } else {
            result = DynTestService.searchDynTestBpmByPage(queryReqBean, sql, orderBy);
        }
    } catch (Exception ex) {
        logger.error(ex.getMessage());
        ex.printStackTrace();
        return retmap;
    }

    for (DynTestDto dto : result.getResult()) {
        
    }

    retmap.put("records", result.getPageParameter().getTotalCount());
    retmap.put("page", result.getPageParameter().getPage());
    retmap.put("total", result.getPageParameter().getTotalPage());
    retmap.put("rows", result.getResult());
    return retmap;
}
            @RequestMapping(value = "/tablea1c6efb7a1ceb2428e3979b106ec2cb320db/delete", method = RequestMethod.POST)
@ResponseBody
public ModelAndView deleteTest3test1flowtableDYN_TEST(HttpServletRequest request,String ids,String tableName,String viewid,@CookieValue(value = PlatformConstant.COOKIE_CURRENT_LANGUAGE_CODE, defaultValue = PlatformConstant.D_LANGUAGE) String langcode) throws Exception {
    ModelAndView mav=new ModelAndView();

    String[] list = ids.split(",");
    for (String key : list) {
        if(!"".equals(key)){
            DynTestService.deleteDynTest(key);
            String flowId = this.bpmOperateService.getInstanceIdByFormid(key);
            this.bpmOperateService.deleteProcessInstanceCascade(flowId);

        }
    }

    mav.addObject("flag", "success");
    return mav;
}
    
}