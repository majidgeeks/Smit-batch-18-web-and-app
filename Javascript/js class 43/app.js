// function greet(name) {
//   console.log("Hello " + name);
// }

// function processUser(callback) {
//   let username = "Majid";
//   callback(username);
// }

// processUser(greet);

// let callTest = (name) => {
//    console.log(`Hello ${name}`);
// }

// let testOther = (callback) => {
//    let username = "Saylani";
//    callback(username)
// };

// testOther(callTest);

// call bind and apply

// let person = {
//   name: "Majid",
//   greet: function() {
//     console.log("Hello " + this.name);
//   }
// };

// person.greet();

// let person1 = {
//   name: "Ali",
// };

// let person2 = {
//   name: "Ahmed",
// };

// function greet() {
//   console.log("Hello " + this.name);
// }

// greet();
// greet.call(person1)
// greet.call(person2)


// let person1 = {
//   name: "Ali"
// };

// function introduce(age, city) {
//   console.log(this.name + " is " + age + " from " + city);
// }

// // introduce.apply();
// introduce.apply(person1, [40, 'karachi']);

// closure

// let num1 = 10;

// let test = () => {
//     let name = 'karachi';
//     console.log('num1',num1);
    
//     let testchild1 = () => {
//       console.log('name',name);
//     }

//     testchild1();
// };

// test()


// promises


// new Promise((resolve, reject) => {
//    let user = false;
//    if(user){
//     resolve('kam ho gaya');
//    }else{
//     reject('kam nahi hua');
//    }
// })
// .then((response) => console.log(response)
// ).catch((error) => console.log('error',error))


// let promiseOne = new Promise((resolve) => {
//    setTimeout(() => {
//       console.log('Apka kam ho gaya');
//       resolve();
//    }, 0)
// });

// promiseOne.then((data) => data)
// .catch((bhand) => console.log(bhand)
//  ).finally(() => console.log('final chala'))


try{

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => console.log(data)
)
.catch((err) => console.log(err))
}catch(error){
  console.log('error',error);
}