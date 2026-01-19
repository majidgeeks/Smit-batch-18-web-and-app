// while loop

//  var i = 0;
//  while (i <= 3) {
// //   alert(i);
// document.write(i)
//   i++;
//  }

// do while

// var i = 5;
// do {
//   alert(i);
//   i++;
// } while (i <= 4);

function submit() {
  var studentArr = JSON.parse(localStorage.getItem("stdData")) || [];
  var name1 = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var roll_num = document.getElementById("rollNum").value;

  var student = {
    stdName: name1,
    phone: phone,
    email: email,
    roll_num: roll_num,
  };

  studentArr.push(student);
  console.log("studentArr", studentArr);

  var finalData = JSON.stringify(studentArr);
  localStorage.setItem("stdData", finalData);
}

function getData() {
  var get = localStorage.getItem("stdData");
//   console.log('get',get)
  var parseValue = JSON.parse(get);
  console.log("parseValue", parseValue);
  var stored = parseValue.map((data, index) => {
     
  document.write(data.stdName + '<br>') 
  document.write(data.phone  + '<br>');
  document.write(data.email  + '<br>');
  document.write(data.roll_num  + '<br>');


  })

//   var { stdName, phone, email, roll_num } = parseValue;

//   console.log(stdName);
//   console.log(phone);
//   console.log(email);
//   console.log(roll_num);
}
