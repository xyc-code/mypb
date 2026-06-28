$(function() {
	$("#form").validate({
		rules: {
			wordCode: {
				required:true,
				date:true
			},
			wordName: "required",
			attribute01:{
				required:true,
				maxlength: 5
				},
			attribute02:"required",
			wordType:{
				required: true
			},
			wordLockTime:{
				required:true,
				dateISO:true
			},
			email: {
				required: true,
				email: true
			},
			lastname: "required",
			password: {
				required: true,
				minlength: 5
			},
			wordState:"required",
			  
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			"spam[]": {
				required: true
			},
			jungle: "required",
			integerOnly: {
				digits: true
			},
			wordLockUser: {
				number: true
			},
			rangeValidate: {
				range: [100, 2000] // �� min:100, max:2000	
			},
			xiaoshu3: {
				decimalLength: 3
			},
			phone: {
				mobile: true
			},
			idcard: {
				idcardno: true
			},
			remoteValidate: {
				remote: {
					url: "platform/h5demo/table/ajaxValid",
					type: "post",
					data: {
						para: function() {
							return $("#remoteValidate").val();
						}
					},
					dataFilter: function(data) { //
						if (data == "true") {
							return true;
						} else {
							return false;
						}
					}
				}
			}
		}
	});
});