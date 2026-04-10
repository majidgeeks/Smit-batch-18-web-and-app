// ternary operator

// let user = true;

// user ? alert('loged in') : alert('not');

// user && alert('yes');

// !user ? alert('not') : alert('yes')

// let num = 1; // true
// let num = 0; // false
// let num = undefined // false
// let num = null // false
// let str = '' // false
// let str = ' ' // true


// object 

// let obj = {
//     name : 'karachi',
// };

// obj.foodStreet = 'Burns Road'

// console.log(obj);

// document.write(obj)

// let newP = obj.foodStreet
// document.write(obj.foodStreet);

// let arr1 = [
    
//     {
//         name: 'smit',
//         work : 'welfare',
//         area : ['bahadurabad', 'gulshan'],
//     },
//     {
//         name: 'smit2',
//         work : 'welfare2'
//     }
// ];

// let des = arr1.map((data, index) => {
//   return data.name    
// });

// console.log(des);

let arr2 = [
    {
        name : 'Honda',
        modal : 2022,



        
    },
    {
        name : 'toyota',
        modal : 2021,
    }
];

let dest = arr2.filter((data) => data.name === 'Honda' );

console.log(dest);



