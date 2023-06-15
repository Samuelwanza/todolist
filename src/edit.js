export const editTodo = (label, task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (label.value != "") {
    tasks[task.index - 1].description = label.value;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    label.value = task.description;
  }
};
