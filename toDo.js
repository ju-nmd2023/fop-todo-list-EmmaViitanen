const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addButton");

function addTask() {
  const inputValue = inputBox.value;

  if (inputValue !== "") {
    let liElement = document.createElement("li");
    liElement.innerText = inputValue;
    listContainer.appendChild(liElement);
  }
}

// for (const button of addButtonElements) {
addBtn.addEventListener("click", addTask);
// }
