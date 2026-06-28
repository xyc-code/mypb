//判断日期是否是起始值
//用法如下：
//if(isDateAfter($("#FQ_HDKZ_DATE_BEGIN").val(),$("#FQ_HDKZ_DATE_END").val())){
//  layer.msg("错误的时间，活动开展时间止不应超过活动开展时间起");
//  $("#FQ_HDKZ_DATE_END").val("");
// }
// $(function (){
//     var inputElent = document.getElementById("FQ_PARTY_ORG");
//     inputElent.maxLength = 4000;
// })

beforeSaveEvent.addBeforeSaveEvent(function(jsonData){
    var flag=false;
    var diseaseType = $("input[name='DISEASE_TYPE']:checked").val();
    var status=$("#STATUS").val();
    var allRowData=$("#DYN_XFG_CHIRD").jqGrid("getRowData");
         if(allRowData.length>1){
            allRowData=swap(allRowData);
         }

        for(var i=0;i<allRowData.length;i++){
            if (allRowData[i].GW_NAMEName == '党员干部先锋岗') {
                if (allRowData[i].USER_DEPT_TYPEName == '') {
                    layer.msg("党员干部请选择部门类别");
                    return false;
                }
                if (allRowData[i].USER_GBJBName == '') {
                    layer.msg("党员干部请选择干部级别");
                    return false;
                }
            } else {
                if (allRowData[i].USER_DEPT_TYPEName !== '') {
                    layer.msg("不是党员干部先锋岗的人员，不让填写该选项");
                    return false;
                }
                if (allRowData[i].USER_GBJBName !== '') {
                    layer.msg("不是党员干部先锋岗的人员，不让填写该选项");
                    return false;
                }
            }

        }
    return true;
});



function swap(jsonArr){
    for(var i=0;i<jsonArr.length-1;i++){
        for(var j=0;j<jsonArr.length-1-i;j++){
            if(jsonArr[j].INHOSP_DATE>jsonArr[j+1].INHOSP_DATE){
                var temp=jsonArr[j];
                jsonArr[j]=jsonArr[j+1];
                jsonArr[j+1]=temp;
            }
        }
    }
    return jsonArr;
}




function isDateAfter(data1, data2) {
   var date1Obj = new Date(data1);
   var date2Obj = new Date(data2);
   return date1Obj.getTime() >= date2Obj.getTime()
}
//用于判断起始时间和结束时间是否相差了五个工作日
//实例用法
//var result = isFiveWorkingDaysApart("2022-10-01","2022-10-10");
//conosle.log(result) 输出为true
//....
function isFiveWorkingDaysApart(startDate,endDate){
    if(startDate==""||endDate==""){
        return true;
    }
    var oneDay = 24*60*60*1000;//一天的毫秒数
    var start = new Date(startDate);
    var end = new Date(endDate);
    var workingDays = 0;
    while (start<end){
        start.setTime(start.getTime()+oneDay);//每次循环 将起始时间向后移动一天
        if(start.getDay()!==0&&start.getDay()!==6){
            //排除周六和周日 0是周日 6是周六
            workingDays++;
        }
        if(workingDays === 4){
            return true;
        }
    }
    return false;
}
// function findDuplicates (array) {
//     return array.filter((item,index) => array.indexOf(item) !== index);
// }
// function isWorkDay(date){
//     const day = date.getDay();
//     return day !== 0 && day !== 6;
// }
// function  countWorkdays(startDate,endDate) {
//     let count = 0;
//     let currentDate = new Date(startDate);
//     while (currentDate <= endDate){
//         count++;
//     }
//     // currentDate = nextWorkDay(currentDate);
//     return count;
// }
// function nextWorkDay (date){
//     const nextDay = new Date(date);
//     nextDay.setDate(nextDay.getDate() + 1);
//     while (!isWorkDay(nextDay)) {
//         nextDay.setDate(nextDay.getDate() + 1);
//     }
//     return nextDay;
// }
//生产from表单
function setFrom(index){
    var tanleButton = $("#tanleButton");
    if(tanleButton.length===0){
        $("#tableId").parent().after("<div id='tanleButton'><div class=\"toolbar-left\">" +
            "<a id=\"dynXfgFq_insert\" href=\"javascript:void(0)\" class=\"btn btn-primary form-tool-btn btn-sm btn-point\" role=\"button\" title=\"添加\"><i class=\"fa fa-plus\"></i> 添加</a>" +
            "<a id=\"dynXfgFq_del\" href=\"javascript:void(0)\" class=\"btn btn-primary form-tool-btn btn-sm\" role=\"button\" title=\"删除\"><i class=\"fa fa-trash-o\"></i> 删除</a>" +
            "</div></div>")
    }
    var fromHtml = '<form id="from'+index+'"    style="padding: 10px 80px;" onkeydown="if(event.keyCode==13){return (event.srcElement.tagName==\'TEXTAREA\'||event.srcElement.className.indexOf(\'ui-pg-input\')>-1)?true:false;}"><div class="mce-content-body">' +
        ' <div style="text-align: center; font-size: 24px; margin: 15px;"> ' +
        '  <div class="input-group-sm "> ' +
        '   <input type="hidden" class="form-control input-sm"   name="FK_SUB_ID" title="主表id" maxlength="50"> ' +
        '  </div> ' +
        ' </div>' +
        ' <table style="" id="tVUwLmrFrCojIOTq3Je8lsR8Ja7a38do" class="form_commonTable1"> ' +
        '  <tbody> ' +
        '   <tr> ' +
        '    <td style="width:6%; text-align: right;"><label for="GW_NAME" class=" " style=";" id="oB7RfqbtliifFOAoOddnMCMn0TOA4A19"> 申报党员先锋岗名称： </label> </td> ' +
        '    <td style="width:19%;"> ' +
        '     <div class="input-group-sm "> ' +
        '      <select class="form-control input-sm" style="; "  required="" id="GW_NAME" name="GW_NAME" title="申报党员先锋岗名称"> <option value="0">批产攻坚先锋岗</option> <option value="1">科研攻关先锋岗</option> <option value="2">管理创新先锋岗</option> <option value="3">质量提升先锋岗</option> <option value="4">服务保障先锋岗</option> <option value="5">降本增效先锋岗</option> <option value="6">学习成长先锋岗</option> <option value="7">弘扬文化先锋岗</option> <option value="8">党员干部先锋岗</option> </select> ' +
        '     </div> </td> ' +
        '    <td style="width:6%; text-align: right;"><label for="USER_NAME" class=" " style=";" id="SuYch4ASZhNaihnMMTRbVRIbmPATDeMo"> 姓名： </label> </td> ' +
        '    <td style="width:19%;"> ' +
        '     <div class="input-group input-group-sm " style="width:100%"> ' +
        '      <input type="text" class="form-control input-sm" style=";" autocomplete="off" id="USER_NAME" onfocus="USER_NAMEClickFun('+index+')" name="USER_NAME" title="姓名" maxlength="50"> ' +
        '      <span class="input-group-addon dictionary-box-act" id="USER_NAMEButton"> <i class="\tglyphicon glyphicon-search"></i> </span> ' +
        '     </div></td> ' +
        '   </tr> ' +
        '   <tr> ' +
        '    <td style="width:6%; text-align: right;"><label for="USER_SEX" class=" " style=";" id="yaoNzHKNdbVvqI12k41xsVVJnWCloAjh"> 性别： </label> </td> ' +
        '    <td style="width:19%;"> ' +
        '     <div class="input-group-sm "> ' +
        '      <input type="text" class="form-control input-sm" style=" ; " disabled="" id="USER_SEX" name="USER_SEX" title="性别" maxlength="50"> ' +
        '     </div></td> ' +
        '    <td style="width:6%; text-align: right;"><label for="USER_AGE" class=" " style=";" id="EuyjdtKjfhcp8Sk1TxiCIqMTNaCD9kde"> 年龄： </label> </td> ' +
        '    <td style="width:19%;"> ' +
        '     <div class="input-group-sm "> ' +
        '      <input type="text" class="form-control input-sm" style=" ; " disabled="" id="USER_AGE" name="USER_AGE" title="年龄" maxlength="50"> ' +
        '     </div></td> ' +
        '   </tr> ' +
        '   <tr> ' +
        '    <td style="width:6%; text-align: right;"><label for="USER_POST" class=" " style=";" id="GMSeyEoxNagicLu1J1FdZLcbwjkXgdIr"> 职务： </label> </td> ' +
        '    <td style="width:19%;"> ' +
        '     <div class="input-group-sm "> ' +
        '      <input type="text" class="form-control input-sm" style=" ; " disabled="" id="USER_POST" name="USER_POST" title="职务" maxlength="50"> ' +
        '     </div></td> ' +
        '    <td style="width:6%; text-align: right;"><label for="USER_PARTYDATE" class=" " style=";" id="Cij35km3mrpwXI1isAYptB0p2xkyc72S"> 入党时间： </label> </td> ' +
        '    <td style="width:19%;"> ' +
        '     <div class="input-group input-group-sm " style="width:100%"> ' +
        '      <input type="text" title="入党时间" class="form-control date-picker input-sm hasDatepicker" style=";" readonly="readonly" id="USER_PARTYDATE" name="USER_PARTYDATE" disabled="disabled"> ' +
        '      <span id="USER_PARTYDATE_button" class="input-group-addon data-box-act"><i class="glyphicon glyphicon-calendar"></i></span> ' +
        '     </div></td> ' +
        '   </tr> ' +
        '   <tr> ' +
        '    <td style="width:6%; text-align: right;"><label for="USER_JX" class=" " style=";" id="nFOo4OD9wcLHnv4d0ffoTqSjeGMV8nZV"> 年度绩效： </label> </td> ' +
        '    <td style="width:19%;"> ' +
        '     <div class="input-group-sm "> ' +
        '      <select class="form-control input-sm" style="; " required="" id="USER_JX" name="USER_JX" title="年度绩效"> <option value="A+">A+</option> <option value="A">A</option> <option value="B+">B+</option> <option value="B">B</option> <option value="B-">B-</option> <option value="C">C</option> <option value="D">D</option> </select> ' +
        '     </div> </td> ' +
        '    <td style="width:6%; text-align: right;"><label for="USER_JG" class=" " style=";" id="oviOZN6WjK6w45LcFS9x1Z4ByUSfvd8w"> 民主评议组织评价结果： </label> </td> ' +
        '    <td style="width:19%;"> ' +
        '     <div class="input-group-sm "> ' +
        '      <input type="text" class="form-control input-sm" style=" ; " required="" value="优秀" disabled="" id="USER_JG" name="USER_JG" title="民主评议组织评价结果" maxlength="50"> ' +
        '     </div></td> ' +
        '   </tr> ' +
        '   <tr> ' +
        '    <td style="width:6%; text-align: right;"><label for="USER_JF" class=" " style=";" id="BLnHyFWPrBikFmZ83iWZHNFoyOD48gGw"> 党员积分： </label> </td> ' +
        '    <td style="width:44%;" colspan="3"> ' +
        '     <div class="input-group input-group-sm spinner " data-trigger="spinner"> ' +
        '      <input type="text" class="form-control input-sm" style=";" disabled="" id="USER_JF" name="USER_JF" data-min="-99999999.99" data-max="99999999.99" data-precision="2" title="党员积分" maxlength="10"> ' +
        '      <span class="input-group-addon number-box-act"> <a href="javascript:" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a> <a href="javascript:" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a> </span> ' +
        '     </div></td> ' +
        '   </tr> ' +
        '   <tr style="display: none"> ' +
        '    <td style="width:6%; text-align: right;"><label for="USER_GBJB" class=" "  id="ih7o5mBCFXDhXAxF4qOUsO2mQL7B70tG"> 干部级别： </label> </td> ' +
        '    <td style="width:19%;"> ' +
        '     <div class="input-group-sm "> ' +
        '      <select class="form-control input-sm"  id="USER_GBJB" name="USER_GBJB" title="干部级别"> <option value="">请选择</option> <option value="0">科级</option> <option value="1">副处</option> <option value="2">正处</option> </select> ' +
        '     </div> </td> ' +
        '    <td style="width:6%; text-align: right;"><label for="USER_DEPT_TYPE" class=" "  id="aa7cDk0hDInTooEfbDxYO31OYq2toWwp"> 部门类别： </label> </td> ' +
        '    <td style="width:19%;"> ' +
        '     <div class="input-group-sm "> ' +
        '      <select class="form-control input-sm"  id="USER_DEPT_TYPE" name="USER_DEPT_TYPE" title="部门类别"> <option value="">请选择</option> <option value="0">职能部门</option> <option value="1">科研生产单位</option> </select> ' +
        '     </div> </td> ' +
        '   </tr> ' +
        '   <tr> ' +
        '    <td style="width:6%; text-align: right;"><label for="USER_SJ" class=" " style=";" id="yP7O0sD8ZLvA9fEkwzbTpRBHjH8qATz8"> 先进事迹 ： </label> </td> ' +
        '    <td style="width:44%;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="5" required="" id="USER_SJ" name="USER_SJ" title="先进事迹 " maxlength="500"></textarea> </td> ' +
        '   </tr> ' +
        '   <tr> ' +
        '    <td style="width:6%; text-align: right;"><label for="CONTENT" class=" " style=";" id="gQgkBpQ5OiqvS4Nf4SYGoPx1uzM8gIKU"> 备注： </label> </td> ' +
        '    <td style="width:44%;" colspan="3"><textarea class="form-control input-sm " style="resize:none;" rows="5" required="" id="CONTENT" name="CONTENT" title="备注" maxlength="50"></textarea> </td> ' +
        '   </tr> ' +
        '  </tbody> ' +
        ' </table>' +
        '</div></form>'
    return fromHtml;
}
//调取选择用户界面
var USER_NAMEDetailCol = 'USER_NAME';
function USER_NAMEClickFun(index){
    var domIndex = index;
    layer.open({
        type:  2,
        title: '请选择数据',
        skin: 'bs-modal', // bootstrap 风格皮肤 需加载skin
        shade:   0.3,
        maxmin: false, //开启最大化最小化按钮
        content: "platform/eform/plugin/toDictionarySelect",
        area: ['800px', '90%'],
        btn: ['确定', '关闭'],
        success: function (layero, index) {
            // 回填表单数据，双击表格时候调用
            this.setRowUSER_NAME = function(mapping,rowData){
                var detailId;
                var detailName;
                for(var i=0; i< mapping.length; i++){
                    var mapVer = mapping[i];
                    $("#"+mapVer.targetName).val(rowData[mapVer.name]);

                    if(mapVer.targetName != ""){
                        $("#"+mapVer.targetName+" input").each(function(){
                            $(this).prop('checked',false);
                            if($(this).val() == rowData[mapVer.name]){
                                $(this).prop('checked',true);
                            }
                        });
                    }

                    if(USER_NAMEDetailCol == mapVer.targetName){
                        detailName = rowData[mapVer.name];
                    }else if("" == mapVer.targetName){
                        detailId = rowData[mapVer.name];
                    }
                }

                layer.close(index);
            }

            this.getParamsValue = function(targetName){
                return $("#"+targetName).val();
            }

            this.jsSuccess = function(xhr,rows){
                ;
            }
            //传入参数，并赋值给iframe的元素
            var iframeWin = layero.find('iframe')[0].contentWindow;

            iframeWin.initGrid(                "0"
                , "100","select (select name from sys_user u where u.id = p.user_id ) as name,p.sex,p.attribute_02 as age,p.post,p.JOIN_PARTY,(select i.INTEGRAL_CONTENT from integral i where i.user_id = p.user_id and to_char(i.integral_date,'yyyy') = to_char(sysdate,'yyyy')-1 and (select d.QUARTER from dyn_points d where id = i.fk_sub_col_id) = '4') as sum from party_member p",'[{"label":"姓名","width":"50","align":"center","orderBy":"1","name":"NAME"},{"label":"性别","width":"50","align":"center","orderBy":"2","name":"SEXName"},{"label":"年龄","width":"50","align":"center","orderBy":"3","name":"AGE"},{"label":"职务","width":"50","align":"center","orderBy":"4","name":"POST"},{"label":"入党时间","width":"50","align":"center","orderBy":"5","name":"JOIN_PARTY"},{"label":"党分","width":"50","align":"center","orderBy":"6","name":"SUM"}]','[{"name":"SUM","targetName":"USER_JF","targetNameName":"党员积分","display":"党分","transform":"","lookupType":"","filter":false},{"name":"JOIN_PARTY","targetName":"USER_PARTYDATE","targetNameName":"入党时间","display":"入党时间","transform":"","lookupType":"","filter":false},{"name":"POST","targetName":"USER_POST","targetNameName":"职务","display":"职务","transform":"","lookupType":"","filter":false},{"name":"AGE","targetName":"USER_AGE","targetNameName":"年龄","display":"年龄","transform":"","lookupType":"","filter":false},{"name":"SEXName","targetName":"USER_SEX","targetNameName":"性别","display":"性别","transform":"7","lookupType":"PLATFORM_SEX","filter":false},{"name":"NAME","targetName":"USER_NAME","targetNameName":"姓名","display":"姓名","transform":"","lookupType":"","filter":true}]','-1','-1',this.setRowUSER_NAME,this.getParamsValue,'','dyxfgzb-USER_NAME',this.jsSuccess);


        },
        yes: function(index, layero){
            var selectRows = new Array();
            var iframeWin = layero.find('iframe')[0].contentWindow;
            var rowData;
            var detailName = "";
            var detailId = "";
            var dicJqGrid = iframeWin.$("#dictionaryjqGrid");
            var selectIds = dicJqGrid.jqGrid('getGridParam','selrow');
            if(selectIds != null && selectIds.length > 0){
                //var selectId = selectIds[0];
                rowData = dicJqGrid.jqGrid("getRowData",selectIds);
                selectRows.push(rowData);


                //回填表单数据
                for(var i=0; i< iframeWin.mapping.length; i++){
                    var mapVer = iframeWin.mapping[i];

                    var hashInputCalss = $("#"+mapVer.targetName).hasClass("input-sm");
                    if(hashInputCalss){
                        $("#from"+domIndex+" #"+mapVer.targetName).val(eval("rowData."+ mapVer.name));
                    }else{
                        $("#"+mapVer.targetName).find("input").val(eval("rowData."+ mapVer.name));
                    }

                    if(mapVer.targetName != ""){
                        $("#"+mapVer.targetName+" input").each(function(){
                            $(this).prop('checked',false);
                            if($(this).val() == eval("rowData."+ mapVer.name)){
                                $(this).prop('checked',true);
                            }
                        });
                    }
                    $("#"+mapVer.targetName).blur();

                    if(USER_NAMEDetailCol == mapVer.targetName){
                        detailName = eval("rowData."+ mapVer.name);
                    }else if("" == mapVer.targetName){
                        detailId = eval("rowData."+ mapVer.name);
                    }
                }
            }
            else{
                $("#USER_NAME").val(null);
            }



            layer.close(index);
        },
        cancel: function(index, layero){
            layer.close(index);
        },

    })
}
if(typeof EformFlow == 'undefined'){
    $(document).ready(function () {
        var domIndex = 1;
        //必须是先锋岗申报表才去创建表单
        if(pageParams.tableName==="DYN_PARTY_XFG"){
            // var fromHtml =setFrom(1);
            // $("#tanleButton").after(fromHtml);
            // //先锋岗名称选择事件
            // $("#from"+domIndex+" #GW_NAME").on('change',function (e) {
            //     var tr = $(this).parent().parent().parent().next().next().next().next().next();
            //     if($(e.target).val()==8){
            //         tr.show()
            //     }else{
            //         tr.hide();
            //     }
            // })
            // domIndex++;
        }
        //新增表单
        $("#dynXfgFq_insert").bind('click',function () {
            //处理各支部名额分配的问题
            var mefp = 0;
            var userId = pageParams.session.userId;
            var pId="";
            var fromSize = $("form").length-2;//-2是减去原本表单的数量 只计算添加的表单
            avicAjax.ajax({
                url:"platform/avicit/pb/member/partyMember/partyMemberController/operation/getPartyMemberOrganization",
                data : {userId:userId},
                type : 'post',
                dataType : 'json',
                async:false,
                success : function(r){
                    if (r.flag == "success"){
                        if(r.PARTY_ID){
                            pId = r.PARTY_ID;
                        }
                    }
                }
            });
            if(pId!=""){
                $.ajax({
                    url:"avicit/pb/scoring/integral/integralController/sql",
                    type:"POST",
                    dataType:"JSON",
                    async:false,
                    data:{
                        sql:"select count from DYN_XFG_MEFP where PARTY_ID = '"+pId+"'"
                    },
                    success:function(e){
                        if(e!=null&&e.length!=0){
                            mefp = e[0].COUNT
                        }else{
                         layer.msg("未获取到当前登录人党组织所被分配的名额,无法添加");
                        }
                    }
                })
            }else{
                layer.msg("未获取到当前登录人的党组织id,无法增加表单")
                return false;
            }
            if(mefp>=fromSize){
                layer.msg("当前登录人党组织所被分配的名额已达到上限，不能添加");
                return false;
            }

            //处理结束



           var fromHtmls =  setFrom(domIndex)
            $("#tanleButton").after(fromHtmls);
            $("#from"+domIndex+" #GW_NAME").on('change',function (e) {
                var tr = $(this).parent().parent().parent().next().next().next().next().next();
                if($(e.target).val()==8){
                    tr.show()
                }else{
                    tr.hide();
                }
            })
            domIndex++;
        })
        //删除表单
        $("#dynXfgFq_del").bind('click',function () {
            if(domIndex-1==1){
                layer.msg("申报时至少填写一个表单")
                return
            }
            $("#from"+(domIndex-1)).remove();
            domIndex--;
        })
    })
}

