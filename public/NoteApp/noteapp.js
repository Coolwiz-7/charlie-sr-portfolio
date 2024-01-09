const input = document.getElementById("input");
const push = document.getElementById("push");

const newTask = document.getElementById("newtask");

const container = document.querySelector(".container");

const addPush = () => {
  if (input.value == 0) {

    alert("please input a task")

  } else {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'taskname';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'title';
    titleSpan.textContent = input.value;

    const removeButton = document.createElement('button');
    removeButton.className = 'remove';

    const trashIcon = document.createElement('i');
    trashIcon.className = 'fa-solid fa-trash';

    removeButton.appendChild(trashIcon);

    const completeButton = document.createElement('button');
    completeButton.className = 'complete';

    const checkIcon = document.createElement('i');
    checkIcon.className = 'fa-solid fa-check';

    completeButton.appendChild(checkIcon);

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(removeButton);
    taskDiv.appendChild(completeButton);
    container.appendChild(taskDiv);

    const delTask = () => {
      removeButton.parentElement.remove();
    }

    removeButton.addEventListener("click", () => {
      delTask();
    });

    const completeTask = () => {
      titleSpan.style.textDecoration = 'line-through';
    }

    completeButton.addEventListener("click", () => {
      completeTask();
    });
  }
}

push.addEventListener("click", () => {
  addPush();
});