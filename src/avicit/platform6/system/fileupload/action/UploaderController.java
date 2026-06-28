package avicit.platform6.system.fileupload.action;

import avicit.platform6.api.bpmbusiness.BusinessAPI;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.SysUserRoleAPI;
import avicit.platform6.api.sysuser.dto.SysRole;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.api.thirdinterface.ExtendAttachmentPermission;
import avicit.platform6.api.thirdinterface.MultiSecretInterFace;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.FileStreamType;
import avicit.platform6.commons.utils.FileUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.dao.DbUtils;
import avicit.platform6.core.dao.hibernate.CommonHibernateDao2;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.properties.PlatformProperties;
import avicit.platform6.core.redisCacheManager.CacheHelper;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.fastdfs.common.MyException;
import avicit.platform6.fastdfs.fastdfs.ClientGlobal;
import avicit.platform6.fastdfs.fastdfs.StorageClient;
import avicit.platform6.fastdfs.fastdfs.TrackerClient;
import avicit.platform6.fastdfs.fastdfs.TrackerServer;
import avicit.platform6.fastdfs.utils.FastDfsUtil;
import avicit.platform6.fastdfs.vo.FileLocation;
import avicit.platform6.modules.system.sysfileupload.domain.SysFileUpload;
import avicit.platform6.modules.system.sysfileupload.service.SwfUploadEvent;
import avicit.platform6.modules.system.sysfileupload.service.SwfUploadService;
import avicit.platform6.modules.system.sysfileupload.service.SysFileUploadService;
import avicit.platform6.modules.system.sysfileupload.util.FileEncryptUtil;
import avicit.platform6.modules.system.sysfileupload.util.FileToPDFUtil;
import avicit.platform6.modules.system.sysfileupload.util.IOUtils;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itextpdf.text.Image;
import org.apache.commons.fileupload.util.Streams;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.LobHelper;
import org.hibernate.engine.jdbc.NonContextualLobCreator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.internet.MimeUtility;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.sql.Blob;
import java.util.*;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Controller
@RequestMapping(value = "/webuploader")
public class UploaderController {
    //log日志
    private static Logger log = LoggerFactory.getLogger(UploaderController.class);
    // 静态路径
    public static final String doccenterPath = PlatformProperties.getProperty("doccenter.path");
    // 移动文件路径
    public static final String   mobileFilesPath = PlatformProperties.getProperty("mobileFiles.path");

    @Autowired
    private SwfUploadService swfUploadService;

    @Autowired
    private SysFileUploadService sysFileUploadService;

    @Autowired
    private SysLookupAPI sysLookupAPI;


    @Autowired
    private BusinessAPI businessAPI;

    @Autowired
    private SysUserAPI sysUserAPI;
    
    @Autowired
    private SysUserRoleAPI userRoleApi;


    private static final String _FILE_ENCRY_KEY = "avicit2015v6r3";

    private Lock lock = new ReentrantLock();

    private String uploaderChunkKeyPre = "platform_uploader_chunkKey_";

    /**
     * 上传附件
     *
     * @param file
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping("upload")
    @ResponseBody
    public HashMap<String, Object> upload(
            MultipartFile file,
            HttpServletRequest request) {
        HashMap<String, Object> map = new HashMap<String, Object>();

        String addTime = request.getParameter("addTime");//前台添加文件时间

        String guid = request.getParameter("guid"); //唯一标识(分片上传区分是否同一个文件)
        String formId = request.getParameter("formId");//业务数据ID
        String tableName = request.getParameter("tableName");//业务表名
        String saveType = request.getParameter("saveType");//存储类型
        String allowEncry = request.getParameter("allowEncry");//是否加密存储
        String category = request.getParameter("category");//附件类型
        String secretLevel = request.getParameter("secretLevel");//附件密级
        String nodeId = request.getParameter("nodeId");
        String markProcess = request.getParameter("markProcess");
        String elementId = request.getParameter("elementId");
        String orderBy = request.getParameter("orderBy");
        String executionId = request.getParameter("executionId");//流程指针ID
        String taskId = request.getParameter("taskId");//流程任务ID
        String  fileCategoryList = request.getParameter("fileCategoryList");//前台限制的附件类型

        //20250904 modby wenc 强制修改至存磁盘
        saveType = "Disk";

        String realPath = request.getSession().getServletContext().getRealPath("");

        if (StringUtils.isBlank(secretLevel)) {
            secretLevel = "1";
        }
        //控制附件类型保持前后台一致，如果前台没有限制上传的附件类型就从配置文件里取
        if(StringUtils.isBlank(fileCategoryList)){
            fileCategoryList=PlatformProperties.getProperty("platform.default.upload.fileTypes");
        }

        String chunk = request.getParameter("chunk");//当前分片在上传分片中的顺序（从0开始）
        String chunks = request.getParameter("chunks");//总分片数
        String size = request.getParameter("size"); //文件大小(分片的是文件总大小)
        String fileId = "";
        /*CMOS修改start */
        String addDoc = request.getParameter("addDoc");//前台添加文件时间
        if (StringUtils.isBlank(addDoc)) {
            addDoc = "0";
        }

        /**
         * 流程循环节点只能查看本分支附件
         */
        boolean foreachAttachmentAuth = false;
        try{
            //只有流程附件需要取这个配置
            if(StringUtils.isNotEmpty(taskId) && StringUtils.isNotEmpty(executionId)){
                foreachAttachmentAuth = businessAPI.getForeachAttachmentAuth(taskId);
            }
            //只有配置了 “循环节点只查看本分支附件” 才会保存executionId
            if(!foreachAttachmentAuth){
                executionId = "";
            }
        }catch (Exception e){
            log.error("获取流程循环节点是否只能查看本分支附件配置报错：",e);
        }

        try {
            String fileName = file.getOriginalFilename();
            String fileCategory=FileUtil.getFileExtensionName(fileName);
            //增加后台附件类型校验，解决上传任意文件可控制系统的安全漏洞
            Boolean isDefinitionfileCategory = true;
            if(!StringUtils.equals(fileCategoryList,"*.*")){
                if(fileCategoryList.contains(",")){
                   String[] fileCategoryArry=fileCategoryList.split(",");
                    for(String fileCateg:fileCategoryArry){
                        if(StringUtils.equals(fileCateg.toLowerCase(),fileCategory.toLowerCase())){
                            isDefinitionfileCategory=false;
                            break;
                        }
                    }
                }else{
                    if(StringUtils.equals(fileCategoryList.toLowerCase(),fileCategory.toLowerCase())){
                        isDefinitionfileCategory=false;
                    }
                }
                if(isDefinitionfileCategory){
                    map.put("result", OpResult.failure);
                    log.error("附件类型不符合规则，请重新选择附件");
                    return  map;
                }
            }

            InputStream fileInputStream = file.getInputStream();
            //分片上传
            if (chunks != null && !"".equals(chunks)) {
                saveTempDisk(guid, fileName, chunk, fileInputStream);
                String uploaderChunkKey = uploaderChunkKeyPre+guid+"_"+fileName;
                lock.lock();
                try{
                    int uploaderChunk  = 1;
                    String uploaderChunkStr = CacheHelper.getInstance().get(uploaderChunkKey);
                    if(null==uploaderChunkStr || "".equals(uploaderChunkStr)){
                        CacheHelper.getInstance().set(uploaderChunkKey, "1");
                    }else{
                        uploaderChunk = Integer.parseInt(uploaderChunkStr)+1;
                        CacheHelper.getInstance().set(uploaderChunkKey, uploaderChunk+"");
                    }
                    //最后一个分片组合
                    if (uploaderChunk == (Integer.parseInt(chunks))) {
                        //Thread.sleep(500);
                        fileId = fileMergeToSave(addTime, saveType, guid, fileName, size, chunk, chunks, formId, nodeId, tableName, secretLevel, category, markProcess, elementId,Boolean.parseBoolean(allowEncry),addDoc,realPath,orderBy,executionId);
                        CacheHelper.getInstance().del(uploaderChunkKey);
                    }
                }finally{
                    lock.unlock();
                }

            } else {
                if (saveType != null && saveType.equals("DataBase")) {
                    fileId = saveToDatabase(addTime, fileInputStream, file.getOriginalFilename(),
                            file.getSize(), formId, nodeId, tableName, secretLevel, category, markProcess, elementId,Boolean.parseBoolean(allowEncry),addDoc,orderBy,executionId);
                } else if (saveType != null && saveType.equals("Disk")) {
                    fileId = saveToDisk(addTime,fileInputStream, file.getOriginalFilename(),
                            file.getSize(), formId, nodeId, tableName, secretLevel, category, markProcess, elementId,Boolean.parseBoolean(allowEncry),addDoc,orderBy,executionId);
                } else if (saveType != null && saveType.equals("MobileDisk")) {
                    fileId = saveToMobileDisk(addTime,fileInputStream, file.getOriginalFilename(),
                            file.getSize(), formId, nodeId, tableName, secretLevel, category, markProcess, elementId,Boolean.parseBoolean(allowEncry),addDoc,realPath,orderBy,executionId);
                } else if (saveType != null && saveType.equals("Fastfds")) {
                    fileId = saveToFastfds(addTime, fileInputStream, file.getOriginalFilename(),
                            file.getSize(), formId, nodeId, tableName, secretLevel, category, markProcess, elementId,Boolean.parseBoolean(allowEncry),addDoc,orderBy,executionId);
                } else {
                    fileId = saveToOther(addTime, fileInputStream, file.getOriginalFilename(),
                            file.getSize(), formId, nodeId, tableName, secretLevel, category, markProcess, elementId,addDoc,orderBy,executionId);
                }
            }

            map.put("result", OpResult.success);
        } catch (Exception e) {
            map.put("result", OpResult.failure);
            log.error("upload上传附件错误:", e);
        }
        map.put("fileId", fileId);
        return map;
    }

    /**
     * 分片上传到临时文件上
     *
     * @param guid     唯一标识
     * @param fileName 文件名称
     * @param chunk    分片序号，从0开始
     * @param in       输入流
     * @throws IOException
     */
    private void saveTempDisk(String guid, String fileName, String chunk, InputStream in)
            throws IOException {
        File uploadDir = new File(UploaderController.doccenterPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }
        String tempPath = FileUtil.getDoccenterDir(uploadDir.getAbsolutePath(), "temp", guid)
                + FileUtil.getSep() + fileName + chunk;
        OutputStream out = new FileOutputStream(new File(tempPath));
        try {
            Streams.copy(in, out, true);
        } finally {
            in.close();
            out.close();
        }
    }

    /**
     * 分片上传组合临时文件后保存
     *
     * @param saveType
     * @param guid
     * @param fileName
     * @param size
     * @param chunk
     * @param chunks
     * @param formId
     * @param nodeId
     * @param tableName
     * @param secretLevel
     * @param category
     * @param markProcess
     * @return
     * @throws Exception
     */
    private String fileMergeToSave(
            String addTime,
            String saveType,
            String guid,
            String fileName,
            String size,
            String chunk,
            String chunks,
            String formId,
            String nodeId,
            String tableName,
            String secretLevel,
            String category,
            String markProcess,
            String elementId,boolean _encry,
            String addDoc,
            String rearPath,
            String orderBy,
            String executionId) throws Exception {

        String fileId = "";
        File uploadDir = new File(UploaderController.doccenterPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }
        try {
            long fileSize = Long.parseLong(size);

            Vector<InputStream> fileVector = new Vector<InputStream>();
            for (int i = 0; i < Integer.parseInt(chunks); i++) {
                String tempPath = FileUtil.getDoccenterDir(uploadDir.getAbsolutePath(), "temp", guid)
                        + FileUtil.getSep() + fileName + i;
                fileVector.add(new FileInputStream(new File(tempPath)));
            }
            Enumeration<InputStream> en = fileVector.elements();
            SequenceInputStream sis = new SequenceInputStream(en);

            if (saveType != null && saveType.equals("DataBase")) {
                fileId = saveToDatabase(addTime, sis, fileName,
                        fileSize, formId, nodeId, tableName, secretLevel, category, markProcess, elementId,_encry,addDoc,orderBy,executionId);
            } else if (saveType != null && saveType.equals("Disk")) {
                fileId = saveToDisk(addTime, sis, fileName,
                        fileSize, formId, nodeId, tableName, secretLevel, category, markProcess, elementId,_encry,addDoc,orderBy,executionId);
            } else if (saveType != null && saveType.equals("MobileDisk")) {
                fileId = saveToMobileDisk(addTime, sis, fileName,
                        fileSize, formId, nodeId, tableName, secretLevel, category, markProcess, elementId,_encry,addDoc,rearPath,orderBy,executionId);
            } else if (saveType != null && saveType.equals("Fastfds")) {
                fileId = saveToFastfds(addTime, sis, fileName,
                        fileSize, formId, nodeId, tableName, secretLevel, category, markProcess, elementId,_encry,addDoc,orderBy,executionId);
            } else {
                fileId = saveToOther(addTime, sis, fileName,
                        fileSize, formId, nodeId, tableName, secretLevel, category, markProcess, elementId,addDoc,orderBy,executionId);
            }
        } finally {

            //删除临时文件
            for (int i = 0; i < Integer.parseInt(chunks); i++) {
                String tempPath2 = FileUtil.getDoccenterDir(uploadDir.getAbsolutePath(), "temp", guid)
                        + FileUtil.getSep() + fileName + i;
                File tempFile = new File(tempPath2);
                if (tempFile.exists()) {
                    tempFile.delete();
                }
            }
            File tempFolder = FileUtil.getDoccenterDir(uploadDir.getAbsolutePath(), "temp", guid);
            if (tempFolder.exists()) {
                tempFolder.delete();
            }
        }
        return fileId;
    }

    /**
     * 存储到数据库
     *
     * @param in
     * @param fileName
     * @param fileSize
     * @param formId
     * @param nodeId
     * @param tableName
     * @param secretLevel
     * @param category
     * @param markProcess
     * @return
     */
    private String saveToDatabase(
            String addTime,
            InputStream in,
            String fileName,
            long fileSize,
            String formId,
            String nodeId,
            String tableName,
            String secretLevel,
            String category,
            String markProcess,
            String elementId,
            boolean _encry,
            String addDoc,
            String orderBy,
            String executionId) throws Exception {

        String fileId = null;
        try {
            CommonHibernateDao2 hibernateDao = SpringFactory.getBean(CommonHibernateDao2.class);
            LobHelper lobHelper = hibernateDao.getSession().getLobHelper();
            if (in != null && fileName != null) {
                SysFileUpload sysFileUpload = new SysFileUpload();
                sysFileUpload.setId(ComUtil.getId());
                sysFileUpload.setFILE_NAME(fileName);
                sysFileUpload.setFILE_BUSINESS_ID(formId);
                sysFileUpload.setATTRIBUTE_01(nodeId);
                sysFileUpload.setFILE_BUSINESS_TABLE_NAME(tableName);
                sysFileUpload.setFILE_SIZE(fileSize);
                sysFileUpload.setFILE_TYPE(FileUtil.getFileExtensionName(fileName));
                sysFileUpload.setATTACH_CATEGORY(category);
                sysFileUpload.setSECRET_LEVEL(secretLevel);
                sysFileUpload.setElementId(elementId);
                sysFileUpload.setATTRIBUTE_03(addDoc);
                sysFileUpload.setOrderBy(orderBy);
                sysFileUpload.setExecutionId(executionId);
                if (_encry) {
                    in = FileEncryptUtil.uploadAes128FileByStream(in, _FILE_ENCRY_KEY);
                }

                Blob fileBody;
                if ("sqlserver2008".equals(DbUtils.getDbType())) {
                    fileBody = NonContextualLobCreator.INSTANCE.createBlob(in, fileSize);
                } else {
                    fileBody = lobHelper.createBlob(in, fileSize);
                }
                sysFileUpload.setFILE_BODY(fileBody);

                if ("1".equals(markProcess)) {
                    sysFileUpload.setATTRIBUTE_02("1");
                }

                //手动设置上传时间为前台添加时间，用于排序
                sysFileUpload.setCreationDate(new Date(Long.valueOf(addTime)));
                sysFileUploadService.insertSysFileUpload(sysFileUpload);
                SwfUploadEvent swfUploadEvent = swfUploadService.getAfterEvent();
                if (swfUploadEvent != null) {
                    swfUploadEvent.afterSaveFileByDB(sysFileUpload);
                }
                fileId = sysFileUpload.getId();
            }
        } catch (Exception e) {
            log.error("saveToDatabase错误：", e);
            throw e;
        }
        return fileId;
    }

    /**
     * 存储到磁盘
     *
     * @param in
     * @param fileName
     * @param fileSize
     * @param formId
     * @param nodeId
     * @param tableName
     * @param secretLevel
     * @param category
     * @param markProcess
     * @return
     * @throws IOException
     */
    private String saveToDisk(
            String addTime,
            InputStream in,
            String fileName,
            long fileSize,
            String formId,
            String nodeId,
            String tableName,
            String secretLevel,
            String category,
            String markProcess,
            String elementId,
            boolean _encry,
            String addDoc,
            String orderBy,
            String executionId) throws Exception {
        String fileId = null;

        File uploadDir;
        if (secretLevel.isEmpty()) {
            uploadDir = new File(UploaderController.doccenterPath);
        } else {
            uploadDir = new File(UploaderController.doccenterPath + FileUtil.getSep() + "SECRETLEVEL_" + secretLevel);
        }
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }
        String _encryFileName = fileName;
        if (in != null && fileName != null) {
            if (_encry) {
                in = FileEncryptUtil.uploadAes128FileByStream(in, _FILE_ENCRY_KEY);
                _encryFileName = FileEncryptUtil.uploadAes128FileByString(fileName,_FILE_ENCRY_KEY);
            }
            String filePath = FileUtil.getDoccenterDir(uploadDir.getAbsolutePath(),tableName, formId) + FileUtil.getSep() + _encryFileName;
            OutputStream out = new FileOutputStream(new File(filePath));
            try {
                Streams.copy(in, out, true);
            } finally {
                in.close();
                out.close();
            }

            SysFileUpload sysFileUpload = new SysFileUpload();
            sysFileUpload.setId(ComUtil.getId());
            sysFileUpload.setFILE_NAME(fileName);
            sysFileUpload.setFILE_BUSINESS_ID(formId);
            sysFileUpload.setATTRIBUTE_01(nodeId);
            sysFileUpload.setFILE_BUSINESS_TABLE_NAME(tableName);
            sysFileUpload.setFILE_SIZE(fileSize);
            sysFileUpload.setFILE_TYPE(FileUtil.getFileExtensionName(fileName));
            sysFileUpload.setFILE_URL(filePath);
            sysFileUpload.setATTACH_CATEGORY(category);
            sysFileUpload.setSECRET_LEVEL(secretLevel);
            sysFileUpload.setElementId(elementId);
            sysFileUpload.setATTRIBUTE_03(addDoc);
            sysFileUpload.setOrderBy(orderBy);
            sysFileUpload.setExecutionId(executionId);
            if ("1".equals(markProcess)) {
                sysFileUpload.setATTRIBUTE_02("1");
            }

            //手动设置上传时间为前台添加时间，用于排序
            sysFileUpload.setCreationDate(new Date(Long.valueOf(addTime)));
            sysFileUploadService.insertSysFileUpload(sysFileUpload);
            SwfUploadEvent swfUploadEvent = swfUploadService.getAfterEvent();
            if (swfUploadEvent != null) {
                swfUploadEvent.afterSaveFileByDisk(sysFileUpload, in);
            }
            fileId = sysFileUpload.getId();
        }

        return fileId;
    }

    /**
     * 存储到移动磁盘
     *
     * @param in
     * @param fileName
     * @param fileSize
     * @param formId
     * @param nodeId
     * @param tableName
     * @param secretLevel
     * @param category
     * @param markProcess
     * @return
     * @throws IOException
     */
    private String saveToMobileDisk(
            String addTime,
            InputStream in,
            String fileName,
            long fileSize,
            String formId,
            String nodeId,
            String tableName,
            String secretLevel,
            String category,
            String markProcess,
            String elementId,
            boolean _encry,
            String addDoc,
            String realPath,
            String orderBy,
            String executionId) throws Exception {
        String fileId = null;
        char[] Firstchar =new char[1];
        Firstchar[0] = realPath.charAt(0);
        if (Firstchar[0] >= 'A' && Firstchar[0] <= 'Z') {
            realPath = realPath.replaceFirst(new String(Firstchar), new String(Firstchar).toLowerCase());	//磁盘名称小写
        }
        //项目中移动文件保存路径
        realPath = realPath + UploaderController.mobileFilesPath;

        File uploadDir;
        if (secretLevel.isEmpty()) {
            uploadDir = new File(realPath);
        } else {
            uploadDir = new File(realPath + FileUtil.getSep() + "SECRETLEVEL_" + secretLevel);
        }
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }
        String _encryFileName = fileName;
        if (in != null && fileName != null) {
            if (_encry) {
                in = FileEncryptUtil.uploadAes128FileByStream(in, _FILE_ENCRY_KEY);
                _encryFileName = FileEncryptUtil.uploadAes128FileByString(fileName,_FILE_ENCRY_KEY);
            }
            String filePath = FileUtil.getDoccenterDir(uploadDir.getAbsolutePath(),tableName, formId) + FileUtil.getSep() + _encryFileName;
            OutputStream out = new FileOutputStream(new File(filePath));
            try {
                Streams.copy(in, out, true);
            } finally {
                in.close();
                out.close();
            }

            SysFileUpload sysFileUpload = new SysFileUpload();
            sysFileUpload.setId(ComUtil.getId());
            sysFileUpload.setFILE_NAME(fileName);
            sysFileUpload.setFILE_BUSINESS_ID(formId);
            sysFileUpload.setATTRIBUTE_01(nodeId);
            sysFileUpload.setFILE_BUSINESS_TABLE_NAME(tableName);
            sysFileUpload.setFILE_SIZE(fileSize);
            sysFileUpload.setFILE_TYPE(FileUtil.getFileExtensionName(fileName));
            sysFileUpload.setFILE_URL(filePath);
            sysFileUpload.setATTACH_CATEGORY(category);
            sysFileUpload.setSECRET_LEVEL(secretLevel);
            sysFileUpload.setElementId(elementId);
            sysFileUpload.setATTRIBUTE_03(addDoc);
            sysFileUpload.setOrderBy(orderBy);
            sysFileUpload.setExecutionId(executionId);
            if ("1".equals(markProcess)) {
                sysFileUpload.setATTRIBUTE_02("1");
            }

            //手动设置上传时间为前台添加时间，用于排序
            sysFileUpload.setCreationDate(new Date(Long.valueOf(addTime)));
            sysFileUploadService.insertSysFileUpload(sysFileUpload);
            SwfUploadEvent swfUploadEvent = swfUploadService.getAfterEvent();
            if (swfUploadEvent != null) {
                swfUploadEvent.afterSaveFileByDisk(sysFileUpload, in);
            }
            fileId = sysFileUpload.getId();
        }

        return fileId;
    }

    /**
     * 存储到Fastdfs
     *
     * @param in
     * @param fileName
     * @param fileSize
     * @param formId
     * @param nodeId
     * @param tableName
     * @param secretLevel
     * @param category
     * @param markProcess
     * @return
     * @throws Exception
     */
    private String saveToFastfds(
            String addTime,
            InputStream in,
            String fileName,
            long fileSize,
            String formId,
            String nodeId,
            String tableName,
            String secretLevel,
            String category,
            String markProcess,
            String elementId,
            boolean _encry,
            String addDoc,
            String orderBy,
            String executionId) throws Exception {

        String fileId = null;
        if (in != null && fileName != null) {
            SysFileUpload sysFileUpload = new SysFileUpload();
            sysFileUpload.setId(ComUtil.getId());
            sysFileUpload.setFILE_NAME(fileName);
            sysFileUpload.setFILE_BUSINESS_ID(formId);
            sysFileUpload.setATTRIBUTE_01(nodeId);
            sysFileUpload.setFILE_BUSINESS_TABLE_NAME(tableName);
            sysFileUpload.setFILE_SIZE(fileSize);
            sysFileUpload.setFILE_TYPE(FileUtil.getFileExtensionName(fileName));
            sysFileUpload.setATTACH_CATEGORY(category);
            sysFileUpload.setSECRET_LEVEL(secretLevel);
            sysFileUpload.setElementId(elementId);
            sysFileUpload.setATTRIBUTE_03(addDoc);
            sysFileUpload.setOrderBy(orderBy);
            sysFileUpload.setExecutionId(executionId);
            String res = null;
            if (_encry) {
                res = FastDfsUtil.uploadAes128FileByStream(in, fileName, FileUtil.getFileExtensionName(fileName), fileSize, _FILE_ENCRY_KEY);
            } else {
                res = FastDfsUtil.uploadFileByStream(in, fileName, FileUtil.getFileExtensionName(fileName), fileSize);
            }

            sysFileUpload.setFastfdsLocation(res);
            if ("1".equals(markProcess)) {
                sysFileUpload.setATTRIBUTE_02("1");
            }

            //手动设置上传时间为前台添加时间，用于排序
            sysFileUpload.setCreationDate(new Date(Long.valueOf(addTime)));

            sysFileUploadService.insertSysFileUpload(sysFileUpload);
            fileId = sysFileUpload.getId();
        }
        return fileId;
    }

    /**
     * 其他情况，其它，如mongdb
     *
     * @param in
     * @param fileName
     * @param fileSize
     * @param formId
     * @param nodeId
     * @param tableName
     * @param secretLevel
     * @param category
     * @param markProcess
     * @return
     */
    private String saveToOther(
            String addTime,
            InputStream in,
            String fileName,
            long fileSize,
            String formId,
            String nodeId,
            String tableName,
            String secretLevel,
            String category,
            String markProcess,
            String elementId,
            String addDoc,
            String orderBy,
            String executionId) {

        String fileId = null;
        CommonHibernateDao2 hibernateDao = SpringFactory.getBean(CommonHibernateDao2.class);
        LobHelper lobHelper = hibernateDao.getSession().getLobHelper();
        if (in != null && fileName != null) {
            SysFileUpload sysFileUpload = new SysFileUpload();
            sysFileUpload.setId(ComUtil.getId());
            sysFileUpload.setFILE_NAME(fileName);
            sysFileUpload.setFILE_BUSINESS_ID(formId);
            sysFileUpload.setATTRIBUTE_01(nodeId);
            sysFileUpload.setFILE_BUSINESS_TABLE_NAME(tableName);
            sysFileUpload.setFILE_SIZE(fileSize);
            sysFileUpload.setFILE_TYPE(FileUtil.getFileExtensionName(fileName));
            sysFileUpload.setATTACH_CATEGORY(category);
            sysFileUpload.setSECRET_LEVEL(secretLevel);
            sysFileUpload.setElementId(elementId);
            sysFileUpload.setATTRIBUTE_03(addDoc);
            sysFileUpload.setOrderBy(orderBy);
            sysFileUpload.setExecutionId(executionId);
            Blob fileBody = lobHelper.createBlob(in, fileSize);
            sysFileUpload.setFILE_BODY(fileBody);
            if ("1".equals(markProcess)) {
                sysFileUpload.setATTRIBUTE_02("1");
            }

            //手动设置上传时间为前台添加时间，用于排序
            sysFileUpload.setCreationDate(new Date(Long.valueOf(addTime)));

            sysFileUploadService.insertSysFileUpload(sysFileUpload);
            SwfUploadEvent swfUploadEvent = swfUploadService.getAfterEvent();
            if (swfUploadEvent != null) {
                swfUploadEvent.afterSaveFileByOther(sysFileUpload, in);
            }
            fileId = sysFileUpload.getId();
        }
        return fileId;

    }

    /**
     * 获取已存附件列表，附件类型选项，附件密级选项等信息
     *
     * @param request
     * @return
     * @throws IOException
     */
    @RequestMapping(value = "/getInfos")
    @ResponseBody
    public Map<String, Object> getInfos(HttpServletRequest request) {
        String formId = request.getParameter("formId");
        /*CMOS修改start*/
        if(null == formId||formId.equals("")||formId.equals("null")){
            formId="-1";
        }
        /*CMOS修改end */
        String elementId = request.getParameter("elementId");
        String attIds = request.getParameter("attIds");
        String fileCategory = request.getParameter("fileCategory");
        String secretLevel = request.getParameter("secretLevel");
        //流程指针ID
        String executionId = request.getParameter("executionId");
        //流程任务ID
        String taskId = request.getParameter("taskId");
        String appId = SessionHelper.getApplicationId();
        String lang = SessionHelper.getCurrentUserLanguageCode(request);
        SysUser sysUser = SessionHelper.getLoginSysUser(request);

        Map<String, Object> infosMap = new HashMap<String, Object>();
       try{
        //获取已存附件
        List<SysFileUpload> fileList;
        if (StringUtils.isNotBlank(attIds)) {
            String[] attIdArray = attIds.split(",");
            fileList = swfUploadService.getAttachByAttIds(Arrays.asList(attIdArray));
        } else {
            if (StringUtils.isBlank(elementId)) {
                fileList = swfUploadService.getFileListByFormId(formId);
            } else {
                fileList = swfUploadService.getFileListByFormId(formId, elementId);
            }
        }
        /**
        * 流程循环节点只能查看本分支附件
        */
        boolean foreachAttachmentAuth = false;
        try{
            //只有流程附件需要取这个配置
            if(StringUtils.isNotEmpty(taskId) && StringUtils.isNotEmpty(executionId)){
                foreachAttachmentAuth = businessAPI.getForeachAttachmentAuth(taskId);
            }
        }catch (Exception e){
           log.error("获取流程循环节点是否只能查看本分支附件配置报错：",e);
        }

        List<Map<String, Object>> newFileList = new ArrayList<Map<String, Object>>();
        for (SysFileUpload sysFileUpload : fileList) {
            //配置了 “循环节点只查看本分支附件”，并且附件表中指针字段有值
            if(foreachAttachmentAuth && StringUtils.isNotEmpty(sysFileUpload.getExecutionId())){
                //当前任务的指针跟附件指针不一致则不能查看该附件
                if(!executionId.equals(sysFileUpload.getExecutionId())){
                    continue;
                }
            }
            Map<String, Object> fileMap = new HashMap<String, Object>();

            String category = sysFileUpload.getATTACH_CATEGORY();
            String categoryName = sysLookupAPI.getNameByLooupTypeCodeAndLooupCode(fileCategory, category);

            String secret = sysFileUpload.getSECRET_LEVEL();
            String secretName = sysLookupAPI.getNameByLooupTypeCodeAndLooupCode(secretLevel, secret);

            fileMap.put("fileId", sysFileUpload.getId());
            fileMap.put("name", sysFileUpload.getFILE_NAME());
            fileMap.put("size", sysFileUpload.getFILE_SIZE());
            fileMap.put("ext", sysFileUpload.getFILE_TYPE());
            fileMap.put("category", category);
            fileMap.put("categoryName", categoryName);
            fileMap.put("secret", secret);
            fileMap.put("secretName", secretName);
            //table展示时需要展示上传时间和上传人，增加返回的信息
            fileMap.put("creatTime", sysFileUpload.getCreationDate());
            fileMap.put("creatBy", sysUserAPI.getSysUserById(sysFileUpload.getCreatedBy()).getName());
            fileMap.put("orderBy", sysFileUpload.getOrderBy());

            fileMap.put("addDoc", sysFileUpload.getATTRIBUTE_03());
            fileMap.put("id", sysFileUpload.getFILE_BUSINESS_TABLE_FIELD());
            newFileList.add(fileMap);
        }
        //获取附件类型
        Collection<SysLookupSimpleVo> fileCategoryList = sysLookupAPI.getLookUpListByTypeByAppIdWithLg(fileCategory, appId, lang);
        //获取附件密级(根据登录人的人员密级再过滤)
        /*CMOS修改start*/
        String userSecretLevel = (sysUser.getSecretLevel() == null ? "1" : sysUser.getSecretLevel());
        /*CMOS修改end */
        Collection<SysLookupSimpleVo> secretLevelList = sysLookupAPI.getLookUpListByTypeByAppIdWithLg(secretLevel, appId, lang);
        Collection<SysLookupSimpleVo> newSecretLevelList = new ArrayList<SysLookupSimpleVo>();
        for (SysLookupSimpleVo sysLookupSimpleVo : secretLevelList) {
            if (sysLookupAPI.isRelation(sysLookupSimpleVo.getLookupCode(), userSecretLevel)) {
                newSecretLevelList.add(sysLookupSimpleVo);
            }
        }

        infosMap.put("fileList", newFileList);
        infosMap.put("fileCategoryList", fileCategoryList);
        infosMap.put("secretLevelList", newSecretLevelList);
     }catch(Exception e){
          log.error("getInfos", e);
     }
       return infosMap;
    }

    /**
     * 删除一个附件
     *
     * @param request
     * @return
     * @throws IOException
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public boolean delete(HttpServletRequest request, HttpServletResponse response) {
        String fileId = request.getParameter("fileId");
        try {
            SysFileUpload file = swfUploadService.getAttachById(fileId);
            if (file != null) {
                String userSecretLevel = SessionHelper.getLoginSysUser(request).getSecretLevel();
                userSecretLevel = (userSecretLevel == null ? "1" : userSecretLevel);

                if (userSecretLevel != null && file.getSECRET_LEVEL() != null && !file.getSECRET_LEVEL().equals("0")
                        && !userSecretLevel.trim().equals("")
                        && !file.getSECRET_LEVEL().trim().equals("")) {

                    if (!sysLookupAPI.isRelation(file.getSECRET_LEVEL(), userSecretLevel)) {
                        response.setCharacterEncoding("UTF-8");
                        PrintWriter p = response.getWriter();
                        p.write("<script>alert('不能删除高于当前用户密级的附件！');</script>");
                        p.close();
                        return false;
                    }
                }

                String filePath = file.getFILE_URL();
                String fastfdsLocation = file.getFastfdsLocation();

                swfUploadService.deleteAttachById(fileId);

                if (fastfdsLocation != null && !"".equals(fastfdsLocation)) {
                    //来自fastdfs的文件
                    FastDfsUtil.deleteFile(fastfdsLocation);
                } else if (filePath != null && !"".equals(filePath)) {
                    //来自物理存储的文件(磁盘),删除文件和父文件夹(如果里面没有文件)

                    if (null != swfUploadService.getAfterEvent()) {
                        swfUploadService.getAfterEvent().afterDelFileByDisk(file);
                    }

                    File tempFile = new File(filePath);
                    if (tempFile.exists()) {
                        File parentFile = tempFile.getParentFile();
                        File groupFile = parentFile.getParentFile();

                        tempFile.delete();

                        if (parentFile.list().length == 0) {
                            parentFile.delete();
                        }

                        if (groupFile.list().length == 0) {
                            groupFile.delete();
                        }
                    }
                } else {
                    //来自数据库
                    if (null != swfUploadService.getAfterEvent()) {
                        swfUploadService.getAfterEvent().afterDelFileByDB(file);
                        swfUploadService.getAfterEvent().afterDelFileByOther(file);
                    }
                }
            }
        } catch (Exception e) {
            log.error("delete删除附件错误：", e);
            return false;
        }

        return true;
    }

    /**
     * 下载附件
     *
     * @param request
     * @param response
     */
    @RequestMapping(value = "/download")
    public void download(HttpServletRequest request, HttpServletResponse response) {
        String fileId = request.getParameter("fileId");
        String _allowEncry = request.getParameter("allowEncry");
        try {
            SysFileUpload file = swfUploadService.getAttachById(fileId);
            if(file == null){
                response.setCharacterEncoding("UTF-8");
                PrintWriter p = response.getWriter();
                p.write("<script>alert('下载文件已不存在！');</script>");
                p.close();
                return ;
            }
            StringBuilder errorMsg = new StringBuilder();

            if(!validatePermission(file, request,errorMsg)){
                response.setCharacterEncoding("UTF-8");
                PrintWriter p = response.getWriter();
                p.write("<script>alert('"+errorMsg.toString()+"');</script>");
                p.close();
                return;
            }


            String fileName = file.getFILE_NAME();
            String ext = file.getFILE_TYPE();
            long fileSize = file.getFILE_SIZE();
            String contentType = "application/octet-stream";
            String agent = request.getHeader("USER-AGENT");
            contentType = FileStreamType.getStreamType(ext);
            response.setContentType(contentType);
            response.setHeader("Content-disposition", "attachment;filename=\"" + getFileName(fileName.replace(",", "_"), agent) + "\"");
            if (fileSize > 0) {
                response.setHeader("Content-Length", String.valueOf(fileSize));
            }

            //记录日志
            SysLogUtil.log("附件管理模块", SessionHelper.getLoginSysUser(request).getLoginName() + "下载附件：" + fileName,
                    PlatformConstant.OpType.select, OpResult.success);

            writeToOutputStream(_allowEncry,file,response.getOutputStream());

        } catch (Exception e) {
            log.error("download下载附件出错:", e);
        }
    }


    /**
     * 下载一组附件
     */
    @RequestMapping(value = "/multidownload")
    public void multiDownload(HttpServletRequest request, HttpServletResponse response) {
        String fileIds = request.getParameter("fileIds");
        JsonHelper jsonHelper = JsonHelper.getInstance();
        String[] fileIdArray = jsonHelper.readValue(fileIds, String[].class);
        String _allowEncry = request.getParameter("allowEncry");

        String tempDirName = UUID.randomUUID().toString();
        String rootPath = request.getSession().getServletContext().getRealPath("/");

        List<String> downloadFileNames = new ArrayList<String>();

        String currentPath =  rootPath + tempDirName + File.separator ;
        File currentPathFile = new File(currentPath);
        currentPathFile.mkdirs();

        for(String fileId: fileIdArray){
            // 单个文件的逻辑与 download 一致
            FileOutputStream currentOutStream = null;
            try {
                SysFileUpload file = swfUploadService.getAttachById(fileId);
                if (file != null) {
                    StringBuilder errorMsg = new StringBuilder();
                    if(!validatePermission(file, request, errorMsg)){
                        log.error(errorMsg.toString());
                        continue;
                    }

                    // 下载到服务器，记录文件名
                    String fileName = file.getFILE_NAME();
                    downloadFileNames.add(fileName);
                    String ext = file.getFILE_TYPE();
                    File currentFile = new File(currentPath  + fileName );
                    int cnt = 1;
                    while(currentFile.exists()){
                        // 同名文件处理规则 filename_1.ext, filename_2.ext ...
                        StringBuilder sb = new StringBuilder(fileName);
                        sb.insert(sb.lastIndexOf(ext)-1, "_"+ cnt++);
                        currentFile = new File(currentPath  + sb.toString() );
                    }
                    currentFile.createNewFile();
                    currentOutStream = new FileOutputStream(currentFile);

                    writeToOutputStream(_allowEncry, file, currentOutStream);


                } else {
                    log.error("下载文件已不存在");
                    continue;
                }
            } catch (Exception e) {
                log.error("download下载附件出错:", e);
            }
            finally {
                if(currentOutStream != null){
                    try{
                        currentOutStream.close();
                    }catch (IOException e){
                        e.printStackTrace();
                    }
                }
            }
        }

        if(!currentPathFile.exists() || currentPathFile.list().length == 0){
            try{
                response.setCharacterEncoding("UTF-8");
                PrintWriter p = response.getWriter();
                p.write("<script>alert('不允许下载当前附件');</script>");
                p.close();
            }catch (IOException e){
                log.error("下载附件出错:", e);
            }
            deleteTempFile(new File[]{currentPathFile});
            return;
        }

        File[] fileArr = currentPathFile.listFiles();

        String zipFileName = tempDirName + ".zip";
        File zipFile = new File(rootPath + zipFileName);
        ZipOutputStream zipOutputStream = null;
        boolean zipDone = false;
        try{
            zipOutputStream = new ZipOutputStream(new FileOutputStream(zipFile));
            zipFile(Arrays.asList(fileArr), zipOutputStream);
            zipDone = true;
        }catch (Exception e){
            log.error("打包附件出错:", e);
        }finally {
            if(zipOutputStream != null){
                try{
                    zipOutputStream.close();

                }catch (IOException e){
                    e.printStackTrace();
                }
            }
            //  删除文件及文件夹
            for(File file: fileArr){
                file.delete();
            }
            currentPathFile.delete();
        }
        // 如果压缩过程中出现异常，删除创建的压缩文件
        if(!zipDone){
            try{
                response.setCharacterEncoding("UTF-8");
                PrintWriter p = response.getWriter();
                p.write("<script>alert('下载全部附件出错');</script>");
                p.close();
                deleteTempFile(new File[]{currentPathFile, zipFile});
                return;
            }catch (IOException e){
                log.error("下载全部附件出错:", e);
            }
        }


        String downloadName = "下载.zip";
        response.setCharacterEncoding("UTF-8");
        String agent = request.getHeader("USER-AGENT");
        try{
            if(agent != null && agent.toLowerCase().indexOf("firefox") > 0)
            {
                response.setHeader("Content-Disposition", "attachment; filename="+ new String(downloadName.getBytes("GB2312"),"ISO-8859-1"));
            }else {
                response.setHeader("Content-disposition", "attachment;filename=" + URLEncoder.encode(downloadName, "utf-8"));
            }
            response.setContentLength((int) zipFile.length());
            response.setContentType("application/zip");// 定义输出类型
            FileInputStream fis = new FileInputStream(zipFile);
            BufferedInputStream buff = new BufferedInputStream(fis);
            byte[] b = new byte[1024];// 相当于我们的缓存
            long k = 0;// 该值用于计算当前实际下载了多少字节
            OutputStream myout = response.getOutputStream();// 从response对象中得到输出流,准备下载
            // 开始循环下载
            while (k < zipFile.length()) {
                int j = buff.read(b, 0, 1024);
                k += j;
                myout.write(b, 0, j);
            }
            myout.flush();
            buff.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        deleteTempFile(new File[]{currentPathFile, zipFile});
        //记录日志
        SysLogUtil.log("附件管理模块", SessionHelper.getLoginSysUser(request).getLoginName() + "下载附件：" + downloadFileNames.toString(),
                PlatformConstant.OpType.select, OpResult.success);
    }

    /**
     * 下载附件
     *
     * @param request
     * @param response
     */
    @RequestMapping(value = "/EditInfo")
    @ResponseBody
    public boolean editFileSecret(HttpServletRequest request, HttpServletResponse response) {
        String formId = request.getParameter("formId"); //业务数据ID
        String fileId = request.getParameter("fileId"); //附件id
        String secretLevel = request.getParameter("secretLevel");//附件密级
         String orderBy = request.getParameter("orderBy");//排序号
        try {
            SysFileUpload sysFileUpload = sysFileUploadService.getSysFileUploadById(fileId);
            sysFileUpload.setId(fileId);
            sysFileUpload.setFILE_BUSINESS_ID(formId);
            sysFileUpload.setSECRET_LEVEL(secretLevel);
            sysFileUpload.setOrderBy(orderBy);
            sysFileUploadService.updateSysFileUpload(sysFileUpload);
            return true;
        } catch (Exception e) {
            log.error("editFileSecret修改密级失败：", e);
            return false;
        }
    }

    /**
     * 删除在服务器创建的临时文件
     * @param files
     */
    private void deleteTempFile(File[] files ){
        for(File file: files){
            if(!file.exists()){
                continue;
            }

            if(file.isDirectory()){
                File[] subFile = file.listFiles();
                deleteTempFile(subFile);
            }
            file.delete();
        }
    }

    /**
     * 获取下载附件的文件名称
     *
     * @param fileName
     * @param agent
     * @return
     */
    private String getFileName(String fileName, String agent) {
        String codedfilename = fileName;
        try {
            if (agent != null && agent.indexOf("Mozilla") != -1
                    && agent.indexOf("Android") != -1) {// Mozilla..
                try {
                    codedfilename = URLEncoder.encode(fileName, "UTF-8");
                } catch (Exception e) {
                    codedfilename = fileName;
                }
            } else if (agent.toLowerCase().indexOf("msie") != -1){
                codedfilename = URLEncoder.encode(fileName, "utf-8");
            }else if (agent.toLowerCase().indexOf("safari") != -1) {// Safari浏览器，只能采用ISO编码的中文输出
                codedfilename = new String(codedfilename.getBytes("GBK"), "ISO8859-1");
            } else if (agent.toLowerCase().indexOf("chrome") != -1) {// Chrome浏览器，只能采用MimeUtility编码或ISO编码的中文输出
                codedfilename = MimeUtility.encodeText(codedfilename, "UTF8", "B");
            }
            // FireFox浏览器，可以使用MimeUtility或filename*或ISO编码的中文输出
            else if (agent != null
                    && agent.toLowerCase().indexOf("mozilla") != -1
                    && agent.toLowerCase().indexOf("firefox") != -1) {// ff,mozilla..
                codedfilename = MimeUtility.encodeText(fileName, "GBK", "B");
            } else {// ie,opera..
                // if (Charset.defaultCharset().name().indexOf("GBK") != -1) {
                //     codedfilename = new String(fileName.getBytes(), "ISO8859_1");
                // } else {
                codedfilename = URLEncoder.encode(fileName, "utf-8");
                // }
            }
        } catch (Exception e) {
            log.error("getFileName", e);
        }
        return codedfilename;
    }

    @RequestMapping(value = "/validDownload")
    @ResponseBody
    public Map<String, String> validDownload(HttpServletRequest request, HttpServletResponse response) {
        Map<String, String> result = new HashMap<String, String>();
        String fileId = request.getParameter("fileId");
        
        try {
            SysFileUpload file = swfUploadService.getAttachById(fileId);
            if (file != null) {
                String userSecretLevel = SessionHelper.getLoginSysUser(request).getSecretLevel();
                userSecretLevel = (userSecretLevel == null ? "1" : userSecretLevel);

                if (userSecretLevel != null && file.getSECRET_LEVEL() != null && !file.getSECRET_LEVEL().equals("0") && !userSecretLevel.trim().equals("") && !file.getSECRET_LEVEL().trim().equals("")) {

                    if (!sysLookupAPI.isRelation(file.getSECRET_LEVEL(), userSecretLevel)) {
                        result.put("msg", "false");
                        return result;
                    }

                    //跨密级附件权限
                    Collection<MultiSecretInterFace> multiSecretInterFaces = SpringFactory.getApplicationContext().getBeansOfType(MultiSecretInterFace.class).values();
                    for(MultiSecretInterFace multiSecretInterFace : multiSecretInterFaces) {
                        boolean _flg = multiSecretInterFace.doDownFile(SessionHelper.getLoginSysUserId(request), file.getSECRET_LEVEL(), fileId);
                        if(!_flg){
                            result.put("msg", "false");
                            return result;
                        }
                    }
                }

                //流程节点是否配置某些密级不能下载
                String taskName = request.getParameter("_taskName");
                String entryId = request.getParameter("_entryId");
                if(entryId != null && !entryId.equals("") && taskName != null && !taskName.equals("")){
                    boolean flg = businessAPI.getFileDownSecret(entryId,taskName,file.getSECRET_LEVEL(),userSecretLevel);
                    if(!flg){
                        result.put("msg", "false");
                        return result;
                    }
                }

            } else {
                result.put("msg", "false");
                return result;
            }
        } catch (Exception e) {
            log.error("download下载附件出错:", e);
        }
        result.put("msg", "true");
        return result;
    }
    /**
     * 将文件从对应源发送到指定输出流中
     * @param _allowEncry
     * @param file
     * @param outputStream 指定的输出流
     * @throws Exception
     */
    private void writeToOutputStream( String _allowEncry, SysFileUpload file, OutputStream outputStream) throws Exception{
        String fileId = file.getId();
        String filePath = file.getFILE_URL();
        String fastfdsLocation = file.getFastfdsLocation();
        if (fastfdsLocation != null && !"".equals(fastfdsLocation)) {
            //下载来自fastdfs的文件
            if (Boolean.parseBoolean(_allowEncry)) {
                FastDfsUtil.downloadAes128FileByStream(outputStream, fastfdsLocation, _FILE_ENCRY_KEY);
            } else {
                FastDfsUtil.downLoadFileByStream(outputStream, fastfdsLocation);
            }
        } else if (filePath != null && !"".equals(filePath)) {
            //下载来自物理存储的文件(磁盘)
            BufferedInputStream bis = null;
            InputStream in = null;
            try {
                in = new FileInputStream(new File(filePath));
                bis = new BufferedInputStream(in);
                
                //20250904 modby wenc 修改为根据附件路径是否包含[B@作为判断是否加密存储
                if(filePath.indexOf("[B@") != -1){
                	FileEncryptUtil.downloadAes128FileByStream(outputStream, in, _FILE_ENCRY_KEY);
                } else {
                    int len = in.available();
                    if (len > 0) {
                        IOUtils.copy(bis, outputStream);
                    }
                }
                //20250904 endby wenc
                /*if (Boolean.parseBoolean(_allowEncry)) {
                    FileEncryptUtil.downloadAes128FileByStream(outputStream, in, _FILE_ENCRY_KEY);
                } else {
                    int len = in.available();
                    if (len > 0) {
                        IOUtils.copy(bis, outputStream);
                    }
                }*/
            } finally {
                bis.close();
                in.close();
            }
        } else {
            //下载来自数据库
            Map<String, String> condition = new HashMap<String, String>();
            condition.put("fileId", fileId);
            Blob fileBody = swfUploadService.getFileBodyByCondition(condition);
            BufferedInputStream bis = null;
            InputStream in = null;
            try {
                in = fileBody.getBinaryStream();
                bis = new BufferedInputStream(in);

                if (Boolean.parseBoolean(_allowEncry)) {
                    FileEncryptUtil.downloadAes128FileByStream(outputStream, in, _FILE_ENCRY_KEY);
                } else {
                    IOUtils.copy(bis, outputStream);
                }
            } finally {
                bis.close();
                in.close();
            }
        }
    }

    /**
     * 根据fileId 验证用户是否可以下载该附件
     * @param request
     * @param errorMsg 异常信息
     * @return true 可以下载；false 没有权限下载
     * @throws Exception
     */
    private boolean validatePermission(SysFileUpload file,  HttpServletRequest request, StringBuilder errorMsg ) throws Exception{
        String fileId = file.getId();
        
        //增加超级角色，免校验下载权限逻辑
        String loginUserId = SessionHelper.getLoginSysUserId(request);
        String appid = SessionHelper.getApplicationId();
        List<SysRole> roleList = userRoleApi.getSysRoleListBySysUserId(loginUserId, appid);
        String hisDownLoadRole = "false";//获取用户是否具有附件下载超级角色
        String superRoleCode = "super_download_role";
        if(!CollectionUtils.isEmpty(roleList)){
	       	for(int i=0;i<roleList.size();i++){
	       	  SysRole role = roleList.get(i);
	       	  if(superRoleCode.equals(role.getRoleCode())){
	       		  hisDownLoadRole = "true";
	       		  break;
	       	  }
	       	}
        }
       	if(hisDownLoadRole.equals("true")){
            return true;
       	}
        
        String userSecretLevel = SessionHelper.getLoginSysUser(request).getSecretLevel();
        userSecretLevel = (userSecretLevel == null ? "1" : userSecretLevel);

        if (userSecretLevel != null && file.getSECRET_LEVEL() != null && !file.getSECRET_LEVEL().equals("0")
                && !userSecretLevel.trim().equals("")
                && !file.getSECRET_LEVEL().trim().equals("")) {

            if (!sysLookupAPI.isRelation(file.getSECRET_LEVEL(), userSecretLevel)) {
                errorMsg.append("不能下载高于当前用户密级的附件！") ;
                return false;
            }

            //跨密级附件权限
            Collection<MultiSecretInterFace> multiSecretInterFaces = SpringFactory.getApplicationContext().getBeansOfType(MultiSecretInterFace.class).values();
            for(MultiSecretInterFace multiSecretInterFace : multiSecretInterFaces) {
                boolean _flg = multiSecretInterFace.doDownFile(SessionHelper.getLoginSysUserId(request), file.getSECRET_LEVEL(), fileId);
                if(!_flg){
                    errorMsg.append("因密级不符合，不能下载当前附件！");
                    return false;
                }
            }
        }

        //流程节点是否配置某些密级不能下载
        String taskName = request.getParameter("_taskName");
        String entryId = request.getParameter("_entryId");
        if(entryId != null && !entryId.equals("") && taskName != null && !taskName.equals("")){
            boolean flg = businessAPI.getFileDownSecret(entryId,taskName,file.getSECRET_LEVEL(),userSecretLevel);
            if(!flg){
                errorMsg.append("不允许下载当前附件！");
                return false;
            }
        }

        //扩展附件下载权限
        Collection<ExtendAttachmentPermission> extendAttachmentPermissions = SpringFactory.getApplicationContext().getBeansOfType(ExtendAttachmentPermission.class).values();
        for(ExtendAttachmentPermission extendAttachmentPermission : extendAttachmentPermissions) {
            boolean flag = extendAttachmentPermission.hasAttachmentPermission(SessionHelper.getLoginSysUserId(request), fileId, file.getSECRET_LEVEL(), file.getFILE_BUSINESS_TABLE_FIELD(), file.getATTRIBUTE_03());
            if(!flag){
                errorMsg.append("没有下载此文档的权限");
                return false;
            }
        }
        return true;
    }

    /**
     * 压缩文件
     * @param inputFiles 被压缩的文件列表
     * @param outputstream 压缩文件的输出流
     * @throws IOException
     */
    private void zipFile(List<File> inputFiles, ZipOutputStream outputstream) throws IOException
    {
        for(File inputFile: inputFiles){
            BufferedInputStream bInStream = null;
            try{
                bInStream = new BufferedInputStream(new FileInputStream(inputFile));
                ZipEntry entry = new ZipEntry(inputFile.getName());
                outputstream.putNextEntry(entry);

                final int MAX_BYTE = 10 * 1024 * 1024; // 最大的流为10M
                long streamTotal = 0; // 接受流的容量
                int streamNum = 0; // 流需要分开的数量
                int leaveByte = 0; // 文件剩下的字符数
                byte[] inOutbyte; // byte数组接受文件的数据

                streamTotal = bInStream.available(); // 通过available方法取得流的最大字符数
                streamNum = (int) Math.floor(streamTotal / MAX_BYTE); // 取得流文件需要分开的数量
                leaveByte = (int) streamTotal % MAX_BYTE; // 分开文件之后,剩余的数量

                if (streamNum > 0) {
                    for (int j = 0; j < streamNum; ++j) {
                        inOutbyte = new byte[MAX_BYTE];
                        // 读入流,保存在byte数组
                        bInStream.read(inOutbyte, 0, MAX_BYTE);
                        outputstream.write(inOutbyte, 0, MAX_BYTE);
                    }
                }
                // 写出剩下的流数据
                inOutbyte = new byte[leaveByte];
                bInStream.read(inOutbyte, 0, leaveByte);
                outputstream.write(inOutbyte);
                outputstream.closeEntry();
            }catch (IOException e){
                throw e;
            }finally {
                if(bInStream != null){
                    try{
                        bInStream.close();
                    }catch (IOException e){
                        e.printStackTrace();
                    }
                }
            }
        }
    }

    /**
     * 附件预览的入口方法
     * @param request 请求
     * @param response 响应
     */
    @RequestMapping(value = "/previewFile")
    public void getAttachmentConvertFile(HttpServletRequest request, HttpServletResponse response) throws IOException{
        String fileId = request.getParameter("fileId");
        SysFileUpload attach = swfUploadService.getAttachById(fileId);
         if(attach == null){
                response.setCharacterEncoding("UTF-8");
                PrintWriter p = response.getWriter();
                p.write("<script>alert('下载文件已不存在！');</script>");
                p.close();
                return ;
            }
        String fileType = attach.getFILE_TYPE();
        String filePath = attach.getFILE_URL();
        String fastfdsLocation =attach.getFastfdsLocation();
        response.setCharacterEncoding("UTF-8");
        if (attach.getFILE_SIZE() > 0) {
            response.setHeader("Content-Length", String.valueOf(attach.getFILE_SIZE()));
        }
        //根据filId 找到对应得预览信息文件
        try {
            //判断是哪种存储方式
            if (fastfdsLocation != null && !"".equals(fastfdsLocation)) {
                downloadFromFDFS(response, fileType, fastfdsLocation);
            } else if (filePath != null && !"".equals(filePath)) {
                downloadFromDisk(response, fileType, filePath);
            } else {
                downFromDataBase(response, attach, fileType);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.info("获取文件异常");
        }
    }

    /**
     * 获取来自fastDFS的预览文件
     * @param response
     * @param fileType
     * @param fastfdsLocation
     * @throws IOException
     * @throws MyException
     */
    private void downloadFromFDFS(HttpServletResponse response, String fileType, String fastfdsLocation) throws IOException, MyException {
        //下载来自fastDFS的文件
        String classPath = (new File(FastDfsUtil.class.getResource("/").getFile())).getCanonicalPath();
        String fdfsClientConfigFilePath = classPath + File.separator + "fdfs_client.conf";
        ClientGlobal.init(fdfsClientConfigFilePath);
        TrackerClient trackerClient = new TrackerClient();
        TrackerServer trackerServer = trackerClient.getConnection();
        StorageClient storageClient = new StorageClient(trackerServer, null);
        ByteArrayOutputStream bao = null;
        try {
            ObjectMapper mapper = new ObjectMapper();
            List<FileLocation> list = mapper.readValue(fastfdsLocation, new TypeReference<List<FileLocation>>(){});
            Iterator<FileLocation> i$ = list.iterator();
            bao = new ByteArrayOutputStream();
            while(i$.hasNext()) {
                FileLocation item = i$.next();
                byte[] b = storageClient.download_file(item.getGn(), item.getFn());
                bao.write(b);
            }
            if(StringUtils.containsIgnoreCase("jpg,jpeg,gif,png",fileType)){
                response.setContentType("application/pdf");
                Image image = Image.getInstance(bao.toByteArray());
                bao = FileToPDFUtil.image2pdfSteam(image);
                response.setContentLength(bao.size());
                byte[] bytes = bao.toByteArray();
                response.getOutputStream().write(bytes);
            }else if(StringUtils.equalsIgnoreCase("txt",fileType)){
                response.setContentType("application/pdf");
                bao = FileToPDFUtil.text2pdfSteam(new ByteArrayInputStream(bao.toByteArray()));
                response.setContentLength(bao.size());
                byte[] bytes = bao.toByteArray();
                response.getOutputStream().write(bytes);
            }else{
                response.getOutputStream().write(bao.toByteArray());
                response.setHeader("Content-disposition", "attachment;filename=preview."+fileType);
            }
        } catch (Exception var13) {
            var13.printStackTrace();
        } finally {
            if (bao != null) {
                bao.close();
            }
        }
    }

    /**
     * 获取来自物理存储的预览文件(磁盘)
     * @param response
     * @param fileType
     * @param filePath
     * @throws IOException
     */
    private void downloadFromDisk(HttpServletResponse response, String fileType, String filePath) throws IOException {
        //下载来自物理存储的文件(磁盘)
        FileInputStream in = null;
        try {
            if(StringUtils.containsIgnoreCase("jpg,jpeg,gif,png",fileType)){
                Image image = Image.getInstance(filePath);
                ByteArrayOutputStream byteArrayOutputStream = FileToPDFUtil.image2pdfSteam(image);
                response.setContentType("application/pdf");
                response.setContentLength(byteArrayOutputStream.size());
                response.getOutputStream().write(byteArrayOutputStream.toByteArray());
            }else if(StringUtils.equalsIgnoreCase("txt",fileType)){
                in = new FileInputStream(filePath);
                ByteArrayOutputStream byteArrayOutputStream = FileToPDFUtil.text2pdfSteam(in);
                response.setContentType("application/pdf");
                response.setContentLength(byteArrayOutputStream.size());
                response.getOutputStream().write(byteArrayOutputStream.toByteArray());
            }else{
                response.setHeader("Content-disposition", "attachment;filename=preview."+fileType);
                in = new FileInputStream(filePath);
                int len = in.available();
                if (len > 0) {
                    IOUtils.copy(in, response.getOutputStream());
                }
                in.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (in != null) {
                in.close();
            }
        }

    }

    /**
     * 获取来自数据库的预览文件
     * @param response
     * @param attach
     * @param fileType
     * @throws IOException
     */
    private void downFromDataBase(HttpServletResponse response, SysFileUpload attach, String fileType) throws IOException {
        BufferedInputStream bis = null;
        try {
            //下载来自数据库
            Blob fileBody=attach.getFILE_BODY();
            InputStream in = fileBody.getBinaryStream();
            bis = new BufferedInputStream(in);
            if(StringUtils.containsIgnoreCase("jpg,jpeg,gif,png",fileType)){
                Image image = Image.getInstance(fileBody.getBytes(1, (int) fileBody.length()));
                ByteArrayOutputStream byteArrayOutputStream = FileToPDFUtil.image2pdfSteam(image);
                response.setContentType("application/pdf");
                response.setContentLength(byteArrayOutputStream.size());
                response.setHeader("Content-disposition", "attachment;filename=preview.pdf");
                response.getOutputStream().write(byteArrayOutputStream.toByteArray());
            }else if(StringUtils.equalsIgnoreCase("txt",fileType)){
                ByteArrayOutputStream byteArrayOutputStream = FileToPDFUtil.text2pdfSteam(in);
                response.setContentType("application/pdf");
                response.setContentLength(byteArrayOutputStream.size());
                response.setHeader("Content-disposition", "attachment;filename=preview.pdf");
                response.getOutputStream().write(byteArrayOutputStream.toByteArray());
            }else {
                response.setHeader("Content-disposition", "attachment;filename=preview."+fileType);
                IOUtils.copy(bis, response.getOutputStream());
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (bis != null) {
                bis.close();
            }
        }
    }
}
