document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
  
    const createTaskElement = (task) => {
      const li = document.createElement('li');
      li.className = 'd-flex justify-content-between align-items-center';
      li.textContent = task;
  
      const buttons = document.createElement('div');
  
      const doneButton = document.createElement('button');
      doneButton.innerHTML = '<i class="bi bi-check-circle text-success"></i>';
      doneButton.addEventListener('click', () => li.classList.toggle('done'));
  
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<i class="bi bi-trash text-danger"></i>';
      deleteButton.addEventListener('click', () => li.remove());
  
      buttons.appendChild(doneButton);
      buttons.appendChild(deleteButton);
      li.appendChild(buttons);
  
      return li;
    };
  
    addTaskButton.addEventListener('click', () => {
      const task = taskInput.value.trim();
      if (task) {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
        taskInput.value = '';
      }
    });
  
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTaskButton.click();
      }
    });
  });
  