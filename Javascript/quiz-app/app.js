import { htmlData, cssData, jsData } from "./data.js";


let htmlBtn = document.getElementById('htmlBtn');
let cssBtn = document.getElementById('cssBtn');
let jsBtn = document.getElementById('jsBtn');

let quest = document.getElementById('quest');
let labelA = document.getElementById('labelA');
let labelB= document.getElementById('labelB');
let labelC = document.getElementById('labelC');
let labelD = document.getElementById('labelD');



 htmlBtn?.addEventListener('click', function () {
    localStorage.setItem('selectedQuiz', 'html');
    location.pathname = './quiz.html';
});

cssBtn?.addEventListener('click', function () {
    localStorage.setItem('selectedQuiz', 'css')
    location.pathname = './quiz.html';
});

jsBtn?.addEventListener('click', function () {
    localStorage.setItem('selectedQuiz', 'js')
    location.pathname = './quiz.html';
});

let startQuiz = () => {
   let selectedQuiz = localStorage.getItem('selectedQuiz');
   console.log(selectedQuiz);
};


if(location.pathname.endsWith('quiz.html')){
    startQuiz()
}


