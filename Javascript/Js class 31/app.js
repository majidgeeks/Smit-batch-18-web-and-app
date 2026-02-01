// let test = (this) => {
//     console.log('testing')
//     t

// }

// function test(e) {
//     e.style.color = 'white';
//     e.style.backgroundColor = 'blue';
// }

// function change() {
//     let inp = document.getElementById('inp');
//     inp.style.backgroundColor = 'blue';
//     inp.style.color = 'white';
// }

// function blu() {
//     let inp = document.getElementById('inp');
//     inp.style.backgroundColor = 'black';
//     inp.style.color = 'white';
// }

let handleSubmit = (e) => {
  console.log(e)
  e.preventDefault();  
  console.log('e.email',e.target.email.value)
  let inp = document.getElementById("inp")
  console.log('inp',inp.value)
};


// function submit(e) {
//     console.log(e.email)
// }


//   function fillCity() {    
// var cityName;
// var zipEntered = document.getElementById("zip").value;
// switch (zipEntered) {
// case "123" :
// cityName = "Karachi";
// break;
// case "124" :
// cityName = "Hyderabad";
// break;
// case "125" :     
// cityName = "Multan";
//    }
//    document.getElementById("city").value = cityName;
//  }