if(typeof   EformFlow=="function"){


}else{}//非流程表单页面，也就是点击发起流程按钮弹出的页面

    beforeSaveEvent.addBeforeSaveEvent(function(jsonData){
        var submitExpenses=$("#SUBMIT_EXPENSES").val();//申报金额
        var flag=false;
        var diseaseType = $("input[name='DISEASE_TYPE']:checked").val();
        var status=$("#STATUS").val();
        if(status!="yes"){
            layer.msg("血液透析，器官移植，每年只提交一次申请!!!");
            return false;
        }


        if(parseFloat(submitExpenses)<=0){
            layer.msg("未达最低报销标准，报销金额0元");
            return false;
        }
     //   if(jsonData.subTableData!="{}"){

            if(diseaseType=="0"){//一般住院治疗
                var allRowData=$("#DA_CARE_MEDICINE_ITEM").jqGrid("getRowData");

               // var subTables=JSON.parse(jsonData.subTableData).DA_CARE_MEDICINE_ITEM;
                if(allRowData.length>1){
                    allRowData=swap(allRowData);
                }

                var checked=false;
                if(allRowData.length>1){
                    checked=true;//校验多次记录时间间隔
                }
                var firstDate;
                var lastDate;
                for(var i=0;i<allRowData.length;i++){

                    if(diseaseType=="0") {//一般住院治疗,开始时间，结束时间必须填写

                        if(!allRowData[i].INHOSP_DATE){
                            layer.msg("一般住院治疗，住院开始日期必须填写！");
                            flag=true;
                            break;
                        }

                        if(!allRowData[i].OUTHOSP_DATE){
                            layer.msg("一般住院治疗，住院结束日期必须填写！");
                            flag=true;
                            break;
                        }
                    }

                    //subTables[i].INHOSP_DATE;//开始日期
                    //subTables[i].OUTHOSP_DATE;//结束日期
                    if(allRowData[i].INHOSP_DATE>allRowData[i].OUTHOSP_DATE){
                        layer.msg("起始日期不能大于结束日期");
                        flag=true;
                        break;
                    }
                    if(parseFloat(allRowData[i].HEALTH_EXPENSE)<=parseFloat(allRowData[i].OVERALL_EXPENSE)){
                        layer.msg("医疗费金额不能小于统筹资金支付金额，请核对填写信息");
                        flag=true;
                        break;
                    }


                    if(i%2==0){//取结束日期
                        firstDate= allRowData[i].OUTHOSP_DATE;//结束日期
                    }else{//取开始日期
                        lastDate= allRowData[i].INHOSP_DATE;//开始日期
                    }

                    if(firstDate&&lastDate){
                        if(firstDate>=lastDate){
                            layer.msg("上一次结束日期不能小于下一次开始时间");
                            flag=true;
                            break;
                        }
                    }


                }

                if(flag){//
                    return false;
                }
        }


    var balance=$("#BALANCE").val();//年度余额
      if(balance<=0){
          layer.msg("年度余额以不足");
          return false;
      }

  //   }
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




/*提交前校验*/
function dealMoney() {


    var diseaseType = $("input[name='DISEASE_TYPE']:checked").val();
    var patienterId = $("#PATIENTER_ID").val();//报销人id
    var submitExpensess=$("#SUBMIT_EXPENSES").val();
    var retVal=false;

       avicAjax.ajax({
           url : 'platform/avicit/tradeunion/daCareMedicine/daCareMedicineController/caltulateMoney.json',
           data : {
               patienterId : patienterId,
               diseaseType : diseaseType,
               submitExpensess : submitExpensess
           },
           type : 'POST',
           dataType : 'JSON',
           async : false,
           success : function(result) {

               if (result.flag == "success") {
                   //layer.msg(result.retMessage);

                   $("#BALANCE").val(result.retValue);

               } else {
                   layer.msg(result.retMessage);

                     $("#BALANCE").val(result.retValue);

               }

               if(result.isSubmit=="yes"){
                   retVal = true;
                   $("#STATUS").val("yes");
               }else{
                   layer.msg("血液透析，器官移植，每年只提交一次申请!!!");
                   $("#STATUS").val("no");
               }

           }
       });



        return retVal;
};


/**
 * 更新 个人支付总金额 字段
 * @returns {boolean}
 */
function  personExpensesCalculateValue(){

    var reg=/,/g;
    var num = $("#HEALTH_EXPENSES").val().replace(reg,"");//医疗费总金额
    var HEALTH_EXPENSES = Number(num).toFixed(2);
    var reg=/,/g;
    var num = $("#OVERALL_EXPENSES").val().replace(reg,"");//统筹基金支付总金额
    var OVERALL_EXPENSES = Number(num).toFixed(2);
    var calculateValue = HEALTH_EXPENSES-OVERALL_EXPENSES;
    if (isNaN(calculateValue)){
        return false;
    }
    if(calculateValue>99999999.99){
        calculateValue = 99999999.99;
        layer.msg("个人支付金额最大值为\""+99999999.99+"\"");
    }
    if(calculateValue>0){
        $('#PERSON_EXPENSES').val(calculateValue).trigger("change").trigger("blur");//人支付总金额
    }


}

/*
爱心医疗
申报金额计算
*一般住院医疗：
	 * 个人支付金额2000~3000元按10％比例计发爱心医疗互助金；
	 * 3001~4000元按15％比例计发爱心医疗互助金；
	 * 4001~5000元按20％比例计发爱心医疗互助金；
	 * 5001~6000元按25％比例计发爱心医疗互助金；
	 * 6001~7000元按30％比例计发爱心医疗互助金；
	 * 7001~8000元按35％比例计发爱心医疗互助金；
	 * 8001~9000元按40％比例计发爱心医疗互助金；
	 * 9001~10000元按45％比例计发爱心医疗互助金；
	 * 10001元以上按50％比例计发爱心医疗互助金。
	 * 特殊情况：此类型个人支付金额少于2000元时，弹窗提示（未达最低报销标准，报销金额0元，同时申请报销金额显示0元）；
	 * （二）	特殊门诊：可报销个人支付金额50％的费用；
	 * （三）	血液透析：每年只提交一次申请，个人支付金额小于等于2000元，按照实际个人支付金额全额报销；个人支付金额大于2000元，按照2000元报销。
	 * （四）	器官移植：每年只提交一次申请，个人支付金额小于等于10000元，按照实际个人支付金额全额报销；个人支付金额大于10000元，按照10000元报销。 */
function  submitExpenses(type){


    var diseaseType=$("input[name='DISEASE_TYPE']:checked").val();
   // console.log("疾病类型"+diseaseType);
    var reg=/,/g;
    var personExpenses = $("#PERSON_EXPENSES").val().replace(reg,"");//个人支付总金额
    if("0"==diseaseType){//一般住院医疗

        if (personExpenses >= 2000 && personExpenses <= 3000) {
           // console.log("个人支付总金额："+personExpenses);
            var personExpense = Number(personExpenses*10/100).toFixed(2);
            //console.log("申请报销金额："+personExpense);
           // formatCurrency();
            $("#SUBMIT_EXPENSES").val(personExpense).trigger("change");//申请报销金额
        } else if (personExpenses > 3000 && personExpenses <= 4000) {
            //console.log("个人支付总金额："+personExpenses);
            var personExpense = Number(personExpenses*15/100).toFixed(2);
            //console.log("申请报销金额："+personExpense);
            $("#SUBMIT_EXPENSES").val(personExpense).trigger("change");//申请报销金额

        } else if (personExpenses > 4001 && personExpenses <= 5000) {
           // console.log("个人支付总金额："+personExpenses);
            var personExpense = Number(personExpenses*20/100).toFixed(2);
            //console.log("申请报销金额："+personExpense);
            $("#SUBMIT_EXPENSES").val(personExpense).trigger("change");//申请报销金额

        } else if (personExpenses > 5001 && personExpenses <= 6000) {
            //console.log("个人支付总金额："+personExpenses);
            var personExpense = Number(personExpenses*25/100).toFixed(2);
            //console.log("申请报销金额："+personExpense);
            $("#SUBMIT_EXPENSES").val(personExpense).trigger("change");//申请报销金额
        } else if (personExpenses > 6001 && personExpenses <= 7000) {
           // console.log("个人支付总金额："+personExpenses);
            var personExpense = Number(personExpenses*30/100).toFixed(2);
            //console.log("申请报销金额："+personExpense);
            $("#SUBMIT_EXPENSES").val(personExpense).trigger("change");//申请报销金额
        } else if (personExpenses > 7001 && personExpenses <= 8000) {
            //console.log("个人支付总金额："+personExpenses);
            var personExpense = Number(personExpenses*35/100).toFixed(2);
            //console.log("申请报销金额："+personExpense);
            $("#SUBMIT_EXPENSES").val(personExpense).trigger("change");//申请报销金额
        } else if (personExpenses > 8001 && personExpenses <= 9000) {
            //console.log("个人支付总金额："+personExpenses);
            var personExpense = Number(personExpenses*40/100).toFixed(2);
            //console.log("申请报销金额："+personExpense);
            $("#SUBMIT_EXPENSES").val(personExpense).trigger("change");//申请报销金额
        } else if (personExpenses > 9001 && personExpenses <= 10000) {
            //console.log("个人支付总金额："+personExpenses);
            var personExpense = Number(personExpenses*45/100).toFixed(2);
            //console.log("申请报销金额："+personExpense);
            $("#SUBMIT_EXPENSES").val(personExpense).trigger("change");//申请报销金额
        } else if(personExpenses>10001) {
            //console.log("个人支付总金额："+personExpenses);
            var personExpense = Number(personExpenses*50/100).toFixed(2);
            //console.log("申请报销金额："+personExpense);
            $("#SUBMIT_EXPENSES").val(personExpense).trigger("change");//申请报销金额
        }else{//小于2000以下的

            $("#SUBMIT_EXPENSES").val(0.00).trigger("change");//申请报销金额
        }


    }

    if("1"==diseaseType){//特殊门诊
        //console.log("个人支付总金额："+personExpenses);
        var personExpense = Number(personExpenses*50/100).toFixed(2);
        //console.log("申请报销金额："+personExpense);
        $("#SUBMIT_EXPENSES").val(personExpense).trigger("change");//申请报销金额
    }
    if("2"==diseaseType){//血液透析
        if (personExpenses >= 2000) {//大于2000按两千报销
            $("#SUBMIT_EXPENSES").val(2000.00).trigger("change");//申请报销金额
        }else{//小于2000按实际金额报销

            $("#SUBMIT_EXPENSES").val(Number(personExpenses).toFixed(2)).trigger("change");//申请报销金额
        }


    }
    if("3"==diseaseType){//器官移植 大于10000按10000报销
        if (personExpenses >= 10000) {
            $("#SUBMIT_EXPENSES").val(10000.00).trigger("change");//申请报销金额
        }else{//小于10000按实际金额报销
            $("#SUBMIT_EXPENSES").val(Number(personExpenses).toFixed(2)).trigger("change");//申请报销金额
        }
    }



}

/*选择疾病类型先校验是否满足条件*/
function checkJblx(){
    var diseaseType = $("input[name='DISEASE_TYPE']:checked").val();
    var patienterId = $("#PATIENTER_ID").val();//报销人id

    if(!patienterId){
        layer.msg("请选择患者");
        $("input[name='DISEASE_TYPE']").prop('checked',false);//取消选中状态
        return false;
    }

    if("2"==diseaseType||"3"==diseaseType){
        if(patienterId){
            avicAjax.ajax({
                url: 'platform/avicit/tradeunion/daCareMedicine/daCareMedicineController/caltulateJbType.json',
                data: {
                    id:id,
                    patienterId: patienterId,
                    diseaseType: diseaseType
                },
                type: 'POST',
                dataType: 'JSON',
                async: false,
                success: function (result) {
                    if (result.flag == "success") {
                        $("#STATUS").val(result.isSubmit);
                    } else {
                        $("#STATUS").val(result.isSubmit);

                    }
                    if(result.isSubmit=="no"){
                        layer.alert(result.retMessage);
                    }

                }
            });

        }else{
            layer.msg("请选择患者");
        }

    }else{
        $("#STATUS").val("yes");
    }
    submitExpenses("type");

}


/*申请金额改变事件*/
function submitExpensesFunc(){

  var submitExpenses=  $("#SUBMIT_EXPENSES").val();//申请报销金额

    if(submitExpenses&&submitExpenses>0){
        dealMoney();
    }

}


