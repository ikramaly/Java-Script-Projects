let heading= document.querySelector("h1");
let body = document.querySelector("body");
let p = document.querySelector("p");

p.addEventListener("click",(e)=>{
    if(body.style.backgroundColor == "black"){
        heading.textContent = "Light Mode";
        p.textContent = "🌞";
        body.style.backgroundColor = "white";
        heading.style.color = "black";
    }else{
        heading.textContent = "Dark Mode";
        p.textContent = "🌛";
        body.style.backgroundColor = "black";
        heading.style.color = "white";
    }
})
