// console

// hoisting

// test()

// console.log('num1',num1)

// var num1 = 10;

// console.log(name1)

//  ======================================== temporal dead zone
// let name1 = 'majid';

// console.log('num1',num1)
// console.log('name1',name1)

// var num2 = 10;

// num2 = 100;
// // var num2 = 60;
// console.log(num2)

// let world = 'wonderfull';
// // let world

// world = 'lovely';

// console.log(world)

// var bus;
// console.log(car)

// var car = 'honda';
// let world;


// function test() {
//     // console.log('hello')
//     let world = 'lovely';
//     var car = 'corola';
// }
// test()

// // console.log(world);
// console.log(car)

// test()


// var num1 = 10;

// if(num1 === 10){
//     var name2 = 'Honda';
//     let name3 = 'suzuki';
// }

// console.log(name2)
// console.log('name3',name3)


var ul = document.getElementById('ul');

var inp = document.getElementById('inp');

var todos = JSON.parse(localStorage.getItem('todos')) || [];



function todo() {
 
    // if(inp.value.trim() !== '') return

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
    // ul.innerHTML = '';
    for(let i = 0; i < todos.length; i++){
      var li = document.createElement('li');
      li.innerText = todos[i].text;
      ul.appendChild(li);
    }
    // var li = 
}









