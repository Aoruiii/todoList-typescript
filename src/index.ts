"use strict";

interface Todo {
  text: string;
  isChecked: boolean;
}

const todos: Todo[] = [];

const btn = document.getElementById("btn") as HTMLButtonElement;

const input = document.getElementById("todoinput") as HTMLInputElement;

const form = document.querySelector("form")!;

const todoList = document.querySelector("ul")!;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const todo = {
    text: input.value,
    isChecked: false,
  };
  createTodo(todo);
  input.value = "";
});

function createTodo(todo: Todo): void {
  todos.push(todo);
  todoList.insertAdjacentHTML(
    "afterbegin",
    `<li><input type='checkbox' />${todo.text}</li>
    `
  );
}

// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(input.value);
// });
