let quizData = [
    {qusetion : "what is your first job" , 
    A : "front End", 
    B : "Back end" ,
    C : "UI UX designer" ,
    correct : "A"
} ,   
{qusetion : "what is Math on persian" , 
    A : "Fizik", 
    B : "Riazi" ,
    C : "Dini" ,
    correct : "B"
} ,
{qusetion : "how much money need for learn JS" , 
    A : "100$", 
    B : "10000$" ,
    C : "You can learn it free on youtube" ,
    correct : "C"
} ,
];

let quizInfo = {
    title : "High school Test" ,
    qusetionNumber : quizData.length ,
    answaredQeustions : 0 ,
    correctAnsware : 0 ,
    falseAsware : 0 
};
let screene = document.querySelector('#all')
let finish = document.querySelector('.finish')
let progresse =document.querySelector('.pro')
let quizContainer = document.querySelector(`.quiz-container`)
let quizTitle = document.querySelector('#quizTitle');
quizTitle.innerHTML = quizInfo.title ;
let backdrop = document.querySelector('.backdrop')
let qusetionNumberBox = document.querySelector('#QNB') ;
qusetionNumberBox.innerHTML = `of ${quizInfo.qusetionNumber}` ;
let modal = document.querySelector('.modal')
let answerdNumberBox = document.querySelector('#ANB') ;
answerdNumberBox.innerHTML = `#${quizInfo.answaredQeustions}`
let baseBackground = document.querySelector('.bgc')
let correct = document.querySelector('#correct') ;
correct.innerHTML =  quizInfo.correctAnsware ; 
let modalWrapper = document.getElementById('modalWrapper')
let falseAnsware = document.querySelector('#false') ;
falseAnsware.innerHTML =  quizInfo.falseAsware ;

let answareSelectA = document.querySelector('.answareSelectA') ;
let answareSelectB = document.querySelector('.answareSelectB') ;
let answareSelectC = document.querySelector('.answareSelectC') ;
let selectedAnswers = document.querySelectorAll('.selectedAnswers') ;

let curNum = 0;



let width =34 ;
selectedAnswers.forEach((items)=>{
    items.addEventListener('click' , (e)=>{
        progresse.style.width = `${width}%` ;
        width = width + 34
        if(answerdNumberBox.innerHTML == "#0" ||answerdNumberBox.innerHTML == "#1" || answerdNumberBox.innerHTML == "#2"){
        quizInfo.answaredQeustions++;
        answerdNumberBox.innerHTML = `#${quizInfo.answaredQeustions}`
    }
        if(e.target.textContent == quizData[curNum].correct) {
            correct.innerHTML =  ++quizInfo.correctAnsware ; 
            progresse.style.background = `#6ac259` ;
        }else{
            falseAnsware.innerHTML =  ++quizInfo.falseAsware ;
            progresse.style.background = `#f05228` ;
        }
    })
})

selectedAnswers.forEach((item)=>{
    item.addEventListener('click' , ()=>{
        curNum++
        if(curNum<quizData.length){laodQuiz()}
        else{quizContainer.style.height = `680px` ,
        finish.style.display="flex";
    }  
})
})

laodQuiz()
function laodQuiz(){
    let curentQuestion = quizData[curNum];
    let questionText = document.querySelector('#qText') ;
    questionText.textContent = curentQuestion.qusetion;
    let answareA = document.querySelector('.aa') ;
    answareA.textContent = curentQuestion.A ;
    let answareB = document.querySelector('.ab') ;
    answareB.textContent = curentQuestion.B ;
    let answareC = document.querySelector('.ac') ;
    answareC.textContent = curentQuestion.C ;
}

finish.addEventListener('click' , ()=> {
    backdrop.style.opacity = '0' ;
    baseBackground.style.background = '#CEC9F2' ;
    modal.style.zIndex="1";
    modal.style.opacity="1";
    let score = document.querySelector('.scored')
    score.textContent = `You get ${correct.innerHTML}/ ${quizData.length}`
    let star1 = document.querySelector('.star1')
    let star2 =document.querySelector('.star2')
    let star3 =document.querySelector('.star3')
    stars()
    function stars(){
        (correct.innerHTML == quizData.length) ? [ star1.style.color ="#FCD34D" , star2.style.color ="#FCD34D" ,star3.style.color ="#FCD34D" ]: 
        (correct.innerHTML > quizData.length/2 ) ? [ star1.style.color ="#FCD34D" , star2.style.color ="#FCD34D"] :
        (correct.innerHTML < quizData.length/2 && correct.innerHTML > 0) ? star1.style.color ="#FCD34D" :[ star1.style.color ="white" , star2.style.color ="white" ,star3.style.color ="white" ]
    }
    let tryAgainBtn = document.querySelector('.retry') ;
    tryAgainBtn.addEventListener('click' , ()=>{
        location.reload();
    })
})