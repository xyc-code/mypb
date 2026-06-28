function psutest(value) {
	if (value != null) {
		if (value.indexOf("/") != -1) {
			for (var i = 0; i < value.length; i++) {
				if (value[i] == "/") {
					var value = value.replace("/", "\n")
				}
			}
			htmlinner = "<textarea style='border-left-style:none;border-left-width：0px;border-right-style:none;border-right-width：0px;border-top-style:none;border-top-width：0px;border-bottom-style:none;border-bottm-width：0px;background:none;'>"
					+ value + "</textarea>"
			return htmlinner;
		} else {
			return value;
		}
	} else {
		return "";
	}
}

var params = {};
var searchString = window.location.search.substring(1).split('&');
if (window.location.href.split("?").length>1) {
	for (var i = 0; i < searchString.length; i++) {
		var param = searchString[i].split("=");
		params[param[0]] = param[1]
	}
	$(document).ready(function() {
		$("#searchAlltable3031ec233f1d6e4befc913cc78ae55b6757f").click();
		$("#layui-layer1").css("display","none")
		$("#DATA_1").val(params.sex);
		$("#PROFESSIONAL_RANK").val(params.rank)
		$("#EDUCATION_LEVEL").val(params.UNION);
		$("#BIRTHDAY_START").val(params.age);
		$("#BIRTHDAY_END").val(params.ageend);
		$("#CATEGORY_TYPE").val(params.eclass)
		var time =setTimeout(function(){
			$("#layui-layer1").css("display","")
			$(".layui-layer-btn0:eq(0)").click()
			$("#tableToolbarButton5ab3fc74c567434777d841a2ad2fe838621e").css('display',"none");
			$("#tableToolbarButton8cc6c6d8f89fec4aa618147169ad0aa02a7e").css("display","none");
			$("#tableToolbarButton2b938b1323302e40ccd89b6dcc067bee8725").css('display',"none");
			$('#tableToolbarButton781d92ad594b1e434c08ce25ff7859b56671').css('display','none');
			clearTimeout(time)
	},1000)
		


	})
}
