// event loop

// setTimeout
// async await
// Promise
// web apis 


// let user = 'majid';

// setTimeout(() => {
//     console.log('set time out');
// },0);

// console.log('user',user);

// new Promise((resolve, reject) => {
//    console.log('Promise chala');
//    resolve();
// });


            // .then(res=>res.json())            
            // .then(json=>console.log(json))

let testing = async () => {
   let req = await fetch('https://fakestoreapi.com/products')
   let data = await req.json();
   console.log(data);
   
}   

testing()
