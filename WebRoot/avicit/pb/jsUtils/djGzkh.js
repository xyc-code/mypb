//党建工作考核表单js外联
$(document).ready(function () {
    if (typeof EformFlow == 'undefined') {
        var title = $("#titleHead");
        var yeer = $("#TITILE_YEER:hidden");
        var month = $("#TITLE_MONTH:hidden");
        yeer.val(new Date().getFullYear());
        //因为每月录制的上个月的 所以无需加1
        month.val(new Date().getMonth());
        title.text(yeer.val() + "年" + month.val() + "月东安公司基层党组织党建工作考核打分表");

        function addRow(e) {
            var newRowIndex_PARTY_WORK_TABLE = 0;
            var newRowStart_PARTY_WORK_TABLE = "new_row";
            for (var i = 0; i < e.length; i++) {
                $('#PARTY_WORK_TABLE').jqGrid('endEditCell');
                $("#PARTY_WORK_TABLEnorecords").hide();//隐藏提示信息
                $("#PARTY_WORK_TABLEPager_left").css("display", "block");//隐藏分页信息
                var newRowId = newRowStart_PARTY_WORK_TABLE + newRowIndex_PARTY_WORK_TABLE;
                var parameters = {
                    rowID: newRowId,
                    initdata: {
                        PARTY_NAME: e[i].text,
                        DJGZS: typeof (30) !== 'undefined' ? 30 : '30',
                        WHXCS: typeof (20) !== 'undefined' ? 20 : '20',
                        GH: typeof (15) !== 'undefined' ? 15 : '15',
                        TW: typeof (5) !== 'undefined' ? 5 : '5',
                        RLZYB: typeof (5) !== 'undefined' ? 5 : '5',
                        DZBGS: typeof (5) !== 'undefined' ? 5 : '5',
                        JJJCB: typeof (20) !== 'undefined' ? 20 : '20',
                        SUM_CONTENT: typeof (100) !== 'undefined' ? 100 : '100',
                        FK_SUB_COL_ID: pageParams.id
                    },
                    position: "first",
                    useDefValues: true,
                    useFormatter: true,
                    addRowParams: {extraparam: {}}
                }
                $('#PARTY_WORK_TABLE').jqGrid('addRow', parameters);
                newRowIndex_PARTY_WORK_TABLE++;
            }
        }

        setTimeout(function () {
            $.ajax({
                url:"platform/avicit/pb/organize/partyOrganization/partyOrganizationController/getTree/3",
                dataType:"JSON",
                success:function (e) {
                    var row = e[0].children
                    var arr = [];
                    for (var i = row.length-1; i >=0 ; i--) {
                        if(row[i].text.indexOf("纪委")==-1&&row[i].text!="离休干部党支部"){
                            arr.push(row[i])
                            var childrenS = row[i].children
                            if(childrenS){
                                for (var j = childrenS.length-1; j >=0 ; j--) {
                                    if(childrenS[j].text.indexOf("小组")==-1){
                                        arr.push(childrenS[j]);
                                    }
                                }
                            }
                        }
                    }
                    addRow(arr);
                }

            })
        }, 100)


    } else {
        /**
         * @date 20240227 张国庆  增加
         * 获取n个月后的日期
         * @param startDate
         *  @param n
         * @returns {string}
         */
        function get6yhDateTime(startDate,n){
            if(startDate&&n){
                var date_now=new Date(startDate);//获取当前时间
                var year=date_now.getFullYear();//获取当前时间的年份
                var month=date_now.getMonth();//
                var day=date_now.getDate();
                var hours=date_now.getHours();
                var minutes=date_now.getMinutes();
                var seconds=date_now.getSeconds();
                var days=new Date(year,month,0);//将获取到的年月赋值给days
                days=days.getDate();
                var year2=year;
                var month2=parseInt(month+n+1);//获取当前月份的1-n个月后的月份
                if(month2>12){
                    year2=parseInt(year2)+1;
                    month2=parseInt(month2) % 12;

                }//考虑到12月要是获取下一个月就是1月，年份需要加1，一年没有13个月所以%12 取得来年1月
                var day2=day;
                var days2=new Date(year2,month2,0);
                days2=days2.getDate();
                if(month2<10){
                    month2='0'+month2;
                }
                //var time=year2+'-'+month2+'-'+day2;  16:49:59
                var time=year2+'-'+month2+'-'+day2+' '+hours+':'+minutes+':'+seconds;
                return time;
            }
            return '';
        }
        EformFlow.prototype.afterControlFormInput = function () {
            var title = $("#titleHead");
            var yeer = $("#TITILE_YEER:hidden");
            var month = $("#TITLE_MONTH:hidden");
            title.text(yeer.val() + "年" + month.val() + "月东安公司基层党组织党建工作考核打分表");
            if (_flow_editor.flowModel.activityname == 'task1') {
                var userIds = ['948e83e37f8b8008017f8bf6290b1a9f','948e83e37f8b8008017f8bf2321e18f5','948e83e37f8b8008017f8bf2355a1972','948e83e37f8f75d0017f8b635f230e5c','948e83e37f8f75d0017f8c2ee4f33349','948e83e37f8f75d0017f8fa71eef0bf5']
                $.ajax({
                    url: "msystem/sysmsg/sysMsgController/operation/save",
                    data: {
                        data: JSON.stringify({
                            "id": "",
                            "sourceCode": "personal",//固定值
                            "title": "请前往待办填写党建工作考核中的分数,需要在每月五号前完成办结,请尽快办结",//标题
                            // "content":"333",//内容
                            "urlAddress": "",//打开该消息时转向的地址，一般为相对路径
                            "urlType": "1",//URL类型，是URL就是1,是js方法，就是0。
                            "msgType": "0",//范围 1是所有人，接收人为空，0 指定接收人
                            "recvUser": userIds.join(";"),//多个用;分割
                            "recvUsersAlias": userNames.join(";"),//多个用;分割
                            "sendDate": formatDateTime(new Date()),//发送时间
                            "disappearDate": get6yhDateTime(new Date(), 6)//到期时间
                        })
                    },
                    type: 'POST',
                    dataType: 'json',
                });
            }

            var userId = pageParams.session.userId
            var sql = "select * from party_organization where id  in ( select party_id from party_organ_member where user_id = '" + userId + "')";
            if (_flow_editor.flowModel.activityname == 'task14' || _flow_editor.flowModel.activityname == 'task15') {
                //分发至各党支部后 需要各党支部只能查看自己党支部的分数 不能查看其它党支部的 所以需要特殊处理一下
                $.ajax({
                    url: "avicit/pb/scoring/integral/integralController/sql.json",
                    dataType: "JSON",
                    type: "POST",
                    data: {
                        sql: sql
                    },
                    success: function (e) {
                        var jqGrid = $('#PARTY_WORK_TABLE').jqGrid("getRowData");
                        if (e.length != 0) {
                            for (var i = 0; i < jqGrid.length; i++) {
                                if (jqGrid[i].PARTY_NAME != e[0].PARTY_NAME) {
                                    $('#PARTY_WORK_TABLE').jqGrid('delRowData', jqGrid[i].ID);
                                }
                            }
                        } else {
                            for (var j = 0; j < jqGrid.length; j++) {
                                $('#PARTY_WORK_TABLE').jqGrid('delRowData', jqGrid[j].ID);
                            }
                        }

                    }
                })
            }
        }
    }
})

