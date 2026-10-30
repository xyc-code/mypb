package avicit.pb.bpmbatchcomplete.service;

import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.bpmclient.bpm.service.BpmOperateService;
import avicit.platform6.bpmclient.dto.org.Membership;
import avicit.platform6.bpmclient.dto.sys.WorkHandUsers;

import java.io.ByteArrayInputStream;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.DocumentBuilderFactory;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

/**
 * 通用 BPM task4 批量办理服务。
 *
 * <p>服务只办理当前用户仍在 task4 的有效待办，并从当前流程定义读取 task4 的唯一下一跳，
 * 因此不假定 task4 一定直接指向结束节点。</p>
 */
@Service
public class BpmBatchCompleteService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private BpmOperateService bpmOperateService;

    public Map<String, Object> completeTask4(String ids, HttpServletRequest request) {
        List<String> formIds = normalizeIds(ids);
        if (formIds.isEmpty()) {
            return failure("请先选择要批量办理的记录");
        }

        String userId = SessionHelper.getLoginSysUserId(request);
        if (StringUtils.isBlank(userId)) {
            return failure("当前用户未登录");
        }

        List<Map<String, Object>> taskRows = findCurrentTask4(formIds, userId);
        Map<String, Map<String, Object>> taskByFormId = new LinkedHashMap<String, Map<String, Object>>();
        for (Map<String, Object> row : taskRows) {
            String formId = string(row.get("TASK_B_ID_"));
            if (!taskByFormId.containsKey(formId)) {
                taskByFormId.put(formId, row);
            }
        }
        if (taskByFormId.size() != formIds.size()) {
            List<String> invalid = new ArrayList<String>();
            for (String formId : formIds) {
                if (!taskByFormId.containsKey(formId)) {
                    invalid.add(formId);
                }
            }
            return failure("选中的记录中有数据不在当前用户的 task4 待办，未执行任何办理：" + StringUtils.join(invalid, ","));
        }

        Map<String, String> outcomeCache = new HashMap<String, String>();
        String deptId = bpmOperateService.getCurrentDeptId(request);
        if (StringUtils.isBlank(deptId)) {
            deptId = "";
        }

        Map<String, String> outcomeByFormId = new LinkedHashMap<String, String>();
        for (String formId : formIds) {
            Map<String, Object> task = taskByFormId.get(formId);
            String procInstId = string(task.get("PROCINST_"));
            String outcome = outcomeCache.get(procInstId);
            if (outcome == null) {
                outcome = findSingleTask4Outcome(procInstId);
                outcomeCache.put(procInstId, outcome);
            }
            if (StringUtils.isBlank(outcome)) {
                return failure("流程 " + procInstId + " 的 task4 存在多个或不存在下一节点，无法安全批量办理；未执行任何办理");
            }
            outcomeByFormId.put(formId, outcome);
        }

        int completed = 0;
        for (String formId : formIds) {
            Map<String, Object> task = taskByFormId.get(formId);
            String procInstId = string(task.get("PROCINST_"));
            String outcome = outcomeByFormId.get(formId);

            try {
                bpmOperateService.completeTask(
                        procInstId,
                        string(task.get("DBID_")),
                        userId,
                        deptId,
                        outcome,
                        Collections.<String, List<Membership>>emptyMap(),
                        Collections.<String, List<WorkHandUsers>>emptyMap(),
                        Collections.<String, Object>emptyMap(),
                        "批量办理 task4",
                        "");
                completed++;
            } catch (Exception ex) {
                Map<String, Object> result = failure("已办理 " + completed + " 条，第 " + formId + " 条失败：" + ex.getMessage());
                result.put("completed", Integer.valueOf(completed));
                return result;
            }
        }

        Map<String, Object> result = success();
        result.put("completed", Integer.valueOf(completed));
        return result;
    }

    private List<Map<String, Object>> findCurrentTask4(List<String> formIds, String userId) {
        String placeholders = placeholders(formIds.size());
        String sql = "select TASK_B_ID_,PROCINST_,DBID_,ASSIGNEE_,WORKHAND_USER_ "
                + "from BPM_HIST_TASK_V where TASK_B_ID_ in (" + placeholders + ") "
                + "and TASK_NAME_='task4' and TASK_STATE_='1' and TASK_FINISHED_='0' and END_ is null "
                + "and (ASSIGNEE_=? or WORKHAND_USER_=?)";
        List<Object> args = new ArrayList<Object>(formIds);
        args.add(userId);
        args.add(userId);
        return jdbcTemplate.queryForList(sql, args.toArray());
    }

    private String findSingleTask4Outcome(String procInstId) {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select l.BLOB_VALUE_ from BPM_HIST_PROCINST p "
                        + "join BPM_DEPLOYPROP d on d.STRINGVAL_=p.PROCDEFID_ and d.KEY_='pdid' "
                        + "join BPM_LOB l on l.DEPLOYMENT_=d.DEPLOYMENT_ "
                        + "where p.DBID_=?",
                procInstId);
        Set<String> outcomes = new LinkedHashSet<String>();
        for (Map<String, Object> row : rows) {
            Object value = row.get("BLOB_VALUE_");
            if (value == null) {
                continue;
            }
            try {
                String outcome = parseTask4Outcome(blobBytes(value));
                if (StringUtils.isNotBlank(outcome)) {
                    outcomes.add(outcome);
                }
            } catch (Exception ignored) {
                // BPM_LOB can contain non-XML BLOB rows; keep looking for the XML row.
            }
        }
        return outcomes.size() == 1 ? outcomes.iterator().next() : "";
    }

    private String parseTask4Outcome(byte[] xml) throws Exception {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
        factory.setFeature("http://xml.org/sax/features/external-general-entities", false);
        factory.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
        factory.setExpandEntityReferences(false);
        Document document = factory.newDocumentBuilder().parse(new ByteArrayInputStream(xml));
        NodeList tasks = document.getElementsByTagName("task");
        for (int i = 0; i < tasks.getLength(); i++) {
            Node node = tasks.item(i);
            if (!(node instanceof Element) || !"task4".equals(((Element) node).getAttribute("name"))) {
                continue;
            }
            NodeList children = node.getChildNodes();
            String outcome = "";
            int transitionCount = 0;
            for (int j = 0; j < children.getLength(); j++) {
                Node child = children.item(j);
                if (!(child instanceof Element) || !"transition".equals(child.getNodeName())) {
                    continue;
                }
                String name = ((Element) child).getAttribute("name");
                if (StringUtils.isNotBlank(name)) {
                    outcome = name;
                    transitionCount++;
                }
            }
            return transitionCount == 1 ? outcome : "";
        }
        return "";
    }

    private byte[] blobBytes(Object value) throws Exception {
        if (value instanceof byte[]) {
            return (byte[]) value;
        }
        if (value instanceof Blob) {
            Blob blob = (Blob) value;
            return blob.getBytes(1, (int) blob.length());
        }
        throw new IllegalArgumentException("流程定义不是可读取的 BLOB");
    }

    private List<String> normalizeIds(String ids) {
        Set<String> unique = new LinkedHashSet<String>();
        if (StringUtils.isBlank(ids)) {
            return new ArrayList<String>();
        }
        for (String value : ids.split(",")) {
            if (StringUtils.isNotBlank(value)) {
                unique.add(value.trim());
            }
        }
        return new ArrayList<String>(unique);
    }

    private String placeholders(int count) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < count; i++) {
            if (i > 0) {
                result.append(",");
            }
            result.append("?");
        }
        return result.toString();
    }

    private Map<String, Object> success() {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("flag", "success");
        return result;
    }

    private Map<String, Object> failure(String message) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("flag", "failure");
        result.put("errorMsg", StringUtils.defaultString(message, "批量办理失败"));
        return result;
    }

    private String string(Object value) {
        return value == null ? "" : String.valueOf(value);
    }
}
