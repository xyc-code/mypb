
//文体活动支出 职工慰问支出 劳模工作室建设支出 劳动竞赛支出 春、秋游活动支出 观影活动支出 职工小家建设支出 其他支出
       $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody").find("tr").each(function(){

                if(parseInt($(this).index()) >= 7){
                    $(this).hide();

                }
            });
            var selType= $("#selType").val();

         var selTypeArr=selType.split(",");

         for(var i=0;i<selTypeArr.length;i++){

             if("文体活动支出"== selTypeArr[i]){

                 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(7)").show();
                 $("#DYN_PA_XXZL1_control").show();
                 $('#DYN_PA_XXZL1').jqGrid('resizeGrid');
                 $("#DYN_PA_XXZL1").find("tr").css("display","");

             }
             if("职工慰问支出"== selTypeArr[i]){
                 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(8)").show();
                 $("#DYN_PA_CD_control").show();
                 $('#DYN_PA_CD').jqGrid('resizeGrid');
                 $("#DYN_PA_CD").find("tr").css("display","");


             }
             if("劳模工作室建设支出"== selTypeArr[i]){
                 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(9)").show();
                 $("#DYN_PA_GB_control").show();
                 $('#DYN_PA_GB').jqGrid('resizeGrid');
                 $("#DYN_PA_GB").find("tr").css("display","");


             }
             if("劳动竞赛支出"== selTypeArr[i]){
                 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(10)").show();
                 $("#DYN_PA_SB_control").show();
                 $('#DYN_PA_SB').jqGrid('resizeGrid');
                 $("#DYN_PA_SB").find("tr").css("display","");


             }
             if("春、秋游活动支出"== selTypeArr[i]){
                 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(11)").show();
                 $("#DYN_PA_DHDQ_control").show();
                 $('#DYN_PA_DHDQ').jqGrid('resizeGrid');
                 $("#DYN_PA_DHDQ").find("tr").css("display","");


             }
             if("观影活动支出"==selType){
                 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(12)").show();
                 $("#DYN_PA_MPJJ_control").show();
                 $('#DYN_PA_MPJJ').jqGrid('resizeGrid');
                 $("#DYN_PA_MPJJ").find("tr").css("display","");


             }
             if("职工小家建设支出"== selTypeArr[i]){
                 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(13)").show();
                 $("#DYN_PA_KNDY_control").show();
                 $('#DYN_PA_KNDY').jqGrid('resizeGrid');
                 $("#DYN_PA_KNDY").find("tr").css("display","");


             }
             if("其他支出"== selTypeArr[i]){
                 $("#lMJH3JDnxyYiB8kfWVx4jh8C88DeC8wK>tbody>tr:eq(14)").show();
                 $("#DYN_PA_BZ_control").show();
                 $('#DYN_PA_BZ').jqGrid('resizeGrid');
                 $("#DYN_PA_BZ").find("tr").css("display","");


             }

         }






