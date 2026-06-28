<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css"
          href="css/style.css" />
    <link rel="stylesheet" type="text/css"
          href="../../../../static/h5/layer-v2.3/layer/skin/layer.css">
    <script type="text/javascript"
            src="../../../../static/h5/jquery/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="./js/onlineapi.js"></script>
    <script type="text/javascript"
            src="js/clipboard.min.js"></script>

</head>

<body>
    <div class="codeGenerator">
        <div id="formManage" class="secondMenuStatus">
            <div class="contentTitle">
                <h2>BpmsControlUtils</h2>
                <div class="custom-block tip">
                    <p class="custom-block-title">说明</p>
                    <p>电子表单增删改查接口</p>
                </div>
            </div>
            <div class="tableStructure">
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th width="20%">返回值</th>
                            <th width="40%">方法名称</th>
                            <th width="40%">方法描述</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>int</td>
                            <td>addData</td>
                            <td>增加业务数据操作对象</td>
                        </tr>
                        <tr>
                            <td>int</td>
                            <td>deleteData</td>
                            <td>删除业务数据操作对象</td>
                        </tr>
                        <tr>
                            <td>int</td>
                            <td>updateData</td>
                            <td>更新业务数据操作对象</td>
                        </tr>
                        <tr>
                            <td>Map&lt;String, Object&gt;</td>
                            <td>getData</td>
                            <td>查询业务数据操作对象</td>
                        </tr>
                        <tr>
                            <td>List&lt;Map&lt;String, Object&gt;&gt;</td>
                            <td>getDataList</td>
                            <td>查询业务数据操作对象列表</td>
                        </tr>
                    </tbody>
                </table>
                <div class="singlyCode" id="addData">
                    <h3>addData</h3>
                    <ul>
                        <li>根据业务数据操作对象新增。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">tableData</td>
                                <td>业务数据操作对象</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">int</td>
                                <td>受影响的行数</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#addDataCopy"></a>
                        <div id="addDataCopy">
                            public void addData() {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;List&lt;TableColData&gt; tableColDataList = new ArrayList&lt;TableColData&gt;();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;TableColData col1 = new TableColData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col1.setColName("ID");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col1.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col1.setColValue(id);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableColDataList.add(col1);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;TableColData col2 = new TableColData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col2.setColName("NAME");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col2.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col2.setColValue("测试名称");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableColDataList.add(col2);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;TableColData col3 = new TableColData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col3.setColName("SORT");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col3.setColJdbcType(EformConstant.ColJdbcTypeEnum.DECIMAL);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col3.setColValue(666);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableColDataList.add(col3);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;TableColData col4 = new TableColData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col4.setColName("CREATION_DATE");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col4.setColJdbcType(EformConstant.ColJdbcTypeEnum.TIMESTAMP);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col4.setColValue(new Date());<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableColDataList.add(col4);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;TableData tableData = new TableData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setTableName("EFORM_TYPE");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setDataSourceId("dataSource");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setTableColDataList(tableColDataList);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;Integer result = bpmsControlUtils.addData(tableData);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;if (result == 1) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("添加数据成功！");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>

                </div>
                <div class="singlyCode" id="deleteData">
                    <h3>deleteData</h3>
                    <ul>
                        <li>根据业务数据操作对象删除。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">tableData</td>
                                <td>业务数据操作对象</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">int</td>
                                <td>受影响的行数</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#deleteDataCopy"></a>
                        <div id="deleteDataCopy">
                            public void deleteData() {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;TableData tableData = new TableData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setTableName("EFORM_TYPE");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setPrimaryKeyValue(id);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;Integer result = bpmsControlUtils.deleteData(tableData);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;if (result == 1) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("删除数据成功！");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>

                </div>
                <div class="singlyCode" id="updateData">
                    <h3>updateData</h3>
                    <ul>
                        <li>根据业务数据操作对象更新。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">tableData</td>
                                <td>业务数据操作对象</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">int</td>
                                <td>受影响的行数</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#updateDataCopy"></a>
                        <div id="updateDataCopy">
                            public void updateData() {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;TableData tableData = new TableData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setTableName("EFORM_TYPE");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setPrimaryKeyValue(id);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;Map&lt;String, Object&gt; data = bpmsControlUtils.getData(tableData);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;String name = (String) data.get("NAME");<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;List&lt;TableColData&gt; tableColDataList = new ArrayList&lt;TableColData&gt;();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;TableColData col = new TableColData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col.setColName("NAME");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col.setColValue(name + "test123");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableColDataList.add(col);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setTableColDataList(tableColDataList);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;Integer result = bpmsControlUtils.updateData(tableData);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;if (result == 1) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("修改数据成功！");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>

                </div>
                <div class="singlyCode" id="getData">
                    <h3>getData</h3>
                    <ul>
                        <li>查询业务数据操作对象。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">tableData</td>
                                <td>业务数据操作对象</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">Map&lt;String, Object&gt;</td>
                                <td>业务数据操作对象信息</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#getDataCopy"></a>
                        <div id="getDataCopy">
                            public void getData() {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;TableData tableData = new TableData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setTableName("EFORM_TYPE");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setPrimaryKeyValue(id);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;Map&lt;String, Object&gt; data = bpmsControlUtils.getData(tableData);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;if (data != null) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("获取数据成功！");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info(JsonHelper.getInstance().writeValueAsString(data));<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>

                </div>
                <div class="singlyCode" id="getDataList">
                    <h3>getDataList</h3>
                    <ul>
                        <li>查询业务数据操作对象列表。</li>
                    </ul>
                    <h4>参数说明：</h4>
                    <table width="60%" border="0" cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>参数类型</th>
                                <th style="text-align: left;">参数名</th>
                                <th>说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>请求参数</td>
                                <td style="text-align: left;">tableData</td>
                                <td>业务数据操作对象</td>
                            </tr>
                            <tr>
                                <td>返回参数</td>
                                <td style="text-align: left;">List&lt;Map&lt;String, Object&gt;&gt;</td>
                                <td>业务数据操作对象列表</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>示例代码：</h5>
                    <div class="exampleCodeFont">
                        <a class="iconCopy btn" href="javascript:void(0)" data-clipboard-action="copy" data-clipboard-target="#getDataListCopy"></a>
                        <div id="getDataListCopy">
                            public void getDataList() {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;List&lt;TableColData&gt; tableColDataList = new ArrayList&lt;TableColData&gt;();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;TableColData col1 = new TableColData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col1.setColName("ID");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col1.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col1.setColValue(id);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col1.setColSelectType(EformConstant.ColSelectTypeEnum.EQUAL);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableColDataList.add(col1);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;TableColData col2 = new TableColData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col2.setColName("NAME");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col2.setColJdbcType(EformConstant.ColJdbcTypeEnum.VARCHAR);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col2.setColValue("试");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col2.setColSelectType(EformConstant.ColSelectTypeEnum.LIKE);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableColDataList.add(col2);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;TableColData col3 = new TableColData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col3.setColName("SORT");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col3.setColJdbcType(EformConstant.ColJdbcTypeEnum.DECIMAL);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col3.setColValue(555);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col3.setColSelectType(EformConstant.ColSelectTypeEnum.MORE_THAN);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableColDataList.add(col3);<br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;TableColData col4 = new TableColData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col4.setColName("CREATION_DATE");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col4.setColJdbcType(EformConstant.ColJdbcTypeEnum.TIMESTAMP);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col4.setColValue("2018-1-1 12:13:14");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;col4.setColSelectType(EformConstant.ColSelectTypeEnum.LESS_THAN);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableColDataList.add(col4);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;TableData tableData = new TableData();<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setTableName("EFORM_TYPE");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setDataSourceId("dataSource");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;tableData.setTableColDataList(tableColDataList);<br/><br/>

                            &nbsp;&nbsp;&nbsp;&nbsp;List&lt;Map&lt;String, Object&gt;&gt; dataList = bpmsControlUtils.getDataList(tableData);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;if (dataList != null) {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info("获取数据列表成功！");<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.info(JsonHelper.getInstance().writeValueAsString(dataList));<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                            }<br/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</body>
<script>
    $(document).ready(function() {
        //点击复制
        textCopy("btn");
        //初始化父页面高度
        initParentHeight();
    })
</script>

</html>