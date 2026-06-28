package avicit.test.test3.service;

import avicit.test.test3.service.*;
import avicit.test.test3.dao.*;
import avicit.test.test3.dto.*;

import avicit.platform6.api.commonselect.ZTreeNode;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.mybatis.pagehelper.Page;
import avicit.platform6.core.mybatis.pagehelper.PageHelper;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class Test3Test1Service {

            @Autowired
        private DynTestService DynTestService;
    
            @Autowired
        private DynTestDao DynTestDao;
    
    private static Logger logger = LoggerFactory.getLogger(Test3Test1Service.class);

    
}