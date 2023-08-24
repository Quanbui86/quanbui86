let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.ceil(Math.random() * 9);
const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  /*
  userG = secretNumber - userGuess;
  compG = secretNumber - computerGuess;
  if ((userG >= 0 && compG >= 0 && userG <= compG)
   || (userG < 0 && compG < 0 && userG*-1 <= compG*-1)
   || (userG < 0 && compG >= 0 && userG*-1 <= compG)
   || (userG >= 0 && compG < 0 && userG <= compG*-1)) {
    console.log(secretNumber); //For testing purpose - delete later
    console.log(userG); //For testing purpose - delete later
    console.log(compG); //For testing purpose - delete later
    return true;
  } else {
    console.log(secretNumber); //For testing purpose - delete later
    console.log(userG); //For testing purpose - delete later
    console.log(compG); //For testing purpose - delete later
    return false;
  };
  */
  //You can use Math.abs to get absolute number before compare as below.
  userG = Math.abs(secretNumber - userGuess);
  compG = Math.abs(secretNumber - computerGuess);
  return userG <= compG ? true : false ;
};
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore +=1;
  } else {
    computerScore +=1;
    };
};
const advanceRound = () => currentRoundNumber +=1;
console.log(compareGuesses(4,5,generateTarget())); //For testing purpose - delete later