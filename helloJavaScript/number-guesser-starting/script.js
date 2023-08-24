let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  if (userGuess < 0 || userGuess > 9) {
    return alert('number is out of range');
  } else {
      userG = Math.abs(secretNumber - userGuess);
      compG = Math.abs(secretNumber - computerGuess);
      return userG <= compG ? true : false ;
  };
};
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore +=1;
  } else {
    computerScore +=1;
  };
};
const advanceRound = () => currentRoundNumber +=1;
