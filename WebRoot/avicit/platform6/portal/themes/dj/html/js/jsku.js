// nav导航
$(document).ready(function () {
            var blw = $(".myscrollbox>ul>li").width();
            //获取单个子元素所需宽度
            var liArr = $(".myscrollbox>ul").children("li");
            //获取子元素数量
            var mysw = $(".myscroll").width();
            //获取子元素所在区域宽度
            var mus = parseInt(mysw / blw);
            //计算出需要显示的子元素的数量
            var length = liArr.length - mus;
            //计算子元素可移动次数（被隐藏的子元素数量）
            var i = 0
            $("#right").click(function () {
                //点击i加1
                if (i < length-1) {
                    i++
                    $(".myscrollbox").css("left", -(blw * i));
                    //子元素集合向左移动，距离为子元素的宽度乘以i。
                } else {
                    $(".myscrollbox").css("left", -(blw * (length-1)));
                    //超出可移动范围后点击不再移动。最后几个隐藏的元素显示时i数值固定位已经移走的子元素数量。
                }
            });
            $("#left").click(function () {
                i--
                //点击i减1
                if (i >= 0) {
                    $(".myscrollbox").css("left", -(blw * i));
                    //子元素集合向右移动，距离为子元素的宽度乘以i。
                } else {
                    i = 0;
                    $(".myscrollbox").css("left", 0);
                    //超出可移动范围后点击不再移动。最前几个子元素被显示时i为0。
                }
            });
});

// 左侧导航
// $(function(){
// $('.main').css('left','0px');
    
//     var expanded = true;
    
//     $('.bar').click(function(){
//         if(expanded){
//             $('.main').animate({left:'-110'},500);
//             $('.bar').css('background-position','110px 0px');
//         }else{
//             $('.main').animate({left:'0px'},500);
//             $('.bar').css('background-position','0px 0px');
//         }
//         expanded = !expanded;
//     });

// });

//内容区菜单 
$(document).ready(function () {
            var blw = $(".a-myscrollbox>ul>li").width();
            //获取单个子元素所需宽度
            var liArr = $(".a-myscrollbox>ul").children("li");
            //获取子元素数量
            var mysw = $(".a-myscroll").width();
            //获取子元素所在区域宽度
            var mus = parseInt(mysw / blw);
            //计算出需要显示的子元素的数量
            var length = liArr.length - mus;
            //计算子元素可移动次数（被隐藏的子元素数量）
            var i = 0
            $("#a-right").click(function () {
                //点击i加1
                if (i < length-1) {
                    i++
                    $(".a-myscrollbox").css("left", -(blw * i));
                    //子元素集合向左移动，距离为子元素的宽度乘以i。
                } else {
                    $(".a-myscrollbox").css("left", -(blw * (length-1)));
                    //超出可移动范围后点击不再移动。最后几个隐藏的元素显示时i数值固定位已经移走的子元素数量。
                }
            });
            $("#a-left").click(function () {
                i--
                //点击i减1
                if (i >= 0) {
                    $(".a-myscrollbox").css("left", -(blw * i));
                    //子元素集合向右移动，距离为子元素的宽度乘以i。
                } else {
                    i = 0;
                    $(".a-myscrollbox").css("left", 0);
                    //超出可移动范围后点击不再移动。最前几个子元素被显示时i为0。
                }
            });
});
//待办事项菜单 
$(document).ready(function () {
            var blw = $(".b-myscrollbox>ul>li").width();
            //获取单个子元素所需宽度
            var liArr = $(".b-myscrollbox>ul").children("li");
            //获取子元素数量
            var mysw = $(".b-myscroll").width();
            //获取子元素所在区域宽度
            var mus = parseInt(mysw / blw);
            //计算出需要显示的子元素的数量
            var length = liArr.length - mus;
            //计算子元素可移动次数（被隐藏的子元素数量）
            var i = 0
            $("#b-right").click(function () {
                //点击i加1
                if (i < length-1) {
                    i++
                    $(".b-myscrollbox").css("left", -(blw * i));
                    //子元素集合向左移动，距离为子元素的宽度乘以i。
                } else {
                    $(".b-myscrollbox").css("left", -(blw * (length)));
                    //超出可移动范围后点击不再移动。最后几个隐藏的元素显示时i数值固定位已经移走的子元素数量。
                }
            });
            $("#b-left").click(function () {
                i--
                //点击i减1
                if (i >= 0) {
                    $(".b-myscrollbox").css("left", -(blw * i));
                    //子元素集合向右移动，距离为子元素的宽度乘以i。
                } else {
                    i = 0;
                    $(".b-myscrollbox").css("left", 0);
                    //超出可移动范围后点击不再移动。最前几个子元素被显示时i为0。
                }
            });
});


//党建图片轮播 
$(document).ready(function () {
    var blw = $(".txtScroll-left .bd ul li").width();
    //获取单个子元素所需宽度
    var liArr = $(".txtScroll-left .bd ul").children("li");
    //获取子元素数量
    var mysw = $(".txtScroll-left").width();
    //获取子元素所在区域宽度
    var mus = parseInt(mysw / blw);
    //计算出需要显示的子元素的数量
    var length = liArr.length - mus;
    //计算子元素可移动次数（被隐藏的子元素数量）
    var i = 0
    $("#next").click(function () {
        //点击i加1
        if (i < length-1) {
            i++
            $(".txtScroll-left .bd").css("left", -(blw * i));
            //子元素集合向左移动，距离为子元素的宽度乘以i。
        } else {
            $(".txtScroll-left .bd").css("left", -(blw * (length-1)));
            //超出可移动范围后点击不再移动。最后几个隐藏的元素显示时i数值固定位已经移走的子元素数量。
        }
    });
    $("#prev").click(function () {
        i--
        //点击i减1
        if (i >= 0) {
            $(".txtScroll-left .bd").css("left", -(blw * i));
            //子元素集合向右移动，距离为子元素的宽度乘以i。
        } else {
            i = 0;
            $(".txtScroll-left .bd").css("left", 0);
            //超出可移动范围后点击不再移动。最前几个子元素被显示时i为0。
        }
    });
});

//新闻视频头部切换
  $(function(){
        $(".change-title li").click(function(){
            $(this).addClass("c-active").siblings().removeClass("c-active");
            $(".c-mod").eq($(".change-title li").index(this)).show().siblings(".c-mod").hide();
        });
    });
 // nav导航
 // nav导航
$(document).ready(function () {
    var blw = $(".myscrollbox>ul>li").width();
    //获取单个子元素所需宽度
    var liArr = $(".myscrollbox>ul").children("li");
    //获取子元素数量
    var mysw = $(".myscroll").width();
    //获取子元素所在区域宽度
    var mus = parseInt(mysw / blw);
    //计算出需要显示的子元素的数量
    var length = liArr.length - mus;
    //计算子元素可移动次数（被隐藏的子元素数量）
    var i = 0
    $("#b-right").click(function () {
        //点击i加1
        if (i < length-1) {
            i++
            $(".myscrollbox").css("left", -(blw * i));
            //子元素集合向左移动，距离为子元素的宽度乘以i。
        } else {
            $(".myscrollbox").css("left", -(blw * (length-1)));
            //超出可移动范围后点击不再移动。最后几个隐藏的元素显示时i数值固定位已经移走的子元素数量。
        }
    });
    $("#b-left").click(function () {
        i--
        //点击i减1
        if (i >= 0) {
            $(".myscrollbox").css("left", -(blw * i));
            //子元素集合向右移动，距离为子元素的宽度乘以i。
        } else {
            i = 0;
            $(".myscrollbox").css("left", 0);
            //超出可移动范围后点击不再移动。最前几个子元素被显示时i为0。
        }
    });
});