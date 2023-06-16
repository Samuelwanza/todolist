const Todo = () => {
  const itemToAdd = document.querySelector('#input').value;
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  if (itemToAdd.length !== 0) {
    const toDo = {
      index: tasks.length + 1,
      description: itemToAdd,
      completed: false,
    };
    tasks.push(toDo);
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
  tasks = JSON.parse(localStorage.getItem('tasks'));
  window.location.reload();
};
export default Todo;
