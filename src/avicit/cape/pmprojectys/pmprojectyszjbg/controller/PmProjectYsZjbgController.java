package avicit.cape.pmprojectys.pmprojectyszjbg.controller;

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
import avicit.platform6.bpm.pvm.internal.svc.BpmTools;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.core.domain.BeanProcess;

import com.fasterxml.jackson.core.type.TypeReference;
import avicit.platform6.api.application.SysApplicationAPI;

import avicit.cape.pmprojectys.pmprojectyszjbg.dto.PmProjectYsZjbgDTO;
import avicit.cape.pmprojectys.pmprojectyszjbg.service.PmProjectYsZjbgService;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-09 17:38 
 * @类说明：请填写
 * @修改记录：
 */
@Controller
@Scope("prototype")
@RequestMapping("cape/pmprojectys/pmprojectyszjbg/pmProjectYsZjbgController")
public class PmProjectYsZjbgController implements LoaderConstant {
	private static final Logger logger = LoggerFactory.getLogger(PmProjectYsZjbgController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;

	@Autowired
	private PmProjectYsZjbgService pmProjectYsZjbgService;

	/**
	 * @description:跳转到管理页面
	 * @param request 请求,reponse 响应
	 * @return
	 */
	@RequestMapping(value = "toPmProjectYsZjbgManage")
	public ModelAndView toPmProjectYsZjbgManage(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/cape/pmprojectys/pmprojectyszjbg/PmProjectYsZjbgManage");
		mav.addObject("url", "platform/cape/pmprojectys/pmprojectyszjbg/pmProjectYsZjbgController/operation/");
		return mav;
	}

	/**
	 * @description:跳转到详细页面
	 * @param request 请求,reponse 响应
	 * @return
	 */
	@RequestMapping(value = "/operation/toDetail")
	public ModelAndView toPmProjectYsZjbgDetail(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		String id = ServletRequestUtils.getStringParameter(request, "id", "");
		mav.addObject("id", id);
		mav.setViewName("avicit/cape/pmprojectys/pmprojectyszjbg/PmProjectYsZjbgDetail");
		return mav;
	}

	/**
	* @description:管理页面分页查询
	* @param request pageParameter
	* @return
	*/
	@RequestMapping(value = "/operation/getPmProjectYsZjbgsByPage")
	@ResponseBody
	public Map<String, Object> togetPmProjectYsZjbgByPage(PageParameter pageParameter, HttpServletRequest request) {
		//先获取所有前台传递的参数
		String json = ServletRequestUtils.getStringParameter(request, "param", "");
		String bpmType = ServletRequestUtils.getStringParameter(request, "bpmType", "");
		String bpmState = ServletRequestUtils.getStringParameter(request, "bpmState", "");
		String sfnConditions = ServletRequestUtils.getStringParameter(request, "sdfConditons", "");
		String userId = (String) request.getSession().getAttribute("userId");

		//再依次梳理所有参数
		QueryReqBean<PmProjectYsZjbgDTO> queryReqBean = new QueryReqBean<PmProjectYsZjbgDTO>();
		queryReqBean.setPageParameter(pageParameter);
		PmProjectYsZjbgDTO param = null;

		//使用工具类来判断JSON是否为空
		if (!StringUtils.isEmpty(json)) {
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<PmProjectYsZjbgDTO>() {
			});
			queryReqBean.setSearchParams(param);
		}
		//声明当前方法的返回值
		HashMap<String, Object> map = new HashMap<String, Object>();
		QueryRespBean<PmProjectYsZjbgDTO> result = null;

		if (queryReqBean.getSearchParams() == null) {
			queryReqBean.setSearchParams(new PmProjectYsZjbgDTO());
		}
		if (bpmType == null || bpmType.equals("")) {
			queryReqBean.getSearchParams().setBpmType(null);
		} else {
			queryReqBean.getSearchParams().setBpmType(bpmType);
		}
		if (bpmState == null || bpmState.equals("")) {
			queryReqBean.getSearchParams().setBpmState(null);
		} else {
			queryReqBean.getSearchParams().setBpmState(bpmState);
		}
		queryReqBean.getSearchParams().setCurrUserId(userId);
		try {
			result = pmProjectYsZjbgService.searchPmProjectYsZjbgByPage(queryReqBean, sfnConditions,
					SessionHelper.getCurrentOrgIdentity(request));
		} catch (Exception ex) {
			return map;
		}

		for (PmProjectYsZjbgDTO dto : result.getResult()) {
			dto.setBusinessstate_(BpmTools.processStateCode2StateName(dto.getBusinessstate_()));
		}
		map.put("total", result.getPageParameter().getTotalCount());
		map.put("rows", result.getResult());
		logger.info("成功获取PmProjectYsZjbgDTO分页数据");
		return map;
	}

	/**
	* @description:根据id选择跳转到新建页还是编辑页
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
			PmProjectYsZjbgDTO dto = pmProjectYsZjbgService.queryPmProjectYsZjbgByPrimaryKey(id);
			mav.addObject("pmProjectYsZjbgDTO", dto);
		}
		mav.setViewName("avicit/cape/pmprojectys/pmprojectyszjbg/PmProjectYsZjbg" + type);
		return mav;
	}

	/**
	 * @description:存数据
	 * @param id 主键id,demoBusinessTripDTO 保存的对象
	 * @return
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	public ModelAndView toSavePmProjectYsZjbgDTO(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String returnId = "";

		try {
			PmProjectYsZjbgDTO pmProjectYsZjbgDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<PmProjectYsZjbgDTO>() {
					});
			if (StringUtils.isEmpty(pmProjectYsZjbgDTO.getId())) {//新增
				pmProjectYsZjbgDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				returnId = pmProjectYsZjbgService.insertPmProjectYsZjbg(pmProjectYsZjbgDTO);
			} else {//修改
				returnId = pmProjectYsZjbgDTO.getId();
				pmProjectYsZjbgService.updatePmProjectYsZjbgSensitive(pmProjectYsZjbgDTO);
			}
			mav.addObject("flag", OpResult.success);
			mav.addObject("id", returnId);
		} catch (Exception ex) {
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;

	}

	/**
	 * @description:按照id批量删除数据
	 * @param ids id数组
	 * @return
	 */
	@RequestMapping(value = "/operation/delete", method = RequestMethod.POST)
	public ModelAndView toDeletePmProjectYsZjbgDTO(@RequestBody String[] ids, HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		try {
			pmProjectYsZjbgService.deletePmProjectYsZjbgByIds(ids);
			mav.addObject("flag", OpResult.success);
		} catch (Exception ex) {
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;
	}

	/**
	 * @description:新增并启动流程
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/operation/saveAndStartProcess")
	public ModelAndView saveAndStartProcess(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		String processDefId = ServletRequestUtils.getStringParameter(request, "processDefId", "");
		String formCode = ServletRequestUtils.getStringParameter(request, "formCode", "");
		String jsonString = ServletRequestUtils.getStringParameter(request, "jsonString", "");
		String datas = ServletRequestUtils.getStringParameter(request, "datas", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			PmProjectYsZjbgDTO pmProjectYsZjbgDTO = JsonHelper.getInstance().readValue(datas, dateFormat,
					new TypeReference<PmProjectYsZjbgDTO>() {
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

			BeanProcess bp = pmProjectYsZjbgService.insertPmProjectYsZjbgStartProcess(pmProjectYsZjbgDTO, parameter);

			mav.addObject("flag", OpResult.success);
			mav.addObject("bp", bp);
		} catch (Exception e) {
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;
	}

	/**
	 * @description:转向detail页面
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/operation/toDetailJsp")
	public ModelAndView toDetailJsp(HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView();
		String id = ServletRequestUtils.getStringParameter(request, "id", "");
		PmProjectYsZjbgDTO dto = pmProjectYsZjbgService.queryPmProjectYsZjbgByPrimaryKey(id);
		mav.addObject("flag", OpResult.success);
		mav.addObject("datas", dto);
		return mav;
	}
}
