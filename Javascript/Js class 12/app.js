// functions 



// function Calculate(n1, n2, operate) {
//     var total;
//     if(operate === '+'){
//       total = n1 + n2;
//     }else if(operate === '-'){
//       total = n1 - n2;
//     }else if(operate === '*'){
//       total = n1 * n2;
//     }else if(operate === '/'){
//       total = n1 / n2;
//     }else{
//         alert('plz enter right number or operator ');
//     }

//     return total;      
//     };

    
//     var num1 = Number(prompt('enter num1'));
//     var num2 = Number(prompt('enter num2'));
//     var operator = prompt('+, -, *, /');   

//     var output = Calculate(num1, num2, operator);

//     // console.log('output',output);

//     // var heading = document.getElementById('h1');
//     // // heading.innerHTML = 'i will display';
//     // heading.innerText = `calculation is ${output}`;

//     // console.log('heading',heading)


// function calculator(n1, n2, operate) {
//     var total;
//     if(operate === '+'){
//       total = n1 + n2;
//     }else if(operate === '-'){
//       total = n1 - n2;
//     }else if(operate === '*'){
//       total = n1 * n2;
//     }else if(operate === '/'){
//       total = n1 / n2;
//     }else{
//         alert('plz enter right number or operator ');
//     };
    
//     return total;
    
// };

// var num1 = +prompt('enter num1');
// var num2 = +prompt('enter num2');
// var operator = prompt('enter operator');

// var output = calculator(num1, num2, operator);

// // var heading = document.getElementById('hello');
// // heading.innerHTML = output;

// var heading = document.createElement('h1');

// heading.innerHTML = output;

// document.body.appendChild(heading);


var myName = 'smit';

function scope() {
    var newName = 'Saylani';
    return newName;

}

console.log(scope());

console.log('myName',myName)

console.log('newName',newName)


