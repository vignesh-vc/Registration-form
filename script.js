
var nameCheck=false
var phoneCheck=false
var email=false
var password=false
var conformpassword=false
//containers
var usernamecontainers=document.querySelector(".username")
var phonenumbercontainers=document.querySelector(".phonenumber")
var emailcontainers=document.querySelector(".email")
var passwordcontainers=document.querySelector(".password")
var conformpasswordcontainers=document.querySelector(".conform-password")
//selecting icon
var usernameIcon=usernamecontainers.querySelector("i")
var phonenumberIcon=phonenumbercontainers.querySelector("i")
var emailIcon=emailcontainers.querySelector("i")
var passwordIcon=passwordcontainers.querySelector("i")
var conformpasswordIcon=conformpasswordcontainers.querySelector("i")
//selecting label

var usernameLabel=usernamecontainers.querySelector("label")
var phonenumberLabel=phonenumbercontainers.querySelector("label")
var emailLabel=emailcontainers.querySelector("label")
var passwordLabel=passwordcontainers.querySelector("label")
var conformpasswordLabel=conformpasswordcontainers.querySelector("label")
//selecting input box
var usernameInput=document.getElementById("username")
var phonenumberInput=document.getElementById("phonenumber")
var emailInput=document.getElementById("email")
var passwordInput=document.getElementById("password")
var conformpasswordInput=document.getElementById("conform-password")
//username
usernameInput.addEventListener("keyup",function(){
    var enteredValue=usernameInput.value
    if(enteredValue==""){
        usernameLabel.style.visibility="visible"
        usernameIcon.style.visibility="hidden"
        nameCheck=false
    }
    else{
        usernameIcon.style.visibility="visible"
        usernameLabel.style.visibility="hidden"
        nameCheck=true
    }
})
 //phonenumber
 phonenumberInput.addEventListener("keyup",function(){
    var enteredValue=phonenumberInput.value
    if(enteredValue==""){
        phonenumberLabel.style.visibility="visible"
        phonenumberIcon.style.visibility="hidden"
        phonenumberLabel.textContent="Please Enter The Mobile Number"
        phoneCheck=false
    }
    else if(enteredValue.length!=10){
        phonenumberIcon.style.visibility="hidden"
        phonenumberLabel.style.visibility="visible"
        phonenumberLabel.textContent="Please Enter 10 Digit Mobile Number"
        phoneCheck=false
    }
    else{
        phonenumberIcon.style.visibility="visible"
        phonenumberLabel.style.visibility="hidden"
        phoneCheck=true
    }
})


//email
emailInput.addEventListener("keyup",function(){
    var enteredValue=emailInput.value
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (enteredValue === "") {
        emailLabel.style.visibility = "visible";
        emailIcon.style.visibility = "hidden";
        emailCheck = false;
    } else if (!emailRegex.test(enteredValue)) {
        emailIcon.style.visibility = "hidden";
        emailLabel.style.visibility = "visible";
        emailLabel.textContent = "Please Enter a Valid Email Address";
        emailCheck = false;
    } else {
        emailIcon.style.visibility = "visible";
        emailLabel.style.visibility = "hidden";
        emailCheck = true;
    }
});


// Password validation function


//// Password input
passwordInput.addEventListener("keyup", function () {
    var enteredValue = passwordInput.value;
    function validatePassword(password) {
        // Minimum 8 characters
        if (password.length < 8) {
            return false;
        }
    
        // At least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            return false;
        }
    
        // At least one lowercase letter
        if (!/[a-z]/.test(password)) {
            return false;
        }
    
        // At least one digit
        if (!/\d/.test(password)) {
            return false;
        }
    
        // At least one special character (e.g., @)
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            return false;
        }
    
        return true;
    }
    if (enteredValue === "") {
        passwordLabel.style.visibility = "visible";
        passwordIcon.style.visibility = "hidden";
        password = false;
        
    } else if (!validatePassword(enteredValue)) {
        passwordLabel.style.visibility = "visible";
        passwordIcon.style.visibility = "hidden";
        passwordLabel.textContent = "Password must be strong: at least 8 characters, one uppercase, one lowercase, one digit, and one special character";
        password = false;
    } else {
        passwordLabel.style.visibility = "hidden";
        passwordIcon.style.visibility = "visible";
        password = true;
    }
});



//conform password
//// Password input
conformpasswordInput.addEventListener("keyup", function () {
    var enteredValue = conformpasswordInput.value;
    function validatePassword(conformpassword) {
        // Minimum 8 characters
        if (conformpassword.length < 8) {
            return false;
        }
    
        // At least one uppercase letter
        if (!/[A-Z]/.test(conformpassword)) {
            return false;
        }
    
        // At least one lowercase letter
        if (!/[a-z]/.test(conformpassword)) {
            return false;
        }
    
        // At least one digit
        if (!/\d/.test(conformpassword)) {
            return false;
        }
    
        // At least one special character (e.g., @)
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(conformpassword)) {
            return false;
        }
    
        return true;
    }
    if (enteredValue === "") {
        conformpasswordLabel.style.visibility = "visible";
        conformpasswordIcon.style.visibility = "hidden";
        conformpassword = false;
        
    } else if (!validatePassword(enteredValue)) {
        conformpasswordLabel.style.visibility = "visible";
        conformpasswordIcon.style.visibility = "hidden";
        conformpasswordLabel.textContent = "Password must be strong: at least 8 characters, one uppercase, one lowercase, one digit, and one special character";
        conformpassword = false;
    } else {
        conformpasswordLabel.style.visibility = "hidden";
        conformpasswordIcon.style.visibility = "visible";
        conformpassword = true;
    }
});


//selecting submit button

var submitbuttonInput=document.getElementById("submitbutton")
var popup=document.querySelector(".popup")
submitbuttonInput.addEventListener("click",function(e){
//preventing default refresh
    e.preventDefault()

    if(nameCheck==true&&phoneCheck==true&&emailCheck==true&&password==true&&conformpassword==true){
        popup.style.top="40px"
    popup.style.opacity="1"
    popup.textContent="Form Submitted Successfully"
    popup.style.backgroundColor="blue"
    }
    else{
        popup.style.top="40px"
        popup.style.opacity="1"
        popup.textContent="Please Fill The Form"
        popup.style.backgroundColor="pink"
    }
    setTimeout(function(){
        popup.style.top="-40px"
        popup.style.opacity="0"
    },2000)

})
