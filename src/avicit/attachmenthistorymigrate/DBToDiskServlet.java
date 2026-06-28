package avicit.attachmenthistorymigrate;

import javax.servlet.http.HttpServlet;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Blob;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.StringUtils;

import avicit.platform6.core.properties.PlatformProperties;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.modules.system.sysfileupload.domain.SysFileUpload;
import avicit.platform6.modules.system.sysfileupload.service.SysFileUploadService;

public class DBToDiskServlet extends HttpServlet {

	/**
	 * 将附件历史数据，从数据库迁移到本地磁盘
	 */
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		this.doPost(req, resp);
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		SysFileUploadService sysFileUploadService = (SysFileUploadService) SpringFactory.getBean(SysFileUploadService.class);
		// 防止返回乱码
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		List<SysFileUpload> allList = sysFileUploadService.getAllList();
		// 获取配置文件中附件存放的物理位置
		// ResourceBundle resource = ResourceBundle.getBundle("platform6");
		String path = PlatformProperties.getProperty("doccenter.path");
		// String path = resource.getString("doccenter.path");
		path = path.replace("/", "\\");
		// 拼接附件存放路径
		for (SysFileUpload fileUpload : allList) {
			// 获取文件存储路径
			String url = fileUpload.getFILE_URL();
			if (StringUtils.isEmpty(url)) {
				// 上传到磁盘的文件路径D:\doccenter\SECRETLEVEL_1\grouptemplateFilePath\file8a58bca862b7be880162b7f26ee504c1\data2.xlsx
				/*
				 * SECRET_LEVEL：密级 FILE_BUSINESS_TABLE_NAME：业务表名
				 * FILE_BUSINESS_ID：业务字段ID
				 */
				String osName = System.getProperty("os.name").toLowerCase();
				boolean isWins = false;
				
				String attachPath = path + "\\SECRETLEVEL_" + fileUpload.getSECRET_LEVEL() + "\\group" + fileUpload.getFILE_BUSINESS_TABLE_NAME() + "\\file" + fileUpload.getFILE_BUSINESS_ID();
				// ATTRIBUTE_07()作为标志位，防止重复处理，“1”为已处理
				if (fileUpload.getATTRIBUTE_07() == null || fileUpload.getATTRIBUTE_07().equals("")) {
					Blob blob = fileUpload.getFILE_BODY();
					try {
						if (null != blob) {
							// 创建文件夹
							String filePaht = createFile(attachPath, fileUpload.getFILE_NAME());
							// 将读取blob中的数据
							InputStream is = blob.getBinaryStream();
							// 将blob字段内的数据写入文件
							File file = new File(filePaht);
							OutputStream os = new FileOutputStream(file);
							byte[] b = new byte[1024];
							int len = 0;
							while ((len = is.read(b)) != -1) {
								os.write(b, 0, len);
							}
							os.close();
							is.close();
							// 将磁盘地址存到数据库
							fileUpload.setFILE_URL(attachPath + "\\" + fileUpload.getFILE_NAME());
						}
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					// 为了不重复创建文件用此标识
					fileUpload.setATTRIBUTE_07("1");
					sysFileUploadService.updateSysFileUpload(fileUpload);
				}
			}
		}
		response.getWriter().print("附件从数据迁移到磁盘,操作完成!");
	}

	// 创建文件夹以及文件fileName为需要创建的文件
	public String createFile(String path, String fileName) {
		File f = new File(path);
		if (!f.exists()) {
			f.mkdirs();
		}
		File file = new File(f, fileName);
		if (!file.exists()) {
			try {
				file.createNewFile();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return path + "/" + fileName;
	}

}
