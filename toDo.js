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
      toggleMarked(listItem, checkbox.checked);
    });

    listItem.append(checkbox);
  }
}

// Mark checkbox if task complete
function toggleMarked(listItem, isChecked) {
  listItem.classList.toggle("marked", isChecked);
}

function deleteBtn() {
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click");
  
  if (d)
}
