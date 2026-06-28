package avicit.pb.organize.partyorganization.service;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.*;

import io.swagger.models.auth.In;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import avicit.platform6.api.commonselect.ZTreeNode;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.commons.utils.PojoUtil;
import avicit.platform6.core.exception.DaoException;
import avicit.platform6.core.properties.PlatformConstant.OpType;
import avicit.platform6.modules.system.syslog.service.SysLogUtil;
import avicit.pb.organize.partyorganization.dao.PartyOrganizationDAO;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-01-12 11:39
 * @类说明：党组织结构表Service
 * @修改记录： 
 */
@Service
public class PartyOrganizationService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(PartyOrganizationService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private PartyOrganizationDAO partyOrganizationDAO;
	
    @Autowired
	private PartyOrganMemberService partyOrganMemberService;

	/**
	 * 数据库中IN字段的内容个数限制，每个数据库限制不同，请根据数据库进行调整，建议不超过1000
	 */
	private static final int ID_LIMIT = 500;
	
	/**
	 * 主键查询
	 * @param
	 * @return PartyOrganizationDTO
	 * @throws Exception
	 */
	public PartyOrganizationDTO queryPartyOrganizationByPrimaryKey(String id) throws Exception {
		try {
			PartyOrganizationDTO dto = partyOrganizationDAO.findPartyOrganizationById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryPartyOrganizationByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	/**
	 * 党组织编号查询
	 * @param
	 * @return PartyOrganizationDTO
	 * @throws Exception
	 */
	public PartyOrganizationDTO queryPartyOrganizationByPartyCode(String partyCode) throws Exception {
		try {
			PartyOrganizationDTO dto = partyOrganizationDAO.findPartyOrganizationByPartyCode(partyCode);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryPartyOrganizationByPartyCode出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}
	/**
	 * 查询父节点信息
	 * @param parentId
	 * @return PartyOrganizationDTO
	 * @throws Exception
	 */
	public PartyOrganizationDTO findParentPartyOrganizationById(String parentId) {
		try {
			PartyOrganizationDTO dto = partyOrganizationDAO.findPartyOrganizationById(parentId);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findParentPartyOrganizationById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 *  根据ID获取他的下属子节点
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public List<PartyOrganizationDTO> findChildrenPartyOrganizationById(String id){
		try {
			List<PartyOrganizationDTO> list = partyOrganizationDAO.findChildrenPartyOrganizationById(id);
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findChildrenPartyOrganizationById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 获取当前组织的根节点
	 * @param orgIdentity
	 * @return
	 */
	public PartyOrganizationDTO findPartyOrganizationRootNode(String orgIdentity){
		try {
			PartyOrganizationDTO dto = partyOrganizationDAO.findPartyOrganizationRootNode(orgIdentity);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findPartyOrganizationRootNode出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 新增数据
	* @param dto 新增对象
	* @return String
	* @throws Exception
	*/
	public String insertPartyOrganization(PartyOrganizationDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			//自动计算其他相关属性值
			setTreeProperties(dto,null,OpType.insert);
			partyOrganizationDAO.insertPartyOrganization(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertPartyOrganization出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 更新数据
	 * @param dto 更新对象
	 * @return flag 是否更新过树关键属性
	 * @throws Exception
	 */
	public boolean updatePartyOrganization(PartyOrganizationDTO dto) throws Exception {
		boolean flag = false;
		try {
			List<PartyOrganizationDTO> updateChildrenList = null;
			PartyOrganizationDTO old = partyOrganizationDAO.findPartyOrganizationById(dto.getId());
			//记录原父节点
			String oldParentId = old.getParentId();
			SysLogUtil.log4Update(dto, old);
			PojoUtil.setSysProperties(dto, OpType.update);
			if(isUpdateTreeProperties(dto,old)){
				setTreeProperties(dto,old,OpType.update);
				updateChildrenList = updateChildrenTreeProperties(dto,old);
				flag = true;
			}
			PojoUtil.copyProperties(old, dto, true);
			int ret = partyOrganizationDAO.updatePartyOrganizationSensitive(old);
			if (ret == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			if (!CollectionUtils.isEmpty(updateChildrenList)) {
				partyOrganizationDAO.updatePartyOrganizationList(updateChildrenList);
			}
			// 如果是移动节点，需要修改原父节点和新父节点的叶子属性
			if (!dto.getParentId().equals(oldParentId)) {
				//判断原父节点下还是否有子节点，如果没有，则需要把父节点置为叶子节点
				List<PartyOrganizationDTO> childrenList = partyOrganizationDAO.findChildrenPartyOrganizationById(oldParentId);
				if (CollectionUtils.isEmpty(childrenList)) {
					PartyOrganizationDTO oldParentDTO = partyOrganizationDAO.findPartyOrganizationById(oldParentId);
					oldParentDTO.setTreeLeaf("Y");
					partyOrganizationDAO.updatePartyOrganizationSensitive(oldParentDTO);
				}
				// 判断当前父节点是否为叶子节点，如果是，则更改为非叶子节点
				PartyOrganizationDTO curParentDTO = partyOrganizationDAO.findPartyOrganizationById(dto.getParentId());
				if ("Y".equals(curParentDTO.getTreeLeaf())) {
					curParentDTO.setTreeLeaf("N");
					partyOrganizationDAO.updatePartyOrganizationSensitive(curParentDTO);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updatePartyOrganization出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
		return flag;
	}

	/**
	 * 根据主键删除数据
	 * @param id 主键ID
	 * @return int
	 * @throws Exception
	 */
	public int deletePartyOrganizationById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			PartyOrganizationDTO dto = partyOrganizationDAO.findPartyOrganizationById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			// 删除关联子表数据
			PartyOrganMemberDTO queryParams = new PartyOrganMemberDTO();
			queryParams.setPartyId(id);
			List<PartyOrganMemberDTO> list = partyOrganMemberService.searchPartyOrganMember(queryParams, "" ,"");
			for (PartyOrganMemberDTO partyOrganMemberDTO : list) {
				partyOrganMemberService.deletePartyOrganMemberById(partyOrganMemberDTO.getId());
			}
			int count = partyOrganizationDAO.deletePartyOrganizationById(id);
			setTreeProperties(dto,null,OpType.delete);
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deletePartyOrganizationById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除数据
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deletePartyOrganizationByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deletePartyOrganizationById(id);
			result++;
		}
		return result;
	}

	/**
	* 按照父id查询数据
	* @param parentId 父节点ID
	* @param level 树等级
	* @param orgIdentity 组织id
	* @return List<ZTreeNode>
	* @throws Exception
	*/
	public List<ZTreeNode> getPartyOrganizationByParentId(String parentId, int level, String orgIdentity) {
		try {
			List<ZTreeNode> tree = new ArrayList<ZTreeNode>();
			level --;
			List<PartyOrganizationDTO> childrenList = findChildrenPartyOrganizationById(parentId);
			for (PartyOrganizationDTO partyOrganizationDTO : childrenList) {
				//构造树节点对象
				ZTreeNode node = new ZTreeNode();
				node.set_parentId(partyOrganizationDTO.getParentId());
				String id = partyOrganizationDTO.getId();
				String orgIdentityChild = partyOrganizationDTO.getOrgIdentity();
				node.setId(id);
				node.setOpen(true);
				node.setText(partyOrganizationDTO.getPartyName());
				HashMap<String, Object> attr = new HashMap<String, Object>(1);
				attr.put("treeLeaf", partyOrganizationDTO.getTreeLeaf());
				attr.put("treeLevel", partyOrganizationDTO.getTreeLevel());
				attr.put("treePath", partyOrganizationDTO.getTreePath());
				attr.put("treeSort", partyOrganizationDTO.getTreeSort());
				attr.put("partyCode", partyOrganizationDTO.getPartyCode());
				node.setAttributes(attr);
				//判断当前节点是否有子节点
				if ("N".equals(partyOrganizationDTO.getTreeLeaf())) {
					node.setIsParent(true);
					//当所需要的级别和当前级别不相等时，继续递归查询
					if(level > 0){
						node.setChildren(this.getPartyOrganizationByParentId(id, level, orgIdentityChild));
					}
				} else {
					node.setIsParent(false);
				}
				tree.add(node);
			}
			return tree;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("getPartyOrganizationByParentId出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 查询树节点
	* @param text 查询条件
	* @return List<ZTreeNode>
	*/
	public List<ZTreeNode> searchPartyOrganization(String text,String orgIdentity) {
		try {
			List<ZTreeNode> tree = new ArrayList<ZTreeNode>();
			PartyOrganizationDTO queryParams = new PartyOrganizationDTO();
			queryParams.setPartyName(text);
			return getzTreeNodes(orgIdentity, tree, queryParams);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchPartyOrganization出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	private List<ZTreeNode> getzTreeNodes(String orgIdentity, List<ZTreeNode> tree, PartyOrganizationDTO queryParams) {
		queryParams.setOrgIdentity(orgIdentity);
		List<PartyOrganizationDTO> searchNodes = partyOrganizationDAO.searchPartyOrganization(queryParams);
		if(!CollectionUtils.isEmpty(searchNodes)){
			Set<String> treeIdSet = new HashSet<String>();
			//循环并去重
			for (PartyOrganizationDTO partyOrganizationDTO : searchNodes) {
				String treePath = partyOrganizationDTO.getTreePath();
				for(int i = 0; i < treePath.split("/").length;i++){
					treeIdSet.add(treePath.split("/")[i]);
				}
			}
			//定义计数器
			int i = 0;
			//最终参数集合
			List<List<String>> idsList = new ArrayList<List<String>>();
			//考虑mybatis foreach的限制，所以定义参数格式为list内还是list
			List<String> idList = new ArrayList<String>();
			for (String treeId : treeIdSet) {
				//当id个数超出限制后，则新new一个list来存放
				if(i % ID_LIMIT == 0 && i > 0){
					idsList.add(idList);
					idList = new ArrayList<String>();
				}
				idList.add(treeId);
				i++;
			}
			idsList.add(idList);

			List<PartyOrganizationDTO> allNodes = partyOrganizationDAO.searchPartyOrganizationByIds(idsList);

			tree = createTreeData(allNodes);
		}else{
			PartyOrganizationDTO root = findPartyOrganizationRootNode(orgIdentity);
			ZTreeNode node = new ZTreeNode();

			node.set_parentId(root.getParentId());
			node.setId(root.getId());
			node.setOpen(true);
			node.setText(root.getPartyName());
			HashMap<String,Object> attr = new HashMap<String, Object>();
			attr.put("treeLeaf", root.getTreeLeaf());
			attr.put("treeLevel", root.getTreeLevel());
			attr.put("treePath", root.getTreePath());
			node.setAttributes(attr);
			//判断当前节点是否有子节点
			if ("N".equals(root.getTreeLeaf())) {
				node.setIsParent(true);
			} else {
				node.setIsParent(false);
			}
			tree.add(node);
		}
		return tree;
	}

	/**
	 * 查询树节点
	 * @param queryParams 查询条件
	 * @return List<ZTreeNode>
	 */
	public List<ZTreeNode> searchAllPartyOrganization(PartyOrganizationDTO queryParams,String orgIdentity) {
		try {
			List<ZTreeNode> tree = new ArrayList<ZTreeNode>();
			return getzTreeNodes(orgIdentity, tree, queryParams);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchPartyOrganization出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 *  组建树形结构
	 * @param searchNodes
	 * @return
	 */
	private List<ZTreeNode> createTreeData(List<PartyOrganizationDTO> searchNodes) {
		try {
			//将数据转换为ZtreeNode格式
			List<ZTreeNode> list = transToTreeNodeData(searchNodes);
			
			//构建树形结构
			List<ZTreeNode> tree = new ArrayList<ZTreeNode>();
			for (ZTreeNode zTreeNode : list) {
		        //找到根节点
		        if ("-1".equals(zTreeNode.get_parentId())) {
		            tree.add(zTreeNode);
		        }
		        List<ZTreeNode> children = new ArrayList<ZTreeNode>();
		        //再次遍历list，找到子节点
		        for (ZTreeNode node : list) {
		        	if (node.get_parentId().equals(zTreeNode.getId())) {
		                children.add(node);
		            }
		        }
		        zTreeNode.setChildren(children);
		    }
			return tree;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("createTreeData出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 *  将实体类转化成ZTREENODE格式
	 * @param nodes
	 * @return
	 */
	private List<ZTreeNode> transToTreeNodeData(List<PartyOrganizationDTO> nodes) {
		try {
			List<ZTreeNode> list = new ArrayList<ZTreeNode>();
			for (PartyOrganizationDTO partyOrganizationDTO : nodes) {
				ZTreeNode node = new ZTreeNode();
				node.set_parentId(partyOrganizationDTO.getParentId());
				node.setId(partyOrganizationDTO.getId());
				node.setOpen(true);
				node.setText(partyOrganizationDTO.getPartyName());
				HashMap<String,Object> attr = new HashMap<String, Object>();
				attr.put("treeLeaf", partyOrganizationDTO.getTreeLeaf());
				attr.put("treeLevel", partyOrganizationDTO.getTreeLevel());
				attr.put("treePath", partyOrganizationDTO.getTreePath());
				node.setAttributes(attr);
				//判断当前节点是否有子节点
				if ("N".equals(partyOrganizationDTO.getTreeLeaf())) {
					node.setIsParent(true);
				} else {
					node.setIsParent(false);
				}
				list.add(node);
			}
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("transToTreeNodeData出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 判断是否更改过树的特有属性
	 * @param dto
	 * @param old
	 * @return
	 */
	private boolean isUpdateTreeProperties(PartyOrganizationDTO dto,PartyOrganizationDTO old){
		boolean flag = false;
		if(!old.getTreeSort().equals(dto.getTreeSort()) || !old.getParentId().equals(dto.getParentId())){
			flag = true;
		}
		return flag;
	}

	/**
	 * 更新下属所有节点的tree_path或者是tree_sorts
	 * @param parent
	 * @param oldParent
	 * @return
	 */
	private List<PartyOrganizationDTO> updateChildrenTreeProperties(PartyOrganizationDTO parent,PartyOrganizationDTO oldParent){
		try {
			//原来的排序字段和树路径字段
			String oldTreeSorts = oldParent.getTreeSorts();
			String oldTreePath = oldParent.getTreePath();
			//现在的排序字段
			String currentTreeSorts = parent.getTreeSorts();
			String currentTreePath = parent.getTreePath();
			//查找当前节点下的所有子节点
			List<PartyOrganizationDTO> list = partyOrganizationDAO.findPartyOrganizationByTreePath(oldTreePath);
			for (PartyOrganizationDTO dto : list) {
				dto.setTreePath(dto.getTreePath().replace(oldTreePath, currentTreePath));
				dto.setTreeSorts(dto.getTreeSorts().substring(0, oldTreeSorts.length()).replace(oldTreeSorts, currentTreeSorts)
					+ dto.getTreeSorts().substring(oldTreeSorts.length()));
				dto.setTreeLevel(Long.valueOf(dto.getTreePath().split("/").length));
			}
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateChildrenTreeProperties出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 *  自动计算树形结构其他属性值
	 * @param dto 修改后的对象
	 * @param old 原对象（更新方法使用）
	 * @return
	 */
	private void setTreeProperties(PartyOrganizationDTO dto,PartyOrganizationDTO old,OpType opType) throws Exception{
		try {
			//获取其父级节点
			PartyOrganizationDTO parentDTO = findParentPartyOrganizationById(dto.getParentId());
			//非初始化根节点情况
			if(parentDTO != null){ 
				//判断操作类型
				switch (opType) {
					case insert:
						//新增
						//设置当前树路经
						dto.setTreePath(parentDTO.getTreePath()+"/"+dto.getId());
						//设置当前树全路径排序
						Long treeSort = dto.getTreeSort();
						String treeSorts = String.format("%06d", treeSort);
						dto.setTreeSorts(parentDTO.getTreeSorts()+"/"+treeSorts);
						//设置当前是否为叶子节点，新增全部为叶子节点
						dto.setTreeLeaf("Y");
						//设置当前节点级别
						dto.setTreeLevel(parentDTO.getTreeLevel()+1);
						//判断当前父节点是否为叶子节点，如果是，则更改为非叶子节点
						if("Y".equals(parentDTO.getTreeLeaf())){
							parentDTO.setTreeLeaf("N");
							partyOrganizationDAO.updatePartyOrganizationSensitive(parentDTO);
						}
						break;
					case update:
						//修改
						//主要针对于排序字段的修改
						if(isUpdateTreeProperties(dto, old)){
							//排序字段被修改，则更改整体排序字段
							//当前新的本级排序字段
							String currentTreeSorts = String.format("%06d", dto.getTreeSort());
							//当前新的总体排序字段
							String newTreeSorts = parentDTO.getTreeSorts()+"/"+currentTreeSorts;
							//赋值
							dto.setTreeSorts(newTreeSorts);
							//重新生成当前节点tree_path路径
							String currentTreePath = parentDTO.getTreePath() + "/"+ dto.getId();
							Long currentTreeLevel = parentDTO.getTreeLevel()+1;
							//赋值
							dto.setTreePath(currentTreePath);
							dto.setTreeLevel(currentTreeLevel);
						}
						break;
					case delete:
						//删除
						//判断当前父节点下还是否有子节点，如果没有，则需要把父节点置为叶子节点
						List<PartyOrganizationDTO> childrenList = findChildrenPartyOrganizationById(dto.getParentId());
						if(CollectionUtils.isEmpty(childrenList)){
							parentDTO.setTreeLeaf("Y");
							partyOrganizationDAO.updatePartyOrganizationSensitive(parentDTO);
						}
						break;
					default:
						break;
				}
			}else{
				//初始化树根节点
				dto.setTreePath(dto.getId());
				//设置当前树全路径排序
				Long treeSort = dto.getTreeSort();
				String treeSorts = String.format("%06d", treeSort);
				dto.setTreeSorts(treeSorts);
				//设置当前是否为叶子节点，新增全部为叶子节点
				if (opType == OpType.insert) {
					dto.setTreeLeaf("Y");
				}
				//设置当前节点级别.
				dto.setTreeLevel(1L);
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("setTreeProperties出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 *	获取新的treeSort值：在最当前层最大值上递增10
	 * @param parentId
	 * @return
	 */
	public Long getNewTreeSortByParentId(String parentId) {
		try {
			Long maxTreeSort = partyOrganizationDAO.findMaxTreeSortByParentId(parentId);
			return maxTreeSort == null ? 10L : maxTreeSort + 10L;
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw new DaoException("获取新的treeSort值失败");
		}
	}
	/**
	 * 根据党组织id查询党组织详细数据
	 * @param id 党组织id
	 * @param zt 党组织状态
	 * @return 详细数据*/
	public Map<String,String> partyCount(String id, int zt){
		try{
			Map<String,String> map = new HashMap<>();
			//党员人数
			map.put("partyCount", String.valueOf(partyOrganizationDAO.partyCount(id, zt)));
			//积极分子人数
			map.put("act_count",String.valueOf(this.partyOrganizationDAO.avic_count(id, String.valueOf(zt))));
			if(zt==4){
				List<String> strings = this.partyOrganizationDAO.partyZc(id);
				StringBuilder names = new StringBuilder();
				for (int i = 0; i < strings.size(); i++) {
					if(i!=0){
						names.append(",");
					}
					names.append(strings.get(i));
				}
				map.put("partyZc", names.toString());
			}else{
				map.put("partyZc","");
			}
			if(zt==2||zt==1||zt==0){
				//纪委只有党委或总总支才有可能存在 所以除了这两个其他的不用去查
				String s = this.partyOrganizationDAO.jwOrgName(id);
				map.put("partyJwName",s);
			}else{
				map.put("partyJwName","无");
			}
			if(zt == 5){
				map.put("partyOrgCount","0");
				map.put("partyPostCount","0");
				map.put("partyPostYycount","0");
				map.put("partyJwPostCount","0");
				map.put("partyJwPostYycount","0");
				map.put("partyJwSjPostCount","");
				map.put("partyPostName","");
				map.put("partyDateBeg","");
				map.put("partyDateEnd","");
				map.put("partyType","");
			}else {
				map.put("partyOrgCount",String.valueOf(partyOrganizationDAO.partyOrgCount(id)));
				map.put("partyPostCount",String.valueOf(partyOrganizationDAO.partyPostCount(id)));
				map.put("partyPostYycount",String.valueOf(partyOrganizationDAO.partyPostYycount(id)));
				map.put("partyJwPostCount",String.valueOf(partyOrganizationDAO.partyJwPostCount(id)));
				map.put("partyJwPostYycount",String.valueOf(partyOrganizationDAO.partyJwPostYycount(id)));
				String s1 = String.valueOf(partyOrganizationDAO.partyJwSjPostCount(id));
				if(s1!=null&&!"null".equals(s1)){
					map.put("partyJwSjPostCount",s1);
				}else{
					map.put("partyJwSjPostCount","");
				}
				String s = String.valueOf(partyOrganizationDAO.partyPostName(id));
				if(s!=null&&!"null".equals(s)){
					map.put("partyPostName",s);
				}else {
					map.put("partyPostName","");
				}
				Integer integer = partyOrganizationDAO.partyType(id);
				if(integer!=null){
					switch (integer){
						case 1:
							map.put("partyType","成立");
							break;
						case 2:
							map.put("partyType","换届");
							break;
						case 3:
							map.put("partyType","成立纪律检查委员会");
							break;
						default:
							map.put("partyType","");
					}
				}else {
					map.put("partyType","");
				}
				String s2 = this.partyOrganizationDAO.partyDate(id);
				if(s2!=null){
					map.put("partyDateBeg", String.valueOf(LocalDate.parse(s2).minusYears(3)));
				}else{
					map.put("partyDateBeg","");
				}
				String s3 = this.partyOrganizationDAO.partyBjDate(id);
				if (s3!=null){
					map.put("partyBjDate",s3);
				}else {
					map.put("partyBjDate","");
				}

			}
			return map ;
		}catch (Exception e){
			logger.error(e.getMessage());
			e.printStackTrace();
			throw new DaoException("sql异常,查询失败");
		}

	}
	public Map<String,Object> orgxjSzDetail(String id,String startDate,String endDate){
		Map<String,Object> map = new HashMap<>();
		Calendar calendar = Calendar.getInstance();
		if("".equals(startDate)){
			int year = calendar.get(Calendar.YEAR);// 本年
			int month = calendar.get(Calendar.MONTH)+1;//本月
			if(month<10){
				startDate = year+"-0"+month;
			}else {
				startDate = year+"-"+month;
			}
		}
		if("".equals(endDate)){
			int year = calendar.get(Calendar.YEAR)+1;// 本年
			int month = calendar.get(Calendar.MONTH)+1;//本月
			if(month<10){
				endDate = year+"-0"+month;
			}else {
				endDate = year+"-"+month;
			}
		}
		//查询公司党委委员总数
		map.put("gsDwWyCount",this.partyOrganizationDAO.gsDwWyCount(id));
		//查询纪委委员总数
		map.put("jwPostCount",this.partyOrganizationDAO.partyJwPostCount(id));
		//查询党组织总数
		map.put("partyOrgAllCount",this.partyOrganizationDAO.partyOrgAllCount());
		//党员人数
		map.put("partyCount", String.valueOf(partyOrganizationDAO.partyCount(id, 0)));
		//党小组数
		map.put("partyOrgXzCount",String.valueOf(partyOrganizationDAO.partyOrgCount(id)));
		//基层党委数量
		map.put("partyOrgJcdwCount",this.partyOrganizationDAO.partyOrgJcdwCount());
		//党总支数量
		map.put("partyOrgDzzCount",this.partyOrganizationDAO.partyOrgDzzCount());
		//直属党支部数量
		map.put("partyOrgZsdzbCount",this.partyOrganizationDAO.partyOrgZsdzbCount());
		//查询下属党支部数量
		map.put("partyOrgXsdzbCount",this.partyOrganizationDAO.partyOrgXsdzbCount());
		//查询直属纪委数量
		map.put("partyOrgZsjwCount",this.partyOrganizationDAO.partyOrgZsjwCount());
		//统计表格
		List<Map<String,Object>> mapList = this.partyOrganizationDAO.partySessionInfo(endDate, startDate);
		//女书记数量
		String sexPartyPost = this.partyOrganizationDAO.sexPartyPost(endDate, startDate);
		map.put("sexPartyPost",sexPartyPost);
		String jwPartyPost = this.partyOrganizationDAO.JwPartyPost(endDate, startDate);
		map.put("jwPartyPost",jwPartyPost);
		String zzwyPartyPost = this.partyOrganizationDAO.zzwyPartyPost(endDate, startDate);
		map.put("zzwyPartyPost",zzwyPartyPost);
		//换届党组织总数
		int sessionHjOrgCount = 0;
		//补选党组织总数
		int sessionBxOrgCount = 0;
		//成立党组织总数
		int sessionClOrgCount = 0;
		//更名党组织总数
		int sessionGmOrgCount = 0;
		//撤销党组织总数
		int sessionCxOrgCount = 0;
		//调整党组织总数
		int sessionTzOrgCount = 0;
		//备案党组织总数
		int sessionBaOrgCount = 0;
		//换届党委总数
		int sessionHjDwCount = 0;
		//补选党委总数
		int sessionBxDwCount = 0;
		//成立党委总数
		int sessionClDwCount = 0;
		//更名党委总数
		int sessionGmDwCount = 0;
		//撤销党委总数
		int sessionCxDwCount = 0;
		//调整党委总数
		int sessionTzDwCount = 0;
		//备案党委总数
		int sessionBaDwCount = 0;
		//换届纪委总数
		int sessionHjJwCount = 0;
		//补选纪委总数
		int sessionBxJwCount = 0;
		//成立纪委总数
		int sessionClJwCount = 0;
		//更名纪委总数
		int sessionGmJwCount = 0;
		//撤销纪委总数
		int sessionCxJwCount = 0;
		//调整纪委总数
		int sessionTzJwCount = 0;
		//备案纪委总数
		int sessionBaJwCount = 0;
		//换届党总支总数
		int sessionHjDzzCount = 0;
		//补选党总支总数
		int sessionBxDzzCount = 0;
		//成立党总支总数
		int sessionClDzzCount = 0;
		//更名党总支总数
		int sessionGmDzzCount = 0;
		//撤销党总支总数
		int sessionCxDzzCount = 0;
		//调整党总支总数
		int sessionTzDzzCount = 0;
		//备案党总支总数
		int sessionBaDzzCount = 0;
		//换届党支部总数
		int sessionHjDzbCount = 0;
		//补选党支部总数
		int sessionBxDzbCount = 0;
		//成立党支部总数
		int sessionClDzbCount = 0;
		//更名党支部总数
		int sessionGmDzbCount = 0;
		//撤销党支部总数
		int sessionCxDzbCount = 0;
		//调整党支部总数
		int sessionTzDzbCount = 0;
		//备案党支部总数
		int sessionBaDzbCount = 0;
		//换届下属党支部总数
		int sessionHjXsdzbCount = 0;
		//补选下属党支部总数
		int sessionBxXsdzbCount = 0;
		//成立下属党支部总数
		int sessionClXsdzbCount = 0;
		//更名下属党支部总数
		int sessionGmXsdzbCount = 0;
		//撤销下属党支部总数
		int sessionCxXsdzbCount = 0;
		//调整下属党支部总数
		int sessionTzXsdzbCount = 0;
		//备案下属党支部总数
		int sessionBaXsdzbCount = 0;
		if(mapList!=null&&mapList.size()!=0){
			for (Map<String, Object> hashMap : mapList) {
				String partytype = hashMap.get("PARTYTYPE").toString();
				String num = hashMap.get("NUM").toString();
				String sessiontype = hashMap.get("SESSIONTYPE").toString();
				switch (sessiontype){
					case "1":
						sessionHjOrgCount += Integer.parseInt(num);
						switch (partytype){
							case "1":
								sessionHjDzbCount+=Integer.parseInt(num);
								break;
							case "2":
								sessionHjDwCount+=Integer.parseInt(num);
								sessionHjDzzCount+=Integer.parseInt(num);
								break;
							case "3":
								sessionHjJwCount+=Integer.parseInt(num);
								break;
							case "4":
								sessionHjXsdzbCount+=Integer.parseInt(num);
								break;
						}
						break;
					case "2":
						sessionGmOrgCount += Integer.parseInt(num);
						switch (partytype){
							case "1":
								sessionGmDzbCount+=Integer.parseInt(num);
								break;
							case "2":
								sessionGmDwCount+=Integer.parseInt(num);
								sessionGmDzzCount+=Integer.parseInt(num);
								break;
							case "3":
								sessionGmJwCount+=Integer.parseInt(num);
								break;
							case "4":
								sessionGmXsdzbCount+=Integer.parseInt(num);
								break;
						}
						break;
					case "3":
						sessionCxOrgCount += Integer.parseInt(num);
						switch (partytype){
							case "1":
								sessionCxDzbCount+=Integer.parseInt(num);
								break;
							case "2":
								sessionCxDwCount+=Integer.parseInt(num);
								sessionCxDzzCount+=Integer.parseInt(num);
								break;
							case "3":
								sessionCxJwCount+=Integer.parseInt(num);
								break;
							case "4":
								sessionCxXsdzbCount+=Integer.parseInt(num);
								break;
						}
						break;
					case "4":
						sessionClOrgCount += Integer.parseInt(num);
						switch (partytype){
							case "1":
								sessionClDzbCount+=Integer.parseInt(num);
								break;
							case "2":
								sessionClDwCount+=Integer.parseInt(num);
								sessionClDzzCount+=Integer.parseInt(num);
								break;
							case "3":
								sessionClJwCount+=Integer.parseInt(num);
								break;
							case "4":
								sessionClXsdzbCount+=Integer.parseInt(num);
								break;
						}
						break;
					case "5":
						sessionBxOrgCount += Integer.parseInt(num);
						switch (partytype){
							case "1":
								sessionBxDzbCount+=Integer.parseInt(num);
								break;
							case "2":
								sessionBxDwCount+=Integer.parseInt(num);
								sessionBxDzzCount+=Integer.parseInt(num);
								break;
							case "3":
								sessionBxJwCount+=Integer.parseInt(num);
								break;
							case "4":
								sessionBxXsdzbCount+=Integer.parseInt(num);
								break;
						}
						break;
					case "6":
						sessionTzOrgCount += Integer.parseInt(num);
						switch (partytype){
							case "1":
								sessionTzDzbCount+=Integer.parseInt(num);
								break;
							case "2":
								sessionTzDwCount+=Integer.parseInt(num);
								sessionTzDzzCount+=Integer.parseInt(num);
								break;
							case "3":
								sessionTzJwCount+=Integer.parseInt(num);
								break;
							case "4":
								sessionTzXsdzbCount+=Integer.parseInt(num);
								break;
						}
						break;
					case "7":
						sessionBaOrgCount += Integer.parseInt(num);
						switch (partytype){
							case "1":
								sessionBaDzbCount+=Integer.parseInt(num);
								break;
							case "2":
								sessionBaDwCount+=Integer.parseInt(num);
								sessionBaDzzCount+=Integer.parseInt(num);
								break;
							case "3":
								sessionBaJwCount+=Integer.parseInt(num);
								break;
							case "4":
								sessionBaXsdzbCount+=Integer.parseInt(num);
								break;
						}
						break;
				}
			}
		}
		map.put("sessionHjOrgCount",sessionHjOrgCount);
		map.put("sessionBxOrgCount",sessionBxOrgCount);
		map.put("sessionClOrgCount",sessionClOrgCount);
		map.put("sessionGmOrgCount",sessionGmOrgCount);
		map.put("sessionCxOrgCount",sessionCxOrgCount);
		map.put("sessionTzOrgCount",sessionTzOrgCount);
		map.put("sessionBaOrgCount",sessionBaOrgCount);
		map.put("sessionHjDwCount",sessionHjDwCount);
		map.put("sessionBxDwCount",sessionBxDwCount);
		map.put("sessionClDwCount",sessionClDwCount);
		map.put("sessionGmDwCount",sessionGmDwCount);
		map.put("sessionCxDwCount",sessionCxDwCount);
		map.put("sessionTzDwCount",sessionTzDwCount);
		map.put("sessionBaDwCount",sessionBaDwCount);
		map.put("sessionHjJwCount",sessionHjJwCount);
		map.put("sessionBxJwCount",sessionBxJwCount);
		map.put("sessionClJwCount",sessionClJwCount);
		map.put("sessionGmJwCount",sessionGmJwCount);
		map.put("sessionCxJwCount",sessionCxJwCount);
		map.put("sessionTzJwCount",sessionTzJwCount);
		map.put("sessionBaJwCount",sessionBaJwCount);
		map.put("sessionHjDzzCount" ,sessionHjDzzCount);
		map.put("sessionBxDzzCount" ,sessionBxDzzCount);
		map.put("sessionClDzzCount" ,sessionClDzzCount);
		map.put("sessionGmDzzCount" ,sessionGmDzzCount);
		map.put("sessionCxDzzCount" ,sessionCxDzzCount);
		map.put("sessionTzDzzCount" ,sessionTzDzzCount);
		map.put("sessionBaDzzCount" ,sessionBaDzzCount);
		map.put("sessionHjDzbCount" ,sessionHjDzbCount);
		map.put("sessionBxDzbCount" ,sessionBxDzbCount);
		map.put("sessionClDzbCount" ,sessionClDzbCount);
		map.put("sessionGmDzbCount" ,sessionGmDzbCount);
		map.put("sessionCxDzbCount" ,sessionCxDzbCount);
		map.put("sessionTzDzbCount" ,sessionTzDzbCount);
		map.put("sessionBaDzbCount" ,sessionBaDzbCount);
		map.put("sessionHjXsdzbCount",sessionHjXsdzbCount);
		map.put("sessionBxXsdzbCount",sessionBxXsdzbCount);
		map.put("sessionClXsdzbCount",sessionClXsdzbCount);
		map.put("sessionGmXsdzbCount",sessionGmXsdzbCount);
		map.put("sessionCxXsdzbCount",sessionCxXsdzbCount);
		map.put("sessionTzXsdzbCount",sessionTzXsdzbCount);
		map.put("sessionBaXsdzbCount",sessionBaXsdzbCount);
		return map;
	}

}
