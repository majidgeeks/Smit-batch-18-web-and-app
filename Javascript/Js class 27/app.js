var signInEmail = document.getElementById('signInEmail');
var signInPass = document.getElementById('signInPass');

var signUpEmail = document.getElementById('signupEmail');
var signUpPass = document.getElementById('signupPass');


function signUp() {

    var email = signUpEmail.value;
    var password = signUpPass.value;
    
    var data = {
        email : email,
        password : password
    };

    localStorage.setItem('auth', JSON.stringify(data));

    alert('Account Created Success');

    window.location.href = 'signIn.html';
};

function signIn() {
     var email = signInEmail.value;
    var password = signInPass.value;
    
    var storage = JSON.parse(localStorage.getItem('auth'));
    
    if(email === storage.email && password === storage.password){
       alert('Sign In Success') 
       window.location.href = 'home.html';
    }else{
        alert('wrong credential')
    }
}



