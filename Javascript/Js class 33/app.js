// let parent = document.childNodes[1].childNodes[2].childNodes;
// console.log('parent',parent);


// let div = document.getElementById('ny');
// let p = div.childNodes[2];
// // p.innerHTML = 'Hello my dreams'
// console.log(p.nodeType)


// let div = document.getElementById('humpty').childNodes;
// let pCounter = 0;
// for(let i = 0; i < div.length; i++){
//     if(div[i].nodeType === 1){
//         pCounter++;
//     }
//     if(pCounter === 2){
//         div[i].innerHTML = 'Hello my dreams'
//     }
// }


// let div = document.getElementById('humpty');
// console.log(div.firstChild);
// console.log(div.lastChild);
// console.log(div.nextElementSibling)
// console.log(div.nextSibling)
// console.log(div.previousElementSibling)
// console.log(div.parentNode.parentNode)


let div = document.getElementById('humpty');
let child = div.firstChild;
console.log('child',child);

// console.log('child.nodeName',child.nodeName);
console.log('child.nodeValue',child.nodeValue);







