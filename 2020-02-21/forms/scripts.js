function check_form() {
	
	let full_name = document.getElementById("full_name").value;
	let phone = document.getElementById("phone").value;
	let email = document.getElementById("email").value;
	let favorite_color = document.getElementById("favorite_color").value;
	let newsletter = document.getElementById("newsletter").checked;
	let sms = document.querySelectorAll(".sms");
	
	
	let sms_checked = false;	
	for( let i=0; i < sms.length; i++ ) {
		if( sms[i].checked ) {
			sms_checked = true;
			break;
		}
	}
	
	alert(check_digits(phone));
	alert(check_email(email));
	
	
	function check_digits(str) {
		var pattern = /^\d+$/;
        return pattern.test(str); 
	}
	
	
	function check_email(mail) {
		var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(pattern.test(mail)) {
			return true;
		}
		else {
			return false;
		}
	}
	
	return false;
}