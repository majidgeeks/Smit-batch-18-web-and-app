// new Promise((resolve, reject) => {
//     let car = true;
//     if(car){
//         console.log('kam ho gaya');
//         resolve();
//     }else{
//         console.log('kam nahi hua ');
//         reject();
//     }
// }).then((res) => res )
// .catch((err) => err )
// .finally(() => console.log('final chala'))



// new Promise((resolve, reject) => {
//     let user = false;
//     user ? resolve('you can go') : reject('you cant');
// })
// .then((res) => console.log('res', res)
//  )
// .catch((err) => console.log('err',err)
// )
// .finally(() => console.log('final')
// )


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// let data = 

// let dataU = async () => {
//     let myData = await fetch('https://jsonplaceholder.typicode.com/todos');
//     let parsed = await myData.json()
//     console.log(parsed);
    
// }

// dataU()