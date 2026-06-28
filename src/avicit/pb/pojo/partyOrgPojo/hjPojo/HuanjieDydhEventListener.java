package avicit.pb.pojo.partyOrgPojo.hjPojo;

import avicit.pb.member.dynpartyorginfo.dto.DynPartyOrgInfoDTO;
import avicit.pb.member.dynpartyorginfo.service.DynPartyOrgInfoService;
import avicit.pb.organize.partyorganization.dto.PartyOrganizationDTO;
import avicit.pb.organize.partyorganization.service.PartyOrganizationService;
import avicit.pb.organize.partyorganmember.dto.PartyOrganMemberDTO;
import avicit.pb.organize.partyorganmember.service.PartyOrganMemberService;
import avicit.pb.pojo.partyRestPojo.dynhuanjiedydh.dto.DynHuanjieDydhDTO;
import avicit.pb.pojo.partyRestPojo.dynhuanjiedydh.service.DynHuanjieDydhService;
import avicit.pb.pojo.partyRestPojo.dynjwdydhzb.dto.DynJwDydhzbDTO;
import avicit.pb.pojo.partyRestPojo.dynjwdydhzb.service.DynJwDydhzbService;
import avicit.pb.pojo.partyRestPojo.dynsessionwyfg.dto.DynSessionWyfgDTO;
import avicit.pb.pojo.partyRestPojo.dynsessionwyfg.service.DynSessionWyfgService;
import avicit.pb.pojo.partyRestPojo.dynsubhjxjdydh3.dto.DynSubHjxjdydh3DTO;
import avicit.pb.pojo.partyRestPojo.dynsubhjxjdydh3.service.DynSubHjxjdydh3Service;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.text.SimpleDateFormat;
import java.util.*;


public class HuanjieDydhEventListener implements EventListener, LoaderConstant {
	private static final long serialVersionUID = 1L;

	@Override
    public void notify(EventListenerExecution execution) throws Exception {
        //主键id
        String id = (String) execution.getVariable("id");
        //换届党员大会服务对象
        DynHuanjieDydhService dydhService = SpringHelper.getBean(DynHuanjieDydhService.class);
        //换届选举结果子表服务对象
        DynSubHjxjdydh3Service dynSubHjxjdydh3Service = SpringHelper.getBean(DynSubHjxjdydh3Service.class);
        //换届选举结果纪委子表服务对象
        DynJwDydhzbService jwDydhzbService = SpringHelper.getBean(DynJwDydhzbService.class);
        //党组织历届选举情况服务对象
        DynPartyOrgInfoService dynPartyOrgInfoService = SpringHelper.getBean(DynPartyOrgInfoService.class);
        //历届委员分工服务对象
        DynSessionWyfgService dynSessionWyfgService = SpringHelper.getBean(DynSessionWyfgService.class);
        //党组织服务对象
        PartyOrganizationService partyOrganService = SpringHelper.getBean(PartyOrganizationService.class);
        //党组织委员服务对象
        PartyOrganMemberService partyOrganMemberService = SpringHelper.getBean(PartyOrganMemberService.class);
        JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
        //根据主键获取实体对象
        DynHuanjieDydhDTO dynHuanjieDydhDTO = dydhService.queryDynHuanjieDydhByPrimaryKey(id);
        //根据主键获取子表选举结果集
        DynSubHjxjdydh3DTO dynSubHjxjdydh3DTO = new DynSubHjxjdydh3DTO();
        dynSubHjxjdydh3DTO.setFkSubColId(id);
        List<DynSubHjxjdydh3DTO> dynSubHjxjdydh3DTOS = dynSubHjxjdydh3Service.searchDynSubHjxjdydh3(dynSubHjxjdydh3DTO, "", "");
        //根据主键获取子表纪委选举结果集
        DynJwDydhzbDTO dynJwDydhzbDTO = new DynJwDydhzbDTO();
        dynJwDydhzbDTO.setFkSubColId(id);
        List<DynJwDydhzbDTO> dynJwDydhzbDTOS = jwDydhzbService.searchDynJwDydhzb(dynJwDydhzbDTO, "", "");
        //获取党支部所有换届数据 再此基础上加一得到下一届的数
        DynPartyOrgInfoDTO dynPartyOrgInfoDTO = new DynPartyOrgInfoDTO();
        String partyNewId = dynHuanjieDydhDTO.getPartyNewId();
        dynPartyOrgInfoDTO.setPartyId(partyNewId);
        List<DynPartyOrgInfoDTO> dynPartyOrgInfoDTOS1 = dynPartyOrgInfoService.searchDynPartyOrgInfo(dynPartyOrgInfoDTO, "", "");
        int sessionId = dynPartyOrgInfoDTOS1.size() + 1;
        //将本届的选举记录数据查出
        dynPartyOrgInfoDTO.setSessionId(1L);
        List<DynPartyOrgInfoDTO> dynPartyOrgInfoDTOS = dynPartyOrgInfoService.searchDynPartyOrgInfo(dynPartyOrgInfoDTO, "", "");
        if (dynPartyOrgInfoDTOS != null && dynPartyOrgInfoDTOS.size() != 0) {
            //修改上届选举记录 将其状态改为历届
            DynPartyOrgInfoDTO dynPartyOrgInfoDTO1 = dynPartyOrgInfoDTOS.get(0);
            dynPartyOrgInfoDTO1.setSessionId(0L);
            dynPartyOrgInfoService.updateDynPartyOrgInfoAll(dynPartyOrgInfoDTO1);
        }
        //新增下一届选举记录
        Date electionTime = dynHuanjieDydhDTO.getElectionTime();
        Calendar instance = Calendar.getInstance();
        instance.setTime(electionTime);
        if (dynHuanjieDydhDTO.getPartyNameNew().contains("党委")) {
            instance.add(Calendar.YEAR, 5);
        } else {
            instance.add(Calendar.YEAR, 3);
        }
        electionTime = instance.getTime();
        dynPartyOrgInfoDTO.setCreaTime(instance.getTime());
        dynPartyOrgInfoDTO.setPartyName(dynHuanjieDydhDTO.getPartyNameNew());
        dynPartyOrgInfoDTO.setSessionName("第" + sessionId + "次");
        //查询党组织类型
        PartyOrganizationDTO partyOrganizationDTO = partyOrganService.queryPartyOrganizationByPrimaryKey(partyNewId);
        dynPartyOrgInfoDTO.setPartyType(partyOrganizationDTO.getAttribute01());
        instance.setTime(electionTime);
        instance.add(Calendar.MONTH, -6);
        dynPartyOrgInfoDTO.setCreaTimeDate(instance.getTime());
        instance.setTime(electionTime);
        instance.add(Calendar.MONTH, -4);
        dynPartyOrgInfoDTO.setCreaTimeDateTj(instance.getTime());
        instance.setTime(electionTime);
        //设置选举类型
        String partyType = dynHuanjieDydhDTO.getPartyType();
        switch (partyType) {
            case "1":
                dynPartyOrgInfoDTO.setSessionType("4");
                break;
            case "2":
                dynPartyOrgInfoDTO.setSessionType("1");
                break;
            case "3":
        }
        instance.setTime(electionTime);
        instance.add(Calendar.MONTH, -2);
        dynPartyOrgInfoDTO.setCreaTimeDateTjyb(instance.getTime());
        instance.setTime(electionTime);
        instance.add(Calendar.MONTH, -1);
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        dynPartyOrgInfoDTO.setAttr1(df.format(instance.getTime()));
        dynPartyOrgInfoDTO.setAttr2(df.format(electionTime));
        dynPartyOrgInfoDTO.setAttr3(df.format(electionTime));
        dynPartyOrgInfoDTO.setZkdydh(electionTime);
        if (partyType.equals("2") && dynHuanjieDydhDTO.getPartyNameNew().contains("党委")) {
            dynPartyOrgInfoDTO.setJwych(electionTime);
        }
        dynPartyOrgInfoDTO.setWyych(electionTime);
        dynPartyOrgInfoDTO.setSessionJd("1");
        //插入党组织历届选举列表
        dynPartyOrgInfoService.insertDynPartyOrgInfo(dynPartyOrgInfoDTO);
        //开始插入子表历届委员分工表
        if (dynJwDydhzbDTOS != null && dynJwDydhzbDTOS.size() != 0) {
            DynSessionWyfgDTO dto = new DynSessionWyfgDTO();
            dto.setSessionId(1L);
            List<DynSessionWyfgDTO> dynSessionWyfgDTOS = dynSessionWyfgService.searchDynSessionWyfg(dto, "", "");
            if (dynSessionWyfgDTOS != null && dynSessionWyfgDTOS.size() != 0) {
                for (DynSessionWyfgDTO wyfgDTO : dynSessionWyfgDTOS) {
                    wyfgDTO.setSessionId(0L);
                    dynSessionWyfgService.updateDynSessionWyfgSensitive(wyfgDTO);
                }
            }
            for (DynJwDydhzbDTO item : dynJwDydhzbDTOS) {
                DynSessionWyfgDTO wyfgDTO = new DynSessionWyfgDTO();
                wyfgDTO.setSessionName("第" + dynPartyOrgInfoDTOS1.size() + "次");
                wyfgDTO.setPartyName(partyOrganizationDTO.getPartyName());
                switch (partyType) {
                    case "1":
                        wyfgDTO.setSessionType("4");
                        break;
                    case "2":
                        wyfgDTO.setSessionType("1");
                        break;
                    case "3":
                }
                wyfgDTO.setSessionTime(new Date());
                wyfgDTO.setUserName(item.getName());
                wyfgDTO.setUserType(item.getDivisionLabor());
                wyfgDTO.setUserSex(item.getGender());
                wyfgDTO.setUserAddTime(item.getBirthday());
                wyfgDTO.setUserPost(item.getPost());
                wyfgDTO.setUserRanks(item.getProTitle());
                wyfgDTO.setUserWorkDate(item.getTimeWork());
                wyfgDTO.setUserPartyTime(item.getTimeJoin());
                wyfgDTO.setUserNumberVotes(item.getNumberVotes());
                wyfgDTO.setPartyId(partyNewId);
                wyfgDTO.setSessionId(1L);
                dynSessionWyfgService.insertDynSessionWyfg(wyfgDTO);
            }
            //20241211 modby wenc 这段代码先注释掉
            /*Map<String, Object> map = jdbcTemplate.queryForMap("select t1.id  from party_organization t1 where id in (select id from party_organization t  start with   t.id = '" + dynHuanjieDydhDTO.getPartyNewId() + "' connect by prior t.id = t.parent_id) and t1.attribute_01 = '3'");
            String jwId = map.get("ID").toString();
            PartyOrganMemberDTO partyOrganMemberDTO = new PartyOrganMemberDTO();
            partyOrganizationDTO.setParentId(jwId);
            List<PartyOrganMemberDTO> partyOrganMemberDTOS = partyOrganMemberService.searchPartyOrganMember(partyOrganMemberDTO, "", "");
            delOrgMebmber(partyOrganMemberDTOS,partyOrganMemberService);*/
            //20241211 endby wenc 这段代码先注释掉
            //同步更新党组织结构党委下的纪委下的委员一系列
            for (DynJwDydhzbDTO item : dynJwDydhzbDTOS) {
                List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.* from PARTY_MEMBER_ORGANIZATION_VIEW  t where  name = '" + item.getName() + "'  and birthday = to_date('" + item.getBirthday() + "','yyyy-MM-dd') and work_time = to_date('" + item.getTimeWork() + "','yyyy-MM-dd') and join_party = to_date('" + item.getTimeJoin() + "','yyyy-MM-dd')");
                if (list == null || list.size() == 0) {
                    continue;
                }
                Map<String, Object> itemMap = list.get(0);
                String divisionLabor = item.getDivisionLabor();
                String[] split = divisionLabor.split(",");
                for (String s : split) {
                    PartyOrganMemberDTO organMemberDTO = new PartyOrganMemberDTO();
                    String party_post = "";
                    Collection<SysLookupSimpleVo> partyPost = sysLookupLoader.getLookUpListByTypeByAppId("PARTY_POST", "1");
                    if ((partyPost != null) && (partyPost.size() > 0)) {
                        for (SysLookupSimpleVo sysLookupSimpleVo : partyPost) {
                            if (sysLookupSimpleVo.getLookupName().equals(s)) {
                                party_post = sysLookupSimpleVo.getLookupCode();
                                break;
                            }
                        }
                    }
                    organMemberDTO.setUserId(itemMap.get("USER_ID").toString());
                    organMemberDTO.setUserPost(party_post);
                    organMemberDTO.setPartyId(partyNewId);
                    organMemberDTO.setAttribute10(item.getTel());
                    partyOrganMemberService.insertPartyOrganMember(organMemberDTO);
                }
            }

        }
        if (dynSubHjxjdydh3DTOS != null && dynSubHjxjdydh3DTOS.size() != 0) {
            DynSessionWyfgDTO dto = new DynSessionWyfgDTO();
            dto.setSessionId(1L);
            List<DynSessionWyfgDTO> dynSessionWyfgDTOS = dynSessionWyfgService.searchDynSessionWyfg(dto, "", "");
            if (dynSessionWyfgDTOS != null && dynSessionWyfgDTOS.size() != 0) {
                for (DynSessionWyfgDTO wyfgDTO : dynSessionWyfgDTOS) {
                    wyfgDTO.setSessionId(0L);
                    dynSessionWyfgService.updateDynSessionWyfgSensitive(wyfgDTO);
                }
            }
            for (DynSubHjxjdydh3DTO item : dynSubHjxjdydh3DTOS) {
                DynSessionWyfgDTO wyfgDTO = new DynSessionWyfgDTO();
                wyfgDTO.setSessionName("第" + dynPartyOrgInfoDTOS1.size() + "届");
                wyfgDTO.setPartyName(partyOrganizationDTO.getPartyName());
                switch (partyType) {
                    case "1":
                        wyfgDTO.setSessionType("4");
                        break;
                    case "2":
                        wyfgDTO.setSessionType("1");
                        break;
                    case "3":
                }
                wyfgDTO.setSessionTime(new Date());
                wyfgDTO.setUserName(item.getName());
                wyfgDTO.setUserType(item.getDivisionLabor());
                wyfgDTO.setUserSex(item.getGender());
                wyfgDTO.setUserAddTime(item.getBirthday());
                wyfgDTO.setUserPost(item.getPost());
                wyfgDTO.setUserRanks(item.getProTitle());
                wyfgDTO.setUserWorkDate(item.getTimeWork());
                wyfgDTO.setUserPartyTime(item.getTimeJoin());
                wyfgDTO.setUserNumberVotes(item.getNumberVotes().toString());
                wyfgDTO.setPartyId(partyNewId);
                wyfgDTO.setSessionId(1L);
                dynSessionWyfgService.insertDynSessionWyfg(wyfgDTO);
            }
            //同步更新党组织结构委员表
            PartyOrganMemberDTO partyOrganMemberDTO = new PartyOrganMemberDTO();
            partyOrganMemberDTO.setPartyId(partyNewId);
            List<PartyOrganMemberDTO> partyOrganMemberDTOS = partyOrganMemberService.searchPartyOrganMember(partyOrganMemberDTO, "", "");
            //删除上一届党组织委员信息
            delOrgMebmber(partyOrganMemberDTOS,partyOrganMemberService);
            insetOrgMebmber(partyOrganMemberService, jdbcTemplate, dynHuanjieDydhDTO, dynSubHjxjdydh3DTOS, partyOrganMemberDTO);
        }


    }

    private void delOrgMebmber(List<PartyOrganMemberDTO> partyOrganMemberDTOS, PartyOrganMemberService partyOrganMemberService) {
        for (PartyOrganMemberDTO partyOrganMemberDTO : partyOrganMemberDTOS) {
            try {
                partyOrganMemberService.deletePartyOrganMemberById(partyOrganMemberDTO.getId());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private void insetOrgMebmber(PartyOrganMemberService partyOrganMemberService, JdbcTemplate jdbcTemplate, DynHuanjieDydhDTO dynHuanjieDydhDTO, List<DynSubHjxjdydh3DTO> dynSubHjxjdydh3DTOS, PartyOrganMemberDTO partyOrganMemberDTO) throws Exception {
        for (DynSubHjxjdydh3DTO item : dynSubHjxjdydh3DTOS) {
            List<Map<String, Object>> list = jdbcTemplate.queryForList("select t.* from PARTY_MEMBER_ORGANIZATION_VIEW  t where  name = '" + item.getName() + "'  and birthday = to_date('" + item.getBirthday() + "','yyyy-MM-dd') and work_time = to_date('" + item.getTimeWork() + "','yyyy-MM-dd') and join_party = to_date('" + item.getTimeJoin() + "','yyyy-MM-dd')");
            if (list == null || list.size() == 0) {
                continue;
            }
            Map<String, Object> itemMap = list.get(0);
            String divisionLabor = item.getDivisionLabor();
            String[] split = divisionLabor.split(",");
            for (String s : split) {
                PartyOrganMemberDTO organMemberDTO = new PartyOrganMemberDTO();
                String party_post = "";
                Collection<SysLookupSimpleVo> partyPost = sysLookupLoader.getLookUpListByTypeByAppId("PARTY_POST", "1");
                if ((partyPost != null) && (partyPost.size() > 0)) {
                    for (SysLookupSimpleVo sysLookupSimpleVo : partyPost) {
                        if (sysLookupSimpleVo.getLookupName().equals(s)) {
                            party_post = sysLookupSimpleVo.getLookupCode();
                            break;
                        }
                    }
                }
                organMemberDTO.setUserId(itemMap.get("USER_ID").toString());
                organMemberDTO.setUserPost(party_post);
                organMemberDTO.setPartyId(dynHuanjieDydhDTO.getPartyNewId());
                organMemberDTO.setAttribute10(item.getTel());
                partyOrganMemberService.insertPartyOrganMember(organMemberDTO);
            }
        }
    }
}
