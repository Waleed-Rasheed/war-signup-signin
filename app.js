function SignUp(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
    location.href = "./signin.html";
}

function signin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(localStorage.getItem("email") == email && localStorage.getItem("password") == password){
        alert("Welcome User")
        location.href = "./welcome.html";
    }else{
        alert("Please SignUp")
    }
}

function logout(){
    location.href = "./index.html";
    localStorage.clear();
    
}