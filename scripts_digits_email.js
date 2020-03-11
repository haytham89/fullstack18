window.onload = function () {
    /* let btn = document.querySelector("#my-button");
    btn.addEventListener("click", function () {
        alert("Clicked")
    }); */
}

function check_form() {
   
    let fullName = document.getElementById('full_name').value;
    let email = document.getElementById('email').value;

    
    if( fullName.length < 2 ) {
        alert('Please enter your name');
        return;
    }

    if( !check_email( email ) ) {
        alert('Please fix your email');
        return;
    }

    //All OK - send form   

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
