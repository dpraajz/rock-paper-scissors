function getComputerChoice(){
    let myArray=['rock', 'paper','scissors'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    const str1 = playerSelection.toUpperCase();
    const str2 = computerSelection.toUpperCase();

    if(str1 == str2){
        return ("Draw");
    }
    else if(str1 == "ROCK" && str2 == "PAPER"){
        return (`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
    else if(str1 == "ROCK" && str2 == "SCISSORS"){
        return (`You Win! ${playerSelection} beats ${computerSelection}`)
    }
    else if(str1 == "PAPER" && str2 == "ROCK"){
        return (`You Win! ${playerSelection} beats ${computerSelection}`)
    }
    else if(str1 == "PAPER" && str2 == "SCISSORS"){
        return (`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
    else if(str1 == "SCISSORS" && str2 == "ROCK"){
        return (`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
    else if(str1 == "SCISSORS" && str2 == "PAPER"){
        return (`You Win! ${playerSelection} beats ${computerSelection}`)
    }
    else{
        return ("Enter values: 'Rock', 'Paper', 'Scissors' only");
    }
  }

function game(){
    const playerSelection = document.querySelectorAll('.btn');
    const result = document.querySelector('.result');

    let playerWinCount = 0;
    let computerWinCount = 0;

    playerSelection.forEach(function (btn){
        btn.addEventListener('click', function (e){
            const btnValue = e.currentTarget.classList;
            const computerSelection = getComputerChoice();
            if(btnValue.contains('rock')){
                //console.log(playRound('rock', computerSelection));
                result.textContent = playRound('rock', computerSelection);
                if(computerSelection == 'paper') computerWinCount++;
                if(computerSelection == 'scissors') playerWinCount++;
            }
            if(btnValue.contains('paper')){
                // console.log(playRound('paper', computerSelection));
                result.textContent = playRound('paper', computerSelection);
                if(computerSelection == 'rock') playerWinCount++;
                if(computerSelection == 'scissors') computerWinCount++;
            }
            if(btnValue.contains('scissors')){
                // console.log(playRound('scissors', computerSelection));
                result.textContent = playRound('scissors',computerSelection);
                if(computerSelection == 'rock') computerWinCount++;
                if(computerSelection == 'paper') playerWinCount++;
            }
            if(playerWinCount == 5){
                result.textContent = `You are winner with count ${playerWinCount}`;
                playerWinCount = 0;
                computerWinCount = 0;
            }
            if(computerWinCount == 5){
                result.textContent = `Computer is winner with count ${computerWinCount}`;
                playerWinCount = 0;
                computerWinCount = 0;
            }
        });
    });
}

game();