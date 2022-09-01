// console.log("Hello, World!");

function getComputerChoice(){
    let myArray=['Rock', 'Paper','Scissors'];
    return myArray[Math.floor(Math.random()*myArray.length)];
}

// getComputerChoice();

function playRound(playerSelection, computerSelection) {
    // your code here!
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

    // return (`${str1} ${str2}`);
  }
   
// const playerSelection = prompt("Enter either Rock or Paper or Scissors", "Rock");
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game(){
    for(let i=0; i<5; i++){
        const playerSelection = prompt("Enter either Rock or Paper or Scissors", "Rock");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();