document.getElementById("todo-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text !== "") {
    addTodoItem(text);
    input.value = "";
  }
});

function addTodoItem(text) {
  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.style.marginLeft = "10px";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("todo-list").appendChild(li);
}
