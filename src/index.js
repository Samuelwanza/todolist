import "./style.css";
import minimalist from "./minimalist-logo.png";
import arrowpath from "./arrowpath.svg";
import enter from "./enter.png";
import ellipsis from "./EllipsisVertical.svg";
import tasks from "./tasks";
import { Todo } from "./todo";
import { editTodo } from "./edit";
import deleteImage from "./delete.png";
import { deleteTodo } from "./delete";
const component = () => {
  const mainDiv = document.createElement("div");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header-div");
  const headerText = document.createElement("h2");
  headerText.textContent = "minimalist";

  const Logo = document.createElement("img");
  Logo.classList.add("header-logo");
  Logo.src = minimalist;
  headerDiv.appendChild(Logo);

  mainDiv.appendChild(headerDiv);
  mainDiv.appendChild(headerText);

  const listWrapper = document.createElement("div");
  listWrapper.classList.add("list-wrapper");

  const headerWrapper = document.createElement("div");
  const inputWrapper = document.createElement("div");

  const img = document.createElement("img");
  img.src = arrowpath;

  const img2 = document.createElement("img");
  img2.src = enter;

  const todoInput = document.createElement("input");
  todoInput.id = "input";
  todoInput.placeholder = "Add to your list...";
  const todolist = document.createElement("ul");
  todolist.id = "todolist";
  const title = document.createElement("h3");
  title.textContent = "Tasks";

  headerWrapper.appendChild(title);
  headerWrapper.appendChild(img);
  headerWrapper.classList.add("item-decorator");

  inputWrapper.appendChild(todoInput);
  inputWrapper.appendChild(img2);
  inputWrapper.classList.add("item-decorator");

  img2.id = "button";

  listWrapper.appendChild(headerWrapper);
  listWrapper.appendChild(inputWrapper);
  mainDiv.appendChild(listWrapper);

  const thisTasks = JSON.parse(localStorage.getItem("tasks"));
  if (thisTasks.length != 0) {
    thisTasks.forEach((task) => {
      if (task && task.description) {
        const element = document.createElement("li");
        const taskInput = document.createElement("input");
        const label = document.createElement("input");
        taskInput.classList.add("label");
        const img3 = document.createElement("img");
        taskInput.type = "checkbox";
        label.value = task.description;

        img3.src = ellipsis;
        element.appendChild(taskInput);
        element.appendChild(label);
        element.appendChild(img3);

        element.classList.add("item-decorator1");
        element.addEventListener("keyup", (e) => {
          img3.src = " ";
          img3.src = deleteImage;
          if (e.key == "Enter") {
            editTodo(label, task);
            img3.src = ellipsis;
          }
        });
        img3.addEventListener("click", () => {
          if ((img3.src = deleteImage)) {
            deleteTodo(task.index);
          }
        });

        todolist.appendChild(element);
        return element;
      }
    });
  }
  const minifooter = document.createElement("p");
  minifooter.textContent = "Clear all completed";
  minifooter.classList.add("mini-decorator");
  listWrapper.appendChild(todolist);
  listWrapper.appendChild(minifooter);
  mainDiv.appendChild(listWrapper);
  return mainDiv;
};

document.body.appendChild(component());
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("button").addEventListener("click", Todo);
});
