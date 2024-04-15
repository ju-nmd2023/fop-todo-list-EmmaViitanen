// Fetch HTML references
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addButton");

addBtn.addEventListener("click", addTask);

// Fetch and display task input
function addTask(item) {
  // If the input box is empty, show nothing
  if (inputBox.value !== "") {
    // Creates all the elements needed
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const textSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");

    console.log("Added task data", textSpan);
    // Adds text to span
    textSpan.innerText = inputBox.value;

    // "Completed" check box next to listItem
    checkbox.type = "checkbox";

    toggleMarked(listItem, item.completed);

    checkbox.addEventListener("change", function () {
      toggleMarked(listItem, checkbox.checked);
      updateLocalStorage();
    });

    //* The following 3 lines plus line 35, of code was adapted
    /* from https://youtu.be/G0jO8kUrg-I?si=OarSnlL0n1wN1T56 Accessed: 4/4-2024 */
    deleteBtn.innerText = "\u00d7";
    deleteBtn.addEventListener("click", function () {
      deleteTask(listItem);
      updateLocalStorage();
    });

    listContainer.appendChild(listItem);
    listItem.append(checkbox, textSpan, deleteBtn);

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
    completed: item.classList.contains("completed"), // Use "completed" here
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load from local storage
function loadFromLocalStorage() {
  console.log("Loading tasks from local storage");
  const storedItems = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log("Stored Items:", storedItems);
  storedItems.forEach((item) => {
    addTask(item);
    console.log("hej", storedItems);
  });
}

loadFromLocalStorage();
