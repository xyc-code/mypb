package avicit.pb.dyntaskchecklist.controller;

import java.io.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.servlet.Servlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.*;
import javax.ws.rs.core.GenericType;

import java.net.URLEncoder;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.bpmbusiness.vo.HistoryTaskVo;
import avicit.platform6.api.sysmsg.dto.SysMsgDTO;
import avicit.platform6.api.sysuser.SysUserDeptPositionAPI;
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.api.sysuser.dto.SysPosition;
import avicit.platform6.bpm.api.BpmToolService;
import avicit.platform6.bpm.api.history.HistoryProcessInstance;
import avicit.platform6.bpmclient.bpm.action.BpmDisplayAction;
import avicit.platform6.bpmclient.bpm.service.BpmDisplayService;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmclient.dto.org.impl.UserImpl;
import avicit.platform6.bpmclient.dto.sys.HistoryActivityVo;
import avicit.platform6.bpmclient.dto.sys.TaskVo;
import avicit.platform6.bpmclient.dto.sys.WorkHandUsers;
import avicit.platform6.bpmreform.bpmbusiness.service.BusinessService;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.rest.client.RestClient;
import avicit.platform6.core.rest.client.RestClientConfig;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.core.spring.SpringMVCFactory;
import avicit.platform6.eform.EformConstant;
import avicit.platform6.eformbpms.dto.TableColData;
import avicit.platform6.eformbpms.dto.TableData;
import avicit.platform6.eformbpms.utils.BpmsControlUtils;
import avicit.platform6.modules.system.sysfileupload.util.IOUtils;
import avicit.platform6.msystem.sysmsg.controller.SysMsgConstant;
import com.alibaba.fastjson.JSONArray;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.collections.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import avicit.pb.dyntaskchecklist.dao.DynTaskChecklistDao;
import avicit.pb.dyntaskchecklist.dto.DynInspecIcDTO;
import avicit.pb.dyntaskchecklist.dto.DynInspectionDTO;
import avicit.pb.dyntaskchecklist.dto.DynTaskChecklistDTO;
import avicit.pb.dyntaskchecklist.service.DynTaskChecklistService;
import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.spring.SpringFactory;
import oracle.sql.CLOB;
import oracle.sql.TIMESTAMP;

import com.alibaba.druid.pool.vendor.NullExceptionSorter;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写 @创建时间： 2023-05-16 16:49
 * @类说明：请填写 @修改记录：
 */
@Controller
@Scope("prototype")
@RequestMapping("/avicit/pb/dyntaskchecklist/dynTaskChecklistController")
public class DynTaskChecklistController implements LoaderConstant, EventListener {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynTaskChecklistController.class);

	
	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynTaskChecklistService dynTaskChecklistService;
	/**
	 * @description:跳转到选择清单页面
	 * @param request
	 *            请求,reponse 响应
	 * @return
	 */
	@RequestMapping(value = "toDynTaskChecklistManage")
	public ModelAndView toDynTaskChecklistManage(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/dyntaskchecklist/OaKeyWorkSelect");
		mav.addObject("url", "platform/dyntaskchecklist/dynTaskChecklistController/operation/");
		return mav;
	}
	/**
	 * @description:跳转到选择清单页面
	 * @param request
	 *            请求,reponse 响应
	 * @return
	 */
	@RequestMapping(value = "todata")
	public ModelAndView todata(HttpServletRequest request, HttpServletResponse reponse,HttpSession session,String formdata) {
		ModelAndView mav = new ModelAndView();
		 DynTaskChecklistDTO dyn  =JSONObject.parseObject(formdata,DynTaskChecklistDTO.class);
		 SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		 Date date = new Date(System.currentTimeMillis());
		 dyn.setDateManifest(formatter.format(date));
		 dyn.setAttribute01("1");
		return mav;
	}
	@RequestMapping(value = "gettodata")
	public ModelAndView gettodata(HttpServletRequest request, HttpServletResponse reponse,HttpSession session,String formdata) {
		ModelAndView mav = new ModelAndView();
		return mav;
	}

	/**
	 * @description:分页查询方法
	 * @param pageParameter
	 *            查询条件,request 请求
	 * @returnl
	 */
	@RequestMapping(value = "/operation/getDynTaskChecklistsByPage")
	@ResponseBody
	public Map<String, Object> togetDynTaskChecklistByPage(PageParameter pageParameter, HttpServletRequest request) {
		// 先获取所有前台传递的参数
		String json = ServletRequestUtils.getStringParameter(request, "param", "");
		String sfnConditions = ServletRequestUtils.getStringParameter(request, "sdfConditons", "");// 自定义查询条件

		// 再依次梳理所有参数
		QueryReqBean<DynTaskChecklistDTO> queryReqBean = new QueryReqBean<DynTaskChecklistDTO>();
		queryReqBean.setPageParameter(pageParameter);
		DynTaskChecklistDTO param = null;

		// 使用工具类来判断JSON是否为空
		if (!StringUtils.isEmpty(json)) {
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<DynTaskChecklistDTO>() {
			});
			queryReqBean.setSearchParams(param);
		}

		// 声明当前方法的返回值
		HashMap<String, Object> map = new HashMap<String, Object>();
		QueryRespBean<DynTaskChecklistDTO> result = null;
		try {
			result = dynTaskChecklistService.searchDynTaskChecklistByPage(queryReqBean, sfnConditions,
					SessionHelper.getCurrentOrgIdentity(request));
		} catch (Exception ex) {
			return map;
		}

		for (DynTaskChecklistDTO dto : result.getResult()) {

		}

		map.put("total", result.getPageParameter().getTotalCount());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynTaskChecklistDTO分页数据");
		return map;
	}

	/**
	 * @description:根据id选择跳转到新建页还是编辑页
	 * @param type
	 *            操作类型新建还是编辑,id 编辑数据的id,request 请求
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/operation/{type}/{id}")
	public ModelAndView toOpertionPage(@PathVariable String type, @PathVariable String id, HttpServletRequest request)
			throws Exception {
		ModelAndView mav = new ModelAndView();
		if (!"Add".equals(type)) {// 编辑窗口或者详细页窗口
			// 主表数据	
			DynInspectionDTO    typeDto = dynTaskChecklistService.findByIdDTO(id);
			DynTaskChecklistDTO dto = dynTaskChecklistService.queryDynTaskChecklistByPrimaryKey(typeDto.getAttribute03());
			mav.addObject("dynTaskChecklistDTO", dto);
		}
		mav.setViewName("avicit/pb/dyntaskchecklist/DynTaskChecklist" + type);
		return mav;
	}
	/**
	 * @description:根据id选择跳转到新建页还是编辑页
	 * @param type
	 *            操作类型新建还是编辑,id 编辑数据的id,request 请求
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/{type}/{id}")
	public ModelAndView toOpertionPages(@PathVariable String type, @PathVariable String id, HttpServletRequest request)
			throws Exception {
		ModelAndView mav = new ModelAndView();
		if (!"Add".equals(type)) {// 编辑窗口或者详细页窗口
			// 主表数据	
			DynInspectionDTO    typeDto = dynTaskChecklistService.findByIdDTO(id);
			DynTaskChecklistDTO dto = dynTaskChecklistService.queryDynTaskChecklistByPrimaryKey(typeDto.getAttribute03());
			mav.addObject("dynTaskChecklistDTO", dto);
		}
		mav.setViewName("avicit/pb/dyntaskchecklist/DynTaskChecklistSelect" + type);
		return mav;
	}

	/**
	 * @description:保存数据
	 * @param request
	 *            主键id,demoBusinessTripDTO 保存的对象
	 * @return
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	public ModelAndView toSaveDynTaskChecklistDTO(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynTaskChecklistDTO dynTaskChecklistDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynTaskChecklistDTO>() {
					});
			if (StringUtils.isEmpty(dynTaskChecklistDTO.getId())) {// 新增
				dynTaskChecklistDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				dynTaskChecklistService.insertDynTaskChecklist(dynTaskChecklistDTO);
			} else {// 修改
				dynTaskChecklistService.updateDynTaskChecklistSensitive(dynTaskChecklistDTO);
			}
			mav.addObject("flag", OpResult.success);
		} catch (Exception ex) {
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;

	}

	/**
	 * @description:按照id批量删除数据
	 * @param ids
	 *            id数组
	 * @return
	 */
	@RequestMapping(value = "/operation/delete", method = RequestMethod.POST)
	public ModelAndView toDeleteDynTaskChecklistDTO(@RequestBody String[] ids, HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		try {
			dynTaskChecklistService.deleteDynTaskChecklistByIds(ids);
			mav.addObject("flag", OpResult.success);
		} catch (Exception ex) {
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;
	}
	/**
	 * @description:计算参数
	 * @param type 计算什么参数
	 *        no 根据no决定是否插入数据库           
	 * @return 计算好的参数
	 */
	@RequestMapping("/compute")
	@ResponseBody
	public ModelAndView compute(String type,String no){
		ModelAndView mav = new ModelAndView();
		try{
			String val = dynTaskChecklistService.compute(type,no);
			mav.addObject("value",val);
		}catch(Exception ex){
			mav.addObject("error",ex.getMessage());
		}
		return mav;
	}
	@RequestMapping("/erports")
	public void text(HttpServletRequest request,HttpServletResponse response,String id,String entryid){
		HSSFWorkbook wb = new HSSFWorkbook();
		String fileName = "巡察反馈问题整改归零表.xls"; //文件名
		wb= dynTaskChecklistService.extor(wb,id,entryid);
		try {
			OutputStream os = response.getOutputStream();
			fileName = URLEncoder.encode((fileName), "UTF-8").replace("+", "%20");
			response.reset();
    		response.addHeader("Access-Control-Expose-Headers", "Content-Disposition");
    		response.setContentType("application/vnd.ms-excel;charset=utf-8");
    		response.setHeader("Content-Disposition", "attachment;filename="
    				+ fileName);
            wb.write(os);  
            os.flush();  
            os.close();  
		} catch (IOException e) {
			LOGGER.error("导出出错："+e.getMessage());
		}  
	}

	/**
	 *20240306 增加 批量导出多个
	 * @param request
	 * @param response

	 */
	@RequestMapping("/erportsWodes")
	public void erportsWodes(HttpServletRequest request,HttpServletResponse response){
		try {
            String ids=request.getParameter("ids");
			String nos=request.getParameter("nos");
            String downloadName="巡察反馈问题整改归零表.zip";
            String entryid="";
			String rootPath = request.getSession().getServletContext().getRealPath("/");

			String currentPath =  rootPath + "packes" + File.separator ;
			File currentPathFile = new File(currentPath);
			if(!currentPathFile.exists()){

				currentPathFile.mkdirs();
			}



			String idds[]=ids.split(",");
			String nnos[]=nos.split(",");
			for(int i=0;i<idds.length;i++){

				XWPFDocument doc = dynTaskChecklistService.getWode(idds[i],null);

				String fileName = nnos[i]+"-巡察反馈问题整改归零表.docx";
				FileOutputStream fsos = new FileOutputStream(currentPathFile+"\\"+fileName);
				try {

					doc.write(fsos);


				} finally {
					fsos.close();

				}

			}
			if (currentPathFile.exists() && currentPathFile.list().length != 0) {
				File[] fileArr = currentPathFile.listFiles();
				String zipFileName = "packes" + ".zip";
				File zipFile = new File(rootPath + zipFileName);
				ZipOutputStream zipOutputStream = null;

				boolean zipDone = false;
				try{
					zipOutputStream = new ZipOutputStream(new FileOutputStream(zipFile));
					zipFile(Arrays.asList(fileArr), zipOutputStream);
					zipDone = true;
				}catch (Exception e){
					LOGGER.error("打包附件出错:", e);
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
						LOGGER.error("下载全部附件出错:", e);
					}
				}


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

			}


		} catch (Exception e) {
			LOGGER.error("导出出错："+e.getMessage());
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

	@RequestMapping("/erportsWode")
	public void erportsWode(HttpServletRequest request,HttpServletResponse response,String id,String entryid){
		try {
			XWPFDocument doc = dynTaskChecklistService.getWode(id,entryid);
			String fileName = "巡察反馈问题整改归零表.docx";
			OutputStream os = response.getOutputStream();
			fileName = URLEncoder.encode((fileName), "UTF-8").replace("+", "%20");
			response.reset();
			response.addHeader("Access-Control-Expose-Headers", "Content-Disposition");
			response.setContentType("application/vnd.ms-excel;charset=utf-8");
			response.setHeader("Content-Disposition", "attachment;filename="
					+ fileName);
			doc.write(os);
			os.flush();
			os.close();
		} catch (Exception e) {
			LOGGER.error("导出出错："+e.getMessage());
		}
	}


	@RequestMapping("/fianme")
	public void finma(String filename,String id){
		DynInspectionDTO dyn  = new DynInspectionDTO();
		dyn.setId(id);
		dyn.setAttribute02(filename);
		try {
			dynTaskChecklistService.updateDynInspectionSensitive(dyn);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	@RequestMapping("/push")
	public ModelAndView push(String lcid,String id,String userid){
		ModelAndView mvc = new ModelAndView();
		try {
		Map<String,Object> map =	dynTaskChecklistService.push(lcid,id,userid);
		mvc.addObject("result",map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			mvc.addObject("error",e.getMessage());
		}
		return mvc;
	}
	/**
	 * 
	 * @param nowTime   当前时间	
	 * @param endTime   结束时间
	 * @return
	 * @author sunran   判断当前时间在时间区间内
	 */
	public String isEffectiveDate(Date nowTime, Date endTime) {
        if (nowTime.getTime() == endTime.getTime()) {
            return "3";
        }

        Calendar date = Calendar.getInstance();
        date.setTime(nowTime);


        Calendar end = Calendar.getInstance();
        end.setTime(endTime);

        if (date.before(end)) {
            return "3";
        } else {
            return "2";
        }
    }
	@RequestMapping("/updatePushzt")
    public void updatePushzt(String data){
		DynInspectionDTO dyn  = new DynInspectionDTO();
		dyn.setId(data);
		dyn.setAttribute05("1");
		try {
			dynTaskChecklistService.updateDynInspectionSensitive(dyn);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	@RequestMapping("/getUser")
	@ResponseBody
	public ModelAndView getUser(String id,String type){
		ModelAndView mvc = new ModelAndView();
		try{
			if("1".equals(type)){
				 mvc.addObject("userid",dynTaskChecklistService.getUserName(id));	
			}else{
				mvc.addObject("deptid",dynTaskChecklistService.getDeptName(id));	
			}
		 
		}catch(Exception e){
			mvc.addObject("flag","error");
		}
		
		return mvc;
	}
	
	@Override
	public void notify(EventListenerExecution execution) throws Exception {
		String formId2 = (String) execution.getVariable("id");
		String entryid = execution.getProcessInstanceId();
		int Hash = ComUtil.getHashInt(entryid, 8);
		String  HashId = "bpm_track_ext"+Hash;	
		DynTaskChecklistService serve =   SpringFactory.getBean(DynTaskChecklistService.class);
		DynTaskChecklistDao dao = SpringFactory.getBean(DynTaskChecklistDao.class);
		DynInspectionDTO dtos =  serve.findByIdDTO(formId2);
		DynTaskChecklistDTO dto  = serve.queryDynTaskChecklistByPrimaryKey(dtos.getAttribute03());		
		DynInspecIcDTO dyo = new DynInspecIcDTO();
		//主表id
		dyo.setAttribute11(dtos.getId());
		//第几次循环
		dyo.setAttribute10(String.valueOf(serve.countFor(dtos.getId())));
		dyo.setInspectionMaterial(dtos.getInspectionMaterial());
		dyo.setInspectionOneAnd(dtos.getInspectionOneAnd());
		dyo.setInspectionOpinionS(dtos.getInspectionOpinionS());
		dyo.setInspectionOpinionEnd(dtos.getInspectionOpinionEnd());
		dyo.setInspectionOn(dtos.getInspectionOn());
		dyo.setInspectionFromPosenTel(dtos.getInspectionFromPosenTel());
		dyo.setAttribute04(dtos.getAttribute04());
		dyo.setInspectionOpinionEndDate(dtos.getInspectionOpinionEndDate());
		dyo.setInspectionOpinionEndDateBegin(dtos.getInspectionOpinionEndDateBegin());
		dyo.setInspectionOpinionEndDateEnd(dtos.getInspectionOpinionEndDateEnd());
		dyo.setAttribute03(dtos.getAttribute03());
		dyo.setInspectionPosen(dtos.getInspectionPosen());
		dyo.setAttribute01(dtos.getAttribute01());
		dyo.setInspectionEndIssueQk(dtos.getInspectionEndIssueQk());
		dyo.setInspectionFromPosenDept(dtos.getInspectionFromPosenDept());
		dyo.setInspectionFromDate(dtos.getInspectionFromDate());
		dyo.setInspectionMeasureIssue(dtos.getInspectionMeasureIssue());
		dyo.setAttribute05("0");
		dyo.setInspectionFromOn(dtos.getInspectionFromOn());
		dyo.setInspectionFromPosen(dtos.getInspectionFromPosen());
		dyo.setInspectionEndIssue(dtos.getInspectionEndIssue());
		dyo.setInspectionIssue(dtos.getInspectionIssue());
		dyo.setAttribute09(dtos.getAttribute03());
		dyo.setAttribute01(dtos.getAttribute01());
		dyo.setAttribute04(dtos.getAttribute04());
		//被巡查单位主管领导审核意见
		List<Map<String,Object>> entry = dao.getTask(entryid, HashId, "task3");
		for(Map<String,Object> enry : entry){
			Map<String,Object> map = enry;
			SimpleDateFormat sr = new SimpleDateFormat("yyyy-MM-dd HH:mm:SS");
			String mesage = serve.ClobToString((CLOB)map.get("MESSAGE_")) ;
			TIMESTAMP end = (TIMESTAMP)map.get("END_");
			String date =sr.format(end.dateValue());
			dyo.setInspectionOpinion(mesage+";");
			dyo.setInspectionOpinionDate(sr.parse(date));
		}
		//获取被巡察单位巡察整改领导小组审核意见
		entry = dao.getTask(entryid, HashId, "task6");
		for(Map<String,Object> enry : entry){
			Map<String,Object> map = enry;
			SimpleDateFormat sr = new SimpleDateFormat("yyyy-MM-dd HH:mm:SS");
			String mesage = serve.ClobToString((CLOB)map.get("MESSAGE_")) ;
			TIMESTAMP end = (TIMESTAMP)map.get("END_");
			String date =sr.format(end.dateValue());
			dyo.setInspectionOpinionS(mesage+";");
			dyo.setInspectionOpinionDateS(sr.parse(date));
		}
		entry = dao.getTask(entryid, HashId, "task4");
		for(Map<String,Object> enry : entry){
			Map<String,Object> map = enry;
			SimpleDateFormat sr = new SimpleDateFormat("yyyy-MM-dd HH:mm:SS");
			String mesage = serve.ClobToString((CLOB)map.get("MESSAGE_")) ;
			TIMESTAMP end = (TIMESTAMP)map.get("END_");
			String date =sr.format(end.dateValue());
			dyo.setInspectionOpinionEnd(mesage+";");
			dyo.setInspectionOpinionEndDate(sr.parse(date));
		}	 	
		serve.insertDynInspecIc(dyo);
		dtos.setAttribute05("0");
		//dtos.setInspectionEndIssueQk(" ");
		//dtos.setInspectionOneAnd(" ");
		//dtos.setInspectionOpinionS(" ");
		//dtos.setInspectionOpinion(" ");
		//dtos.setInspectionOpinionEnd(" ");
		serve.updateDynInspectionSensitive(dtos);	
	}
	
	@RequestMapping("/orxiafa")
	@ResponseBody
	public ModelAndView toxiafa( String ids, HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		

		StringBuffer msgUserIds=new StringBuffer();
		StringBuffer msgUserNames=new StringBuffer();
		String[] idarr = ids.split(",");		
		try {
			for(String id:idarr){
				String dbid = dynTaskChecklistService.tolcsj("1",id);
				if(dbid != null){
					DynTaskChecklistDTO dto=dynTaskChecklistService.queryDynTaskChecklistByPrimaryKey(id);
					throw  new NullPointerException("巡察问题序号："+dto.getAttribute02()+"；已经下发过任务");
				}				
			}
			for(String id:idarr){				
				DynTaskChecklistDTO dynTaskChecklistDTO=dynTaskChecklistService.queryDynTaskChecklistByPrimaryKey(id);
				String userId = "";
				String deptId ="" ;
				if(dynTaskChecklistDTO.getAttribute03() == null || dynTaskChecklistDTO.getAttribute03().equals("") ){
			    	 userId =dynTaskChecklistDTO.getManifestPosen();
			    	 if(userId == null || userId.equals("")){
			    		 throw  new NullPointerException("userId为空");
			    	 }
					 deptId =sysUserDeptPositionLoader.getChiefDeptIdBySysUserId(userId);
			    }else{
			    	 userId =dynTaskChecklistDTO.getAttribute03() ;
			    	 if(userId == null || userId.equals("")){
			    		 throw  new NullPointerException("userId为空");
			    	 }
			    	 deptId =sysUserDeptPositionLoader.getChiefDeptIdBySysUserId(userId);
			    	
			    }

				//封装启动流程所需的参数s
				Map<String, Object> parameter = new HashMap<String,Object>();
				parameter.put("processDefId", "2c9150818823df8f01882790799c08f7-1");
				parameter.put("formCode", "xczggl");
				parameter.put("jsonString", "");
				parameter.put("userId", userId);
				parameter.put("deptId", deptId);
				/*dynTaskChecklistDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));*/
				StartResultBean result = dynTaskChecklistService.insertDynTaskChecklistAndStartProcess(dynTaskChecklistDTO, parameter,request);

				/*发送消息提醒增加在下发清单任务时，给责任领导发送提醒，提醒相关领导本部门有多少任务需要整改,并可以监控查询本部门所有任务进展及流转情况（责任人领导（书记，党支部里面的书记）*/
				msgUserIds.setLength(0);
				msgUserNames.setLength(0);

				SysUser sendUser = (SysUser)request.getSession().getAttribute("CURRENT_LOGINUSER");
				try {

					//获取本部门下还有多少任务需要处理
					QueryReqBean<DynTaskChecklistDTO> queryReqBean=new QueryReqBean<>();
					DynTaskChecklistDTO params=new DynTaskChecklistDTO();
					params.setAttribute01("1");//0未发放1已发放2已完成3未完成4已取消5延期完成
					params.setAttribute06(deptId);//责任领导部门id
					queryReqBean.setSearchParams(params);
					List<DynTaskChecklistDTO> list=dynTaskChecklistService.searchDynTaskChecklist(queryReqBean);

					/*for(DynTaskChecklistDTO dto:list){//封装责任领导
						String userName=sysUserLoader.getSysUserNameById(dto.getManifestLeadership());
						msgUserIds.append(dto.getManifestLeadership()).append(";");
						msgUserNames.append(userName).append(";");
					}
*/
					//封装责任领导
					String userName=sysUserLoader.getSysUserNameById(dynTaskChecklistDTO.getManifestLeadership());
					msgUserIds.append(dynTaskChecklistDTO.getManifestLeadership()).append(";");
					msgUserNames.append(userName).append(";");



					//查询责任领导 部门下所有 部长，副部长岗位用户
					//SysUserDeptPositionAPI sysUserDeptPositionAPI=SpringMVCFactory.getBean(SysUserDeptPositionAPI.class);

					String mainifestLeadershipDeptId=sysUserDeptPositionLoader.getChiefDeptIdBySysUserId(dynTaskChecklistDTO.getManifestLeadership());//通过责任领导查询责任领导部门id

					List<SysUser> sysUserList=sysUserDeptPositionLoader.getSysUserListBySysDeptId(mainifestLeadershipDeptId,false);
					for(SysUser sysUser:sysUserList){
						SysPosition sysPosition=sysUserDeptPositionLoader.getSysPositionBySysUserIdAndSysDeptId(sysUser.getId(),mainifestLeadershipDeptId);
						if(sysPosition!=null){
							if("030".equals(sysPosition.getPositionCode())||"020".equals(sysPosition.getPositionCode())){//部长 030 //副部长 020
								String userNames=sysUserLoader.getSysUserNameById(sysUser.getId());
								msgUserIds.append(sysUser.getId()).append(";");
								msgUserNames.append(userNames).append(";");
							}

						}
					}
					avicit.platform6.api.sysmsg.dto.SysMsgDTO msgDTO = new  SysMsgDTO();
					msgDTO.setId("");
					String personal = SysMsgConstant.SOURCE_CODE_PERSONAL;
					msgDTO.setSourceCode(personal);
					msgDTO.setTitle(String.format("提醒，本部门有%s个巡察整改任务需要整改", list.size()+1));//标题
					msgDTO.setUrlAddress("platform/eform/bpmsCRUDClient/toViewJsp/xczghzym");//巡察整改汇总页面 列表
					msgDTO.setUrlType("1");//URL类型，是URL就是1,是js方法，就是0。
					msgDTO.setMsgType("0");//范围 1是所有人，接收人为空，0 指定接收人
					msgDTO.setRecvUser(msgUserIds.toString());//多个用;分割
					msgDTO.setRecvUserAlias(msgUserNames.toString());//多个用;分割
					Calendar c = Calendar.getInstance();
					//c.add(Calendar.DAY_OF_MONTH,7);
					msgDTO.setSendDate(new Date());//发送时间
					c.add(Calendar.DAY_OF_MONTH,30);
					msgDTO.setDisappearDate(c.getTime());
					msgDTO.setRecvDate(msgDTO.getDisappearDate());//接收时间

					if (SysMsgConstant.SOURCE_CODE_PERSONAL.equals(msgDTO.getSourceCode()) && "".equals(msgDTO.getId())) {
						if (this.insertPersonalMsg(msgDTO, sendUser)) {
							LOGGER.info("巡察整改下发任务清单后，发送系统消息提醒成功");
							//mav.put("flag", PlatformConstant.OpResult.success);
						} else {
							LOGGER.error("巡察整改下发任务清单后，发送系统消息提醒失败");
							//mav.put("flag", PlatformConstant.OpResult.failure);
						}
					}




				} catch (Exception var7) {
					LOGGER.error("巡察整改任务下发发送消息提醒失败，{}",var7.getMessage());
					//mav.put("error", var7.getMessage());
					//mav.put("flag", PlatformConstant.OpResult.failure);
					//return mav;
				}

			}


			mav.addObject("flag", OpResult.success);
		} catch (Exception ex) {
			mav.addObject("flag", OpResult.failure);
			mav.addObject("error",ex.getMessage());
			return mav;
		}
		return mav;
	}

	/**
	 * 下发任务清单的时候，发送系统消息
	 */
	private boolean insertPersonalMsg(avicit.platform6.api.sysmsg.dto.SysMsgDTO msgDto, SysUser sendUser) throws Exception {
		SysDept sendDept = this.sysUserDeptPositionLoader.getChiefDeptBySysUserId(sendUser.getId());
		String sysApplicationId = this.sysApplicationAPI.getCurrentAppId();
		msgDto.setSendUser(sendUser.getId());
		msgDto.setSendDeptid(sendDept.getId());
		msgDto.setOrgIdentity(sendDept.getOrgId());
		msgDto.setSysApplicationId(sysApplicationId);
		msgDto.setSourceCode(SysMsgConstant.SOURCE_CODE_PERSONAL);
		msgDto.setSourceName(SysMsgConstant.SOURCE_NAME_PERSONAL);
		msgDto.setSendType(SysMsgConstant.SEND_TYPE_PC);
		boolean result = false;

		try {
			String urlx = RestClientConfig.getRestHost("sysmsg") + "/api/sysmsg/SysMsgRest" + "/save/v1";
			ResponseMsg<Boolean> responseMsg = RestClient.doPost(urlx, msgDto, new GenericType<ResponseMsg<Boolean>>() {
			});
			if (!responseMsg.getRetCode().equals("200")) {
				LOGGER.error("url:" + urlx + ",error:" + responseMsg.getErrorDesc());
				throw new Exception(responseMsg.getErrorDesc());
			}

			result = (Boolean)responseMsg.getResponseBody();
		} catch (Exception var8) {
			LOGGER.error(var8.getMessage());
		}

		return result;
	}



	@RequestMapping("/tolcsj")
	@ResponseBody
	public ModelAndView tolcsj(String type,String id){
		ModelAndView mvc = new ModelAndView();
		try{
			mvc.addObject("result",dynTaskChecklistService.tolcsj(type,id));
		}catch(Exception ex){
			mvc.addObject("error",ex.getMessage());
			mvc.addObject("flag",false);
		}
		return mvc;
	}

	//根据业务id返回流程实例id
	@RequestMapping("getDbid/{id}")
	public ModelAndView gerDbid(@PathVariable String id){
		ModelAndView mvc = new ModelAndView();
		try{
			mvc.addObject("result",dynTaskChecklistService.getDbid(id));
		}catch(Exception ex){
			mvc.addObject("error",ex.getMessage());
		}

		return mvc;
	}


	//取回任务20240320 zhanggq
	@RequestMapping("bpmWithdraw")
	public ModelAndView gerDbid(HttpServletRequest request){
		ModelAndView mvc = new ModelAndView();
		String formId = ServletRequestUtils.getStringParameter(request, "formId", "");
		try{

			DynTaskChecklistDTO dynTaskChecklistDTO =dynTaskChecklistService.queryDynTaskChecklistByPrimaryKey(formId);
			dynTaskChecklistDTO.setAttribute01("6");//状态  	已取回
			dynTaskChecklistService.updateDynTaskChecklistSensitive(dynTaskChecklistDTO);

			//JdbcTemplate jdbcTemplate =SpringFactory.getBean(JdbcTemplate.class);

			BpmsControlUtils bpmsControlUtils=SpringFactory.getBean(BpmsControlUtils.class);
			TableData td=new TableData();
			td.setTableName("DYN_INSPECTION");
			List<TableColData> tableColDataList=new ArrayList<>();
			TableColData tcd=new TableColData();
			tcd.setColName("ATTRIBUTE_03");
			tcd.setColSelectType(EformConstant.ColSelectTypeEnum.EQUAL);
			tcd.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);
			tcd.setColValue(formId);
			tableColDataList.add(tcd);
			td.setTableColDataList(tableColDataList);

			//td.setPrimaryKeyValue(formId);
			List<Map<String,Object>> dataList=bpmsControlUtils.getDataList(td);
			if(dataList.size()>0){
				String id=MapUtils.getString(dataList.get(0),"ID");//得到任务流程表主键id

				TableData td2=new TableData();
				td2.setTableName("DYN_INSPECTION");
				td2.setPrimaryKeyValue(id);
				bpmsControlUtils.deleteData(td2);//删除任务流程表数据
				//任务流程表
				//jdbcTemplate.execute("delete DYN_INSPECTION t where t.ATTRIBUTE_03='"+formId+"'");

				//同时删除流程实例
				BpmOperateService bpmOperateService=SpringFactory.getBean(BpmOperateService.class);
				String flowInstanceId = bpmOperateService.getInstanceIdByFormid(id);
				if(flowInstanceId != null && !"".equals(flowInstanceId)){
					bpmOperateService.deleteProcessInstanceCascade(flowInstanceId);
				}



			}


		}catch(Exception ex){
			mvc.addObject("error",ex.getMessage());
		}

		return mvc;
	}

	/**
	 * 修改责任人或责任领导
	 * @param id
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/operation/update/{id}")
	public ModelAndView toUpdate(@PathVariable String id, HttpServletRequest request)
			throws Exception {
		ModelAndView mav = new ModelAndView();
			// 主表数据

			DynTaskChecklistDTO dto = dynTaskChecklistService.queryDynTaskChecklistByPrimaryKey(id);



			mav.addObject("dynTaskChecklistDTO", dto);
		mav.addObject("manifestLeadershipAlias", sysUserLoader.getSysUserNameById(dto.getManifestLeadership()));
		mav.addObject("manifestPosenAlias", sysUserLoader.getSysUserNameById(dto.getManifestPosen()));
		mav.setViewName("avicit/pb/dyntaskchecklist/DynTaskChecklistUpdate");
		return mav;
	}

	/**
	 * 更新责任人或责任领导
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/operation/updateZrrOrZrLd", method = RequestMethod.POST)
	public ModelAndView toSaveDynTaskChecklistZrrOrZrLd(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynTaskChecklistDTO dynTaskChecklistDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynTaskChecklistDTO>() {
					});
			   // 修改任务表记录
				DynTaskChecklistDTO dynTaskChecklistDTO1=dynTaskChecklistService.queryDynTaskChecklistByPrimaryKey(dynTaskChecklistDTO.getId());
				String gloabZrrUserId="";
			    String gloabZrrDeptId="";
				String gloabZrLdUserId="";
			    String gloabZrLdDeptId="";
				if(dynTaskChecklistDTO1!=null){

					gloabZrrUserId=dynTaskChecklistDTO1.getManifestPosen();//历史责任人
					gloabZrrDeptId=dynTaskChecklistDTO1.getAttribute05();//历史责任人部门id
					gloabZrLdUserId=dynTaskChecklistDTO1.getManifestLeadership();//历史领导
					gloabZrLdDeptId=dynTaskChecklistDTO1.getAttribute06();//历史责任领导部门id

				}

				//查询是否存在已经下发的任务流程
				DynInspectionDTO dynInspectionDTO=dynTaskChecklistService.findAttr3(dynTaskChecklistDTO.getId());

				if(dynInspectionDTO!=null){//更新任务对应的流程表单
					dynInspectionDTO.setInspectionPosen(dynTaskChecklistDTO.getManifestPosen());//更新责任人
					/*SysUser sysUser=sysUserLoader.getSysUserById(dynTaskChecklistDTO.getManifestPosen());
					if(sysUser!=null){
						dynInspectionDTO.setInspectionFromPosenTel(sysUser.getOfficeTel());//更新办公电话
					}*/
					//更新前先查询一下该任务的当前办理人是谁，

					BpmDisplayService bpmDisplayService=SpringFactory.getBean(BpmDisplayService.class);
					List<UserImpl> taskUserList=bpmDisplayService.getOwnersByFormId(dynInspectionDTO.getId());//获取当前处理人


					for(UserImpl bpmUser:taskUserList){
						LOGGER.info("{}==={}",bpmUser.getId(),bpmUser.getName());
						if(bpmUser.getId().equals(gloabZrrUserId)){//当前处理人是责任人
							//需要对流程进行转办操作

							JSONObject userJson=new JSONObject();
							JSONArray userArrObj=new JSONArray();
							JSONObject userObj=new JSONObject();

							userObj.put("outcome","");
							userObj.put("targetActivityName","task2");
							userObj.put("workhandUsers",new JSONArray());
							JSONArray selectedUsersObj=new JSONArray();
							//多个就迭代
							JSONObject user=new JSONObject();
							user.put("userId",dynTaskChecklistDTO.getManifestPosen());
							user.put("userName",sysUserLoader.getSysUserNameById(dynTaskChecklistDTO.getManifestPosen()));
							user.put("deptId",dynTaskChecklistDTO.getAttribute05());
							user.put("deptName",sysDeptLoader.getSysDeptNameBySysDeptId(dynTaskChecklistDTO.getAttribute05(),SessionHelper.getCurrentLanguageCode()));
							selectedUsersObj.add(user);

							userObj.put("selectedUsers",selectedUsersObj);

							userArrObj.add(userObj);

							userJson.put("users",userArrObj);
							userJson.put("idea","责任人变更。");
							userJson.put("compelManner","");
							userJson.put("outcome","null");

							BpmOperateService bpmOperateService=SpringFactory.getBean(BpmOperateService.class);

							List<HistoryTaskVo> historyTaskVoList=bpmDisplayService.getProcessDetailParameter("",dynInspectionDTO.getId(),"");
							if(historyTaskVoList.size()>0){
								HistoryTaskVo historyTaskVo=historyTaskVoList.get(0);
								String procinstDbid=historyTaskVo.getProcessInstance();
								String executionId=historyTaskVo.getExecutionId();
								//historyTaskVo.get
								ModelAndView mavv =doSupersede("",procinstDbid,executionId,userJson.toJSONString(),"",request,gloabZrrUserId,gloabZrrDeptId);
							}

						}
						if(bpmUser.getId().equals(gloabZrLdUserId)){//当前处理人是责任领导
							//需要对流程进行转办操作

							JSONObject userJson=new JSONObject();
							JSONArray userArrObj=new JSONArray();
							JSONObject userObj=new JSONObject();

							userObj.put("outcome","");
							userObj.put("targetActivityName","task2");
							userObj.put("workhandUsers","[]");
							JSONArray selectedUsersObj=new JSONArray();
							//多个就迭代
							JSONObject user=new JSONObject();
							user.put("userId",dynTaskChecklistDTO.getManifestLeadership());
							user.put("userName",sysUserLoader.getSysUserNameById(dynTaskChecklistDTO.getManifestLeadership()));
							user.put("deptId",dynTaskChecklistDTO.getAttribute06());
							user.put("deptName",sysDeptLoader.getSysDeptNameBySysDeptId(dynTaskChecklistDTO.getAttribute06(),SessionHelper.getCurrentLanguageCode()));
							selectedUsersObj.add(user);

							userObj.put("selectedUsers",selectedUsersObj);

							userArrObj.add(userObj);

							userJson.put("users",userArrObj);
							userJson.put("idea","责任领导变更。");
							userJson.put("compelManner","");
							userJson.put("outcome","null");


							List<HistoryTaskVo> historyTaskVoList=bpmDisplayService.getProcessDetailParameter("",dynInspectionDTO.getId(),"");
							if(historyTaskVoList.size()>0){
								HistoryTaskVo historyTaskVo=historyTaskVoList.get(0);
								String procinstDbid=historyTaskVo.getProcessInstance();
								String executionId=historyTaskVo.getExecutionId();

								ModelAndView mavv =doSupersede("",procinstDbid,executionId,userJson.toJSONString(),"",request,gloabZrLdUserId,gloabZrLdDeptId);
							}
						}


					}

				//	{"idea":"责任人变更。","users":[{"workhandUsers":[],"selectedUsers":[{"deptName":"信息工程部","deptId":"40283881641bf84d01641cc2d59708e1","userName":"吴彦博","userId":"948e83e383d0387f0183ef0e0bd8019f"}],"targetActivityName":"task2","outcome":""}],"compelManner":"","outcome":""}




					//更新任务表
					dynTaskChecklistService.updateDynTaskChecklistSensitive(dynTaskChecklistDTO);

					//更新
					dynTaskChecklistService.updateDynInspectionSensitive(dynInspectionDTO);//更新任务对应的流程表单

				}


			mav.addObject("flag", OpResult.success);
		} catch (Exception ex) {
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;

	}

	public ModelAndView doSupersede(String selectUserId, String procinstDbid, String executionId, String userJson, String activityName, HttpServletRequest request,String forUserId,String forDeptId) {
		ModelAndView mav = new ModelAndView();

		BpmOperateService bpmOperateService=SpringFactory.getBean(BpmOperateService.class);
		try {
			ObjectMapper objectMapper = new ObjectMapper();
			Map<String, Object> variables = new HashMap();
			variables.put("activityName", activityName);
			String to = StringUtils.join(bpmOperateService.getUserIdList(userJson, objectMapper), ",");
			if (("," + to + ",").indexOf("," + forUserId + ",") != -1) {
				mav.addObject("error", "请不要转办给自己！");

			}
			List<WorkHandUsers> workHandUsers =bpmOperateService.getWorkHandUserIdList(userJson, objectMapper);
			String message = bpmOperateService.getMessage(userJson, objectMapper);
			String compelManner = bpmOperateService.getCompelManner(userJson, objectMapper);


			bpmOperateService.supersede(executionId, forUserId, to, workHandUsers, message, compelManner, variables, forUserId, forDeptId, procinstDbid, selectUserId);
			mav.addObject("success",OpResult.success);
		} catch (Exception var16) {
			mav.addObject("error", "流程转办失败，请刷新重试！");
			mav.addObject("errorDetail", var16.getMessage());
		}


		return mav;
	}


}
