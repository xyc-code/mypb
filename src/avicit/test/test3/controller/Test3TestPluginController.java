
package avicit.test.test3.controller;

import avicit.platform6.api.syspermissionresource.permissionanalysis.annotation.CustomBean;
import avicit.platform6.api.syspermissionresource.permissionanalysis.annotation.DataPermission;
import avicit.platform6.api.syspermissionresource.permissionanalysis.annotation.SqlParam;

import org.springframework.stereotype.Service;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.util.Assert;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.api.sysuser.*;
import avicit.platform6.expression.ExpressionParser;
import avicit.platform6.core.dao.dynamicdatasource.Dbs;
import avicit.platform6.commons.utils.FileUtil;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.sysuser.*;
import avicit.platform6.api.sysautocode.SysAutoCodeAPI;
import avicit.platform6.core.rest.client.RestClientConfig;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;

import avicit.test.test3.dto.*;
import avicit.test.test3.service.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.io.*;
import java.util.*;
import java.sql.*;

@Controller
@RequestMapping(value = "/avicit/test/Test3TestPluginController")
public class Test3TestPluginController {
	private static Logger logger = LoggerFactory.getLogger(Test3TestPluginController.class);
	private final long maxFileSize = 1024000;
	private final String uploadFileType = ".jpg, .png, .gif, .bmp";
	private static final String PHOTO_PATH="static"+FileUtil.getSep()+"images"+FileUtil.getSep()+"platform"+FileUtil.getSep()+"eform"+FileUtil.getSep()+"morentupian.png";
	
	@Autowired
	private SysUserAPI sysUserAPI;

	@Autowired
	private SysDeptAPI sysDeptAPI;

	@Autowired
	private SysGroupAPI sysGroupAPI;

	@Autowired
	private SysRoleAPI sysRoleAPI;

	@Autowired
	private SysPositionAPI sysPositionAPI;

	@Autowired
	private SysLookupAPI lookupApi;

	@Autowired
	private SysAutoCodeAPI autocodeAPI;

	@Autowired
	private org.springframework.jdbc.core.JdbcTemplate jdbcTemplate;
	
	@Autowired
	private Test3TestPluginService service;
	
		@Autowired
	private DynTestService dynTestService;
		
	//方法集合
	@RequestMapping(value = "/getMarcoValue", method = RequestMethod.POST)
@ResponseBody
public ModelAndView getMarcoValue(HttpServletRequest request) {
    ModelAndView mv = new ModelAndView();
    String exp = request.getParameter("exp");
    try {
        HashMap<String,Object> paramMaps = new HashMap<String,Object>();
        paramMaps.put("_userId", SessionHelper.getLoginSysUserId(request));
        paramMaps.put("_deptId", SessionHelper.getCurrentDeptId(request));
        paramMaps.put("_languageCode", SessionHelper.getCurrentLanguageCode());
        String value = ExpressionParser.executeRule(exp, paramMaps);
        mv.addObject("value", value);
    } catch (Exception e) {
        e.printStackTrace();
        mv.addObject("errorInfo",e.getMessage());
        return mv;
    }

    return mv;
}

	
	//用户自定义流程意见显示内容
    private String getExtension(String fileName){
        Assert.notNull(fileName);
        return fileName.substring(fileName.lastIndexOf(".")).toLowerCase();
    }
}