// var para = document.getElementsByTagName("p");
// console.log('para',para)
// var first = para[0].innerHTML;
// console.log('first',first)

// // for(let i = 0; i < para.length; i++){
// //     console.log('para[i]',para[i].className)
// // }


// let div = document.getElementById('div');
// let para = div.getElementsByTagName('p');
// console.log(para)

// console.log(document.childNodes)

let parent = document.childNodes;
console.log(parent)
let child1 = parent[1].childNodes;
console.log('child1',child1)
let body1 = child1[2].childNodes;
console.log(body1)