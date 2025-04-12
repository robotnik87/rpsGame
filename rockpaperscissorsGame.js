function getChoice() {

    let choice = ['rock','paper','scissors'];
    //will return random option

    //selects random number between 0,1,2
    let index = Math.floor(Math.random()*3);
    //use as index for rock,paper sicossors index position

    //return back to variable caller
    return choice[index];

}
var playerScore = 0;
var cpuScore = 0;

function playGame() {



   
    let counter = 0;

    while (counter < 5) {

        let playerChoice = getChoice();
        let cpuChoice = getChoice();

        playRound(playerChoice,cpuChoice);
        counter +=1;
        console.log('--------------')

    }

    if (playerScore == cpuScore) {

        console.log('Game Tie')
    } else if (playerScore > cpuScore) {
        console.log('Player wins the game')
    } else {
        console.log('cpu wins')
    }

}

function playRound(humanInput,aiInput) {

    console.log('player choice:',humanInput)
    console.log('CPU choice:',aiInput)


    //DRAW GAME LOGIC
    if (humanInput == aiInput) {

        console.log('Draw');

        //IF HUMAN WINS
     } else if ((humanInput == 'rock' && aiInput == "scissors") ||
               (humanInput == 'paper' && aiInput == 'rock') ||
                (humanInput == 'scissors' && aiInput == 'paper')) {

                    playerScore += 1;
                    console.log('player wins round');
                    //console.log(humanInput,'beats',aiInput);
                    console.log('player score:',playerScore)

                } else {

                    cpuScore += 1;
                    console.log('Cpu wins the round')
                    //console.log(aiInput,'beats',humanInput);
                    console.log('cpu score:',cpuScore)
                }

}


playGame();



