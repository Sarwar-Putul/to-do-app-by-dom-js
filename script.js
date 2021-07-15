// Select Element and assign them to variables.

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let toDoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');


// Function 

let createTask = function(task) {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);


    return listItem;

}


let addTask = function(event) {
    event.preventDefault();

    let listItem = createTask(newTask.value);
    toDoUl.appendChild(listItem);
    newTask.value = "";

    // bind the new list item to the incomplete list 
    bindIncompleteItems(listItem, completeTask);
}

let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    completeUl.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindIncompleteItems = function(taskItem, checkboxClick) {
    let checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton =taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for(let i = 0; i < toDoUl.children.length; i++) {
    bindIncompleteItems(toDoUl.children[i], completeTask);
};

for(let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
};

form.addEventListener('submit', addTask);