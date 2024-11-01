let addToButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer'); 
let inputField = document.getElementById('inputField');

addToButton.addEventListener('click', function() {
    if (inputField.value.trim() === "") {
        return; // Verhindern, dass leere Aufgaben hinzugefügt werden
    }

    var toDoItem = document.createElement('div');
    toDoItem.classList.add('to-do-item'); // Klasse für das To-Do-Element hinzufügen
    toDoItem.innerText = inputField.value; 
    toDoContainer.appendChild(toDoItem);
    inputField.value = ""; // Eingabefeld leeren

    // Strike through on click
    toDoItem.addEventListener('click', function() {
        toDoItem.classList.toggle('completed'); // Toggle completed class
    });

    // Remove on double click
    toDoItem.addEventListener('dblclick', function() {
        toDoItem.remove(); // Entferne den To-Do-Element
    });
});
