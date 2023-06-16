import ellipsis from './EllipsisVertical.svg';

const showTodos = (tasks) => {
  const todolist = document.getElementById('todolist');
  todolist.innerHTML = '';
  tasks.forEach((task) => {
    const element = document.createElement('li');
    const taskInput = document.createElement('input');
    const label = document.createElement('label');
    const img3 = document.createElement('img');
    taskInput.type = 'checkbox';
    label.textContent = task.description;

    taskInput.value = task.description;
    img3.src = ellipsis;
    element.appendChild(taskInput);
    element.appendChild(label);
    element.appendChild(img3);

    element.classList.add('item-decorator1');

    todolist.appendChild(element);
    return element;
  });
};
export default showTodos;
