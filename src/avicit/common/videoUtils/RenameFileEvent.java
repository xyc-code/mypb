package avicit.common.videoUtils;

import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.FileUtil;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.modules.system.sysfileupload.domain.SysFileUpload;
import avicit.platform6.modules.system.sysfileupload.service.SwfUploadEvent;
import avicit.platform6.modules.system.sysfileupload.service.SysFileUploadService;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.InputStream;


/**
 * 重命名上传附件路径名称，主要是解决视频文件代中文的
 */
@Component
public class RenameFileEvent implements SwfUploadEvent {
    @Override
    public void afterSaveFileByDB(SysFileUpload sysFileUpload) {

    }

    /**
     * 20240425 张国庆 增加，上传硬盘附件处理，只处理声像模块文件,目前表中 对应的表名是空的，只能使用elementid作为声像模块附件标识
     * @param sysFileUpload
     * @param inputStream
     */
    @Override
    public void afterSaveFileByDisk(SysFileUpload sysFileUpload, InputStream inputStream) {

        String elementId=ComUtil.replaceNull2Space(sysFileUpload.getElementId());
        if("video".equals(elementId)){//只有声像模块的附件id是这个
            String filePath=sysFileUpload.getFILE_URL();
            String fileName=sysFileUpload.getFILE_NAME();
            File file=new File(filePath);

            if(file.exists()){
                String id=ComUtil.getId();
                String newFileName=FileUtil.getFileNameNoEx(fileName);//获取文件名称，不带扩展名的
                String newFilePath=filePath.replace(newFileName,id);//替换路径名称
                file.renameTo(new File(newFilePath));//重新命名
                File newFile=new File(newFilePath);
                if(newFile.exists()){//更改后的文件是否存在，如果存在就更新数据库
                    SysFileUploadService sysFileUploadService=SpringMVCFactory.getBean(SysFileUploadService.class);
                    sysFileUpload.setFILE_URL(newFilePath);
                    sysFileUploadService.updateSysFileUpload(sysFileUpload);
                }

            }
        }
    }

    @Override
    public void afterSaveFileByOther(SysFileUpload sysFileUpload, InputStream inputStream) {

    }

    @Override
    public void afterDelFileByDB(SysFileUpload sysFileUpload) {

    }

    @Override
    public void afterDelFileByDisk(SysFileUpload sysFileUpload) {

    }

    @Override
    public void afterDelFileByFastDfs(SysFileUpload sysFileUpload) {

    }

    @Override
    public void afterDelFileByOther(SysFileUpload sysFileUpload) {

    }

    @Override
    public void downloadOneFileByOther(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {

    }

    @Override
    public void downloadAllFileByOther(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {

    }
}
