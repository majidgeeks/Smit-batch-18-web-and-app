// if else

// let isHungry = true;

// if (isHungry) {
//   console.log(" Let's eat!");
// } else {
//   console.log(" Maybe later...");
// }    

// primitive data types
// 1. 'string'
// 2. number
// 3.undefined
// 4.null 
//    5. boolean = true / false

// Non prmitive data types 

// var myName = undefined
// var myName = null
// let name1 = undefined
// name1 = ''
// var name3 = 0
// const war = 'america'
// // let myWorld;
// // myWorld = 'it is'

// // if(war == 'america'){
    
// // }
// var war2 = 12;

// if(war2 === 10){
//    alert('yes it is ')
// }
// else{
//     alert('not')
// }

//   var player = prompt('from which city you are');
//   var score = 0;
//   var userIQ = 'not available'
//   var city = "karachi";

//   if(player === city){
//     score++;
//     userIQ = "genius";
//     document.write(userIQ + '<br>') ;
//     document.write(score);
//     alert('you can come')
//   }
//   else{
//     alert('you are not allowed')
//   }

//   if (x === correctAnswer) {
//     score++;
//     userIQ = "genius";
//     alert("Correct!");
//   }


// (x + y === a - b)

// var x = 10;
// var y = 10;
// var a = 40;
// var b = 40;

// if(x + y !== a - b){
//     alert('yes it is false');
// }


// var age = 30;
// var correction = 'Age is correct';
// var notCorrect = 'Your age is wrong';

// if(age < 20){
//    alert(correction);
// }else{
//    alert(notCorrect);
// }



// nested if else 

var sub1 = Number(prompt("enter sub 1 marks")); 
var sub2 = Number(prompt("enter sub 2 marks"));
var sub3 = Number(prompt("enter sub 3 marks"));
var sub4 = Number(prompt("enter sub 4 marks"));
var sub5 = Number(prompt("enter sub 5 marks"));

var sum = sub1 + sub2 + sub3 + sub4 + sub5;

// document.write('')

var marksObtained = sum

var totalMarks = 500;

var percentage = (sum * 100) / totalMarks

document.write(`percentage ${percentage}`)

var grade;

if(percentage <= 100 && percentage > 90){
   grade = 'A+'
   document.write(`<h1> grade is ${grade}  </h1>`)
}else if( percentage <= 90 && percentage > 80 ){
   grade = "A1";
   document.write(`<h1> grade is ${grade}  </h1>`)
}else if( percentage <= 80 && percentage > 70 ){
   grade = "A";
   document.write(`<h1> grade is ${grade}  </h1>`)
}else if( percentage <= 70 && percentage > 60 ){
   grade = "B";
   document.write(`<h1> grade is ${grade}  </h1>`)
}else if( percentage <= 60 && percentage > 50 ){
   grade = "C";
   document.write(`<h1> grade is ${grade}  </h1>`)
}else if( percentage <= 50 && percentage > 40 ){
   grade = "D";
   document.write(`<h1> grade is ${grade}  </h1>`)
}else{
   grade = 'Chal bhai ja yahan se'
   document.write(`<h1> grade is ${grade}  </h1>`)
   
}



