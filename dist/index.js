"use strict";
const todos = [];
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const todoList = document.querySelector("ul");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todo = {
        text: input.value,
        isChecked: false,
    };
    createTodo(todo);
    input.value = "";
});
function createTodo(todo) {
    todos.push(todo);
    todoList.insertAdjacentHTML("afterbegin", `<li><input type='checkbox' />${todo.text}</li>
    `);
}
