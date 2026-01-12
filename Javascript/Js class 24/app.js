// setInterval

// var inter = setInterval(function() {
//     document.write('Hello interval'+'<br>')
// }, 1000);

// // clearInterval(inter);


// setTimeout(function() {
//     document.write('Hello')
    
// }, 5000)





// stop watch

// var mili = 0;
// var second = 0;
// var minute = 0;
// var hour = 0;

// var miliSecond = document.getElementById('miliSeconds');
// var seconds = document.getElementById('seconds');
// var minutes = document.getElementById('minutes');
// var hours = document.getElementById('hours');

// var inter;

// function start() {
//     inter = setInterval(function() {
//        mili++;
//        miliSecond.innerHTML = mili;
//        if(mili >= 100){
//         second++;
//         seconds.innerHTML = second;
//         mili = 0;
//        } 
//        if(second >= 60){
//         minute++;
//         minutes.innerHTML = minute;
//         second = 0;
//        }
//        if(minute >= 60){
//         hour++;
//         hours.innerHTML = hour;
//         minute = 0
//        }
//     }, 10)
// }

// // start()

// function stop() {
//     clearInterval(inter)
// }

// function reset() {
//  miliSecond.innerHTML = 0;
//  seconds.innerHTML = 0;
//  minutes.innerHTML = 0;
//  hours.innerHTML = 0;

//  mili = 0;
//  second = 0;
//  minute = 0;
//  hour = 0;

//  clearInterval(inter);
// }



// date and time


var date = new Date();
var gettingDate = date.getDate()
document.write(gettingDate + '<br>')

var gettingDay = date.getDay();
document.write(gettingDay);

var gettingHours = date.getHours()
document.write(gettingHours);

// var str = date.toString();
// var copyDate = str.slice(0,15)

// document.write(str)

// console.log(typeof str)