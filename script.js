let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return [[0,0],"It's a tie!"];
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return [[0,1],"You lose! Paper covers rock."];
        } else if (computerSelection == "scissors") {
            return [[1,0],"You win! Rock smashes scissors."];
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return [[1,0],"You win! Paper covers rock."];
        } else if (computerSelection == "scissors") {
            return [[0,1],"You lose! Scissors cut paper."];
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return [[1,0],"You win! Scissors cut paper."];
        } else if (computerSelection == "rock") {
            return [[0,1],"You lose! Rock smashes scissors."];
        }
    } else {
        return [[0,0],"Uh-oh. Looks like something's not right here."];
    }
}

function computerPlay() {
    randInt = Math.floor(Math.random()*3)
    let computerMove;
    if (randInt == 1){
        computerMove = "rock";
    } else if (randInt == 2){
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }
    return computerMove;
}

function game(playerMove) {
    let computerMove = computerPlay();
    let [result, output] = playRound(playerMove,computerMove);
    playerScore += result[0];
    computerScore += result[1];
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    if (playerScore >= 5 || computerScore >= 5){
        document.getElementById('play-div').classList.add('invisible');
        
        if (playerScore > computerScore){
            document.getElementById('result-div').innerText = "YOU WIN";
        }else{
            document.getElementById('result-div').innerText = "YOU LOSE";
        }
        document.getElementById('result-div').classList.remove('invisible');
    }
    console.log(output);
}



// playButton = document.getElementById("play-button");
