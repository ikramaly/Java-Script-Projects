let input = document.querySelector("input");
let addTask = document.querySelector(".add-task");
let h2 = document.querySelector(".list h2");
let todoDiv = document.querySelector("#todo-div");

// let delBtn;?
addTask.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("add task btn clicked.");
    if(input.value==""){
        alert("please enter the task");
    }else{
        console.log(input.value);
        let taskListDiv = document.createElement("div");
        taskListDiv.classList.add("task-list");
        todoDiv.appendChild(taskListDiv);
        

        let listDiv = document.createElement("div");
        taskListDiv.appendChild(listDiv);
        listDiv.classList.add("list");

        let h2 = document.createElement("h2");
        listDiv.appendChild(h2);

        h2.textContent = input.value;

        let listbtn = document.createElement("div");
        listDiv.appendChild(listbtn)
        listbtn.classList.add("list-btn");

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        listbtn.appendChild(editBtn);
        editBtn.textContent = "Edit";

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        listbtn.appendChild(deleteBtn);
        deleteBtn.textContent = "Delete";
        
        // delBtn = document.querySelector(deleteBtn);


        input.value = "";        
    }
})
