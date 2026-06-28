package avicit.platform6.msystem.portal.skins.def.impl;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.api.sysmenu.MenuAPI;
import avicit.platform6.api.sysmenu.MenuAPI.MenuFluentAPI;
import avicit.platform6.api.sysmenu.dto.MenuDto;
import avicit.platform6.msystem.portal.model.PortalMenuModel;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class simpleImplController
{

  @Autowired
  private MenuAPI menuApi;

  @Autowired
  private SysLookupAPI sysLookupAPI;
  private Collection<SysLookupSimpleVo> sysLookupSimpleVos;
  private Map<String, String> menuMarkMap;
  private Date currDate = null;

  @RequestMapping({"portal/themes_Djsimple"})
  @ResponseBody
  public String portal(HttpSession session, String id, @CookieValue(value="P_L_CODE", defaultValue="zh_CN") String langcode) { 
	  StringBuffer buffer = new StringBuffer();
	  List<PortalMenuModel> secondMenus = getSecondSubMenuList(id, langcode);
	    this.sysLookupSimpleVos = this.sysLookupAPI.getLookUpListByType("PLATFORM_MENU_MARK", SessionHelper.getApplicationId(), SessionHelper.getCurrentLanguageCode());
	    this.menuMarkMap = collectionToMap(this.sysLookupSimpleVos);
	    this.currDate = new Date();
	    if ((secondMenus != null) && (secondMenus.size() > 0)) {   	
	      for (PortalMenuModel secondMenu : secondMenus) {
	    	  List<PortalMenuModel> thirdMenus = getThirdSubMenuList(secondMenu.getId(), langcode);
	    	  buffer.append("<li title=\'"+secondMenu.getMenuName()+"\'>");
	    	  buffer.append("<a href=\"javascript:void(0);\" rel='"+secondMenu.getMenuUrl()+"' class=\"afinve\"><span class=\"nav-text\">");
	    	  buffer.append(secondMenu.getMenuName());
	    	  buffer.append("</span>");	    	   				          
	          if( thirdMenus !=null &&thirdMenus.size()!=0){
	        	  buffer.append("<span class=\"arrow none\"></span></a>");
	        	  forChilden(buffer,secondMenu.getId(),langcode);
	        	  buffer.append("</li>");
	          }else{
	        	  buffer.append("</a></li>");
	          } 
	       
	      }
	    }
	  
    return buffer.toString();
  }
  private void forChilden(StringBuffer buffer,String id,String langcode){
	  buffer.append("<ul class=\"sub-menu\" style=\"display: none;\">");
	  List<PortalMenuModel> secondMenus = getSecondSubMenuList(id, langcode);
	  if ((secondMenus != null) && (secondMenus.size() > 0)) {  
		  for(PortalMenuModel secondMenu : secondMenus){
			  List<PortalMenuModel> thirdMenus = getThirdSubMenuList(secondMenu.getId(), langcode);
//			  <span style="color: #C82E2A; padding-right: 4px;">●</span>
			  buffer.append("<li title=\'"+secondMenu.getMenuName()+"\' class=\"\"><a href=\"javascript:void(0);\" rel='"+secondMenu.getMenuUrl()+"' class=\"afinve\"><p>");
			  buffer.append(secondMenu.getMenuName());
			  if( thirdMenus !=null &&thirdMenus.size()!=0){
	        	  buffer.append("</p><span class=\"arrow none\"></span></a>");
	        	  forChilden(buffer,secondMenu.getId(),langcode);
	        	  buffer.append("</li>");
	          }else{
	        	  buffer.append("</p></a></li>");
	          } 
		  }
		  buffer.append("</ul>");
		  
	  }
  }

  private String getUrl(PortalMenuModel model)
  {
    String rel = "";
    if ((model.getMenuUrl() != null) && (model.getMenuUrl().trim().length() > 0)) {
      rel = "rel=\"" + model.getMenuUrl() + "\"";
    }
    return rel;
  }

  private List<PortalMenuModel> getSecondSubMenuList(String parentId, String langcode)
  {
    List list = this.menuApi.builder().orderBy().langCode(langcode).authorize().listByPid(parentId);
    List menuList = new ArrayList();
    for (int i = 0; i < list.size(); i++) {
      MenuDto menu = (MenuDto)list.get(i);
      if (menu != null) {
        PortalMenuModel model = new PortalMenuModel();
        model.setId(menu.getId());
        model.setMenuCode(menu.getMenuCode());
        model.setMenuName(menu.getMenuName());
        model.setMenuUrl(menu.getMenuUrl());
        model.setMenuOpenType(menu.getOpenType());
        model.setMenuIcon(menu.getMenuIcon());
        setMenuMark(model, menu);
        menuList.add(model);
      }
    }
    return menuList;
  }

  private List<PortalMenuModel> getThirdSubMenuList(String parentId, String langcode)
  {
    List list = this.menuApi.builder().orderBy().langCode(langcode).authorize().listByPid(parentId);
    List menuList = new ArrayList();
    for (int i = 0; i < list.size(); i++) {
      MenuDto menu = (MenuDto)list.get(i);
      if (menu != null) {
        PortalMenuModel model = new PortalMenuModel();
        model.setId(menu.getId());
        model.setMenuCode(menu.getMenuCode());
        model.setMenuUrl(menu.getMenuUrl());
        model.setMenuName(menu.getMenuName());
        model.setMenuOpenType(menu.getOpenType());
        setMenuMark(model, menu);
        menuList.add(model);
      }
    }
    return menuList;
  }

  private List<PortalMenuModel> getFourSubMenuList(String parentId, String langcode)
  {
    List list = this.menuApi.builder().orderBy().langCode(langcode).authorize().listByPid(parentId);
    List menuList = new ArrayList();
    for (int i = 0; i < list.size(); i++) {
      MenuDto menu = (MenuDto)list.get(i);
      if (menu != null) {
        PortalMenuModel model = new PortalMenuModel();
        model.setId(menu.getId());
        model.setMenuCode(menu.getMenuCode());
        model.setMenuUrl(menu.getMenuUrl());
        model.setMenuName(menu.getMenuName());
        model.setMenuOpenType(menu.getOpenType());
        setMenuMark(model, menu);
        menuList.add(model);
      }
    }
    return menuList;
  }

  private void setMenuMark(PortalMenuModel model, MenuDto menu)
  {
    if (null != menu.getMenuMark()) {
      if ((null != menu.getMarkEndDate()) && 
        (this.currDate.compareTo(getNextDateByDayCount(menu.getMarkEndDate(), 1)) > 0)) {
        return;
      }

      model.setMenuMark(menu.getMenuMark());
    }
  }

  private String getMenuMarkName(String menuMark)
  {
    if (!CollectionUtils.isEmpty(this.menuMarkMap)) {
      return ObjectUtils.getDisplayString(this.menuMarkMap.get(menuMark));
    }
    return "";
  }

  private Map<String, String> collectionToMap(Collection<SysLookupSimpleVo> sysLookupSimpleVos)
  {
    Map map = new HashMap(sysLookupSimpleVos.size());
    Iterator iterator = sysLookupSimpleVos.iterator();
    while (iterator.hasNext()) {
      SysLookupSimpleVo next = (SysLookupSimpleVo)iterator.next();
      map.put(next.getLookupCode(), next.getLookupName());
    }
    return map;
  }

  private Date getNextDateByDayCount(Date date, int count)
  {
    Calendar calendar = new GregorianCalendar();
    calendar.setTime(date);
    calendar.add(5, count);
    return calendar.getTime();
  }
}