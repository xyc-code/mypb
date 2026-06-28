if($.jgrid){
	$.jgrid.extend({
		saveOrEditDtoToRedis: function(option) {
			var jqGridID =  this.jqGrid("getGridParam","id");
			var jqGridUrl =  this.jqGrid("getGridParam","url");
			var self = this;
			var validateObject = {
				status : true
			};
			var jsonColumn=JSON.parse(option.columnArrayJson);
			for (var optionKey in jsonColumn) {
				if(jsonColumn[optionKey]["columnWidth"]<20){
					validateObject["status"] = false;
					validateObject["message"] = '列【'+ jsonColumn[optionKey]["columnLabel"]+ '】宽度不能小于20';
				}
			}
			if(!validateObject.status) {
				layer.alert('保存失败！'+validateObject["message"], {
						icon: 7,
						area: ['400px', ''],
						closeBtn: 0
					}
				);
				return;
			}
			avicAjax.ajax({
				url: 'platform/SysDatatablesController/saveOrEditDtoToRedis',
				data: {
					tableName : jqGridUrl + "/" + jqGridID, columns : option.columnArrayJson
				},
				async:false,
				type: 'post',
				dataType: 'json',
				success: function(r) {
					if (r.flag === "success") {
						self.jqGrid("setGridWidth", oldObject.width);
						self.jqGrid().trigger("reloadGrid");
						layer.msg('保存成功！');
					} else {
						layer.alert('保存失败！' + r.error,{
								icon: 7,
								area: ['400px', ''],
								closeBtn: 0
							}
						);
					}
				}
			});
		},
		deleteDtoToRedis: function() {
			var jqGridID =  this.jqGrid("getGridParam","id");
			var jqGridUrl =  this.jqGrid("getGridParam","url");
			var jqGridWidth = this.jqGrid("getGridParam","width");
			var gridParam = this.getGridParam();
			var self = this;
			avicAjax.ajax({
				url: 'platform/SysDatatablesController/deleteDtoToRedis',
				data: {
					tableName : jqGridUrl + "/" + jqGridID
				},
				async:false,
				type: 'post',
				dataType: 'json',
				success: function(r) {
					if (r.flag === "success") {
						gridParam.shrinkToFit = oldObject["oldShrinkToFit"];
						var cm = gridParam.colModel;
						var widthSum = 0;
						var remapOldIndex =[];
						// 重置列显隐
						for(var i = 0; i < oldObject["oldModel"].length; i++){
							var columnShow = oldObject["oldModel"][i].hidden;
							if (columnShow) {
								widthSum = oldObject["oldModel"][i].width*1
								self.setGridParam().hideCol(oldObject["oldModel"][i].name);
							} else {
								self.setGridParam().showCol(oldObject["oldModel"][i].name);
							}
							remapOldIndex.push(cm.map(function (item){return item.name}).indexOf(oldObject["oldModel"][i].name));
						}
						//重置列顺序显示
						self.setGridParam().remapColumns(remapOldIndex, true, false);
						//重置宽度
						if(oldObject["oldShrinkToFit"]){
							$(".ui-jqgrid-bdiv").css("overflow-x","hidden")
							$.each(oldObject.oldModel,function (index,item) {
								cm[index]['widthOrg'] = item['width']*1;
								cm[index]['width'] = item['width']*1;
							})
						}else{
							self.jqGrid("setGridWidth",oldObject.width);
							if(widthSum>jqGridWidth){
								gridParam.shrinkToFit = false;
								$(".ui-jqgrid-bdiv").css("overflow-x","auto")
								self.jqGrid(gridParam).trigger("reloadGrid");
								setColWidth(jqGridID,cm);
								return false;
							}else{
								gridParam.shrinkToFit = true;
								$(".ui-jqgrid-bdiv").css("overflow-x","hidden")
							}
						}
						self.jqGrid(gridParam).trigger("reloadGrid");
					}
				}
			});
		},
		getColumnByUserIdAndTableName: function(){
			var self = this;
			var gridParam = self.getGridParam();
			var jqGridID =  this.jqGrid("getGridParam","id");
			var jqGridUrl =  this.jqGrid("getGridParam","url");
			var jqGridWidth =  this.jqGrid("getGridParam","width");
			var cm = this.jqGrid("getGridParam","colModel");
			if(oldObject === null){
				oldObject = {
					width:jqGridWidth,
					oldModel : $.extend(true,[],cm),
					oldShrinkToFit : gridParam["shrinkToFit"]
				}
			}
			$.ajax({
				url: 'platform/SysDatatablesController/getColumnByUserIdAndTableName',
				data : {tableName : jqGridUrl + "/" + jqGridID},
				type : 'post',
				dataType : 'json',
				async:false,
				success : function(r){
					if (r.flag === 'success') {
						oldObject.status = true;
						var remapOldIndex = {};
						/*控制列显隐*/
						for(var i = 0; i < cm.length; i++){
							if(r[cm[i].name]){
								var columnShow = r[cm[i].name].columnShow;
								cm[i].width = r[cm[i].name].columnWidth*1;
								cm[i].widthOrg = r[cm[i].name].columnWidth*1;
								if (columnShow === "false") {
									self.setGridParam().hideCol(cm[i].name);
								} else {
									self.setGridParam().showCol(cm[i].name);
								}
							}
							remapOldIndex[cm[i].name] = i;
						}
						var obj = shortTableColumn(cm, r, remapOldIndex);
						self.setGridParam().remapColumns(obj.remapIndex, true, false);
						gridParam.colModel = obj.remapCols;
					}
					if(oldObject.status){
						/* 所有显示列的总和 */
						var widthSum = 0
						for(var m = 0; m < cm.length; m++){
							if (cm[m]['hidden']===undefined||!cm[m]['hidden']) {
								widthSum+=cm[m].width*1;
							}
						}
						/* 当列超过屏幕宽度加入滚动条，当列宽总和小于屏幕宽度 自适应 */
						if(!oldObject["oldShrinkToFit"]){
							if(widthSum>document.documentElement.clientWidth){
								gridParam.shrinkToFit = false;
								$(".ui-jqgrid-bdiv").css("overflow-x","auto")
								self.jqGrid("setGridWidth",oldObject.width);
								self.jqGrid(gridParam).trigger("reloadGrid");
								setColWidth(jqGridID,gridParam.colModel);
								return false;
							}else{
								gridParam.shrinkToFit = true;
								$(".ui-jqgrid-bdiv").css("overflow-x","hidden")
							}
						}
						self.jqGrid("setGridWidth",oldObject.width);
						self.jqGrid(gridParam).trigger("reloadGrid");
					}

				}
			});
		}
	});
	var oldObject = null;
	/**
	 * 排序
	 * @param cols 表格
	 * @param r 保存数据
	 * @param oldIndexs 原下标顺序
	 */
	function shortTableColumn(cols, r, oldIndexs) {
		var indexs = [],remapCols = [];
		for (var i = 0; i < cols.length - 1; i++) {
			for (var j = 0; j < cols.length - i -1; j++) {
				if((typeof(cols[j].hasInSetting) !='undefined' && cols[j].hasInSetting != true) || cols[j].name === 'cb'
					|| cols[j].name==='subgrid' || cols[j].name==='rn'
					|| cols[j].name=== 'ID' || cols[j].name === 'id' ||
					cols[j].name === 'VERSION' || cols[j].name === 'version' || cols[j].hidedlg){
					continue;
				}
				var short1 = 99;	// 无数据, 默认最后
				var short2 = 99;	// 无数据, 默认最后
				if(r[cols[j].name]){
					short1 = parseInt(r[cols[j].name].attribute01);
				}
				if(r[cols[j + 1].name]){
					short2 = parseInt(r[cols[j + 1].name].attribute01);
				}
				if (short1 > short2) {
					var temp = cols[j];
					cols[j] = cols[j + 1];
					cols[j + 1] = temp;
				}
			}
		}
		// 已排序后的新表格顺序循环
		for (var i = 0; i < cols.length; i ++) {
			// 获取原下标
			indexs.push(oldIndexs[cols[i].name]);
			remapCols.push(cols[i]);
		}
		return {remapCols: remapCols, remapIndex: indexs};
	}
	function setColWidth(jqGridID,model) {
		for(var i = 0; i < model.length; i++){
			$("#"+jqGridID+"_"+model[i].name).css("width",model[i].width);
			$("#"+jqGridID+" tr:first-child td:nth-child("+(i+1)+") ").css("width",model[i].width)
		}
	}
	//解决IE8下没有indexOf方法和map方法
	if (!Array.prototype.map) {
		Array.prototype.map = function(callback, thisArg) {
			var T, A, k;
			if (this == null) {
				throw new TypeError(" this is null or not defined");
			}
			var O = Object(this);
			var len = O.length >>> 0;
			if (Object.prototype.toString.call(callback) != "[object Function]") {
				throw new TypeError(callback + " is not a function");
			}
			if (thisArg) {
				T = thisArg;
			}
			A = new Array(len);
			k = 0;
			while(k < len) {
				var kValue, mappedValue;
				if (k in O) {
					kValue = O[ k ];
					mappedValue = callback.call(T, kValue, k, O);
					A[ k ] = mappedValue;
				}
				k++;
			}
			return A;
		};
	}
	if (!Array.indexOf) {
		Array.prototype.indexOf = function (obj) {
			for(var i = 0;i < this.length;i++){
				if (this[i] == obj) {
					return i;
				}
			}
			return -1;
		}
	}
}

$(function(){
    $(function(){
    	$(function(){
    	  // 3层深度，保证脚本执行再最后面
    	  var funPlaceholder = function(element) {
		    	element.each(function(){
		    		var placeholder = '',that=$(this);
			    	if (element && !("placeholder" in document.createElement("input")) && (placeholder = that.attr("placeholder"))){
			    		that.on('focus',function(){
			    			if (that.val() === placeholder) {
			    	            that.val("");
			    	        }
			    	        that.css('color','');
			    		}).on('blur',function(){
			    			if (that.val() === "") {
			    	            that.val(placeholder);
			    	            that.css('color','graytext');
			    	        }
			    		});
			    	    //样式初始化
			    	    if (that.val() === "") {
			    	        that.val(placeholder);
			    	        that.css('color','graytext');
			    	    }
			    	}
		    	});
			};
			/* 提示信息兼容  start */
			funPlaceholder($('[placeholder]'));
    		/* 提示信息兼容  end */

    		/* 输入框图标点击触发获取焦点 */
			$('.form_commonTable,.form_commonTable1').each(function(){
                $(this).find(".input-group-addon").unbind("click.auto").bind("click.auto",function(){
                    var disabled = $(this).parent().find('input[type="text"]').attr("disabled");
                    if(disabled == undefined){
						$(this).parent().find('input[type="text"]').trigger('focus');
					}
				});
			});
    	});
	});
});