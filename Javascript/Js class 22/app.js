var input = document.getElementById('inp');

function calculate(e) {
    console.log(e);

     input.value += e;


}

function equal() {
    input.value = eval(input.value);
}


function cl() {
    console.log('func')
    input.value = "";
}




