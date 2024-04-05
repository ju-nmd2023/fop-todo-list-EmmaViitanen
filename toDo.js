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
    });
    listItem.append(checkbox);

    //* The following 3 lines plus line 35, of code was adapted
    /* from https://youtu.be/G0jO8kUrg-I?si=OarSnlL0n1wN1T56 Achieved: 4/4-2024 */
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    listItem.appendChild(span);
    span.addEventListener("click", function () {
      deleteBtn(listItem);
    });
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

function updateLocalStorage() {}
