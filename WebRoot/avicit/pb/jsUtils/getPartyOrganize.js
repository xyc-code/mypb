var partyMemberOrganize;
var partyMemberOrganizeId;
var userId = pageParams.session.userId;
avicAjax.ajax({
		 url:"platform/avicit/pb/member/partyMember/partyMemberController/operation/getPartyMemberOrganization",
		 data : userId,
		 type : 'post',
		 dataType : 'json',
		 success : function(r){
			 if (r.flag == "success"){
				 _self.reLoad();
				 if(id == "insert"){
					 layer.close(_self.insertIndex);
				 }else{
					 layer.close(_self.editIndex);
				 }
				 layer.msg('保存成功！');
			 }else{
				 var alertMsg = '保存失败,请联系管理员!'
                 if(r.errorMsg != null && r.errorMsg != ''){
                     alertMsg = r.errorMsg;
                 }
                 layer.alert(alertMsg, {
                       icon: 7,
                       area: ['400px', ''], //宽高
                       closeBtn: 0,
                       btn: ['关闭'],
                       title:"提示"
                     }
                 );
			 } 
		 }
	 });