let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");



function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}



//classList is a method that exists in the DOM and gives you an array of all the specifc elements of said array.

function win(userChoice, computerChoice) {
    if (userScore === 7){
        return gameOverWin();
    } else {
        userScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        // const smallUserWord = "you".fontsize(3).sup();
        // const smallComputerWord = "AI".fontsize(3).sup();
        result_p.innerHTML = `${userChoice} beats ${computerChoice}...a point for humanity!`;
        document.getElementById(userChoice).classList.add('blue-glow');
        setTimeout(() => document.getElementById(userChoice).classList.remove('blue-glow'), 400)
    }
}

function lose(userChoice, computerChoice) {
    if (userScore === 7){
        return gameOverLose();
    } else{
        computerScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        // const smallUserWord = "you".fontsize(3).sup();
        // const smallComputerWord = "AI".fontsize(3).sup();
        result_p.innerHTML = `${userChoice} loses to ${computerChoice}...nooo a point for the AI!`
        document.getElementById(userChoice).classList.add('red-glow');
        setTimeout(() =>  document.getElementById(userChoice).classList.remove('red-glow'), 400)
    }
}

function draw(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // const smallUserWord = "you".fontsize(3).sup();
    // const smallComputerWord = "AI".fontsize(3).sup();
    result_p.innerHTML = `You picked ${userChoice} and the AI picked ${computerChoice}...try again!`
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 400)
}

function gameOverWin(){
    const winningColor = "You saved humanity...try again if you to risk it all again!".fontcolor("blue");
    result_p.innerHTML = `${winningColor}`;
}

function gameOverLose(){
    const losingColor = "Unfortuately you have lost and humanity is now doomed...press the refresh button to go back in time, goodbye".fontcolor("red");
    result_p.innerHTML = `${losingColor}`;

}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rockscissor" :
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, computerChoice);
            break
        case "rockrock" :
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;
    }
}

function declareWinner(userChoice, computerChoice){
    if (userScore === 7){
        result_p.innerHTML = `YOU DID IT!!`
    }
    
    if (computerScore === 7){
        result_p.innerHTML = `YOU FAILED US!!`
    }
}

function main() {
    rock_div.addEventListener('click', () => game("rock"));

    paper_div.addEventListener('click', () => game("paper"));

    scissor_div.addEventListener('click', () => game("scissor"));
}

main();

