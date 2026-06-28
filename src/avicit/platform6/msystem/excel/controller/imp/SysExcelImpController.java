package avicit.platform6.msystem.excel.controller.imp;

import avicit.platform6.api.excel.*;
import avicit.platform6.api.excel.dto.SysExcelColumnDTO;
import avicit.platform6.api.excel.dto.SysExcelSheetDTO;
import avicit.platform6.api.excel.dto.SysExcelTemplateDTO;
import avicit.platform6.api.session.SessionHelper;
import avicit.platform6.api.syslookup.SysLookupAPI;
import avicit.platform6.api.syslookup.dto.SysLookupSimpleVo;
import avicit.platform6.api.syspermissionresource.permissionanalysis.core.support.LoaderConstant;
import avicit.platform6.commons.utils.JsonHelper;
import avicit.platform6.core.annotation.log.FieldRemark;
import avicit.platform6.core.domain.BeanDTO;
import avicit.platform6.core.excel.imp.SysExcelConstant;
import avicit.platform6.core.properties.PlatformConstant;
import avicit.platform6.core.rest.msg.ResponseMsg;
import avicit.platform6.core.rest.msg.ResponseStatus;
import com.alibaba.fastjson.JSONArray;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.cxf.helpers.FileUtils;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.CellRangeAddressList;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFDataFormat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.lang.reflect.Field;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @Description TODO
 * <p>Copyriht: Copyright (c) 2012</p>
 * <p>Company: AVICIT Co., Ltd</p>
 * @Author DIGITAL-HUPENG
 * @Date 2020/11/20 15:21
 * @Version 1.0
 **/
@Controller
@Scope("prototype")
@RequestMapping("platform6/msystem/excel/imp/sysExcelImpController")
public class SysExcelImpController implements LoaderConstant {

    private static final Logger LOGGER = LoggerFactory.getLogger(SysExcelImpController.class);
    @Autowired
    private SysLookupAPI sysLookupAPI;
    @Autowired
    private SysExcelRecordAPI sysExcelRecordAPI;
    @Autowired
    private SysExcelTemplateAPI sysExcelTemplateAPI;
    @Autowired
    private SysExcelSheetAPI sysExcelSheetAPI;
    @Autowired
    private SysExcelColumnAPI sysExcelColumnAPI;
    @Autowired
    private SysExcelImpAPI sysExcelImpAPI;

    /**
     * Excel数据导入-DTO方式
     * @param templateCode
     * @param uploadfile
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/import/{templateCode}", method = RequestMethod.POST)
    //FIXME IE8下不支持json，此处注掉该注解，方法返回值改成void start 20230919
    //@ResponseBody
    public void toImport(@PathVariable String templateCode, MultipartFile uploadfile, HttpServletRequest request, HttpServletResponse response) throws Exception {
        //FIXME IE8下不支持json，此处注掉该注解，方法返回值改成void end  20230919

        //导入开始时间
        long importExcelStartTime = System.currentTimeMillis();
        //生成导入记录
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            SysExcelTemplateDTO sysImpTemplateDTO = sysExcelTemplateAPI.selectOneTemplateDto(templateCode, "0");
            if(sysImpTemplateDTO == null){
                throw new Exception("未找到"+templateCode+"对应的导入配置信息！");
            }
            String bathPath = request.getSession().getServletContext().getRealPath("/");
            if (StringUtils.isBlank(uploadfile.getOriginalFilename())) {
                throw new Exception("导入文档为空！");
            }
            String[] splits = uploadfile.getOriginalFilename().split("\\.");
            String fileName = splits[0] + "错误信息_" + System.currentTimeMillis() + "." + splits[1];
            String path = bathPath + "import/" + fileName;
            InputStream in = uploadfile.getInputStream();
            createFile(path);
            FileOutputStream fos=new FileOutputStream(path);
            IOUtils.copy(in, fos);
            //关闭流
            in.close();
            fos.close();
            ResponseMsg<Map<String,Object>> responseMsg = null;
            String url = "";
            if (PlatformConstant.ImportStyle.DTO.getStyle().equals(sysImpTemplateDTO.getManageStyle())) {
                responseMsg = sysExcelImpAPI.doImportByDto(templateCode, path);
            } else if (PlatformConstant.ImportStyle.EXCEL.getStyle().equals(sysImpTemplateDTO.getManageStyle())) {
                responseMsg = sysExcelImpAPI.doImportByExcel(templateCode, path);
            }
            FileUtils.delete(new File(path));
            if (null != responseMsg && responseMsg.getRetCode().equals(ResponseStatus.HTTP_OK)) {
                result = responseMsg.getResponseBody();
                if (PlatformConstant.OpResult.success.name().equals(result.get("flag"))) {
                    result.put("msg", "导入成功！");
                } else if (PlatformConstant.OpResult.failure.name().equals(result.get("flag"))){
                    result.put("msg", "导入excel出错，详情请查看导入日志！");
                }
            } else {
                LOGGER.error("url:" + url + ",error:" + responseMsg.getErrorDesc());
                result.put("flag", PlatformConstant.OpResult.failure);
                result.put("msg", "远程服务调用失败：" + responseMsg.getErrorDesc());

            }
            //导入excel数据结束时间
            long importExcelEndTime = System.currentTimeMillis();
            LOGGER.info("导入excel总耗时(毫秒):" + (importExcelEndTime - importExcelStartTime));
        } catch (Exception ex) {
            LOGGER.error("toImport方法保存数据出错", ex);
            result.put("flag", PlatformConstant.OpResult.failure);
            result.put("msg", ex.getMessage());
        }
        //FIXME IE8下不支持json，直接将返回信息写进response中  start 20230919
        response.setContentType("text/html;charset=utf-8");
        response.getWriter().write("<script type='text/javascript'>parent.afertImport(" + JsonHelper.getBaseInstance().writeValueAsString(result) + ");</script>");
        //FIXME IE8下不支持json，直接将返回信息写进response中  start 20230919

    }

    /**
     * 下载文件
     * @param templateCode
     * @param type 类型 excel/template
     * @param request
     * @param response
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/download/{type}/{templateCode}")
    public void downloadFile(@PathVariable String type, @PathVariable String templateCode, HttpServletRequest request, HttpServletResponse response) throws Exception {
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = null;
        try{
            //验证配置信息
            if (StringUtils.isBlank(templateCode)) {
                out = response.getWriter();
                out.write("<script type='text/javascript'>");
                out.write("alert('传入的templateCode为空！');");
                out.write("</script>");
                out.close();
                return;
            }
            SysExcelTemplateDTO sysImpTemplateDTO = sysExcelTemplateAPI.selectOneTemplateDto(templateCode, "0");
            if (sysImpTemplateDTO == null) {
                out = response.getWriter();
                out.write("<script type='text/javascript'>");
                out.write("alert('未找到"+templateCode+"对应的导入配置信息！');");
                out.write("</script>");
                out.close();
                return;
            }
            String dirPath = request.getSession().getServletContext().getRealPath("");
            if (dirPath.endsWith(File.separator)) {
                dirPath = dirPath.substring(0, dirPath.length() - File.separator.length());
            }
            String fileName = null;
            if(type.equals("template")){
                fileName = (StringUtils.isEmpty(sysImpTemplateDTO.getName()) ? sysImpTemplateDTO.getCode() : sysImpTemplateDTO.getName()) + "导入模板.xlsx";
            }else{
                fileName = (StringUtils.isEmpty(sysImpTemplateDTO.getName()) ? sysImpTemplateDTO.getCode() : sysImpTemplateDTO.getName()) + "导出数据(" + SessionHelper.getLoginSysUser(request).getName() + ").xlsx";
            }
            String filePath = dirPath + File.separator + "static" + File.separator + "sysexceltemplate" + File.separator + fileName;
            File file = new File(filePath);
            if(!file.exists()){
                String msg = "未找到"+templateCode+"对应的模板文件，请先生成模板文件！";
                if(type.equals("excel")){
                    msg = "未找到"+templateCode+"对应的导出数据文件，请检查是否成功导出！";
                }
                out = response.getWriter();
                out.write("<script type='text/javascript'>");
                out.write("alert('"+msg+"');");
                out.write("</script>");
                out.close();
                return;
            }
            this.downLoad(request, response, file);
            if(type.equals("excel") && file.exists()){
                file.delete();
            }
        }catch (Exception e){
            LOGGER.error("下载文件失败createTemplate:",e);
            e.printStackTrace();
            out = response.getWriter();
            out.write("<script type='text/javascript'>");
            out.write("alert('下载文件出错，请联系管理员！');");
            out.write("</script>");
            out.close();
            return;
        }
    }

    /**
     * 生成模板
     * @param templateCode
     * @param request
     * @param response
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/createTemplate/{templateCode}")
    @ResponseBody
    public Map<String, Object> createTemplate(@PathVariable String templateCode, HttpServletRequest request, HttpServletResponse response) throws Exception {
        Map<String, Object> result = new HashMap<String, Object>();
        SXSSFWorkbook sxssfWorkbook = null;
        FileOutputStream fos = null;
        try{
            //验证配置信息
            if (StringUtils.isBlank(templateCode)) {
                result.put("flag", PlatformConstant.OpResult.failure);
                result.put("error", "传入的templateCode为空!");
                return result;
            }

            SysExcelTemplateDTO sysImpTemplateDTO = sysExcelTemplateAPI.selectOneTemplateDto(templateCode, "0");
            if (sysImpTemplateDTO == null) {
                result.put("flag", PlatformConstant.OpResult.failure);
                result.put("error", "未找到" + templateCode + "对应的导入配置信息！");
                return result;
            }
            SysExcelSheetDTO sysImpSheetTableResDTO = sysExcelSheetAPI.findColumntDtoByTemplateId(sysImpTemplateDTO.getId());
            if (sysImpSheetTableResDTO == null) {
                result.put("flag", PlatformConstant.OpResult.failure);
                result.put("error", "未找到" + templateCode + "对应的导入配置信息！");
                return result;
            }
            List<SysExcelColumnDTO> sysImpColumnFiledResDTOList = sysExcelColumnAPI.getSysImpColumnFiledList(sysImpSheetTableResDTO.getId());
            if (sysImpColumnFiledResDTOList == null || sysImpColumnFiledResDTOList.size() == 0) {
                result.put("flag", PlatformConstant.OpResult.failure);
                result.put("error", "未找到" + templateCode + "对应的导入属性配置信息！");
                return result;
            }
            //校验配置与DTO类属性是否兼容
            Map<String, Object> checkResult = this.checkConfig(sysImpTemplateDTO, sysImpColumnFiledResDTOList);
            if(checkResult.get("flag") != null && checkResult.get("flag").equals(PlatformConstant.OpResult.failure)){
                result.put("flag", PlatformConstant.OpResult.failure);
                result.put("error", checkResult.get("msg"));
                return result;
            }
            //生成Excel模板文件
            String dirPath = request.getSession().getServletContext().getRealPath("");
            if (dirPath.endsWith(File.separator)) {
                dirPath = dirPath.substring(0, dirPath.length() - File.separator.length());
            }
            dirPath = dirPath + File.separator + "static" + File.separator + "sysexceltemplate";
            File file = new File(dirPath);
            if(!file.exists() || !file.isDirectory()){
                file.mkdir();
            }
            String filePath = dirPath + File.separator + (StringUtils.isEmpty(sysImpTemplateDTO.getName()) ? sysImpTemplateDTO.getCode() : sysImpTemplateDTO.getName()) + "导入模板.xlsx";
            file = new File(filePath);
            file.deleteOnExit();
            //生成Workbook
            sxssfWorkbook = this.createWorkbook("1", sysImpTemplateDTO, sysImpColumnFiledResDTOList, null, null);
            fos = new FileOutputStream(filePath);
            sxssfWorkbook.write(fos);
            result.put("flag", PlatformConstant.OpResult.success);
            result.put("error", "生成模板成功!");
            return result;
        } catch (Exception e) {
            LOGGER.error("生成模板失败createTemplate！", e);
            e.printStackTrace();
            result.put("flag", PlatformConstant.OpResult.failure);
            result.put("error", "生成模板失败createTemplate!"+e.getMessage());
            return result;
        } finally {
            try {
                if(sxssfWorkbook != null) {
                    // 理SXSSFWorkbook导出excel时，产生的临时文件
                    sxssfWorkbook.dispose();
                }
                if(fos != null) {
                    fos.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }



    /**
     * 生成Workbook
     * @param opt 1-生成模板 2-导出
     * @param sysImpTemplateDTO Excel配置
     * @param propList 属性配置
     * @param dataList 数据
     * @return
     */
    private SXSSFWorkbook createWorkbook(String opt, SysExcelTemplateDTO sysImpTemplateDTO, List<SysExcelColumnDTO> propList, List<BeanDTO> dataList, String columns) throws Exception{
        try {
            long startTime = System.currentTimeMillis();
            // 获取SXSSFWorkbook实例
            SXSSFWorkbook sxssfWorkbook = new SXSSFWorkbook();
            SysExcelSheetDTO sysImpSheetTableDTO = sysExcelSheetAPI.findColumntDtoByTemplateId(sysImpTemplateDTO.getId());
            Sheet sheet = sxssfWorkbook.createSheet(sysImpSheetTableDTO.getExcelTitle());
            List<Object> columnList = null;
            if (StringUtils.isNotBlank(columns)) {
                columnList = JSONArray.parseArray(columns, Object.class);
                List<SysExcelColumnDTO> columnProps = null;
                if (! CollectionUtils.isEmpty(columnList)) {
                    Class dtoCls = Class.forName(sysImpSheetTableDTO.getSheetName());
                    columnProps = new ArrayList<SysExcelColumnDTO>();
                    for (Object column : columnList) {
                        for (SysExcelColumnDTO prop : propList) {
                            if (column.toString().equalsIgnoreCase(dtoCls.getDeclaredField(prop.getField()).getAnnotation(FieldRemark.class).column())) {
                                columnProps.add(prop);
                                break;
                            }
                        }
                    }
                    propList = columnProps;
                }
            }
            int headerRowNum = 0;
            if(sysImpSheetTableDTO.getDisplay() != null && sysImpSheetTableDTO.getDisplay().equals("Y")){
                //生成标题栏
                XSSFCellStyle xssfCellStyleTitle = getAndSetXSSFCellStyleTitle(sxssfWorkbook);
                headerRowNum = sysImpSheetTableDTO.getTlineNum();
                if (headerRowNum > 0) {
                    CellRangeAddress c1 = new CellRangeAddress(0, headerRowNum - 1, 0, propList.size()-1);
                    sheet.addMergedRegion(c1);
                    Row title = sheet.createRow(0);
                    Cell cell = title.createCell(0);
                    cell.setCellStyle(xssfCellStyleTitle);
                    cell.setCellValue(StringUtils.isEmpty(sysImpSheetTableDTO.getExcelTitle()) ? sysImpTemplateDTO.getCode() : sysImpSheetTableDTO.getExcelTitle());
                }
            }
            // 设置并获取到需要的样式
            XSSFCellStyle xssfCellStyleHeader = getAndSetXSSFCellStyleHeader(sxssfWorkbook);
            // 创建第一行,作为header表头
            Row header = sheet.createRow(headerRowNum);
            // 循环创建header单元格
            for (int cellnum = 0; cellnum < propList.size(); cellnum++) {
                SysExcelColumnDTO prop = propList.get(cellnum);
                Cell cell = header.createCell(cellnum);
                cell.setCellStyle(xssfCellStyleHeader);
                if(opt.equals("1") && prop.getRequired() != null && prop.getRequired().equals("Y")){
                    cell.setCellValue(prop.getFieldDesc()+"(必填)");
                }else {
                    cell.setCellValue(prop.getFieldDesc());
                }
                //设置列宽
                if(prop.getCellWidth() != null && prop.getCellWidth() > 0){
                    sheet.setColumnWidth(cellnum, prop.getCellWidth() * 256);
                }else{
                    sheet.setColumnWidth(cellnum, cell.getStringCellValue().length()*2*256);
                }
            }
            if(opt.equals("1")){
                int rownum = headerRowNum + 1;
                Row row = sheet.createRow(rownum);
                XSSFCellStyle cellStyleGeneral = getCellStyleGeneral(sxssfWorkbook);
                XSSFCellStyle cellStyleGeneralDate = getCellStyleDate(sxssfWorkbook, "yyyy/MM/dd");
                XSSFCellStyle cellStyleGeneralDateTime = getCellStyleDate(sxssfWorkbook, "yyyy/MM/dd HH:mm:ss");
                XSSFCellStyle cellStyleGeneralTime = getCellStyleDate(sxssfWorkbook, "HH:mm:ss");
                // 循环创建单元格
                for (int cellnum = 0; cellnum < propList.size(); cellnum++) {
                    SysExcelColumnDTO prop = propList.get(cellnum);
                    Cell cell = row.createCell(cellnum);
                    cell.setCellStyle(cellStyleGeneral);
                    if(prop.getCheckType() != null && prop.getCheckType().equals("3") && prop.getDateStyle() != null){
                        if(prop.getDateStyle().equals("yyyy-MM-dd")){
                            cell.setCellStyle(cellStyleGeneralDate);
                        }else if(prop.getDateStyle().equals("yyyy-MM-dd HH:mm:ss")){
                            cell.setCellStyle(cellStyleGeneralDateTime);
                        }else if(prop.getDateStyle().equals("HH:mm:ss")){
                            cell.setCellStyle(cellStyleGeneralTime);
                        }
                    }
                    //生成通用代码下拉框格式
                    if(prop.getPropertyType() != null && prop.getPropertyType().equals("0")){
                        String sysLookupCode = prop.getSysLookupCode();
                        if(StringUtils.isNotBlank(sysLookupCode)){
                            Collection<SysLookupSimpleVo> sysLookupSimpleVos = sysLookupAPI.getLookUpListByTypeByAppId(sysLookupCode, SessionHelper.getApplicationId());
                            if(sysLookupSimpleVos != null && sysLookupSimpleVos.size() > 0){
                                String[] dataArray = new String[sysLookupSimpleVos.size()];
                                int loop = 0;
                                for (SysLookupSimpleVo sysLookupSimpleVo : sysLookupSimpleVos) {
                                    dataArray[loop] = sysLookupSimpleVo.getLookupName();
                                    loop ++;
                                }
                                //设置区域范围， 参数：firstRow,lastRow,firstCol,lastCol
                                CellRangeAddressList cellRangeAddressList = new CellRangeAddressList(rownum, rownum, cellnum, cellnum);
                                DataValidationHelper dataValidationHelper = sheet.getDataValidationHelper();
                                // 构造下拉框和数据
                                DataValidationConstraint constraint = dataValidationHelper.createExplicitListConstraint(dataArray);
                                // 绑定下拉框和区域
                                DataValidation validation = dataValidationHelper.createValidation(constraint, cellRangeAddressList);
                                // 为sheet添加验证
                                sheet.addValidationData(validation);
                            }
                        }
                    }
                }
                return sxssfWorkbook;
            }
            if(dataList != null) {
                Class dtoCls = Class.forName(sysImpSheetTableDTO.getSheetName());
                DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
                DateFormat dtf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                DateFormat tf = new SimpleDateFormat("HH:mm:ss");
                XSSFCellStyle cellStyleGeneral = getCellStyleGeneral(sxssfWorkbook);
                XSSFCellStyle cellStyleGeneralDate = getCellStyleDate(sxssfWorkbook, "yyyy/MM/dd");
                XSSFCellStyle cellStyleGeneralDateTime = getCellStyleDate(sxssfWorkbook, "yyyy/MM/dd HH:mm:ss");
                XSSFCellStyle cellStyleGeneralTime = getCellStyleDate(sxssfWorkbook, "HH:mm:ss");
                // 遍历创建行,导出数据
                for (int rownum = 1; rownum <= dataList.size(); rownum++) {
                    BeanDTO data = dataList.get(rownum - 1);
                    Row row = sheet.createRow(rownum+headerRowNum);
                    // 循环创建单元格
                    int cellnum = 0;
                    for(SysExcelColumnDTO prop : propList){
                        Cell cell = row.createCell(cellnum);
                        cellnum++;
                        cell.setCellStyle(cellStyleGeneral);
                        Field field = dtoCls.getDeclaredField(prop.getField());
                        //打开私有访问
                        field.setAccessible(true);
                        //获取属性值
                        Object value = field.get(data);
                        if (value != null) {
                            String fieldType = field.getType().getSimpleName();
                            if (fieldType.equals("Date")) {
                                //日期类型
                                if (prop.getDateStyle() == null || prop.getDateStyle().equals("yyyy-MM-dd")) {
                                    Date propValue = df.parse(df.format((Date) value));
                                    cell.setCellValue(propValue);
                                    cell.setCellStyle(cellStyleGeneralDate);
                                    continue;
                                }
                                //日期时间类型
                                if (prop.getDateStyle() != null && prop.getDateStyle().equals("yyyy-MM-dd HH:mm:ss")) {
                                    Date propValue = dtf.parse(dtf.format((Date) value));
                                    cell.setCellValue(propValue);
                                    cell.setCellStyle(cellStyleGeneralDateTime);
                                    continue;
                                }
                                //时间类型
                                if (prop.getDateStyle() != null && prop.getDateStyle().equals("HH:mm:ss")) {
                                    Date propValue = tf.parse(tf.format((Date) value));
                                    cell.setCellValue(propValue);
                                    cell.setCellStyle(cellStyleGeneralTime);
                                    continue;
                                }
                            }
                            if (fieldType.equals("Integer") || fieldType.equals("int")) {
                                cell.setCellValue((Integer)value);
                                continue;
                            }
                            if (fieldType.equals("Long") || fieldType.equals("long")) {
                                cell.setCellValue((Long)value);
                                continue;
                            }
                            if (fieldType.equals("Float") || fieldType.equals("float")) {
                                cell.setCellValue((Float)value);
                                continue;
                            }
                            if (fieldType.equals("Double") || fieldType.equals("double")) {
                                cell.setCellValue((Double)value);
                                continue;
                            }
                            if (fieldType.equals("BigDecimal")) {
                                String strValue = value.toString();
                                if(strValue.indexOf(".") == -1){
                                    cell.setCellValue(Long.valueOf(strValue));
                                }else {
                                    cell.setCellValue(Double.valueOf(strValue));
                                }
                                continue;
                            }
                            cell.setCellValue((String)value);
                        }
                    }
                }
                long endTime = System.currentTimeMillis();
                LOGGER.info("数据全部导出至excel总耗时:{} 毫秒!", endTime - startTime, dataList.size());
            }
            return sxssfWorkbook;
        } catch (Exception e) {
            LOGGER.error("导出Excel出错！", e);
            e.printStackTrace();
            throw e;
        }

    }

    /**
     * 获取并设置header样式
     */
    private XSSFCellStyle getAndSetXSSFCellStyleHeader(SXSSFWorkbook sxssfWorkbook) {
        XSSFCellStyle xssfCellStyle = (XSSFCellStyle) sxssfWorkbook.createCellStyle();
        Font font = sxssfWorkbook.createFont();
        // 字体大小
        font.setFontHeightInPoints((short) 10);
        // 字体粗细
        //font.setBoldweight((short) 20);
        // 将字体应用到样式上面
        xssfCellStyle.setFont(font);
        // 是否自动换行
        xssfCellStyle.setWrapText(false);
        // 水平居中
        xssfCellStyle.setAlignment(HorizontalAlignment.CENTER);
        // 垂直居中
        xssfCellStyle.setVerticalAlignment(VerticalAlignment.CENTER);
        // 边框
        xssfCellStyle.setBorderBottom(BorderStyle.THIN);
        xssfCellStyle.setBorderRight(BorderStyle.THIN);
        xssfCellStyle.setBorderTop(BorderStyle.THIN);
        xssfCellStyle.setBorderLeft(BorderStyle.THIN);
        xssfCellStyle.setBottomBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setRightBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setTopBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setLeftBorderColor(IndexedColors.BLACK.getIndex());
        return xssfCellStyle;
    }

    /**
     * 获取常规样式
     */
    private XSSFCellStyle getCellStyleGeneral(SXSSFWorkbook sxssfWorkbook) {
        XSSFCellStyle xssfCellStyle = (XSSFCellStyle) sxssfWorkbook.createCellStyle();
        XSSFDataFormat format = (XSSFDataFormat) sxssfWorkbook.createDataFormat();
        // 是否自动换行
        xssfCellStyle.setWrapText(false);
        // 边框
        xssfCellStyle.setBorderBottom(BorderStyle.THIN);
        xssfCellStyle.setBorderRight(BorderStyle.THIN);
        xssfCellStyle.setBorderTop(BorderStyle.THIN);
        xssfCellStyle.setBorderLeft(BorderStyle.THIN);
        xssfCellStyle.setBottomBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setRightBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setTopBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setLeftBorderColor(IndexedColors.BLACK.getIndex());
        return xssfCellStyle;
    }

    /**
     * 获取日期格式
     */
    private XSSFCellStyle getCellStyleDate(SXSSFWorkbook sxssfWorkbook, String dateStyle) {
        XSSFCellStyle xssfCellStyle = (XSSFCellStyle) sxssfWorkbook.createCellStyle();
        XSSFDataFormat format = (XSSFDataFormat) sxssfWorkbook.createDataFormat();
        // 是否自动换行
        xssfCellStyle.setWrapText(false);
        // 边框
        xssfCellStyle.setBorderBottom(BorderStyle.THIN);
        xssfCellStyle.setBorderRight(BorderStyle.THIN);
        xssfCellStyle.setBorderTop(BorderStyle.THIN);
        xssfCellStyle.setBorderLeft(BorderStyle.THIN);
        xssfCellStyle.setBottomBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setRightBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setTopBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setLeftBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setDataFormat(format.getFormat(dateStyle));
        return xssfCellStyle;
    }

    /**
     * 获取并设置title样式
     */
    private XSSFCellStyle getAndSetXSSFCellStyleTitle(SXSSFWorkbook sxssfWorkbook) {
        XSSFCellStyle xssfCellStyle = (XSSFCellStyle) sxssfWorkbook.createCellStyle();
        Font font = sxssfWorkbook.createFont();
        // 字体大小
        font.setFontHeightInPoints((short) 14);
        // 字体粗细
        //font.setBoldweight((short) 20);
        // 将字体应用到样式上面
        xssfCellStyle.setFont(font);
        // 是否自动换行
        xssfCellStyle.setWrapText(false);
        // 水平居中
        xssfCellStyle.setAlignment(HorizontalAlignment.CENTER);
        // 垂直居中
        xssfCellStyle.setVerticalAlignment(VerticalAlignment.CENTER);
        // 边框
        xssfCellStyle.setBorderBottom(BorderStyle.THIN);
        xssfCellStyle.setBorderRight(BorderStyle.THIN);
        xssfCellStyle.setBorderTop(BorderStyle.THIN);
        xssfCellStyle.setBorderLeft(BorderStyle.THIN);
        xssfCellStyle.setBottomBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setRightBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setTopBorderColor(IndexedColors.BLACK.getIndex());
        xssfCellStyle.setLeftBorderColor(IndexedColors.BLACK.getIndex());
        return xssfCellStyle;
    }

    /**
     * 文件下载
     * @param request
     * @param response
     * @param file
     * @throws Exception
     */
    private void downLoad(HttpServletRequest request, HttpServletResponse response, File file) throws Exception{
        PrintWriter out = null;
        BufferedInputStream bis = null;
        BufferedOutputStream bos = null;
        try{
            String fileName = file.getName();
            response.reset();
            response.setContentType("application/x-msdownload");
            String userAgent = request.getHeader("User-Agent");
            if ((userAgent.contains("MSIE")) || (userAgent.contains("Trident"))) {
                fileName = URLEncoder.encode(fileName, "UTF-8");
            } else {
                fileName = new String(fileName.getBytes("UTF-8"), "ISO-8859-1");
            }
            response.setHeader("Content-disposition", "attachment;filename=" + fileName);
            InputStream inputStream = new FileInputStream(file);
            byte[] dataByte = new byte[inputStream.available()];
            inputStream.read(dataByte);
            inputStream.close();
            ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(dataByte);
            bis = new BufferedInputStream(byteArrayInputStream);
            bos = new BufferedOutputStream(response.getOutputStream());
            byte[] buff = new byte[2048];
            int r;
            while ((r = bis.read(buff, 0, buff.length)) != -1){
                bos.write(buff, 0, r);
            }
            bis.close();
            bos.close();
        }catch (Exception localException) {
        }
    }

    /**
     * 校验配置与DTO类属性是否兼容
     *
     * @param sysImpTemplateDTO   excel配置
     * @param sysImpColumnFiledResDTOList
     * @return  Map<String, Object> flag: PlatformConstant.OpResult.success/failure; msg: 显示信息
     */
    private Map<String, Object> checkConfig(SysExcelTemplateDTO sysImpTemplateDTO, List<SysExcelColumnDTO> sysImpColumnFiledResDTOList) {
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            String configCode = sysImpTemplateDTO.getCode();
            SysExcelSheetDTO sysImpSheetTableDTO = sysExcelSheetAPI.findColumntDtoByTemplateId(sysImpTemplateDTO.getId());
            Class dtoCls = Class.forName(sysImpSheetTableDTO.getSheetName());
            StringBuffer errorLog = new StringBuffer();
            for (SysExcelColumnDTO prop : sysImpColumnFiledResDTOList) {
                try {
                    Field field = dtoCls.getDeclaredField(prop.getField());
                    if (field.getType().getSimpleName().equals("Date")) {
                        if (! SysExcelConstant.DataBaseFieldType.DATE.getValue().equals(prop.getFieldtype())) {
                            errorLog.append(String.format("%s对应的导入属性【%s】类型与DTO实体类的属性类型不兼容！", configCode, prop.getField()));
                        }
                    } else if (field.getType().getSimpleName().equals("Integer") || field.getType().getSimpleName().equals("int") ||
                            field.getType().getSimpleName().equalsIgnoreCase("Long") || field.getType().getSimpleName().equalsIgnoreCase("Float") ||
                            field.getType().getSimpleName().equalsIgnoreCase("Double") || field.getType().getSimpleName().equalsIgnoreCase("BigDecimal")) {
                        if (! SysExcelConstant.DataBaseFieldType.NUMBER.getValue().equals(prop.getFieldtype())) {
                            errorLog.append(String.format("%s对应的导入属性【%s】类型与DTO实体类的属性类型不兼容！", configCode, prop.getField()));
                        }
                    }
                }catch (NoSuchFieldException e){
                    if (errorLog == null) {
                        errorLog = new StringBuffer("");
                    }
                    errorLog.append(configCode).append("对应的导入属性配置【").append(prop.getFieldDesc()).append("】在DTO实体类中不存在！");
                }
            }
            result.put("flag", PlatformConstant.OpResult.success);
            if (errorLog.length() > 0) {
                result.put("flag", PlatformConstant.OpResult.failure);
                result.put("msg", errorLog.toString());
            }
        } catch (Exception e) {
            e.printStackTrace();
            LOGGER.error("checkConfig方法校验Excel配置出错", e);
            result.put("flag", PlatformConstant.OpResult.failure);
            result.put("msg", "校验Excel配置出错！" + e.getMessage());
        }
        return result;
    }

    /**
     * 获取数据导入页面-dto方式
     * @param templateCode
     * @return
     */
    @RequestMapping(value = "/togetExcelPageOfDto/{templateCode}")
    public ModelAndView togetExcelPageOfDto(HttpServletRequest request, @PathVariable("templateCode") String templateCode) throws Exception{
        ModelAndView modelAndView = new ModelAndView("avicit/platform6/console/imp/excel/ExcelImport");
        modelAndView.addObject("templateCode", templateCode);
        return modelAndView;
    }

    /**
     * 创建多级目录文件
     *
     * @param path 文件路径
     * @throws IOException
     */
    private void createFile(String path) throws IOException {
        if (org.apache.commons.lang.StringUtils.isNotEmpty(path)) {
            File file = new File(path);
            if (!file.getParentFile().exists()) {
                file.getParentFile().mkdirs();
            }
            file.createNewFile();
        }
    }

    /**
     * 下载错误文件
     * @param map
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value="/downErrorFile")
    public String toErrorDown(ModelMap map, HttpServletRequest request) throws Exception{
        String sfileName =  request.getParameter("fileName");// URLDecoder.decode(fileName,"utf-8");
        sfileName = URLDecoder.decode(sfileName,"utf-8");
        String downType = request.getParameter("downType");
        String bathPath = request.getSession().getServletContext().getRealPath("/") + "import/errorfile/";
        File file = new File(bathPath,sfileName);
        if(!file.exists()){
            return "文件不存在";
        }
        if(StringUtils.contains(file.getAbsolutePath(), "..\\")|| StringUtils.contains(file.getAbsolutePath(), "..//")){
            return "文件名包含非法字符，请检查路径";
        }
        LOGGER.info("导入excel错误文件路径为【{}】",file.getAbsolutePath());
        map.put("filePath",file);
        map.put("downType",downType);
        return  "file.down";
    }

    /**
     * 获取导入页面
     * @param request
     * @param templateCode
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/toExcelImportPage/{templateCode}")
    public ModelAndView toExcelImportPage(HttpServletRequest request, @PathVariable("templateCode") String templateCode) throws Exception{
        ModelAndView modelAndView = new ModelAndView("avicit/platform6/console/excel/common/SysExcelImportPage");
        SysExcelTemplateDTO sysImpTemplateDTO = sysExcelTemplateAPI.selectOneTemplateDto(templateCode, "0");
        modelAndView.addObject("templateCode", templateCode);
        if (sysImpTemplateDTO != null) {
            modelAndView.addObject("manageStyle", sysImpTemplateDTO.getManageStyle());
        }
        return modelAndView;
    }

    /**
     * 进入导入导出配置管理页面
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/toExcelManagePage")
    public ModelAndView toExcelManagePage(){
        ModelAndView modelAndView = new ModelAndView("avicit/platform6/console/excel/common/SysExcelManage");
        return modelAndView;
    }
}
