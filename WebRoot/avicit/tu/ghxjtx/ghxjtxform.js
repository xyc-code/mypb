/*function format (time){
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
};*/




/**
 * @param jmTime 届满时间
 * @param n
 */
function formatGhhjTime(jmTime,n){
    if(jmTime&&n){
        var date_now = new Date(jmTime);
        var year=date_now.getFullYear();//获取当前时间的年份
        var month=date_now.getMonth();//
        var day=date_now.getDate();
        var days=new Date(year,month,0);//将获取到的年月赋值给days
        days=days.getDate();
        var year2=year;
        var month2=parseInt(month)-n+1;//获取当前月份的1-n个月后的月份
        if(month2<=0){
            year2=parseInt(year2)-parseInt(month2 / 12 ==0 ?1: parseInt(month2) / 12 );
            month2=12-(Math.abs(month2) % 12 );
        }
        var day2=day;
        var days2=new Date(year2,month2,0);
        days2=days2.getDate();
        if(day2>days2){
            day2=days2;
        }
        if(month2<10){
            month2='0'+month2;
        }
        var t2=year2+'-'+ month2+'-'+ day2;

      return t2;
    }
    return '';

}

function setVal(rowData){
    var createTime=rowData.FINISH_DATE;

    if(!createTime){
        layer.msg('请先维护工会基础数据，任期届满时间！', {
            icon: 1,
            time: 2000//1秒关闭
        });
    }


    var hjxjtx = formatGhhjTime(createTime,2);//应提醒换届时间，在届满时间基础上往前推2个月
    $("input[name='TJHJ_TIME']").val(hjxjtx);
    //本届提醒 提出换届请示时间
    var tchjqs =  formatGhhjTime(createTime,1);//提出换届请示，在届满时间基础上往前推1个月
    //本届提醒 提出预备人选请示时间
    $("input[name='TJYBRX_TIME']").val(tchjqs);
    $("input[name='ZKDYDH_TIME']").val(createTime);

}