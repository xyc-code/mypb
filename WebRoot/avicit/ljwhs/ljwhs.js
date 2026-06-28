/*廉洁文化室*/
var flag=true;
if(typeof   EformFlow=="function"){

    var msg="";
    beforeSaveEvent.addBeforeSaveEvent(function(jsonData){
        var firstDate= jsonData.SY_DATE_S;
        var lastDate=jsonData.SY_DATE_E;


        if(firstDate>lastDate){
            layer.msg("起始日期不能大于结束日期");
            flag=false;
            return flag;
        }


        $.ajax({
            cache : false,
            type : "post",
            url : "platform/avicit/ljwhjs/ljwhjsController/operation/checkedD1AndD2",
            dataType : "json",
            data : {
                firstDate : firstDate,
                lastDate:lastDate,
                formId : id,

            },
            async : false,
            error : function(request) {
            },
            success : function(data) {

                if(data.num>0){//
                    flag=false;
                    layer.msg("该时间段已被占用，请选择其他时间段");
                }else{
                    flag=true;
                }
            }
        });
        return flag;

    })

}else{
    var msg="";
    beforeSaveEvent.addBeforeSaveEvent(function(jsonData){

        var firstDate= jsonData.SY_DATE_S;
        var lastDate=jsonData.SY_DATE_E;
        if(firstDate>lastDate){
            layer.msg("起始日期不能大于结束日期");
            flag=false;
            return flag;
        }
        $.ajax({
            cache : false,
            type : "post",
            url : "platform/avicit/ljwhjs/ljwhjsController/operation/checkedD1AndD2",
            dataType : "json",
            data : {
                firstDate : firstDate,
                lastDate:lastDate

            },
            async : false,
            error : function(request) {
            },
            success : function(data) {

                if(data.num>0){//
                    flag=false;
                    layer.msg("该时间段已被占用，请选择其他时间段");
                }else{
                    flag=true;
                }

            }
        });



        return flag;
    })

}
