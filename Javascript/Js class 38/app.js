// rest operator

// // Without Rest Operator
// function sum1(a, b, c, ...numbers) {
//   let alpha = a + b + c;
//   let arrSum = numbers.reduce((accumulated, current) => {
//        return accumulated + current;
//   });
//   return alpha + arrSum;
// }

// console.log(sum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ));


// // with rest operator
// function sum(a, ...numbers) {
//   console.log(a, numbers); // will receive array 
// }

// let arr = [1,2,4,]
// let arr1 = [12, 14, 15]

// sum(1, arr, arr1);


// let arr = [1, 2, 3, 4, 5, 6];

// let sumNumber = arr.reduce((accumulated, current) => {
//       return accumulated + current
// });

// console.log(sumNumber);


//  Array Destructuring with Rest operator

// let arr = [1, 2, 3, 4, 5];

// let [a, b, ...rest] = arr;

// console.log(a);    // 1
// console.log(b);    // 2
// console.log(rest); // [3, 4, 5]



// Object Destructuring with Rest
// let obj = {
//   name: "Majid",
//   age: 22,
//   city: "Karachi"
// };

// let { name, ...rest } = obj;

// // let {name, age, city} = obj;

// console.log(name); // Majid
// console.log(rest); // { age: 22, city: "Karachi" }



// spread Array 
// let arr1 = [1, 2, 3];

// let arr2 = [...arr1];

// console.log(arr2); 



//  Arrays  Merge 

// let a = [1, 2];
// let b = [3, 4];

// let result = [...a, ...b];

// console.log(result);
// [1, 2, 3, 4]


