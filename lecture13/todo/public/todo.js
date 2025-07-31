let todoInput = document.querySelector('.todotitle');
let todoForm = document.querySelector('#todoform');
let todoContainer = document.querySelector('.todoContainer');
let todoArray = [];

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let value = inputValue();
    if (!value.trim()) return;

    let newTodo = {
        id: Math.floor(Math.random() * 10000),
        title: value
    };
    todoArray.push(newTodo);
    showAllTodo(todoArray); 
    todoInput.value = '';
});

function inputValue() {
    return todoInput.value;
}

function addTodo(todo) {
    let li = document.createElement('li');
    li.classList.add('todoItem');
    li.style.display = 'flex';
    li.setAttribute('id', `${todo.id}`);

    li.innerHTML = `
        <h1 class="todoTitle">${todo.title}</h1>
        <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    todoContainer.appendChild(li);
}

function showAllTodo(todoArray) {
    todoContainer.innerHTML = '';
    todoArray.forEach(todo => addTodo(todo));
}
