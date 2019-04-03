init = () => {
    renderDateAndTime();
}

function renderDateAndTime() {
    window.setInterval(() => {
        let date = new Date();
        minutes = date.getMinutes().toString().length == 1 ? '0'+date.getMinutes() : date.getMinutes(),
        hours = date.getHours().toString().length == 1 ? '0'+date.getHours() : date.getHours(),
        seconds=date.getSeconds().toString();
        ampm = date.getHours() >= 12 ? 'pm' : 'am',
        console.log(date.toDateString());
        document.getElementById('date-div').innerText = hours+":"+minutes+":"+seconds+" "+ampm;
    }, 1000)
}

window.addEventListener('load', init);


// form validation

function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    var re = /^(?=.*\d).{8,}$/
    return re.test(String(password).toLowerCase());
}

function validateMobile(mobile) {
    var re = /^[0-9]{10}$/
    return re.test(String(mobile).toLowerCase());
}

function validate() {
    let isEmailValid = validateEmail(document.getElementById('email-input').value)|| false;
    if (isEmailValid) {
        document.getElementById('email-msg').innerText = "Email is valid"
        document.getElementById('email-msg').setAttribute('color', 'green');
    } else {
        document.getElementById('email-msg').innerText = "Email is invalid"
        document.getElementById('email-msg').setAttribute('color', 'red');
    }

    let isPasswordValid = validatePassword(document.getElementById('password-input').value) || false;
    if (isPasswordValid) {
        document.getElementById('password-msg').innerText = "Password is valid"
        document.getElementById('password-msg').setAttribute('color', 'green');
    } else {
        document.getElementById('password-msg').innerText = "Password is invalid"
        document.getElementById('password-msg').setAttribute('color', 'red');
    }

    let isContactValid = validateMobile(document.getElementById('contact-input').value)|| false;
    if (isContactValid) {
        document.getElementById('contact-msg').innerText = "Contact is valid"
        document.getElementById('contact-msg').setAttribute('color', 'green');
    } else {
        document.getElementById('contact-msg').innerText = "Contact is invalid"
        document.getElementById('contact-msg').setAttribute('color', 'red');
    }

    // if (isEmailValid && isPasswordValid & isContactValid) {
    //     document.getElementById('submit').removeAttribute('disabled');
    // }

}


window.addEventListener('load', () => {
    document.getElementById('submit').addEventListener('click', validate);
});

