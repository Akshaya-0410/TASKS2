function formvalidation() {
    
    var FirstName = document.forms["form"]["firstname"].value;
    var LastName = document.forms["form"]["lastname"].value;
    var Email = document.forms["form"]["email"].value;
    var Phone = document.forms["form"]["phone"].value;
    var Address= document.forms["form"]["address"].value;
    var City= document.forms["form"]["city"].value;
    var valid=true;
    if (FirstName === "") {
        document.getElementsByClassName('error').textContent= "Please supply your firstname";
        valid = false;
    } else{
        document.getElementsByClassName('error').textContent= "";

    }

    // Validation for Last Name (non-empty)
    if (LastName === "") {
        document.getElementsByClassName('error').textContent = "Please supply your lastname";
        valid = false;
    } else{
        document.getElementsByClassName('error').textContent = "";

    }


    // Validation for Email (simple pattern)
    if (Email === "") {
        document.getElementById('error').textContent = "Please supply your email address";
        valid = false;
    }else {
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(Email)) {
        document.getElementById('error').textContent = "Please supply your email address";
            valid = false;
        } else {
           document.getElementById('emailError').textContent = "Please supply your email address";    
        }
    }
    if (Phone === "") {
        document.getElementById('error').textContent= "Please supply your phone number";
        valid = false;
    } else if (!isValidPhone(Phone)) {
        document.getElementById('phoneError').innerText = " ";
        valid = false;
    }
    if (Address === "") {
        document.getElementById('error').textContent = "Please supply your address";
        valid = false;
    }

    if (City === "") {
        document.getElementById('error').textContent = "Please sypply you city";
        valid = false;
    }

    return valid;
}

