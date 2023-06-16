const markCompleted = (task, tasks) => {
  if (task && tasks.length !== 0) {
    task.completed = !task.completed;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};
export default markCompleted;
