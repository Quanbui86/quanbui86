let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.ceil(Math.random() * 9);
const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  userG = secretNumber - userGuess;
  compG = secretNumber - computerGuess;
  if ((userG >= 0 && compG >= 0 && userG <= compG)
   || (userG < 0 && compG < 0 && userG*-1 <= compG*-1)
   || (userG < 0 && compG >= 0 && userG*-1 <= compG)
   || (userG >= 0 && compG < 0 && userG <= compG*-1)) {
    console.log(secretNumber);
    console.log(userG);
    console.log(compG);
    return true;
  } else {
    console.log(secretNumber);
    console.log(userG);
    console.log(compG);
    return false;
  };
  /*
  if (Math.abs(userG) <= Math.abs(compG)) {
        console.log(Math.abs(userG));
        console.log(Math.abs(compG));
        console.log(secretNumber);
        return true;
  }     console.log(Math.abs(userG));
        console.log(Math.abs(compG));
        console.log(secretNumber);
        return false;*/
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore +=1;
  } else {
    computerScore +=1;
    };
};
const advanceRound = () => currentRoundNumber +=1;
console.log(compareGuesses(4,5,generateTarget()));