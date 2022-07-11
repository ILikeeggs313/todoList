let newTodoForm = document.querySelector('#newTodoForm')
let todoList = document.querySelector('#todoList');

newTodoForm.addEventListener('submit', function(e){
    e.preventDefault();
    let strikeThroughButton = document.createElement('button');
    strikeThroughButton.innerText = "X";
    
    let newTodo = document.createElement('li');
    newTodo.innerText = document.querySelector('#task').value;
    console.log(newTodo.innerText);
    todoList.appendChild(newTodo);
    newTodo.appendChild(strikeThroughButton);
    newTodoForm.reset();
});

todoList.addEventListener('click', function(e){
    let lowerCased = e.target.tagName.toLowerCase();
    if(lowerCased === 'li'){
        localStorage.setItem('saved', lowerCased);
        e.target.style.textDecoration = "line-through";

    }
    let removeBtn = document.querySelectorAll('li button');
    for(let btn of removeBtn){
        btn.addEventListener('click', function(evt){
            evt.target.parentElement.remove();
        })
    }

    localStorage.setItem("todoList", JSON.stringify(todoList.value));
   
})
if(localStorage.getItem('darkModeEnabled')){
    document.body.className = 'dark';
};
let toggleSwitch = document.querySelector('input[type="checkbox"]');
toggleSwitch.addEventListener('click', function(e){
    const {checked} = toggleSwitch;
    if(checked){
        localStorage.setItem('darkModeEnabled', checked);
    }
    else{
        localStorage.removeItem('darkModeEnabled');
    }


    document.body.className = checked ? "dark": ""
})

