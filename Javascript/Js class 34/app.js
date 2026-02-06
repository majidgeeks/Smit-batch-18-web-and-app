// let div = document.getElementById('parent');
// // let hasAtt = div.hasAttribute("onclick");
// // console.log(hasAtt)

// // let getAtt = div.getAttribute('class');
// // console.log(getAtt);

// let attList = div.attributes;
// console.log(attList[0].nodeValue);

//  var parentDiv = document.getElementById("div1");
//  var newParagraph = document.createElement("p").innerHTML = 'HRLLO';
//  var t = document.createTextNode("Hello world!");
//  newParagraph.appendChild(t);
//  let paragraph1 = parentDiv.firstChild;
//  parentDiv.insertBefore(newParagraph, paragraph1);


 var parentDiv = document.getElementById("div1");
 let childList = parentDiv.childNodes;
 
 for(let i = 0; i < childList.length; i++){
    if(childList[i].nodeType == 3){
        console.log(childList[i])
        childList[i].remove()
    }
 }
 
 console.log('childList',childList)


