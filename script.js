let form = document.querySelector(".tudo-app");
let input = document.querySelector(".addTask");
let tasks = document.querySelector(".tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userData = input.value;

  if (!userData) {
    alert("Please enter your task!");
    return;
  }

  let task = document.createElement("div");
  task.classList.add("task");
  let task_content = document.createElement("div");
  task_content.classList.add("task-content");

  let task_input = document.createElement("input");
  task_input.classList.add("taskAdded");
  task_input.value = userData;
  task_input.setAttribute("readonly","readonly");
  task_input.type="text";

  task.appendChild(task_input);
  task_content.appendChild(task);
  tasks.appendChild(task_content);

//   CREATING BUTTONS....!

  let actions = document.createElement("div");
  actions.classList.add("actions");

  let tasks_edit = document.createElement("button");
  tasks_edit.classList.add("edit");
  tasks_edit.innerHTML = "Edit";

  let tasks_delete = document.createElement("button");
  tasks_delete.classList.add("delete");
  tasks_delete.innerHTML = "Delete";
  
  actions.appendChild(tasks_edit);
  actions.appendChild(tasks_delete);
  task_content.appendChild(actions);

  input.value = "";

//   EDIT USER DATA...

tasks_edit.addEventListener("click", ()=>{
    if(tasks_edit.innerHTML=="Edit"){
        task_input.removeAttribute("readonly");
        tasks_edit.innerHTML = "Save";
        task_input.focus();
    }else{
        task_input.setAttribute("readonly", "readonly");
        tasks_edit.innerHTML = "Edit";
    }
})

// Delete User Data...
tasks_delete.addEventListener("click", ()=>{
    tasks.removeChild(task_content)
})
});
