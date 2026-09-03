let span = document.querySelector("span");
let btns = document.querySelectorAll(".btn")

// function for increment 
let count = 0;
function Increment(){
    return count++;
}
function Decrement(){
    return count--;
}
function Reset(){
    return count = 0;
}

btns.forEach(element => {
    if(element.innerHTML == "Increment"){
        element.addEventListener("click",(event)=>{
            Increment();
            span.innerText = count;
        })
    }else if (element.innerHTML == "Decrement"){
        element.addEventListener("click",()=>{
            Decrement();
            span.innerText = count;
        })
    }else if(element.innerHTML == "Reset"){
        element.addEventListener("click",()=>{
            Reset();
            span.innerText = count;
        })
    }
});

let person = {
    name: "Ikram",
    age : 30,
    greet: function(){
        console.log(`Hello ${this.name}`)
    },
    userData : function(){
        let name = "Manish";
        let arrowFunction = ()=>{
            let name = "ikram";
            console.log(`This inherits from regular func : ${this.name}`)
        }   
        arrowFunction();
    }
};
// console.log(person);
// person.greet();
person.greet();
person.userData();







