$(function(){
    jqgridInit();

    $('#jslist_insert').bind('click', function() {
        insert();
    });

    $("#jslist_del").bind('click',function(){
        del();
    });
});

var urlProperty = {
    mydata : [
    ],
    dataGridColModel:[
        {
            label:'主表字段',
            name:'mainCol',
            width : 50,
            editable:false,
            hidden:true
        },
        {
            label:'主表字段',
            name:'mainColName',
            width : 50,
            editable:true,
            edittype:"custom",
            formatter:formatDictionaryTableData,
            editoptions: {custom_element:selectElem, custom_value:selectValue, forId:'mainCol',
                value: valueTargetNameFunc() }
        },
        {
            label:'返回字段',
            name:'returnCol',
            width : 50,
            editable:true
        }
    ]
};

function valueTargetNameFunc(){
    var nameJson= {};
    var doms = parent.editorUtil.getAllDomAttr();
    for (var dom in doms){
        if (dom != "clone" && (doms[dom].colType!="NOT_DB_COL_ELE"||doms[dom].domType == "virtual-box")){
            var id = doms[dom].domId||doms[dom].colName;
            if(doms[dom].domType == "dept-box"
                || doms[dom].domType == "user-box"
                || doms[dom].domType == "select-box"
                || doms[dom].domType == "linkage-box"
                || doms[dom].domType == "role-box"
                || doms[dom].domType == "group-box"
                || doms[dom].domType == "position-box"
                || doms[dom].domType == "dictionary-box"
                || doms[dom].domType == "url-box"){
                nameJson[id] = doms[dom].colLabel+"(值)";
                nameJson[id + "Name"] = doms[dom].colLabel;
            }else{
                nameJson[id] = doms[dom].colLabel || doms[dom].title || doms[dom].domId;
            }
            //nameJson[doms[dom].colName] = doms[dom].colLabel;
        }

    }
    return nameJson;
}

function formatDictionaryTableData(cellvalue, options, rowObject){
    if(cellvalue && cellvalue != ''){
        return cellvalue;
    }else{
        var rowId = options.rowId;
        var datas = options.colModel.editoptions.value;
        var forId = options.colModel.editoptions.forId;
        var code = rowObject[forId];
        return datas[code] ? datas[code] : '';
    }
}

function jqgridInit(){
    var list = $('#paralist', window.parent.document).val();
    if (list){
        list = $.parseJSON(list);
    }else{
        list = [];
    }

    jQuery("#propertytable").jqGrid(
        {
            datatype: "local",
            data:list,
            toolbar: [false,'top'],//启用toolbar
            colModel: urlProperty.dataGridColModel,//表格列的属性
            height:$(window).height() - 30,//初始化表格高度
            scrollOffset: 20, //设置垂直滚动条宽度
            altRows:true,//斑马线
            rowNum:10000,
            styleUI : 'Bootstrap', //Bootstrap风格
            viewrecords: true, //是否要显示总记录数
            multiselect: true,//可多选
            autowidth: true,//列宽度自适应
            responsive:true,//开启自适应
            cellEdit: true,
            cellsubmit: 'clientArray',
            loadComplete:function(){
                var len=$("#propertytable").getGridParam("width");
                $("#propertytable").setGridWidth(len);
            },
            onCellSelect:function (rowid,iCol,cellcontent,e) {
            }
        });

    $('#propertytable').validateJqGrid("addValidate","mainCol","required");
    $('#propertytable').validateJqGrid("addValidate","returnCol","required");

}
var newRowIndex = 0;
var newRowStart = "new_row";

function insert(){
    $('#propertytable').jqGrid('endEditCell');
    var newRowId = newRowStart + newRowIndex;
    var parameters = {
        rowID : newRowId,
        initdata : {
        },
        position :"first",
        useDefValues : true,
        useFormatter : true,
        addRowParams : {extraparam:{}}
    }
    $('#propertytable').jqGrid('addRow', parameters);
    newRowIndex++;
};


function del(){
    $("#propertytable").jqGrid('endEditCell');
    var rows = $("#propertytable").jqGrid('getGridParam','selarrrow');
    var ids = [];
    var l =rows.length;
    if(l>0){
        layer.confirm('确定要删除该数据吗？',{icon:2,title:"请确认：",area:['400px','']},function(index){
            for(var i=0;i<l;i++){
                $("#propertytable").jqGrid('delRowData',rows[i]);
            }
            layer.close(index);
        });
    }else{
        layer.alert('请选择要删除的记录！', {
                icon: 7,
                area: ['400px', ''], //宽高
                closeBtn: 0
            }
        );
    }
    $("#propertytable").trigger("reloadGrid");
}


function validateDataJsonList(){
    return $('#propertytable').validateJqGrid("validate");
}

function getDataJsonList() {
    $('#propertytable').jqGrid('endEditCell');
    var dataJsonList = $("#propertytable").jqGrid("getRowData");
    return dataJsonList;
}