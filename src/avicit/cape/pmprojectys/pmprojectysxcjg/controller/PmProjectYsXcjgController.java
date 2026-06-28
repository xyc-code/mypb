package avicit.cape.pmprojectys.pmprojectysxcjg.controller;

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

import avicit.cape.pmprojectys.pmprojectysxcjg.dto.PmProjectYsXcjgDTO;
import avicit.cape.pmprojectys.pmprojectysxcjg.service.PmProjectYsXcjgService;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-09 17:39 
 * @类说明：请填写
 * @修改记录：
 */
@Controller
@Scope("prototype")
@RequestMapping("cape/pmprojectys/pmprojectysxcjg/pmProjectYsXcjgController")
public class PmProjectYsXcjgController implements LoaderConstant {
	private static final Logger logger = LoggerFactory.getLogger(PmProjectYsXcjgController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;

	@Autowired
	private PmProjectYsXcjgService pmProjectYsXcjgService;

	/**
	 * @description:跳转到管理页面
	 * @param request 请求,reponse 响应
	 * @return
	 */
	@RequestMapping(value = "toPmProjectYsXcjgManage")
	public ModelAndView toPmProjectYsXcjgManage(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/cape/pmprojectys/pmprojectysxcjg/PmProjectYsXcjgManage");
		mav.addObject("url", "platform/cape/pmprojectys/pmprojectysxcjg/pmProjectYsXcjgController/operation/");
		return mav;
	}

	/**
	 * @description:跳转到详细页面
	 * @param request 请求,reponse 响应
	 * @return
	 */
	@RequestMapping(value = "/operation/toDetail")
	public ModelAndView toPmProjectYsXcjgDetail(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		String id = ServletRequestUtils.getStringParameter(request, "id", "");
		mav.addObject("id", id);
		mav.setViewName("avicit/cape/pmprojectys/pmprojectysxcjg/PmProjectYsXcjgDetail");
		return mav;
	}

	/**
	* @description:管理页面分页查询
	* @param request pageParameter
	* @return
	*/
	@RequestMapping(value = "/operation/getPmProjectYsXcjgsByPage")
	@ResponseBody
	public Map<String, Object> togetPmProjectYsXcjgByPage(PageParameter pageParameter, HttpServletRequest request) {
		//先获取所有前台传递的参数
		String json = ServletRequestUtils.getStringParameter(request, "param", "");
		String bpmType = ServletRequestUtils.getStringParameter(request, "bpmType", "");
		String bpmState = ServletRequestUtils.getStringParameter(request, "bpmState", "");
		String sfnConditions = ServletRequestUtils.getStringParameter(request, "sdfConditons", "");
		String userId = (String) request.getSession().getAttribute("userId");

		//再依次梳理所有参数
		QueryReqBean<PmProjectYsXcjgDTO> queryReqBean = new QueryReqBean<PmProjectYsXcjgDTO>();
		queryReqBean.setPageParameter(pageParameter);
		PmProjectYsXcjgDTO param = null;

		//使用工具类来判断JSON是否为空
		if (!StringUtils.isEmpty(json)) {
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<PmProjectYsXcjgDTO>() {
			});
			queryReqBean.setSearchParams(param);
		}
		//声明当前方法的返回值
		HashMap<String, Object> map = new HashMap<String, Object>();
		QueryRespBean<PmProjectYsXcjgDTO> result = null;

		if (queryReqBean.getSearchParams() == null) {
			queryReqBean.setSearchParams(new PmProjectYsXcjgDTO());
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
			result = pmProjectYsXcjgService.searchPmProjectYsXcjgByPage(queryReqBean, sfnConditions,
					SessionHelper.getCurrentOrgIdentity(request));
		} catch (Exception ex) {
			return map;
		}

		for (PmProjectYsXcjgDTO dto : result.getResult()) {
			dto.setBusinessstate_(BpmTools.processStateCode2StateName(dto.getBusinessstate_()));
		}
		map.put("total", result.getPageParameter().getTotalCount());
		map.put("rows", result.getResult());
		logger.info("成功获取PmProjectYsXcjgDTO分页数据");
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
			PmProjectYsXcjgDTO dto = pmProjectYsXcjgService.queryPmProjectYsXcjgByPrimaryKey(id);
			mav.addObject("pmProjectYsXcjgDTO", dto);
		}
		mav.setViewName("avicit/cape/pmprojectys/pmprojectysxcjg/PmProjectYsXcjg" + type);
		return mav;
	}

	/**
	 * @description:存数据
	 * @param id 主键id,demoBusinessTripDTO 保存的对象
	 * @return
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	public ModelAndView toSavePmProjectYsXcjgDTO(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String returnId = "";

		try {
			PmProjectYsXcjgDTO pmProjectYsXcjgDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<PmProjectYsXcjgDTO>() {
					});
			if (StringUtils.isEmpty(pmProjectYsXcjgDTO.getId())) {//新增
				pmProjectYsXcjgDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				returnId = pmProjectYsXcjgService.insertPmProjectYsXcjg(pmProjectYsXcjgDTO);
			} else {//修改
				returnId = pmProjectYsXcjgDTO.getId();
				pmProjectYsXcjgService.updatePmProjectYsXcjgSensitive(pmProjectYsXcjgDTO);
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
	public ModelAndView toDeletePmProjectYsXcjgDTO(@RequestBody String[] ids, HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		try {
			pmProjectYsXcjgService.deletePmProjectYsXcjgByIds(ids);
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
			PmProjectYsXcjgDTO pmProjectYsXcjgDTO = JsonHelper.getInstance().readValue(datas, dateFormat,
					new TypeReference<PmProjectYsXcjgDTO>() {
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

			BeanProcess bp = pmProjectYsXcjgService.insertPmProjectYsXcjgStartProcess(pmProjectYsXcjgDTO, parameter);

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
		PmProjectYsXcjgDTO dto = pmProjectYsXcjgService.queryPmProjectYsXcjgByPrimaryKey(id);
		mav.addObject("flag", OpResult.success);
		mav.addObject("datas", dto);
		return mav;
	}
}
