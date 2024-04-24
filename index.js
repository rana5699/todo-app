const getElement = (id) => {
  return document.getElementById(id);
};

const genareteId = () => {
  const id = "_" + Math.random().toString(20).substring(2, 9);

  return id;
};

const createTodo = (id, text) => {
  return `
      <li id="${id}" class="flex items-center justify-between mb-2">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-blue-500"
            />
            <span class="ml-2 text-gray-800">${text}</span>
          </label>
          <button class="text-red-500 hover:text-red-600 focus:outline-none">
            X
          </button>
        </li>
    `;
};

getElement("addTodo").addEventListener("click", () => {
  const todoInput = getElement("todoInput");
  const todoList = getElement("todoList");

  if (todoInput.value.trim() === "") {
    alert("please input something");
    return;
  }

  const id = genareteId();
  const text = todoInput.value.trim();
  const todoItem = createTodo(id, text);
  todoList.insertAdjacentHTML("beforeend", todoItem);

  todoInput.value = "";
});

getElement("todoList").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const deleteItem = e.target.closest("li");
    deleteItem.remove();
  }
});
