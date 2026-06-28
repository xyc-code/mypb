package avicit.platform6.rljcRest;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import org.springframework.web.bind.annotation.*;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.*;

/**
 * PooToOAController
 *
 * @author WX
 * @date 2024-07-13
 */
@RestController
@RequestMapping("/pooToOAController")
public class PooToOAController
{
    /**
     * 获取运营计划-OA待办数据：通过用户id，调用接口，返回待办数据集合
     *
     * @param
     * @return
     */

    public static JSONObject pooToOAList(Map filterparamMap) {
        Map paramMap = new HashMap();
        paramMap.put("page","1");
        paramMap.put("pageSize","200");
        paramMap.put("modelCode","POO_OA_UNDOA");
        paramMap.put("filter",filterparamMap);
        HttpURLConnection con = null;
        InputStream inputStream = null;
        BufferedReader br = null;
        try {
            URL url = new URL("http://20.14.3.218:18080/dam-dataservice/open-api/dam/dataservice/defined/query-data/1CCF0F22F610BB46864AFA07D0EE5C4E/v1");
            con = (HttpURLConnection) url.openConnection();
            //设置请求方式
            con.setRequestMethod("POST");
            //是否使用缓存
            con.setUseCaches(false);
            //是否从HttpURLConnection进行输入输出
            con.setDoInput(true);
            con.setDoOutput(true);
            //请求头
            con.setRequestProperty("Content-Type", "application/json");
            con.setRequestProperty("Authorization", "Basic SFRVU0VS");
            //建立连接
            con.connect();
            //得到请求流的输出流对象，拼接请求参数
            OutputStream os = con.getOutputStream();
            os.write(JSON.toJSONString(paramMap).getBytes());
            os.flush();
            //读取响应
            if (HttpURLConnection.HTTP_OK == con.getResponseCode()) {
                inputStream = con.getInputStream();
            } else {
                inputStream = con.getErrorStream();
            }
            //将响应流转化为字符串
            StringBuilder result = new StringBuilder();
            String line;
            br = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));
            while (null != (line = br.readLine())) {
                result.append(line);
            }
            JSONObject resultJson = JSON.parseObject(result.toString());

            //响应结果  获取运营计划OA信息
            if (HttpURLConnection.HTTP_OK == con.getResponseCode() && 1 == (resultJson.getInteger("status"))) {
             //   logger.info("------------------------运营计划OA信息------------------------:{}", result);
                return  JSON.parseObject(resultJson.getString("data"));

            } else {
                String error = resultJson.getString("message");
               return  JSON.parseObject(error);
            }
        } catch (ProtocolException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (br != null) {
                    br.close();
                }
                if (inputStream != null) {
                    inputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();

            }
        }
        return null;
    }

    /**
     * 后台示例
     * @param args
     */
    public static void main(String[] args) {
        Map filterparamMap = new HashMap();
        String userName="18100481";//待办人code ，注：应用系统编号默认为运营计划，不用传参，只传待办人code参数。
        filterparamMap.put("appReceiveUID",userName);
        JSONObject js=  pooToOAList(filterparamMap);//返回JSONObject数据集合
        System.out.println(js);

//        "POO_OA_UNDO":{
//            "businessData":{
//                        "appID":"应用系统编号",
//                        "taskName":"待办事项名称",
//                        "appTaskID":"应用系统中的待办事项唯一的ID",
//                        "taskType":"所属待办类型",
//                        "appSendUID":"应用系统发送者ID",
//                        "appReceiveUID":"接收者对应的应用系统用户ID",
//                        "sendTime":"待办事项信息启用时间yyyy-mm-dd hh:MM:ss",
//                        "endTime":"待办事项信息结束时间yyyy-mm-dd hh:MM:ss",
//                        "url":"待办事项处理链接",
//                        "taskDesc":"待办事项描述",
//                        "priorityID":"待办事项信息紧急程度，越小越紧急"
//            }
//        }
    }


}
