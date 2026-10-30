package avicit.pb.bpmbatchcomplete.controller;

import avicit.pb.bpmbatchcomplete.service.BpmBatchCompleteService;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/** 通用 BPM task4 批量办理接口。 */
@Controller
@Scope("prototype")
@RequestMapping("/platform/pb/bpm/batchComplete")
public class BpmBatchCompleteController {

    @Autowired
    private BpmBatchCompleteService service;

    @RequestMapping(value = "/operation", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> operation(
            @RequestParam(value = "ids", required = false) String ids,
            HttpServletRequest request) {
        return service.completeTask4(ids, request);
    }
}
