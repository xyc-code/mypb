package avicit.platform6.msystem.portal.skins.def.impl;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.api.sysprofile.SysProfileAPI;
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
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.HtmlUtils;

public class PortalThemesDaSkinsSimpleImpl extends ThemesSkinsAbst {
	public PortalThemesDaSkinsSimpleImpl(String _typeKey) {
		super(_typeKey);
		// TODO Auto-generated constructor stub
	}

	private static SysProfileAPI sysProfileAPI;
	private static SysLookupAPI sysLookupAPI;
	private List<PortalMenuModel> firstMenus;
	private Collection<SysLookupSimpleVo> sysLookupSimpleVos;
	private Map<String, String> menuMarkMap;
	private int pos = 4;
	public String getMenus(String userId, String orgIndentity) {
		if (null == sysProfileAPI) {
			sysProfileAPI = (SysProfileAPI) SpringFactory.getBean(SysProfileAPI.class);
		}
		String firstMenuCount = sysProfileAPI.getProfileValueByCodeByAppId("PLATFORM_SIMPLE_FIRST_MENU_COUNT",
				SessionHelper.getApplicationId());
		if (StringUtils.isNotEmpty(firstMenuCount)) {
			this.pos = Integer.parseInt(firstMenuCount);
		}
		if (null == sysLookupAPI) {
			sysLookupAPI = (SysLookupAPI) SpringFactory.getBean(SysLookupAPI.class);
		}
		this.sysLookupSimpleVos = sysLookupAPI.getLookUpListByType("PLATFORM_MENU_MARK",
				SessionHelper.getApplicationId(), SessionHelper.getCurrentLanguageCode());
		this.menuMarkMap = collectionToMap(this.sysLookupSimpleVos);
		StringBuffer buffer = new StringBuffer();
		List<PortalMenuModel> allMenus = new ArrayList();
		this.firstMenus = super.getFirstMenuList(orgIndentity);
		allMenus.addAll(this.firstMenus);
		buffer.append("<ul >\n");
		for (int i = 0; i < this.firstMenus.size(); i++) {
			PortalMenuModel firstModel = (PortalMenuModel) this.firstMenus.get(i);			
			List<PortalMenuModel> secondMenus = super.getSecondSubMenuList(firstModel.getId());
			allMenus.addAll(secondMenus);
            if(i>=7){
            	getMoreMenu(buffer, i);
    			i=this.firstMenus.size();
    			break;
			}else{
				if(i>=5||i>=6){
					buffer.append("<li title=\'"+firstModel.getMenuName()+"\' 	style= \"width:6.9%;margin-right: 0px;\">");
					buffer.append("<div class=\"one-lelve\">");
					buffer.append("<i style=\"left:37%\"><img src=\"avicit/platform6/portal/themes/dasimple/img/pic_04hover.png\"></i>");
				}else{
					buffer.append("<li title=\'"+firstModel.getMenuName()+"\'>");
					buffer.append("<div class=\"one-lelve\">");
					buffer.append("<i><img src=\"avicit/platform6/portal/themes/dasimple/img/pic_04hover.png\"></i>");
				}							
				if(firstModel.getMenuName().length()>10){
					buffer.append("<b style=\"display: table-cell;vertical-align: middle;display: inline-block;line-height: 22px;\">"+firstModel.getMenuName()+"</b>");
				}else{
					buffer.append("<b>"+firstModel.getMenuName()+"</b>");
				}
				
				buffer.append("</div>");
			}
			buffer.append("<div class=\"two-lelve\" style=\"display: none;\">");	
			if(secondMenus.size()>=10){
				buffer.append("<a href=\"javascript:void(0);\"  id=\"a-left\" style=\"width: 50px;height: 50px;position: absolute;z-index: 1;\"></a>");
				buffer.append("<a href=\"javascript:void(0);\"  id=\"a-right\" style=\"width: 50px;height: 50px;position: absolute;z-index: 1;\"></a>");
				buffer.append("<div style=\"2000px;\">");
			}
			for (PortalMenuModel secondMenu : secondMenus) {	
					buffer.append("<span id='"+secondMenu.getId()+"' ref='"+secondMenu.getMenuUrl()+"' title='"+secondMenu.getMenuName()+"' >");
					buffer.append(secondMenu.getMenuName());
					buffer.append("</span>");								
			}
			if(secondMenus.size()>=10){
				buffer.append("</div>");
			}
			buffer.append("</div>");
			buffer.append("</li>");
		}
		buffer.append("</ul>\n");
		super.setCache(buffer.toString(), userId, orgIndentity, allMenus);
		return buffer.toString();
	}

	private void addSubMenu(List<PortalMenuModel> menuList, StringBuffer bufferAll, List<PortalMenuModel> allMenus) {
		List<PortalMenuModel> subMenuList = null;
		bufferAll.append("<ul>\n");
		for (PortalMenuModel portalMenuModel : menuList) {
			String menuIcon = portalMenuModel.getMenuIcon();
			if (StringUtils.isEmpty(menuIcon)) {
				menuIcon = "icon icon-point";
			}
			subMenuList = super.getThirdSubMenuList(portalMenuModel.getId());
			allMenus.addAll(subMenuList);
			bufferAll.append("     <li>\n");
			if (subMenuList.size() == 0) {
				bufferAll.append("<li id='" + portalMenuModel.getId() + "' opentype='"
						+ portalMenuModel.getMenuOpenType() + "' title='" + portalMenuModel.getMenuName() + "' rel='"
						+ portalMenuModel.getMenuUrl() + "' icon='" + menuIcon + "'>");
			} else {
				bufferAll.append("<li id='" + portalMenuModel.getId() + "' opentype='"
						+ portalMenuModel.getMenuOpenType() + "' title='" + portalMenuModel.getMenuName() + "' rel='"
						+ portalMenuModel.getMenuUrl() + "' icon='" + menuIcon + "'>");
				addSubMenu(subMenuList, bufferAll, allMenus);
			}
			bufferAll.append("</li>\n");
		}
		bufferAll.append("</ul>");
	}

	private void getMoreMenu(StringBuffer buffer,int i) {
		buffer.append("<li title=\"其他工作\" style=\"margin-right: -1%;\">");
		buffer.append("<div class=\"one-lelve\">");
		buffer.append("<i><img src=\"avicit/platform6/portal/themes/dasimple/img/pic_04hover.png\"></i>");
		buffer.append("<b>其他工作</b>");
		buffer.append("</div>");
		buffer.append("<div class=\"two-lelve\" style=\"display: none;\">");
		if((this.firstMenus.size()-i)>=10){
			buffer.append("<a href=\"javascript:void(0);\"  id=\"a-left\" style=\"width: 50px;height: 50px;position: absolute;z-index: 1;\"></a>");
			buffer.append("<a href=\"javascript:void(0);\"  id=\"a-right\" style=\"width: 50px;height: 50px;position: absolute;z-index: 1;\"></a>");
			buffer.append("<div style=\"2000px;\">");
		}
		for(int j = i;j<this.firstMenus.size();j++){
			buffer.append("<span id='"+this.firstMenus.get(j).getId()+"' ref='"+this.firstMenus.get(j).getMenuUrl()+"' title='"+this.firstMenus.get(j).getMenuName()+"' >");
			buffer.append(this.firstMenus.get(j).getMenuName());
			buffer.append("</span>");	
		}
		if((this.firstMenus.size()-i)>=10){
			buffer.append("</div>");
		}
		buffer.append("</div>");
		buffer.append("</li>");
	}

	private List<PortalMenuModel> getSortMoreMenus() {
		List<PortalMenuModel> list = new ArrayList();
		for (int i = this.pos; i < this.firstMenus.size(); i++) {
			PortalMenuModel firstMenuModel = (PortalMenuModel) this.firstMenus.get(i);
			firstMenuModel.setSubMenu(super.getSecondSubMenuList(firstMenuModel.getId()));
			list.add(firstMenuModel);
		}
		Collections.sort(list, new Comparator() {
			public int compare(Object o1, Object o2) {
				PortalMenuModel obj1 = (PortalMenuModel) o1;
				PortalMenuModel obj2 = (PortalMenuModel) o2;
				return obj2.getSubMenu().size() - obj1.getSubMenu().size();
			}

		});
		return list;
	}

	public Map<String, Object> getMap() {
		Map<String, Object> obj = new HashMap();
		obj.put("defaultSecondMenu", getDefaultSecondMenu());
		return obj;
	}

	private String getDefaultSecondMenu() {
		StringBuffer buffer = new StringBuffer();
		String langcode = SessionHelper.getCurrentLanguageCode();
		String menuIcon;
		if ((this.firstMenus != null) && (this.firstMenus.size() > 0) && (this.firstMenus.get(0) != null)) {
			List<PortalMenuModel> secondMenus = super.getSecondSubMenuList(
					((PortalMenuModel) this.firstMenus.get(0)).getId());

			menuIcon = "";
			if ((secondMenus != null) && (secondMenus.size() > 0)) {
				for (PortalMenuModel secondMenu : secondMenus) {
					menuIcon = secondMenu.getMenuIcon();
					if (StringUtils.isEmpty(menuIcon)) {
						menuIcon = "icon icon-menu2";
					}
					List<PortalMenuModel> thirdMenus = getThirdSubMenuList(secondMenu.getId());
					String chevron = (thirdMenus != null) && (thirdMenus.size() > 0) ? "fa-chevron-down" : "";
					buffer.append("<li>\n");
					buffer.append("<div class=\"link taburl secondlevel\" openType='")
							.append(secondMenu.getMenuOpenType()).append("' id=\"").append(secondMenu.getId())
							.append("\" title=\"").append(secondMenu.getMenuName()).append("\" ")
							.append(getUrl(secondMenu)).append("><i class=\"").append(menuIcon).append("\"></i>")
							.append(secondMenu.getMenuNameExt()).append("<i class=\"fa ").append(chevron)
							.append("\"></i></div>")
							.append(StringUtils.isBlank(secondMenu.getMenuMark()) ? ""
									: "<i class=\"menu-label menu-bg-red jump\">"
											.concat(getMenuMarkName(secondMenu.getMenuMark())).concat("</i>\n"));

					if ((thirdMenus != null) && (thirdMenus.size() > 0)) {
						buffer.append("<ul class=\"submenu\">\n");
						for (PortalMenuModel thirdMenu : thirdMenus) {
							List<PortalMenuModel> fourMenus = getThirdSubMenuList(thirdMenu.getId());
							String chevronFour = (fourMenus != null) && (fourMenus.size() > 0) ? "fa-chevron-down" : "";

							buffer.append("<li class=\" \">")
									.append("<div class=\" linkthree taburl thirdlevel\" openType='")
									.append(thirdMenu.getMenuOpenType()).append("' id=\"").append(thirdMenu.getId())
									.append("\" title=\"").append(thirdMenu.getMenuName()).append("\" ")
									.append(getUrl(thirdMenu)).append(">").append(thirdMenu.getMenuName())
									.append("<i class=\"fa ").append(chevronFour).append("\"></i></div>")
									.append(StringUtils.isBlank(thirdMenu.getMenuMark()) ? ""
											: "<i class=\"menu-label menu-bg-red jump\">"
													.concat(getMenuMarkName(thirdMenu.getMenuMark())).concat("</i>\n"));

							if ((fourMenus != null) && (fourMenus.size() > 0)) {
								buffer.append("<ul class=\"foursubmenu\">\n");
								for (PortalMenuModel fourMenu : fourMenus) {

									buffer.append(
											"<li class=\"linkfour taburl fourlevel\"> <span class=\"afont taburl fourlevel\"  name='fourMenus' openType='")
											.append(fourMenu.getMenuOpenType()).append("' id=\"")
											.append(fourMenu.getId()).append("\" title=\"")
											.append(fourMenu.getMenuName()).append("\" ").append(getUrl(fourMenu))
											.append(">").append(fourMenu.getMenuName()).append("</span>\n")
											.append(StringUtils.isBlank(fourMenu.getMenuMark()) ? ""
													: "<i class=\"menu-label menu-bg-red jump\">"
															.concat(getMenuMarkName(fourMenu.getMenuMark()))
															.concat("</i>\n"))
											.append("</li>\n");
								}

								buffer.append("</ul>\n");
							}
							buffer.append("</li>\n");
						}
						buffer.append("</ul>\n");
					}
					buffer.append("</li>\n");
				}
			}
		}
		return buffer.toString();
	}

	private String getMenuMarkName(String menuMark) {
		if (!CollectionUtils.isEmpty(this.menuMarkMap)) {
			return ObjectUtils.getDisplayString(this.menuMarkMap.get(menuMark));
		}
		return "";
	}
	
}
