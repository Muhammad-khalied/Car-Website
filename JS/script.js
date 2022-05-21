function view() {

    var x = document.getElementById("Bar");
    var t = document.getElementsByClassName("icon");
    if (x.className === "bar") { x.className += " view2"; }
    else { x.className = "bar"; }
}




const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mail = document.getElementById('mail');
const mobile = document.getElementById('mobile');
const password2 = document.getElementById('password-check');
const password = document.getElementById('password');
var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

form.addEventListener('submit', e => { e.preventDefault(); checkInputs(); });




function checkInputs() {


    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const mailValue = mail.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const mobileValue = mobile.value.trim();


    if (fnameValue === '') {
        setErrorFor(fname, 'Name cannot be blank');
    }
    else if(hasNumber(fnameValue) || (format.test(fnameValue)))
    {
        setErrorFor(fname, 'Name must have characters only');
    }
    else {
        setSuccessFor(fname);
    }
    if (lnameValue === '') {
        setErrorFor(lname, 'Name cannot be blank');
    }
    else if(hasNumber(lnameValue) || (format.test(lnameValue)))
    {
        setErrorFor(lname, 'Name must have characters only');
    }
    else {
        setSuccessFor(lname);
    }
    if (mailValue === '') {
        setErrorFor(mail, 'Email cannot be blank');
    } else if (!isEmail(mailValue)) {
        setErrorFor(mail, 'Not a valid email');
    } else {
        setSuccessFor(mail);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    }
    else if(passwordValue > 'Z' || passwordValue < 'A')
    {
        setErrorFor(password, 'It must start with upper case');
    } 
    else if(passwordValue.length != 8)
    {
        setErrorFor(password, 'Password must be 8 characters');
    }
    else if(!hasNumber(passwordValue) || !format.test(passwordValue))
    {
        setErrorFor(password, 'Add one digit and special character');
    }
    else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccessFor(password2);
    }
    if(mobileValue === '')
    {
        setErrorFor(mobile, 'Mobile cannot be blank');
    }
    else if(mobileValue.length !=11)
    {
        setErrorFor(mobile, 'Mobile must be 11 digit');
    }
    else{
        setSuccessFor(mobile);
    }
}




function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'input-div error';
    small.innerText = message;
}



function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-div success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function hasNumber(myString) {
    return /\d/.test(myString);
  }

