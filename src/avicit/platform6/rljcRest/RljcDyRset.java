package avicit.platform6.rljcRest;

import avicit.platform6.commons.utils.ComUtil;
import avicit.platform6.core.quartz.IBusinessJob;
import avicit.platform6.rljcRest.dto.DynAchievementsDTO;
import avicit.platform6.rljcRest.service.DynAchievementsService;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.*;

@RestController
@RequestMapping("/api/avicit/pb/member/partyMember/rest1")
public class RljcDyRset implements IBusinessJob {

    @Autowired
    private  RestTemplate restTemplate;

    private static final Logger LOGGER = LoggerFactory.getLogger(RljcRset.class);

    public void task(Map<String, Object> map) throws Exception {

    }

    @Autowired
    private DynAchievementsService dynAchievementsService;

    @PostMapping("/insertList")
    public void insertList(HttpServletRequest request){
        int page = 1;
            JSONObject resultJson = JIE(page);

            String StringResultJson1 = resultJson.getString("data");
            JSONObject resultJson2 = JSON.parseObject(StringResultJson1);
            Integer StringResultJson2 = resultJson2.getInteger("total");
            Integerutils integerutils = new Integerutils();
            double dou = StringResultJson2.doubleValue() / 200;
            Integer StringResultJson3 = integerutils.doubleToCeilInt(dou);
            for (int i = 0; i < 1; i++) {
                JSONObject json = JIE(i);
                JSONArray businessData = json.getJSONObject("data").getJSONArray("items");
                for (int j = 0; j < 1; j++) {
                    JSONObject jsonObj = businessData.getJSONObject(i).getJSONObject("ODS_HR_USER_ACHIEVEMENTS").getJSONObject("businessData");
                    String id = ComUtil.getId();
                    String a = jsonObj.getString("ACHIEVEMENTS_ID");
                    String b = "1";
                    DynAchievementsDTO dynAchievementsDTO = new DynAchievementsDTO();
                    dynAchievementsDTO.setId(id);
                    dynAchievementsDTO.setUserId(jsonObj.getString("USER_ID"));
                    dynAchievementsDTO.setAchievementsPeriod(jsonObj.getString("ACHIEVEMENTS_PERIOD"));
                    dynAchievementsDTO.setAchievementsUse(jsonObj.getString("ACHIEVEMENTS_USE"));
                    dynAchievementsDTO.setRemarks(jsonObj.getString("REMARKS"));
                    dynAchievementsDTO.setDeleteFlag(jsonObj.getString("DELETE_FLAG"));
                    dynAchievementsDTO.setSortIndex(jsonObj.getString("SORT_INDEX"));
                    try {
                        dynAchievementsService.insertDynAchievements(dynAchievementsDTO);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
                System.out.println(businessData);
            }

    }

    private JSONObject JIE(Integer page) {
        JSONObject resultJson = null;
        HttpURLConnection con = null;
        InputStream inputStream = null;
        BufferedReader br = null;
        try {
            URL url = new URL("http://20.14.3.218:18080/dam-dataservice/open-api/dam/dataservice/defined/query-data/89F07633C57D7B42B5A9F0D022C85D54/v1");
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
            Map<String, String> paramMap = new HashMap<>();
            paramMap.put("modelCode", "ODS_HR_USER_ACHIEVEMENTS");
            paramMap.put("pageSize", "200");
            paramMap.put("page", String.valueOf(page));
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
             resultJson = JSON.parseObject(result.toString());
        }catch (Exception e){

        }finally {
            try {
                if (br != null) {
                    br.close();
                }
                if (inputStream != null) {
                    inputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
                LOGGER.error("调用查询接口失败:{}", e);

            }
        }
        return resultJson;
    }

    public class Integerutils{
        public int doubleToCeilInt(double num){
            int intNum = (int) num;
            if (num > intNum) {
                intNum++;
            }
            return intNum;
        }
    }


    public static void main(String[] args) {
        String str="{\"apiVersion\":\"1.0\",\"code\":200,\"data\":[ {\"ACHIEVEMENTS_ID\":\"95c51701-3d25-43cf-b817-81013123c921\",\"USER_ID\":\"cbe856b7-2482-4237-8d4f-28c44f35bf01\",\"ACHIEVEMENTS_PERIOD\":\"1\",\"ACHIEVEMENTS_LEVEL\":\"A\",\"ACHIEVEMENTS_USE\":\"测试\",\"REMARKS\":null,\"CREATE_TIME\":\"2024-01-12 08:51:40.0\",\"CREATE_USER_ID\":\"1047\",\"MODIFY_TIME\":null,\"MODIFY_USER_ID\":null,\"DELETE_FLAG\":\"0\",\"SORT_INDEX\":\"0\"}],\"totalCount\":61745,\"uuid\":\"25fabfc4-83b1-4e28-a8c1-0a1601583590\"}";
        JSONObject obj=JSONObject.parseObject(str);
        Object code=obj.get("code");
        Object data=obj.get("data");
        JSONArray objdata=JSONObject.parseArray(data.toString());

        for(int i=0;i<objdata.size();i++){
            System.out.println(((JSONObject)objdata.get(i)).get("ACHIEVEMENTS_ID"));
        }
        System.out.println(code);

    }





}