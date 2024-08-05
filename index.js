var add = document.getElementById("add");
// catch the add button to make an event 
add.addEventListener('click', function(event) {
    // when click
    event.preventDefault();
    //prevent restart
    var taskInput = document.getElementById("taskInput");
    //catch the input box by id 
    var taskDescription = taskInput.value.trim();
    //catch the value of taskinput trim delte white spaces
if (taskDescription === "") {
        alert("Please enter a task.");
        return;
    }
    //if you have not enter any thing 
    var taskList = document.getElementById("addtask");
    //catch the list to add in it 
    var newTaskId = "task" + (taskList.children.length + 1);
    //calculate the next childeren in the list to add the value
    var li = document.createElement('li');
    //create an li
    var checkbox = document.createElement('input');
    // Creating the Checkbox Element This creates a new <input> element in the DOM.
    checkbox.type = "checkbox";
    checkbox.id = newTaskId;
    //give an id and create an checkbox
    var label = document.createElement('label');
    label.setAttribute('for', newTaskId);
    label.textContent = taskDescription;
    //create a label with the input in the box 
    taskList.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(label);
});
var remove = document.getElementById("remove");
remove.addEventListener('click',function(event){
event.preventDefault();
var taskList = document.getElementById('addtask');

    if (taskList.children.length > 0) {
        taskList.removeChild(taskList.lastChild);
    }
});
