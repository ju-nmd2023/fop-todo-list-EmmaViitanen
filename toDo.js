// Fetch HTML references
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addButton");

addBtn.addEventListener("click", addTask);

// Fetch and display task input
function addTask() {
  // If the input box is empty, show nothing
  if (inputBox.value !== "") {
    // Creates all the elements needed
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const textSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");

    // Adds text to span
    textSpan.innerText = inputBox.value;

    // "Completed" check box next to listItem
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      toggleMarked(checkbox.checked, listItem);
    });

    //* The following 3 lines plus line 35, of code was adapted
    /* from https://youtu.be/G0jO8kUrg-I?si=OarSnlL0n1wN1T56 Accessed: 4/4-2024 */
    deleteBtn.innerText = "\u00d7";
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
    task: item.querySelector("span").textContent,
    completed: item.classList.contains("marked"),
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
