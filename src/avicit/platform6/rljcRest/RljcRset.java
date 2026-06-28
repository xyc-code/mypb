package avicit.platform6.rljcRest;

import avicit.pb.member.partymember.dto.PartyMemberDTO;
import avicit.pb.member.partymember.service.PartyMemberService;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.api.sysuser.SysDeptAPI;
import avicit.platform6.api.sysuser.SysUserAPI;
import avicit.platform6.api.sysuser.dto.SysDept;
import avicit.platform6.api.sysuser.dto.SysUser;
import avicit.platform6.bpm.pvm.internal.processengine.SpringHelper;
import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.spring.SpringFactory;
import avicit.platform6.rljcRest.dto.DynMdmRyDTO;
import avicit.platform6.rljcRest.dto.MdmZz;
import avicit.platform6.rljcRest.service.DynMdmRyService;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @金航数码科技有限责任公司
 * @作者：zzf
 * @创建时间： 2022-12-20 13:45
 * @类说明：人力集成表Rest
 * @修改记录：
 */
@RestController
@RequestMapping("/api/avicit/pb/member/partyMember/rest")
public class RljcRset implements LoaderConstant {
    private static final Logger LOGGER = LoggerFactory.getLogger(RljcRset.class);
    JdbcTemplate jdbcTemplate = SpringHelper.getBean(JdbcTemplate.class);
    private SysUserAPI sysuser = SpringFactory.getBean(SysUserAPI.class);
    private SysDeptAPI sysdept = SpringFactory.getBean(SysDeptAPI.class);
    @Autowired
    private DynMdmRyService service;

    /**
     * 根据json数据集成人员新增或修改
     */
    @PostMapping("/insertList")
    public Map<String, Object> insertList(@RequestBody JSONObject dataStrJSON) {
        System.out.println("into insertList .............");
        Map<String, Object> mas = new HashMap<>();
        long startTime = System.currentTimeMillis();
        List<Map<String, Object>> list = new ArrayList<>();
        Object uuid = null;
        List<DynMdmRyDTO> studentsList = null;
        try {
            try {
                JSONArray jsonArray = dataStrJSON.getJSONArray("LIST");
                System.out.println("aaa");
                studentsList = new ArrayList<>();
                for (int i = 0; i < jsonArray.size(); i++) {
                    String s = jsonArray.getJSONObject(i).getJSONObject("MDM_RY").toJSONString();
                    LOGGER.info("获取人力数据：" + s);
                    DynMdmRyDTO dtoss = JSONObject.parseObject(s, DynMdmRyDTO.class);
                    try {
                        uuid = jsonArray.getJSONObject(i).get("CIDP_TASK_UUID");
                        if (uuid == null || uuid.equals("")) {
                            throw new NullPointerException("未获取到task_id");
                        }
                        dtoss.UUID = uuid;
                    } catch (Exception e) {
                        Map<String, Object> map = new HashMap<>();
                        map.put("type", "failure");
                        map.put("reason", "新增插入失败-------task_id转化失败,task_id为:" + uuid + "--------错误信息为:" + e.getMessage());
                        map.put("task_id", uuid);
                        list.add(map);
                        mas.put("result", list);
                        return mas;
                    }
                    studentsList.add(dtoss);
                }
            } catch (Exception e) {
                Map<String, Object> map = new HashMap<>();
                LOGGER.error("新增插入失败-------JSON转化失败,json格式为:" + dataStrJSON + "--------错误信息为:" + e.getMessage());
                map.put("type", "failure");
                map.put("reason", "新增插入失败-------JSON转化失败,json格式为:" + dataStrJSON + "--------错误信息为:" + e.getMessage());
                map.put("task_id", uuid);
                list.add(map);
                mas.put("result", list);
                return mas;
            }
            if (studentsList == null || studentsList.size() == 0) {
                Map<String, Object> map = new HashMap<>();
                map.put("type", "failure");
                map.put("reason", "实例对象为空，json格式为:" + dataStrJSON);
                map.put("task_id", uuid);
                list.add(map);
                mas.put("result", list);
                return mas;
            }
            for (int i = 0; i < studentsList.size(); i++) {
                Map<String, Object> map = new HashMap<>();
                DynMdmRyDTO dto = studentsList.get(i);
                SysUser user = this.sysuser.getSysUserByLoginName(dto.getJtygbm());
                /*String deptId = "";
                try {
                    deptId = jdbcTemplate.queryForObject("SELECT ID FROM SYS_DEPT WHERE DEPT_CODE ='" + bmbm + "'", String.class);
                } catch (Exception e) {
                    deptId = "";
                }*/
                String deptId = this.sysdept.getSysDeptIdByDeptCode(dto.getYjbm());
                DynMdmRyDTO dto1 = this.service.findByCode(dto.getJtygbm());
                System.out.println("姓名---------------------------------------------------------------------------"+dto.getXm());
                String id = ComUtil.getId();
                try {
                    if (dto.getXb().equals("男")) {
                        dto.setXb("1");
                    } else {
                        dto.setXb("2");
                    }
                    if (user == null) {
                        SysUser newuser = new SysUser();
                        LOGGER.info("开始新增用户：" + newuser.getLoginName() + "," + newuser.getName());
                        newuser.setId(id);
                        newuser.setName(dto.getXm());
                        newuser.setNo(dto.getJtygbm());
                        newuser.setLoginName(dto.getJtygbm());
                        newuser.setLoginPassword("cape");
                        newuser.setSecretLevel("1");
                        newuser.setConsoleType("1");
                        newuser.setBirthday(dto.getCsrq());
                        newuser.setNation(dto.getMz());
                        newuser.setStatus("1");
                        newuser.setSex(dto.getXb());
                        newuser.setDeptId(deptId);
                        newuser.setPositionId("1");
                        newuser.setType("0");
                        newuser.setHomeAddress(dto.getJtzz());
                        LOGGER.info("新增用户成功：" + JSONObject.toJSONString(newuser));
                        this.sysuser.insertSysUser(newuser);
                        LOGGER.info("新增用户成功：" + newuser.getLoginName() + "," + newuser.getName());
                    } else {
                        SysUser newuser = new SysUser();
                        LOGGER.info("开始更新用户：" + newuser.getLoginName() + "," + newuser.getName());
                        newuser.setId(user.getId());
                        newuser.setName(dto.getXm());
                        newuser.setNo(dto.getJtygbm());
                        newuser.setLoginName(dto.getJtygbm());
                        newuser.setBirthday(dto.getCsrq());
                        newuser.setNation(dto.getMz());
                        newuser.setSex(dto.getXb());
                        newuser.setDeptId(deptId);
                        newuser.setHomeAddress(dto.getJtzz());
                        //查询党员表是否存在这个党员 如果存在 同步更新数据
                        try {
                            PartyMemberService partyMemberService = SpringFactory.getBean(PartyMemberService.class);
                            JdbcTemplate bean = SpringFactory.getBean(JdbcTemplate.class);
                            SysLookupAPI sysLookupLoader = SpringFactory.getBean(SysLookupAPI.class);
                            List<Map<String, Object>> list1 = bean.queryForList("select t.id from PARTY_MEMBER t where t.user_id = '" + user.getId() + "'");
                            if (list1.size() > 0) {
                                Map<String, Object> map1 = list1.get(0);
                                if (map1 != null) {
                                    String partyId = map1.get("ID").toString();
                                    PartyMemberDTO item = new PartyMemberDTO();
                                    item.setId(partyId);
                                    item.setUserId(user.getId());
                                    item.setUserCode(dto.getJtygbm());
                                    String zcdj = dto.getZcdj();
                                    Collection<SysLookupSimpleVo> PM_PROFESSIONAL_RANK_LEVEL = sysLookupLoader.getLookUpListByTypeByAppId("PM_PROFESSIONAL_RANK_LEVEL", "1");
                                    if ((PM_PROFESSIONAL_RANK_LEVEL != null) && (PM_PROFESSIONAL_RANK_LEVEL.size() > 0)) {
                                        for (SysLookupSimpleVo sysLookupSimpleVo : PM_PROFESSIONAL_RANK_LEVEL) {
                                            if (sysLookupSimpleVo.getLookupName().equals(zcdj)) {
                                                item.setAttribute03(sysLookupSimpleVo.getLookupCode());
                                                break;
                                            }
                                        }
                                    }
                                    DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                                    item.setWorkTime(dateFormat.parse(dto.getCjgzrq()));
                                    item.setDeptId(deptId);
                                    //20241126 modby wenc 添加人力传递数据是为NULL校验
                                    if(!"NULL".equals(dto.getCsd())){
                                    	item.setBirthPlace(dto.getCsd());
                        			}
                                    if(!"NULL".equals(dto.getJtzz())){
                                    	item.setAddress(dto.getJtzz());
                        			}
                                    if(!"NULL".equals(dto.getZc())){
                                    	item.setProfessionalRank(dto.getZc());
                        			}
                        			if(!"NULL".equals(dto.getJndj())){
                        				String jndj = dto.getJndj();
                                        Collection<SysLookupSimpleVo> PM_SKILL_LEVEL = sysLookupLoader.getLookUpListByTypeByAppId("PM_SKILL_LEVEL", "1");
                                        if ((PM_SKILL_LEVEL != null) && (PM_SKILL_LEVEL.size() > 0)) {
                                            for (SysLookupSimpleVo jn : PM_SKILL_LEVEL) {
                                                if (jn.getLookupName().equals(jndj)) {
                                                    item.setAttribute04(jn.getLookupCode());
                                                    break;
                                                }
                                            }
                                        }
                        			}
                        			//20241126 endby wenc 添加人力传递数据是为NULL校验
                                    String whcd = dto.getWhcd();
                                    Collection<SysLookupSimpleVo> PM_EDUCATION_LEVEL = sysLookupLoader.getLookUpListByTypeByAppId("PM_EDUCATION_LEVEL", "1");
                                    if ((PM_EDUCATION_LEVEL != null) && (PM_EDUCATION_LEVEL.size() > 0)) {
                                        for (SysLookupSimpleVo wh : PM_EDUCATION_LEVEL) {
                                            if (wh.getLookupName().equals(whcd)) {
                                                item.setEducationLevel(wh.getLookupCode());
                                                break;
                                            }
                                        }
                                    }
                                    item.setIdcard(dto.getSfzh());
                                    
                                    int i1 = partyMemberService.updatePartyMemberSensitive(item);
                                    if (i1 == 0) {
                                        LOGGER.info("党员更新失败，具体时间为" + dateFormat.format(new Date()) + ",更新次数为0");
                                    }else{
                                        LOGGER.info("更新用户：" + newuser.getName() + "的党员信息。");
                                    }
                                }
                            }
                        } catch (Exception e) {
                            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                            LOGGER.error("同步更新党员失效，具体时间为" + dateFormat.format(new Date()) + ",人员编码为:" + user.getNo() + ",错误信息为:" + e.getMessage());
                        }

                        this.sysuser.updateSysUser(newuser);
                        LOGGER.info("更新用户：" + newuser.getLoginName() + "," + newuser.getName());
                    }
                    if (dto1 != null) {
                        this.service.updateDynMdmRySensitive(dto);
                    } else {
                        LOGGER.info("开始新增人力中级表数据");
                        this.service.insertDynMdmRy(dto);
                    }
                    map.put("type", "success");
                    map.put("reason", "");
                    map.put("task_id", dto.UUID);
                    list.add(map);
                } catch (Exception e) {
                    map.put("type", "failure");
                    map.put("reason", e.getMessage());
                    map.put("task_id", dto.UUID);
                    list.add(map);
                }
            }
            mas.put("result", list);
            SimpleDateFormat sfm = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            LOGGER.info("来自用户集成数据的访问成功,方法执行耗时为:" + ((startTime - System.currentTimeMillis()) / 1000) + "秒,执行日期时间为:" + sfm.format(new Date(System.currentTimeMillis())));
            return mas;
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            LOGGER.error("新增插入失败,json格式为:" + dataStrJSON + "--------错误信息为:" + e.getMessage());
            map.put("reason", e.getMessage());
            map.put("type", "failure");
            map.put("task_id", uuid);
            list.add(map);
            mas.put("result", list);
            return mas;
        }
    }

    //根据人员编码查询数据
    @GetMapping("/{userCode}")
    public Map<String, Object> getCode(@PathVariable("userCode") String userCode) {
        Map<String, Object> map = new HashMap<>();
        try {
            DynMdmRyDTO dto = this.service.findByCode(userCode);
            map.put("dto", dto);
            map.put("result", "success");
        } catch (Exception e) {
            map.put("dto", e.getMessage());
            map.put("result", "failure");
        }
        return map;
    }


    /**
     * 根据json数据集成部门
     *
     * @param dataStr json数据
     * @return 返回结果
     */
    @PostMapping("/insertDeptList")
    public Map<String, Object> insertDept(@RequestBody JSONObject dataStr) {
        Map<String, Object> mas = new HashMap<>();
        SimpleDateFormat sfm = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        long startTime = System.currentTimeMillis();
        List<Map<String, Object>> list = new ArrayList<>();
        List<MdmZz> studentsList = null;
        Object uuid = null;
        try {
            JSONArray jsonArray = dataStr.getJSONArray("LIST");
            studentsList = new ArrayList<>();
            for (int i = 0; i < jsonArray.size(); i++) {
                String s = jsonArray.getJSONObject(i).getJSONObject("MDM_ZZ").toJSONString();
                MdmZz dtoss = JSONObject.parseObject(s, MdmZz.class);
                try {
                    uuid = jsonArray.getJSONObject(i).get("CIDP_TASK_UUID");
                    if (uuid == null || uuid.equals("")) {
                        throw new NullPointerException("未获取到task_id");
                    }
                    dtoss.uuid = uuid;
                } catch (Exception e) {
                    Map<String, Object> map = new HashMap<>();
                    map.put("task_id", uuid);
                    map.put("type", "failure");
                    map.put("reason", "新增插入失败-------task_id转化失败,task_id为:" + uuid + "--------错误信息为:" + e.getMessage());
                    list.add(map);
                    mas.put("result", list);
                    return mas;
                }
                studentsList.add(dtoss);
            }
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("task_id", uuid);
            LOGGER.error("新增插入失败-------JSON转化失败,json格式为:" + dataStr + "--------错误信息为:" + e.getMessage());
            map.put("type", "failure");
            map.put("reason", "新增插入失败-------JSON转化失败,json格式为:" + dataStr + "--------错误信息为:" + e.getMessage());
            list.add(map);
            mas.put("result", list);
            LOGGER.info("来自部门集成数据的访问失败,错误信息为:" + e.getMessage() + ",方法执行耗时为:" + ((startTime - System.currentTimeMillis()) / 1000) + "秒,执行日期时间为:" + sfm.format(new Date(System.currentTimeMillis())));
            return mas;
        }
        if (studentsList.size() == 0) {
            Map<String, Object> map = new HashMap<>();
            map.put("type", "failure");
            map.put("task_id", uuid);
            map.put("reason", "实例对象为空，json格式为:" + dataStr);
            list.add(map);
            mas.put("result", list);
            return mas;
        }
        for (int i = 0; i < studentsList.size(); i++) {
            Map<String, Object> map = new HashMap<>();
            MdmZz dto = studentsList.get(i);
            if (dto.getBmjb().equals("2")) {
//				String deptId = this.sysdept.getSysDeptIdByDeptCode(dto.getBmbm());
                String bmbm = dto.getBmbm();
                String deptId = "";
                try {
                    deptId = jdbcTemplate.queryForObject("SELECT ID FROM SYS_DEPT WHERE DEPT_CODE ='" + bmbm + "'", String.class);
                } catch (Exception e) {
                    deptId = "";
                }
                String id = ComUtil.getId();
                System.out.println(bmbm + "-----------------------------------------------------------------------");
                if (StringUtils.isEmpty(deptId)) {
                    SysDept sysDept = new SysDept();
                    sysDept.setId(id);
                    sysDept.setDeptCode(dto.getBmbm());
                    sysDept.setDeptName(dto.getBmmc());
                    sysDept.setOrgId("ORG_ROOT");
                    sysDept.setOrgIdentity("ORG_ROOT");
                    sysDept.setValidFlag("1");
                    sysDept.setParentDeptId("-1");
                    sysDept.setOrderBy(new BigDecimal(1000));
                    this.sysdept.insertSysDept(sysDept);
                } else {
                    SysDept sysDept = new SysDept();
                    sysDept.setId(deptId);
                    sysDept.setDeptCode(dto.getBmbm());
                    sysDept.setDeptName(dto.getBmmc());
                    sysDept.setOrgId("ORG_ROOT");
                    sysDept.setOrgIdentity("ORG_ROOT");
                    sysDept.setValidFlag("1");
                    sysDept.setParentDeptId("-1");
                    this.sysdept.updateSysDept(sysDept);
                }

            }
            map.put("type", "success");
            map.put("reason", "");
            map.put("task_id", dto.uuid);
            list.add(map);

        }
        mas.put("result", list);
        LOGGER.info("来自用户集成数据的访问成功,方法执行耗时为:" + ((startTime - System.currentTimeMillis()) / 1000) + "秒,执行日期时间为:" + sfm.format(new Date(System.currentTimeMillis())));
        return mas;
    }
}
