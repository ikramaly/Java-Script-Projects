let input = document.querySelector("input");
let img = document.querySelector("img");

img.addEventListener("click",(e)=>{
    if(input.type == "password"){
        img.src= "eye-unhide.svg";
        input.type = "text";
        console.log(input.type)
        console.log("Unhidden value : ",input.value)
    }else{
        input.type = "password";
        img.src = "eye-hide.svg";
        console.log("hidden value : ",input.value)
    }
    // input.type = "text";
})