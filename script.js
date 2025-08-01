// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn'); // ✅ Correct use of classList.add

    removeBtn.onclick = function () {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);
    taskInput.value = '';
}
