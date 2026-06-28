var MyElement = {
    elecode: "dbfield-box",
    colType:"NOT_DB_COL_ELE",
    dragElement: function () {
    	var dragelement = {};
    	dragelement.name = "外部字段";
    	dragelement.icon = "fa fa-info";
    	return dragelement;
    },
    dropElement: function () {
        return '<input type="text" value="外部数据模型字段">';
    },
    update: function (form, ui) {
        var attrJson = form.serializeObject();
    },

    validateForm:function(eleattr){
        if(!eleattr.db_tableName || !eleattr.db_tableId || !eleattr.db_colName)
        {
            layer.msg('外部字段控件的存储模型、列名称不能为空', {icon: 7});
            return false;
        }

        var regExp = /[\S+]/i;
        if((!eleattr.domId)||(eleattr.domId!=null && !regExp.test(eleattr.domId)))
        {
            layer.msg('外部字段控件页面元素ID属性不能为空', {icon: 7});
            return false;
        }else{
            var value=eleattr.domId,
                regEn = /[`~!@#$%^&*()+<>?:{},.\/;'[\]]/im,
                regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im,
                regCh = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
            if(regEn.test(value) || regCn.test(value) ||regCh.test(value)) {
                layer.msg('外部字段控件页面元素ID属性不能含有特殊字符或中文', {icon: 7});
                return false;
            }
        }
        return true;
    },

    initAttrForm: function (form, attrJson, ui) {


        selectCreatedDbTable = new SelectCreatedDbTable("db_tableId", "db_tableName");
        selectCreatedDbTable.init(function (treeNode) {
            var tableId = treeNode.id;
            var cnname = treeNode.name;
            var tablename = treeNode.tablename;

            $("#db_tableName").val(tablename).trigger("keyup");

            $("#db_colName").val("").trigger("keyup");
            bindDbColName(tableId);
            $("#db_colName").attr('readonly',false);
            $("#db_colName").focus(function(){
            	this.blur();
            });

            $("#db_fk").val("").trigger("keyup");        
            bindDbFk(tableId);
            $("#db_fk").attr('readonly',false);
            $("#db_fk").focus(function(){
            	this.blur();
            });
            $('#span_colName').on('click',function(){
            	$('#db_colName').trigger('click');
        	}) 	
            $('#span_fk').on('click',function(){
            	$('#db_fk').trigger('click');
        	})   
        });

        var domId = ui.attr("id");
        var tablearray = editorUtil.getAllTableAttr(domId);

        if(attrJson != undefined) {
            var json = $.parseJSON(attrJson);
            if(!verifyIsEmpty(json.db_tableName)) {
                bindDbColName(json.db_tableId);
                bindDbFk(json.db_tableId);
            }

            if (json.hasOwnProperty("paralist")){
                var paralist = [], rs = [];
                $("#paraarea").empty();
                if(json.paralist != undefined && json.paralist != ""){
                    paralist = $.parseJSON(json.paralist);
                    for (var i = 0,length=paralist.length; i < length; i++) {
                        var data = paralist[i];
                        var li = $('<li class="item-red clearfix"></li>');
                        var coltypediv = $('<div class="col-xs-3"><i class="ace-icon fa fa-bars"></i></div>');
                        var colLabeldiv = $('<div class="col-xs-9"></div>');
                        colLabeldiv.append('<span class="lbl">' + data.paratypename + '</span>');
                        li.append(coltypediv).append(colLabeldiv);
                        $("#paraarea").append(li);
                        rs.push(data);
                    }
                    $("#paralist").val(JSON.stringify(rs));
                }
            }
        }
        
        $('#span_tableName').on('click',function(){
        	$('#db_tableName').trigger('click');
    	})

        $("#addpara").click(function () {
            var dbId = $("#db_tableId").val();
            if (isEmptyObject(dbId)){
                layer.msg('请先选择数据集！', {icon: 7});
                return false;
            }
            publishDialog = top.layer.open({
                type: 2,
                title: '参数配置',
                skin: 'bs-modal',
                area: ['45%', '85%'],
                maxmin: false,
                content: "avicit/platform6/eform/formdesign/js/plugins/attr-jsp/selectcolumn.jsp",
                btn: ['确定', '取消'],
                success: function(layero, index){
                    var frm = layero.find('iframe')[0].contentWindow;
                    frm.initDbFieldLayout(dbId);
                },
                yes: function(index, layero){
                    var frm = layero.find('iframe')[0].contentWindow;
                    var jsonData = [], rs = [];
                    jsonData = frm.dataJsonList;
                    $("#paraarea").html("");
                    if (jsonData.length > 0) {
                        for (var i = 0,length=jsonData.length; i < length; i++) {
                            var data = jsonData[i].data;
                            var li = $('<li class="item-red clearfix"></li>');
                            var coltypediv = $('<div class="col-xs-3"><i class="ace-icon fa fa-bars"></i></div>');
                            var colLabeldiv = $('<div class="col-xs-9"></div>');
                            colLabeldiv.append('<span class="lbl">' + data.paratypename + '</span>');
                            li.append(coltypediv).append(colLabeldiv);
                            $("#paraarea").append(li);
                            rs.push(data);
                        }
                        $("#paralist").val(JSON.stringify(rs)).trigger("keyup");;
                    } else {
                        $("#paraarea").empty();
                        $("#paralist").val("").trigger("keyup");;
                    }
                    top.layer.close(index);

                },
                no: function(index, layero){
                    layero.close(index);
                }
            });
        });
    }    
};