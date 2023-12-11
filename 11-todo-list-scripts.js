const todoList = [
  {
    name: "do the dishes",
    dueDate: "2012-12-22",
  },
  {
    name: "watch youtube",
    dueDate: "2012-12-22",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObj = todoList[i];
    // const name = todoObj.name;
    // const dueDate = todoObj.dueDate;
    const { name, dueDate } = todoObj;
    const html = `
    <div> ${name} </div>
    <div> ${dueDate} </div>
    <button class="delete-btn" onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    ">Delete</button>
    `;
    todoListHTML += html;
  }
  // console.log(todoListHTML);

  document.querySelector(".display-todo").innerHTML = todoListHTML;
}

function addTodos() {
  const todos = document.querySelector("#input-element");
  const name = todos.value;

  const dateInput = document.querySelector("#date-input");
  const dueDate = dateInput.value;

  if (!name || !dueDate) {
    alert("Warning! Invalid data!");
  } else {
    todoList.push({ name, dueDate });
    // console.log(todoList);
    todos.value = "";
    dateInput.value = "";
  }

  renderTodoList();
}
