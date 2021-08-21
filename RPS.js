const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

main();

function main() {
    rock_div.addEventListener('click', function() {
    game("rock")
    })

    paper_div.addEventListener('click', function() {
        game("paper")
    })

    scissor_div.addEventListener('click', function() {
        game("scissor")
    })
}
// function computerPlay() {
//     let RPS = ["Rock", "Paper", "Scissors"]
//     let randomRPS = RPS[Math.floor(Math.random() * RPS.length)];
//     return randomRPS;
// }
// // console.log(computerPlay())

// function round(playerSelection, computerSelection) {
//     if (playerSelection == )
// }