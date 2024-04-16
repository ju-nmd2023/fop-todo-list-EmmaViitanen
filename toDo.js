// Fetch HTML references
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addButton");

// Adds task if add-button is pressed
addBtn.addEventListener("click", addTask);
// Adds task if enter key is pressed
inputBox.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    // Check if Enter key is pressed
    addTask();
  }
});

loadFromLocalStorage();

// Create items
function createListItem(taskText, completed) {
  // creates list item
  const listItem = document.createElement("li");
  const textSpan = document.createElement("span");
  textSpan.innerText = taskText;

  // Creates checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;
  checkbox.addEventListener("change", function () {
    toggleMarked(listItem, checkbox.checked);
    updateLocalStorage();
  });

  // If completed, add to class
  if (completed) {
    listItem.classList.add("completed");
  }

  // delete button
  const deleteBtn = document.createElement("button");
  //* The following 3 lines plus line 35, of code was adapted
  /* from https://youtu.be/G0jO8kUrg-I?si=OarSnlL0n1wN1T56 Accessed: 4/4-2024 */
  deleteBtn.innerText = "\u00d7";
  deleteBtn.addEventListener("click", function () {
    deleteTask(listItem);
    updateLocalStorage();
  });

  listItem.append(checkbox, textSpan, deleteBtn);
  return listItem;
}

// Fetch and display task input
function addTask(item) {
  // If the input box is empty, show nothing
  if (inputBox.value !== "") {
    const listItem = createListItem(inputBox.value, false);
    listContainer.appendChild(listItem);
    updateLocalStorage();
  }
  inputBox.value = "";
}

// Mark checkbox if task complete
function toggleMarked(listItem, isChecked) {
  listItem.classList.toggle("completed", isChecked);
}

// Deletes list item
function deleteTask(listItem) {
  listItem.remove();
}

//The following lines of code was adapted from ChatGPT, Accessed: 6/4-2024
// Update local storage with current tasks

function updateLocalStorage() {
  console.log("Updating local storage");
  let tasks = Array.from(listContainer.children).map((item) => ({
    task: item.querySelector("span").textContent,
    completed: item.querySelector("input[type=checkbox]").checked,
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load from local storage
function loadFromLocalStorage() {
  console.log("Loading tasks from local storage");
  const storedItems = JSON.parse(localStorage.getItem("tasks")) || [];
  storedItems.forEach((item) => {
    const listItem = createListItem(item.task, item.completed);
    listContainer.appendChild(listItem);
    console.log("loading:" + item.task);
  });
}
