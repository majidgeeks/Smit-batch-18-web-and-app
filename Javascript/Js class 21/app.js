
//  var plan1 = {
//    name:   "Basic",
//    price: 3.99,
//    space: 100,
//    transfer: 1000,
//    pages: 10
//  };


//  function Plan(name, price, space, transfer, pages) {
//     this.name = name,
//     this.price = price,
//     this.space = space,
//     this.transfer = transfer,
//     this.pages = pages
//  };

//  var plan1 = new Plan("Basic", 3.99, 100, 1000, 10)

// //  document.write(plan1)

//  console.log(plan1);

//  var plan2 = new Plan('professional', 5.99, 500, 5000, 50 )

//  console.log('plan2',plan2.name, plan2.pages)

//  var {name, price, space, transfer, pages} = plan1;

// //  console.log(ab)

// document.write(name)


 
//  var plan1 = {
//    name:   "Basic",
//    price: 3.99,
//    space: 100,
//    transfer: 1000,
//    pages: 10
//  };

//  document.write(plan1.name +'<br>'+ plan1.price)
// //  document.write(plan1.price)

var img = document.getElementById('img');
// console.log('img',img)
// var source = img.src; 

var img1 = './images/dice 1.webp';
var img2 = './images/dice 2.webp';
var img3 = './images/dice 3.webp';
var img4 = './images/dice 4.webp';
var img5 = './images/dice 5.webp';
var img6 = './images/dice 6.webp';


function dice() {
   var num = Math.floor(Math.random() * 6) + 1 ;
   console.log(num)

   if(num === 1){
      img.src = './images/dice 1.webp' ;
   }else if(num === 2){
      img.src = './images/dice 2.webp'
   }
   else if(num === 3){
      img.src = './images/dice 3.webp'
   }
   else if(num === 4){
      img.src = './images/dice 4.webp'
   }
   else if(num === 5){
      img.src = './images/dice 5.webp'
   }
   else{
      img.src = './images/dice 6.webp'
   }
}   



// dice();