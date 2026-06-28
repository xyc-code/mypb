var MyElement = {
    elecode: "url-box",
    colType:"VARCHAR2",
    dragElement: function () {
    	var dragelement = {};
    	dragelement.name = "地址选择";
    	dragelement.icon = "fa fa-location-arrow";
    	return dragelement;
    },
    dropElement: function () {
        return '<input type="text" value="地址选择框">';
    },
    update: function (form, ui) {
        var attrJson = form.serializeObject();
    },
    initAttrForm: function (form, attrJson) {
        var _this = this;
        $("#width").parent().css("display", "none");
        $('input[type=radio][name=ynMax]').change(function() {
            if (this.value == 'max') {
                $("#width").parent().css("display", "none");
            }
            else if (this.value == 'setting') {
                $("#width").parent().css("display", "");
            }
        });
        if (attrJson) {
            var json = $.parseJSON(attrJson);
            if(json.ynMax == "max"){
                $("#width").parent().css("display", "none");
            }else if(json.ynMax == "setting"){
                $("#width").parent().css("display", "");
            }

        }

        $('[data-rel=popover]').popover({container:'body'});
        $("#onCallbackEvent").click(function () {
            var _this = this;
            eventEdit(_this, '地址选择回调事件');
        });

        //转化类路径
        $.ajax({
            url: 'platform/eform/eformViewInfoController/getEformClassConfigListByType/2',
            contentType: "application/xml; charset=utf-8",
            type : 'post',
            dataType : 'json',
            async:false,
            success : function(r){
                if (r != null) {
                    var list = $.parseJSON(r.data);
                    var $colDom = $("#userdefinedclass");
                    $colDom.empty();
                    $colDom.append($('<option value=""></option>'));
                    for (var i=0;i<list.length;i++){
                        var $option = $('<option value="'+list[i].classPath+'">'+list[i].className+'</option>');
                        $colDom.append($option);
                    }

                    $colDom.trigger("change");
                }
            }
        });

        $("#addpara").click(function () {
            /*if (isEmptyObject($("#dbid").val())){
                layer.msg('请先选择数据集！', {icon: 7});
                return false;
            }*/
            publishDialog = top.layer.open({
                type: 2,
                title: '外键配置',
                skin: 'bs-modal',
                area: ['45%', '85%'],
                maxmin: false,
                content: "avicit/platform6/eform/formdesign/js/plugins/url-box/urlmapping.jsp",
                btn: ['确定', '取消'],
                yes: function(index, layero){
                    var frm = layero.find('iframe')[0].contentWindow;
                    var jsonData = [], rs = [];

                    if(!frm.validateDataJsonList()){
                        return false;
                    }
                    jsonData = frm.getDataJsonList();


                    $("#paraarea").html("");
                    if (jsonData.length > 0) {
                        for (var i = 0,length=jsonData.length; i < length; i++) {
                            var data = jsonData[i];
                            var li = $('<li class="item-red clearfix"></li>');
                            var coltypediv = $('<div class="col-xs-3"><i class="ace-icon fa fa-bars"></i></div>');
                            var colLabeldiv = $('<div class="col-xs-9"></div>');
                            colLabeldiv.append('<span class="lbl">' + data.mainCol + '</span>');
                            li.append(coltypediv).append(colLabeldiv);
                            $("#paraarea").append(li);
                            rs.push(data);
                        }
                        $("#paralist").val(JSON.stringify(rs));
                        $("#paralist").trigger("keyup");
                    } else {
                        $("#paraarea").empty();
                        $("#paralist").val("");
                        $("#paralist").trigger("keyup");
                    }

                    top.layer.close(index);

                },
                no: function(index, layero){
                    layero.close(index);
                }
            });
        });
    },
    afterInitAttrForm: function(form, attrJson){
        if (attrJson) {
            var json = $.parseJSON(attrJson);
            var paralist = [], rs = [];
            if(json.paralist != undefined && json.paralist != ""){
                paralist = $.parseJSON(json.paralist);
                $("#paraarea").html("");
                if (paralist.length > 0) {
                    for (var i = 0,length=paralist.length; i < length; i++) {
                        var data = paralist[i];
                        var li = $('<li class="item-red clearfix"></li>');
                        var coltypediv = $('<div class="col-xs-3"><i class="ace-icon fa fa-bars"></i></div>');
                        var colLabeldiv = $('<div class="col-xs-9"></div>');
                        colLabeldiv.append('<span class="lbl">' + data.mainCol + '</span>');
                        li.append(coltypediv).append(colLabeldiv);
                        $("#paraarea").append(li);
                        rs.push(data);
                    }
                    $("#paralist").val(JSON.stringify(rs));
                    $("#paralist").trigger("keyup");
                } else {
                    $("#paraarea").empty();
                    $("#paralist").val("");
                    $("#paralist").trigger("keyup");
                }
            }
        }
    },
    validateForm:function(eleattr){
        var regExp = /[\S+]/i;
        if((!eleattr.urlAddress)||(eleattr.urlAddress!=null && !regExp.test(eleattr.urlAddress)))
        {
            layer.msg('地址选择控件URL地址属性不能为空', {icon: 7});
            return false;
        }
        if((!eleattr.userdefinedclass)||(eleattr.userdefinedclass!=null && !regExp.test(eleattr.userdefinedclass)))
        {
            layer.msg('地址选择控件转化类路径属性不能为空', {icon: 7});
            return false;
        }
        if(eleattr.ynMax == "setting" && ((!eleattr.width)||(eleattr.width!=null && !regExp.test(eleattr.width))))
        {
            layer.msg('地址选择控件宽度属性不能为空', {icon: 7});
            return false;
        }
        if(eleattr.ynMax == "setting" && ((!eleattr.height)||(eleattr.height!=null && !regExp.test(eleattr.height))))
        {
            layer.msg('地址选择控件高度属性不能为空', {icon: 7});
            return false;
        }
        return true;
    }
};