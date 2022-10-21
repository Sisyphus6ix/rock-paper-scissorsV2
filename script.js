alert('MACHINES ARE THREATENING TO TAKE OVER THE WORLD...')
alert('UNLESS YOU CAN BEAT THEM IN ROCK, PAPER, SCISSORS. FIRST TO 5 WINS!')
alert('YOU ARE HUMANITIES LAST HOPE.')

// Using variables to store the player and computer score
let playerScore = 0;
let computerScore = 0;

// Creating all the buttons & selecting all the correct divs
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors')
let results = document.querySelector('.results')
let playerScoreboard = document.querySelector('.player-score')
let computerScoreboard = document.querySelector('.computer-score')


// the choices for the computer to choose from
// function for the computer to randomly return either rock, paper, or scissors
const getComputerChoice = () => {
   const choices =['rock', 'paper', 'scissors'];
 
   const decision = choices[Math.floor(Math.random()*choices.length)];
    return decision
}

// Function for updateding the scoreboard after each turn
const scoreboard = (playerScore, computerScore) => {
    playerScoreboard.innerText = `You: ${playerScore}`;
    computerScoreboard.innerText = `Computer: ${computerScore}`;
}

// Function to alert the user if they won or lost
const checkWinner = (playerScore, computerScore) => {
    if (playerScore == 5){
        alert(`Mankind has been saved! You won ${playerScore} to ${computerScore}`)
        location.reload()
    } 
    if (computerScore == 5){
        alert(`Mankind has fallen! Computer won ${computerScore} to ${playerScore}`)
        location.reload()
    }
}

// Function for adding the results of each turn to the history div 
// and appending score of round winner
const playRound = (playerSelection, computerSelection) => {
    const p = document.createElement('p')
    if (playerSelection === computerSelection){
        p.innerText =  `Its a tie! You canceled eachother out with ${playerSelection}`
        results.innerHTML=''
        results.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        p.innerText = 'You won! Rock SMASHS Scissors'
        results.innerHTML=''
        results.appendChild(p)
        playerScore++
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        p.innerText = 'You won! Paper SMOTHERS Rock'
        results.innerHTML=''
        results.appendChild(p)
        playerScore++
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        p.innerText = 'You won! Scissors SLICES Paper'
        results.innerHTML=''
        results.appendChild(p)
        playerScore++
    } else {
        p.innerText = `You lost! ${computerSelection} beats ${playerSelection}`
        results.innerHTML=''
        results.appendChild(p)
        computerScore++
    }
}

// EventListeners for each button that get a random choice from the computer,
// set the players choice to that button that is pressed
// have a round of rock, paper, scissors ran
// and update the scoreboard as well as announce a winner once 5 is reached
rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    scoreboard(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
})
        
paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    scoreboard(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
})
        
scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    scoreboard(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
})