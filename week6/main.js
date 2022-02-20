// function todoList() {
//     var todoItem = document.getElementById("todoInput").value;
//     var text = document.createTextNode(todoItem);
//     var newTodoItem = document.createElement("P");
//     newTodoItem.appendChild(text);
//     document.getElementById('todoList').appendChild(newTodoItem);
// }
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);

    var addToDoButton = document.getElementById('addBtn');
    var todoContainer = document.getElementById('todoList');
    var todoInput = document.getElementById('todoInput');
    //var closeButton = document.getElementsByTagName("P");
    localStorage.setItem('todoItemsRef', JSON.stringify(todoInput));
    addToDoButton.addEventListener('click', () => {
        var todoItem = document.createElement('LI');
        todoItem.innerText = todoInput.value
        todoContainer.appendChild(todoItem);
        todoInput.value = '';

        todoItem.addEventListener("click", function () {
            todoItem.style.textDecoration = "line-through";
        });

        todoItem.addEventListener('dblclick', function () {
            todoContainer.removeChild(todoInput);
        });
        todoItem.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'js-todo-list') {
                ev.target.classList.toggle('checked');
            }
        }, false);

    });

}