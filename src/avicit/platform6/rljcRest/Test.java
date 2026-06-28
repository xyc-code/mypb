package avicit.platform6.rljcRest;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.google.gson.Gson;

public class Test {
	
	public static void main(String[] args) {
		JSONObject resultJson = null;
		StringBuilder result = new StringBuilder();
		result.append("{\"data\":{\"total\":66403,\"pageSize\":30,\"page\":600,\"items\":[{\"ODS_HR_USER_ACHIEVEMENTS\":{\"businessData\":{");
		result.append("\"CREATE_USER_ID\":\"1\",\"ACHIEVEMENTS_ID\":\"1029GF1000000000ORRU\",\"USER_ID\":\"1029GF100000000005LH\",");
		result.append("\"ACHIEVEMENTS_PERIOD\":\"2014年全年\",\"SORT_INDEX\":\"9\"}}},{\"ODS_HR_USER_ACHIEVEMENTS\":{\"businessData\":{");
		result.append("\"CREATE_USER_ID\":\"1\",\"ACHIEVEMENTS_ID\":\"1029GF1000000000ORRV\",\"USER_ID\":\"1029GF100000000005LI\",");
		result.append("\"ACHIEVEMENTS_PERIOD\":\"2014年全年\",\"MODIFY_USER_ID\":\"1\",\"ACHIEVEMENTS_LEVEL\":\"B\",\"MODIFY_TIME\":\"2023-01-03 16:05:55\",");
		result.append("\"SORT_INDEX\":\"9\"}}}]},\"message\":\"请求成功\",\"status\":1}");
		resultJson = JSON.parseObject(result.toString());
		System.out.println(resultJson);
		JSONObject data = resultJson.getJSONObject("data");
		System.out.println("data:" + data);
		int total = data.getInteger("total");
		System.out.println("total:" + total);
		int pageSize = data.getInteger("pageSize");
		System.out.println("pageSize:" + pageSize);
		System.out.println("allPages:" + total/pageSize);
		int page = data.getInteger("page");
		System.out.println("page:" + page);
		JSONArray jsonArray = data.getJSONArray("items");
		System.out.println(jsonArray.size());
		JSONObject businessData = jsonArray.getJSONObject(0).getJSONObject("ODS_HR_USER_ACHIEVEMENTS").getJSONObject("businessData");
		System.out.println("businessData:" + businessData);
		
		String s1 = "202";
		String s2 = "2023";
		if(s1.contains(s2)){
			System.out.println("11111111111111111111111111111111");
		}
		
	}
}


