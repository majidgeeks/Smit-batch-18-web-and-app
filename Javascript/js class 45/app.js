
// const car = {
//   color: "red",
//   model: "Toyota",
//   start: function() {
//     console.log("Car started!");
//   }
// };
// console.log(car.color);
// car.start();

// const car = {
//     color : 'red',
//     model : 2025,
//     start : () => {
//         console.log('gaari start ho gai');
//     },
// };

// car.start()

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function() {
//     console.log("Hi, I'm " + this.name);
//   };
// }

// Person.prototype.sayAge = function(){
//     console.log(this.age);
// };

// const person1 = new Person("Ali", 20);
// person1.sayAge()
// const person2 = new Person("Sara", 22);


class Modal{
    constructor(name, age){
      this.name = name
      this.age = age
    };

    greet(){
        console.log('Hello'+ this.name);
    };
 
    setName(newName){
      this.name = newName
    }

    
};

let person1 = new Modal('smit', 25)
person1.greet();
// console.log(person1.age())
person1.setName('ssmi')
person1.greet();