let playerScore = 0;
let computerScore = 0;
function play(playerChoice){
    choice = ['rock', 'paper', 'scissors'];
    let computerChoice = choice[Math.floor(Math.random()*choice.length)];

    let result = '';

    // Check if it's tie
    if(playerChoice === computerChoice){
        result = "It's a Tie!";
    }else {
        // checks for player win
        if (playerChoice === 'rock' && computerChoice === 'scissors'){
            result = 'You win!.';
            playerScore++;
        }else if (playerChoice === 'paper' && computerChoice === 'rock'){
            result = 'You win!.';
            playerScore++;
        }else if (playerChoice === 'scissors' && computerChoice === 'paper'){
            result = 'You win!';
            playerScore++;
        }else {
            result = 'You lose!';
            computerScore++;
        }
        document.getElementById('result').innerText = `You choose ${playerChoice}. Computer choose ${computerChoice}.${result}`;
        document.getElementById('playerScore').innerText = playerScore;
        document.getElementById('computerScore').innerText = computerScore;

    }
}