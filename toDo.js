// Fetch HTML references
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addButton");

addBtn.addEventListener("click", addTask);

// Fetch and display task input
function addTask() {
  // Creates list element, adds input content, displays list item in ul
  const listItem = document.createElement("li");
  listItem.innerText = inputBox.value;
  listContainer.appendChild(listItem);

  // Mark checkbox if task complete
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
}
