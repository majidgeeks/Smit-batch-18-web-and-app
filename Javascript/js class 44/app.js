// let response = fetch('https://jsonplaceholder.typicode.com/todos');

// response.then((data) => data.json()).then((data) => console.log(data)
//  )
// .catch((err) => console.log(err)
//  ).finally(() => console.log('finally chala')
//  )

let pic = document.getElementById('pic');

let baseUrl = 'https://jsonplaceholder.typicode.com';
let endPoint = {
    posts : '/posts',
    todos : '/todos',
    comments : '/comments',
    photos : '/photos',
};


let test = async () => {

let response = await fetch(`${baseUrl}${endPoint.photos}`);

let data = await response.json();

console.log(data)


}

test()