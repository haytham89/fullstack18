window.onload = function () {
    /* let btn = document.querySelector("#my-button");
    btn.addEventListener("click", function () {
        alert("Clicked")
    }); */
}

function check_form() {
   
    let errorsString = '';
    document.getElementById("errors").innerHTML = '';
    
    let fullName = document.getElementById('full_name').value;
    let email = document.getElementById('email').value;
    let ID_string = document.getElementById('ID').value;
    let favoriteColor = document.getElementById('favorite_color').value;
    


    /*
     * SMS chekcs
     **/
    let allSmsRadios = document.querySelectorAll(".sms");  

    let isSmsChecked = false;	
    
    for( let i=0; i < allSmsRadios.length; i++ ) {
		if( allSmsRadios[i].checked == true ) {
			isSmsChecked = true;
			break;
		}
    }
    



    if( fullName.length < 2 ) {
        errorsString += 'Please enter your name<br>';
    }

    if( check_email( email ) == false ) {
        errorsString += 'Please fix your email<br>';
    }

    if( !check_digits( ID_string ) || ID_string.length != 9 ) {
        errorsString += 'Please fix your ID<br>';
    }

    if( favoriteColor == 0 ) {
        errorsString += 'Please choose a color<br>';
    }

    if( isSmsChecked == false ) {
        errorsString += 'Please mark sms<br>';
    }

    if( errorsString != '' ) {//There are mistakes
        document.getElementById("errors").innerHTML = errorsString;
        return false;
    }
    else { //All OK - send form   
        //document.getElementById("myForm").submit();
        return true;
    }
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


function check_digits(str) {
    var pattern = /^\d+$/;
    return pattern.test(str); 
}
