// Fetch HTML references
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addButton");

addBtn.addEventListener("click", addTask);

// Fetch and display task input
function addTask() {
  // If the input box is empty, show nothing
  if (inputBox.value !== "") {
    // Creates list element, adds input content, displays list item in ul
    const listItem = document.createElement("li");

    // Create span for text
    const textSpan = document.createElement("span");
    textSpan.innerText = inputBox.value;

    // Create "completed" check box next to listItem
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      toggleMarked(checkbox.checked, listItem);
    });

    const deleteBtn = document.createElement("button");
    //* The following 3 lines plus line 35, of code was adapted
    /* from https://youtu.be/G0jO8kUrg-I?si=OarSnlL0n1wN1T56 Accessed: 4/4-2024 */
    deleteBtn.innerText = "u00d7";
    deleteBtn.addEventListener("click", function () {
      deleteTask(listItem);
    });

    listContainer.appendChild(listItem);
    listItem.append(checkbox, textSpan, deleteBtn);
  }
  inputBox.value = "";
}

// Mark checkbox if task complete
function toggleMarked(listItem, isChecked) {
  listItem.classList.toggle("marked", isChecked);
}

// Deletes list item
function deleteTask(listItem) {
  listItem.remove();
}

//The following lines of code was adapted from ChatGPT, Accessed: 6/4-2024
// Update local storage with current tasks
function updateLocalStorage() {
  const tasks = Array.from(listContainer.children).map((item) => ({
    task: item.innerText,
    completed: item.classList.contains("marked"),
    deleted: item.deleteBtn,
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// // Retrieve tasks from local storage on page load
document.addEventListener("DOMContentLoaded", function () {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.innerText = task.task;
    if (task.completed) {
      listItem.classList.add("marked");
    }
    listContainer.appendChild(listItem);
  });
});
