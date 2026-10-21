import avicit.pb.yzbyts.summary.service.*;
import avicit.pb.yzbyts.summary.controller.YzbytsSummaryController;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.sysuser.dto.SysUser;
import org.apache.ibatis.datasource.unpooled.UnpooledDataSource;
import org.springframework.context.annotation.*;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.apache.poi.xssf.usermodel.*;
import javax.servlet.http.*;
import javax.sql.DataSource;
import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.lang.reflect.Proxy;
import java.nio.file.*;
import java.security.MessageDigest;
import java.sql.*;
import java.time.LocalDateTime;
import java.util.*;
import java.util.List;
import java.util.concurrent.*;

/** Local DM integration tests. Existing rows are fingerprinted; test mutations are rolled back or precisely removed. */
public class YzbytsSummaryTest {
    static final String PREFIX="YZSUM_REBUILD_IT_", NAME="总结重做集测";
    static JdbcTemplate jdbc;
    static TestService service;
    static YzbytsSummaryController controller;
    static TransactionTemplate transaction;
    static int checks;
    static LocalDateTime clock=LocalDateTime.of(2026,10,21,12,0);
    public static class TestService extends YzbytsSummaryService { @Override protected LocalDateTime now(){return clock;} }
    @Configuration @EnableTransactionManagement(proxyTargetClass=true)
    public static class Config {
        @Bean public DataSource dataSource(){return new UnpooledDataSource("dm.jdbc.driver.DmDriver","jdbc:dm://127.0.0.1:5236","DJ",System.getenv("PB_TEST_DB_PASSWORD"));}
        @Bean(name="transactionManagerMybatis") public DataSourceTransactionManager manager(){return new DataSourceTransactionManager(dataSource());}
        @Bean public JdbcTemplate jdbcTemplate(){return new JdbcTemplate(dataSource());}
        @Bean public TestService summary(){return new TestService();}
        @Bean public YzbytsSummaryController summaryController(){return new YzbytsSummaryController();}
    }
    public static void main(String[] args) throws Exception {
        String mode=args.length==0?"test":args[0];
        try(AnnotationConfigApplicationContext context=new AnnotationConfigApplicationContext(Config.class)){
            jdbc=context.getBean(JdbcTemplate.class); service=context.getBean(TestService.class);
            controller=context.getBean(YzbytsSummaryController.class);
            transaction=new TransactionTemplate(context.getBean(DataSourceTransactionManager.class));
            if("original-baseline".equals(mode)){System.out.println(fingerprint(true)); return;}
            if("baseline".equals(mode)){System.out.println(fingerprint()); return;}
            if("ui-seed".equals(mode)) { check(count("SELECT COUNT(*) FROM PARTY_ORGANIZATION WHERE ID=?",PREFIX+"UI")==0,"UI fixture must be absent"); fixture("UI",NAME+"浏览器支部"); Files.createDirectories(Paths.get("output/yzbyts-summary")); Files.write(Paths.get("output/yzbyts-summary/测试横图.png"),photo(640,240,"png")); Files.write(Paths.get("output/yzbyts-summary/测试竖图.jpg"),photo(200,600,"jpg")); return; }
            if("ui-clean".equals(mode)) { clean(); return; }
            String before=fingerprint();
            check(org.springframework.aop.support.AopUtils.isAopProxy(service),"real Spring transaction proxy");
            rollback(()->latestYearSwitch());
            rollback(()->requiredFields());
            rollback(()->flows());
            rollback(()->exportMany());
            rollback(()->boundaries());
            concurrent();
            check(before.equals(fingerprint()),"all pre-existing summary, photo and declaration rows preserved");
            System.out.println("PASS "+checks+" assertions; DM / Spring transactions / pictures / export / concurrency / preservation");
        }
    }
    interface Action {void run() throws Exception;}
    static void rollback(Action action) {
        transaction.execute(status->{try{action.run();}catch(Exception e){throw new RuntimeException(e);}finally{status.setRollbackOnly();} return null;});
    }
    static void fixture(String key,String name){
        String id=PREFIX+key;
        jdbc.update("INSERT INTO PARTY_ORGANIZATION (ID,PARTY_NAME,ORG_IDENTITY,CREATED_BY,CREATION_DATE) VALUES (?,?,?, ?,SYSDATE)",id,name,PREFIX,PREFIX);
        jdbc.update("INSERT INTO DYN_D_YZBYTS (ID,PARTY_ID,NF,D_DZZMC,D_HDZT,D_HDRWJJ,ORG_IDENTITY,CREATED_BY,CREATION_DATE,LAST_UPDATED_BY,LAST_UPDATE_DATE,LAST_UPDATE_IP,VERSION,CREATED_DEPT) VALUES (?,?, '2026',?,?,?, ?,?,SYSDATE,?,SYSDATE,'127.0.0.1',1,?)",id+"_D",id,name,"原申报主题","原申报背景",PREFIX,PREFIX,PREFIX,PREFIX);
    }
    static Map<String,String> form(String key){
        Map<String,String> p=new HashMap<>(); p.put("year","2026");p.put("partyId",PREFIX+key);
        p.put("activityTheme","年度特色成果");p.put("activityGoal","提升组织凝聚力");p.put("activityBackground","围绕一线需求开展活动");
        p.put("workThought","立足岗位服务群众");p.put("practice","开展志愿服务。\n组织党员交流，推动问题解决。");p.put("achievement","完成三项服务项目");return p;
    }
    static HttpServletRequest request(int failAt){
        Map<String,Object> values=new HashMap<>(); SysUser user=new SysUser();user.setId(PREFIX);
        values.put(SessionHelper.SESSION_CURRENT_USER,user);values.put("CURRENT_ORG_IDENTITY",PREFIX);
        HttpSession session=(HttpSession)Proxy.newProxyInstance(HttpSession.class.getClassLoader(),new Class[]{HttpSession.class},(p,m,a)->"getAttribute".equals(m.getName())?values.get(a[0]):null);
        int[] calls={0};
        return (HttpServletRequest)Proxy.newProxyInstance(HttpServletRequest.class.getClassLoader(),new Class[]{HttpServletRequest.class},(p,m,a)->{
            if("getSession".equals(m.getName())){if(++calls[0]==failAt)throw new IllegalStateException("injected submit failure");return session;}
            return "getRemoteAddr".equals(m.getName())?"127.0.0.1":null;
        });
    }
    static byte[] photo(int w,int h,String format) throws Exception {
        BufferedImage image=new BufferedImage(w,h,BufferedImage.TYPE_INT_RGB); Graphics2D g=image.createGraphics();
        g.setColor(new Color(159,52,60));g.fillRect(0,0,w,h);g.setColor(Color.WHITE);g.setFont(new Font("Dialog",Font.BOLD,24));g.drawString("PB SUMMARY TEST",15,50);g.dispose();
        ByteArrayOutputStream out=new ByteArrayOutputStream();ImageIO.write(image,format,out);return out.toByteArray();
    }
    static MultipartFile file(String name,byte[] bytes){return new MultipartFile(){
        public String getName(){return "file";} public String getOriginalFilename(){return name;}
        public String getContentType(){return name.endsWith("png")?"image/png":"image/jpeg";}
        public boolean isEmpty(){return bytes.length==0;} public long getSize(){return bytes.length;} public byte[] getBytes(){return bytes;}
        public InputStream getInputStream(){return new ByteArrayInputStream(bytes);} public void transferTo(File dest)throws IOException{Files.write(dest.toPath(),bytes);}
    };}
    static void latestYearSwitch()throws Exception{
        fixture("YEAR_NEW",NAME+"新年度");
        jdbc.update("UPDATE DYN_D_YZBYTS SET NF='2027',LAST_UPDATE_DATE=TO_DATE('2020-01-01','YYYY-MM-DD') WHERE ID=?",PREFIX+"YEAR_NEW_D");
        check(Integer.valueOf(2027).equals(service.config().get("year")),"latest declaration year replaces fixed 2026 even with an older modification time");
        fixture("YEAR_INVALID",NAME+"无效年度");
        jdbc.update("UPDATE DYN_D_YZBYTS SET NF='无效' WHERE ID=?",PREFIX+"YEAR_INVALID_D");
        check(Integer.valueOf(2027).equals(service.config().get("year")),"invalid year ignored");
        fixture("YEAR_NEXT",NAME+"下一年度");
        jdbc.update("UPDATE DYN_D_YZBYTS SET NF=' 2028 ' WHERE ID=?",PREFIX+"YEAR_NEXT_D");
        check(Integer.valueOf(2028).equals(service.config().get("year")),"next refresh picks new maximum year and trims spaces");
        check(Integer.valueOf(2028).equals(((Map)controller.config(null).get("data")).get("year")),"config endpoint defaults to latest year");
        check(Integer.valueOf(2027).equals(((Map)controller.config("2027").get("data")).get("year")),"edit config keeps explicit form year");
        check(((Number)((Map)controller.list(null,NAME,"","1","20").get("data")).get("records")).intValue()==1,"list endpoint defaults to latest year");
        check("success".equals(controller.get(null,PREFIX+"YEAR_NEXT").get("flag")),"get endpoint defaults to latest year");
        check(((Number)service.list(2028,NAME,"",1,20).get("records")).intValue()==1,"list contains only selected year declarations");
        check("原申报主题".equals(service.get(2028,PREFIX+"YEAR_NEXT").get("ACTIVITY_THEME")),"new year declaration prefills summary");
        Map<String,String> p=form("YEAR_NEXT");p.put("year","2028");
        Map<String,Object> saved=service.submit(p,request(0));
        check("SUBMITTED".equals(saved.get("STATUS")),"new year can save and submit");
        check(count("SELECT COUNT(*) FROM DYN_YZBYTS_SUMMARY WHERE PARTY_ID=? AND SUMMARY_YEAR='2028'",PREFIX+"YEAR_NEXT")==1,"new summary stored under declaration year");
        XSSFWorkbook book=new XSSFWorkbook(new ByteArrayInputStream(service.export(2028,NAME,"")));
        try{check("2028".equals(book.getSheetAt(0).getRow(1).getCell(0).getStringCellValue()),"export uses selected declaration year");}finally{book.getPackage().close();}
        Map<String,String> responseHeaders=new HashMap<>();ByteArrayOutputStream exported=new ByteArrayOutputStream();
        javax.servlet.ServletOutputStream stream=new javax.servlet.ServletOutputStream(){public void write(int b){exported.write(b);}};
        HttpServletResponse response=(HttpServletResponse)Proxy.newProxyInstance(HttpServletResponse.class.getClassLoader(),new Class[]{HttpServletResponse.class},(proxy,method,args)->{
            if("setHeader".equals(method.getName()))responseHeaders.put((String)args[0],(String)args[1]);
            if("getOutputStream".equals(method.getName()))return stream;
            return null;
        });
        controller.export(null,NAME,"",response);
        check(responseHeaders.get("Content-Disposition").contains("2028"),"export endpoint defaults filename to latest year");
        XSSFWorkbook endpointBook=new XSSFWorkbook(new ByteArrayInputStream(exported.toByteArray()));
        try{check("2028".equals(endpointBook.getSheetAt(0).getRow(1).getCell(0).getStringCellValue()),"export endpoint uses same year in workbook and filename");}finally{endpointBook.getPackage().close();}
        check("2028-11-10 23:59:59".equals(service.config().get("deadline")),"deadline follows latest declaration year");
        check("五".equals(service.config().get("deadlineWeekday")),"deadline weekday follows new year");
        check("2027-11-10 23:59:59".equals(service.config(2027).get("deadline")),"an already opened previous-year form retains its deadline");
        Map<String,String> oldForm=form("YEAR_NEW");oldForm.put("year","2027");
        String oldId=(String)service.save(oldForm,request(0)).get("SUMMARY_ID");
        byte[] image=photo(100,80,"png");service.upload(oldId,file("旧年度.png",image),request(0));
        String oldFile=(String)((Map)((List)service.get(2027,PREFIX+"YEAR_NEW").get("files")).get(0)).get("ID");
        String newId=(String)saved.get("SUMMARY_ID");
        try{
            clock=LocalDateTime.of(2027,11,11,0,0);
            service.save(p,request(0));checks++;
            fail(()->service.save(oldForm,request(0)),"old-year save remains closed after year switch");
            fail(()->service.upload(oldId,file("旧年度补传.png",image),request(0)),"photo upload uses summary year rather than newest declaration year");
            fail(()->service.deleteFile(oldFile),"photo deletion uses summary year rather than newest declaration year");
            check(((List)service.get(2027,PREFIX+"YEAR_NEW").get("files")).size()==1,"old-year photo retained and readable");
            clock=YzbytsSummaryRules.deadline(2028);
            service.submit(p,request(0));checks++;
            service.upload(newId,file("新年度.png",image),request(0));checks++;
            String newFile=(String)((Map)((List)service.get(2028,PREFIX+"YEAR_NEXT").get("files")).get(0)).get("ID");
            service.deleteFile(newFile);checks++;
            service.upload(newId,file("新年度保留.png",image),request(0));
            String retained=(String)((Map)((List)service.get(2028,PREFIX+"YEAR_NEXT").get("files")).get(0)).get("ID");
            clock=clock.plusSeconds(1);
            fail(()->service.save(p,request(0)),"new-year save after its own deadline");
            fail(()->service.submit(p,request(0)),"new-year submit after its own deadline");
            fail(()->service.upload(newId,file("逾期.png",image),request(0)),"new-year photo after deadline");
            fail(()->service.deleteFile(retained),"new-year delete after deadline");
            check(service.export(2028,NAME,"").length>0,"new-year export remains available after deadline");
        }finally{clock=LocalDateTime.of(2026,10,21,12,0);}
    }
    static void requiredFields()throws Exception{
        fixture("REQUIRED",NAME+"必填");
        String[] fields={"activityTheme","activityGoal","activityBackground","workThought","practice","achievement"};
        String[] labels={"活动主题","活动目标","活动背景","工作思路","具体做法","突出成效"};
        for(int i=0;i<fields.length;i++){
            for(String empty:new String[]{null,""," \t\r\n ","　"}){
                Map<String,String> p=form("REQUIRED");p.put(fields[i],empty);
                final String message=labels[i]+"不能为空";
                for(boolean submit:new boolean[]{false,true}){
                    try{
                        if(submit)service.submit(p,request(0));else service.save(p,request(0));
                        throw new AssertionError("Expected required field rejection: "+fields[i]);
                    }catch(IllegalArgumentException expected){check(message.equals(expected.getMessage()),"required field message / "+fields[i]);}
                }
            }
        }
        check(count("SELECT COUNT(*) FROM DYN_YZBYTS_SUMMARY WHERE PARTY_ID=?",PREFIX+"REQUIRED")==0,"invalid first save and submit create no summary");
        Map<String,Object> submitted=service.submit(form("REQUIRED"),request(0));
        check("SUBMITTED".equals(submitted.get("STATUS"))&&((List)submitted.get("files")).isEmpty(),"complete text can submit without photos");
        for(String field:fields){
            Map<String,String> p=form("REQUIRED");p.put(field," ");
            fail(()->service.save(p,request(0)),"submitted save rejects blank / "+field);
            fail(()->service.submit(p,request(0)),"submitted update rejects blank / "+field);
        }
        Map<String,Object> unchanged=service.get(2026,PREFIX+"REQUIRED");
        check(submitted.equals(unchanged),"invalid edits preserve submitted contents and timestamp");
    }
    static void flows()throws Exception{
        fixture("A",NAME+"甲支部");fixture("B",NAME+"乙支部");
        Map<String,Object> first=service.get(2026,PREFIX+"A");check("原申报主题".equals(first.get("ACTIVITY_THEME")),"first entry prefill");
        check(countList("NOT_STARTED")==2,"not started filter");
        Map<String,String> form=form("A");Map<String,Object> draft=service.save(form,request(0));String id=(String)draft.get("SUMMARY_ID");
        check("DRAFT".equals(draft.get("STATUS")),"save creates draft");check(PREFIX.concat("A").equals(draft.get("PARTY_ID")),"party id preserved");
        check(countList("DRAFT")==1,"draft filter");
        form.put("activityTheme","");form.put("activityBackground","");fail(()->service.save(form,request(0)),"cleared required fields rejected");
        check("年度特色成果".equals(service.get(2026,PREFIX+"A").get("ACTIVITY_THEME")),"invalid save preserves previous theme");
        form.put("activityTheme",form("A").get("activityTheme"));form.put("activityBackground",form("A").get("activityBackground"));
        form.put("practice","尚未手动保存的最新文字");Map<String,Object> submitted=service.submit(form,request(0));
        check("SUBMITTED".equals(submitted.get("STATUS")),"submitted state");check(form.get("practice").equals(submitted.get("PRACTICE")),"submit persists latest contents");
        check(countList("SUBMITTED")==1,"submitted filter");form.put("practice","提交后修改");service.save(form,request(0));
        check("SUBMITTED".equals(service.get(2026,PREFIX+"A").get("STATUS")),"submitted state remains after save");
        byte[] wide=photo(640,240,"png"),tall=photo(200,600,"jpg");
        service.upload(id,file("横图.png",wide),request(0));service.upload(id,file("竖图.jpg",tall),request(0));service.upload(id,file("第三张.png",wide),request(0));service.upload(id,file("第四张.png",wide),request(0));
        check(((List)service.get(2026,PREFIX+"A").get("files")).size()==4,"four photos read back");
        byte[] excel=service.export(2026,NAME,"SUBMITTED");Files.createDirectories(Paths.get("output/yzbyts-summary"));Files.write(Paths.get("output/yzbyts-summary/含照片导出验收.xlsx"),excel);
        XSSFWorkbook book=new XSSFWorkbook(new ByteArrayInputStream(excel)); try{
            check(book.getSheetAt(0).getLastRowNum()==1,"filtered export row count");check(book.getAllPictures().size()==4,"four embedded pictures");
            check(Arrays.equals(book.getAllPictures().get(0).getData(),wide),"original picture bytes retained");
            List<XSSFShape> shapes=((XSSFDrawing)book.getSheetAt(0).getRelations().get(0)).getShapes();
            for(int i=0;i<4;i++){XSSFClientAnchor a=(XSSFClientAnchor)shapes.get(i).getAnchor();check(a.getCol1()==10+i&&a.getRow1()==1,"picture organization and column association");}
            check(book.getSheetAt(0).getRow(1).getCell(6).getStringCellValue().equals("提交后修改"),"Chinese export contents");
            check(book.getSheetAt(0).getRow(1).getCell(6).getCellStyle().getWrapText(),"export wrapping");
        } finally { book.getPackage().close(); }
        fail(()->service.upload(id,file("第五张.png",wide),request(0)),"fifth photo rejected");
        String fileId=(String)((Map)((List)service.get(2026,PREFIX+"A").get("files")).get(0)).get("ID");service.deleteFile(fileId);
        check(((List)service.get(2026,PREFIX+"A").get("files")).size()==3,"delete photo");
        fail(()->service.upload(id,file("伪图片.png",new byte[]{1,2,3}),request(0)),"invalid photo rejected");
        fail(()->service.submit(form("B"),request(3)),"injected failure during submit");
        check(count("SELECT COUNT(*) FROM DYN_YZBYTS_SUMMARY WHERE PARTY_ID=?",PREFIX+"B")==1,"outer transaction includes save before forced rollback");
    }
    static long countList(String status){return ((Number)service.list(2026,NAME,status,1,20).get("records")).longValue();}
    static void exportMany()throws Exception{
        for(int i=0;i<105;i++)fixture("M"+i,NAME+"批量"+String.format("%03d",i));
        check(((Number)service.list(2026,NAME+"批量","",1,20).get("records")).intValue()==105,"105 rows counted");
        check(((List)service.list(2026,NAME+"批量","",6,20).get("data")).size()==5,"last page");
        check(((List)service.list(2026,"不存在的支部名称","",1,20).get("data")).isEmpty(),"empty search");
        byte[] excel=service.export(2026,NAME+"批量","");
        XSSFWorkbook book=new XSSFWorkbook(new ByteArrayInputStream(excel)); try{check(book.getSheetAt(0).getLastRowNum()==105,"export beyond 100 rows");} finally { book.getPackage().close(); }
    }
    static void boundaries()throws Exception{
        fixture("LIMIT",NAME+"边界");Map<String,String> p=form("LIMIT");
        String[] names={"activityGoal","activityBackground","workThought","practice","achievement"};int[] max={70,250,50,550,200};
        for(int i=0;i<names.length;i++){String name=names[i];p.put(name,repeat(max[i]));service.save(p,request(0));checks++;p.put(name,repeat(max[i]+1));fail(()->service.save(p,request(0)),name+" over limit");p.put(name,form("LIMIT").get(name));}
        YzbytsSummaryRules.checkPhoto("a.PNG","image/png",10L*1024*1024);checks++;
        fail(()->YzbytsSummaryRules.checkPhoto("a.png","image/png",10L*1024*1024+1),"photo too large");
        fail(()->YzbytsSummaryRules.checkPhoto("a.gif","image/gif",1),"photo format");
        fail(()->YzbytsSummaryRules.checkPhoto("a.png","image/png",0),"empty photo");
        clock=YzbytsSummaryRules.deadline(2026);Map<String,Object> row=service.submit(p,request(0));checks++;
        String id=(String)row.get("SUMMARY_ID");service.upload(id,file("截止边界.png",photo(100,100,"png")),request(0));checks++;
        String fileId=(String)((Map)((List)service.get(2026,PREFIX+"LIMIT").get("files")).get(0)).get("ID");
        clock=clock.plusSeconds(1);
        try{fail(()->service.save(p,request(0)),"deadline save");fail(()->service.submit(p,request(0)),"deadline submit");fail(()->service.upload(id,file("late.png",photo(100,100,"png")),request(0)),"deadline upload");fail(()->service.deleteFile(fileId),"deadline delete");check(service.get(2026,PREFIX+"LIMIT")!=null,"deadline read");check(service.export(2026,NAME,"").length>0,"deadline export");}
        finally{clock=LocalDateTime.of(2026,10,21,12,0);}
    }
    static void concurrent()throws Exception{
        check(count("SELECT COUNT(*) FROM PARTY_ORGANIZATION WHERE ID=?",PREFIX+"CON")==0,"concurrent fixture absent");fixture("CON",NAME+"并发");
        ExecutorService pool=Executors.newFixedThreadPool(2);
        try{
            CountDownLatch start=new CountDownLatch(1);List<Future<?>> futures=new ArrayList<>();
            for(int i=0;i<2;i++)futures.add(pool.submit(()->{try{start.await();service.save(form("CON"),request(0));}catch(Exception e){throw new RuntimeException(e);}}));
            start.countDown();for(Future<?> f:futures)f.get(20,TimeUnit.SECONDS);
            check(count("SELECT COUNT(*) FROM DYN_YZBYTS_SUMMARY WHERE PARTY_ID=?",PREFIX+"CON")==1,"concurrent first save creates one row");
            String id=(String)service.get(2026,PREFIX+"CON").get("SUMMARY_ID");byte[] photo=photo(100,80,"png");
            service.upload(id,file("1.png",photo),request(0));service.upload(id,file("2.png",photo),request(0));service.upload(id,file("3.png",photo),request(0));
            List<Future<Boolean>> uploads=new ArrayList<>();for(int i=0;i<2;i++)uploads.add(pool.submit(()->{try{service.upload(id,file("4.png",photo),request(0));return true;}catch(IllegalArgumentException e){return false;}}));
            int successes=0;for(Future<Boolean> f:uploads)if(f.get(20,TimeUnit.SECONDS))successes++;
            check(successes==1&&count("SELECT COUNT(*) FROM DYN_YZBYTS_SUMMARY_FILE WHERE SUMMARY_ID=?",id)==4,"concurrent uploads cannot exceed four photos");
            String original=(String)service.get(2026,PREFIX+"CON").get("PRACTICE");Map<String,String> changed=form("CON");changed.put("practice","失败提交不可落库");
            fail(()->service.submit(changed,request(3)),"submit rollback outside test transaction");
            check(original.equals(service.get(2026,PREFIX+"CON").get("PRACTICE")),"failed submit rolls back content save");
        }finally{pool.shutdownNow();cleanKey("CON");}
    }
    static void cleanKey(String key){String party=PREFIX+key;jdbc.update("DELETE FROM DYN_YZBYTS_SUMMARY_FILE WHERE SUMMARY_ID IN (SELECT ID FROM DYN_YZBYTS_SUMMARY WHERE PARTY_ID=? AND CREATED_BY=?)",party,PREFIX);jdbc.update("DELETE FROM DYN_YZBYTS_SUMMARY WHERE PARTY_ID=? AND CREATED_BY=?",party,PREFIX);jdbc.update("DELETE FROM DYN_D_YZBYTS WHERE PARTY_ID=? AND CREATED_BY=?",party,PREFIX);jdbc.update("DELETE FROM PARTY_ORGANIZATION WHERE ID=? AND CREATED_BY=?",party,PREFIX);}
    static void clean(){String party=PREFIX+"UI";jdbc.update("DELETE FROM DYN_YZBYTS_SUMMARY_FILE WHERE SUMMARY_ID IN (SELECT ID FROM DYN_YZBYTS_SUMMARY WHERE PARTY_ID=?)",party);jdbc.update("DELETE FROM DYN_YZBYTS_SUMMARY WHERE PARTY_ID=?",party);jdbc.update("DELETE FROM DYN_D_YZBYTS WHERE PARTY_ID=? AND CREATED_BY=?",party,PREFIX);jdbc.update("DELETE FROM PARTY_ORGANIZATION WHERE ID=? AND CREATED_BY=?",party,PREFIX);}
    static long count(String sql,Object... args){return jdbc.queryForObject(sql,args,Long.class);}
    static String repeat(int n){char[] c=new char[n];Arrays.fill(c,'测');return new String(c);}
    static void check(boolean value,String label){if(!value)throw new AssertionError(label);checks++;}
    static void fail(Action action,String label)throws Exception{try{action.run();throw new AssertionError("Expected failure: "+label);}catch(Exception expected){checks++;}}
    static String fingerprint()throws Exception{return fingerprint(false);}
    static String fingerprint(boolean excludeUi)throws Exception{
        MessageDigest hash=MessageDigest.getInstance("SHA-256");StringBuilder report=new StringBuilder();
        try(Connection c=jdbc.getDataSource().getConnection()){
            for(String table:new String[]{"DYN_YZBYTS_SUMMARY","DYN_YZBYTS_SUMMARY_FILE","DYN_D_YZBYTS"}){
                String filter = !excludeUi ? "" : table.equals("DYN_YZBYTS_SUMMARY_FILE") ? " WHERE SUMMARY_ID NOT IN (SELECT ID FROM DYN_YZBYTS_SUMMARY WHERE PARTY_ID='"+PREFIX+"UI')" : " WHERE PARTY_ID IS NULL OR PARTY_ID<>'"+PREFIX+"UI'";
                int rows=0;try(Statement s=c.createStatement();ResultSet r=s.executeQuery("SELECT * FROM "+table+filter+" ORDER BY ID")){
                    while(r.next()){rows++;for(int i=1;i<=r.getMetaData().getColumnCount();i++){
                        Object v=r.getObject(i);byte[] bytes;
                        if(v instanceof Blob){Blob b=(Blob)v;bytes=b.getBytes(1,(int)b.length());}
                        else if(v instanceof Clob){Clob b=(Clob)v;bytes=b.getSubString(1,(int)b.length()).getBytes("UTF-8");}
                        else if(v instanceof byte[])bytes=(byte[])v;
                        else bytes=String.valueOf(v).getBytes("UTF-8");
                        hash.update(java.nio.ByteBuffer.allocate(4).putInt(bytes.length).array());hash.update(bytes);
                    }}
                }report.append(table).append('=').append(rows).append(';');
            }
        }report.append("sha256=");for(byte b:hash.digest())report.append(String.format("%02x",b));return report.toString();
    }
}
