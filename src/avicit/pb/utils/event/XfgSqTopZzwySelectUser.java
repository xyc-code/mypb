package avicit.pb.utils.event;

import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.bpm.api.identity.Actor;
import avicit.platform6.bpm.api.identity.Actors;
import avicit.platform6.bpm.api.identity.UserSelect;
import avicit.platform6.bpm.pvm.internal.task.actor.UserActor;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringMVCFactory;

import java.util.ArrayList;
import java.util.List;

/**
 * 上级组织委员，先锋岗申请专用 zhanggq
 */
public class XfgSqTopZzwySelectUser extends UserSelect implements LoaderConstant {
    @Override
    public Actors getActors(String processInstanceId, String executionId, String activityName, String startFormId,
                            String loginUserId) {
        //获取当前处理人所在党支部，
        PartyOrganMemberService partyOrganMemberService= SpringMVCFactory.getBean(PartyOrganMemberService.class);
        PartyOrganizationService partyOrganizationService=SpringMVCFactory.getBean(PartyOrganizationService.class);
        SysUserAPI sysUserAPI=SpringMVCFactory.getBean(SysUserAPI.class);
        PartyOrganMemberDTO searchParams=new PartyOrganMemberDTO();
        searchParams.setUserId(loginUserId);
        List actorlist = new ArrayList();
        try {
            List<PartyOrganMemberDTO> partyOrganMemberList=partyOrganMemberService.searchPartyOrganMember(searchParams,null,null);

            for(PartyOrganMemberDTO dto:partyOrganMemberList) {//当前处理人所在党支部，

                StringBuffer partyIds = new StringBuffer();
                String partyId = dto.getPartyId();//组织id
                PartyOrganizationDTO partyOrganizationDTO=partyOrganizationService.queryPartyOrganizationByPrimaryKey(partyId);
               if(partyOrganizationDTO!=null){
                   searchParams.setUserId("");
                   searchParams.setPartyId(partyOrganizationDTO.getParentId());
                   searchParams.setUserPost("4");//组织委员
                   List<PartyOrganMemberDTO> partyOrganMemberLists=partyOrganMemberService.searchPartyOrganMember(searchParams,null,null);
                   Actor actor = new UserActor();
                   for(PartyOrganMemberDTO dto1:partyOrganMemberLists){
                       actor.setId(dto1.getUserId());// 用户ID
                       actor.setName(sysUserLoader.getSysUserNameById(dto1.getUserId()));// 用户
                       actor.setType("user");// 类别
                       actorlist.add(actor);
                   }


               }

            }

        } catch (Exception e) {
            e.printStackTrace();
        }


        Actors actors = new Actors();
        actors.setActorlist(actorlist);
        actors.setId(ComUtil.getId());
        return actors;

    }
}
