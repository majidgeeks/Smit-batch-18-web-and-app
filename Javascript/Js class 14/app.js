var cities = ['Karachi', 'Islamabad', 'Lahore', 'Multan', 'Murree', 'Swat'];

var userInput = prompt('enter city name');
var isValid = false;

for(var i = 0; i < cities.length; i++){
 if(userInput == cities[i]){ 
    alert('you are eligible');
    isValid = true;
    break;
}
};

if(isValid == false){
    alert('you are not eligible');
    isValid = false;
}



console.log('isValid',isValid)