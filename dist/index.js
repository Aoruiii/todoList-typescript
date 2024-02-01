"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const todoList = document.querySelector("ul");
const todos = readTodos();
todos.forEach(createTodo);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todo = {
        text: input.value,
        isChecked: false,
    };
    todos.push(todo);
    createTodo(todo);
    saveTodos(todos);
    input.value = "";
});
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    const todosData = JSON.parse(todosJSON);
    return todosData;
}
function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodo(todo) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.isChecked;
    const list = document.createElement("li");
    list.append(checkbox);
    list.append(todo.text);
    todoList.insertAdjacentElement("afterbegin", list);
    checkbox.addEventListener("change", function () {
        todo.isChecked = !todo.isChecked;
        saveTodos(todos);
    });
}
