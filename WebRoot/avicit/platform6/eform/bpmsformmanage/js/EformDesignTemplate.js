
function EformDesignTemplate(designTemplateArea, designTemplateDiv) {
    this.designTemplateArea = designTemplateArea;
    this.designTemplateDiv = designTemplateDiv;
	this.selectedEformTypeId = null;
    this.init.call(this);
}
//初始化操作
EformDesignTemplate.prototype.init = function () {
    var _this = this;

    var template = $(
          '<div class="eform-item" id="">'
            + '<div class="eform-item-title" title="" data-toggle="popover" data-container="body" data-placement="auto bottom">'
                + '<i class="fa fa-file-code-o" style="color: 0066cc"></i>'
            + '</div>'
            + '<div class="eform-item-bottom">'
                + '<span class="eform-item-bottom-name" title="模块">模块</span>'
                + '<span class="eform-item-bottom-btn">'
                    + '<i class="glyphicon glyphicon-option-vertical"></i>'
                + '</span>'
            + '</div>'
            + '<div class="eform-item-tools" style="display: none;">'
                + '<div class="viewTemplate"><i class="glyphicon glyphicon-pencil"></i>预览模版</div>'
                + '<div class="deleteTemplate"><i class="glyphicon glyphicon-trash"></i>删除模版</div>'
            + '</div>'
        + '</div>'
    );

    this.template = template;
};
//页面新建一个EformDesignTemplate
EformDesignTemplate.prototype.setDesignTemplate = function (data) {
    var _this = this;
    var designTemplate = _this.template.clone();

    //相关属性
	designTemplate.attr("id", data.id);

    //显示属性
	designTemplate.find(".eform-item-bottom-name").attr("title", data.templateName);
    if(data.templateName.length > 7) {
		designTemplate.find(".eform-item-bottom-name").text(data.templateName.substring(0, 5)+"...");
    }
    else {
		designTemplate.find(".eform-item-bottom-name").text(data.templateName);
    }


    var _formContent = '';
    _formContent = '<table width="180px" border="0" style="font-size:12px;"  align="center">'
        +'<tr><td width="40%" height="25"><lable>模块名称:</lable></td><td><span class="eform-item-popover" title="'+data.templateName+'">'+data.templateName+'</span></td></tr>'
        +'<tr><td width="40%" height="25"><lable>添加人:</lable></td><td><span class="eform-item-popover" title="'+data.createdByName+'">'+data.createdByName+'</span></td></tr>'
        +'<tr><td width="40%" height="25"><lable>添加时间:</lable></td><td><span class="eform-item-popover" title="'+format(data.creationDate)+'">'+format(data.creationDate)+'</span></td></tr>'
        +'</table>';
	designTemplate.find(".eform-item-title").attr("data-content", _formContent);

	designTemplate.find("[data-toggle='popover']").popover({ trigger: "manual" , html: true, animation:false})
        .on("mouseenter", function () {
            var _this = this;
            $(this).popover("show");
            $(".popover").on("mouseleave", function () {
                $(_this).popover('hide');
            });
        }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide");
            }
        }, 300);
    });

    //模块点击事件绑定
	designTemplate.find(".eform-item-title").click(function () {
		_this.clickTitle(data.id,data.formContentStr,data.tableCss);
        return false;
    });

    //显隐工具栏按钮事件绑定
	designTemplate.find(".eform-item-bottom-btn").click(function () {
        $(".eform-item-tools").hide();
		designTemplate.find('.eform-item-tools').hide();
		designTemplate.find('.eform-item-tools').toggle(200);
        return false;
    });
    $('body').click(function () {
		designTemplate.find('.eform-item-tools').hide();
    });

    //删除
	designTemplate.find(".deleteTemplate").click(function () {
        _this.deleteTemplate(data.id, data.templateName, data.typeId);
        return false;
    });
	//预览
	designTemplate.find(".viewTemplate").click(function () {
		parent.formEditor.previewtemplate("bootstrap",data.formContentStr,data.tableCss);
        return false;
    });

	$('#' + _this.designTemplateDiv).append(designTemplate);
};

//预览模板
EformDesignTemplate.prototype.previewtemplate = function (id){
	var data = $("#designTemplateModel").jqGrid("getRowData",id);
	parent.formEditor.previewtemplate("bootstrap",data.formContentStr,data.tableCss);
};

//点击卡片将模板回写表单
EformDesignTemplate.prototype.clickTitle = function (id,sourceContent,tinymceContentStyle){
	parent.tinymce.activeEditor.setContent(sourceContent);
	parent.formEditor.setContentStyle(tinymceContentStyle);
	parent.layer.close(parent.formEditor.templateDialog);
};

//点击卡片将模板回写表单(列表超链接事件)
EformDesignTemplate.prototype.slelectTemplate = function (id){
	var data = $("#designTemplateModel").jqGrid("getRowData",id);
	eformDesignTemplate.clickTitle(id,data.formContentStr,data.tableCss);
};


/**
 * 删除模板
 */
EformDesignTemplate.prototype.deleteTemplate = function (templateId,templateName,typeId) {
	var _this = this;

	layer.confirm('确认要删除该模板吗', function (index) {
		$.post("platform/eform/bpmsClient/deleteTemplate.json", "id=" + templateId,
			function (backData, status) {
				if (backData.success == true) {
					if(parent.formEditor.templateTypeId == typeId && parent.formEditor.templateName == templateName){
						parent.formEditor.templateTypeId = "";
						parent.formEditor.templateName = "";
						parent.$("#templateTypeId").val(null);
						parent.$("#typeName").val(null);
						parent.$("#templateName").val(null);
					}
					layer.msg('操作成功！', {icon: 1});
					$("#" + templateId).remove();
					if(eformDesignTemplateModel != undefined){
						eformDesignTemplateModel.reLoad(typeId);
					}
				}
				else {
					layer.msg('操作失败！', {icon: 2});
				}
			}
		);
	});
};

//获取电子表单模块列表
EformDesignTemplate.prototype.getComponentList = function (selectedNodeId) {
    var _this = this;
	_this.selectedEformTypeId = selectedNodeId;
    if(showType=="2"){
		if(eformDesignTemplateModel==null || eformDesignTemplateModel==undefined){
			var searchSubNames = [];
			var searchSubTips = [];
			searchSubNames.push("componentName");
			searchSubTips.push("模块名称");
			$('#designTemplateModel_keyWord').attr('placeholder', '请输入' + searchSubTips[0]);
			var designTemplateModelGridColModel = [
				{
					label : 'id',
					name : 'id',
					key : true,
					hidden : true
				}			
				, {
					label : '模版名称',
					name : 'templateName',
					width : 40,
					align : 'left',
					sortable : true,
					formatter: formatTemplateName
				}
				,
				{
					label : '创建人',
					name : 'createdByName',
					width : 50,
					align : 'center',
					sortable : true
				}
				,
				{
					label : '创建时间',
					name : 'creationDate',
					width : 50,
					align : 'center',
					sortable : true,
					formatter:format
				}
				,  {
					label : '操作',
					name : 'opt',
					width : 35,
					align : 'center',
					sortable : false,
					formatter:getDesignTemplateButtons
				},
				{
					label : 'formContentStr',
					name : 'formContentStr',
					hidden : true
				},
				{
					label : 'tableCss',
					name : 'tableCss',
					hidden : true
				}

			];

			var url = "platform/eform/bpmsManageController/getDesignTemplateByPage";
			eformDesignTemplateModel = new EformDesignTemplateModel('designTemplateModel', url, "formSub", designTemplateModelGridColModel, 'searchDialogSub', selectedNodeId,
					"", searchSubNames, "designTemplateModel_keyWord");
		}else{
			eformDesignTemplateModel.reLoad(selectedNodeId);
		}

        $(window).resize();
	}else{
	    $('#' + _this.designTemplateDiv).empty();
	    $.ajax({
			url: "platform/eform/bpmsManageController/getDesignTemplateList",
	        data: "selectedNodeId=" + selectedNodeId,
	        type: "post",
	        async: false,
	        dataType: "json",
	        success: function (backData) {
	            var templateList = backData.data;
	
	            for (var i = 0; i < templateList.length; i++) {
	                _this.setDesignTemplate(templateList[i]);
	            }
	        }
	    });
	}
};

//检索模板
EformDesignTemplate.prototype.onseach = function(keyCode,seachValue){
	var _this = this;
	if (keyCode == '13') {
		if(showType=="2"){
			eformDesignTemplateModel.searchData(seachValue);
		}else{
			$('#' + _this.designTemplateDiv).empty();
			$.ajax({
				url: "platform/eform/bpmsManageController/getDesignTemplateList",
				data: {
					selectedNodeId: _this.selectedEformTypeId,
					seachValue: seachValue
				},
				type: "post",
				async: false,
				dataType: "json",
				success: function (backData) {
					var templateList = backData.data;

					for (var i = 0; i < templateList.length; i++) {
						_this.setDesignTemplate(templateList[i]);
					}
				}
			});
		}
	}
}


/**
 * 格式化时间
 * @param time
 * @returns {string}
 */
function format(time){
	if(time){
		if (typeof(time)=="string") {
			time = time.replace(/\-/g, "\/");
		}
		var datetime = new Date(time);
		var year = datetime.getFullYear();
		var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
		var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
		return year + "-" + month + "-" + date;
	}
	return '';
}

/**
 * 快捷按钮
 * @param cellvalue
 * @param options
 * @param rowObject
 * @returns {string}
 */
function getDesignTemplateButtons(cellvalue, options, rowObject) {
	return '<a href="javascript:void(0)" class="glyphicon glyphicon-eye-open"'
		+'   title="预览模板" onClick="eformDesignTemplate.previewtemplate(\''+rowObject.id+'\')"></a>&nbsp;&nbsp;'
		+'  <a href="javascript:void(0)" class="glyphicon glyphicon-trash"'
		+'   title="删除模板" onClick="eformDesignTemplate.deleteTemplate(\''+rowObject.id+'\',\''+rowObject.templateName+'\',\''+rowObject.typeId+'\')"></a>';
}

/**
 * 格式化列表中的模板名称
 * @param cellvalue
 * @param options
 * @param rowObject
 * @returns {string}
 */
function formatTemplateName(cellvalue, options, rowObject){
	return '<a href="javascript:void(0)" title="' + cellvalue + '" onClick="eformDesignTemplate.slelectTemplate(\''+rowObject.id+'\')">'+cellvalue+'</a>';
}

