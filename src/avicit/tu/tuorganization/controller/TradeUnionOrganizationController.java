package avicit.tu.tuorganization.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import avicit.platform6.api.commonselect.ZTreeNode;
import avicit.platform6.api.application.SysApplicationAPI;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.commons.utils.beanvalidator.BeanValidatorUtil;
import avicit.platform6.core.properties.PlatformConstant.OpResult;

import avicit.tu.tuorganization.dto.TradeUnionOrganizationDTO;
import avicit.tu.tuorganization.service.TradeUnionOrganizationService;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-17 09:36
 * @类说明：团组织信息表Controller
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/tu/tuorganization/TradeUnionOrganizationController")
public class TradeUnionOrganizationController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(TradeUnionOrganizationController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private TradeUnionOrganizationService leagueOrganizationService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toLeagueOrganizationManage")
	public ModelAndView toLeagueOrganizationManage() {
		ModelAndView mav = new ModelAndView();
		String url = "platform/avicit/tu/tuorganization/TradeUnionOrganizationController";
		mav.setViewName("avicit/tu/tuorganization/LeagueOrganizationManage");
		mav.addObject("url",url);
		mav.addObject("leagueOrganMemberUrl", "platform/avicit/tu/tuorganmember/TuOrganMemberController/operation/");
		return mav;
	}

	/**
	 * 跳转到选择父节点页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toLeagueOrganizationParentSelect")
	public ModelAndView toLeagueOrganizationParentSelect() {
		ModelAndView mav = new ModelAndView();
		String url = "platform/avicit/tu/tuorganization/TradeUnionOrganizationController";
		mav.setViewName("avicit/tu/tuorganization/LeagueOrganizationSelect");
		mav.addObject("url", url);
		return mav;
	}

	/**
	 * 加载树
	 * @param level 树的等级
	 * @param id 父节点ID
	 * @return List<ZTreeNode>
	 */
	@RequestMapping(value = "/getTree/{level}")
	@ResponseBody
	public List<ZTreeNode> getLeagueOrganizationByParentId(@PathVariable(value = "level") int level,@RequestParam(value="id",required = false) String id) {
		if (id == null) {
			id = "-1";
		} else {
			level = 1;
		}
		return leagueOrganizationService.getLeagueOrganizationByParentId(id, level, SessionHelper.getCurrentOrgIdentity());
	}

	/**
	 * 查询树节点
	 * @param searchText 查询条件
	 * @return List<ZTreeNode>
	 */
	@RequestMapping(value = "/search")
	@ResponseBody
	public List<ZTreeNode> searchLeagueOrganization(@RequestParam(required = true, value = "search_text") String searchText) {
		List<ZTreeNode> result = leagueOrganizationService.searchLeagueOrganization(searchText,SessionHelper.getCurrentOrgIdentity());
		return result;
	}

	/**
	* 根据id选择跳转到新建页还是编辑页
	* @param type 操作类型新建还是编辑
	* @param id 编辑数据的id
	* @return ModelAndView
	* @throws Exception
	*/
	@RequestMapping(value = "/operation/{type}/{id}")
	public ModelAndView toInsertOrModifyLeagueOrganization(@PathVariable(value = "type") String type, @PathVariable(value = "id") String id) throws Exception {
		ModelAndView mav = new ModelAndView();
		try {
			TradeUnionOrganizationDTO dto = leagueOrganizationService.queryLeagueOrganizationByPrimaryKey(id);
			// 编辑和详情
			if ("Edit".equals(type) || "Detail".equals(type)) {
				TradeUnionOrganizationDTO parentDTO = leagueOrganizationService.queryLeagueOrganizationByPrimaryKey(dto.getParentId());
				dto.setParentLeagueName(parentDTO == null ? "当前已是根节点" : parentDTO.getLeagueName());
				mav.addObject("leagueOrganizationDTO", dto);
			} else {
				// 添加平级节点和添加子节点
				String parentId = id;
				String parentLeagueName = dto == null ? "当前已是根节点" : dto.getLeagueName();
				Long newTreeSort = leagueOrganizationService.getNewTreeSortByParentId(parentId);
				//添加子节点和添加平级节点放在一个jsp中
				type = "Add";
				mav.addObject("parentId", parentId);
				mav.addObject("parentLeagueName", parentLeagueName);
				mav.addObject("newTreeSort", newTreeSort);
			}
			mav.setViewName("avicit/tu/tuorganization/LeagueOrganization" + type);
			mav.addObject("flag", OpResult.success);
		} catch (Exception e){
			e.printStackTrace();
			mav.addObject("flag", OpResult.failure);
		}	
		return mav;
	}

	/**
	 * 保存数据
	 * @param request 请求
	 * @return Map<String, Object>
	 */
	@RequestMapping(value = "/saveLeagueOrganization", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("organize:leagueOrganization:edit")
	public Map<String, Object> toSaveLeagueOrganization(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		ZTreeNode treeNode = new ZTreeNode();
		try {
			TradeUnionOrganizationDTO tree = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<TradeUnionOrganizationDTO>() {
					});
            //调用校验工具类，校验数据
        	beanValidatorUtil.validateObject(tree);
			if (StringUtils.isEmpty(tree.getId())) {
				tree.setParentId(tree.getParentId());
				tree.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				leagueOrganizationService.insertLeagueOrganization(tree);
				map.put("type", "1");
				HashMap<String, Object> attr = new HashMap<String, Object>(1);
				attr.put("count", 0);
				treeNode.setAttributes(attr);
				treeNode.setId(tree.getId());
			} else {
				boolean flag = leagueOrganizationService.updateLeagueOrganization(tree);
				if(flag){
					map.put("type", "3");
				}else{
					map.put("type", "2");
				}
				treeNode.setId(tree.getId());
			}
			map.put("flag", OpResult.success);
			treeNode.set_parentId(tree.getParentId());
			treeNode.setText(tree.getLeagueName());
			treeNode.setState("open");
			HashMap<String, Object> attr = new HashMap<String, Object>(1);
			attr.put("leagueCode", tree.getLeagueCode());
			attr.put("startDate", tree.getStartDate());
			attr.put("finishDate", tree.getFinishDate());
			treeNode.setAttributes(attr);
			map.put("data", treeNode);
			map.put("pid", tree.getParentId());
		} catch (Exception ex) {
		    map.put("errorMsg", ex.getMessage());
			map.put("flag", OpResult.failure);
			return map;
		}
		return map;
	}

	/**
	 * 按照id批量删除数据
	 * @param ids id数组
	 * @return Map<String, Object>
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("organize:leagueOrganization:delete")
	public Map<String, Object> toDeleteLeagueOrganization(@RequestBody String[] ids) {
		Map<String, Object> map = new HashMap<>();
		try {
			leagueOrganizationService.deleteLeagueOrganizationByIds(ids);
			map.put("flag", OpResult.success);
		} catch (Exception ex) {
			map.put("flag", OpResult.failure);
			return map;
		}
		return map;
	}

	/**
	 * 初始化根节点
	 * 如果需要修改根节点数据通过前台页面设置
	 * @return Map<String, Object>
	 */
	@RequestMapping(value = "/insertRoot", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> toInsertRoot() {
		Map<String, Object> map = new HashMap<>();
		TradeUnionOrganizationDTO tree = new TradeUnionOrganizationDTO();
		tree.setLeagueName("根节点");
		tree.setParentId("-1");
		tree.setOrgIdentity(SessionHelper.getCurrentOrgIdentity());
		tree.setLeagueCode("1");
		tree.setTreePath("-1");
		tree.setTreeSort(10L);
		try {
			leagueOrganizationService.insertLeagueOrganization(tree);
			map.put("flag", OpResult.success);
		} catch (Exception ex) {
			map.put("flag", OpResult.failure);
			return map;
		}
		return map;
	}
}

