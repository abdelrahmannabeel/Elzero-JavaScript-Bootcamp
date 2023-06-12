// Selecting DOM elements
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

let arrayOfTasks = [];

getDataFromLocalStorage();
//
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value);
    addElementsToPageFrom(arrayOfTasks);
    addDeleteAllButton();
    addDataTLocalStorageFrom(arrayOfTasks);
    input.value = "";
  }
};
//Click on Task element
document.addEventListener("click", (e) => {
  //Task Done
  if (e.target.classList.contains("task")) {
    e.target.classList.toggle("done");
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
  }
  //Delete Button
  if (e.target.classList.contains("delete")) {
    //Remove From Page
    e.target.parentElement.remove();
    //Remove From Local Storage
    let targetId = e.target.parentElement.getAttribute("data-id");
    deleteTaskWith(targetId);
    if (arrayOfTasks.length == 0) {
      tasksDiv.innerHTML = "";
    }
  }
  //Delete All Button
  if (e.target.classList.contains("delete-all")) {
    tasksDiv.innerHTML = "";
    arrayOfTasks = [];
    window.localStorage.removeItem("tasks");
    //window.localStorage.clear();
  }
});

function addTaskToArray(taskText) {
  let task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  arrayOfTasks.push(task);
}
function addElementsToPageFrom(arrayOfTasks) {
  tasksDiv.innerHTML = "";
  arrayOfTasks.forEach((task) => {
    //Create Task Div
    let div = document.createElement("div");
    div.className = "task";
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.append(`${task.title}`);
    //Create Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.append(`Delete`);
    div.append(deleteBtn);
    console.log(div);
    //Add Task Div To Tasks
    tasksDiv.appendChild(div);
  });
}
function addDataTLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    arrayOfTasks = JSON.parse(data);
    addElementsToPageFrom(arrayOfTasks);
    addDeleteAllButton(); // Add the "Delete All" button
  }
}
function deleteTaskWith(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataTLocalStorageFrom(arrayOfTasks);
}
function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false
        ? (arrayOfTasks[i].completed = true)
        : (arrayOfTasks[i].completed = false);
    }
  }
  addDataTLocalStorageFrom(arrayOfTasks);
}
function addDeleteAllButton() {
  let deleteAllBtn = document.createElement("button");
  deleteAllBtn.className = "delete-all";
  deleteAllBtn.append(`Delete All`);
  tasksDiv.appendChild(deleteAllBtn);
  deleteAllBtn.style.display = "block";
}
