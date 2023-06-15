export const deleteTodo = (index) => {
  console.log(index);

  let tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(tasks);
  let newtask = tasks.filter((task) => task.index !== index);
  console.log(tasks);
  let counter = 1;
  newtask = newtask.map((task) => {
    task.index = counter;
    counter++;
  });
  location.reload();
  localStorage.setItem("tasks", JSON.stringify(newtask));
};
