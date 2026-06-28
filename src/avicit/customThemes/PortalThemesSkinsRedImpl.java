package avicit.customThemes;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.msystem.portal.model.PortalMenuModel;
import avicit.platform6.msystem.portal.skins.ThemesSkinsAbst;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.lang.StringUtils;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.HtmlUtils;

import com.fasterxml.jackson.databind.cfg.ContextAttributes.Impl;

public class PortalThemesSkinsRedImpl extends ThemesSkinsAbst {
	private List<PortalMenuModel> firstMenus;
	  private static SysLookupAPI sysLookupAPI;
	  private Collection<SysLookupSimpleVo> sysLookupSimpleVos;
	  private Map<String, String> menuMarkMap;
	  
	public PortalThemesSkinsRedImpl(String _typeKey) {
		super(_typeKey);
		
	}

	@Override
	public Object getMenus(java.lang.String userId, java.lang.String orgIndentity) {
		
	/*	String cache = super.getCache(userId, orgIndentity);
	    if (StringUtils.isNotBlank(cache)) {
	      return cache;
	    }*/
		
	
		
		    if (null == sysLookupAPI) {
		      sysLookupAPI = (SysLookupAPI)SpringFactory.getBean(SysLookupAPI.class);
		    }
		    this.sysLookupSimpleVos = sysLookupAPI.getLookUpListByType("PLATFORM_MENU_MARK", SessionHelper.getApplicationId(), SessionHelper.getCurrentLanguageCode());
		    this.menuMarkMap = collectionToMap(this.sysLookupSimpleVos);
		    StringBuffer buffer = new StringBuffer();
		    List<PortalMenuModel> allMenus = new ArrayList<PortalMenuModel>();
		    this.firstMenus = super.getFirstMenuList(orgIndentity);
		    allMenus.addAll(this.firstMenus);
		    buffer.append("<ul>\n");
		/*    buffer.append(" <a href=\"javascript:void(0);\" class=\"dropdown\">\n");
		    buffer.append("<li class=\"active\">\n");
		    buffer.append(" <span id=\"index\" class=\"hlist taburl\" opentype=\"_mainframe\" title=\"首页\">首页</span>\n");
		    buffer.append(" </li>\n");
		    buffer.append("</a>\n");*/
		    
		    
		    String menuIcon = "";
		    for (int i = 0; i < this.firstMenus.size(); i++) {
		      PortalMenuModel firstModel = (PortalMenuModel)this.firstMenus.get(i);
		      if (firstModel != null) {
		        buffer.append("<a href=\"javascript:void(0);\" class=\"dropdown\">\n");
		        buffer.append("       <li>\n");
		        List<PortalMenuModel> secondMenus = super.getSecondSubMenuList(firstModel.getId());
		        allMenus.addAll(secondMenus);
		        String arrow = "";
		        if ((secondMenus != null) && (secondMenus.size() > 0)) {
		          arrow = "<i class=\"icon icon-xiangxiajiantou-mianxing\"></i>";
		        }
		        buffer.append("           <span id='" + firstModel.getId() + "' class=\"hlist taburl\" openType='").append(firstModel.getMenuOpenType()).append("' ").append(getUrl(firstModel)).append(" title=\"").append(firstModel.getMenuName()).append("\" ").append(">").append(firstModel.getMenuNameExt()).append(arrow).append("</span>\n")
		          .append(StringUtils.isBlank(firstModel
		          .getMenuMark()) ? "" : "<i class=\"menu-label menu-bg-red jump\">".concat(getMenuMarkName(firstModel.getMenuMark())).concat("</i>\n"));
		        if ((secondMenus != null) && (secondMenus.size() > 0))
		        {
		          buffer.append("     <div class=' subList' style='display: none;' >\n");
		          for (PortalMenuModel secondMenu : secondMenus) {
		            menuIcon = secondMenu.getMenuIcon();
		            if (StringUtils.isEmpty(menuIcon)) {
		              menuIcon = "icon icon-point";
		            }
		            buffer.append("     <div class='subChild'>\n");
		            List<PortalMenuModel> thirdMenus = super.getThirdSubMenuList(secondMenu.getId());
		            allMenus.addAll(thirdMenus);
		            if ((thirdMenus != null) && (thirdMenus.size() > 0))
		            {
		              buffer.append("       <div id='" + secondMenu.getId() + "' class='c-title taburl hlist").append(" ' openType='").append(secondMenu.getMenuOpenType()).append("' rel='").append(secondMenu.getMenuUrl()).append("' title='").append(secondMenu.getMenuName()).append("' ").append(">").append("<i class=\"" + menuIcon + "\"></i>").append(HtmlUtils.htmlEscape(secondMenu.getMenuNameExt())).append("</div>\n")
		                .append(StringUtils.isBlank(secondMenu
		                .getMenuMark()) ? "" : "<i class=\"menu-label menu-bg-red jump\">".concat(getMenuMarkName(secondMenu.getMenuMark())).concat("</i>\n"));

		              buffer.append("          <ul>\n");
		              for (PortalMenuModel thirdMenu : thirdMenus)
		              {
		                menuIcon = thirdMenu.getMenuIcon();
		                if (StringUtils.isEmpty(menuIcon)) {
		                  menuIcon = "icon icon-point";
		                }

		                List<PortalMenuModel> fourMenus = super.getThirdSubMenuList(thirdMenu.getId());
		                allMenus.addAll(fourMenus);
		                buffer.append("     <li class='subChild'>\n");
		                if (fourMenus.size() == 0) {
		                  buffer.append("<div id='" + thirdMenu.getId() + "' class='afont taburl' openType='").append(thirdMenu.getMenuOpenType()).append("' title='").append(HtmlUtils.htmlEscape(thirdMenu.getMenuName())).append("' rel='").append(thirdMenu.getMenuUrl()).append("'>").append(thirdMenu.getMenuNameExt()).append("</div>\n")
		                    .append(StringUtils.isBlank(thirdMenu
		                    .getMenuMark()) ? "" : "<i class=\"menu-label menu-bg-red jump\">".concat(getMenuMarkName(thirdMenu.getMenuMark())).concat("</i>\n"));
		                } else {
		                  buffer.append("<div id='" + thirdMenu.getId() + "' class='afont taburl hlist' openType='").append(thirdMenu.getMenuOpenType()).append("' title='").append(HtmlUtils.htmlEscape(thirdMenu.getMenuName())).append("' rel='").append(thirdMenu.getMenuUrl()).append("'>").append(thirdMenu.getMenuNameExt()).append("</div>\n")
		                    .append(StringUtils.isBlank(thirdMenu
		                    .getMenuMark()) ? "" : "<i class=\"menu-label menu-bg-red jump\">".concat(getMenuMarkName(thirdMenu.getMenuMark())).concat("</i>\n"));
		                  addSubMenu(fourMenus, buffer, allMenus);
		                }
		                buffer.append("     </li>\n");
		              }
		              buffer.append("          </ul>\n");
		            } else {
		              buffer.append("       <div id='" + secondMenu.getId() + "' class='c-title taburl").append(" ' openType='").append(secondMenu.getMenuOpenType()).append("' rel='").append(secondMenu.getMenuUrl()).append("' title='").append(secondMenu.getMenuName()).append("' ").append(">").append("<i class=\"" + menuIcon + "\"></i>").append(HtmlUtils.htmlEscape(secondMenu.getMenuNameExt())).append("</div>\n")
		                .append(StringUtils.isBlank(secondMenu
		                .getMenuMark()) ? "" : "<i class=\"menu-label menu-bg-red jump\">".concat(getMenuMarkName(secondMenu.getMenuMark())).concat("</i>\n"));
		            }
		            buffer.append("     </div>\n");
		          }
		          buffer.append("     </div>\n");
		        }

		        buffer.append("       </li>\n");
		        buffer.append("</a>");
		      }
		    }

		    buffer.append("</ul>\n");

		    super.setCache(buffer.toString(), userId, orgIndentity, allMenus);
		    return buffer.toString();
		  }

		  private void addSubMenu(List<PortalMenuModel> menuList, StringBuffer buffer, List<PortalMenuModel> allMenus)
		  {
		    List<PortalMenuModel> subMenuList = null;
		    buffer.append("          <ul>\n");
		    for (PortalMenuModel portalMenuModel : menuList)
		    {
		      String menuIcon = portalMenuModel.getMenuIcon();
		      if (StringUtils.isEmpty(menuIcon)) {
		        menuIcon = "icon icon-point";
		      }
		      subMenuList = super.getThirdSubMenuList(portalMenuModel.getId());
		      allMenus.addAll(subMenuList);
		      buffer.append("     <li class='subChild'>\n");
		      if (subMenuList.size() == 0) {
		        buffer.append("<div id='" + portalMenuModel.getId() + "' class='afont taburl' openType='").append(portalMenuModel.getMenuOpenType()).append("' title='").append(HtmlUtils.htmlEscape(portalMenuModel.getMenuName())).append("' rel='").append(portalMenuModel.getMenuUrl()).append("'>").append(portalMenuModel.getMenuNameExt()).append("</div>\n");
		      } else {
		        buffer.append("<div id='" + portalMenuModel.getId() + "' class='afont taburl hlist' openType='").append(portalMenuModel.getMenuOpenType()).append("' title='").append(HtmlUtils.htmlEscape(portalMenuModel.getMenuName())).append("' rel='").append(portalMenuModel.getMenuUrl()).append("'>").append(portalMenuModel.getMenuNameExt()).append("</div>\n");
		        addSubMenu(subMenuList, buffer, allMenus);
		      }
		      buffer.append("     </li>\n");
		    }
		    buffer.append("</ul>");
		  }

		  private List<PortalMenuModel> getSortMoreMenus() {
		    List<PortalMenuModel> list = new ArrayList<PortalMenuModel>();
		    for (int i = 4; i < this.firstMenus.size(); i++) {
		      PortalMenuModel firstMenuModel = (PortalMenuModel)this.firstMenus.get(i);
		      firstMenuModel.setSubMenu(super.getSecondSubMenuList(firstMenuModel.getId()));
		      list.add(firstMenuModel);
		    }
		    Collections.sort(list, new Comparator() {
		      public int compare(Object o1, Object o2) {
		        PortalMenuModel obj1 = (PortalMenuModel)o1;
		        PortalMenuModel obj2 = (PortalMenuModel)o2;
		        return obj2.getSubMenu().size() - obj1.getSubMenu().size();
		      }
		    });
		    return list;
		  }

		  public Map<String, Object> getMap()
		  {
		    Map obj = new HashMap();

		    return obj;
		  }
 
		  private String getMenuMarkName(String menuMark)
		  {
		    if (!CollectionUtils.isEmpty(this.menuMarkMap)) {
		      return ObjectUtils.getDisplayString(this.menuMarkMap.get(menuMark));
		    }
		    return "";
		  }
}
