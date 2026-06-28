package avicit.cape.pmprojectys.pmprojectyshpj.controller;

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
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.properties.PlatformConstant.OpResult;
import avicit.platform6.core.rest.msg.PageParameter;
import avicit.platform6.core.rest.msg.QueryReqBean;
import avicit.platform6.core.rest.msg.QueryRespBean;
import avicit.platform6.api.application.SysApplicationAPI;

import avicit.cape.pmprojectys.pmprojectyshpj.dto.PmProjectYsHpjDTO;
import avicit.cape.pmprojectys.pmprojectyshpj.service.PmProjectYsHpjService;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：请填写
 * @邮箱：请填写
 * @创建时间： 2026-06-11 10:27 
 * @类说明：请填写
 * @修改记录：
 */
@Controller
@Scope("prototype")
@RequestMapping("cape/pmprojectys/pmprojectyshpj/pmProjectYsHpjController")
public class PmProjectYsHpjController implements LoaderConstant {
	private static final Logger logger = LoggerFactory.getLogger(PmProjectYsHpjController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private PmProjectYsHpjService pmProjectYsHpjService;

	/**
	 * @description:跳转到管理页面
	 * @param request 请求,reponse 响应
	 * @return
	 */
	@RequestMapping(value = "toPmProjectYsHpjManage")
	public ModelAndView toPmProjectYsHpjManage(HttpServletRequest request, HttpServletResponse reponse) {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("avicit/cape/pmprojectys/pmprojectyshpj/PmProjectYsHpjManage");
		mav.addObject("url", "platform/cape/pmprojectys/pmprojectyshpj/pmProjectYsHpjController/operation/");
		return mav;
	}

	/**
	* @description:管理页面分页查询
	* @param request pageParameter
	* @return
	*/
	@RequestMapping(value = "/operation/getPmProjectYsHpjsByPage")
	@ResponseBody
	public Map<String, Object> togetPmProjectYsHpjByPage(PageParameter pageParameter, HttpServletRequest request) {
		//先获取所有前台传递的参数
		String json = ServletRequestUtils.getStringParameter(request, "param", "");
		String sfnConditions = ServletRequestUtils.getStringParameter(request, "sdfConditons", "");//自定义查询条件

		//再依次梳理所有参数
		QueryReqBean<PmProjectYsHpjDTO> queryReqBean = new QueryReqBean<PmProjectYsHpjDTO>();
		queryReqBean.setPageParameter(pageParameter);
		PmProjectYsHpjDTO param = null;

		//使用工具类来判断JSON是否为空
		if (!StringUtils.isEmpty(json)) {
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			param = JsonHelper.getInstance().readValue(json, dateFormat, new TypeReference<PmProjectYsHpjDTO>() {
			});
			queryReqBean.setSearchParams(param);
		}

		//声明当前方法的返回值
		HashMap<String, Object> map = new HashMap<String, Object>();
		QueryRespBean<PmProjectYsHpjDTO> result = null;
		try {
			result = pmProjectYsHpjService.searchPmProjectYsHpjByPage(queryReqBean, sfnConditions,
					SessionHelper.getCurrentOrgIdentity(request));
		} catch (Exception ex) {
			return map;
		}
		for (PmProjectYsHpjDTO dto : result.getResult()) {
			dto.setPfType(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("JG_EQUIPMENT_FROM",
					dto.getPfType(), sysApplicationAPI.getCurrentAppId()));
			dto.setYsYsjl(sysLookupLoader.getNameByLooupTypeCodeAndLooupCodeByAppId("JG_CHECK_RESULT", dto.getYsYsjl(),
					sysApplicationAPI.getCurrentAppId()));
		}
		map.put("total", result.getPageParameter().getTotalCount());
		map.put("rows", result.getResult());
		logger.info("成功获取PmProjectYsHpjDTO分页数据");
		return map;
	}

	/**
	* @description:根据id选择跳转到新建页还是编辑页
	* @param type 操作类型新建还是编辑 ,id 编辑数据的id, request 请求
	* @return
	* @throws Exception
	*/
	@RequestMapping(value = "/operation/{type}/{id}")
	public ModelAndView toOpertionPage(@PathVariable String type, @PathVariable String id, HttpServletRequest request)
			throws Exception {
		ModelAndView mav = new ModelAndView();
		if (!"Add".equals(type)) {//编辑窗口或者详细页窗口
			//主表数据
			PmProjectYsHpjDTO dto = pmProjectYsHpjService.queryPmProjectYsHpjByPrimaryKey(id);
			mav.addObject("pmProjectYsHpjDTO", dto);
		}
		mav.setViewName("avicit/cape/pmprojectys/pmprojectyshpj/PmProjectYsHpj" + type);
		return mav;
	}

	/**
	 * @description:保存数据
	 * @param id 主键id,demoBusinessTripDTO 保存的对象
	 * @return
	 */
	@RequestMapping(value = "/operation/save", method = RequestMethod.POST)
	public ModelAndView toSavePmProjectYsHpjDTO(HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String returnId = "";
		try {
			PmProjectYsHpjDTO pmProjectYsHpjDTO = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<PmProjectYsHpjDTO>() {
					});
			if (StringUtils.isEmpty(pmProjectYsHpjDTO.getId())) {//新增
				pmProjectYsHpjDTO.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				returnId = pmProjectYsHpjService.insertPmProjectYsHpj(pmProjectYsHpjDTO);
			} else {//修改
				returnId = pmProjectYsHpjDTO.getId();
				pmProjectYsHpjService.updatePmProjectYsHpjSensitive(pmProjectYsHpjDTO);
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
	public ModelAndView toDeletePmProjectYsHpjDTO(@RequestBody String[] ids, HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		try {
			pmProjectYsHpjService.deletePmProjectYsHpjByIds(ids);
			mav.addObject("flag", OpResult.success);
		} catch (Exception ex) {
			mav.addObject("flag", OpResult.failure);
			return mav;
		}
		return mav;
	}
}
