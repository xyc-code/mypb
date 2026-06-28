$(function() {
	$("#myform").validate({
		rules: {
			myname: "required",
			email: {
				required: true,
				email: true
			},
			lastname: "required",
			password: {
				required: true,
				minlength: 5
			},
			gender: {
				required: true
			},
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
			numberOnly: {
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