package avicit.lc.organize.leagueorganization.service;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
import avicit.lc.organize.leagueorganization.dao.LeagueOrganizationDAO;
import avicit.lc.organize.leagueorganization.dto.LeagueOrganizationDTO;
import avicit.lc.organize.leagueorganmember.dto.LeagueOrganMemberDTO;
import avicit.lc.organize.leagueorganmember.service.LeagueOrganMemberService;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;

/**
 * @金航数码科技有限责任公司
 * @作者：林博
 * @邮箱：numbery@163.com
 * @创建时间： 2022-02-17 09:36
 * @类说明：团组织信息表Service
 * @修改记录： 
 */
@Service
public class LeagueOrganizationService implements Serializable {

	private static final Logger logger = LoggerFactory.getLogger(LeagueOrganizationService.class);

	private static final long serialVersionUID = 1L;

	@Autowired
	private LeagueOrganizationDAO leagueOrganizationDAO;
	
    @Autowired
	private LeagueOrganMemberService leagueOrganMemberService;

	/**
	 * 数据库中IN字段的内容个数限制，每个数据库限制不同，请根据数据库进行调整，建议不超过1000
	 */
	private static final int ID_LIMIT = 500;
	
	/**
	 * 主键查询
	 * @param ID
	 * @return LeagueOrganizationDTO
	 * @throws Exception
	 */
	public LeagueOrganizationDTO queryLeagueOrganizationByPrimaryKey(String id) throws Exception {
		try {
			LeagueOrganizationDTO dto = leagueOrganizationDAO.findLeagueOrganizationById(id);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryLeagueOrganizationByPrimaryKey出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 查询父节点信息
	 * @param parentId
	 * @return LeagueOrganizationDTO
	 * @throws Exception
	 */
	public LeagueOrganizationDTO findParentLeagueOrganizationById(String parentId) {
		try {
			LeagueOrganizationDTO dto = leagueOrganizationDAO.findLeagueOrganizationById(parentId);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findParentLeagueOrganizationById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 *  根据ID获取他的下属子节点
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public List<LeagueOrganizationDTO> findChildrenLeagueOrganizationById(String id){
		try {
			List<LeagueOrganizationDTO> list = leagueOrganizationDAO.findChildrenLeagueOrganizationById(id);
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findChildrenLeagueOrganizationById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 获取当前组织的根节点
	 * @param orgIdentity
	 * @return
	 */
	public LeagueOrganizationDTO findLeagueOrganizationRootNode(String orgIdentity){
		try {
			LeagueOrganizationDTO dto = leagueOrganizationDAO.findLeagueOrganizationRootNode(orgIdentity);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("findLeagueOrganizationRootNode出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 新增数据
	* @param dto 新增对象
	* @return String
	* @throws Exception
	*/
	public String insertLeagueOrganization(LeagueOrganizationDTO dto) throws Exception {
		try {
			String id = ComUtil.getId();
			dto.setId(id);
			PojoUtil.setSysProperties(dto, OpType.insert);
			//自动计算其他相关属性值
			setTreeProperties(dto,null,OpType.insert);
			leagueOrganizationDAO.insertLeagueOrganization(dto);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Insert(dto);
			}
			return id;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("insertLeagueOrganization出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 更新数据
	 * @param dto 更新对象
	 * @return flag 是否更新过树关键属性
	 * @throws Exception
	 */
	public boolean updateLeagueOrganization(LeagueOrganizationDTO dto) throws Exception {
		boolean flag = false;
		try {
			List<LeagueOrganizationDTO> updateChildrenList = null;
			LeagueOrganizationDTO old = leagueOrganizationDAO.findLeagueOrganizationById(dto.getId());
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
			int ret = leagueOrganizationDAO.updateLeagueOrganizationSensitive(old);
			if (ret == 0) {
				throw new DaoException("数据失效，请重新更新");
			}
			if (!CollectionUtils.isEmpty(updateChildrenList)) {
				leagueOrganizationDAO.updateLeagueOrganizationList(updateChildrenList);
			}
			// 如果是移动节点，需要修改原父节点和新父节点的叶子属性
			if (!dto.getParentId().equals(oldParentId)) {
				//判断原父节点下还是否有子节点，如果没有，则需要把父节点置为叶子节点
				List<LeagueOrganizationDTO> childrenList = leagueOrganizationDAO.findChildrenLeagueOrganizationById(oldParentId);
				if (CollectionUtils.isEmpty(childrenList)) {
					LeagueOrganizationDTO oldParentDTO = leagueOrganizationDAO.findLeagueOrganizationById(oldParentId);
					oldParentDTO.setTreeLeaf("Y");
					leagueOrganizationDAO.updateLeagueOrganizationSensitive(oldParentDTO);
				}
				// 判断当前父节点是否为叶子节点，如果是，则更改为非叶子节点
				LeagueOrganizationDTO curParentDTO = leagueOrganizationDAO.findLeagueOrganizationById(dto.getParentId());
				if ("Y".equals(curParentDTO.getTreeLeaf())) {
					curParentDTO.setTreeLeaf("N");
					leagueOrganizationDAO.updateLeagueOrganizationSensitive(curParentDTO);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("updateLeagueOrganization出错：", e);
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
	public int deleteLeagueOrganizationById(String id) throws Exception {
		try {
			if (StringUtils.isEmpty(id)) {
				throw new Exception("删除失败！传入的参数主键为null");
			}
			//记录日志
			LeagueOrganizationDTO dto = leagueOrganizationDAO.findLeagueOrganizationById(id);
			if (dto != null) {
				SysLogUtil.log4Delete(dto);
			}
			// 删除关联子表数据
			LeagueOrganMemberDTO queryParams = new LeagueOrganMemberDTO();
			queryParams.setLeagueId(id);
			List<LeagueOrganMemberDTO> list = leagueOrganMemberService.searchLeagueOrganMember(queryParams, "" ,"");
			for (LeagueOrganMemberDTO leagueOrganMemberDTO : list) {
				leagueOrganMemberService.deleteLeagueOrganMemberById(leagueOrganMemberDTO.getId());
			}
			int count = leagueOrganizationDAO.deleteLeagueOrganizationById(id);
			setTreeProperties(dto,null,OpType.delete);
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("deleteLeagueOrganizationById出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 * 批量删除数据
	 * @param ids id的数组
	 * @return int
	 * @throws Exception
	 */
	public int deleteLeagueOrganizationByIds(String[] ids) throws Exception {
		int result = 0;
		for (String id : ids) {
			deleteLeagueOrganizationById(id);
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
	public List<ZTreeNode> getLeagueOrganizationByParentId(String parentId, int level, String orgIdentity) {
		try {
			List<ZTreeNode> tree = new ArrayList<ZTreeNode>();
			level --;
			List<LeagueOrganizationDTO> childrenList = findChildrenLeagueOrganizationById(parentId);
			for (LeagueOrganizationDTO leagueOrganizationDTO : childrenList) {
				//构造树节点对象
				ZTreeNode node = new ZTreeNode();
				node.set_parentId(leagueOrganizationDTO.getParentId());
				String id = leagueOrganizationDTO.getId();
				String orgIdentityChild = leagueOrganizationDTO.getOrgIdentity();
				node.setId(id);
				node.setOpen(true);
				node.setText(leagueOrganizationDTO.getLeagueName());
				HashMap<String, Object> attr = new HashMap<String, Object>(1);
				attr.put("treeLeaf", leagueOrganizationDTO.getTreeLeaf());
				attr.put("treeLevel", leagueOrganizationDTO.getTreeLevel());
				attr.put("treePath", leagueOrganizationDTO.getTreePath());
				attr.put("treeSort", leagueOrganizationDTO.getTreeSort());
				attr.put("leagueCode", leagueOrganizationDTO.getLeagueCode());
				attr.put("startDate", leagueOrganizationDTO.getStartDate());
				attr.put("finishDate", leagueOrganizationDTO.getFinishDate());
				attr.put("attribute01",leagueOrganizationDTO.getAttribute01());
				node.setAttributes(attr);
				//判断当前节点是否有子节点
				if ("N".equals(leagueOrganizationDTO.getTreeLeaf())) {
					node.setIsParent(true);
					//当所需要的级别和当前级别不相等时，继续递归查询
					if(level > 0){
						node.setChildren(this.getLeagueOrganizationByParentId(id, level, orgIdentityChild));
					}
				} else {
					node.setIsParent(false);
				}
				tree.add(node);
			}
			return tree;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("getLeagueOrganizationByParentId出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	* 查询树节点
	* @param text 查询条件
	* @return List<ZTreeNode>
	*/
	public List<ZTreeNode> searchLeagueOrganization(String text,String orgIdentity) {
		try {
			List<ZTreeNode> tree = new ArrayList<ZTreeNode>();
			LeagueOrganizationDTO queryParams = new LeagueOrganizationDTO();
			queryParams.setLeagueName(text);
			queryParams.setOrgIdentity(orgIdentity);
			List<LeagueOrganizationDTO> searchNodes = leagueOrganizationDAO.searchLeagueOrganization(queryParams);
			if(!CollectionUtils.isEmpty(searchNodes)){
				Set<String> treeIdSet = new HashSet<String>();
				//循环并去重
				for (LeagueOrganizationDTO leagueOrganizationDTO : searchNodes) {
					String treePath = leagueOrganizationDTO.getTreePath();
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
				
				List<LeagueOrganizationDTO> allNodes = leagueOrganizationDAO.searchLeagueOrganizationByIds(idsList);
				
				tree = createTreeData(allNodes);
			}else{
				LeagueOrganizationDTO root = findLeagueOrganizationRootNode(orgIdentity);
				ZTreeNode node = new ZTreeNode();
	
				node.set_parentId(root.getParentId());
				node.setId(root.getId());
				node.setOpen(true);
				node.setText(root.getLeagueName());
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
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("searchLeagueOrganization出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

	/**
	 *  组建树形结构
	 * @param searchNodes
	 * @return
	 */
	private List<ZTreeNode> createTreeData(List<LeagueOrganizationDTO> searchNodes) {
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
	private List<ZTreeNode> transToTreeNodeData(List<LeagueOrganizationDTO> nodes) {
		try {
			List<ZTreeNode> list = new ArrayList<ZTreeNode>();
			for (LeagueOrganizationDTO leagueOrganizationDTO : nodes) {
				ZTreeNode node = new ZTreeNode();
				node.set_parentId(leagueOrganizationDTO.getParentId());
				node.setId(leagueOrganizationDTO.getId());
				node.setOpen(true);
				node.setText(leagueOrganizationDTO.getLeagueName());
				HashMap<String,Object> attr = new HashMap<String, Object>();
				attr.put("treeLeaf", leagueOrganizationDTO.getTreeLeaf());
				attr.put("treeLevel", leagueOrganizationDTO.getTreeLevel());
				attr.put("treePath", leagueOrganizationDTO.getTreePath());
				node.setAttributes(attr);
				//判断当前节点是否有子节点
				if ("N".equals(leagueOrganizationDTO.getTreeLeaf())) {
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
	private boolean isUpdateTreeProperties(LeagueOrganizationDTO dto,LeagueOrganizationDTO old){
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
	private List<LeagueOrganizationDTO> updateChildrenTreeProperties(LeagueOrganizationDTO parent,LeagueOrganizationDTO oldParent){
		try {
			//原来的排序字段和树路径字段
			String oldTreeSorts = oldParent.getTreeSorts();
			String oldTreePath = oldParent.getTreePath();
			//现在的排序字段
			String currentTreeSorts = parent.getTreeSorts();
			String currentTreePath = parent.getTreePath();
			//查找当前节点下的所有子节点
			List<LeagueOrganizationDTO> list = leagueOrganizationDAO.findLeagueOrganizationByTreePath(oldTreePath);
			for (LeagueOrganizationDTO dto : list) {
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
	private void setTreeProperties(LeagueOrganizationDTO dto,LeagueOrganizationDTO old,OpType opType) throws Exception{
		try {
			//获取其父级节点
			LeagueOrganizationDTO parentDTO = findParentLeagueOrganizationById(dto.getParentId());
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
							leagueOrganizationDAO.updateLeagueOrganizationSensitive(parentDTO);
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
						List<LeagueOrganizationDTO> childrenList = findChildrenLeagueOrganizationById(dto.getParentId());
						if(CollectionUtils.isEmpty(childrenList)){
							parentDTO.setTreeLeaf("Y");
							leagueOrganizationDAO.updateLeagueOrganizationSensitive(parentDTO);
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
			Long maxTreeSort = leagueOrganizationDAO.findMaxTreeSortByParentId(parentId);
			return maxTreeSort == null ? 10L : maxTreeSort + 10L;
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw new DaoException("获取新的treeSort值失败");
		}
	}
	/**
	 * 党组织编号查询
	 * @param ID
	 * @return PartyOrganizationDTO
	 * @throws Exception
	 */
	public LeagueOrganizationDTO queryLeagueOrganizationByPartyCode(String leagueCode) throws Exception {
		
		int a = 1;
		
		
		try {
			LeagueOrganizationDTO dto = leagueOrganizationDAO.findLeagueOrganizationByLeagueCode(leagueCode);
			//记录日志
			if (dto != null) {
				SysLogUtil.log4Query(dto);
			}
			return dto;
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("queryLeagueOrganizationByPartyCode出错：", e);
			throw new DaoException(e.getMessage(), e);
		}
	}

}
