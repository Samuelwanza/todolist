let tasks = JSON.parse(localStorage.getItem("tasks"));
if (tasks === null) {
  tasks = localStorage.setItem("tasks", JSON.stringify([]));
}
export default tasks;
