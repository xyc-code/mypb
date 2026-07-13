package avicit.pb.dwworkplan3.controller;

import avicit.pb.dwworkplan3.service.DwWorkPlan3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.sql.Blob;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@Scope("prototype")
@RequestMapping("avicit/pb/dwworkplan3/dwWorkPlan3Controller")
public class DwWorkPlan3Controller {
    @Autowired
    private DwWorkPlan3Service dwWorkPlanService;

    @RequestMapping(value = "toIndex")
    public ModelAndView toIndex() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("avicit/pb/dwworkplan3/index");
        return mav;
    }

    @RequestMapping(value = "api/currentUser", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> currentUser(HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.currentUser(request);
            }
        });
    }

    @RequestMapping(value = "api/person/list", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> listPerson(final HttpServletRequest request) {
        return rows(dwWorkPlanService.listPersonTree(request));
    }

    @RequestMapping(value = "api/person/save", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> savePerson(final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.savePerson(params(request), request);
            }
        });
    }

    @RequestMapping(value = "api/person/delete", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> deletePerson(@RequestParam(value = "id", required = false) final String id, final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.disablePerson(id, request);
            }
        });
    }

    @RequestMapping(value = "api/person/receivers", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> receivers(final HttpServletRequest request) {
        return rows(dwWorkPlanService.listReceivers(request));
    }

    @RequestMapping(value = "api/import/template", method = RequestMethod.GET)
    public void downloadImportTemplate(final HttpServletRequest request, final HttpServletResponse response) throws Exception {
        dwWorkPlanService.downloadImportTemplate(response, request);
    }

    @RequestMapping(value = "api/import/preview", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> previewImport(@RequestParam("file") final MultipartFile file,
                                             @RequestParam(value = "year", required = false) final String year,
                                             @RequestParam(value = "quarter", required = false) final String quarter,
                                             final HttpServletRequest request) {
        return call(new Action() {
            public Object run() throws Exception {
                return dwWorkPlanService.previewImport(file, year, quarter, request);
            }
        });
    }

    @RequestMapping(value = "api/import/saveDrafts", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> saveImportDrafts(@RequestParam(value = "rows", required = false) final String rows,
                                                @RequestParam(value = "year", required = false) final String year,
                                                @RequestParam(value = "quarter", required = false) final String quarter,
                                                final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.saveImportDrafts(rows, year, quarter, request);
            }
        });
    }

    @RequestMapping(value = "api/import/directDispatch", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> directDispatchImport(@RequestParam(value = "rows", required = false) final String rows,
                                                    @RequestParam(value = "year", required = false) final String year,
                                                    @RequestParam(value = "quarter", required = false) final String quarter,
                                                    final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.directDispatchImport(rows, year, quarter, request);
            }
        });
    }

    @RequestMapping(value = "api/batch/list", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> listBatch(final HttpServletRequest request) {
        return rows(dwWorkPlanService.listBatches(request));
    }

    @RequestMapping(value = "api/batch/create", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> createBatch(@RequestParam(value = "year", required = false) final String year,
                                           @RequestParam(value = "quarter", required = false) final String quarter,
                                           final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.createBatch(year, quarter, request);
            }
        });
    }

    @RequestMapping(value = "api/batch/delete", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> deleteBatch(@RequestParam(value = "id", required = false) final String id,
                                           final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.deleteBatch(id, request);
            }
        });
    }

    @RequestMapping(value = "api/task/list", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> listTask(@RequestParam(value = "batchId", required = false) final String batchId,
                                        @RequestParam(value = "year", required = false) final String year,
                                        @RequestParam(value = "quarter", required = false) final String quarter,
                                        @RequestParam(value = "status", required = false) final String status,
                                        final HttpServletRequest request) {
        return rows(dwWorkPlanService.listTasks(request, batchId, year, quarter, status));
    }

    @RequestMapping(value = "api/task/saveRoot", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> saveRootTask(final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.saveRootTask(params(request), request);
            }
        });
    }

    @RequestMapping(value = "api/task/directDispatchRoot", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> directDispatchRoot(final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.directDispatchRoot(params(request), request);
            }
        });
    }

    @RequestMapping(value = "api/task/batchDirectDispatch", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> batchDirectDispatch(@RequestParam(value = "ids", required = false) final String ids,
                                                   final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.batchDirectDispatch(ids, request);
            }
        });
    }

    @RequestMapping(value = "api/task/dispatch", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> dispatch(final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.dispatchChild(params(request), request);
            }
        });
    }

    @RequestMapping(value = "api/task/accept", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> accept(@RequestParam(value = "id", required = false) final String id, final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.acceptTask(id, request);
            }
        });
    }

    @RequestMapping(value = "api/task/takeBack", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> takeBack(@RequestParam(value = "id", required = false) final String id, final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.takeBackTask(id, request);
            }
        });
    }

    @RequestMapping(value = "api/task/complete", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> completeTask(final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.completeSelfTask(params(request), request);
            }
        });
    }

    @RequestMapping(value = "api/task/delete", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> deleteTask(@RequestParam(value = "id", required = false) final String id, final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.deleteTask(id, request);
            }
        });
    }

    @RequestMapping(value = "api/grassroot/businessTree", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> grassrootBusinessTree(final HttpServletRequest request) {
        return rows(dwWorkPlanService.listGrassrootBusinessTree(request));
    }

    @RequestMapping(value = "api/grassroot/partyOrgTree", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> grassrootPartyOrgTree(final HttpServletRequest request) {
        return rows(dwWorkPlanService.listGrassrootPartyOrgTree(request));
    }

    @RequestMapping(value = "api/grassroot/list", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> grassrootList(@RequestParam(value = "taskId", required = false) final String taskId,
                                             final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.listGrassrootDispatch(taskId, request);
            }
        });
    }

    @RequestMapping(value = "api/grassroot/save", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> grassrootSave(final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.saveGrassrootDispatch(params(request), request);
            }
        });
    }

    @RequestMapping(value = "api/grassroot/delete", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> grassrootDelete(@RequestParam(value = "id", required = false) final String id,
                                               final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.deleteGrassrootDispatch(id, request);
            }
        });
    }

    @RequestMapping(value = "api/grassroot/dispatch", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> grassrootDispatch(@RequestParam(value = "taskId", required = false) final String taskId,
                                                 @RequestParam(value = "ids", required = false) final String ids,
                                                 final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.dispatchGrassroot(taskId, ids, request);
            }
        });
    }

    @RequestMapping(value = "api/feedback/list", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> listFeedback(@RequestParam(value = "taskId", required = false) final String taskId,
                                            final HttpServletRequest request) {
        return rows(dwWorkPlanService.listFeedback(taskId, request));
    }

    @RequestMapping(value = "api/feedback/submit", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> submitFeedback(final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.submitFeedback(params(request), request);
            }
        });
    }

    @RequestMapping(value = "api/feedback/prepare", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> prepareFeedback(final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.prepareFeedback(request);
            }
        });
    }

    @RequestMapping(value = "api/feedback/targets", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> feedbackTargets(@RequestParam(value = "taskId", required = false) final String taskId,
                                               final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.listFeedbackTargets(taskId, request);
            }
        });
    }

    @RequestMapping(value = "api/feedback/confirm", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> confirmFeedback(@RequestParam(value = "feedbackId", required = false) final String feedbackId,
                                               final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.confirmFeedback(feedbackId, request);
            }
        });
    }

    @RequestMapping(value = "api/feedback/return", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> returnFeedback(@RequestParam(value = "feedbackId", required = false) final String feedbackId,
                                              @RequestParam(value = "reason", required = false) final String reason,
                                              final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.returnFeedback(feedbackId, reason, request);
            }
        });
    }

    @RequestMapping(value = "api/stats", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> stats(@RequestParam(value = "batchId", required = false) final String batchId,
                                     final HttpServletRequest request) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.stats(request, batchId);
            }
        });
    }

    @RequestMapping(value = "api/attachment/upload", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> uploadAttachment(@RequestParam("file") final MultipartFile file,
                                                @RequestParam(value = "businessType", required = false) final String businessType,
                                                final HttpServletRequest request) {
        return call(new Action() {
            public Object run() throws Exception {
                return dwWorkPlanService.uploadAttachment(file, businessType, request);
            }
        });
    }

    @RequestMapping(value = "api/attachment/list", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> listAttachments(@RequestParam(value = "businessId", required = false) final String businessId,
                                               @RequestParam(value = "elementId", required = false) final String elementId,
                                               @RequestParam(value = "legacyAttachmentId", required = false) final String legacyAttachmentId) {
        return call(new Action() {
            public Object run() {
                return dwWorkPlanService.listAttachmentLinks(businessId, elementId, legacyAttachmentId);
            }
        });
    }

    @RequestMapping(value = "api/attachment/download")
    public void downloadAttachment(@RequestParam(value = "id", required = false) final String id, HttpServletResponse response) throws Exception {
        Map<String, Object> attachment = dwWorkPlanService.getAttachment(id);
        String fileName = String.valueOf(attachment.get("FILE_NAME"));
        String contentType = String.valueOf(attachment.get("CONTENT_TYPE"));
        Object content = attachment.get("FILE_CONTENT");
        byte[] bytes = readBlob(content);
        response.setContentType(contentType == null || "null".equals(contentType) ? "application/octet-stream" : contentType);
        response.setHeader("Content-Disposition", "attachment; filename=\"" + URLEncoder.encode(fileName, "UTF-8") + "\"");
        response.setContentLength(bytes.length);
        OutputStream out = response.getOutputStream();
        out.write(bytes);
        out.flush();
    }

    private byte[] readBlob(Object content) throws Exception {
        if (content instanceof byte[]) {
            return (byte[]) content;
        }
        if (content instanceof Blob) {
            Blob blob = (Blob) content;
            return blob.getBytes(1, (int) blob.length());
        }
        return new byte[0];
    }

    private Map<String, Object> rows(List<Map<String, Object>> rows) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("flag", "success");
        map.put("rows", rows);
        return map;
    }

    private Map<String, Object> call(Action action) {
        try {
            Object value = action.run();
            if (value instanceof Map) {
                return (Map<String, Object>) value;
            }
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("flag", "success");
            map.put("data", value);
            return map;
        } catch (Exception ex) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("flag", "failure");
            map.put("errorMsg", ex.getMessage());
            return map;
        }
    }

    private Map<String, String> params(HttpServletRequest request) {
        Map<String, String> map = new HashMap<String, String>();
        Map<String, String[]> raw = request.getParameterMap();
        for (Map.Entry<String, String[]> entry : raw.entrySet()) {
            String[] value = entry.getValue();
            map.put(entry.getKey(), value == null || value.length == 0 ? "" : value[0]);
        }
        return map;
    }

    private interface Action {
        Object run() throws Exception;
    }
}


