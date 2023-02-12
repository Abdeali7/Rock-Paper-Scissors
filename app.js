
let playerCount = 0; // variable to keep track of player's score
let computerCount = 0; // variable to keep track of computer's score
let imgs = document.querySelectorAll("img[data-key]");
let player_points = document.querySelector(".player_points");
let computer_points = document.querySelector(".computer_points");
let gameover = document.querySelector("#gameover");
let gamestart = document.querySelector(".gamestart");
let gameupdate = document.querySelector(".gameupdate");
let info = document.querySelector(".info p");
let playerSelected = document.querySelector(".player img");
let computerSelected = document.querySelector(".computer img");
let playerImg;
let computerImg;

// use a lookup table to determine the outcome of a round
const outcomes = {
    rock: { rock: 'tie', paper: 'lose', scissor: 'win' },
    paper: { rock: 'win', paper: 'tie', scissor: 'lose' },
    scissor: { rock: 'lose', paper: 'win', scissor: 'tie' },
  };
  
  // function to get random choice for computer
  function getComputerChoice() {
      const rps = ['rock', 'paper', 'scissor'];
      return rps[Math.floor(Math.random() * rps.length)];
  }
  
  for(let img of imgs) {
      img.addEventListener('click', function (e) {
          let playerSelection = e.target.attributes[0].value;
          let computerSelection = getComputerChoice();
          
          playerImg = playerSelection;
          computerImg = computerSelection;
  
          play(playerSelection, computerSelection);
      });
  }
  
  function play(playerSelection, computerSelection){
      let outcome = outcomes[playerSelection][computerSelection];
      if(outcome === 'win'){
          playerCount++;
          player_points.innerText = playerCount;
          info.innerText = 'You Win :)';
          changeImg();
          checkForWinner();
      } else if(outcome === 'lose'){
          computerCount++;
          computer_points.innerText = computerCount;
          info.innerText = 'You Loose :(';
          changeImg();
          checkForWinner();
      } else if(outcome === 'tie'){
          info.innerText = 'Its A Tie :/';
          changeImg();
      }
  }
  
  function changeImg(){
      playerSelected.setAttribute("src", `images/${playerImg}.png`);
      computerSelected.setAttribute("src", `images/${computerImg}.png`);
  }
  
  function checkForWinner(){
      if(playerCount === 5) {
          update('win');
      } else if(computerCount === 5) {
          update('lose');
      }
  }

  function update(result){
    gamestart.style.display = "none";
    gameover.style.display = "block";
    playerCount = 0;
    computerCount = 0;
    player_points.innerText = playerCount;
    computer_points.innerText = computerCount;
    if(result === 'win'){
        gameupdate.innerHTML = 'You Win :) <br> You Stopped Computer To Take Control!';
        startConfetti();
    } else if(result === 'lose'){
        gameupdate.innerHTML = 'You Loose :( <br> Computer Has Taken Control!';
    }
}