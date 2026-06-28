package avicit.cape.pro.pmprojectworkreport.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang3.StringUtils;
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

import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.domain.BeanProcess;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.cape.pro.pmprojectworkreport.dto.PmProjectWorkreportDTO;
import avicit.cape.pro.pmprojectworkreport.service.PmProjectWorkreportService;

import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-03-31 23:21 
 * @类说明：请填写
 * @修改记录：
 */
@Controller
@Scope("prototype")
@RequestMapping("cape/pro/pmprojectworkreport/pmProjectWorkreportController")
public class PmProjectWorkreportController implements LoaderConstant {
	private static final Logger logger = LoggerFactory.getLogger(PmProjectWorkreportController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private PmProjectWorkreportService pmProjectWorkreportService;

	/**
	 * @description: 跳转到管理页面
	 * @param request 请求
	 * @param reponse 响应
	 * @return
	 */
	@RequestMapping(value = "toPmProjectWorkreportManage")
	public ModelAndView toPmProjectWorkreportManage(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/cape/pro/pmprojectworkreport/PmProjectWorkreportManage");
		mav.addObject("url", "platform/cape/pro/pmprojectworkreport/pmProjectWorkreportController/operation/");
		return mav;
	}

	/**
	 * @description:跳转到详细页面
	 * @param request 请求,reponse 响应
	 * @return
	 */
	@RequestMapping(value = "/operation/toDetail")
	public ModelAndView toPmProjectWorkreportDetail(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		String id = ServletRequestUtils.getStringParameter(request, "id", "");
		mav.addObject("id", id);
		mav.setViewName("avicit/cape/pro/pmprojectworkreport/PmProjectWorkreportDetail");
		return mav;
	}

	/**
	 * @description: 分页查询方法
	 * @param pageParameter 查询条件,request 请求
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/operation/getPmProjectWorkreportsByPage")
	@ResponseBody
	public Map<String, Object> togetPmProjectWorkreportByPage(PageParameter pageParameter, HttpServletRequest request)
			throws Exception {
		//先获取所有前台传递的参数
		String json = ServletRequestUtils.getStringParameter(request, "param", "");
		String sfnConditions = ServletRequestUtils.getStringParameter(request, "sdfConditons", "");//自定义查询条件

		//再依次梳理所有参数
		QueryReqBean<PmProjectWorkreportDTO> queryReqBean = new QueryReqBean<PmProjectWorkreportDTO>();
		queryReqBean.setPageParameter(pageParameter);
		PmProjectWorkreportDTO param = null;

		//使用工具类来判断JSON是否为空
		if (!StringUtils.isEmpty(json)) {
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<PmProjectWorkreportDTO>() {
			});
			param.setCurrUserId(SessionHelper.getLoginSysUserId(request));
			queryReqBean.setSearchParams(param);
		}

		//声明当前方法的返回值
		HashMap<String, Object> map = new HashMap<String, Object>();
		QueryRespBean<PmProjectWorkreportDTO> result = null;
		try {
			result = pmProjectWorkreportService.searchPmProjectWorkreportByPage(queryReqBean, sfnConditions,
					SessionHelper.getCurrentOrgIdentity(request));
		} catch (Exception ex) {
			return map;
		}
		for (PmProjectWorkreportDTO dto : result.getResult()) {

			dto.setUserIdAlias(sysUserLoader.getSysUserNameById(dto.getUserId()));

			dto.setDeptIdAlias(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(),
					SessionHelper.getCurrentLanguageCode(request)));

			dto.setLeaderDeptAlias(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getLeaderDept(),
					SessionHelper.getCurrentLanguageCode(request)));

			dto.setProjectLeaderAlias(sysUserLoader.getSysUserNameById(dto.getProjectLeader()));

			dto.setCompanyManagerIdAlias(sysUserLoader.getSysUserNameById(dto.getCompanyManagerId()));

			dto.setScienceUserIdAlias(sysUserLoader.getSysUserNameById(dto.getScienceUserId()));

		}
		map.put("total", result.getPageParameter().getTotalCount());
		map.put("rows", result.getResult());
		logger.info("成功获取PmProjectWorkreportDTO分页数据");
		return map;
	}

	/**
	* @description: 根据id选择跳转到新建页还是编辑页
	* @param type 操作类型新建还是编辑,id 编辑数据的id,request 请求
	* @return
	* @throws Exception
	*/
	@RequestMapping(value = "/operation/{type}/{id}")
	public ModelAndView toOpertionPage(@PathVariable String type, @PathVariable String id, HttpServletRequest request)
			throws Exception {
		ModelAndView mav = new ModelAndView();
		if (!"Add".equals(type)) {//编辑窗口或者详细页窗口
			//主表数据
			PmProjectWorkreportDTO dto = pmProjectWorkreportService.queryPmProjectWorkreportByPrimaryKey(id);

			dto.setUserIdAlias(sysUserLoader.getSysUserNameById(dto.getUserId()));
			dto.setDeptIdAlias(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(),
					SessionHelper.getCurrentLanguageCode(request)));
			dto.setLeaderDeptAlias(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getLeaderDept(),
					SessionHelper.getCurrentLanguageCode(request)));
			dto.setProjectLeaderAlias(sysUserLoader.getSysUserNameById(dto.getProjectLeader()));
			dto.setCompanyManagerIdAlias(sysUserLoader.getSysUserNameById(dto.getCompanyManagerId()));
			dto.setScienceUserIdAlias(sysUserLoader.getSysUserNameById(dto.getScienceUserId()));

			mav.addObject("pmProjectWorkreportDTO", dto);
			mav.addObject("id", id);
		}
		mav.setViewName("avicit/cape/pro/pmprojectworkreport/PmProjectWorkreport" + type);
		return mav;
	}

	/**
	 * @description: 新增并启动流程
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/operation/saveAndStartProcess", method = RequestMethod.POST)
	public ModelAndView saveAndStartProcess(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();

		String processDefId = ServletRequestUtils.getStringParameter(request, "processDefId", "");
		String formCode = ServletRequestUtils.getStringParameter(request, "formCode", "");
		String jsonString = ServletRequestUtils.getStringParameter(request, "jsonString", "");
		String datas = ServletRequestUtils.getStringParameter(request, "datas", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			PmProjectWorkreportDTO pmProjectWorkreport = JsonHelper.getInstance().readValue(datas, dateFormat,
					new TypeReference<PmProjectWorkreportDTO>() {
					});
			String userId = (String) request.getSession().getAttribute("userId");
			String deptId = (String) request.getSession().getAttribute("deptId");
			/////////////////启动流程所需要的参数///////////////////
			Map<String, Object> parameter = new HashMap<String, Object>();
			parameter.put("processDefId", processDefId);
			parameter.put("formCode", formCode);
			parameter.put("jsonString", jsonString);
			parameter.put("userId", userId);
			parameter.put("deptId", deptId);
			pmProjectWorkreport.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
			BeanProcess bp = pmProjectWorkreportService.insertPmProjectWorkreportAndStartProcess(pmProjectWorkreport,
					parameter);

			mav.addObject("flag", OpResult.success);
			mav.addObject("bp", bp);
		} catch (Exception e) {
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;
	}

	/**
	 * @description: 保存数据
	 * @param id 主键id,demoBusinessTripDTO 保存的对象
	 * @return
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	public ModelAndView toSavePmProjectWorkreportDTO(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		try {
			PmProjectWorkreportDTO pmProjectWorkreportDTO = JsonHelper.getInstance().readValue(jsonData,
					new TypeReference<PmProjectWorkreportDTO>() {
					});
			if (StringUtils.isEmpty(pmProjectWorkreportDTO.getId())) {//新增
				pmProjectWorkreportService.insertPmProjectWorkreport(pmProjectWorkreportDTO);
			} else {//修改
				pmProjectWorkreportService.updatePmProjectWorkreportSensitive(pmProjectWorkreportDTO);
			}
			mav.addObject("flag", OpResult.success);
		} catch (Exception ex) {
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;
	}

	/**
	 * @description: 按照id批量删除数据
	 * @param ids id数组
	 * @return
	 */
	@RequestMapping(value = "/operation/delete", method = RequestMethod.POST)
	public ModelAndView toDeletePmProjectWorkreportDTO(@RequestBody String[] ids, HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		try {
			pmProjectWorkreportService.deletePmProjectWorkreportByIds(ids);
			mav.addObject("flag", OpResult.success);
		} catch (Exception ex) {
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;
	}

	/**
	* @description: 转向detail页面
	* @param request
	* @return
	* @throws Exception
	*/
	@RequestMapping("/toDetailJsp")
	public ModelAndView toDetailJsp(HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView();
		String id = ServletRequestUtils.getStringParameter(request, "id", "");
		PmProjectWorkreportDTO dto = pmProjectWorkreportService.queryPmProjectWorkreportByPrimaryKey(id);

		dto.setUserIdAlias(sysUserLoader.getSysUserNameById(dto.getUserId()));

		dto.setDeptIdAlias(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getDeptId(),
				SessionHelper.getCurrentLanguageCode(request)));

		dto.setLeaderDeptAlias(sysDeptLoader.getSysDeptNameBySysDeptId(dto.getLeaderDept(),
				SessionHelper.getCurrentLanguageCode(request)));

		dto.setProjectLeaderAlias(sysUserLoader.getSysUserNameById(dto.getProjectLeader()));

		dto.setCompanyManagerIdAlias(sysUserLoader.getSysUserNameById(dto.getCompanyManagerId()));

		dto.setScienceUserIdAlias(sysUserLoader.getSysUserNameById(dto.getScienceUserId()));

		mav.addObject("flag", OpResult.success);
		mav.addObject("pmProjectWorkreport", dto);
		return mav;
	}
}
