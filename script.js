// script.js
const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("todolist"); 

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === '') {
        alert("Can't Be Empty"); 
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.querySelector("ul").appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
        inputBox.value = ''; 
        saveData();
    }
}

document.addEventListener("keydown", function deleteTask(e) {
    if (e.key === "Delete") {
        const selectedItem = document.querySelector("li.checked");
        if (selectedItem) {
            selectedItem.remove();
            saveData();
        }
    }
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

showTask();
