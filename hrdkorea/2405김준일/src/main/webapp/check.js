function joinCheck() {
	if(document.frm.custname.values == 0){
		alert("회원성명이 입력되지 않았습니다.");
		frm.custname.focus();
		return false;
	}
	if(document.frm.phone.values == 0){
		alert("회원성명이 입력되지 않았습니다.");
		frm.phone.focus();
		return false;
	}
	if(document.frm.address.values == 0){
		alert("회원성명이 입력되지 않았습니다.");
		frm.address.focus();
		return false;
	}
	if(document.frm.joindate.values == 0){
		alert("회원성명이 입력되지 않았습니다.");
		frm.joindate.focus();
		return false;
	}
	if(document.frm.grade.values == 0){
		alert("회원성명이 입력되지 않았습니다.");
		frm.grade.focus();
		return false;
	}
	if(document.frm.city.values == 0){
		alert("회원성명이 입력되지 않았습니다.");
		frm.city.focus();
		return false;
	}
	alert("회원 등록이 완료되었습니다.")
	return true;
}

function search() {
	window.location = 'list.jsp';
	
	
	
}