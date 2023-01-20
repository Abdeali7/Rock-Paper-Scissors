let playerCount = 0;
let computerCount = 0;

function getComputerChoice() {
    const rps = ['rock', 'paper', 'scissor'];
    let computerSelection = rps[Math.floor(Math.random() * rps.length)];
    return computerSelection;
}

function play(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerCount+=1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        computerCount+=1;
    } else if (playerSelection === 'scissor' && computerSelection === 'rock'){
        computerCount+=1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        playerCount+=1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerCount+=1;
    } else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        playerCount+=1;
    } else {
        playerCount+=0;
        computerCount+=0;
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt('Choose One Option : rock, paper, scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        play(playerSelection, computerSelection);
    }
    if(playerCount > computerCount){
        return 'You Win :(';
    } else if (playerCount < computerCount){
        return 'You Loose :(';
    } else {
        return 'Its A Tie :/';
    }
}


console.log(game());