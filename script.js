function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var error = document.getElementById("error");

    if (taskInput.value === "") {
        error.innerText = "* Please enter a task.";
        return;
    }

    var listItem = document.createElement("li");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    var time = hours + ":" + minutes + " " + ampm;

    listItem.innerHTML = '<input type="checkbox" onclick="completeTask(this)">' +
        '<span>' + taskInput.value + '</span>' +
        '<span style="margin-left: 5px; color: gray;">' + time + '</span>' +
        '<button onclick="editTask(this)">Edit</button>' +
        '<button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(listItem);

    taskInput.value = "";
}

function completeTask(checkbox) {
    var listItem = checkbox.parentNode;
    listItem.removeChild(checkbox);
    listItem.querySelector("button").remove();
}

function editTask(editButton) {
    var listItem = editButton.parentNode;
    var taskText = listItem.querySelector("span").innerText;

    var newTask = prompt("Edit task:", taskText);
    if (newTask && newTask.trim() !== "") {
        listItem.querySelector("span").innerText = newTask;
    }
}

function deleteTask(deleteButton) {
    var listItem = deleteButton.parentNode;
    listItem.parentNode.removeChild(listItem);
}
