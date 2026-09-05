let submitbtn = document.querySelector("#submit");
let popupbox = document.querySelector("#popup-box");
let okbtn = document.querySelector("#ok");


submitbtn.addEventListener("click",()=>{
    popupbox.style.top = "0px";
    popupbox.style.transition = ".3s";
    submitbtn.style.display = "none";
});

okbtn.addEventListener("click",()=>{
    popupbox.style.top = "-450px";
    // popupbox.style.transition = ".1s";
    submitbtn.style.display = "block";
})