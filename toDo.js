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
    listItem.innerText = inputBox.value;
    listContainer.appendChild(listItem);

    // Create "completed" check box next to listItem
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      toggleMarked(checkbox.checked, listItem);
      updateLocalStorage();
    });
    listItem.append(checkbox);

    //* The following 3 lines plus line 35, of code was adapted
    /* from https://youtu.be/G0jO8kUrg-I?si=OarSnlL0n1wN1T56 Achieved: 4/4-2024 */
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    listItem.appendChild(span);
    span.addEventListener("click", function () {
      deleteBtn(listItem);
      updateLocalStorage();
    });

    updateLocalStorage();
  }
  inputBox.value = "";
}

// Mark checkbox if task complete
function toggleMarked(listItem, isChecked) {
  listItem.classList.toggle("marked", isChecked);
}

// Deletes list item
function deleteBtn(listItem) {
  listItem.remove();
}

//The following lines of code was adapted from ChatGPT, Accessed: 6/4-2024
// Update local storage with current tasks
function updateLocalStorage() {
  const tasks = Array.from(listContainer.children).map((item) => ({
    task: item.innerText,
    completed: item.classList.contains("marked"),
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Retrieve tasks from local storage on page load
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
