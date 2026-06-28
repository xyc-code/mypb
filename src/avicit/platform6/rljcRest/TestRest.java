package avicit.platform6.rljcRest;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TestRest {

    public static void main(String[] args) {
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
            Map<String, Object> paramMap = new HashMap<String, Object>();
            paramMap.put("page", 600);
            paramMap.put("pageSize", 1);
            paramMap.put("modelCode", "ODS_HR_USER_ACHIEVEMENTS");

            //可以不需要
            Map<String, String> filter = new HashMap<String, String>();
            /*filter.put("ACHIEVEMENTS_ID", "ACHIEVEMENTS_ID");
            filter.put("USER_ID", "USER_ID");
            filter.put("ACHIEVEMENTS_PERIOD", "ACHIEVEMENTS_PERIOD");
            filter.put("ACHIEVEMENTS_LEVEL", "ACHIEVEMENTS_LEVEL");
            filter.put("ACHIEVEMENTS_USE", "ACHIEVEMENTS_USE");
            filter.put("REMARKS", "REMARKS");
            filter.put("CREATE_TIME", "2024-05-20 12:12:12");
            filter.put("CREATE_USER_ID", "CREATE_USER_ID");
            filter.put("MODIFY_TIME", "yyyy-MM-dd HH:mm:ss");
            filter.put("MODIFY_USER_ID", "MODIFY_USER_ID");
            filter.put("DELETE_FLAG", "DELETE_FLAG");
            filter.put("SORT_INDEX", "SORT_INDEX");*/
            filter.put("USER_ID", "1029GF100000000DOCXH");
            //paramMap.put("filter", filter);

            List<String> queryField = new ArrayList<String>();
            queryField.add("ACHIEVEMENTS_ID");
            queryField.add("USER_ID");
            queryField.add("ACHIEVEMENTS_PERIOD");
            queryField.add("ACHIEVEMENTS_LEVEL");
            queryField.add("ACHIEVEMENTS_USE");
            queryField.add("REMARKS");
            queryField.add("CREATE_TIME");
            queryField.add("CREATE_USER_ID");
            queryField.add("MODIFY_TIME");
            queryField.add("MODIFY_USER_ID");
            queryField.add("DELETE_FLAG");
            queryField.add("SORT_INDEX");
            paramMap.put("queryField", queryField);

            paramMap.put("vague", false);

            //System.out.println(JSON.toJSONString(paramMap));
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
            System.out.println(resultJson);
            /*JSONArray jsonArray = resultJson.getJSONArray("data");
            String total = jsonArray.getJSONObject(0).getString("total");
            String pageSize = jsonArray.getJSONObject(0).getString("pageSize");
            String page = jsonArray.getJSONObject(0).getString("page");
            String items = jsonArray.getJSONObject(0).getJSONObject("items").toJSONString();*/
            
            
            
            System.out.println(resultJson);
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

            }
        }
    }
}
