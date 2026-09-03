let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let btn = document.querySelector("button");
// let f = document.querySelectorAll("input");


btn.addEventListener("click",(event)=>{
    console.log("Form Data : ");
    if(firstName.value==''){
        firstName.classList.add("empty-firstname");
        firstName.className = "empty-firstname";
        console.log("Input is Empty.");
    }else{
        console.log("Hiii")
    }
    let firstname = firstName.value;
    let lastname = lastName.value;
    let mail = email.value;
    let pass = password.value;
    let confirmpass = confirmPassword.value;
    // console.log("firstname : ",firstname);
    // console.log("lastName : ",lastname);
    // console.log("email : ",mail);
    // console.log("password : ",pass);
    // console.log("confirmPassword : ",confirmpass);    
})

