function formvalidation() {
    
    var FirstName = document.forms["registration"]["FirstName"].value;
    var LastName = document.forms["registration"]["LastName"].value;
    var Email = document.forms["registration"]["Email"].value;
    var Password = document.forms["registration"]["Password"].value;
    var Reenterpassword=document.forms["registration"]["ReenterPassword"].value;
    var Phonenum=document.forms["registration"]["Age"].value;
    var Age = document.forms["registration"]["Phonenum"].value;
    var Address = document.forms["registration"]["Address"].value;
    var State = document.forms["registration"]["State"].value;
    
    var valid=true;
    if (FirstName === "") {
        document.getElementById('firstnameError').textContent= "Poor";
        valid = false;
    } else{
        document.getElementById('firstnameError').textContent= "";

    }

    // Validation for Last Name (non-empty)
    if (LastName === "") {
        document.getElementById('lastnameError').textContent = "Poor";
        valid = false;
    } else{
        document.getElementById('lastnameError').textContent = "";

    }


    // Validation for Email (simple pattern)
    if (Email === "") {
        document.getElementById('emailError').textContent = "Poor";
        valid = false;
    }else {
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(Email)) {
             document.getElementById('emailError').textContent = "Poor";
            valid = false;
        } else {
           document.getElementById('emailError').textContent = "Poor";    
        }
    }

    if (Password === "") {
        document.getElementById('passwordError').textContent = "Poor";
        valid = false;
    }else{
        document.getElementById('passwordError').textContent = "";

    }
    if (Reenterpassword === "") {
        document.getElementById('repasswordError').textContent = "Poor or Mismatched";
        valid = false;
    } else if (Reenterpassword !== Password) {
        document.getElementById('repasswordError').textContent = "";
        valid = false;
    }

    if (Age === "") {
        document.getElementById('ageError').textContent = "Poor";
        valid = false;
    } else if (isNaN(Age) || Age < 18) {
        document.getElementById('ageError').textContent = " ";
        valid = false;
    }

    if (Phonenum === "") {
        document.getElementById('phoneError').textContent= "Poor";
        valid = false;
    } else if (!isValidPhone(phone)) {
        document.getElementById('phoneError').innerText = " ";
        valid = false;
    }

    if (Address === "") {
        document.getElementById('addressError').textContent = "Poor";
        valid = false;
    }

    if (State === "") {
        document.getElementById('stateError').textContent = "Poor";
        valid = false;
    }

    return valid;
}








    