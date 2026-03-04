// string
// let myName : string = 'majid';
export {};
// myName = 'hussain';
// number
// let num1 : number = 123;
// boolean 
// let isUser : boolean = true;
// isUser = ''
// Arrays in typescript
// let arr1 : string[] = [];
// arr1.push('majid');
// arr1.push('smit');
// console.log(arr1);
// let arr2 : (string | number | boolean)[] = [];
// arr2.push('smit');
// arr2.push(123);
// arr2.push(false);
// console.log(arr2);
// let arr2 : (any)[] = [];
// let marks: Array<number | string> = [10, 20, 30];
// function
// function test(a : string, b : string ) {
//     console.log(a, b);  
// }
// test('majid', 'smit')
// function test(a : number, b : number ) {
//     console.log(a + b);  
//     return a + b;
// }
// test(12, 10);
// function test2(a? : string, b? : string, c? : number) {
//     console.log(a, b, c);
// }
// test2()
// function test(a : string, b? : string) {
//     console.log(a, b)
// };
// test('majid')
// Objects & Type Alias
// type UserObj = {
//     name : string;
//     email : string;
//     password? : string;
//     isLogedin? : boolean;
// };
// let user : UserObj = {
//   name : 'smit',
//   email: 'smit@',
//   password: '12345',
//   isLogedin : false
// };
// let user2 : UserObj = {
//   name : 'majid',
//   email : 'majid@gmail.com'
// }
//  type UserObj = {
//     name : string;
//     email : string;
//     password? : string;
//     isLogedin? : boolean;
// };
// type UserObj2 = UserObj & {
//    age : number;   
// }
// let student : UserObj2 = {
//    name: 'smit',
//    email : 'smit@gmail.com',
// //    password: '12345',
//    age : 36
// }
// let student: { name: string; age: number } = {
//     name: "Ali",
//     age: 20
// };
// interface UserForm {
//    name : string;
//    age : number;
// }
// interface UserForm {
//     isLoged : boolean;
//     password : string;
// }
// let student : UserForm = {
// }
//# sourceMappingURL=app.js.map