//variables 
let homeScore=document.getElementById('home-score');
let guestScore=document.getElementById('guest-score');
let homeResult = 0;
let guestResult = 0;

let newGameBtn=document.getElementById('newGame');
let scoreValue=document.getElementById('scoreValue');
let playerValue=document.getElementById('playerValue');


homeScore.textContent=homeResult;
guestScore.textContent=guestResult;

//functions

//home
function addOne_for_Home(){
    homeResult+=1;
    homeScore.textContent=homeResult;
    checkTheBest();
}
function addTow_for_Home(){
    homeResult+=2;
    homeScore.textContent=homeResult;
    checkTheBest();
}
function addThree_for_Home(){
    homeResult+=3;
    homeScore.textContent=homeResult;
    checkTheBest();
}
//guest
function addOne_for_Guest(){
    guestResult+=1;
    guestScore.textContent=guestResult;
    checkTheBest();
}
function addTow_for_Guest(){
    guestResult+=2;
    guestScore.textContent=guestResult;
    checkTheBest();
}
function addThree_for_Guest(){
    guestResult+=3;
    guestScore.textContent=guestResult;
    checkTheBest();
}
//result
function newGame(){
    homeResult = 0;
    guestResult = 0;
    homeScore.textContent=homeResult;
    guestScore.textContent=guestResult;
    checkTheBest();
}
function checkTheBest(){
    if( homeResult == guestResult){
        scoreValue.textContent=0;
        playerValue.textContent='Equals';

    }else if( homeResult > guestResult){

        scoreValue.textContent=homeResult;
        playerValue.textContent='HOME';

    }else if( homeResult < guestResult){

        scoreValue.textContent=guestResult;
        playerValue.textContent='GUEST';
    }
}
checkTheBest();
