package avicit.platform6.rljcRest;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.apache.commons.codec.binary.Base64;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpPost;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//测试同步用户
public class TestHrRest {
    public static void main(String[] args) {
        Map<String, Object> paramMap = new HashMap<String, Object>();

        Map<String, String> user = new HashMap<String, String>();
        user.put("RYBM", "111111111111");
        user.put("JTYGBM", "1111111111");
        user.put("YJBM", "1036");
        user.put("XM", "测试用户");
        user.put("XB", "女");
        user.put("SFZH", "230182199103263027");
        user.put("CSRQ", "1991-03-26");
        user.put("NL", "33");
        user.put("SZGW", "33");
        user.put("JRBDWSJ", "2024-02-01");
        user.put("RYLB", "服务外包人员");
        user.put("MZ", "");
        user.put("JG", "NULL");
        user.put("CJGZRQ", "2024-02-01");
        user.put("CSD", "NULL");
        user.put("SFLB", "NULL");
        user.put("JTZZ", "");
        user.put("JYLB", "NULL");
        user.put("WHCD", "");
        user.put("ZC", "NULL");
        user.put("ZCDJ", "");
        user.put("JNDJ", "NULL");
        user.put("SFQY", "1");
        user.put("SJH", "");
        user.put("RYID", "b5496cc7-5697-42f8-83ed-3842b83903c8");

        Map<String, Object> map1 = new HashMap<String, Object>();
        map1.put("MDM_RY", user);
        map1.put("CIDP_TASK_UUID", "01abf79b93704ba69bc066a3a21f220c");

        List<Object> list = new ArrayList<Object>();
        list.add(map1);
        paramMap.put("LIST", list);

        JSONObject resultJson = null;
        HttpURLConnection con = null;
        InputStream inputStream = null;
        BufferedReader br = null;

        System.out.println(JSON.toJSONString(paramMap));

        try {
            String rsUrl = "http://localhost:8080/V6R343/api/avicit/pb/member/partyMember/rest/insertList";
            URL url = new URL(rsUrl);
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
            String userName = "avicit2015";
            String passWord = "varQtfAUAmcnRT48pIMMfA@!@!@!@!";
            byte[] authEncBytes = Base64.encodeBase64((userName + ":" + passWord).getBytes());
            con.setRequestProperty("Authorization", "Basic " + authEncBytes);
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
            resultJson = JSON.parseObject(result.toString());
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




    public static String connRest(JSONObject json){
        String result = "";
        String rsUrl = "";
        String rsUser = "";
        String rsPwd = "";


        return result;
    }
}
