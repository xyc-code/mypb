package avicit.pb.organize.partyorganization.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.bpm.pvm.internal.cmd.M;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.core.spring.SpringMVCFactory;
import com.alibaba.fastjson.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
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

import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import com.fasterxml.jackson.core.type.TypeReference;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-12 11:39
 * @类说明：党组织结构表Controller
 * @修改记录： 
 */
@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/organize/partyOrganization/partyOrganizationController")
public class PartyOrganizationController implements LoaderConstant {
	private static final Logger LOGGER = LoggerFactory.getLogger(PartyOrganizationController.class);

	@Autowired
	private SysApplicationAPI sysApplicationAPI;
	@Autowired
	private PartyOrganizationService partyOrganizationService;
    @Autowired
	private BeanValidatorUtil beanValidatorUtil;

	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toPartyOrganizationManage")
	public ModelAndView toPartyOrganizationManage() {
		ModelAndView mav = new ModelAndView();
		String url = "platform/avicit/pb/organize/partyOrganization/partyOrganizationController";
		mav.setViewName("avicit/pb/organize/partyorganization/PartyOrganizationManage");
		mav.addObject("url",url);
		mav.addObject("partyOrganMemberUrl", "platform/avicit/pb/organize/partyOrganMember/partyOrganMemberController/operation/");
		return mav;
	}
	/**
	 * 跳转到列表页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toPartyOrganizationTelManage")
	public ModelAndView toPartyOrganizationTelManage(HttpServletRequest request) {
		String userId = SessionHelper.getLoginSysUserId(request);
		ModelAndView mav = new ModelAndView();
		String url = "platform/avicit/pb/organize/partyOrganization/partyOrganizationController";
		mav.setViewName("avicit/pb/organize/partyorganization/PartyOrganizationTelManage");
		mav.addObject("url",url);
		mav.addObject("partyOrganMemberUrl", "platform/avicit/pb/organize/partyOrganMember/partyOrganMemberTelController/operation/");
		mav.addObject("userId",userId);
		return mav;
	}
	/**
	 * 跳转到选择父节点页面
	 * @return ModelAndView
	 */
	@RequestMapping(value = "toPartyOrganizationParentSelect")
	public ModelAndView toPartyOrganizationParentSelect() {
		ModelAndView mav = new ModelAndView();
		String url = "platform/avicit/pb/organize/partyOrganization/partyOrganizationController";
		mav.setViewName("avicit/pb/organize/partyorganization/PartyOrganizationSelect");
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
	public List<ZTreeNode> getPartyOrganizationByParentId(@PathVariable(value = "level") int level,@RequestParam(value="id",required = false) String id) {
		if (id == null) {
			id = "-1";
		} else {
			level = 1;
		}
		return partyOrganizationService.getPartyOrganizationByParentId(id, level, SessionHelper.getCurrentOrgIdentity());
	}

	/**
	 * 查询树节点
	 * @param searchText 查询条件
	 * @return List<ZTreeNode>
	 */
	@RequestMapping(value = "/search")
	@ResponseBody
	public List<ZTreeNode> searchPartyOrganization(@RequestParam(required = true, value = "search_text") String searchText) {
		List<ZTreeNode> result = partyOrganizationService.searchPartyOrganization(searchText,SessionHelper.getCurrentOrgIdentity());
		return result;
	}

	/**
	 * 查询树节点
	 * @param dto 查询条件
	 * @return List<ZTreeNode>
	 */
	@RequestMapping(value = "/searchALL")
	@ResponseBody
	public List<ZTreeNode> searchALL(PartyOrganizationDTO dto) {
		List<ZTreeNode> result = partyOrganizationService.searchAllPartyOrganization(dto,SessionHelper.getCurrentOrgIdentity());
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
	public ModelAndView toInsertOrModifyPartyOrganization(@PathVariable(value = "type") String type, @PathVariable(value = "id") String id) throws Exception {
		ModelAndView mav = new ModelAndView();
		try {
			PartyOrganizationDTO dto = partyOrganizationService.queryPartyOrganizationByPrimaryKey(id);
			// 编辑和详情
			if ("Edit".equals(type) || "Detail".equals(type)) {
				PartyOrganizationDTO parentDTO = partyOrganizationService.queryPartyOrganizationByPrimaryKey(dto.getParentId());
				dto.setParentPartyName(parentDTO == null ? "当前已是根节点" : parentDTO.getPartyName());
				mav.addObject("partyOrganizationDTO", dto);
			} else {
				// 添加平级节点和添加子节点
				String parentId = id;
				String parentPartyName = dto == null ? "当前已是根节点" : dto.getPartyName();
				Long newTreeSort = partyOrganizationService.getNewTreeSortByParentId(parentId);
				//添加子节点和添加平级节点放在一个jsp中
				type = "Add";
				mav.addObject("parentId", parentId);
				mav.addObject("parentPartyName", parentPartyName);
				mav.addObject("newTreeSort", newTreeSort);
			}
			mav.setViewName("avicit/pb/organize/partyorganization/PartyOrganization" + type);
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
	@RequestMapping(value = "/savePartyOrganization", method = RequestMethod.POST)
	@ResponseBody
	@RequiresPermissions("organize:partyOrganization:edit")
	public Map<String, Object> toSavePartyOrganization(HttpServletRequest request) {
		Map<String, Object> map = new HashMap<>();
		String jsonData = ServletRequestUtils.getStringParameter(request, "data", "");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		ZTreeNode treeNode = new ZTreeNode();
		try {
			PartyOrganizationDTO tree = JsonHelper.getInstance().readValue(jsonData, dateFormat,
					new TypeReference<PartyOrganizationDTO>() {
					});
            //调用校验工具类，校验数据
        	beanValidatorUtil.validateObject(tree);
			if (StringUtils.isEmpty(tree.getId())) {
				tree.setParentId(tree.getParentId());
				tree.setOrgIdentity(SessionHelper.getCurrentOrgIdentity(request));
				partyOrganizationService.insertPartyOrganization(tree);
				map.put("type", "1");
				HashMap<String, Object> attr = new HashMap<String, Object>(1);
				attr.put("count", 0);
				treeNode.setAttributes(attr);
				treeNode.setId(tree.getId());
			} else {
				boolean flag = partyOrganizationService.updatePartyOrganization(tree);
				if(flag){
					map.put("type", "3");
				}else{
					map.put("type", "2");
				}
				treeNode.setId(tree.getId());
			}
			map.put("flag", OpResult.success);
			treeNode.set_parentId(tree.getParentId());
			treeNode.setText(tree.getPartyName());
			treeNode.setState("open");
			HashMap<String, Object> attr = new HashMap<String, Object>(1);
			attr.put("partyCode", tree.getPartyCode());
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
	@RequiresPermissions("organize:partyOrganization:delete")
	public Map<String, Object> toDeletePartyOrganization(@RequestBody String[] ids) {
		Map<String, Object> map = new HashMap<>();
		try {
			partyOrganizationService.deletePartyOrganizationByIds(ids);
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
		PartyOrganizationDTO tree = new PartyOrganizationDTO();
		tree.setPartyName("根节点");
		tree.setParentId("-1");
		tree.setOrgIdentity(SessionHelper.getCurrentOrgIdentity());
		tree.setPartyCode("1");
		tree.setTreePath("-1");
		tree.setTreeSort(10L);
		try {
			partyOrganizationService.insertPartyOrganization(tree);
			map.put("flag", OpResult.success);
		} catch (Exception ex) {
			map.put("flag", OpResult.failure);
			return map;
		}
		return map;
	}

	/**
	 * 展示党组织详细数据
	 * @param id 党组织主键
	 * @return 返回数据视图
	 */
	@RequestMapping(value = "/deiatl/{id}")
	public ModelAndView deiatl(@PathVariable("id") String id) {
		ModelAndView modelAndView = new ModelAndView();
		//党组织的状态 根节点为0  党委为1 党总支为2 直属党支部为3 下属党支部为4 党小组为5 默认为0
		int zt = 0;
		PartyOrganizationDTO partyOrganizationDTO= null;
		PartyOrganizationDTO partyOrganDto = null;
		try {
			partyOrganizationDTO = this.partyOrganizationService.queryPartyOrganizationByPrimaryKey(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		assert partyOrganizationDTO != null;
		String partyName = partyOrganizationDTO.getPartyName();
		if(partyName.contains("党委")&&!partyName.equals("中国航发XX党委")){
			zt = 1;
		}
		if(partyName.contains("党总支")){
			zt = 2;
		}

		if(partyName.contains("党支部")&&partyOrganizationDTO.getParentId().equals("402811817e482ecb017e483065e4014e")){
			// 父节点为中国航发XX党委的支部为直属党支部 因为父节点id是固定的 所有用父节点id判断
			zt = 3;
		}
		//下属党支部和直属党支部的区别为 下属党支部的父节点一定是党委或者党总支 同时他的父节点一定不可能是中国航发XX党委 也就是根节点
		//也就是说下属党支部与根节点之间一定存在一个节点
		if(partyName.contains("党支部")&&!partyOrganizationDTO.getParentId().equals("402811817e482ecb017e483065e4014e")){
			try {
				partyOrganDto = this.partyOrganizationService.queryPartyOrganizationByPrimaryKey(partyOrganizationDTO.getParentId());
				String dtoPartyName = partyOrganDto.getPartyName();
				if(dtoPartyName.contains("党委")||dtoPartyName.contains("党总支")){
					zt = 4;
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if(partyName.contains("党小组")){
			zt = 5;
		}
		Map<String, String> map = this.partyOrganizationService.partyCount(id, zt);
		//党员总数
		String partyCount = map.get("partyCount");
		//党小组数
		String partyOrgCount = map.get("partyOrgCount");
		//现有委员数
		String partyPostCount = map.get("partyPostCount");
		//应有委员数
		String partyPostYycount = map.get("partyPostYycount");
		//现有纪检委员数
		String partyJwPostCount = map.get("partyJwPostCount");
		//应有纪委委员数
		String partyJwPostYycount = map.get("partyJwPostYycount");
		//纪委书记姓名
		String partyJwSjPostCount = map.get("partyJwSjPostCount");
		//书记姓名
		String partyPostName = map.get("partyPostName");
		//选举类型
		String partyType= map.get("partyType");
		//上届选举时间
		String partyDateBeg = map.get("partyDateBeg");
		//本届选举时间
		String partyDateEnd = map.get("partyDateEnd");
		//党支部组成
		String partyZc = map.get("partyZc");
		//积极分子人数
		String act_count = map.get("act_count");
		//纪委名称
		String partyJwName = map.get("partyJwName");
		//党委书记是否为专职
		if(zt==4){
			modelAndView.addObject("partyPostNameType","兼职");
		}else if(zt==5){
			modelAndView.addObject("partyPostNameType","");
		}else{
			modelAndView.addObject("partyPostNameType","专职");
		}
		modelAndView.addObject("partyJwName",partyJwName);
		modelAndView.addObject("PARTY_COUNT",partyCount+"人");
		modelAndView.addObject("partyOrgCount",partyOrgCount);
		modelAndView.addObject("partyPostCount",partyPostCount+"人");
		modelAndView.addObject("partyPostYycount",partyPostYycount+"人");
		modelAndView.addObject("partyJwPostCount",partyJwPostCount+"人");
		modelAndView.addObject("partyJwPostYycount",partyJwPostYycount+"人");
		modelAndView.addObject("partyJwSjPostCount",partyJwSjPostCount);
		modelAndView.addObject("partyPostName",partyPostName);
		modelAndView.addObject("partyType",partyType);
		modelAndView.addObject("partyDateBeg",partyDateBeg);
		modelAndView.addObject("partyDateEnd",partyDateEnd);
		modelAndView.addObject("partyZc",partyZc);
		modelAndView.addObject("act_count",act_count);
		modelAndView.setViewName("avicit/pb/organize/partyorganization/PartyOrganZationDetail");
		return modelAndView;
	}
	//党组织基本情况统计表
	@RequestMapping("/orgxjSzDetail/{id}")
	public ModelAndView orgxjSzDetail(@PathVariable("id") String id){
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("avicit/pb/organize/partyorganization/PartyOrganZationOrgDetail");
		modelAndView.addObject("map",this.partyOrganizationService.orgxjSzDetail(id, "", ""));
		return modelAndView;
	}

	/**
	 * 通过党组织id 获取纪委委员
	 * @param id
	 * @return
	 */
	@RequestMapping(value = {"/getPartyOrgUser/{id}"}, method = {RequestMethod.GET} )
	public ResponseEntity<String> getLookUpByCode(@PathVariable("id") String id) {
		MultiValueMap<String, String> header = new LinkedMultiValueMap();
		List<String> partyOrgIds=new ArrayList<>();//党组织ids
		List<Map<String,Object>> userList=new ArrayList<>();
		try {
			PartyOrganizationDTO partyOrganizationDTO = this.partyOrganizationService.queryPartyOrganizationByPrimaryKey(id);



			if(partyOrganizationDTO!=null){
				/*String partyType=partyOrganizationDTO.getAttribute01();//党组织类型 1 党支部 2 党委/党总支
				if("1".equals(partyType)){
					if("402811817e482ecb017e483065e4014e".equals(partyOrganizationDTO.getParentId())){//判断一下父id 是否是跟节点
						partyOrgIds.add(partyOrganizationDTO.getId());
					}else{//还有党委/党总支
						partyOrgIds.add(partyOrganizationDTO.getId());
						partyOrgIds.add(partyOrganizationDTO.getParentId());//将父id也算上
					}
				}*/
				//if("2".equals(partyType)){
				partyOrgIds.add(partyOrganizationDTO.getId());
				//}

			}
			PartyOrganMemberService partyOrganMemberService= SpringMVCFactory.getBean(PartyOrganMemberService.class);

			//查询对应的组织委员
			for(String partyId:partyOrgIds){
				List<PartyOrganMemberDTO> partyOrganMemberList=partyOrganMemberService.queryPartyOrganMemberByPartyId(partyId);
				for(PartyOrganMemberDTO partyOrganMemberDTO:partyOrganMemberList){
					//PARTY_POST	党组织职务 党组织职务 ，组织委员 或者是书记
					if("2".equals(partyOrganMemberDTO.getUserPost())||"7".equals(partyOrganMemberDTO.getUserPost())
							||"1".equals(partyOrganMemberDTO.getUserPost())||"0".equals(partyOrganMemberDTO.getUserPost())
							||"3".equals(partyOrganMemberDTO.getUserPost())||"4".equals(partyOrganMemberDTO.getUserPost())){//组织委员 或者是书记
						Map<String,Object> userMap=new HashMap<>();

						partyOrganMemberDTO.setUserName(sysUserLoader.getSysUserNameById(partyOrganMemberDTO.getUserId()));
						userMap.put("userId",partyOrganMemberDTO.getUserId());
						userMap.put("userName",partyOrganMemberDTO.getUserName());
						userList.add(userMap);
					}
				}
			}

		} catch (Exception e) {
			LOGGER.error("查询党组织机构设置出错{}",e.getMessage());
		}


		return new ResponseEntity(userList, header, HttpStatus.OK);
	}





}

