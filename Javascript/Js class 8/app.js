var num1 = Number(prompt('enter first number'));
var num2 = Number(prompt('enter second number'));
var operator = prompt('plz select operator (+, -, *, /)');

var calculate = 0;

if(operator === '+'){
   calculate = num1 + num2;
}else if(operator === '-'){
   calculate = num1 - num2;
}else if(operator === '*'){
   calculate = num1 * num2;
}else if(operator === '/'){
    calculate = num1 / num2;
}else{
    document.write(`plz enter correct operator`);
}

document.write(`result is : ${calculate}`)
