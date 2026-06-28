//package avicit.common;
//
//import java.util.List;
//
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import avicit.platform6.bpm.pvm.internal.history.model.HistoryTaskImpl;
//import avicit.platform6.bpm.pvm.internal.util.TodoInterceptor;
//import avicit.platform6.commons.utils.ComUtil;
//import avicit.platform6.core.spring.SpringFactory;
//import avicit.platform6.todoTransaction.service.BpmTodoListService;
//import avicit.platform6.todoTransaction.util.BpmTodoUtil;
//import avicit.platform6.todoTransaction.util.IntegrationInterface;
//
//public class TodoInterceptorImpl implements TodoInterceptor {
//	private static final Logger LOGGER = LoggerFactory
//			.getLogger(TodoInterceptorImpl.class);
//	 BpmTodoListService bpmTodoListService = SpringFactory.getBean(BpmTodoListService.class);
//	    IntegrationInterface integrationInterface = SpringFactory.getBean(IntegrationInterface.class);
//
//	    @Override
//	    public boolean insertTodo(HistoryTaskImpl historyTask) throws RuntimeException {
//	    	LOGGER.info("开始新增待办："+historyTask.getId());
//	    	String id= ComUtil.getId();
//	        String flag = null;
//	        //向代办拦截推送前表中插入数据
//	        bpmTodoListService.insertBpmTodoListOnBefore(historyTask,id,"insert");
//
//	        //执行第三方系统数据推送，调用IntegrationService，当返回1时表示推送成功，返回0时表示推送失败
//	        if(null != integrationInterface){
//	            flag = integrationInterface.insertOtherSystemData(historyTask);
//	        }
//
//	        //flag表示推送完成后标识，1表示推送成功，只有推送成功后才往后表中插入数据
//	        if("1".equals(flag)){
//	            //数据推送完成后向待办拦截推送后表中插入数据（使用多线程，异步不同事物进行数据插入）
//	            BpmTodoUtil bpmTodoUtil = new BpmTodoUtil(historyTask,id,"insert");
//	            bpmTodoUtil.start();
//	        }
//
//	        LOGGER.info("插入待办成功：{}",flag);
//	        return false;
//	    }
//
//	    @Override
//	    public boolean updateTodo(HistoryTaskImpl historyTask) {
//	    	LOGGER.info("开始完成待办："+historyTask.getId());
//	        String id= ComUtil.getId();
//	        String flag = null;
//	        //向代办拦截推送前表中插入数据
//	        bpmTodoListService.insertBpmTodoListOnBefore(historyTask,id,"update");
//
//	        //执行第三方系统数据修改，调用调用IntegrationService,当返回1时表示修改成功，返回0时表示修改失败
//	        if(null != integrationInterface){
//	            flag = integrationInterface.updateOtherSystemData(historyTask);
//	        }
//
//	        //flag表示推送完成后标识，1表示推送成功，只有推送成功后才往后表中插入数据
//	        if("1".equals(flag)){
//	            //数据推送完成后向待办拦截推送后表中插入数据（使用多线程，异步不同事物进行数据插入）
//	            BpmTodoUtil bpmTodoUtil = new BpmTodoUtil(historyTask,id,"update");
//	            bpmTodoUtil.start();
//	        }
//
//	        return false;
//	    }
//
//	    @Override
//	    public boolean deleteTodo(List<HistoryTaskImpl> list) {
//	    	String flag = null;
//	    	 //执行第三方系统数据推送，调用IntegrationService，当返回1时表示推送成功，返回0时表示推送失败
//	        if(null != integrationInterface){
//
//	        	for(HistoryTaskImpl historyTask: list){
//	        		String id= historyTask.getId();
//	        		LOGGER.info("开始拿回待办："+id);
//	        		 flag = integrationInterface.deleteOtherSystemData(id);
//	        		 if("1".equals(flag)){
//	     	            //数据推送完成后向待办拦截推送后表中插入数据（使用多线程，异步不同事物进行数据插入）
//	     	            BpmTodoUtil bpmTodoUtil = new BpmTodoUtil(historyTask,id,"delete");
//	     	            bpmTodoUtil.start();
//	     	        }
//	        	}
//
//	        }
//
//	        return false;
//	    }
//}
