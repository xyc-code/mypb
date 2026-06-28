package avicit.pb.member.dynufminfo.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpmreform.bpmbusiness.dto.StartResultBean;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;

import avicit.pb.member.dynufminfo.dto.DynUfmInfoDTO;
import avicit.pb.member.dynufminfo.service.DynUfmInfoService;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2023-07-13 13:13
 * @类说明：DYN_UFM_INFOController
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/member/dynUfmInfo/dynUfmInfoController")
public class DynUfmInfoController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(DynUfmInfoController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private DynUfmInfoService dynUfmInfoService;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toDynUfmInfoManage")
	public ModelAndView toDynUfmInfoManage() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/pb/member/dynufminfo/DynUfmInfoManage");
		mav.addObject("url", "platform/avicit/pb/member/dynUfmInfo/dynUfmInfoController/operation/");
		return mav;
	}

	/**
	 * 列表页面分页查询
	 * @param pageParameter 查询条件
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/getDynUfmInfosByPage")
	@ResponseBody
	@RequiresPermissions("member:dynUfmInfo:view")
	public Map<String, Object> togetDynUfmInfoByPage(PageParameter pageParameter, HttpServletRequest request) {
		QueryReqBean<DynUfmInfoDTO> queryReqBean = new QueryReqBean<DynUfmInfoDTO>();
		queryReqBean.setPageParameter(pageParameter);
        //字段查询条件
		String keyWord = ServletRequestUtils.getStringParameter(request, "param", "");
		String orderBy = "";

		HashMap<String, Object> map = new HashMap<String, Object>();
		DynUfmInfoDTO param = null;
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		QueryRespBean<DynUfmInfoDTO> result = null;
		if (keyWord != null && !"".equals(keyWord)) {
			param = JsonHelper.getInstance().readValue(keyWord, dateFormat, new TypeReference<DynUfmInfoDTO>() {
			});
		}else{
			param = new DynUfmInfoDTO();
		}
		queryReqBean.setSearchParams(param);
		param.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
		try {
			result = dynUfmInfoService.searchDynUfmInfoByPage(queryReqBean,orderBy);
		} catch (Exception ex) {
			return map;
		}
		for (DynUfmInfoDTO dto : result.getResult()) {
			dto.setGenderName(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("PLATFORM_SEX", dto.getGender(),sysApplicationAPI.getCurrentAppId()));
		}
		map.put("total", result.getPageParameter().getTotalCount());
		map.put("rows", result.getResult());
		LOGGER.info("成功获取DynUfmInfoDTO分页数据");
		return map;
	}

	/**
	* 根据传入的的类型跳转到对应页面
	* @param type，包括三个值，分别是Add:新建；Edit：编辑；Detail：详情
	* @param id 数据的id
	* @return ModelAndView
	* @throws Exception
	*/
	@RequestMapping(value = "/operation/{type}/{id}")
	public ModelAndView toOpertionPage(@PathVariable String type, @PathVariable String id)
			throws Exception {
		ModelAndView mav = new ModelAndView();
		//编辑窗口或者详细页窗口
		if (!"Add".equals(type)) {
			DynUfmInfoDTO dto = dynUfmInfoService.queryDynUfmInfoByPrimaryKey(id);
			mav.addObject("dynUfmInfoDTO", dto);
		}
		mav.setViewName("avicit/pb/member/dynufminfo/DynUfmInfo" + type);
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("member:dynUfmInfo:edit")
	public Map<String,Object> toSaveDynUfmInfo(HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String,Object>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			DynUfmInfoDTO dynUfmInfoDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<DynUfmInfoDTO>() {
					});
			if (StringUtils.isEmpty(dynUfmInfoDTO.getId())) {
				//新增
				dynUfmInfoDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				String id = dynUfmInfoService.insertDynUfmInfo(dynUfmInfoDTO);
				map.put("id", id);
			} else {
				//修改
				dynUfmInfoService.updateDynUfmInfoSensitive(dynUfmInfoDTO);
				map.put("id", dynUfmInfoDTO.getId());
			}
			map.put("flag", OpResult.success);
		} catch (Exception ex) {
			map.put("flag", OpResult.failure);
			map.put("error", ex.getMessage());
			return map;
		}
		return map;

	}

	/**
	 * 按照id批量删除数据
	 * @param ids id数组
	 * @return Map<String,Object>
	 */
	@RequestMapping(value = "/operation/delete", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("member:dynUfmInfo:delete")
	public Map<String,Object> toDeleteDynUfmInfo(@RequestBody String[] ids) {
		Map<String,Object> map = new HashMap<String,Object>();
		try {
			dynUfmInfoService.deleteDynUfmInfoByIds(ids);
			map.put("flag", OpResult.success);
		} catch (Exception ex) {
			map.put("flag", OpResult.failure);
			return map;
		}
		return map;
	}
	

	 @RequestMapping("/download")
		public void download(HttpServletRequest request,HttpServletResponse response,String json) throws Exception{
			HSSFWorkbook workbook = new HSSFWorkbook();
			List<DynUfmInfoDTO> studentsList = JSONObject.parseArray(json, DynUfmInfoDTO.class);
			String fileName="";
			String [] headers = {"编号","党组织名称","姓名","性别","出生年月","民族","职务","职称","全日制学历","非全日制学历","政治面貌","统战身份","宗教信仰","居留国家","居留年限","居留原因","是否香港、澳门同胞","是否香港、澳门眷属","是否台湾同胞","是否台湾同胞在大陆亲属","是否华侨、归侨、侨眷","（眷属）侨居国","在民主党派、人大、政协等任职情况","手机号码"};
			dynUfmInfoService.downloadExcel(workbook,0,headers,studentsList);
			ByteArrayOutputStream out = new ByteArrayOutputStream();
			workbook.write(out);
			byte[] content = out.toByteArray();
			InputStream ins = new ByteArrayInputStream(content);
			fileName = URLEncoder.encode(("统战成员信息表.xls"),"UTF-8").replace("+","%20");
			response.reset();
			response.setContentType("application/vnd.ms-excel;charset=utf-8");
			response.setHeader("Content-Disposition","attachment;filename="+fileName);
			ServletOutputStream outputStrem = response.getOutputStream();
			BufferedInputStream bins = new BufferedInputStream(ins);
			BufferedOutputStream bouts = new BufferedOutputStream(outputStrem);
			byte[] buff = new byte[2048];
			int bytesRead;
			while (-1 != (bytesRead = bins.read(buff,0,buff.length))){
				bouts.write(buff,0,bytesRead);
			}
			bins.close();
			bouts.close();
		}
	
	
		
		/**
		 * psu+
	  	 * copy 129行
	  	 * 
	  	 */
	  	@RequestMapping(value="/operation/checkCode",method=RequestMethod.POST)
	  	public Map<String,Object> checkCode(HttpServletRequest request,String code){
			Map<String,Object> map = new HashMap<String,Object>();

			try {

				DynUfmInfoDTO dto = dynUfmInfoService.queryEmployeeid(code);
				if(dto==null){
					map.put("flag",OpResult.success);
				}else{
				    map.put("errorMsg", "员工号已经存在");
					map.put("flag",OpResult.failure);
				}

			} catch (Exception ex) {
			    map.put("errorMsg", ex.getMessage());
				map.put("flag",OpResult.failure);
			}
	  		return map;
	  	}
	

		
	
	
	
}

