


var ul = document.getElementById('ul');

var inp = document.getElementById('inp');

var todos = JSON.parse(localStorage.getItem('todos')) || [];

var statusTxt = 'Pending';



function todo() {
 
    if(inp.value.trim() === '') return

    console.log('inp.value',inp.value)

    var obj = {
        id : Date.now(),
        text : inp.value,
        completed : false, 
    }

    todos.push(obj);

    localStorage.setItem('todos', JSON.stringify(todos));

    renderTodos()

}

function renderTodos() {
    ul.innerHTML = '';
    for(let i = 0; i < todos.length; i++){
      let isCompleted = todos[i].completed;  
      let id = todos[i].id;  
      var li = document.createElement('li');
      li.innerText = todos[i].text;
      ul.appendChild(li);

    //   delete btn
    var dlt = document.createElement('button');
    dlt.innerHTML = 'Delete';
    li.appendChild(dlt);
    dlt.addEventListener('click', function () {
        deleteTodos(id)
    })

    // edit btn
    var edt = document.createElement('button');
    edt.innerHTML = 'Edit';
    li.appendChild(edt);
    edt.addEventListener('click', function () {
        editTodos(id);
    })

    // status btn 
    var status = document.createElement('button');
    status.innerHTML = statusTxt;
    li.appendChild(status);
    status.addEventListener('click', function () {
        changeStatus(isCompleted);
    })
    }

    
}

function deleteTodos(id) {
   var newTodos = [];
   for(let i = 0; i < todos.length; i++){
    if(todos[i].id !== id){
       newTodos.push(todos[i])     
    }
   }
   todos = newTodos;
   localStorage.setItem('todos', JSON.stringify(todos));
   renderTodos();
   
}

function editTodos(id) {
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === id){
            let update = prompt('Edit', todos[i].text);
            todos[i].text = update;
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }
    renderTodos()
}

function changeStatus(id) {
    var newTodos = [];
    for(let i = 0 ; i < todos.length; i++){
        if(todos[i].completed === false && todos[i].id === id){
            statusTxt = 'Completed';
        }else if(todos[i].completed === true && todos[i].id === id){
            statusTxt = 'Pending';
        }
         
       
    }
    renderTodos()
}

renderTodos()











