
// function test(a, b, c) {
//     return a + b + c
// };

// console.log(test());



// function test(a = 2, b = 5, c = 10) {
//     return a + b + c
// };

// console.log(test(10, 10, 10));


// let greet = function() {
//     console.log("Hello Students");
// };

// greet();


// function sayHello() {
//     console.log("Hello");
// }

// function sayBye() {
//     console.log('good bye')
// }


// function callFunction(say, day) {

//     say();
//     day();
// }

// callFunction(sayHello, sayBye);


// function outer() {
//     return function() {
//         console.log("Inner function");
//     };
// }

// let result = outer();
// result();


// function calculator(a, b, operation) {
//     return operation(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// console.log(calculator(5, 3, add));



let numbers = [1, 2, 3, 4];

let iterate = numbers.forEach((data) => {
    console.log(data);
    
})

console.log('iterate',iterate);


let test = numbers.map((data, index, arr) => {
    console.log(data, index, arr);
    //    return data
   
})

console.log(test);
