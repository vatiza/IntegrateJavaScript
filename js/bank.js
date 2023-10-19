document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const getEmail = emailField.value;


    const passField = document.getElementById('password');
    const getPass = passField.value;
    if (getEmail === 'mail.com' && getPass === 'admin') {
        alert('valid user')
    } else {
        alert('not valid user')
    };

})