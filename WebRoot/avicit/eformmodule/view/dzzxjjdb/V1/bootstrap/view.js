function bpmFormatter(cellvalue, options, rowObject){
   var bussinesid =  rowObject.ID;                                                 
   if(rowObject.PROCESSINSTANCEID !=null && rowObject.PROCESSINSTANCEID!=undefined && rowObject.PROCESSINSTANCEID !=''){ 
   	bussinesid = rowObject.PROCESSINSTANCEID;
   }
   if(rowObject.BUSINESSSTATE_!=null&&rowObject.BUSINESSSTATE_!=""&&rowObject.BUSINESSSTATE_!='undefined'){
	  return "<span class='glyphicon glyphicon-pencil' onclick='javascript: flowUtils.detail(\""+ bussinesid +"\",2);'></span>";
	}else{return '';}
}
function bpmStatusFormatter(cellvalue, options, rowObject){
	  if(cellvalue=='start')return '拟稿中'; if(cellvalue=='active')return '流转中'; if(cellvalue=='ended')return '已完成';return '';
	}
function showButton(value,row,obj){
    /*  SESSION_JD 的值是通用代码  	party_org_type	党组织选举进度*/
    /*  SESSION_TYPE 的值是通用代码  	party_xj_type	党党组织选举类型*/
    if(obj.SESSION_TYPE=="1"){//换届
        /*
        1	换届提醒	10	 	有效
        2	提交请示	20	 	有效
        3	预备人选请示	30	有效
        4	党员大会	40	 	有效
        5	纪委一次会	50	 有效
        6	委员会一次会	60	 有效
        7	调整文件*/

            if(obj.HJTX_STATUS=="未开始"){
                /*换届提醒，未开始，在换届提醒时间的基础上往前推6个月, 系统时间往后推6个月，跟提醒时间相等就显示提醒按钮，要是大于提醒时间就是催办按钮*/

                if(formatYearMonth(new Date())==formatYearMonth(obj.CREA_TIME_DATE)){
                    return  '<a href="javascript:void(0);" style="padding-right: 15px;" onclick="sendMsg(\'hjtx\',\''+obj.ID+'\',\''+format(obj.CREA_TIME_DATE)+'\',\''+obj.PARTY_NAME+'\');">提醒</a>';;
                }
                if(formatYearMonth(new Date())>formatYearMonth(obj.CREA_TIME_DATE)){
                    return  '<a href="javascript:void(0);" style="padding-right: 15px;" onclick="sendMsg(\'hjtxcb\',\''+obj.ID+'\',\''+format(obj.CREA_TIME_DATE)+'\',\''+obj.PARTY_NAME+'\');">催办</a>';;
                }

            }


            if(obj.TJQS_STATUS=="未开始"){
                if(formatYearMonth(new Date())==formatYearMonth(obj.CREA_TIME_DATE_TJ)){
                    return  '<a href="javascript:void(0);" style="padding-right: 15px;" onclick="sendMsg(\'tjqstx\',\''+obj.ID+'\',\''+format(obj.CREA_TIME_DATE_TJ)+'\',\''+obj.PARTY_NAME+'\');">提醒</a>';;
                }
                if(formatYearMonth(new Date())>formatYearMonth(obj.CREA_TIME_DATE_TJ)){
                    return  '<a href="javascript:void(0);" style="padding-right: 15px;" onclick="sendMsg(\'tjqstxcb\',\''+obj.ID+'\',\''+format(obj.CREA_TIME_DATE_TJ)+'\',\''+obj.PARTY_NAME+'\');">催办</a>';;
                }
            }

            if(obj.YBRX_STATUS=="未开始"){
                if(formatYearMonth(new Date())==formatYearMonth(obj.CREA_TIME_DATE_TJYB)){
                    return  '<a href="javascript:void(0);" style="padding-right: 15px;" onclick="sendMsg(\'ybrxtx\',\''+obj.ID+'\',\''+format(obj.CREA_TIME_DATE_TJYB)+'\',\''+obj.PARTY_NAME+'\');">提醒</a>';;
                }
                if(formatYearMonth(new Date())>formatYearMonth(obj.CREA_TIME_DATE_TJYB)){
                    return  '<a href="javascript:void(0);" style="padding-right: 15px;" onclick="sendMsg(\'ybrxtxcb\',\''+obj.ID+'\',\''+format(obj.CREA_TIME_DATE_TJYB)+'\',\''+obj.PARTY_NAME+'\');">催办</a>';;
                }
            }


            if(obj.DHJG_STATUS=="未开始"){
                if(formatYearMonth(new Date())==formatYearMonth(obj.ZKDYDH)){
                    return  '<a href="javascript:void(0);" style="padding-right: 15px;" onclick="sendMsg(\'dydhtx\',\''+obj.ID+'\',\''+format(obj.ZKDYDH)+'\',\''+obj.PARTY_NAME+'\');">提醒</a>';;
                }
                if(formatYearMonth(new Date())>formatYearMonth(obj.ZKDYDH)){
                    return  '<a href="javascript:void(0);" style="padding-right: 15px;" onclick="sendMsg(\'dydhcb\',\''+obj.ID+'\',\''+format(obj.ZKDYDH)+'\',\''+obj.PARTY_NAME+'\');">催办</a>';;
                }
            }



    }

    if(obj.SESSION_TYPE=="2") {//更名
        return '开发中。。。';

    }
    return '';
}
function formatHjtxStatus(value,row,obj){
    if(obj.SESSION_TYPE=="1") {//换届
             if (value == "未开始") {

                if (formatYearMonth(new Date()) == formatYearMonth(obj.CREA_TIME_DATE)) {
                    return '<span style="border: 1px solid #f8be7b;border-radius: 3px;padding: 3px 5px;background: #ffd500;">已到期</span>';
                } else if (formatYearMonth(new Date()) > formatYearMonth(obj.CREA_TIME_DATE)) {
                    return '<span style="border: 1px solid #f49797;border-radius: 3px;padding: 3px 5px;background: #ea8484;">已超期</span>';
                } else if (formatYearMonth(new Date()) < formatYearMonth(obj.CREA_TIME_DATE)){
                    return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #E6F7FF;">未开始</span>';
                }
            }

            if (value == "进行中") {
                return '<span style="border: 1px solid #52C41A;border-radius: 3px;padding: 3px 5px;background: #F6FFED;">进行中</span>';
            }
            if (value == "已完成") {
                return '<span style="border: 1px solid #4073ed;border-radius: 3px;padding: 3px 5px;background: #bce1f8;">已完成</span>';
            }
            if (value == "已延期") {
                return '<span style="border: 1px solid #e8e3e3;border-radius: 3px;padding: 3px 5px;background: #FFF1F0;">已延期</span>';
            }



        return '';
    }
    if(obj.SESSION_TYPE=="2") {//更名
        return '开发中';
    }
    if(obj.SESSION_TYPE == "4"){
         return "已完成";
    }
    return '开发中';
    }
function formatHjqsStatus(value,row,obj){
    if(obj.SESSION_TYPE=="1") {//换届
        if (value == "未开始") {
         if (formatYearMonth(new Date()) == formatYearMonth(obj.CREA_TIME_DATE_TJ)) {
             return '<span style="border: 1px solid #f8be7b;border-radius: 3px;padding: 3px 5px;background: #ffd500;">已到期</span>';
            } else if (formatYearMonth(new Date()) > formatYearMonth(obj.CREA_TIME_DATE_TJ)) {
             return '<span style="border: 1px solid #f49797;border-radius: 3px;padding: 3px 5px;background: #ea8484;">已超期</span>';
            } else if (formatYearMonth(new Date()) < formatYearMonth(obj.CREA_TIME_DATE_TJ)){
                return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #E6F7FF;">未开始</span>';
            }
        }

        if (value == "进行中") {
            return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #F6FFED;">进行中</span>';
        }
        if (value == "已完成") {
            return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #bce1f8;">已完成</span>';
        }
        if (value == "已延期") {
            return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #FFF1F0;">已延期</span>';
        }



        return '';
    }
    if(obj.SESSION_TYPE=="2") {//更名
        return '开发中';
    }
    if(obj.SESSION_TYPE == "4"){
         return "已完成";
    }
    return '开发中';
}
function formatYbrxStatus(value,row,obj){
    if(obj.SESSION_TYPE=="1") {//预备人选请示
        if (value == "未开始") {
           if (formatYearMonth(new Date()) == formatYearMonth(obj.CREA_TIME_DATE_TJYB)) {
               return '<span style="border: 1px solid #f8be7b;border-radius: 3px;padding: 3px 5px;background: #ffd500;">已到期</span>';
            } else if (formatYearMonth(new Date()) > formatYearMonth(obj.CREA_TIME_DATE_TJYB)) {

               return '<span style="border: 1px solid #f49797;border-radius: 3px;padding: 3px 5px;background: #ea8484;">已超期</span>';
            } else if (formatYearMonth(new Date()) < formatYearMonth(obj.CREA_TIME_DATE_TJYB)) {
                return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #E6F7FF;">未开始</span>';
            }
        }

        if (value == "进行中") {
            return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #F6FFED;">进行中</span>';
        }
        if (value == "已完成") {
            return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #bce1f8;">已完成</span>';
        }
        if (value == "已延期") {
            return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #FFF1F0;">已延期</span>';
        }



        return '';
    }
    if(obj.SESSION_TYPE=="2") {//更名
        return '开发中';
    }
    if(obj.SESSION_TYPE == "4"){
         return "已完成";
    }
    return '开发中';
}

function formatDhjgStatus(value,row,obj){
    if(obj.SESSION_TYPE=="1") {//上会
        if (value == "未开始") {
           if (formatYearMonth(new Date()) == formatYearMonth(obj.ZKDYDH)) {
               return '<span style="border: 1px solid #f8be7b;border-radius: 3px;padding: 3px 5px;background: #ffd500;">已到期</span>';
            } else if (formatYearMonth(new Date()) > formatYearMonth(obj.ZKDYDH)) {
               return '<span style="border: 1px solid #f49797;border-radius: 3px;padding: 3px 5px;background: #ea8484;">已超期</span>';
            } else if (formatYearMonth(new Date()) < formatYearMonth(obj.ZKDYDH)) {
                return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #E6F7FF;">未开始</span>';
            }else{
                return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #E6F7FF;">未开始</span>';
            }
        }

        if (value == "进行中") {
            return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #F6FFED;">进行中</span>';
        }
        if (value == "已完成") {
            return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #bce1f8;">已完成</span>';
        }
        if (value == "已延期") {
            return '<span style="border: 1px solid #91D5FF;border-radius: 3px;padding: 3px 5px;background: #FFF1F0;">已延期</span>';
        }



        return '';
    }
    if(obj.SESSION_TYPE=="2") {//更名
        return '开发中';
    }
    if(obj.SESSION_TYPE == "4"){
         return "已完成";
    }
    return '开发中';
}
    /**
     *
     * @param sendType
     * @param partyId
     * @param time
     * @param partyName
     */
    function sendMsg(sendType,partyId,time,partyName){

        var msgTitle;
        var urlAddress;
        if("hjtx"==sendType){
            msgTitle=partyName+"，预计在"+time+"开始换届提醒，请注意及时关注。";
            urlAddress="";
        }
        if("hjtxcb"==sendType){
            msgTitle=partyName+"，预计在"+time+"开始换届提醒,请尽快办理。";
            urlAddress="";
        }
        if("tjqstx"==sendType){
            msgTitle=partyName+"，预计在"+time+"开始换届选举请示，请注意及时关注。";
            urlAddress="";
        }
        if("tjqstxcb"==sendType){
            msgTitle=partyName+"，预计在"+time+"开始换届选举请示,请尽快办理。";
            urlAddress="";
        }
        if("ybrxtx"==sendType){
            msgTitle=partyName+"，预计在"+time+"开始预备人选请示，请注意及时关注。";
            urlAddress="";
        }
        if("ybrxtxcb"==sendType){
            msgTitle=partyName+"，预计在"+time+"开始预备人选请示，请尽快办理。";
        }
        if("dydhtx"==sendType){
            msgTitle=partyName+"，预计在"+time+"开始党员大会及结果上报，请注意及时关注。";
            urlAddress="";
        }
        if("dydhcb"==sendType){
            msgTitle=partyName+"，预计在"+time+"开始党员大会及结果上报，请尽快办理。";
            urlAddress="";
        }

        $.ajax({
            url: "platform/avicit/pb/organize/partyOrganization/partyOrganizationController/getPartyOrgUser/"+partyId+".json",
            type: "get",
            datatype: "json",
            success: function (a) {

                var userIds=new Array();
                var userNames=new Array();
                for(var i=0;i<a.length;i++){
                    userIds.push(a[i].userId);
                    userNames.push(a[i].userName);
                }
                var localDate=new Date();//获取当前时间



                $.ajax({
                    url:"msystem/sysmsg/sysMsgController/operation/save",
                    data : {
                        data :JSON.stringify({
                            "id":"",
                            "sourceCode":"personal",//固定值
                            "title":msgTitle,//标题
                            // "content":"333",//内容
                            "urlAddress":urlAddress,//打开该消息时转向的地址，一般为相对路径
                            "urlType":"1",//URL类型，是URL就是1,是js方法，就是0。
                            "msgType":"0",//范围 1是所有人，接收人为空，0 指定接收人
                            "recvUser":userIds.join(";"),//多个用;分割
                            "recvUsersAlias":userNames.join(";"),//多个用;分割
                            "sendDate":formatDateTime(localDate),//发送时间
                            "disappearDate":get6yhDateTime(localDate,6)//到期时间
                        })
                    },
                    type : 'POST',
                    dataType : 'json',
                    success : function(r) {
                        if (r.flag == "success") {
                            layer.msg('发送成功！', {
                                icon: 1,
                                time: 1000//1秒关闭
                            });
                        }
                    }
                });

            }
        });

    }
function redraw2c908c528dc9a7cf018dc9bf95d608da(oriWidth){
	if (oriWidth == 0){
		var win_width = $("#2c908c528dc9a7cf018dc9bf95d608da").width();
		var win_height = $("#2c908c528dc9a7cf018dc9bf95d608da").height();
		$('#2c908c528dc9a7cf018dc9bf95d608da').layout('panel', 'center').panel('resize',{width:win_width*1.0,height:win_height*1.0});
		$('#2c908c528dc9a7cf018dc9bf95d608da').layout('resize');
	}
}
$(window).on('resize',function(){
	var win_width = $("#2c908c528dc9a7cf018dc9bf95d608da").width();
	setTimeout(function(){redraw2c908c528dc9a7cf018dc9bf95d608da(win_width);},500);
});
var table99f65949e1a500407ea974f53ba7cf264423KeyWordIn = "";    
var table99f65949e1a500407ea974f53ba7cf264423ParamIn = "";    
var table99f65949e1a500407ea974f53ba7cf264423SelectRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,status){
					oldFunc(rowid,status);
					fun(rowid,status);
				}
			}
		},
		exec:function(rowid,status){
			if (typeof this.func == 'function')
               this.func(rowid,status);
		}
};
var table99f65949e1a500407ea974f53ba7cf264423LoadComplete = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(data){
					oldFunc(data);
					fun(data);
				}
			}
		},
		exec:function(data){
			if (typeof this.func == 'function')
               this.func(data);
		}
};
var table99f65949e1a500407ea974f53ba7cf264423BeforeEditCell = {        
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid, cellname, value, iRow, iCol){
					oldFunc(rowid, cellname, value, iRow, iCol);
					fun(rowid, cellname, value, iRow, iCol);
				}
			}
		},
		exec:function(rowid, cellname, value, iRow, iCol){
			if (typeof this.func == 'function')
               if(this.func(rowid, cellname, value, iRow, iCol) == false)
               		return false;
         return true;
		}
};
var table99f65949e1a500407ea974f53ba7cf264423OndblClickRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iRow,iCol,e){
					oldFunc(rowid,iRow,iCol,e);
					fun(rowid,iRow,iCol,e);
				}
			}
		},
		exec:function(rowid,iRow,iCol,e){
			if (typeof this.func == 'function')
               this.func(rowid,iRow,iCol,e);
		}
};
var table99f65949e1a500407ea974f53ba7cf264423OnRightClickRow = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iRow,iCol,e){
					oldFunc(rowid,iRow,iCol,e);
					fun(rowid,iRow,iCol,e);
				}
			}
		},
		exec:function(rowid,iRow,iCol,e){
			if (typeof this.func == 'function')
               this.func(rowid,iRow,iCol,e);
		}
};
var table99f65949e1a500407ea974f53ba7cf264423GridComplete = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(){
					oldFunc();
					fun();
				}
			}
		},
		exec:function(){
			if (typeof this.func == 'function')
               this.func();
		}
};
var table99f65949e1a500407ea974f53ba7cf264423OnCellSelect = {     
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(rowid,iCol,cellcontent,e){
					oldFunc(rowid,iCol,cellcontent,e);
					fun(rowid,iCol,cellcontent,e);
				}
			}
		},
		exec:function(rowid,iCol,cellcontent,e){
			if (typeof this.func == 'function')
               this.func(rowid,iCol,cellcontent,e);
		}
};
var table99f65949e1a500407ea974f53ba7cf264423LoadBeforeSend = {        
		func:null,
		addEvent:function(fun){
			var oldFunc =this.func;
			if (typeof this.func != 'function'){
				this.func = fun;
			}else{
				this.func = function(xhr, settings){
					oldFunc(xhr, settings);
					fun(xhr, settings);
				}
			}
		},
		exec:function(xhr, settings){
			if (typeof this.func == 'function')
               if(this.func(xhr, settings) == false)
               		return false;
         return true;
		}
};
function table99f65949e1a500407ea974f53ba7cf264423Reload(pid){
	var _isInvalid = true;
	$("#table99f65949e1a500407ea974f53ba7cf264423").parents('.tab-pane').each(function(){
		if (!$(this).hasClass('active')){
			_isInvalid = false;
			return false;
		}
	})
	if (!_isInvalid){
		if (pid!=null && pid!=undefined && pid!=''){
			window.table99f65949e1a500407ea974f53ba7cf264423Pid = pid;
		}
		return false;
	}
	window.table99f65949e1a500407ea974f53ba7cf264423Pid = null;
 var searchdata={};
 if(pid!=null){searchdata.pid=pid;}
 searchdata.comparameter=JSON.stringify(filterParams);
 $('#table99f65949e1a500407ea974f53ba7cf264423').jqGrid('setGridParam', {datatype:'json',postData: searchdata}).trigger('reloadGrid');
}
function table99f65949e1a500407ea974f53ba7cf264423TabReload(forceFlag){
	if (typeof forceFlag == 'undefined'){
		forceFlag = false;
	}
 if(forceFlag||typeof window.table99f65949e1a500407ea974f53ba7cf264423Pid == 'undefined' || window.table99f65949e1a500407ea974f53ba7cf264423Pid!=null){
table99f65949e1a500407ea974f53ba7cf264423Reload(window.table99f65949e1a500407ea974f53ba7cf264423Pid);
}
}
var tablecmtable99f65949e1a500407ea974f53ba7cf264423 = [];
var uniqueColtable99f65949e1a500407ea974f53ba7cf264423 = [];
var uniqueColTitletable99f65949e1a500407ea974f53ba7cf264423 = [];
var defaultValuetable99f65949e1a500407ea974f53ba7cf264423 = {};
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: 'ID',key: true,hidden:true, name: 'ID',align:'left',  width: '150px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: 'SESSION_NAME',hidden:true, name: 'SESSION_NAME',align:'left',  width: '150px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: '党组织名称',hidden:false, name: 'PARTY_NAME',align:'left',  width: '150px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: '选举时间', formatter:format, hidden:false, name: 'CREA_TIME',align:'left',  width: '50px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({ label: '选举类型',hidden:true, name: 'SESSION_TYPE',align:'left',  width: '50px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({ label: '选举类型',hidden:false, name: 'SESSION_TYPEName',align:'left',  width: '50px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: '换届提醒日期', formatter:format, hidden:true, name: 'CREA_TIME_DATE',align:'right',  width: '50px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: '换届提醒', formatter:function(cellvalue, options, rowObject){return formatHjtxStatus(cellvalue, options, rowObject);}, hidden:false, name: 'HJTX_STATUS',align:'left',  width: '50px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: '换届请示日期', formatter:format, hidden:true, name: 'CREA_TIME_DATE_TJ',align:'right',  width: '50px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: '换届请示', formatter:function(cellvalue, options, rowObject){return formatHjqsStatus(cellvalue, options, rowObject);}, hidden:false, name: 'HJQS_STATUS',align:'left',  width: '50px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: '预备人选请示日期', formatter:format, hidden:true, name: 'CREA_TIME_DATE_TJYB',align:'right',  width: '50px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: '预备人选请示', formatter:function(cellvalue, options, rowObject){return formatYbrxStatus(cellvalue, options, rowObject);}, hidden:false, name: 'YBRX_STATUS',align:'left',  width: '50px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: '党员大会及结果上报日期', formatter:format, hidden:true, name: 'ZKDYDH',align:'right',  width: '50px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: '党员大会及结果上报', formatter:function(cellvalue, options, rowObject){return formatDhjgStatus(cellvalue, options, rowObject);}, hidden:false, name: 'DHJG_STATUS',align:'left',  width: '50px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({label: '选举进度',hidden:true, name: 'SESSION_JD',align:'left',  width: '50px'});
tablecmtable99f65949e1a500407ea974f53ba7cf264423.push({ sortable:false,label: '跟踪提醒', formatter:showButton, hidden:false, name: 'tableVirColumnd82fca6a0a239347bf583e7bfbef9f205ea4',align:'left',  width: '50px'});	var searchNamestable99f65949e1a500407ea974f53ba7cf264423 = []; 
searchNamestable99f65949e1a500407ea974f53ba7cf264423.push('PARTY_NAME');
$('#keyWordtable99f65949e1a500407ea974f53ba7cf264423').attr('placeholder', '请输入党组织名称查询');
function searchDataKeyWordtable99f65949e1a500407ea974f53ba7cf264423(){
	var keyWord = $.trim($("#keyWordtable99f65949e1a500407ea974f53ba7cf264423").val()); 
 if($('#keyWordtable99f65949e1a500407ea974f53ba7cf264423').attr('placeholder') == keyWord){
 keyWord = '';} 
	var param = {}; 
	for(var i=0;i<searchNamestable99f65949e1a500407ea974f53ba7cf264423.length;i++){ 
		var name = searchNamestable99f65949e1a500407ea974f53ba7cf264423[i]; 
		param[name] = keyWord; 
	} 
	var searchdata = {
		keyWord:  JSON.stringify(param),
		param: null 
	};
table99f65949e1a500407ea974f53ba7cf264423KeyWordIn=JSON.stringify(param);
table99f65949e1a500407ea974f53ba7cf264423ParamIn="";
	$('#table99f65949e1a500407ea974f53ba7cf264423').jqGrid('setGridParam',{datatype: 'json',postData: searchdata}).trigger("reloadGrid");
};
$('#keyWordtable99f65949e1a500407ea974f53ba7cf264423').on('keydown',function(e){
	if(e.keyCode == '13'){
		searchDataKeyWordtable99f65949e1a500407ea974f53ba7cf264423();
	}
});
$('#keyWordBttable99f65949e1a500407ea974f53ba7cf264423').bind('click', function() {
		searchDataKeyWordtable99f65949e1a500407ea974f53ba7cf264423();
});
;$(document).ready(function(){ 

$("#table99f65949e1a500407ea974f53ba7cf264423").jqGrid({ 
    	   url: './eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/2c908c528dc9a7cf018dc9bf95d608da/table99f65949e1a500407ea974f53ba7cf264423/N/V1',
        mtype: 'POST', 
        datatype: "local", 
        postData: { 
                     a:'',
                   },
        toolbar: [true,'top'], 
        colModel: tablecmtable99f65949e1a500407ea974f53ba7cf264423,
        height:$(this).parent().height(),
        scrollOffset: 20,
        rowNum: 20	,
        rowList:[20, 50, 100, 200, 500],
        altRows:true,
        hasColSet:false,
        hasTabExport:false,
        onSelectRow:function(rowid,status){table99f65949e1a500407ea974f53ba7cf264423SelectRow.exec(rowid,status);},
        loadBeforeSend:function(xhr, settings){if (!table99f65949e1a500407ea974f53ba7cf264423LoadBeforeSend.exec(xhr, settings)){return false;}},
        ondblClickRow:function(rowid,iRow,iCol,e){table99f65949e1a500407ea974f53ba7cf264423OndblClickRow.exec(rowid,iRow,iCol,e);},
        onRightClickRow:function(rowid,iRow,iCol,e){table99f65949e1a500407ea974f53ba7cf264423OnRightClickRow.exec(rowid,iRow,iCol,e);},
        gridComplete:function(){table99f65949e1a500407ea974f53ba7cf264423GridComplete.exec();
				    setTimeout(function(){var height = $("#table99f65949e1a500407ea974f53ba7cf264423").closest('.ui-jqgrid-bdiv').height();
					$("#table99f65949e1a500407ea974f53ba7cf264423norecords").css('margin-top',(height/5)+'px');
                 if ((height/1.9)>120){
					    $("#table99f65949e1a500407ea974f53ba7cf264423norecords img").css("width","120px");
                 }else{
					    $("#table99f65949e1a500407ea974f53ba7cf264423norecords img").css("width",(height/1.9)+"px");
                 }},1000);
        },
        beforeEditCell:function(rowid, cellname, value, iRow, iCol){
        		table99f65949e1a500407ea974f53ba7cf264423BeforeEditCell.exec(rowid, cellname, value, iRow, iCol);
        },
        onCellSelect:function(rowid,iCol,cellcontent,e){
				table99f65949e1a500407ea974f53ba7cf264423OnCellSelect.exec(rowid,iCol,cellcontent,e);
        },
        userDataOnFooter: true,
        pagerpos:'left',
		   beforeRequest:function(){
		   	    $("#table99f65949e1a500407ea974f53ba7cf264423norecords").hide();
		   	    $("#Pagertable99f65949e1a500407ea974f53ba7cf264423_left").css("display", "block");
		   },
		   loadComplete:function(data){
				$("#table99f65949e1a500407ea974f53ba7cf264423").jqGrid('getColumnByUserIdAndTableName');
				var rowdata = $("#table99f65949e1a500407ea974f53ba7cf264423").jqGrid('getRowData');
				if (rowdata != null && rowdata.length > 0) {
					$("#"+rowdata[0].ID).click();
				}else{
					if ($("#table99f65949e1a500407ea974f53ba7cf264423norecords").html() == null) {
						$("#table99f65949e1a500407ea974f53ba7cf264423").parent().append("<div class='no_data' id='table99f65949e1a500407ea974f53ba7cf264423norecords'> <img style='width:120px;' src='static/images/platform/eform/no-data.png' /> <p>暂无记录</p> </div>");
					}
					$("#table99f65949e1a500407ea974f53ba7cf264423norecords").show();
					$("#Pagertable99f65949e1a500407ea974f53ba7cf264423_left").css("display", "none");
				}
table99f65949e1a500407ea974f53ba7cf264423LoadComplete.exec(data);                      
		   },
		   viewrecords: true,
        styleUI : 'Bootstrap',
		   multiselect: false,
		   rownumbers: false,
        multiboxonly: true,
		   autowidth: true,
		   shrinkToFit: true,
		   responsive:true, 
        pager: "#Pagertable99f65949e1a500407ea974f53ba7cf264423"
    });
table99f65949e1a500407ea974f53ba7cf264423Reload();
$("#t_table99f65949e1a500407ea974f53ba7cf264423").append($("#tableToolbartable99f65949e1a500407ea974f53ba7cf264423"));;});	 
