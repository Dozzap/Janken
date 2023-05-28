//player picks makes a choice
//computer makes a choice

//compare choices
//winnter gets a point

const choices = document.querySelector('#choices');
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const score = document.getElementById('#score');
let p = 0;
let c = 0;

choices.addEventListener('click', (e) => {
    if (e.target.id === 'rock') {
        result(1, computerPlay());
    } else if (e.target.id === 'paper') {   
        result(2, computerPlay());
    } else if (e.target.id === 'scissors') {
        result(3, computerPlay());
    }
});


function computerPlay() {
    let computerChoice = Math.floor(Math.random()*3) + 1;
    return computerChoice;
};

function result (a, b){
    if (Math.abs(a-b) == 1){
        if (a > b){
           pScoreUpdate(); 
        }
        else{
            cScoreUpdate();
        }
    }
    else{
        if (a < b){
            pScoreUpdate();
        }
        else{
            cScoreUpdate();
        }
    }
}

function pScoreUpdate(){
    p++;
    pScore.textContent = p;
}

function cScoreUpdate(){
    c++;
    cScore.textContent = c;
}


//follow up 
    //add a way to make the number of rounds possible