package avicit.pb.utils.controller;

import avicit.pb.utils.excel.MultiSubTableExcelExporter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@Scope("prototype")
@RequestMapping("api/pb/utils/excelDemo/")
public class MultiSubTableExcelDemoController {

    private static final Logger LOGGER = LoggerFactory.getLogger(MultiSubTableExcelDemoController.class);

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "exportMultiSubTableDemo")
    public void exportMultiSubTableDemo(HttpServletResponse response) {
        OutputStream os = null;
        try {
            byte[] bytes = MultiSubTableExcelExporter.export(buildDemoReport());
            String fileName = URLEncoder.encode("multi-sub-table-demo.xlsx", "UTF-8").replace("+", "%20");
            response.reset();
            response.addHeader("Access-Control-Expose-Headers", "Content-Disposition");
            response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8");
            response.setHeader("Content-Disposition", "attachment;filename=" + fileName);
            os = response.getOutputStream();
            os.write(bytes);
            os.flush();
        } catch (Exception e) {
            LOGGER.error("exportMultiSubTableDemo error", e);
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        } finally {
            if (os != null) {
                try {
                    os.close();
                } catch (Exception e) {
                    LOGGER.error("close export stream error", e);
                }
            }
        }
    }

    @RequestMapping(value = "exportSysUserTableDemo")
    public void exportSysUserTableDemo(HttpServletResponse response) {
        OutputStream os = null;
        try {
            byte[] bytes = MultiSubTableExcelExporter.export(buildSysUserReport());
            String fileName = URLEncoder.encode("sys-user-table-demo.xlsx", "UTF-8").replace("+", "%20");
            response.reset();
            response.addHeader("Access-Control-Expose-Headers", "Content-Disposition");
            response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8");
            response.setHeader("Content-Disposition", "attachment;filename=" + fileName);
            os = response.getOutputStream();
            os.write(bytes);
            os.flush();
        } catch (Exception e) {
            LOGGER.error("exportSysUserTableDemo error", e);
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        } finally {
            if (os != null) {
                try {
                    os.close();
                } catch (Exception e) {
                    LOGGER.error("close export stream error", e);
                }
            }
        }
    }

    private MultiSubTableExcelExporter.Report buildSysUserReport() {
        MultiSubTableExcelExporter.Report report = new MultiSubTableExcelExporter.Report()
                .setSheetName("SysUser");
        List<Map<String, Object>> users = jdbcTemplate.queryForList(
                "select top 5 id, name, login_name, no, mobile, email, status, creation_date " +
                        "from sys_user order by login_name");
        for (Map<String, Object> user : users) {
            String userId = stringValue(user.get("ID"));
            MultiSubTableExcelExporter.MasterBlock block = new MultiSubTableExcelExporter.MasterBlock()
                    .setTitle("\u7528\u6237\uff1a" + stringValue(user.get("NAME")))
                    .addField("\u7528\u6237ID", userId)
                    .addField("\u59d3\u540d", user.get("NAME"))
                    .addField("\u767b\u5f55\u540d", user.get("LOGIN_NAME"))
                    .addField("\u7f16\u53f7", user.get("NO"))
                    .addField("\u624b\u673a", user.get("MOBILE"))
                    .addField("\u90ae\u7bb1", user.get("EMAIL"))
                    .addField("\u72b6\u6001", user.get("STATUS"))
                    .addField("\u521b\u5efa\u65f6\u95f4", user.get("CREATION_DATE"));
            block.addSection(buildUserRoleSection(userId));
            block.addSection(buildUserDeptPositionSection(userId));
            report.addBlock(block);
        }
        return report;
    }

    private MultiSubTableExcelExporter.Section buildUserRoleSection(String userId) {
        MultiSubTableExcelExporter.Section section = new MultiSubTableExcelExporter.Section()
                .setTitle("\u5b50\u8868\u4e00\uff1a\u7528\u6237\u89d2\u8272")
                .setEmptyText("\u8be5\u7528\u6237\u6682\u65e0\u89d2\u8272\u6570\u636e")
                .addColumn("ROLE_NAME", "\u89d2\u8272\u540d\u79f0", 22)
                .addColumn("ROLE_CODE", "\u89d2\u8272\u7f16\u7801", 22)
                .addColumn("ROLE_TYPE", "\u89d2\u8272\u7c7b\u578b", 12)
                .addColumn("VALID_FLAG", "\u662f\u5426\u6709\u6548", 12);
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select r.role_name, r.role_code, r.role_type, r.valid_flag " +
                        "from sys_user_role ur left join sys_role r on r.id = ur.sys_role_id " +
                        "where ur.sys_user_id = ? order by r.role_code", userId);
        section.setRows(copyRows(rows));
        return section;
    }

    private MultiSubTableExcelExporter.Section buildUserDeptPositionSection(String userId) {
        MultiSubTableExcelExporter.Section section = new MultiSubTableExcelExporter.Section()
                .setTitle("\u5b50\u8868\u4e8c\uff1a\u7528\u6237\u90e8\u95e8\u5c97\u4f4d")
                .setEmptyText("\u8be5\u7528\u6237\u6682\u65e0\u90e8\u95e8\u5c97\u4f4d\u6570\u636e")
                .addColumn("DEPT_CODE", "\u90e8\u95e8\u7f16\u7801", 16)
                .addColumn("DEPT_ALIAS", "\u90e8\u95e8\u540d\u79f0", 22)
                .addColumn("POSITION_CODE", "\u5c97\u4f4d\u7f16\u7801", 16)
                .addColumn("IS_CHIEF_DEPT", "\u4e3b\u90e8\u95e8", 12)
                .addColumn("IS_MANAGER", "\u8d1f\u8d23\u4eba", 12);
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(
                "select d.dept_code, d.dept_alias, p.position_code, udp.is_chief_dept, udp.is_manager " +
                        "from sys_user_dept_position udp " +
                        "left join sys_dept d on d.id = udp.dept_id " +
                        "left join sys_position p on p.id = udp.position_id " +
                        "where udp.user_id = ? order by d.dept_code, p.position_code", userId);
        section.setRows(copyRows(rows));
        return section;
    }

    private List<Map<String, Object>> copyRows(List<Map<String, Object>> source) {
        List<Map<String, Object>> rows = new ArrayList<Map<String, Object>>();
        if (source != null) {
            for (Map<String, Object> item : source) {
                rows.add(new HashMap<String, Object>(item));
            }
        }
        return rows;
    }

    private String stringValue(Object value) {
        return value == null ? "" : String.valueOf(value);
    }

    private MultiSubTableExcelExporter.Report buildDemoReport() {
        MultiSubTableExcelExporter.Report report = new MultiSubTableExcelExporter.Report()
                .setTitle("\u591a\u5b50\u8868\u5bfc\u51fa\u793a\u4f8b")
                .setSheetName("Report");

        MultiSubTableExcelExporter.MasterBlock firstBlock = new MultiSubTableExcelExporter.MasterBlock()
                .setTitle("\u4e3b\u88681\uff1a\u515a\u59d4\u5de5\u4f5c\u8ba1\u5212\u7533\u62a5")
                .addField("\u4e3b\u8868\u7f16\u53f7", "HT20260629001")
                .addField("\u4e3b\u8868\u540d\u79f0", "\u515a\u59d4\u5de5\u4f5c\u8ba1\u5212\u7533\u62a5")
                .addField("\u6240\u5c5e\u90e8\u95e8", "\u7efc\u5408\u7ba1\u7406\u90e8")
                .addField("\u521b\u5efa\u4eba", "\u5f20\u4e09")
                .addField("\u521b\u5efa\u65e5\u671f", new Date())
                .addField("\u4e3b\u8868\u72b6\u6001", "\u5df2\u63d0\u4ea4");
        firstBlock.addSection(buildTaskSection());
        firstBlock.addSection(buildAttachmentSection());
        firstBlock.addSection(buildApprovalSection());
        report.addBlock(firstBlock);

        MultiSubTableExcelExporter.MasterBlock secondBlock = new MultiSubTableExcelExporter.MasterBlock()
                .setTitle("\u4e3b\u88682\uff1a\u4e13\u9879\u6574\u6539\u8ddf\u8e2a")
                .addField("\u4e3b\u8868\u7f16\u53f7", "HT20260629002")
                .addField("\u4e3b\u8868\u540d\u79f0", "\u4e13\u9879\u6574\u6539\u8ddf\u8e2a")
                .addField("\u6240\u5c5e\u90e8\u95e8", "\u7eaa\u68c0\u529e\u516c\u5ba4")
                .addField("\u521b\u5efa\u4eba", "\u674e\u56db")
                .addField("\u521b\u5efa\u65e5\u671f", new Date())
                .addField("\u4e3b\u8868\u72b6\u6001", "\u5ba1\u6279\u4e2d");
        secondBlock.addSection(buildRectifySection());
        secondBlock.addSection(buildEmptyAttachmentSection());
        secondBlock.addSection(buildReturnApprovalSection());
        report.addBlock(secondBlock);
        return report;
    }

    private MultiSubTableExcelExporter.Section buildTaskSection() {
        MultiSubTableExcelExporter.Section section = new MultiSubTableExcelExporter.Section()
                .setTitle("\u5b50\u8868\u4e00\uff1a\u4efb\u52a1\u660e\u7ec6")
                .addColumn("taskName", "\u4e8b\u9879\u540d\u79f0", 26)
                .addColumn("taskType", "\u4e8b\u9879\u7c7b\u522b", 14)
                .addColumn("ownerName", "\u8d23\u4efb\u4eba", 10)
                .addColumn("planDate", "\u8ba1\u5212\u5b8c\u6210\u65e5\u671f", 16)
                .addColumn("statusName", "\u72b6\u6001", 12);
        section.addRow(row("taskName", "\u7b2c\u4e00\u5b63\u5ea6\u5b66\u4e60\u8ba1\u5212", "taskType", "\u601d\u60f3\u5efa\u8bbe", "ownerName", "\u674e\u660e", "planDate", "2026-03-31", "statusName", "\u5df2\u5b8c\u6210"));
        section.addRow(row("taskName", "\u5e74\u5ea6\u4f1a\u8bae\u5b89\u6392", "taskType", "\u7ec4\u7ec7\u5efa\u8bbe", "ownerName", "\u738b\u82b3", "planDate", "2026-12-15", "statusName", "\u8fdb\u884c\u4e2d"));
        return section;
    }

    private MultiSubTableExcelExporter.Section buildRectifySection() {
        MultiSubTableExcelExporter.Section section = new MultiSubTableExcelExporter.Section()
                .setTitle("\u5b50\u8868\u4e00\uff1a\u6574\u6539\u4efb\u52a1")
                .addColumn("taskName", "\u4e8b\u9879\u540d\u79f0", 26)
                .addColumn("ownerName", "\u8d23\u4efb\u4eba", 10)
                .addColumn("planDate", "\u8ba1\u5212\u5b8c\u6210\u65e5\u671f", 16)
                .addColumn("statusName", "\u72b6\u6001", 12);
        section.addRow(row("taskName", "\u95ee\u9898\u6e05\u5355\u6838\u5bf9", "ownerName", "\u5218\u6d0b", "planDate", "2026-07-05", "statusName", "\u5f85\u5904\u7406"));
        section.addRow(row("taskName", "\u6574\u6539\u7ed3\u679c\u56de\u586b", "ownerName", "\u5218\u6d0b", "planDate", "2026-08-10", "statusName", "\u672a\u5f00\u59cb"));
        return section;
    }

    private MultiSubTableExcelExporter.Section buildAttachmentSection() {
        MultiSubTableExcelExporter.Section section = new MultiSubTableExcelExporter.Section()
                .setTitle("\u5b50\u8868\u4e8c\uff1a\u9644\u4ef6\u6750\u6599")
                .addColumn("fileName", "\u9644\u4ef6\u540d\u79f0", 28)
                .addColumn("uploadUser", "\u4e0a\u4f20\u4eba", 10)
                .addColumn("uploadTime", "\u4e0a\u4f20\u65f6\u95f4", 16)
                .addColumn("fileSize", "\u6587\u4ef6\u5927\u5c0f", 10);
        section.addRow(row("fileName", "\u515a\u59d4\u5de5\u4f5c\u8ba1\u5212.docx", "uploadUser", "\u5f20\u4e09", "uploadTime", "2026-06-29", "fileSize", "1.2MB"));
        section.addRow(row("fileName", "\u4f1a\u8bae\u5b89\u6392\u8868.xlsx", "uploadUser", "\u674e\u660e", "uploadTime", "2026-06-29", "fileSize", "856KB"));
        return section;
    }

    private MultiSubTableExcelExporter.Section buildEmptyAttachmentSection() {
        return new MultiSubTableExcelExporter.Section()
                .setTitle("\u5b50\u8868\u4e8c\uff1a\u9644\u4ef6\u6750\u6599")
                .setEmptyText("\u65e0\u9644\u4ef6\u6570\u636e")
                .addColumn("fileName", "\u9644\u4ef6\u540d\u79f0", 28)
                .addColumn("uploadUser", "\u4e0a\u4f20\u4eba", 10)
                .addColumn("uploadTime", "\u4e0a\u4f20\u65f6\u95f4", 16)
                .addColumn("fileSize", "\u6587\u4ef6\u5927\u5c0f", 10);
    }

    private MultiSubTableExcelExporter.Section buildApprovalSection() {
        MultiSubTableExcelExporter.Section section = new MultiSubTableExcelExporter.Section()
                .setTitle("\u5b50\u8868\u4e09\uff1a\u5ba1\u6279\u8bb0\u5f55")
                .addColumn("approver", "\u5ba1\u6279\u4eba", 10)
                .addColumn("nodeName", "\u5ba1\u6279\u8282\u70b9", 16)
                .addColumn("result", "\u5ba1\u6279\u7ed3\u679c", 12)
                .addColumn("approveTime", "\u5ba1\u6279\u65f6\u95f4", 18)
                .addColumn("comment", "\u610f\u89c1", 24);
        section.addRow(row("approver", "\u8d75\u654f", "nodeName", "\u90e8\u95e8\u590d\u6838", "result", "\u540c\u610f", "approveTime", "2026-06-30 09:20", "comment", "\u6750\u6599\u9f50\u5168"));
        section.addRow(row("approver", "\u5218\u6d0b", "nodeName", "\u5206\u7ba1\u9886\u5bfc\u5ba1\u6279", "result", "\u540c\u610f", "approveTime", "2026-06-30 15:10", "comment", "\u6309\u8ba1\u5212\u63a8\u8fdb"));
        return section;
    }

    private MultiSubTableExcelExporter.Section buildReturnApprovalSection() {
        MultiSubTableExcelExporter.Section section = new MultiSubTableExcelExporter.Section()
                .setTitle("\u5b50\u8868\u4e09\uff1a\u5ba1\u6279\u8bb0\u5f55")
                .addColumn("approver", "\u5ba1\u6279\u4eba", 10)
                .addColumn("nodeName", "\u5ba1\u6279\u8282\u70b9", 16)
                .addColumn("result", "\u5ba1\u6279\u7ed3\u679c", 12)
                .addColumn("approveTime", "\u5ba1\u6279\u65f6\u95f4", 18)
                .addColumn("comment", "\u610f\u89c1", 24);
        section.addRow(row("approver", "\u5468\u5f3a", "nodeName", "\u90e8\u95e8\u521d\u5ba1", "result", "\u9000\u56de", "approveTime", "2026-06-29 11:05", "comment", "\u8bf7\u8865\u5145\u6574\u6539\u65f6\u9650"));
        return section;
    }

    private Map<String, Object> row(Object... values) {
        Map<String, Object> row = new HashMap<String, Object>();
        for (int i = 0; i + 1 < values.length; i += 2) {
            row.put(String.valueOf(values[i]), values[i + 1]);
        }
        return row;
    }
}
